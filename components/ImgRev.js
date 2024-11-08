"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ImageRev() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Horizontale Reveal-Animation für das erste Bild
        const revealElementH = document.querySelector(".image-container .reveal-element");
        const actualImageH = document.querySelector(".image-container .actual-image");

        if (revealElementH && actualImageH) {
            // Bild beginnt unsichtbar
            gsap.set(actualImageH, { opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: revealElementH,
                    start: "top bottom-=30%",
                    end: "top center-=30%",
                    scrub: 1,
                },
            });

            // Reveale die Maske und mache das Bild sichtbar
            tl.to(revealElementH, {
                xPercent: 100, // Verschiebe die Maske nach rechts
                duration: 1.5,
                ease: "power2.out",
            })
            .to(actualImageH, {
                opacity: 1, // Mache das Bild sichtbar
                duration: 1,
                ease: "power2.out",
            }, "<"); // Synchronisiere mit der ersten Animation
        }

        // Vertikale Reveal-Animation für das vertikale Bild
        const verticalRevealElements = document.querySelectorAll(".vertical-reveal");

        verticalRevealElements.forEach((el) => {
            const revealElementV = el.querySelector(".reveal-element");
            const actualImageV = el.querySelector(".actual-imagev");

            if (revealElementV && actualImageV) {
                gsap.set(actualImageV, { opacity: 0 }); // Bild ist am Anfang unsichtbar

                const tlVertical = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom-=30%",
                        end: "top center-=60%",
                        scrub: 1,
                    },
                });

                // Reveale die Maske und mache das Bild sichtbar
                tlVertical.to(revealElementV, {
                    yPercent: -100, // Verschiebe die Maske nach oben
                    duration: 2,
                    ease: "power2.out",
                })
                .to(actualImageV, {
                    opacity: 1, // Mache das Bild sichtbar
                    duration: 1,
                    ease: "power2.out",
                }, "<"); // Synchronisiere mit der ersten Animation
            }
        });
    }, []);

    return null; // Diese Komponente rendert keinen Inhalt direkt
}

export default ImageRev;
