import {
  ButtonLink,
  Eyebrow,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "../../components/UI";
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="OUR STORY / EST. 2010"
        title={
          <>
            Built on experience.
            <br />
            <em>Driven by purpose.</em>
          </>
        }
      >
        From our base in Solapur, we bring practical engineering to the
        machinery that powers food processing.
      </PageIntro>
      <div className="container about-cover">
        <img
          src="/media/factory.webp"
          alt="National Engineering Works plant project with multi-level processing equipment"
          width="1280"
          height="720"
        />
        <div className="photo-caption">
          <span>THE WORLD WE BUILD</span>
          <span>SOLAPUR, MAHARASHTRA</span>
        </div>
      </div>
      <section className="section">
        <div className="container story-grid">
          <div>
            <Eyebrow>A FOUNDATION OF CRAFT</Eyebrow>
            <h2>
              Good engineering
              <br />
              starts with
              <br />
              <em>understanding.</em>
            </h2>
          </div>
          <div className="story-copy">
            <p className="lead">
              Understanding the material. The process. The space. And the people
              who will work with it every day.
            </p>
            <p>
              Established in 2010, National Engineering Works manufactures food
              processing machinery and supports milling plant projects. Based in
              Chincholi MIDC, Solapur, our work brings together equipment,
              layout considerations, and installation requirements.
            </p>
            <p>
              Under the guidance of Irshad Khan, our team works with customers
              to understand what they need from their machinery. From individual
              equipment to connected plant arrangements, we focus on practical
              solutions and a continuing working relationship.
            </p>
            <ButtonLink to="/quote" secondary>
              Meet your next engineering partner
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES OUR WORK"
            title={
              <>
                The details make
                <br />
                <em>the difference.</em>
              </>
            }
          />
          <div className="values-grid">
            {[
              [
                "01",
                "Considered design",
                "Every project begins with the application. We take time to understand how the machinery will fit into the wider process.",
              ],
              [
                "02",
                "Practical craftsmanship",
                "Manufacturing grounded in the realities of installation, operation, and ongoing maintenance.",
              ],
              [
                "03",
                "Lasting relationships",
                "A direct conversation with the team behind your equipment, from the first enquiry to service requirements.",
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
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="A LOOK INSIDE"
            title={
              <>
                Where ideas take
                <br />
                <em>physical form.</em>
              </>
            }
          >
            A closer look at the machinery, installations, and working
            environments behind our projects.
          </SectionHeading>
          <div className="photo-grid">
            <figure>
              <img
                src="/media/installation.webp"
                alt="Processing machinery installed within a steel-framed plant"
                loading="lazy"
                width="1280"
                height="720"
              />
              <figcaption>01 / PLANT INSTALLATIONS</figcaption>
            </figure>
            <figure>
              <img
                src="/media/workshop.webp"
                alt="Fabricated industrial equipment outside the workshop"
                loading="lazy"
                width="1280"
                height="960"
              />
              <figcaption>02 / MACHINERY & FABRICATION</figcaption>
            </figure>
            <figure>
              <img
                src="/media/craft.webp"
                alt="Interconnected grain handling equipment and steel support structures"
                loading="lazy"
                width="1280"
                height="720"
              />
              <figcaption>03 / CONNECTED SYSTEMS</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
