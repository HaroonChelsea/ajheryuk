import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {Signin, Signup, Welcome} from '../screens';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.WELCOME} component={Welcome} />
      <Stack.Screen name={navigationStrings.SIGNIN} component={Signin} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
    </>
  );
}
