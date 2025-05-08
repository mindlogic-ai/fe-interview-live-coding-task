import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { global } from './global';

const overrides = {
  styles: { global },
  colors,
  breakpoints,
  // TODO: remove
  sizes: {
    container: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  // transition theme.transition.slow / theme.transition.fast
  // border radius
  radii: {
    none: '0',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '32px',
    full: '9999px',
  },
  // 반응형 폰트 사이즈 - 모바일에서는 더 작은 폰트 크기, 데스크톱에서는 기존 크기 유지
  fontSizes: {
    // 커스텀 폰트 크기 토큰 (em 단위 사용)
    // xs: { base: '0.7em', md: '0.7em' },
    subtitle: { base: '0.8em', md: '0.84em' },
    subtext: { base: '0.8em', md: '0.84em' },
    p: { base: '0.9em', md: '1em' },
    h5: { base: '1.1em', md: '1.2em' },
    h4: { base: '1.25em', md: '1.44em' },
    h3: { base: '1.5em', md: '1.75em' },
    h2: { base: '2em', md: '2.5em' },
    h1: { base: '2.4em', md: '3em' },
  },
  fontWeights: {
    p: 'medium',
    h5: 'bold',
    h4: 'semibold',
    h3: 'semibold',
    h2: 'semibold',
    h1: 'bold',
    subtext1: 'medium',
    subtext2: 'regular',
  },
  fonts: {
    body: '"Pretendard Variable", "Inter", "Noto Sans", sans-serif',
    heading: '"Pretendard Variable", "Inter", "Noto Sans", sans-serif',
  },
  semanticTokens: {
    colors: {
      primary: {
        lighter: 'blue.50',
        light: 'blue.300',
        main: 'blue.900',
        dark: 'blue.1000',
      },
      danger: {
        lighter: 'red.50',
        light: '#FFC9C9',
        main: 'red.500',
        dark: '#961616',
      },
      success: {
        lighter: '#EBFBF1',
        light: '#C1F4D4',
        main: '#019939',
        dark: '#016626',
      },
      warning: {
        lighter: '#FFF6E7',
        light: '#FFE9BA',
        main: 'yellow.400',
        dark: '#9D6508',
      },
    },
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: colors.blue[900],
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'blue.900',
            borderColor: 'blue.900',
          },
          _hover: {
            bg: 'blue.300',
          },
        },
      },
    },
  },
} as const;

const theme = extendTheme(overrides);

export default theme;
