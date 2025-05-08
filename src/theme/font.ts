import { Inter, Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  display: 'swap',
  variable: '--es-font',
  subsets: ['latin'],
});

export const noto = Noto_Sans({
  display: 'swap',
  variable: '--font-noto',
  subsets: ['latin'],
});

export const pretendard = localFont({
  src: '../theme/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
