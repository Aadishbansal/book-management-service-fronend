import { createContext, useState } from "react";
import { useNavigate } from "react-router";

const BookContext = createContext({
  books: [],
  filteredBooks: [],
  addBook: (book) => {},
  getBookById: (bookId) => {},
  filterBook: (val) => {},
  populateBook: () => {},
  updateBook: (mode, bookId, book) => {},
});
// const process.env.BACKEND_URL = "http://localhost:8080/api/books";

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();
  const getBookById = (bookId) => {
    return books.find((book) => book._id === bookId);
  };
  const handlePopulateBook = (tempBook) => {
    setBooks(tempBook);
  };
  const filterBook = (val) => {
    if (!val || val === "") {
      return books;
    }
    const newBooks = [];
    books.forEach((book) => {
      if (book.title.includes(val) || book.author.includes(val)) {
        newBooks.push(book);
      }
    });
    return newBooks;
    // console.log(newBooks);
    // setFilteredBooks(newBooks);
  };

  const handleAddBook = (book) => {
    fetch(process.env.REACT_APP_BACKEND_URL, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateBook = (mode, bookId, book) => {
    if (mode === "edit") {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/${bookId}`, {
        method: "PUT",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/${bookId}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const context = {
    books,
    addBook: handleAddBook,
    getBookById,
    filteredBooks,
    filterBook,
    populateBook: handlePopulateBook,
    updateBook: handleUpdateBook,
  };
  return (
    <BookContext.Provider value={context}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContext;
