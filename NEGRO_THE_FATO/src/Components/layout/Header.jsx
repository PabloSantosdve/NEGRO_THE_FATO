import Styles from './Header.module.css'


function Header() {
	return (
	  <header>
		<h1 className={Styles.title}>Negro the Fato</h1>
  
		<ul>
			
		  <li>
			<a href="#" className={Styles.funk} aria-label='Explorar o gênero FUNK'>
			  FUNK
			</a>
		  </li>

		  <li>
			<a href="#" className={Styles.rap}>
			  RAP
			</a>
		  </li>

		  <li>
			<a href="#" className={Styles.rb}>
			  R&B
			</a>
		  </li>

		</ul>

	  </header>
	);
  }

  export default Header