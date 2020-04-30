import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNavigator from './src/navigator/HomeNavigator';
import Store from './src/reducers';

const App = (props) => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <MainNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
