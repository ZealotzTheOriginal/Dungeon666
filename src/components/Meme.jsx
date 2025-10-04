import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import sonidoMeme from '../assets/honk_sound.mp3';
import MemeTwenty from './MemeTwenty';

export default function Meme() {
  const audioRef = useRef(null);
  const [clics, setClics] = useState(0);
  const timeoutRef = useRef(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Calcula la clase una sola vez al inicio del componente
  // Esto asegura que la clase no cambie en cada re-renderizado
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

useEffect(() => {
  // Selecciona TODOS los elementos con las clases .MemePro o .MemeProInverted
  const gifContainers = document.querySelectorAll('.MemePro, .MemeProInverted');
  
  // Si se encuentran elementos, itera sobre ellos y añade la clase
  if (gifContainers.length > 0) {
    setTimeout(() => {
      gifContainers.forEach(container => {
        container.classList.add('is-visible');
      });
    }, 500); // El retraso de 2 segundos para todos los elementos
  }
}, []);

  return (
    <>
      <audio ref={audioRef} src={sonidoMeme} preload="auto"></audio>

      <div className={claseAleatoria} onClick={manejarClic}>
        <img src="https://media.tenor.com/QtFnp0yr24kAAAAj/purple-guy-dancing.gif" alt="Purple Fire"/>
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