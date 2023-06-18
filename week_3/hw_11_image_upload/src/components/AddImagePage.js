import React, { useState } from "react";
import FileService from "../services/fileService";

export default function AddImagePage() {
  const [file, setFile] = useState(null);

  async function uploadImage(e) {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      await FileService.uploadImage(file);
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="card mt-4 p-3">
      <h1>Add an Image</h1>
      <form onSubmit={uploadImage}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="file"
            onChange={onFileSelected}
            multiple
          ></input>
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
