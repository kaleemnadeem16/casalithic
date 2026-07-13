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

function ContactForm({ idPrefix = "contact", compact = false, onPrepared }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Casa Lithic project enquiry — ${data.get("projectType")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Location: ${data.get("location") || "Not specified"}`,
      `Project type: ${data.get("projectType")}`,
      `Preferred collection: ${data.get("collection") || "Not specified"}`,
      "",
      "Project vision:",
      data.get("message"),
    ].join("\n");

    onPrepared?.();
    window.location.href = `mailto:sales@casalithic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          placeholder="Tell us about the spaces, atmosphere and experience you would like to create."
        />
      </div>
      <div className="contact-form-footer">
        <p>Submitting will open your email application with the enquiry prepared for your review.</p>
        <button className="contact-submit" type="submit">Prepare enquiry ↗</button>
      </div>
    </form>
  );
}

export default ContactForm;
