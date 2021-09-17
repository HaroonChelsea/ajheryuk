import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.textColorWhite,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  backBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: theme.colors.inputTextBackground,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  image: {
    marginHorizontal: 10,
    height: 230,
  },
  linearGradient: {
    flex: 1,
    height: 230,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    position: 'relative',
  },
  playBack: {
    backgroundColor: theme.colors.textColorWhite,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#ffffff9c',
    borderWidth: 10,
  },
  playBtn: {
    width: 70,
    position: 'absolute',
    top: '25%',
    left: '6.5%',
  },
  courseTitle: {
    color: theme.colors.textColorBlack,
    fontFamily: theme.fontFamilyWeight.SemiBold,
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 15,
  },
  tags: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  tag: {
    fontSize: 10,
    fontFamily: theme.fontFamilyWeight.Medium,
    color: theme.colors.textColorWhite,
    textAlign: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 10,
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
  courseContent: {
    color: theme.colors.passwordIconColor,
    fontFamily: theme.fontFamilyWeight.Regular,
    fontSize: 14,
    marginHorizontal: 10,
    marginTop: 5,
    textAlign: 'justify',
  },
  courseCreator: {
    backgroundColor: theme.colors.textColorWhite,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  courseDetail: {
    marginLeft: 20,
    flex: 1,
  },
  courseUsername: {
    color: theme.colors.textColorBlack,
    fontFamily: theme.fontFamilyWeight.SemiBold,
  },
  courseUserType: {
    fontSize: 10,
    color: theme.colors.passwordIconColor,
    fontFamily: theme.fontFamilyWeight.Medium,
  },
  courseTiming: {
    alignItems: 'flex-end',
  },
  timingConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  time: {
    marginLeft: 2,
    marginTop: 2,
    fontSize: 10,
    color: theme.colors.textColorGray,
    fontFamily: theme.fontFamilyWeight.Medium,
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
  },
  getFollowBtnParent: {
    bottom: 20,
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 999,
    width: '95%',
  },
  getFollowBtn: {
    backgroundColor: theme.colors.primary,
    fontFamily: theme.fontFamilyWeight.Medium,
    fontSize: 16,
    color: theme.colors.textColorWhite,
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  list: {
    marginBottom: 70,
  },
});

export default styles;
