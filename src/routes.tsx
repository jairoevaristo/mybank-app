import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appStack = createNativeStackNavigator();

import { Welcome } from './screens/Welcome';
import { Transfer } from './screens/Transfer';
import { Secure } from './screens/Secure';

export default function Routes() {
  return (
    <appStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <appStack.Screen
        name="Welcome"
        component={Welcome}
      />

      <appStack.Screen
        name="Secure"
        component={Secure}
      />

      <appStack.Screen
        name="Transfer"
        component={Transfer}
      />

    </appStack.Navigator>
  )
}