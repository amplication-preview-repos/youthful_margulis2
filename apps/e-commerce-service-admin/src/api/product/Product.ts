export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  description: string | null;
  stock: number | null;
};
