import React from "react"
import Section from "../Section"
import DefaultPage from "../DefaultPage";
import { Gradient } from '../design/Services';
import { tierlist } from "../../constants";
import './tier.css';

export default function TierSystem() {
  const tiers = [
    {
      title: "Tier 1",
      points: "15, 11, 7",
      categories: [
        {
          name: "SPORTS",
          items: [
            "Field Football Boys",
            "Basketball Boys",
            "Basketball Girls",
            "Box Cricket Boys",
            "Box Cricket Girls",
            "Volleyball Boys",
            "Volleyball Girls",
            "Kabaddi Boys",
            "Throwball Girls",
            "Rink Football Girls",
            "Tug Of War Boys",
            "Tug Of War Girls",
          ],
        },
        {
          name: "ATHLETICS",
          items: ["4×100 Meters Relay (Boys)", "4×400 Meters Relay (Boys)", "4×100 Meters Relay (Girls)"],
        },
        {
          name: "FINE ARTS",
          items: ["Shutter Painting", "Pot Painting"],
        },
        {
          name: "PHOTOGRAPHY",
          items: ["Short Film"],
        },
        {
          name: "PERFORMING ARTS",
          items: ["Group Dance", "Fashion Show"],
        },
        {
          name: "LITERARY ARTS",
          items: ["Debate Competition (Group)"],
        },
      ],
    },
    {
      title: "Tier 2",
      points: "10, 7, 4",
      categories: [
        {
          name: "SPORTS",
          items: [
            "Chess (Mixed)",
            "Carrom Doubles (Mixed)",
            "Table Tennis Singles (Boys)",
            "Table Tennis Doubles (Boys)",
            "Carrom Singles (Boys)",
            "Table Tennis Singles (Girls)",
            "Table Tennis Doubles (Girls)",
            "Carrom Singles (Girls)",
          ],
        },
        {
          name: "ATHLETICS",
          items: [
            "100 Meters (Boys)",
            "200 Mtrs (Boys)",
            "400 Mtrs (Boys)",
            "800 Mtrs (Boys)",
            "Shot Put (Boys)",
            "Discuss Throw (Boys)",
            "Javelin Throw (Boys)",
            "100 Meters (Girls)",
            "200 Mtrs (Girls)",
            "400 Mtrs (Girls)",
            "Shot Put (Girls)",
            "Discuss Throw (Girls)",
            "Javelin Throw (Girls)",
          ],
        },
        {
          name: "LITERARY ARTS",
          items: ["Debate Competition (Duo)", "Elocution Competition"],
        },
        {
          name: "FINE ARTS",
          items: ["Flag Painting"],
        },
        {
          name: "PERFORMING ARTS",
          items: [
            "Solo Singing (Western)",
            "Solo Singing (Regional)",
            "Duet Singing",
            "Solo Dancing (Western)",
            "Solo Dancing (Regional)",
          ],
        },
      ],
    },
    {
      title: "Tier 3",
      points: "6, 4, 2",
      categories: [
        {
          name: "LITERARY ARTS",
          items: ["Book Quest", "Open-Mic Competition"],
        },
        {
          name: "FINE ARTS",
          items: ["The Painted Story"],
        },
        {
          name: "PHOTOGRAPHY",
          items: ["Euphoria Through My Lens", "Candid Photography"],
        },
        {
          name: "PERFORMING ARTS",
          items: ["Instrumental", "Solo Dance Battle"],
        },
        {
          name: "MEGA AND FUN",
          items: ["Turbo Takedown", "Cosmic Odyssey"],
        },
      ],
    },
  ]

  return (
    <DefaultPage nav={tierlist}>
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings id="event">
      <Gradient />
      <div className="tier-system p-10">
        <h1 className="title m-10">Tier System</h1>
        <div className="tiers">
          {tiers.map((tier, index) => (
            <div key={tier.title} className="tier">
              <div className="tier-header">
                <h2>{tier.title}</h2>
                <p>Points: {tier.points}</p>
              </div>
              <div className="tier-content">
                {tier.categories.map((category) => (
                  <div key={category.name} className="category">
                    <h3>{category.name}</h3>
                    <ul className="tierContentUL">
                      {category.items.map((item) => (
                        <li className="tierContent" key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>   
          ))}
        </div>
      </div>
    </Section >
    </DefaultPage>
  )
}

