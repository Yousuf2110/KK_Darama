import React from 'react';
import {View, Text, SafeAreaView, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Menu from '../menu';
import {styles} from '../../screens/home/styles';
import {screenTitle} from '../../screens/home/components/constants';

const DrawerContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          KK
          <Text style={styles.title}>Drama</Text>
        </Text>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/img.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>example@gmail.com</Text>
          </View>
        </View>
        <FlatList
          data={screenTitle}
          renderItem={({item}) => <Menu item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
