type GroupedResult<T> = {
  matching: T[];
  nonMatching: T[];
};

/**
 * Groups an array of objects into two separate arrays based on a field value.
 *
 * @param items - The array of objects to be grouped.
 * @param field - The field name to check for grouping.
 * @param value - The value to match for grouping.
 * @returns An object containing two arrays: one with matching items and one with non-matching items.
 */
export function groupByField<T extends Record<string, any>>(
  items: T[],
  field: keyof T,
  value: any,
): GroupedResult<T> {
  return items.reduce<GroupedResult<T>>(
    (result, item) => {
      if (item[field] === value) {
        result.matching.push(item);
      } else {
        result.nonMatching.push(item);
      }
      return result;
    },
    { matching: [], nonMatching: [] },
  );
}
