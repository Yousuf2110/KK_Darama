import React from 'react';
import {BackHandler, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {SCREEN} from '../../constants/screen';
import {THEME} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const Menu = ({item}: any) => {
  const navigation: any = useNavigation();

  const handleNavigation = (title: any) => {
    switch (title) {
      case SCREEN.HOME:
        navigation.goBack();
        break;
      case SCREEN.PROFILE:
        navigation.navigate(SCREEN.PROFILE);
        break;
      case SCREEN.HOME:
        navigation.navigate(SCREEN.HOME);
        break;
      case SCREEN.EXIT:
        BackHandler.exitApp();
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleNavigation(item?.title)}
      style={styles.menu}>
      <FontAwesome name={item?.icon} color={THEME.WHITE} size={25} />
      <Text style={styles.menuTitle}>{item?.title}</Text>
    </TouchableOpacity>
  );
};

export default Menu;
