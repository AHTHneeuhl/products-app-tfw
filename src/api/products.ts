import backendAPI from "./backendAPI";
import { ProductAdapter } from "adapters";

export type TProductAllPayload = {
  limit?: number;
};

export type TProductCategoryPayload = {
  category: string;
};

const adapter = new ProductAdapter();

const products = {
  all: async ({ limit = 100 }: TProductAllPayload) => {
    try {
      const { data } = await backendAPI.get(`/products?limit=${limit}`);
      return adapter.getParsedResponse(data);
    } catch (e) {
      console.error(e);
    }
  },
  byCategory: async ({ category }: TProductCategoryPayload) => {
    try {
      const { data } = await backendAPI.get(`/products/category/${category}`);
      return adapter.getParsedResponse(data);
    } catch (e) {
      console.error(e);
    }
  },
};

export default products;
