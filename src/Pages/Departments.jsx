import DefaultPage from "../components/DefaultPage";
import { homeNavigation } from "../constants";
import SelectDept from "../components/Department/SelectDept";

const Departments =()=>{
    return(
        <DefaultPage nav={homeNavigation}>
           <SelectDept/>
        </DefaultPage>
    );
};

export default Departments;