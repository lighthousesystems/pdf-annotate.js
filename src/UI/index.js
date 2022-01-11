import { addEventListener, removeEventListener, fireEvent } from "./event";
import { disableEdit, enableEdit } from "./edit";
import { disablePen, enablePen, setPen } from "./pen";
import { disablePoint, enablePoint } from "./point";
import { disableRect, enableRect, highlightText } from "./rect";
import { disableText, enableText, setText } from "./text";
import { createPage, renderPage } from "./page";

export default {
  addEventListener,
  removeEventListener,
  fireEvent,
  disableEdit,
  enableEdit,
  disablePen,
  enablePen,
  setPen,
  disablePoint,
  enablePoint,
  disableRect,
  enableRect,
  highlightText,
  disableText,
  enableText,
  setText,
  createPage,
  renderPage,
};
