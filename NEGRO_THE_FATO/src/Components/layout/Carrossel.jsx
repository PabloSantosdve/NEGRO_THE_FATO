import React, { useEffect, useState } from 'react'; 
import styles from './Carrossel.module.css'; 

import image1 from '../../images/Rap/Racionais Carrossel.jpg';
import image2 from '../../images/Rap/Ye Carrossel.jpg';
import image3 from '../../images/Rap/james brown carrossel.jpg';
import image4 from '../../images/Funk/Hariel.jpg';


const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      img: image1, // Imagem importada
      title: 'Racionais MC', // Título da imagem
      link: 'https://www.youtube.com/@RacionaisTV/videos',
    },
    {
      img: image2,
      title: 'Kanye West (YE)',
      link: 'https://www.youtube.com/@kanyewest/videos',
    },
    {
      img: image3,
      title: 'James Brown',
      link: 'https://www.youtube.com/@JamesBrownOfficial/videos',
    },
    {
      img: image4,
      title: 'Hariel',
      link: 'https://www.youtube.com/@MCHarielOriginal/videos',
    },
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carrosselContainer}>
      <h2 className={styles.title}>Conheça os melhores artistas</h2>

      <div
        className={styles.carrosselContent}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
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
            <div className={styles.imageContainer}>
              <img
                src={image.img}
                alt={`Slide ${index + 1}`}
                className={styles.image}
                style={{
                  opacity: currentIndex === index ? 1 : 0.5,
                }}
              />
              {/* Título sobre a imagem */}
              <div className={styles.imageTitle}>{image.title}</div>
            </div>
          </a>
        ))}
      </div>

      <button className={styles.arrowLeft} onClick={prevSlide}>
        &#10096;
      </button>

      <button className={styles.arrowRight} onClick={nextSlide}>
        &#10097;
      </button>
    </div>
  );
};

export default Carrossel;
