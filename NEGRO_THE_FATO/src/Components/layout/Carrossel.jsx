import React, { useEffect, useState } from 'react'; 
import styles from './Carrossel.module.css'; // Importa o arquivo de estilos modularizado

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado que armazena o índice da imagem atual
  const [isTransitioning, setIsTransitioning] = useState(false); // Controle da transição suave

  // Array com as imagens e links associados a cada uma
  const images = [
    {
      img: 'https://i.pinimg.com/736x/74/c6/8b/74c68b169212a6790b324514d486a748.jpg',
      link: 'https://www.instagram.com/pessoa1/',
    },
    {
      img: 'https://i.pinimg.com/736x/ae/2a/88/ae2a8816a9bfadf357e9835ed63fa1ce.jpg',
      link: 'https://www.instagram.com/pessoa2/',
    },
    {
      img: 'https://i.pinimg.com/736x/7a/0b/f6/7a0bf6dcdbcbdd00ad12b7244df6f28c.jpg',
      link: 'https://www.instagram.com/pessoa3/',
    },
  ];

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setIsTransitioning(true); // Ativa a transição
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Incrementa o índice de forma cíclica
      setIsTransitioning(false); // Desativa a transição após a troca
    }, 500); // Tempo de espera para finalizar a transição
  };

  // Função para retroceder para a imagem anterior
  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Retrocede ciclicamente
      );
      setIsTransitioning(false);
    }, 500);
  };

  // Efeito de rotação automática das imagens
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []); // Executa uma vez na montagem do componente

  return (
    <div className={styles.carrosselContainer}>
      <h2 className={styles.title}>Conheça os melhores artistas</h2> {/* Título do carrossel */}
      
      <div
        className={styles.carrosselContent}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Muda a posição da lista de imagens
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', // Aplica transição suave
        }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
          >
            <img
              src={image.img}
              alt={`Slide ${index + 1}`}
              className={styles.image}
              style={{
                opacity: currentIndex === index ? 1 : 0.5, // Dá a sensação de fundo translúcido
              }}
            />
          </a>
        ))}
      </div>
      
      {/* Botões de navegação (setas) */}
      <button className={styles.arrowLeft} onClick={prevSlide}>
        &#10096; {/* Ícone de seta para a esquerda */}
      </button>
      <button className={styles.arrowRight} onClick={nextSlide}>
        &#10097; {/* Ícone de seta para a direita */}
      </button>
    </div>
  );
};

export default Carrossel;
