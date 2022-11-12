import { PageBanner } from '@shared/components/PageBanner/PageBanner';
import styles from './AboutPage.module.scss';

export function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Me"
        subtitle="My journey to becoming a Software Engineer"
        backgroundImage="/assets/images/page-banners/gamer-setup-banner.jpg"
        backgroundImageAdjust={true}
      />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles['title-header']}>
            <h1 className={styles.title}>Matthew Young</h1>
            <h2 className={styles['subtitle-profession']}>
              Software Engineer <span className={styles.separator}></span>
            </h2>
            <div className={styles['subtitle-personality']}>
              <span>Creative</span>
              <div className={styles.separator}></div>
              <span>Scientist</span>
              <div className={styles.separator}></div>
              <span>Gamer</span>
              <div className={styles.separator}></div>
              <span>Geek</span>
            </div>
          </div>
          <img
            className={styles['img-profile']}
            src="/assets/images/misc/face-profile.jpg"
            alt="profile-image"
          ></img>
        </div>
        <div className={styles.content}>
          <p>
            Technology has been my passion started at a young age, when CRT monitors, dialup
            internet, and encyclopedia software dominated my time. My love of technology grew into
            my teenage years where I would discover and divulge myself in copious amounts of online
            multiplayer PC gaming. The fantasy to one day create games ultimately became the
            catalyst to my growth as a programmer.
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
            began to fiddle around and see what I could do (a good friend started a public server at
            the same time). The server went on to integrate my own custom plugins, and while doing
            so, eventually became one of the top 5 Minecraft servers worldwide by number of
            concurrent players. I was thrilled experiencing others enjoying the fruits of my labour.
            It was at this time that my &apos;code-brain&apos; unlocked, and I knew there and then
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
            involved in the FinTech sector, focusing on developing state of the art web-services to
            facilitate distribution of terminal configuration to merchant retail stores over the
            internet at a monumental scale. There is a chance you have used my code without
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
            When I&apos;m not at the computer with 20+ Google Chrome tabs open during a debug
            session, you may find me at the beach, grabbing a beer on a night out with friends,
            catching up on the latest memes, watching my favourite internet personalities, or
            enjoying a relaxing gaming session.
          </p>
        </div>
      </div>
    </>
  );
}
