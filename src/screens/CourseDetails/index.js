/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';
import styles from './style';
import data from '../../constants/data';
import LinearGradient from 'react-native-linear-gradient';
import ProfileImage from '../../components/ProfileImage';
import imagePaths from '../../constants/imagePaths';
import navigationString from '../../constants/navigationStrings';
import ListItem from '../../components/ListItem';

const CourseDetails = ({navigation, route}) => {
  const id = route.params.id;
  const course = data.courses.find(item => item.id === id);
  return (
    <>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationString.HOME)}>
                <Icon
                  style={styles.backBtn}
                  name="chevron-left"
                  color={theme.colors.primary}
                  size={20}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Course Details</Text>
              <Icon
                style={styles.heartBtn}
                name="heart"
                color={theme.colors.primary}
                size={20}
              />
            </View>
            <ImageBackground
              imageStyle={{borderRadius: 24}}
              style={styles.image}
              source={course.backGroundImage}>
              <LinearGradient
                style={styles.linearGradient}
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
                locations={[0, 0.01, 100]}>
                <View style={styles.play}>
                  <View style={styles.playBack} />
                  <Icon
                    style={styles.playBtn}
                    name="play"
                    size={30}
                    color={theme.colors.textColorBlack}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.tags}>
              {course.tags.map((tag, i) => (
                <Text
                  style={{...styles.tag, ...styles['tag' + (i + 1)]}}
                  key={tag + i}>
                  {tag}
                </Text>
              ))}
            </View>
            <Text style={styles.courseContent}>{course.content}</Text>
            <View style={styles.courseCreator}>
              <ProfileImage online image={imagePaths.profileImage} />
              <View style={styles.courseDetail}>
                <Text style={styles.courseUsername}>Laurel Seilha</Text>
                <Text style={styles.courseUserType}>Product Designer</Text>
              </View>
              <View style={styles.courseTiming}>
                <View style={styles.timingConatiner}>
                  <Icon
                    color={theme.colors.textColorGray}
                    name="clock"
                    size={10}
                  />
                  <Text style={styles.time}>{course.time}</Text>
                </View>
                {course.eBook ? (
                  <View>
                    <Text style={styles.topTag}>{course.eBook}</Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.list}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.9} style={styles.getFollowBtnParent}>
        <Text style={styles.getFollowBtn}>Follow class</Text>
      </TouchableOpacity>
    </>
  );
};
export default CourseDetails;
