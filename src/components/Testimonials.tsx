import { testimonials } from "@/data/testimonialData";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <section className="testimonial section">
        <span className="section__subtitle">My clients say</span>
        <h2 className="section__title">Testimonials</h2>

        <div className="testimonial__container container swiper">
          <div className="swiper-wrapper">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial__card swiper-slide">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="testimonial__img"
                />
                <h3 className="testimonial__name">{t.name}</h3>
                <p className="testimonial__description">{t.description}</p>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}
