import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

import Calculator from '../Calculator/src/page/Calculator/Calculator'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <StatusBar style="dark" />
        <Calculator />
      </View>
    </ThemeProvider>
  );
}
