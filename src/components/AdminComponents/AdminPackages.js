import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState({
    packageName: '',
    price: '',
    state: '',
    theme: '',
    duration: '',
    schedule: [],
    bonusActivities: [],
    images: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPackageId, setCurrentPackageId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [newBonusActivity, setNewBonusActivity] = useState('');
  const navigate = useNavigate();

  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/package/get-packages`);
      setPackages(response.data.packages);
    } catch (err) {
      setError('Failed to fetch packages');
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.role !== 'admin') {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const handleAddBonusActivity = () => {
    if (newBonusActivity.trim()) {
      setFormData(prev => ({
        ...prev,
        bonusActivities: [...prev.bonusActivities, newBonusActivity.trim()]
      }));
      setNewBonusActivity('');
    }
  };

  const handleAddDay = () => {
    setFormData(prev => ({
      ...prev,
      schedule: [...prev.schedule, { day: '', activities: [] }]
    }));
  };

  const handleAddActivity = (dayIndex) => {
    const newActivity = { time: '', title: '', details: '' };
    setFormData(prev => {
      const updatedSchedule = prev.schedule.map((day, idx) => {
        if (idx === dayIndex) {
          return {
            ...day,
            activities: [...day.activities, newActivity]
          };
        }
        return day;
      });
      return { ...prev, schedule: updatedSchedule };
    });
  };

  const handleScheduleDayChange = (dayIndex, value) => {
    setFormData(prev => {
      const updatedSchedule = [...prev.schedule];
      updatedSchedule[dayIndex].day = value;
      return { ...prev, schedule: updatedSchedule };
    });
  };

  const handleActivityChange = (dayIndex, activityIndex, field, value) => {
    setFormData(prev => {
      const updatedSchedule = [...prev.schedule];
      updatedSchedule[dayIndex].activities[activityIndex][field] = value;
      return { ...prev, schedule: updatedSchedule };
    });
  };

  const handleRemoveItem = (arrayName, index) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index)
    }));
  };

  const handleRemoveActivity = (dayIndex, activityIndex) => {
    setFormData(prev => {
      const updatedSchedule = [...prev.schedule];
      updatedSchedule[dayIndex].activities = updatedSchedule[dayIndex].activities.filter(
        (_, idx) => idx !== activityIndex
      );
      return { ...prev, schedule: updatedSchedule };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append basic fields
      formDataToSend.append('packageName', formData.packageName);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('state', formData.state);
      formDataToSend.append('theme', formData.theme);
      formDataToSend.append('duration', formData.duration);
      formDataToSend.append('schedule', JSON.stringify(formData.schedule));
      formDataToSend.append('bonusActivities', JSON.stringify(formData.bonusActivities));

      // Separate existing images and new files
      const existingImages = formData.images.filter(img => typeof img === 'string');
      const newImages = formData.images.filter(img => typeof img !== 'string');

      // Append existing images as JSON array
      formDataToSend.append('existingImages', JSON.stringify(existingImages));

      // Append new image files
      newImages.forEach(file => {
        formDataToSend.append('images', file);
      });

      if (isEditing) {
        formDataToSend.append('_id', currentPackageId);
        const response = await axios.post(`${apiUrl}/api/v1/package/edit-package`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // ... rest of edit logic ...
      } else {
        const response = await axios.post(`${apiUrl}/api/v1/package/create-package`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert(response.data.message);
      }

      setShowModal(false);
      resetForm();
      fetchPackages();
    } catch (err) {
      setError(err.response?.data?.error || 'Operation failed. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      packageName: '',
      price: '',
      state: '',
      theme: '',
      duration: '',
      schedule: [],
      bonusActivities: [],
      images: []
    });
    setIsEditing(false);
    setCurrentPackageId(null);
    setError('');
  };

  const handleEdit = (pkg) => {
    setFormData({
      ...pkg,
      images: pkg.images,
      price: pkg.price.toString()
    });
    setIsEditing(true);
    setCurrentPackageId(pkg._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${apiUrl}/api/v1/package/delete-single-package/${id}`);
      alert(response.data.message);
      fetchPackages();
    } catch (error) {
      setError('Failed to delete package');
      console.log("Error while deleting package", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Packages</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4" onClick={() => setShowModal(true)}>
        Create New Package
      </button>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Package' : 'Create Package'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="packageName"
                value={formData.packageName}
                onChange={handleInputChange}
                placeholder="Package Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onWheel={(e) => e.target.blur()}
                onChange={handleInputChange}
                placeholder="Price"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
                placeholder="Theme"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="Duration"
                className="w-full border p-2 rounded"
              />

              <div className="border p-4 rounded">
                <label className="block mb-2 font-bold">Images</label>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="w-full border p-2 rounded"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.images.map((img, index) => (
                    <img
                      key={index}
                      src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                      alt={`Preview ${index}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              <div className="border p-4 rounded">
                <label className="block mb-2 font-bold">Schedule</label>
                {formData.schedule.map((day, dayIndex) => (
                  <div key={dayIndex} className="mb-4 border p-2 rounded">
                    <input
                      type="text"
                      value={day.day}
                      onChange={(e) => handleScheduleDayChange(dayIndex, e.target.value)}
                      placeholder="Day (e.g., Day 1)"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddActivity(dayIndex)}
                      className="bg-gray-200 px-2 py-1 rounded mb-2"
                    >
                      Add Activity
                    </button>
                    {day.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="ml-2 mb-2 space-y-2">
                        <input
                          type="text"
                          value={activity.time}
                          onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'time', e.target.value)}
                          placeholder="Time"
                          className="w-full border p-1 rounded"
                        />
                        <input
                          type="text"
                          value={activity.title}
                          onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'title', e.target.value)}
                          placeholder="Activity Title"
                          className="w-full border p-1 rounded"
                        />
                        <input
                          type="text"
                          value={activity.details}
                          onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'details', e.target.value)}
                          placeholder="Activity Details"
                          className="w-full border p-1 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveActivity(dayIndex, activityIndex)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                        >
                          Remove Activity
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('schedule', dayIndex)}
                      className="bg-red-500 text-white px-2 py-1 ml-1 rounded text-sm"
                    >
                      Remove Day
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddDay}
                  className="bg-gray-200 px-4 py-2 rounded mt-2"
                >
                  Add Day
                </button>
              </div>

              <div className="border p-4 rounded">
                <label className="block mb-2 font-bold">Bonus Activities</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newBonusActivity}
                    onChange={(e) => setNewBonusActivity(e.target.value)}
                    placeholder="New bonus activity"
                    className="flex-1 border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={handleAddBonusActivity}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {formData.bonusActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span>{activity}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('bonusActivities', index)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded flex-1"
                >
                  {isEditing ? 'Update Package' : 'Create Package'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="bg-gray-200 px-4 py-2 rounded flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              {pkg.images?.[0] && (
                <img src={pkg.images[0]} alt={pkg.packageName} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{pkg.packageName}</h3>
              <p className="text-gray-600">${pkg.price} • {pkg.duration}</p>
              <p className="text-gray-600">State: {pkg.state}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(pkg)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPackages;