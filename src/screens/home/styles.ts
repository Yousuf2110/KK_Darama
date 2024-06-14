import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212832',
  },
  innerContainer: {
    paddingHorizontal: wp(3),
  },
});
