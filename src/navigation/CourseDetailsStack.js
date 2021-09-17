import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {CourseDetails} from '../screens';

export default function CourseDetailsStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.COURSEDETAILS}
        component={CourseDetails}
      />
    </>
  );
}
