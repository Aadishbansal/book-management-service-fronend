import { useEffect } from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BookForm = (props) => {
  const { edit } = props;
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleInputHasError,
    handleValuePopulate: handleTitlePopulate,
    handleValueChange: handleTitleChange,
    handleInputBlur: handleTitleBlur,
    reset: resetTitleInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredAuthor,
    isValid: authorIsValid,
    hasError: authorInputHasError,
    handleValuePopulate: handleAuthorPopulate,
    handleValueChange: handleAuthorChange,
    handleInputBlur: handleAuthorBlur,
    reset: resetAuthorInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredGenre,
    isValid: genreIsValid,
    hasError: genreHasError,
    handleValuePopulate: handleGenrePopulate,
    handleValueChange: handleGenreChange,
    handleInputBlur: handleGenreBlur,
    reset: resetGenreInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredPublicationDate,
    isValid: publicationDateIsValid,
    hasError: publicationDateHasError,
    handleValuePopulate: handlePublicationDatePopulate,
    handleValueChange: handlePublicationDateChange,
    handleInputBlur: handlePublicationDateBlur,
    reset: resetPublicationDateInput,
  } = useInput(isNotEmpty);
  useEffect(() => {
    const { book } = props;
    if (book) {
      handleTitlePopulate(book.title);
      handleAuthorPopulate(book.author);
      handleGenrePopulate(book.genre);
      handlePublicationDatePopulate(book.publicationDate);
    }
  }, [edit]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !(titleIsValid && authorIsValid && genreIsValid && publicationDateIsValid)
    ) {
      alert("Invalid Data");

      return;
    }
    const bookData = {
      title: enteredTitle,
      genre: enteredGenre,
      author: enteredAuthor,
      publicationDate: enteredPublicationDate,
    };
    if (edit) {
      props.onUpdateBook(bookData);
    } else {
      props.onAddBook(bookData);
    }

    resetTitleInput();
    resetAuthorInput();
    resetGenreInput();
    resetPublicationDateInput();
  };

  return (
    <div className="container mt-4">
      <h2>{props.title}</h2>

      <div className="row justify-content-center needs-validation">
        <form
          className=" col-12 col-lg-6 mt-3"
          onSubmit={formSubmissionHandler}
        >
          <div className="mb-3">
            <label htmlFor="book-title" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              className={`form-control ${titleInputHasError && "is-invalid"}`}
              id="book-title"
              value={enteredTitle}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              placeholder="Enter title here"
            />
            <div className="invalid-feedback">Book title required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              type="text"
              className={`form-control ${genreHasError && "is-invalid"}`}
              id="genre"
              placeholder="Enter genre here"
              value={enteredGenre}
              onChange={handleGenreChange}
              onBlur={handleGenreBlur}
            />
            <div className="invalid-feedback">Genre required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              id="author"
              className={`form-control ${authorInputHasError && "is-invalid"}`}
              value={enteredAuthor}
              onChange={handleAuthorChange}
              onBlur={handleAuthorBlur}
              placeholder="Enter author here"
            />
            <div className="invalid-feedback">Author required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="publication-date" className="form-label">
              Publication Date
            </label>
            <input
              type="date"
              id="publication-date"
              className={`form-control ${
                publicationDateHasError && "is-invalid"
              }`}
              value={enteredPublicationDate}
              onChange={handlePublicationDateChange}
              onBlur={handlePublicationDateBlur}
              placeholder="Enter publication date here"
            />
            <div className="invalid-feedback"> Publication Date required</div>
          </div>

          <div className=" d-flex justify-content-end">
            <button className="btn btn-primary">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookForm;
