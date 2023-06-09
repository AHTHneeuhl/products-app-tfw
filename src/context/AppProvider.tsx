import { useMutation } from "@tanstack/react-query";
import { productApi } from "api";
import { getBrands } from "helpers/getBrands";
import { getCategories } from "helpers/getCategories";
import { createContext, useEffect } from "react";
import { setFilteredItems } from "redux/slices/filteredItems";
import { setBrands, setCategories, setProducts } from "redux/slices/products";
import { useAppDispatch } from "redux/store/hooks";

export const AppContext = createContext<null>(null);

const AppProvider = (props: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { mutate } = useMutation(["products"], productApi, {
    onSuccess: (data) => {
      if (data) {
        dispatch(setProducts(data.products));
        dispatch(setFilteredItems(data.products));
        dispatch(setCategories(getCategories(data.products)));
        dispatch(setBrands(getBrands(data.products)));
      }
    },
  });

  useEffect(() => {
    mutate({ limit: 100 });
  }, [mutate]);

  return (
    <AppContext.Provider value={null}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
