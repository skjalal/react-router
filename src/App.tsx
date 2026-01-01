import {
  createBrowserRouter,
  //createRoutesFromElements,
  RouterProvider,
  //Route,
  type DataRouter,
  type RouteObject,
} from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import ProductsPage from "./pages/Product.tsx";
import "./App.css";

//Object based approach
const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
];

//Element based approach
// const routes: RouteObject[] = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router: DataRouter = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
