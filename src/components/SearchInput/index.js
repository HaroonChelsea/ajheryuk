import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../config/theme';
import styles from './style';

const InputText = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
        <Icon name="search" size={25} color={theme.colors.textColorWhite} />
      </TouchableOpacity>
    </View>
  );
};
export default InputText;
