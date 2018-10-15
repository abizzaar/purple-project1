// CommentForm.js
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const CommentForm = props => (
  <form onSubmit={props.submitComment}>
    <input
      type="text"
      name="author"
      placeholder="Enter your name"
      value={props.author}
      onChange={props.handleChangeAuthor}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something... but try to be nice!"
      value={props.text}
      onChange={props.handleChangeText}
    />
    <button type="submit">Go!</button>
  </form>
);

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  text: PropTypes.string,
  author: PropTypes.string,
};

CommentForm.defaultProps = {
  text: '',
  author: '',
};

export default CommentForm;
