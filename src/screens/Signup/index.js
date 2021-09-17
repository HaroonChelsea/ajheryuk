/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import InputText from '../../components/InputText';
import {theme} from '../../config/theme';
import imagePaths from '../../constants/imagePaths';
import navigationStrings from '../../constants/navigationStrings';
import styles from './style';

const Signin = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image style={styles.logoImage} source={imagePaths.logo} />
        <InputText
          placeholder="Fullname"
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
        />
        <InputText
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
        />
        <InputText
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.SIGNIN)}
          activeOpacity={0.8}
          style={styles.getStartedBtnParent}>
          <Text style={styles.getStartedBtn}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.or}>or</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.facebookBtn}>
          <Icon name="facebook" size={20} color={theme.colors.textColorWhite} />
          <Text style={styles.facebookBtnText}>Log in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.googleBtn}>
          <Icon name="google" size={20} color={theme.colors.black} />
          <Text style={styles.googleBtnText}>Log in with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsAndPolicy}>
          By signing up you accept the{' '}
          <Text style={styles.termsPolicy}>Terms of Service</Text> and
          <Text style={styles.termsPolicy}> Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.signupContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(navigationStrings.SIGNIN)}>
          <Text style={styles.signupText}>
            Already have an account?<Text style={styles.signup}> Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signin;
