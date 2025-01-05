import { api_endpoint } from "../Euphoria";
import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';


const graphqlClient = new GraphQLClient(api_endpoint);

export const EuphoriaEvent = async () => {
    const query = gql`
        query EuphoriaEvent {
        euphoriaEvents {
            heading
            ruleBook
            image {
            url
            }
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
    console.log('Data collected successfully:', response.euphoriaEvents);
    return response
};

// EuphoriaEvent();