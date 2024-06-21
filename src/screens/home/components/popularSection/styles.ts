import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  bottomSpace: {
    marginBottom: 5,
  },
  container: {
    width: '95%',
    marginVertical: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: THEME.RED,
    alignItems: 'flex-end',
    paddingVertical: hp(0.3),
    alignSelf: 'center',
  },
  title: {
    fontSize: RFPercentage(2.5),
    color: THEME.WHITE,
    fontFamily: 'Poppins-Medium',
  },
  viewAll: {
    fontSize: RFPercentage(1.8),
    color: THEME.RED,
    fontFamily: 'Poppins-Regular',
  },
  popSection: {
    width: 150,
    marginVertical: hp(0.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    marginRight: wp(5),
    paddingHorizontal: 10,
  },
  image: {
    height: 100,
    width: 150,
    borderRadius: 7,
  },
});
