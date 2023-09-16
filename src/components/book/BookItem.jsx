import { Link } from "react-router-dom";

const BookItem = (props) => {
  const { book } = props;
  return (
    <div
      className="card mb-3 mx-auto col-12 col-lg-8"
      style={{ maxWidth: "540px" }}
    >
      <div className="row ">
        <div className=" col-12 col-lg-8">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.author}</p>
            <Link to={`books/${book._id}`} className=" stretched-link"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookItem;
