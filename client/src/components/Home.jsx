import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import AboutSection from './AboutSection';

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/companies')
      .then(res => res.json())
      .then(data => setCompanies(data))
      .catch(err => console.error(err));
  }, []);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.sector.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <AboutSection />

      <div className="p-6 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search by name or sector..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCompanies.map(company => (
            <div key={company._id} className="p-4 border rounded shadow">
              <img src={company.logo} alt={company.name} className="h-16 mb-2" />
              <h2 className="text-xl font-semibold">{company.name}</h2>
              <p><strong>Sector:</strong> {company.sector}</p>
              <p><strong>Headquarter:</strong> {company.headquarter}</p>
              <p><strong>Founded:</strong> {company.founded}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
