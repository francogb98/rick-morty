import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

import * as actionsCreators from "./redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function App({ deleteFavorite, vaciarArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  // ************************//
  const [characters, setCharacters] = useState([]);

  //******************** */
  const [access, setAccess] = useState(false);
  let username = "francobaudino98@gmail.com";
  let password = "12franco";

  //*********************** */
  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logout = () => {
    setAccess(false);
    navigate("/");
    setCharacters([]);
    vaciarArray();
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (character) => {
    if (location.pathname === "/home") {
      fetch(`https://rickandmortyapi.com/api/character/${character}`) //buscamos la info de esta pagina
        .then((response) => response.json()) //recibe un valor response, y lo convertimos en json
        .then((data) => {
          //aca estamos en el json
          if (data.name) {
            characters.find((element) => element.id === data.id) === undefined
              ? setCharacters((characters) => [...characters, data])
              : alert("Personaje repetido, prueba otro Id,");
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      alert(
        "Error! por favor dirijase al Home para agreagar nuevos personajes"
      );
    }
  };

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((c) => c.id !== id));
    deleteFavorite(id);
  };
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  return (
    <>
      <div>
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} random={random} logout={logout} />
        )}
        <br></br>
      </div>
      <div className="App" style={{ padding: "25px" }}>
        <Routes>
          <Route
            exact
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          <Route exact path="/" element={<Form login={login}></Form>}></Route>
          <Route
            exact
            path="/favorites"
            element={<Favorites></Favorites>}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/detail/:detailId" element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
