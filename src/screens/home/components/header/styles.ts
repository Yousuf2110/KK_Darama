import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    marginBottom: hp(2),
    alignSelf: 'center',
    paddingHorizontal: wp(3),
  },
  wrapper: {
    width: '40%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  title: {
    fontSize: RFPercentage(3.8),
    color: '#E84D0C',
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp(0.6),
    left: wp(3),
  },
  text: {
    fontSize: RFPercentage(3.8),
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  },
});
