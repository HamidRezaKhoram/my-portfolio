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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2835083a = require("../../chunks/index-2835083a.js");
var import_sweetalert2 = require("sweetalert2");
var logo = "/_app/immutable/assets/Swift-d0d1114e.webp";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `.pad.svelte-1cl6qwj{padding-top:20px}.fakeButtons.svelte-1cl6qwj{height:10px;width:10px;border-radius:50%;border:1px solid #000;position:relative;top:6px;left:6px;background-color:#ff3b47;border-color:#9d252b;display:inline-block}.fakeMinimize.svelte-1cl6qwj{left:11px;background-color:#ffc100;border-color:#9d802c}.fakeZoom.svelte-1cl6qwj{left:16px;background-color:#00d742;border-color:#049931}.fakeMenu.svelte-1cl6qwj{width:auto;box-sizing:border-box;height:25px;background-color:#E4DCCF;margin:0 auto;border-top-right-radius:5px;border-top-left-radius:5px}.fakeScreen.svelte-1cl6qwj{background-color:#576F72;box-sizing:border-box;width:auto;margin:0 auto;padding:20px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}p.svelte-1cl6qwj{position:relative;left:30%;margin-left:-9em;text-align:left;font-size:1.25em;font-family:monospace;white-space:nowrap;overflow:hidden;width:0}span.svelte-1cl6qwj{color:#fff;font-weight:bold}.line1.svelte-1cl6qwj{color:#9CD9F0;-webkit-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards}.cursor1.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;animation:svelte-1cl6qwj-blink 1s 2s 2 forwards}.line2.svelte-1cl6qwj{color:#CDEE69;-webkit-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards}.cursor2.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards}.line3.svelte-1cl6qwj{color:#E09690;-webkit-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards}.cursor3.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards}.line4.svelte-1cl6qwj{color:#fff;-webkit-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards}.cursor4.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 11.5s infinite;-moz-animation:svelte-1cl6qwj-blink 1s 8.5s infinite;-o-animation:svelte-1cl6qwj-blink 1s 8.5s infinite;animation:svelte-1cl6qwj-blink 1s 8.5s infinite}@-webkit-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-moz-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-o-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-webkit-keyframes svelte-1cl6qwj-type{to{width:17em}}@-moz-keyframes svelte-1cl6qwj-type{to{width:17em}}@-o-keyframes svelte-1cl6qwj-type{to{width:17em}}@keyframes svelte-1cl6qwj-type{to{width:17em}}body{background-color:#F0EBE3;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='232' height='232' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23576F72' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%237D9D9C'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")}@keyframes svelte-1cl6qwj-typing{from{width:0 }to{width:100% }}@keyframes svelte-1cl6qwj-blink-caret{from,to{border-color:transparent }50%{border-color:orange }}.plist.svelte-1cl6qwj{font-size:11pt}.phead.svelte-1cl6qwj{font-size:15pt;padding-left:5pt;padding:10pt}`)();
const css = {
  code: `.pad.svelte-1cl6qwj{padding-top:20px}.fakeButtons.svelte-1cl6qwj{height:10px;width:10px;border-radius:50%;border:1px solid #000;position:relative;top:6px;left:6px;background-color:#ff3b47;border-color:#9d252b;display:inline-block}.fakeMinimize.svelte-1cl6qwj{left:11px;background-color:#ffc100;border-color:#9d802c}.fakeZoom.svelte-1cl6qwj{left:16px;background-color:#00d742;border-color:#049931}.fakeMenu.svelte-1cl6qwj{width:auto;box-sizing:border-box;height:25px;background-color:#E4DCCF;margin:0 auto;border-top-right-radius:5px;border-top-left-radius:5px}.fakeScreen.svelte-1cl6qwj{background-color:#576F72;box-sizing:border-box;width:auto;margin:0 auto;padding:20px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}p.svelte-1cl6qwj{position:relative;left:30%;margin-left:-9em;text-align:left;font-size:1.25em;font-family:monospace;white-space:nowrap;overflow:hidden;width:0}span.svelte-1cl6qwj{color:#fff;font-weight:bold}.line1.svelte-1cl6qwj{color:#9CD9F0;-webkit-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 1s steps(20, end) forwards}.cursor1.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 2s 2 forwards;animation:svelte-1cl6qwj-blink 1s 2s 2 forwards}.line2.svelte-1cl6qwj{color:#CDEE69;-webkit-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 4.25s steps(20, end) forwards}.cursor2.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards;animation:svelte-1cl6qwj-blink 1s 5.25s 2 forwards}.line3.svelte-1cl6qwj{color:#E09690;-webkit-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 7.5s steps(20, end) forwards}.cursor3.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;-moz-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;-o-animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards;animation:svelte-1cl6qwj-blink 1s 8.5s 2 forwards}.line4.svelte-1cl6qwj{color:#fff;-webkit-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;-moz-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;-o-animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards;animation:svelte-1cl6qwj-type .5s 10.75s steps(20, end) forwards}.cursor4.svelte-1cl6qwj{-webkit-animation:svelte-1cl6qwj-blink 1s 11.5s infinite;-moz-animation:svelte-1cl6qwj-blink 1s 8.5s infinite;-o-animation:svelte-1cl6qwj-blink 1s 8.5s infinite;animation:svelte-1cl6qwj-blink 1s 8.5s infinite}@-webkit-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-moz-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-o-keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@keyframes svelte-1cl6qwj-blink{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}@-webkit-keyframes svelte-1cl6qwj-type{to{width:17em}}@-moz-keyframes svelte-1cl6qwj-type{to{width:17em}}@-o-keyframes svelte-1cl6qwj-type{to{width:17em}}@keyframes svelte-1cl6qwj-type{to{width:17em}}body{background-color:#F0EBE3;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='232' height='232' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23576F72' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%237D9D9C'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")}@keyframes svelte-1cl6qwj-typing{from{width:0 }to{width:100% }}@keyframes svelte-1cl6qwj-blink-caret{from,to{border-color:transparent }50%{border-color:orange }}.plist.svelte-1cl6qwj{font-size:11pt}.phead.svelte-1cl6qwj{font-size:15pt;padding-left:5pt;padding:10pt}`,
  map: null
};
const Routes = (0, import_index_2835083a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<html lang="${"eng"}"><style lang="${"scss"}">/**
* CSS custom properties
*/
:root {
  --black: #404040;
  --white: #fff;
  --gray: rgba(64, 64, 64, 0.15);
  --font-courgett: "Courgette", cursive;
  --font-open-sans: "Open Sans", sans-serif;
  --font-light: 300;
}

/**
 * Functions
 */
/**
 * Placeholders
 */
.u-visually-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.c-main-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

/**
 * Styles
 */
/**
 * Elements
 */
body {
  background-color: var(--white);
  color: var(--black);
  font-family: var(--font-open-sans);
}

/**
 * Objects
 */
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

/**
 * Components
 */
.c-logo {
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");
  font-family: "Roboto Slab", serif;
  font-size: 1.625rem;
  margin: 0;
}

.c-logo__link {
  color: #576F72;
  text-decoration: none;
}

.c-main-menu {
  font-weight: 500;
}

.c-main-menu__list {
  display: flex;
}

.c-main-menu__link {
  color: #576F72;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.25rem;
  margin: 0 0.375rem;
  padding: 0.625rem;
  text-decoration: none;
  text-transform: uppercase;
}

.c-main-heading {
  max-width: 21.875rem;
  font-size: 1.875rem;
  font-weight: var(--font-light);
  letter-spacing: 0.1875rem;
  margin: 3.75rem 0;
  text-align: center;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: blink-caret 1s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
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
.c-article__link * {
  pointer-events: none;
}

.c-article__heading {
  font-size: 1.25rem;
  margin: 0.3125rem 0;
}

.c-article__content {
  line-height: 1.2;
  margin: 0.0625rem 0;
}

.c-article__img-wrapper {
  height: 6.25rem;
  margin-left: 1.25rem;
  min-width: 10rem;
  width: 10rem;
}

.c-article__img {
  border-radius: 0.625rem;
  display: block;
  height: 120%;
  filter: grayscale(1);
  object-fit: cover;
  transition: filter 0.3s ease-in;
  width: 100%;
}
.c-article__link:hover .c-article__img {
  filter: grayscale(0);
}

.c-magic-area {
  position: absolute;
  z-index: -1;
}

.c-magic-area--menu {
  background-color: var(--gray);
  border-radius: 0.125rem;
}

.c-magic-area--content {
  background-color: var(--gray);
  border-radius: 0.125rem;
}
.c-magic-area--content::before {
  background-color: var(--black);
  content: "";
  height: 70%;
  left: -0.1875rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0.375rem;
}

.c-author {
  color: #404040;
  margin: 10px 0;
  text-align: center;
}

.c-author__link {
  color: #404040;
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
  background-color: rgba(64, 64, 64, 0.15);
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
}

.c-fe30 {
  animation: fe30-anime 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 4s forwards;
  bottom: 0;
  display: none;
  opacity: 0;
  position: fixed;
  right: 0;
}
.is-desktop .c-fe30 {
  display: block;
}

.c-fe30__inner {
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
  color: #2d2f31;
  font-size: 14px;
  line-height: 1.45;
  margin: 10px;
  padding: 20px 20px 10px;
  transform: perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1);
  transform-style: preserve-3d;
  width: 250px;
}

.c-fe30__photo {
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.1);
  display: block;
  height: 80px;
  position: absolute;
  top: -50px;
  left: 50%;
  overflow: hidden;
  transform: translateX(-50%) translateZ(26px);
  width: 80px;
}

.c-fe30__img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.c-fe30__link {
  color: #ffbd48;
  display: inline-block;
  transform: translateZ(18px);
}
.c-fe30__link:hover {
  text-decoration: none;
}

@keyframes fe30-anime {
  0% {
    opacity: 0;
    transform: translate(0, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
/**
 * Utilities
 */</style>
  <div class="${"c-magic-area c-magic-area--menu"}" data-target-class="${".c-main-menu__link"}" data-tween-back="${"true"}" aria-hidden="${"true"}"></div>
<div class="${"c-magic-area c-magic-area--content"}" data-target-class="${".c-article__link"}" data-tween-back="${"false"}" aria-hidden="${"true"}"></div>

<main id="${"page"}" class="${"o-page"}"><header class="${"o-header"}"><h1 class="${"c-logo"}"><a class="${"c-logo__link"}" href="${""}" target="${"_blank"}">PORTFOLIO</a></h1>
    <nav class="${"c-main-menu"}" aria-labelledby="${"mainmenulabel"}"><h2 id="${"mainmenulabel"}" class="${"u-visually-hidden"}">Main Menu</h2>
      <ul class="${"c-main-menu__list"}"><li><a class="${"c-main-menu__link"}" href="${"#about"}">About</a></li>
        <li><a class="${"c-main-menu__link"}" href="${""}">Contact</a></li></ul></nav></header>

  <section class="${"o-main-section"}"><h2 class="${"c-main-heading"}">Hi there, I&#39;m Hamid.</h2>
    <div class="${"pad svelte-1cl6qwj"}"><div class="${"fakeMenu svelte-1cl6qwj"}"><div class="${"fakeButtons fakeClose svelte-1cl6qwj"}"></div>
        <div class="${"fakeButtons fakeMinimize svelte-1cl6qwj"}"></div>
        <div class="${"fakeButtons fakeZoom svelte-1cl6qwj"}"></div></div>
      <div class="${"fakeScreen svelte-1cl6qwj"}"><p class="${"line1 svelte-1cl6qwj"}">[\xA0\u201CI&#39;m a web developer.\u201D,<span class="${"cursor1 svelte-1cl6qwj"}">_</span></p>
        <p class="${"line2 svelte-1cl6qwj"}">\xA0\xA0\u201CI&#39;m a mobile developer.\u201D,<span class="${"cursor2 svelte-1cl6qwj"}">_</span></p>
        <p class="${"line3 svelte-1cl6qwj"}">\xA0\xA0\u201CLet&#39;s work together!\u201D\xA0]<span class="${"cursor3 svelte-1cl6qwj"}">_</span></p>
        <p class="${"line4 svelte-1cl6qwj"}">&gt;<span class="${"cursor4 svelte-1cl6qwj"}">_</span></p></div></div>
    
    <article class="${"c-article"}"><a class="${"c-article__link"}"><div><header><h3 class="${"c-article__heading"}" id="${"about"}">About me</h3></header>
          <div class="${"c-article__content"}"><div class="${"phead svelte-1cl6qwj"}">CS Student at Ryerson University.</div>
            
            Experienced with:
            <li class="${"plist svelte-1cl6qwj"}">Swift/StoryBoard/SwiftUI.</li>
            <li class="${"plist svelte-1cl6qwj"}">JS and HTML/CSS.</li>
            <li class="${"plist svelte-1cl6qwj"}">Simple server setups.</li>
            <li class="${"plist svelte-1cl6qwj"}">Java</li>
            
            <div class="${"phead svelte-1cl6qwj"}">Comfortable with:</div>
            <li class="${"plist svelte-1cl6qwj"}">Linux and Command lines.</li></div></div>
        
        <div class="${"c-article__img-wrapper"}"><img>
          <img class="${"c-article__img"}"${(0, import_index_2835083a.a)("src", logo, 0)} alt="${""}"></div></a></article>

    <article class="${"c-article"}"><a class="${"c-article__link"}"><div><header><h3 class="${"c-article__heading"}"></h3></header>
          <div class="${"c-article__content"}"></div></div>
        <div class="${"c-article__img-wrapper"}"><img class="${"c-article__img"}" src="${"https://assets.codepen.io/204808/css-grid-mondrian.png"}" alt="${"Responsive Mondrian art with CSS grid"}"></div></a></article>

    <article class="${"c-article"}"><a class="${"c-article__link"}"><div><header><h3 class="${"c-article__heading"}">Open to New Experiences</h3></header>
          <div class="${"c-article__content"}"></div></div>
        <div class="${"c-article__img-wrapper"}"><img class="${"c-article__img"}" src="${"https://assets.codepen.io/204808/17.Space-Rocket-with-requestAnimationFrame.png"}" alt="${"Responsive Mondrian art with CSS grid"}"></div></a></article></section></main>

<div class="${"c-author"}">Built with \u{1F49B}\xA0 by <a target="${"_blank"}" class="${"c-author__link"}" href="${""}">Hamidreza Khoramrokh</a></div></html>`;
});
