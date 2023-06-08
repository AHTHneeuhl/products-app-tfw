import { useLocation } from "react-router-dom";
import { NavItem, NavigationWrapper } from "./Navigation.styles";

const routes = [
  {
    path: "/",
    label: "Products",
  },
  {
    path: "/cart",
    label: "Cart",
  },
];

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <NavigationWrapper>
      {routes.map((route) => (
        <NavItem
          key={route.path}
          to={route.path}
          active={pathname === route.path}
        >
          {route.label}
        </NavItem>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
