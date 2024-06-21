import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: wp(3),
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: THEME.WHITE,
  },
  menuTitle: {
    fontSize: RFPercentage(1.8),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp(5),
  },
});
