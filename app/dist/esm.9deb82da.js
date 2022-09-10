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
})({"63I9F":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "20f830989deb82da";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9kP2j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _strikewalletMjs = require("./strikewallet.mjs");
parcelHelpers.exportAll(_strikewalletMjs, exports);

},{"./strikewallet.mjs":"jZ7mG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZ7mG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StrikeWallet", ()=>StrikeWallet
);
var _web3Js = require("@solana/web3.js");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var _uuid = require("uuid");
var Buffer = require("buffer").Buffer;
const DEFAULT_SIGNATURE_BUFFER = Buffer.alloc(_web3Js.SIGNATURE_LENGTH_IN_BYTES).fill(0);
class StrikeWallet {
    constructor(){
        this.url = 'https://wallet.strikeprotocols.com';
        this.cleanUp = ()=>{
            [
                ...this._timers
            ].forEach((t)=>this.clearTimer(t)
            );
            const wallet = this._wallet;
            if (wallet) wallet.close();
            this._wallet = null;
        };
        this.clearTimer = (timer)=>{
            this._timers = this._timers.filter((t)=>t != timer
            );
            window.clearInterval(timer);
        };
        this.instructionsToSerializableInstructions = (instructions)=>instructions.map((i)=>{
                return {
                    'programId': i.programId.toBase58(),
                    'accountMetas': i.keys.map((k)=>{
                        return {
                            address: k.pubkey.toBase58(),
                            signer: k.isSigner,
                            writable: k.isWritable
                        };
                    }),
                    'data': window.btoa(String.fromCharCode(...i.data))
                };
            })
        ;
        this.handleWalletMessage = (data)=>{
            var _a, _b, _c;
            if (data.type == "connected") {
                this._connecting = false;
                if (!data.error) {
                    this.isLoggedIn = true;
                    if ((_a = data.connected) === null || _a === void 0 ? void 0 : _a.publicKey) this._publicKey = new _web3Js.PublicKey(data.connected.publicKey);
                }
            } else if ([
                "sendTransaction",
                "sendFinalTransaction"
            ].includes(data.type)) {
                const transactionIdentifier = (_b = data.sendTransaction) === null || _b === void 0 ? void 0 : _b.identifier;
                if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
                    if (data.error) this._pendingTransactionErrors[transactionIdentifier] = {
                        message: data.error
                    };
                    else this._pendingTransactions[transactionIdentifier] = data.sendTransaction || null;
                }
            } else if (data.type == "signTransaction") {
                const transactionIdentifier = (_c = data.signTransaction) === null || _c === void 0 ? void 0 : _c.identifier;
                if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
                    if (data.error) this._pendingTransactionErrors[transactionIdentifier] = {
                        message: data.error
                    };
                    else this._pendingTransactions[transactionIdentifier] = data.signTransaction || null;
                }
            }
        };
        this.isLoggedIn = false;
        this._pendingTransactions = {};
        this._pendingTransactionErrors = {};
        this._timers = [];
        this._wallet = null;
        this._connecting = false;
        this._publicKey = null;
        window.addEventListener("message", (e)=>{
            this.handleWalletMessage(e.data);
        });
    }
    async connect(url) {
        try {
            this.url = url || this.url;
            const origin = encodeURIComponent(window.location.origin);
            const connectUrl = `${this.url}/connect?origin=${origin}`;
            this._connecting = true;
            this._wallet = window.open(connectUrl, `strike-wallet-${origin}`, "height=800,width=800,menubar=no,status=no,toolbar=no");
            if (!this._wallet) {
                this._connecting = false;
                throw new Error("Unable to connect to wallet");
            }
            this._timers.push(window.setInterval(()=>{
                if (this._wallet.closed) this.cleanUp();
                else if (this._wallet) this._wallet.postMessage({
                    type: 'heartbeat'
                }, this.url);
            }, 100));
            return new Promise((resolve, reject)=>{
                const timer = window.setInterval(()=>{
                    if (this.isLoggedIn && this._publicKey) {
                        this.clearTimer(timer);
                        resolve(this._publicKey);
                    } else if (!this.isLoggedIn && !this._connecting) {
                        this.clearTimer(timer);
                        reject(new Error("Unable to connect to Strike"));
                    }
                }, 100);
                this._timers.push(timer);
            });
        } catch (error) {
            throw error;
        }
    }
    async signTransaction(transaction) {
        this.verifyCanSignRequests([
            transaction
        ]);
        try {
            return this.signOneTransaction(transaction);
        } catch (error) {
            throw error;
        }
    }
    async signAllTransactions(transactions) {
        this.verifyCanSignRequests(transactions);
        try {
            return this.signMultipleTransactions(transactions);
        } catch (error) {
            throw error;
        }
    }
    async sendTransaction(transaction, connection, options) {
        try {
            const wallet = this._wallet;
            if (!wallet) throw new Error("Not Connected");
            const transactionIdentifier = _uuid.v4();
            this._pendingTransactions[transactionIdentifier] = null;
            const signers = options ? options.signers : undefined;
            if (signers && signers.length > 0) return new Promise((resolve, reject)=>{
                this.signOneTransaction(transaction, transactionIdentifier).then((walletTransaction)=>{
                    this._pendingTransactions[transactionIdentifier] = null;
                    (signers === null || signers === void 0 ? void 0 : signers.length) && walletTransaction.partialSign(...signers);
                    wallet.postMessage({
                        type: "sendFinalTransaction",
                        sendFinalTransaction: {
                            transactionIdentifier,
                            signaturePubkeyPairs: walletTransaction.signatures.filter((sp)=>sp.signature != null
                            ).map((sp)=>{
                                return {
                                    'pubkey': sp.publicKey.toBase58(),
                                    'signature': sp.signature.toString('base64')
                                };
                            })
                        }
                    }, this.url);
                    const timer = window.setInterval(()=>{
                        const pendingTransaction = this._pendingTransactions[transactionIdentifier];
                        const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
                        if (pendingTransaction != null || pendingTransactionError != null) {
                            this.clearTimer(timer);
                            pendingTransaction && resolve(pendingTransaction.signature);
                            pendingTransactionError && reject(pendingTransactionError);
                        }
                    }, 100);
                    this._timers.push(timer);
                }).catch((error)=>{
                    reject(error);
                    throw error;
                });
            });
            else {
                const instructions = this.instructionsToSerializableInstructions(transaction.instructions);
                return new Promise((resolve, reject)=>{
                    wallet.postMessage({
                        type: "sendTransaction",
                        sendTransaction: {
                            instructions,
                            transactionIdentifier
                        }
                    }, this.url);
                    const timer = window.setInterval(()=>{
                        const pendingTransaction = this._pendingTransactions[transactionIdentifier];
                        const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
                        if (pendingTransaction != null || pendingTransactionError != null) {
                            this.clearTimer(timer);
                            pendingTransaction && resolve(pendingTransaction.signature);
                            pendingTransactionError && reject(pendingTransactionError);
                        }
                    }, 100);
                    this._timers.push(timer);
                });
            }
        } catch (error) {
            throw error;
        }
    }
    buildTransaction(pendingTransaction) {
        let message = _web3Js.Message.from(Buffer.from(Uint8Array.from(window.atob(pendingTransaction.message), (c)=>c.charCodeAt(0)
        )));
        return _web3Js.Transaction.populate(message, Array.from({
            length: message.header.numRequiredSignatures
        }, (_v, i)=>{
            let sigPubkeyPair = pendingTransaction.signatures.find((s)=>s.pubkey == message.accountKeys[i].toBase58()
            );
            return _bs58Default.default.encode(sigPubkeyPair ? Buffer.from(Uint8Array.from(window.atob(sigPubkeyPair.signature), (c)=>c.charCodeAt(0)
            )) : DEFAULT_SIGNATURE_BUFFER);
        }));
    }
    verifyCanSignRequests(transactions) {
        transactions.forEach((transaction)=>{
            if (transaction.signatures.some((s)=>s.signature != null
            )) throw new Error("Strike does not support this signing mode");
        });
    }
    signOneTransaction(transaction, transactionIdentifier = _uuid.v4()) {
        const wallet = this._wallet;
        if (!wallet) throw new Error("Not Connected");
        const instructions = this.instructionsToSerializableInstructions(transaction.instructions);
        this._pendingTransactions[transactionIdentifier] = null;
        return new Promise((resolve, reject)=>{
            wallet.postMessage({
                type: "signTransaction",
                signTransaction: {
                    instructions,
                    transactionIdentifier
                }
            }, this.url);
            const timer = window.setInterval(()=>{
                const pendingTransaction = this._pendingTransactions[transactionIdentifier];
                const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier];
                if (pendingTransaction != null || pendingTransactionError != null) {
                    this.clearTimer(timer);
                    pendingTransaction && resolve(this.buildTransaction(pendingTransaction));
                    pendingTransactionError && reject(pendingTransactionError);
                }
            }, 100);
            this._timers.push(timer);
        });
    }
    signMultipleTransactions(transactions) {
        const wallet = this._wallet;
        if (!wallet) throw new Error("Not Connected");
        const serializedTransactions = transactions.map((t)=>{
            return {
                instructions: this.instructionsToSerializableInstructions(t.instructions),
                transactionIdentifier: _uuid.v4()
            };
        });
        const transactionIdentifiers = serializedTransactions.map((t)=>t.transactionIdentifier
        );
        transactionIdentifiers.forEach((transactionIdentifier)=>this._pendingTransactions[transactionIdentifier] = null
        );
        return new Promise((resolve, reject)=>{
            wallet.postMessage({
                type: "signAllTransactions",
                signAllTransactions: {
                    transactions: serializedTransactions
                }
            }, this.url);
            const timer = window.setInterval(()=>{
                const pendingTransactions = transactionIdentifiers.map((txId)=>this._pendingTransactions[txId]
                );
                const pendingTransactionErrors = transactionIdentifiers.map((txId)=>this._pendingTransactionErrors[txId]
                );
                if (pendingTransactions.every((t)=>t != null
                )) {
                    this.clearTimer(timer);
                    resolve(pendingTransactions.map((pt)=>this.buildTransaction(pt)
                    ));
                } else if (pendingTransactionErrors.some((e)=>e != null
                )) {
                    this.clearTimer(timer);
                    reject(pendingTransactionErrors.find((e)=>e != null
                    ));
                }
            }, 100);
            this._timers.push(timer);
        });
    }
}

},{"@solana/web3.js":"5JBKN","bs58":"4ji3p","uuid":"j4KJi","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["63I9F"], null, "parcelRequire1c8f")

//# sourceMappingURL=esm.9deb82da.js.map
