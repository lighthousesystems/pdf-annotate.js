import PDFJSAnnotate from "../PDFJSAnnotate";
import appendChild from "../render/appendChild";
import { processTextContent } from "../render/renderText";
import { BORDER_COLOR, findSVGAtPoint, getMetadata, scaleDown } from "./utils";

let _enabled = false;
let textArea;
let _textSize;
let _textColor;

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMouseup(e) {
  if (textArea || !findSVGAtPoint(e.clientX, e.clientY)) {
    return;
  }

  textArea = document.createElement("textarea");
  textArea.setAttribute("id", "pdf-annotate-text-input");
  textArea.style.border = `3px solid ${BORDER_COLOR}`;
  textArea.style.borderRadius = "3px";
  textArea.style.position = "fixed";
  textArea.style.top = `${e.clientY}px`;
  textArea.style.left = `${e.clientX}px`;
  textArea.style.fontSize = `${_textSize}px`;
  textArea.style.background = "transparent";
  textArea.style.whiteSpace = "pre-line";

  textArea.addEventListener("blur", handleInputBlur);
  textArea.addEventListener("keyup", handleInputKeyup);

  document.getElementById("content-wrapper").appendChild(textArea);
  textArea.focus();
}

/**
 * Handle input.blur event
 */
function handleInputBlur() {
  saveText();
}

/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleInputKeyup(e) {
  if (e.keyCode === 27) {
    closeInput();
  }
}

/**
 * Save a text annotation from input
 */
function saveText() {
  let clientX = parseInt(textArea.style.left, 10);
  let clientY = parseInt(textArea.style.top, 10);
  let svg = findSVGAtPoint(clientX, clientY);
  if (!svg) {
    return;
  }

  let { documentId, pageNumber } = getMetadata(svg);
  let rect = svg.getBoundingClientRect();
  let annotation = Object.assign(
    {
      type: "textbox",
      size: _textSize,
      color: _textColor,
      content: textArea.value.trim(),
    },
    scaleDown(svg, {
      x: clientX - rect.left,
      y: clientY - rect.top,
      width: textArea.offsetWidth,
      height: textArea.offsetHeight,
    })
  );

  PDFJSAnnotate.getStoreAdapter()
    .addAnnotation(documentId, pageNumber, annotation)
    .then((annotation) => {
      appendChild(svg, annotation);
      // Create and dispatch an event that can be listened to outside of pdf-annotate.
      let event = new CustomEvent("text:saved", {
        detail: {
          uuid: annotation.uuid,
          content: annotation.content,
        },
      });
      document.dispatchEvent(event);
    });

  closeInput();
}

/**
 * Close the input
 */
function closeInput() {
  if (textArea) {
    textArea.removeEventListener("blur", handleInputBlur);
    textArea.removeEventListener("keyup", handleInputKeyup);
    document.getElementById("content-wrapper").removeChild(textArea);
    textArea = null;

    disableText();
  }
}

/**
 * Set the text attributes
 *
 * @param {Number} textSize The size of the text
 * @param {String} textColor The color of the text
 */
export function setText(textSize = 12, textColor = "000000") {
  _textSize = parseInt(textSize, 10);
  _textColor = textColor;
}

/**
 * Enable text behavior
 */
export function enableText() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener("mouseup", handleDocumentMouseup);
}

/**
 * Disable text behavior
 */
export function disableText() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener("mouseup", handleDocumentMouseup);
}

export async function openTextInput(e) {
  handleDocumentMouseup(e);
}

/**
 * Edit the text for a text annotation.
 * @param {Number} annotationId The annotation id.
 * @param {String} newText The new text to set
 */
export async function editText(annotationId, newText) {
  let svg = document.querySelector("svg.drawingLayer");

  let nodes = document.querySelector(
    `[data-pdf-annotate-id="${annotationId}"]`
  );

  let { documentId } = getMetadata(svg);

  let annotation = await PDFJSAnnotate.getStoreAdapter().getAnnotation(
    documentId,
    annotationId
  );

  annotation.content = newText;

  nodes.innerHTML = processTextContent(annotation);

  PDFJSAnnotate.getStoreAdapter().editAnnotation(
    documentId,
    annotationId,
    annotation
  );
}
