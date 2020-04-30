import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import GetLocation from 'react-native-get-location';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Geocoder from 'react-native-geocoding';

import Colors from '../utils/Colors';
import Styles from './Styles';

const FetchLocation = () => {
  const { locationCont, locationTxt } = Styles;
  useEffect(() => {
    Geocoder.init("AIzaSyAYT8yzGl1rqq2tNXeawV_NHeoj0M6am2Q");
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      const address = await Geocoder.from(41.89, 12.49);
      // const address = await Geocoder.from(location.latitude,location.longitude);
      console.log('----add-----',address)
    //   Geocoder.from(41.89, 12.49)
		// .then(json => {
    //     		var addressComponent = json.results[0].address_components[0];
		// 	console.log(addressComponent);
		// })
		// .catch(error => console.warn(error));

      console.log('----location----', location);
    } catch (error) {
      const {code, message} = error;
      console.warn(code, message);
    }
  };

  return (
    <View style={locationCont}>
      <EvilIcons name="location" color={Colors.white} size={30} />
      <Text style={locationTxt}>Deliever to </Text>
    </View>
  );
};

export default FetchLocation;
