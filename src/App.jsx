import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
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
import { stripLanguagePrefix } from "./i18n/language";

const routeLoaders = {
  "/about": () => import("./pages/AboutPage/AboutPage"),
  "/collections": () => import("./pages/CollectionsPage/CollectionsPage"),
  "/gallery": () => import("./pages/GalleryPage/GalleryPage"),
  "/contact": () => import("./pages/ContactPage/ContactPage"),
  "/collections/wardrobes": () => import("./pages/Wardrobes/WardrobesPage"),
  "/collections/kitchen": () => import("./pages/Kitchen/KitchenPage"),
  "/collections/vanities-wall-units": () => import("./pages/VanitiesWallUnits/VanitiesWallUnitsPage"),
  "/collections/doors": () => import("./pages/Doors/DoorsPage"),
  "/collections/flooring": () => import("./pages/Flooring/FlooringPage"),
  "/collections/saunas-cold-plunges": () => import("./pages/SaunasColdPlunges/SaunasColdPlungesPage"),
  "/collections/indoor-furniture": () => import("./pages/IndoorFurniture/IndoorFurniturePage"),
  "/collections/outdoor-furniture": () => import("./pages/OutdoorFurniture/OutdoorFurniturePage"),
  "/collections/saloon-furniture": () => import("./pages/SaloonFurniture/SaloonFurniturePage"),
  "/collections/office-furniture": () => import("./pages/OfficeFurniture/OfficeFurniturePage"),
  "/collections/cinema-furniture": () => import("./pages/CinemaFurniture/CinemaFurniturePage"),
};
const routePromises = new Map();

function loadRoute(path) {
  const loader = routeLoaders[path];
  if (!loader) return Promise.resolve(null);
  if (!routePromises.has(path)) {
    routePromises.set(
      path,
      loader().catch((error) => {
        routePromises.delete(path);
        throw error;
      })
    );
  }
  return routePromises.get(path);
}

const lazyRoute = (path) => lazy(() => loadRoute(path));
const AboutPage = lazyRoute("/about");
const CollectionsPage = lazyRoute("/collections");
const GalleryPage = lazyRoute("/gallery");
const ContactPage = lazyRoute("/contact");
const WardrobesPage = lazyRoute("/collections/wardrobes");
const KitchenPage = lazyRoute("/collections/kitchen");
const VanitiesWallUnitsPage = lazyRoute("/collections/vanities-wall-units");
const DoorsPage = lazyRoute("/collections/doors");
const FlooringPage = lazyRoute("/collections/flooring");
const SaunasColdPlungesPage = lazyRoute("/collections/saunas-cold-plunges");
const IndoorFurniturePage = lazyRoute("/collections/indoor-furniture");
const OutdoorFurniturePage = lazyRoute("/collections/outdoor-furniture");
const SaloonFurniturePage = lazyRoute("/collections/saloon-furniture");
const OfficeFurniturePage = lazyRoute("/collections/office-furniture");
const CinemaFurniturePage = lazyRoute("/collections/cinema-furniture");

function LazyRoute({ component: Component }) {
  return (
    <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
      <Component />
    </Suspense>
  );
}

function App() {
  const currentPath = stripLanguagePrefix(window.location.pathname).replace(/\/$/, "");
  const isWardrobesPage = currentPath === "/collections/wardrobes";
  const isKitchenPage = currentPath === "/collections/kitchen";
  const isVanitiesWallUnitsPage = currentPath === "/collections/vanities-wall-units";
  const isDoorsPage = currentPath === "/collections/doors";
  const isFlooringPage = currentPath === "/collections/flooring";
  const isSaunasColdPlungesPage = currentPath === "/collections/saunas-cold-plunges";
  const isIndoorFurniturePage = currentPath === "/collections/indoor-furniture";
  const isOutdoorFurniturePage = currentPath === "/collections/outdoor-furniture";
  const isSaloonFurniturePage = currentPath === "/collections/saloon-furniture";
  const isOfficeFurniturePage = currentPath === "/collections/office-furniture";
  const isCinemaFurniturePage = currentPath === "/collections/cinema-furniture";
  const isAboutPage = currentPath === "/about";
  const isGalleryPage = currentPath === "/gallery";
  const isContactPage = currentPath === "/contact";
  const isCollectionsPage = currentPath === "/collections";

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const constrainedConnection = connection?.saveData || /(^|slow-)2g/.test(connection?.effectiveType || "");
    const normalizeRoute = (href) => {
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return "";
        return stripLanguagePrefix(url.pathname).replace(/\/$/, "") || "/";
      } catch {
        return "";
      }
    };
    const warmRoute = (path) => {
      if (!path || path === currentPath || !routeLoaders[path] || constrainedConnection) return Promise.resolve();
      return loadRoute(path).catch(() => undefined);
    };
    const warmFromEvent = (event) => {
      const link = event.target.closest?.("a[href]");
      if (link) warmRoute(normalizeRoute(link.href));
    };

    document.addEventListener("pointerover", warmFromEvent, { passive: true });
    document.addEventListener("focusin", warmFromEvent);
    document.addEventListener("touchstart", warmFromEvent, { passive: true });

    if (constrainedConnection) {
      return () => {
        document.removeEventListener("pointerover", warmFromEvent);
        document.removeEventListener("focusin", warmFromEvent);
        document.removeEventListener("touchstart", warmFromEvent);
      };
    }

    const queue = Object.keys(routeLoaders).filter((path) => path !== currentPath);
    let cancelled = false;
    let timer = 0;
    let idleTask = 0;

    const scheduleNext = () => {
      if (cancelled || queue.length === 0) return;
      if (document.visibilityState !== "visible") {
        timer = window.setTimeout(scheduleNext, 3000);
        return;
      }

      const run = () => {
        if (cancelled) return;
        const path = queue.shift();
        warmRoute(path).finally(() => {
          if (!cancelled) timer = window.setTimeout(scheduleNext, 750);
        });
      };

      if ("requestIdleCallback" in window) {
        idleTask = window.requestIdleCallback(run, { timeout: 4000 });
      } else {
        timer = window.setTimeout(run, 1500);
      }
    };

    const beginBackgroundWarming = () => {
      timer = window.setTimeout(scheduleNext, 8000);
    };

    if (document.readyState === "complete") beginBackgroundWarming();
    else window.addEventListener("load", beginBackgroundWarming, { once: true });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (idleTask && "cancelIdleCallback" in window) window.cancelIdleCallback(idleTask);
      window.removeEventListener("load", beginBackgroundWarming);
      document.removeEventListener("pointerover", warmFromEvent);
      document.removeEventListener("focusin", warmFromEvent);
      document.removeEventListener("touchstart", warmFromEvent);
    };
  }, [currentPath]);

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
      if (event.defaultPrevented) return;
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
    const registered = new WeakSet();
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

    const registerRevealBlocks = (root) => {
      if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
      const nodes = [];
      if (root.matches?.("[data-reveal-block]")) nodes.push(root);
      root.querySelectorAll?.("[data-reveal-block]").forEach((node) => nodes.push(node));
      nodes.forEach((node) => {
        if (registered.has(node)) return;
        registered.add(node);
        observer.observe(node);
      });
    };

    registerRevealBlocks(document);
    const contentObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach(registerRevealBlocks));
    });
    contentObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  if (isWardrobesPage) {
    return <LazyRoute component={WardrobesPage} />;
  }

  if (isKitchenPage) {
    return <LazyRoute component={KitchenPage} />;
  }

  if (isVanitiesWallUnitsPage) {
    return <LazyRoute component={VanitiesWallUnitsPage} />;
  }

  if (isDoorsPage) {
    return <LazyRoute component={DoorsPage} />;
  }

  if (isFlooringPage) {
    return <LazyRoute component={FlooringPage} />;
  }

  if (isSaunasColdPlungesPage) {
    return <LazyRoute component={SaunasColdPlungesPage} />;
  }

  if (isIndoorFurniturePage) {
    return <LazyRoute component={IndoorFurniturePage} />;
  }

  if (isOutdoorFurniturePage) {
    return <LazyRoute component={OutdoorFurniturePage} />;
  }

  if (isSaloonFurniturePage) {
    return <LazyRoute component={SaloonFurniturePage} />;
  }

  if (isOfficeFurniturePage) {
    return <LazyRoute component={OfficeFurniturePage} />;
  }

  if (isCinemaFurniturePage) {
    return <LazyRoute component={CinemaFurniturePage} />;
  }

  if (isAboutPage) {
    return <LazyRoute component={AboutPage} />;
  }

  if (isGalleryPage) {
    return <LazyRoute component={GalleryPage} />;
  }

  if (isContactPage) {
    return <LazyRoute component={ContactPage} />;
  }

  if (isCollectionsPage) {
    return <LazyRoute component={CollectionsPage} />;
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
