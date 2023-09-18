import { useContext, useEffect, useState } from "react";
import BookList from "../components/book/Booklist";
import BookContext from "../store/store";
import Search from "../components/utils/Search";
const Home = () => {
  const ctx = useContext(BookContext);
  const [books, setBooks] = useState();

  const handleFilter = (val) => {
    setBooks(ctx.filterBook(val));
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.data);
        ctx.populateBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ctx]);
  return (
    <div className="container ">
      <Search onFilter={handleFilter} />
      <BookList books={books} />
    </div>
  );
};
export default Home;
