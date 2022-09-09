import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { SearchContextProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
);
