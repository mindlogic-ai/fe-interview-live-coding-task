export const formatDateTime = (dateString: string, locale?: string): string => {
  if (!dateString) return ''; // Return an empty string if no input is provided

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return ''; // Check for invalid date input

  // Automatically format the date and time based on the user's locale
  return new Intl.DateTimeFormat(locale ?? undefined, {
    year: 'numeric',
    month: 'short', // Use 'short' for abbreviated month names (e.g., Jan, Feb)
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format if preferred
  }).format(date);
};
