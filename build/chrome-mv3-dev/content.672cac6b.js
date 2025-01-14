(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lU4Oe":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/57block/WebstormProjects/meeting assistant/content.ts",
    "bundleId": "3716c965672cac6b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 49217
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1] : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"71ecL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _googleMeetingCaptionsResolver = require("google-meeting-captions-resolver");
var _googleMeetingCaptionsResolverDefault = parcelHelpers.interopDefault(_googleMeetingCaptionsResolver);
var _getIsExtensionEnabled = require("~utils/get-is-extension-enabled");
var _getIsExtensionEnabledDefault = parcelHelpers.interopDefault(_getIsExtensionEnabled);
let isExtensionEnabled = false;
const storeIntoChromeStorage = (records)=>{
    chrome.storage.local.set({
        "recordedContents": records
    }, ()=>{
        chrome.runtime.sendMessage({
            type: "contentUpdated"
        });
    });
};
const updateRecords = (incomingData)=>{
    if (!isExtensionEnabled) return;
    chrome.storage.local.get("recordedContents", ({ recordedContents })=>{
        const records = recordedContents || [];
        const clonedRecords = [
            ...records
        ];
        const matchingRecord = clonedRecords.find((item)=>item.session === incomingData.session);
        if (matchingRecord) matchingRecord.talkContent = incomingData.talkContent;
        else clonedRecords.push({
            ...incomingData,
            timestamp: Date.now()
        });
        storeIntoChromeStorage(clonedRecords);
    });
};
const start = ()=>{
    (0, _getIsExtensionEnabledDefault.default)().then((enabled)=>{
        isExtensionEnabled = enabled;
        if (enabled) (0, _googleMeetingCaptionsResolverDefault.default)(undefined, (v)=>{
            console.log("captions", v);
            updateRecords(v);
        });
    });
};
console.log("content.ts", "loaded");
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if (message.action === "toggleSwitch") start();
});
start();
const config = {
    matches: [
        "https://meet.google.com/*"
    ],
    all_frames: true
};
// @ts-ignore
window.huhai = updateRecords;

},{"google-meeting-captions-resolver":"hkR8K","~utils/get-is-extension-enabled":"3gYs1","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hkR8K":[function(require,module,exports) {
function $parcel$defineInteropFlag(a) {
    Object.defineProperty(a, "__esModule", {
        value: true,
        configurable: true
    });
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$defineInteropFlag(module.exports);
$parcel$export(module.exports, "getCaptions", ()=>$882b6d93070905b3$export$e6f842301282c7f2);
$parcel$export(module.exports, "default", ()=>$882b6d93070905b3$export$2e2bcd8739ae039);
const $3307b9ff306c97ee$export$9cc74cffd28a9d02 = ".uYs2ee";
const $899d75221b921f73$var$debounce = (fn, delay)=>{
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        }, delay);
    };
};
var $899d75221b921f73$export$2e2bcd8739ae039 = $899d75221b921f73$var$debounce;
const $2266d2c6dd11209a$var$getCaptionsContainer = ()=>document.querySelector($3307b9ff306c97ee$export$9cc74cffd28a9d02);
const $2266d2c6dd11209a$var$getWhoIsSpeaking = ()=>$2266d2c6dd11209a$var$getCaptionsContainer().childNodes?.[0]?.childNodes[0]?.textContent;
const $2266d2c6dd11209a$var$getCaptionsTextContainer = ()=>$2266d2c6dd11209a$var$getCaptionsContainer().childNodes?.[0]?.childNodes[1];
const $2266d2c6dd11209a$var$getSpeakContent = ()=>$2266d2c6dd11209a$var$getCaptionsContainer().childNodes?.[0]?.childNodes[1]?.textContent;
let $2266d2c6dd11209a$var$whoIsSpeaking = "";
const $2266d2c6dd11209a$var$sessionIdSpanHash = {};
const $2266d2c6dd11209a$var$sessionInfo = {
    sessionId: "",
    sessionIndex: 0
};
const $2266d2c6dd11209a$var$getAllSpan = ()=>{
    return Array.prototype.slice.call($2266d2c6dd11209a$var$getCaptionsTextContainer().querySelectorAll("span"));
};
const $2266d2c6dd11209a$var$addSpanTag = (sessionId)=>{
    $2266d2c6dd11209a$var$getAllSpan().forEach((span)=>{
        if (!span.hasAttribute("data-session-id")) {
            span.setAttribute("data-session-id", sessionId);
            span.setAttribute("data-session-index", String($2266d2c6dd11209a$var$sessionInfo.sessionIndex++));
        }
    });
};
const $2266d2c6dd11209a$var$captureCaptions = ()=>{
    $2266d2c6dd11209a$var$getAllSpan().forEach((span)=>{
        const sessionId = span.getAttribute("data-session-id");
        const isIgnored = span.getAttribute("data-ignored");
        const sessionIndex = span.getAttribute("data-session-index");
        if (isIgnored) return;
        if ($2266d2c6dd11209a$var$sessionIdSpanHash[sessionId]) $2266d2c6dd11209a$var$sessionIdSpanHash[sessionId][sessionIndex] = span.textContent;
        else {
            $2266d2c6dd11209a$var$sessionIdSpanHash[sessionId] = [];
            $2266d2c6dd11209a$var$sessionIdSpanHash[sessionId][sessionIndex] = span.textContent;
        }
    });
};
const $2266d2c6dd11209a$var$getSessionSpeakContent = (sessionId)=>{
    const texts = $2266d2c6dd11209a$var$sessionIdSpanHash[sessionId].join(" ");
    return texts;
};
const $2266d2c6dd11209a$var$markSpanShouldBeIgnored = ()=>{
    console.log("markSpanShouldBeIgnored");
    let moveIndexTo = null;
    const currentSessionCaptions = $2266d2c6dd11209a$var$getSessionSpeakContent($2266d2c6dd11209a$var$sessionInfo.sessionId);
    const allSpanArr = $2266d2c6dd11209a$var$getAllSpan();
    // @ts-ignore
    allSpanArr.forEach((span, index)=>{
        const texts = allSpanArr.slice(0, index + 1).map((span)=>span.textContent).join(" ");
        if (currentSessionCaptions.indexOf(texts) !== -1) moveIndexTo = index;
    });
    console.log("moveIndexTo", moveIndexTo);
    if (moveIndexTo !== null) allSpanArr.forEach((span, index)=>{
        if (index <= moveIndexTo) span.setAttribute("data-ignored", "true");
    });
};
const $2266d2c6dd11209a$var$mutationCallback = (receiver)=>{
    console.warn("mutation observed");
    const speakContent = $2266d2c6dd11209a$var$getSpeakContent();
    const isNewOneSpeaking = $2266d2c6dd11209a$var$getWhoIsSpeaking() !== $2266d2c6dd11209a$var$whoIsSpeaking;
    $2266d2c6dd11209a$var$whoIsSpeaking = $2266d2c6dd11209a$var$getWhoIsSpeaking();
    if (!speakContent) return;
    if (isNewOneSpeaking) {
        $2266d2c6dd11209a$var$sessionInfo.sessionId = String(new Date().getTime()); // reset session id
        $2266d2c6dd11209a$var$sessionInfo.sessionIndex = 0; // reset session index
        $2266d2c6dd11209a$var$sessionIdSpanHash[$2266d2c6dd11209a$var$sessionInfo.sessionId] = [];
    }
    // const currentSessionCaptions = getSessionSpeakContent(sessionInfo.sessionId);
    // // \u68c0\u67e5span\u662f\u5426\u9700\u8981\u5ffd\u7565
    // const isAllSpanDontHaveSessionId = getAllSpan().every(span => !span.hasAttribute('data-session-id'));
    // console.log('isAllSpanDontHaveSessionId', isAllSpanDontHaveSessionId)
    //
    $2266d2c6dd11209a$var$markSpanShouldBeIgnored();
    $2266d2c6dd11209a$var$addSpanTag($2266d2c6dd11209a$var$sessionInfo.sessionId);
    $2266d2c6dd11209a$var$captureCaptions();
    receiver({
        session: $2266d2c6dd11209a$var$sessionInfo.sessionId,
        activeSpeaker: $2266d2c6dd11209a$var$whoIsSpeaking,
        talkContent: $2266d2c6dd11209a$var$getSessionSpeakContent($2266d2c6dd11209a$var$sessionInfo.sessionId)
    });
};
var $2266d2c6dd11209a$export$2e2bcd8739ae039 = $899d75221b921f73$export$2e2bcd8739ae039($2266d2c6dd11209a$var$mutationCallback, 300);
/**
 * Waits for the target element to be available and starts observing it for mutations.
 * @param {captionsReceiver} receiver - The function to call when captions are received.
 */ const $882b6d93070905b3$var$waitForObserving = (receiver)=>{
    const targetElement = document.querySelector($3307b9ff306c97ee$export$9cc74cffd28a9d02);
    if (targetElement) {
        const observer = new MutationObserver(()=>{
            console.log("mutation observed");
            $2266d2c6dd11209a$export$2e2bcd8739ae039(receiver);
        });
        observer.observe(targetElement, {
            childList: true,
            subtree: true,
            characterData: true
        });
    } else setTimeout(()=>{
        $882b6d93070905b3$var$waitForObserving(receiver);
    }, 1000);
};
const $882b6d93070905b3$export$e6f842301282c7f2 = (cls = $3307b9ff306c97ee$export$9cc74cffd28a9d02, receiver)=>{
    const readyGetCaptions = ()=>{
        window.requestAnimationFrame(()=>{
            if (document.readyState === "complete") {
                console.log("document complete");
                $882b6d93070905b3$var$waitForObserving(receiver);
            } else readyGetCaptions();
        });
    };
    readyGetCaptions();
};
var $882b6d93070905b3$export$2e2bcd8739ae039 = $882b6d93070905b3$export$e6f842301282c7f2;

},{}],"3gYs1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getIsExtensionEnabled = ()=>{
    return new Promise((resolve, reject)=>{
        chrome.storage.sync.get([
            "isExtensionEnabled"
        ], (result)=>{
            resolve(!!result.isExtensionEnabled);
        });
    });
};
exports.default = getIsExtensionEnabled;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["lU4Oe","71ecL"], "71ecL", "parcelRequire044e")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sZUFBZSxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0zMWYyZDY5ODhhYmMyZWYyLmpzIiwiY29udGVudC50cyIsIm5vZGVfbW9kdWxlcy9nb29nbGUtbWVldGluZy1jYXB0aW9ucy1yZXNvbHZlci9kaXN0L21haW4uanMiLCJub2RlX21vZHVsZXMvZ29vZ2xlLW1lZXRpbmctY2FwdGlvbnMtcmVzb2x2ZXIvZGlzdC9zcmMvaW5kZXgudHMiLCJub2RlX21vZHVsZXMvZ29vZ2xlLW1lZXRpbmctY2FwdGlvbnMtcmVzb2x2ZXIvZGlzdC9zcmMvY29uc3RhbnQudHMiLCJub2RlX21vZHVsZXMvZ29vZ2xlLW1lZXRpbmctY2FwdGlvbnMtcmVzb2x2ZXIvZGlzdC9zcmMvbXV0YXRpb24tY2FsbGJhY2sudHMiLCJub2RlX21vZHVsZXMvZ29vZ2xlLW1lZXRpbmctY2FwdGlvbnMtcmVzb2x2ZXIvZGlzdC9zcmMvZGVib3VuY2UudHMiLCJ1dGlscy9nZXQtaXMtZXh0ZW5zaW9uLWVuYWJsZWQudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZD1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciB5PSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEg9bmV3IFNldChkKSxfPWU9PkguaGFzKGUpLEc9ZC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBaPV8oXCItLWRyeS1ydW5cIikscD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixxPXAoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxTPTAsYz0oLi4uZSk9PnAoKSYmdShgXFx1ezFGN0UxfSAke1MrK31gLC4uLmUpO3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzLzU3YmxvY2svV2Vic3Rvcm1Qcm9qZWN0cy9tZWV0aW5nIGFzc2lzdGFudC9jb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiMzcxNmM5NjU2NzJjYWM2YlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjQ5MjE3fTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV06dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IGdldENhcHRpb25zIGZyb20gJ2dvb2dsZS1tZWV0aW5nLWNhcHRpb25zLXJlc29sdmVyJztcbmltcG9ydCB0eXBlIHsgUGxhc21vQ1NDb25maWcgfSBmcm9tIFwicGxhc21vXCJcbmltcG9ydCB0eXBlIHtDYXB0aW9uc30gZnJvbSBcIn5ub2RlX21vZHVsZXMvZ29vZ2xlLW1lZXRpbmctY2FwdGlvbnMtcmVzb2x2ZXJcIjtcbmltcG9ydCBnZXRJc0V4dGVuc2lvbkVuYWJsZWQgZnJvbSAnfnV0aWxzL2dldC1pcy1leHRlbnNpb24tZW5hYmxlZCc7XG5sZXQgaXNFeHRlbnNpb25FbmFibGVkID0gZmFsc2U7XG5cbmNvbnN0IHN0b3JlSW50b0Nocm9tZVN0b3JhZ2UgPSAocmVjb3JkczogQ2FwdGlvbnNbXSkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7ICdyZWNvcmRlZENvbnRlbnRzJzogcmVjb3JkcyB9LCAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb250ZW50VXBkYXRlZCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgdXBkYXRlUmVjb3JkcyA9IChpbmNvbWluZ0RhdGE6IENhcHRpb25zKSA9PiB7XG4gICAgaWYgKCFpc0V4dGVuc2lvbkVuYWJsZWQpIHtyZXR1cm59XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCdyZWNvcmRlZENvbnRlbnRzJywgKHsgcmVjb3JkZWRDb250ZW50cyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSByZWNvcmRlZENvbnRlbnRzIHx8IFtdO1xuICAgICAgICBjb25zdCBjbG9uZWRSZWNvcmRzID0gWy4uLnJlY29yZHNdO1xuICAgICAgICBjb25zdCBtYXRjaGluZ1JlY29yZCA9IGNsb25lZFJlY29yZHMuZmluZChpdGVtID0+IGl0ZW0uc2Vzc2lvbiA9PT0gaW5jb21pbmdEYXRhLnNlc3Npb24pO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ1JlY29yZCkge1xuICAgICAgICAgICAgbWF0Y2hpbmdSZWNvcmQudGFsa0NvbnRlbnQgPSBpbmNvbWluZ0RhdGEudGFsa0NvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9uZWRSZWNvcmRzLnB1c2goeyAuLi5pbmNvbWluZ0RhdGEsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlSW50b0Nocm9tZVN0b3JhZ2UoY2xvbmVkUmVjb3Jkcyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBnZXRJc0V4dGVuc2lvbkVuYWJsZWQoKS50aGVuKChlbmFibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlzRXh0ZW5zaW9uRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgICAgICBnZXRDYXB0aW9ucyh1bmRlZmluZWQsICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhcHRpb25zJywgdik7XG4gICAgICAgICAgICAgICAgdXBkYXRlUmVjb3Jkcyh2KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zb2xlLmxvZygnY29udGVudC50cycsICdsb2FkZWQnKVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3RvZ2dsZVN3aXRjaCcpIHtcbiAgICAgICAgc3RhcnQoKVxuICAgIH1cbn0pO1xuc3RhcnQoKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XG4gICAgbWF0Y2hlczogW1wiaHR0cHM6Ly9tZWV0Lmdvb2dsZS5jb20vKlwiXSxcbiAgICBhbGxfZnJhbWVzOiB0cnVlXG59XG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy5odWhhaSA9IHVwZGF0ZVJlY29yZHNcbiIsIlxuZnVuY3Rpb24gJHBhcmNlbCRkZWZpbmVJbnRlcm9wRmxhZyhhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uICRwYXJjZWwkZXhwb3J0KGUsIG4sIHYsIHMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIG4sIHtnZXQ6IHYsIHNldDogcywgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSk7XG59XG5cbiRwYXJjZWwkZGVmaW5lSW50ZXJvcEZsYWcobW9kdWxlLmV4cG9ydHMpO1xuXG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJnZXRDYXB0aW9uc1wiLCAoKSA9PiAkODgyYjZkOTMwNzA5MDViMyRleHBvcnQkZTZmODQyMzAxMjgyYzdmMik7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJkZWZhdWx0XCIsICgpID0+ICQ4ODJiNmQ5MzA3MDkwNWIzJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkpO1xuY29uc3QgJDMzMDdiOWZmMzA2Yzk3ZWUkZXhwb3J0JDljYzc0Y2ZmZDI4YTlkMDIgPSAnLnVZczJlZSc7XG5cblxuXG5jb25zdCAkODk5ZDc1MjIxYjkyMWY3MyR2YXIkZGVib3VuY2UgPSAoZm4sIGRlbGF5KT0+e1xuICAgIGxldCB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfTtcbn07XG52YXIgJDg5OWQ3NTIyMWI5MjFmNzMkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSA9ICQ4OTlkNzUyMjFiOTIxZjczJHZhciRkZWJvdW5jZTtcblxuXG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0Q2FwdGlvbnNDb250YWluZXIgPSAoKT0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigoMCwgJDMzMDdiOWZmMzA2Yzk3ZWUkZXhwb3J0JDljYzc0Y2ZmZDI4YTlkMDIpKTtcbmNvbnN0ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRXaG9Jc1NwZWFraW5nID0gKCk9PiQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRDYXB0aW9uc0NvbnRhaW5lcigpLmNoaWxkTm9kZXM/LlswXT8uY2hpbGROb2Rlc1swXT8udGV4dENvbnRlbnQ7XG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0Q2FwdGlvbnNUZXh0Q29udGFpbmVyID0gKCk9PiQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRDYXB0aW9uc0NvbnRhaW5lcigpLmNoaWxkTm9kZXM/LlswXT8uY2hpbGROb2Rlc1sxXTtcbmNvbnN0ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRTcGVha0NvbnRlbnQgPSAoKT0+JDIyNjZkMmM2ZGQxMTIwOWEkdmFyJGdldENhcHRpb25zQ29udGFpbmVyKCkuY2hpbGROb2Rlcz8uWzBdPy5jaGlsZE5vZGVzWzFdPy50ZXh0Q29udGVudDtcbmxldCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkd2hvSXNTcGVha2luZyA9ICcnO1xuY29uc3QgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHNlc3Npb25JZFNwYW5IYXNoID0ge307XG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbkluZm8gPSB7XG4gICAgc2Vzc2lvbklkOiAnJyxcbiAgICBzZXNzaW9uSW5kZXg6IDBcbn07XG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0QWxsU3BhbiA9ICgpPT57XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRDYXB0aW9uc1RleHRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJykpO1xufTtcbmNvbnN0ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRhZGRTcGFuVGFnID0gKHNlc3Npb25JZCk9PntcbiAgICAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0QWxsU3BhbigpLmZvckVhY2goKHNwYW4pPT57XG4gICAgICAgIGlmICghc3Bhbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2Vzc2lvbi1pZCcpKSB7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1zZXNzaW9uLWlkJywgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLXNlc3Npb24taW5kZXgnLCBTdHJpbmcoJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHNlc3Npb25JbmZvLnNlc3Npb25JbmRleCsrKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkY2FwdHVyZUNhcHRpb25zID0gKCk9PntcbiAgICAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0QWxsU3BhbigpLmZvckVhY2goKHNwYW4pPT57XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHNwYW4uZ2V0QXR0cmlidXRlKCdkYXRhLXNlc3Npb24taWQnKTtcbiAgICAgICAgY29uc3QgaXNJZ25vcmVkID0gc3Bhbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlZCcpO1xuICAgICAgICBjb25zdCBzZXNzaW9uSW5kZXggPSBzcGFuLmdldEF0dHJpYnV0ZSgnZGF0YS1zZXNzaW9uLWluZGV4Jyk7XG4gICAgICAgIGlmIChpc0lnbm9yZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCQyMjY2ZDJjNmRkMTEyMDlhJHZhciRzZXNzaW9uSWRTcGFuSGFzaFtzZXNzaW9uSWRdKSAkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbklkXVtzZXNzaW9uSW5kZXhdID0gc3Bhbi50ZXh0Q29udGVudDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbklkXSA9IFtdO1xuICAgICAgICAgICAgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHNlc3Npb25JZFNwYW5IYXNoW3Nlc3Npb25JZF1bc2Vzc2lvbkluZGV4XSA9IHNwYW4udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0U2Vzc2lvblNwZWFrQ29udGVudCA9IChzZXNzaW9uSWQpPT57XG4gICAgY29uc3QgdGV4dHMgPSAkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbklkXS5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gdGV4dHM7XG59O1xuY29uc3QgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJG1hcmtTcGFuU2hvdWxkQmVJZ25vcmVkID0gKCk9PntcbiAgICBjb25zb2xlLmxvZygnbWFya1NwYW5TaG91bGRCZUlnbm9yZWQnKTtcbiAgICBsZXQgbW92ZUluZGV4VG8gPSBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRTZXNzaW9uQ2FwdGlvbnMgPSAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0U2Vzc2lvblNwZWFrQ29udGVudCgkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbkluZm8uc2Vzc2lvbklkKTtcbiAgICBjb25zdCBhbGxTcGFuQXJyID0gJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJGdldEFsbFNwYW4oKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWxsU3BhbkFyci5mb3JFYWNoKChzcGFuLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgdGV4dHMgPSBhbGxTcGFuQXJyLnNsaWNlKDAsIGluZGV4ICsgMSkubWFwKChzcGFuKT0+c3Bhbi50ZXh0Q29udGVudCkuam9pbihcIiBcIik7XG4gICAgICAgIGlmIChjdXJyZW50U2Vzc2lvbkNhcHRpb25zLmluZGV4T2YodGV4dHMpICE9PSAtMSkgbW92ZUluZGV4VG8gPSBpbmRleDtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnbW92ZUluZGV4VG8nLCBtb3ZlSW5kZXhUbyk7XG4gICAgaWYgKG1vdmVJbmRleFRvICE9PSBudWxsKSBhbGxTcGFuQXJyLmZvckVhY2goKHNwYW4sIGluZGV4KT0+e1xuICAgICAgICBpZiAoaW5kZXggPD0gbW92ZUluZGV4VG8pIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWlnbm9yZWQnLCAndHJ1ZScpO1xuICAgIH0pO1xufTtcbmNvbnN0ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRtdXRhdGlvbkNhbGxiYWNrID0gKHJlY2VpdmVyKT0+e1xuICAgIGNvbnNvbGUud2FybignbXV0YXRpb24gb2JzZXJ2ZWQnKTtcbiAgICBjb25zdCBzcGVha0NvbnRlbnQgPSAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0U3BlYWtDb250ZW50KCk7XG4gICAgY29uc3QgaXNOZXdPbmVTcGVha2luZyA9ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRnZXRXaG9Jc1NwZWFraW5nKCkgIT09ICQyMjY2ZDJjNmRkMTEyMDlhJHZhciR3aG9Jc1NwZWFraW5nO1xuICAgICQyMjY2ZDJjNmRkMTEyMDlhJHZhciR3aG9Jc1NwZWFraW5nID0gJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJGdldFdob0lzU3BlYWtpbmcoKTtcbiAgICBpZiAoIXNwZWFrQ29udGVudCkgcmV0dXJuO1xuICAgIGlmIChpc05ld09uZVNwZWFraW5nKSB7XG4gICAgICAgICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRzZXNzaW9uSW5mby5zZXNzaW9uSWQgPSBTdHJpbmcobmV3IERhdGUoKS5nZXRUaW1lKCkpOyAvLyByZXNldCBzZXNzaW9uIGlkXG4gICAgICAgICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRzZXNzaW9uSW5mby5zZXNzaW9uSW5kZXggPSAwOyAvLyByZXNldCBzZXNzaW9uIGluZGV4XG4gICAgICAgICQyMjY2ZDJjNmRkMTEyMDlhJHZhciRzZXNzaW9uSWRTcGFuSGFzaFskMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbkluZm8uc2Vzc2lvbklkXSA9IFtdO1xuICAgIH1cbiAgICAvLyBjb25zdCBjdXJyZW50U2Vzc2lvbkNhcHRpb25zID0gZ2V0U2Vzc2lvblNwZWFrQ29udGVudChzZXNzaW9uSW5mby5zZXNzaW9uSWQpO1xuICAgIC8vIC8vIOajgOafpXNwYW7mmK/lkKbpnIDopoHlv73nlaVcbiAgICAvLyBjb25zdCBpc0FsbFNwYW5Eb250SGF2ZVNlc3Npb25JZCA9IGdldEFsbFNwYW4oKS5ldmVyeShzcGFuID0+ICFzcGFuLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZXNzaW9uLWlkJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpc0FsbFNwYW5Eb250SGF2ZVNlc3Npb25JZCcsIGlzQWxsU3BhbkRvbnRIYXZlU2Vzc2lvbklkKVxuICAgIC8vXG4gICAgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJG1hcmtTcGFuU2hvdWxkQmVJZ25vcmVkKCk7XG4gICAgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJGFkZFNwYW5UYWcoJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHNlc3Npb25JbmZvLnNlc3Npb25JZCk7XG4gICAgJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJGNhcHR1cmVDYXB0aW9ucygpO1xuICAgIHJlY2VpdmVyKHtcbiAgICAgICAgc2Vzc2lvbjogJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHNlc3Npb25JbmZvLnNlc3Npb25JZCxcbiAgICAgICAgYWN0aXZlU3BlYWtlcjogJDIyNjZkMmM2ZGQxMTIwOWEkdmFyJHdob0lzU3BlYWtpbmcsXG4gICAgICAgIHRhbGtDb250ZW50OiAkMjI2NmQyYzZkZDExMjA5YSR2YXIkZ2V0U2Vzc2lvblNwZWFrQ29udGVudCgkMjI2NmQyYzZkZDExMjA5YSR2YXIkc2Vzc2lvbkluZm8uc2Vzc2lvbklkKVxuICAgIH0pO1xufTtcbnZhciAkMjI2NmQyYzZkZDExMjA5YSRleHBvcnQkMmUyYmNkODczOWFlMDM5ID0gKDAsICQ4OTlkNzUyMjFiOTIxZjczJGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkpKCQyMjY2ZDJjNmRkMTEyMDlhJHZhciRtdXRhdGlvbkNhbGxiYWNrLCAzMDApO1xuXG5cbi8qKlxuICogV2FpdHMgZm9yIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBhdmFpbGFibGUgYW5kIHN0YXJ0cyBvYnNlcnZpbmcgaXQgZm9yIG11dGF0aW9ucy5cbiAqIEBwYXJhbSB7Y2FwdGlvbnNSZWNlaXZlcn0gcmVjZWl2ZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNhcHRpb25zIGFyZSByZWNlaXZlZC5cbiAqLyBjb25zdCAkODgyYjZkOTMwNzA5MDViMyR2YXIkd2FpdEZvck9ic2VydmluZyA9IChyZWNlaXZlcik9PntcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigoMCwgJDMzMDdiOWZmMzA2Yzk3ZWUkZXhwb3J0JDljYzc0Y2ZmZDI4YTlkMDIpKTtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbXV0YXRpb24gb2JzZXJ2ZWQnKTtcbiAgICAgICAgICAgICgwLCAkMjI2NmQyYzZkZDExMjA5YSRleHBvcnQkMmUyYmNkODczOWFlMDM5KShyZWNlaXZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICQ4ODJiNmQ5MzA3MDkwNWIzJHZhciR3YWl0Rm9yT2JzZXJ2aW5nKHJlY2VpdmVyKTtcbiAgICB9LCAxMDAwKTtcbn07XG5jb25zdCAkODgyYjZkOTMwNzA5MDViMyRleHBvcnQkZTZmODQyMzAxMjgyYzdmMiA9IChjbHMgPSAoMCwgJDMzMDdiOWZmMzA2Yzk3ZWUkZXhwb3J0JDljYzc0Y2ZmZDI4YTlkMDIpLCByZWNlaXZlcik9PntcbiAgICBjb25zdCByZWFkeUdldENhcHRpb25zID0gKCk9PntcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9jdW1lbnQgY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICAkODgyYjZkOTMwNzA5MDViMyR2YXIkd2FpdEZvck9ic2VydmluZyhyZWNlaXZlcik7XG4gICAgICAgICAgICB9IGVsc2UgcmVhZHlHZXRDYXB0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJlYWR5R2V0Q2FwdGlvbnMoKTtcbn07XG52YXIgJDg4MmI2ZDkzMDcwOTA1YjMkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSA9ICQ4ODJiNmQ5MzA3MDkwNWIzJGV4cG9ydCRlNmY4NDIzMDEyODJjN2YyO1xuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCJpbXBvcnQge2dvb2dsZU1lZXRDYXB0aW9uc0NsYXNzTmFtZX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgbXV0YXRpb25DYWxsYmFjayBmcm9tICcuL211dGF0aW9uLWNhbGxiYWNrJztcblxuLyoqXG4gKiBUeXBlIGRlZmluaXRpb24gZm9yIHRoZSBjYXB0aW9ucyByZWNlaXZlciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9ucyB7XG4gICAgc2Vzc2lvbjogc3RyaW5nO1xuICAgIGFjdGl2ZVNwZWFrZXI6IHN0cmluZztcbiAgICB0YWxrQ29udGVudDogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgY2FwdGlvbnNSZWNlaXZlciA9ICh2OiBDYXB0aW9ucykgPT4gdm9pZDtcbi8qKlxuICogVHlwZSBkZWZpbml0aW9uIGZvciB0aGUgR2V0Q2FwdGlvbnNJbnRlcmZhY2UgZnVuY3Rpb24uXG4gKiBAdHlwZWRlZiB7RnVuY3Rpb259IEdldENhcHRpb25zSW50ZXJmYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xzIC0gVGhlIGNsYXNzIG5hbWUgdG8gb2JzZXJ2ZS5cbiAqIEBwYXJhbSB7Y2FwdGlvbnNSZWNlaXZlcn0gcmVjZWl2ZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNhcHRpb25zIGFyZSByZWNlaXZlZC5cbiAqL1xudHlwZSBHZXRDYXB0aW9uc0ludGVyZmFjZSA9IChjbHM6IHN0cmluZywgcmVjZWl2ZXI6IGNhcHRpb25zUmVjZWl2ZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogV2FpdHMgZm9yIHRoZSB0YXJnZXQgZWxlbWVudCB0byBiZSBhdmFpbGFibGUgYW5kIHN0YXJ0cyBvYnNlcnZpbmcgaXQgZm9yIG11dGF0aW9ucy5cbiAqIEBwYXJhbSB7Y2FwdGlvbnNSZWNlaXZlcn0gcmVjZWl2ZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNhcHRpb25zIGFyZSByZWNlaXZlZC5cbiAqL1xuY29uc3Qgd2FpdEZvck9ic2VydmluZyA9IChyZWNlaXZlcjogY2FwdGlvbnNSZWNlaXZlcikgPT4ge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdvb2dsZU1lZXRDYXB0aW9uc0NsYXNzTmFtZSk7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbXV0YXRpb24gb2JzZXJ2ZWQnKTtcbiAgICAgICAgICAgIG11dGF0aW9uQ2FsbGJhY2socmVjZWl2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbGVtZW50LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt3YWl0Rm9yT2JzZXJ2aW5nKHJlY2VpdmVyKX0sIDEwMDApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUeXBlIGRlZmluaXRpb24gZm9yIHRoZSBHZXRDYXB0aW9uc0ludGVyZmFjZSBmdW5jdGlvbi5cbiAqIEB0eXBlZGVmIHtGdW5jdGlvbn0gR2V0Q2FwdGlvbnNJbnRlcmZhY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbHMgLSBUaGUgY2xhc3MgbmFtZSB0byBvYnNlcnZlLlxuICogQHBhcmFtIHtjYXB0aW9uc1JlY2VpdmVyfSByZWNlaXZlciAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2FwdGlvbnMgYXJlIHJlY2VpdmVkLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2FwdGlvbnMgOiBHZXRDYXB0aW9uc0ludGVyZmFjZSA9IChjbHMgPSBnb29nbGVNZWV0Q2FwdGlvbnNDbGFzc05hbWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgY29uc3QgcmVhZHlHZXRDYXB0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb2N1bWVudCBjb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIHdhaXRGb3JPYnNlcnZpbmcocmVjZWl2ZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWFkeUdldENhcHRpb25zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVhZHlHZXRDYXB0aW9ucygpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhcHRpb25zO1xuIiwiZXhwb3J0IGNvbnN0IGdvb2dsZU1lZXRDYXB0aW9uc0NsYXNzTmFtZSA9ICcudVlzMmVlJztcbiIsImltcG9ydCB7Z29vZ2xlTWVldENhcHRpb25zQ2xhc3NOYW1lfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Y2FwdGlvbnNSZWNlaXZlcn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL2RlYm91bmNlJztcblxuY29uc3QgZ2V0Q2FwdGlvbnNDb250YWluZXIgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdvb2dsZU1lZXRDYXB0aW9uc0NsYXNzTmFtZSk7XG5jb25zdCBnZXRXaG9Jc1NwZWFraW5nID0gKCkgPT4gZ2V0Q2FwdGlvbnNDb250YWluZXIoKS5jaGlsZE5vZGVzPy5bMF0/LmNoaWxkTm9kZXNbMF0/LnRleHRDb250ZW50O1xuY29uc3QgZ2V0Q2FwdGlvbnNUZXh0Q29udGFpbmVyID0gKCkgPT4gZ2V0Q2FwdGlvbnNDb250YWluZXIoKS5jaGlsZE5vZGVzPy5bMF0/LmNoaWxkTm9kZXNbMV0gYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBnZXRTcGVha0NvbnRlbnQgPSAoKSA9PiBnZXRDYXB0aW9uc0NvbnRhaW5lcigpLmNoaWxkTm9kZXM/LlswXT8uY2hpbGROb2Rlc1sxXT8udGV4dENvbnRlbnQ7XG5cbmxldCB3aG9Jc1NwZWFraW5nID0gJyc7XG5jb25zdCBzZXNzaW9uSWRTcGFuSGFzaD0ge307XG5jb25zdCBzZXNzaW9uSW5mbyA9IHtcbiAgICBzZXNzaW9uSWQ6ICcnLFxuICAgIHNlc3Npb25JbmRleDogMFxufVxuXG5jb25zdCBnZXRBbGxTcGFuID0gKCk6IEhUTUxTcGFuRWxlbWVudFtdID0+IHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZ2V0Q2FwdGlvbnNUZXh0Q29udGFpbmVyKCkucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpKTtcbn07XG5jb25zdCBhZGRTcGFuVGFnID0gKHNlc3Npb25JZCkgPT4ge1xuICAgIGdldEFsbFNwYW4oKS5mb3JFYWNoKHNwYW4gPT4ge1xuICAgICAgICBpZiAoIXNwYW4uaGFzQXR0cmlidXRlKCdkYXRhLXNlc3Npb24taWQnKSkge1xuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Vzc2lvbi1pZCcsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS1zZXNzaW9uLWluZGV4JywgU3RyaW5nKHNlc3Npb25JbmZvLnNlc3Npb25JbmRleCsrKSlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBjYXB0dXJlQ2FwdGlvbnMgPSAoKSA9PiB7XG4gICAgZ2V0QWxsU3BhbigpLmZvckVhY2goc3BhbiA9PiB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHNwYW4uZ2V0QXR0cmlidXRlKCdkYXRhLXNlc3Npb24taWQnKTtcbiAgICAgICAgY29uc3QgaXNJZ25vcmVkID0gc3Bhbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlZCcpO1xuICAgICAgICBjb25zdCBzZXNzaW9uSW5kZXggPSBzcGFuLmdldEF0dHJpYnV0ZSgnZGF0YS1zZXNzaW9uLWluZGV4Jyk7XG4gICAgICAgIGlmIChpc0lnbm9yZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbklkXSkge1xuICAgICAgICAgICAgc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbklkXVtzZXNzaW9uSW5kZXhdID0gc3Bhbi50ZXh0Q29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25JZFNwYW5IYXNoW3Nlc3Npb25JZF0gPSBbXTtcbiAgICAgICAgICAgIHNlc3Npb25JZFNwYW5IYXNoW3Nlc3Npb25JZF1bc2Vzc2lvbkluZGV4XSA9IHNwYW4udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmNvbnN0IGdldFNlc3Npb25TcGVha0NvbnRlbnQgPSAoc2Vzc2lvbklkKSA9PiB7XG4gICAgY29uc3QgdGV4dHMgPSBzZXNzaW9uSWRTcGFuSGFzaFtzZXNzaW9uSWRdLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiB0ZXh0cztcbn07XG5cbmNvbnN0IG1hcmtTcGFuU2hvdWxkQmVJZ25vcmVkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtYXJrU3BhblNob3VsZEJlSWdub3JlZCcpXG4gICAgIGxldCBtb3ZlSW5kZXhUbyA9IG51bGw7XG4gICAgY29uc3QgY3VycmVudFNlc3Npb25DYXB0aW9ucyA9IGdldFNlc3Npb25TcGVha0NvbnRlbnQoc2Vzc2lvbkluZm8uc2Vzc2lvbklkKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgYWxsU3BhbkFyciA9IGdldEFsbFNwYW4oKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWxsU3BhbkFyci5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0cyA9IGFsbFNwYW5BcnIuc2xpY2UoMCwgaW5kZXggKyAxKS5tYXAoc3BhbiA9PiBzcGFuLnRleHRDb250ZW50KS5qb2luKFwiIFwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnRTZXNzaW9uQ2FwdGlvbnMuaW5kZXhPZih0ZXh0cykgIT09IC0xKSB7XG4gICAgICAgICAgICBtb3ZlSW5kZXhUbyA9IGluZGV4O1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnbW92ZUluZGV4VG8nLCBtb3ZlSW5kZXhUbylcbiAgICBpZiAobW92ZUluZGV4VG8gIT09IG51bGwpIHtcbiAgICAgICAgYWxsU3BhbkFyci5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDw9IG1vdmVJbmRleFRvKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWdub3JlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuY29uc3QgbXV0YXRpb25DYWxsYmFjayA9IChyZWNlaXZlcjogY2FwdGlvbnNSZWNlaXZlcikgPT4ge1xuICAgIGNvbnNvbGUud2FybignbXV0YXRpb24gb2JzZXJ2ZWQnKTtcbiAgICBjb25zdCBzcGVha0NvbnRlbnQgPSBnZXRTcGVha0NvbnRlbnQoKTtcbiAgICBjb25zdCBpc05ld09uZVNwZWFraW5nID0gZ2V0V2hvSXNTcGVha2luZygpICE9PSB3aG9Jc1NwZWFraW5nO1xuICAgIHdob0lzU3BlYWtpbmcgPSBnZXRXaG9Jc1NwZWFraW5nKCk7XG5cbiAgICBpZiAoIXNwZWFrQ29udGVudCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOZXdPbmVTcGVha2luZykge1xuICAgICAgICBzZXNzaW9uSW5mby5zZXNzaW9uSWQgPSBTdHJpbmcobmV3IERhdGUoKS5nZXRUaW1lKCkpOyAvLyByZXNldCBzZXNzaW9uIGlkXG4gICAgICAgIHNlc3Npb25JbmZvLnNlc3Npb25JbmRleCA9IDA7IC8vIHJlc2V0IHNlc3Npb24gaW5kZXhcbiAgICAgICAgc2Vzc2lvbklkU3Bhbkhhc2hbc2Vzc2lvbkluZm8uc2Vzc2lvbklkXSA9IFtdO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGN1cnJlbnRTZXNzaW9uQ2FwdGlvbnMgPSBnZXRTZXNzaW9uU3BlYWtDb250ZW50KHNlc3Npb25JbmZvLnNlc3Npb25JZCk7XG4gICAgLy8gLy8g5qOA5p+lc3BhbuaYr+WQpumcgOimgeW/veeVpVxuICAgIC8vIGNvbnN0IGlzQWxsU3BhbkRvbnRIYXZlU2Vzc2lvbklkID0gZ2V0QWxsU3BhbigpLmV2ZXJ5KHNwYW4gPT4gIXNwYW4uaGFzQXR0cmlidXRlKCdkYXRhLXNlc3Npb24taWQnKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU3BhbkRvbnRIYXZlU2Vzc2lvbklkJywgaXNBbGxTcGFuRG9udEhhdmVTZXNzaW9uSWQpXG4gICAgLy9cbiAgICBtYXJrU3BhblNob3VsZEJlSWdub3JlZCgpO1xuXG4gICAgYWRkU3BhblRhZyhzZXNzaW9uSW5mby5zZXNzaW9uSWQpXG4gICAgY2FwdHVyZUNhcHRpb25zKCk7XG5cbiAgICByZWNlaXZlcih7XG4gICAgICAgIHNlc3Npb246IHNlc3Npb25JbmZvLnNlc3Npb25JZCxcbiAgICAgICAgYWN0aXZlU3BlYWtlcjogd2hvSXNTcGVha2luZyxcbiAgICAgICAgdGFsa0NvbnRlbnQ6IGdldFNlc3Npb25TcGVha0NvbnRlbnQoc2Vzc2lvbkluZm8uc2Vzc2lvbklkKVxuICAgIH0pfTtcblxuZXhwb3J0IGRlZmF1bHQgZGVib3VuY2UobXV0YXRpb25DYWxsYmFjaywgMzAwKTtcbiIsImNvbnN0IGRlYm91bmNlID0gKGZuLCBkZWxheSkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVib3VuY2U7XG4iLCJjb25zdCBnZXRJc0V4dGVuc2lvbkVuYWJsZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydpc0V4dGVuc2lvbkVuYWJsZWQnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXNvbHZlKCEhcmVzdWx0LmlzRXh0ZW5zaW9uRW5hYmxlZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJc0V4dGVuc2lvbkVuYWJsZWQ7XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC42NzJjYWM2Yi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);