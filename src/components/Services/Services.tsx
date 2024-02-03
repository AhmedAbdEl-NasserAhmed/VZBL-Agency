import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Video from "core-ui/Video/Video";

import serviceVideoRight5 from "../../assets/services/service-right-1.mp4";
import serviceVideoRight3 from "../../assets/services/service-right-3.mp4";
import serviceImageLeft2 from "../../assets/services/service-left-2.jpg";

import "./Services.scss";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = (props) => {
  const servicesLeftRef = useRef<HTMLDivElement>(null);
  const servicesRightRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesLeftFounderImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const servicesScrollHandler = () => {
      const windowY = window.scrollY;
      const servicesEl = servicesRef.current!;
      const servicesParent = servicesEl.parentElement!;
      const servicesParentElTop = servicesParent.offsetTop!;
      //prettier-ignore
      const nextParentSiblingEl = servicesParent.nextElementSibling as HTMLDivElement;

      if (windowY < servicesParentElTop) {
        servicesEl.classList.remove("fixed-section");
        servicesEl.classList.remove("reset-section");
      }

      if (
        windowY > servicesParentElTop &&
        windowY < nextParentSiblingEl.offsetTop
      ) {
        servicesEl.classList.add("fixed-section");
        servicesEl.classList.remove("reset-section");

        // MANUALLY PX -> LEFT
        //prettier-ignore
        const maxYScrollingLeft = servicesEl.offsetHeight * 3;
        //prettier-ignore
        const holdFounderLeftImageRange = Math.min(maxYScrollingLeft, windowY - servicesParentElTop);

        servicesLeftRef.current!.style.transform = `translateY(-${holdFounderLeftImageRange}px)`;

        // MANUALLY PX -> Right
      }

      //prettier-ignore
      if (windowY >= nextParentSiblingEl.offsetTop - (servicesEl.offsetHeight)) {
          servicesEl.classList.remove("fixed-section");
          servicesEl.classList.add("reset-section");
        }
    };
    if (servicesRef.current) {
      window.addEventListener("scroll", servicesScrollHandler);
    }

    if (servicesLeftRef.current && servicesRightRef.current) {
      // gsap.to(servicesLeftRef.current, {
      //   y: -(
      //     servicesLeftRef.current.scrollHeight -
      //     servicesLeftRef.current.clientHeight
      //   ),
      //   scrollTrigger: {
      //     trigger: ".home-page__services",
      //     start: "top 0",
      //     end: "bottom 100%",
      //     scrub: true,
      //   },
      // });

      gsap.to(servicesRightRef.current, {
        y: 0,
        scrollTrigger: {
          trigger: ".home-page__services",
          start: "top 0",
          end: "bottom 100%",
          scrub: true,
        },
      });
    }

    return () => window.removeEventListener("scroll", servicesScrollHandler);
  }, []);

  return (
    <div className="services" ref={servicesRef}>
      <div className="services__left" ref={servicesLeftRef}>
        <div className="services__left--1 services--info">
          <h2 className="services__title">Our Mission</h2>
          <p className="services__description">
            We plan and tailor our customized services on the basis of your
            specific requirements and deliver the services using our experienced
            &amp; professional teams.
          </p>
        </div>
        <div className="services__left--2">
          <img src={serviceImageLeft2} alt="service 2" className="img-fluid" />
        </div>
        <div className="services__left--3 services--info">
          <h2 className="services__title">Our Concept</h2>
          <p className="services__description">
            Enhancing image to get a unique one for your corporate or product in
            the consumers' mind, mainly through corporate identity designs and
            advertising campaigns with a consistent t heme.
          </p>
        </div>
        <div
          className="services__left--4"
          ref={servicesLeftFounderImgRef}
        ></div>
        <div className="services__left--5"></div>
      </div>
      <div className="services__right" ref={servicesRightRef}>
        <div className="services__right--1"></div>
        <div className="services__right--2 services--info">
          <h2 className="services__title">Meet the founder</h2>
          <p className="services__description">
            Ahmed is naturally curious – a trait that’s proven to be a real
            strength wit h clients. His curious nature compels him to thoroughly
            understand a brand, diving deep to uncover unique insights that
            build authentic connect ions.
          </p>
        </div>
        <div className="services__right--3">
          <Video videoSrc={serviceVideoRight3} />
        </div>
        <div className="services__right--4 services--info">
          <h2 className="services__title">Our Vision</h2>
          <p className="services__description">
            We plan and tailor our customized services on the basis of your
            specific requirements and deliver the services using our experienced
            &amp; professional teams.
          </p>
        </div>
        <div className="services__right--5">
          <Video videoSrc={serviceVideoRight5} />
        </div>
      </div>
    </div>
  );
};

export default Services;
