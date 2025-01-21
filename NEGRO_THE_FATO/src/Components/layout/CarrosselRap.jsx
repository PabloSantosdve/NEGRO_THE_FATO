import React, { useEffect, useState } from 'react'; // Importa React e os hooks useEffect e useState
import styles from './Carrossel.module.css'; // Importa o arquivo de estilos modularizados (CSS Modules)

const Carrossel = () => { // Declaração do componente funcional Carrossel
  const [currentIndex, setCurrentIndex] = useState(0); // Cria o estado currentIndex para controlar a imagem exibida (começa em 0)
  const [isTransitioning, setIsTransitioning] = useState(false); // Cria o estado isTransitioning para controlar a transição suave (inicia como falso)

  // Array de objetos com informações sobre cada imagem do carrossel (URL da imagem e link)
  const images = [
    {
      img: 'https://i.pinimg.com/736x/74/c6/8b/74c68b169212a6790b324514d486a748.jpg', // URL da primeira imagem
      link: '', // Link vazio (pode ser preenchido conforme necessário)
    },
    {
      img: 'https://i.pinimg.com/736x/ae/2a/88/ae2a8816a9bfadf357e9835ed63fa1ce.jpg', // URL da segunda imagem
      link: '', // Link vazio (pode ser preenchido conforme necessário)
    },
    {
      img: 'https://i.pinimg.com/736x/7a/0b/f6/7a0bf6dcdbcbdd00ad12b7244df6f28c.jpg', // URL da terceira imagem
      link: '', // Link vazio (pode ser preenchido conforme necessário)
    },
    
  ];

  // Função para avançar para a próxima imagem
  const nextSlide = () => { 
    setIsTransitioning(true); // Ativa a transição suave para indicar que a troca de imagem está em andamento
    setTimeout(() => { // Define um tempo de espera para que a transição ocorra antes de mudar a imagem
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Atualiza o índice para a próxima imagem, voltando para a primeira após a última
      setIsTransitioning(false); // Desativa a transição depois que a mudança de imagem ocorre
    }, 500); // Tempo de espera de 500ms para a animação da transição
  };

  // Função para retroceder para a imagem anterior
  const prevSlide = () => {
    setIsTransitioning(true); // Ativa a transição suave para indicar que a troca de imagem está em andamento
    setTimeout(() => { // Define um tempo de espera para que a transição ocorra antes de mudar a imagem
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Retrocede ao índice anterior, voltando para a última imagem se estiver na primeira
      );
      setIsTransitioning(false); // Desativa a transição após a mudança de imagem
    }, 500); // Tempo de espera de 500ms para a animação da transição
  };

  // Efeito para rotação automática das imagens
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Define um intervalo para chamar a função nextSlide a cada 3 segundos (3000ms)
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado, prevenindo vazamentos de memória
  }, []); // O efeito só é executado uma vez quando o componente é montado (sem dependências)

  return (
    <div className={styles.carrosselContainer}> {/* Container principal do carrossel com estilo importado */}
      <h2 className={styles.title}>Conheça os melhores artistas do Rap</h2> {/* Título do carrossel, com estilo aplicado */}

      <div
        className={styles.carrosselContent} // Container das imagens, com estilo aplicado
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Muda a posição das imagens com base no currentIndex (movimento horizontal)
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', // Aplica a transição suave quando isTransitioning é verdadeiro
        }}
      >
        {/* Mapeia o array de imagens e renderiza cada imagem com seu link */}
        {images.map((image, index) => (
          <a
            key={index} // A chave única para cada elemento da lista
            href={image.link} // Link associado à imagem (pode ser vazio ou preenchido conforme necessidade)
            target="_blank" // Define que o link será aberto em uma nova aba
            rel="noopener noreferrer" // Melhora a segurança ao abrir links em nova aba
            className={styles.imageLink} // Estilo para o link em volta da imagem
          >
            <img
              src={image.img} // Define a URL da imagem
              alt={`Slide ${index + 1}`} // Texto alternativo para a imagem (para acessibilidade)
              className={styles.image} // Estilo para a imagem
              style={{
                opacity: currentIndex === index ? 1 : 0.5, // Aplica opacidade maior para a imagem atual e menor para as outras
              }}
            />
          </a>
        ))}
      </div>

      {/* Botão de navegação para a esquerda */}
      <button className={styles.arrowLeft} onClick={prevSlide}>
        &#10096; {/* Ícone de seta para a esquerda */}
      </button>

      {/* Botão de navegação para a direita */}
      <button className={styles.arrowRight} onClick={nextSlide}>
        &#10097; {/* Ícone de seta para a direita */}
      </button>
    </div>
  );
};

export default Carrossel; // Exporta o componente Carrossel para ser usado em outros lugares do aplicativo
