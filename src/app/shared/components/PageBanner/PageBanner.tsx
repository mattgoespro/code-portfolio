import './PageBanner.scss';

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
    <div className="banner" style={{ backgroundColor: props.backgroundColor }}>
      {props.backgroundColor == null && props.backgroundImage != null && (
        <img
          className={props.backgroundImageAdjust ? 'banner-image' : ''}
          src={props.backgroundImage}
          alt="banner-image"
        ></img>
      )}
      <div className="banner-title-wrapper">
        <div className="banner-title" style={{ color: props.titleColor }}>
          {props.title}
        </div>
        <div className="banner-subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}
