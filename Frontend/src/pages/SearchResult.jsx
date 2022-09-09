import Navbar from "../components/Navbar";
import SearchList from "../components/SearchList";
import BreadCrumbs from "../components/BreadCrumbs";

export default function SearchResult() {
  return (
    <>
      <Navbar />

      <BreadCrumbs />

      <div className="searchResult">
        <SearchList />
      </div>
    </>
  );
}
