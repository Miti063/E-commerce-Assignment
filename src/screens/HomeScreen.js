import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScreenContainer from '../components/ScreenContainer';
import FetchLocation from '../components/FetchLocation';

const HomeScreen = (props) => {
  return (
    <ScreenContainer>
      <FetchLocation />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
