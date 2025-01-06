import React, { useEffect, useState } from "react";
import CardComponent from "../Card/CardComponent";
import Heading from "../Heading";
import { Gradient } from "../design/Services";
import { Rings } from "../design/Hero";
import PointsTable from "./PointsTable";
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
    <div className="">
       
      <Section
        className="pt-14 pb-20"
        crosses
        crossesOffset="lg:translate-y-[0rem]"
        customPaddings
      >
        
      <div className="rotate-40">
                    <Gradient/>
                    </div>
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
            <PointsTable rows={remainingPoints}/>
          {/* Display remaining points */}
          
        </div>
        <Rings/>
      </Section>
    </div>
  );
};

export default FetchPointsData;
