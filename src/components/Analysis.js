import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import './AnalysisSection.css';

// Dummy data for the chart
const data = {
  Ayurveda: [
    { year: 2024, value: 20 },
    { year: 2025, value: 30 },
    { year: 2026, value: 45 },
    { year: 2027, value: 60 },
    { year: 2028, value: 75 },
    { year: 2029, value: 90 },
    { year: 2030, value: 100 },
    { year: 2031, value: 120 },
    { year: 2032, value: 150 },
  ],
  Yoga: [
    { year: 2024, value: 50 },
    { year: 2025, value: 55 },
    { year: 2026, value: 60 },
    { year: 2027, value: 70 },
    { year: 2028, value: 85 },
    { year: 2029, value: 100 },
    { year: 2030, value: 110 },
    { year: 2031, value: 130 },
    { year: 2032, value: 140 },
  ],
  Homeopathy: [
    { year: 2024, value: 15 },
    { year: 2025, value: 25 },
    { year: 2026, value: 40 },
    { year: 2027, value: 55 },
    { year: 2028, value: 70 },
    { year: 2029, value: 85 },
    { year: 2030, value: 95 },
    { year: 2031, value: 115 },
    { year: 2032, value: 130 },
  ]
};

const AnalysisSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ayurveda');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="analysis-section">
      <h1 className="analysis-heading">Ayurveda Boom in the Next 10 Years</h1>
      <div className="dropdown-container">
        <label htmlFor="data-category">Choose a category:</label>
        <select
          id="data-category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {Object.keys(data).map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="90%" height={400}>
          <LineChart data={data[selectedCategory]}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisSection;
