import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Entypo name="menu" color={'#FFFFFF'} size={30} />
        <Text style={styles.title}>
          KK
          <Text style={styles.text}>Drama</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
