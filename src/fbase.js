import firebase from 'firebase';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const firebaseInstance = firebase;

export const firebaseAuthService = firebaseInstance.auth();

export default firebaseInstance;
