import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './colors'; 
import headerStyles from './headerStyles';
import mainStyles from './mainStyles';

const {width, height} = Dimensions.get('window');

const appStyles = StyleSheet.create({
  safeArea: {
    flex:1,
  },

  body: {
    backgroundColor: colors.primary,
    height: "100%",
  },
  ...headerStyles,
  ...mainStyles,
});

export default appStyles;