type CurrencyFormatOptions = Intl.NumberFormatOptions & {
  currency: string; // Ensure currency is always passed
  locale: string; // Ensure currency is always passed
};

/**
 * Formats a number as currency with required locale and currency.
 * Allows additional Intl.NumberFormat options for customization.
 *
 * @param {number} value - The number to format.
 * @param {CurrencyFormatOptions} options - Options including `currency`, `locale`, and additional formatting preferences.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(
  value: number,
  options: CurrencyFormatOptions,
): string {
  const { currency, locale, ...otherOptions } = options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...otherOptions,
  }).format(value);
}
