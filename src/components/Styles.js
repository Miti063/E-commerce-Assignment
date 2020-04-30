import {StyleSheet} from 'react-native';

import Colors from '../utils/Colors';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  locationCont: {
    flexDirection: 'row',
    backgroundColor: Colors.heading,
    padding: 10,
    alignItems: 'center'
  },
  locationTxt: {
    color: Colors.white,
    fontSize: 15,
    marginLeft: 8
  },
  hdrCont: {
    height: 50,
    backgroundColor:Colors.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hdrTxt: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: 'bold'
  }
});
