import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import Styles from './Styles';
import Header from './Header';

const ScreenContainer = (props) => {
  const {top, bottom} = useSafeArea();
  const {screenContainer} = Styles;
  return (
    <ScrollView
      style={[
        screenContainer,
        props.contStyle,
        {
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}>
      <Header />
      {props.children}
    </ScrollView>
  );
};

export default ScreenContainer;
