import React, { useEffect, useState } from "react";
import { CursorLabelEN } from "constants/cursorLabelContent";
import { Cursor } from "interfaces/Cusror";
import CursorContext from "./CursorContext";

const CursorProvider: React.FC = (props) => {
  const [cursorCircleWidth, setCursorCircleWidth] = useState<number>();
  const [cursorCircleHeight, setCursorCircleHeight] = useState<number>();
  const [activePage, setActivePage] = useState<string>("");
  const [cursorStyle, setCursorStyle] = useState({});
  const [circleLabel, setCircleLabel] = useState<string>("");
  const [cursorRef, setCursorRef] = useState<HTMLElement>();
  const [isCircularTextActive, setIsCircularTextActive] =
    useState<boolean>(false);

  useEffect(() => {
    changeCircleLabel();
  }, [activePage]);

  useEffect(() => {
    const cursorText = document.querySelector(".cursor__label-text")!;
    cursorText.innerHTML = "";
    cursorText.insertAdjacentHTML("afterbegin", circleLabel);
    if (cursorRef) {
      //prettier-ignore
      const cursorCircle: HTMLElement = cursorRef.querySelector(".cursor__circle")!;
      const cursorCircleWidthNumber: number = cursorCircle.offsetWidth;
      const cursorCircleHeightNumber: number = cursorCircle.offsetHeight;

      setCursorCircleWidth(cursorCircleWidthNumber);
      setCursorCircleHeight(cursorCircleHeightNumber);
    }
  }, [cursorCircleWidth, cursorCircleHeight, cursorRef, circleLabel]);

  const getCursorRef = (cursorRef: HTMLElement) => {
    setCursorRef(cursorRef);
  };

  const changeCircleLabel = () => {
    if (CursorLabelEN[activePage as keyof typeof CursorLabelEN]) {
      setCircleLabel(
        CursorLabelEN[activePage as keyof typeof CursorLabelEN]
          .split("")
          .map(
            (char: string, idx: number) =>
              `<span style='transform: rotate(${idx * 15}deg)'>${char}</span>`
          )
          .join("")
      );
    } else {
      setCircleLabel("");
    }
  };

  const showCircularText = () => {
    setIsCircularTextActive(true);
  };

  const hideCircularText = () => {
    setIsCircularTextActive(false);
  };

  const changeActivePage = (page: string) => {
    setActivePage(page);
  };

  const changeCursorStyle = (style: Object) => {
    setCursorStyle(style);
  };

  const cursorInitialValue: Cursor = {
    activePage: activePage,
    labelData: {
      [activePage]: {
        mainLabelContent:
          CursorLabelEN[activePage as keyof typeof CursorLabelEN],
        circleLabelContent: circleLabel,
      },
    },
    style: {
      activeStyle: cursorStyle,
    },
    getCursorRef,
    changeActivePage,
    changeCursorStyle,
    isCircularTextActive: isCircularTextActive,
    showCircularText,
    hideCircularText,
  };

  return (
    <CursorContext.Provider value={cursorInitialValue}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
