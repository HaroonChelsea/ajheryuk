/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, Image, Animated} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../config/theme';
import LinearGradient from 'react-native-linear-gradient';

const CourseSlide = ({course, translateY, last}) => {
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateY}],
        marginRight: last ? 10 : 0,
      }}>
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
          <View style={styles.imageInner}>
            {course.eBook ? (
              <View>
                <Text style={styles.topTag}>{course.eBook}</Text>
              </View>
            ) : null}

            <View style={styles.details}>
              <Text style={styles.title}>{course.title}</Text>
              <View style={styles.timingConatiner}>
                <Icon
                  color={theme.colors.textColorGray}
                  name="clock"
                  size={10}
                />
                <Text style={styles.time}>{course.time}</Text>
              </View>
              <View style={styles.tags}>
                {course.tags.map((tag, i) => (
                  <Text
                    style={{...styles.tag, ...styles['tag' + (i + 1)]}}
                    key={tag + i}>
                    {tag}
                  </Text>
                ))}
              </View>
              <View style={styles.userConatiner}>
                <Image
                  style={styles.profileImage}
                  source={course.user.userAvatar}
                />
                <View style={styles.userData}>
                  <Text style={styles.username}>{course.user.username}</Text>
                  <Text style={styles.userCategory}>
                    {course.user.userType}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};

export default CourseSlide;
