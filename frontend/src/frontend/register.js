import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './jquery';
import './style.css';

function Reg() {
  const [formData, setFormData] = useState({
    names: '',
    address: '',
    mother_name: '',
    father_name: '',
    parent_tel: '',
    trade: '',
    class_name: ''
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="main-header clearfix" role="header">
        <div className="logo">
          <a href="/"><em>Grad</em> Escola</a>
        </div>
        <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
        <nav id="menu" className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="/">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#register" className="external">Register</a></li>
          </ul>
        </nav>
      </header>

      <section className="section register" id="register" style={{ backgroundColor: '#003366', minHeight: '100vh' }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="section-heading text-center mb-4">
                <h2 style={{ color: 'white' }}>Register Now</h2>
              </div>
              <form onSubmit={handleSubmit} style={{
                border: '2px solid rgba(255, 255, 255, 0.5)',
                padding: '30px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}>
                <div className="form-group">
                  <label htmlFor="names" style={{ color: 'white' }}>Names</label>
                  <input type="text" className="form-control" id="names" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="address" style={{ color: 'white' }}>Address</label>
                  <input type="text" className="form-control" id="address" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="mother_name" style={{ color: 'white' }}>Mother's Name</label>
                  <input type="text" className="form-control" id="mother_name" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="father_name" style={{ color: 'white' }}>Father's Name</label>
                  <input type="text" className="form-control" id="father_name" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="parent_tel" style={{ color: 'white' }}>Parent's Telephone</label>
                  <input type="number" className="form-control" id="parent_tel" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="trade" style={{ color: 'white' }}>Trade</label>
                  <input type="text" className="form-control" id="trade" required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="class_name" style={{ color: 'white' }}>Class Name</label>
                  <input type="text" className="form-control" id="class_name" required onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4" disabled={loading}>
                  {loading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    'Register'
                  )}
                  {loading && ' Processing...'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reg;
