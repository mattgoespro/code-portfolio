import styles from './PageBanner.module.scss';

interface PageBannerProps {
  title: string | JSX.Element;
  titleColor?: string;
  subtitle: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundImageAdjust?: boolean;
}

export function PageBanner(props: PageBannerProps) {
  return (
    <div className={styles.banner} style={{ backgroundColor: props.backgroundColor }}>
      {props.backgroundColor == null && props.backgroundImage != null && (
        <img
          className={props.backgroundImageAdjust ? 'banner-image' : ''}
          src={props.backgroundImage}
          alt="banner-image"
        ></img>
      )}
      <div className={styles['title-wrapper']}>
        <div className={styles.title} style={{ color: props.titleColor }}>
          {props.title}
        </div>
        <div className={styles.subtitle}>{props.subtitle}</div>
      </div>
    </div>
  );
}
