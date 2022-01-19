import setAttributes from "../utils/setAttributes";
import normalizeColor from "../utils/normalizeColor";

/**
 * Create SVGTextElement from an annotation definition.
 * This is used for anntations of type `textbox`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGTextElement} A text to be rendered
 */
export default function renderText(a) {
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  setAttributes(text, {
    x: a.x,
    y: a.y + parseInt(a.size, 10),
    fill: normalizeColor(a.color || "#000"),
    fontSize: a.size,
  });

  text.innerHTML = processTextContent(a);

  return text;
}

/**
 * Process the content of the annotation to convert to html.
 * @param {*} comment The comment annotation.
 * @returns The processes annotation.
 */
export function processTextContent(comment) {
  let lines = comment.content.split("\n");
  let tspans = [];

  // If we only have 1 line, we don't need to split anything up into smaller tspans.
  if (lines.length === 1) {
    return comment.content;
  }
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line == " " || line == "") {
      tspans.push(
        `<tspan x="${comment.x}" visibility="hidden" dy="1em">.</tspan>`
      );
    } else {
      tspans.push(`<tspan x="${comment.x}" dy="1em">${line}</tspan>`);
    }
  }

  return tspans.join("");
}
