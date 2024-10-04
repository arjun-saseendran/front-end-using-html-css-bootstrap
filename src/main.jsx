import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Cart from './components/Cart/Cart.jsx';
import ViewProduct from './components/ViewProduct/ViewProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/view-product/:product_id",
        element: <ViewProduct/>,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
