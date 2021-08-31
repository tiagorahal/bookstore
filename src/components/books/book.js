import React from 'react';
import PropTypes from 'prop-types';

import BookInfo from './bookinfo';
import BookProgress from './bookprogress';
import BookChapter from './bookchapter';

const Book = ({ info }) => (
  <div className="book">
    <div className="book-details">
      <BookInfo category={info.category} name={info.name} author={info.author} />
      <div className="book-actions">
        <a href="/#">Comments</a>
        {' | '}
        <a href="/#">Remove</a>
        {' | '}
        <a href="/#">Edit</a>
      </div>
    </div>
    <div className="book-status">
      <BookProgress percentage={info.percentage} />
      <BookChapter chapter={info.chapter} />
    </div>
  </div>
);

Book.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    percentage: PropTypes.string,
    chapter: PropTypes.string,
  }).isRequired,
};

export default Book;
