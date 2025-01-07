import { fieldFootball } from "../../assets";
import DefaultPage from "../DefaultPage";
import { homeNavigation } from "../../constants";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default function eventRule({data}) {
    console.log(data);

    const post = {
        categoryId: "1",
        title: "Football Championship 2025",
        imageURL: "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg",
        authorId: "123",
        timestamp: new Date(),
        content: `<p>RULES :</p>
        <ol>
            <li>1. Total 12 matches in the first round.</li>
            <li>2. The first two teams with leading points from Pool ‘A’ and ‘B’ will cross each other for semi-finals.</li>
            <li>3. First semi-final will be played between the winner of Pool ‘A’ against the runner up team of Pool ‘B’ and the second semi-final between winner of Pool ‘B’ against the runner up of Pool ‘A’.</li>
            <li>4. For the third place, the match will be played between the losers of two semi-finals.</li>
            <li>5. Points to be awarded: winners 3 points / draw 1 point / loss 0 points.</li>
            <li>6. Teams at the end of league stage finish in equal number of points, the following criteria will be considered to qualify for semifinals:
                <ul>
                    <li>6.a) Goal difference (goal scored for and against)</li>
                    <li>6.b) Head to head match results in the respective pools draw / win.</li>
                    <li>6.c) Toss of coin.</li>
                </ul>
            </li>
            <li>7. At the end of the league stage all the yellow and red cards will be null and void.</li>
            <li>8. This is a 9 a side tournament with 6 substitutes. No rolling substitute, total registration is 15 players.</li>
            <li>9. The duration of the full time game is 50 minutes, 25 minutes each way and 5 minutes water break.</li>
            <li>10. Tie - breaker will apply from semi-final onwards.</li>
            <li>11. Incase of late start, the match timings will reduce to 20 minutes each way or will be decided on the basis of referee’s or the organizing teams’ decision.</li>
            <li>12. Teams should report 15 minutes before kick-off.</li>
            <li>13. Incase of any changes in the timings of the match the committee will inform in advance to the team captain.</li>
            <li>14. No offside rule during the game</li>
            <li>15. Any objection, only the captain will discuss with the referee on field.</li>
            <li>16. Add on time for each half will be the sole decision of the on field referee.</li>
            <li>17. If any team misbehaves on and off the field, strict action will be taken and committee decision will be final & binding.</li>
        </ol>`
    };

    return <>
    <DefaultPage nav={homeNavigation}>
    <main className="flex justify-center">
        <section className="flex flex-col gap-4 px-8 py-10 max-w-[800px]">
            {/* <CategoryCard categoryId={post.categoryId} /> */}
            <h1 className="text-2xl font-bold">{data.sportTitle}</h1>
            <img className="w-full object-cover" src={data.sportImage.url} alt="Football Event" />
            {/* <div className="flex justify-between items-center">
                <AuthorCard authorId={post.authorId} />
                <h5 className="text-xs text-gray-500">{post.timestamp.toLocaleDateString()}</h5>
            </div> */}
            <div className="flex flex-row gap-2 flex-wrap">
                {data.keyPoint.map((keyPoint,index)=>(
                    <div key={index} className="bg-red-500 rounded-md p-3">{keyPoint}</div>
                ))}
                {/* <div className="bg-red-500 rounded-md p-3">David james Eluvathingal</div>
                <div className="bg-red-500 rounded-md p-3">David james Eluvathingal</div>
                <div className="bg-red-500 rounded-md p-3">David james </div> */}
            </div>
            <div className="flex flex-col items-center">
                <div>Rules</div>
                {/* <RichText content={data.rulelist.raw.children}/> */}
            <div className="gridboxxx" dangerouslySetInnerHTML={{ __html: data.sportRule.html }}></div>
            </div>
        </section>
    </main>
    </DefaultPage>
    </>
}

function AuthorCard({ authorId }) {
    const author = {
        name: "John Doe",
        photoURL: "https://example.com/johndoe.jpg"
    };

    return <div className="flex gap-2 items-center">
        <img className="h-6 w-6 rounded-full object-cover" src={author.photoURL} alt="Author" />
        <h4 className="text-sm text-gray-500">{author.name}</h4>
    </div>
}

function CategoryCard({ categoryId }) {
    const category = {
        iconURL: "https://example.com/football-icon.jpg",
        name: "Football"
    };

    return <div className="flex">
        <div className="flex gap-2 items-center bg-white bg-opacity-60 rounded-full px-2 py-1 border">
            <img className="h-4 w-4 rounded-full object-cover" src={category.iconURL} alt="Category Icon" />
            <h4 className="text-xs text-gray-500">{category.name}</h4>
        </div>
    </div>
}
