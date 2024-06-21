import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.INPUT,
    borderRadius: 10,
    paddingVertical: hp(0.4),
    marginVertical: hp(1.5),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: wp(1),
  },
  input: {
    color: THEME.WHITE,
    fontSize: RFPercentage(2),
    marginLeft: wp(2),
    paddingHorizontal: 10,
  },
});
