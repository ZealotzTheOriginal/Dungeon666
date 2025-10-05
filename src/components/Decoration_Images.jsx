import React, { useState, useRef, useEffect } from 'react';
import styles from '../pages_styles/URL_Home.module.css';

export const homeDecorationImages = [
  "https://i.pinimg.com/736x/e3/68/24/e36824e13d9b36cb3a0505aff289c672.jpg",
  "https://i.pinimg.com/736x/da/30/38/da3038fedc4bdacaf2bf3b57c4fcdf2c.jpg",
  "https://i.pinimg.com/736x/07/ed/dd/07edddf6a5b1ba18811249e21666644b.jpg",
  "https://i.pinimg.com/736x/b4/8b/88/b48b88ae6c1d82ed53aad07d6d07fcef.jpg",
  "https://i.pinimg.com/736x/8e/79/18/8e7918d95892100be3919f4cedd73558.jpg",
  "https://i.pinimg.com/736x/bc/73/76/bc7376164a06d2ae5b3307b176d36b20.jpg",
  "https://i.pinimg.com/736x/55/d5/66/55d566e1078d47811c4a90c58fb3ea5d.jpg",
  "https://i.pinimg.com/1200x/80/6d/90/806d90fc2af674693e6ef26da15a1e0b.jpg",
  "https://i.pinimg.com/1200x/8c/86/c8/8c86c88c054e8fb7546ea8aa5632e1c5.jpg",
  "https://i.pinimg.com/1200x/57/12/ed/5712edaaecea05f26b21a32141631bfa.jpg",
  "https://i.pinimg.com/1200x/1c/6d/dc/1c6ddcca6aa69cd55029a4c92e29031e.jpg",
  "https://i.pinimg.com/1200x/76/51/ad/7651ad925af52b192e8c43a96b37199d.jpg",
  "https://i.pinimg.com/736x/b9/16/92/b9169228f7de881d06159cd4ce7e08fd.jpg",
  "https://i.pinimg.com/736x/2c/51/3e/2c513e05f45e0fb616a2d2255c8b4eab.jpg",
  "https://i.pinimg.com/1200x/0b/f2/2d/0bf22d15dd89a74935b751342afc29c8.jpg",
  "https://i.pinimg.com/1200x/15/d9/52/15d9527581a3de591bc58a28406406e4.jpg",
  "https://i.pinimg.com/736x/e5/69/c9/e569c93b8cfde62b155019f6e5a6c589.jpg",
  "https://i.pinimg.com/736x/ce/7b/0c/ce7b0c780adcd1e55f6d34b026ee5158.jpg",
  "https://i.pinimg.com/736x/f2/c4/82/f2c482ea78e795230fd85de7caf7da4f.jpg",
  "https://i.pinimg.com/736x/f1/b2/0c/f1b20ca8aa40b321e75ae4879fe9f701.jpg",
  "https://i.pinimg.com/1200x/0f/67/ff/0f67ff261f7d471017f46928e8fcd3ae.jpg",
  "https://i.pinimg.com/736x/d5/fd/26/d5fd26d43328c8bb4d15f7c4bc7b4abc.jpg",
  "https://i.pinimg.com/1200x/53/0a/75/530a759394968696b9cdfa605b9d1456.jpg",
  "https://i.pinimg.com/736x/d4/15/71/d41571849b4aeacb01649b10753306cf.jpg",
];

const getRandomIndex = () => {
  return Math.floor(Math.random() * homeDecorationImages.length);
};

const REPEAT_DELAY = 1000 / 9;

const useImageCycle = (onIndexChange) => {
  const [currentIndex, setCurrentIndex] = useState(getRandomIndex);
  const totalImages = homeDecorationImages.length;
  const intervalRef = useRef(null);
  
  const moveImage = (direction) => {
    setCurrentIndex(prevIndex => {
      let nextIndex;
      if (direction === 1) {
        nextIndex = (prevIndex + 1) % totalImages;
      } else {
        nextIndex = (prevIndex - 1 + totalImages) % totalImages;
      }
      
      if (onIndexChange) {
        onIndexChange(nextIndex);
      }

      return nextIndex;
    });
  };

  const stopRepetition = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startRepetition = (e, direction) => {
    e.preventDefault();
    
    if (homeDecorationImages.length === 0) return; 

    moveImage(direction);

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        moveImage(direction);
      }, REPEAT_DELAY);
    }
  };
  
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
    return () => stopRepetition();
  }, []);

  return { currentIndex, startRepetition, stopRepetition };
}











export function HomeDecoration() {
  const { currentIndex, startRepetition, stopRepetition } = useImageCycle(); 
  
  const handleMouseDown = (e) => {
    if (e.button === 0) {
      startRepetition(e, 1);
    } else if (e.button === 2) {
      startRepetition(e, -1);
    }
  };

  return (
    <img
      src={homeDecorationImages[currentIndex]}
      alt="Home Decoration"
      className={styles.homeDecorationImg}
      onMouseDown={handleMouseDown}
      onMouseUp={stopRepetition}
      onMouseLeave={stopRepetition}
      onContextMenu={(e) => e.preventDefault()}
      style={{ cursor: 'pointer' }}
    />
  );
}











export function HomeDecorationMega({ id, onIndexChange }) {
  const { currentIndex, startRepetition, stopRepetition } = useImageCycle((newIndex) => onIndexChange(id, newIndex)); 
  const totalImages = homeDecorationImages.length;

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      startRepetition(e, 1);
    } else if (e.button === 2) {
      startRepetition(e, -1);
    }
  };

  return (
    <>
      <img
        src={homeDecorationImages[currentIndex]}
        alt={`Home Decoration Mega ${id}`}
        className={styles.homeDecorationMegaImg}
        onMouseDown={handleMouseDown}
        onMouseUp={stopRepetition}
        onMouseLeave={stopRepetition}
        onContextMenu={(e) => e.preventDefault()}
        style={{ cursor: 'pointer' }}
      />
      <p className={styles.imageCounter}>
        {/* {currentIndex + 1} */}
      </p>
    </>
  );
}