import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail() {
  //tendra todos los objetos que sean pasados por path
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    img: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            img: char.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
  }, [detailId]);

  return (
    <>
      <div className={style.contain}>
        <div className={style.element}>
          <p>
            <b>Name:</b>
            {character.name}
          </p>
          <p>
            <b>Status:</b>
            {character.status}
          </p>
          <p>
            <b>Gender:</b>
            {character.gender}
          </p>
          <p>
            <b>Origin:</b>
            {character.origin}
          </p>
        </div>
        <div className={style.img}>
          <img src={character.img} />
        </div>
      </div>

      <button onClick={() => navigate("/home")} className={style.button}>
        Back To Home
      </button>
    </>
  );
}
