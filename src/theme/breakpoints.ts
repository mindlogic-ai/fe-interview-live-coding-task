export const breakpoints = {
  ssm: '3px',
  sm: '375px',
  mobile: '475px',
  md: '768px',
  lg: '1040px',
  xl: '1240px',
  '2xl': '1440px',
  '3xl': '1900px',
  '4xl': '2200px',
  '5xl': '2300px',
  '6xl': '2450px',
} as const;
export type BreakPoints = typeof breakpoints;
export type BreakPointKeys = keyof typeof breakpoints;
export type BreakPointValues = (typeof breakpoints)[BreakPointKeys];
