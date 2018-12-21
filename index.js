import initialProperties from "json!./src/initialProperties.json";
import definition from "./src/definition.js";
import controller from "./src/controller.js";
import paint from "./src/paint.js";
import resin from "./src/resize.js";
import template from "./src/template.html";
import support from "json!./src/support.json";
import tocatCSS from "!css?minimize!sass!wrap?ext!./src/style.scss";

export default window.define([], function () {
  const css = localCSS.toString();

  const head = document.querySelector('head');
  const style = document.createElement("style");
  style.innerHTML = css;
  head.appendChild(style);

  return {
    initialProperties: initialProperties,
  }
});
