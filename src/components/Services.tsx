import { services } from "@/data/serviceData";

export default function Services() {
  return (
    <>
      <section className="services section">
        <span className="section__subtitle">My Services</span>
        <h2 className="section__title">What I Offer</h2>

        <div className="services__container container grid">
          {services.map((service, index) => (
            <div className="services__card" key={index}>
              <h3 className="services__title">
                {service.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </h3>

              <span className="services__button">
                See More <i className="bx bx-right-arrow services__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <i className="bx bx-x services__modal-close"></i>

                  <h3 className="services__modal-title">
                    {service.modalTitle}
                  </h3>
                  <p className="services__modal-description">
                    {service.description}
                  </p>

                  <ul className="services__modal-list">
                    {service.items.map((item, idx) => (
                      <li className="services__modal-item" key={idx}>
                        <i className="bx bx-check-circle"></i>
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
