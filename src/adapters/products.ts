import { TProduct } from "types";

type TAPIResponse = {
  products: TProduct[];
};

class ProductAdapter {
  private parseResponse = (apiResponse: TAPIResponse) => {
    return {
      products: apiResponse.products,
    };
  };

  getParsedResponse = (apiResponse: TAPIResponse) =>
    this.parseResponse(apiResponse);
}

export default ProductAdapter;
