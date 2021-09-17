/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import CourseSlide from '../../components/CourseSlide';
import Header from '../../components/Header';
import StatusList from '../../components/StatusList';
import data from '../../constants/data';
import imagePaths from '../../constants/imagePaths';
import navigationStrings from '../../constants/navigationStrings';
import styles from './style';

const {width} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const Home = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [categories, setCategories] = useState(data.categories_data);
  const setActiveCategory = id => {
    const updatedCategories = categories.map(cat => {
      if (id === cat.id) {
        return {...cat, status: !cat.status};
      }
      return {...cat, status: false};
    });
    setCategories(updatedCategories);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Header
            image={imagePaths.profileImage}
            online
            withBackground
            headTitle="Hello,Samuel!"
            messages={false}
          />
          <StatusList statuses={data.statuses} />
          <Text style={styles.upcomingTitle}>
            <Text style={{...styles.upcomingTitle, ...styles.bold}}>
              Upcoming
            </Text>{' '}
            course of this week
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setActiveCategory(item.id)}
                style={
                  item.status ? styles.activeCategoryItem : styles.categoryItem
                }>
                <Text
                  style={item.status ? styles.activeCategory : styles.category}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            )}
          />
          <Animated.FlatList
            bounces={false}
            snapToInterval={ITEM_SIZE}
            style={{marginTop: 20, height: 410}}
            decelerationRate={0.5}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            pagingEnabled
            scrollEventThrottle={16}
            data={data.courses}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, 30, 0],
              });
              let last = data.courses.length - 1 === index;
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(navigationStrings.COURSEDETAILS, {
                      id: item.id,
                    })
                  }
                  activeOpacity={0.7}>
                  <CourseSlide
                    last={last}
                    translateY={translateY}
                    course={item}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
