import styles from './ProjectPageLoadError.module.scss';

export function ProjectPageLoadError() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['err-msg']}>
        Oops! My projects are unable to be displayed at this time.
      </div>
      <div className={styles['err-msg-try-again']}>
        Please try again later, or contact me directly on my socials.
      </div>
    </div>
  );
}
