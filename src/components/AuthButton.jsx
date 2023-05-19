import React from 'react'
import { auth, provider } from '../utils/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import useUserDoc from '../hooks/useUserDoc';

const AuthButton = () => {
 const [user] = useAuthState(auth);

 const signIn = () => {
 signInWithPopup(auth, provider).catch(alert);
 };

 const signOut = () => {
 auth.signOut();
 };

 useUserDoc(user);

 return user ? (
 <button 
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    onClick={signOut}>Sign Out</button>
 ) : (
 <button
 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    onClick={signIn}>Sign In</button>
 )
}

export default AuthButton