import { api_endpoint } from "../Euphoria";
import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';


const graphqlClient = new GraphQLClient(api_endpoint);

export const EuphoriaEvent = async () => {
    const query2 = gql`
            query MyQuery {
                sportRuleBooks(first:20) {
                  sportTitle
                  sportImage {
                    url
                  }
                  sportRule {
                    html
                  }
                  keyPoint
                  sportCheck
                }
                paEvents(first:20) {
                  paTitle
                  paPhrase
                  paKeypoint
                  paRule {
                    html
                  }
                  paImage {
                          url
                        }
                  paCheck
                }
                laEvents(first:20) {
                  laTitle
                  laKeypoint
                  laRule {
                    html
                  }
                  laCheck
                  laDescription
                  laImage {
                    url
                  }
                }

                  indoors{
                      indoorTitle
                      indoorCheck
                      indoorImage{
                        url
                      }
                      keypoints
                    }
            }       
  `;
    // try {
    //     const response = await graphqlClient.request(query);

    //     // Check if the response contains data
    //     if (response && response.euphoriaEvents && response.euphoriaEvents.length > 0) {
    //         console.log('Data collected successfully:', response.euphoriaEvents);
    //     } else {
    //         console.log('No data found or data collection failed.');
    //     }

    //     return response;
    // } catch (error) {
    //     console.error('Error collecting data:', error);
    // }
    const response = await graphqlClient.request(query2);
    // const response2 = await graphqlClient.request(query3);
    // console.log('Data collected successfully:', response.euphoriaEvents);
    return response
};

export const FixtureEvent = async () => {
    const query = gql`
        query MyQuery {
        fixtures{
            eventFixture
        }
        }      
  `;
    // try {
    //     const response = await graphqlClient.request(query);

    //     // Check if the response contains data
    //     if (response && response.euphoriaEvents && response.euphoriaEvents.length > 0) {
    //         console.log('Data collected successfully:', response.euphoriaEvents);
    //     } else {
    //         console.log('No data found or data collection failed.');
    //     }

    //     return response;
    // } catch (error) {
    //     console.error('Error collecting data:', error);
    // }

    const response = await graphqlClient.request(query);
    console.log('Data collected successfully:', response.fixtures);
    return response
};

EuphoriaEvent();
FixtureEvent();