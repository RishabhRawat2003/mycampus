import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const initialPackages = [
  {
    id: 1,
    name: 'Adventure Camp',
    price: 299,
    highlights: ['Hiking', 'Rafting', 'Campfire'],
    theme: 'Outdoor',
    duration: '3 Days',
    time: 'Morning',
    schedule: [
      { time: '6:00 AM', content: 'Departure from School' },
      { time: '9:00 AM', content: 'Breakfast at Camp' }
    ],
    bonusActivities: ['Nature Photography', 'Star Gazing'],
    image: 'https://via.placeholder.com/150'
  },
];

const AdminPackages = () => {
  const [packages, setPackages] = useState(initialPackages);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    highlights: [],
    theme: '',
    duration: '',
    time: 'Morning',
    schedule: [],
    bonusActivities: [],
    image: null
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPackageId, setCurrentPackageId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [newBonusActivity, setNewBonusActivity] = useState('');
  const [newSchedule, setNewSchedule] = useState({ time: '', content: '' });
  const navigate = useNavigate();

  const fetchPackages = async () => {
    try {
      // const response = await axios.get('your-api-endpoint/packages');
      // setPackages(response.data);
    } catch (err) {
      setError('Failed to fetch packages');
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleArrayChange = (arrayName, value) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName]], 
    }));
  };

  const handleAddHighlight = () => {
    if (newHighlight) {
      setFormData(prev => ({
        ...prev,
        highlights: [...prev.highlights, newHighlight]
      }));
      setNewHighlight('');
    }
  };

  const handleAddBonusActivity = () => {
    if (newBonusActivity) {
      setFormData(prev => ({
        ...prev,
        bonusActivities: [...prev.bonusActivities, newBonusActivity]
      }));
      setNewBonusActivity('');
    }
  };

  const handleAddSchedule = () => {
    if (newSchedule.time && newSchedule.content) {
      setFormData(prev => ({
        ...prev,
        schedule: [...prev.schedule, newSchedule]
      }));
      setNewSchedule({ time: '', content: '' });
    }
  };

  const handleRemoveItem = (arrayName, index) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.duration || formData.highlights.length === 0 || formData.schedule.length === 0) {
      setError('Please fill all required fields');
      return;
    }

    try {
      const imageUrl = formData.image ? URL.createObjectURL(formData.image) : 'https://via.placeholder.com/150';

      const packageData = {
        ...formData,
        image: imageUrl,
        price: Number(formData.price)
      };

      if (isEditing) {
        setPackages(packages.map(pkg => 
          pkg.id === currentPackageId ? packageData : pkg
        ));
      } else {
        setPackages([...packages, { ...packageData, id: Date.now() }]);
      }

      setShowModal(false);
      setFormData({
        name: '',
        price: '',
        highlights: [],
        theme: '',
        duration: '',
        time: 'Morning',
        schedule: [],
        bonusActivities: [],
        image: null
      });
      setError('');
      setIsEditing(false);
    } catch (err) {
      setError('Operation failed. Please try again.');
    }
  };

  const handleEdit = (pkg) => {
    setFormData(pkg);
    setIsEditing(true);
    setCurrentPackageId(pkg.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };


  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
      const decodedToken = jwtDecode(token)
      if(decodedToken.role !== 'admin'){
        navigate('/')
      }
    }else{
      navigate('/')
    }
  },[])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Packages</h1>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        Create New Package
      </button>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? 'Edit Package' : 'Create Package'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Package Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label>Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label>Theme</label>
                  <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <div>
                  <label>Time of Day</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                  >
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>

                <div>
                  <label>Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>

              <div>
                <label>Highlights</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                  <button
                    type="button"
                    onClick={handleAddHighlight}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gray-100 px-2 py-1 rounded flex items-center">
                      {highlight}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('highlights', index)}
                        className="ml-2 text-red-500"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label>Schedule</label>
                <div className="space-y-2">
                  {formData.schedule.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item.time}
                        className="w-1/4 border p-2 rounded"
                        disabled
                      />
                      <input
                        type="text"
                        value={item.content}
                        className="flex-1 border p-2 rounded"
                        disabled
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('schedule', index)}
                        className="text-red-500 px-2"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <input
                      type="time"
                      value={newSchedule.time}
                      onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                      className="w-1/4 border p-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Activity description"
                      value={newSchedule.content}
                      onChange={(e) => setNewSchedule({ ...newSchedule, content: e.target.value })}
                      className="flex-1 border p-2 rounded"
                    />
                    <button
                      type="button"
                      onClick={handleAddSchedule}
                      className="bg-gray-200 px-4 py-2 rounded"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label>Bonus Activities</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newBonusActivity}
                    onChange={(e) => setNewBonusActivity(e.target.value)}
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
                <div className="flex flex-wrap gap-2">
                  {formData.bonusActivities.map((activity, index) => (
                    <div key={index} className="bg-gray-100 px-2 py-1 rounded flex items-center">
                      {activity}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem('bonusActivities', index)}
                        className="ml-2 text-red-500"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  {isEditing ? 'Update Package' : 'Create Package'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-2">${pkg.price} • {pkg.duration}</p>
              <p className="text-sm text-gray-500 mb-2">Theme: {pkg.theme}</p>
              
              <div className="mb-2">
                <h4 className="font-semibold">Highlights:</h4>
                <ul className="list-disc pl-4">
                  {pkg.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <h4 className="font-semibold">Schedule:</h4>
                {pkg.schedule.map((s, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-medium">{s.time}</span> - {s.content}
                  </div>
                ))}
              </div>

              {pkg.bonusActivities.length > 0 && (
                <div className="mb-2">
                  <h4 className="font-semibold">Bonus Activities:</h4>
                  <ul className="list-disc pl-4">
                    {pkg.bonusActivities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(pkg)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
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