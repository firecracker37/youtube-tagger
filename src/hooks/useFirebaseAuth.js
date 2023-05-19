import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup } from 'firebase/auth';
import useUserDoc from '…/hooks/useUserDoc';
import { FirebaseContext } from './FirebaseContext';

const useFirebaseAuth = () => { 
    const { auth, provider } = React.useContext(FirebaseContext);
    const [user] = useAuthState(auth);

    const signIn = () => { signInWithPopup(auth, provider).catch(alert) }

    const signOut = () => { auth.signOut() }

    useUserDoc(user)

    return { user, signIn, signOut } 
}

export default useFirebaseAuth