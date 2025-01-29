import React, { useEffect, useState } from 'react'; 
import styles from './Carrossel.module.css'; 

import image1 from '../../images/Rap/Racionais Carrossel.jpg';
import image2 from '../../images/Rap/Ye Carrossel.jpg';
import image3 from '../../images/Rap/jayz carrossel.jpg';
import image4 from '../../images/Rap/50 cent carrossel.jpg';
import image5 from '../../images/Rap/kendrick carrossel.jpg';
import image6 from '../../images/Rap/Bk carrossel.jpg';
import image7 from '../../images/Rap/djonga carrossel.jpg';
import image8 from '../../images/Rap/matue carrossel.jpg';




const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      img: image1, // Imagem importada
      title: 'Racionais MC\'s', // Título da imagem
      link: 'https://www.youtube.com/@RacionaisTV/videos',
    },
    {
      img: image2,
      title: 'Kanye West (YE)',
      link: 'https://www.youtube.com/@kanyewest/videos',
    },
    {
      img: image3,
      title: 'Jay Z',
      link: 'https://www.youtube.com/@jayzslifeandtimes/videos',
    },
    {
      img: image4,
      title: '50 cent',
      link: 'https://www.youtube.com/@jayzslifeandtimes/videos',
    },
    {
      img: image5,
      title: 'Kendrick lamar ',
      link: 'https://www.youtube.com/@kendricklamar/videos',
    },
    {
      img: image6,
      title: 'BK',
      link: 'https://www.youtube.com/@BKttlapa/videoss',
    },
    {
      img: image7,
      title: 'Djonga',
      link: 'https://www.youtube.com/@DjongaGE/videos',
    },
    {
      img: image8,
      title: 'Matue',
      link: 'https://www.youtube.com/channel/UCYF3HLy2nzDREEE50KbOnKA',
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
    const interval = setInterval(nextSlide, 7000);
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
