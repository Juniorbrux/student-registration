import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBriefcase, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [summary, setSummary] = useState({
    totalStudents: 0,
    totalTrades: 0,
    totalClasses: 0,
  });
  const [userEmail, setUserEmail] = useState(null); // State to store email
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Check if email is available in localStorage
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email); // Set the email in state
    }

    // Fetch total students data from the API
    fetch("http://localhost:5000/api/students")
      .then((response) => response.json())
      .then((data) => setSummary((prevSummary) => ({
        ...prevSummary,
        totalStudents: data.length // Assuming the API returns an array of students
      })))
      .catch((error) => console.error("Error fetching student data:", error));

    // Fetch total trades and classes data from the API
    fetch("http://localhost:5000/api/classes")
      .then((response) => response.json())
      .then((data) => {
        const totalTrades = new Set(data.map(item => item.totalTrades)).size;
        const totalClasses = data.length;
        setSummary((prevSummaryy) => ({
          ...prevSummaryy,
          //issuessss
          totalTrades: totalTrades,
          totalClasses: totalClasses
        }));
      })
      .catch((error) => console.error("Error fetching trades and classes data:", error));
  }, []);

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
            <div className="d-flex align-items-center">
              <img
                src="/download.png"
                alt="Profile"
                className="rounded-circle me-3"
              />
              <div>
                <h1 className="h2 text-light mb-0">Admin Dashboard</h1>
                {userEmail && (
                  <span className="text-secondary">{userEmail}</span>
                )}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-light me-2">
                Edit Profile
              </button>
              <button className="btn btn-outline-danger">
                Logout
              </button>
            </div>
          </div>

          <h2 className="mb-3 text-light">Summary Information</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-light bg-dark border-success h-100">
                <div className="card-body">
                  <h5 className="card-title text-center fs-4">
                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                    Total Students
                  </h5>
                  <p className="card-text text-center fs-2 fw-bold">{summary.totalStudents}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-light bg-dark border-success h-100">
                <div className="card-body">
                  <h5 className="card-title text-center fs-4">
                    <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                    Total Trades
                  </h5>
                  <p className="card-text text-center fs-2 fw-bold">{summary.totalTrades}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-light bg-dark border-success h-100">
                <div className="card-body">
                  <h5 className="card-title text-center fs-4">
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                    Total Classes
                  </h5>
                  <p className="card-text text-center fs-2 fw-bold">{summary.totalClasses}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
