import Redes from "./Redes";
import styles from "./styles.module.css"

 const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Redes />
      <h5>Clon Netflix desarrollado por Israel T.</h5>
    </footer>
  );
};

export default Footer
