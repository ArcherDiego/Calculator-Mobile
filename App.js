import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

import Calculator from '../Calculator/src/page/Calculator/Calculator'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}
