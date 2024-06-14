import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Entypo name="menu" color={'#FFFFFF'} size={30} />
        </TouchableOpacity>

        <Text style={styles.title}>
          KK
          <Text style={styles.text}>Drama</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
