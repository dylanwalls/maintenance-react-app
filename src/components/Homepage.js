import React from 'react';
import { Link } from 'react-router-dom';

const displayOrder = ['address', 'escalationDate', 'completed']; // Variables to display in order

const Homepage = ({ inspections }) => {
  // Sorting inspections: false (incomplete) first, then true (complete)
  const sortedInspections = inspections.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  return (
    <div>
      <h1>Inspections Overview</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedInspections.map((inspection, index) => (
          <Link to={`/details/${inspection.id}`} key={index} className="link-style">
            <li className={inspection.completed ? 'list-item-style-complete' : 'list-item-style-incomplete'}>
              {displayOrder.map(key => (
                <div key={key} className="data-style">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: {inspection[key].toString()}
                </div>
              ))}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
