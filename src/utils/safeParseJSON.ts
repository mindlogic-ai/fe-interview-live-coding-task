export const safeParseJSON = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return {}; // return an empty object to avoid errors in property access
  }
};
