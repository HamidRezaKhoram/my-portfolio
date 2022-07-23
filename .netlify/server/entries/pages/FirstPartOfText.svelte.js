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
  default: () => FirstPartOfText
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0fac4578 = require("../../chunks/index-0fac4578.js");
var logo = "/_app/immutable/assets/Swift-d0d1114e.webp";
var FirstPartOfText_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".ryersonuni.svelte-pv26bk{background:#002d72;color:white;border:3px solid #002d72;box-shadow:3px 3px orange;border-radius:5px;text-decoration:none}.cs.svelte-pv26bk{background:#a41f35;color:white;border:2px solid #a41f35;border-radius:5px}")();
const css = {
  code: ".ryersonuni.svelte-pv26bk{background:#002d72;color:white;border:3px solid #002d72;box-shadow:3px 3px orange;border-radius:5px;text-decoration:none}.cs.svelte-pv26bk{background:#a41f35;color:white;border:2px solid #a41f35;border-radius:5px}",
  map: null
};
const FirstPartOfText = (0, import_index_0fac4578.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><header><h3 class="${"c-article__heading"}" id="${"about"}">A learning developer, <br> in the middle of <br> getting a <a class="${"cs svelte-pv26bk"}">CS</a>
            degere at the university of <br>
            <a class="${"ryersonuni svelte-pv26bk"}" href="${"https://www.torontomu.ca/"}">Ryerson/TMU</a></h3></header></div>
      <div class="${"c-article__img-wrapper"}"><img class="${"c-article__img"}"${(0, import_index_0fac4578.a)("src", logo, 0)} alt="${""}">
      </div>`;
});
