import Alert from "../UI/Alerts";
import BookItem from "./BookItem";
const BookList = (props) => {
  const { books } = props;

  let content;
  if (!books || books.length === 0) {
    content = <Alert message="No books to display try adding some" />;
  } else {
    content = (
      <div className="d-flex flex-column my-3 align-item-center">
        {books.map((book) => (
          <BookItem key={book._id} book={book} />
        ))}
      </div>
    );
  }
  return content;
};
export default BookList;
