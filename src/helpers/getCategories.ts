import { TProduct } from "types";

export const getCategories = (products: TProduct[]) => {
  const categories = [] as string[];

  for (const product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }

  return categories;
};
