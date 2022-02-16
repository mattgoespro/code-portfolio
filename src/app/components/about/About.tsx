import './About.scss';

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-info-wrapper">
        <div className="about-info">
          <img className="img-profile" src="images/profile.png"></img>
          <p>Now a little bit about me.</p>
          <p>I am from the beautiful country of South Africa.</p>
          <p>
            In 2015, I began my tertiary education at the University of Cape Town. In 2019, I
            graduated with an Honours degree majoring in Computer Science and Computer Games
            Development in 2019d.
          </p>
          <p>
            I have now been working professionally as a Software Engineer for 4 years. I am
            currently working in FinTech, focusing on developing state of the art point-of-sales
            configuration distribution software to terminals in large merchant retail stores all
            over the world.
          </p>
          <p>
            I&apos;ve had a passion for programming since I started in school classes. I began my
            programming journey creating private <a href="https://minecraft.net">Minecraft</a>{' '}
            plugins in Java for a large server. It was at this time that my &apos;code-brain&apos;
            unlocked and realised what I wanted to be and do.
          </p>
          <p>
            I have a passion for learning and extreme drive for success. Programming has become a
            large part of my life; I find great pleasure in learning about, designing, engineering,
            and delivering cutting-edge software products across a wide range of platforms:
          </p>
          <ul>
            <li>
              <span className="list-text">Web</span>
            </li>
            <li>
              <span className="list-text">Backend</span>
            </li>
            <li>
              <span className="list-text">Mobile</span>
            </li>
            <li>
              <span className="list-text">PC Gaming</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
