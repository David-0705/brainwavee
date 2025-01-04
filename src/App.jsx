
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Points from './Pages/Points';
import Events from './Pages/Events';
import Departments from './Pages/Departments';

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

        </Routes> 
       
      
    
  );
};

export default App;
