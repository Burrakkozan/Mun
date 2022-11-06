
import './App.css';
import React, {useRef,useLayoutEffect } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { preloader } from './js/preloader';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import ScrollToTop from "./js/ScrollToTop";



gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.01,
  smooth: true
});
preloader();
//get scroll value
lenis.on("scroll", ({ scroll, limit }) => {
  //console.log("onScroll", ScrollTrigger.getAll().length);
  //console.log({ scroll, limit });
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


function App() {
  const root = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paths = [...document.querySelectorAll("path.path-anim")];
      /*    const paths = gsap.utils.toArray("path.path-anim"); */

      paths.forEach((el) => {
        const svgEl = el.closest("svg");
        const pathTo = el.dataset.pathTo;

        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: svgEl,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: (self) => {
                const clamp = gsap.utils.clamp(-2, 2);
                let skew = clamp(self.getVelocity() / -300);
                gsap.to(el, { skewX: -skew });
              }
            }
          })
          .to(el, {
            ease: "none",
            attr: { d: pathTo }
          });
      });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={root} >
      <ScrollToTop />
    <Routes>
    {/* <Route path='*' element={<NotFound />} /> */}
      <Route path="/"   element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
