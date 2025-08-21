import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import registerService from '../services/register.service';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // Handle client side validations  
     let valid = true; // Flag to check if all validations pass
    setError('');
    setSuccess('');
    
    // Email is required
    if (!formData.email) {
      setError('Email is required');
    } else if (!formData.email.includes('@')) {
      setError('Invalid email format');
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(formData.email)) {
        setError('Invalid email format');
        valid = false;
      } else {
        setError('');
      }
      }
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      valid = false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      valid = false;
    }



      // If the form is not valid, do not submit 
    if (!valid) {
      return;
    }

    // Pass the form data to the service 
    const newUser = registerService.createUser(formData);
    newUser.then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error)
        } else {
          // Handle successful response 
          setSuccess(true);
          setServerError('')
          // Redirect to the employees page after 2 seconds 
          // For now, just redirect to the home page 
          setTimeout(() => {
            // window.location.href = '/admin/employees';
            // window.location.href = '/';
            navigate('/login');
          }, 2000);
        }
      })
      // Handle Catch 
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  }
console.log(error)

  //   // Get existing users
  //   const users = JSON.parse(localStorage.getItem('users') || '[]');
    
  //   // Check if username already exists
  //   if (users.find(u => u.username === formData.username)) {
  //     setError('Username already exists');
  //     return;
  //   }

  //   // Add new user
  //   const newUser = {
  //     username: formData.username,
  //     password: formData.password
  //   };

  //   users.push(newUser);
  //   localStorage.setItem('users', JSON.stringify(users));

  //   setSuccess('Account created successfully! Redirecting to login...');
    
  //   // Redirect to login after 2 seconds
  //   setTimeout(() => {
  //     navigate('/login');
  //   }, 2000);
  // };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {serverError && (
            <div className="text-red-600 text-sm text-center">
              {serverError}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm text-center">
              {success}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Create Account
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
