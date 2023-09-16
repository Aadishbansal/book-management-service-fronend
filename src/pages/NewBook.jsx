import { useNavigate } from "react-router-dom";
import BookForm from "../components/book/BookForm";
import { useContext } from "react";
import BookContext from "../store/store";

const NewBook = () => {
  const ctx = useContext(BookContext);
  const handleAddBook = (value) => {
    ctx.addBook(value);
  };

  return (
    <div className="container mt-3">
      <BookForm onAddBook={handleAddBook} title="New Book" />
    </div>
  );
};
export default NewBook;
