import React from "react";
import { useAuth } from "./AuthContext";

const Home: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      {user ? (
        <div>
          <p>Hello, {user}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to access the home page.</p>
      )}
    </div>
  );
};

export default Home;
