import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './bookinfo';
import BookActions from './bookactions';
import BookCompletionStatus from './bookcompletionstatus';
import BookProgress from './bookprogress';

const Book = (
  {
    id, title, author, category,
  },
) => (
  <div className="book-row">
    <div className="book-first-column">
      <BookInfo title={title} author={author} category={category} />
      <BookActions id={id} />
    </div>
    <div className="book-remaining-column">
      <BookCompletionStatus />
      <BookProgress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;
