import styles from './AboutPage.module.scss';

export function AboutPage() {
  return (
    <div className={styles['about-page']}>
      <div className={styles['page-header']}>
        <h1 className={styles.name}>
          Matthew <span>Young</span>
        </h1>
        <div className={styles['character-traits-list']}>
          <div className={styles['character-traits']}>
            <div>Challenge Seeker</div>
            <div className={styles.separator}></div>
            <div>Go-Getter</div>
            <div className={styles.separator}></div>
            <div>Avid Learner</div>
          </div>
          <div className={styles['character-traits']}>
            <div>Adventurer</div>
            <div className={styles.separator}></div>
            <div>Dreamer</div>
          </div>
        </div>
      </div>
      <div className={styles['page-header-wave']}></div>
      <div className={styles['about-me']}>
        <div className={styles['summary-header']}>
          <div className={styles['summary-text']}>
            <h1 className={styles['summary-text-heading']}>Hi, I'm Matt.</h1>
            <p className={styles['summary-text-info']}>
              This is my online portfolio, where you can get an inside look into my skills as a
              Software Engineer, and see what I've been working on outside of my professional
              career.
            </p>
          </div>
          <img src="/assets/images/misc/portrait.jpg" alt="profile-img" />
        </div>
        <div className={styles['detailed-info']}>
          <p>
            I am 27 years of age currently living in Cape Town, South Africa. I have been working as
            a full-stack Software Engineer for close to 4 years.
          </p>
          <p>
            I've showed in technology for as long as I can remember (when CRT monitors, dial-up
            internet, and encyclopedia software dominated) . My love of technology grew into my
            teenage years, when I would discover and divulge in copious amounts of online
            multiplayer PC gaming. The dream to one day create video games for everyone to enjoy as
            much as I did ultimately became the prime inspiration to pursue programming as a career.
          </p>
          <div className={styles['uct-caption']}>
            <img src="/assets/images/misc/university-of-cape-town.jpg" alt="uct" />
            <label>University of Cape Town</label>
          </div>
          <p>
            After enrolling in my highschool Information Technology class at the age of 16, I was
            ready to take on the programming world head-on, but things did not turn out as easy as I
            was expecting. After underperforming in class, struggling to grasp and comprehend
            programming fundamentals, a shadow of doubt was cast on the prospect of pursuing my
            dream. Was I cut out for this kind of work? I considered dropping programming
            altogether.
          </p>
          <p>
            Little did I know that a new and up and coming sandbox game I had been obsessed about
            would change the course of my programming journey - Minecraft.
          </p>
          <p>
            Minecraft - developed in Java - had an outstanding server plugin community, so I began
            to fiddle around, creating small plugins to test my capabilities. A good friend of mine
            had started a public Minecraft server around the same time, which went on to integrate
            and use the custom plugins I had written for it. The server eventually became one of the
            top 5 most played-on Minecraft servers worldwide, and I was thrilled to see other
            players having fun with the plugins that I had written. It was at this time when
            something clicked in my head; my 'code-brain' unlocked, and I knew this was what I
            wanted to do for a living.
          </p>
          <p>I ended up graduating top of my programming class by the end of highschool.</p>
          <p>
            In 2015 I enrolled at the University of Cape Town majoring in Computer Science with a
            double major in Games Development. In 2019 I graduated with an honours degree in my
            chosen majors.
          </p>
          <p>
            I have been working professionally as a full-stack Software Engineer for around 4 years.
            I am currently working in the FinTech industry, focusing on developing state of the art
            web services that facilitate distribution of point-of-sale terminal configuration over
            the internet to merchant retail stores, all at a global scale. There is a chance you
            have used my code without realizing it!
          </p>
          <p>
            I have a passion for learning and an overwhelming drive for success. Programming has
            become a quintessential part of my life, both professionally and personally. I find
            great pleasure in studying, designing, prototyping, engineering, and delivering
            cutting-edge software solutions across a wide range of platforms including the web,
            mobile (
            <a
              className={styles['smellsense-link']}
              href="https://mattgoespro.github.io/smellsense-site/"
              target="tab"
            >
              SmellSense
            </a>
            ), and gaming.
          </p>
          <p>
            When I'm not at the computer with 20+ Google Chrome tabs open during a debug session,
            you may find me at the beach, catching up on the latest memes, watching my favourite
            internet personalities on Twitch or YouTube, or enjoying a relaxing gaming session.
          </p>
        </div>
      </div>
    </div>
  );
}
