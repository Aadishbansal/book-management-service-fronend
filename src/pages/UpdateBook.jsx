import { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Alert from "../components/UI/Alerts";
import BookForm from "../components/book/BookForm";
import BookContext from "../store/store";

const UpdateBook = () => {
  const ctx = useContext(BookContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const mode = searchParam.get("method");
  const { bookId } = useParams();
  const book = ctx.getBookById(bookId);

  const handleBooksUpdate = (book) => {
    ctx.updateBook(mode, bookId, book);
  };

  const deleteBook = () => {
    ctx.updateBook(mode, bookId);
  };
  let content;
  switch (searchParam.get("method")) {
    case "delete":
      deleteBook(bookId);
      break;
    case "edit":
      content = (
        <BookForm
          book={book}
          title="Edit book"
          edit
          onUpdateBook={handleBooksUpdate}
        />
      );
      break;
    default:
      content = <Alert />;
      break;
  }

  return content;
};
export default UpdateBook;
