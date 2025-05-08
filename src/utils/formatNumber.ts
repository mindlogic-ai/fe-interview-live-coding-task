/**
 * Format a number to a string with commas
 * @param number - The number to format
 * @returns The formatted number
 */
export const formatNumber: (number: number) => string = number => {
  return new Intl.NumberFormat('en-US').format(number);
};
