import { TProduct } from "types";

export const sortByAmount = (products: TProduct[]) => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByRating = (products: TProduct[]) => {
  return [...products].sort((a, b) => b.rating - a.rating);
};

export const sortByDiscount = (products: TProduct[]) => {
  return [...products].sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );
};

export const filterByBrand = (products: TProduct[], brand: string) => {
  if (brand === "all") {
    return products;
  }
  return products.filter((product) => product.brand === brand);
};

export const filterByCategory = (products: TProduct[], category: string) => {
  if (category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
};
