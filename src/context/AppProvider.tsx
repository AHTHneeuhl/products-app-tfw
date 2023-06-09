import { useMutation } from "@tanstack/react-query";
import { productApi } from "api";
import { getBrands } from "helpers/getBrands";
import { getCategories } from "helpers/getCategories";
import { createContext, useEffect } from "react";
import { setFilteredItems } from "redux/slices/filteredItems";
import { setBrands, setCategories, setProducts } from "redux/slices/products";
import { useAppDispatch } from "redux/store/hooks";

export interface TAppContext {
  handleFetchByCategory: (category: string) => void;
}

export const AppContext = createContext<TAppContext>({
  handleFetchByCategory: () => {},
});

const AppProvider = (props: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { mutate: fetchByCategory } = useMutation(
    ["products"],
    productApi.byCategory
  );

  const { mutate } = useMutation(["products"], productApi.all, {
    onSuccess: (data) => {
      if (data) {
        dispatch(setProducts(data.products));
        dispatch(setFilteredItems(data.products));
        dispatch(setCategories(getCategories(data.products)));
        dispatch(setBrands(getBrands(data.products)));
      }
    },
  });

  const handleFetchByCategory = (category: string) =>
    fetchByCategory(
      { category },
      {
        onSuccess: (data) => {
          if (data) {
            dispatch(setFilteredItems(data.products));
          }
        },
      }
    );

  useEffect(() => {
    mutate({ limit: 100 });
  }, [mutate]);

  return (
    <AppContext.Provider value={{ handleFetchByCategory }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
