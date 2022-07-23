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
  default: () => SecondSectionOfText
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0fac4578 = require("../../chunks/index-0fac4578.js");
var SecondSectionOfText_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");\n.swift.svelte-14dh5k4{background:#9a9a9a;border:2px solid #9a9a9a;border-radius:5px;font-family:"Roboto", sans-serif;color:-webkit-linear-gradient(#eee, #ff6a32)}\n.js.svelte-14dh5k4{background:#f7e018;color:#2d2f27;border:1px solid #f7e018;border-radius:5px}\n.linux.svelte-14dh5k4{background:black;color:white;border:2px solid black;border-radius:5px}')();
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");.swift.svelte-14dh5k4{background:#9a9a9a;border:2px solid #9a9a9a;border-radius:5px;font-family:"Roboto", sans-serif;color:-webkit-linear-gradient(#eee, #ff6a32)}.js.svelte-14dh5k4{background:#f7e018;color:#2d2f27;border:1px solid #f7e018;border-radius:5px}.linux.svelte-14dh5k4{background:black;color:white;border:2px solid black;border-radius:5px}',
  map: null
};
const SecondSectionOfText = (0, import_index_0fac4578.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h3 class="${"c-article__heading"}">
      <a>Experienced working with  <a class="${"swift svelte-14dh5k4"}">Swift\u{1F426}</a>,
        <a class="${"js svelte-14dh5k4"}">Js</a>, <a class="${""}">HTML</a> /
        <a class="${""}">CSS</a>
        , <a class="${"linux svelte-14dh5k4"}">Linux\u{1F427}</a> &amp; Backend.</a>
    </h3>`;
});
