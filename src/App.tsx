import React, { useContext, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "pages/About/About";
import Navigation from "./core-ui/Navigation/Navigation";
import HomePage from "./pages/Home/Home";
import WorkPage from "pages/Work/WorkPage";
import CursorContext from "store/CursorContext";
import WorkDetails from "pages/WorkDetails/WorkDetails";
import CareerPage from "pages/Career/Career";
import CareerDetails from "pages/CareerDetails/CareerDetails";

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorCtx = useContext(CursorContext);

  useEffect(() => {
    const mainElement = document.documentElement;
    const navigationEl = document.querySelector(".navigation")! as HTMLElement;
    //prettier-ignore
    mainElement.style.setProperty('--navigation-height', navigationEl.clientHeight+'px');

    const moveCursor = function (event: MouseEvent) {
      if (cursorRef.current) {
        cursorCtx.getCursorRef(cursorRef.current);
        //prettier-ignore
        cursorRef.current.style.transform = `translate3d(${(event.clientX)}px, ${event.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="App">
      <div className="cursor" ref={cursorRef}>
        <div
          className="cursor__circle"
          style={cursorCtx.style.activeStyle}
        ></div>
        <div className="cursor__dot"></div>
        <div
          className="cursor__label"
          style={{ opacity: cursorCtx.isCircularTextActive ? 1 : 0 }}
        >
          <p className="cursor__label-text"></p>
        </div>
      </div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage cursorEl={cursorRef} />} />
        <Route path="/work/:workid" element={<WorkDetails />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career/:careerid" element={<CareerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
