import { isBefore, parseISO } from 'date-fns';

/**
 * Determines whether the subscription is unpaid but not fully stopped yet.
 *
 * @param status - The subscription status, e.g., 'unpaid'.
 * @param stopAt - The ISO string of the stop_at date.
 * @returns A boolean indicating if the subscription is unpaid and stop_at is in the future.
 */

export const isSubscriptionStopped = (
  status: string | null,
  stopAt: string | null,
) => {
  if (status !== 'unpaid' || !stopAt) return false;

  const today = new Date();
  const stopDate = parseISO(stopAt);

  return !isBefore(today, stopDate);
};
