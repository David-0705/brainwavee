import React from 'react';
import { useLocation } from 'react-router-dom';
import { winners } from '../../constants';  // Import winners array from constants
import GlowingText from '../design/Glowingtext';
import Section from '../Section';

const Deptinfo = ({departmentName}) => {
        
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
        <Section
        className="pt-[10rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        >
        {/* <h2>{departmentName.toUpperCase()} Department</h2> */}
        <div className='flex justify-center'>
        <GlowingText  text={`${departmentName.toUpperCase()} Department`}/>
        </div>
        {/* <p>Here are the winners:</p>
        <ul>
          {departmentData.map((event, index) => (
            <li key={index}>
              <strong>{event.Event}</strong> - {event.Place}: {event.Winner}
            </li>
          ))}
        </ul> */}
        </Section>
      </div>
    );
};

export default Deptinfo;
