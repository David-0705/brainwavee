import DefaultPage from "../components/DefaultPage";
import { departments } from "../constants";
import SelectDept from "../components/Department/SelectDept";

const Departments =()=>{
    return(
        <DefaultPage nav={departments}>
           <SelectDept/>
        </DefaultPage>
    );
};

export default Departments;