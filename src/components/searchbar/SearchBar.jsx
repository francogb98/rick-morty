import styles from "./searchbar.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  let num;

  const modificarNum = (e) => {
    num = e.target.value;
  };

  const modificarId = () => {
    setId(num);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(id);
      }}
      className="d-flex"
    >
      <input
        type="search"
        className="input-group-text me-3"
        onChange={modificarNum}
        placeholder="ingresar id ..."
      />

      <button
        type="submit"
        onClick={modificarId}
        className="
          btn btn-outline-light me-1"
      >
        Agregar
      </button>
      <button type="button" onClick={random} className="btn btn-outline-light">
        Random
      </button>
    </form>
  );
}
