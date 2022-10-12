import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "normalize.css";
import "./index.css";

import { store } from "./store.js";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
