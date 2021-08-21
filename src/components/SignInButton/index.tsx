import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button 
      type="button" 
      className={styles.sigInButton}
    >
      <FaGithub color="#84D361" />
      Henrique Menezes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button" 
      className={styles.sigInButton}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}
