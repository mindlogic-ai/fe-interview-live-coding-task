import { inter, noto, pretendard } from './font';

export const global = {
  html: {
    height: 'var(--chakra-vh)',
    fontSize: 16,
    '@media (max-width: 1400px)': {
      fontSize: 14,
    },
    fontFamily: [
      pretendard.style.fontFamily,
      inter.style.fontFamily,
      noto.style.fontFamily,
    ].join(','),
  },

  'html, body': {
    color: 'gray.1500', // Set the default body color
  },

  '#__next': {
    height: 'var(--chakra-vh)',
  },
  "body[data-lang='es']": {
    fontFamily: inter.style.fontFamily,
  },
} as const;
