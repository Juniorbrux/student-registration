import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Registrations() {
  const [formData, setFormData] = useState({
    names: '',
    address: '',
    mother_name: '',
    father_name: '',
    parent_tel: '',

  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/students/${id}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch student data.');
          return response.json();
        })
        .then(data => {
          setFormData(data);
        })
        .catch(error => {
          console.error('Error fetching student data:', error);
          setError('Failed to load student data.');
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every(field => field)) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update the student.');
      }

      alert('Update successful!');
      navigate('/info');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError(error.message || 'An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex" style={{ backgroundColor: '#0d1b2a', minHeight: '100vh' }}>
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar vh-100 text-light position-fixed">
      <div className="sidebar-sticky p-3">
        <h4 className="text-center text-light mb-4">📊 Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-light active">
              🏠 Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/card" className="nav-link text-light">
              👁 View
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/info" className="nav-link text-light">
              📚 Student Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-danger fw-bold">
              🚪 Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 text-light">Admin Dashboard</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg rounded-2">
              <div className="card-header bg-primary text-white text-center py-3">
                <h4>Update Student Information</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                  {["names", "address", "mother_name", "father_name", "parent_tel"].map((field, idx) => (
                    <div key={idx} className="mb-3">
                      <label htmlFor={field} className="form-label">{`${field.replace('_', ' ')}`}</label>
                      <input
                        type="text"
                        className="form-control"
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        
                      />
                      <div className="invalid-feedback">Please enter the {field.replace('_', ' ')}.</div>
                    </div>
                  ))}
                  <div className="mb-3">
                    <button className="btn btn-success col-12" type="submit" disabled={loading}>
                      {loading ? <><span className="spinner-border spinner-border-sm"></span> Loading...</> : 'Update'}
                    </button>
                  </div>
                  {error && (
                    <div className="mb-3">
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Registrations;
