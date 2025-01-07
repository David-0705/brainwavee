import React from 'react';
import { useLocation } from 'react-router-dom';
import { winners } from '../../constants';  // Import winners array from constants

const Deptinfo = () => {
    const location = useLocation(); // Get the current location object
    const params = new URLSearchParams(location.search); // Parse query string
    let departmentName = params.get('department')?.toLowerCase();// Get the value of the 'department' query parameter
    
    if (departmentName) {
        departmentName = departmentName.replace(/\./g, ''); // Replace all periods with empty string
    }

    // Access the department data from the winners array
    const departmentData = winners[0].department[departmentName]; // Accessing the department from the department object
    console.log(winners)
    if (!departmentData) {
      return <p>{departmentName}: Department not found!</p>;
    }
  
    return (
      <div>
        <h2>{departmentName.toUpperCase()} Department</h2>
        <p>Here are the winners:</p>
        <ul>
          {departmentData.map((event, index) => (
            <li key={index}>
              <strong>{event.Event}</strong> - {event.Place}: {event.Winner}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Deptinfo;
