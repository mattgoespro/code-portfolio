import styles from './AboutPage.module.scss';

export function AboutPage() {
  return (
    <div className={styles['about-page']}>
      <div className={styles.about}>
        <div className={styles.head}>
          <h1 className={styles.name}>Matthew Young</h1>
          <div className={styles['character-traits']}>
            <div>Challenge Seeker</div>
            <div className={styles.separator}></div>
            <div>Go-Getter</div>
            <div className={styles.separator}></div>
            <div>Scholar</div>
          </div>
          <div className={styles['character-traits']}>
            <div>Adventurer</div>
            <div className={styles.separator}></div>
            <div>Dreamer</div>
          </div>
        </div>
        <div className={styles['about-me']}>
          <div className={styles['summary-header']}>
            <p className={styles['summary-text']}>
              Hey! My name is Matthew Young, I am 26 years of age and currently living in Cape Town,
              South Africa. Welcome to my humble abode hidden in my tiny corner of the web. I have
              been working as a Software Engineer for close to 4 years, and am lucky enough to have
              turned my passion into my livelihood.
            </p>
            <img src="/assets/images/misc/face-portrait.jpg" alt="profile-img" />
          </div>
          <div>
            <p>
              My web page serves as a portfolio piece itself, as well as to showcase my most
              noteworthy software projects over my tenure as a programmer, as well as to learn,
              develop, and improve my skills as a UX designer and full-stack developer.
            </p>
            <p>
              If you found my web page from my resume, thank you for taking an interest in me as a
              professional. If not, you can gain a good feel of what I am all about by taking a
              browse around my portfolio. browsing my projects: my personality, professional skills,
              interests, and extracurricular activities. about, or to simply take a tour of just
              taking a tour of my portfolio.
            </p>
            <p>
              Technology has been my passion started at a young age, when CRT monitors, dialup
              internet, and encyclopedia software dominated my time. My love of technology grew into
              my teenage years where I would discover and divulge myself in copious amounts of
              online multiplayer PC gaming. The fantasy to one day create games ultimately became
              the catalyst to my growth as a programmer.
            </p>
            <p>
              After enrolling in my selected Information Technology classes at the age of 16, I was
              ready to take on the world, but things did not turn out as easy as I expected. After
              under-performing and not meeting my own expectations, a shadow of doubt was cast as to
              whether I was cut out for this kind of work and considered dropping it altogether.
              Little did I know that a new and up and coming sandbox game I was obsessed with would
              change the course of my entire life - Minecraft.
            </p>
            <p>
              Minecraft - being developed in Java - had an outstanding server plugin community, so I
              began to fiddle around and see what I could do (a good friend started a public server
              at the same time). The server went on to integrate my own custom plugins, and while
              doing so, eventually became one of the top 5 Minecraft servers worldwide by number of
              concurrent players. I was thrilled experiencing others enjoying the fruits of my
              labour. It was at this time that my 'code-brain' unlocked, and I knew there and then
              that this was what I was destined to do.
            </p>
            <p>Funnily, I ended up graduating top of my programming class.</p>
            <p>
              In 2015, I began my tertiary education at the University of Cape Town. In 2019, I
              graduated with an Honours degree, majoring in Computer Science and Computer Games
              Development.
            </p>
            <p>
              I have been working professionally as a Software Engineer for ~4 years. I am currently
              involved in the FinTech sector, focusing on developing state of the art web-services
              to facilitate distribution of terminal configuration to merchant retail stores over
              the internet at a monumental scale. There is a chance you have used my code without
              realizing it!
            </p>
            <p>
              I have a passion for learning and extreme drive for success. Programming has become a
              large part of my life, both professionally and personally; I find great pleasure in
              learning about, designing, engineering, and delivering cutting-edge software products
              across a wide range of platforms, some of which include:
            </p>
            <ul>
              <li>Web applications</li>
              <li>
                Mobile development (see my published Android/iOS application,{' '}
                <a
                  className={styles['smellsense-link']}
                  href="https://mattgoespro.github.io/smellsense-site/"
                  target="tab"
                >
                  SmellSense
                </a>
                )
              </li>
              <li>Game Development</li>
            </ul>
            <p>
              When I'm not at the computer with 20+ Google Chrome tabs open during a debug session,
              you may find me at the beach, grabbing a beer on a night out with friends, catching up
              on the latest memes, watching my favourite internet personalities, or enjoying a
              relaxing gaming session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
