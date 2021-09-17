import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../config/theme';
import styles from './style';

const InputText = ({placeholder, value, onChangeText, secureTextEntry}) => {
  const [showPass, setShowPass] = useState(secureTextEntry);
  return secureTextEntry ? (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        secureTextEntry={showPass}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={() => setShowPass(!showPass)}
        style={styles.iconContainer}>
        {showPass ? (
          <Icon name="eye" size={25} color={theme.colors.passwordIconColor} />
        ) : (
          <Icon
            name="eye-slash"
            size={25}
            color={theme.colors.passwordIconColor}
          />
        )}
      </TouchableOpacity>
    </View>
  ) : (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  );
};
export default InputText;
