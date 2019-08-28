import React from 'react';
import SignIn from '../../components/signin/Signin';
import SignUp from '../../components/signup/SignUp';
import './SignInAndSignUp.scss';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
