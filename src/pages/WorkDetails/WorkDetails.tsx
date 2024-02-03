import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./WorkDetails.module.scss";

import workDetailsImg2 from "../../assets/work-details/work2.jpg";
import workDetailsImg3 from "../../assets/work-details/work3.jpg";
import workDetailsImg4 from "../../assets/work-details/work4.jpg";
import workDetailsImg5 from "../../assets/work-details/work5.jpg";
import workDetailsImg6 from "../../assets/work-details/work6.jpg";
import workDetailsImg7 from "../../assets/work-details/work7.jpg";
import workDetailsImg8 from "../../assets/work-details/work8.jpg";

import workVideo1 from "../../assets/work-details/work-video.mp4";
import workVideo2 from "../../assets/work-details/work-video-2.mp4";
import workVideo3 from "../../assets/work-details/work-video-3.mp4";

import Video from "core-ui/Video/Video";
import Footer from "core-ui/Footer/Footer";
import ContactSection from "components/ContactSection/ContactSection";
import CursorContext from "store/CursorContext";
import { initialCursorStyle } from "helpers/cursorStyles";
import SectionIntro from "core-ui/SectionIntro/SectionIntro";

const WorkDetails: React.FC = () => {
  const params = useParams();
  const cursorCtx = useContext(CursorContext);

  useEffect(() => {
    cursorCtx.hideCircularText();
    cursorCtx.changeCursorStyle(initialCursorStyle);
  }, []);

  return (
    <div className={classes.work}>
      <SectionIntro sectionTitle="WAKA SUSHI/ W">
        <Video videoSrc={workVideo3} />
      </SectionIntro>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Overview</h4>
            <h4 className={classes["work__info-work-name"]}>WAKA SUSHI/ W</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__image"]}`}>
          <img src={workDetailsImg7} alt="work img" className="img-fluid" />
        </div>
      </section>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Brand Identity</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__image"]}`}>
          <img src={workDetailsImg8} alt="work img" className="img-fluid" />
        </div>
      </section>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Business Concept</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__image"]}`}>
          <Video videoSrc={workVideo1} />
        </div>
      </section>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Packaging</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__images"]}`}>
          <div>
            <img
              src={workDetailsImg3}
              alt="work img"
              className="img-fluid translateY-sm"
            />
          </div>
          <div>
            <img src={workDetailsImg4} alt="work img" className="img-fluid" />
          </div>
        </div>
      </section>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Concept</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__image"]} m-block-xl`}>
          <Video videoSrc={workVideo2} />
        </div>
        <div className={`${classes["work__images"]} m-block-xl`}>
          <div>
            <img src={workDetailsImg5} alt="work img" className="img-fluid" />
          </div>
          <div>
            <img
              src={workDetailsImg6}
              alt="work img"
              className="img-fluid translateY-sm"
            />
          </div>
        </div>
        <div className={`${classes["work__image"]} m-block-xl`}>
          <img src={workDetailsImg7} alt="work img" className="img-fluid" />
        </div>
      </section>
      <section className={classes["work__info"]}>
        <div className={classes["work__info-intro"]}>
          <div className={classes["work__info-wrapper"]}>
            <h4 className={classes["work__info-title"]}>Production</h4>
            <p className={classes["work__info-desc"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
              laborum nostrum dolorum. Temporibus cum animi dolorem voluptate
              dicta totam dolorum hic similique a expedita beatae eaque, nam aut
              veritatis?, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Cum repellat deserunt ipsa. Ipsum earum ullam, sint
              voluptatem libero vero doloremque suscipit eligendi provident.
              Necessitatibus magni enim quo unde quibusdam repellendus!
            </p>
          </div>
        </div>
        <div className={`${classes["work__images"]}`}>
          <div>
            <img src={workDetailsImg5} alt="work img" className="img-fluid" />
          </div>
          <div>
            <img src={workDetailsImg6} alt="work img" className="img-fluid" />
          </div>
          <div>
            <img src={workDetailsImg7} alt="work img" className="img-fluid" />
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default WorkDetails;
