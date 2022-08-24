import AboutProfile from '@images/about-profile.jpg';
import './About.scss';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-content-wrapper">
        <img className="img-profile" src={AboutProfile} alt="profile"></img>
        <div className="about-content">
          <div className="about-title">
            <div>A Short Summary of Me</div>
          </div>
          <div className="about-text">
            <div className="about-info left">
              <p className="paragraph">Now a little bit about me.</p>
              <p className="paragraph">I am a proud South African, born and bred.</p>
              <p className="paragraph">
                In 2015, I began my tertiary education at the University of Cape Town. In 2019, I
                graduated with an Honours degree, majoring in Computer Science and Computer Games
                Development.
              </p>
              <p className="paragraph">
                I have now been working professionally as a Software Engineer for 4 years. I am
                currently working in the FinTech sector, focusing on developing state of the art
                web-services to facilitate distribution of terminal configuration to merchant retail
                stores over the internet. There is a chance you have used my code without realizing
                it!
              </p>
              <p className="paragraph">
                I began my programming journey creating server plugins in Java for the popular video
                game, Minecraft in my free time outside of school. The server running my code went
                on to become one of the top 5 servers worldwide by number of concurrent players. It
                was at this time that my &apos;code-brain&apos; unlocked, and I knew there and then
                that this was what I was meant to do.
              </p>
            </div>
            <div className="about-info">
              <p className="paragraph">
                I have a passion for learning and extreme drive for success. Programming has become
                a large part of my life; I find great pleasure in learning about, designing,
                engineering, and delivering cutting-edge software products across a wide range of
                platforms, some of which include:
              </p>
              <ul>
                <li>
                  <span className="list-item">Web apps and microservices</span>
                </li>
                <li>
                  <span className="list-item">Mobile</span>
                </li>
                <li>
                  <span className="list-item">Gaming</span>
                </li>
              </ul>
              <p className="paragraph">
                When I&apos;m not at the computer with 20+ Google Chrome tabs open during a debug
                session, you may find me at the beach, on the slopes of the alps, grabbing a beer on
                a night out with friends, or playing my favourite video games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
