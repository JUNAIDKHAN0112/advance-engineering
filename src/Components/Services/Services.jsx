import { Link } from "react-router-dom";
import { Arrow, Eyebrow, PageIntro, ProjectCTA } from "../../components/UI";
import { services } from "../../data/catalogue";
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="OUR EXPERTISE"
        title={
          <>
            From the first idea.
            <br />
            <em>For the long run.</em>
          </>
        }
      >
        A considered approach to planning, manufacturing, installation, and
        support — built around the way your plant needs to work.
      </PageIntro>
      <div className="container services-cover">
        <img
          src="/media/craft.webp"
          alt="Plant structures and interconnected bulk material handling systems"
          width="1280"
          height="720"
        />
        <div className="services-cover-caption">
          <span>CONNECTED THINKING.</span>
          <span>FROM DRAWING TO DELIVERY.</span>
        </div>
      </div>
      <section className="section">
        <div className="container service-list">
          {services.map((service) => (
            <article key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <Eyebrow>{service.short}</Eyebrow>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div className="service-scope">
                <span className="small-label">THE FOCUS</span>
                <ul>
                  {service.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/quote" className="text-link">
                  Let’s discuss
                  <Arrow diagonal />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="process-section section">
        <div className="container">
          <Eyebrow>THE WAY FORWARD</Eyebrow>
          <h2>
            A clear path.
            <br />
            <em>A shared ambition.</em>
          </h2>
          <div className="process-grid">
            {[
              [
                "01",
                "Tell us your requirement",
                "Share your material, process, and the outcome you have in mind.",
              ],
              [
                "02",
                "Shape the solution",
                "We review the equipment, configuration, and installation considerations together.",
              ],
              [
                "03",
                "Agree the details",
                "Receive a quotation with the scope and commercial terms for your project.",
              ],
              [
                "04",
                "Build the next chapter",
                "Move forward with manufacturing, installation, and support as agreed.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
