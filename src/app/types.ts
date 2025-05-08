// File: app/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  popularity: number;
}

export interface User {
  user: {
    name: string;
    email?: string;
  };
}
