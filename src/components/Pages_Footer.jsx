import styles from '../components_styles/Pages_Footer.module.css';

export default function Footer({ children, title }) {
  return (
    <footer className={styles.FooterPro}>
      {children}
      <h2>{title}</h2>
    </footer>
  );
}