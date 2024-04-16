import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import InspectionDetails from './components/InspectionDetails';
import Navbar from './components/Navbar';



const App = () => {
  const [inspections, setInspections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://dashboard-function-app-1.azurewebsites.net/api/fetchInspections?code=spwafPEUL-G8j2VepZmogwJlWfjGE4IcjMHZuU8cFIAwAzFu2AfUEw==';
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        console.log(data);
        const formattedInspections = data.map(inspection => ({
          ...inspection,
          escalationDate: new Date(inspection.escalationDate).toLocaleDateString(),
          address: `${inspection.unitNo} ${inspection.street}, ${inspection.suburb}`
        }));
        setInspections(formattedInspections);
      } catch (error) {
        console.error('Error fetching inspections data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage inspections={inspections} />} />
        <Route path="/details/:inspectionId" element={<InspectionDetails inspections={inspections} />} />
      </Routes>
    </Router>
  );
};

export default App;
