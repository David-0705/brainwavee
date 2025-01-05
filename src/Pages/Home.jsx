import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { homeNavigation } from "../constants";
import Services from "../components/Services";
import Grid from "../components/Euphoria/Grid";


const Home = ()=>{
    return(
        <><div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Grid />
        <Benefits />
        {/* <Collaboration /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <Footer nav={homeNavigation}/>
      </div>

      <ButtonGradient />
      </>
    );
};

export default Home;