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

const CLOSE_DURATION = 420;

function ContactModal() {
  const [isOpen, setIsOpen] = useState(() => window.location.hash === "#contact-modal");
  const [isClosing, setIsClosing] = useState(false);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const closeTimerRef = useRef(null);
  const closingRef = useRef(false);

  const openModal = () => {
    window.clearTimeout(closeTimerRef.current);
    closingRef.current = false;
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    if (!isOpen || closingRef.current) return;
    closingRef.current = true;
    setIsClosing(true);
    if (window.location.hash === "#contact-modal") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : CLOSE_DURATION;
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closingRef.current = false;
    }, delay);
  };

  useEffect(() => {
    const openFromTrigger = (event) => {
      if (event.target.closest("[data-contact-direct]")) return;
      const trigger = event.target.closest(triggerSelector);
      if (!trigger || trigger.closest(".contact-modal")) return;
      event.preventDefault();
      previousFocusRef.current = trigger;
      openModal();
    };

    const openFromHash = () => {
      if (window.location.hash === "#contact-modal") openModal();
    };

    document.addEventListener("click", openFromTrigger, true);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      document.removeEventListener("click", openFromTrigger, true);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

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
      className={`contact-modal ${isClosing ? "is-closing" : "is-opening"}`}
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
