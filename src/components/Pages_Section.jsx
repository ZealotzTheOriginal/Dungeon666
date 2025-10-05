import styles from '../components_styles/Pages_Section.module.css';

export default function Section({ children, title }) {
  return (
    <>
      <div className={styles.MemeDiscoText}><h1>{title}</h1></div>
      <section className={styles.SectionPro}>
        {children}
      </section>
    </>
  );
}