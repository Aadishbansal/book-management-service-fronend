import { useContext, useEffect, useState } from "react";
import BookList from "../components/book/Booklist";
import BookContext from "../store/store";
import Search from "../components/utils/Search";
// const URL = "http://localhost:8080/api/books";
/*
[{
  "title": "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
    "author": "Ahsanul Bari, Anupom Syam",
    "genre": "Computer Science"
},
{
  "title": "Agile Web Development with Rails",
    "author": "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
    "genre": "Web development"
},
    {
    "title": "Flask Web Development",
    "author": "Miguel Grinberg",
    "genre": "python"
  },
  {
    "title": "Agile web development with rails: a Pragmatic guide",
    "author": "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
    "genre": "'Web site development"
  }

]
*/
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
  }, []);
  return (
    <div className="container ">
      <Search onFilter={handleFilter} />
      <BookList books={books} />
    </div>
  );
};
export default Home;
