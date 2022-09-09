import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBox from "./pages/SearchBox";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/items/search/:query" element={<SearchResult />} />
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
