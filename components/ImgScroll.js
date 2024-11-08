"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let lenis = new Lenis({
      lerp: 0.1, // Je kleiner der Wert, desto sanfter das Scrollen
      smooth: true,
    });

    // Die Smooth Scroll Funktion durchgehend aufrufen
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: ScrollTrigger refreshen
    ScrollTrigger.refresh();

    return () => {
      // Cleanup
      lenis.destroy();
    };
  }, []);

  return null; // Diese Komponente rendert keinen Inhalt direkt
}

export default SmoothScroll;
