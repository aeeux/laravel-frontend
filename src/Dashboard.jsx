import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h className="">Dashboard</h>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Dashboard;
