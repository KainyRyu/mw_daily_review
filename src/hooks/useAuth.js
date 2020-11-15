import { useEffect, useState } from 'react';
import { firebaseAuthService } from '../fbase';

function useAuth() {
  const [fuser, setFuser] = useState();

  // 유저 로그인 여부
  useEffect(() => {
    firebaseAuthService.onAuthStateChanged(function (user) {
      if (user) {
        setFuser(user);
      } else {
        setFuser(null);
      }
    });
  }, [fuser]);

  return fuser;
}

export default useAuth;
