import React from 'react';
import styles from './Pages.module.css'
import Capa from '../../images/capa rap.jpg'
import RapCompromisso from '../../images/rap e compromisso.jpg'
import banner from '../../images/cartoon.jpg'
import Banner2 from '../../images/dj cartoon.jpg'
import Rapper from '../../images/SurgimentoCartoon.jpg'
import Rapper2 from '../../images/Surgimento_Mcs.jpg'
import Rapper3 from '../../images/capa rap.jpg'
import CarrosselRap from '../../Components/layout/CarrosselRap'

function RapPage() {
  return (
    <div className={styles.container}>
      
      {/*Parte da playlist de Rap*/}
      <h1 className={styles.name_playlist}>Veja o melhor do Rap</h1>

      <div className={styles.conteudo}>
        <iframe 
            style={{ borderRadius: "12px" }} 
            src="https://open.spotify.com/embed/playlist/62oPqQKKB3UbXH4serczHH?utm_source=generator" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>

      </div>

{/*First part */}
      <h1 className={styles.title}>RAP</h1>

      <h2 className={styles.subtitle}>Conheça um pouco da historia do Rap</h2>

  
      <div className={styles.first_track}>


        <div className={styles.first_image}>
          <img src={Capa} alt="" />
        </div>

        <div  className={styles.first_text}>
          <p>
          O rap é mais do que apenas um gênero musical; é uma manifestação cultural que emergiu em um contexto social específico e cresceu para se tornar uma das formas de expressão mais influentes e duradouras do mundo. A história do rap é entrelaçada com a história das comunidades afro-americanas e latinas nos Estados Unidos, que ao longo do século XX, enfrentaram profundas desigualdades sociais e econômicas. Desde as suas raízes nas ruas do Bronx até sua ascensão global, o rap sempre foi uma ferramenta para narrar histórias, desafiar o status quo e conectar pessoas de diferentes origens.
          </p>
        </div>

      </div>

{/*Second part */}

      <h2 className={styles.subtitle_track}>Origens do Rap</h2>


      <div className={styles.first_track}>

      
        <div  className={styles.first_text}>
          <p>
          O rap surgiu na década de 1970 em Nova York, mais especificamente no bairro do Bronx, uma área marcada por altos índices de pobreza, criminalidade e segregação racial. O Bronx naquela época era um lugar esquecido pelas políticas públicas, com muitos de seus moradores vivendo em condições de extrema vulnerabilidade. Este ambiente de dificuldades foi o solo fértil onde o hip-hop — e consequentemente o rap — brotou como uma forma de resistência cultural e comunitária.
          </p>

        </div>

        <div className={styles.first_image}>
          <img src={RapCompromisso} alt="" />
          </div>
      </div>

{/* third part*/}
      <div className={styles.third_track}>
        
        <h2 className={styles.subtitle_track}>A crise no Bronx</h2>
        
        <p className={styles.text}>
        O Bronx nos anos 60 e 70 estava em crise. Com a construção da Cross-Bronx Expressway, uma rodovia que cortava o bairro ao meio, muitas famílias foram deslocadas de suas casas, contribuindo para um declínio econômico e social. As fábricas fecharam, o desemprego aumentou e o crime se tornou desenfreado. A ausência de oportunidades e a deterioração das condições de vida criaram um sentimento de desesperança entre os jovens, especialmente os afro-americanos e latinos.
        </p>



        <p className={styles.text}>
        Entretanto, em meio a essa devastação, surgiu um movimento cultural que desafiava essa narrativa de desespero. Festas de rua e eventos comunitários começaram a ser organizados, onde DJs e MCs se tornaram as novas estrelas. Esses eventos eram mais do que apenas uma forma de entretenimento; eram uma maneira de reconstruir o tecido social e a identidade cultural da comunidade.
        </p>

      <div className={styles.third_part_image}>
        <img src={banner} alt="" />
      </div>

      </div>

    <h2 className={styles.subtitle_track}>O Papel dos DJs e das Festas de Rua</h2>

    <div className={styles.third_part_image}>
        <img src={Banner2} alt="" />
    </div>

    <p className={styles.text}>
    O papel dos DJs foi crucial na formação do rap. DJs como Kool Herc, Afrika Bambaataa e Grandmaster Flash são frequentemente creditados como os pioneiros do hip-hop. Eles introduziram técnicas inovadoras que formariam a base do rap, como o "breakbeat," onde as partes rítmicas mais dançantes de uma música eram repetidas, criando uma base para os dançarinos e, eventualmente, para os MCs.
    </p>

    <p className={styles.text}>
    DJ Kool Herc, um imigrante jamaicano, trouxe consigo a tradição dos "sound systems" da Jamaica, onde grandes festas eram realizadas ao ar livre com música alta e ritmos pulsantes. Em 11 de agosto de 1973, Herc organizou uma festa no número 1520 da Sedgwick Avenue, que é amplamente reconhecida como o evento de nascimento do hip-hop. Ele utilizou dois toca-discos para prolongar a parte instrumental das músicas, conhecida como "break," que era a favorita dos dançarinos de breakdance. Essa técnica foi fundamental para o desenvolvimento do que viria a ser conhecido como rap.
    </p>

    <p className={styles.text}>
    Enquanto Herc inovava com suas técnicas, outros DJs começaram a explorar novas formas de manipulação sonora. Grandmaster Flash, por exemplo, desenvolveu técnicas avançadas de "cutting" e "scratching," onde ele usava as mãos para mover os discos de vinil de maneira precisa, criando sons novos e únicos. O uso dessas técnicas transformou o DJ de um simples tocador de discos em um verdadeiro criador de sons, fundamental para o desenvolvimento do rap.
    </p>


    <h2 className={styles.subtitle_track}>O Surgimento dos MCS</h2>

    <p className={styles.text}>
    Com o tempo, os MCs (mestres de cerimônias) começaram a assumir um papel mais central nas festas. Inicialmente, sua função era animar a multidão encorajando os dançarinos e exaltando o DJ. No entanto, à medida que o movimento crescia, os MCs começaram a rimar de forma rítmica sobre as batidas criadas pelos DJs. Essas rimas geralmente falavam sobre a vida nas ruas, as dificuldades enfrentadas pela comunidade e, muitas vezes, traziam uma mensagem de resistência e resiliência.
    </p>

    <p className={styles.text}>
    MCs como Coke La Rock, que colaborou com Kool Herc, foram os primeiros a rimar em festas de hip-hop. A evolução do MCing para o que conhecemos hoje como rap foi rápida, com MCs ganhando mais destaque e as rimas tornando-se cada vez mais complexas e líricas. Essa transição marcou o início do rap como um gênero distinto dentro do movimento hip-hop.
    </p>

    <div className={styles.third_part_image}>
        <img src={Rapper} alt="" />
      </div>

    <h2 className={styles.subtitle_track}> Influências Culturais e musicais</h2>

    <p className={styles.text}>
    O rap foi profundamente influenciado por várias tradições musicais e culturais. A poesia falada, que tem raízes nas tradições orais africanas, desempenhou um papel crucial na formação do estilo de rima dos primeiros MCs. Além disso, o soul, o funk e o jazz forneceram as bases rítmicas e melódicas para muitos dos primeiros sucessos de rap. Artistas como James Brown e suas batidas funky foram frequentemente sampleados pelos primeiros DJs, estabelecendo uma conexão direta entre o rap e a música negra americana.
    </p>

    <p className={styles.text}>
    O rap também foi influenciado por tradições de rima e ritmo que vinham de outras partes do mundo, como o "toasting" jamaicano, onde DJs falavam sobre as batidas, criando uma forma primitiva de rap. Essa fusão de culturas e estilos musicais contribuiu para a criação de um som que era ao mesmo tempo novo e profundamente enraizado nas tradições existentes.
    </p>

    <div className={styles.third_part_image}>
        <img src={Rapper2} alt="" />
      </div>

    <h2 className={styles.subtitle_track}> Expansão e globalização</h2>

    <p className={styles.text}>
    A partir do final dos anos 1970 e início dos anos 1980, o rap começou a se expandir para além do Bronx, alcançando outras partes dos Estados Unidos e, eventualmente, o mundo. Sugarhill Gang, com seu hit "Rapper's Delight" de 1979, foi o primeiro grupo de rap a ter uma música de sucesso comercial, ajudando a popularizar o gênero fora das comunidades afro-americanas e latinas.
    </p>

    <p className={styles.text}>
    Nos anos 1980, o rap começou a se consolidar como um gênero musical importante. Grupos como Run-D.M.C., Beastie Boys e Public Enemy levaram o rap para o mainstream, cada um trazendo suas próprias influências e abordagens ao gênero. Enquanto Run-D.M.C. misturava o rap com o rock, Public Enemy focava em letras politicamente carregadas, abordando questões como racismo, desigualdade e brutalidade policial.
    </p>

    <p className={styles.text}>
    Com o passar dos anos, o rap se diversificou em vários subgêneros, cada um refletindo diferentes aspectos da vida e cultura das comunidades onde surgiram. Desde o Gangsta Rap da Costa Oeste, popularizado por artistas como N.W.A. e Tupac Shakur, até o Boom Bap da Costa Leste, com artistas como Nas e The Notorious B.I.G., o rap continuou a evoluir e se adaptar às realidades locais.
    </p>

    <p className={styles.text} id={styles.last_part}>
    Hoje, o rap é um fenômeno global, com artistas de todo o mundo utilizando o gênero para expressar suas próprias histórias e culturas. O rap continua a ser uma força vital na música, na cultura e na política, desafiando normas e conectando pessoas de diferentes origens e experiências.
    </p>

    <div className={styles.third_part_image}>
        <img src={Rapper3} alt="" />
      </div>

    <CarrosselRap />


    </div>
  );
}

export default RapPage;