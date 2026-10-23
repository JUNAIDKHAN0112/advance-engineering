import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Arrow, Eyebrow, PageIntro } from "../../components/UI";
import { company, products } from "../../data/catalogue";
export default function Quote() {
  const [params] = useSearchParams();
  const initial = products.some(
    (product) => product.slug === params.get("machine"),
  )
    ? params.get("machine")
    : "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    machine: initial,
    message: "",
  });
  const [status, setStatus] = useState("");
  function update(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    setStatus("");
  }
  function prepare(event) {
    event.preventDefault();
    const product =
      products.find((item) => item.slug === form.machine)?.name ||
      "Project consultation";
    const subject = `Project enquiry — ${product}`;
    const body = `Hello National Engineering Works,\n\nI would like to discuss ${product}.\n\nName: ${form.name.trim()}\nCompany: ${form.business.trim() || "Not provided"}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || "Not provided"}\n\nRequirements:\n${form.message.trim()}\n\nPlease contact me to discuss the next steps.`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app has been requested. Review and send the enquiry there. If it did not open, email or call us directly using the details below.",
    );
  }
  return (
    <>
      <PageIntro
        eyebrow="LET’S START A CONVERSATION"
        title={
          <>
            Great things begin
            <br />
            <em>with a conversation.</em>
          </>
        }
      >
        Tell us what you have in mind. We’ll help you explore the machinery,
        configuration, and next steps for your project.
      </PageIntro>
      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-aside">
            <Eyebrow>DIRECT TO THE PEOPLE WHO BUILD IT</Eyebrow>
            <h2>
              Your next project.
              <br />
              <em>Our full attention.</em>
            </h2>
            <p>
              A new milling line, an individual machine, or support for your
              existing plant — speak with our team.
            </p>
            <div className="contact-detail">
              <span className="small-label">EMAIL US</span>
              <a href={`mailto:${company.email}`}>
                {company.email}
                <Arrow diagonal />
              </a>
            </div>
            <div className="contact-detail">
              <span className="small-label">CALL THE TEAM</span>
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`}>
                  +91 {phone}
                  <Arrow diagonal />
                </a>
              ))}
            </div>
            <div className="contact-detail">
              <span className="small-label">FIND US</span>
              <p>
                C-162, Chincholi MIDC
                <br />
                Solapur, Maharashtra 413255
                <br />
                India
              </p>
              <a
                href={company.maps}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Get directions
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={prepare}>
            <div className="form-heading">
              <span className="small-label">A FEW DETAILS TO GET STARTED</span>
              <span>* REQUIRED</span>
            </div>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength="100"
                  autoComplete="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={update}
                  pattern=".*\S.*"
                />
              </div>
              <div className="field">
                <label htmlFor="business">Company</label>
                <input
                  id="business"
                  name="business"
                  maxLength="150"
                  autoComplete="organization"
                  placeholder="Company name"
                  value={form.business}
                  onChange={update}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength="254"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update}
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength="30"
                  autoComplete="tel"
                  placeholder="Include your country code"
                  value={form.phone}
                  onChange={update}
                />
              </div>
              <div className="field field--full">
                <label htmlFor="machine">What are you interested in?</label>
                <select
                  id="machine"
                  name="machine"
                  value={form.machine}
                  onChange={update}
                >
                  <option value="">A project / general consultation</option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="message">
                  Tell us about your requirement *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength="10"
                  maxLength="2000"
                  placeholder="Your material, required process, location, and any details that will help us understand your project."
                  rows="5"
                  value={form.message}
                  onChange={update}
                />
              </div>
            </div>
            <p className="form-note">
              This prepares an enquiry in your email app. Review it and press
              send there. Your details are not stored on this website.
            </p>
            <button className="button" type="submit">
              Prepare email enquiry
              <Arrow diagonal />
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
      </section>
      <section className="visit-section">
        <div className="container visit-grid">
          <div>
            <Eyebrow light>COME SEE WHAT WE BUILD</Eyebrow>
            <h2>
              Rooted in Solapur.
              <br />
              <em>Ready for your next step.</em>
            </h2>
            <a
              href={company.maps}
              className="button button--outline"
              target="_blank"
              rel="noreferrer"
            >
              Find our location
              <Arrow diagonal />
            </a>
          </div>
          <img
            src="/media/workshop.webp"
            alt="Machinery at the National Engineering Works workshop"
            width="1280"
            height="960"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
