import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import Login from "./component/login.jsx";
import Demo from './component/try.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    {/* <Route path="/login" element={<Login />} /> */}
    <Route path='/login' element={<Demo/>} />
    </Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);
