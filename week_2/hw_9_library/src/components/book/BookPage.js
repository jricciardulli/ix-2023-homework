import React from "react";

import BookForm from "./BookForm";
import BookTable from "./BookTable";

import { useEffect, useState } from "react";

import LibraryService from "../../services/library-service";

export default function BookPage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await LibraryService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreated(book) {
    const nbook = await LibraryService.createBook(book);
    setBooks([...books, nbook]);
    setBookToEdit(null);
  }

  async function onBookDelete(book) {
    await LibraryService.deleteBook(book.id);

    setBooks(books.filter((x) => x.id !== book.id));
  }

  async function onBookUpdate(book) {
    const nbook = await LibraryService.updateBook(book);
    setBooks([...books, nbook]);
    setBookToEdit(null);
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.id !== book.id));
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm
          onBookCreated={onBookCreated}
          bookToEdit={bookToEdit}
          onBookUpdate={onBookUpdate}
        ></BookForm>
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>
    </div>
  );
}
