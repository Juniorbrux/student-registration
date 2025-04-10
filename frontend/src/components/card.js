import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userEmail, setUserEmail] = useState(null); // State to store email
  const [selectedStudent, setSelectedStudent] = useState(null); // State to store selected student
  
  // Fetching data from API
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email); // Set the email in state
    }
    fetch('http://localhost:5000/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  // Fetch student details by ID
  // const fetchStudentDetails = (id) => {
  //   fetch(`http://localhost:5000/api/students/${id}`)
  //     .then(response => response.json())
  //     .then(data => setSelectedStudent(data))
  //     .catch(error => console.error('Error fetching student details:', error));
  // };

  // Filter students based on the search term
  const filteredStudents = students.filter(student =>
    student.names.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                {/* Replaced Info with Student Details Link */}
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

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by student name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="row">
              {/* Loop through filtered students to display their data */}
              {filteredStudents.map((student, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card text-light bg-dark border-success h-100">
                    <div className="card-header bg-gradient p-3 text-center">
                      <h4 className="text-light">{student.names}</h4>
                      <p className="text-dark-50 mb-0">{student.class}</p>
                    </div>
                    <img
                      src="/download.png"
                      className="card-img-top rounded-circle mx-auto d-block mt-3"
                      alt="Student"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <div className="card-text mb-2">
                        <strong>Address:</strong> {student.address}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Father's Name:</strong> {student.father_name}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Mother's Name:</strong> {student.mother_name}
                      </div>
                      <div className="card-text mb-2">
                        <strong>Parent's Phone:</strong> {student.parent_tel}
                      </div>
                    </div>
                    {/* <div className="card-footer bg-transparent border-top-0 text-center">
                      <button
                        onClick={() => fetchStudentDetails(student.id)}
                        className="btn btn-primary btn-sm text-white"
                      >
                        View Details
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Display selected student details */}
            {selectedStudent && (
              <div className="card text-light bg-dark border-success mt-4">
                <div className="card-header bg-gradient p-3 text-center">
                  <h4 className="text-light">{selectedStudent.names}</h4>
                  <p className="text-dark-50 mb-0">{selectedStudent.class}</p>
                </div>
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
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Card;
