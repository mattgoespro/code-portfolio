import './PageBanner.scss';

interface PageBannerProps {
  title: string | JSX.Element;
  subtitle: string;
  backgroundImage: string;
}

function PageBanner(props: PageBannerProps) {
  return (
    <div className="banner">
      <img className="banner-image" src={props.backgroundImage} alt="banner-image"></img>
      <div className="banner-title-wrapper">
        <h1 className="banner-title">{props.title}</h1>
        <h3 className="banner-subtitle">{props.subtitle}</h3>
      </div>
    </div>
  );
}

export default PageBanner;
