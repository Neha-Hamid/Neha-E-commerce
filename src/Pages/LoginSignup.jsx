// LoginSignup.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import login from '../components/Assets/loginn.jpg';

const LoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // if already logged in, go to shop
    const savedUser =
      sessionStorage.getItem('loggedInUser') ||
      localStorage.getItem('loggedInUser');
    if (savedUser) {
      navigate('/');
    }
    
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setLoginStatus('Login successful!');

      if (rememberMe) {
        localStorage.setItem('loggedInUser', username);
      } else {
        sessionStorage.setItem('loggedInUser', username);
      }

      // notify other components (Navbar, Shop) to update immediately
      window.dispatchEvent(new Event('auth'));

      navigate('/');
    } else {
      setLoginStatus('Login failed. Invalid username or password.');
    }
  };

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={login} style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Welcome to E-Store</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="form-check mb-4">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label className="form-check-label">Remember Me</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleLogin}
                        >
                          Log in
                        </button>
                        {loginStatus && <p>{loginStatus}</p>}
                        <Link to="/signup" className="text-muted ms-3">
                          Forgot password?
                        </Link>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/signup" className="btn btn-outline-danger">
                          Create new
                        </Link>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default LoginSignup;
