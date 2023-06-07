import React, { useState, useEffect } from "react";
import { Book } from "../models/book";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");

  //UseEffect runs function anytime our bookToEdit changes
  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setISBN(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onUpdateBook(e) {
    e.preventDefault();
    if (!isValid()) {
      return;
    }

    let book = new Book(title, author, isbn, props.bookToEdit.id);
    props.onBookUpdate(book);
    clearInput();
  }

  function onBookFormSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
      return;
    }

    let book = new Book(title, author, isbn, null);
    props.onBookCreated(book);
    clearInput();
  }

  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  function clearInput() {
    setTitle("");
    setAuthor("");
    setISBN("");
  }

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={props.bookToEdit ? onUpdateBook : onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
