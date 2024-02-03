import React, { useEffect, useRef } from "react";
import SectionIntro from "core-ui/SectionIntro/SectionIntro";
import classes from "./Career.module.scss";
import careerImg1 from "../../assets/career/career1.jpg";
import Marquee from "core-ui/Marquee/Marquee";
import SectionTitle from "core-ui/SectionTitle/SectionTitle";
import Job from "components/Job/Job";
import ContactSection from "components/ContactSection/ContactSection";
import Footer from "core-ui/Footer/Footer";

const CareerPage: React.FC = () => {
  const careerIntroImgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrollY = this.scrollY;
      if (careerIntroImgRef.current) {
        const careetIntroImgParentTop =
          careerIntroImgRef.current.parentElement!.offsetTop!;
        //prettier-ignore
        careerIntroImgRef.current.style.backgroundPositionX = `${((scrollY-careetIntroImgParentTop))/2}px`;
      }
    });
  }, []);

  return (
    <div className={classes.career}>
      <Marquee>
        <div>Build your career</div>
        <div>Build your career</div>
        <div>Build your career</div>
        <div>Build your career</div>
      </Marquee>
      <SectionIntro
        sectionTitle=""
        paragraph="Eyes fall in love wit h product s before minds. We create custom-made
        designs based on market study and consumer behavior. We create packaging
        that won't let a customer think twice before purchasing your product"
      >
        <img src={careerImg1} alt="work img" className="img-fluid" />
      </SectionIntro>
      <section className={classes["career__intro-images"]}>
        <div
          className={classes["career__intro-img"]}
          ref={careerIntroImgRef}
        ></div>
      </section>
      <div className="pt-5">
        <SectionTitle title="Career" />
      </div>
      <section className={classes["jobs"]}>
        <Job
          title="Graphic designer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took"
          type="Fulltime"
          location="Cairo Egypt"
        />
        <Job
          title="Senior Illustrator"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took"
          type="Fulltime"
          location="Cairo Egypt"
        />
        <Job
          title="Motion designer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took"
          type="Parttime"
          location="Cairo Egypt"
        />
        <Job
          title="Junior designer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took"
          type="Fulltime"
          location="Cairo Egypt"
        />
        <Job
          title="Logo designer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took"
          type="Fulltime"
          location="Cairo Egypt"
        />
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CareerPage;
