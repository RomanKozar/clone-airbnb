import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/firebase.js";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/store";
import { SearchProvider } from "./components/Header/SearchContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
