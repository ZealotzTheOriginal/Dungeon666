import React from 'react';
import styles from '../components_styles/Pages_FadingGif.module.css';

const FadingGif = ({ gifUrl }) => {
  return (
    <div className={styles.TVEffect}>
      <img
        src={gifUrl}
        alt="Animated content with fade-in transition"
        className={styles.gifFadeIn}
      />
    </div>
  );
};

export default FadingGif;