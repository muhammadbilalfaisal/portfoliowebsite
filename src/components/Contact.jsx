import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ContactLinks from "./ContactLinks";
import { createSectionClickHandler } from "../utils/scrollToSection";

const initialForm = { name: "", email: "", company: "", type: "", message: "" };
const fieldDefinitions = [
  ["name", "Name", "text"],
  ["email", "Email", "email"],
  ["company", "Company or Organization", "text"],
];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(form.email))
    errors.email = "Please enter a valid email.";
  if (!form.type) errors.type = "Please choose a project type.";
  if (form.message.trim().length < 15)
    errors.message = "Please add at least 15 characters.";
  return errors;
}

async function submitProjectInquiry(form) {
  // Add the Formspree, EmailJS, Web3Forms, or custom API request here.
  // Example: await fetch(API_URL, { method: 'POST', body: JSON.stringify(form) });
  // Remove this short placeholder delay when the real request is connected.
  await new Promise((resolve) => window.setTimeout(resolve, 350));
  return form;
}

function FieldError({ id, children }) {
  return (
    <small className="error" id={id} role="alert">
      {children}
    </small>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");
  const formRef = useRef(null);

  const update = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
    setErrors((current) => ({ ...current, [target.name]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setNotice("");
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() =>
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus(),
      );
      return;
    }

    setStatus("submitting");
    setNotice("");
    try {
      await submitProjectInquiry(form);
      setStatus("success");
      setNotice(
        "Your inquiry is ready to send once a form service is connected.",
      );
    } catch {
      setStatus("error");
      setNotice(
        "Something went wrong. Please try again or use one of the contact links.",
      );
    }
  };

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <div className="section-kicker">
          <span>07</span> Contact / Start a Conversation
        </div>
        <h2>
          LET&apos;S BUILD SOMETHING
          <br />
          THAT SOLVES A REAL
          <br />
          <em>BUSINESS PROBLEM.</em>
        </h2>
      </Reveal>
      <div className="contact-grid">
        <Reveal>
          <div className="contact-copy">
            <p>
              Whether you need a business website, an internal management
              system, an admin dashboard, or an automation solution, I&apos;d be
              happy to discuss your project.
            </p>
            <a
              href="#contact-form"
              className="button primary"
              onClick={createSectionClickHandler("contact-form")}
            >
              Start a Conversation <ArrowUpRight size={17} />
            </a>
            <ContactLinks />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form id="contact-form" ref={formRef} onSubmit={submit} noValidate>
            {fieldDefinitions.map(([name, label, type], index) => {
              const errorId = `${name}-error`;
              return (
                <div
                  className={`form-field ${index === 2 ? "form-field-wide" : ""}`}
                  key={name}
                >
                  <label htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={form[name]}
                    onChange={update}
                    aria-invalid={Boolean(errors[name])}
                    aria-describedby={errors[name] ? errorId : undefined}
                  />
                  {errors[name] && (
                    <FieldError id={errorId}>{errors[name]}</FieldError>
                  )}
                </div>
              );
            })}
            <div className="form-field">
              <label htmlFor="type">Project Type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={update}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={errors.type ? "type-error" : undefined}
              >
                <option value="">Select a project type</option>
                {[
                  "Business Website",
                  "Internal Portal",
                  "Admin Dashboard",
                  "IT Automation",
                  "Other",
                ].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              {errors.type && (
                <FieldError id="type-error">{errors.type}</FieldError>
              )}
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <FieldError id="message-error">{errors.message}</FieldError>
              )}
            </div>
            <button
              className="form-submit"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send Project Inquiry"}{" "}
              <ArrowUpRight size={17} />
            </button>
            {notice && (
              <p
                className={`form-notice ${status}`}
                role="status"
                aria-live="polite"
              >
                {notice}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
