import { BsLinkedin, BsWhatsapp, BsFacebook, BsGithub } from "react-icons/bs";
import styles from "./styles.module.css"

const Redes = () => {
  return (
    <div className={styles.redes}>
      <a href="https://github.com/RafDes21" target="_blank" rel="noreferrer">
        <BsGithub className={styles.iconRed} />
      </a>
      <a
        href="https://www.facebook.com/israel.tineo.589"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook className={styles.iconRed} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=541122521870"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp className={styles.iconRed} />
      </a>
      <a
        href="https://www.linkedin.com/in/israelfrontend"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className={styles.iconRed} />
      </a>
    </div>
  )
}

export default Redes
