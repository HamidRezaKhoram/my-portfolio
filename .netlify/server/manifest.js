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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([]),
  mimeTypes: {},
  _: {
    entry: { "file": "start-d38fbe6d.js", "js": ["start-d38fbe6d.js", "chunks/index-c8c9a2ed.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "sitemap.xml",
        pattern: /^\/sitemap\.xml$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/sitemap.xml.js")))
      },
      {
        type: "page",
        id: "CuteCat",
        pattern: /^\/CuteCat\/?$/,
        names: [],
        types: [],
        path: "/CuteCat",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "FirstPartOfText",
        pattern: /^\/FirstPartOfText\/?$/,
        names: [],
        types: [],
        path: "/FirstPartOfText",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "FlashCards",
        pattern: /^\/FlashCards\/?$/,
        names: [],
        types: [],
        path: "/FlashCards",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "Footer",
        pattern: /^\/Footer\/?$/,
        names: [],
        types: [],
        path: "/Footer",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "H1",
        pattern: /^\/H1\/?$/,
        names: [],
        types: [],
        path: "/H1",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "HeadOfMainBody",
        pattern: /^\/HeadOfMainBody\/?$/,
        names: [],
        types: [],
        path: "/HeadOfMainBody",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "SecondSectionOfText",
        pattern: /^\/SecondSectionOfText\/?$/,
        names: [],
        types: [],
        path: "/SecondSectionOfText",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "ThirdPartOfText",
        pattern: /^\/ThirdPartOfText\/?$/,
        names: [],
        types: [],
        path: "/ThirdPartOfText",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "icon",
        pattern: /^\/icon\/?$/,
        names: [],
        types: [],
        path: "/icon",
        shadow: null,
        a: [0, 11],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
