import './ProjectPageLoadError.scss';

export function ProjectPageLoadError() {
  return (
    <div className="project-load-error">
      <div className="error-wrapper">
        <div className="err-msg">Oops! My projects are unable to be displayed at this time.</div>
        <div className="err-try-again">
          Please try again later, or contact me directly on my socials.
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
