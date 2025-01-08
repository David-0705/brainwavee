import Grid from "../components/Euphoria/Grid";
import DefaultPage from "../components/DefaultPage";
import { departments } from "../constants";

const Instruction = ()=>{
    return(
        <DefaultPage nav={departments}>
            <Grid/>
        </DefaultPage>
    );
};
export default Instruction;