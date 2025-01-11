import { fieldFootball } from "../../assets";
import Data from './fixture.json'
import DefaultPage from "../DefaultPage";
import { homeNavigation } from "../../constants";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BackButton from "./BackButton/BackButton";
import './fixture.css';
import { comps } from "../../assets";

export default function eventRule({ data }) {
    console.log(data);
    // const matchData = Data[data.sportTitle].slice(0,4);

    return <>
        <DefaultPage nav={homeNavigation}>
            <main className="flex justify-center">
                <section className="flex flex-col gap-4 px-8 py-10 max-w-[800px]">
                    {/* <CategoryCard categoryId={post.categoryId} /> */}
                    <h1 className="text-2xl font-bold">{data.sportTitle}</h1>
                    <div className="">
                        <BackButton />
                    </div>
                    <img className="w-full object-cover" src={data.sportImage.url} alt="Football Event" />
                    {/* <div className="flex justify-between items-center">
                <AuthorCard authorId={post.authorId} />
                <h5 className="text-xs text-gray-500">{post.timestamp.toLocaleDateString()}</h5>
            </div> */}
                    <div className="flex flex-row gap-2 flex-wrap">
                        {data.keyPoint.map((keyPoint, index) => (
                            <div key={index} className="bg-red-500 rounded-md p-3">{keyPoint}</div>
                        ))}


                    </div>

                    <div className="flex flex-col items-center gap-2">

                        {/* {matchData.map((match, index) => (
                            <div className="match-container relative ">
                                <img src={comps} alt="West-Indies Flag" class="flag1" />
                                <div class="match-details relative flex flex-col gap-2"> */}
                                    {/* <div className="flex flex-col m-0">
                                        <p>country1</p>
                                        <p>VS</p>
                                        <p>Country2</p>
                                    </div> */}
                                    {/* <p>28 Aug <span class="time">12:30</span></p> */}
                                    {/* <p>{match["DEPARTMENT "]}</p>
                                    <p>{match["DATE"]} at <span className="time">{match["TIME"]}</span></p>
                                </div>
                                <img src="https://city-png.b-cdn.net/preview/preview_public/uploads/preview/hd-india-national-cricket-team-logo-transparent-png-701751712500401nel3jkkg04.png" alt="South-Africa flag" class="flag" />  
                            </div>
                            ))} */}
                            < div className="h4"> Rules</div>
                    {/* <RichText content={data.rulelist.raw.children}/> */}
                    <div className="gridboxxx" dangerouslySetInnerHTML={{ __html: data.sportRule.html }}></div>
                </div>
            </section>
        </main>
    </DefaultPage >
    </>
}