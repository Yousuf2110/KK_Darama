import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {data} from '../constants';
import {SCREEN} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const renderItem = () => {
  return (
    <View style={styles.popSection}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/img.png')}
      />
    </View>
  );
};

const PopularSection = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Popular</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.PROFILE)}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList horizontal data={data} renderItem={renderItem} />
    </View>
  );
};

export default PopularSection;
