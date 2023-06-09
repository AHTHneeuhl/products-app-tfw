import { Route, Routes } from "react-router-dom";
import { CartPage, ProductPage } from "pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
