import { fieldFootball } from "../../assets";
import Data from './fixture.json'
import DefaultPage from "../DefaultPage";
import { homeNavigation } from "../../constants";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BackButton from "./BackButton/BackButton";
import './fixture.css';
import {  HS, BMM, BMS, EXTC, MECH, ITI } from "../../assets";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function eventRule({ data }) {
    console.log(data);
    const dataEvent = data.sport
    const matchData = data.sportCheck && Data[data.sportCheck] ? Data[data.sportCheck] : null;

    return <>
        <DefaultPage nav={homeNavigation}>
            {/* <CategoryCard categoryId={post.categoryId} /> */}
            {/* <h1 className="text-2xl font-bold">{data.sportTitle || data.paTitle}</h1>
                <div className="">
                <BackButton />
                </div> */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <main className="flex justify-center">
                        <section className="flex flex-col gap-4 px-8 py-10 max-w-[800px] justify-center">
                            <div className="flex flex-col gap-2 flex-wrap ">
                                <div className="flex flex-row gap-2 flex-wrap justify-between">
                                    <h1 className="text-2xl font-bold">{data.sportTitle || data.paTitle}</h1>
                                    <div className="">
                                        <BackButton />
                                    </div>
                                </div>
                                {/* <img className="w-full object-cover" src={data.sportImage.url || data.paImage.url} alt="Football Event" /> */}

                                <div className="mb-1">
                                    <p className="h6">{data.paPhrase}</p>
                                </div>

                                <div className="flex flex-row gap-2 flex-wrap">
                                    {(data.paKeypoint || data.keyPoint).map((keyPoint, index) => (
                                        <div key={index} className="bg-red-500 rounded-md p-3">{keyPoint}</div>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center gap-2 m-4">
                                    < div className="h4"> Rules</div>
                                    {/* <RichText content={data.rulelist.raw.children}/> */} <div className="gridboxxx" dangerouslySetInnerHTML={{ __html: (data?.paRule?.html || data?.sportRule?.html) }}></div>

                                </div>
                            </div>
                        </section>
                    </main>
                </SwiperSlide>
                <SwiperSlide>
                    <main className="flex justify-center">
                        <section className="flex flex-col gap-4 px-8 py-10 w-2/3 max-w-[800px] justify-center">
                            <div className="flex flex-row gap-2 flex-wrap justify-between">
                                <h1 className="text-2xl font-bold">{data.sportTitle || data.paTitle}</h1>
                                <div className="">
                                    <BackButton />
                                </div>
                            </div>
                            {/* <div className="flex flex-col items-center gap-2 m-4"> */}
                            {matchData && matchData.length > 0 && (
                                <div className="flex flex-col items-center gap-2 m-4">
                                    <div className="h4">Match Fixtures</div>
                                    {matchData.map((match, index) => (
                                        <div key={index} className="match-container relative">
                                            <img src={BMM} alt="West-Indies Flag" className="flag1" />
                                            <div className="match-details relative flex flex-col gap-2">
                                                <p>{match["DEPARTMENT "]}</p>
                                                <p>{match["DATE"]} at <span className="time">{match["TIME"]}</span></p>
                                            </div>
                                            <img src={HS} alt="South-Africa flag" className="flag" />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* </div> */}
                        </section>
                    </main>
                </SwiperSlide>
            </Swiper>

        </DefaultPage >
    </>
}