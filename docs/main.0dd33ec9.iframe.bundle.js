(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "../binyal/src/components/button/button.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/button/button.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "../binyal/src/components/button/link.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/button/link.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "../binyal/src/components/loading/loading.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/loading/loading.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "../binyal/src/global.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/global.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        parameters =
          (__webpack_require__("../binyal/src/global.css"),
          {
            actions: { argTypesRegex: "^on.*" },
            controls: {
              matchers: { color: /(background|color)$/i, date: /Date$/ },
            },
          });
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.a.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "render":
            return Object(ClientApi.g)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__("./node_modules/webpack/buildin/module.js")(module)
      ));
    },
    "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/button/button.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".button-module__b__14D_i {\n  display: inline-block;\n  position: relative;\n  font-weight: var(--by-font-weight-button);\n  white-space: nowrap;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid var(--by-transparent);\n}\n\n/* size */\n\n.button-module__large__22nrq {\n  font-size: var(--by-font-size-large);\n  line-height: var(--by-line-height-large);\n  height: var(--by-height-large);\n  padding: 8px 16px;\n}\n\n.button-module__medium__fJNxq {\n  font-size: var(--by-font-size);\n  line-height: var(--by-line-height);\n  height: var(--by-height-medium);\n  padding: 6px 12px;\n}\n\n.button-module__small__3HBNR {\n  font-size: var(--by-font-size-small);\n  line-height: var(--by-line-height-small);\n  height: var(--by-height-small);\n  padding: 4px 8px;\n}\n\n/* fill */\n.button-module__fill__24A_T {\n  width: 100%;\n}\n\n/* shape */\n.button-module__round__NeDBF {\n  border-radius: var(--by-radius);\n}\n\n.button-module__circle__3hf4k {\n  border-radius: var(--by-radius-round);\n}\n\n/* style */\n.button-module__flat__24WDl {\n  background-color: var(--by-transparent);\n  color: var(--by-comfy-9);\n}\n\n.button-module__flat__24WDl:hover {\n  background-color: var(--by-gray-1);\n  border-color: var(--by-gray-1);\n}\n\n.button-module__primary__1Tuk2 {\n  background-color: var(--by-binyal-color-6);\n  color: var(--by-white);\n  border-color: var(--by-binyal-color-6);\n}\n\n.button-module__primary__1Tuk2:hover {\n  background-color: var(--by-binyal-color-7);\n  border-color: var(--by-binyal-color-7);\n}\n\n.button-module__warning__1fHYx {\n  background-color: var(--by-yellow-5);\n  color: var(--by-white);\n  border-color: var(--by-yellow-5);\n}\n\n.button-module__warning__1fHYx:hover {\n  background-color: var(--by-yellow-6);\n  border-color: var(--by-yellow-6);\n}\n\n.button-module__danger__2FSO2 {\n  background-color: var(--by-red-6);\n  color: var(--by-white);\n  border-color: var(--by-red-6);\n}\n\n.button-module__danger__2FSO2:hover {\n  background-color: var(--by-red-7);\n  border-color: var(--by-red-7);\n}\n\n/* outline */\n.button-module__outline_flat__Zj9sC {\n  background-color: var(--by-transparent);\n  color: var(--by-comfy-9);\n  border-color: var(--by-gray-3);\n}\n\n.button-module__outline_flat__Zj9sC:hover {\n  background-color: var(--by-gray-1);\n}\n\n.button-module__outline_primary__2A-5L {\n  background-color: var(--by-transparent);\n  color: var(--by-binyal-color-6);\n  border-color: var(--by-binyal-color-6);\n}\n\n.button-module__outline_primary__2A-5L:hover {\n  background-color: var(--by-binyal-color-6);\n  color: var(--by-white);\n}\n\n.button-module__outline_warning__2saYD {\n  background-color: var(--by-transparent);\n  color: var(--by-yellow-5);\n  border-color: var(--by-yellow-5);\n}\n\n.button-module__outline_warning__2saYD:hover {\n  background-color: var(--by-yellow-5);\n  color: var(--by-white);\n}\n\n.button-module__outline_danger__yZNUY {\n  background-color: var(--by-transparent);\n  color: var(--by-red-6);\n  border-color: var(--by-red-6);\n}\n\n.button-module__outline_danger__yZNUY:hover {\n  background-color: var(--by-red-6);\n  color: var(--by-white);\n}\n\n/* disabled */\nbutton.button-module__b__14D_i:disabled {\n  pointer-events: none;\n  opacity: 0.75;\n}\n",
          "",
        ]),
          (exports.locals = {
            b: "button-module__b__14D_i",
            large: "button-module__large__22nrq",
            medium: "button-module__medium__fJNxq",
            small: "button-module__small__3HBNR",
            fill: "button-module__fill__24A_T",
            round: "button-module__round__NeDBF",
            circle: "button-module__circle__3hf4k",
            flat: "button-module__flat__24WDl",
            primary: "button-module__primary__1Tuk2",
            warning: "button-module__warning__1fHYx",
            danger: "button-module__danger__2FSO2",
            outline_flat: "button-module__outline_flat__Zj9sC",
            outline_primary: "button-module__outline_primary__2A-5L",
            outline_warning: "button-module__outline_warning__2saYD",
            outline_danger: "button-module__outline_danger__yZNUY",
          }),
          (module.exports = exports);
      },
    "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/button/link.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".link-module__l__1yVPY {\n  display: inline-block;\n  position: relative;\n  font-weight: var(--by-font-weight-button);\n  white-space: nowrap;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: none;\n  text-decoration: none;\n  background-color: var(--by-transparent);\n}\n\n/* size */\n\n.link-module__large__31eOY {\n  font-size: var(--by-font-size-large);\n  line-height: var(--by-line-height-large);\n}\n\n.link-module__medium__2EwQ4 {\n  font-size: var(--by-font-size);\n  line-height: var(--by-line-height);\n}\n\n.link-module__small__1BwgD {\n  font-size: var(--by-font-size-small);\n  line-height: var(--by-line-height-small);\n}\n\n/* fill */\n.link-module__fill__2-mMY {\n  width: 100%;\n}\n\n/* shape */\n.link-module__round__1xsTh {\n  border-radius: var(--by-radius);\n}\n\n.link-module__circle__1uqVp {\n  border-radius: var(--by-radius-round);\n}\n\n/* style */\n.link-module__flat__2a60N,\n.link-module__lOutlineFlat__NSWRa {\n  color: var(--by-comfy-9);\n}\n\n.link-module__flat__2a60N:hover,\n.link-module__outline_flat__3seyM:hover {\n  color: var(--by-black);\n}\n\n.link-module__primary__8eWoQ,\n.link-module__outline_primary__3VlxZ {\n  color: var(--by-binyal-color-6);\n}\n\n.link-module__primary__8eWoQ:hover,\n.link-module__outline_primary__3VlxZ:hover {\n  color: var(--by-binyal-color-7);\n}\n\n.link-module__warning__24oxq,\n.link-module__outline_warning__37TeS {\n  color: var(--by-yellow-5);\n}\n\n.link-module__warning__24oxq:hover,\n.link-module__outline_warning__37TeS:hover {\n  color: var(--by-yellow-6);\n}\n\n.link-module__danger__2hz89,\n.link-module__outline_danger__RCgJL {\n  color: var(--by-red-6);\n}\n\n.link-module__danger__2hz89:hover,\n.link-module__outline_danger__RCgJL:hover {\n  color: var(--by-red-7);\n}\n\n/* outline */\n\n.link-module__outline_flat__3seyM,\n.link-module__outline_primary__3VlxZ,\n.link-module__outline_warning__37TeS,\n.link-module__outline_danger__RCgJL {\n  text-decoration: underline;\n}\n\n/* disabled */\na.link-module__l__1yVPY.link-module__disabled__1NLl3 {\n  pointer-events: none;\n  opacity: 0.75;\n}\n",
          "",
        ]),
          (exports.locals = {
            l: "link-module__l__1yVPY",
            large: "link-module__large__31eOY",
            medium: "link-module__medium__2EwQ4",
            small: "link-module__small__1BwgD",
            fill: "link-module__fill__2-mMY",
            round: "link-module__round__1xsTh",
            circle: "link-module__circle__1uqVp",
            flat: "link-module__flat__2a60N",
            lOutlineFlat: "link-module__lOutlineFlat__NSWRa",
            outline_flat: "link-module__outline_flat__3seyM",
            primary: "link-module__primary__8eWoQ",
            outline_primary: "link-module__outline_primary__3VlxZ",
            warning: "link-module__warning__24oxq",
            outline_warning: "link-module__outline_warning__37TeS",
            danger: "link-module__danger__2hz89",
            outline_danger: "link-module__outline_danger__RCgJL",
            disabled: "link-module__disabled__1NLl3",
          }),
          (module.exports = exports);
      },
    "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/components/loading/loading.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".loading-module__content__3qi7u {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  background-color: var(--by-modal-color);\n}\n\n.loading-module__loader__1h1cs {\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  max-width: calc(100% - 6px);\n  max-height: calc(100% - 6px);\n  -webkit-animation: loading-module__spin__2c535 2s linear infinite;\n          animation: loading-module__spin__2c535 2s linear infinite;\n  border: 6px solid var(--by-binyal-color-2);\n  border-top: 6px solid var(--by-binyal-color-5);\n  border-bottom: 6px solid var(--by-binyal-color-5);\n}\n\n@-webkit-keyframes loading-module__spin__2c535 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loading-module__spin__2c535 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.loading-module__flat__2NYmv .loading-module__loader__1h1cs {\n  border-color: var(--by-comfy-2);\n  border-top-color: var(--by-comfy-8);\n  border-bottom-color: var(--by-comfy-8);\n}\n\n.loading-module__primary__1Sd5j .loading-module__loader__1h1cs {\n  border-color: var(--by-binyal-color-2);\n  border-top-color: var(--by-binyal-color-5);\n  border-bottom-color: var(--by-binyal-color-5);\n}\n\n.loading-module__warning__34vkP .loading-module__loader__1h1cs {\n  border-color: var(--by-yellow-1);\n  border-top-color: var(--by-yellow-4);\n  border-bottom-color: var(--by-yellow-4);\n}\n\n.loading-module__danger__2LhOh .loading-module__loader__1h1cs {\n  border-color: var(--by-red-2);\n  border-top-color: var(--by-red-6);\n  border-bottom-color: var(--by-red-6);\n}\n",
          "",
        ]),
          (exports.locals = {
            content: "loading-module__content__3qi7u",
            loader: "loading-module__loader__1h1cs",
            spin: "loading-module__spin__2c535",
            flat: "loading-module__flat__2NYmv",
            primary: "loading-module__primary__1Sd5j",
            warning: "loading-module__warning__34vkP",
            danger: "loading-module__danger__2LhOh",
          }),
          (module.exports = exports);
      },
    "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!../binyal/src/global.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ":root {\n  --by-white: #ffffff;\n  --by-black: #000000;\n  --by-transparent: transparent;\n\n  --by-comfy: #f8fafc;\n  --by-comfy-1: #f1f5f9;\n  --by-comfy-2: #e2e8f0;\n  --by-comfy-3: #cbd5e1;\n  --by-comfy-4: #94a3b8;\n  --by-comfy-5: #64748b;\n  --by-comfy-6: #475569;\n  --by-comfy-7: #334155;\n  --by-comfy-8: #1e293b;\n  --by-comfy-9: #0f172a;\n\n  --by-gray: #f9fafb;\n  --by-gray-1: #f3f4f6;\n  --by-gray-2: #e5e7eb;\n  --by-gray-3: #d1d5db;\n  --by-gray-4: #9ca3af;\n  --by-gray-5: #6b7280;\n  --by-gray-6: #4b5563;\n  --by-gray-7: #374151;\n  --by-gray-8: #1f2937;\n  --by-gray-9: #111827;\n\n  --by-yellow: #fefce8;\n  --by-yellow-1: #fef9c3;\n  --by-yellow-2: #fef08a;\n  --by-yellow-3: #fde047;\n  --by-yellow-4: #facc15;\n  --by-yellow-5: #eab308;\n  --by-yellow-6: #ca8a04;\n  --by-yellow-7: #a16207;\n  --by-yellow-8: #854d0e;\n  --by-yellow-9: #713f12;\n\n  --by-red: #fef2f2;\n  --by-red-1: #fee2e2;\n  --by-red-2: #fecaca;\n  --by-red-3: #fca5a5;\n  --by-red-4: #f87171;\n  --by-red-5: #ef4444;\n  --by-red-6: #dc2626;\n  --by-red-7: #b91c1c;\n  --by-red-8: #991b1b;\n  --by-red-9: #7f1d1d;\n\n  --by-binyal-color: #fdf2f8;\n  --by-binyal-color-1: #fce7f3;\n  --by-binyal-color-2: #fbcfe8;\n  --by-binyal-color-3: #f9a8d4;\n  --by-binyal-color-4: #f472b6;\n  --by-binyal-color-5: #ec4899;\n  --by-binyal-color-6: #db2777;\n  --by-binyal-color-7: #be185d;\n  --by-binyal-color-8: #9d174d;\n  --by-binyal-color-9: #831843;\n\n  --by-modal-color: #e2e8f04f;\n\n  --by-font-size: 1rem;\n  --by-font-size-small: 0.875rem;\n  --by-font-size-large: 1.125rem;\n\n  --by-line-height: 1.5;\n  --by-line-height-small: 1.5;\n  --by-line-height-large: 1.5;\n\n  --by-height-medium: 40px;\n  --by-height-large: 48px;\n  --by-height-small: 32px;\n\n  --by-radius: 4px;\n  --by-radius-round: 50%;\n\n  --by-font-family: Arial, sans-serif;\n\n  --by-tab-size: 4;\n  --by-font-weight-button: 400;\n}\n\np,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font: inherit;\n}\n\nhtml {\n  font-family: var(--by-font-family);\n  font-size: var(--by-font-size);\n  line-height: var(--by-line-height);\n  -moz-tab-size: var(--by-tab-size);\n    -o-tab-size: var(--by-tab-size);\n       tab-size: var(--by-tab-size);\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n",
          "",
        ]),
          (module.exports = exports);
      },
    "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./components/button/button.stories.tsx":
            "./src/components/button/button.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./components/Introduction.stories.mdx":
            "./src/components/Introduction.stories.mdx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$");
      },
    "./src/components/Introduction.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,
            { title: "Binyal/Introduction", mdxType: "Meta" }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "style",
            null,
            "\n  .by-container {\n    color: #1e293b;\n    font-size: 18px;\n  }\n  .by-header {\n    width: 100%;\n    text-align: center;\n    font-size: 70px;\n    color: #db2777;\n  }\n  .by-des {\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n  }\n  .by-group {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0,1fr));\n    gap: 24px;\n    width: 100%;\n    padding: 24px;\n    max-width: 1024px;\n    float-left: auto;\n    float-right: auto;\n  }\n  .by-card {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f8fafc;\n    border: 1px dashed #f8fafc;\n    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);-o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  .by-card:hover {\n    border: 1px dashed #e2e8f0;\n    background-color: white;\n  }\n  .by-card span {\n    font-size: 24px;\n    padding: 32px 0px;\n  }\n"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "div",
            { className: "by-container" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "h1",
              { className: "by-header" },
              "Binyal"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "p",
              { className: "by-des" },
              "Design components for developers. Create an efficient and enjoyable work experience"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "div",
              { className: "by-group" },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "div",
                { className: "by-card" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "span",
                  null,
                  "Efficient"
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "div",
                { className: "by-card" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "span",
                  null,
                  "Simple"
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "div",
                { className: "by-card" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "span",
                  null,
                  "Enjoyable"
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                "div",
                { className: "by-card" },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  "span",
                  null,
                  "Job Performance"
                )
              )
            )
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Binyal/Introduction",
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./src/components/button/button.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "HelloBinyal", function () {
          return HelloBinyal;
        }),
        __webpack_require__.d(__webpack_exports__, "ButtonIcon", function () {
          return ButtonIcon;
        }),
        __webpack_require__.d(__webpack_exports__, "Link", function () {
          return Link;
        }),
        __webpack_require__.d(__webpack_exports__, "LinkOutline", function () {
          return LinkOutline;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var esm = __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/index.js"
        ),
        button_module =
          (__webpack_require__(
            "./node_modules/core-js/modules/es.string.small.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.flat.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.fill.js"
          ),
          __webpack_require__(
            "./node_modules/core-js/modules/es.array.join.js"
          ),
          __webpack_require__(
            "../binyal/src/components/button/button.module.css"
          )),
        button_module_default = __webpack_require__.n(button_module),
        link_module = __webpack_require__(
          "../binyal/src/components/button/link.module.css"
        ),
        link_module_default = __webpack_require__.n(link_module),
        STYLE = {
          flat: "flat",
          primary: "primary",
          warning: "warning",
          danger: "danger",
        },
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        space_SpaceX = function SpaceX(props) {
          return Object(jsx_runtime.jsx)("span", {
            style: { width: props.size, display: "inline-block" },
          });
        };
      space_SpaceX.displayName = "SpaceX";
      var space_SpaceY = function SpaceY(props) {
        return Object(jsx_runtime.jsx)("span", {
          style: { height: props.size, display: "inline-block" },
        });
      };
      space_SpaceY.displayName = "SpaceY";
      var space = { SpaceX: space_SpaceX, SpaceY: space_SpaceY };
      try {
        (space_SpaceX.displayName = "SpaceX"),
          (space_SpaceX.__docgenInfo = {
            description: "",
            displayName: "SpaceX",
            props: {
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: { name: "number" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "../binyal/src/components/space/space.tsx#SpaceX"
            ] = {
              docgenInfo: space_SpaceX.__docgenInfo,
              name: "SpaceX",
              path: "../binyal/src/components/space/space.tsx#SpaceX",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (space_SpaceY.displayName = "SpaceY"),
          (space_SpaceY.__docgenInfo = {
            description: "",
            displayName: "SpaceY",
            props: {
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !0,
                type: { name: "number" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "../binyal/src/components/space/space.tsx#SpaceY"
            ] = {
              docgenInfo: space_SpaceY.__docgenInfo,
              name: "SpaceY",
              path: "../binyal/src/components/space/space.tsx#SpaceY",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var loading_module = __webpack_require__(
          "../binyal/src/components/loading/loading.module.css"
        ),
        loading_module_default = __webpack_require__.n(loading_module),
        configClass = {
          flat: loading_module_default.a.flat,
          primary: loading_module_default.a.primary,
          warning: loading_module_default.a.warning,
          danger: loading_module_default.a.danger,
        },
        loading_Loading = function Loading(props) {
          var _props$style;
          return Object(jsx_runtime.jsx)("div", {
            className:
              loading_module_default.a.content +
              " " +
              configClass[
                null !== (_props$style = props.style) && void 0 !== _props$style
                  ? _props$style
                  : "primary"
              ],
            children: Object(jsx_runtime.jsx)("div", {
              className: loading_module_default.a.loader,
            }),
          });
        };
      (loading_Loading.displayName = "Loading"),
        (loading_Loading.style = STYLE);
      var loading_loading = loading_Loading;
      try {
        (loading.displayName = "loading"),
          (loading.__docgenInfo = {
            description: "",
            displayName: "loading",
            props: {
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"flat"' },
                    { value: '"warning"' },
                    { value: '"danger"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "../binyal/src/components/loading/loading.tsx#loading"
            ] = {
              docgenInfo: loading.__docgenInfo,
              name: "loading",
              path: "../binyal/src/components/loading/loading.tsx#loading",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var spaceSize = { large: 6, medium: 4, small: 2 },
        button_ButtonContent = function ButtonContent(props) {
          var _props$size;
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              props.icon &&
                Object(jsx_runtime.jsx)("span", { children: props.icon }),
              props.icon &&
                props.children &&
                Object(jsx_runtime.jsx)(space.SpaceX, {
                  size: spaceSize[
                    null !== (_props$size = props.size) &&
                    void 0 !== _props$size
                      ? _props$size
                      : "medium"
                  ],
                }),
              props.children &&
                Object(jsx_runtime.jsx)("span", { children: props.children }),
              props.loading &&
                Object(jsx_runtime.jsx)(loading_loading, {
                  style: props.style,
                }),
            ],
          });
        },
        button_configClass = {
          button: {
            size: {
              large: button_module_default.a.large,
              medium: button_module_default.a.medium,
              small: button_module_default.a.small,
            },
            shape: {
              round: button_module_default.a.round,
              circle: button_module_default.a.circle,
            },
            nonOutline: {
              flat: button_module_default.a.flat,
              primary: button_module_default.a.primary,
              warning: button_module_default.a.warning,
              danger: button_module_default.a.danger,
            },
            outline: {
              flat: button_module_default.a.outline_flat,
              primary: button_module_default.a.outline_primary,
              warning: button_module_default.a.outline_warning,
              danger: button_module_default.a.outline_danger,
            },
          },
          link: {
            size: {
              large: link_module_default.a.large,
              medium: link_module_default.a.medium,
              small: link_module_default.a.small,
            },
            shape: {
              round: link_module_default.a.round,
              circle: link_module_default.a.circle,
            },
            nonOutline: {
              flat: link_module_default.a.flat,
              primary: link_module_default.a.primary,
              warning: link_module_default.a.warning,
              danger: link_module_default.a.danger,
            },
            outline: {
              flat: link_module_default.a.outline_flat,
              primary: link_module_default.a.outline_primary,
              warning: link_module_default.a.outline_warning,
              danger: link_module_default.a.outline_danger,
            },
          },
        },
        button_getClass = function getClass(props) {
          var _props$size2,
            _props$shape,
            _props$style,
            type = props.href ? "link" : "button",
            classes = [
              "link" === type
                ? link_module_default.a.l
                : button_module_default.a.b,
              button_configClass[type].size[
                null !== (_props$size2 = props.size) && void 0 !== _props$size2
                  ? _props$size2
                  : "medium"
              ],
              button_configClass[type].shape[
                null !== (_props$shape = props.shape) && void 0 !== _props$shape
                  ? _props$shape
                  : "round"
              ],
              button_configClass[type][
                props.outline ? "outline" : "nonOutline"
              ][
                null !== (_props$style = props.style) && void 0 !== _props$style
                  ? _props$style
                  : "primary"
              ],
            ];
          return (
            props.fill && classes.push(button_module_default.a.fill),
            props.className && classes.push(props.className),
            "link" === type &&
              props.disabled &&
              classes.push(link_module_default.a.disabled),
            classes.join(" ")
          );
        },
        button_Button = function Button(props) {
          var _props$target;
          return props.href
            ? Object(jsx_runtime.jsx)("a", {
                className: button_getClass(props),
                href: props.href,
                target:
                  null !== (_props$target = props.target) &&
                  void 0 !== _props$target
                    ? _props$target
                    : "_self",
                children: Object(jsx_runtime.jsx)(
                  button_ButtonContent,
                  Object.assign({}, props)
                ),
              })
            : Object(jsx_runtime.jsx)("button", {
                className: button_getClass(props),
                type: props.type,
                disabled: props.disabled,
                tabIndex: props.tabIndex,
                onClick: props.onClick,
                children: Object(jsx_runtime.jsx)(
                  button_ButtonContent,
                  Object.assign({}, props)
                ),
              });
        };
      (button_Button.size = {
        large: "large",
        medium: "medium",
        small: "small",
      }),
        (button_Button.style = STYLE),
        (button_Button.type = {
          button: "button",
          reset: "reset",
          submit: "submit",
        }),
        (button_Button.shape = { round: "round", circle: "circle" });
      var button_button = button_Button;
      try {
        (button.displayName = "button"),
          (button.__docgenInfo = {
            description: "",
            displayName: "button",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              type: {
                defaultValue: null,
                description: "",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"button"' },
                    { value: '"submit"' },
                    { value: '"reset"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              tabIndex: {
                defaultValue: null,
                description: "",
                name: "tabIndex",
                required: !1,
                type: { name: "number" },
              },
              loading: {
                defaultValue: null,
                description: "",
                name: "loading",
                required: !1,
                type: { name: "boolean" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !1,
                type: { name: "ReactNode" },
              },
              href: {
                defaultValue: null,
                description: "",
                name: "href",
                required: !1,
                type: { name: "string" },
              },
              target: {
                defaultValue: null,
                description: "",
                name: "target",
                required: !1,
                type: { name: "string" },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"medium"' },
                    { value: '"small"' },
                    { value: '"large"' },
                  ],
                },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"flat"' },
                    { value: '"warning"' },
                    { value: '"danger"' },
                  ],
                },
              },
              fill: {
                defaultValue: null,
                description: "",
                name: "fill",
                required: !1,
                type: { name: "boolean" },
              },
              shape: {
                defaultValue: null,
                description: "",
                name: "shape",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"round"' }, { value: '"circle"' }],
                },
              },
              outline: {
                defaultValue: null,
                description: "",
                name: "outline",
                required: !1,
                type: { name: "boolean" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: { name: "MouseEventHandler<Element>" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "../binyal/src/components/button/button.tsx#button"
            ] = {
              docgenInfo: button.__docgenInfo,
              name: "button",
              path: "../binyal/src/components/button/button.tsx#button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var index_es = __webpack_require__(
          "./node_modules/@fortawesome/react-fontawesome/index.es.js"
        ),
        free_solid_svg_icons_index_es = __webpack_require__(
          "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"
        ),
        button_stories_Template =
          ((__webpack_exports__.default = {
            title: "Components/Button",
            component: button_button,
            argTypes: {
              className: {
                name: "ClassName",
                description: "Set the class for config button",
                defaultValue: void 0,
                type: "string",
              },
              type: {
                name: "Type",
                description: "The type attribute specifies the type of button",
                defaultValue: "button",
                options: ["button", "submit", "reset"],
                control: { type: "select" },
              },
              disabled: {
                name: "Disable",
                description: "Set status of button is disable",
                defaultValue: !1,
                type: "boolean",
              },
              tabIndex: {
                name: "TabIndex",
                description:
                  "The tabindex attribute specifies the tab order of an element",
                defaultValue: void 0,
                type: "number",
              },
              loading: {
                name: "Loading",
                description: "Set state of button is loading",
                defaultValue: !1,
                type: "boolean",
              },
              children: {
                name: "Children",
                description: "ReactNode",
                defaultValue: void 0,
                type: "string",
              },
              icon: {
                name: "Icon",
                description: "ReactNode",
                defaultValue: void 0,
                type: "symbol",
              },
              href: {
                name: "Href",
                description:
                  "The href attribute specifies the URL of the page the link goes to",
                defaultValue: void 0,
                type: "string",
              },
              target: {
                name: "Target",
                description:
                  "The target attribute specifies where to open the linked document.",
                defaultValue: void 0,
                type: "string",
              },
              size: {
                name: "Size",
                description: "Set the size of button",
                defaultValue: "medium",
                options: ["small", "medium", "large"],
                control: { type: "select" },
              },
              style: {
                name: "Style",
                description: "Set the style of button",
                defaultValue: "primary",
                options: ["flat", "primary", "warning", "danger"],
                control: { type: "select" },
              },
              fill: {
                name: "Fill",
                description: "Option to fit button width to its parent width",
                defaultValue: !1,
              },
              shape: {
                name: "Shape",
                description: "Can be set button shape",
                defaultValue: "round",
                options: ["round", "circle"],
                control: { type: "select" },
              },
              outline: {
                name: "Outline",
                description: "The type attribute specifies the type of button",
                defaultValue: !1,
                type: "boolean",
              },
              onClick: {
                name: "OnClick",
                description: "Set the handler to handle click event",
                defaultValue: void 0,
                action: "clicked",
              },
            },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              button_button,
              Object.assign({}, args)
            );
          });
      button_stories_Template.displayName = "Template";
      var HelloBinyal = button_stories_Template.bind({});
      HelloBinyal.args = {
        className: void 0,
        type: button_button.type.button,
        disabled: !1,
        tabIndex: 1,
        loading: !1,
        children: "Hello Binyal",
        icon: Object(jsx_runtime.jsx)(index_es.a, {
          icon: free_solid_svg_icons_index_es.b,
        }),
        href: void 0,
        target: void 0,
        size: button_button.size.medium,
        style: button_button.style.primary,
        fill: !0,
        shape: button_button.shape.round,
        outline: !1,
        onClick: Object(esm.action)("clicked"),
      };
      var ButtonIcon = button_stories_Template.bind({});
      ButtonIcon.args = {
        type: button_button.type.button,
        icon: Object(jsx_runtime.jsx)(index_es.a, {
          icon: free_solid_svg_icons_index_es.a,
        }),
        size: button_button.size.medium,
        style: button_button.style.primary,
        shape: button_button.shape.circle,
      };
      var Link = button_stories_Template.bind({});
      Link.args = {
        children: "Redirect to Binyal",
        href: "https://github.com/Binh-NA/binyal",
        target: "_blank",
        size: button_button.size.medium,
        type: void 0,
      };
      var LinkOutline = button_stories_Template.bind({});
      (LinkOutline.args = {
        children: "Redirect to Binyal",
        href: "https://github.com/Binh-NA/binyal",
        target: "_blank",
        size: button_button.size.medium,
        type: void 0,
        outline: !0,
      }),
        (HelloBinyal.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          HelloBinyal.parameters
        )),
        (ButtonIcon.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          ButtonIcon.parameters
        )),
        (Link.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          Link.parameters
        )),
        (LinkOutline.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          LinkOutline.parameters
        ));
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
]);
