import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Header from "./components/UI/Header";
import BookDetails from "./pages/BookDetails";
import UpdateBook from "./pages/UpdateBook";
import NewBook from "./pages/NewBook";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books/add" element={<NewBook />} />
        <Route path="books/:bookId" element={<BookDetails />} />
        <Route path="books/:bookId/update" element={<UpdateBook />} />
      </Routes>
    </>
  );
}

export default App;
