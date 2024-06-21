import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {THEME} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: RFPercentage(3.5),
    color: THEME.RED,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: RFPercentage(3.5),
    color: THEME.WHITE,
    fontFamily: 'Poppins-SemiBold',
  },
});
