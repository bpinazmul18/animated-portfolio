import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section className="work section" id="work">
        <span className="section__subtitle">My Portfolio</span>
        <h2 className="section__title">Recent Works</h2>

        <div className="work__container container grid">
          {projects.map((project, index) => (
            <div key={index} className={`work__card mix ${project.category}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={124}
                className="work__img w-full"
              />

              <h3 className="work__title">{project.title}</h3>

              <Link href={project.demoUrl} className="work__button">
                Demo <i className="bx bx-right-arrow work__icon"></i>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
