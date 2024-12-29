import Styles from './Header.module.css'


function Header(){

	return(
		<header>
			<h1 className={Styles.title}>Negro the Fato</h1>


		 	<ul>

				<a href="#" className={Styles.funk}>
					<li>FUNK</li>
				</a>
				<a href="#" className={Styles.rap}>
					<li>RAP</li>
				</a>
				<a href="#" className={Styles.rb}>
					<li>R&B</li>
				</a>

			</ul>
		</header>
	)
}

export default Header