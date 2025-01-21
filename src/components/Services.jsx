import React, { useRef, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import theme from "../assets/videos/theme_reveal.mp4";
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
import { COMPS, IT, HS, DOMMF, BMS, EXTC, MECH, ITI } from "../assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const eventDay = [
  
  
  {"MATCH NO.": "M27", "SPORT": "BASEKETBALL(B)", "DEPARTMENT": "IT vs HS", "TIME": "13:00", "Player1": "IT", "Player2": "HS", "Date": "22nd Jan"},
  {"MATCH NO.": "M22", "SPORT": "THROWBALL(G)", "DEPARTMENT": "EXTC vs HS", "TIME": "13:00", "Player1": "EXTC", "Player2": "HS","Date": "22nd Jan"},
  {"MATCH NO.": "M36", "SPORT": "BOX CRICKET(G)", "DEPARTMENT": "MECH vs IT", "TIME": "13:30", "Player1": "MECH", "Player2": "IT","Date": "22nd Jan"},
  {"MATCH NO.": "M28", "SPORT": "BASEKETBALL(B)", "DEPARTMENT": "COMPS vs ITI", "TIME": "14:00", "Player1": "COMPS", "Player2": "ITI", "Date": "22nd Jan"},
  {"MATCH NO.": "M9", "SPORT": "VOLLEYBALL(G)", "DEPARTMENT": "BMS vs IT", "TIME": "14:00", "Player1": "BMS", "Player2": "IT","Date": "22nd Jan"},
  {"MATCH NO.": "M63", "SPORT": "TUG OF WAR(B)", "DEPARTMENT": "MECH vs COMPS", "TIME": "14:30", "Player1": "MECH", "Player2": "COMPS","Date": "22nd Jan"},
  {"MATCH NO.": "M63", "SPORT": "TUG OF WAR(G)", "DEPARTMENT": "BMS vs MECH", "TIME": "14:30", "Player1": "BMS", "Player2": "MECH","Date": "22nd Jan"},
  {"MATCH NO.": "M53", "SPORT": "BOX CRICKET(B)", "DEPARTMENT": "BMS vs MECH", "TIME": "14:30", "Player1": "BMS", "Player2": "MECH", "Date": "22nd Jan"},
  {"MATCH NO.": "M64", "SPORT": "TUG OF WAR(B)", "DEPARTMENT": "EXTC vs ITI", "TIME": "15:00", "Player1": "EXTC", "Player2": "ITI","Date": "22nd Jan"},
  {"MATCH NO.": "M64", "SPORT": "TUG OF WAR(G)", "DEPARTMENT": "EXTC vs DOMMF", "TIME": "15:00", "Player1": "EXTC", "Player2": "DOMMF","Date": "22nd Jan"},
  {"MATCH NO.": "M53", "SPORT": "BOX CRICKET(B)", "DEPARTMENT": "EXTC vs DOMMF", "TIME": "15:30", "Player1": "EXTC", "Player2": "DOMMF", "Date": "22nd Jan"},
  {"MATCH NO.": "M34", "SPORT": "VOLLEY BALL(B)", "DEPARTMENT": "BMS vs COMPS", "TIME": "16:00", "Player1": "BMS", "Player2": "COMPS", "Date": "22nd Jan"},
  {"MATCH NO.": "M9", "SPORT": "FIELD FOOTBALL", "DEPARTMENT": "BMS vs EXTC", "TIME": "16:30", "Player1": "BMS", "Player2": "EXTC", "Date": "22nd Jan"},
];

// import Generating from "./Generating";
const Jersey = {
  COMPS, HS, DOMMF, BMS, EXTC, MECH, ITI, IT
};

const Services = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // Video play state
  const [progress, setProgress] = useState(0); // Video progress state
  const matchData = Data["BASEKETBALL(B)"].filter(match => match.date === "16th Jan").slice(0, 4);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleMarathonClick = () => {
    window.open('https://drive.google.com/drive/folders/1q8fif1LsAwa6AkUY9TSrGcafAuoY4b1H', '_blank');
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Upcoming Events" />

        <div className="relative">


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div onClick={handleMarathonClick} className="relative min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden hover:cursor-pointer">
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
                <h4 className="h5 mb-2 text-n-2">January 11th</h4>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-auto">
                <SwiperSlide>
                  <div className="py-12 px-0 xl:px-8">
                    <h4 className="h4 mb-4">Match Fixtures</h4>
                    <div className="flex flex-col items-center gap-2 m-4">
                      {eventDay.slice(0, 6).map((match, index) => (
                        <div key={index} className="match-container relative h-auto flex items-center justify-between">
                          <img src={Jersey[match["Player1"]]} className="flag1 w-16 h-auto" />
                          <div className="match-details relative flex flex-col gap-1 h-auto text-center">
                            <p className="h6 text-stone-900 font-bold text-base sm:text-lg">{match["SPORT"]}</p>
                            <p className="text-sm sm:text-base">{match["DEPARTMENT"]}</p>
                            <p className="text-sm sm:text-base">{match["Date"]} at <span className="time">{match["TIME"]}</span></p>
                          </div>
                          <img src={Jersey[match["Player2"]]} className="flag w-16 h-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-12 px-4 xl:px-8">
                    <h4 className="h4 mb-4">Match Fixtures</h4>
                    <div className="flex flex-col items-center gap-2 m-4">
                      {eventDay.slice(6, 15).map((match, index) => (
                        <div key={index} className="match-container relative h-24	 ">
                          <img src={Jersey[match["Player1"]]} className="flag1" />
                          <div className="match-details relative flex flex-col gap-1">
                            <p className="h6 text-stone-900 font-bold">{match["SPORT"]}</p>
                            <p>{match["DEPARTMENT"]}</p>
                            <p>{match["Date"]} at <span className="time">{match["TIME"]}</span></p>
                          </div>
                          <img src={Jersey[match["Player2"]]} className="flag" />
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <video
                  ref={videoRef}
                  src={theme}
                  className="w-full h-full object-cover"
                  onTimeUpdate={handleProgress}
                  width={520}
                  height={400}
                  muted
                  autoPlay
                  loop
                  playsInline
                ></video>
                <VideoBar
                  isPlaying={isPlaying}
                  progress={progress}
                  onPlayPause={handlePlayPause}
                />
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
