import { Link } from 'react-router-dom'; // Importando o Link do React Router
import Styles from './Header.module.css';

function Header() {
  return (
    <header>
      <h1 className={Styles.title}>NEGRO THE FATO</h1>

      <ul>
        {/* Link para a página do gênero FUNK */}
        <li>
          <Link to="/funk" className={Styles.funk} aria-label="Explorar o gênero FUNK">
            FUNK
          </Link>
        </li>

        {/* Link para a página do gênero RAP */}
        <li>
          <Link to="/rap" className={Styles.rap}>
            RAP
          </Link>
        </li>

        {/* Link para a página do gênero R&B */}
        <li>
          <Link to="/rb" className={Styles.rb}>
            R&B
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;