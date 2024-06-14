import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E84D0C',
    alignItems: 'flex-end',
    paddingVertical: hp(0.3),
  },
  title: {
    fontSize: RFPercentage(2.5),
    color: '#FFF',
    fontFamily: 'Poppins-Medium',
  },
  viewAll: {
    fontSize: RFPercentage(1.8),
    color: '#E84D0C',
    fontFamily: 'Poppins-Regular',
  },
  popSection: {
    width: 150,
    marginVertical: hp(0.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    marginRight: wp(5),
  },
  image: {
    height: 100,
    width: 150,
    borderRadius: 7,
  },
});
