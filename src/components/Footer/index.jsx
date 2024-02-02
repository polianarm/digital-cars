import styles from "./Footer.module.css";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h4 className={styles.footerText}> © 2023 Digital Cars</h4>

        <div>
          <ul className={styles.lista}>
            <li>
              <SiFacebook size={21} />
            </li>
            <li>
              <SiInstagram size={21} />
            </li>
            <li>
              <SiLinkedin size={21} />
            </li>
            <li>
              <SiTwitter size={21} />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
