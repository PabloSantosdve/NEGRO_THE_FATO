import styles from './Pages.module.css'


function FunkPage() {
  return ( 
    <div className={styles.container}>
      
      {/*Parte da playlist de Funk*/}
      <h1 className={styles.name_playlist}>Veja o melhor do Funk Brasileiro</h1>

      <div className={styles.conteudo}>
      <iframe 
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/playlist/53o61MQeEywOXuM3EGKZfV?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
      </div>

{/*First part */}
      <h1 className={styles.title}>FUNK</h1>

      <h2 className={styles.subtitle}>Conheça um pouco da historia do Funk no brasil</h2>

  
      <div className={styles.first_track}>


        <div className={styles.first_image}>
          <img src="" alt="" />
        </div>

        <div  className={styles.first_text}>
          <p>
          O Funk Brasileiro é muito mais do que um gênero musical; ele é um movimento cultural que reflete a realidade, as lutas e as celebrações das comunidades periféricas do Brasil. Desde suas origens no Rio de Janeiro até sua influência global, o funk se consolidou como uma forma de expressão poderosa, capaz de dar voz às histórias das favelas e abordar temas sociais relevantes. Assim como o rap nos Estados Unidos, o funk nasceu em um contexto de desigualdade e exclusão, mas tornou-se uma das manifestações culturais mais importantes e exportadas do Brasil.
          </p>
        </div>

      </div>

{/*Second part */}

      <h2 className={styles.subtitle_track}>Origens do Funk</h2>


      <div className={styles.first_track}>

      
        <div  className={styles.first_text}>
          <p>
          O funk brasileiro começou a ganhar forma no final dos anos 1970 e início dos anos 1980, inspirado pelo funk norte-americano de artistas como James Brown e George Clinton, que chegaram ao Brasil através de discos e rádios. Inicialmente, as festas de funk aconteciam em clubes e salões da zona sul do Rio de Janeiro, mas logo se espalharam para as comunidades da zona norte e das favelas cariocas.
          A virada cultural aconteceu com a chegada do <a href="https://www.youtube.com/watch?v=9uxUEMdQvKc" target='blank'>"miami bass"</a> nos anos 1980, um subgênero de funk norte-americano caracterizado por batidas eletrônicas rápidas e letras dançantes. DJs brasileiros começaram a incorporar esses elementos e adaptá-los à realidade local, criando as bases do que hoje conhecemos como funk carioca.
          </p>

        </div>

        <div className={styles.first_image}>
          <img src="" alt="" />
          </div>
      </div>

{/* third part*/}
      <div className={styles.third_track}>
        
        <h2 className={styles.subtitle_track}>Os Bailes Funk e o Papel dos DJs</h2>
        
        <p className={styles.text}>
        Os bailes funk foram o epicentro do movimento. Realizados em clubes, ruas e quadras das comunidades, esses eventos começaram como espaços de dança e socialização, mas logo se transformaram em um fenômeno cultural. DJs como <a href="https://www.youtube.com/watch?v=Bqgpby0O6WU" target='blank'>Grandmaster Raphael</a>, <a href="https://www.youtube.com/watch?v=O6L1dUiCVKo&list=RDEMZzQ8pVWgA5MRGaq5tIlGzg&index=2" target='blank'>Furacão 2000</a> e <a href="https://www.youtube.com/watch?v=ekg_x8EwCnc" target='blank'>MC Marlboro</a> foram pioneiros na popularização do funk carioca.
        </p>


        <p className={styles.text}>
        O DJ Marlboro, em particular, foi fundamental para a transição do funk norte-americano para o funk brasileiro. Ele começou a criar versões em português das músicas e a incentivar MCs a rimarem sobre temas cotidianos das favelas, o que tornou o gênero mais acessível e relevante para o público local.
        </p>

      <div className={styles.third_part_image}>
        <img src="" alt="" />
      </div>

      </div>

    <h2 className={styles.subtitle_track}>A Era dos MCs e a Identidade Brasileira</h2>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    Nos anos 1990, o funk brasileiro ganhou uma identidade própria com o surgimento de MCs que passaram a criar músicas autorais. Eles rimavam sobre temas como amor, festas, política, desigualdade social e violência policial, refletindo as vivências da periferia. Alguns dos primeiros sucessos dessa época foram músicas como <a href="">"Rap da Felicidade"</a>, de MC <a href="">Cidinho e Doca</a>, e <a href="">"Rap do Silva"</a>, de<a href=""> MC Bob Rum</a>.
    </p>

    <p className={styles.text}>
    Os bailes funk dessa época eram frequentemente marcados pela divisão entre os "equipes de som", que competiam para ver quem tinha o sistema de som mais potente e criava as melhores mixagens. Essa rivalidade saudável ajudou a fomentar a criatividade e a inovação no gênero.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    A popularização dos MCs trouxe ao funk uma nova camada de complexidade. As letras passaram a funcionar como uma crônica da vida nas favelas, abordando desde os desafios diários até os momentos de alegria e celebração. Artistas como Claudinho e Buchecha levaram o funk a um público mais amplo com músicas românticas e dançantes, enquanto outros MCs, como MC Marcinho, exploraram a realidade social com canções que misturavam crítica e esperança. Esse período foi essencial para o reconhecimento do funk como uma expressão legítima e multifacetada da cultura brasileira.
    </p>


    <h2 className={styles.subtitle_track}>A Criminalização do Funk</h2>

    <p className={styles.text}>
    Apesar de sua popularidade, o funk sempre enfrentou preconceito e criminalização. Durante os anos 1990 e 2000, os bailes funk foram associados pela mídia e pelas autoridades à violência e ao crime, resultando em repressão policial e restrições legais. O gênero foi frequentemente estigmatizado como uma expressão de marginalidade, e muitos artistas e frequentadores dos bailes eram tratados como criminosos, mesmo sem qualquer envolvimento com atividades ilícitas. Os bailes funk, principalmente nas favelas, passaram a ser alvo de operações policiais que visavam interromper as festas e, muitas vezes, incutir um medo coletivo nos moradores dessas comunidades. Isso gerou um estigma que durou por muitos anos e dificultou a aceitação do funk no mainstream da cultura brasileira.
    </p>

    <p className={styles.text}>
    No entanto, o movimento resistiu, utilizando o próprio funk como uma ferramenta de denúncia e resistência social. Ao invés de se submeter à repressão, os MCs e as comunidades encontraram na música uma forma de reafirmar sua identidade e lutar contra as injustiças que enfrentavam. As letras do funk começaram a se tornar ainda mais políticas, abordando questões como a brutalidade policial, o racismo e a desigualdade social de maneira explícita e desafiadora.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    Através de suas canções, muitos artistas começaram a questionar o sistema, a estrutura de poder e a marginalização de suas comunidades. O funk, dessa forma, passou a ser visto não apenas como um gênero musical, mas também como um movimento de resistência cultural, no qual as vozes das periferias ganhavam força e visibilidade. Ao fazer isso, o funk não só ressignificou sua imagem, mas também desafiou a criminalização e se consolidou como uma das maiores expressões da luta por direitos no Brasil.
    </p>

    <h2 className={styles.subtitle_track}>A Popularização Nacional e Internacional</h2>

    <p className={styles.text}>
    Nos anos 2000, o funk carioca começou a se diversificar e a conquistar o Brasil inteiro. Músicas como "Cerol na Mão" e "Bonde do Tigrão" marcaram uma nova fase, onde o gênero começou a ganhar espaço na mídia tradicional e em programas de televisão. Artistas como MC Leozinho (com "Se Ela Dança, Eu Danço") e grupos como Furacão 2000 ajudaram a levar o funk para além das comunidades, atingindo as classes médias e altas.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    No final da década de 2010, o funk brasileiro deu um salto global. Artistas como Anitta, Ludmilla, Kevin O Chris e MC Fioti começaram a integrar elementos de funk em parcerias internacionais, levando o gênero para o topo das paradas musicais em outros países. A música "Bum Bum Tam Tam", de MC Fioti, tornou-se a primeira música de funk brasileiro a alcançar mais de 1 bilhão de visualizações no YouTube.
    </p>
    

    <h1 className={styles.title}> O Funk Hoje</h1>

    <p className={styles.text}>
    Hoje, o funk brasileiro consolidou-se como uma das maiores forças culturais e musicais do país, transcendo as barreiras sociais que o limitaram em seus primórdios. Ele não apenas reflete as histórias, lutas e celebrações das comunidades periféricas, mas também se tornou uma ferramenta de empoderamento, resistência e transformação social. A evolução do funk o levou a ocupar um espaço significativo na cultura pop nacional e internacional, influenciando outros gêneros musicais, linguagens artísticas e até a moda.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    O funk, que antes era restrito aos bailes das favelas, hoje está presente em grandes festivais, premiações e eventos globais. Artistas de funk lotam estádios, lideram rankings de streaming e colaboram com estrelas internacionais. O gênero se transformou em uma vitrine da criatividade brasileira, mostrando ao mundo a capacidade de inovação que emerge das comunidades.
    </p>

    <h2 className={styles.subtitle_track}> Transformação em produto Cultural de Massa</h2>

    <p className={styles.text}>
    O funk tornou-se um fenômeno de massa no Brasil. Hoje, ele é consumido por pessoas de todas as idades, classes sociais e regiões, provando sua universalidade e poder de conectar diferentes públicos. As plataformas digitais, como YouTube, TikTok e Spotify, foram fundamentais nesse processo, permitindo que artistas independentes alcançassem audiências globais sem a necessidade de grandes gravadoras. Isso democratizou o acesso à música e deu espaço para novas vozes e estilos dentro do gênero.
    </p>

    <p className={styles.text}>
    Além disso, o funk passou a dialogar com outras indústrias criativas, como o cinema, a publicidade e a moda. Videoclipes de funk se tornaram produções grandiosas, com narrativas que misturam dança, storytelling e identidade cultural. Marcas renomadas frequentemente associam suas campanhas a artistas de funk, reconhecendo o impacto cultural e o alcance do gênero.
    </p>

    <h2 className={styles.subtitle_track}>Pluralidade de Temas e Narrativas</h2>

    <p className={styles.text}>
    O funk de hoje é incrivelmente diversificado em termos de temáticas. Ele aborda desde o cotidiano das comunidades até questões como autoestima, feminismo, sexualidade, racismo e empoderamento econômico. As letras não apenas refletem a realidade das favelas, mas também funcionam como um espaço para celebrar conquistas e criar visibilidade para questões sociais.
    </p>
    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <p className={styles.text}>
    Artistas como Ludmilla e Tati Quebra Barraco trazem temas relacionados ao empoderamento feminino, enquanto nomes como MC Carol falam abertamente sobre violência de gênero e desigualdades sociais. Essa pluralidade transforma o funk em uma plataforma poderosa de discurso social, permitindo que ele vá além do entretenimento.
    </p>

    <h2 className={styles.subtitle_track}>Resistência e Resiliência</h2>

    <p className={styles.text}>
    Apesar de seu sucesso, o funk ainda enfrenta desafios significativos, como o preconceito de parte da sociedade e tentativas de criminalização. Mesmo com a ascensão global e o reconhecimento artístico, as raízes do gênero continuam firmemente plantadas nas favelas, e os artistas frequentemente utilizam suas plataformas para denunciar as desigualdades sociais e lutar por direitos. Essa conexão com sua origem faz do funk não apenas um gênero musical, mas também um movimento político e cultural.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    <h2 className={styles.subtitle_track}>O Futuro do Funk</h2>


    <p className={styles.text}>
    Com seu caráter inovador e adaptável, o funk continua a se reinventar. Ele não apenas reflete as mudanças culturais e sociais, mas também lidera novas tendências. Com o apoio de plataformas digitais e a crescente aceitação do público, o gênero promete expandir ainda mais sua influência, consolidando-se como uma das mais autênticas e importantes expressões culturais do Brasil. 
    
    O funk hoje é a celebração da criatividade, da resistência e do poder transformador das comunidades. Ele mostra que, mesmo nas condições mais adversas, a arte pode florescer e se tornar uma força global, unindo pessoas e inspirando mudanças.
    </p>

    <div className={styles.third_part_image}>
        <img src="" alt="" />
    </div>

    </div>
  );
}

export default FunkPage;