import React, { useCallback } from 'react';
import { useFonts } from 'expo-font'

import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

import Calculator from '../Calculator/src/page/Calculator/Calculator'
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Arcade': require('./src/assets/fonts/Arcade.ttf'),
    'Digital-7': require('./src/assets/fonts/digital-7.mono.ttf'),
    'Sofia': require('./src/assets/fonts/SofiaSansCondensed-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark' />
      <Calculator onLayout={ onLayoutRootView } />
    </ThemeProvider>
  );
}

export default App
