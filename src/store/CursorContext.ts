import React from "react";

import { Cursor } from "interfaces/Cusror";

import { initialCursorStyle } from "helpers/cursorStyles";

const CursorContext = React.createContext<Cursor>({
  activePage: "",
  labelData: {},
  style: {
    activeStyle: initialCursorStyle,
  },
  getCursorRef: (cursorRef) => {},
  changeActivePage: (page) => {},
  changeCursorStyle: (style) => {},
  isCircularTextActive: false,
  showCircularText: () => {},
  hideCircularText: () => {},
});

export default CursorContext;
