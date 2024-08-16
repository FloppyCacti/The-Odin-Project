import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import ShopPage from "./routes/shopPage";

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
];

export default routes;
