import React from "react";
import Spinner from "../common/Spinner";

export default function BookTable(props) {
  return (
    <div className="text-center">
      {props.loading ? (
        <Spinner></Spinner>
      ) : (
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {props.books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-1"
                      onClick={() => props.onBookDelete(book)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning btn-sm m-1"
                      onClick={() => props.onBookEdit(book)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
