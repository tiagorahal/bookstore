import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../books/book';
import BookNew from '../books/booknew';
import getBooks from '../../redux/books/bookslice';

const Books = () => {
  const bookList = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookFetch = useSelector((store) => store.booksReducer.books);

  const bookFetchList = Object.keys(bookFetch);

  bookFetchList.forEach((id) => {
    bookFetch[id].map((book) => (
      bookList.push(
        <Book
          key={id}
          id={id}
          title={book.title}
          category={book.category}
        />,
      )));
  });

  return (
    <div className="container has-navbar">
      { bookList }
      <BookNew className="book-new" />
    </div>
  );
};

export default Books;
