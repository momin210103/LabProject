import React from 'react';

const FeatureSection = () => {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Use This App?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Real-time Company Data</h3>
          <p>Instantly view the most updated list of top Bangladeshi companies.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
          <p>Easily find companies by name or industry using the powerful search tool.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Admin Panel</h3>
          <p>Admins can securely manage the company list using a login-protected interface.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
