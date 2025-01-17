import { addEventListener, removeEventListener, fireEvent } from "./event";
import {
  disableEdit,
  enableEdit,
  deleteAnnotationFromId,
  clearAll,
  selectAnnotationFromId,
} from "./edit";
import { disablePen, enablePen, setPen } from "./pen";
import { disablePoint, enablePoint } from "./point";
import { disableRect, enableRect, highlightText, editRect } from "./rect";
import {
  disableText,
  enableText,
  setText,
  openTextInput,
  editText,
} from "./text";
import { createPage, renderPage } from "./page";

export default {
  addEventListener,
  removeEventListener,
  fireEvent,
  disableEdit,
  enableEdit,
  disablePen,
  enablePen,
  deleteAnnotationFromId,
  clearAll,
  selectAnnotationFromId,
  setPen,
  disablePoint,
  enablePoint,
  disableRect,
  enableRect,
  highlightText,
  editRect,
  disableText,
  enableText,
  setText,
  openTextInput,
  editText,
  createPage,
  renderPage,
};
