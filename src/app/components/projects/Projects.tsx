import PageBanner from '@shared/components/page-banner/PageBanner';
import { Outlet } from 'react-router-dom';

export function Projects() {
  return (
    <div>
      <PageBanner
        title="Here's what I've been working on."
        subtitle="...among other things"
        backgroundImage="/images/programmer-setup-banner.jpg"
        backgroundImageAdjust={true}
      />
      <Outlet />
    </div>
  );
}
