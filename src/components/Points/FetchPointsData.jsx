import React, { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import Heading from "../Heading";
import { Gradient } from "../design/Services";

import "./points.css";
import Section from "../Section";

const FetchPointsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          points {
            department
            point
            image
          }
        }
      `;

      try {
        const response = await fetch(
          "https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          }
        );

        const result = await response.json();
        setData(result.data.points);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-medium">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg font-medium text-red-500">Error: {error}</div>;
  }

  // Sort data by points in descending order
  const sortedData = [...data].sort((a, b) => b.point - a.point);

  // Extract top 3 points
  const topPoints = sortedData.slice(0, 3);
  const remainingPoints = sortedData.slice(3);

  return (
    <div>
      <Section
        className="pt-14 pb-20"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="relative flex flex-col items-center text-center z-10 px-5">
          <Heading title="Points" />

          {/* Display top 3 points */}
          <div className="flex flex-wrap gap-8 justify-center mb-12">
            {topPoints.map((point, index) => (
              <CardComponent
                key={index}
                department={point.department}
                image={point.image}
              />
            ))}
          </div>

          {/* Display remaining points */}
          <div className="w-full lg:w-[800px] sm:w-[400px] shadow-2xl shadow-indigo-500/50 bg-n-8 border border-n-6 rounded-2xl mx-auto">
            <ul className="divide-y divide-n-6">
              {remainingPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center py-4 px-6"
                >
                  <img
                    src={point.image}
                    width={40}
                    height={40}
                    alt="Check"
                    className="flex-shrink-0 rounded-full"
                  />
                  <h1 className="ml-4 text-lg font-medium text-gray-300">
                    {point.department}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FetchPointsData;
