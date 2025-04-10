import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function Card() {
  const { id } = useParams(); // Get the student ID from the URL parameters
  const [userEmail, setUserEmail] = useState(null); // State to store email
  const [selectedStudent, setSelectedStudent] = useState(null); // State to store selected student

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email); // Set the email in state
    }

    // Fetch student details by ID
    fetch(`http://localhost:5000/api/students/${id}`)
      .then(response => response.json())
      .then(data => setSelectedStudent(data[0])) // Adjusted to handle the provided data structure
      .catch(error => console.error('Error fetching student details:', error));
  }, [id]);

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#0d1b2a', minHeight: '100vh' }}>
        <div className="row">
          {/* Sidebar/ Navbar */}
          <nav className="col-md-2 d-none d-md-block bg-dark sidebar vh-100 text-light position-fixed">
            <div className="sidebar-sticky p-3">
              <h4 className="text-center text-light mb-4">Dashboard</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-light active" href="/dashboard">
                    🏠 Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/card">
                    👁 View
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/info">
                    📚 Student Details
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger fw-bold" href="/">
                    🚪 Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-light">Student Dashboard</h1>
              {/* Display the logged-in email in the navbar */}
              {userEmail && (
                <span className="text-light">{userEmail}</span>
              )}
            </div>

            {/* Display selected student details */}
            {selectedStudent && (
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card text-light bg-dark border-success h-100">
                    <div className="card-header bg-gradient p-3 text-center">
                      <h4 className="text-light">{selectedStudent.names}</h4>
                      <p className="text-dark-50 mb-0">{selectedStudent.class_name}</p>
                    </div>
                    <img
                      src="/download.png"
                      className="card-img-top rounded-circle mx-auto d-block mt-3"
                      alt="Student"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <div className="card-text mb-2">
                        <strong>Address:</strong> {selectedStudent.address}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Father's Name:</strong> {selectedStudent.father_name}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Mother's Name:</strong> {selectedStudent.mother_name}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Parent's Phone:</strong> {selectedStudent.parent_tel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Card;
