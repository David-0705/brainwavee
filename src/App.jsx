
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Points from './Pages/Points';
import Events from './Pages/Events';
import Departments from './Pages/Departments';
import { departments } from './constants';
import Deptinfo from './components/Department/Departmentinfo';

const App = () => {
  return (
  
       <Routes>
        <Route
          index
          element={
            <>
              <Home/>
            </>
          }
        />
        <Route
          path="/points"
          element={
            <>
              <Points/>
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Events/>
            </>
          }
        />
        <Route
          path="/department"
          element={
            <>
              <Departments/>
            </>
          }
        />
        <Route
          path="/Instruction"
          element={
            <>
              <Events/>
            </>
          }
        />
        
        {departments.map((dept,index)=>(
          <Route
          key={index}
          path={dept.url}
          element={
            <>
              <Deptinfo/>
            </>
          }
        />
        ))};
        </Routes> 
    
  );
};

export default App;
