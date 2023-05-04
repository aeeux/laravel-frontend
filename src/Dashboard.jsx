import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6"></main>
    </div>
  );
}

export default Dashboard;
