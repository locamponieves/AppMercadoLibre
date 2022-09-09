import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function BreadCrumbs() {
  const { getBreadCrumbs } = useContext(SearchContext);
  const categories = getBreadCrumbs();

  return (
    <ul className="breadcrumbs">
      {categories.map((category, index) => {
        return <li key={index}>{category}</li>;
      })}
    </ul>
  );
}
