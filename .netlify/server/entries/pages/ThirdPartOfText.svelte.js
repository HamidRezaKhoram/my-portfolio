var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => ThirdPartOfText
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0fac4578 = require("../../chunks/index-0fac4578.js");
const ThirdPartOfText = (0, import_index_0fac4578.c)(($$result, $$props, $$bindings, slots) => {
  return `<div><header><h3 class="${"c-article__heading"}">Open to New Experiences, <br> and always eager
        <div id="${"flip"}"></div>
        to try out diffrent approaches.
      </h3></header>
    <div class="${"c-article__content"}"></div></div>
  <div class="${"c-article__img-wrapper"}"><img class="${"c-article__img"}" src="${"https://assets.codepen.io/204808/17.Space-Rocket-with-requestAnimationFrame.png"}" alt="${"Responsive Mondrian art with CSS grid"}"></div>`;
});
