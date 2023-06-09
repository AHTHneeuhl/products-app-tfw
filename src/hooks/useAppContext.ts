import { AppContext } from "context";
import { useContext } from "react";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
