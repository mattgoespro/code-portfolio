import './PageBanner.scss';

interface PageBannerProps {
  title: string | JSX.Element;
  titleColor?: string;
  subtitle: string;
  backgroundImage: string;
}

function PageBanner(props: PageBannerProps) {
  return (
    <div className="banner">
      <img className="banner-image" src={props.backgroundImage} alt="banner-image"></img>
      <div className="banner-title-wrapper">
        <div className="banner-title" style={{ color: props.titleColor }}>
          {props.title}
        </div>
        <div className="banner-subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}

export default PageBanner;
