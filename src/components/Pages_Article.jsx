import styles from '../components_styles/Pages_Article.module.css';

export default function Article({ children }) {
  return (
    <article className={styles.ArticlePro}>
      {children}
    </article>
  );
}