import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { homeNavigation } from "../constants";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Grid from "../components/Euphoria/Grid";

import {useState , useEffect} from "react";
import {EuphoriaEvent}  from "../components/services/index";
import Events from "./Events";

export default function Home(){
   const [data, setdata] =useState();
   
   
   useEffect(() => {
    const fetchEuphoriaEventData = async () => {
        try {
            const res = await EuphoriaEvent();
            console.log('EuphoriaEvent data:', res);
            setdata(res);
        } catch (error) {
            console.error('Error fetching EuphoriaEvent data:', error);
        }
    };

    fetchEuphoriaEventData();
}, []);
    
    return(
        <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Grid />
        <Benefits />
        {data?.euphoriaEvents && <Events data={data.euphoriaEvents[0]} />}
        {/* <Events data={data?.euphoriaEvents ? data.euphoriaEvents[0] : null}/> */}
        {/* <Collaboration /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
      </>
    );

};