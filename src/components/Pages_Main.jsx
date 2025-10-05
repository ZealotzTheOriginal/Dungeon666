import styles from '../components_styles/Pages_Main.module.css';

export default function Main({ children }) {
  return (
    <main className={styles.MainPro}>
      {children}
    </main>
  );
}