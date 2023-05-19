import { useEffect } from "react";
import { getFirestore, doc as docRef, setDoc } from "firebase/firestore";

// A custom hook that creates or updates the user document in Firestore
export default function useUserDoc(user, doc = null) {
  const db = getFirestore();

  useEffect(() => {
    if (user) {
      // Get the user document reference
      const userRef = docRef(db, "users", user.uid);
      // Set the user data with merge option
      // Use async/await syntax with try catch block
      const setUserDoc = async () => {
        try {
          await setDoc(
            userRef,
            // Use the doc object if provided, otherwise use the default values
            doc || {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            },
            { merge: true }
          );
          console.log("User document created or updated");
        } catch (error) {
          console.error("Error writing user document: ", error);
        }
      };
      setUserDoc();
    }
  }, [user, db, doc]);
}
