import backendAPI from "./backendAPI";
import { ProductAdapter } from "adapters";

export type TProductPayload = {
  limit?: number;
};

const adapter = new ProductAdapter();

const products = async ({ limit = 100 }: TProductPayload) => {
  try {
    const { data } = await backendAPI.get(`/products?limit=${limit}`);
    return adapter.getParsedResponse(data);
  } catch (e) {
    console.error(e);
  }
};

export default products;
