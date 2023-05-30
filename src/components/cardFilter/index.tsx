import styles from "./styles.module.css";

interface props {
  image: string;
  title: string;
}

const CardFilter: React.FC<props> = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <img className={styles.imagen} src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} />
    </div>
  );
};

export default CardFilter;
