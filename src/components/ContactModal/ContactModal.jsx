import { useEffect, useRef, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactModal.css";

const triggerSelector = [
  "[data-contact-modal]",
  ".header-cta",
  ".mobile-menu-cta",
  'a[href="#contact"]',
  'a[href$="-inquiry"]',
  '.editorial-cta a[href="/contact"]',
  '.wardrobe-inquiry a[href^="mailto:"]',
].join(", ");

function ContactModal() {
  const [isOpen, setIsOpen] = useState(() => window.location.hash === "#contact-modal");
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
    if (window.location.hash === "#contact-modal") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  useEffect(() => {
    const openFromTrigger = (event) => {
      if (event.target.closest("[data-contact-direct]")) return;
      const trigger = event.target.closest(triggerSelector);
      if (!trigger || trigger.closest(".contact-modal")) return;
      event.preventDefault();
      previousFocusRef.current = trigger;
      setIsOpen(true);
    };

    const openFromHash = () => {
      if (window.location.hash === "#contact-modal") setIsOpen(true);
    };

    document.addEventListener("click", openFromTrigger);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      document.removeEventListener("click", openFromTrigger);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div className="contact-modal-panel" data-lenis-prevent>
        <button ref={closeRef} className="contact-modal-close" type="button" onClick={closeModal} aria-label="Close contact form">
          <span /> <span />
        </button>
        <aside className="contact-modal-intro">
          <span className="eyebrow light">Private Consultation</span>
          <h2 id="contact-modal-title">Tell us how you want to live.</h2>
          <p>
            Share your residence, preferred collections and ambitions. We will begin
            with a thoughtful conversation about the world you would like to create.
          </p>
          <div className="contact-modal-emails">
            <span>Direct enquiries</span>
            <a data-contact-direct href="mailto:sales@casalithic.com">sales@casalithic.com</a>
            <a data-contact-direct href="mailto:info@casalithic.com">info@casalithic.com</a>
          </div>
        </aside>
        <div className="contact-modal-form">
          <span>Project enquiry</span>
          <h3>Begin your Casa Lithic® story.</h3>
          <ContactForm idPrefix="modal-contact" compact />
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
