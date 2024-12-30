import styles from './BemVindo.module.css'
import logo from '../../images/logo.jpg'
import NegroLendo from '../../images/negro lendo.jpeg'

function BemVindo(){
	return(
		<div className={styles.container}>

			<h1 className={styles.title}>Seja Bem- Vindo</h1>

			<div className={styles.first_track}>
				<p className={styles.text}>
						Bem-vindo ao <strong>Negro The Fato</strong>, o seu portal de descoberta e celebração da música negra! Aqui, você encontrará uma introdução completa ao universo do rap, funk e R&B, explorando as raízes, a evolução e o impacto desses gêneros que moldaram a cultura e a música ao redor do mundo.
				</p>

				<div>
						<img src={logo} alt="" />
				</div>

			</div>

			<div className={styles.second_track}>

				<div>
						<img src={NegroLendo} alt="" />
				</div>

				<p className={styles.text}>
						Descubra a história de artistas icônicos, conheça suas discografias e mergulhe em suas trajetórias. Através de vídeos e conteúdos exclusivos, você poderá se conectar ainda mais com seus artistas favoritos e compreender a profundidade e a riqueza da música negra. Venha fazer parte dessa jornada e celebre conosco o legado da música negra!	
				</p>

			</div>

		
		</div>


	)
}

export default BemVindo