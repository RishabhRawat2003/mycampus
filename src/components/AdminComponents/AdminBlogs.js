import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '', image: null });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/api/v1/blog/get-blogs`);
      setBlogs(response.data.message);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch blogs');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file, // Store the file in state
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.title || !formData.content) {
      setError('Title and content are required');
      setLoading(false);
      return;
    }

    try {

      if (isEditing) {
        console.log(formData)
        const formDataToSend = new FormData();
        formDataToSend.append("blogTitle", formData.title);
        formDataToSend.append("blogContent", formData.content);
        formDataToSend.append("image", formData.image);
        formDataToSend.append("blogId", currentBlogId);

        await axios.post(`${apiUrl}/api/v1/blog/edit-blog`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log('Blog edited successfully');
        alert("Blog edited successfully");
      } else {
        const formDataToSend = new FormData();
        formDataToSend.append("blogTitle", formData.title);
        formDataToSend.append("blogContent", formData.content);
        formDataToSend.append("image", formData.image);

        await axios.post(`${apiUrl}/api/v1/blog/create-blog`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Blog created successfully');
      }

      setShowModal(false);
      setFormData({ title: '', content: '', image: null });
      setError('');
      setIsEditing(false);
      setCurrentBlogId(null);
      fetchBlogs();
      setLoading(false);
    } catch (err) {
      setError('Operation failed. Please try again.');
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setFormData({ title: blog.title, content: blog.content, image: blog.image });
    setIsEditing(true);
    setCurrentBlogId(blog._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`${apiUrl}/api/v1/blog/delete-single-blog`, { id });
      alert('Blog deleted successfully');
      fetchBlogs()
    } catch (err) {
      setError('Failed to delete blog');
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.role !== 'admin') {
        navigate('/')
      }
    } else {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Blogs</h1>

        <button
          className="inline-flex items-center px-4 py-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          onClick={() => setShowModal(true)}
        >
          Create New Blog
        </button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Blog' : 'Create Blog'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    className="block w-full rounded-md border-gray-300 border resize-none p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="5"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    className="block w-full rounded-md border-gray-300 border p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    name="image"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
                    onClick={() => {
                      setFormData({ title: '', content: '', image: null });
                      setError('');
                      setIsEditing(false);
                      setCurrentBlogId(null);
                      setShowModal(false)
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                  >
                    {isEditing ? 'Update Blog' : 'Create Blog'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogs.map(blog => (
            <div key={blog._id} className="bg-white shadow-md md:hover:shadow-2xl duration-500 ease-in-out rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.content}</p>
                <div className="flex gap-2">
                  <button
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition-colors"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        loading && (
          <div className="flex items-center fixed top-0 w-full h-screen justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )
      }
    </>
  );
};

export default AdminBlogs;