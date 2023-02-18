import Card from "../card/Card";
import styles from "./cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={styles.fondo}>
      {characters.map((p, i) => (
        <Card
          id={p.id}
          name={p.name}
          species={p.species}
          gender={p.gender}
          image={p.image}
          onClose={() => onClose(p.id)}
          key={i++}
        />
      ))}
    </div>
  );
}
