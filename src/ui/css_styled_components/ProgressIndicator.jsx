import styles from "./ProgressIndicator.module.css";

function ProgressIndicator() {
  return (
    <section className={styles["dots-container"]}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </section>
  );
}

export default ProgressIndicator;
