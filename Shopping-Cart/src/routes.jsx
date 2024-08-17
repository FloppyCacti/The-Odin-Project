import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import ShopPage from "./routes/shopPage";
import ShoppingCartPage from "./routes/shoppingCartPage";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
  },
];

export default routes;
