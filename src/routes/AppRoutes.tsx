import { Route, Routes } from "react-router-dom";
import { ProductPage } from "pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
