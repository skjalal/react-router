import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route,
  type DataRouter,
  type DOMRouterOpts,
  type RouteObject,
} from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import ProductsPage from "./pages/Product.tsx";
import RootLayout from "./pages/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import ProductDetailsPage from "./pages/ProductDetails.tsx";
import "./App.css";

//Object based approach
const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
  },
];

//Element based approach
// const routes: RouteObject[] = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const routesConfig: DOMRouterOpts = { basename: "/react-router" };

const router: DataRouter = createBrowserRouter(routes, routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
