import DefaultPage from "../components/DefaultPage";
import { departments } from "../constants";

import Departmentsdesign from "../components/design/Department";

const Departments = () => {
    return (
      <div>
        <DefaultPage nav={departments}>
    
          <Departmentsdesign/>
        </DefaultPage>
      </div>
    );
  };
  

export default Departments;