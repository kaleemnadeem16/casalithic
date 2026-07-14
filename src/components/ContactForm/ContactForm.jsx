import { useState } from "react";
import "./ContactForm.css";

const collections = [
  "Wardrobes",
  "Kitchen",
  "Vanities & Wall Units",
  "Doors",
  "Flooring",
  "Saunas & Cold Plunges",
  "Indoor Furniture",
  "Outdoor Furniture",
  "Saloon Furniture",
  "Office Furniture",
  "Cinema Furniture",
  "Several collections",
];

function ContactForm({ idPrefix = "contact", compact = false, onSuccess }) {
  const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSubmitState({ status: "submitting", message: "" });

    try {
      const body = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => body.set(key, String(value)));

      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: body.toString(),
      });
      const responseText = await response.text();
      let result = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error("The server returned an unexpected response. Please email us directly.");
      }

      if (!response.ok) {
        throw new Error(result.message || `We could not send your enquiry (error ${response.status}).`);
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: result.message || "Thank you. Your enquiry has been received.",
      });
      onSuccess?.();
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message || "We could not send your enquiry. Please try again.",
      });
    }
  };

  return (
    <form className={`contact-form ${compact ? "is-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor={`${idPrefix}-name`}>Name *</label>
        <input id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </div>
      <div className="contact-field">
        <label htmlFor={`${idPrefix}-email`}>Email *</label>
        <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
      </div>
      <div className="contact-field">
        <label htmlFor={`${idPrefix}-location`}>Project location</label>
        <input id={`${idPrefix}-location`} name="location" type="text" placeholder="City, country" />
      </div>
      <div className="contact-field">
        <label htmlFor={`${idPrefix}-project`}>Project type *</label>
        <select id={`${idPrefix}-project`} name="projectType" required defaultValue="">
          <option value="" disabled>Select project type</option>
          <option>Complete residence</option>
          <option>Multiple rooms</option>
          <option>Single collection</option>
          <option>Professional space</option>
        </select>
      </div>
      <div className="contact-field is-wide">
        <label htmlFor={`${idPrefix}-collection`}>Collection of interest</label>
        <select id={`${idPrefix}-collection`} name="collection" defaultValue="">
          <option value="">Select a collection</option>
          {collections.map((collection) => <option key={collection}>{collection}</option>)}
        </select>
      </div>
      <div className="contact-field is-wide">
        <label htmlFor={`${idPrefix}-message`}>Your vision *</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          minLength={3}
          placeholder="Tell us about the spaces, atmosphere and experience you would like to create."
        />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" type="text" tabIndex="-1" autoComplete="off" />
      </div>
      <div className="contact-form-footer">
        <div>
          <p>Your details are sent securely to the Casa Lithic® team.</p>
          {submitState.message && (
            <p className={`contact-form-status is-${submitState.status}`} role="status">
              {submitState.message}
            </p>
          )}
        </div>
        <button className="contact-submit" type="submit" disabled={submitState.status === "submitting"}>
          {submitState.status === "submitting" ? "Sending…" : "Send enquiry ↗"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
