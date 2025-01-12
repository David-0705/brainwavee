import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, marathon } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  // PhotoChatMessage,
  Gradient,
  VideoBar,
  // VideoChatMessage,
} from "./design/Services";
import Data from './Euphoria/fixture.json'
import './Euphoria/fixture.css';
import { comps } from "../assets";

import Generating from "./Generating";

const eventDay = [
  {
    "MATCH NO.": "M1",
    "DEPARTMENT ": "BMS vs MECH",
    "DATE": "13th Jan",
    "TIME": "16:15"
   },
   {
    "MATCH NO.": "M2",
    "DEPARTMENT ": "BMM vs IT",
    "DATE": "14th Jan",
    "TIME": "16:15"
   },
   {
    "MATCH NO.": "M3",
    "DEPARTMENT ": "EXTC vs COMPS",
    "DATE": "15th Jan",
    "TIME": "16:15"
   },
   {
    "MATCH NO.": "M4",
    "DEPARTMENT ": "IT vs HS",
    "DATE": "16th Jan",
    "TIME": "16:30"
   },
   {
    "MATCH NO.": "M5",
    "DEPARTMENT ": "MECH vs EXTC",
    "DATE": "24th Jan",
    "TIME": "16:30"
   },
   {
    "MATCH NO.": "M6",
    "DEPARTMENT ": "ITI vs IT",
    "DATE": "18th Jan",
    "TIME": "16:30"
   },
];

const Services = () => {
  const matchData = Data["BASEKETBALL(B)"].filter(match => match.date === "16th Jan"  ).slice(0, 4);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Upcoming Events"
        // text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={marathon}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h2 className="h2 mb-0 p-0">Marathon</h2>
                <h4 className="h5 mb-2 text-n-2">January 12th</h4>
                <p className="body-2 mb-[3rem] text-n-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sint.
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Match Fixtures</h4>
                <div className="flex flex-col items-center gap-2 m-4">
                  {eventDay.map((match, index) => (
                    <div className="match-container relative ">
                      <img src={comps} alt="West-Indies Flag" class="flag1" />
                      <div class="match-details relative flex flex-col gap-2">
                        {/* <div className="flex flex-col m-0">
                                        <p>country1</p>
                                        <p>VS</p>
                                        <p>Country2</p>
                                    </div> */}
                        {/* <p>28 Aug <span class="time">12:30</span></p> */}
                        <p>{match["DEPARTMENT "]}</p>
                        <p>{match["DATE"]} at <span className="time">{match["TIME"]}</span></p>
                      </div>
                      <img src="https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-india-national-cricket-team-logo-transparent-png-701751712500401nel3jkkg04.png" alt="South-Africa flag" class="flag" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
