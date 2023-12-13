import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStackNacigator from './navigations/RootStackNacigator';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStackNacigator />
    </NavigationContainer>
  );
};

export default App;