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
})({"jBEZU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f6be233fdfea45ba";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jOaj5":[function(require,module,exports) {
// 산술(Arithmetic)
/*
console.log(1 + 2)  // 3
console.log(5 - 7)  // -2
console.log(3 * 4)  // 12
console.log(10 / 2) // 5
console.log(7 % 5)  // 2

// 짝수 판별기 함수 예시
function isEven(num) {
    return num % 2 === 0
}
*/ /* ------------------ */ // 할당(Assignment)
// const a = 3
// a = a + 2 const의 경우 값의 재할당이 불가능
/*
let a = 3
a %= 2 // 2로 나눈 나머지 저장

let b = 3
// b = b + 2 아래 식과 동일한 효과
b += 2

console.log(a) // 1
console.log(b) // 5
*/ /* ------------------ */ // 증감(Increment & Decrement)
// 전위 및 후위 연산자 ++ --
/*
let a = 3

console.log(a++) // 3 (출력 후 증가)
console.log(a)   // 4
console.log(++a) // 5 (출력하기 전 증가)
console.log(a--) // 5 (출력 후 감소)
console.log(a)   // 4
console.log(--a) // 3 (출력하기 전 감소)
*/ /* ------------------ */ // 부정(Negation) -> !
// 부정 연산자는 항상 boolean 데이터로 출력된다.
// truthy & falsy에 해당하는 모든 데이터에 사용할 수 있으며, 출력은 boolean으로 나온다.
/*
console.log(true)   // true
console.log(!true)  // false
console.log(!false) // true

console.log(!0)     // falsy -> true 출력
console.log(!!0)    // falsy -> true -> false 출력
console.log(!undefined)  // falsy -> true 출력
console.log(!NaN)   // falsy -> true 출력
console.log(!null)  // falsy -> true 출력
console.log(!'')    // falsy -> true 출력

console.log(!{})    // truthy -> false 출력
console.log(![])    // truthy -> false 출력
*/ /* ------------------ */ // 비교(Comparison)
/*
const a = 1
const b = 3

// 동등연산자(형 변환이 발생함)
console.log(a == b) // false

// 부등연산자(형 변환이 발생함), 동등하지 않을 경우 true 출력
console.log(a != b) // true

// 일치연산자(형 변환 발생 x!)
console.log(a === b) // false

// 불일치연산자
console.log(a !== b) // true

// 대소 비교
console.log(a > b) // false

// 대소 비교 - 크거나 같음
console.log(a >= b) // false
*/ /* ------------------ */ // 논리(Logical)
/*
const a = true
const b = false

// AND 연산자
if (a && b) {
    console.log('모두가 참이어야 출력!') // 츨력 x
}

// OR 연산자
if (a || b) {
    console.log('하나 이상이 참!') // 출력됨
}
*/ /*
// AND 연산자
// && 연산자의 경우, 왼쪽에서부터 가장 처음 만나는 거짓 데이터를 반환한다는 특징이 존재한다.
// && 연산자는 왼쪽에서 오른쪽으로 읽어나가는데 거짓 데이터를 만날경우 해당 데이터를 바로 반환한다.
// 만약 모두다 참일 경우 제일 마지막에 위치한 데이터가 반환된다는 특징이 있다.
console.log(true && false) // false
console.log(1 && 0)        // 0 출력, 좌우에 있는 피연산자가 반환될 수 있다는 점 유의!
console.log(1 && 2 && 0)   // 0 출력, 1과 2는 참이고 제일 먼저 만나는 거짓 데이터가 0이므로 0이 출력된다.
console.log(1 && 0 && 2)   // 0 출력, 1이후 만나는 0이 제일 먼저 만나는 거짓 데이터이므로 0이 출력된다.
console.log('A' && 'B' && '')  // 마지막에 만나는 빈 문자열이 거짓 데이터 이므로 빈 문자열이 출력된다.
console.log('A' && 'B' && 'C') // 모두 참이어서 지나가다가 마지막 데이터를 만나면 그 데이터를 반환한다. C 출력
*/ // OR 연산자
// || 연산자의 경우, 왼쪽에서부터 가장 처음 만나는 참 데이터를 반환한다는 특징이 존재한다.
// || 연산자는 왼쪽에서 오른쪽으로 읽어나가는데 참 데이터를 만날경우 해당 데이터를 바로 반환한다.
/*
console.log(true || false) // true
console.log(0 || 1)        // 1
console.log(false || 0 || 1)   // 1
console.log(false || 0 || {})  // {} 
console.log(false || [] || null)  // [] 
console.log(function () {} || undefined || '') // f () {}
console.log(false || 0 || NaN) // NaN 반환, 모두 거짓일 경우 마지막 데이터 반환
*/ /* ------------------ */ // Nullish 병합(Nullish Coalescing)
/*
const n = 0

// OR 연산자를 사용한 경우
// 거짓 데이터 기준
const num1 = n || 7
console.log(num1) // 7

// Nullish 병합 연산자를 사용한 경우
// null, undefined 데이터를 제외하고(건너뛰고) 만나는 모든 거짓 데이터를 반환한다.
// null, undefined를 제외한 거짓 데이터 기준
const num2 = n ?? 7
console.log(num2) // 0

console.log(null ?? 1)         // 1
console.log(undefined ?? 2)    // 2
console.log(null ?? undefined) // undefined(마지막 반환)
console.log(null ?? 1 ?? 2)    // 1
console.log(false ?? 1 ?? 2)   // false
console.log(0 ?? 1 ?? 2)       // 0
*/ // 삼항(Ternary)
/*
const a = 1

if (a < 2) {
    console.log('참!')
} else {
    console.log('거짓!')
}

// 위 코드를 간결하게 삼항연산자를 이용하여 한 줄로 작성해보자!
// (조건 ? 참일 경우 실행 : 거짓일 경우 실행) 의 구조를 지니고 있다.
console.log(a < 2 ? '참!!' : '거짓!!')

function getAlert(message) {
    return message ? message : '메시지가 존재하지 않습니다!'
}

console.log(getAlert('안녕하세용~~!')) // 참이기 때문에 message가 반환된다.
console.log(getAlert('')) // 메시지가 존재하지 않습니다 출력! ''는 거짓 데이터이기 때문
*/ /* ------------------ */ // 전개 연산자(Spread Operator)
// 배열 데이터의 대괄호를 날려주는 역할을 수행한다.
/*
const a = [1, 2, 3]
const b = [4, 5, 6]

console.log(...a)    // 데이터를 쭉 펼쳐서 전개함!
console.log(1, 2, 3) // 1 2 3 출력, 위와 동일함

// 병합 연산자
const c = a.concat(b) // a와 b를 하나로 합침
console.log(c)        // [1, 2, 3, 4, 5, 6]

const d = [...a, ...b]
console.log(d) // [1, 2, 3, 4, 5, 6] 각 배열의 대괄호를 날려버림!
*/ // 전개 연산자를 이용하여 객체 데이터에서도 중괄호를 날려줄 수 있다!
/*
const a = {x:1, y:2}
const b = {y:3, z:4}

const c = Object.assign({}, a, b) // a, b를 병합한 새로운 객체 데이터를 생성!
console.log(c) // {x: 1, y: 3, z: 4} 객체의 속성들은 고유해야 하기 때문에 하나가 사라짐.

const d = {a, b}
console.log(d) // {a: {…}, b: {…}}
console.log({...a, ...b}) // {x: 1, y: 3, z: 4} 객체의 속성들은 고유해야 하기 때문에 하나가 사라짐.
*/ /*
function fn(x, y, z) {
    console.log(x, y, z)
}

fn(1, 2, 3) // 1 2 3

const a = [1, 2, 3]
fn(a[0], a[1], a[2]) // 1 2 3
fn(...a) // 1 2 3 배열의 요소가 대괄호가 날라가며 하나씩 들어간다!
*/ /* ------------------ */ // 구조 분해 할당(Destructuring Assignment)
// 여러가지 요소를 각자 개별 변수로 손쉽게 할당하는 방법
// 배열 혹은 객체 데이터의 구조를 분해해서 구조에 맞게 각각의 변수에 데이터를 할당하는 방식!
/*
let d = 0
let e = 0
let f = 0
const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
const [a, b, c] = arr; // 위와 동일한 기능 수행
[d, e, f] = arr; // 기존에 이미 변수가 선언되어 있을 경우 이렇게만 써줘도 데이터 할당 가능!

console.log(a, b, c) // 1 2 3
console.log(d, e, f) // 1 2 3
*/ // 배열의 요소 중 나머지를 하나의 변수에 할당하고 싶을 때
/*
const arr = [1, 2, 3]

// const [a, rest] = arr
// console.log(a, rest) // 1 2 

const [a, ...rest] = arr
console.log(a, rest) // 1 [2, 3]
*/ // 원하는 obj의 속성을 따로 꺼내서 사용하고 싶음
// 배열 구조 분해 할당은 나열되어 있는 데이터의 수만큼 순서에 맞추어 구조 분해 할당을 해주어야 했음
// 객체 구조 분해 할당은 속성명이 정해져있기 때문에, 원하는 속성만 골라서 쏙 빼서 쓸 수 있다! 
/*
const obj = {
    a: 1,
    b: 2,
    c: 3
}
*/ // const a = obj.a
// const b = obj.b
// const c = obj.c
/*
const {a, b} = obj // 객체 데이터의 구조 분해 할당
const { x } = obj  // obj안에 x라는 속성은 존재하지 않기 때문에 undefined 출력!
const { z = 10 } = obj // 객체 구조 분해 할당 시 해당 값에 기본 값을 할당해줄 수 있다!
const { c = 100 } = obj

console.log(a, b)  // 1 2 만 골라내서 출력함!
console.log(x)     // undefined
console.log(z)     // 값이 지정되어 있지 않아서 undefined -> 기본값으로 10이 있으므로 10 출력
console.log(c)     // 3 출력, 기본값이 있으나 객체 구조 분해 할당 처리시 값이 존재하므로 객체의 값 할당
*/ // const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// a의 값을 a라는 변수명이 아닌 Hello라는 변수명으로 할당!
// 기본값 부여 + 새로운 변수명 할당을 동시에 사용할 수도 있다!
// const { x = 4, a : Hello, y : ten = 10 } = obj
// console.log(x, Hello, ten) // 4 1 출력
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    x: 100
};
const { c , ...rest } = obj;
console.log(c, rest) // 3 {a: 1, b: 2, d: 4, x: 100}
 /* ------------------ */ ;

},{}]},["jBEZU","jOaj5"], "jOaj5", "parcelRequire3bdf")

//# sourceMappingURL=index.dfea45ba.js.map
