import React from 'react';
import {View, Text} from 'react-native';

import Styles from './Styles';

const Header = () => {
  const {hdrCont, hdrTxt} = Styles;
  return (
    <View style={hdrCont}>
      <Text style={hdrTxt}>E-Commerce App</Text>
    </View>
  )
}

export default Header
