import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {THEME} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
  },
  innerContainer: {
    paddingHorizontal: wp(3),
  },
});
