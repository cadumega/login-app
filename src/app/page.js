"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Simple login logic (for testing)
    if (username === 'admin' && password === 'admin123') {
      // Successful login
      router.push('/dashboard');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" data-testid="login-button">Sign In</button>
      </form>
      
      <p>
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
      
      <style jsx>{`
        .login-container {
          max-width: 400px;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 10px;
          margin-bottom: 15px;
          border-radius: 4px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          margin-bottom: 5px;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #0069d9;
        }
        
        p {
          text-align: center;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
