import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">{"Hello, I'm"}</span>
            <h1 className="home__name">Nazmul Haque</h1>
            <h3 className="home__education">Full Stack Developer</h3>

            <div className="home__button">
              <Link
                download=""
                href="./pdf/hailee-Cv.pdf"
                className="button button--ghost"
              >
                Download CV
              </Link>

              <Link href="#about" className="button">
                About
              </Link>
            </div>
          </div>

          <div className="home__handle">
            <Image
              src="/img/perfil.png"
              width={220}
              height={390}
              alt="Nazmul"
              className="home__img"
            />
          </div>

          <div className="home__social">
            {socialLinks.map(({ href, icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="home__social-link"
              >
                <i className={icon}></i>
              </Link>
            ))}
          </div>

          <Link href="#about" className="home__scroll">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </Link>
        </div>
      </section>
    </>
  );
}
