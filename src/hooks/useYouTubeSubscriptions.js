import axios from "axios";
import { useState, useEffect } from "react";

// A custom hook that fetches the YouTube subscriptions for a given idToken
export function useYouTubeSubscriptions(idToken) {
  // Define the state variables for subscriptions and error
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);

  // Use the useEffect hook to make the API request when the idToken changes
  useEffect(() => {
    // Define an async function to fetch the subscriptions
    const fetchSubscriptions = async () => {
      try {
        // Make a GET request to the YouTube Data API with the idToken
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true",
          {
            // Pass the idToken as an access_token query parameter
            params: {
              access_token: idToken,
            },
          }
        );
        // Set the subscriptions state with the response data
        setSubscriptions(response.data.items);
      } catch (err) {
        // Set the error state with the error message
        setError(err.message);
      }
    };
    // Call the fetchSubscriptions function if the idToken is not null
    if (idToken) {
      fetchSubscriptions();
    }
  }, [idToken]); // Pass the idToken as a dependency

  // Return the subscriptions and error state variables from the hook
  return [subscriptions, error];
}