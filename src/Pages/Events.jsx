import DefaultPage from "../components/DefaultPage";
import { Gradient } from "../components/design/Services";
import Section from "../components/Section";
import { fieldFootball } from "../assets/";
import { useState, useEffect } from "react";

export default function Events({ data }) {

    return (
        <>
            <Section id="Events" >
                <div className="container">

                    {/* <div className="relative"> */}
                    <div>
                        {/* <img src={fieldFootball} alt="football" className="h-full w-full object-contain" /> */}


                        <div className="flex flex-col items-center justify-center text-center m-0">
                            <h2 className="h2 mb-5">{data.heading}</h2>
                            {data.ruleBook.map((rule, index) => (
                                
                                <p key={index} className="p-1 text-lg">{rule}</p>
                            ))}

                        </div>
                    </div>
                    {/* </div> */}
                    <Gradient />
                    </div>
            </Section>
        </>

    );
}