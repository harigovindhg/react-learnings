import React from "react";

const goToBookDetails = (book) => {
  window.location.href = book.details;
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.img} alt="" />
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <button type="button" onClick={() => goToBookDetails(props.book)}>
        Go to book Details
      </button>
    </article>
  );
};
// Default export, we can import this component with any name
export default Book;
