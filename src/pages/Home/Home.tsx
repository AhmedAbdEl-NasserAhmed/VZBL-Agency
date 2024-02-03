import React, { useContext, useEffect, useRef } from "react";
import Services from "components/Services/Services";
import Work from "components/Work/Work";
import BtnSecondary from "core-ui/Buttons/BtnSecondary/BtnSecondary";
import Footer from "core-ui/Footer/Footer";
import SectionTitle from "core-ui/SectionTitle/SectionTitle";
import Video from "core-ui/Video/Video";
import heroImg from "../../assets/hero.jpg";
import heroVid from "../../assets/hero.mp4";
import work1Img from "../../assets/work/work1.jpg";
import work2Img from "../../assets/work/work2.jpg";
import work3Img from "../../assets/work/work3.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CursorContext from "store/CursorContext";
import { Pages } from "constants/Pages";

import "./Home.scss";
import ContactSection from "components/ContactSection/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const cursorCtx = useContext(CursorContext);
  const imgIntroRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    cursorCtx.changeActivePage(Pages.home);
    window.addEventListener("scroll", (event) => {
      const windowY = window.scrollY;

      if (imgIntroRef.current) {
        imgIntroRef.current.style.transform = `translateY(-${windowY / 2}px)`;
      }
    });

    gsap.to(".intro__img", {
      scrollTrigger: {
        start: "top",
        end: "80% 5%",
        trigger: ".intro__img",
        pin: true,
      },
    });

    gsap.to(".intro__text--tertiary", {
      x: 50,
      scrollTrigger: {
        start: "center 50%",
        trigger: ".intro__text",
        scrub: true,
      },
    });

    //prettier-ignore
    const introTxtWrapperList: HTMLElement[] = Array.from(document.querySelectorAll(".intro__text-wrapper"));
    introTxtWrapperList.forEach((parentWrapper) => {
      gsap.to(parentWrapper.children[0], {
        width: "100%",
        scrollTrigger: {
          start: "0 30%",
          end: "center 20%",
          trigger: ".intro__text",
          scrub: true,
        },
      });
    });
    ////////////////////////
  }, []);

  return (
    <div className="home-page">
      <section className="intro">
        <div className="container">
          <div className="intro__img">
            <img
              src={heroImg}
              alt="hero"
              className="img-fluid"
              ref={imgIntroRef}
            />
          </div>
          <div className="intro__text">
            <div>
              <p className="intro__text-wrapper">
                Transforming
                <span className="intro__text--shadow-layer">Transforming</span>
              </p>
            </div>
            <div>
              <p className="intro__text-wrapper">
                The
                <span className="intro__text--shadow-layer">The</span>
              </p>
            </div>
            <div>
              <p className="intro__text-wrapper">
                Ordinary
                <span className="intro__text--shadow-layer">Ordinary</span>
              </p>
            </div>
            <div>
              <p className="intro__text-wrapper">
                Into
                <span className="intro__text--shadow-layer">Into</span>
              </p>
            </div>
            <p className="font-tertiary intro__text--tertiary">Extraordinary</p>
          </div>
        </div>
      </section>
      <section className="home-page__video">
        <Video videoSrc={heroVid} />
      </section>
      <section className="home-page__about">
        <div className="container">
          <p className="home-page__about-text">
            Stands for "visible" can be defined as the frequency at which people
            see your brand in search result s, on social media, email marketing
            and other online marketing channels. Brand visibility is about
            engaging in active online marketing to help draw at tent ion of your
            customers to your brand. Creating a brand identity.
          </p>
          <BtnSecondary to="/about">About us</BtnSecondary>
        </div>
      </section>
      <section className="home-page__latest-work">
        <div className="container">
          <SectionTitle title="latest work" />
          <div className="home-page__latest-work--wrapper">
            <Work
              title="Zgold"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quia
                    eaque consectetur? Quasi aspernatur, dolores provident ab, voluptas
                    dignissimos delectus hic voluptatum quo saepe ex eum, minus assumenda
                    sit repellat?"
              image={work1Img}
            />
            <Work
              title="Kaya Sushi"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quia
                    eaque consectetur? Quasi aspernatur, dolores provident ab, voluptas
                    dignissimos delectus hic voluptatum quo saepe ex eum, minus assumenda
                    sit repellat?"
              image={work2Img}
            />
            <Work
              title="Jazio"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quia
                    eaque consectetur? Quasi aspernatur, dolores provident ab, voluptas
                    dignissimos delectus hic voluptatum quo saepe ex eum, minus assumenda
                    sit repellat?"
              image={work3Img}
            />
          </div>
          <BtnSecondary to="/work">View All Work</BtnSecondary>
        </div>
      </section>
      <section className="home-page__services">
        <Services />
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
