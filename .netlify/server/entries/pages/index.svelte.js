var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_0fac4578 = require("../../chunks/index-0fac4578.js");
var import_sweetalert2 = require("sweetalert2");
var import_HeadOfMainBody_svelte = __toESM(require("./HeadOfMainBody.svelte.js"));
var import_H1_svelte = __toESM(require("./H1.svelte.js"));
var import_FlashCards_svelte = __toESM(require("./FlashCards.svelte.js"));
var import_Footer_svelte = __toESM(require("./Footer.svelte.js"));
var import_FirstPartOfText_svelte = __toESM(require("./FirstPartOfText.svelte.js"));
var import_SecondSectionOfText_svelte = __toESM(require("./SecondSectionOfText.svelte.js"));
var import_CuteCat_svelte = __toESM(require("./CuteCat.svelte.js"));
var import_ThirdPartOfText_svelte = __toESM(require("./ThirdPartOfText.svelte.js"));
var icon = "/_app/immutable/assets/favicon-12462d80.png";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media screen and (max-width: 500px){.c-article__img-wrapper.svelte-b7bpqv{width:100%;height:max-content}}")();
const css = {
  code: "@media screen and (max-width: 500px){.c-article__img-wrapper.svelte-b7bpqv{width:100%;height:max-content}}",
  map: null
};
const Routes = (0, import_index_0fac4578.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"icon"}"${(0, import_index_0fac4578.a)("src", icon, 0)} data-svelte="svelte-prkgh6">`, ""}
<html lang="${"eng"}"><style lang="${"scss"}">:root {
  --black: #404040;
  --white: #fff;
  --gray: rgba(64, 64, 64, 0.15);
  --font-courgett: "Courgette", cursive;
  --font-open-sans: "Open Sans", sans-serif;
  --font-light: 300;
}

.c-main-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--white);
  color: var(--black);
  font-family: var(--font-open-sans);
}

.o-page {
  max-width: 100%;
  overflow-x: hidden;
  width: 100%;
}

.o-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
}

.o-main-section {
  margin: 0 auto;
  max-width: 37.5rem;
}

.c-logo {
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
  font-family: "Roboto Slab", serif;
  font-size: 1.625rem;
  margin: 0;
}

.c-logo__link {
  color: #576f72;
  text-decoration: none;
}

.c-main-menu {
  font-weight: 500;
}

.c-main-menu__list {
  display: flex;
}

.c-main-menu__link {
  color: #576f72;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.25rem;
  margin: 0 0rem;
  padding: 0rem;
  text-decoration: none;
  text-transform: uppercase;
}

.c-main-heading {
  max-width: 23.75rem;
  font-size: 1.875rem;
  font-weight: var(--font-light);
  letter-spacing: 0.1875rem;
  margin: 3.75rem 0;
  text-align: center;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange;
  /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: blink-caret 1.5s step-end infinite;
}

/* The typing effect */
/*media things*/
@media screen and (max-width: 400px) {
  .c-logo {
    margin-left: -0.7em;
    margin-top: -0.2em;
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 500px) {
  .c-main-heading {
    max-width: 15.625rem;
    font-size: 1.25rem;
  }
  .c-main-menu__link {
    font-size: 0.8125rem;
    margin: 0 0.3125rem;
    padding: 0.0625rem;
    margin-right: 0.1em;
  }
  .c-logo {
    margin-left: -0.7em;
    margin-top: -0.2em;
    font-size: 1.5625rem;
  }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
.c-article__link {
  align-items: center;
  color: var(--black);
  display: flex;
  justify-content: space-between;
  margin: 1.875rem 0;
  padding: 1.25rem;
  text-decoration: none;
}

.c-article__heading {
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap");
  font-family: "Roboto", sans-serif;
  font-size: 0.9375rem;
  margin: 0.3125rem 0;
  display: inline-block;
  line-height: 18pt;
  background: #576f72;
  color: white;
  border: 10px solid #576f72;
  box-shadow: 5px 5px #e4dccf;
  border-radius: 5px;
  text-decoration: none;
  width: 60%;
}

.c-article__content {
  line-height: 1.2;
  margin: 0.0625rem 0;
}

.c-article__img-wrapper {
  height: auto;
  width: 40%;
  padding: 10px;
  margin-left: 0.625rem;
  background: #e4dccf;
  color: white;
  border: 10px solid #e4dccf;
  box-shadow: 5px 5px #576f72;
  border-radius: 5px;
  text-decoration: none;
}

.c-article__img {
  border-radius: 0.625rem;
  display: block;
  height: 100%;
  filter: grayscale(0);
  object-fit: cover;
  transition: filter 0.3s ease-in;
  width: 100%;
}
.c-article__link:hover .c-article__img {
  filter: grayscale(0);
}

.c-author {
  color: black;
  margin: 10px 0;
  text-align: center;
}

.c-author__link {
  color: black;
  display: inline-block;
  position: relative;
  text-decoration: none;
}
.c-author__link::before, .c-author__link::after {
  bottom: 0;
  content: "";
  height: 8px;
  left: 0;
  position: absolute;
  z-index: -1;
}
.c-author__link::before {
  background-color: rgba(64, 64, 64, 0.5);
  width: 100%;
}
.c-author__link::after {
  background-color: rgb(244, 177, 62);
  transition: width 0.3s ease-in-out;
  width: 0;
  will-change: width;
}
.c-author__link:hover::after {
  width: 100%;
}</style>

  <main id="${"page"}" class="${"o-page"}"><header class="${"o-header"}">
      ${(0, import_index_0fac4578.v)(import_H1_svelte.default, "H1").$$render($$result, {}, {}, {})}
      <nav class="${"c-main-menu"}" aria-labelledby="${"mainmenulabel"}"><ul class="${"c-main-menu__list"}"><li><div class="${"c-main-menu__link selected"}">
              ${(0, import_index_0fac4578.v)(import_FlashCards_svelte.default, "FlashCards").$$render($$result, {}, {}, {})}</div></li></ul></nav></header>

    <section class="${"o-main-section"}">
      ${(0, import_index_0fac4578.v)(import_HeadOfMainBody_svelte.default, "HeadOfMainBody").$$render($$result, {}, {}, {})}

      <article class="${"c-article"}"><div class="${"c-article__link"}">${(0, import_index_0fac4578.v)(import_FirstPartOfText_svelte.default, "FirstPartOfText").$$render($$result, {}, {}, {})}</div></article>

      <article class="${"c-article"}"><div class="${"c-article__link"}">${(0, import_index_0fac4578.v)(import_SecondSectionOfText_svelte.default, "SecondSectionOfText").$$render($$result, {}, {}, {})}
           
           
          
          <div class="${"c-article__img-wrapper svelte-b7bpqv"}">${(0, import_index_0fac4578.v)(import_CuteCat_svelte.default, "CuteCat").$$render($$result, {}, {}, {})}</div></div></article>

      <article class="${"c-article"}"><div class="${"c-article__link"}">${(0, import_index_0fac4578.v)(import_ThirdPartOfText_svelte.default, "ThirdPartOfText").$$render($$result, {}, {}, {})}</div></article></section></main>

  ${(0, import_index_0fac4578.v)(import_Footer_svelte.default, "Footer").$$render($$result, {}, {}, {})}
</html>`;
});
