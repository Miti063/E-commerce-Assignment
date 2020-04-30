import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from '../utils/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import ParentProduct from '../screens/ParentProduct';
import childProduct from '../screens/ChildProduct';
import ProductDetails from '../screens/ProductDetails';

const ProductStack = createStackNavigator();

const MainStack = () => {
  const {HOME_SCREEN, PARENT_PRODUCT, CHILD_PRODUCT, PRODUCT_DETAILS} = ScreenNames;
  return (
    <ProductStack.Navigator headerMode={'none'}>
      <ProductStack.Screen name={HOME_SCREEN} component={HomeScreen}/>
      <ProductStack.Screen name={PARENT_PRODUCT} component={ParentProduct}/>
      <ProductStack.Screen name={CHILD_PRODUCT} component={childProduct}/>
      <ProductStack.Screen name={PRODUCT_DETAILS} component={ProductDetails}/>
    </ProductStack.Navigator>
  )
}

export default MainStack;