import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import sonidoMeme from '../assets/audio/sound/sound_honk.mp3';
import MemeTwenty from './Meme_CreepySurprise';

const memeGifs = [
  "https://media.tenor.com/QtFnp0yr24kAAAAj/purple-guy-dancing.gif",
  "https://i.imgur.com/RitnKI8.gif",
  "https://i.imgur.com/XDoI6iY.gif",
  "https://i.imgur.com/4MU0AGm.gif",
  "https://i.imgur.com/aAgoj6D.gif",
  "https://i.imgur.com/Qi0JnOO.gif",
  "https://i.imgur.com/RitnKI8.gif",
];

export default function Meme() {
  const audioRef = useRef(null);
  // **AÑADIDO:** Referencia para el contenedor de esta instancia de componente
  const containerRef = useRef(null); 
  
  const [clics, setClics] = useState(0);
  const timeoutRef = useRef(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  // Se generan aleatoriamente en cada render/montaje
  const urlAleatoria = memeGifs[Math.floor(Math.random() * memeGifs.length)];
  const claseAleatoria = Math.random() < 0.5 ? 'MemePro' : 'MemeProInverted';

  const reproducirSonido = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  
  const manejarClic = () => {
    reproducirSonido();
    const nuevosClics = clics + 1;
    setClics(nuevosClics);
    
    if (nuevosClics >= 20) {
      setShowEasterEgg(true);
      setClics(0);
      clearTimeout(timeoutRef.current);
      return;
    }
    
    clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      console.log('El tiempo ha expirado, reseteando el contador...');
      setClics(0);
    }, 5000);
  };

  const handleCloseEasterEgg = () => {
    setShowEasterEgg(false);
  };

  // **ACTUALIZADO:** Usa containerRef para acceder solo a su propio elemento DOM
  useEffect(() => {
    // Si la referencia existe (el componente está montado)
    if (containerRef.current) {
      setTimeout(() => {
        // Aplica la clase 'is-visible' directamente a ESTE div
        containerRef.current.classList.add('is-visible'); 
      }, 500);
    }
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  return (
    <>
      <audio ref={audioRef} src={sonidoMeme} preload="auto"></audio>

      {/* **ACTUALIZADO:** Asignamos la referencia al div */}
      <div ref={containerRef} className={claseAleatoria} onClick={manejarClic}>
        <img src={urlAleatoria} alt="Meme Aleatorio"/> 
      </div>

      {showEasterEgg && 
        ReactDOM.createPortal(
          <MemeTwenty onClose={handleCloseEasterEgg} />,
          document.getElementById('portal-root')
        )
      }
    </>
  );
}