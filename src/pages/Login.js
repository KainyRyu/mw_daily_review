import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import logo from '../assets/logo.png';
import fInstance, { firebaseAuthService } from '../fbase';

export default function Login() {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      fInstance.auth.GoogleAuthProvider.PROVIDER_ID,
      fInstance.auth.FacebookAuthProvider.PROVIDER_ID,
      fInstance.auth.TwitterAuthProvider.PROVIDER_ID,
      fInstance.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <div>
      <img src={logo} alt="" />
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebaseAuthService}
        />
      </div>
    </div>
  );
}
