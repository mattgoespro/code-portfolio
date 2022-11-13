import styles from './ProjectListRequestFailure.module.scss';

export function ProjectListRequestFailure() {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/images/misc/network-request-failure.png" alt="network-request-failure" />
      <div className={styles.error}>
        <h1 className={styles['err-msg']}>
          <span>Oops!</span> The projects failed to load.
        </h1>
        <h2 className={styles['err-msg-try-later']}>Please try again later.</h2>
      </div>
    </div>
  );
}
