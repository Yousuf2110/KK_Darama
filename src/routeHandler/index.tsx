import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {SCREEN} from '../constants';
import Profile from '../screens/profile';
import DrawerContent from '../components/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: hp(30),
        },
        headerShown: false,
      }}
      drawerContent={({navigation}: any) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name={SCREEN.HOME} component={Home} />
    </Drawer.Navigator>
  );
};

const RouteHandler = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'DrawerNavigator'} component={DrawerNavigator} />
        <Stack.Screen name={SCREEN.HOME} component={Home} />
        <Stack.Screen name={SCREEN.PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteHandler;
