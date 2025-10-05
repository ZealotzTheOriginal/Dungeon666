import React, { useEffect, useRef } from 'react';
import sonidoEasterEgg from '../assets/audio/sound/sound_creepy.mp3';
import Terror from '../assets/gif/imageGif_Terror.gif';
const TERRORIMG = Terror;

export default function MemeTwenty({ onClose }) {
  const audioEasterEggRef = useRef(null);

  useEffect(() => {
    // Reproducir sonido al montar el componente
    if (audioEasterEggRef.current) {
      audioEasterEggRef.current.play();
    }

    // Temporizador para ocultar el componente después de 3 segundos
    const timer = setTimeout(() => {
      onClose(); // Llama a la función para cerrar/ocultar el componente padre
    }, 1400);

    // Función de limpieza para cancelar el temporizador si el componente se desmonta antes
    return () => clearTimeout(timer);
  }, [onClose]); // Se ejecuta solo una vez al montar y cuando onClose cambia

    return (
        <>
            <audio ref={audioEasterEggRef} src={sonidoEasterEgg} preload="auto"></audio>
            <div className="MemeTwenty"><img src={TERRORIMG} alt="" /></div>     
        </>
    )
}