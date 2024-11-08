"use client";
import { useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ImgRvl() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const masks = document.querySelectorAll('.mask');

        masks.forEach(mask => {
            const image = mask.querySelector('.imgg');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mask,
                    toggleActions: "restart none none reset"
                }
            });

            tl.set(mask, { autoAlpha: 1 })
              .from(mask, {
                  duration: 1.5,
                  xPercent: -100,
                  ease: Power2.out
              })
              .from(image, {
                  duration: 1.5,
                  xPercent: 100,
                  scale: 1.3,
                  delay: -1.5,
                  ease: Power2.out
              });
        });
    }, []); // Leeres Array sorgt dafür, dass der Effekt nur einmal ausgeführt wird

}
export default ImgRvl