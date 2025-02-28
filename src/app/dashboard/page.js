"use client";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  
  const handleLogout = () => {
    // In a real application, would remove tokens, cookies, etc.
    router.push('/');
  };
  
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <p>This is a protected page that should only be accessible after login.</p>
      
      <button 
        onClick={handleLogout}
        data-testid="logout-button"
      >
        Logout
      </button>
      
      <style jsx>{`
        .dashboard-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
        }
        
        h1 {
          margin-bottom: 20px;
        }
        
        button {
          padding: 10px 20px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 20px;
        }
        
        button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
}