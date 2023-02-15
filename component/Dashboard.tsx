import * as React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Orders</li>
          <li>Customers</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the dashboard!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
