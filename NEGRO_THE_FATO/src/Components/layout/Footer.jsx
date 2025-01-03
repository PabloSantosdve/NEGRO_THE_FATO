import styles from './Footer.module.css'

function Footer(){
    return (
        <footer>

            <div className={styles.top}>

                <div className={styles.left}>
                    <nav>
                        <ul>
                            <li><a href="">Politica de Privacidade</a></li>
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

                        <a href="">
                            <img src="" alt="" />    
                        </a>
                            
                        <a href="">
                            <img src="" alt="" />
                        </a>

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