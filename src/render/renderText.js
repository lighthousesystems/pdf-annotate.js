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

function processTextContent(comment) {
  let lines = comment.content.split("\n");
  let tspans = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line == " " || line == "") {
      tspans.push(`<tspan visibility="hidden" dy="1em">.</tspan>`);
    } else {
      tspans.push(`<tspan x="inherit" dy="1em">${line}</tspan>`);
    }
  }

  return tspans.join("");
}
