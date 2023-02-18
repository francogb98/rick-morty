import { connect, useDispatch } from "react-redux";
import style from "../card/card.module.css";
import contenedor from "../cards/cards.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import { useRef } from "react";
function Favorites({ myFavorites, allCharacters }) {
  const dispatch = useDispatch();

  const filter = useRef(null);
  const order = useRef(null);

  function handleReset(e) {
    dispatch({ type: "RESET" });
    filter.current.value = "";
    order.current.value = "";
  }

  const handleFilterChnage = (e) => {
    const value = e.target.value;
    dispatch(filterCards(value));
    console.log(allCharacters);
    console.log(myFavorites);
  };
  const handleOrderChnage = (e) => {
    const value = e.target.value;
    dispatch(orderCards(value));
    console.log(myFavorites);
  };

  return (
    <div>
      <div className={style.body}>
        <select ref={order} onChange={handleOrderChnage}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select ref={filter} onChange={handleFilterChnage}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <button onClick={handleReset}>RESET</button>
      <div className={contenedor.fondo}>
        {myFavorites.map((p, i) => (
          <div className={style.principal} key={p.id}>
            <Link to={`/detail/${p.id}`}>
              <div className={style.img_titulo_contenedor}>
                <img src={p.image} alt="" className={style.img} />
              </div>
            </Link>

            <h5 className={style.titulo}>{p.name}</h5>

            <div className={style.descripcion}>
              <h2>{p.species}</h2>
              <h2>{p.gender}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateTomyFavorites = (state) => ({
  myFavorites: state.myFavorites,
  allCharacters: state.allCharacters,
});

export default connect(mapStateTomyFavorites, null)(Favorites);
