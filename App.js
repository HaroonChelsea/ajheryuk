/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Appearance, StatusBar, View} from 'react-native';
import {theme} from './src/config/theme';
import Routes from './src/navigation/routes';

const App = () => {
  const [themeState, setThemeState] = useState(
    Appearance.getColorScheme() || 'light',
  );
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setThemeState(colorScheme);
    });
    return () => subscription.remove();
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={themeState === 'dark' ? 'dark-content' : 'dark-content'}
        backgroundColor={
          themeState === 'dark'
            ? theme.colors.black
            : theme.colors.backgroundColor
        }
      />
      <Routes />
    </View>
  );
};

export default App;
