export function findKeyByValue<T extends Record<string, unknown>>(
  object: T,
  value: T[keyof T],
): keyof T | undefined {
  return (Object.keys(object) as Array<keyof T>).find(
    key => object[key] === value,
  );
}
