export const formatDetailTime = (dateStr: any) => {
  const date = new Date(dateStr);
  const now = new Date();

  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  } else if (date.getFullYear() === now.getFullYear()) {
    const monthDayFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
    });
    return monthDayFormatter.format(date);
  } else {
    const fullDateFormatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return fullDateFormatter.format(date);
  }
};
