import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {flex: 1, marginLeft: 10},
  image: {
    justifyContent: 'center',
    height: 370,
  },
  linearGradient: {height: 370, borderRadius: 24},
  imageInner: {
    flex: 1,
    margin: 10,
  },
  topTag: {
    fontSize: 10,
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.textColorWhite,
    backgroundColor: theme.colors.omlette,
    width: 90,
    textAlign: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    color: theme.colors.textColorWhite,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  timingConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 5,
    marginTop: 2,
    fontSize: 10,
    color: theme.colors.textColorGray,
    fontFamily: theme.fontFamilyWeight.Medium,
  },
  tags: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tag: {
    fontSize: 10,
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.textColorWhite,
    // width: 90,
    textAlign: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 10,
    // marginTop: 10,
  },
  tag1: {
    backgroundColor: theme.colors.tosqa,
  },
  tag2: {
    backgroundColor: theme.colors.blueColor,
  },
  tag3: {
    backgroundColor: theme.colors.purple,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  userConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userData: {
    marginLeft: 15,
  },
  username: {
    color: theme.colors.textColorWhite,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  userCategory: {
    marginTop: -5,
    fontSize: 10,
    color: theme.colors.passwordIconColor,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
});

export default styles;
