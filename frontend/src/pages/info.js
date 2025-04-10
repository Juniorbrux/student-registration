import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);
  const [userEmail, setUserEmail] = useState(null); // State to store email
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Check if email is available in localStorage
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email); // Set the email in state
    }

    // Fetch all student data from the API
    fetch(`http://localhost:5000/api/students/`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      fetch(`http://localhost:5000/api/students/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete student.");
          }
          setStudents(students.filter((student) => student.st_id !== id));
          alert("Student deleted successfully!");
        })
        .catch((error) => console.error("Error deleting student:", error));
    }
  };

  const handleView = (id) => {
    // Fetch student data when the view button is clicked
    fetch(`http://localhost:5000/api/students/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Navigate to the view page and pass the student data as state
        navigate(`/viewstudents/${id}`, { state: { student: data } });
      })
      .catch((error) => console.error("Error fetching student data:", error));
  };

  // Handle Delete All action
  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all students? This action cannot be undone.")) {
      fetch("http://localhost:5000/api/students/all", {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setStudents([]); // Clear the list of students in the UI
            alert("All students deleted successfully!");
          } else {
            throw new Error("Failed to delete all students.");
          }
        })
        .catch((error) => console.error("Error deleting all students:", error));
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#0d1b2a', minHeight: '100vh' }}>
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar vh-100 text-light position-fixed">
          <div className="sidebar-sticky p-3">
            <h4 className="text-center text-light mb-4">📊 Dashboard</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-light active" href="/dashboard">
                  🏠 Dashboard
                </a>
              </li>
              <li className="nav-item">
                <Link to="/card" className="nav-link text-light">
                  👁 View
                </Link>
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
            <h1 className="h2 text-light">Admin Dashboard</h1>
            {/* Display the logged-in email in the navbar */}
            {userEmail && (
              <span className="text-light">{userEmail}</span>
            )}
          </div>

          <h2 className="mb-3 text-light">Student Information</h2>
          <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped text-center">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Trades</th>
                  <th>Address</th>
                  <th>Mother Name</th>
                  <th>Father Name</th>
                  <th>Parent Tel</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.st_id}>
                    <td>{student.st_id}</td>
                    <td>{student.names}</td>
                    <td>{student.class_name}</td>
                    <td>{student.trade}</td>
                    <td>{student.address}</td>
                    <td>{student.mother_name}</td>
                    <td>{student.father_name}</td>
                    <td>{student.parent_tel}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary btn-sm mx-1"
                        onClick={() => handleView(student.st_id)}
                      >
                        <FontAwesomeIcon icon={faEye} /> View
                      </button>
                      <button
                        className="btn btn-outline-warning btn-sm mx-1"
                        onClick={() => handleEdit(student.st_id)}
                      >
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm mx-1"
                        onClick={() => handleDelete(student.st_id)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-danger btn-sm mx-1"
              onClick={handleDeleteAll}
            >
              DELETE ALL
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
