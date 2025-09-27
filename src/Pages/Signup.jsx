// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import signupImage from '../components/Assets/loginn.jpg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && email && password) {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Check if username already exists
      const userExists = existingUsers.find((u) => u.username === username);
      if (userExists) {
        setSignupMessage('Username already exists. Try another one.');
        return;
      }

      // Add new user to the array
      const newUsers = [...existingUsers, { username, email, password }];

      // Save updated array back to localStorage
      localStorage.setItem('users', JSON.stringify(newUsers));

      setSignupMessage('Account created successfully! You can now login.');

      // Clear fields
      setUsername('');
      setEmail('');
      setPassword('');

      // Redirect to login after short delay
      setTimeout(() => navigate('/login'), 1000);
    } else {
      setSignupMessage('Please fill in all fields.');
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
                      <img
                        src={signupImage}
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Create an Account</h4>
                    </div>

                    <form>
                      <p>Please fill in the details to create an account</p>

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
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label">Email</label>
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

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleSignup}
                        >
                          Sign up
                        </button>
                        <p>{signupMessage}</p>
                        <Link to="/login" className="text-muted ms-3">
                          Already have an account? Log in
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

export default Signup;
