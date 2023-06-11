import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Book } from "../models/book";

class LibraryService {
  constructor() {
    this.collection = "books";
  }

  async fetchBooks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const books = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const book = new Book(data.title, data.author, data.isbn, doc.id, data.uid);

      books.push(book);
    });

    return books;
  }

  async createBook(book) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      uid: book.uid,
    });

    book.id = docRef.id;
    return book;
  }

  async updateBook(book) {
    const docRef = doc(db, this.collection, book.id);

    await updateDoc(docRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });

    return book;
  }

  async deleteBook(id) {
    const docRef = doc(db, this.collection, id);

    await deleteDoc(docRef);
  }
}

const service = new LibraryService();
export default service;
