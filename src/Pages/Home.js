import React, { useEffect } from 'react'
import Footer from "../Components/Footer";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import proFF from "../img/proFF-min.png";
import pro3p from "../img/pro3p.png";
import pro2 from "../img/pro2.png";
import logos from '../img/logos.svg';
import pro4 from "../img/pro4.png";
import ze1 from "../img/1ze.png";
import ze2 from "../img/2ze.png";
import ze3 from "../img/3ze.png";
import ze12 from "../img/ze12-1.png";
import zers from "../img/zers.png";
import { Link } from "react-router-dom";
import { CgColorBucket } from "react-icons/cg";
import { useLax, useLaxElement } from "use-lax";
import lax from 'lax.js';  
import "@google/model-viewer/dist/model-viewer";
import Poster from "../poster.webp";
import Poster2 from "../poster2.webp";


const Home = () => {
 
  useLax({
    breakpoints: { small: 0, large: 992 },
    drivers: [
      {
        name: "scrollY",
        getValueFn: () => window.scrollY
      }
    ]
  });

  const ref2 = useLaxElement({
  animationData: {
    scrollY: {
      presets: ["spin:867:360"],
       translateX: [
        [0, "screenHeight"],
        [0, "screenWidth"]
      ]
    }
  }
})
  return (
    <>
    <main>
        <section className="content content--centered">
        <img className='logo' src={logos} alt='logo'/>
          <div className="content__title">
        
            <span className="content__title-pre content__title-pre--offset">
              
              <Slide left cascade>
                Creative &
              </Slide>
            </span>
            <h2 className="content__title-main">
              <Slide left cascade>
                Transform
              </Slide>
            </h2>
          </div>
          <div className="content__scroll">Mu & en, if you wish</div>
        </section>
        <section className="content">
          <div
            className="content__bg content__bg--bottom"
            style={{ backgroundImage: `url(${proFF})` }}
          >
            <svg
              className="separator separator--up"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 0 0 C 35 21 70 0 100 0 L 0 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 0 0 C 37 0 70 0 100 0 L 0 0 Z"
              />
            </svg>
            <svg
              className="separator separator--down"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 0 0 C 18 1 61 9 100 0 L 100 10 H 0 Z"
              />
            </svg>
          </div>
          <div className="content__sides">
            <div className="content__text">
              <Slide bottom cascade>
                <h2>Feel with Mu & en</h2>
              </Slide>
              <p>
                Looking for a specific item or just browsing ideas? 
                Creating a hoodie pattern design, which is a visual expression of an idea or intention, has been a process for us because A cozy hoodie pattern design is a wardrobe must-have – both casual and stylish. We preferred to make this hoodie model by adding stripes and animal figures.
                Please contact us and get one step closer to your dream design
              </p>
               <a
                href="https://www.behance.net/burrakozcaan" 
                target="_blank"
                className="button2"
              >
                See MORE <CgColorBucket />
              </a> 
            </div>
            <div className="content__image">
            <model-viewer
            src="/GIFTPREZ.glb"
            ios-src=""
            poster={Poster}
            alt="A 3D model of an astronaut"
            shadow-intensity="1"
             camera-controls
             auto-rotate
             ar
      ></model-viewer>
              </div>
          {/*   <svg
              className="image-clip"
              width="500px"
              height="750px"
              viewBox="0 0 500 750"
            >
              <defs>
                <clipPath id="shape1">
                  <path
                    className="path-anim"
                    data-path-to="M 0 0 L 500 0 C 331 608 485 551 500 750 L 0 750 C 120 281 7 296 0 0 Z"
                    d="M 0 0 L 500 0 C 500 599.6 500 677.1 500 750 L 0 750 C 0 205 0 105 0 0 Z"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#shape1)"
                xlinkHref={pro2}
                x={0}
                y={0}
                width={500}
                height={750}
              />
            </svg> */}
          </div>
        </section>
        <section className="content">
          <div
            className="content__bg content__bg--bottom"
            style={{ backgroundImage: `url(${pro4})` }}
          >
            <svg
              className="separator separator--up"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 0 0 C 40 10 60 10 100 0 L 0 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 0 0 C 40 0 60 0 100 0 L 0 0 Z"
              />
            </svg>
            <svg
              className="separator separator--down"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 0 0 C 25 13 75 13 100 0 L 100 10 H 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 0 0 C 40 0 60 0 100 0 L 100 10 H 0 Z"
              />
            </svg>
            <div className="content__title text-light content__title--right">
              <Slide top cascade>
                <span className="content__title-pre">Muuen of</span>
              </Slide>
              <Slide bottom cascade>
                <h2 className="content__title-main">Top</h2>
              </Slide>
            </div>
          </div>
        </section>
        <section className="content content--grid">
          <svg
            className="image-clip content__img"
            width="500px"
            height="750px"
            viewBox="0 0 500 750"
          >
            <defs>
              <clipPath id="shape2">
                <path
                  className="path-anim"
                  data-path-to="M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z"
                  d="M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#shape2)"
              xlinkHref={ze1}
              x={0}
              y={0}
              width={500}
              height={750}
              alt="model hoodie"
            />
          </svg>
          <svg
            className="image-clip content__img"
            width="500px"
            height="750px"
            viewBox="0 0 500 750"
          >
            <defs>
              <clipPath id="shape1">
                <path
                  className="path-anim"
                  data-path-to="M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z"
                  d="M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#shape1)"
              xlinkHref={zers}
              x={0}
              y={0}
              width={500}
              height={750}
              alt="model hoodie"
            />
          </svg>
          <svg
            className="image-clip content__img"
            width="500px"
            height="750px"
            viewBox="0 0 500 750"
          >
            <defs>
              <clipPath id="shape3">
                <path
                  className="path-anim"
                  data-path-to="M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z"
                  d="M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#shape3)"
              xlinkHref={ze2}
              x={0}
              y={0}
              width={500}
              height={750}
            />
          </svg>
          <svg
            className="image-clip content__img"
            width="500px"
            height="750px"
            viewBox="0 0 500 750"
          >
            <defs>
              <clipPath id="shape4">
                <path
                  className="path-anim"
                  data-path-to="M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z"
                  d="M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#shape4)"
              xlinkHref={ze3}
              x={0}
              y={0}
              width={500}
              height={750}
            />
          </svg>
          <svg
            className="image-clip content__img"
            width="500px"
            height="750px"
            viewBox="0 0 500 750"
          >
            <defs>
              <clipPath id="shape5">
                <path
                  className="path-anim"
                  data-path-to="M 0 0 L 450 1 C 508 97 508 221.8 450 375.5 C 392 529.2 408.7 654.3 500 751 L 50 751 C -6.7 600.3 -3.3 475.2 60 375.5 C 123.3 275.8 103.3 150.7 0 0 Z"
                  d="M 50 0 L 500 1 C 397.3 110.7 380.7 235.5 450 375.5 C 519.3 515.5 519.3 640.7 450 751 L 0 751 C 100.7 624.7 120.7 499.5 60 375.5 C -0.7 251.5 -4 126.3 50 0 Z"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#shape5)"
              xlinkHref={ze12}
              x={0}
              y={0}
              width={500}
              height={750}
            />
          </svg>
        </section>
        <section className="content">
          <model-viewer
        src="/PROZ-ESnew.glb"
        ios-src=""
        poster={Poster2}
        alt="A 3D model of an astronaut"
        ar
         ar-modes="webxr scene-viewer quick-look" camera-controls 
         shadow-intensity="1" 
         auto-rotate min-camera-orbit="auto auto 919.1m"
         min-field-of-view="30deg"
      ></model-viewer>
          </section>
        <div>
          
        </div>
        <section className="content content--centered">
          <svg
            className="separator separator--solo separator--line"
            viewBox="0 0 900 300"
            width={900}
            height={600}
          >
            <defs>
              <clipPath id="shape6">
                <rect x={0} y={0} width={900} height={290} />
              </clipPath>
            </defs>
            <g clipPath="url(#shape6)">
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,3 C16.6666667,33.6666667 75,-15 128.8,10.3 C174.770703,31.918193 272,-26 320,17 C368,60 431.272051,-18.4516816 525,10.3 C599,33 775,60 900,17 L900,304 C500,304 285.733333,304 257.2,304 C214.3,304 171.7,304 128.8,304 C100.266667,304 57.3333333,304 0,304 L0,3 Z"
                d="M1,4 C17.6666667,34.6666667 52,50 104,50 C182,50 246.6,-27.4 386.8,11.3 C527,50 553,68 643.8,38.2 C704.333333,18.3333333 790.066667,11.6 901,18 L901,305 C501,305 286.733333,305 258.2,305 C215.3,305 172.7,305 129.8,305 C101.266667,305 58.3333333,305 1,305 L1,4 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,90 C31.7333333,70.9333333 128.8,-21 226,66 C295.950087,128.609646 399,135 480,66 C561,-3 702.670114,107.309964 746,83 C853.3,22.8 866,101.666667 900,135 L900,304 L878.5,304 C857,304 685.7,304 642.8,304 C600,304 428.7,304 385.8,304 C343,304 300,304 257.2,304 C214.3,304 171.7,304 128.8,304 C86,304 43,304 21.5,304 L0,304 L0,90 Z"
                d="M1,91 C32.7333333,71.9333333 75.6666667,82.8333333 129.8,123.7 C211,185 352,42 479,86 C606,130 694.4,114.4 772.2,100.2 C824.066667,90.7333333 867,102.666667 901,136 L901,305 L879.5,305 C858,305 686.7,305 643.8,305 C601,305 429.7,305 386.8,305 C344,305 301,305 258.2,305 C215.3,305 172.7,305 129.8,305 C87,305 44,305 22.5,305 L1,305 L1,91 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,149.2 C52.6666667,137.866667 45,100 128.8,173.5 C188.188882,225.589294 203,75.9791366 284,149.2 C365,222.420863 421,105 478,173.5 C535,242 554,253 596,186 C638,119 721.4,83 771.2,159.5 C821,236 865.6,189.666667 900,207 L900,311 L878.5,311 C857,311 814,311 771.2,311 C728.3,311 685.7,311 642.8,311 C600,311 557,311 514.2,311 C471.3,311 428.7,311 385.8,311 C343,311 300,311 257.2,311 C214.3,311 171.7,311 128.8,311 C86,311 43,311 21.5,311 L0,311 L0,149.2 Z"
                d="M1,139 C53.6666667,127.666667 96.6,139.5 129.8,174.5 C179.6,227 242.1,149.3 285,150.2 C327.9,151.1 322.6,219 386.8,181.5 C451,144 478,187 597,187 C716,187 695,139 772.2,160.5 C823.666667,174.833333 866.6,190.666667 901,208 L901,312 L879.5,312 C858,312 815,312 772.2,312 C729.3,312 686.7,312 643.8,312 C601,312 558,312 515.2,312 C472.3,312 429.7,312 386.8,312 C344,312 301,312 258.2,312 C215.3,312 172.7,312 129.8,312 C87,312 44,312 22.5,312 L1,312 L1,139 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,242 C57.3333333,235.333333 27.6,275 128.8,231.5 C230,188 197.2,242.2 291,270 C384.8,297.8 444,209.729976 543,248.729976 C642,287.729976 689.4,223 771.2,223 C853,223 842.666667,272.333333 900,263 L900,304 L0,304 L0,242 Z"
                d="M1,243 C58.3333333,236.333333 101.266667,232.833333 129.8,232.5 C172.7,232 164.4,204.4 258.2,232.2 C352,260 380,165 479,204 C578,243 729.3,230 772.2,224 C800.733333,220 843.666667,213.333333 901,204 L901,305 L1,305 L1,243 Z"
              />
            </g>
          </svg>

          <div className="content__title content__title--right">
            <span className="content__title-pre">
              <Fade top cascade>
                Muuen of
              </Fade>
            </span>
            <h2 className="content__title-main">
              <Fade bottom cascade>
                Excellence
              </Fade>
            </h2>
          </div>
          <svg
            className="separator separator--solo separator--line"
            viewBox="0 0 900 300"
            width={900}
            height={600}
          >
            <defs>
              <clipPath id="shape7">
                <rect x={0} y={0} width={900} height={290} />
              </clipPath>
            </defs>
            <g clipPath="url(#shape7)">
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,3 C16.6666667,33.6666667 75,-15 128.8,10.3 C174.770703,31.918193 272,-26 320,17 C368,60 431.272051,-18.4516816 525,10.3 C599,33 775,60 900,17 L900,304 C500,304 285.733333,304 257.2,304 C214.3,304 171.7,304 128.8,304 C100.266667,304 57.3333333,304 0,304 L0,3 Z"
                d="M1,4 C17.6666667,34.6666667 52,50 104,50 C182,50 246.6,-27.4 386.8,11.3 C527,50 553,68 643.8,38.2 C704.333333,18.3333333 790.066667,11.6 901,18 L901,305 C501,305 286.733333,305 258.2,305 C215.3,305 172.7,305 129.8,305 C101.266667,305 58.3333333,305 1,305 L1,4 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,90 C31.7333333,70.9333333 128.8,-21 226,66 C295.950087,128.609646 399,135 480,66 C561,-3 702.670114,107.309964 746,83 C853.3,22.8 866,101.666667 900,135 L900,304 L878.5,304 C857,304 685.7,304 642.8,304 C600,304 428.7,304 385.8,304 C343,304 300,304 257.2,304 C214.3,304 171.7,304 128.8,304 C86,304 43,304 21.5,304 L0,304 L0,90 Z"
                d="M1,91 C32.7333333,71.9333333 75.6666667,82.8333333 129.8,123.7 C211,185 352,42 479,86 C606,130 694.4,114.4 772.2,100.2 C824.066667,90.7333333 867,102.666667 901,136 L901,305 L879.5,305 C858,305 686.7,305 643.8,305 C601,305 429.7,305 386.8,305 C344,305 301,305 258.2,305 C215.3,305 172.7,305 129.8,305 C87,305 44,305 22.5,305 L1,305 L1,91 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,149.2 C52.6666667,137.866667 45,100 128.8,173.5 C188.188882,225.589294 203,75.9791366 284,149.2 C365,222.420863 421,105 478,173.5 C535,242 554,253 596,186 C638,119 721.4,83 771.2,159.5 C821,236 865.6,189.666667 900,207 L900,311 L878.5,311 C857,311 814,311 771.2,311 C728.3,311 685.7,311 642.8,311 C600,311 557,311 514.2,311 C471.3,311 428.7,311 385.8,311 C343,311 300,311 257.2,311 C214.3,311 171.7,311 128.8,311 C86,311 43,311 21.5,311 L0,311 L0,149.2 Z"
                d="M1,139 C53.6666667,127.666667 96.6,139.5 129.8,174.5 C179.6,227 242.1,149.3 285,150.2 C327.9,151.1 322.6,219 386.8,181.5 C451,144 478,187 597,187 C716,187 695,139 772.2,160.5 C823.666667,174.833333 866.6,190.666667 901,208 L901,312 L879.5,312 C858,312 815,312 772.2,312 C729.3,312 686.7,312 643.8,312 C601,312 558,312 515.2,312 C472.3,312 429.7,312 386.8,312 C344,312 301,312 258.2,312 C215.3,312 172.7,312 129.8,312 C87,312 44,312 22.5,312 L1,312 L1,139 Z"
              />
              <path
                className="path-anim"
                vectorEffect="non-scaling-stroke"
                data-path-to="M0,242 C57.3333333,235.333333 27.6,275 128.8,231.5 C230,188 197.2,242.2 291,270 C384.8,297.8 444,209.729976 543,248.729976 C642,287.729976 689.4,223 771.2,223 C853,223 842.666667,272.333333 900,263 L900,304 L0,304 L0,242 Z"
                d="M1,243 C58.3333333,236.333333 101.266667,232.833333 129.8,232.5 C172.7,232 164.4,204.4 258.2,232.2 C352,260 380,165 479,204 C578,243 729.3,230 772.2,224 C800.733333,220 843.666667,213.333333 901,204 L901,305 L1,305 L1,243 Z"
              />
            </g>
          </svg>
        </section>
        <section className="content">
          <div
            className="content__bg content__bg--bottom"
            style={{ backgroundImage: `url(${ze3})` }}
          >
            <svg
              className="separator separator--up"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 0 0 C 17 21.6 35.2 1.2 50 1.4 C 65.2 1.5 83 21.6 100 0 L 0 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 0 0 C 23 0 35 0 50 0 C 65 0 74 0 100 0 L 0 0 Z"
              />
            </svg>
            <svg
              className="separator separator--down"
              width="100%"
              height="100%"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="separator__path path-anim"
                data-path-to="M 24 0 C 33 0 37 10 49 10 C 61 10 65 0.1 74 0 C 83 0 90 10 100 0 L 100 10 L 0 10 L 0 0 C 9 7 15 0.1 24 0 Z"
                vectorEffect="non-scaling-stroke"
                d="M 24 0 C 33 0 30 0 49 0 C 64 0 65 0.1 74 0 C 83 0 82 0 100 0 L 100 10 L 0 10 L 0 0 C 11 0 15 0.1 24 0 Z"
              />
            </svg>
            <div className="content__title text-light content__title--right">
              <span className="content__title-pre">
                <Fade top cascade>
                  Effect of
                </Fade>
              </span>
              <h2 className="content__title-main">
                <Fade bottom cascade>
                  Awekening
                </Fade>
              </h2>
            </div>
          </div>
          <div className="content__stacked">
            {/* <div className="content__interlude">
              <p>
                柿くへば
                <br />
                鐘が鳴るなり
                <br />
                法隆寺
              </p>
            </div> */}
            <div className="content__interlude2">
              <p>
                <Fade bottom cascade>
                  Mu & En
                  <br />
                  <span className="content__spans">for new</span>
                  <br />
                  Season
                </Fade>
              </p>
              <div ref={ref2} className="content__img33" >
            <img  src={logos} alt="img" className="content__img3" /> 
            </div> 
            </div>
            
           
            <svg
              className="image-clip"
              width="1000px"
              height="715px"
              viewBox="0 0 1000 715"
            >
              <defs>
                <clipPath id="shape8">
                  <path
                    className="path-anim"
                    data-path-to="M 0 169 C 186.7 325 362.7 403 528 403 C 693.3 403 850.7 315 1000 169 L 1000 525 C 843.9 651.7 683.6 715 519 715 C 354.4 715 181.4 651.7 0 525 L 0 169 Z"
                    d="M 0 169 C 174 56.3 343.7 0 509 0 C 674.3 0 838 46.3 1000 169 L 1000 525 C 831.3 383 664.6 312 500 312 C 335.4 312 168.7 383 0 525 L 0 169 Z"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#shape8)"
                xlinkHref={pro3p}
                x={0}
                y={0}
                width={1000}
                height={715}
                alt="model hoodie"
              />
            </svg>
            <svg
              className="image-clip image-clip--offset"
              width="1000px"
              height="715px"
              viewBox="0 0 1000 715"
            >
              <defs>
                <clipPath id="shape9">
                  <path
                    className="path-anim"
                    data-path-to="M 0 169 C 186.7 325 362.7 403 528 403 C 693.3 403 850.7 315 1000 169 L 1000 525 C 843.9 651.7 683.6 715 519 715 C 354.4 715 181.4 651.7 0 525 L 0 169 Z"
                    d="M 0 169 C 174 56.3 343.7 0 509 0 C 674.3 0 838 46.3 1000 169 L 1000 525 C 831.3 383 664.6 312 500 312 C 335.4 312 168.7 383 0 525 L 0 169 Z"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#shape9)"
                xlinkHref={pro3p}
                x={0}
                y={0}
                width={1000}
                height={715}
              />
            </svg>
            {/*         <svg
              className="image-clip image-clip--offset"
              width="1000px"
              height="715px"
              viewBox="0 0 1000 715"
            >
              <defs>
                <clipPath id="shape10">
                  <path
                    className="path-anim"
                    data-path-to="M 0 169 C 186.7 325 362.7 403 528 403 C 693.3 403 850.7 315 1000 169 L 1000 525 C 843.9 651.7 683.6 715 519 715 C 354.4 715 181.4 651.7 0 525 L 0 169 Z"
                    d="M 0 169 C 174 56.3 343.7 0 509 0 C 674.3 0 838 46.3 1000 169 L 1000 525 C 831.3 383 664.6 312 500 312 C 335.4 312 168.7 383 0 525 L 0 169 Z"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#shape10)"
                xlinkHref="img/12.jpg"
                x={0}
                y={0}
                width={1000}
                height={715}
              />
            </svg> */}
          </div>
        </section>
        <Footer />
      </main>
    
    
    </>
  )
}

export default Home