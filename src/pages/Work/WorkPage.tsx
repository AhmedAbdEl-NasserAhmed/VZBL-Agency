import React, {
  useEffect,
  useRef,
  useState,
  RefObject,
  useContext,
} from "react";
import classes from "./WorkPage.module.scss";
import mainworkImg from "../../assets/work/main.jpg";
import Marquee from "core-ui/Marquee/Marquee";

import workImage1 from "../../assets/work/work1.jpg";
import workImage2 from "../../assets/work/work2.jpg";
import workImage3 from "../../assets/work/work3.jpg";
import workImage4 from "../../assets/work/work4.jpg";
import workImage5 from "../../assets/work/work5.jpg";
import workImage6 from "../../assets/work/work6.jpg";
import workImage7 from "../../assets/work/work7.jpg";
import workImage8 from "../../assets/work/work8.jpg";
import workImage9 from "../../assets/work/work9.jpg";
import workImage10 from "../../assets/work/work10.jpg";
import CursorContext from "store/CursorContext";
import { Pages } from "constants/Pages";
import { basicHoverStyle, initialCursorStyle } from "helpers/cursorStyles";
import Footer from "core-ui/Footer/Footer";
import { Link } from "react-router-dom";

const WorkPage: React.FC<{ cursorEl: RefObject<HTMLDivElement> }> = (props) => {
  const worksRef = useRef<HTMLDivElement>(null);
  const [workCursorText, setWorkCursosText] = useState("");
  const cursorCtx = useContext(CursorContext)!;

  const { cursorEl } = props;

  useEffect(() => {
    cursorCtx.changeActivePage(Pages.work);
  }, []);

  useEffect(() => {
    if (cursorEl.current) {
      //prettier-ignore
      const workList: HTMLHeadingElement[] = Array.from(worksRef.current!.querySelectorAll('.'+classes["about-activity__title"]));

      if (workCursorText) {
        //prettier-ignore
        const cursorWorksText = cursorEl.current.querySelector(".cursor__label .cursor__label-text")! as HTMLElement;
        cursorWorksText.innerHTML = "";
        cursorWorksText.insertAdjacentHTML("beforeend", workCursorText);
      }
      //prettier-ignore
      workList.forEach((wrapper, idx) => {
          wrapper.addEventListener("mouseenter", function (event) {
            cursorCtx.changeCursorStyle(basicHoverStyle);
            cursorCtx.showCircularText();
          });
          wrapper.addEventListener("mouseleave", function (event) {
            cursorCtx.changeCursorStyle(initialCursorStyle);
            cursorCtx.hideCircularText();
          });
        });
    }
  }, [workCursorText]);
  return (
    <div className={classes["work-page"]}>
      <section className={classes["work-page__intro"]}>
        <div className={classes["work-page__intro-txt"]}>
          <Marquee>
            <div>Made with effort</div>
            <div>Made with effort</div>
            <div>Made with effort</div>
            <div>Made with effort</div>
          </Marquee>
        </div>
        <div className={classes["work-page__intro-image"]}>
          <img
            src={mainworkImg}
            alt="main work section"
            className="img-fluid"
          />
        </div>
        <p className={classes["work-page__intro-parag"]}>
          Eyes fall in love wit h product s before minds. We create custom-made
          designs based on market study and consumer behavior. We create
          packaging that won't let a customer think twice before purchasing your
          product
        </p>
      </section>
      <section className={classes["works"]} ref={worksRef}>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--1"]}`}
        >
          <Link to="/work/1">
            <img src={workImage1} alt="Work 1" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--2"]}`}
        >
          <Link to="/work/1">
            <img src={workImage2} alt="Work 2" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--3"]}`}
        >
          <Link to="/work/1">
            <img src={workImage3} alt="Work 3" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--4"]}`}
        >
          <Link to="/work/1">
            <img src={workImage4} alt="Work 4" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--5"]}`}
        >
          <Link to="/work/1">
            <img src={workImage5} alt="Work 5" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--6"]}`}
        >
          <Link to="/work/1">
            <img src={workImage6} alt="Work 6" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--7"]}`}
        >
          <Link to="/work/1">
            <img src={workImage7} alt="Work 7" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--8"]}`}
        >
          <Link to="/work/1">
            <img src={workImage8} alt="Work 8" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--9"]}`}
        >
          <Link to="/work/1">
            <img src={workImage9} alt="Work 9" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
        <figure
          className={`${classes["works__work"]} ${classes["works__work--10"]}`}
        >
          <Link to="/work/1">
            <img src={workImage10} alt="Work 10" className="img-fluid" />
            <div className={classes["works__work-data"]}>
              <h2>Kwala Sleep</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                maxime velit, consectetur perferendis error earum delectus ad
                voluptate, aspernatur dolor quisquam, architecto dolores ipsum
                obcaecati sequi facilis. Quia, quidem pariatur.
              </p>
            </div>
          </Link>
        </figure>
      </section>
      <Footer />
    </div>
  );
};

export default WorkPage;
