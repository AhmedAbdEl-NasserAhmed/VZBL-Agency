import React, { useEffect, useRef } from "react";
import "./Marquee.scss";

const Marquee: React.FC = (props) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Array.isArray(props.children)) {
      if (marqueeRef.current) {
        //prettier-ignore
        const marqueeChildEl = marqueeRef.current.firstElementChild as HTMLElement;

        const marqueeChildElWidth = marqueeChildEl.clientWidth;

        //prettier-ignore
        const marqueeWidth = (window.innerWidth) + (props.children.length * marqueeChildElWidth) + "px";

        //prettier-ignore
        document.documentElement.style.setProperty('--marquee-width', marqueeWidth)

        // const marquee = document.querySelector(".marquee") as HTMLElement;
        marqueeRef.current.style.width = marqueeWidth;
      }
    }
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="marquee" ref={marqueeRef}>
        {props.children}
      </div>
    </div>
  );
};

export default Marquee;
