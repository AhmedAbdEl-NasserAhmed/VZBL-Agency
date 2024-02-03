import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Footer from "core-ui/Footer/Footer";
import activityImg1 from "../../assets/about/activities/activity-1.jpg";
import activityImg2 from "../../assets/about/activities/activity-2.jpg";
import activityImg3 from "../../assets/about/activities/activity-3.jpg";
import activityImg4 from "../../assets/about/activities/activity-4.jpg";

import { ReactComponent as NikeLogo } from "../../assets/about/clients/nike.svg";
import { ReactComponent as YogaLogo } from "../../assets/about/clients/yoga.svg";
import { ReactComponent as DevialetLogo } from "../../assets/about/clients/devialet.svg";
import { ReactComponent as BalenciagaLogo } from "../../assets/about/clients/balenciaga.svg";
import { ReactComponent as CallOfDutyLogo } from "../../assets/about/clients/duty.svg";

import SectionTitle from "core-ui/SectionTitle/SectionTitle";
import classes from "./About.module.scss";
import Client from "components/Client/Client";
import CursorContext from "store/CursorContext";
import { basicHoverStyle, initialCursorStyle } from "helpers/cursorStyles";

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const cursorCtx = useContext(CursorContext);

  const aboutImagesRef = useRef<HTMLSelectElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const activitiesIndicatorRef = useRef<HTMLSpanElement>(null);
  const aboutTeamIntroRef = useRef<HTMLDivElement>(null);

  let slowBy = 2;
  let startAboutImagesScroll = 400;
  let startActivitiesScroll = 300;

  useEffect(() => {
    const aboutImagesTop: number = aboutImagesRef.current!.offsetTop;

    //prettier-ignore
    const activitiesTitleList: HTMLHeadingElement[] = Array.from(activitiesRef.current!.querySelectorAll('.'+classes["about-activity__title"]));
    //prettier-ignore
    const titleWrapperList: HTMLDivElement[] = Array.from(activitiesRef.current!.querySelectorAll('.'+classes["about-activity__title-wrapper"]));

    //prettier-ignore
    const activitiesList: Element[] = Array.from(activitiesRef.current!.children).slice(1);

    if (aboutTeamIntroRef.current) {
      const aboutIntroChildren = Array.from(
        aboutTeamIntroRef.current.children
      ) as HTMLElement[];
      let longestTeamTextBoundaries: number = 0;
      aboutIntroChildren.forEach((txtEl) => {
        //prettier-ignore
        longestTeamTextBoundaries = txtEl.clientWidth > longestTeamTextBoundaries ? txtEl.clientWidth : longestTeamTextBoundaries;
      });
      //prettier-ignore
      document.documentElement.style.setProperty(`--about-team-max-boundaries`, longestTeamTextBoundaries + "px");
      aboutTeamIntroRef.current.addEventListener("mousemove", function (event) {
        const secondAboutTxtEl = this.children[1] as HTMLElement;
        secondAboutTxtEl.style.transform = `translate(-${event.pageX / 2}px)`;
      });
    }

    // MOUSE ENTER
    activitiesTitleList.forEach((title, idx) => {
      title.addEventListener("mouseenter", function (event) {
        //prettier-ignore
        const sibglingImageEl = title.parentElement!.nextSibling!.nextSibling! as HTMLDivElement;
        sibglingImageEl.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;
      });
    });

    titleWrapperList.forEach((wrapper, idx) => {
      wrapper.addEventListener("mouseenter", function (event) {
        cursorCtx.changeCursorStyle(basicHoverStyle);
      });
      wrapper.addEventListener("mousemove", function (event) {
        console.log("MOUSEMOVE: ", event);
        const titleChild = wrapper.firstElementChild as HTMLElement;
        //prettier-ignore
        titleChild.style.transform = `translate3d(${event.offsetX/4}px, ${event.offsetY/4}px, 0)`;
      });
    });

    // MOUSE LEAVE
    activitiesTitleList.forEach((title, idx) => {
      title.addEventListener("mouseleave", function (event) {
        //prettier-ignore
        const sibglingImageEl = title.parentElement!.nextSibling!.nextSibling! as HTMLDivElement;
        sibglingImageEl.style.clipPath = `polygon(0 0, 0 0, 0 100%, 0% 100%)`;
      });
    });
    titleWrapperList.forEach((wrapper, idx) => {
      wrapper.addEventListener("mouseleave", function (event) {
        const titleChild = wrapper.firstElementChild as HTMLElement;
        cursorCtx.changeCursorStyle(initialCursorStyle);

        //prettier-ignore
        titleChild.style.transform = `translate3d(0, 0, 0)`;
      });
    });

    // SCROLL
    window.addEventListener("scroll", function (event) {
      let scrollY = this.scrollY;

      /////////////////
      if (aboutImagesRef.current) {
        if (scrollY >= aboutImagesTop - startAboutImagesScroll) {
          //prettier-ignore
          const aboutImagesChildren = Array.from(aboutImagesRef.current.children) as HTMLElement[];
          aboutImagesChildren.forEach((image, idx, original) => {
            if (idx !== original.length - 1) {
              //prettier-ignore
              image.style.backgroundPositionY = `${(scrollY - aboutImagesTop + startAboutImagesScroll) / slowBy}%`;
            } else {
              //prettier-ignore
              image.style.backgroundPositionY = `${(scrollY - aboutImagesTop + startAboutImagesScroll) / (slowBy*2)}%`;
            }
          });
        }
      }
    });

    // GSAP
    /////////////////
    if (activitiesRef.current) {
      //prettier-ignore
      activitiesList.forEach((activity) => {
        gsap.to(activity.children[0], {
          x: 50,
          stagger: 2,
          scrollTrigger: {
            trigger: activity,
            toggleActions: "play none none reverse",
            start: "top 50%",
          },
        });
      });
    }

    if (activitiesIndicatorRef.current) {
      gsap.to(activitiesIndicatorRef.current, {
        height: "100%",
        duration: 4,
        scrollTrigger: {
          trigger: activitiesRef.current,
          start: "top 15%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className={classes["about-page"]}>
      <section className={classes["about-intro"]}>
        <h4 className={classes["about-intro__title"]}>About</h4>
        <div className={classes["about-intro-desc"]}>
          {/** HOLDER */}
          <div className={classes["about-intro-desc__holder"]}>
            <span className={`${classes["about-intro-desc__txt"]} text-upper`}>
              vlbz{" "}
            </span>
            <span className={classes["about-intro-desc__txt"]}>
              the hand has
            </span>
          </div>
          {/** HOLDER */}
          <div className={classes["about-intro-desc__holder"]}>
            <span className={classes["about-intro-desc__txt"]}>a large </span>
            <span className={classes["about-intro-desc__txt"]}>number of</span>
          </div>
          {/** HOLDER */}
          <div className={classes["about-intro-desc__holder"]}>
            <span className={classes["about-intro-desc__txt"]}>
              meanings in
            </span>
            <span className={classes["about-intro-desc__txt"]}>
              &nbsp;the identity.
            </span>
          </div>
        </div>
        <p className={classes["about-intro-info"]}>
          stands for "visible" can be defined as the frequency at which people
          see your brand in search result s, on social media, email marketing
          and other online marketing channels. brand visibility is about
          engaging in active online marketing to help draw at tent ion of your
          customers to your brand. creating a brand identity.
        </p>
      </section>
      <section className={classes["about-intro-images"]} ref={aboutImagesRef}>
        <div className={classes["about-intro-images--1"]}></div>
        <div className={classes["about-intro-images--2"]}></div>
        <div className={classes["about-intro-images--3"]}></div>
      </section>
      <div className="p-5">
        <SectionTitle title="Company" />
      </div>
      <section className={classes["about-activities"]} ref={activitiesRef}>
        <span
          className={classes["about-activities--indicator"]}
          ref={activitiesIndicatorRef}
        ></span>
        <div className={classes["about-activity"]}>
          <div className={classes["about-activity__title-wrapper"]}>
            <h3 className={classes["about-activity__title"]}>Branding</h3>
          </div>
          <p className={classes["about-activity__desc"]}>
            Creating a unique image for a product in the consumers' mind, mainly
            through corporate identity designs and advertising campaigns with a
            consistent theme. Branding aims to establish a significant and
            differentiate presence in the market that attracts and retains loyal
            customers.
          </p>
          <div className={classes["about-activity__image"]}>
            <img src={activityImg1} alt="activity" className="img-fluid" />
          </div>
        </div>
        <div className={classes["about-activity"]}>
          <div className={classes["about-activity__title-wrapper"]}>
            <h3 className={classes["about-activity__title"]}>Re-Branding</h3>
          </div>
          <p className={classes["about-activity__desc"]}>
            Enhancing image to get a unique one for your corporate or product in
            the consumers' mind, mainly through corporate identity designs and
            advertising campaigns with a consistent theme.
          </p>
          <div className={classes["about-activity__image"]}>
            <img src={activityImg2} alt="activity" className="img-fluid" />
          </div>
        </div>
        <div className={classes["about-activity"]}>
          <div className={classes["about-activity__title-wrapper"]}>
            <h3 className={classes["about-activity__title"]}>
              Business Concept
            </h3>
          </div>
          <p className={classes["about-activity__desc"]}>
            We are building brands from scratch, creating an idea for a business
            that includes basic information such as the service or product, the
            target demographic, and a unique selling proposition that gives a
            company an advantage over competitors, then we make the idea real.
          </p>
          <div className={classes["about-activity__image"]}>
            <img src={activityImg3} alt="activity" className="img-fluid" />
          </div>
        </div>
        <div className={classes["about-activity"]}>
          <div className={classes["about-activity__title-wrapper"]}>
            <h3 className={classes["about-activity__title"]}>Packaging</h3>
          </div>
          <p className={classes["about-activity__desc"]}>
            Eyes fall in love wit h product s before minds. We create
            custom-made designs based on market study and consumer behavior. We
            create packaging that won't let a customer think twice before
            purchasing your product
          </p>
          <div className={classes["about-activity__image"]}>
            <img src={activityImg4} alt="activity" className="img-fluid" />
          </div>
        </div>
      </section>
      <div className="p-10">
        <SectionTitle title="proudly worked with" />
      </div>
      <section className={classes["about-clients"]}>
        <div className={classes["about-clients--wrapper"]}>
          <Client>
            <NikeLogo />
          </Client>
          <Client>
            <YogaLogo />
          </Client>
          <Client>
            <DevialetLogo />
          </Client>
          <Client>
            <BalenciagaLogo />
          </Client>
          <Client>
            <CallOfDutyLogo />
          </Client>
          <Client>
            <NikeLogo />
          </Client>
          <Client>
            <BalenciagaLogo />
          </Client>
          <Client>
            <CallOfDutyLogo />
          </Client>
          <Client>
            <DevialetLogo />
          </Client>
          <Client>
            <NikeLogo />
          </Client>
          <Client>
            <YogaLogo />
          </Client>
          <Client>
            <CallOfDutyLogo />
          </Client>
        </div>
      </section>
      <section className={classes["about-team"]}>
        <div className={classes["about-team__intro"]} ref={aboutTeamIntroRef}>
          <div
            className={`${classes["about-team__intro-txt"]} ${classes["about-team__intro-txt--1"]}`}
          >
            Meet Our Team
          </div>
          <div
            className={`${classes["about-team__intro-txt"]} ${classes["about-team__intro-txt--2"]}`}
          >
            We are happy
          </div>
          <div
            className={`${classes["about-team__intro-txt"]} ${classes["about-team__intro-txt--3"]}`}
          >
            to work with you
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
