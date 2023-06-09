import { TProduct } from "types";

export const getBrands = (products: TProduct[]) => {
  const brands = [] as string[];

  for (const product of products) {
    if (!brands.includes(product.brand)) {
      brands.push(product.brand);
    }
  }

  return brands;
};
