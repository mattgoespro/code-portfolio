import styles from './ProjectPageLoadError.module.scss';

export function ProjectPageLoadError() {
  return (
    <div className={styles.wrapper}>
      <img src="/images/misc/failfish.png" alt="failfish" />
      <div className={styles.error}>
        <div className={styles['err-msg']}>Oops! The projects failed to load.</div>
        <div className={styles['err-msg-try-later']}>Please try again later.</div>
      </div>
    </div>
  );
}
