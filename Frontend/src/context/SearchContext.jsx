import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider(props) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  function setBreadCrumbs(data) {
    setBreadcrumbs(data);
  }

  function getBreadCrumbs() {
    return breadcrumbs;
  }

  function formatNumber(number) {
    let result = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(number);

    return result;
  }

  return (
    <SearchContext.Provider
      value={{
        breadcrumbs,
        setBreadCrumbs,
        getBreadCrumbs,
        formatNumber,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
