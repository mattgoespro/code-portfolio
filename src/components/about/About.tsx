import React from 'react';
import './About.scss';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CvDownloadIcon from '../../../public/assets/media/svg/cv-download.svg';
import SvgIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const downloadCvIcon = (
  <a role={'button'}>
    <div>
      <SvgIcon className="cv-icon">{<CvDownloadIcon />}</SvgIcon>
    </div>
  </a>
);

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-info-wrapper">
        <div className="about-info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus suscipit
          perferendis iste, similique eveniet inventore dolores maiores, consequuntur quae, rerum
          cum. Ducimus qui explicabo, placeat expedita voluptate voluptatum eius? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Enim minima quia asperiores id eius atque, eaque
          suscipit distinctio maiores doloribus fugiat, sit quasi voluptas voluptatem porro
          aspernatur aut dolores voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Vel fugit animi vero odio adipisci accusamus ducimus temporibus deserunt. Officiis
          quam cupiditate nisi ratione rem velit in voluptate ad quod omnis!
        </div>
        <div className="profile-image-wrapper">
          <img className="img-profile" src="assets/media/images/profile.png"></img>
        </div>
      </div>
      <div className="resources">
        <div className="download-cv">
          Download CV
          <SvgIcon className="cv-icon">{<CvDownloadIcon />}</SvgIcon>
        </div>
      </div>
    </div>
  );
}
