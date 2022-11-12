import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import { Outlet } from 'react-router-dom';

export function ProjectPage() {
  return (
    <>
      <PageBanner
        title="Here's what I've been working on"
        subtitle="...among other things"
        backgroundImage="/assets/images/page-banners/programmer-setup-banner.jpg"
        backgroundImageAdjust={true}
      />
      <Outlet />
    </>
  );
}
