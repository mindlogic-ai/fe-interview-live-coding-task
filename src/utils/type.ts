export type ObjectMap<T extends string> = {
  [K in T]: K;
};

export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
