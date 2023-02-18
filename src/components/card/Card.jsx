import style from "./card.module.css";
import { Link } from "react-router-dom";
import * as actionsCreators from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { addFavorites, deleteFavorite, myFavorites } = props;
  console.log(deleteFavorite);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(props.id);
    } else {
      setIsFav(true);
      addFavorites(props);
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={style.principal}>
      <div className={style.btn_container}>
        <div>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>

        <button onClick={props.onClose} className={style.boton}>
          X
        </button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div className={style.img_titulo_contenedor}>
          <img src={props.image} alt="" className={style.img} />
        </div>
      </Link>

      <h5 className={style.titulo}>{props.name}</h5>

      <div className={style.descripcion}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
