import styles from './Footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from '../../images/NEGRO THE FATO.png';

function Footer() {
  return ( 
    
    <footer>
      <div className={styles.top}>
        <div className={styles.left}>
          <p>
            <a href="#">
              Política de Privacidade
            </a>
          </p>
          <p>
            <a href="#">
              Termos de uso
            </a>
          </p>
          <p>
            <a href="#">
              Contato
            </a>  
          </p>
        </div>

        {/* Redes sociais */}
        <div className={styles.center}>
          <div className={styles.redes}>
            <ul className={styles.redes_icons}>
              <li>
                <a href="https://www.instagram.com/negrothefato_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={50} color="black" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/negrothefato" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={50} color="black" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <img src={Logo} alt="Logo da Negro The Fato" />
        </div>
   
      </div>

      <p className={styles.paragrafo}>© 2024 Negro The Fato. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
