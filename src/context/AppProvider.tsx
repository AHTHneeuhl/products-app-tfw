import { useMutation } from "@tanstack/react-query";
import { productApi } from "api";
import { getCategories } from "helpers/getCategories";
import { createContext, useEffect } from "react";
import { setCategories, setProducts } from "redux/slices/products";
import { useAppDispatch } from "redux/store/hooks";

export const AppContext = createContext<null>(null);

const AppProvider = (props: React.PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();

  const { mutate } = useMutation(["products"], productApi, {
    onSuccess: (data) => {
      if (data) {
        dispatch(setProducts(data.products));
        dispatch(setCategories(getCategories(data.products)));
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
