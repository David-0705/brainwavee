import { Gradient } from "../design/Services";
import Section from "../Section";
import { fieldFootball } from "../../assets";

function EventRule() {

    return (
        <>
            <Section id="Events" />
            <div className="container">
                <div className="relative">
                    <img src={fieldFootball} alt="football" className="h-full w-full object-contain" />
                    <div className="absolute inset-0 flex flex-col justify-end mb-10">
                        <h2 className="h2">Field Football</h2>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center m-3">
                    <h1 className="h1 mb-2">General Instructions</h1>
                    <p>
                        
                    </p>
                </div>
            </div>
            {/* <Gradient/> */}

        </>
    );
}

    export default EventRule;