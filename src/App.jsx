import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Collections from "./sections/Collections/Collections";
import Direction from "./sections/Direction/Direction";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import WardrobesPage from "./pages/Wardrobes/WardrobesPage";
import KitchenPage from "./pages/Kitchen/KitchenPage";
import VanitiesWallUnitsPage from "./pages/VanitiesWallUnits/VanitiesWallUnitsPage";
import DoorsPage from "./pages/Doors/DoorsPage";
import FlooringPage from "./pages/Flooring/FlooringPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isWardrobesPage = currentPath === "/collections/wardrobes";
  const isKitchenPage = currentPath === "/collections/kitchen";
  const isVanitiesWallUnitsPage = currentPath === "/collections/vanities-wall-units";
  const isDoorsPage = currentPath === "/collections/doors";
  const isFlooringPage = currentPath === "/collections/flooring";

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.25,
    });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: 0, duration: 1.45 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal-block]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (isWardrobesPage) {
    return <WardrobesPage />;
  }

  if (isKitchenPage) {
    return <KitchenPage />;
  }

  if (isVanitiesWallUnitsPage) {
    return <VanitiesWallUnitsPage />;
  }

  if (isDoorsPage) {
    return <DoorsPage />;
  }

  if (isFlooringPage) {
    return <FlooringPage />;
  }

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <Direction />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
