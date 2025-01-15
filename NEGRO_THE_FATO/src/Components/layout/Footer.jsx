import styles from './Footer.module.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer>

      <div className={styles.top}>

        <div className={styles.left}>
          <nav>
            <ul>
              <li><a href="">Política de Privacidade</a></li>
              <li><a href="">Termos de uso</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </div>

        <div className={styles.center}>
          <p>
            Redes Sociais
          </p>

          <div className={styles.redes}>
            <ul className={styles.redes}>
              <li>
                <a href="https://www.instagram.com/negrothefato_/" target='blank' rel='external'>
                  <FaInstagram size={50} color='black' />
                </a>
              </li>

              <li>
                <a href="">
                  <FaFacebook size={50} color='black' />
                </a>
              </li>
            </ul>   
          </div>
        </div>

        <div className={styles.right}>
          <img src="" alt="" />
        </div>

        <div className={styles.paragrafo}>
          <p>© 2024 Negro The Fato. Todos os direitos reservados.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer