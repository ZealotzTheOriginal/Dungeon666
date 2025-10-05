import React from 'react';
import styles from '../components_styles/Meme_Eventually.module.css';

const FullscreenVideo = ({ videoUrl }) => {
  return (
    <div className={styles.VideoContainer}>
      {/* Atributos clave:
        - autoPlay: Para que comience automáticamente.
        - loop: Para que se repita continuamente.
        - controls={false}: Para que no se muestren los controles de pausa/avance.
        - playsInline: Recomendado para la reproducción en dispositivos iOS.
      */}
      <video
        src={videoUrl}
        alt="Fullscreen background video"
        className={styles.videoElement}
        autoPlay
        loop
        muted={false} // Establece en true si el autoPlay no funciona en tu navegador
        controls={false}
        playsInline
      />
      {/* Esta capa asegura que no se pueda interactuar (hacer clic, etc.) con el video */}
      <div className={styles.OverlayBlocker}></div>
    </div>
  );
};

export default FullscreenVideo;