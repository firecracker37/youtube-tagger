import React from 'react'
import { getAuth } from 'firebase/auth'
import { useYouTubeSubscriptions } from '../hooks/useYouTubeSubscriptions'

const ListYouTubeSubscriptions = () => {
 // Get the current user object from Firebase auth
 const auth = getAuth();
 const user = auth.currentUser;

 // Get the idToken from the user object
 const idToken = user.idToken;

 // Use the custom hook to get the subscriptions and error
 const [subscriptions, error] = useYouTubeSubscriptions(idToken);
 console.log(subscriptions)

 // Render the component based on the state
 if (error) {
   return <div className="error">{error}</div>;
 } else if (subscriptions.length === 0) {
   return <div className="empty">No subscriptions found</div>;
 } else {
   return (
     <div className="list">
       {subscriptions.map((subscription) => (
         <div className="item" key={subscription.id}>
           <img src={subscription.snippet.thumbnails.default.url} alt="" />
           <span>{subscription.snippet.title}</span>
         </div>
       ))}
     </div>
   );
 }
}


export default ListYouTubeSubscriptions