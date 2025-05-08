// Define a generic type that ensures each object has an 'id' property
interface Identifiable {
  id: number | string;
  // You can add other common properties here if needed
}

/**
 * Finds an object in an array by its ID.
 *
 * @param items - The array of objects to search through.
 * @param id - The ID value to match.
 * @returns The object with the matching ID, or undefined if not found.
 */
export function findById<T extends Identifiable>(
  items: T[],
  id: T['id'],
): T | undefined {
  return (
    items?.find(item => item.id?.toString() === id?.toString()) ?? undefined
  );
}
