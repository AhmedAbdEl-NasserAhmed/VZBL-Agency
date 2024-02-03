interface InitialCursorStyle {
  backgroundColor: string;
  border: string;
  opacity: number;
  width: string;
  height: string;
}

export interface CursorStyle {
  activeStyle: Object;
}

export interface Cursor {
  activePage: string;
  labelData: {
    [key: string]: any;
  };
  style: CursorStyle;
  getCursorRef: (cursorRef: HTMLElement) => void;
  changeActivePage: (page: string) => void;
  changeCursorStyle: (style: any) => void;
  isCircularTextActive: boolean;
  showCircularText: () => void;
  hideCircularText: () => void;
}
