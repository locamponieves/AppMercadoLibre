import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import LoadingPage from "../components/LoadingPage";
import { SearchContext } from "../context/SearchContext";

export default function SearchList() {
  const { query } = useParams();
  const [items, setItems] = useState([]);
  const { setBreadCrumbs } = useContext(SearchContext);

  useEffect(() => {
    getSearch();
  }, [query]);

  async function getSearch() {
    const response = await fetch(`http://localhost:3000/${query}`);
    const data = await response.json();

    setBreadCrumbs(data.categories);

    setItems(data.items);
  }

  if (!items.length) return <LoadingPage />;

  return (
    <>
      {items.slice(0, 4).map((item, index) => {
        return <Search item={item} key={index} />;
      })}
    </>
  );
}
