import { aboutBoxes } from "@/data/aboutData";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__container container grid">
          <Image
            src="/img/about.png"
            alt="Nazmul Haque"
            className="about__img"
            width={600}
            height={600}
          />

          <div className="about__data">
            <div className="about__info">
              {aboutBoxes.map((box, index) => (
                <div key={index} className="about__box">
                  <i className={`${box.icon} about__icon`}></i>
                  <h3 className="about__title">{box.title}</h3>
                  <span className="about__subtitle">{box.subtitle}</span>
                </div>
              ))}
            </div>

            <p className="about__description">
              Full Stack Developer with 5+ years of experience building modern
              web applications. I specialize in creating intuitive, responsive,
              and user-friendly interfaces while delivering robust backend
              solutions. Passionate about clean code, performance, and helping
              clients bring their ideas to life.
            </p>

            <Link href="#contact" className="button about__button-contact">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
