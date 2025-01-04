import React, { useEffect, useState } from "react";

import "./points.css";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Sort data by points in descending order
  const sortedData = [...data].sort((a, b) => b.point - a.point);

  const FirstPos = sortedData.slice(0, 1);

  // Extract top 2 points
  const topPoints = sortedData.slice(1, 3);

  const remainingPoints = sortedData.slice(3);

  return (
    <div>
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 0,
            }}
          ></div>
        </div>
      </div>

      <div className="home-page">
        <div className="content">
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              zIndex: 1,
              padding: "20px",
            }}
          >
            <h2 style={{ color: "whitesmoke" }}>Top Points</h2>

            <div
              key={1}
              style={{
                padding: "10px",
                textAlign: "center",
                border: "1px solid whitesmoke",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                width: "150px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong style={{ color: "whitesmoke" }}>
                {FirstPos[0].department}
              </strong>

              <div>
                <img
                  src={FirstPos[0].image}
                  alt={FirstPos[0].department}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>

            {/* Display top 2 points */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              {topPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    border: "1px solid whitesmoke",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    width: "150px",
                  }}
                >
                  <strong style={{ color: "whitesmoke" }}>
                    {point.department}
                  </strong>
                  
                  <div>
                    <img
                      src={point.image}
                      alt={point.department}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginTop: "10px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ color: "whitesmoke" }}>All Points</h2>

            {/* Table for remaining points */}
            <table
              style={{
                margin: "0 auto",
                borderSpacing: "20px",
              }}
            >
              <tbody>
                <tr>
                  {remainingPoints.map((point, index) => (
                    <td
                      key={index}
                      style={{
                        padding: "10px",
                        textAlign: "center",
                        border: "1px solid whitesmoke",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                        width: "150px"
                      }}
                    >
                      <strong style={{ color: "whitesmoke" }}>
                        {point.department}
                      </strong>
               
                      <div>
                        <img
                          src={point.image}
                          alt={point.department}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchPointsData;
