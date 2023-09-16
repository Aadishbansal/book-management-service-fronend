import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BookContext from "../store/store";

const BookDetails = () => {
  const { bookId } = useParams();
  const ctx = useContext(BookContext);
  const [book, setBook] = useState();
  // const book = {
  //   _id: 3,
  //   title: "titl3",
  //   author: "author3",
  //   genre: "fiction",
  //   userId: 1,
  //   publicationDate: "1333 - 13 - 13",
  // };
  useEffect(() => {
    setBook(ctx.getBookById(bookId));
  }, [bookId, book]);
  return (
    book && (
      <div className="container">
        <div className="card  mt-5 row col-lg-7 mx-auto">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item border-0 ">
              Author : {book.author}
            </li>
            <li className="list-group-item border-0 ">Genre : {book.genre}</li>
            <li className="list-group-item border-0 ">
              Publication date : {book.publicationDate}
            </li>
          </ul>
          <div className="card-body ">
            <Link
              className="btn btn-warning me-3"
              role="button"
              to={`update?method=edit`}
            >
              Edit
            </Link>
            <Link
              className="btn btn-danger"
              role="button"
              to={`update?method=delete`}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    )
  );
};
export default BookDetails;
