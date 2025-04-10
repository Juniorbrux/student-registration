import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password || !role) {
      setLoading(false);
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token); // Save token in local storage
        localStorage.setItem('userEmail', email); // Save email in local storage
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        throw new Error(data.message || 'Invalid credentials or user not found.');
      }
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-4" style={{ backgroundColor: '#0d1b2a', height: '100vh' }}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 text-light">Dashboard</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card bg-dark text-light" style={{ opacity: 0.9 }}>
                <div className="card-header bg-dark border-light text-center">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleLogin}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control bg-secondary text-light"
                        id="floatingInput"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control bg-secondary text-light"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        className="form-select bg-secondary text-light"
                        id="floatingRole"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                      >
                        <option value="Admin">Admin</option>
                      </select>
                      <label htmlFor="floatingRole">Select Role</label>
                    </div>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <div className="col-12">
                      <button className="btn btn-primary col-md-12" type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm"></span> Logging in...
                          </>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginForm;
