/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import imagePaths from '../../constants/imagePaths';
import navigationStrings from '../../constants/navigationStrings';
import styles from './style';

const Welcome = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image style={styles.logoImage} source={imagePaths.logo} />
        <Text style={styles.headTextColor}>
          Ajher<Text style={styles.headText}>yuk</Text>
        </Text>
        <Text style={styles.title}>Welcome to Ajheryuk</Text>
        <Text style={styles.subTitle}>
          Best and popular apps for live education course from home
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(navigationStrings.SIGNIN)}
          style={styles.getStartedBtnParent}>
          <Text style={styles.getStartedBtn}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Welcome;
