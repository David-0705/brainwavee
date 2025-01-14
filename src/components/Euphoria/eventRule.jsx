import { fieldFootball } from "../../assets";
import Data from './fixture.json';
import DefaultPage from "../DefaultPage";
import { homeNavigation } from "../../constants";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BackButton from "./BackButton/BackButton";
import './fixture.css';
import { COMPS, HS, BMM, BMS, EXTC, MECH, ITI } from "../../assets";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Jersey = {
    COMPS, HS, BMM, BMS, EXTC, MECH, ITI,
};


export default function eventRule({ data }) {
    console.log(data);
    const dataEvent = data.sport;
    const matchData = data.sportCheck && Data[data.sportCheck] ? Data[data.sportCheck] : null;

    return (
        <>
            <DefaultPage nav={homeNavigation}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className="h-auto"> {/* Updated height to auto */}
                        <main className="flex justify-center min-h-screen"> {/* Ensures no extra blank space */}
                            <section className="flex flex-col gap-4 px-8 py-10 max-w-[800px] justify-center">
                                <div className="flex flex-col gap-2 flex-wrap">
                                    <div className="flex flex-row gap-2 flex-wrap justify-between">
                                        <h1 className="text-2xl font-bold">{data.sportTitle || data.paTitle || data.laTitle}</h1>
                                        <div>
                                            <BackButton />
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <p className="h6">{data.paPhrase || data.laDescription}</p>
                                    </div>
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        {(data.paKeypoint || data.keyPoint || data.laKeypoint).map((keyPoint, index) => (
                                            <div key={index} className="bg-red-500 rounded-md p-3">{keyPoint}</div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-center gap-2 m-4">
                                        <div className="h4">Rules</div>
                                        <div className="gridboxxx" dangerouslySetInnerHTML={{ __html: (data?.paRule?.html || data?.sportRule?.html || data?.laRule.html) }}></div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </SwiperSlide>
                    <SwiperSlide className="h-auto"> {/* Updated height to auto */}
                        <main className="flex justify-center min-h-screen"> {/* Ensures no extra blank space */}
                            <section className="flex flex-col gap-4 px-0 py-10 w-2/3 justify-center md:w-4/5">
                                <div className="flex flex-row gap-2 flex-wrap justify-between">
                                    <h1 className="text-2xl font-bold">{data.sportTitle || data.paTitle}</h1>
                                    <div>
                                        <BackButton />
                                    </div>
                                </div>
                                {matchData && matchData.length > 0 && (
                                    <div className="flex flex-col items-center gap-2 m-4">
                                        <div className="h4">Match Fixtures</div>
                                        {matchData.map((match, index) => (
                                            <div
                                                key={index}
                                                className="match-container relative flex flex-row items-center gap-2 p-4 bg-white shadow rounded-md w-full sm:w-11/12 md:w-10/12"
                                            >
                                                <img src={Jersey[match["Player1"]]} className="flag1 w-16 h-auto" />
                                                <div className="match-details relative flex flex-col gap-2 text-center">
                                                    <p className="text-lg sm:text-base">{match["DEPARTMENT "]}</p>
                                                    <p className="text-lg sm:text-base">
                                                        {match["DATE"]} at <span className="time">{match["TIME"]}</span>
                                                    </p>
                                                </div>
                                                <img src={Jersey[match["Player2"]]} className="flag w-16 h-auto" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        </main>
                    </SwiperSlide>
                </Swiper>
            </DefaultPage>
        </>
    );
}