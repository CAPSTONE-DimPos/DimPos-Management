const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-D-J_v-mI.js",
      "assets/scroll-area-B7PKW6Ur.js",
      "assets/category-page-B8mJRd7K.js",
      "assets/use-query-params-Dxm1M_tz.js",
      "assets/product-page-BGwW_FhG.js",
    ])
) => i.map((i) => d[i]);
var C0 = (e) => {
  throw TypeError(e);
};
var dm = (e, n, a) => n.has(e) || C0("Cannot " + a);
var Z = (e, n, a) => (
    dm(e, n, "read from private field"), a ? a.call(e) : n.get(e)
  ),
  Ke = (e, n, a) =>
    n.has(e)
      ? C0("Cannot add the same private member more than once")
      : n instanceof WeakSet
      ? n.add(e)
      : n.set(e, a),
  ke = (e, n, a, i) => (
    dm(e, n, "write to private field"), i ? i.call(e, a) : n.set(e, a), a
  ),
  Et = (e, n, a) => (dm(e, n, "access private method"), a);
var _c = (e, n, a, i) => ({
  set _(o) {
    ke(e, n, o, a);
  },
  get _() {
    return Z(e, n, i);
  },
});
function CA(e, n) {
  for (var a = 0; a < n.length; a++) {
    const i = n[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in e)) {
          const u = Object.getOwnPropertyDescriptor(i, o);
          u &&
            Object.defineProperty(
              e,
              o,
              u.get ? u : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = a(o);
    fetch(o.href, u);
  }
})();
var jP =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Kw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hm = { exports: {} },
  dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O0;
function OA() {
  if (O0) return dl;
  O0 = 1;
  var e = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function a(i, o, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      o.key !== void 0 && (c = "" + o.key),
      "key" in o)
    ) {
      u = {};
      for (var d in o) d !== "key" && (u[d] = o[d]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: e, type: i, key: c, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return (dl.Fragment = n), (dl.jsx = a), (dl.jsxs = a), dl;
}
var M0;
function MA() {
  return M0 || ((M0 = 1), (hm.exports = OA())), hm.exports;
}
var S = MA(),
  mm = { exports: {} },
  He = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0;
function NA() {
  if (N0) return He;
  N0 = 1;
  var e = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function x(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (y && O[y]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    _ = {};
  function w(O, H, ie) {
    (this.props = O),
      (this.context = H),
      (this.refs = _),
      (this.updater = ie || R);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (O, H) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, H, "setState");
    }),
    (w.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function A() {}
  A.prototype = w.prototype;
  function C(O, H, ie) {
    (this.props = O),
      (this.context = H),
      (this.refs = _),
      (this.updater = ie || R);
  }
  var N = (C.prototype = new A());
  (N.constructor = C), E(N, w.prototype), (N.isPureReactComponent = !0);
  var k = Array.isArray,
    D = { H: null, A: null, T: null, S: null, V: null },
    I = Object.prototype.hasOwnProperty;
  function Y(O, H, ie, W, le, Ce) {
    return (
      (ie = Ce.ref),
      {
        $$typeof: e,
        type: O,
        key: H,
        ref: ie !== void 0 ? ie : null,
        props: Ce,
      }
    );
  }
  function G(O, H) {
    return Y(O.type, H, void 0, void 0, void 0, O.props);
  }
  function J(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }
  function ye(O) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (ie) {
        return H[ie];
      })
    );
  }
  var be = /\/+/g;
  function oe(O, H) {
    return typeof O == "object" && O !== null && O.key != null
      ? ye("" + O.key)
      : H.toString(36);
  }
  function ge() {}
  function se(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(ge, ge)
            : ((O.status = "pending"),
              O.then(
                function (H) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = H));
                },
                function (H) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = H));
                }
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function fe(O, H, ie, W, le) {
    var Ce = typeof O;
    (Ce === "undefined" || Ce === "boolean") && (O = null);
    var de = !1;
    if (O === null) de = !0;
    else
      switch (Ce) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case e:
            case n:
              de = !0;
              break;
            case g:
              return (de = O._init), fe(de(O._payload), H, ie, W, le);
          }
      }
    if (de)
      return (
        (le = le(O)),
        (de = W === "" ? "." + oe(O, 0) : W),
        k(le)
          ? ((ie = ""),
            de != null && (ie = de.replace(be, "$&/") + "/"),
            fe(le, H, ie, "", function (Xe) {
              return Xe;
            }))
          : le != null &&
            (J(le) &&
              (le = G(
                le,
                ie +
                  (le.key == null || (O && O.key === le.key)
                    ? ""
                    : ("" + le.key).replace(be, "$&/") + "/") +
                  de
              )),
            H.push(le)),
        1
      );
    de = 0;
    var Oe = W === "" ? "." : W + ":";
    if (k(O))
      for (var ze = 0; ze < O.length; ze++)
        (W = O[ze]), (Ce = Oe + oe(W, ze)), (de += fe(W, H, ie, Ce, le));
    else if (((ze = x(O)), typeof ze == "function"))
      for (O = ze.call(O), ze = 0; !(W = O.next()).done; )
        (W = W.value), (Ce = Oe + oe(W, ze++)), (de += fe(W, H, ie, Ce, le));
    else if (Ce === "object") {
      if (typeof O.then == "function") return fe(se(O), H, ie, W, le);
      throw (
        ((H = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return de;
  }
  function j(O, H, ie) {
    if (O == null) return O;
    var W = [],
      le = 0;
    return (
      fe(O, W, "", "", function (Ce) {
        return H.call(ie, Ce, le++);
      }),
      W
    );
  }
  function Q(O) {
    if (O._status === -1) {
      var H = O._result;
      (H = H()),
        H.then(
          function (ie) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = ie));
          },
          function (ie) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = ie));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = H));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var V =
    typeof reportError == "function"
      ? reportError
      : function (O) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof O == "object" &&
                O !== null &&
                typeof O.message == "string"
                  ? String(O.message)
                  : String(O),
              error: O,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", O);
            return;
          }
          console.error(O);
        };
  function re() {}
  return (
    (He.Children = {
      map: j,
      forEach: function (O, H, ie) {
        j(
          O,
          function () {
            H.apply(this, arguments);
          },
          ie
        );
      },
      count: function (O) {
        var H = 0;
        return (
          j(O, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (O) {
        return (
          j(O, function (H) {
            return H;
          }) || []
        );
      },
      only: function (O) {
        if (!J(O))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return O;
      },
    }),
    (He.Component = w),
    (He.Fragment = a),
    (He.Profiler = o),
    (He.PureComponent = C),
    (He.StrictMode = i),
    (He.Suspense = p),
    (He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (He.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return D.H.useMemoCache(O);
      },
    }),
    (He.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (He.cloneElement = function (O, H, ie) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + "."
        );
      var W = E({}, O.props),
        le = O.key,
        Ce = void 0;
      if (H != null)
        for (de in (H.ref !== void 0 && (Ce = void 0),
        H.key !== void 0 && (le = "" + H.key),
        H))
          !I.call(H, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && H.ref === void 0) ||
            (W[de] = H[de]);
      var de = arguments.length - 2;
      if (de === 1) W.children = ie;
      else if (1 < de) {
        for (var Oe = Array(de), ze = 0; ze < de; ze++)
          Oe[ze] = arguments[ze + 2];
        W.children = Oe;
      }
      return Y(O.type, le, void 0, void 0, Ce, W);
    }),
    (He.createContext = function (O) {
      return (
        (O = {
          $$typeof: c,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: u, _context: O }),
        O
      );
    }),
    (He.createElement = function (O, H, ie) {
      var W,
        le = {},
        Ce = null;
      if (H != null)
        for (W in (H.key !== void 0 && (Ce = "" + H.key), H))
          I.call(H, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (le[W] = H[W]);
      var de = arguments.length - 2;
      if (de === 1) le.children = ie;
      else if (1 < de) {
        for (var Oe = Array(de), ze = 0; ze < de; ze++)
          Oe[ze] = arguments[ze + 2];
        le.children = Oe;
      }
      if (O && O.defaultProps)
        for (W in ((de = O.defaultProps), de))
          le[W] === void 0 && (le[W] = de[W]);
      return Y(O, Ce, void 0, void 0, null, le);
    }),
    (He.createRef = function () {
      return { current: null };
    }),
    (He.forwardRef = function (O) {
      return { $$typeof: d, render: O };
    }),
    (He.isValidElement = J),
    (He.lazy = function (O) {
      return { $$typeof: g, _payload: { _status: -1, _result: O }, _init: Q };
    }),
    (He.memo = function (O, H) {
      return { $$typeof: m, type: O, compare: H === void 0 ? null : H };
    }),
    (He.startTransition = function (O) {
      var H = D.T,
        ie = {};
      D.T = ie;
      try {
        var W = O(),
          le = D.S;
        le !== null && le(ie, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(re, V);
      } catch (Ce) {
        V(Ce);
      } finally {
        D.T = H;
      }
    }),
    (He.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (He.use = function (O) {
      return D.H.use(O);
    }),
    (He.useActionState = function (O, H, ie) {
      return D.H.useActionState(O, H, ie);
    }),
    (He.useCallback = function (O, H) {
      return D.H.useCallback(O, H);
    }),
    (He.useContext = function (O) {
      return D.H.useContext(O);
    }),
    (He.useDebugValue = function () {}),
    (He.useDeferredValue = function (O, H) {
      return D.H.useDeferredValue(O, H);
    }),
    (He.useEffect = function (O, H, ie) {
      var W = D.H;
      if (typeof ie == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(O, H);
    }),
    (He.useId = function () {
      return D.H.useId();
    }),
    (He.useImperativeHandle = function (O, H, ie) {
      return D.H.useImperativeHandle(O, H, ie);
    }),
    (He.useInsertionEffect = function (O, H) {
      return D.H.useInsertionEffect(O, H);
    }),
    (He.useLayoutEffect = function (O, H) {
      return D.H.useLayoutEffect(O, H);
    }),
    (He.useMemo = function (O, H) {
      return D.H.useMemo(O, H);
    }),
    (He.useOptimistic = function (O, H) {
      return D.H.useOptimistic(O, H);
    }),
    (He.useReducer = function (O, H, ie) {
      return D.H.useReducer(O, H, ie);
    }),
    (He.useRef = function (O) {
      return D.H.useRef(O);
    }),
    (He.useState = function (O) {
      return D.H.useState(O);
    }),
    (He.useSyncExternalStore = function (O, H, ie) {
      return D.H.useSyncExternalStore(O, H, ie);
    }),
    (He.useTransition = function () {
      return D.H.useTransition();
    }),
    (He.version = "19.1.0"),
    He
  );
}
var D0;
function Ef() {
  return D0 || ((D0 = 1), (mm.exports = NA())), mm.exports;
}
var v = Ef();
const ne = Kw(v),
  Xw = CA({ __proto__: null, default: ne }, [v]);
var pm = { exports: {} },
  hl = {},
  gm = { exports: {} },
  ym = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0;
function DA() {
  return (
    k0 ||
      ((k0 = 1),
      (function (e) {
        function n(j, Q) {
          var V = j.length;
          j.push(Q);
          e: for (; 0 < V; ) {
            var re = (V - 1) >>> 1,
              O = j[re];
            if (0 < o(O, Q)) (j[re] = Q), (j[V] = O), (V = re);
            else break e;
          }
        }
        function a(j) {
          return j.length === 0 ? null : j[0];
        }
        function i(j) {
          if (j.length === 0) return null;
          var Q = j[0],
            V = j.pop();
          if (V !== Q) {
            j[0] = V;
            e: for (var re = 0, O = j.length, H = O >>> 1; re < H; ) {
              var ie = 2 * (re + 1) - 1,
                W = j[ie],
                le = ie + 1,
                Ce = j[le];
              if (0 > o(W, V))
                le < O && 0 > o(Ce, W)
                  ? ((j[re] = Ce), (j[le] = V), (re = le))
                  : ((j[re] = W), (j[ie] = V), (re = ie));
              else if (le < O && 0 > o(Ce, V))
                (j[re] = Ce), (j[le] = V), (re = le);
              else break e;
            }
          }
          return Q;
        }
        function o(j, Q) {
          var V = j.sortIndex - Q.sortIndex;
          return V !== 0 ? V : j.id - Q.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          e.unstable_now = function () {
            return c.now() - d;
          };
        }
        var p = [],
          m = [],
          g = 1,
          y = null,
          x = 3,
          R = !1,
          E = !1,
          _ = !1,
          w = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          C = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        function k(j) {
          for (var Q = a(m); Q !== null; ) {
            if (Q.callback === null) i(m);
            else if (Q.startTime <= j)
              i(m), (Q.sortIndex = Q.expirationTime), n(p, Q);
            else break;
            Q = a(m);
          }
        }
        function D(j) {
          if (((_ = !1), k(j), !E))
            if (a(p) !== null) (E = !0), I || ((I = !0), oe());
            else {
              var Q = a(m);
              Q !== null && fe(D, Q.startTime - j);
            }
        }
        var I = !1,
          Y = -1,
          G = 5,
          J = -1;
        function ye() {
          return w ? !0 : !(e.unstable_now() - J < G);
        }
        function be() {
          if (((w = !1), I)) {
            var j = e.unstable_now();
            J = j;
            var Q = !0;
            try {
              e: {
                (E = !1), _ && ((_ = !1), C(Y), (Y = -1)), (R = !0);
                var V = x;
                try {
                  t: {
                    for (
                      k(j), y = a(p);
                      y !== null && !(y.expirationTime > j && ye());

                    ) {
                      var re = y.callback;
                      if (typeof re == "function") {
                        (y.callback = null), (x = y.priorityLevel);
                        var O = re(y.expirationTime <= j);
                        if (((j = e.unstable_now()), typeof O == "function")) {
                          (y.callback = O), k(j), (Q = !0);
                          break t;
                        }
                        y === a(p) && i(p), k(j);
                      } else i(p);
                      y = a(p);
                    }
                    if (y !== null) Q = !0;
                    else {
                      var H = a(m);
                      H !== null && fe(D, H.startTime - j), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (x = V), (R = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? oe() : (I = !1);
            }
          }
        }
        var oe;
        if (typeof N == "function")
          oe = function () {
            N(be);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            se = ge.port2;
          (ge.port1.onmessage = be),
            (oe = function () {
              se.postMessage(null);
            });
        } else
          oe = function () {
            A(be, 0);
          };
        function fe(j, Q) {
          Y = A(function () {
            j(e.unstable_now());
          }, Q);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (e.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (G = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (e.unstable_next = function (j) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = x;
            }
            var V = x;
            x = Q;
            try {
              return j();
            } finally {
              x = V;
            }
          }),
          (e.unstable_requestPaint = function () {
            w = !0;
          }),
          (e.unstable_runWithPriority = function (j, Q) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var V = x;
            x = j;
            try {
              return Q();
            } finally {
              x = V;
            }
          }),
          (e.unstable_scheduleCallback = function (j, Q, V) {
            var re = e.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? re + V : re))
                : (V = re),
              j)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = V + O),
              (j = {
                id: g++,
                callback: Q,
                priorityLevel: j,
                startTime: V,
                expirationTime: O,
                sortIndex: -1,
              }),
              V > re
                ? ((j.sortIndex = V),
                  n(m, j),
                  a(p) === null &&
                    j === a(m) &&
                    (_ ? (C(Y), (Y = -1)) : (_ = !0), fe(D, V - re)))
                : ((j.sortIndex = O),
                  n(p, j),
                  E || R || ((E = !0), I || ((I = !0), oe()))),
              j
            );
          }),
          (e.unstable_shouldYield = ye),
          (e.unstable_wrapCallback = function (j) {
            var Q = x;
            return function () {
              var V = x;
              x = Q;
              try {
                return j.apply(this, arguments);
              } finally {
                x = V;
              }
            };
          });
      })(ym)),
    ym
  );
}
var j0;
function kA() {
  return j0 || ((j0 = 1), (gm.exports = DA())), gm.exports;
}
var vm = { exports: {} },
  tn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L0;
function jA() {
  if (L0) return tn;
  L0 = 1;
  var e = Ef();
  function n(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function u(p, m, g) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (tn.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(n(299));
      return u(p, m, null, g);
    }),
    (tn.flushSync = function (p) {
      var m = c.T,
        g = i.p;
      try {
        if (((c.T = null), (i.p = 2), p)) return p();
      } finally {
        (c.T = m), (i.p = g), i.d.f();
      }
    }),
    (tn.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(p, m));
    }),
    (tn.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (tn.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          y = d(g, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? i.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: R,
            })
          : g === "script" &&
            i.d.X(p, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: R,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (tn.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = d(m.as, m.crossOrigin);
            i.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(p);
    }),
    (tn.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          y = d(g, m.crossOrigin);
        i.d.L(p, g, {
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (tn.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = d(m.as, m.crossOrigin);
          i.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (tn.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (tn.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (tn.useFormState = function (p, m, g) {
      return c.H.useFormState(p, m, g);
    }),
    (tn.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (tn.version = "19.1.0"),
    tn
  );
}
var z0;
function Qw() {
  if (z0) return vm.exports;
  z0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), (vm.exports = jA()), vm.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U0;
function LA() {
  if (U0) return hl;
  U0 = 1;
  var e = kA(),
    n = Ef(),
    a = Qw();
  function i(t) {
    var r = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        r += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var r = t,
      s = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do (r = t), (r.flags & 4098) !== 0 && (s = r.return), (t = r.return);
      while (t);
    }
    return r.tag === 3 ? s : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        (r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (u(t) !== t) throw Error(i(188));
  }
  function p(t) {
    var r = t.alternate;
    if (!r) {
      if (((r = u(t)), r === null)) throw Error(i(188));
      return r !== t ? null : t;
    }
    for (var s = t, l = r; ; ) {
      var f = s.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (((l = f.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === s) return d(f), t;
          if (h === l) return d(f), r;
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== l.return) (s = f), (l = h);
      else {
        for (var b = !1, T = f.child; T; ) {
          if (T === s) {
            (b = !0), (s = f), (l = h);
            break;
          }
          if (T === l) {
            (b = !0), (l = f), (s = h);
            break;
          }
          T = T.sibling;
        }
        if (!b) {
          for (T = h.child; T; ) {
            if (T === s) {
              (b = !0), (s = h), (l = f);
              break;
            }
            if (T === l) {
              (b = !0), (l = h), (s = f);
              break;
            }
            T = T.sibling;
          }
          if (!b) throw Error(i(189));
        }
      }
      if (s.alternate !== l) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? t : r;
  }
  function m(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((r = m(t)), r !== null)) return r;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    y = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    C = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    be = Symbol.iterator;
  function oe(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (be && t[be]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ge = Symbol.for("react.client.reference");
  function se(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ge ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case w:
        return "Profiler";
      case _:
        return "StrictMode";
      case D:
        return "Suspense";
      case I:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return "Portal";
        case N:
          return (t.displayName || "Context") + ".Provider";
        case C:
          return (t._context.displayName || "Context") + ".Consumer";
        case k:
          var r = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = r.displayName || r.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return (
            (r = t.displayName || null), r !== null ? r : se(t.type) || "Memo"
          );
        case G:
          (r = t._payload), (t = t._init);
          try {
            return se(t(r));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    j = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    re = [],
    O = -1;
  function H(t) {
    return { current: t };
  }
  function ie(t) {
    0 > O || ((t.current = re[O]), (re[O] = null), O--);
  }
  function W(t, r) {
    O++, (re[O] = t.current), (t.current = r);
  }
  var le = H(null),
    Ce = H(null),
    de = H(null),
    Oe = H(null);
  function ze(t, r) {
    switch ((W(de, r), W(Ce, t), W(le, null), r.nodeType)) {
      case 9:
      case 11:
        t = (t = r.documentElement) && (t = t.namespaceURI) ? n0(t) : 0;
        break;
      default:
        if (((t = r.tagName), (r = r.namespaceURI)))
          (r = n0(r)), (t = r0(r, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    ie(le), W(le, t);
  }
  function Xe() {
    ie(le), ie(Ce), ie(de);
  }
  function mt(t) {
    t.memoizedState !== null && W(Oe, t);
    var r = le.current,
      s = r0(r, t.type);
    r !== s && (W(Ce, t), W(le, s));
  }
  function an(t) {
    Ce.current === t && (ie(le), ie(Ce)),
      Oe.current === t && (ie(Oe), (ol._currentValue = V));
  }
  var Gt = Object.prototype.hasOwnProperty,
    bn = e.unstable_scheduleCallback,
    xn = e.unstable_cancelCallback,
    pa = e.unstable_shouldYield,
    ga = e.unstable_requestPaint,
    Ot = e.unstable_now,
    oi = e.unstable_getCurrentPriorityLevel,
    Mt = e.unstable_ImmediatePriority,
    L = e.unstable_UserBlockingPriority,
    F = e.unstable_NormalPriority,
    X = e.unstable_LowPriority,
    me = e.unstable_IdlePriority,
    he = e.log,
    ce = e.unstable_setDisableYieldValue,
    xe = null,
    je = null;
  function Ie(t) {
    if (
      (typeof he == "function" && ce(t),
      je && typeof je.setStrictMode == "function")
    )
      try {
        je.setStrictMode(xe, t);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : pr,
    wn = Math.log,
    Sn = Math.LN2;
  function pr(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((wn(t) / Sn) | 0)) | 0;
  }
  var gr = 256,
    yr = 4194304;
  function Un(t) {
    var r = t & 42;
    if (r !== 0) return r;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function vr(t, r, s) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var f = 0,
      h = t.suspendedLanes,
      b = t.pingedLanes;
    t = t.warmLanes;
    var T = l & 134217727;
    return (
      T !== 0
        ? ((l = T & ~h),
          l !== 0
            ? (f = Un(l))
            : ((b &= T),
              b !== 0
                ? (f = Un(b))
                : s || ((s = T & ~t), s !== 0 && (f = Un(s)))))
        : ((T = l & ~h),
          T !== 0
            ? (f = Un(T))
            : b !== 0
            ? (f = Un(b))
            : s || ((s = l & ~t), s !== 0 && (f = Un(s)))),
      f === 0
        ? 0
        : r !== 0 &&
          r !== f &&
          (r & h) === 0 &&
          ((h = f & -f),
          (s = r & -r),
          h >= s || (h === 32 && (s & 4194048) !== 0))
        ? r
        : f
    );
  }
  function zr(t, r) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
  }
  function ya(t, r) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return r + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wn() {
    var t = gr;
    return (gr <<= 1), (gr & 4194048) === 0 && (gr = 256), t;
  }
  function fu() {
    var t = yr;
    return (yr <<= 1), (yr & 62914560) === 0 && (yr = 4194304), t;
  }
  function yo(t) {
    for (var r = [], s = 0; 31 > s; s++) r.push(t);
    return r;
  }
  function va(t, r) {
    (t.pendingLanes |= r),
      r !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function du(t, r, s, l, f, h) {
    var b = t.pendingLanes;
    (t.pendingLanes = s),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= s),
      (t.entangledLanes &= s),
      (t.errorRecoveryDisabledLanes &= s),
      (t.shellSuspendCounter = 0);
    var T = t.entanglements,
      M = t.expirationTimes,
      B = t.hiddenUpdates;
    for (s = b & ~s; 0 < s; ) {
      var ee = 31 - nt(s),
        ae = 1 << ee;
      (T[ee] = 0), (M[ee] = -1);
      var q = B[ee];
      if (q !== null)
        for (B[ee] = null, ee = 0; ee < q.length; ee++) {
          var $ = q[ee];
          $ !== null && ($.lane &= -536870913);
        }
      s &= ~ae;
    }
    l !== 0 && Ue(t, l, 0),
      h !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(b & ~r));
  }
  function Ue(t, r, s) {
    (t.pendingLanes |= r), (t.suspendedLanes &= ~r);
    var l = 31 - nt(r);
    (t.entangledLanes |= r),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (s & 4194090));
  }
  function bt(t, r) {
    var s = (t.entangledLanes |= r);
    for (t = t.entanglements; s; ) {
      var l = 31 - nt(s),
        f = 1 << l;
      (f & r) | (t[l] & r) && (t[l] |= r), (s &= ~f);
    }
  }
  function Nt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Yt(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function li() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : S0(t.type));
  }
  function zt(t, r) {
    var s = Q.p;
    try {
      return (Q.p = t), r();
    } finally {
      Q.p = s;
    }
  }
  var xt = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + xt,
    ft = "__reactProps$" + xt,
    Ht = "__reactContainer$" + xt,
    Zi = "__reactEvents$" + xt,
    Ur = "__reactListeners$" + xt,
    qg = "__reactHandles$" + xt,
    Ig = "__reactResources$" + xt,
    vo = "__reactMarker$" + xt;
  function id(t) {
    delete t[wt], delete t[ft], delete t[Zi], delete t[Ur], delete t[qg];
  }
  function Ki(t) {
    var r = t[wt];
    if (r) return r;
    for (var s = t.parentNode; s; ) {
      if ((r = s[Ht] || s[wt])) {
        if (
          ((s = r.alternate),
          r.child !== null || (s !== null && s.child !== null))
        )
          for (t = o0(t); t !== null; ) {
            if ((s = t[wt])) return s;
            t = o0(t);
          }
        return r;
      }
      (t = s), (s = t.parentNode);
    }
    return null;
  }
  function Xi(t) {
    if ((t = t[wt] || t[Ht])) {
      var r = t.tag;
      if (r === 5 || r === 6 || r === 13 || r === 26 || r === 27 || r === 3)
        return t;
    }
    return null;
  }
  function bo(t) {
    var r = t.tag;
    if (r === 5 || r === 26 || r === 27 || r === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Qi(t) {
    var r = t[Ig];
    return (
      r ||
        (r = t[Ig] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      r
    );
  }
  function Ft(t) {
    t[vo] = !0;
  }
  var $g = new Set(),
    Gg = {};
  function ui(t, r) {
    Wi(t, r), Wi(t + "Capture", r);
  }
  function Wi(t, r) {
    for (Gg[t] = r, t = 0; t < r.length; t++) $g.add(r[t]);
  }
  var xT = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Yg = {},
    Zg = {};
  function wT(t) {
    return Gt.call(Zg, t)
      ? !0
      : Gt.call(Yg, t)
      ? !1
      : xT.test(t)
      ? (Zg[t] = !0)
      : ((Yg[t] = !0), !1);
  }
  function hu(t, r, s) {
    if (wT(r))
      if (s === null) t.removeAttribute(r);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(r);
            return;
          case "boolean":
            var l = r.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(r);
              return;
            }
        }
        t.setAttribute(r, "" + s);
      }
  }
  function mu(t, r, s) {
    if (s === null) t.removeAttribute(r);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(r);
          return;
      }
      t.setAttribute(r, "" + s);
    }
  }
  function Pr(t, r, s, l) {
    if (l === null) t.removeAttribute(s);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return;
      }
      t.setAttributeNS(r, s, "" + l);
    }
  }
  var sd, Kg;
  function Ji(t) {
    if (sd === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        (sd = (r && r[1]) || ""),
          (Kg =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      sd +
      t +
      Kg
    );
  }
  var od = !1;
  function ld(t, r) {
    if (!t || od) return "";
    od = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (r) {
              var ae = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ae.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ae, []);
                } catch ($) {
                  var q = $;
                }
                Reflect.construct(t, [], ae);
              } else {
                try {
                  ae.call();
                } catch ($) {
                  q = $;
                }
                t.call(ae.prototype);
              }
            } else {
              try {
                throw Error();
              } catch ($) {
                q = $;
              }
              (ae = t()) &&
                typeof ae.catch == "function" &&
                ae.catch(function () {});
            }
          } catch ($) {
            if ($ && q && typeof $.stack == "string") return [$.stack, q.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = l.DetermineComponentFrameRoot(),
        b = h[0],
        T = h[1];
      if (b && T) {
        var M = b.split(`
`),
          B = T.split(`
`);
        for (
          f = l = 0;
          l < M.length && !M[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; f < B.length && !B[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (l === M.length || f === B.length)
          for (
            l = M.length - 1, f = B.length - 1;
            1 <= l && 0 <= f && M[l] !== B[f];

          )
            f--;
        for (; 1 <= l && 0 <= f; l--, f--)
          if (M[l] !== B[f]) {
            if (l !== 1 || f !== 1)
              do
                if ((l--, f--, 0 > f || M[l] !== B[f])) {
                  var ee =
                    `
` + M[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      ee.includes("<anonymous>") &&
                      (ee = ee.replace("<anonymous>", t.displayName)),
                    ee
                  );
                }
              while (1 <= l && 0 <= f);
            break;
          }
      }
    } finally {
      (od = !1), (Error.prepareStackTrace = s);
    }
    return (s = t ? t.displayName || t.name : "") ? Ji(s) : "";
  }
  function ST(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ji(t.type);
      case 16:
        return Ji("Lazy");
      case 13:
        return Ji("Suspense");
      case 19:
        return Ji("SuspenseList");
      case 0:
      case 15:
        return ld(t.type, !1);
      case 11:
        return ld(t.type.render, !1);
      case 1:
        return ld(t.type, !0);
      case 31:
        return Ji("Activity");
      default:
        return "";
    }
  }
  function Xg(t) {
    try {
      var r = "";
      do (r += ST(t)), (t = t.return);
      while (t);
      return r;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function Pn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qg(t) {
    var r = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function _T(t) {
    var r = Qg(t) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
      l = "" + t[r];
    if (
      !t.hasOwnProperty(r) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var f = s.get,
        h = s.set;
      return (
        Object.defineProperty(t, r, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (b) {
            (l = "" + b), h.call(this, b);
          },
        }),
        Object.defineProperty(t, r, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (b) {
            l = "" + b;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[r];
          },
        }
      );
    }
  }
  function pu(t) {
    t._valueTracker || (t._valueTracker = _T(t));
  }
  function Wg(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var s = r.getValue(),
      l = "";
    return (
      t && (l = Qg(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== s ? (r.setValue(t), !0) : !1
    );
  }
  function gu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ET = /[\n"\\]/g;
  function Bn(t) {
    return t.replace(ET, function (r) {
      return "\\" + r.charCodeAt(0).toString(16) + " ";
    });
  }
  function ud(t, r, s, l, f, h, b, T) {
    (t.name = ""),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (t.type = b)
        : t.removeAttribute("type"),
      r != null
        ? b === "number"
          ? ((r === 0 && t.value === "") || t.value != r) &&
            (t.value = "" + Pn(r))
          : t.value !== "" + Pn(r) && (t.value = "" + Pn(r))
        : (b !== "submit" && b !== "reset") || t.removeAttribute("value"),
      r != null
        ? cd(t, b, Pn(r))
        : s != null
        ? cd(t, b, Pn(s))
        : l != null && t.removeAttribute("value"),
      f == null && h != null && (t.defaultChecked = !!h),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      T != null &&
      typeof T != "function" &&
      typeof T != "symbol" &&
      typeof T != "boolean"
        ? (t.name = "" + Pn(T))
        : t.removeAttribute("name");
  }
  function Jg(t, r, s, l, f, h, b, T) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.type = h),
      r != null || s != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || r != null)) return;
      (s = s != null ? "" + Pn(s) : ""),
        (r = r != null ? "" + Pn(r) : s),
        T || r === t.value || (t.value = r),
        (t.defaultValue = r);
    }
    (l = l ?? f),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = T ? t.checked : !!l),
      (t.defaultChecked = !!l),
      b != null &&
        typeof b != "function" &&
        typeof b != "symbol" &&
        typeof b != "boolean" &&
        (t.name = b);
  }
  function cd(t, r, s) {
    (r === "number" && gu(t.ownerDocument) === t) ||
      t.defaultValue === "" + s ||
      (t.defaultValue = "" + s);
  }
  function es(t, r, s, l) {
    if (((t = t.options), r)) {
      r = {};
      for (var f = 0; f < s.length; f++) r["$" + s[f]] = !0;
      for (s = 0; s < t.length; s++)
        (f = r.hasOwnProperty("$" + t[s].value)),
          t[s].selected !== f && (t[s].selected = f),
          f && l && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + Pn(s), r = null, f = 0; f < t.length; f++) {
        if (t[f].value === s) {
          (t[f].selected = !0), l && (t[f].defaultSelected = !0);
          return;
        }
        r !== null || t[f].disabled || (r = t[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ey(t, r, s) {
    if (
      r != null &&
      ((r = "" + Pn(r)), r !== t.value && (t.value = r), s == null)
    ) {
      t.defaultValue !== r && (t.defaultValue = r);
      return;
    }
    t.defaultValue = s != null ? "" + Pn(s) : "";
  }
  function ty(t, r, s, l) {
    if (r == null) {
      if (l != null) {
        if (s != null) throw Error(i(92));
        if (fe(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        s = l;
      }
      s == null && (s = ""), (r = s);
    }
    (s = Pn(r)),
      (t.defaultValue = s),
      (l = t.textContent),
      l === s && l !== "" && l !== null && (t.value = l);
  }
  function ts(t, r) {
    if (r) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var TT = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ny(t, r, s) {
    var l = r.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? l
        ? t.setProperty(r, "")
        : r === "float"
        ? (t.cssFloat = "")
        : (t[r] = "")
      : l
      ? t.setProperty(r, s)
      : typeof s != "number" || s === 0 || TT.has(r)
      ? r === "float"
        ? (t.cssFloat = s)
        : (t[r] = ("" + s).trim())
      : (t[r] = s + "px");
  }
  function ry(t, r, s) {
    if (r != null && typeof r != "object") throw Error(i(62));
    if (((t = t.style), s != null)) {
      for (var l in s)
        !s.hasOwnProperty(l) ||
          (r != null && r.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var f in r)
        (l = r[f]), r.hasOwnProperty(f) && s[f] !== l && ny(t, f, l);
    } else for (var h in r) r.hasOwnProperty(h) && ny(t, h, r[h]);
  }
  function fd(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var RT = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clipRule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fillOpacity"],
      ["fillRule", "fillRule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "strokeLinecap"],
      ["strokeLinejoin", "strokeLinejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "strokeWidth"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    AT =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yu(t) {
    return AT.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var dd = null;
  function hd(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ns = null,
    rs = null;
  function ay(t) {
    var r = Xi(t);
    if (r && (t = r.stateNode)) {
      var s = t[ft] || null;
      e: switch (((t = r.stateNode), r.type)) {
        case "input":
          if (
            (ud(
              t,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name
            ),
            (r = s.name),
            s.type === "radio" && r != null)
          ) {
            for (s = t; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + Bn("" + r) + '"][type="radio"]'
              ),
                r = 0;
              r < s.length;
              r++
            ) {
              var l = s[r];
              if (l !== t && l.form === t.form) {
                var f = l[ft] || null;
                if (!f) throw Error(i(90));
                ud(
                  l,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (r = 0; r < s.length; r++)
              (l = s[r]), l.form === t.form && Wg(l);
          }
          break e;
        case "textarea":
          ey(t, s.value, s.defaultValue);
          break e;
        case "select":
          (r = s.value), r != null && es(t, !!s.multiple, r, !1);
      }
    }
  }
  var md = !1;
  function iy(t, r, s) {
    if (md) return t(r, s);
    md = !0;
    try {
      var l = t(r);
      return l;
    } finally {
      if (
        ((md = !1),
        (ns !== null || rs !== null) &&
          (nc(), ns && ((r = ns), (t = rs), (rs = ns = null), ay(r), t)))
      )
        for (r = 0; r < t.length; r++) ay(t[r]);
    }
  }
  function xo(t, r) {
    var s = t.stateNode;
    if (s === null) return null;
    var l = s[ft] || null;
    if (l === null) return null;
    s = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(i(231, r, typeof s));
    return s;
  }
  var Br = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    pd = !1;
  if (Br)
    try {
      var wo = {};
      Object.defineProperty(wo, "passive", {
        get: function () {
          pd = !0;
        },
      }),
        window.addEventListener("test", wo, wo),
        window.removeEventListener("test", wo, wo);
    } catch {
      pd = !1;
    }
  var ba = null,
    gd = null,
    vu = null;
  function sy() {
    if (vu) return vu;
    var t,
      r = gd,
      s = r.length,
      l,
      f = "value" in ba ? ba.value : ba.textContent,
      h = f.length;
    for (t = 0; t < s && r[t] === f[t]; t++);
    var b = s - t;
    for (l = 1; l <= b && r[s - l] === f[h - l]; l++);
    return (vu = f.slice(t, 1 < l ? 1 - l : void 0));
  }
  function bu(t) {
    var r = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && r === 13 && (t = 13))
        : (t = r),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function xu() {
    return !0;
  }
  function oy() {
    return !1;
  }
  function fn(t) {
    function r(s, l, f, h, b) {
      (this._reactName = s),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = b),
        (this.currentTarget = null);
      for (var T in t)
        t.hasOwnProperty(T) && ((s = t[T]), (this[T] = s ? s(h) : h[T]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? xu
          : oy),
        (this.isPropagationStopped = oy),
        this
      );
    }
    return (
      g(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = xu));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = xu));
        },
        persist: function () {},
        isPersistent: xu,
      }),
      r
    );
  }
  var ci = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wu = fn(ci),
    So = g({}, ci, { view: 0, detail: 0 }),
    CT = fn(So),
    yd,
    vd,
    _o,
    Su = g({}, So, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xd,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== _o &&
              (_o && t.type === "mousemove"
                ? ((yd = t.screenX - _o.screenX), (vd = t.screenY - _o.screenY))
                : (vd = yd = 0),
              (_o = t)),
            yd);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : vd;
      },
    }),
    ly = fn(Su),
    OT = g({}, Su, { dataTransfer: 0 }),
    MT = fn(OT),
    NT = g({}, So, { relatedTarget: 0 }),
    bd = fn(NT),
    DT = g({}, ci, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kT = fn(DT),
    jT = g({}, ci, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    LT = fn(jT),
    zT = g({}, ci, { data: 0 }),
    uy = fn(zT),
    UT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    PT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    BT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function VT(t) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(t)
      : (t = BT[t])
      ? !!r[t]
      : !1;
  }
  function xd() {
    return VT;
  }
  var HT = g({}, So, {
      key: function (t) {
        if (t.key) {
          var r = UT[t.key] || t.key;
          if (r !== "Unidentified") return r;
        }
        return t.type === "keypress"
          ? ((t = bu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? PT[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xd,
      charCode: function (t) {
        return t.type === "keypress" ? bu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? bu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    FT = fn(HT),
    qT = g({}, Su, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    cy = fn(qT),
    IT = g({}, So, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xd,
    }),
    $T = fn(IT),
    GT = g({}, ci, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    YT = fn(GT),
    ZT = g({}, Su, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    KT = fn(ZT),
    XT = g({}, ci, { newState: 0, oldState: 0 }),
    QT = fn(XT),
    WT = [9, 13, 27, 32],
    wd = Br && "CompositionEvent" in window,
    Eo = null;
  Br && "documentMode" in document && (Eo = document.documentMode);
  var JT = Br && "TextEvent" in window && !Eo,
    fy = Br && (!wd || (Eo && 8 < Eo && 11 >= Eo)),
    dy = " ",
    hy = !1;
  function my(t, r) {
    switch (t) {
      case "keyup":
        return WT.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function py(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var as = !1;
  function eR(t, r) {
    switch (t) {
      case "compositionend":
        return py(r);
      case "keypress":
        return r.which !== 32 ? null : ((hy = !0), dy);
      case "textInput":
        return (t = r.data), t === dy && hy ? null : t;
      default:
        return null;
    }
  }
  function tR(t, r) {
    if (as)
      return t === "compositionend" || (!wd && my(t, r))
        ? ((t = sy()), (vu = gd = ba = null), (as = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return fy && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var nR = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gy(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!nR[t.type] : r === "textarea";
  }
  function yy(t, r, s, l) {
    ns ? (rs ? rs.push(l) : (rs = [l])) : (ns = l),
      (r = lc(r, "onChange")),
      0 < r.length &&
        ((s = new wu("onChange", "change", null, s, l)),
        t.push({ event: s, listeners: r }));
  }
  var To = null,
    Ro = null;
  function rR(t) {
    Qb(t, 0);
  }
  function _u(t) {
    var r = bo(t);
    if (Wg(r)) return t;
  }
  function vy(t, r) {
    if (t === "change") return r;
  }
  var by = !1;
  if (Br) {
    var Sd;
    if (Br) {
      var _d = "oninput" in document;
      if (!_d) {
        var xy = document.createElement("div");
        xy.setAttribute("oninput", "return;"),
          (_d = typeof xy.oninput == "function");
      }
      Sd = _d;
    } else Sd = !1;
    by = Sd && (!document.documentMode || 9 < document.documentMode);
  }
  function wy() {
    To && (To.detachEvent("onpropertychange", Sy), (Ro = To = null));
  }
  function Sy(t) {
    if (t.propertyName === "value" && _u(Ro)) {
      var r = [];
      yy(r, Ro, t, hd(t)), iy(rR, r);
    }
  }
  function aR(t, r, s) {
    t === "focusin"
      ? (wy(), (To = r), (Ro = s), To.attachEvent("onpropertychange", Sy))
      : t === "focusout" && wy();
  }
  function iR(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return _u(Ro);
  }
  function sR(t, r) {
    if (t === "click") return _u(r);
  }
  function oR(t, r) {
    if (t === "input" || t === "change") return _u(r);
  }
  function lR(t, r) {
    return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
  }
  var _n = typeof Object.is == "function" ? Object.is : lR;
  function Ao(t, r) {
    if (_n(t, r)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var s = Object.keys(t),
      l = Object.keys(r);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var f = s[l];
      if (!Gt.call(r, f) || !_n(t[f], r[f])) return !1;
    }
    return !0;
  }
  function _y(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ey(t, r) {
    var s = _y(t);
    t = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = t + s.textContent.length), t <= r && l >= r))
          return { node: s, offset: r - t };
        t = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = _y(s);
    }
  }
  function Ty(t, r) {
    return t && r
      ? t === r
        ? !0
        : t && t.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? Ty(t, r.parentNode)
        : "contains" in t
        ? t.contains(r)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function Ry(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var r = gu(t.document); r instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = r.contentWindow;
      else break;
      r = gu(t.document);
    }
    return r;
  }
  function Ed(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        r === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var uR = Br && "documentMode" in document && 11 >= document.documentMode,
    is = null,
    Td = null,
    Co = null,
    Rd = !1;
  function Ay(t, r, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Rd ||
      is == null ||
      is !== gu(l) ||
      ((l = is),
      "selectionStart" in l && Ed(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Co && Ao(Co, l)) ||
        ((Co = l),
        (l = lc(Td, "onSelect")),
        0 < l.length &&
          ((r = new wu("onSelect", "select", null, r, s)),
          t.push({ event: r, listeners: l }),
          (r.target = is))));
  }
  function fi(t, r) {
    var s = {};
    return (
      (s[t.toLowerCase()] = r.toLowerCase()),
      (s["Webkit" + t] = "webkit" + r),
      (s["Moz" + t] = "moz" + r),
      s
    );
  }
  var ss = {
      animationend: fi("Animation", "AnimationEnd"),
      animationiteration: fi("Animation", "AnimationIteration"),
      animationstart: fi("Animation", "AnimationStart"),
      transitionrun: fi("Transition", "TransitionRun"),
      transitionstart: fi("Transition", "TransitionStart"),
      transitioncancel: fi("Transition", "TransitionCancel"),
      transitionend: fi("Transition", "TransitionEnd"),
    },
    Ad = {},
    Cy = {};
  Br &&
    ((Cy = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ss.animationend.animation,
      delete ss.animationiteration.animation,
      delete ss.animationstart.animation),
    "TransitionEvent" in window || delete ss.transitionend.transition);
  function di(t) {
    if (Ad[t]) return Ad[t];
    if (!ss[t]) return t;
    var r = ss[t],
      s;
    for (s in r) if (r.hasOwnProperty(s) && s in Cy) return (Ad[t] = r[s]);
    return t;
  }
  var Oy = di("animationend"),
    My = di("animationiteration"),
    Ny = di("animationstart"),
    cR = di("transitionrun"),
    fR = di("transitionstart"),
    dR = di("transitioncancel"),
    Dy = di("transitionend"),
    ky = new Map(),
    Cd =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Cd.push("scrollEnd");
  function Jn(t, r) {
    ky.set(t, r), ui(r, [t]);
  }
  var jy = new WeakMap();
  function Vn(t, r) {
    if (typeof t == "object" && t !== null) {
      var s = jy.get(t);
      return s !== void 0
        ? s
        : ((r = { value: t, source: r, stack: Xg(r) }), jy.set(t, r), r);
    }
    return { value: t, source: r, stack: Xg(r) };
  }
  var Hn = [],
    os = 0,
    Od = 0;
  function Eu() {
    for (var t = os, r = (Od = os = 0); r < t; ) {
      var s = Hn[r];
      Hn[r++] = null;
      var l = Hn[r];
      Hn[r++] = null;
      var f = Hn[r];
      Hn[r++] = null;
      var h = Hn[r];
      if (((Hn[r++] = null), l !== null && f !== null)) {
        var b = l.pending;
        b === null ? (f.next = f) : ((f.next = b.next), (b.next = f)),
          (l.pending = f);
      }
      h !== 0 && Ly(s, f, h);
    }
  }
  function Tu(t, r, s, l) {
    (Hn[os++] = t),
      (Hn[os++] = r),
      (Hn[os++] = s),
      (Hn[os++] = l),
      (Od |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function Md(t, r, s, l) {
    return Tu(t, r, s, l), Ru(t);
  }
  function ls(t, r) {
    return Tu(t, null, null, r), Ru(t);
  }
  function Ly(t, r, s) {
    t.lanes |= s;
    var l = t.alternate;
    l !== null && (l.lanes |= s);
    for (var f = !1, h = t.return; h !== null; )
      (h.childLanes |= s),
        (l = h.alternate),
        l !== null && (l.childLanes |= s),
        h.tag === 22 &&
          ((t = h.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = h),
        (h = h.return);
    return t.tag === 3
      ? ((h = t.stateNode),
        f &&
          r !== null &&
          ((f = 31 - nt(s)),
          (t = h.hiddenUpdates),
          (l = t[f]),
          l === null ? (t[f] = [r]) : l.push(r),
          (r.lane = s | 536870912)),
        h)
      : null;
  }
  function Ru(t) {
    if (50 < Jo) throw ((Jo = 0), (zh = null), Error(i(185)));
    for (var r = t.return; r !== null; ) (t = r), (r = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var us = {};
  function hR(t, r, s, l) {
    (this.tag = t),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function En(t, r, s, l) {
    return new hR(t, r, s, l);
  }
  function Nd(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Vr(t, r) {
    var s = t.alternate;
    return (
      s === null
        ? ((s = En(t.tag, r, t.key, t.mode)),
          (s.elementType = t.elementType),
          (s.type = t.type),
          (s.stateNode = t.stateNode),
          (s.alternate = t),
          (t.alternate = s))
        : ((s.pendingProps = r),
          (s.type = t.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = t.flags & 65011712),
      (s.childLanes = t.childLanes),
      (s.lanes = t.lanes),
      (s.child = t.child),
      (s.memoizedProps = t.memoizedProps),
      (s.memoizedState = t.memoizedState),
      (s.updateQueue = t.updateQueue),
      (r = t.dependencies),
      (s.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (s.sibling = t.sibling),
      (s.index = t.index),
      (s.ref = t.ref),
      (s.refCleanup = t.refCleanup),
      s
    );
  }
  function zy(t, r) {
    t.flags &= 65011714;
    var s = t.alternate;
    return (
      s === null
        ? ((t.childLanes = 0),
          (t.lanes = r),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = s.childLanes),
          (t.lanes = s.lanes),
          (t.child = s.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = s.memoizedProps),
          (t.memoizedState = s.memoizedState),
          (t.updateQueue = s.updateQueue),
          (t.type = s.type),
          (r = s.dependencies),
          (t.dependencies =
            r === null
              ? null
              : { lanes: r.lanes, firstContext: r.firstContext })),
      t
    );
  }
  function Au(t, r, s, l, f, h) {
    var b = 0;
    if (((l = t), typeof t == "function")) Nd(t) && (b = 1);
    else if (typeof t == "string")
      b = pA(t, s, le.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      e: switch (t) {
        case J:
          return (t = En(31, s, r, f)), (t.elementType = J), (t.lanes = h), t;
        case E:
          return hi(s.children, f, h, r);
        case _:
          (b = 8), (f |= 24);
          break;
        case w:
          return (
            (t = En(12, s, r, f | 2)), (t.elementType = w), (t.lanes = h), t
          );
        case D:
          return (t = En(13, s, r, f)), (t.elementType = D), (t.lanes = h), t;
        case I:
          return (t = En(19, s, r, f)), (t.elementType = I), (t.lanes = h), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case A:
              case N:
                b = 10;
                break e;
              case C:
                b = 9;
                break e;
              case k:
                b = 11;
                break e;
              case Y:
                b = 14;
                break e;
              case G:
                (b = 16), (l = null);
                break e;
            }
          (b = 29),
            (s = Error(i(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (r = En(b, s, r, f)), (r.elementType = t), (r.type = l), (r.lanes = h), r
    );
  }
  function hi(t, r, s, l) {
    return (t = En(7, t, l, r)), (t.lanes = s), t;
  }
  function Dd(t, r, s) {
    return (t = En(6, t, null, r)), (t.lanes = s), t;
  }
  function kd(t, r, s) {
    return (
      (r = En(4, t.children !== null ? t.children : [], t.key, r)),
      (r.lanes = s),
      (r.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      r
    );
  }
  var cs = [],
    fs = 0,
    Cu = null,
    Ou = 0,
    Fn = [],
    qn = 0,
    mi = null,
    Hr = 1,
    Fr = "";
  function pi(t, r) {
    (cs[fs++] = Ou), (cs[fs++] = Cu), (Cu = t), (Ou = r);
  }
  function Uy(t, r, s) {
    (Fn[qn++] = Hr), (Fn[qn++] = Fr), (Fn[qn++] = mi), (mi = t);
    var l = Hr;
    t = Fr;
    var f = 32 - nt(l) - 1;
    (l &= ~(1 << f)), (s += 1);
    var h = 32 - nt(r) + f;
    if (30 < h) {
      var b = f - (f % 5);
      (h = (l & ((1 << b) - 1)).toString(32)),
        (l >>= b),
        (f -= b),
        (Hr = (1 << (32 - nt(r) + f)) | (s << f) | l),
        (Fr = h + t);
    } else (Hr = (1 << h) | (s << f) | l), (Fr = t);
  }
  function jd(t) {
    t.return !== null && (pi(t, 1), Uy(t, 1, 0));
  }
  function Ld(t) {
    for (; t === Cu; )
      (Cu = cs[--fs]), (cs[fs] = null), (Ou = cs[--fs]), (cs[fs] = null);
    for (; t === mi; )
      (mi = Fn[--qn]),
        (Fn[qn] = null),
        (Fr = Fn[--qn]),
        (Fn[qn] = null),
        (Hr = Fn[--qn]),
        (Fn[qn] = null);
  }
  var sn = null,
    gt = null,
    tt = !1,
    gi = null,
    br = !1,
    zd = Error(i(519));
  function yi(t) {
    var r = Error(i(418, ""));
    throw (No(Vn(r, t)), zd);
  }
  function Py(t) {
    var r = t.stateNode,
      s = t.type,
      l = t.memoizedProps;
    switch (((r[wt] = t), (r[ft] = l), s)) {
      case "dialog":
        Ze("cancel", r), Ze("close", r);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ze("load", r);
        break;
      case "video":
      case "audio":
        for (s = 0; s < tl.length; s++) Ze(tl[s], r);
        break;
      case "source":
        Ze("error", r);
        break;
      case "img":
      case "image":
      case "link":
        Ze("error", r), Ze("load", r);
        break;
      case "details":
        Ze("toggle", r);
        break;
      case "input":
        Ze("invalid", r),
          Jg(
            r,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          pu(r);
        break;
      case "select":
        Ze("invalid", r);
        break;
      case "textarea":
        Ze("invalid", r), ty(r, l.value, l.defaultValue, l.children), pu(r);
    }
    (s = l.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      r.textContent === "" + s ||
      l.suppressHydrationWarning === !0 ||
      t0(r.textContent, s)
        ? (l.popover != null && (Ze("beforetoggle", r), Ze("toggle", r)),
          l.onScroll != null && Ze("scroll", r),
          l.onScrollEnd != null && Ze("scrollend", r),
          l.onClick != null && (r.onclick = uc),
          (r = !0))
        : (r = !1),
      r || yi(t);
  }
  function By(t) {
    for (sn = t.return; sn; )
      switch (sn.tag) {
        case 5:
        case 13:
          br = !1;
          return;
        case 27:
        case 3:
          br = !0;
          return;
        default:
          sn = sn.return;
      }
  }
  function Oo(t) {
    if (t !== sn) return !1;
    if (!tt) return By(t), (tt = !0), !1;
    var r = t.tag,
      s;
    if (
      ((s = r !== 3 && r !== 27) &&
        ((s = r === 5) &&
          ((s = t.type),
          (s =
            !(s !== "form" && s !== "button") || Wh(t.type, t.memoizedProps))),
        (s = !s)),
      s && gt && yi(t),
      By(t),
      r === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8)
            if (((s = t.data), s === "/$")) {
              if (r === 0) {
                gt = tr(t.nextSibling);
                break e;
              }
              r--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || r++;
          t = t.nextSibling;
        }
        gt = null;
      }
    } else
      r === 27
        ? ((r = gt), La(t.type) ? ((t = nm), (nm = null), (gt = t)) : (gt = r))
        : (gt = sn ? tr(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Mo() {
    (gt = sn = null), (tt = !1);
  }
  function Vy() {
    var t = gi;
    return (
      t !== null &&
        (mn === null ? (mn = t) : mn.push.apply(mn, t), (gi = null)),
      t
    );
  }
  function No(t) {
    gi === null ? (gi = [t]) : gi.push(t);
  }
  var Ud = H(null),
    vi = null,
    qr = null;
  function xa(t, r, s) {
    W(Ud, r._currentValue), (r._currentValue = s);
  }
  function Ir(t) {
    (t._currentValue = Ud.current), ie(Ud);
  }
  function Pd(t, r, s) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & r) !== r
          ? ((t.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        t === s)
      )
        break;
      t = t.return;
    }
  }
  function Bd(t, r, s, l) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var h = f.dependencies;
      if (h !== null) {
        var b = f.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var T = h;
          h = f;
          for (var M = 0; M < r.length; M++)
            if (T.context === r[M]) {
              (h.lanes |= s),
                (T = h.alternate),
                T !== null && (T.lanes |= s),
                Pd(h.return, s, t),
                l || (b = null);
              break e;
            }
          h = T.next;
        }
      } else if (f.tag === 18) {
        if (((b = f.return), b === null)) throw Error(i(341));
        (b.lanes |= s),
          (h = b.alternate),
          h !== null && (h.lanes |= s),
          Pd(b, s, t),
          (b = null);
      } else b = f.child;
      if (b !== null) b.return = f;
      else
        for (b = f; b !== null; ) {
          if (b === t) {
            b = null;
            break;
          }
          if (((f = b.sibling), f !== null)) {
            (f.return = b.return), (b = f);
            break;
          }
          b = b.return;
        }
      f = b;
    }
  }
  function Do(t, r, s, l) {
    t = null;
    for (var f = r, h = !1; f !== null; ) {
      if (!h) {
        if ((f.flags & 524288) !== 0) h = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var b = f.alternate;
        if (b === null) throw Error(i(387));
        if (((b = b.memoizedProps), b !== null)) {
          var T = f.type;
          _n(f.pendingProps.value, b.value) ||
            (t !== null ? t.push(T) : (t = [T]));
        }
      } else if (f === Oe.current) {
        if (((b = f.alternate), b === null)) throw Error(i(387));
        b.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(ol) : (t = [ol]));
      }
      f = f.return;
    }
    t !== null && Bd(r, t, s, l), (r.flags |= 262144);
  }
  function Mu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!_n(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function bi(t) {
    (vi = t),
      (qr = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function en(t) {
    return Hy(vi, t);
  }
  function Nu(t, r) {
    return vi === null && bi(t), Hy(t, r);
  }
  function Hy(t, r) {
    var s = r._currentValue;
    if (((r = { context: r, memoizedValue: s, next: null }), qr === null)) {
      if (t === null) throw Error(i(308));
      (qr = r),
        (t.dependencies = { lanes: 0, firstContext: r }),
        (t.flags |= 524288);
    } else qr = qr.next = r;
    return s;
  }
  var mR =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              r = (this.signal = {
                aborted: !1,
                addEventListener: function (s, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (r.aborted = !0),
                t.forEach(function (s) {
                  return s();
                });
            };
          },
    pR = e.unstable_scheduleCallback,
    gR = e.unstable_NormalPriority,
    Ut = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vd() {
    return { controller: new mR(), data: new Map(), refCount: 0 };
  }
  function ko(t) {
    t.refCount--,
      t.refCount === 0 &&
        pR(gR, function () {
          t.controller.abort();
        });
  }
  var jo = null,
    Hd = 0,
    ds = 0,
    hs = null;
  function yR(t, r) {
    if (jo === null) {
      var s = (jo = []);
      (Hd = 0),
        (ds = qh()),
        (hs = {
          status: "pending",
          value: void 0,
          then: function (l) {
            s.push(l);
          },
        });
    }
    return Hd++, r.then(Fy, Fy), r;
  }
  function Fy() {
    if (--Hd === 0 && jo !== null) {
      hs !== null && (hs.status = "fulfilled");
      var t = jo;
      (jo = null), (ds = 0), (hs = null);
      for (var r = 0; r < t.length; r++) (0, t[r])();
    }
  }
  function vR(t, r) {
    var s = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = r);
          for (var f = 0; f < s.length; f++) (0, s[f])(r);
        },
        function (f) {
          for (l.status = "rejected", l.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        }
      ),
      l
    );
  }
  var qy = j.S;
  j.S = function (t, r) {
    typeof r == "object" &&
      r !== null &&
      typeof r.then == "function" &&
      yR(t, r),
      qy !== null && qy(t, r);
  };
  var xi = H(null);
  function Fd() {
    var t = xi.current;
    return t !== null ? t : dt.pooledCache;
  }
  function Du(t, r) {
    r === null ? W(xi, xi.current) : W(xi, r.pool);
  }
  function Iy() {
    var t = Fd();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var Lo = Error(i(460)),
    $y = Error(i(474)),
    ku = Error(i(542)),
    qd = { then: function () {} };
  function Gy(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function ju() {}
  function Yy(t, r, s) {
    switch (
      ((s = t[s]),
      s === void 0 ? t.push(r) : s !== r && (r.then(ju, ju), (r = s)),
      r.status)
    ) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw ((t = r.reason), Ky(t), t);
      default:
        if (typeof r.status == "string") r.then(ju, ju);
        else {
          if (((t = dt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = r),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  (f.status = "fulfilled"), (f.value = l);
                }
              },
              function (l) {
                if (r.status === "pending") {
                  var f = r;
                  (f.status = "rejected"), (f.reason = l);
                }
              }
            );
        }
        switch (r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw ((t = r.reason), Ky(t), t);
        }
        throw ((zo = r), Lo);
    }
  }
  var zo = null;
  function Zy() {
    if (zo === null) throw Error(i(459));
    var t = zo;
    return (zo = null), t;
  }
  function Ky(t) {
    if (t === Lo || t === ku) throw Error(i(483));
  }
  var wa = !1;
  function Id(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function $d(t, r) {
    (t = t.updateQueue),
      r.updateQueue === t &&
        (r.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Sa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _a(t, r, s) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (at & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)),
        (l.pending = r),
        (r = Ru(t)),
        Ly(t, null, s),
        r
      );
    }
    return Tu(t, l, r, s), Ru(t);
  }
  function Uo(t, r, s) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (s & 4194048) !== 0))
    ) {
      var l = r.lanes;
      (l &= t.pendingLanes), (s |= l), (r.lanes = s), bt(t, s);
    }
  }
  function Gd(t, r) {
    var s = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var f = null,
        h = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var b = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          h === null ? (f = h = b) : (h = h.next = b), (s = s.next);
        } while (s !== null);
        h === null ? (f = h = r) : (h = h.next = r);
      } else f = h = r;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: h,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = s);
      return;
    }
    (t = s.lastBaseUpdate),
      t === null ? (s.firstBaseUpdate = r) : (t.next = r),
      (s.lastBaseUpdate = r);
  }
  var Yd = !1;
  function Po() {
    if (Yd) {
      var t = hs;
      if (t !== null) throw t;
    }
  }
  function Bo(t, r, s, l) {
    Yd = !1;
    var f = t.updateQueue;
    wa = !1;
    var h = f.firstBaseUpdate,
      b = f.lastBaseUpdate,
      T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var M = T,
        B = M.next;
      (M.next = null), b === null ? (h = B) : (b.next = B), (b = M);
      var ee = t.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (T = ee.lastBaseUpdate),
        T !== b &&
          (T === null ? (ee.firstBaseUpdate = B) : (T.next = B),
          (ee.lastBaseUpdate = M)));
    }
    if (h !== null) {
      var ae = f.baseState;
      (b = 0), (ee = B = M = null), (T = h);
      do {
        var q = T.lane & -536870913,
          $ = q !== T.lane;
        if ($ ? (Qe & q) === q : (l & q) === q) {
          q !== 0 && q === ds && (Yd = !0),
            ee !== null &&
              (ee = ee.next =
                {
                  lane: 0,
                  tag: T.tag,
                  payload: T.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var De = t,
              Me = T;
            q = r;
            var ut = s;
            switch (Me.tag) {
              case 1:
                if (((De = Me.payload), typeof De == "function")) {
                  ae = De.call(ut, ae, q);
                  break e;
                }
                ae = De;
                break e;
              case 3:
                De.flags = (De.flags & -65537) | 128;
              case 0:
                if (
                  ((De = Me.payload),
                  (q = typeof De == "function" ? De.call(ut, ae, q) : De),
                  q == null)
                )
                  break e;
                ae = g({}, ae, q);
                break e;
              case 2:
                wa = !0;
            }
          }
          (q = T.callback),
            q !== null &&
              ((t.flags |= 64),
              $ && (t.flags |= 8192),
              ($ = f.callbacks),
              $ === null ? (f.callbacks = [q]) : $.push(q));
        } else
          ($ = {
            lane: q,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            ee === null ? ((B = ee = $), (M = ae)) : (ee = ee.next = $),
            (b |= q);
        if (((T = T.next), T === null)) {
          if (((T = f.shared.pending), T === null)) break;
          ($ = T),
            (T = $.next),
            ($.next = null),
            (f.lastBaseUpdate = $),
            (f.shared.pending = null);
        }
      } while (!0);
      ee === null && (M = ae),
        (f.baseState = M),
        (f.firstBaseUpdate = B),
        (f.lastBaseUpdate = ee),
        h === null && (f.shared.lanes = 0),
        (Na |= b),
        (t.lanes = b),
        (t.memoizedState = ae);
    }
  }
  function Xy(t, r) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(r);
  }
  function Qy(t, r) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null, t = 0; t < s.length; t++) Xy(s[t], r);
  }
  var ms = H(null),
    Lu = H(0);
  function Wy(t, r) {
    (t = Qr), W(Lu, t), W(ms, r), (Qr = t | r.baseLanes);
  }
  function Zd() {
    W(Lu, Qr), W(ms, ms.current);
  }
  function Kd() {
    (Qr = Lu.current), ie(ms), ie(Lu);
  }
  var Ea = 0,
    Fe = null,
    ot = null,
    Dt = null,
    zu = !1,
    ps = !1,
    wi = !1,
    Uu = 0,
    Vo = 0,
    gs = null,
    bR = 0;
  function St() {
    throw Error(i(321));
  }
  function Xd(t, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < t.length; s++)
      if (!_n(t[s], r[s])) return !1;
    return !0;
  }
  function Qd(t, r, s, l, f, h) {
    return (
      (Ea = h),
      (Fe = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Lv : zv),
      (wi = !1),
      (h = s(l, f)),
      (wi = !1),
      ps && (h = ev(r, s, l, f)),
      Jy(t),
      h
    );
  }
  function Jy(t) {
    j.H = qu;
    var r = ot !== null && ot.next !== null;
    if (((Ea = 0), (Dt = ot = Fe = null), (zu = !1), (Vo = 0), (gs = null), r))
      throw Error(i(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && Mu(t) && (qt = !0));
  }
  function ev(t, r, s, l) {
    Fe = t;
    var f = 0;
    do {
      if ((ps && (gs = null), (Vo = 0), (ps = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (Dt = ot = null), t.updateQueue != null)) {
        var h = t.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (j.H = RR), (h = r(s, l));
    } while (ps);
    return h;
  }
  function xR() {
    var t = j.H,
      r = t.useState()[0];
    return (
      (r = typeof r.then == "function" ? Ho(r) : r),
      (t = t.useState()[0]),
      (ot !== null ? ot.memoizedState : null) !== t && (Fe.flags |= 1024),
      r
    );
  }
  function Wd() {
    var t = Uu !== 0;
    return (Uu = 0), t;
  }
  function Jd(t, r, s) {
    (r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~s);
  }
  function eh(t) {
    if (zu) {
      for (t = t.memoizedState; t !== null; ) {
        var r = t.queue;
        r !== null && (r.pending = null), (t = t.next);
      }
      zu = !1;
    }
    (Ea = 0), (Dt = ot = Fe = null), (ps = !1), (Vo = Uu = 0), (gs = null);
  }
  function dn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dt === null ? (Fe.memoizedState = Dt = t) : (Dt = Dt.next = t), Dt;
  }
  function kt() {
    if (ot === null) {
      var t = Fe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ot.next;
    var r = Dt === null ? Fe.memoizedState : Dt.next;
    if (r !== null) (Dt = r), (ot = t);
    else {
      if (t === null)
        throw Fe.alternate === null ? Error(i(467)) : Error(i(310));
      (ot = t),
        (t = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null,
        }),
        Dt === null ? (Fe.memoizedState = Dt = t) : (Dt = Dt.next = t);
    }
    return Dt;
  }
  function th() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ho(t) {
    var r = Vo;
    return (
      (Vo += 1),
      gs === null && (gs = []),
      (t = Yy(gs, t, r)),
      (r = Fe),
      (Dt === null ? r.memoizedState : Dt.next) === null &&
        ((r = r.alternate),
        (j.H = r === null || r.memoizedState === null ? Lv : zv)),
      t
    );
  }
  function Pu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ho(t);
      if (t.$$typeof === N) return en(t);
    }
    throw Error(i(438, String(t)));
  }
  function nh(t) {
    var r = null,
      s = Fe.updateQueue;
    if ((s !== null && (r = s.memoCache), r == null)) {
      var l = Fe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (r = {
              data: l.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (r == null && (r = { data: [], index: 0 }),
      s === null && ((s = th()), (Fe.updateQueue = s)),
      (s.memoCache = r),
      (s = r.data[r.index]),
      s === void 0)
    )
      for (s = r.data[r.index] = Array(t), l = 0; l < t; l++) s[l] = ye;
    return r.index++, s;
  }
  function $r(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Bu(t) {
    var r = kt();
    return rh(r, ot, t);
  }
  function rh(t, r, s) {
    var l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = s;
    var f = t.baseQueue,
      h = l.pending;
    if (h !== null) {
      if (f !== null) {
        var b = f.next;
        (f.next = h.next), (h.next = b);
      }
      (r.baseQueue = f = h), (l.pending = null);
    }
    if (((h = t.baseState), f === null)) t.memoizedState = h;
    else {
      r = f.next;
      var T = (b = null),
        M = null,
        B = r,
        ee = !1;
      do {
        var ae = B.lane & -536870913;
        if (ae !== B.lane ? (Qe & ae) === ae : (Ea & ae) === ae) {
          var q = B.revertLane;
          if (q === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              ae === ds && (ee = !0);
          else if ((Ea & q) === q) {
            (B = B.next), q === ds && (ee = !0);
            continue;
          } else
            (ae = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              M === null ? ((T = M = ae), (b = h)) : (M = M.next = ae),
              (Fe.lanes |= q),
              (Na |= q);
          (ae = B.action),
            wi && s(h, ae),
            (h = B.hasEagerState ? B.eagerState : s(h, ae));
        } else
          (q = {
            lane: ae,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            M === null ? ((T = M = q), (b = h)) : (M = M.next = q),
            (Fe.lanes |= ae),
            (Na |= ae);
        B = B.next;
      } while (B !== null && B !== r);
      if (
        (M === null ? (b = h) : (M.next = T),
        !_n(h, t.memoizedState) && ((qt = !0), ee && ((s = hs), s !== null)))
      )
        throw s;
      (t.memoizedState = h),
        (t.baseState = b),
        (t.baseQueue = M),
        (l.lastRenderedState = h);
    }
    return f === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ah(t) {
    var r = kt(),
      s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var l = s.dispatch,
      f = s.pending,
      h = r.memoizedState;
    if (f !== null) {
      s.pending = null;
      var b = (f = f.next);
      do (h = t(h, b.action)), (b = b.next);
      while (b !== f);
      _n(h, r.memoizedState) || (qt = !0),
        (r.memoizedState = h),
        r.baseQueue === null && (r.baseState = h),
        (s.lastRenderedState = h);
    }
    return [h, l];
  }
  function tv(t, r, s) {
    var l = Fe,
      f = kt(),
      h = tt;
    if (h) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = r();
    var b = !_n((ot || f).memoizedState, s);
    b && ((f.memoizedState = s), (qt = !0)), (f = f.queue);
    var T = av.bind(null, l, f, t);
    if (
      (Fo(2048, 8, T, [t]),
      f.getSnapshot !== r || b || (Dt !== null && Dt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ys(9, Vu(), rv.bind(null, l, f, s, r), null),
        dt === null)
      )
        throw Error(i(349));
      h || (Ea & 124) !== 0 || nv(l, r, s);
    }
    return s;
  }
  function nv(t, r, s) {
    (t.flags |= 16384),
      (t = { getSnapshot: r, value: s }),
      (r = Fe.updateQueue),
      r === null
        ? ((r = th()), (Fe.updateQueue = r), (r.stores = [t]))
        : ((s = r.stores), s === null ? (r.stores = [t]) : s.push(t));
  }
  function rv(t, r, s, l) {
    (r.value = s), (r.getSnapshot = l), iv(r) && sv(t);
  }
  function av(t, r, s) {
    return s(function () {
      iv(r) && sv(t);
    });
  }
  function iv(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !_n(t, s);
    } catch {
      return !0;
    }
  }
  function sv(t) {
    var r = ls(t, 2);
    r !== null && On(r, t, 2);
  }
  function ih(t) {
    var r = dn();
    if (typeof t == "function") {
      var s = t;
      if (((t = s()), wi)) {
        Ie(!0);
        try {
          s();
        } finally {
          Ie(!1);
        }
      }
    }
    return (
      (r.memoizedState = r.baseState = t),
      (r.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $r,
        lastRenderedState: t,
      }),
      r
    );
  }
  function ov(t, r, s, l) {
    return (t.baseState = s), rh(t, ot, typeof l == "function" ? l : $r);
  }
  function wR(t, r, s, l, f) {
    if (Fu(t)) throw Error(i(485));
    if (((t = r.action), t !== null)) {
      var h = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (b) {
          h.listeners.push(b);
        },
      };
      j.T !== null ? s(!0) : (h.isTransition = !1),
        l(h),
        (s = r.pending),
        s === null
          ? ((h.next = r.pending = h), lv(r, h))
          : ((h.next = s.next), (r.pending = s.next = h));
    }
  }
  function lv(t, r) {
    var s = r.action,
      l = r.payload,
      f = t.state;
    if (r.isTransition) {
      var h = j.T,
        b = {};
      j.T = b;
      try {
        var T = s(f, l),
          M = j.S;
        M !== null && M(b, T), uv(t, r, T);
      } catch (B) {
        sh(t, r, B);
      } finally {
        j.T = h;
      }
    } else
      try {
        (h = s(f, l)), uv(t, r, h);
      } catch (B) {
        sh(t, r, B);
      }
  }
  function uv(t, r, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (l) {
            cv(t, r, l);
          },
          function (l) {
            return sh(t, r, l);
          }
        )
      : cv(t, r, s);
  }
  function cv(t, r, s) {
    (r.status = "fulfilled"),
      (r.value = s),
      fv(r),
      (t.state = s),
      (r = t.pending),
      r !== null &&
        ((s = r.next),
        s === r ? (t.pending = null) : ((s = s.next), (r.next = s), lv(t, s)));
  }
  function sh(t, r, s) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (r.status = "rejected"), (r.reason = s), fv(r), (r = r.next);
      while (r !== l);
    }
    t.action = null;
  }
  function fv(t) {
    t = t.listeners;
    for (var r = 0; r < t.length; r++) (0, t[r])();
  }
  function dv(t, r) {
    return r;
  }
  function hv(t, r) {
    if (tt) {
      var s = dt.formState;
      if (s !== null) {
        e: {
          var l = Fe;
          if (tt) {
            if (gt) {
              t: {
                for (var f = gt, h = br; f.nodeType !== 8; ) {
                  if (!h) {
                    f = null;
                    break t;
                  }
                  if (((f = tr(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                (h = f.data), (f = h === "F!" || h === "F" ? f : null);
              }
              if (f) {
                (gt = tr(f.nextSibling)), (l = f.data === "F!");
                break e;
              }
            }
            yi(l);
          }
          l = !1;
        }
        l && (r = s[0]);
      }
    }
    return (
      (s = dn()),
      (s.memoizedState = s.baseState = r),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dv,
        lastRenderedState: r,
      }),
      (s.queue = l),
      (s = Dv.bind(null, Fe, l)),
      (l.dispatch = s),
      (l = ih(!1)),
      (h = fh.bind(null, Fe, !1, l.queue)),
      (l = dn()),
      (f = { state: r, dispatch: null, action: t, pending: null }),
      (l.queue = f),
      (s = wR.bind(null, Fe, f, h, s)),
      (f.dispatch = s),
      (l.memoizedState = t),
      [r, s, !1]
    );
  }
  function mv(t) {
    var r = kt();
    return pv(r, ot, t);
  }
  function pv(t, r, s) {
    if (
      ((r = rh(t, r, dv)[0]),
      (t = Bu($r)[0]),
      typeof r == "object" && r !== null && typeof r.then == "function")
    )
      try {
        var l = Ho(r);
      } catch (b) {
        throw b === Lo ? ku : b;
      }
    else l = r;
    r = kt();
    var f = r.queue,
      h = f.dispatch;
    return (
      s !== r.memoizedState &&
        ((Fe.flags |= 2048), ys(9, Vu(), SR.bind(null, f, s), null)),
      [l, h, t]
    );
  }
  function SR(t, r) {
    t.action = r;
  }
  function gv(t) {
    var r = kt(),
      s = ot;
    if (s !== null) return pv(r, s, t);
    kt(), (r = r.memoizedState), (s = kt());
    var l = s.queue.dispatch;
    return (s.memoizedState = t), [r, l, !1];
  }
  function ys(t, r, s, l) {
    return (
      (t = { tag: t, create: s, deps: l, inst: r, next: null }),
      (r = Fe.updateQueue),
      r === null && ((r = th()), (Fe.updateQueue = r)),
      (s = r.lastEffect),
      s === null
        ? (r.lastEffect = t.next = t)
        : ((l = s.next), (s.next = t), (t.next = l), (r.lastEffect = t)),
      t
    );
  }
  function Vu() {
    return { destroy: void 0, resource: void 0 };
  }
  function yv() {
    return kt().memoizedState;
  }
  function Hu(t, r, s, l) {
    var f = dn();
    (l = l === void 0 ? null : l),
      (Fe.flags |= t),
      (f.memoizedState = ys(1 | r, Vu(), s, l));
  }
  function Fo(t, r, s, l) {
    var f = kt();
    l = l === void 0 ? null : l;
    var h = f.memoizedState.inst;
    ot !== null && l !== null && Xd(l, ot.memoizedState.deps)
      ? (f.memoizedState = ys(r, h, s, l))
      : ((Fe.flags |= t), (f.memoizedState = ys(1 | r, h, s, l)));
  }
  function vv(t, r) {
    Hu(8390656, 8, t, r);
  }
  function bv(t, r) {
    Fo(2048, 8, t, r);
  }
  function xv(t, r) {
    return Fo(4, 2, t, r);
  }
  function wv(t, r) {
    return Fo(4, 4, t, r);
  }
  function Sv(t, r) {
    if (typeof r == "function") {
      t = t();
      var s = r(t);
      return function () {
        typeof s == "function" ? s() : r(null);
      };
    }
    if (r != null)
      return (
        (t = t()),
        (r.current = t),
        function () {
          r.current = null;
        }
      );
  }
  function _v(t, r, s) {
    (s = s != null ? s.concat([t]) : null), Fo(4, 4, Sv.bind(null, r, t), s);
  }
  function oh() {}
  function Ev(t, r) {
    var s = kt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return r !== null && Xd(r, l[1]) ? l[0] : ((s.memoizedState = [t, r]), t);
  }
  function Tv(t, r) {
    var s = kt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    if (r !== null && Xd(r, l[1])) return l[0];
    if (((l = t()), wi)) {
      Ie(!0);
      try {
        t();
      } finally {
        Ie(!1);
      }
    }
    return (s.memoizedState = [l, r]), l;
  }
  function lh(t, r, s) {
    return s === void 0 || (Ea & 1073741824) !== 0
      ? (t.memoizedState = r)
      : ((t.memoizedState = s), (t = Cb()), (Fe.lanes |= t), (Na |= t), s);
  }
  function Rv(t, r, s, l) {
    return _n(s, r)
      ? s
      : ms.current !== null
      ? ((t = lh(t, s, l)), _n(t, r) || (qt = !0), t)
      : (Ea & 42) === 0
      ? ((qt = !0), (t.memoizedState = s))
      : ((t = Cb()), (Fe.lanes |= t), (Na |= t), r);
  }
  function Av(t, r, s, l, f) {
    var h = Q.p;
    Q.p = h !== 0 && 8 > h ? h : 8;
    var b = j.T,
      T = {};
    (j.T = T), fh(t, !1, r, s);
    try {
      var M = f(),
        B = j.S;
      if (
        (B !== null && B(T, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var ee = vR(M, l);
        qo(t, r, ee, Cn(t));
      } else qo(t, r, l, Cn(t));
    } catch (ae) {
      qo(t, r, { then: function () {}, status: "rejected", reason: ae }, Cn());
    } finally {
      (Q.p = h), (j.T = b);
    }
  }
  function _R() {}
  function uh(t, r, s, l) {
    if (t.tag !== 5) throw Error(i(476));
    var f = Cv(t).queue;
    Av(
      t,
      f,
      r,
      V,
      s === null
        ? _R
        : function () {
            return Ov(t), s(l);
          }
    );
  }
  function Cv(t) {
    var r = t.memoizedState;
    if (r !== null) return r;
    r = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $r,
        lastRenderedState: V,
      },
      next: null,
    };
    var s = {};
    return (
      (r.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $r,
          lastRenderedState: s,
        },
        next: null,
      }),
      (t.memoizedState = r),
      (t = t.alternate),
      t !== null && (t.memoizedState = r),
      r
    );
  }
  function Ov(t) {
    var r = Cv(t).next.queue;
    qo(t, r, {}, Cn());
  }
  function ch() {
    return en(ol);
  }
  function Mv() {
    return kt().memoizedState;
  }
  function Nv() {
    return kt().memoizedState;
  }
  function ER(t) {
    for (var r = t.return; r !== null; ) {
      switch (r.tag) {
        case 24:
        case 3:
          var s = Cn();
          t = Sa(s);
          var l = _a(r, t, s);
          l !== null && (On(l, r, s), Uo(l, r, s)),
            (r = { cache: Vd() }),
            (t.payload = r);
          return;
      }
      r = r.return;
    }
  }
  function TR(t, r, s) {
    var l = Cn();
    (s = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Fu(t)
        ? kv(r, s)
        : ((s = Md(t, r, s, l)), s !== null && (On(s, t, l), jv(s, r, l)));
  }
  function Dv(t, r, s) {
    var l = Cn();
    qo(t, r, s, l);
  }
  function qo(t, r, s, l) {
    var f = {
      lane: l,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Fu(t)) kv(r, f);
    else {
      var h = t.alternate;
      if (
        t.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = r.lastRenderedReducer), h !== null)
      )
        try {
          var b = r.lastRenderedState,
            T = h(b, s);
          if (((f.hasEagerState = !0), (f.eagerState = T), _n(T, b)))
            return Tu(t, r, f, 0), dt === null && Eu(), !1;
        } catch {
        } finally {
        }
      if (((s = Md(t, r, f, l)), s !== null))
        return On(s, t, l), jv(s, r, l), !0;
    }
    return !1;
  }
  function fh(t, r, s, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: qh(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Fu(t))
    ) {
      if (r) throw Error(i(479));
    } else (r = Md(t, s, l, 2)), r !== null && On(r, t, 2);
  }
  function Fu(t) {
    var r = t.alternate;
    return t === Fe || (r !== null && r === Fe);
  }
  function kv(t, r) {
    ps = zu = !0;
    var s = t.pending;
    s === null ? (r.next = r) : ((r.next = s.next), (s.next = r)),
      (t.pending = r);
  }
  function jv(t, r, s) {
    if ((s & 4194048) !== 0) {
      var l = r.lanes;
      (l &= t.pendingLanes), (s |= l), (r.lanes = s), bt(t, s);
    }
  }
  var qu = {
      readContext: en,
      use: Pu,
      useCallback: St,
      useContext: St,
      useEffect: St,
      useImperativeHandle: St,
      useLayoutEffect: St,
      useInsertionEffect: St,
      useMemo: St,
      useReducer: St,
      useRef: St,
      useState: St,
      useDebugValue: St,
      useDeferredValue: St,
      useTransition: St,
      useSyncExternalStore: St,
      useId: St,
      useHostTransitionStatus: St,
      useFormState: St,
      useActionState: St,
      useOptimistic: St,
      useMemoCache: St,
      useCacheRefresh: St,
    },
    Lv = {
      readContext: en,
      use: Pu,
      useCallback: function (t, r) {
        return (dn().memoizedState = [t, r === void 0 ? null : r]), t;
      },
      useContext: en,
      useEffect: vv,
      useImperativeHandle: function (t, r, s) {
        (s = s != null ? s.concat([t]) : null),
          Hu(4194308, 4, Sv.bind(null, r, t), s);
      },
      useLayoutEffect: function (t, r) {
        return Hu(4194308, 4, t, r);
      },
      useInsertionEffect: function (t, r) {
        Hu(4, 2, t, r);
      },
      useMemo: function (t, r) {
        var s = dn();
        r = r === void 0 ? null : r;
        var l = t();
        if (wi) {
          Ie(!0);
          try {
            t();
          } finally {
            Ie(!1);
          }
        }
        return (s.memoizedState = [l, r]), l;
      },
      useReducer: function (t, r, s) {
        var l = dn();
        if (s !== void 0) {
          var f = s(r);
          if (wi) {
            Ie(!0);
            try {
              s(r);
            } finally {
              Ie(!1);
            }
          }
        } else f = r;
        return (
          (l.memoizedState = l.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (l.queue = t),
          (t = t.dispatch = TR.bind(null, Fe, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var r = dn();
        return (t = { current: t }), (r.memoizedState = t);
      },
      useState: function (t) {
        t = ih(t);
        var r = t.queue,
          s = Dv.bind(null, Fe, r);
        return (r.dispatch = s), [t.memoizedState, s];
      },
      useDebugValue: oh,
      useDeferredValue: function (t, r) {
        var s = dn();
        return lh(s, t, r);
      },
      useTransition: function () {
        var t = ih(!1);
        return (
          (t = Av.bind(null, Fe, t.queue, !0, !1)),
          (dn().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, r, s) {
        var l = Fe,
          f = dn();
        if (tt) {
          if (s === void 0) throw Error(i(407));
          s = s();
        } else {
          if (((s = r()), dt === null)) throw Error(i(349));
          (Qe & 124) !== 0 || nv(l, r, s);
        }
        f.memoizedState = s;
        var h = { value: s, getSnapshot: r };
        return (
          (f.queue = h),
          vv(av.bind(null, l, h, t), [t]),
          (l.flags |= 2048),
          ys(9, Vu(), rv.bind(null, l, h, s, r), null),
          s
        );
      },
      useId: function () {
        var t = dn(),
          r = dt.identifierPrefix;
        if (tt) {
          var s = Fr,
            l = Hr;
          (s = (l & ~(1 << (32 - nt(l) - 1))).toString(32) + s),
            (r = "«" + r + "R" + s),
            (s = Uu++),
            0 < s && (r += "H" + s.toString(32)),
            (r += "»");
        } else (s = bR++), (r = "«" + r + "r" + s.toString(32) + "»");
        return (t.memoizedState = r);
      },
      useHostTransitionStatus: ch,
      useFormState: hv,
      useActionState: hv,
      useOptimistic: function (t) {
        var r = dn();
        r.memoizedState = r.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (r.queue = s),
          (r = fh.bind(null, Fe, !0, s)),
          (s.dispatch = r),
          [t, r]
        );
      },
      useMemoCache: nh,
      useCacheRefresh: function () {
        return (dn().memoizedState = ER.bind(null, Fe));
      },
    },
    zv = {
      readContext: en,
      use: Pu,
      useCallback: Ev,
      useContext: en,
      useEffect: bv,
      useImperativeHandle: _v,
      useInsertionEffect: xv,
      useLayoutEffect: wv,
      useMemo: Tv,
      useReducer: Bu,
      useRef: yv,
      useState: function () {
        return Bu($r);
      },
      useDebugValue: oh,
      useDeferredValue: function (t, r) {
        var s = kt();
        return Rv(s, ot.memoizedState, t, r);
      },
      useTransition: function () {
        var t = Bu($r)[0],
          r = kt().memoizedState;
        return [typeof t == "boolean" ? t : Ho(t), r];
      },
      useSyncExternalStore: tv,
      useId: Mv,
      useHostTransitionStatus: ch,
      useFormState: mv,
      useActionState: mv,
      useOptimistic: function (t, r) {
        var s = kt();
        return ov(s, ot, t, r);
      },
      useMemoCache: nh,
      useCacheRefresh: Nv,
    },
    RR = {
      readContext: en,
      use: Pu,
      useCallback: Ev,
      useContext: en,
      useEffect: bv,
      useImperativeHandle: _v,
      useInsertionEffect: xv,
      useLayoutEffect: wv,
      useMemo: Tv,
      useReducer: ah,
      useRef: yv,
      useState: function () {
        return ah($r);
      },
      useDebugValue: oh,
      useDeferredValue: function (t, r) {
        var s = kt();
        return ot === null ? lh(s, t, r) : Rv(s, ot.memoizedState, t, r);
      },
      useTransition: function () {
        var t = ah($r)[0],
          r = kt().memoizedState;
        return [typeof t == "boolean" ? t : Ho(t), r];
      },
      useSyncExternalStore: tv,
      useId: Mv,
      useHostTransitionStatus: ch,
      useFormState: gv,
      useActionState: gv,
      useOptimistic: function (t, r) {
        var s = kt();
        return ot !== null
          ? ov(s, ot, t, r)
          : ((s.baseState = t), [t, s.queue.dispatch]);
      },
      useMemoCache: nh,
      useCacheRefresh: Nv,
    },
    vs = null,
    Io = 0;
  function Iu(t) {
    var r = Io;
    return (Io += 1), vs === null && (vs = []), Yy(vs, t, r);
  }
  function $o(t, r) {
    (r = r.props.ref), (t.ref = r !== void 0 ? r : null);
  }
  function $u(t, r) {
    throw r.$$typeof === y
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(r)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : t
          )
        ));
  }
  function Uv(t) {
    var r = t._init;
    return r(t._payload);
  }
  function Pv(t) {
    function r(U, z) {
      if (t) {
        var P = U.deletions;
        P === null ? ((U.deletions = [z]), (U.flags |= 16)) : P.push(z);
      }
    }
    function s(U, z) {
      if (!t) return null;
      for (; z !== null; ) r(U, z), (z = z.sibling);
      return null;
    }
    function l(U) {
      for (var z = new Map(); U !== null; )
        U.key !== null ? z.set(U.key, U) : z.set(U.index, U), (U = U.sibling);
      return z;
    }
    function f(U, z) {
      return (U = Vr(U, z)), (U.index = 0), (U.sibling = null), U;
    }
    function h(U, z, P) {
      return (
        (U.index = P),
        t
          ? ((P = U.alternate),
            P !== null
              ? ((P = P.index), P < z ? ((U.flags |= 67108866), z) : P)
              : ((U.flags |= 67108866), z))
          : ((U.flags |= 1048576), z)
      );
    }
    function b(U) {
      return t && U.alternate === null && (U.flags |= 67108866), U;
    }
    function T(U, z, P, te) {
      return z === null || z.tag !== 6
        ? ((z = Dd(P, U.mode, te)), (z.return = U), z)
        : ((z = f(z, P)), (z.return = U), z);
    }
    function M(U, z, P, te) {
      var we = P.type;
      return we === E
        ? ee(U, z, P.props.children, te, P.key)
        : z !== null &&
          (z.elementType === we ||
            (typeof we == "object" &&
              we !== null &&
              we.$$typeof === G &&
              Uv(we) === z.type))
        ? ((z = f(z, P.props)), $o(z, P), (z.return = U), z)
        : ((z = Au(P.type, P.key, P.props, null, U.mode, te)),
          $o(z, P),
          (z.return = U),
          z);
    }
    function B(U, z, P, te) {
      return z === null ||
        z.tag !== 4 ||
        z.stateNode.containerInfo !== P.containerInfo ||
        z.stateNode.implementation !== P.implementation
        ? ((z = kd(P, U.mode, te)), (z.return = U), z)
        : ((z = f(z, P.children || [])), (z.return = U), z);
    }
    function ee(U, z, P, te, we) {
      return z === null || z.tag !== 7
        ? ((z = hi(P, U.mode, te, we)), (z.return = U), z)
        : ((z = f(z, P)), (z.return = U), z);
    }
    function ae(U, z, P) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (z = Dd("" + z, U.mode, P)), (z.return = U), z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case x:
            return (
              (P = Au(z.type, z.key, z.props, null, U.mode, P)),
              $o(P, z),
              (P.return = U),
              P
            );
          case R:
            return (z = kd(z, U.mode, P)), (z.return = U), z;
          case G:
            var te = z._init;
            return (z = te(z._payload)), ae(U, z, P);
        }
        if (fe(z) || oe(z))
          return (z = hi(z, U.mode, P, null)), (z.return = U), z;
        if (typeof z.then == "function") return ae(U, Iu(z), P);
        if (z.$$typeof === N) return ae(U, Nu(U, z), P);
        $u(U, z);
      }
      return null;
    }
    function q(U, z, P, te) {
      var we = z !== null ? z.key : null;
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return we !== null ? null : T(U, z, "" + P, te);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case x:
            return P.key === we ? M(U, z, P, te) : null;
          case R:
            return P.key === we ? B(U, z, P, te) : null;
          case G:
            return (we = P._init), (P = we(P._payload)), q(U, z, P, te);
        }
        if (fe(P) || oe(P)) return we !== null ? null : ee(U, z, P, te, null);
        if (typeof P.then == "function") return q(U, z, Iu(P), te);
        if (P.$$typeof === N) return q(U, z, Nu(U, P), te);
        $u(U, P);
      }
      return null;
    }
    function $(U, z, P, te, we) {
      if (
        (typeof te == "string" && te !== "") ||
        typeof te == "number" ||
        typeof te == "bigint"
      )
        return (U = U.get(P) || null), T(z, U, "" + te, we);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case x:
            return (
              (U = U.get(te.key === null ? P : te.key) || null), M(z, U, te, we)
            );
          case R:
            return (
              (U = U.get(te.key === null ? P : te.key) || null), B(z, U, te, we)
            );
          case G:
            var $e = te._init;
            return (te = $e(te._payload)), $(U, z, P, te, we);
        }
        if (fe(te) || oe(te))
          return (U = U.get(P) || null), ee(z, U, te, we, null);
        if (typeof te.then == "function") return $(U, z, P, Iu(te), we);
        if (te.$$typeof === N) return $(U, z, P, Nu(z, te), we);
        $u(z, te);
      }
      return null;
    }
    function De(U, z, P, te) {
      for (
        var we = null, $e = null, Re = z, Ne = (z = 0), $t = null;
        Re !== null && Ne < P.length;
        Ne++
      ) {
        Re.index > Ne ? (($t = Re), (Re = null)) : ($t = Re.sibling);
        var Je = q(U, Re, P[Ne], te);
        if (Je === null) {
          Re === null && (Re = $t);
          break;
        }
        t && Re && Je.alternate === null && r(U, Re),
          (z = h(Je, z, Ne)),
          $e === null ? (we = Je) : ($e.sibling = Je),
          ($e = Je),
          (Re = $t);
      }
      if (Ne === P.length) return s(U, Re), tt && pi(U, Ne), we;
      if (Re === null) {
        for (; Ne < P.length; Ne++)
          (Re = ae(U, P[Ne], te)),
            Re !== null &&
              ((z = h(Re, z, Ne)),
              $e === null ? (we = Re) : ($e.sibling = Re),
              ($e = Re));
        return tt && pi(U, Ne), we;
      }
      for (Re = l(Re); Ne < P.length; Ne++)
        ($t = $(Re, U, Ne, P[Ne], te)),
          $t !== null &&
            (t &&
              $t.alternate !== null &&
              Re.delete($t.key === null ? Ne : $t.key),
            (z = h($t, z, Ne)),
            $e === null ? (we = $t) : ($e.sibling = $t),
            ($e = $t));
      return (
        t &&
          Re.forEach(function (Va) {
            return r(U, Va);
          }),
        tt && pi(U, Ne),
        we
      );
    }
    function Me(U, z, P, te) {
      if (P == null) throw Error(i(151));
      for (
        var we = null,
          $e = null,
          Re = z,
          Ne = (z = 0),
          $t = null,
          Je = P.next();
        Re !== null && !Je.done;
        Ne++, Je = P.next()
      ) {
        Re.index > Ne ? (($t = Re), (Re = null)) : ($t = Re.sibling);
        var Va = q(U, Re, Je.value, te);
        if (Va === null) {
          Re === null && (Re = $t);
          break;
        }
        t && Re && Va.alternate === null && r(U, Re),
          (z = h(Va, z, Ne)),
          $e === null ? (we = Va) : ($e.sibling = Va),
          ($e = Va),
          (Re = $t);
      }
      if (Je.done) return s(U, Re), tt && pi(U, Ne), we;
      if (Re === null) {
        for (; !Je.done; Ne++, Je = P.next())
          (Je = ae(U, Je.value, te)),
            Je !== null &&
              ((z = h(Je, z, Ne)),
              $e === null ? (we = Je) : ($e.sibling = Je),
              ($e = Je));
        return tt && pi(U, Ne), we;
      }
      for (Re = l(Re); !Je.done; Ne++, Je = P.next())
        (Je = $(Re, U, Ne, Je.value, te)),
          Je !== null &&
            (t &&
              Je.alternate !== null &&
              Re.delete(Je.key === null ? Ne : Je.key),
            (z = h(Je, z, Ne)),
            $e === null ? (we = Je) : ($e.sibling = Je),
            ($e = Je));
      return (
        t &&
          Re.forEach(function (AA) {
            return r(U, AA);
          }),
        tt && pi(U, Ne),
        we
      );
    }
    function ut(U, z, P, te) {
      if (
        (typeof P == "object" &&
          P !== null &&
          P.type === E &&
          P.key === null &&
          (P = P.props.children),
        typeof P == "object" && P !== null)
      ) {
        switch (P.$$typeof) {
          case x:
            e: {
              for (var we = P.key; z !== null; ) {
                if (z.key === we) {
                  if (((we = P.type), we === E)) {
                    if (z.tag === 7) {
                      s(U, z.sibling),
                        (te = f(z, P.props.children)),
                        (te.return = U),
                        (U = te);
                      break e;
                    }
                  } else if (
                    z.elementType === we ||
                    (typeof we == "object" &&
                      we !== null &&
                      we.$$typeof === G &&
                      Uv(we) === z.type)
                  ) {
                    s(U, z.sibling),
                      (te = f(z, P.props)),
                      $o(te, P),
                      (te.return = U),
                      (U = te);
                    break e;
                  }
                  s(U, z);
                  break;
                } else r(U, z);
                z = z.sibling;
              }
              P.type === E
                ? ((te = hi(P.props.children, U.mode, te, P.key)),
                  (te.return = U),
                  (U = te))
                : ((te = Au(P.type, P.key, P.props, null, U.mode, te)),
                  $o(te, P),
                  (te.return = U),
                  (U = te));
            }
            return b(U);
          case R:
            e: {
              for (we = P.key; z !== null; ) {
                if (z.key === we)
                  if (
                    z.tag === 4 &&
                    z.stateNode.containerInfo === P.containerInfo &&
                    z.stateNode.implementation === P.implementation
                  ) {
                    s(U, z.sibling),
                      (te = f(z, P.children || [])),
                      (te.return = U),
                      (U = te);
                    break e;
                  } else {
                    s(U, z);
                    break;
                  }
                else r(U, z);
                z = z.sibling;
              }
              (te = kd(P, U.mode, te)), (te.return = U), (U = te);
            }
            return b(U);
          case G:
            return (we = P._init), (P = we(P._payload)), ut(U, z, P, te);
        }
        if (fe(P)) return De(U, z, P, te);
        if (oe(P)) {
          if (((we = oe(P)), typeof we != "function")) throw Error(i(150));
          return (P = we.call(P)), Me(U, z, P, te);
        }
        if (typeof P.then == "function") return ut(U, z, Iu(P), te);
        if (P.$$typeof === N) return ut(U, z, Nu(U, P), te);
        $u(U, P);
      }
      return (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
        ? ((P = "" + P),
          z !== null && z.tag === 6
            ? (s(U, z.sibling), (te = f(z, P)), (te.return = U), (U = te))
            : (s(U, z), (te = Dd(P, U.mode, te)), (te.return = U), (U = te)),
          b(U))
        : s(U, z);
    }
    return function (U, z, P, te) {
      try {
        Io = 0;
        var we = ut(U, z, P, te);
        return (vs = null), we;
      } catch (Re) {
        if (Re === Lo || Re === ku) throw Re;
        var $e = En(29, Re, null, U.mode);
        return ($e.lanes = te), ($e.return = U), $e;
      } finally {
      }
    };
  }
  var bs = Pv(!0),
    Bv = Pv(!1),
    In = H(null),
    xr = null;
  function Ta(t) {
    var r = t.alternate;
    W(Pt, Pt.current & 1),
      W(In, t),
      xr === null &&
        (r === null || ms.current !== null || r.memoizedState !== null) &&
        (xr = t);
  }
  function Vv(t) {
    if (t.tag === 22) {
      if ((W(Pt, Pt.current), W(In, t), xr === null)) {
        var r = t.alternate;
        r !== null && r.memoizedState !== null && (xr = t);
      }
    } else Ra();
  }
  function Ra() {
    W(Pt, Pt.current), W(In, In.current);
  }
  function Gr(t) {
    ie(In), xr === t && (xr = null), ie(Pt);
  }
  var Pt = H(0);
  function Gu(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || tm(s))
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  function dh(t, r, s, l) {
    (r = t.memoizedState),
      (s = s(l, r)),
      (s = s == null ? r : g({}, r, s)),
      (t.memoizedState = s),
      t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var hh = {
    enqueueSetState: function (t, r, s) {
      t = t._reactInternals;
      var l = Cn(),
        f = Sa(l);
      (f.payload = r),
        s != null && (f.callback = s),
        (r = _a(t, f, l)),
        r !== null && (On(r, t, l), Uo(r, t, l));
    },
    enqueueReplaceState: function (t, r, s) {
      t = t._reactInternals;
      var l = Cn(),
        f = Sa(l);
      (f.tag = 1),
        (f.payload = r),
        s != null && (f.callback = s),
        (r = _a(t, f, l)),
        r !== null && (On(r, t, l), Uo(r, t, l));
    },
    enqueueForceUpdate: function (t, r) {
      t = t._reactInternals;
      var s = Cn(),
        l = Sa(s);
      (l.tag = 2),
        r != null && (l.callback = r),
        (r = _a(t, l, s)),
        r !== null && (On(r, t, s), Uo(r, t, s));
    },
  };
  function Hv(t, r, s, l, f, h, b) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, h, b)
        : r.prototype && r.prototype.isPureReactComponent
        ? !Ao(s, l) || !Ao(f, h)
        : !0
    );
  }
  function Fv(t, r, s, l) {
    (t = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(s, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(s, l),
      r.state !== t && hh.enqueueReplaceState(r, r.state, null);
  }
  function Si(t, r) {
    var s = r;
    if ("ref" in r) {
      s = {};
      for (var l in r) l !== "ref" && (s[l] = r[l]);
    }
    if ((t = t.defaultProps)) {
      s === r && (s = g({}, s));
      for (var f in t) s[f] === void 0 && (s[f] = t[f]);
    }
    return s;
  }
  var Yu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var r = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(r)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function qv(t) {
    Yu(t);
  }
  function Iv(t) {
    console.error(t);
  }
  function $v(t) {
    Yu(t);
  }
  function Zu(t, r) {
    try {
      var s = t.onUncaughtError;
      s(r.value, { componentStack: r.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Gv(t, r, s) {
    try {
      var l = t.onCaughtError;
      l(s.value, {
        componentStack: s.stack,
        errorBoundary: r.tag === 1 ? r.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function mh(t, r, s) {
    return (
      (s = Sa(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        Zu(t, r);
      }),
      s
    );
  }
  function Yv(t) {
    return (t = Sa(t)), (t.tag = 3), t;
  }
  function Zv(t, r, s, l) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = l.value;
      (t.payload = function () {
        return f(h);
      }),
        (t.callback = function () {
          Gv(r, s, l);
        });
    }
    var b = s.stateNode;
    b !== null &&
      typeof b.componentDidCatch == "function" &&
      (t.callback = function () {
        Gv(r, s, l),
          typeof f != "function" &&
            (Da === null ? (Da = new Set([this])) : Da.add(this));
        var T = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: T !== null ? T : "",
        });
      });
  }
  function AR(t, r, s, l, f) {
    if (
      ((s.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((r = s.alternate),
        r !== null && Do(r, s, f, !0),
        (s = In.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              xr === null ? Ph() : s.alternate === null && yt === 0 && (yt = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              l === qd
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null ? (s.updateQueue = new Set([l])) : r.add(l),
                  Vh(t, l, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              l === qd
                ? (s.flags |= 16384)
                : ((r = s.updateQueue),
                  r === null
                    ? ((r = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (s.updateQueue = r))
                    : ((s = r.retryQueue),
                      s === null ? (r.retryQueue = new Set([l])) : s.add(l)),
                  Vh(t, l, f)),
              !1
            );
        }
        throw Error(i(435, s.tag));
      }
      return Vh(t, l, f), Ph(), !1;
    }
    if (tt)
      return (
        (r = In.current),
        r !== null
          ? ((r.flags & 65536) === 0 && (r.flags |= 256),
            (r.flags |= 65536),
            (r.lanes = f),
            l !== zd && ((t = Error(i(422), { cause: l })), No(Vn(t, s))))
          : (l !== zd && ((r = Error(i(423), { cause: l })), No(Vn(r, s))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (l = Vn(l, s)),
            (f = mh(t.stateNode, l, f)),
            Gd(t, f),
            yt !== 4 && (yt = 2)),
        !1
      );
    var h = Error(i(520), { cause: l });
    if (
      ((h = Vn(h, s)),
      Wo === null ? (Wo = [h]) : Wo.push(h),
      yt !== 4 && (yt = 2),
      r === null)
    )
      return !0;
    (l = Vn(l, s)), (s = r);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (t = f & -f),
            (s.lanes |= t),
            (t = mh(s.stateNode, l, t)),
            Gd(s, t),
            !1
          );
        case 1:
          if (
            ((r = s.type),
            (h = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof r.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (Da === null || !Da.has(h)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Yv(f)),
              Zv(f, t, s, l),
              Gd(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var Kv = Error(i(461)),
    qt = !1;
  function Zt(t, r, s, l) {
    r.child = t === null ? Bv(r, null, s, l) : bs(r, t.child, s, l);
  }
  function Xv(t, r, s, l, f) {
    s = s.render;
    var h = r.ref;
    if ("ref" in l) {
      var b = {};
      for (var T in l) T !== "ref" && (b[T] = l[T]);
    } else b = l;
    return (
      bi(r),
      (l = Qd(t, r, s, b, h, f)),
      (T = Wd()),
      t !== null && !qt
        ? (Jd(t, r, f), Yr(t, r, f))
        : (tt && T && jd(r), (r.flags |= 1), Zt(t, r, l, f), r.child)
    );
  }
  function Qv(t, r, s, l, f) {
    if (t === null) {
      var h = s.type;
      return typeof h == "function" &&
        !Nd(h) &&
        h.defaultProps === void 0 &&
        s.compare === null
        ? ((r.tag = 15), (r.type = h), Wv(t, r, h, l, f))
        : ((t = Au(s.type, null, l, r, r.mode, f)),
          (t.ref = r.ref),
          (t.return = r),
          (r.child = t));
    }
    if (((h = t.child), !Sh(t, f))) {
      var b = h.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Ao), s(b, l) && t.ref === r.ref)
      )
        return Yr(t, r, f);
    }
    return (
      (r.flags |= 1),
      (t = Vr(h, l)),
      (t.ref = r.ref),
      (t.return = r),
      (r.child = t)
    );
  }
  function Wv(t, r, s, l, f) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (Ao(h, l) && t.ref === r.ref)
        if (((qt = !1), (r.pendingProps = l = h), Sh(t, f)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return (r.lanes = t.lanes), Yr(t, r, f);
    }
    return ph(t, r, s, l, f);
  }
  function Jv(t, r, s) {
    var l = r.pendingProps,
      f = l.children,
      h = t !== null ? t.memoizedState : null;
    if (l.mode === "hidden") {
      if ((r.flags & 128) !== 0) {
        if (((l = h !== null ? h.baseLanes | s : s), t !== null)) {
          for (f = r.child = t.child, h = 0; f !== null; )
            (h = h | f.lanes | f.childLanes), (f = f.sibling);
          r.childLanes = h & ~l;
        } else (r.childLanes = 0), (r.child = null);
        return eb(t, r, l, s);
      }
      if ((s & 536870912) !== 0)
        (r.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Du(r, h !== null ? h.cachePool : null),
          h !== null ? Wy(r, h) : Zd(),
          Vv(r);
      else
        return (
          (r.lanes = r.childLanes = 536870912),
          eb(t, r, h !== null ? h.baseLanes | s : s, s)
        );
    } else
      h !== null
        ? (Du(r, h.cachePool), Wy(r, h), Ra(), (r.memoizedState = null))
        : (t !== null && Du(r, null), Zd(), Ra());
    return Zt(t, r, f, s), r.child;
  }
  function eb(t, r, s, l) {
    var f = Fd();
    return (
      (f = f === null ? null : { parent: Ut._currentValue, pool: f }),
      (r.memoizedState = { baseLanes: s, cachePool: f }),
      t !== null && Du(r, null),
      Zd(),
      Vv(r),
      t !== null && Do(t, r, l, !0),
      null
    );
  }
  function Ku(t, r) {
    var s = r.ref;
    if (s === null) t !== null && t.ref !== null && (r.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (t === null || t.ref !== s) && (r.flags |= 4194816);
    }
  }
  function ph(t, r, s, l, f) {
    return (
      bi(r),
      (s = Qd(t, r, s, l, void 0, f)),
      (l = Wd()),
      t !== null && !qt
        ? (Jd(t, r, f), Yr(t, r, f))
        : (tt && l && jd(r), (r.flags |= 1), Zt(t, r, s, f), r.child)
    );
  }
  function tb(t, r, s, l, f, h) {
    return (
      bi(r),
      (r.updateQueue = null),
      (s = ev(r, l, s, f)),
      Jy(t),
      (l = Wd()),
      t !== null && !qt
        ? (Jd(t, r, h), Yr(t, r, h))
        : (tt && l && jd(r), (r.flags |= 1), Zt(t, r, s, h), r.child)
    );
  }
  function nb(t, r, s, l, f) {
    if ((bi(r), r.stateNode === null)) {
      var h = us,
        b = s.contextType;
      typeof b == "object" && b !== null && (h = en(b)),
        (h = new s(l, h)),
        (r.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = hh),
        (r.stateNode = h),
        (h._reactInternals = r),
        (h = r.stateNode),
        (h.props = l),
        (h.state = r.memoizedState),
        (h.refs = {}),
        Id(r),
        (b = s.contextType),
        (h.context = typeof b == "object" && b !== null ? en(b) : us),
        (h.state = r.memoizedState),
        (b = s.getDerivedStateFromProps),
        typeof b == "function" && (dh(r, s, b, l), (h.state = r.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((b = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          b !== h.state && hh.enqueueReplaceState(h, h.state, null),
          Bo(r, l, h, f),
          Po(),
          (h.state = r.memoizedState)),
        typeof h.componentDidMount == "function" && (r.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      h = r.stateNode;
      var T = r.memoizedProps,
        M = Si(s, T);
      h.props = M;
      var B = h.context,
        ee = s.contextType;
      (b = us), typeof ee == "object" && ee !== null && (b = en(ee));
      var ae = s.getDerivedStateFromProps;
      (ee =
        typeof ae == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (T = r.pendingProps !== T),
        ee ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((T || B !== b) && Fv(r, h, l, b)),
        (wa = !1);
      var q = r.memoizedState;
      (h.state = q),
        Bo(r, l, h, f),
        Po(),
        (B = r.memoizedState),
        T || q !== B || wa
          ? (typeof ae == "function" &&
              (dh(r, s, ae, l), (B = r.memoizedState)),
            (M = wa || Hv(r, s, M, l, q, B, b))
              ? (ee ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = B)),
            (h.props = l),
            (h.state = B),
            (h.context = b),
            (l = M))
          : (typeof h.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (h = r.stateNode),
        $d(t, r),
        (b = r.memoizedProps),
        (ee = Si(s, b)),
        (h.props = ee),
        (ae = r.pendingProps),
        (q = h.context),
        (B = s.contextType),
        (M = us),
        typeof B == "object" && B !== null && (M = en(B)),
        (T = s.getDerivedStateFromProps),
        (B =
          typeof T == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((b !== ae || q !== M) && Fv(r, h, l, M)),
        (wa = !1),
        (q = r.memoizedState),
        (h.state = q),
        Bo(r, l, h, f),
        Po();
      var $ = r.memoizedState;
      b !== ae ||
      q !== $ ||
      wa ||
      (t !== null && t.dependencies !== null && Mu(t.dependencies))
        ? (typeof T == "function" && (dh(r, s, T, l), ($ = r.memoizedState)),
          (ee =
            wa ||
            Hv(r, s, ee, l, q, $, M) ||
            (t !== null && t.dependencies !== null && Mu(t.dependencies)))
            ? (B ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(l, $, M),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(l, $, M)),
              typeof h.componentDidUpdate == "function" && (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (b === t.memoizedProps && q === t.memoizedState) ||
                (r.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (b === t.memoizedProps && q === t.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = $)),
          (h.props = l),
          (h.state = $),
          (h.context = M),
          (l = ee))
        : (typeof h.componentDidUpdate != "function" ||
            (b === t.memoizedProps && q === t.memoizedState) ||
            (r.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (b === t.memoizedProps && q === t.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return (
      (h = l),
      Ku(t, r),
      (l = (r.flags & 128) !== 0),
      h || l
        ? ((h = r.stateNode),
          (s =
            l && typeof s.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (r.flags |= 1),
          t !== null && l
            ? ((r.child = bs(r, t.child, null, f)),
              (r.child = bs(r, null, s, f)))
            : Zt(t, r, s, f),
          (r.memoizedState = h.state),
          (t = r.child))
        : (t = Yr(t, r, f)),
      t
    );
  }
  function rb(t, r, s, l) {
    return Mo(), (r.flags |= 256), Zt(t, r, s, l), r.child;
  }
  var gh = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function yh(t) {
    return { baseLanes: t, cachePool: Iy() };
  }
  function vh(t, r, s) {
    return (t = t !== null ? t.childLanes & ~s : 0), r && (t |= $n), t;
  }
  function ab(t, r, s) {
    var l = r.pendingProps,
      f = !1,
      h = (r.flags & 128) !== 0,
      b;
    if (
      ((b = h) ||
        (b =
          t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
      b && ((f = !0), (r.flags &= -129)),
      (b = (r.flags & 32) !== 0),
      (r.flags &= -33),
      t === null)
    ) {
      if (tt) {
        if ((f ? Ta(r) : Ra(), tt)) {
          var T = gt,
            M;
          if ((M = T)) {
            e: {
              for (M = T, T = br; M.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if (((M = tr(M.nextSibling)), M === null)) {
                  T = null;
                  break e;
                }
              }
              T = M;
            }
            T !== null
              ? ((r.memoizedState = {
                  dehydrated: T,
                  treeContext: mi !== null ? { id: Hr, overflow: Fr } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (M = En(18, null, null, 0)),
                (M.stateNode = T),
                (M.return = r),
                (r.child = M),
                (sn = r),
                (gt = null),
                (M = !0))
              : (M = !1);
          }
          M || yi(r);
        }
        if (
          ((T = r.memoizedState),
          T !== null && ((T = T.dehydrated), T !== null))
        )
          return tm(T) ? (r.lanes = 32) : (r.lanes = 536870912), null;
        Gr(r);
      }
      return (
        (T = l.children),
        (l = l.fallback),
        f
          ? (Ra(),
            (f = r.mode),
            (T = Xu({ mode: "hidden", children: T }, f)),
            (l = hi(l, f, s, null)),
            (T.return = r),
            (l.return = r),
            (T.sibling = l),
            (r.child = T),
            (f = r.child),
            (f.memoizedState = yh(s)),
            (f.childLanes = vh(t, b, s)),
            (r.memoizedState = gh),
            l)
          : (Ta(r), bh(r, T))
      );
    }
    if (
      ((M = t.memoizedState), M !== null && ((T = M.dehydrated), T !== null))
    ) {
      if (h)
        r.flags & 256
          ? (Ta(r), (r.flags &= -257), (r = xh(t, r, s)))
          : r.memoizedState !== null
          ? (Ra(), (r.child = t.child), (r.flags |= 128), (r = null))
          : (Ra(),
            (f = l.fallback),
            (T = r.mode),
            (l = Xu({ mode: "visible", children: l.children }, T)),
            (f = hi(f, T, s, null)),
            (f.flags |= 2),
            (l.return = r),
            (f.return = r),
            (l.sibling = f),
            (r.child = l),
            bs(r, t.child, null, s),
            (l = r.child),
            (l.memoizedState = yh(s)),
            (l.childLanes = vh(t, b, s)),
            (r.memoizedState = gh),
            (r = f));
      else if ((Ta(r), tm(T))) {
        if (((b = T.nextSibling && T.nextSibling.dataset), b)) var B = b.dgst;
        (b = B),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = b),
          No({ value: l, source: null, stack: null }),
          (r = xh(t, r, s));
      } else if (
        (qt || Do(t, r, s, !1), (b = (s & t.childLanes) !== 0), qt || b)
      ) {
        if (
          ((b = dt),
          b !== null &&
            ((l = s & -s),
            (l = (l & 42) !== 0 ? 1 : Nt(l)),
            (l = (l & (b.suspendedLanes | s)) !== 0 ? 0 : l),
            l !== 0 && l !== M.retryLane))
        )
          throw ((M.retryLane = l), ls(t, l), On(b, t, l), Kv);
        T.data === "$?" || Ph(), (r = xh(t, r, s));
      } else
        T.data === "$?"
          ? ((r.flags |= 192), (r.child = t.child), (r = null))
          : ((t = M.treeContext),
            (gt = tr(T.nextSibling)),
            (sn = r),
            (tt = !0),
            (gi = null),
            (br = !1),
            t !== null &&
              ((Fn[qn++] = Hr),
              (Fn[qn++] = Fr),
              (Fn[qn++] = mi),
              (Hr = t.id),
              (Fr = t.overflow),
              (mi = r)),
            (r = bh(r, l.children)),
            (r.flags |= 4096));
      return r;
    }
    return f
      ? (Ra(),
        (f = l.fallback),
        (T = r.mode),
        (M = t.child),
        (B = M.sibling),
        (l = Vr(M, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = M.subtreeFlags & 65011712),
        B !== null ? (f = Vr(B, f)) : ((f = hi(f, T, s, null)), (f.flags |= 2)),
        (f.return = r),
        (l.return = r),
        (l.sibling = f),
        (r.child = l),
        (l = f),
        (f = r.child),
        (T = t.child.memoizedState),
        T === null
          ? (T = yh(s))
          : ((M = T.cachePool),
            M !== null
              ? ((B = Ut._currentValue),
                (M = M.parent !== B ? { parent: B, pool: B } : M))
              : (M = Iy()),
            (T = { baseLanes: T.baseLanes | s, cachePool: M })),
        (f.memoizedState = T),
        (f.childLanes = vh(t, b, s)),
        (r.memoizedState = gh),
        l)
      : (Ta(r),
        (s = t.child),
        (t = s.sibling),
        (s = Vr(s, { mode: "visible", children: l.children })),
        (s.return = r),
        (s.sibling = null),
        t !== null &&
          ((b = r.deletions),
          b === null ? ((r.deletions = [t]), (r.flags |= 16)) : b.push(t)),
        (r.child = s),
        (r.memoizedState = null),
        s);
  }
  function bh(t, r) {
    return (
      (r = Xu({ mode: "visible", children: r }, t.mode)),
      (r.return = t),
      (t.child = r)
    );
  }
  function Xu(t, r) {
    return (
      (t = En(22, t, null, r)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function xh(t, r, s) {
    return (
      bs(r, t.child, null, s),
      (t = bh(r, r.pendingProps.children)),
      (t.flags |= 2),
      (r.memoizedState = null),
      t
    );
  }
  function ib(t, r, s) {
    t.lanes |= r;
    var l = t.alternate;
    l !== null && (l.lanes |= r), Pd(t.return, r, s);
  }
  function wh(t, r, s, l, f) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: f,
        })
      : ((h.isBackwards = r),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = l),
        (h.tail = s),
        (h.tailMode = f));
  }
  function sb(t, r, s) {
    var l = r.pendingProps,
      f = l.revealOrder,
      h = l.tail;
    if ((Zt(t, r, l.children, s), (l = Pt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = r.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ib(t, s, r);
          else if (t.tag === 19) ib(t, s, r);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === r) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === r) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      l &= 1;
    }
    switch ((W(Pt, l), f)) {
      case "forwards":
        for (s = r.child, f = null; s !== null; )
          (t = s.alternate),
            t !== null && Gu(t) === null && (f = s),
            (s = s.sibling);
        (s = f),
          s === null
            ? ((f = r.child), (r.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          wh(r, !1, f, s, h);
        break;
      case "backwards":
        for (s = null, f = r.child, r.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && Gu(t) === null)) {
            r.child = f;
            break;
          }
          (t = f.sibling), (f.sibling = s), (s = f), (f = t);
        }
        wh(r, !0, s, null, h);
        break;
      case "together":
        wh(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Yr(t, r, s) {
    if (
      (t !== null && (r.dependencies = t.dependencies),
      (Na |= r.lanes),
      (s & r.childLanes) === 0)
    )
      if (t !== null) {
        if ((Do(t, r, s, !1), (s & r.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && r.child !== t.child) throw Error(i(153));
    if (r.child !== null) {
      for (
        t = r.child, s = Vr(t, t.pendingProps), r.child = s, s.return = r;
        t.sibling !== null;

      )
        (t = t.sibling),
          (s = s.sibling = Vr(t, t.pendingProps)),
          (s.return = r);
      s.sibling = null;
    }
    return r.child;
  }
  function Sh(t, r) {
    return (t.lanes & r) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Mu(t)));
  }
  function CR(t, r, s) {
    switch (r.tag) {
      case 3:
        ze(r, r.stateNode.containerInfo),
          xa(r, Ut, t.memoizedState.cache),
          Mo();
        break;
      case 27:
      case 5:
        mt(r);
        break;
      case 4:
        ze(r, r.stateNode.containerInfo);
        break;
      case 10:
        xa(r, r.type, r.memoizedProps.value);
        break;
      case 13:
        var l = r.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ta(r), (r.flags |= 128), null)
            : (s & r.child.childLanes) !== 0
            ? ab(t, r, s)
            : (Ta(r), (t = Yr(t, r, s)), t !== null ? t.sibling : null);
        Ta(r);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((l = (s & r.childLanes) !== 0),
          l || (Do(t, r, s, !1), (l = (s & r.childLanes) !== 0)),
          f)
        ) {
          if (l) return sb(t, r, s);
          r.flags |= 128;
        }
        if (
          ((f = r.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          W(Pt, Pt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), Jv(t, r, s);
      case 24:
        xa(r, Ut, t.memoizedState.cache);
    }
    return Yr(t, r, s);
  }
  function ob(t, r, s) {
    if (t !== null)
      if (t.memoizedProps !== r.pendingProps) qt = !0;
      else {
        if (!Sh(t, s) && (r.flags & 128) === 0) return (qt = !1), CR(t, r, s);
        qt = (t.flags & 131072) !== 0;
      }
    else (qt = !1), tt && (r.flags & 1048576) !== 0 && Uy(r, Ou, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 16:
        e: {
          t = r.pendingProps;
          var l = r.elementType,
            f = l._init;
          if (((l = f(l._payload)), (r.type = l), typeof l == "function"))
            Nd(l)
              ? ((t = Si(l, t)), (r.tag = 1), (r = nb(null, r, l, t, s)))
              : ((r.tag = 0), (r = ph(null, r, l, t, s)));
          else {
            if (l != null) {
              if (((f = l.$$typeof), f === k)) {
                (r.tag = 11), (r = Xv(null, r, l, t, s));
                break e;
              } else if (f === Y) {
                (r.tag = 14), (r = Qv(null, r, l, t, s));
                break e;
              }
            }
            throw ((r = se(l) || l), Error(i(306, r, "")));
          }
        }
        return r;
      case 0:
        return ph(t, r, r.type, r.pendingProps, s);
      case 1:
        return (l = r.type), (f = Si(l, r.pendingProps)), nb(t, r, l, f, s);
      case 3:
        e: {
          if ((ze(r, r.stateNode.containerInfo), t === null))
            throw Error(i(387));
          l = r.pendingProps;
          var h = r.memoizedState;
          (f = h.element), $d(t, r), Bo(r, l, null, s);
          var b = r.memoizedState;
          if (
            ((l = b.cache),
            xa(r, Ut, l),
            l !== h.cache && Bd(r, [Ut], s, !0),
            Po(),
            (l = b.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: l, isDehydrated: !1, cache: b.cache }),
              (r.updateQueue.baseState = h),
              (r.memoizedState = h),
              r.flags & 256)
            ) {
              r = rb(t, r, l, s);
              break e;
            } else if (l !== f) {
              (f = Vn(Error(i(424)), r)), No(f), (r = rb(t, r, l, s));
              break e;
            } else {
              switch (((t = r.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                gt = tr(t.firstChild),
                  sn = r,
                  tt = !0,
                  gi = null,
                  br = !0,
                  s = Bv(r, null, l, s),
                  r.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((Mo(), l === f)) {
              r = Yr(t, r, s);
              break e;
            }
            Zt(t, r, l, s);
          }
          r = r.child;
        }
        return r;
      case 26:
        return (
          Ku(t, r),
          t === null
            ? (s = f0(r.type, null, r.pendingProps, null))
              ? (r.memoizedState = s)
              : tt ||
                ((s = r.type),
                (t = r.pendingProps),
                (l = cc(de.current).createElement(s)),
                (l[wt] = r),
                (l[ft] = t),
                Xt(l, s, t),
                Ft(l),
                (r.stateNode = l))
            : (r.memoizedState = f0(
                r.type,
                t.memoizedProps,
                r.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          mt(r),
          t === null &&
            tt &&
            ((l = r.stateNode = l0(r.type, r.pendingProps, de.current)),
            (sn = r),
            (br = !0),
            (f = gt),
            La(r.type) ? ((nm = f), (gt = tr(l.firstChild))) : (gt = f)),
          Zt(t, r, r.pendingProps.children, s),
          Ku(t, r),
          t === null && (r.flags |= 4194304),
          r.child
        );
      case 5:
        return (
          t === null &&
            tt &&
            ((f = l = gt) &&
              ((l = nA(l, r.type, r.pendingProps, br)),
              l !== null
                ? ((r.stateNode = l),
                  (sn = r),
                  (gt = tr(l.firstChild)),
                  (br = !1),
                  (f = !0))
                : (f = !1)),
            f || yi(r)),
          mt(r),
          (f = r.type),
          (h = r.pendingProps),
          (b = t !== null ? t.memoizedProps : null),
          (l = h.children),
          Wh(f, h) ? (l = null) : b !== null && Wh(f, b) && (r.flags |= 32),
          r.memoizedState !== null &&
            ((f = Qd(t, r, xR, null, null, s)), (ol._currentValue = f)),
          Ku(t, r),
          Zt(t, r, l, s),
          r.child
        );
      case 6:
        return (
          t === null &&
            tt &&
            ((t = s = gt) &&
              ((s = rA(s, r.pendingProps, br)),
              s !== null
                ? ((r.stateNode = s), (sn = r), (gt = null), (t = !0))
                : (t = !1)),
            t || yi(r)),
          null
        );
      case 13:
        return ab(t, r, s);
      case 4:
        return (
          ze(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          t === null ? (r.child = bs(r, null, l, s)) : Zt(t, r, l, s),
          r.child
        );
      case 11:
        return Xv(t, r, r.type, r.pendingProps, s);
      case 7:
        return Zt(t, r, r.pendingProps, s), r.child;
      case 8:
        return Zt(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return Zt(t, r, r.pendingProps.children, s), r.child;
      case 10:
        return (
          (l = r.pendingProps),
          xa(r, r.type, l.value),
          Zt(t, r, l.children, s),
          r.child
        );
      case 9:
        return (
          (f = r.type._context),
          (l = r.pendingProps.children),
          bi(r),
          (f = en(f)),
          (l = l(f)),
          (r.flags |= 1),
          Zt(t, r, l, s),
          r.child
        );
      case 14:
        return Qv(t, r, r.type, r.pendingProps, s);
      case 15:
        return Wv(t, r, r.type, r.pendingProps, s);
      case 19:
        return sb(t, r, s);
      case 31:
        return (
          (l = r.pendingProps),
          (s = r.mode),
          (l = { mode: l.mode, children: l.children }),
          t === null
            ? ((s = Xu(l, s)),
              (s.ref = r.ref),
              (r.child = s),
              (s.return = r),
              (r = s))
            : ((s = Vr(t.child, l)),
              (s.ref = r.ref),
              (r.child = s),
              (s.return = r),
              (r = s)),
          r
        );
      case 22:
        return Jv(t, r, s);
      case 24:
        return (
          bi(r),
          (l = en(Ut)),
          t === null
            ? ((f = Fd()),
              f === null &&
                ((f = dt),
                (h = Vd()),
                (f.pooledCache = h),
                h.refCount++,
                h !== null && (f.pooledCacheLanes |= s),
                (f = h)),
              (r.memoizedState = { parent: l, cache: f }),
              Id(r),
              xa(r, Ut, f))
            : ((t.lanes & s) !== 0 && ($d(t, r), Bo(r, null, null, s), Po()),
              (f = t.memoizedState),
              (h = r.memoizedState),
              f.parent !== l
                ? ((f = { parent: l, cache: l }),
                  (r.memoizedState = f),
                  r.lanes === 0 &&
                    (r.memoizedState = r.updateQueue.baseState = f),
                  xa(r, Ut, l))
                : ((l = h.cache),
                  xa(r, Ut, l),
                  l !== f.cache && Bd(r, [Ut], s, !0))),
          Zt(t, r, r.pendingProps.children, s),
          r.child
        );
      case 29:
        throw r.pendingProps;
    }
    throw Error(i(156, r.tag));
  }
  function Zr(t) {
    t.flags |= 4;
  }
  function lb(t, r) {
    if (r.type !== "stylesheet" || (r.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !g0(r))) {
      if (
        ((r = In.current),
        r !== null &&
          ((Qe & 4194048) === Qe
            ? xr !== null
            : ((Qe & 62914560) !== Qe && (Qe & 536870912) === 0) || r !== xr))
      )
        throw ((zo = qd), $y);
      t.flags |= 8192;
    }
  }
  function Qu(t, r) {
    r !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((r = t.tag !== 22 ? fu() : 536870912), (t.lanes |= r), (_s |= r));
  }
  function Go(t, r) {
    if (!tt)
      switch (t.tailMode) {
        case "hidden":
          r = t.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null ? (t.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = t.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? r || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function pt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child,
      s = 0,
      l = 0;
    if (r)
      for (var f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 65011712),
          (l |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling);
    else
      for (f = t.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = t),
          (f = f.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = s), r;
  }
  function OR(t, r, s) {
    var l = r.pendingProps;
    switch ((Ld(r), r.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pt(r), null;
      case 1:
        return pt(r), null;
      case 3:
        return (
          (s = r.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          r.memoizedState.cache !== l && (r.flags |= 2048),
          Ir(Ut),
          Xe(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (t === null || t.child === null) &&
            (Oo(r)
              ? Zr(r)
              : t === null ||
                (t.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), Vy())),
          pt(r),
          null
        );
      case 26:
        return (
          (s = r.memoizedState),
          t === null
            ? (Zr(r),
              s !== null ? (pt(r), lb(r, s)) : (pt(r), (r.flags &= -16777217)))
            : s
            ? s !== t.memoizedState
              ? (Zr(r), pt(r), lb(r, s))
              : (pt(r), (r.flags &= -16777217))
            : (t.memoizedProps !== l && Zr(r), pt(r), (r.flags &= -16777217)),
          null
        );
      case 27:
        an(r), (s = de.current);
        var f = r.type;
        if (t !== null && r.stateNode != null) t.memoizedProps !== l && Zr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return pt(r), null;
          }
          (t = le.current),
            Oo(r) ? Py(r) : ((t = l0(f, l, s)), (r.stateNode = t), Zr(r));
        }
        return pt(r), null;
      case 5:
        if ((an(r), (s = r.type), t !== null && r.stateNode != null))
          t.memoizedProps !== l && Zr(r);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(i(166));
            return pt(r), null;
          }
          if (((t = le.current), Oo(r))) Py(r);
          else {
            switch (((f = cc(de.current)), t)) {
              case 1:
                t = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                t = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    t = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    t = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (t = f.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (t.multiple = !0)
                        : l.size && (t.size = l.size);
                    break;
                  default:
                    t =
                      typeof l.is == "string"
                        ? f.createElement(s, { is: l.is })
                        : f.createElement(s);
                }
            }
            (t[wt] = r), (t[ft] = l);
            e: for (f = r.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === r) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === r) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            r.stateNode = t;
            e: switch ((Xt(t, s, l), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!l.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Zr(r);
          }
        }
        return pt(r), (r.flags &= -16777217), null;
      case 6:
        if (t && r.stateNode != null) t.memoizedProps !== l && Zr(r);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(i(166));
          if (((t = de.current), Oo(r))) {
            if (
              ((t = r.stateNode),
              (s = r.memoizedProps),
              (l = null),
              (f = sn),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  l = f.memoizedProps;
              }
            (t[wt] = r),
              (t = !!(
                t.nodeValue === s ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                t0(t.nodeValue, s)
              )),
              t || yi(r);
          } else (t = cc(t).createTextNode(l)), (t[wt] = r), (r.stateNode = t);
        }
        return pt(r), null;
      case 13:
        if (
          ((l = r.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Oo(r)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = r.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[wt] = r;
            } else
              Mo(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4);
            pt(r), (f = !1);
          } else
            (f = Vy()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return r.flags & 256 ? (Gr(r), r) : (Gr(r), null);
        }
        if ((Gr(r), (r.flags & 128) !== 0)) return (r.lanes = s), r;
        if (
          ((s = l !== null), (t = t !== null && t.memoizedState !== null), s)
        ) {
          (l = r.child),
            (f = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (f = l.alternate.memoizedState.cachePool.pool);
          var h = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (h = l.memoizedState.cachePool.pool),
            h !== f && (l.flags |= 2048);
        }
        return (
          s !== t && s && (r.child.flags |= 8192),
          Qu(r, r.updateQueue),
          pt(r),
          null
        );
      case 4:
        return Xe(), t === null && Yh(r.stateNode.containerInfo), pt(r), null;
      case 10:
        return Ir(r.type), pt(r), null;
      case 19:
        if ((ie(Pt), (f = r.memoizedState), f === null)) return pt(r), null;
        if (((l = (r.flags & 128) !== 0), (h = f.rendering), h === null))
          if (l) Go(f, !1);
          else {
            if (yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = r.child; t !== null; ) {
                if (((h = Gu(t)), h !== null)) {
                  for (
                    r.flags |= 128,
                      Go(f, !1),
                      t = h.updateQueue,
                      r.updateQueue = t,
                      Qu(r, t),
                      r.subtreeFlags = 0,
                      t = s,
                      s = r.child;
                    s !== null;

                  )
                    zy(s, t), (s = s.sibling);
                  return W(Pt, (Pt.current & 1) | 2), r.child;
                }
                t = t.sibling;
              }
            f.tail !== null &&
              Ot() > ec &&
              ((r.flags |= 128), (l = !0), Go(f, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Gu(h)), t !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (r.updateQueue = t),
                Qu(r, t),
                Go(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !h.alternate &&
                  !tt)
              )
                return pt(r), null;
            } else
              2 * Ot() - f.renderingStartTime > ec &&
                s !== 536870912 &&
                ((r.flags |= 128), (l = !0), Go(f, !1), (r.lanes = 4194304));
          f.isBackwards
            ? ((h.sibling = r.child), (r.child = h))
            : ((t = f.last),
              t !== null ? (t.sibling = h) : (r.child = h),
              (f.last = h));
        }
        return f.tail !== null
          ? ((r = f.tail),
            (f.rendering = r),
            (f.tail = r.sibling),
            (f.renderingStartTime = Ot()),
            (r.sibling = null),
            (t = Pt.current),
            W(Pt, l ? (t & 1) | 2 : t & 1),
            r)
          : (pt(r), null);
      case 22:
      case 23:
        return (
          Gr(r),
          Kd(),
          (l = r.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (r.flags |= 8192)
            : l && (r.flags |= 8192),
          l
            ? (s & 536870912) !== 0 &&
              (r.flags & 128) === 0 &&
              (pt(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : pt(r),
          (s = r.updateQueue),
          s !== null && Qu(r, s.retryQueue),
          (s = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          (l = null),
          r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (l = r.memoizedState.cachePool.pool),
          l !== s && (r.flags |= 2048),
          t !== null && ie(xi),
          null
        );
      case 24:
        return (
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          r.memoizedState.cache !== s && (r.flags |= 2048),
          Ir(Ut),
          pt(r),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function MR(t, r) {
    switch ((Ld(r), r.tag)) {
      case 1:
        return (
          (t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 3:
        return (
          Ir(Ut),
          Xe(),
          (t = r.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((r.flags = (t & -65537) | 128), r)
            : null
        );
      case 26:
      case 27:
      case 5:
        return an(r), null;
      case 13:
        if (
          (Gr(r), (t = r.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(i(340));
          Mo();
        }
        return (
          (t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 19:
        return ie(Pt), null;
      case 4:
        return Xe(), null;
      case 10:
        return Ir(r.type), null;
      case 22:
      case 23:
        return (
          Gr(r),
          Kd(),
          t !== null && ie(xi),
          (t = r.flags),
          t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null
        );
      case 24:
        return Ir(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ub(t, r) {
    switch ((Ld(r), r.tag)) {
      case 3:
        Ir(Ut), Xe();
        break;
      case 26:
      case 27:
      case 5:
        an(r);
        break;
      case 4:
        Xe();
        break;
      case 13:
        Gr(r);
        break;
      case 19:
        ie(Pt);
        break;
      case 10:
        Ir(r.type);
        break;
      case 22:
      case 23:
        Gr(r), Kd(), t !== null && ie(xi);
        break;
      case 24:
        Ir(Ut);
    }
  }
  function Yo(t, r) {
    try {
      var s = r.updateQueue,
        l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var f = l.next;
        s = f;
        do {
          if ((s.tag & t) === t) {
            l = void 0;
            var h = s.create,
              b = s.inst;
            (l = h()), (b.destroy = l);
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (T) {
      ct(r, r.return, T);
    }
  }
  function Aa(t, r, s) {
    try {
      var l = r.updateQueue,
        f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var h = f.next;
        l = h;
        do {
          if ((l.tag & t) === t) {
            var b = l.inst,
              T = b.destroy;
            if (T !== void 0) {
              (b.destroy = void 0), (f = r);
              var M = s,
                B = T;
              try {
                B();
              } catch (ee) {
                ct(f, M, ee);
              }
            }
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (ee) {
      ct(r, r.return, ee);
    }
  }
  function cb(t) {
    var r = t.updateQueue;
    if (r !== null) {
      var s = t.stateNode;
      try {
        Qy(r, s);
      } catch (l) {
        ct(t, t.return, l);
      }
    }
  }
  function fb(t, r, s) {
    (s.props = Si(t.type, t.memoizedProps)), (s.state = t.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (l) {
      ct(t, r, l);
    }
  }
  function Zo(t, r) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof s == "function" ? (t.refCleanup = s(l)) : (s.current = l);
      }
    } catch (f) {
      ct(t, r, f);
    }
  }
  function wr(t, r) {
    var s = t.ref,
      l = t.refCleanup;
    if (s !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (f) {
          ct(t, r, f);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          ct(t, r, f);
        }
      else s.current = null;
  }
  function db(t) {
    var r = t.type,
      s = t.memoizedProps,
      l = t.stateNode;
    try {
      e: switch (r) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && l.focus();
          break e;
        case "img":
          s.src ? (l.src = s.src) : s.srcSet && (l.srcset = s.srcSet);
      }
    } catch (f) {
      ct(t, t.return, f);
    }
  }
  function _h(t, r, s) {
    try {
      var l = t.stateNode;
      QR(l, t.type, s, r), (l[ft] = r);
    } catch (f) {
      ct(t, t.return, f);
    }
  }
  function hb(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && La(t.type)) ||
      t.tag === 4
    );
  }
  function Eh(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || hb(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && La(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Th(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        r
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
              ? s.ownerDocument.body
              : s
            ).insertBefore(t, r)
          : ((r =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s),
            r.appendChild(t),
            (s = s._reactRootContainer),
            s != null || r.onclick !== null || (r.onclick = uc));
    else if (
      l !== 4 &&
      (l === 27 && La(t.type) && ((s = t.stateNode), (r = null)),
      (t = t.child),
      t !== null)
    )
      for (Th(t, r, s), t = t.sibling; t !== null; )
        Th(t, r, s), (t = t.sibling);
  }
  function Wu(t, r, s) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), r ? s.insertBefore(t, r) : s.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && La(t.type) && (s = t.stateNode), (t = t.child), t !== null)
    )
      for (Wu(t, r, s), t = t.sibling; t !== null; )
        Wu(t, r, s), (t = t.sibling);
  }
  function mb(t) {
    var r = t.stateNode,
      s = t.memoizedProps;
    try {
      for (var l = t.type, f = r.attributes; f.length; )
        r.removeAttributeNode(f[0]);
      Xt(r, l, s), (r[wt] = t), (r[ft] = s);
    } catch (h) {
      ct(t, t.return, h);
    }
  }
  var Kr = !1,
    _t = !1,
    Rh = !1,
    pb = typeof WeakSet == "function" ? WeakSet : Set,
    It = null;
  function NR(t, r) {
    if (((t = t.containerInfo), (Xh = gc), (t = Ry(t)), Ed(t))) {
      if ("selectionStart" in t)
        var s = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          s = ((s = t.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var f = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, h.nodeType;
            } catch {
              s = null;
              break e;
            }
            var b = 0,
              T = -1,
              M = -1,
              B = 0,
              ee = 0,
              ae = t,
              q = null;
            t: for (;;) {
              for (
                var $;
                ae !== s || (f !== 0 && ae.nodeType !== 3) || (T = b + f),
                  ae !== h || (l !== 0 && ae.nodeType !== 3) || (M = b + l),
                  ae.nodeType === 3 && (b += ae.nodeValue.length),
                  ($ = ae.firstChild) !== null;

              )
                (q = ae), (ae = $);
              for (;;) {
                if (ae === t) break t;
                if (
                  (q === s && ++B === f && (T = b),
                  q === h && ++ee === l && (M = b),
                  ($ = ae.nextSibling) !== null)
                )
                  break;
                (ae = q), (q = ae.parentNode);
              }
              ae = $;
            }
            s = T === -1 || M === -1 ? null : { start: T, end: M };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Qh = { focusedElem: t, selectionRange: s }, gc = !1, It = r;
      It !== null;

    )
      if (
        ((r = It), (t = r.child), (r.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = r), (It = t);
      else
        for (; It !== null; ) {
          switch (((r = It), (h = r.alternate), (t = r.flags), r.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && h !== null) {
                (t = void 0),
                  (s = r),
                  (f = h.memoizedProps),
                  (h = h.memoizedState),
                  (l = s.stateNode);
                try {
                  var De = Si(s.type, f, s.elementType === s.type);
                  (t = l.getSnapshotBeforeUpdate(De, h)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (Me) {
                  ct(s, s.return, Me);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = r.stateNode.containerInfo), (s = t.nodeType), s === 9)
                )
                  em(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      em(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = r.sibling), t !== null)) {
            (t.return = r.return), (It = t);
            break;
          }
          It = r.return;
        }
  }
  function gb(t, r, s) {
    var l = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Ca(t, s), l & 4 && Yo(5, s);
        break;
      case 1:
        if ((Ca(t, s), l & 4))
          if (((t = s.stateNode), r === null))
            try {
              t.componentDidMount();
            } catch (b) {
              ct(s, s.return, b);
            }
          else {
            var f = Si(s.type, r.memoizedProps);
            r = r.memoizedState;
            try {
              t.componentDidUpdate(f, r, t.__reactInternalSnapshotBeforeUpdate);
            } catch (b) {
              ct(s, s.return, b);
            }
          }
        l & 64 && cb(s), l & 512 && Zo(s, s.return);
        break;
      case 3:
        if ((Ca(t, s), l & 64 && ((t = s.updateQueue), t !== null))) {
          if (((r = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                r = s.child.stateNode;
                break;
              case 1:
                r = s.child.stateNode;
            }
          try {
            Qy(t, r);
          } catch (b) {
            ct(s, s.return, b);
          }
        }
        break;
      case 27:
        r === null && l & 4 && mb(s);
      case 26:
      case 5:
        Ca(t, s), r === null && l & 4 && db(s), l & 512 && Zo(s, s.return);
        break;
      case 12:
        Ca(t, s);
        break;
      case 13:
        Ca(t, s),
          l & 4 && bb(t, s),
          l & 64 &&
            ((t = s.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((s = VR.bind(null, s)), aA(t, s))));
        break;
      case 22:
        if (((l = s.memoizedState !== null || Kr), !l)) {
          (r = (r !== null && r.memoizedState !== null) || _t), (f = Kr);
          var h = _t;
          (Kr = l),
            (_t = r) && !h ? Oa(t, s, (s.subtreeFlags & 8772) !== 0) : Ca(t, s),
            (Kr = f),
            (_t = h);
        }
        break;
      case 30:
        break;
      default:
        Ca(t, s);
    }
  }
  function yb(t) {
    var r = t.alternate;
    r !== null && ((t.alternate = null), yb(r)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((r = t.stateNode), r !== null && id(r)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var ht = null,
    hn = !1;
  function Xr(t, r, s) {
    for (s = s.child; s !== null; ) vb(t, r, s), (s = s.sibling);
  }
  function vb(t, r, s) {
    if (je && typeof je.onCommitFiberUnmount == "function")
      try {
        je.onCommitFiberUnmount(xe, s);
      } catch {}
    switch (s.tag) {
      case 26:
        _t || wr(s, r),
          Xr(t, r, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        _t || wr(s, r);
        var l = ht,
          f = hn;
        La(s.type) && ((ht = s.stateNode), (hn = !1)),
          Xr(t, r, s),
          rl(s.stateNode),
          (ht = l),
          (hn = f);
        break;
      case 5:
        _t || wr(s, r);
      case 6:
        if (
          ((l = ht),
          (f = hn),
          (ht = null),
          Xr(t, r, s),
          (ht = l),
          (hn = f),
          ht !== null)
        )
          if (hn)
            try {
              (ht.nodeType === 9
                ? ht.body
                : ht.nodeName === "HTML"
                ? ht.ownerDocument.body
                : ht
              ).removeChild(s.stateNode);
            } catch (h) {
              ct(s, r, h);
            }
          else
            try {
              ht.removeChild(s.stateNode);
            } catch (h) {
              ct(s, r, h);
            }
        break;
      case 18:
        ht !== null &&
          (hn
            ? ((t = ht),
              s0(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                s.stateNode
              ),
              fl(t))
            : s0(ht, s.stateNode));
        break;
      case 4:
        (l = ht),
          (f = hn),
          (ht = s.stateNode.containerInfo),
          (hn = !0),
          Xr(t, r, s),
          (ht = l),
          (hn = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _t || Aa(2, s, r), _t || Aa(4, s, r), Xr(t, r, s);
        break;
      case 1:
        _t ||
          (wr(s, r),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function" && fb(s, r, l)),
          Xr(t, r, s);
        break;
      case 21:
        Xr(t, r, s);
        break;
      case 22:
        (_t = (l = _t) || s.memoizedState !== null), Xr(t, r, s), (_t = l);
        break;
      default:
        Xr(t, r, s);
    }
  }
  function bb(t, r) {
    if (
      r.memoizedState === null &&
      ((t = r.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        fl(t);
      } catch (s) {
        ct(r, r.return, s);
      }
  }
  function DR(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var r = t.stateNode;
        return r === null && (r = t.stateNode = new pb()), r;
      case 22:
        return (
          (t = t.stateNode),
          (r = t._retryCache),
          r === null && (r = t._retryCache = new pb()),
          r
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function Ah(t, r) {
    var s = DR(t);
    r.forEach(function (l) {
      var f = HR.bind(null, t, l);
      s.has(l) || (s.add(l), l.then(f, f));
    });
  }
  function Tn(t, r) {
    var s = r.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var f = s[l],
          h = t,
          b = r,
          T = b;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (La(T.type)) {
                (ht = T.stateNode), (hn = !1);
                break e;
              }
              break;
            case 5:
              (ht = T.stateNode), (hn = !1);
              break e;
            case 3:
            case 4:
              (ht = T.stateNode.containerInfo), (hn = !0);
              break e;
          }
          T = T.return;
        }
        if (ht === null) throw Error(i(160));
        vb(h, b, f),
          (ht = null),
          (hn = !1),
          (h = f.alternate),
          h !== null && (h.return = null),
          (f.return = null);
      }
    if (r.subtreeFlags & 13878)
      for (r = r.child; r !== null; ) xb(r, t), (r = r.sibling);
  }
  var er = null;
  function xb(t, r) {
    var s = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tn(r, t),
          Rn(t),
          l & 4 && (Aa(3, t, t.return), Yo(3, t), Aa(5, t, t.return));
        break;
      case 1:
        Tn(r, t),
          Rn(t),
          l & 512 && (_t || s === null || wr(s, s.return)),
          l & 64 &&
            Kr &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((s = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = s === null ? l : s.concat(l)))));
        break;
      case 26:
        var f = er;
        if (
          (Tn(r, t),
          Rn(t),
          l & 512 && (_t || s === null || wr(s, s.return)),
          l & 4)
        ) {
          var h = s !== null ? s.memoizedState : null;
          if (((l = t.memoizedState), s === null))
            if (l === null)
              if (t.stateNode === null) {
                e: {
                  (l = t.type),
                    (s = t.memoizedProps),
                    (f = f.ownerDocument || f);
                  t: switch (l) {
                    case "title":
                      (h = f.getElementsByTagName("title")[0]),
                        (!h ||
                          h[vo] ||
                          h[wt] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = f.createElement(l)),
                          f.head.insertBefore(
                            h,
                            f.querySelector("head > title")
                          )),
                        Xt(h, l, s),
                        (h[wt] = t),
                        Ft(h),
                        (l = h);
                      break e;
                    case "link":
                      var b = m0("link", "href", f).get(l + (s.href || ""));
                      if (b) {
                        for (var T = 0; T < b.length; T++)
                          if (
                            ((h = b[T]),
                            h.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              h.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              h.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              h.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            b.splice(T, 1);
                            break t;
                          }
                      }
                      (h = f.createElement(l)),
                        Xt(h, l, s),
                        f.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (b = m0("meta", "content", f).get(
                          l + (s.content || "")
                        ))
                      ) {
                        for (T = 0; T < b.length; T++)
                          if (
                            ((h = b[T]),
                            h.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              h.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              h.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              h.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            b.splice(T, 1);
                            break t;
                          }
                      }
                      (h = f.createElement(l)),
                        Xt(h, l, s),
                        f.head.appendChild(h);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (h[wt] = t), Ft(h), (l = h);
                }
                t.stateNode = l;
              } else p0(f, t.type, t.stateNode);
            else t.stateNode = h0(f, l, t.memoizedProps);
          else
            h !== l
              ? (h === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : h.count--,
                l === null
                  ? p0(f, t.type, t.stateNode)
                  : h0(f, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                _h(t, t.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        Tn(r, t),
          Rn(t),
          l & 512 && (_t || s === null || wr(s, s.return)),
          s !== null && l & 4 && _h(t, t.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (
          (Tn(r, t),
          Rn(t),
          l & 512 && (_t || s === null || wr(s, s.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            ts(f, "");
          } catch ($) {
            ct(t, t.return, $);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), _h(t, f, s !== null ? s.memoizedProps : f)),
          l & 1024 && (Rh = !0);
        break;
      case 6:
        if ((Tn(r, t), Rn(t), l & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (l = t.memoizedProps), (s = t.stateNode);
          try {
            s.nodeValue = l;
          } catch ($) {
            ct(t, t.return, $);
          }
        }
        break;
      case 3:
        if (
          ((hc = null),
          (f = er),
          (er = fc(r.containerInfo)),
          Tn(r, t),
          (er = f),
          Rn(t),
          l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            fl(r.containerInfo);
          } catch ($) {
            ct(t, t.return, $);
          }
        Rh && ((Rh = !1), wb(t));
        break;
      case 4:
        (l = er),
          (er = fc(t.stateNode.containerInfo)),
          Tn(r, t),
          Rn(t),
          (er = l);
        break;
      case 12:
        Tn(r, t), Rn(t);
        break;
      case 13:
        Tn(r, t),
          Rn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (kh = Ot()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ah(t, l)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var M = s !== null && s.memoizedState !== null,
          B = Kr,
          ee = _t;
        if (
          ((Kr = B || f),
          (_t = ee || M),
          Tn(r, t),
          (_t = ee),
          (Kr = B),
          Rn(t),
          l & 8192)
        )
          e: for (
            r = t.stateNode,
              r._visibility = f ? r._visibility & -2 : r._visibility | 1,
              f && (s === null || M || Kr || _t || _i(t)),
              s = null,
              r = t;
            ;

          ) {
            if (r.tag === 5 || r.tag === 26) {
              if (s === null) {
                M = s = r;
                try {
                  if (((h = M.stateNode), f))
                    (b = h.style),
                      typeof b.setProperty == "function"
                        ? b.setProperty("display", "none", "important")
                        : (b.display = "none");
                  else {
                    T = M.stateNode;
                    var ae = M.memoizedProps.style,
                      q =
                        ae != null && ae.hasOwnProperty("display")
                          ? ae.display
                          : null;
                    T.style.display =
                      q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch ($) {
                  ct(M, M.return, $);
                }
              }
            } else if (r.tag === 6) {
              if (s === null) {
                M = r;
                try {
                  M.stateNode.nodeValue = f ? "" : M.memoizedProps;
                } catch ($) {
                  ct(M, M.return, $);
                }
              }
            } else if (
              ((r.tag !== 22 && r.tag !== 23) ||
                r.memoizedState === null ||
                r === t) &&
              r.child !== null
            ) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) break e;
              s === r && (s = null), (r = r.return);
            }
            s === r && (s = null),
              (r.sibling.return = r.return),
              (r = r.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((s = l.retryQueue),
            s !== null && ((l.retryQueue = null), Ah(t, s))));
        break;
      case 19:
        Tn(r, t),
          Rn(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), Ah(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tn(r, t), Rn(t);
    }
  }
  function Rn(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        for (var s, l = t.return; l !== null; ) {
          if (hb(l)) {
            s = l;
            break;
          }
          l = l.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var f = s.stateNode,
              h = Eh(t);
            Wu(t, h, f);
            break;
          case 5:
            var b = s.stateNode;
            s.flags & 32 && (ts(b, ""), (s.flags &= -33));
            var T = Eh(t);
            Wu(t, T, b);
            break;
          case 3:
          case 4:
            var M = s.stateNode.containerInfo,
              B = Eh(t);
            Th(t, B, M);
            break;
          default:
            throw Error(i(161));
        }
      } catch (ee) {
        ct(t, t.return, ee);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function wb(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var r = t;
        wb(r),
          r.tag === 5 && r.flags & 1024 && r.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Ca(t, r) {
    if (r.subtreeFlags & 8772)
      for (r = r.child; r !== null; ) gb(t, r.alternate, r), (r = r.sibling);
  }
  function _i(t) {
    for (t = t.child; t !== null; ) {
      var r = t;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Aa(4, r, r.return), _i(r);
          break;
        case 1:
          wr(r, r.return);
          var s = r.stateNode;
          typeof s.componentWillUnmount == "function" && fb(r, r.return, s),
            _i(r);
          break;
        case 27:
          rl(r.stateNode);
        case 26:
        case 5:
          wr(r, r.return), _i(r);
          break;
        case 22:
          r.memoizedState === null && _i(r);
          break;
        case 30:
          _i(r);
          break;
        default:
          _i(r);
      }
      t = t.sibling;
    }
  }
  function Oa(t, r, s) {
    for (s = s && (r.subtreeFlags & 8772) !== 0, r = r.child; r !== null; ) {
      var l = r.alternate,
        f = t,
        h = r,
        b = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Oa(f, h, s), Yo(4, h);
          break;
        case 1:
          if (
            (Oa(f, h, s),
            (l = h),
            (f = l.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (B) {
              ct(l, l.return, B);
            }
          if (((l = h), (f = l.updateQueue), f !== null)) {
            var T = l.stateNode;
            try {
              var M = f.shared.hiddenCallbacks;
              if (M !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < M.length; f++)
                  Xy(M[f], T);
            } catch (B) {
              ct(l, l.return, B);
            }
          }
          s && b & 64 && cb(h), Zo(h, h.return);
          break;
        case 27:
          mb(h);
        case 26:
        case 5:
          Oa(f, h, s), s && l === null && b & 4 && db(h), Zo(h, h.return);
          break;
        case 12:
          Oa(f, h, s);
          break;
        case 13:
          Oa(f, h, s), s && b & 4 && bb(f, h);
          break;
        case 22:
          h.memoizedState === null && Oa(f, h, s), Zo(h, h.return);
          break;
        case 30:
          break;
        default:
          Oa(f, h, s);
      }
      r = r.sibling;
    }
  }
  function Ch(t, r) {
    var s = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (s = t.memoizedState.cachePool.pool),
      (t = null),
      r.memoizedState !== null &&
        r.memoizedState.cachePool !== null &&
        (t = r.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++, s != null && ko(s));
  }
  function Oh(t, r) {
    (t = null),
      r.alternate !== null && (t = r.alternate.memoizedState.cache),
      (r = r.memoizedState.cache),
      r !== t && (r.refCount++, t != null && ko(t));
  }
  function Sr(t, r, s, l) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) Sb(t, r, s, l), (r = r.sibling);
  }
  function Sb(t, r, s, l) {
    var f = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Sr(t, r, s, l), f & 2048 && Yo(9, r);
        break;
      case 1:
        Sr(t, r, s, l);
        break;
      case 3:
        Sr(t, r, s, l),
          f & 2048 &&
            ((t = null),
            r.alternate !== null && (t = r.alternate.memoizedState.cache),
            (r = r.memoizedState.cache),
            r !== t && (r.refCount++, t != null && ko(t)));
        break;
      case 12:
        if (f & 2048) {
          Sr(t, r, s, l), (t = r.stateNode);
          try {
            var h = r.memoizedProps,
              b = h.id,
              T = h.onPostCommit;
            typeof T == "function" &&
              T(
                b,
                r.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (M) {
            ct(r, r.return, M);
          }
        } else Sr(t, r, s, l);
        break;
      case 13:
        Sr(t, r, s, l);
        break;
      case 23:
        break;
      case 22:
        (h = r.stateNode),
          (b = r.alternate),
          r.memoizedState !== null
            ? h._visibility & 2
              ? Sr(t, r, s, l)
              : Ko(t, r)
            : h._visibility & 2
            ? Sr(t, r, s, l)
            : ((h._visibility |= 2),
              xs(t, r, s, l, (r.subtreeFlags & 10256) !== 0)),
          f & 2048 && Ch(b, r);
        break;
      case 24:
        Sr(t, r, s, l), f & 2048 && Oh(r.alternate, r);
        break;
      default:
        Sr(t, r, s, l);
    }
  }
  function xs(t, r, s, l, f) {
    for (f = f && (r.subtreeFlags & 10256) !== 0, r = r.child; r !== null; ) {
      var h = t,
        b = r,
        T = s,
        M = l,
        B = b.flags;
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          xs(h, b, T, M, f), Yo(8, b);
          break;
        case 23:
          break;
        case 22:
          var ee = b.stateNode;
          b.memoizedState !== null
            ? ee._visibility & 2
              ? xs(h, b, T, M, f)
              : Ko(h, b)
            : ((ee._visibility |= 2), xs(h, b, T, M, f)),
            f && B & 2048 && Ch(b.alternate, b);
          break;
        case 24:
          xs(h, b, T, M, f), f && B & 2048 && Oh(b.alternate, b);
          break;
        default:
          xs(h, b, T, M, f);
      }
      r = r.sibling;
    }
  }
  function Ko(t, r) {
    if (r.subtreeFlags & 10256)
      for (r = r.child; r !== null; ) {
        var s = t,
          l = r,
          f = l.flags;
        switch (l.tag) {
          case 22:
            Ko(s, l), f & 2048 && Ch(l.alternate, l);
            break;
          case 24:
            Ko(s, l), f & 2048 && Oh(l.alternate, l);
            break;
          default:
            Ko(s, l);
        }
        r = r.sibling;
      }
  }
  var Xo = 8192;
  function ws(t) {
    if (t.subtreeFlags & Xo)
      for (t = t.child; t !== null; ) _b(t), (t = t.sibling);
  }
  function _b(t) {
    switch (t.tag) {
      case 26:
        ws(t),
          t.flags & Xo &&
            t.memoizedState !== null &&
            yA(er, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ws(t);
        break;
      case 3:
      case 4:
        var r = er;
        (er = fc(t.stateNode.containerInfo)), ws(t), (er = r);
        break;
      case 22:
        t.memoizedState === null &&
          ((r = t.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = Xo), (Xo = 16777216), ws(t), (Xo = r))
            : ws(t));
        break;
      default:
        ws(t);
    }
  }
  function Eb(t) {
    var r = t.alternate;
    if (r !== null && ((t = r.child), t !== null)) {
      r.child = null;
      do (r = t.sibling), (t.sibling = null), (t = r);
      while (t !== null);
    }
  }
  function Qo(t) {
    var r = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (It = l), Rb(l, t);
        }
      Eb(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Tb(t), (t = t.sibling);
  }
  function Tb(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qo(t), t.flags & 2048 && Aa(9, t, t.return);
        break;
      case 3:
        Qo(t);
        break;
      case 12:
        Qo(t);
        break;
      case 22:
        var r = t.stateNode;
        t.memoizedState !== null &&
        r._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((r._visibility &= -3), Ju(t))
          : Qo(t);
        break;
      default:
        Qo(t);
    }
  }
  function Ju(t) {
    var r = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (r !== null)
        for (var s = 0; s < r.length; s++) {
          var l = r[s];
          (It = l), Rb(l, t);
        }
      Eb(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((r = t), r.tag)) {
        case 0:
        case 11:
        case 15:
          Aa(8, r, r.return), Ju(r);
          break;
        case 22:
          (s = r.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Ju(r));
          break;
        default:
          Ju(r);
      }
      t = t.sibling;
    }
  }
  function Rb(t, r) {
    for (; It !== null; ) {
      var s = It;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Aa(8, s, r);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var l = s.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ko(s.memoizedState.cache);
      }
      if (((l = s.child), l !== null)) (l.return = s), (It = l);
      else
        e: for (s = t; It !== null; ) {
          l = It;
          var f = l.sibling,
            h = l.return;
          if ((yb(l), l === s)) {
            It = null;
            break e;
          }
          if (f !== null) {
            (f.return = h), (It = f);
            break e;
          }
          It = h;
        }
    }
  }
  var kR = {
      getCacheForType: function (t) {
        var r = en(Ut),
          s = r.data.get(t);
        return s === void 0 && ((s = t()), r.data.set(t, s)), s;
      },
    },
    jR = typeof WeakMap == "function" ? WeakMap : Map,
    at = 0,
    dt = null,
    Ye = null,
    Qe = 0,
    it = 0,
    An = null,
    Ma = !1,
    Ss = !1,
    Mh = !1,
    Qr = 0,
    yt = 0,
    Na = 0,
    Ei = 0,
    Nh = 0,
    $n = 0,
    _s = 0,
    Wo = null,
    mn = null,
    Dh = !1,
    kh = 0,
    ec = 1 / 0,
    tc = null,
    Da = null,
    Kt = 0,
    ka = null,
    Es = null,
    Ts = 0,
    jh = 0,
    Lh = null,
    Ab = null,
    Jo = 0,
    zh = null;
  function Cn() {
    if ((at & 2) !== 0 && Qe !== 0) return Qe & -Qe;
    if (j.T !== null) {
      var t = ds;
      return t !== 0 ? t : qh();
    }
    return li();
  }
  function Cb() {
    $n === 0 && ($n = (Qe & 536870912) === 0 || tt ? Wn() : 536870912);
    var t = In.current;
    return t !== null && (t.flags |= 32), $n;
  }
  function On(t, r, s) {
    ((t === dt && (it === 2 || it === 9)) || t.cancelPendingCommit !== null) &&
      (Rs(t, 0), ja(t, Qe, $n, !1)),
      va(t, s),
      ((at & 2) === 0 || t !== dt) &&
        (t === dt &&
          ((at & 2) === 0 && (Ei |= s), yt === 4 && ja(t, Qe, $n, !1)),
        _r(t));
  }
  function Ob(t, r, s) {
    if ((at & 6) !== 0) throw Error(i(327));
    var l = (!s && (r & 124) === 0 && (r & t.expiredLanes) === 0) || zr(t, r),
      f = l ? UR(t, r) : Bh(t, r, !0),
      h = l;
    do {
      if (f === 0) {
        Ss && !l && ja(t, r, 0, !1);
        break;
      } else {
        if (((s = t.current.alternate), h && !LR(s))) {
          (f = Bh(t, r, !1)), (h = !1);
          continue;
        }
        if (f === 2) {
          if (((h = r), t.errorRecoveryDisabledLanes & h)) var b = 0;
          else
            (b = t.pendingLanes & -536870913),
              (b = b !== 0 ? b : b & 536870912 ? 536870912 : 0);
          if (b !== 0) {
            r = b;
            e: {
              var T = t;
              f = Wo;
              var M = T.current.memoizedState.isDehydrated;
              if ((M && (Rs(T, b).flags |= 256), (b = Bh(T, b, !1)), b !== 2)) {
                if (Mh && !M) {
                  (T.errorRecoveryDisabledLanes |= h), (Ei |= h), (f = 4);
                  break e;
                }
                (h = mn),
                  (mn = f),
                  h !== null && (mn === null ? (mn = h) : mn.push.apply(mn, h));
              }
              f = b;
            }
            if (((h = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Rs(t, 0), ja(t, r, 0, !0);
          break;
        }
        e: {
          switch (((l = t), (h = f), h)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((r & 4194048) !== r) break;
            case 6:
              ja(l, r, $n, !Ma);
              break e;
            case 2:
              mn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((r & 62914560) === r && ((f = kh + 300 - Ot()), 10 < f)) {
            if ((ja(l, r, $n, !Ma), vr(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = a0(
              Mb.bind(null, l, s, mn, tc, Dh, r, $n, Ei, _s, Ma, h, 2, -0, 0),
              f
            );
            break e;
          }
          Mb(l, s, mn, tc, Dh, r, $n, Ei, _s, Ma, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    _r(t);
  }
  function Mb(t, r, s, l, f, h, b, T, M, B, ee, ae, q, $) {
    if (
      ((t.timeoutHandle = -1),
      (ae = r.subtreeFlags),
      (ae & 8192 || (ae & 16785408) === 16785408) &&
        ((sl = { stylesheets: null, count: 0, unsuspend: gA }),
        _b(r),
        (ae = vA()),
        ae !== null))
    ) {
      (t.cancelPendingCommit = ae(
        Ub.bind(null, t, r, h, s, l, f, b, T, M, ee, 1, q, $)
      )),
        ja(t, h, b, !B);
      return;
    }
    Ub(t, r, h, s, l, f, b, T, M);
  }
  function LR(t) {
    for (var r = t; ; ) {
      var s = r.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        r.flags & 16384 &&
        ((s = r.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var l = 0; l < s.length; l++) {
          var f = s[l],
            h = f.getSnapshot;
          f = f.value;
          try {
            if (!_n(h(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = r.child), r.subtreeFlags & 16384 && s !== null))
        (s.return = r), (r = s);
      else {
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function ja(t, r, s, l) {
    (r &= ~Nh),
      (r &= ~Ei),
      (t.suspendedLanes |= r),
      (t.pingedLanes &= ~r),
      l && (t.warmLanes |= r),
      (l = t.expirationTimes);
    for (var f = r; 0 < f; ) {
      var h = 31 - nt(f),
        b = 1 << h;
      (l[h] = -1), (f &= ~b);
    }
    s !== 0 && Ue(t, s, r);
  }
  function nc() {
    return (at & 6) === 0 ? (el(0), !1) : !0;
  }
  function Uh() {
    if (Ye !== null) {
      if (it === 0) var t = Ye.return;
      else (t = Ye), (qr = vi = null), eh(t), (vs = null), (Io = 0), (t = Ye);
      for (; t !== null; ) ub(t.alternate, t), (t = t.return);
      Ye = null;
    }
  }
  function Rs(t, r) {
    var s = t.timeoutHandle;
    s !== -1 && ((t.timeoutHandle = -1), JR(s)),
      (s = t.cancelPendingCommit),
      s !== null && ((t.cancelPendingCommit = null), s()),
      Uh(),
      (dt = t),
      (Ye = s = Vr(t.current, null)),
      (Qe = r),
      (it = 0),
      (An = null),
      (Ma = !1),
      (Ss = zr(t, r)),
      (Mh = !1),
      (_s = $n = Nh = Ei = Na = yt = 0),
      (mn = Wo = null),
      (Dh = !1),
      (r & 8) !== 0 && (r |= r & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= r; 0 < l; ) {
        var f = 31 - nt(l),
          h = 1 << f;
        (r |= t[f]), (l &= ~h);
      }
    return (Qr = r), Eu(), s;
  }
  function Nb(t, r) {
    (Fe = null),
      (j.H = qu),
      r === Lo || r === ku
        ? ((r = Zy()), (it = 3))
        : r === $y
        ? ((r = Zy()), (it = 4))
        : (it =
            r === Kv
              ? 8
              : r !== null &&
                typeof r == "object" &&
                typeof r.then == "function"
              ? 6
              : 1),
      (An = r),
      Ye === null && ((yt = 1), Zu(t, Vn(r, t.current)));
  }
  function Db() {
    var t = j.H;
    return (j.H = qu), t === null ? qu : t;
  }
  function kb() {
    var t = j.A;
    return (j.A = kR), t;
  }
  function Ph() {
    (yt = 4),
      Ma || ((Qe & 4194048) !== Qe && In.current !== null) || (Ss = !0),
      ((Na & 134217727) === 0 && (Ei & 134217727) === 0) ||
        dt === null ||
        ja(dt, Qe, $n, !1);
  }
  function Bh(t, r, s) {
    var l = at;
    at |= 2;
    var f = Db(),
      h = kb();
    (dt !== t || Qe !== r) && ((tc = null), Rs(t, r)), (r = !1);
    var b = yt;
    e: do
      try {
        if (it !== 0 && Ye !== null) {
          var T = Ye,
            M = An;
          switch (it) {
            case 8:
              Uh(), (b = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              In.current === null && (r = !0);
              var B = it;
              if (((it = 0), (An = null), As(t, T, M, B), s && Ss)) {
                b = 0;
                break e;
              }
              break;
            default:
              (B = it), (it = 0), (An = null), As(t, T, M, B);
          }
        }
        zR(), (b = yt);
        break;
      } catch (ee) {
        Nb(t, ee);
      }
    while (!0);
    return (
      r && t.shellSuspendCounter++,
      (qr = vi = null),
      (at = l),
      (j.H = f),
      (j.A = h),
      Ye === null && ((dt = null), (Qe = 0), Eu()),
      b
    );
  }
  function zR() {
    for (; Ye !== null; ) jb(Ye);
  }
  function UR(t, r) {
    var s = at;
    at |= 2;
    var l = Db(),
      f = kb();
    dt !== t || Qe !== r
      ? ((tc = null), (ec = Ot() + 500), Rs(t, r))
      : (Ss = zr(t, r));
    e: do
      try {
        if (it !== 0 && Ye !== null) {
          r = Ye;
          var h = An;
          t: switch (it) {
            case 1:
              (it = 0), (An = null), As(t, r, h, 1);
              break;
            case 2:
            case 9:
              if (Gy(h)) {
                (it = 0), (An = null), Lb(r);
                break;
              }
              (r = function () {
                (it !== 2 && it !== 9) || dt !== t || (it = 7), _r(t);
              }),
                h.then(r, r);
              break e;
            case 3:
              it = 7;
              break e;
            case 4:
              it = 5;
              break e;
            case 7:
              Gy(h)
                ? ((it = 0), (An = null), Lb(r))
                : ((it = 0), (An = null), As(t, r, h, 7));
              break;
            case 5:
              var b = null;
              switch (Ye.tag) {
                case 26:
                  b = Ye.memoizedState;
                case 5:
                case 27:
                  var T = Ye;
                  if (!b || g0(b)) {
                    (it = 0), (An = null);
                    var M = T.sibling;
                    if (M !== null) Ye = M;
                    else {
                      var B = T.return;
                      B !== null ? ((Ye = B), rc(B)) : (Ye = null);
                    }
                    break t;
                  }
              }
              (it = 0), (An = null), As(t, r, h, 5);
              break;
            case 6:
              (it = 0), (An = null), As(t, r, h, 6);
              break;
            case 8:
              Uh(), (yt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        PR();
        break;
      } catch (ee) {
        Nb(t, ee);
      }
    while (!0);
    return (
      (qr = vi = null),
      (j.H = l),
      (j.A = f),
      (at = s),
      Ye !== null ? 0 : ((dt = null), (Qe = 0), Eu(), yt)
    );
  }
  function PR() {
    for (; Ye !== null && !pa(); ) jb(Ye);
  }
  function jb(t) {
    var r = ob(t.alternate, t, Qr);
    (t.memoizedProps = t.pendingProps), r === null ? rc(t) : (Ye = r);
  }
  function Lb(t) {
    var r = t,
      s = r.alternate;
    switch (r.tag) {
      case 15:
      case 0:
        r = tb(s, r, r.pendingProps, r.type, void 0, Qe);
        break;
      case 11:
        r = tb(s, r, r.pendingProps, r.type.render, r.ref, Qe);
        break;
      case 5:
        eh(r);
      default:
        ub(s, r), (r = Ye = zy(r, Qr)), (r = ob(s, r, Qr));
    }
    (t.memoizedProps = t.pendingProps), r === null ? rc(t) : (Ye = r);
  }
  function As(t, r, s, l) {
    (qr = vi = null), eh(r), (vs = null), (Io = 0);
    var f = r.return;
    try {
      if (AR(t, f, r, s, Qe)) {
        (yt = 1), Zu(t, Vn(s, t.current)), (Ye = null);
        return;
      }
    } catch (h) {
      if (f !== null) throw ((Ye = f), h);
      (yt = 1), Zu(t, Vn(s, t.current)), (Ye = null);
      return;
    }
    r.flags & 32768
      ? (tt || l === 1
          ? (t = !0)
          : Ss || (Qe & 536870912) !== 0
          ? (t = !1)
          : ((Ma = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = In.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        zb(r, t))
      : rc(r);
  }
  function rc(t) {
    var r = t;
    do {
      if ((r.flags & 32768) !== 0) {
        zb(r, Ma);
        return;
      }
      t = r.return;
      var s = OR(r.alternate, r, Qr);
      if (s !== null) {
        Ye = s;
        return;
      }
      if (((r = r.sibling), r !== null)) {
        Ye = r;
        return;
      }
      Ye = r = t;
    } while (r !== null);
    yt === 0 && (yt = 5);
  }
  function zb(t, r) {
    do {
      var s = MR(t.alternate, t);
      if (s !== null) {
        (s.flags &= 32767), (Ye = s);
        return;
      }
      if (
        ((s = t.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !r && ((t = t.sibling), t !== null))
      ) {
        Ye = t;
        return;
      }
      Ye = t = s;
    } while (t !== null);
    (yt = 6), (Ye = null);
  }
  function Ub(t, r, s, l, f, h, b, T, M) {
    t.cancelPendingCommit = null;
    do ac();
    while (Kt !== 0);
    if ((at & 6) !== 0) throw Error(i(327));
    if (r !== null) {
      if (r === t.current) throw Error(i(177));
      if (
        ((h = r.lanes | r.childLanes),
        (h |= Od),
        du(t, s, h, b, T, M),
        t === dt && ((Ye = dt = null), (Qe = 0)),
        (Es = r),
        (ka = t),
        (Ts = s),
        (jh = h),
        (Lh = f),
        (Ab = l),
        (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            FR(F, function () {
              return Fb(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (r.flags & 13878) !== 0),
        (r.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = j.T), (j.T = null), (f = Q.p), (Q.p = 2), (b = at), (at |= 4);
        try {
          NR(t, r, s);
        } finally {
          (at = b), (Q.p = f), (j.T = l);
        }
      }
      (Kt = 1), Pb(), Bb(), Vb();
    }
  }
  function Pb() {
    if (Kt === 1) {
      Kt = 0;
      var t = ka,
        r = Es,
        s = (r.flags & 13878) !== 0;
      if ((r.subtreeFlags & 13878) !== 0 || s) {
        (s = j.T), (j.T = null);
        var l = Q.p;
        Q.p = 2;
        var f = at;
        at |= 4;
        try {
          xb(r, t);
          var h = Qh,
            b = Ry(t.containerInfo),
            T = h.focusedElem,
            M = h.selectionRange;
          if (
            b !== T &&
            T &&
            T.ownerDocument &&
            Ty(T.ownerDocument.documentElement, T)
          ) {
            if (M !== null && Ed(T)) {
              var B = M.start,
                ee = M.end;
              if ((ee === void 0 && (ee = B), "selectionStart" in T))
                (T.selectionStart = B),
                  (T.selectionEnd = Math.min(ee, T.value.length));
              else {
                var ae = T.ownerDocument || document,
                  q = (ae && ae.defaultView) || window;
                if (q.getSelection) {
                  var $ = q.getSelection(),
                    De = T.textContent.length,
                    Me = Math.min(M.start, De),
                    ut = M.end === void 0 ? Me : Math.min(M.end, De);
                  !$.extend && Me > ut && ((b = ut), (ut = Me), (Me = b));
                  var U = Ey(T, Me),
                    z = Ey(T, ut);
                  if (
                    U &&
                    z &&
                    ($.rangeCount !== 1 ||
                      $.anchorNode !== U.node ||
                      $.anchorOffset !== U.offset ||
                      $.focusNode !== z.node ||
                      $.focusOffset !== z.offset)
                  ) {
                    var P = ae.createRange();
                    P.setStart(U.node, U.offset),
                      $.removeAllRanges(),
                      Me > ut
                        ? ($.addRange(P), $.extend(z.node, z.offset))
                        : (P.setEnd(z.node, z.offset), $.addRange(P));
                  }
                }
              }
            }
            for (ae = [], $ = T; ($ = $.parentNode); )
              $.nodeType === 1 &&
                ae.push({ element: $, left: $.scrollLeft, top: $.scrollTop });
            for (
              typeof T.focus == "function" && T.focus(), T = 0;
              T < ae.length;
              T++
            ) {
              var te = ae[T];
              (te.element.scrollLeft = te.left),
                (te.element.scrollTop = te.top);
            }
          }
          (gc = !!Xh), (Qh = Xh = null);
        } finally {
          (at = f), (Q.p = l), (j.T = s);
        }
      }
      (t.current = r), (Kt = 2);
    }
  }
  function Bb() {
    if (Kt === 2) {
      Kt = 0;
      var t = ka,
        r = Es,
        s = (r.flags & 8772) !== 0;
      if ((r.subtreeFlags & 8772) !== 0 || s) {
        (s = j.T), (j.T = null);
        var l = Q.p;
        Q.p = 2;
        var f = at;
        at |= 4;
        try {
          gb(t, r.alternate, r);
        } finally {
          (at = f), (Q.p = l), (j.T = s);
        }
      }
      Kt = 3;
    }
  }
  function Vb() {
    if (Kt === 4 || Kt === 3) {
      (Kt = 0), ga();
      var t = ka,
        r = Es,
        s = Ts,
        l = Ab;
      (r.subtreeFlags & 10256) !== 0 || (r.flags & 10256) !== 0
        ? (Kt = 5)
        : ((Kt = 0), (Es = ka = null), Hb(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Da = null),
        Yt(s),
        (r = r.stateNode),
        je && typeof je.onCommitFiberRoot == "function")
      )
        try {
          je.onCommitFiberRoot(xe, r, void 0, (r.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (r = j.T), (f = Q.p), (Q.p = 2), (j.T = null);
        try {
          for (var h = t.onRecoverableError, b = 0; b < l.length; b++) {
            var T = l[b];
            h(T.value, { componentStack: T.stack });
          }
        } finally {
          (j.T = r), (Q.p = f);
        }
      }
      (Ts & 3) !== 0 && ac(),
        _r(t),
        (f = t.pendingLanes),
        (s & 4194090) !== 0 && (f & 42) !== 0
          ? t === zh
            ? Jo++
            : ((Jo = 0), (zh = t))
          : (Jo = 0),
        el(0);
    }
  }
  function Hb(t, r) {
    (t.pooledCacheLanes &= r) === 0 &&
      ((r = t.pooledCache), r != null && ((t.pooledCache = null), ko(r)));
  }
  function ac(t) {
    return Pb(), Bb(), Vb(), Fb();
  }
  function Fb() {
    if (Kt !== 5) return !1;
    var t = ka,
      r = jh;
    jh = 0;
    var s = Yt(Ts),
      l = j.T,
      f = Q.p;
    try {
      (Q.p = 32 > s ? 32 : s), (j.T = null), (s = Lh), (Lh = null);
      var h = ka,
        b = Ts;
      if (((Kt = 0), (Es = ka = null), (Ts = 0), (at & 6) !== 0))
        throw Error(i(331));
      var T = at;
      if (
        ((at |= 4),
        Tb(h.current),
        Sb(h, h.current, b, s),
        (at = T),
        el(0, !1),
        je && typeof je.onPostCommitFiberRoot == "function")
      )
        try {
          je.onPostCommitFiberRoot(xe, h);
        } catch {}
      return !0;
    } finally {
      (Q.p = f), (j.T = l), Hb(t, r);
    }
  }
  function qb(t, r, s) {
    (r = Vn(s, r)),
      (r = mh(t.stateNode, r, 2)),
      (t = _a(t, r, 2)),
      t !== null && (va(t, 2), _r(t));
  }
  function ct(t, r, s) {
    if (t.tag === 3) qb(t, t, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          qb(r, t, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Da === null || !Da.has(l)))
          ) {
            (t = Vn(s, t)),
              (s = Yv(2)),
              (l = _a(r, s, 2)),
              l !== null && (Zv(s, l, r, t), va(l, 2), _r(l));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vh(t, r, s) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new jR();
      var f = new Set();
      l.set(r, f);
    } else (f = l.get(r)), f === void 0 && ((f = new Set()), l.set(r, f));
    f.has(s) ||
      ((Mh = !0), f.add(s), (t = BR.bind(null, t, r, s)), r.then(t, t));
  }
  function BR(t, r, s) {
    var l = t.pingCache;
    l !== null && l.delete(r),
      (t.pingedLanes |= t.suspendedLanes & s),
      (t.warmLanes &= ~s),
      dt === t &&
        (Qe & s) === s &&
        (yt === 4 || (yt === 3 && (Qe & 62914560) === Qe && 300 > Ot() - kh)
          ? (at & 2) === 0 && Rs(t, 0)
          : (Nh |= s),
        _s === Qe && (_s = 0)),
      _r(t);
  }
  function Ib(t, r) {
    r === 0 && (r = fu()), (t = ls(t, r)), t !== null && (va(t, r), _r(t));
  }
  function VR(t) {
    var r = t.memoizedState,
      s = 0;
    r !== null && (s = r.retryLane), Ib(t, s);
  }
  function HR(t, r) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var l = t.stateNode,
          f = t.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(r), Ib(t, s);
  }
  function FR(t, r) {
    return bn(t, r);
  }
  var ic = null,
    Cs = null,
    Hh = !1,
    sc = !1,
    Fh = !1,
    Ti = 0;
  function _r(t) {
    t !== Cs &&
      t.next === null &&
      (Cs === null ? (ic = Cs = t) : (Cs = Cs.next = t)),
      (sc = !0),
      Hh || ((Hh = !0), IR());
  }
  function el(t, r) {
    if (!Fh && sc) {
      Fh = !0;
      do
        for (var s = !1, l = ic; l !== null; ) {
          if (t !== 0) {
            var f = l.pendingLanes;
            if (f === 0) var h = 0;
            else {
              var b = l.suspendedLanes,
                T = l.pingedLanes;
              (h = (1 << (31 - nt(42 | t) + 1)) - 1),
                (h &= f & ~(b & ~T)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((s = !0), Zb(l, h));
          } else
            (h = Qe),
              (h = vr(
                l,
                l === dt ? h : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (h & 3) === 0 || zr(l, h) || ((s = !0), Zb(l, h));
          l = l.next;
        }
      while (s);
      Fh = !1;
    }
  }
  function qR() {
    $b();
  }
  function $b() {
    sc = Hh = !1;
    var t = 0;
    Ti !== 0 && (WR() && (t = Ti), (Ti = 0));
    for (var r = Ot(), s = null, l = ic; l !== null; ) {
      var f = l.next,
        h = Gb(l, r);
      h === 0
        ? ((l.next = null),
          s === null ? (ic = f) : (s.next = f),
          f === null && (Cs = s))
        : ((s = l), (t !== 0 || (h & 3) !== 0) && (sc = !0)),
        (l = f);
    }
    el(t);
  }
  function Gb(t, r) {
    for (
      var s = t.suspendedLanes,
        l = t.pingedLanes,
        f = t.expirationTimes,
        h = t.pendingLanes & -62914561;
      0 < h;

    ) {
      var b = 31 - nt(h),
        T = 1 << b,
        M = f[b];
      M === -1
        ? ((T & s) === 0 || (T & l) !== 0) && (f[b] = ya(T, r))
        : M <= r && (t.expiredLanes |= T),
        (h &= ~T);
    }
    if (
      ((r = dt),
      (s = Qe),
      (s = vr(
        t,
        t === r ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      s === 0 ||
        (t === r && (it === 2 || it === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && xn(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((s & 3) === 0 || zr(t, s)) {
      if (((r = s & -s), r === t.callbackPriority)) return r;
      switch ((l !== null && xn(l), Yt(s))) {
        case 2:
        case 8:
          s = L;
          break;
        case 32:
          s = F;
          break;
        case 268435456:
          s = me;
          break;
        default:
          s = F;
      }
      return (
        (l = Yb.bind(null, t)),
        (s = bn(s, l)),
        (t.callbackPriority = r),
        (t.callbackNode = s),
        r
      );
    }
    return (
      l !== null && l !== null && xn(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Yb(t, r) {
    if (Kt !== 0 && Kt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var s = t.callbackNode;
    if (ac() && t.callbackNode !== s) return null;
    var l = Qe;
    return (
      (l = vr(
        t,
        t === dt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Ob(t, l, r),
          Gb(t, Ot()),
          t.callbackNode != null && t.callbackNode === s
            ? Yb.bind(null, t)
            : null)
    );
  }
  function Zb(t, r) {
    if (ac()) return null;
    Ob(t, r, !0);
  }
  function IR() {
    eA(function () {
      (at & 6) !== 0 ? bn(Mt, qR) : $b();
    });
  }
  function qh() {
    return Ti === 0 && (Ti = Wn()), Ti;
  }
  function Kb(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : yu("" + t);
  }
  function Xb(t, r) {
    var s = r.ownerDocument.createElement("input");
    return (
      (s.name = r.name),
      (s.value = r.value),
      t.id && s.setAttribute("form", t.id),
      r.parentNode.insertBefore(s, r),
      (t = new FormData(t)),
      s.parentNode.removeChild(s),
      t
    );
  }
  function $R(t, r, s, l, f) {
    if (r === "submit" && s && s.stateNode === f) {
      var h = Kb((f[ft] || null).action),
        b = l.submitter;
      b &&
        ((r = (r = b[ft] || null)
          ? Kb(r.formAction)
          : b.getAttribute("formAction")),
        r !== null && ((h = r), (b = null)));
      var T = new wu("action", "action", null, l, f);
      t.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ti !== 0) {
                  var M = b ? Xb(f, b) : new FormData(f);
                  uh(
                    s,
                    { pending: !0, data: M, method: f.method, action: h },
                    null,
                    M
                  );
                }
              } else
                typeof h == "function" &&
                  (T.preventDefault(),
                  (M = b ? Xb(f, b) : new FormData(f)),
                  uh(
                    s,
                    { pending: !0, data: M, method: f.method, action: h },
                    h,
                    M
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Ih = 0; Ih < Cd.length; Ih++) {
    var $h = Cd[Ih],
      GR = $h.toLowerCase(),
      YR = $h[0].toUpperCase() + $h.slice(1);
    Jn(GR, "on" + YR);
  }
  Jn(Oy, "onAnimationEnd"),
    Jn(My, "onAnimationIteration"),
    Jn(Ny, "onAnimationStart"),
    Jn("dblclick", "onDoubleClick"),
    Jn("focusin", "onFocus"),
    Jn("focusout", "onBlur"),
    Jn(cR, "onTransitionRun"),
    Jn(fR, "onTransitionStart"),
    Jn(dR, "onTransitionCancel"),
    Jn(Dy, "onTransitionEnd"),
    Wi("onMouseEnter", ["mouseout", "mouseover"]),
    Wi("onMouseLeave", ["mouseout", "mouseover"]),
    Wi("onPointerEnter", ["pointerout", "pointerover"]),
    Wi("onPointerLeave", ["pointerout", "pointerover"]),
    ui(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ui(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ui(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ui(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ui(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var tl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ZR = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(tl)
    );
  function Qb(t, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var l = t[s],
        f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var b = l.length - 1; 0 <= b; b--) {
            var T = l[b],
              M = T.instance,
              B = T.currentTarget;
            if (((T = T.listener), M !== h && f.isPropagationStopped()))
              break e;
            (h = T), (f.currentTarget = B);
            try {
              h(f);
            } catch (ee) {
              Yu(ee);
            }
            (f.currentTarget = null), (h = M);
          }
        else
          for (b = 0; b < l.length; b++) {
            if (
              ((T = l[b]),
              (M = T.instance),
              (B = T.currentTarget),
              (T = T.listener),
              M !== h && f.isPropagationStopped())
            )
              break e;
            (h = T), (f.currentTarget = B);
            try {
              h(f);
            } catch (ee) {
              Yu(ee);
            }
            (f.currentTarget = null), (h = M);
          }
      }
    }
  }
  function Ze(t, r) {
    var s = r[Zi];
    s === void 0 && (s = r[Zi] = new Set());
    var l = t + "__bubble";
    s.has(l) || (Wb(r, t, 2, !1), s.add(l));
  }
  function Gh(t, r, s) {
    var l = 0;
    r && (l |= 4), Wb(s, t, l, r);
  }
  var oc = "_reactListening" + Math.random().toString(36).slice(2);
  function Yh(t) {
    if (!t[oc]) {
      (t[oc] = !0),
        $g.forEach(function (s) {
          s !== "selectionchange" && (ZR.has(s) || Gh(s, !1, t), Gh(s, !0, t));
        });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[oc] || ((r[oc] = !0), Gh("selectionchange", !1, r));
    }
  }
  function Wb(t, r, s, l) {
    switch (S0(r)) {
      case 2:
        var f = wA;
        break;
      case 8:
        f = SA;
        break;
      default:
        f = om;
    }
    (s = f.bind(null, r, s, t)),
      (f = void 0),
      !pd ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (f = !0),
      l
        ? f !== void 0
          ? t.addEventListener(r, s, { capture: !0, passive: f })
          : t.addEventListener(r, s, !0)
        : f !== void 0
        ? t.addEventListener(r, s, { passive: f })
        : t.addEventListener(r, s, !1);
  }
  function Zh(t, r, s, l, f) {
    var h = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var b = l.tag;
        if (b === 3 || b === 4) {
          var T = l.stateNode.containerInfo;
          if (T === f) break;
          if (b === 4)
            for (b = l.return; b !== null; ) {
              var M = b.tag;
              if ((M === 3 || M === 4) && b.stateNode.containerInfo === f)
                return;
              b = b.return;
            }
          for (; T !== null; ) {
            if (((b = Ki(T)), b === null)) return;
            if (((M = b.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              l = h = b;
              continue e;
            }
            T = T.parentNode;
          }
        }
        l = l.return;
      }
    iy(function () {
      var B = h,
        ee = hd(s),
        ae = [];
      e: {
        var q = ky.get(t);
        if (q !== void 0) {
          var $ = wu,
            De = t;
          switch (t) {
            case "keypress":
              if (bu(s) === 0) break e;
            case "keydown":
            case "keyup":
              $ = FT;
              break;
            case "focusin":
              (De = "focus"), ($ = bd);
              break;
            case "focusout":
              (De = "blur"), ($ = bd);
              break;
            case "beforeblur":
            case "afterblur":
              $ = bd;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = ly;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = MT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = $T;
              break;
            case Oy:
            case My:
            case Ny:
              $ = kT;
              break;
            case Dy:
              $ = YT;
              break;
            case "scroll":
            case "scrollend":
              $ = CT;
              break;
            case "wheel":
              $ = KT;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = LT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = cy;
              break;
            case "toggle":
            case "beforetoggle":
              $ = QT;
          }
          var Me = (r & 4) !== 0,
            ut = !Me && (t === "scroll" || t === "scrollend"),
            U = Me ? (q !== null ? q + "Capture" : null) : q;
          Me = [];
          for (var z = B, P; z !== null; ) {
            var te = z;
            if (
              ((P = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                P === null ||
                U === null ||
                ((te = xo(z, U)), te != null && Me.push(nl(z, te, P))),
              ut)
            )
              break;
            z = z.return;
          }
          0 < Me.length &&
            ((q = new $(q, De, null, s, ee)),
            ae.push({ event: q, listeners: Me }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((q = t === "mouseover" || t === "pointerover"),
            ($ = t === "mouseout" || t === "pointerout"),
            q &&
              s !== dd &&
              (De = s.relatedTarget || s.fromElement) &&
              (Ki(De) || De[Ht]))
          )
            break e;
          if (
            ($ || q) &&
            ((q =
              ee.window === ee
                ? ee
                : (q = ee.ownerDocument)
                ? q.defaultView || q.parentWindow
                : window),
            $
              ? ((De = s.relatedTarget || s.toElement),
                ($ = B),
                (De = De ? Ki(De) : null),
                De !== null &&
                  ((ut = u(De)),
                  (Me = De.tag),
                  De !== ut || (Me !== 5 && Me !== 27 && Me !== 6)) &&
                  (De = null))
              : (($ = null), (De = B)),
            $ !== De)
          ) {
            if (
              ((Me = ly),
              (te = "onMouseLeave"),
              (U = "onMouseEnter"),
              (z = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((Me = cy),
                (te = "onPointerLeave"),
                (U = "onPointerEnter"),
                (z = "pointer")),
              (ut = $ == null ? q : bo($)),
              (P = De == null ? q : bo(De)),
              (q = new Me(te, z + "leave", $, s, ee)),
              (q.target = ut),
              (q.relatedTarget = P),
              (te = null),
              Ki(ee) === B &&
                ((Me = new Me(U, z + "enter", De, s, ee)),
                (Me.target = P),
                (Me.relatedTarget = ut),
                (te = Me)),
              (ut = te),
              $ && De)
            )
              t: {
                for (Me = $, U = De, z = 0, P = Me; P; P = Os(P)) z++;
                for (P = 0, te = U; te; te = Os(te)) P++;
                for (; 0 < z - P; ) (Me = Os(Me)), z--;
                for (; 0 < P - z; ) (U = Os(U)), P--;
                for (; z--; ) {
                  if (Me === U || (U !== null && Me === U.alternate)) break t;
                  (Me = Os(Me)), (U = Os(U));
                }
                Me = null;
              }
            else Me = null;
            $ !== null && Jb(ae, q, $, Me, !1),
              De !== null && ut !== null && Jb(ae, ut, De, Me, !0);
          }
        }
        e: {
          if (
            ((q = B ? bo(B) : window),
            ($ = q.nodeName && q.nodeName.toLowerCase()),
            $ === "select" || ($ === "input" && q.type === "file"))
          )
            var we = vy;
          else if (gy(q))
            if (by) we = oR;
            else {
              we = iR;
              var $e = aR;
            }
          else
            ($ = q.nodeName),
              !$ ||
              $.toLowerCase() !== "input" ||
              (q.type !== "checkbox" && q.type !== "radio")
                ? B && fd(B.elementType) && (we = vy)
                : (we = sR);
          if (we && (we = we(t, B))) {
            yy(ae, we, s, ee);
            break e;
          }
          $e && $e(t, q, B),
            t === "focusout" &&
              B &&
              q.type === "number" &&
              B.memoizedProps.value != null &&
              cd(q, "number", q.value);
        }
        switch ((($e = B ? bo(B) : window), t)) {
          case "focusin":
            (gy($e) || $e.contentEditable === "true") &&
              ((is = $e), (Td = B), (Co = null));
            break;
          case "focusout":
            Co = Td = is = null;
            break;
          case "mousedown":
            Rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Rd = !1), Ay(ae, s, ee);
            break;
          case "selectionchange":
            if (uR) break;
          case "keydown":
          case "keyup":
            Ay(ae, s, ee);
        }
        var Re;
        if (wd)
          e: {
            switch (t) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = void 0;
          }
        else
          as
            ? my(t, s) && (Ne = "onCompositionEnd")
            : t === "keydown" &&
              s.keyCode === 229 &&
              (Ne = "onCompositionStart");
        Ne &&
          (fy &&
            s.locale !== "ko" &&
            (as || Ne !== "onCompositionStart"
              ? Ne === "onCompositionEnd" && as && (Re = sy())
              : ((ba = ee),
                (gd = "value" in ba ? ba.value : ba.textContent),
                (as = !0))),
          ($e = lc(B, Ne)),
          0 < $e.length &&
            ((Ne = new uy(Ne, t, null, s, ee)),
            ae.push({ event: Ne, listeners: $e }),
            Re
              ? (Ne.data = Re)
              : ((Re = py(s)), Re !== null && (Ne.data = Re)))),
          (Re = JT ? eR(t, s) : tR(t, s)) &&
            ((Ne = lc(B, "onBeforeInput")),
            0 < Ne.length &&
              (($e = new uy("onBeforeInput", "beforeinput", null, s, ee)),
              ae.push({ event: $e, listeners: Ne }),
              ($e.data = Re))),
          $R(ae, t, B, s, ee);
      }
      Qb(ae, r);
    });
  }
  function nl(t, r, s) {
    return { instance: t, listener: r, currentTarget: s };
  }
  function lc(t, r) {
    for (var s = r + "Capture", l = []; t !== null; ) {
      var f = t,
        h = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          h === null ||
          ((f = xo(t, s)),
          f != null && l.unshift(nl(t, f, h)),
          (f = xo(t, r)),
          f != null && l.push(nl(t, f, h))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Os(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Jb(t, r, s, l, f) {
    for (var h = r._reactName, b = []; s !== null && s !== l; ) {
      var T = s,
        M = T.alternate,
        B = T.stateNode;
      if (((T = T.tag), M !== null && M === l)) break;
      (T !== 5 && T !== 26 && T !== 27) ||
        B === null ||
        ((M = B),
        f
          ? ((B = xo(s, h)), B != null && b.unshift(nl(s, B, M)))
          : f || ((B = xo(s, h)), B != null && b.push(nl(s, B, M)))),
        (s = s.return);
    }
    b.length !== 0 && t.push({ event: r, listeners: b });
  }
  var KR = /\r\n?/g,
    XR = /\u0000|\uFFFD/g;
  function e0(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        KR,
        `
`
      )
      .replace(XR, "");
  }
  function t0(t, r) {
    return (r = e0(r)), e0(t) === r;
  }
  function uc() {}
  function lt(t, r, s, l, f, h) {
    switch (s) {
      case "children":
        typeof l == "string"
          ? r === "body" || (r === "textarea" && l === "") || ts(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            r !== "body" &&
            ts(t, "" + l);
        break;
      case "className":
        mu(t, "class", l);
        break;
      case "tabIndex":
        mu(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(t, s, l);
        break;
      case "style":
        ry(t, l, h);
        break;
      case "data":
        if (r !== "object") {
          mu(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (r !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(s);
          break;
        }
        (l = yu("" + l)), t.setAttribute(s, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (s === "formAction"
              ? (r !== "input" && lt(t, r, "name", f.name, f, null),
                lt(t, r, "formEncType", f.formEncType, f, null),
                lt(t, r, "formMethod", f.formMethod, f, null),
                lt(t, r, "formTarget", f.formTarget, f, null))
              : (lt(t, r, "encType", f.encType, f, null),
                lt(t, r, "method", f.method, f, null),
                lt(t, r, "target", f.target, f, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(s);
          break;
        }
        (l = yu("" + l)), t.setAttribute(s, l);
        break;
      case "onClick":
        l != null && (t.onclick = uc);
        break;
      case "onScroll":
        l != null && Ze("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = s;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (s = yu("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(s, "" + l)
          : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(s, "")
          : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(s, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(s, l)
          : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(s, l)
          : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(s)
          : t.setAttribute(s, l);
        break;
      case "popover":
        Ze("beforetoggle", t), Ze("toggle", t), hu(t, "popover", l);
        break;
      case "xlinkActuate":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Pr(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Pr(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Pr(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Pr(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        hu(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = RT.get(s) || s), hu(t, s, l));
    }
  }
  function Kh(t, r, s, l, f, h) {
    switch (s) {
      case "style":
        ry(t, l, h);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((s = l.__html), s != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ts(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ts(t, "" + l);
        break;
      case "onScroll":
        l != null && Ze("scroll", t);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = uc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gg.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (r = s.slice(2, f ? s.length - 7 : void 0)),
              (h = t[ft] || null),
              (h = h != null ? h[s] : null),
              typeof h == "function" && t.removeEventListener(r, h, f),
              typeof l == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (s in t
                  ? (t[s] = null)
                  : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(r, l, f);
              break e;
            }
            s in t
              ? (t[s] = l)
              : l === !0
              ? t.setAttribute(s, "")
              : hu(t, s, l);
          }
    }
  }
  function Xt(t, r, s) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ze("error", t), Ze("load", t);
        var l = !1,
          f = !1,
          h;
        for (h in s)
          if (s.hasOwnProperty(h)) {
            var b = s[h];
            if (b != null)
              switch (h) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, r));
                default:
                  lt(t, r, h, b, s, null);
              }
          }
        f && lt(t, r, "srcSet", s.srcSet, s, null),
          l && lt(t, r, "src", s.src, s, null);
        return;
      case "input":
        Ze("invalid", t);
        var T = (h = b = f = null),
          M = null,
          B = null;
        for (l in s)
          if (s.hasOwnProperty(l)) {
            var ee = s[l];
            if (ee != null)
              switch (l) {
                case "name":
                  f = ee;
                  break;
                case "type":
                  b = ee;
                  break;
                case "checked":
                  M = ee;
                  break;
                case "defaultChecked":
                  B = ee;
                  break;
                case "value":
                  h = ee;
                  break;
                case "defaultValue":
                  T = ee;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ee != null) throw Error(i(137, r));
                  break;
                default:
                  lt(t, r, l, ee, s, null);
              }
          }
        Jg(t, h, T, M, B, b, f, !1), pu(t);
        return;
      case "select":
        Ze("invalid", t), (l = b = h = null);
        for (f in s)
          if (s.hasOwnProperty(f) && ((T = s[f]), T != null))
            switch (f) {
              case "value":
                h = T;
                break;
              case "defaultValue":
                b = T;
                break;
              case "multiple":
                l = T;
              default:
                lt(t, r, f, T, s, null);
            }
        (r = h),
          (s = b),
          (t.multiple = !!l),
          r != null ? es(t, !!l, r, !1) : s != null && es(t, !!l, s, !0);
        return;
      case "textarea":
        Ze("invalid", t), (h = f = l = null);
        for (b in s)
          if (s.hasOwnProperty(b) && ((T = s[b]), T != null))
            switch (b) {
              case "value":
                l = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
                h = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(i(91));
                break;
              default:
                lt(t, r, b, T, s, null);
            }
        ty(t, l, f, h), pu(t);
        return;
      case "option":
        for (M in s)
          if (s.hasOwnProperty(M) && ((l = s[M]), l != null))
            switch (M) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                lt(t, r, M, l, s, null);
            }
        return;
      case "dialog":
        Ze("beforetoggle", t), Ze("toggle", t), Ze("cancel", t), Ze("close", t);
        break;
      case "iframe":
      case "object":
        Ze("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < tl.length; l++) Ze(tl[l], t);
        break;
      case "image":
        Ze("error", t), Ze("load", t);
        break;
      case "details":
        Ze("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ze("error", t), Ze("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in s)
          if (s.hasOwnProperty(B) && ((l = s[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, r));
              default:
                lt(t, r, B, l, s, null);
            }
        return;
      default:
        if (fd(r)) {
          for (ee in s)
            s.hasOwnProperty(ee) &&
              ((l = s[ee]), l !== void 0 && Kh(t, r, ee, l, s, void 0));
          return;
        }
    }
    for (T in s)
      s.hasOwnProperty(T) && ((l = s[T]), l != null && lt(t, r, T, l, s, null));
  }
  function QR(t, r, s, l) {
    switch (r) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          h = null,
          b = null,
          T = null,
          M = null,
          B = null,
          ee = null;
        for ($ in s) {
          var ae = s[$];
          if (s.hasOwnProperty($) && ae != null)
            switch ($) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = ae;
              default:
                l.hasOwnProperty($) || lt(t, r, $, null, l, ae);
            }
        }
        for (var q in l) {
          var $ = l[q];
          if (((ae = s[q]), l.hasOwnProperty(q) && ($ != null || ae != null)))
            switch (q) {
              case "type":
                h = $;
                break;
              case "name":
                f = $;
                break;
              case "checked":
                B = $;
                break;
              case "defaultChecked":
                ee = $;
                break;
              case "value":
                b = $;
                break;
              case "defaultValue":
                T = $;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if ($ != null) throw Error(i(137, r));
                break;
              default:
                $ !== ae && lt(t, r, q, $, l, ae);
            }
        }
        ud(t, b, T, M, B, ee, h, f);
        return;
      case "select":
        $ = b = T = q = null;
        for (h in s)
          if (((M = s[h]), s.hasOwnProperty(h) && M != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                $ = M;
              default:
                l.hasOwnProperty(h) || lt(t, r, h, null, l, M);
            }
        for (f in l)
          if (
            ((h = l[f]),
            (M = s[f]),
            l.hasOwnProperty(f) && (h != null || M != null))
          )
            switch (f) {
              case "value":
                q = h;
                break;
              case "defaultValue":
                T = h;
                break;
              case "multiple":
                b = h;
              default:
                h !== M && lt(t, r, f, h, l, M);
            }
        (r = T),
          (s = b),
          (l = $),
          q != null
            ? es(t, !!s, q, !1)
            : !!l != !!s &&
              (r != null ? es(t, !!s, r, !0) : es(t, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        $ = q = null;
        for (T in s)
          if (
            ((f = s[T]),
            s.hasOwnProperty(T) && f != null && !l.hasOwnProperty(T))
          )
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                lt(t, r, T, null, l, f);
            }
        for (b in l)
          if (
            ((f = l[b]),
            (h = s[b]),
            l.hasOwnProperty(b) && (f != null || h != null))
          )
            switch (b) {
              case "value":
                q = f;
                break;
              case "defaultValue":
                $ = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== h && lt(t, r, b, f, l, h);
            }
        ey(t, q, $);
        return;
      case "option":
        for (var De in s)
          if (
            ((q = s[De]),
            s.hasOwnProperty(De) && q != null && !l.hasOwnProperty(De))
          )
            switch (De) {
              case "selected":
                t.selected = !1;
                break;
              default:
                lt(t, r, De, null, l, q);
            }
        for (M in l)
          if (
            ((q = l[M]),
            ($ = s[M]),
            l.hasOwnProperty(M) && q !== $ && (q != null || $ != null))
          )
            switch (M) {
              case "selected":
                t.selected =
                  q && typeof q != "function" && typeof q != "symbol";
                break;
              default:
                lt(t, r, M, q, l, $);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Me in s)
          (q = s[Me]),
            s.hasOwnProperty(Me) &&
              q != null &&
              !l.hasOwnProperty(Me) &&
              lt(t, r, Me, null, l, q);
        for (B in l)
          if (
            ((q = l[B]),
            ($ = s[B]),
            l.hasOwnProperty(B) && q !== $ && (q != null || $ != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(i(137, r));
                break;
              default:
                lt(t, r, B, q, l, $);
            }
        return;
      default:
        if (fd(r)) {
          for (var ut in s)
            (q = s[ut]),
              s.hasOwnProperty(ut) &&
                q !== void 0 &&
                !l.hasOwnProperty(ut) &&
                Kh(t, r, ut, void 0, l, q);
          for (ee in l)
            (q = l[ee]),
              ($ = s[ee]),
              !l.hasOwnProperty(ee) ||
                q === $ ||
                (q === void 0 && $ === void 0) ||
                Kh(t, r, ee, q, l, $);
          return;
        }
    }
    for (var U in s)
      (q = s[U]),
        s.hasOwnProperty(U) &&
          q != null &&
          !l.hasOwnProperty(U) &&
          lt(t, r, U, null, l, q);
    for (ae in l)
      (q = l[ae]),
        ($ = s[ae]),
        !l.hasOwnProperty(ae) ||
          q === $ ||
          (q == null && $ == null) ||
          lt(t, r, ae, q, l, $);
  }
  var Xh = null,
    Qh = null;
  function cc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function n0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r0(t, r) {
    if (t === 0)
      switch (r) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && r === "foreignObject" ? 0 : t;
  }
  function Wh(t, r) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      typeof r.children == "bigint" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jh = null;
  function WR() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Jh
        ? !1
        : ((Jh = t), !0)
      : ((Jh = null), !1);
  }
  var a0 = typeof setTimeout == "function" ? setTimeout : void 0,
    JR = typeof clearTimeout == "function" ? clearTimeout : void 0,
    i0 = typeof Promise == "function" ? Promise : void 0,
    eA =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof i0 < "u"
        ? function (t) {
            return i0.resolve(null).then(t).catch(tA);
          }
        : a0;
  function tA(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function La(t) {
    return t === "head";
  }
  function s0(t, r) {
    var s = r,
      l = 0,
      f = 0;
    do {
      var h = s.nextSibling;
      if ((t.removeChild(s), h && h.nodeType === 8))
        if (((s = h.data), s === "/$")) {
          if (0 < l && 8 > l) {
            s = l;
            var b = t.ownerDocument;
            if ((s & 1 && rl(b.documentElement), s & 2 && rl(b.body), s & 4))
              for (s = b.head, rl(s), b = s.firstChild; b; ) {
                var T = b.nextSibling,
                  M = b.nodeName;
                b[vo] ||
                  M === "SCRIPT" ||
                  M === "STYLE" ||
                  (M === "LINK" && b.rel.toLowerCase() === "stylesheet") ||
                  s.removeChild(b),
                  (b = T);
              }
          }
          if (f === 0) {
            t.removeChild(h), fl(r);
            return;
          }
          f--;
        } else
          s === "$" || s === "$?" || s === "$!"
            ? f++
            : (l = s.charCodeAt(0) - 48);
      else l = 0;
      s = h;
    } while (s);
    fl(r);
  }
  function em(t) {
    var r = t.firstChild;
    for (r && r.nodeType === 10 && (r = r.nextSibling); r; ) {
      var s = r;
      switch (((r = r.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          em(s), id(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(s);
    }
  }
  function nA(t, r, s, l) {
    for (; t.nodeType === 1; ) {
      var f = s;
      if (t.nodeName.toLowerCase() !== r.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[vo])
          switch (r) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((h = t.getAttribute("rel")),
                h === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((h = t.getAttribute("src")),
                (h !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  h &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (r === "input" && t.type === "hidden") {
        var h = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (((t = tr(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function rA(t, r, s) {
    if (r === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !s) ||
        ((t = tr(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function tm(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function aA(t, r) {
    var s = t.ownerDocument;
    if (t.data !== "$?" || s.readyState === "complete") r();
    else {
      var l = function () {
        r(), s.removeEventListener("DOMContentLoaded", l);
      };
      s.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function tr(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (
          ((r = t.data),
          r === "$" || r === "$!" || r === "$?" || r === "F!" || r === "F")
        )
          break;
        if (r === "/$") return null;
      }
    }
    return t;
  }
  var nm = null;
  function o0(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return t;
          r--;
        } else s === "/$" && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function l0(t, r, s) {
    switch (((r = cc(s)), t)) {
      case "html":
        if (((t = r.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = r.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = r.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function rl(t) {
    for (var r = t.attributes; r.length; ) t.removeAttributeNode(r[0]);
    id(t);
  }
  var Gn = new Map(),
    u0 = new Set();
  function fc(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Wr = Q.d;
  Q.d = { f: iA, r: sA, D: oA, C: lA, L: uA, m: cA, X: dA, S: fA, M: hA };
  function iA() {
    var t = Wr.f(),
      r = nc();
    return t || r;
  }
  function sA(t) {
    var r = Xi(t);
    r !== null && r.tag === 5 && r.type === "form" ? Ov(r) : Wr.r(t);
  }
  var Ms = typeof document > "u" ? null : document;
  function c0(t, r, s) {
    var l = Ms;
    if (l && typeof r == "string" && r) {
      var f = Bn(r);
      (f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        u0.has(f) ||
          (u0.add(f),
          (t = { rel: t, crossOrigin: s, href: r }),
          l.querySelector(f) === null &&
            ((r = l.createElement("link")),
            Xt(r, "link", t),
            Ft(r),
            l.head.appendChild(r)));
    }
  }
  function oA(t) {
    Wr.D(t), c0("dns-prefetch", t, null);
  }
  function lA(t, r) {
    Wr.C(t, r), c0("preconnect", t, r);
  }
  function uA(t, r, s) {
    Wr.L(t, r, s);
    var l = Ms;
    if (l && t && r) {
      var f = 'link[rel="preload"][as="' + Bn(r) + '"]';
      r === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + Bn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + Bn(s.imageSizes) + '"]'))
        : (f += '[href="' + Bn(t) + '"]');
      var h = f;
      switch (r) {
        case "style":
          h = Ns(t);
          break;
        case "script":
          h = Ds(t);
      }
      Gn.has(h) ||
        ((t = g(
          {
            rel: "preload",
            href: r === "image" && s && s.imageSrcSet ? void 0 : t,
            as: r,
          },
          s
        )),
        Gn.set(h, t),
        l.querySelector(f) !== null ||
          (r === "style" && l.querySelector(al(h))) ||
          (r === "script" && l.querySelector(il(h))) ||
          ((r = l.createElement("link")),
          Xt(r, "link", t),
          Ft(r),
          l.head.appendChild(r)));
    }
  }
  function cA(t, r) {
    Wr.m(t, r);
    var s = Ms;
    if (s && t) {
      var l = r && typeof r.as == "string" ? r.as : "script",
        f =
          'link[rel="modulepreload"][as="' + Bn(l) + '"][href="' + Bn(t) + '"]',
        h = f;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = Ds(t);
      }
      if (
        !Gn.has(h) &&
        ((t = g({ rel: "modulepreload", href: t }, r)),
        Gn.set(h, t),
        s.querySelector(f) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(il(h))) return;
        }
        (l = s.createElement("link")),
          Xt(l, "link", t),
          Ft(l),
          s.head.appendChild(l);
      }
    }
  }
  function fA(t, r, s) {
    Wr.S(t, r, s);
    var l = Ms;
    if (l && t) {
      var f = Qi(l).hoistableStyles,
        h = Ns(t);
      r = r || "default";
      var b = f.get(h);
      if (!b) {
        var T = { loading: 0, preload: null };
        if ((b = l.querySelector(al(h)))) T.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": r }, s)),
            (s = Gn.get(h)) && rm(t, s);
          var M = (b = l.createElement("link"));
          Ft(M),
            Xt(M, "link", t),
            (M._p = new Promise(function (B, ee) {
              (M.onload = B), (M.onerror = ee);
            })),
            M.addEventListener("load", function () {
              T.loading |= 1;
            }),
            M.addEventListener("error", function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            dc(b, r, l);
        }
        (b = { type: "stylesheet", instance: b, count: 1, state: T }),
          f.set(h, b);
      }
    }
  }
  function dA(t, r) {
    Wr.X(t, r);
    var s = Ms;
    if (s && t) {
      var l = Qi(s).hoistableScripts,
        f = Ds(t),
        h = l.get(f);
      h ||
        ((h = s.querySelector(il(f))),
        h ||
          ((t = g({ src: t, async: !0 }, r)),
          (r = Gn.get(f)) && am(t, r),
          (h = s.createElement("script")),
          Ft(h),
          Xt(h, "link", t),
          s.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function hA(t, r) {
    Wr.M(t, r);
    var s = Ms;
    if (s && t) {
      var l = Qi(s).hoistableScripts,
        f = Ds(t),
        h = l.get(f);
      h ||
        ((h = s.querySelector(il(f))),
        h ||
          ((t = g({ src: t, async: !0, type: "module" }, r)),
          (r = Gn.get(f)) && am(t, r),
          (h = s.createElement("script")),
          Ft(h),
          Xt(h, "link", t),
          s.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function f0(t, r, s, l) {
    var f = (f = de.current) ? fc(f) : null;
    if (!f) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((r = Ns(s.href)),
            (s = Qi(f).hoistableStyles),
            (l = s.get(r)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              s.set(r, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          t = Ns(s.href);
          var h = Qi(f).hoistableStyles,
            b = h.get(t);
          if (
            (b ||
              ((f = f.ownerDocument || f),
              (b = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(t, b),
              (h = f.querySelector(al(t))) &&
                !h._p &&
                ((b.instance = h), (b.state.loading = 5)),
              Gn.has(t) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                Gn.set(t, s),
                h || mA(f, t, s, b.state))),
            r && l === null)
          )
            throw Error(i(528, ""));
          return b;
        }
        if (r && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (r = s.async),
          (s = s.src),
          typeof s == "string" &&
          r &&
          typeof r != "function" &&
          typeof r != "symbol"
            ? ((r = Ds(s)),
              (s = Qi(f).hoistableScripts),
              (l = s.get(r)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(r, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Ns(t) {
    return 'href="' + Bn(t) + '"';
  }
  function al(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function d0(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function mA(t, r, s, l) {
    t.querySelector('link[rel="preload"][as="style"][' + r + "]")
      ? (l.loading = 1)
      : ((r = t.createElement("link")),
        (l.preload = r),
        r.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        r.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Xt(r, "link", s),
        Ft(r),
        t.head.appendChild(r));
  }
  function Ds(t) {
    return '[src="' + Bn(t) + '"]';
  }
  function il(t) {
    return "script[async]" + t;
  }
  function h0(t, r, s) {
    if ((r.count++, r.instance === null))
      switch (r.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Bn(s.href) + '"]');
          if (l) return (r.instance = l), Ft(l), l;
          var f = g({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Ft(l),
            Xt(l, "style", f),
            dc(l, s.precedence, t),
            (r.instance = l)
          );
        case "stylesheet":
          f = Ns(s.href);
          var h = t.querySelector(al(f));
          if (h) return (r.state.loading |= 4), (r.instance = h), Ft(h), h;
          (l = d0(s)),
            (f = Gn.get(f)) && rm(l, f),
            (h = (t.ownerDocument || t).createElement("link")),
            Ft(h);
          var b = h;
          return (
            (b._p = new Promise(function (T, M) {
              (b.onload = T), (b.onerror = M);
            })),
            Xt(h, "link", l),
            (r.state.loading |= 4),
            dc(h, s.precedence, t),
            (r.instance = h)
          );
        case "script":
          return (
            (h = Ds(s.src)),
            (f = t.querySelector(il(h)))
              ? ((r.instance = f), Ft(f), f)
              : ((l = s),
                (f = Gn.get(h)) && ((l = g({}, s)), am(l, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                Ft(f),
                Xt(f, "link", l),
                t.head.appendChild(f),
                (r.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, r.type));
      }
    else
      r.type === "stylesheet" &&
        (r.state.loading & 4) === 0 &&
        ((l = r.instance), (r.state.loading |= 4), dc(l, s.precedence, t));
    return r.instance;
  }
  function dc(t, r, s) {
    for (
      var l = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = l.length ? l[l.length - 1] : null,
        h = f,
        b = 0;
      b < l.length;
      b++
    ) {
      var T = l[b];
      if (T.dataset.precedence === r) h = T;
      else if (h !== f) break;
    }
    h
      ? h.parentNode.insertBefore(t, h.nextSibling)
      : ((r = s.nodeType === 9 ? s.head : s), r.insertBefore(t, r.firstChild));
  }
  function rm(t, r) {
    t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.title == null && (t.title = r.title);
  }
  function am(t, r) {
    t.crossOrigin == null && (t.crossOrigin = r.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = r.referrerPolicy),
      t.integrity == null && (t.integrity = r.integrity);
  }
  var hc = null;
  function m0(t, r, s) {
    if (hc === null) {
      var l = new Map(),
        f = (hc = new Map());
      f.set(s, l);
    } else (f = hc), (l = f.get(s)), l || ((l = new Map()), f.set(s, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), s = s.getElementsByTagName(t), f = 0;
      f < s.length;
      f++
    ) {
      var h = s[f];
      if (
        !(
          h[vo] ||
          h[wt] ||
          (t === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var b = h.getAttribute(r) || "";
        b = t + b;
        var T = l.get(b);
        T ? T.push(h) : l.set(b, [h]);
      }
    }
    return l;
  }
  function p0(t, r, s) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        s,
        r === "title" ? t.querySelector("head > title") : null
      );
  }
  function pA(t, r, s) {
    if (s === 1 || r.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof r.precedence != "string" ||
          typeof r.href != "string" ||
          r.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof r.rel != "string" ||
          typeof r.href != "string" ||
          r.href === "" ||
          r.onLoad ||
          r.onError
        )
          break;
        switch (r.rel) {
          case "stylesheet":
            return (
              (t = r.disabled), typeof r.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          r.async &&
          typeof r.async != "function" &&
          typeof r.async != "symbol" &&
          !r.onLoad &&
          !r.onError &&
          r.src &&
          typeof r.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function g0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var sl = null;
  function gA() {}
  function yA(t, r, s) {
    if (sl === null) throw Error(i(475));
    var l = sl;
    if (
      r.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var f = Ns(s.href),
          h = t.querySelector(al(f));
        if (h) {
          (t = h._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = mc.bind(l)), t.then(l, l)),
            (r.state.loading |= 4),
            (r.instance = h),
            Ft(h);
          return;
        }
        (h = t.ownerDocument || t),
          (s = d0(s)),
          (f = Gn.get(f)) && rm(s, f),
          (h = h.createElement("link")),
          Ft(h);
        var b = h;
        (b._p = new Promise(function (T, M) {
          (b.onload = T), (b.onerror = M);
        })),
          Xt(h, "link", s),
          (r.instance = h);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(r, t),
        (t = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (l.count++,
          (r = mc.bind(l)),
          t.addEventListener("load", r),
          t.addEventListener("error", r));
    }
  }
  function vA() {
    if (sl === null) throw Error(i(475));
    var t = sl;
    return (
      t.stylesheets && t.count === 0 && im(t, t.stylesheets),
      0 < t.count
        ? function (r) {
            var s = setTimeout(function () {
              if ((t.stylesheets && im(t, t.stylesheets), t.unsuspend)) {
                var l = t.unsuspend;
                (t.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (t.unsuspend = r),
              function () {
                (t.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function mc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) im(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var pc = null;
  function im(t, r) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (pc = new Map()),
        r.forEach(bA, t),
        (pc = null),
        mc.call(t));
  }
  function bA(t, r) {
    if (!(r.state.loading & 4)) {
      var s = pc.get(t);
      if (s) var l = s.get(null);
      else {
        (s = new Map()), pc.set(t, s);
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < f.length;
          h++
        ) {
          var b = f[h];
          (b.nodeName === "LINK" || b.getAttribute("media") !== "not all") &&
            (s.set(b.dataset.precedence, b), (l = b));
        }
        l && s.set(null, l);
      }
      (f = r.instance),
        (b = f.getAttribute("data-precedence")),
        (h = s.get(b) || l),
        h === l && s.set(null, f),
        s.set(b, f),
        this.count++,
        (l = mc.bind(this)),
        f.addEventListener("load", l),
        f.addEventListener("error", l),
        h
          ? h.parentNode.insertBefore(f, h.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (r.state.loading |= 4);
    }
  }
  var ol = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0,
  };
  function xA(t, r, s, l, f, h, b, T) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.hiddenUpdates = yo(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = f),
      (this.onCaughtError = h),
      (this.onRecoverableError = b),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map());
  }
  function y0(t, r, s, l, f, h, b, T, M, B, ee, ae) {
    return (
      (t = new xA(t, r, s, b, T, M, B, ae)),
      (r = 1),
      h === !0 && (r |= 24),
      (h = En(3, null, null, r)),
      (t.current = h),
      (h.stateNode = t),
      (r = Vd()),
      r.refCount++,
      (t.pooledCache = r),
      r.refCount++,
      (h.memoizedState = { element: l, isDehydrated: s, cache: r }),
      Id(h),
      t
    );
  }
  function v0(t) {
    return t ? ((t = us), t) : us;
  }
  function b0(t, r, s, l, f, h) {
    (f = v0(f)),
      l.context === null ? (l.context = f) : (l.pendingContext = f),
      (l = Sa(r)),
      (l.payload = { element: s }),
      (h = h === void 0 ? null : h),
      h !== null && (l.callback = h),
      (s = _a(t, l, r)),
      s !== null && (On(s, t, r), Uo(s, t, r));
  }
  function x0(t, r) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function sm(t, r) {
    x0(t, r), (t = t.alternate) && x0(t, r);
  }
  function w0(t) {
    if (t.tag === 13) {
      var r = ls(t, 67108864);
      r !== null && On(r, t, 67108864), sm(t, 67108864);
    }
  }
  var gc = !0;
  function wA(t, r, s, l) {
    var f = j.T;
    j.T = null;
    var h = Q.p;
    try {
      (Q.p = 2), om(t, r, s, l);
    } finally {
      (Q.p = h), (j.T = f);
    }
  }
  function SA(t, r, s, l) {
    var f = j.T;
    j.T = null;
    var h = Q.p;
    try {
      (Q.p = 8), om(t, r, s, l);
    } finally {
      (Q.p = h), (j.T = f);
    }
  }
  function om(t, r, s, l) {
    if (gc) {
      var f = lm(l);
      if (f === null) Zh(t, r, l, yc, s), _0(t, l);
      else if (EA(f, t, r, s, l)) l.stopPropagation();
      else if ((_0(t, l), r & 4 && -1 < _A.indexOf(t))) {
        for (; f !== null; ) {
          var h = Xi(f);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var b = Un(h.pendingLanes);
                  if (b !== 0) {
                    var T = h;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; b; ) {
                      var M = 1 << (31 - nt(b));
                      (T.entanglements[1] |= M), (b &= ~M);
                    }
                    _r(h), (at & 6) === 0 && ((ec = Ot() + 500), el(0));
                  }
                }
                break;
              case 13:
                (T = ls(h, 2)), T !== null && On(T, h, 2), nc(), sm(h, 2);
            }
          if (((h = lm(l)), h === null && Zh(t, r, l, yc, s), h === f)) break;
          f = h;
        }
        f !== null && l.stopPropagation();
      } else Zh(t, r, l, null, s);
    }
  }
  function lm(t) {
    return (t = hd(t)), um(t);
  }
  var yc = null;
  function um(t) {
    if (((yc = null), (t = Ki(t)), t !== null)) {
      var r = u(t);
      if (r === null) t = null;
      else {
        var s = r.tag;
        if (s === 13) {
          if (((t = c(r)), t !== null)) return t;
          t = null;
        } else if (s === 3) {
          if (r.stateNode.current.memoizedState.isDehydrated)
            return r.tag === 3 ? r.stateNode.containerInfo : null;
          t = null;
        } else r !== t && (t = null);
      }
    }
    return (yc = t), null;
  }
  function S0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (oi()) {
          case Mt:
            return 2;
          case L:
            return 8;
          case F:
          case X:
            return 32;
          case me:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cm = !1,
    za = null,
    Ua = null,
    Pa = null,
    ll = new Map(),
    ul = new Map(),
    Ba = [],
    _A =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function _0(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        za = null;
        break;
      case "dragenter":
      case "dragleave":
        Ua = null;
        break;
      case "mouseover":
      case "mouseout":
        Pa = null;
        break;
      case "pointerover":
      case "pointerout":
        ll.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ul.delete(r.pointerId);
    }
  }
  function cl(t, r, s, l, f, h) {
    return t === null || t.nativeEvent !== h
      ? ((t = {
          blockedOn: r,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [f],
        }),
        r !== null && ((r = Xi(r)), r !== null && w0(r)),
        t)
      : ((t.eventSystemFlags |= l),
        (r = t.targetContainers),
        f !== null && r.indexOf(f) === -1 && r.push(f),
        t);
  }
  function EA(t, r, s, l, f) {
    switch (r) {
      case "focusin":
        return (za = cl(za, t, r, s, l, f)), !0;
      case "dragenter":
        return (Ua = cl(Ua, t, r, s, l, f)), !0;
      case "mouseover":
        return (Pa = cl(Pa, t, r, s, l, f)), !0;
      case "pointerover":
        var h = f.pointerId;
        return ll.set(h, cl(ll.get(h) || null, t, r, s, l, f)), !0;
      case "gotpointercapture":
        return (
          (h = f.pointerId), ul.set(h, cl(ul.get(h) || null, t, r, s, l, f)), !0
        );
    }
    return !1;
  }
  function E0(t) {
    var r = Ki(t.target);
    if (r !== null) {
      var s = u(r);
      if (s !== null) {
        if (((r = s.tag), r === 13)) {
          if (((r = c(s)), r !== null)) {
            (t.blockedOn = r),
              zt(t.priority, function () {
                if (s.tag === 13) {
                  var l = Cn();
                  l = Nt(l);
                  var f = ls(s, l);
                  f !== null && On(f, s, l), sm(s, l);
                }
              });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function vc(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var s = lm(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var l = new s.constructor(s.type, s);
        (dd = l), s.target.dispatchEvent(l), (dd = null);
      } else return (r = Xi(s)), r !== null && w0(r), (t.blockedOn = s), !1;
      r.shift();
    }
    return !0;
  }
  function T0(t, r, s) {
    vc(t) && s.delete(r);
  }
  function TA() {
    (cm = !1),
      za !== null && vc(za) && (za = null),
      Ua !== null && vc(Ua) && (Ua = null),
      Pa !== null && vc(Pa) && (Pa = null),
      ll.forEach(T0),
      ul.forEach(T0);
  }
  function bc(t, r) {
    t.blockedOn === r &&
      ((t.blockedOn = null),
      cm ||
        ((cm = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, TA)));
  }
  var xc = null;
  function R0(t) {
    xc !== t &&
      ((xc = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        xc === t && (xc = null);
        for (var r = 0; r < t.length; r += 3) {
          var s = t[r],
            l = t[r + 1],
            f = t[r + 2];
          if (typeof l != "function") {
            if (um(l || s) === null) continue;
            break;
          }
          var h = Xi(s);
          h !== null &&
            (t.splice(r, 3),
            (r -= 3),
            uh(h, { pending: !0, data: f, method: s.method, action: l }, l, f));
        }
      }));
  }
  function fl(t) {
    function r(M) {
      return bc(M, t);
    }
    za !== null && bc(za, t),
      Ua !== null && bc(Ua, t),
      Pa !== null && bc(Pa, t),
      ll.forEach(r),
      ul.forEach(r);
    for (var s = 0; s < Ba.length; s++) {
      var l = Ba[s];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Ba.length && ((s = Ba[0]), s.blockedOn === null); )
      E0(s), s.blockedOn === null && Ba.shift();
    if (((s = (t.ownerDocument || t).$$reactFormReplay), s != null))
      for (l = 0; l < s.length; l += 3) {
        var f = s[l],
          h = s[l + 1],
          b = f[ft] || null;
        if (typeof h == "function") b || R0(s);
        else if (b) {
          var T = null;
          if (h && h.hasAttribute("formAction")) {
            if (((f = h), (b = h[ft] || null))) T = b.formAction;
            else if (um(f) !== null) continue;
          } else T = b.action;
          typeof T == "function" ? (s[l + 1] = T) : (s.splice(l, 3), (l -= 3)),
            R0(s);
        }
      }
  }
  function fm(t) {
    this._internalRoot = t;
  }
  (wc.prototype.render = fm.prototype.render =
    function (t) {
      var r = this._internalRoot;
      if (r === null) throw Error(i(409));
      var s = r.current,
        l = Cn();
      b0(s, l, t, r, null, null);
    }),
    (wc.prototype.unmount = fm.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var r = t.containerInfo;
          b0(t.current, 2, null, t, null, null), nc(), (r[Ht] = null);
        }
      });
  function wc(t) {
    this._internalRoot = t;
  }
  wc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var r = li();
      t = { blockedOn: null, target: t, priority: r };
      for (var s = 0; s < Ba.length && r !== 0 && r < Ba[s].priority; s++);
      Ba.splice(s, 0, t), s === 0 && E0(t);
    }
  };
  var A0 = n.version;
  if (A0 !== "19.1.0") throw Error(i(527, A0, "19.1.0"));
  Q.findDOMNode = function (t) {
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = p(r)),
      (t = t !== null ? m(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var RA = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sc.isDisabled && Sc.supportsFiber)
      try {
        (xe = Sc.inject(RA)), (je = Sc);
      } catch {}
  }
  return (
    (hl.createRoot = function (t, r) {
      if (!o(t)) throw Error(i(299));
      var s = !1,
        l = "",
        f = qv,
        h = Iv,
        b = $v,
        T = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (f = r.onUncaughtError),
          r.onCaughtError !== void 0 && (h = r.onCaughtError),
          r.onRecoverableError !== void 0 && (b = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (T = r.unstable_transitionCallbacks)),
        (r = y0(t, 1, !1, null, null, s, l, f, h, b, T, null)),
        (t[Ht] = r.current),
        Yh(t),
        new fm(r)
      );
    }),
    (hl.hydrateRoot = function (t, r, s) {
      if (!o(t)) throw Error(i(299));
      var l = !1,
        f = "",
        h = qv,
        b = Iv,
        T = $v,
        M = null,
        B = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (l = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (h = s.onUncaughtError),
          s.onCaughtError !== void 0 && (b = s.onCaughtError),
          s.onRecoverableError !== void 0 && (T = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (M = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (B = s.formState)),
        (r = y0(t, 1, !0, r, s ?? null, l, f, h, b, T, M, B)),
        (r.context = v0(null)),
        (s = r.current),
        (l = Cn()),
        (l = Nt(l)),
        (f = Sa(l)),
        (f.callback = null),
        _a(s, f, l),
        (s = l),
        (r.current.lanes = s),
        va(r, s),
        _r(r),
        (t[Ht] = r.current),
        Yh(t),
        new wc(r)
      );
    }),
    (hl.version = "19.1.0"),
    hl
  );
}
var P0;
function zA() {
  if (P0) return pm.exports;
  P0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), (pm.exports = LA()), pm.exports;
}
var UA = zA(),
  ml = {},
  B0;
function PA() {
  if (B0) return ml;
  (B0 = 1),
    Object.defineProperty(ml, "__esModule", { value: !0 }),
    (ml.parse = c),
    (ml.serialize = m);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    n = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
    o = Object.prototype.toString,
    u = (() => {
      const x = function () {};
      return (x.prototype = Object.create(null)), x;
    })();
  function c(x, R) {
    const E = new u(),
      _ = x.length;
    if (_ < 2) return E;
    const w = (R == null ? void 0 : R.decode) || g;
    let A = 0;
    do {
      const C = x.indexOf("=", A);
      if (C === -1) break;
      const N = x.indexOf(";", A),
        k = N === -1 ? _ : N;
      if (C > k) {
        A = x.lastIndexOf(";", C - 1) + 1;
        continue;
      }
      const D = d(x, A, C),
        I = p(x, C, D),
        Y = x.slice(D, I);
      if (E[Y] === void 0) {
        let G = d(x, C + 1, k),
          J = p(x, k, G);
        const ye = w(x.slice(G, J));
        E[Y] = ye;
      }
      A = k + 1;
    } while (A < _);
    return E;
  }
  function d(x, R, E) {
    do {
      const _ = x.charCodeAt(R);
      if (_ !== 32 && _ !== 9) return R;
    } while (++R < E);
    return E;
  }
  function p(x, R, E) {
    for (; R > E; ) {
      const _ = x.charCodeAt(--R);
      if (_ !== 32 && _ !== 9) return R + 1;
    }
    return E;
  }
  function m(x, R, E) {
    const _ = (E == null ? void 0 : E.encode) || encodeURIComponent;
    if (!e.test(x)) throw new TypeError(`argument name is invalid: ${x}`);
    const w = _(R);
    if (!n.test(w)) throw new TypeError(`argument val is invalid: ${R}`);
    let A = x + "=" + w;
    if (!E) return A;
    if (E.maxAge !== void 0) {
      if (!Number.isInteger(E.maxAge))
        throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);
      A += "; Max-Age=" + E.maxAge;
    }
    if (E.domain) {
      if (!a.test(E.domain))
        throw new TypeError(`option domain is invalid: ${E.domain}`);
      A += "; Domain=" + E.domain;
    }
    if (E.path) {
      if (!i.test(E.path))
        throw new TypeError(`option path is invalid: ${E.path}`);
      A += "; Path=" + E.path;
    }
    if (E.expires) {
      if (!y(E.expires) || !Number.isFinite(E.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${E.expires}`);
      A += "; Expires=" + E.expires.toUTCString();
    }
    if (
      (E.httpOnly && (A += "; HttpOnly"),
      E.secure && (A += "; Secure"),
      E.partitioned && (A += "; Partitioned"),
      E.priority)
    )
      switch (
        typeof E.priority == "string" ? E.priority.toLowerCase() : void 0
      ) {
        case "low":
          A += "; Priority=Low";
          break;
        case "medium":
          A += "; Priority=Medium";
          break;
        case "high":
          A += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${E.priority}`);
      }
    if (E.sameSite)
      switch (
        typeof E.sameSite == "string" ? E.sameSite.toLowerCase() : E.sameSite
      ) {
        case !0:
        case "strict":
          A += "; SameSite=Strict";
          break;
        case "lax":
          A += "; SameSite=Lax";
          break;
        case "none":
          A += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${E.sameSite}`);
      }
    return A;
  }
  function g(x) {
    if (x.indexOf("%") === -1) return x;
    try {
      return decodeURIComponent(x);
    } catch {
      return x;
    }
  }
  function y(x) {
    return o.call(x) === "[object Date]";
  }
  return ml;
}
PA();
var V0 = "popstate";
function BA(e = {}) {
  function n(i, o) {
    let { pathname: u, search: c, hash: d } = i.location;
    return Qm(
      "",
      { pathname: u, search: c, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function a(i, o) {
    return typeof o == "string" ? o : kl(o);
  }
  return HA(n, a, null, e);
}
function Lt(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
function Xn(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function VA() {
  return Math.random().toString(36).substring(2, 10);
}
function H0(e, n) {
  return { usr: e.state, key: e.key, idx: n };
}
function Qm(e, n, a = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? Zl(n) : n),
    state: a,
    key: (n && n.key) || i || VA(),
  };
}
function kl({ pathname: e = "/", search: n = "", hash: a = "" }) {
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a),
    e
  );
}
function Zl(e) {
  let n = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && ((n.hash = e.substring(a)), (e = e.substring(0, a)));
    let i = e.indexOf("?");
    i >= 0 && ((n.search = e.substring(i)), (e = e.substring(0, i))),
      e && (n.pathname = e);
  }
  return n;
}
function HA(e, n, a, i = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = i,
    c = o.history,
    d = "POP",
    p = null,
    m = g();
  m == null && ((m = 0), c.replaceState({ ...c.state, idx: m }, ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function y() {
    d = "POP";
    let w = g(),
      A = w == null ? null : w - m;
    (m = w), p && p({ action: d, location: _.location, delta: A });
  }
  function x(w, A) {
    d = "PUSH";
    let C = Qm(_.location, w, A);
    m = g() + 1;
    let N = H0(C, m),
      k = _.createHref(C);
    try {
      c.pushState(N, "", k);
    } catch (D) {
      if (D instanceof DOMException && D.name === "DataCloneError") throw D;
      o.location.assign(k);
    }
    u && p && p({ action: d, location: _.location, delta: 1 });
  }
  function R(w, A) {
    d = "REPLACE";
    let C = Qm(_.location, w, A);
    m = g();
    let N = H0(C, m),
      k = _.createHref(C);
    c.replaceState(N, "", k),
      u && p && p({ action: d, location: _.location, delta: 0 });
  }
  function E(w) {
    return FA(w);
  }
  let _ = {
    get action() {
      return d;
    },
    get location() {
      return e(o, c);
    },
    listen(w) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(V0, y),
        (p = w),
        () => {
          o.removeEventListener(V0, y), (p = null);
        }
      );
    },
    createHref(w) {
      return n(o, w);
    },
    createURL: E,
    encodeLocation(w) {
      let A = E(w);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: x,
    replace: R,
    go(w) {
      return c.go(w);
    },
  };
  return _;
}
function FA(e, n = !1) {
  let a = "http://localhost";
  typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Lt(a, "No window.location.(origin|href) available to create URL");
  let i = typeof e == "string" ? e : kl(e);
  return (
    (i = i.replace(/ $/, "%20")),
    !n && i.startsWith("//") && (i = a + i),
    new URL(i, a)
  );
}
function Ww(e, n, a = "/") {
  return qA(e, n, a, !1);
}
function qA(e, n, a, i) {
  let o = typeof n == "string" ? Zl(n) : n,
    u = ua(o.pathname || "/", a);
  if (u == null) return null;
  let c = Jw(e);
  IA(c);
  let d = null;
  for (let p = 0; d == null && p < c.length; ++p) {
    let m = tC(u);
    d = JA(c[p], m, i);
  }
  return d;
}
function Jw(e, n = [], a = [], i = "") {
  let o = (u, c, d) => {
    let p = {
      relativePath: d === void 0 ? u.path || "" : d,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    p.relativePath.startsWith("/") &&
      (Lt(
        p.relativePath.startsWith(i),
        `Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (p.relativePath = p.relativePath.slice(i.length)));
    let m = ia([i, p.relativePath]),
      g = a.concat(p);
    u.children &&
      u.children.length > 0 &&
      (Lt(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      Jw(u.children, n, g, m)),
      !(u.path == null && !u.index) &&
        n.push({ path: m, score: QA(m, u.index), routesMeta: g });
  };
  return (
    e.forEach((u, c) => {
      var d;
      if (u.path === "" || !((d = u.path) != null && d.includes("?"))) o(u, c);
      else for (let p of eS(u.path)) o(u, c, p);
    }),
    n
  );
}
function eS(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [a, ...i] = n,
    o = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (i.length === 0) return o ? [u, ""] : [u];
  let c = eS(i.join("/")),
    d = [];
  return (
    d.push(...c.map((p) => (p === "" ? u : [u, p].join("/")))),
    o && d.push(...c),
    d.map((p) => (e.startsWith("/") && p === "" ? "/" : p))
  );
}
function IA(e) {
  e.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : WA(
          n.routesMeta.map((i) => i.childrenIndex),
          a.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var $A = /^:[\w-]+$/,
  GA = 3,
  YA = 2,
  ZA = 1,
  KA = 10,
  XA = -2,
  F0 = (e) => e === "*";
function QA(e, n) {
  let a = e.split("/"),
    i = a.length;
  return (
    a.some(F0) && (i += XA),
    n && (i += YA),
    a
      .filter((o) => !F0(o))
      .reduce((o, u) => o + ($A.test(u) ? GA : u === "" ? ZA : KA), i)
  );
}
function WA(e, n) {
  return e.length === n.length && e.slice(0, -1).every((i, o) => i === n[o])
    ? e[e.length - 1] - n[n.length - 1]
    : 0;
}
function JA(e, n, a = !1) {
  let { routesMeta: i } = e,
    o = {},
    u = "/",
    c = [];
  for (let d = 0; d < i.length; ++d) {
    let p = i[d],
      m = d === i.length - 1,
      g = u === "/" ? n : n.slice(u.length) || "/",
      y = Xc(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        g
      ),
      x = p.route;
    if (
      (!y &&
        m &&
        a &&
        !i[i.length - 1].route.index &&
        (y = Xc(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          g
        )),
      !y)
    )
      return null;
    Object.assign(o, y.params),
      c.push({
        params: o,
        pathname: ia([u, y.pathname]),
        pathnameBase: iC(ia([u, y.pathnameBase])),
        route: x,
      }),
      y.pathnameBase !== "/" && (u = ia([u, y.pathnameBase]));
  }
  return c;
}
function Xc(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, i] = eC(e.path, e.caseSensitive, e.end),
    o = n.match(a);
  if (!o) return null;
  let u = o[0],
    c = u.replace(/(.)\/+$/, "$1"),
    d = o.slice(1);
  return {
    params: i.reduce((m, { paramName: g, isOptional: y }, x) => {
      if (g === "*") {
        let E = d[x] || "";
        c = u.slice(0, u.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const R = d[x];
      return (
        y && !R ? (m[g] = void 0) : (m[g] = (R || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: e,
  };
}
function eC(e, n = !1, a = !0) {
  Xn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, d, p) => (
            i.push({ paramName: d, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, n ? void 0 : "i"), i]
  );
}
function tC(e) {
  try {
    return e
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Xn(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      e
    );
  }
}
function ua(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith("/") ? n.length - 1 : n.length,
    i = e.charAt(a);
  return i && i !== "/" ? null : e.slice(a) || "/";
}
function nC(e, n = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: o = "",
  } = typeof e == "string" ? Zl(e) : e;
  return {
    pathname: a ? (a.startsWith("/") ? a : rC(a, n)) : n,
    search: sC(i),
    hash: oC(o),
  };
}
function rC(e, n) {
  let a = n.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function bm(e, n, a, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function aC(e) {
  return e.filter(
    (n, a) => a === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function Up(e) {
  let n = aC(e);
  return n.map((a, i) => (i === n.length - 1 ? a.pathname : a.pathnameBase));
}
function Pp(e, n, a, i = !1) {
  let o;
  typeof e == "string"
    ? (o = Zl(e))
    : ((o = { ...e }),
      Lt(
        !o.pathname || !o.pathname.includes("?"),
        bm("?", "pathname", "search", o)
      ),
      Lt(
        !o.pathname || !o.pathname.includes("#"),
        bm("#", "pathname", "hash", o)
      ),
      Lt(!o.search || !o.search.includes("#"), bm("#", "search", "hash", o)));
  let u = e === "" || o.pathname === "",
    c = u ? "/" : o.pathname,
    d;
  if (c == null) d = a;
  else {
    let y = n.length - 1;
    if (!i && c.startsWith("..")) {
      let x = c.split("/");
      for (; x[0] === ".."; ) x.shift(), (y -= 1);
      o.pathname = x.join("/");
    }
    d = y >= 0 ? n[y] : "/";
  }
  let p = nC(o, d),
    m = c && c !== "/" && c.endsWith("/"),
    g = (u || c === ".") && a.endsWith("/");
  return !p.pathname.endsWith("/") && (m || g) && (p.pathname += "/"), p;
}
var ia = (e) => e.join("/").replace(/\/\/+/g, "/"),
  iC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  oC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function lC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var tS = ["POST", "PUT", "PATCH", "DELETE"];
new Set(tS);
var uC = ["GET", ...tS];
new Set(uC);
var oo = v.createContext(null);
oo.displayName = "DataRouter";
var Tf = v.createContext(null);
Tf.displayName = "DataRouterState";
var nS = v.createContext({ isTransitioning: !1 });
nS.displayName = "ViewTransition";
var cC = v.createContext(new Map());
cC.displayName = "Fetchers";
var fC = v.createContext(null);
fC.displayName = "Await";
var ur = v.createContext(null);
ur.displayName = "Navigation";
var Rf = v.createContext(null);
Rf.displayName = "Location";
var cr = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
cr.displayName = "Route";
var Bp = v.createContext(null);
Bp.displayName = "RouteError";
function dC(e, { relative: n } = {}) {
  Lt(
    lo(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: i } = v.useContext(ur),
    { hash: o, pathname: u, search: c } = Kl(e, { relative: n }),
    d = u;
  return (
    a !== "/" && (d = u === "/" ? a : ia([a, u])),
    i.createHref({ pathname: d, search: c, hash: o })
  );
}
function lo() {
  return v.useContext(Rf) != null;
}
function jr() {
  return (
    Lt(
      lo(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    v.useContext(Rf).location
  );
}
var rS =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function aS(e) {
  v.useContext(ur).static || v.useLayoutEffect(e);
}
function Vp() {
  let { isDataRoute: e } = v.useContext(cr);
  return e ? AC() : hC();
}
function hC() {
  Lt(
    lo(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = v.useContext(oo),
    { basename: n, navigator: a } = v.useContext(ur),
    { matches: i } = v.useContext(cr),
    { pathname: o } = jr(),
    u = JSON.stringify(Up(i)),
    c = v.useRef(!1);
  return (
    aS(() => {
      c.current = !0;
    }),
    v.useCallback(
      (p, m = {}) => {
        if ((Xn(c.current, rS), !c.current)) return;
        if (typeof p == "number") {
          a.go(p);
          return;
        }
        let g = Pp(p, JSON.parse(u), o, m.relative === "path");
        e == null &&
          n !== "/" &&
          (g.pathname = g.pathname === "/" ? n : ia([n, g.pathname])),
          (m.replace ? a.replace : a.push)(g, m.state, m);
      },
      [n, a, u, o, e]
    )
  );
}
var mC = v.createContext(null);
function pC(e) {
  let n = v.useContext(cr).outlet;
  return n && v.createElement(mC.Provider, { value: e }, n);
}
function Kl(e, { relative: n } = {}) {
  let { matches: a } = v.useContext(cr),
    { pathname: i } = jr(),
    o = JSON.stringify(Up(a));
  return v.useMemo(() => Pp(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function gC(e, n) {
  return iS(e);
}
function iS(e, n, a, i) {
  Lt(
    lo(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: u } = v.useContext(ur),
    { matches: c } = v.useContext(cr),
    d = c[c.length - 1],
    p = d ? d.params : {},
    m = d ? d.pathname : "/",
    g = d ? d.pathnameBase : "/",
    y = d && d.route;
  {
    let C = (y && y.path) || "";
    sS(
      m,
      !y || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${
        C === "/" ? "*" : `${C}/*`
      }">.`
    );
  }
  let x = jr(),
    R;
  R = x;
  let E = R.pathname || "/",
    _ = E;
  if (g !== "/") {
    let C = g.replace(/^\//, "").split("/");
    _ = "/" + E.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let w =
    !u && a && a.matches && a.matches.length > 0
      ? a.matches
      : Ww(e, { pathname: _ });
  return (
    Xn(
      y || w != null,
      `No routes matched location "${R.pathname}${R.search}${R.hash}" `
    ),
    Xn(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    wC(
      w &&
        w.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, p, C.params),
            pathname: ia([
              g,
              o.encodeLocation
                ? o.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? g
                : ia([
                    g,
                    o.encodeLocation
                      ? o.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      c,
      a,
      i
    )
  );
}
function yC() {
  let e = RC(),
    n = lC(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    i = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: i },
    u = { padding: "2px 4px", backgroundColor: i },
    c = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (c = v.createElement(
      v.Fragment,
      null,
      v.createElement("p", null, "💿 Hey developer 👋"),
      v.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        v.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        v.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement("h2", null, "Unexpected Application Error!"),
      v.createElement("h3", { style: { fontStyle: "italic" } }, n),
      a ? v.createElement("pre", { style: o }, a) : null,
      c
    )
  );
}
var vC = v.createElement(yC, null),
  bC = class extends v.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, n) {
      return n.location !== e.location ||
        (n.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation,
          };
    }
    componentDidCatch(e, n) {
      console.error(
        "React Router caught the following error during render",
        e,
        n
      );
    }
    render() {
      return this.state.error !== void 0
        ? v.createElement(
            cr.Provider,
            { value: this.props.routeContext },
            v.createElement(Bp.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function xC({ routeContext: e, match: n, children: a }) {
  let i = v.useContext(oo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(cr.Provider, { value: e }, a)
  );
}
function wC(e, n = [], a = null, i = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (n.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else return null;
  }
  let o = e,
    u = a == null ? void 0 : a.errors;
  if (u != null) {
    let p = o.findIndex(
      (m) => m.route.id && (u == null ? void 0 : u[m.route.id]) !== void 0
    );
    Lt(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, p + 1)));
  }
  let c = !1,
    d = -1;
  if (a)
    for (let p = 0; p < o.length; p++) {
      let m = o[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = p),
        m.route.id)
      ) {
        let { loaderData: g, errors: y } = a,
          x =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!y || y[m.route.id] === void 0);
        if (m.route.lazy || x) {
          (c = !0), d >= 0 ? (o = o.slice(0, d + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((p, m, g) => {
    let y,
      x = !1,
      R = null,
      E = null;
    a &&
      ((y = u && m.route.id ? u[m.route.id] : void 0),
      (R = m.route.errorElement || vC),
      c &&
        (d < 0 && g === 0
          ? (sS(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (x = !0),
            (E = null))
          : d === g &&
            ((x = !0), (E = m.route.hydrateFallbackElement || null))));
    let _ = n.concat(o.slice(0, g + 1)),
      w = () => {
        let A;
        return (
          y
            ? (A = R)
            : x
            ? (A = E)
            : m.route.Component
            ? (A = v.createElement(m.route.Component, null))
            : m.route.element
            ? (A = m.route.element)
            : (A = p),
          v.createElement(xC, {
            match: m,
            routeContext: { outlet: p, matches: _, isDataRoute: a != null },
            children: A,
          })
        );
      };
    return a && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? v.createElement(bC, {
          location: a.location,
          revalidation: a.revalidation,
          component: R,
          error: y,
          children: w(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
        })
      : w();
  }, null);
}
function Hp(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function SC(e) {
  let n = v.useContext(oo);
  return Lt(n, Hp(e)), n;
}
function _C(e) {
  let n = v.useContext(Tf);
  return Lt(n, Hp(e)), n;
}
function EC(e) {
  let n = v.useContext(cr);
  return Lt(n, Hp(e)), n;
}
function Fp(e) {
  let n = EC(e),
    a = n.matches[n.matches.length - 1];
  return (
    Lt(
      a.route.id,
      `${e} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function TC() {
  return Fp("useRouteId");
}
function RC() {
  var i;
  let e = v.useContext(Bp),
    n = _C("useRouteError"),
    a = Fp("useRouteError");
  return e !== void 0 ? e : (i = n.errors) == null ? void 0 : i[a];
}
function AC() {
  let { router: e } = SC("useNavigate"),
    n = Fp("useNavigate"),
    a = v.useRef(!1);
  return (
    aS(() => {
      a.current = !0;
    }),
    v.useCallback(
      async (o, u = {}) => {
        Xn(a.current, rS),
          a.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : await e.navigate(o, { fromRouteId: n, ...u }));
      },
      [e, n]
    )
  );
}
var q0 = {};
function sS(e, n, a) {
  !n && !q0[e] && ((q0[e] = !0), Xn(!1, a));
}
v.memo(CC);
function CC({ routes: e, future: n, state: a }) {
  return iS(e, void 0, a, n);
}
function Hs({ to: e, replace: n, state: a, relative: i }) {
  Lt(
    lo(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = v.useContext(ur);
  Xn(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = v.useContext(cr),
    { pathname: c } = jr(),
    d = Vp(),
    p = Pp(e, Up(u), c, i === "path"),
    m = JSON.stringify(p);
  return (
    v.useEffect(() => {
      d(JSON.parse(m), { replace: n, state: a, relative: i });
    }, [d, m, i, n, a]),
    null
  );
}
function OC(e) {
  return pC(e.context);
}
function MC({
  basename: e = "/",
  children: n = null,
  location: a,
  navigationType: i = "POP",
  navigator: o,
  static: u = !1,
}) {
  Lt(
    !lo(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"),
    d = v.useMemo(
      () => ({ basename: c, navigator: o, static: u, future: {} }),
      [c, o, u]
    );
  typeof a == "string" && (a = Zl(a));
  let {
      pathname: p = "/",
      search: m = "",
      hash: g = "",
      state: y = null,
      key: x = "default",
    } = a,
    R = v.useMemo(() => {
      let E = ua(p, c);
      return E == null
        ? null
        : {
            location: { pathname: E, search: m, hash: g, state: y, key: x },
            navigationType: i,
          };
    }, [c, p, m, g, y, x, i]);
  return (
    Xn(
      R != null,
      `<Router basename="${c}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    R == null
      ? null
      : v.createElement(
          ur.Provider,
          { value: d },
          v.createElement(Rf.Provider, { children: n, value: R })
        )
  );
}
var Pc = "get",
  Bc = "application/x-www-form-urlencoded";
function Af(e) {
  return e != null && typeof e.tagName == "string";
}
function NC(e) {
  return Af(e) && e.tagName.toLowerCase() === "button";
}
function DC(e) {
  return Af(e) && e.tagName.toLowerCase() === "form";
}
function kC(e) {
  return Af(e) && e.tagName.toLowerCase() === "input";
}
function jC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function LC(e, n) {
  return e.button === 0 && (!n || n === "_self") && !jC(e);
}
function Wm(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((n, a) => {
          let i = e[a];
          return n.concat(Array.isArray(i) ? i.map((o) => [a, o]) : [[a, i]]);
        }, [])
  );
}
function zC(e, n) {
  let a = Wm(e);
  return (
    n &&
      n.forEach((i, o) => {
        a.has(o) ||
          n.getAll(o).forEach((u) => {
            a.append(o, u);
          });
      }),
    a
  );
}
var Ec = null;
function UC() {
  if (Ec === null)
    try {
      new FormData(document.createElement("form"), 0), (Ec = !1);
    } catch {
      Ec = !0;
    }
  return Ec;
}
var PC = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function xm(e) {
  return e != null && !PC.has(e)
    ? (Xn(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bc}"`
      ),
      null)
    : e;
}
function BC(e, n) {
  let a, i, o, u, c;
  if (DC(e)) {
    let d = e.getAttribute("action");
    (i = d ? ua(d, n) : null),
      (a = e.getAttribute("method") || Pc),
      (o = xm(e.getAttribute("enctype")) || Bc),
      (u = new FormData(e));
  } else if (NC(e) || (kC(e) && (e.type === "submit" || e.type === "image"))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = e.getAttribute("formaction") || d.getAttribute("action");
    if (
      ((i = p ? ua(p, n) : null),
      (a = e.getAttribute("formmethod") || d.getAttribute("method") || Pc),
      (o =
        xm(e.getAttribute("formenctype")) ||
        xm(d.getAttribute("enctype")) ||
        Bc),
      (u = new FormData(d, e)),
      !UC())
    ) {
      let { name: m, type: g, value: y } = e;
      if (g === "image") {
        let x = m ? `${m}.` : "";
        u.append(`${x}x`, "0"), u.append(`${x}y`, "0");
      } else m && u.append(m, y);
    }
  } else {
    if (Af(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Pc), (i = null), (o = Bc), (c = e);
  }
  return (
    u && o === "text/plain" && ((c = u), (u = void 0)),
    { action: i, method: a.toLowerCase(), encType: o, formData: u, body: c }
  );
}
function qp(e, n) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(n);
}
async function VC(e, n) {
  if (e.id in n) return n[e.id];
  try {
    let a = await import(e.module);
    return (n[e.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function HC(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      typeof e.imageSrcSet == "string" &&
      typeof e.imageSizes == "string"
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function FC(e, n, a) {
  let i = await Promise.all(
    e.map(async (o) => {
      let u = n.routes[o.route.id];
      if (u) {
        let c = await VC(u, a);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return GC(
    i
      .flat(1)
      .filter(HC)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function I0(e, n, a, i, o, u) {
  let c = (p, m) => (a[m] ? p.route.id !== a[m].route.id : !0),
    d = (p, m) => {
      var g;
      return (
        a[m].pathname !== p.pathname ||
        (((g = a[m].route.path) == null ? void 0 : g.endsWith("*")) &&
          a[m].params["*"] !== p.params["*"])
      );
    };
  return u === "assets"
    ? n.filter((p, m) => c(p, m) || d(p, m))
    : u === "data"
    ? n.filter((p, m) => {
        var y;
        let g = i.routes[p.route.id];
        if (!g || !g.hasLoader) return !1;
        if (c(p, m) || d(p, m)) return !0;
        if (p.route.shouldRevalidate) {
          let x = p.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: ((y = a[0]) == null ? void 0 : y.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof x == "boolean") return x;
        }
        return !0;
      })
    : [];
}
function qC(e, n, { includeHydrateFallback: a } = {}) {
  return IC(
    e
      .map((i) => {
        let o = n.routes[i.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          a &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1)
  );
}
function IC(e) {
  return [...new Set(e)];
}
function $C(e) {
  let n = {},
    a = Object.keys(e).sort();
  for (let i of a) n[i] = e[i];
  return n;
}
function GC(e, n) {
  let a = new Set();
  return (
    new Set(n),
    e.reduce((i, o) => {
      let u = JSON.stringify($C(o));
      return a.has(u) || (a.add(u), i.push({ key: u, link: o })), i;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var YC = new Set([100, 101, 204, 205]);
function ZC(e, n) {
  let a =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : e;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : n && ua(a.pathname, n) === "/"
      ? (a.pathname = `${n.replace(/\/$/, "")}/_root.data`)
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function oS() {
  let e = v.useContext(oo);
  return (
    qp(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function KC() {
  let e = v.useContext(Tf);
  return (
    qp(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var Ip = v.createContext(void 0);
Ip.displayName = "FrameworkContext";
function lS() {
  let e = v.useContext(Ip);
  return (
    qp(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function XC(e, n) {
  let a = v.useContext(Ip),
    [i, o] = v.useState(!1),
    [u, c] = v.useState(!1),
    {
      onFocus: d,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: y,
    } = n,
    x = v.useRef(null);
  v.useEffect(() => {
    if ((e === "render" && c(!0), e === "viewport")) {
      let _ = (A) => {
          A.forEach((C) => {
            c(C.isIntersecting);
          });
        },
        w = new IntersectionObserver(_, { threshold: 0.5 });
      return (
        x.current && w.observe(x.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]),
    v.useEffect(() => {
      if (i) {
        let _ = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(_);
        };
      }
    }, [i]);
  let R = () => {
      o(!0);
    },
    E = () => {
      o(!1), c(!1);
    };
  return a
    ? e !== "intent"
      ? [u, x, {}]
      : [
          u,
          x,
          {
            onFocus: pl(d, R),
            onBlur: pl(p, E),
            onMouseEnter: pl(m, R),
            onMouseLeave: pl(g, E),
            onTouchStart: pl(y, R),
          },
        ]
    : [!1, x, {}];
}
function pl(e, n) {
  return (a) => {
    e && e(a), a.defaultPrevented || n(a);
  };
}
function QC({ page: e, ...n }) {
  let { router: a } = oS(),
    i = v.useMemo(() => Ww(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return i ? v.createElement(JC, { page: e, matches: i, ...n }) : null;
}
function WC(e) {
  let { manifest: n, routeModules: a } = lS(),
    [i, o] = v.useState([]);
  return (
    v.useEffect(() => {
      let u = !1;
      return (
        FC(e, n, a).then((c) => {
          u || o(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [e, n, a]),
    i
  );
}
function JC({ page: e, matches: n, ...a }) {
  let i = jr(),
    { manifest: o, routeModules: u } = lS(),
    { basename: c } = oS(),
    { loaderData: d, matches: p } = KC(),
    m = v.useMemo(() => I0(e, n, p, o, i, "data"), [e, n, p, o, i]),
    g = v.useMemo(() => I0(e, n, p, o, i, "assets"), [e, n, p, o, i]),
    y = v.useMemo(() => {
      if (e === i.pathname + i.search + i.hash) return [];
      let E = new Set(),
        _ = !1;
      if (
        (n.forEach((A) => {
          var N;
          let C = o.routes[A.route.id];
          !C ||
            !C.hasLoader ||
            ((!m.some((k) => k.route.id === A.route.id) &&
              A.route.id in d &&
              (N = u[A.route.id]) != null &&
              N.shouldRevalidate) ||
            C.hasClientLoader
              ? (_ = !0)
              : E.add(A.route.id));
        }),
        E.size === 0)
      )
        return [];
      let w = ZC(e, c);
      return (
        _ &&
          E.size > 0 &&
          w.searchParams.set(
            "_routes",
            n
              .filter((A) => E.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [c, d, i, o, m, n, e, u]),
    x = v.useMemo(() => qC(g, o), [g, o]),
    R = WC(g);
  return v.createElement(
    v.Fragment,
    null,
    y.map((E) =>
      v.createElement("link", {
        key: E,
        rel: "prefetch",
        as: "fetch",
        href: E,
        ...a,
      })
    ),
    x.map((E) =>
      v.createElement("link", { key: E, rel: "modulepreload", href: E, ...a })
    ),
    R.map(({ key: E, link: _ }) => v.createElement("link", { key: E, ..._ }))
  );
}
function eO(...e) {
  return (n) => {
    e.forEach((a) => {
      typeof a == "function" ? a(n) : a != null && (a.current = n);
    });
  };
}
var uS =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  uS && (window.__reactRouterVersion = "7.6.0");
} catch {}
function tO({ basename: e, children: n, window: a }) {
  let i = v.useRef();
  i.current == null && (i.current = BA({ window: a, v5Compat: !0 }));
  let o = i.current,
    [u, c] = v.useState({ action: o.action, location: o.location }),
    d = v.useCallback(
      (p) => {
        v.startTransition(() => c(p));
      },
      [c]
    );
  return (
    v.useLayoutEffect(() => o.listen(d), [o, d]),
    v.createElement(MC, {
      basename: e,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
var cS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cf = v.forwardRef(function (
    {
      onClick: n,
      discover: a = "render",
      prefetch: i = "none",
      relative: o,
      reloadDocument: u,
      replace: c,
      state: d,
      target: p,
      to: m,
      preventScrollReset: g,
      viewTransition: y,
      ...x
    },
    R
  ) {
    let { basename: E } = v.useContext(ur),
      _ = typeof m == "string" && cS.test(m),
      w,
      A = !1;
    if (typeof m == "string" && _ && ((w = m), uS))
      try {
        let J = new URL(window.location.href),
          ye = m.startsWith("//") ? new URL(J.protocol + m) : new URL(m),
          be = ua(ye.pathname, E);
        ye.origin === J.origin && be != null
          ? (m = be + ye.search + ye.hash)
          : (A = !0);
      } catch {
        Xn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = dC(m, { relative: o }),
      [N, k, D] = XC(i, x),
      I = iO(m, {
        replace: c,
        state: d,
        target: p,
        preventScrollReset: g,
        relative: o,
        viewTransition: y,
      });
    function Y(J) {
      n && n(J), J.defaultPrevented || I(J);
    }
    let G = v.createElement("a", {
      ...x,
      ...D,
      href: w || C,
      onClick: A || u ? n : Y,
      ref: eO(R, k),
      target: p,
      "data-discover": !_ && a === "render" ? "true" : void 0,
    });
    return N && !_
      ? v.createElement(v.Fragment, null, G, v.createElement(QC, { page: C }))
      : G;
  });
Cf.displayName = "Link";
var nO = v.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: o = !1,
    style: u,
    to: c,
    viewTransition: d,
    children: p,
    ...m
  },
  g
) {
  let y = Kl(c, { relative: m.relative }),
    x = jr(),
    R = v.useContext(Tf),
    { navigator: E, basename: _ } = v.useContext(ur),
    w = R != null && cO(y) && d === !0,
    A = E.encodeLocation ? E.encodeLocation(y).pathname : y.pathname,
    C = x.pathname,
    N =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  a ||
    ((C = C.toLowerCase()),
    (N = N ? N.toLowerCase() : null),
    (A = A.toLowerCase())),
    N && _ && (N = ua(N, _) || N);
  const k = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
  let D = C === A || (!o && C.startsWith(A) && C.charAt(k) === "/"),
    I =
      N != null &&
      (N === A || (!o && N.startsWith(A) && N.charAt(A.length) === "/")),
    Y = { isActive: D, isPending: I, isTransitioning: w },
    G = D ? n : void 0,
    J;
  typeof i == "function"
    ? (J = i(Y))
    : (J = [
        i,
        D ? "active" : null,
        I ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ye = typeof u == "function" ? u(Y) : u;
  return v.createElement(
    Cf,
    {
      ...m,
      "aria-current": G,
      className: J,
      ref: g,
      style: ye,
      to: c,
      viewTransition: d,
    },
    typeof p == "function" ? p(Y) : p
  );
});
nO.displayName = "NavLink";
var rO = v.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: n,
      navigate: a,
      reloadDocument: i,
      replace: o,
      state: u,
      method: c = Pc,
      action: d,
      onSubmit: p,
      relative: m,
      preventScrollReset: g,
      viewTransition: y,
      ...x
    },
    R
  ) => {
    let E = lO(),
      _ = uO(d, { relative: m }),
      w = c.toLowerCase() === "get" ? "get" : "post",
      A = typeof d == "string" && cS.test(d),
      C = (N) => {
        if ((p && p(N), N.defaultPrevented)) return;
        N.preventDefault();
        let k = N.nativeEvent.submitter,
          D = (k == null ? void 0 : k.getAttribute("formmethod")) || c;
        E(k || N.currentTarget, {
          fetcherKey: n,
          method: D,
          navigate: a,
          replace: o,
          state: u,
          relative: m,
          preventScrollReset: g,
          viewTransition: y,
        });
      };
    return v.createElement("form", {
      ref: R,
      method: w,
      action: _,
      onSubmit: i ? p : C,
      ...x,
      "data-discover": !A && e === "render" ? "true" : void 0,
    });
  }
);
rO.displayName = "Form";
function aO(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fS(e) {
  let n = v.useContext(oo);
  return Lt(n, aO(e)), n;
}
function iO(
  e,
  {
    target: n,
    replace: a,
    state: i,
    preventScrollReset: o,
    relative: u,
    viewTransition: c,
  } = {}
) {
  let d = Vp(),
    p = jr(),
    m = Kl(e, { relative: u });
  return v.useCallback(
    (g) => {
      if (LC(g, n)) {
        g.preventDefault();
        let y = a !== void 0 ? a : kl(p) === kl(m);
        d(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [p, d, m, a, i, n, e, o, u, c]
  );
}
function LP(e) {
  Xn(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let n = v.useRef(Wm(e)),
    a = v.useRef(!1),
    i = jr(),
    o = v.useMemo(() => zC(i.search, a.current ? null : n.current), [i.search]),
    u = Vp(),
    c = v.useCallback(
      (d, p) => {
        const m = Wm(typeof d == "function" ? d(o) : d);
        (a.current = !0), u("?" + m, p);
      },
      [u, o]
    );
  return [o, c];
}
var sO = 0,
  oO = () => `__${String(++sO)}__`;
function lO() {
  let { router: e } = fS("useSubmit"),
    { basename: n } = v.useContext(ur),
    a = TC();
  return v.useCallback(
    async (i, o = {}) => {
      let { action: u, method: c, encType: d, formData: p, body: m } = BC(i, n);
      if (o.navigate === !1) {
        let g = o.fetcherKey || oO();
        await e.fetch(g, a, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: p,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || d,
          flushSync: o.flushSync,
        });
      } else
        await e.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: p,
          body: m,
          formMethod: o.method || c,
          formEncType: o.encType || d,
          replace: o.replace,
          state: o.state,
          fromRouteId: a,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [e, n, a]
  );
}
function uO(e, { relative: n } = {}) {
  let { basename: a } = v.useContext(ur),
    i = v.useContext(cr);
  Lt(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1),
    u = { ...Kl(e || ".", { relative: n }) },
    c = jr();
  if (e == null) {
    u.search = c.search;
    let d = new URLSearchParams(u.search),
      p = d.getAll("index");
    if (p.some((g) => g === "")) {
      d.delete("index"),
        p.filter((y) => y).forEach((y) => d.append("index", y));
      let g = d.toString();
      u.search = g ? `?${g}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : ia([a, u.pathname])),
    kl(u)
  );
}
function cO(e, n = {}) {
  let a = v.useContext(nS);
  Lt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = fS("useViewTransitionState"),
    o = Kl(e, { relative: n.relative });
  if (!a.isTransitioning) return !1;
  let u = ua(a.currentLocation.pathname, i) || a.currentLocation.pathname,
    c = ua(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return Xc(o.pathname, c) != null || Xc(o.pathname, u) != null;
}
[...YC];
var Of = Qw();
const dS = Kw(Of),
  fO = { theme: "system", setTheme: () => null },
  hS = v.createContext(fO);
function dO({
  children: e,
  defaultTheme: n = "system",
  storageKey: a = "vite-ui-theme",
  ...i
}) {
  const [o, u] = v.useState(() => localStorage.getItem(a) || n);
  v.useEffect(() => {
    const d = window.document.documentElement;
    if ((d.classList.remove("light", "dark"), o === "system")) {
      const p = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      d.classList.add(p);
      return;
    }
    d.classList.add(o);
  }, [o]);
  const c = {
    theme: o,
    setTheme: (d) => {
      localStorage.setItem(a, d), u(d);
    },
  };
  return S.jsx(hS.Provider, { ...i, value: c, children: e });
}
const mS = () => {
  const e = v.useContext(hS);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
var Xl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Mf = typeof window > "u" || "Deno" in globalThis;
function Zn() {}
function hO(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function mO(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function pO(e, n) {
  return Math.max(e + (n || 0) - Date.now(), 0);
}
function $0(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function gO(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function G0(e, n) {
  const {
    type: a = "all",
    exact: i,
    fetchStatus: o,
    predicate: u,
    queryKey: c,
    stale: d,
  } = e;
  if (c) {
    if (i) {
      if (n.queryHash !== $p(c, n.options)) return !1;
    } else if (!jl(n.queryKey, c)) return !1;
  }
  if (a !== "all") {
    const p = n.isActive();
    if ((a === "active" && !p) || (a === "inactive" && p)) return !1;
  }
  return !(
    (typeof d == "boolean" && n.isStale() !== d) ||
    (o && o !== n.state.fetchStatus) ||
    (u && !u(n))
  );
}
function Y0(e, n) {
  const { exact: a, status: i, predicate: o, mutationKey: u } = e;
  if (u) {
    if (!n.options.mutationKey) return !1;
    if (a) {
      if (Bi(n.options.mutationKey) !== Bi(u)) return !1;
    } else if (!jl(n.options.mutationKey, u)) return !1;
  }
  return !((i && n.state.status !== i) || (o && !o(n)));
}
function $p(e, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || Bi)(e);
}
function Bi(e) {
  return JSON.stringify(e, (n, a) =>
    Jm(a)
      ? Object.keys(a)
          .sort()
          .reduce((i, o) => ((i[o] = a[o]), i), {})
      : a
  );
}
function jl(e, n) {
  return e === n
    ? !0
    : typeof e != typeof n
    ? !1
    : e && n && typeof e == "object" && typeof n == "object"
    ? Object.keys(n).every((a) => jl(e[a], n[a]))
    : !1;
}
function pS(e, n) {
  if (e === n) return e;
  const a = Z0(e) && Z0(n);
  if (a || (Jm(e) && Jm(n))) {
    const i = a ? e : Object.keys(e),
      o = i.length,
      u = a ? n : Object.keys(n),
      c = u.length,
      d = a ? [] : {};
    let p = 0;
    for (let m = 0; m < c; m++) {
      const g = a ? m : u[m];
      ((!a && i.includes(g)) || a) && e[g] === void 0 && n[g] === void 0
        ? ((d[g] = void 0), p++)
        : ((d[g] = pS(e[g], n[g])), d[g] === e[g] && e[g] !== void 0 && p++);
    }
    return o === c && p === o ? e : d;
  }
  return n;
}
function yO(e, n) {
  if (!n || Object.keys(e).length !== Object.keys(n).length) return !1;
  for (const a in e) if (e[a] !== n[a]) return !1;
  return !0;
}
function Z0(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Jm(e) {
  if (!K0(e)) return !1;
  const n = e.constructor;
  if (n === void 0) return !0;
  const a = n.prototype;
  return !(
    !K0(a) ||
    !a.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function K0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vO(e) {
  return new Promise((n) => {
    setTimeout(n, e);
  });
}
function bO(e, n, a) {
  return typeof a.structuralSharing == "function"
    ? a.structuralSharing(e, n)
    : a.structuralSharing !== !1
    ? pS(e, n)
    : n;
}
function xO(e, n, a = 0) {
  const i = [...e, n];
  return a && i.length > a ? i.slice(1) : i;
}
function wO(e, n, a = 0) {
  const i = [n, ...e];
  return a && i.length > a ? i.slice(0, -1) : i;
}
var Gp = Symbol();
function gS(e, n) {
  return !e.queryFn && n != null && n.initialPromise
    ? () => n.initialPromise
    : !e.queryFn || e.queryFn === Gp
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
function SO(e, n) {
  return typeof e == "function" ? e(...n) : !!e;
}
var Di,
  Ga,
  Is,
  Vw,
  _O =
    ((Vw = class extends Xl {
      constructor() {
        super();
        Ke(this, Di);
        Ke(this, Ga);
        Ke(this, Is);
        ke(this, Is, (n) => {
          if (!Mf && window.addEventListener) {
            const a = () => n();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
      }
      onSubscribe() {
        Z(this, Ga) || this.setEventListener(Z(this, Is));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = Z(this, Ga)) == null || n.call(this), ke(this, Ga, void 0));
      }
      setEventListener(n) {
        var a;
        ke(this, Is, n),
          (a = Z(this, Ga)) == null || a.call(this),
          ke(
            this,
            Ga,
            n((i) => {
              typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            })
          );
      }
      setFocused(n) {
        Z(this, Di) !== n && (ke(this, Di, n), this.onFocus());
      }
      onFocus() {
        const n = this.isFocused();
        this.listeners.forEach((a) => {
          a(n);
        });
      }
      isFocused() {
        var n;
        return typeof Z(this, Di) == "boolean"
          ? Z(this, Di)
          : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !==
              "hidden";
      }
    }),
    (Di = new WeakMap()),
    (Ga = new WeakMap()),
    (Is = new WeakMap()),
    Vw),
  yS = new _O(),
  $s,
  Ya,
  Gs,
  Hw,
  EO =
    ((Hw = class extends Xl {
      constructor() {
        super();
        Ke(this, $s, !0);
        Ke(this, Ya);
        Ke(this, Gs);
        ke(this, Gs, (n) => {
          if (!Mf && window.addEventListener) {
            const a = () => n(!0),
              i = () => n(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
      }
      onSubscribe() {
        Z(this, Ya) || this.setEventListener(Z(this, Gs));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = Z(this, Ya)) == null || n.call(this), ke(this, Ya, void 0));
      }
      setEventListener(n) {
        var a;
        ke(this, Gs, n),
          (a = Z(this, Ya)) == null || a.call(this),
          ke(this, Ya, n(this.setOnline.bind(this)));
      }
      setOnline(n) {
        Z(this, $s) !== n &&
          (ke(this, $s, n),
          this.listeners.forEach((i) => {
            i(n);
          }));
      }
      isOnline() {
        return Z(this, $s);
      }
    }),
    ($s = new WeakMap()),
    (Ya = new WeakMap()),
    (Gs = new WeakMap()),
    Hw),
  Qc = new EO();
function TO() {
  let e, n;
  const a = new Promise((o, u) => {
    (e = o), (n = u);
  });
  (a.status = "pending"), a.catch(() => {});
  function i(o) {
    Object.assign(a, o), delete a.resolve, delete a.reject;
  }
  return (
    (a.resolve = (o) => {
      i({ status: "fulfilled", value: o }), e(o);
    }),
    (a.reject = (o) => {
      i({ status: "rejected", reason: o }), n(o);
    }),
    a
  );
}
function RO(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function vS(e) {
  return (e ?? "online") === "online" ? Qc.isOnline() : !0;
}
var bS = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function wm(e) {
  return e instanceof bS;
}
function xS(e) {
  let n = !1,
    a = 0,
    i = !1,
    o;
  const u = TO(),
    c = (_) => {
      var w;
      i || (x(new bS(_)), (w = e.abort) == null || w.call(e));
    },
    d = () => {
      n = !0;
    },
    p = () => {
      n = !1;
    },
    m = () =>
      yS.isFocused() &&
      (e.networkMode === "always" || Qc.isOnline()) &&
      e.canRun(),
    g = () => vS(e.networkMode) && e.canRun(),
    y = (_) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onSuccess) == null || w.call(e, _),
        o == null || o(),
        u.resolve(_));
    },
    x = (_) => {
      var w;
      i ||
        ((i = !0),
        (w = e.onError) == null || w.call(e, _),
        o == null || o(),
        u.reject(_));
    },
    R = () =>
      new Promise((_) => {
        var w;
        (o = (A) => {
          (i || m()) && _(A);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var _;
        (o = void 0), i || (_ = e.onContinue) == null || _.call(e);
      }),
    E = () => {
      if (i) return;
      let _;
      const w = a === 0 ? e.initialPromise : void 0;
      try {
        _ = w ?? e.fn();
      } catch (A) {
        _ = Promise.reject(A);
      }
      Promise.resolve(_)
        .then(y)
        .catch((A) => {
          var I;
          if (i) return;
          const C = e.retry ?? (Mf ? 0 : 3),
            N = e.retryDelay ?? RO,
            k = typeof N == "function" ? N(a, A) : N,
            D =
              C === !0 ||
              (typeof C == "number" && a < C) ||
              (typeof C == "function" && C(a, A));
          if (n || !D) {
            x(A);
            return;
          }
          a++,
            (I = e.onFail) == null || I.call(e, a, A),
            vO(k)
              .then(() => (m() ? void 0 : R()))
              .then(() => {
                n ? x(A) : E();
              });
        });
    };
  return {
    promise: u,
    cancel: c,
    continue: () => (o == null || o(), u),
    cancelRetry: d,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? E() : R().then(E), u),
  };
}
var AO = (e) => setTimeout(e, 0);
function CO() {
  let e = [],
    n = 0,
    a = (d) => {
      d();
    },
    i = (d) => {
      d();
    },
    o = AO;
  const u = (d) => {
      n
        ? e.push(d)
        : o(() => {
            a(d);
          });
    },
    c = () => {
      const d = e;
      (e = []),
        d.length &&
          o(() => {
            i(() => {
              d.forEach((p) => {
                a(p);
              });
            });
          });
    };
  return {
    batch: (d) => {
      let p;
      n++;
      try {
        p = d();
      } finally {
        n--, n || c();
      }
      return p;
    },
    batchCalls:
      (d) =>
      (...p) => {
        u(() => {
          d(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (d) => {
      a = d;
    },
    setBatchNotifyFunction: (d) => {
      i = d;
    },
    setScheduler: (d) => {
      o = d;
    },
  };
}
var Jt = CO(),
  ki,
  Fw,
  wS =
    ((Fw = class {
      constructor() {
        Ke(this, ki);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          mO(this.gcTime) &&
            ke(
              this,
              ki,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Mf ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        Z(this, ki) && (clearTimeout(Z(this, ki)), ke(this, ki, void 0));
      }
    }),
    (ki = new WeakMap()),
    Fw),
  Ys,
  Zs,
  Yn,
  ji,
  nn,
  Gl,
  Li,
  nr,
  ta,
  qw,
  OO =
    ((qw = class extends wS {
      constructor(n) {
        super();
        Ke(this, nr);
        Ke(this, Ys);
        Ke(this, Zs);
        Ke(this, Yn);
        Ke(this, ji);
        Ke(this, nn);
        Ke(this, Gl);
        Ke(this, Li);
        ke(this, Li, !1),
          ke(this, Gl, n.defaultOptions),
          this.setOptions(n.options),
          (this.observers = []),
          ke(this, ji, n.client),
          ke(this, Yn, Z(this, ji).getQueryCache()),
          (this.queryKey = n.queryKey),
          (this.queryHash = n.queryHash),
          ke(this, Ys, NO(this.options)),
          (this.state = n.state ?? Z(this, Ys)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var n;
        return (n = Z(this, nn)) == null ? void 0 : n.promise;
      }
      setOptions(n) {
        (this.options = { ...Z(this, Gl), ...n }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          Z(this, Yn).remove(this);
      }
      setData(n, a) {
        const i = bO(this.state.data, n, this.options);
        return (
          Et(this, nr, ta).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: a == null ? void 0 : a.updatedAt,
            manual: a == null ? void 0 : a.manual,
          }),
          i
        );
      }
      setState(n, a) {
        Et(this, nr, ta).call(this, {
          type: "setState",
          state: n,
          setStateOptions: a,
        });
      }
      cancel(n) {
        var i, o;
        const a = (i = Z(this, nn)) == null ? void 0 : i.promise;
        return (
          (o = Z(this, nn)) == null || o.cancel(n),
          a ? a.then(Zn).catch(Zn) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(Z(this, Ys));
      }
      isActive() {
        return this.observers.some((n) => gO(n.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Gp ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((n) => n.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(n = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !pO(this.state.dataUpdatedAt, n)
        );
      }
      onFocus() {
        var a;
        const n = this.observers.find((i) => i.shouldFetchOnWindowFocus());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (a = Z(this, nn)) == null || a.continue();
      }
      onOnline() {
        var a;
        const n = this.observers.find((i) => i.shouldFetchOnReconnect());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (a = Z(this, nn)) == null || a.continue();
      }
      addObserver(n) {
        this.observers.includes(n) ||
          (this.observers.push(n),
          this.clearGcTimeout(),
          Z(this, Yn).notify({
            type: "observerAdded",
            query: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        this.observers.includes(n) &&
          ((this.observers = this.observers.filter((a) => a !== n)),
          this.observers.length ||
            (Z(this, nn) &&
              (Z(this, Li)
                ? Z(this, nn).cancel({ revert: !0 })
                : Z(this, nn).cancelRetry()),
            this.scheduleGc()),
          Z(this, Yn).notify({
            type: "observerRemoved",
            query: this,
            observer: n,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Et(this, nr, ta).call(this, { type: "invalidate" });
      }
      fetch(n, a) {
        var p, m, g;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && a != null && a.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (Z(this, nn))
            return Z(this, nn).continueRetry(), Z(this, nn).promise;
        }
        if ((n && this.setOptions(n), !this.options.queryFn)) {
          const y = this.observers.find((x) => x.options.queryFn);
          y && this.setOptions(y.options);
        }
        const i = new AbortController(),
          o = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (ke(this, Li, !0), i.signal),
            });
          },
          u = () => {
            const y = gS(this.options, a),
              x = {
                client: Z(this, ji),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(x),
              ke(this, Li, !1),
              this.options.persister ? this.options.persister(y, x, this) : y(x)
            );
          },
          c = {
            fetchOptions: a,
            options: this.options,
            queryKey: this.queryKey,
            client: Z(this, ji),
            state: this.state,
            fetchFn: u,
          };
        o(c),
          (p = this.options.behavior) == null || p.onFetch(c, this),
          ke(this, Zs, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((m = c.fetchOptions) == null ? void 0 : m.meta)) &&
            Et(this, nr, ta).call(this, {
              type: "fetch",
              meta: (g = c.fetchOptions) == null ? void 0 : g.meta,
            });
        const d = (y) => {
          var x, R, E, _;
          (wm(y) && y.silent) ||
            Et(this, nr, ta).call(this, { type: "error", error: y }),
            wm(y) ||
              ((R = (x = Z(this, Yn).config).onError) == null ||
                R.call(x, y, this),
              (_ = (E = Z(this, Yn).config).onSettled) == null ||
                _.call(E, this.state.data, y, this)),
            this.scheduleGc();
        };
        return (
          ke(
            this,
            nn,
            xS({
              initialPromise: a == null ? void 0 : a.initialPromise,
              fn: c.fetchFn,
              abort: i.abort.bind(i),
              onSuccess: (y) => {
                var x, R, E, _;
                if (y === void 0) {
                  d(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(y);
                } catch (w) {
                  d(w);
                  return;
                }
                (R = (x = Z(this, Yn).config).onSuccess) == null ||
                  R.call(x, y, this),
                  (_ = (E = Z(this, Yn).config).onSettled) == null ||
                    _.call(E, y, this.state.error, this),
                  this.scheduleGc();
              },
              onError: d,
              onFail: (y, x) => {
                Et(this, nr, ta).call(this, {
                  type: "failed",
                  failureCount: y,
                  error: x,
                });
              },
              onPause: () => {
                Et(this, nr, ta).call(this, { type: "pause" });
              },
              onContinue: () => {
                Et(this, nr, ta).call(this, { type: "continue" });
              },
              retry: c.options.retry,
              retryDelay: c.options.retryDelay,
              networkMode: c.options.networkMode,
              canRun: () => !0,
            })
          ),
          Z(this, nn).start()
        );
      }
    }),
    (Ys = new WeakMap()),
    (Zs = new WeakMap()),
    (Yn = new WeakMap()),
    (ji = new WeakMap()),
    (nn = new WeakMap()),
    (Gl = new WeakMap()),
    (Li = new WeakMap()),
    (nr = new WeakSet()),
    (ta = function (n) {
      const a = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...MO(i.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return {
              ...i,
              data: n.data,
              dataUpdateCount: i.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = n.error;
            return wm(o) && o.revert && Z(this, Zs)
              ? { ...Z(this, Zs), fetchStatus: "idle" }
              : {
                  ...i,
                  error: o,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...n.state };
        }
      };
      (this.state = a(this.state)),
        Jt.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            Z(this, Yn).notify({ query: this, type: "updated", action: n });
        });
    }),
    qw);
function MO(e, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: vS(n.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function NO(e) {
  const n =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    a = n !== void 0,
    i = a
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Rr,
  Iw,
  DO =
    ((Iw = class extends Xl {
      constructor(n = {}) {
        super();
        Ke(this, Rr);
        (this.config = n), ke(this, Rr, new Map());
      }
      build(n, a, i) {
        const o = a.queryKey,
          u = a.queryHash ?? $p(o, a);
        let c = this.get(u);
        return (
          c ||
            ((c = new OO({
              client: n,
              queryKey: o,
              queryHash: u,
              options: n.defaultQueryOptions(a),
              state: i,
              defaultOptions: n.getQueryDefaults(o),
            })),
            this.add(c)),
          c
        );
      }
      add(n) {
        Z(this, Rr).has(n.queryHash) ||
          (Z(this, Rr).set(n.queryHash, n),
          this.notify({ type: "added", query: n }));
      }
      remove(n) {
        const a = Z(this, Rr).get(n.queryHash);
        a &&
          (n.destroy(),
          a === n && Z(this, Rr).delete(n.queryHash),
          this.notify({ type: "removed", query: n }));
      }
      clear() {
        Jt.batch(() => {
          this.getAll().forEach((n) => {
            this.remove(n);
          });
        });
      }
      get(n) {
        return Z(this, Rr).get(n);
      }
      getAll() {
        return [...Z(this, Rr).values()];
      }
      find(n) {
        const a = { exact: !0, ...n };
        return this.getAll().find((i) => G0(a, i));
      }
      findAll(n = {}) {
        const a = this.getAll();
        return Object.keys(n).length > 0 ? a.filter((i) => G0(n, i)) : a;
      }
      notify(n) {
        Jt.batch(() => {
          this.listeners.forEach((a) => {
            a(n);
          });
        });
      }
      onFocus() {
        Jt.batch(() => {
          this.getAll().forEach((n) => {
            n.onFocus();
          });
        });
      }
      onOnline() {
        Jt.batch(() => {
          this.getAll().forEach((n) => {
            n.onOnline();
          });
        });
      }
    }),
    (Rr = new WeakMap()),
    Iw),
  Ar,
  on,
  zi,
  Cr,
  Fa,
  $w,
  kO =
    (($w = class extends wS {
      constructor(n) {
        super();
        Ke(this, Cr);
        Ke(this, Ar);
        Ke(this, on);
        Ke(this, zi);
        (this.mutationId = n.mutationId),
          ke(this, on, n.mutationCache),
          ke(this, Ar, []),
          (this.state = n.state || SS()),
          this.setOptions(n.options),
          this.scheduleGc();
      }
      setOptions(n) {
        (this.options = n), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(n) {
        Z(this, Ar).includes(n) ||
          (Z(this, Ar).push(n),
          this.clearGcTimeout(),
          Z(this, on).notify({
            type: "observerAdded",
            mutation: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        ke(
          this,
          Ar,
          Z(this, Ar).filter((a) => a !== n)
        ),
          this.scheduleGc(),
          Z(this, on).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n,
          });
      }
      optionalRemove() {
        Z(this, Ar).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : Z(this, on).remove(this));
      }
      continue() {
        var n;
        return (
          ((n = Z(this, zi)) == null ? void 0 : n.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(n) {
        var u, c, d, p, m, g, y, x, R, E, _, w, A, C, N, k, D, I, Y, G;
        const a = () => {
          Et(this, Cr, Fa).call(this, { type: "continue" });
        };
        ke(
          this,
          zi,
          xS({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(n)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (J, ye) => {
              Et(this, Cr, Fa).call(this, {
                type: "failed",
                failureCount: J,
                error: ye,
              });
            },
            onPause: () => {
              Et(this, Cr, Fa).call(this, { type: "pause" });
            },
            onContinue: a,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => Z(this, on).canRun(this),
          })
        );
        const i = this.state.status === "pending",
          o = !Z(this, zi).canStart();
        try {
          if (i) a();
          else {
            Et(this, Cr, Fa).call(this, {
              type: "pending",
              variables: n,
              isPaused: o,
            }),
              await ((c = (u = Z(this, on).config).onMutate) == null
                ? void 0
                : c.call(u, n, this));
            const ye = await ((p = (d = this.options).onMutate) == null
              ? void 0
              : p.call(d, n));
            ye !== this.state.context &&
              Et(this, Cr, Fa).call(this, {
                type: "pending",
                context: ye,
                variables: n,
                isPaused: o,
              });
          }
          const J = await Z(this, zi).start();
          return (
            await ((g = (m = Z(this, on).config).onSuccess) == null
              ? void 0
              : g.call(m, J, n, this.state.context, this)),
            await ((x = (y = this.options).onSuccess) == null
              ? void 0
              : x.call(y, J, n, this.state.context)),
            await ((E = (R = Z(this, on).config).onSettled) == null
              ? void 0
              : E.call(
                  R,
                  J,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (_ = this.options).onSettled) == null
              ? void 0
              : w.call(_, J, null, n, this.state.context)),
            Et(this, Cr, Fa).call(this, { type: "success", data: J }),
            J
          );
        } catch (J) {
          try {
            throw (
              (await ((C = (A = Z(this, on).config).onError) == null
                ? void 0
                : C.call(A, J, n, this.state.context, this)),
              await ((k = (N = this.options).onError) == null
                ? void 0
                : k.call(N, J, n, this.state.context)),
              await ((I = (D = Z(this, on).config).onSettled) == null
                ? void 0
                : I.call(
                    D,
                    void 0,
                    J,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((G = (Y = this.options).onSettled) == null
                ? void 0
                : G.call(Y, void 0, J, n, this.state.context)),
              J)
            );
          } finally {
            Et(this, Cr, Fa).call(this, { type: "error", error: J });
          }
        } finally {
          Z(this, on).runNext(this);
        }
      }
    }),
    (Ar = new WeakMap()),
    (on = new WeakMap()),
    (zi = new WeakMap()),
    (Cr = new WeakSet()),
    (Fa = function (n) {
      const a = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: n.error,
              failureCount: i.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = a(this.state)),
        Jt.batch(() => {
          Z(this, Ar).forEach((i) => {
            i.onMutationUpdate(n);
          }),
            Z(this, on).notify({ mutation: this, type: "updated", action: n });
        });
    }),
    $w);
function SS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var na,
  rr,
  Yl,
  Gw,
  jO =
    ((Gw = class extends Xl {
      constructor(n = {}) {
        super();
        Ke(this, na);
        Ke(this, rr);
        Ke(this, Yl);
        (this.config = n),
          ke(this, na, new Set()),
          ke(this, rr, new Map()),
          ke(this, Yl, 0);
      }
      build(n, a, i) {
        const o = new kO({
          mutationCache: this,
          mutationId: ++_c(this, Yl)._,
          options: n.defaultMutationOptions(a),
          state: i,
        });
        return this.add(o), o;
      }
      add(n) {
        Z(this, na).add(n);
        const a = Tc(n);
        if (typeof a == "string") {
          const i = Z(this, rr).get(a);
          i ? i.push(n) : Z(this, rr).set(a, [n]);
        }
        this.notify({ type: "added", mutation: n });
      }
      remove(n) {
        if (Z(this, na).delete(n)) {
          const a = Tc(n);
          if (typeof a == "string") {
            const i = Z(this, rr).get(a);
            if (i)
              if (i.length > 1) {
                const o = i.indexOf(n);
                o !== -1 && i.splice(o, 1);
              } else i[0] === n && Z(this, rr).delete(a);
          }
        }
        this.notify({ type: "removed", mutation: n });
      }
      canRun(n) {
        const a = Tc(n);
        if (typeof a == "string") {
          const i = Z(this, rr).get(a),
            o =
              i == null ? void 0 : i.find((u) => u.state.status === "pending");
          return !o || o === n;
        } else return !0;
      }
      runNext(n) {
        var i;
        const a = Tc(n);
        if (typeof a == "string") {
          const o =
            (i = Z(this, rr).get(a)) == null
              ? void 0
              : i.find((u) => u !== n && u.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Jt.batch(() => {
          Z(this, na).forEach((n) => {
            this.notify({ type: "removed", mutation: n });
          }),
            Z(this, na).clear(),
            Z(this, rr).clear();
        });
      }
      getAll() {
        return Array.from(Z(this, na));
      }
      find(n) {
        const a = { exact: !0, ...n };
        return this.getAll().find((i) => Y0(a, i));
      }
      findAll(n = {}) {
        return this.getAll().filter((a) => Y0(n, a));
      }
      notify(n) {
        Jt.batch(() => {
          this.listeners.forEach((a) => {
            a(n);
          });
        });
      }
      resumePausedMutations() {
        const n = this.getAll().filter((a) => a.state.isPaused);
        return Jt.batch(() =>
          Promise.all(n.map((a) => a.continue().catch(Zn)))
        );
      }
    }),
    (na = new WeakMap()),
    (rr = new WeakMap()),
    (Yl = new WeakMap()),
    Gw);
function Tc(e) {
  var n;
  return (n = e.options.scope) == null ? void 0 : n.id;
}
function X0(e) {
  return {
    onFetch: (n, a) => {
      var g, y, x, R, E;
      const i = n.options,
        o =
          (x =
            (y = (g = n.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : y.fetchMore) == null
            ? void 0
            : x.direction,
        u = ((R = n.state.data) == null ? void 0 : R.pages) || [],
        c = ((E = n.state.data) == null ? void 0 : E.pageParams) || [];
      let d = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let _ = !1;
        const w = (N) => {
            Object.defineProperty(N, "signal", {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (_ = !0)
                  : n.signal.addEventListener("abort", () => {
                      _ = !0;
                    }),
                n.signal
              ),
            });
          },
          A = gS(n.options, n.fetchOptions),
          C = async (N, k, D) => {
            if (_) return Promise.reject();
            if (k == null && N.pages.length) return Promise.resolve(N);
            const I = {
              client: n.client,
              queryKey: n.queryKey,
              pageParam: k,
              direction: D ? "backward" : "forward",
              meta: n.options.meta,
            };
            w(I);
            const Y = await A(I),
              { maxPages: G } = n.options,
              J = D ? wO : xO;
            return {
              pages: J(N.pages, Y, G),
              pageParams: J(N.pageParams, k, G),
            };
          };
        if (o && u.length) {
          const N = o === "backward",
            k = N ? LO : Q0,
            D = { pages: u, pageParams: c },
            I = k(i, D);
          d = await C(D, I, N);
        } else {
          const N = e ?? u.length;
          do {
            const k = p === 0 ? c[0] ?? i.initialPageParam : Q0(i, d);
            if (p > 0 && k == null) break;
            (d = await C(d, k)), p++;
          } while (p < N);
        }
        return d;
      };
      n.options.persister
        ? (n.fetchFn = () => {
            var _, w;
            return (w = (_ = n.options).persister) == null
              ? void 0
              : w.call(
                  _,
                  m,
                  {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal,
                  },
                  a
                );
          })
        : (n.fetchFn = m);
    },
  };
}
function Q0(e, { pages: n, pageParams: a }) {
  const i = n.length - 1;
  return n.length > 0 ? e.getNextPageParam(n[i], n, a[i], a) : void 0;
}
function LO(e, { pages: n, pageParams: a }) {
  var i;
  return n.length > 0
    ? (i = e.getPreviousPageParam) == null
      ? void 0
      : i.call(e, n[0], n, a[0], a)
    : void 0;
}
var vt,
  Za,
  Ka,
  Ks,
  Xs,
  Xa,
  Qs,
  Ws,
  Yw,
  zO =
    ((Yw = class {
      constructor(e = {}) {
        Ke(this, vt);
        Ke(this, Za);
        Ke(this, Ka);
        Ke(this, Ks);
        Ke(this, Xs);
        Ke(this, Xa);
        Ke(this, Qs);
        Ke(this, Ws);
        ke(this, vt, e.queryCache || new DO()),
          ke(this, Za, e.mutationCache || new jO()),
          ke(this, Ka, e.defaultOptions || {}),
          ke(this, Ks, new Map()),
          ke(this, Xs, new Map()),
          ke(this, Xa, 0);
      }
      mount() {
        _c(this, Xa)._++,
          Z(this, Xa) === 1 &&
            (ke(
              this,
              Qs,
              yS.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), Z(this, vt).onFocus());
              })
            ),
            ke(
              this,
              Ws,
              Qc.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), Z(this, vt).onOnline());
              })
            ));
      }
      unmount() {
        var e, n;
        _c(this, Xa)._--,
          Z(this, Xa) === 0 &&
            ((e = Z(this, Qs)) == null || e.call(this),
            ke(this, Qs, void 0),
            (n = Z(this, Ws)) == null || n.call(this),
            ke(this, Ws, void 0));
      }
      isFetching(e) {
        return Z(this, vt).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return Z(this, Za).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var a;
        const n = this.defaultQueryOptions({ queryKey: e });
        return (a = Z(this, vt).get(n.queryHash)) == null
          ? void 0
          : a.state.data;
      }
      ensureQueryData(e) {
        const n = this.defaultQueryOptions(e),
          a = Z(this, vt).build(this, n),
          i = a.state.data;
        return i === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              a.isStaleByTime($0(n.staleTime, a)) &&
              this.prefetchQuery(n),
            Promise.resolve(i));
      }
      getQueriesData(e) {
        return Z(this, vt)
          .findAll(e)
          .map(({ queryKey: n, state: a }) => {
            const i = a.data;
            return [n, i];
          });
      }
      setQueryData(e, n, a) {
        const i = this.defaultQueryOptions({ queryKey: e }),
          o = Z(this, vt).get(i.queryHash),
          u = o == null ? void 0 : o.state.data,
          c = hO(n, u);
        if (c !== void 0)
          return Z(this, vt)
            .build(this, i)
            .setData(c, { ...a, manual: !0 });
      }
      setQueriesData(e, n, a) {
        return Jt.batch(() =>
          Z(this, vt)
            .findAll(e)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, n, a)])
        );
      }
      getQueryState(e) {
        var a;
        const n = this.defaultQueryOptions({ queryKey: e });
        return (a = Z(this, vt).get(n.queryHash)) == null ? void 0 : a.state;
      }
      removeQueries(e) {
        const n = Z(this, vt);
        Jt.batch(() => {
          n.findAll(e).forEach((a) => {
            n.remove(a);
          });
        });
      }
      resetQueries(e, n) {
        const a = Z(this, vt);
        return Jt.batch(
          () => (
            a.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, n)
          )
        );
      }
      cancelQueries(e, n = {}) {
        const a = { revert: !0, ...n },
          i = Jt.batch(() =>
            Z(this, vt)
              .findAll(e)
              .map((o) => o.cancel(a))
          );
        return Promise.all(i).then(Zn).catch(Zn);
      }
      invalidateQueries(e, n = {}) {
        return Jt.batch(
          () => (
            Z(this, vt)
              .findAll(e)
              .forEach((a) => {
                a.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  n
                )
          )
        );
      }
      refetchQueries(e, n = {}) {
        const a = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
          i = Jt.batch(() =>
            Z(this, vt)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let u = o.fetch(void 0, a);
                return (
                  a.throwOnError || (u = u.catch(Zn)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : u
                );
              })
          );
        return Promise.all(i).then(Zn);
      }
      fetchQuery(e) {
        const n = this.defaultQueryOptions(e);
        n.retry === void 0 && (n.retry = !1);
        const a = Z(this, vt).build(this, n);
        return a.isStaleByTime($0(n.staleTime, a))
          ? a.fetch(n)
          : Promise.resolve(a.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Zn).catch(Zn);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = X0(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Zn).catch(Zn);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = X0(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Qc.isOnline()
          ? Z(this, Za).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return Z(this, vt);
      }
      getMutationCache() {
        return Z(this, Za);
      }
      getDefaultOptions() {
        return Z(this, Ka);
      }
      setDefaultOptions(e) {
        ke(this, Ka, e);
      }
      setQueryDefaults(e, n) {
        Z(this, Ks).set(Bi(e), { queryKey: e, defaultOptions: n });
      }
      getQueryDefaults(e) {
        const n = [...Z(this, Ks).values()],
          a = {};
        return (
          n.forEach((i) => {
            jl(e, i.queryKey) && Object.assign(a, i.defaultOptions);
          }),
          a
        );
      }
      setMutationDefaults(e, n) {
        Z(this, Xs).set(Bi(e), { mutationKey: e, defaultOptions: n });
      }
      getMutationDefaults(e) {
        const n = [...Z(this, Xs).values()],
          a = {};
        return (
          n.forEach((i) => {
            jl(e, i.mutationKey) && Object.assign(a, i.defaultOptions);
          }),
          a
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const n = {
          ...Z(this, Ka).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          n.queryHash || (n.queryHash = $p(n.queryKey, n)),
          n.refetchOnReconnect === void 0 &&
            (n.refetchOnReconnect = n.networkMode !== "always"),
          n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
          !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
          n.queryFn === Gp && (n.enabled = !1),
          n
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...Z(this, Ka).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        Z(this, vt).clear(), Z(this, Za).clear();
      }
    }),
    (vt = new WeakMap()),
    (Za = new WeakMap()),
    (Ka = new WeakMap()),
    (Ks = new WeakMap()),
    (Xs = new WeakMap()),
    (Xa = new WeakMap()),
    (Qs = new WeakMap()),
    (Ws = new WeakMap()),
    Yw),
  Qa,
  Wa,
  pn,
  ra,
  la,
  Vc,
  ep,
  Zw,
  UO =
    ((Zw = class extends Xl {
      constructor(a, i) {
        super();
        Ke(this, la);
        Ke(this, Qa);
        Ke(this, Wa);
        Ke(this, pn);
        Ke(this, ra);
        ke(this, Qa, a),
          this.setOptions(i),
          this.bindMethods(),
          Et(this, la, Vc).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(a) {
        var o;
        const i = this.options;
        (this.options = Z(this, Qa).defaultMutationOptions(a)),
          yO(this.options, i) ||
            Z(this, Qa)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: Z(this, pn),
                observer: this,
              }),
          i != null &&
          i.mutationKey &&
          this.options.mutationKey &&
          Bi(i.mutationKey) !== Bi(this.options.mutationKey)
            ? this.reset()
            : ((o = Z(this, pn)) == null ? void 0 : o.state.status) ===
                "pending" && Z(this, pn).setOptions(this.options);
      }
      onUnsubscribe() {
        var a;
        this.hasListeners() ||
          (a = Z(this, pn)) == null ||
          a.removeObserver(this);
      }
      onMutationUpdate(a) {
        Et(this, la, Vc).call(this), Et(this, la, ep).call(this, a);
      }
      getCurrentResult() {
        return Z(this, Wa);
      }
      reset() {
        var a;
        (a = Z(this, pn)) == null || a.removeObserver(this),
          ke(this, pn, void 0),
          Et(this, la, Vc).call(this),
          Et(this, la, ep).call(this);
      }
      mutate(a, i) {
        var o;
        return (
          ke(this, ra, i),
          (o = Z(this, pn)) == null || o.removeObserver(this),
          ke(
            this,
            pn,
            Z(this, Qa).getMutationCache().build(Z(this, Qa), this.options)
          ),
          Z(this, pn).addObserver(this),
          Z(this, pn).execute(a)
        );
      }
    }),
    (Qa = new WeakMap()),
    (Wa = new WeakMap()),
    (pn = new WeakMap()),
    (ra = new WeakMap()),
    (la = new WeakSet()),
    (Vc = function () {
      var i;
      const a = ((i = Z(this, pn)) == null ? void 0 : i.state) ?? SS();
      ke(this, Wa, {
        ...a,
        isPending: a.status === "pending",
        isSuccess: a.status === "success",
        isError: a.status === "error",
        isIdle: a.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (ep = function (a) {
      Jt.batch(() => {
        var i, o, u, c, d, p, m, g;
        if (Z(this, ra) && this.hasListeners()) {
          const y = Z(this, Wa).variables,
            x = Z(this, Wa).context;
          (a == null ? void 0 : a.type) === "success"
            ? ((o = (i = Z(this, ra)).onSuccess) == null ||
                o.call(i, a.data, y, x),
              (c = (u = Z(this, ra)).onSettled) == null ||
                c.call(u, a.data, null, y, x))
            : (a == null ? void 0 : a.type) === "error" &&
              ((p = (d = Z(this, ra)).onError) == null ||
                p.call(d, a.error, y, x),
              (g = (m = Z(this, ra)).onSettled) == null ||
                g.call(m, void 0, a.error, y, x));
        }
        this.listeners.forEach((y) => {
          y(Z(this, Wa));
        });
      });
    }),
    Zw),
  _S = v.createContext(void 0),
  PO = (e) => {
    const n = v.useContext(_S);
    if (!n)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n;
  },
  BO = ({ client: e, children: n }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    S.jsx(_S.Provider, { value: e, children: n })
  );
function VO(e, n) {
  const a = PO(),
    [i] = v.useState(() => new UO(a, e));
  v.useEffect(() => {
    i.setOptions(e);
  }, [i, e]);
  const o = v.useSyncExternalStore(
      v.useCallback((c) => i.subscribe(Jt.batchCalls(c)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    u = v.useCallback(
      (c, d) => {
        i.mutate(c, d).catch(Zn);
      },
      [i]
    );
  if (o.error && SO(i.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: u, mutateAsync: o.mutate };
}
var Sm = { exports: {} },
  _m = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W0;
function HO() {
  if (W0) return _m;
  W0 = 1;
  var e = Ef();
  function n(p, m) {
    return (p === m && (p !== 0 || 1 / p === 1 / m)) || (p !== p && m !== m);
  }
  var a = typeof Object.is == "function" ? Object.is : n,
    i = e.useSyncExternalStore,
    o = e.useRef,
    u = e.useEffect,
    c = e.useMemo,
    d = e.useDebugValue;
  return (
    (_m.useSyncExternalStoreWithSelector = function (p, m, g, y, x) {
      var R = o(null);
      if (R.current === null) {
        var E = { hasValue: !1, value: null };
        R.current = E;
      } else E = R.current;
      R = c(
        function () {
          function w(D) {
            if (!A) {
              if (((A = !0), (C = D), (D = y(D)), x !== void 0 && E.hasValue)) {
                var I = E.value;
                if (x(I, D)) return (N = I);
              }
              return (N = D);
            }
            if (((I = N), a(C, D))) return I;
            var Y = y(D);
            return x !== void 0 && x(I, Y) ? ((C = D), I) : ((C = D), (N = Y));
          }
          var A = !1,
            C,
            N,
            k = g === void 0 ? null : g;
          return [
            function () {
              return w(m());
            },
            k === null
              ? void 0
              : function () {
                  return w(k());
                },
          ];
        },
        [m, g, y, x]
      );
      var _ = i(p, R[0], R[1]);
      return (
        u(
          function () {
            (E.hasValue = !0), (E.value = _);
          },
          [_]
        ),
        d(_),
        _
      );
    }),
    _m
  );
}
var J0;
function FO() {
  return J0 || ((J0 = 1), (Sm.exports = HO())), Sm.exports;
}
var qO = FO();
function IO(e) {
  e();
}
function $O() {
  let e = null,
    n = null;
  return {
    clear() {
      (e = null), (n = null);
    },
    notify() {
      IO(() => {
        let a = e;
        for (; a; ) a.callback(), (a = a.next);
      });
    },
    get() {
      const a = [];
      let i = e;
      for (; i; ) a.push(i), (i = i.next);
      return a;
    },
    subscribe(a) {
      let i = !0;
      const o = (n = { callback: a, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !i ||
            e === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var ex = { notify() {}, get: () => [] };
function GO(e, n) {
  let a,
    i = ex,
    o = 0,
    u = !1;
  function c(_) {
    g();
    const w = i.subscribe(_);
    let A = !1;
    return () => {
      A || ((A = !0), w(), y());
    };
  }
  function d() {
    i.notify();
  }
  function p() {
    E.onStateChange && E.onStateChange();
  }
  function m() {
    return u;
  }
  function g() {
    o++, a || ((a = e.subscribe(p)), (i = $O()));
  }
  function y() {
    o--, a && o === 0 && (a(), (a = void 0), i.clear(), (i = ex));
  }
  function x() {
    u || ((u = !0), g());
  }
  function R() {
    u && ((u = !1), y());
  }
  const E = {
    addNestedSub: c,
    notifyNestedSubs: d,
    handleChangeWrapper: p,
    isSubscribed: m,
    trySubscribe: x,
    tryUnsubscribe: R,
    getListeners: () => i,
  };
  return E;
}
var YO = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ZO = YO(),
  KO = () => typeof navigator < "u" && navigator.product === "ReactNative",
  XO = KO(),
  QO = () => (ZO || XO ? v.useLayoutEffect : v.useEffect),
  WO = QO(),
  Em = Symbol.for("react-redux-context"),
  Tm = typeof globalThis < "u" ? globalThis : {};
function JO() {
  if (!v.createContext) return {};
  const e = Tm[Em] ?? (Tm[Em] = new Map());
  let n = e.get(v.createContext);
  return n || ((n = v.createContext(null)), e.set(v.createContext, n)), n;
}
var ti = JO();
function eM(e) {
  const { children: n, context: a, serverState: i, store: o } = e,
    u = v.useMemo(() => {
      const p = GO(o);
      return {
        store: o,
        subscription: p,
        getServerState: i ? () => i : void 0,
      };
    }, [o, i]),
    c = v.useMemo(() => o.getState(), [o]);
  WO(() => {
    const { subscription: p } = u;
    return (
      (p.onStateChange = p.notifyNestedSubs),
      p.trySubscribe(),
      c !== o.getState() && p.notifyNestedSubs(),
      () => {
        p.tryUnsubscribe(), (p.onStateChange = void 0);
      }
    );
  }, [u, c]);
  const d = a || ti;
  return v.createElement(d.Provider, { value: u }, n);
}
var tM = eM;
function Yp(e = ti) {
  return function () {
    return v.useContext(e);
  };
}
var ES = Yp();
function TS(e = ti) {
  const n = e === ti ? ES : Yp(e),
    a = () => {
      const { store: i } = n();
      return i;
    };
  return Object.assign(a, { withTypes: () => a }), a;
}
var nM = TS();
function rM(e = ti) {
  const n = e === ti ? nM : TS(e),
    a = () => n().dispatch;
  return Object.assign(a, { withTypes: () => a }), a;
}
var Zp = rM(),
  aM = (e, n) => e === n;
function iM(e = ti) {
  const n = e === ti ? ES : Yp(e),
    a = (i, o = {}) => {
      const { equalityFn: u = aM } =
          typeof o == "function" ? { equalityFn: o } : o,
        c = n(),
        { store: d, subscription: p, getServerState: m } = c;
      v.useRef(!0);
      const g = v.useCallback(
          {
            [i.name](x) {
              return i(x);
            },
          }[i.name],
          [i]
        ),
        y = qO.useSyncExternalStoreWithSelector(
          p.addNestedSub,
          d.getState,
          m || d.getState,
          g,
          u
        );
      return v.useDebugValue(y), y;
    };
  return Object.assign(a, { withTypes: () => a }), a;
}
var Kp = iM();
function Wt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var sM = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  tx = sM,
  Rm = () => Math.random().toString(36).substring(7).split("").join("."),
  oM = {
    INIT: `@@redux/INIT${Rm()}`,
    REPLACE: `@@redux/REPLACE${Rm()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Rm()}`,
  },
  Wc = oM;
function Xp(e) {
  if (typeof e != "object" || e === null) return !1;
  let n = e;
  for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
}
function RS(e, n, a) {
  if (typeof e != "function") throw new Error(Wt(2));
  if (
    (typeof n == "function" && typeof a == "function") ||
    (typeof a == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Wt(0));
  if (
    (typeof n == "function" && typeof a > "u" && ((a = n), (n = void 0)),
    typeof a < "u")
  ) {
    if (typeof a != "function") throw new Error(Wt(1));
    return a(RS)(e, n);
  }
  let i = e,
    o = n,
    u = new Map(),
    c = u,
    d = 0,
    p = !1;
  function m() {
    c === u &&
      ((c = new Map()),
      u.forEach((w, A) => {
        c.set(A, w);
      }));
  }
  function g() {
    if (p) throw new Error(Wt(3));
    return o;
  }
  function y(w) {
    if (typeof w != "function") throw new Error(Wt(4));
    if (p) throw new Error(Wt(5));
    let A = !0;
    m();
    const C = d++;
    return (
      c.set(C, w),
      function () {
        if (A) {
          if (p) throw new Error(Wt(6));
          (A = !1), m(), c.delete(C), (u = null);
        }
      }
    );
  }
  function x(w) {
    if (!Xp(w)) throw new Error(Wt(7));
    if (typeof w.type > "u") throw new Error(Wt(8));
    if (typeof w.type != "string") throw new Error(Wt(17));
    if (p) throw new Error(Wt(9));
    try {
      (p = !0), (o = i(o, w));
    } finally {
      p = !1;
    }
    return (
      (u = c).forEach((C) => {
        C();
      }),
      w
    );
  }
  function R(w) {
    if (typeof w != "function") throw new Error(Wt(10));
    (i = w), x({ type: Wc.REPLACE });
  }
  function E() {
    const w = y;
    return {
      subscribe(A) {
        if (typeof A != "object" || A === null) throw new Error(Wt(11));
        function C() {
          const k = A;
          k.next && k.next(g());
        }
        return C(), { unsubscribe: w(C) };
      },
      [tx]() {
        return this;
      },
    };
  }
  return (
    x({ type: Wc.INIT }),
    { dispatch: x, subscribe: y, getState: g, replaceReducer: R, [tx]: E }
  );
}
function lM(e) {
  Object.keys(e).forEach((n) => {
    const a = e[n];
    if (typeof a(void 0, { type: Wc.INIT }) > "u") throw new Error(Wt(12));
    if (typeof a(void 0, { type: Wc.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Wt(13));
  });
}
function uM(e) {
  const n = Object.keys(e),
    a = {};
  for (let u = 0; u < n.length; u++) {
    const c = n[u];
    typeof e[c] == "function" && (a[c] = e[c]);
  }
  const i = Object.keys(a);
  let o;
  try {
    lM(a);
  } catch (u) {
    o = u;
  }
  return function (c = {}, d) {
    if (o) throw o;
    let p = !1;
    const m = {};
    for (let g = 0; g < i.length; g++) {
      const y = i[g],
        x = a[y],
        R = c[y],
        E = x(R, d);
      if (typeof E > "u") throw (d && d.type, new Error(Wt(14)));
      (m[y] = E), (p = p || E !== R);
    }
    return (p = p || i.length !== Object.keys(c).length), p ? m : c;
  };
}
function Jc(...e) {
  return e.length === 0
    ? (n) => n
    : e.length === 1
    ? e[0]
    : e.reduce(
        (n, a) =>
          (...i) =>
            n(a(...i))
      );
}
function cM(...e) {
  return (n) => (a, i) => {
    const o = n(a, i);
    let u = () => {
      throw new Error(Wt(15));
    };
    const c = { getState: o.getState, dispatch: (p, ...m) => u(p, ...m) },
      d = e.map((p) => p(c));
    return (u = Jc(...d)(o.dispatch)), { ...o, dispatch: u };
  };
}
function fM(e) {
  return Xp(e) && "type" in e && typeof e.type == "string";
}
var AS = Symbol.for("immer-nothing"),
  nx = Symbol.for("immer-draftable"),
  kn = Symbol.for("immer-state");
function ar(e, ...n) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Js = Object.getPrototypeOf;
function Vi(e) {
  return !!e && !!e[kn];
}
function ca(e) {
  var n;
  return e
    ? CS(e) ||
        Array.isArray(e) ||
        !!e[nx] ||
        !!((n = e.constructor) != null && n[nx]) ||
        Df(e) ||
        kf(e)
    : !1;
}
var dM = Object.prototype.constructor.toString();
function CS(e) {
  if (!e || typeof e != "object") return !1;
  const n = Js(e);
  if (n === null) return !0;
  const a = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return a === Object
    ? !0
    : typeof a == "function" && Function.toString.call(a) === dM;
}
function ef(e, n) {
  Nf(e) === 0
    ? Reflect.ownKeys(e).forEach((a) => {
        n(a, e[a], e);
      })
    : e.forEach((a, i) => n(i, a, e));
}
function Nf(e) {
  const n = e[kn];
  return n ? n.type_ : Array.isArray(e) ? 1 : Df(e) ? 2 : kf(e) ? 3 : 0;
}
function tp(e, n) {
  return Nf(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function OS(e, n, a) {
  const i = Nf(e);
  i === 2 ? e.set(n, a) : i === 3 ? e.add(a) : (e[n] = a);
}
function hM(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Df(e) {
  return e instanceof Map;
}
function kf(e) {
  return e instanceof Set;
}
function Ci(e) {
  return e.copy_ || e.base_;
}
function np(e, n) {
  if (Df(e)) return new Map(e);
  if (kf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const a = CS(e);
  if (n === !0 || (n === "class_only" && !a)) {
    const i = Object.getOwnPropertyDescriptors(e);
    delete i[kn];
    let o = Reflect.ownKeys(i);
    for (let u = 0; u < o.length; u++) {
      const c = o[u],
        d = i[c];
      d.writable === !1 && ((d.writable = !0), (d.configurable = !0)),
        (d.get || d.set) &&
          (i[c] = {
            configurable: !0,
            writable: !0,
            enumerable: d.enumerable,
            value: e[c],
          });
    }
    return Object.create(Js(e), i);
  } else {
    const i = Js(e);
    if (i !== null && a) return { ...e };
    const o = Object.create(i);
    return Object.assign(o, e);
  }
}
function Qp(e, n = !1) {
  return (
    jf(e) ||
      Vi(e) ||
      !ca(e) ||
      (Nf(e) > 1 && (e.set = e.add = e.clear = e.delete = mM),
      Object.freeze(e),
      n && Object.entries(e).forEach(([a, i]) => Qp(i, !0))),
    e
  );
}
function mM() {
  ar(2);
}
function jf(e) {
  return Object.isFrozen(e);
}
var pM = {};
function Hi(e) {
  const n = pM[e];
  return n || ar(0, e), n;
}
var Ll;
function MS() {
  return Ll;
}
function gM(e, n) {
  return {
    drafts_: [],
    parent_: e,
    immer_: n,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function rx(e, n) {
  n &&
    (Hi("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = n));
}
function rp(e) {
  ap(e), e.drafts_.forEach(yM), (e.drafts_ = null);
}
function ap(e) {
  e === Ll && (Ll = e.parent_);
}
function ax(e) {
  return (Ll = gM(Ll, e));
}
function yM(e) {
  const n = e[kn];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : (n.revoked_ = !0);
}
function ix(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const a = n.drafts_[0];
  return (
    e !== void 0 && e !== a
      ? (a[kn].modified_ && (rp(n), ar(4)),
        ca(e) && ((e = tf(n, e)), n.parent_ || nf(n, e)),
        n.patches_ &&
          Hi("Patches").generateReplacementPatches_(
            a[kn].base_,
            e,
            n.patches_,
            n.inversePatches_
          ))
      : (e = tf(n, a, [])),
    rp(n),
    n.patches_ && n.patchListener_(n.patches_, n.inversePatches_),
    e !== AS ? e : void 0
  );
}
function tf(e, n, a) {
  if (jf(n)) return n;
  const i = n[kn];
  if (!i) return ef(n, (o, u) => sx(e, i, n, o, u, a)), n;
  if (i.scope_ !== e) return n;
  if (!i.modified_) return nf(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    (i.finalized_ = !0), i.scope_.unfinalizedDrafts_--;
    const o = i.copy_;
    let u = o,
      c = !1;
    i.type_ === 3 && ((u = new Set(o)), o.clear(), (c = !0)),
      ef(u, (d, p) => sx(e, i, o, d, p, a, c)),
      nf(e, o, !1),
      a &&
        e.patches_ &&
        Hi("Patches").generatePatches_(i, a, e.patches_, e.inversePatches_);
  }
  return i.copy_;
}
function sx(e, n, a, i, o, u, c) {
  if (Vi(o)) {
    const d =
        u && n && n.type_ !== 3 && !tp(n.assigned_, i) ? u.concat(i) : void 0,
      p = tf(e, o, d);
    if ((OS(a, i, p), Vi(p))) e.canAutoFreeze_ = !1;
    else return;
  } else c && a.add(o);
  if (ca(o) && !jf(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    tf(e, o),
      (!n || !n.scope_.parent_) &&
        typeof i != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(a, i) &&
        nf(e, o);
  }
}
function nf(e, n, a = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Qp(n, a);
}
function vM(e, n) {
  const a = Array.isArray(e),
    i = {
      type_: a ? 1 : 0,
      scope_: n ? n.scope_ : MS(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: n,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = i,
    u = Wp;
  a && ((o = [i]), (u = zl));
  const { revoke: c, proxy: d } = Proxy.revocable(o, u);
  return (i.draft_ = d), (i.revoke_ = c), d;
}
var Wp = {
    get(e, n) {
      if (n === kn) return e;
      const a = Ci(e);
      if (!tp(a, n)) return bM(e, a, n);
      const i = a[n];
      return e.finalized_ || !ca(i)
        ? i
        : i === Am(e.base_, n)
        ? (Cm(e), (e.copy_[n] = sp(i, e)))
        : i;
    },
    has(e, n) {
      return n in Ci(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ci(e));
    },
    set(e, n, a) {
      const i = NS(Ci(e), n);
      if (i != null && i.set) return i.set.call(e.draft_, a), !0;
      if (!e.modified_) {
        const o = Am(Ci(e), n),
          u = o == null ? void 0 : o[kn];
        if (u && u.base_ === a)
          return (e.copy_[n] = a), (e.assigned_[n] = !1), !0;
        if (hM(a, o) && (a !== void 0 || tp(e.base_, n))) return !0;
        Cm(e), ip(e);
      }
      return (
        (e.copy_[n] === a && (a !== void 0 || n in e.copy_)) ||
          (Number.isNaN(a) && Number.isNaN(e.copy_[n])) ||
          ((e.copy_[n] = a), (e.assigned_[n] = !0)),
        !0
      );
    },
    deleteProperty(e, n) {
      return (
        Am(e.base_, n) !== void 0 || n in e.base_
          ? ((e.assigned_[n] = !1), Cm(e), ip(e))
          : delete e.assigned_[n],
        e.copy_ && delete e.copy_[n],
        !0
      );
    },
    getOwnPropertyDescriptor(e, n) {
      const a = Ci(e),
        i = Reflect.getOwnPropertyDescriptor(a, n);
      return (
        i && {
          writable: !0,
          configurable: e.type_ !== 1 || n !== "length",
          enumerable: i.enumerable,
          value: a[n],
        }
      );
    },
    defineProperty() {
      ar(11);
    },
    getPrototypeOf(e) {
      return Js(e.base_);
    },
    setPrototypeOf() {
      ar(12);
    },
  },
  zl = {};
ef(Wp, (e, n) => {
  zl[e] = function () {
    return (arguments[0] = arguments[0][0]), n.apply(this, arguments);
  };
});
zl.deleteProperty = function (e, n) {
  return zl.set.call(this, e, n, void 0);
};
zl.set = function (e, n, a) {
  return Wp.set.call(this, e[0], n, a, e[0]);
};
function Am(e, n) {
  const a = e[kn];
  return (a ? Ci(a) : e)[n];
}
function bM(e, n, a) {
  var o;
  const i = NS(n, a);
  return i
    ? "value" in i
      ? i.value
      : (o = i.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0;
}
function NS(e, n) {
  if (!(n in e)) return;
  let a = Js(e);
  for (; a; ) {
    const i = Object.getOwnPropertyDescriptor(a, n);
    if (i) return i;
    a = Js(a);
  }
}
function ip(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ip(e.parent_));
}
function Cm(e) {
  e.copy_ || (e.copy_ = np(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var xM = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (n, a, i) => {
        if (typeof n == "function" && typeof a != "function") {
          const u = a;
          a = n;
          const c = this;
          return function (p = u, ...m) {
            return c.produce(p, (g) => a.call(this, g, ...m));
          };
        }
        typeof a != "function" && ar(6),
          i !== void 0 && typeof i != "function" && ar(7);
        let o;
        if (ca(n)) {
          const u = ax(this),
            c = sp(n, void 0);
          let d = !0;
          try {
            (o = a(c)), (d = !1);
          } finally {
            d ? rp(u) : ap(u);
          }
          return rx(u, i), ix(o, u);
        } else if (!n || typeof n != "object") {
          if (
            ((o = a(n)),
            o === void 0 && (o = n),
            o === AS && (o = void 0),
            this.autoFreeze_ && Qp(o, !0),
            i)
          ) {
            const u = [],
              c = [];
            Hi("Patches").generateReplacementPatches_(n, o, u, c), i(u, c);
          }
          return o;
        } else ar(1, n);
      }),
      (this.produceWithPatches = (n, a) => {
        if (typeof n == "function")
          return (c, ...d) => this.produceWithPatches(c, (p) => n(p, ...d));
        let i, o;
        return [
          this.produce(n, a, (c, d) => {
            (i = c), (o = d);
          }),
          i,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ca(e) || ar(8), Vi(e) && (e = wM(e));
    const n = ax(this),
      a = sp(e, void 0);
    return (a[kn].isManual_ = !0), ap(n), a;
  }
  finishDraft(e, n) {
    const a = e && e[kn];
    (!a || !a.isManual_) && ar(9);
    const { scope_: i } = a;
    return rx(i, n), ix(void 0, i);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, n) {
    let a;
    for (a = n.length - 1; a >= 0; a--) {
      const o = n[a];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    a > -1 && (n = n.slice(a + 1));
    const i = Hi("Patches").applyPatches_;
    return Vi(e) ? i(e, n) : this.produce(e, (o) => i(o, n));
  }
};
function sp(e, n) {
  const a = Df(e)
    ? Hi("MapSet").proxyMap_(e, n)
    : kf(e)
    ? Hi("MapSet").proxySet_(e, n)
    : vM(e, n);
  return (n ? n.scope_ : MS()).drafts_.push(a), a;
}
function wM(e) {
  return Vi(e) || ar(10, e), DS(e);
}
function DS(e) {
  if (!ca(e) || jf(e)) return e;
  const n = e[kn];
  let a;
  if (n) {
    if (!n.modified_) return n.base_;
    (n.finalized_ = !0), (a = np(e, n.scope_.immer_.useStrictShallowCopy_));
  } else a = np(e, !0);
  return (
    ef(a, (i, o) => {
      OS(a, i, DS(o));
    }),
    n && (n.finalized_ = !1),
    a
  );
}
var jn = new xM(),
  kS = jn.produce;
jn.produceWithPatches.bind(jn);
jn.setAutoFreeze.bind(jn);
jn.setUseStrictShallowCopy.bind(jn);
jn.applyPatches.bind(jn);
jn.createDraft.bind(jn);
jn.finishDraft.bind(jn);
function jS(e) {
  return ({ dispatch: a, getState: i }) =>
    (o) =>
    (u) =>
      typeof u == "function" ? u(a, i, e) : o(u);
}
var SM = jS(),
  _M = jS,
  EM =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Jc
              : Jc.apply(null, arguments);
        };
function ox(e, n) {
  function a(...i) {
    if (n) {
      let o = n(...i);
      if (!o) throw new Error(sa(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: i[0] };
  }
  return (
    (a.toString = () => `${e}`),
    (a.type = e),
    (a.match = (i) => fM(i) && i.type === e),
    a
  );
}
var LS = class _l extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, _l.prototype);
  }
  static get [Symbol.species]() {
    return _l;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0])
      ? new _l(...n[0].concat(this))
      : new _l(...n.concat(this));
  }
};
function lx(e) {
  return ca(e) ? kS(e, () => {}) : e;
}
function Rc(e, n, a) {
  return e.has(n) ? e.get(n) : e.set(n, a(n)).get(n);
}
function TM(e) {
  return typeof e == "boolean";
}
var RM = () =>
    function (n) {
      const {
        thunk: a = !0,
        immutableCheck: i = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: u = !0,
      } = n ?? {};
      let c = new LS();
      return a && (TM(a) ? c.push(SM) : c.push(_M(a.extraArgument))), c;
    },
  AM = "RTK_autoBatch",
  ux = (e) => (n) => {
    setTimeout(n, e);
  },
  CM =
    (e = { type: "raf" }) =>
    (n) =>
    (...a) => {
      const i = n(...a);
      let o = !0,
        u = !1,
        c = !1;
      const d = new Set(),
        p =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : ux(10)
            : e.type === "callback"
            ? e.queueNotification
            : ux(e.timeout),
        m = () => {
          (c = !1), u && ((u = !1), d.forEach((g) => g()));
        };
      return Object.assign({}, i, {
        subscribe(g) {
          const y = () => o && g(),
            x = i.subscribe(y);
          return (
            d.add(g),
            () => {
              x(), d.delete(g);
            }
          );
        },
        dispatch(g) {
          var y;
          try {
            return (
              (o = !((y = g == null ? void 0 : g.meta) != null && y[AM])),
              (u = !o),
              u && (c || ((c = !0), p(m))),
              i.dispatch(g)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  OM = (e) =>
    function (a) {
      const { autoBatch: i = !0 } = a ?? {};
      let o = new LS(e);
      return i && o.push(CM(typeof i == "object" ? i : void 0)), o;
    };
function MM(e) {
  const n = RM(),
    {
      reducer: a = void 0,
      middleware: i,
      devTools: o = !0,
      preloadedState: u = void 0,
      enhancers: c = void 0,
    } = e || {};
  let d;
  if (typeof a == "function") d = a;
  else if (Xp(a)) d = uM(a);
  else throw new Error(sa(1));
  let p;
  typeof i == "function" ? (p = i(n)) : (p = n());
  let m = Jc;
  o && (m = EM({ trace: !1, ...(typeof o == "object" && o) }));
  const g = cM(...p),
    y = OM(g);
  let x = typeof c == "function" ? c(y) : y();
  const R = m(...x);
  return RS(d, u, R);
}
function zS(e) {
  const n = {},
    a = [];
  let i;
  const o = {
    addCase(u, c) {
      const d = typeof u == "string" ? u : u.type;
      if (!d) throw new Error(sa(28));
      if (d in n) throw new Error(sa(29));
      return (n[d] = c), o;
    },
    addMatcher(u, c) {
      return a.push({ matcher: u, reducer: c }), o;
    },
    addDefaultCase(u) {
      return (i = u), o;
    },
  };
  return e(o), [n, a, i];
}
function NM(e) {
  return typeof e == "function";
}
function DM(e, n) {
  let [a, i, o] = zS(n),
    u;
  if (NM(e)) u = () => lx(e());
  else {
    const d = lx(e);
    u = () => d;
  }
  function c(d = u(), p) {
    let m = [
      a[p.type],
      ...i.filter(({ matcher: g }) => g(p)).map(({ reducer: g }) => g),
    ];
    return (
      m.filter((g) => !!g).length === 0 && (m = [o]),
      m.reduce((g, y) => {
        if (y)
          if (Vi(g)) {
            const R = y(g, p);
            return R === void 0 ? g : R;
          } else {
            if (ca(g)) return kS(g, (x) => y(x, p));
            {
              const x = y(g, p);
              if (x === void 0) {
                if (g === null) return g;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return x;
            }
          }
        return g;
      }, d)
    );
  }
  return (c.getInitialState = u), c;
}
var kM = Symbol.for("rtk-slice-createasyncthunk");
function jM(e, n) {
  return `${e}/${n}`;
}
function LM({ creators: e } = {}) {
  var a;
  const n = (a = e == null ? void 0 : e.asyncThunk) == null ? void 0 : a[kM];
  return function (o) {
    const { name: u, reducerPath: c = u } = o;
    if (!u) throw new Error(sa(11));
    const d =
        (typeof o.reducers == "function" ? o.reducers(PM()) : o.reducers) || {},
      p = Object.keys(d),
      m = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      g = {
        addCase(k, D) {
          const I = typeof k == "string" ? k : k.type;
          if (!I) throw new Error(sa(12));
          if (I in m.sliceCaseReducersByType) throw new Error(sa(13));
          return (m.sliceCaseReducersByType[I] = D), g;
        },
        addMatcher(k, D) {
          return m.sliceMatchers.push({ matcher: k, reducer: D }), g;
        },
        exposeAction(k, D) {
          return (m.actionCreators[k] = D), g;
        },
        exposeCaseReducer(k, D) {
          return (m.sliceCaseReducersByName[k] = D), g;
        },
      };
    p.forEach((k) => {
      const D = d[k],
        I = {
          reducerName: k,
          type: jM(u, k),
          createNotation: typeof o.reducers == "function",
        };
      VM(D) ? FM(I, D, g, n) : BM(I, D, g);
    });
    function y() {
      const [k = {}, D = [], I = void 0] =
          typeof o.extraReducers == "function"
            ? zS(o.extraReducers)
            : [o.extraReducers],
        Y = { ...k, ...m.sliceCaseReducersByType };
      return DM(o.initialState, (G) => {
        for (let J in Y) G.addCase(J, Y[J]);
        for (let J of m.sliceMatchers) G.addMatcher(J.matcher, J.reducer);
        for (let J of D) G.addMatcher(J.matcher, J.reducer);
        I && G.addDefaultCase(I);
      });
    }
    const x = (k) => k,
      R = new Map(),
      E = new WeakMap();
    let _;
    function w(k, D) {
      return _ || (_ = y()), _(k, D);
    }
    function A() {
      return _ || (_ = y()), _.getInitialState();
    }
    function C(k, D = !1) {
      function I(G) {
        let J = G[k];
        return typeof J > "u" && D && (J = Rc(E, I, A)), J;
      }
      function Y(G = x) {
        const J = Rc(R, D, () => new WeakMap());
        return Rc(J, G, () => {
          const ye = {};
          for (const [be, oe] of Object.entries(o.selectors ?? {}))
            ye[be] = zM(oe, G, () => Rc(E, G, A), D);
          return ye;
        });
      }
      return {
        reducerPath: k,
        getSelectors: Y,
        get selectors() {
          return Y(I);
        },
        selectSlice: I,
      };
    }
    const N = {
      name: u,
      reducer: w,
      actions: m.actionCreators,
      caseReducers: m.sliceCaseReducersByName,
      getInitialState: A,
      ...C(c),
      injectInto(k, { reducerPath: D, ...I } = {}) {
        const Y = D ?? c;
        return (
          k.inject({ reducerPath: Y, reducer: w }, I), { ...N, ...C(Y, !0) }
        );
      },
    };
    return N;
  };
}
function zM(e, n, a, i) {
  function o(u, ...c) {
    let d = n(u);
    return typeof d > "u" && i && (d = a()), e(d, ...c);
  }
  return (o.unwrapped = e), o;
}
var UM = LM();
function PM() {
  function e(n, a) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: n, ...a };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(n) {
        return Object.assign(
          {
            [n.name](...a) {
              return n(...a);
            },
          }[n.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(n, a) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: n,
          reducer: a,
        };
      },
      asyncThunk: e,
    }
  );
}
function BM({ type: e, reducerName: n, createNotation: a }, i, o) {
  let u, c;
  if ("reducer" in i) {
    if (a && !HM(i)) throw new Error(sa(17));
    (u = i.reducer), (c = i.prepare);
  } else u = i;
  o.addCase(e, u)
    .exposeCaseReducer(n, u)
    .exposeAction(n, c ? ox(e, c) : ox(e));
}
function VM(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function HM(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function FM({ type: e, reducerName: n }, a, i, o) {
  if (!o) throw new Error(sa(18));
  const {
      payloadCreator: u,
      fulfilled: c,
      pending: d,
      rejected: p,
      settled: m,
      options: g,
    } = a,
    y = o(e, u, g);
  i.exposeAction(n, y),
    c && i.addCase(y.fulfilled, c),
    d && i.addCase(y.pending, d),
    p && i.addCase(y.rejected, p),
    m && i.addMatcher(y.settled, m),
    i.exposeCaseReducer(n, {
      fulfilled: c || Ac,
      pending: d || Ac,
      rejected: p || Ac,
      settled: m || Ac,
    });
}
function Ac() {}
function sa(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const qM = { user: null, isAuthenticated: !1 },
  US = UM({
    name: "user",
    initialState: qM,
    reducers: {
      setUser(e, n) {
        var a, i, o, u;
        (e.user = n.payload),
          (e.isAuthenticated = !!n.payload),
          ((a = n.payload) == null ? void 0 : a.accessToken) !== null &&
            localStorage.setItem(
              "accessToken",
              (i = n.payload) == null ? void 0 : i.accessToken
            ),
          ((o = n.payload) == null ? void 0 : o.refreshToken) !== null &&
            localStorage.setItem(
              "refreshToken",
              (u = n.payload) == null ? void 0 : u.refreshToken
            ),
          localStorage.setItem("user", JSON.stringify(n.payload));
      },
      loadUserFromStorage(e) {
        const n = localStorage.getItem("user");
        (e.user = n ? JSON.parse(n) : null), (e.isAuthenticated = !!e.user);
      },
      logout(e) {
        (e.user = null),
          (e.isAuthenticated = !1),
          localStorage.removeItem("accessToken"),
          localStorage.removeItem("refreshToken"),
          localStorage.removeItem("user");
      },
    },
  }),
  { setUser: IM, loadUserFromStorage: $M, logout: GM } = US.actions,
  YM = US.reducer,
  ZM = MM({ reducer: { user: YM } }),
  KM = ({ children: e }) => S.jsx(tM, { store: ZM, children: e });
function XM(e) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    n.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = e)
      : a.appendChild(document.createTextNode(e));
}
const QM = (e) => {
    switch (e) {
      case "success":
        return eN;
      case "info":
        return nN;
      case "warning":
        return tN;
      case "error":
        return rN;
      default:
        return null;
    }
  },
  WM = Array(12).fill(0),
  JM = ({ visible: e, className: n }) =>
    ne.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
        "data-visible": e,
      },
      ne.createElement(
        "div",
        { className: "sonner-spinner" },
        WM.map((a, i) =>
          ne.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`,
          })
        )
      )
    ),
  eN = ne.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    ne.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  tN = ne.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    ne.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  nN = ne.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    ne.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  rN = ne.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    ne.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  aN = ne.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    ne.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    ne.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  iN = () => {
    const [e, n] = ne.useState(document.hidden);
    return (
      ne.useEffect(() => {
        const a = () => {
          n(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", a),
          () => window.removeEventListener("visibilitychange", a)
        );
      }, []),
      e
    );
  };
let op = 1;
class sN {
  constructor() {
    (this.subscribe = (n) => (
      this.subscribers.push(n),
      () => {
        const a = this.subscribers.indexOf(n);
        this.subscribers.splice(a, 1);
      }
    )),
      (this.publish = (n) => {
        this.subscribers.forEach((a) => a(n));
      }),
      (this.addToast = (n) => {
        this.publish(n), (this.toasts = [...this.toasts, n]);
      }),
      (this.create = (n) => {
        var a;
        const { message: i, ...o } = n,
          u =
            typeof (n == null ? void 0 : n.id) == "number" ||
            ((a = n.id) == null ? void 0 : a.length) > 0
              ? n.id
              : op++,
          c = this.toasts.find((p) => p.id === u),
          d = n.dismissible === void 0 ? !0 : n.dismissible;
        return (
          this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
          c
            ? (this.toasts = this.toasts.map((p) =>
                p.id === u
                  ? (this.publish({ ...p, ...n, id: u, title: i }),
                    { ...p, ...n, id: u, dismissible: d, title: i })
                  : p
              ))
            : this.addToast({ title: i, ...o, dismissible: d, id: u }),
          u
        );
      }),
      (this.dismiss = (n) => (
        n
          ? (this.dismissedToasts.add(n),
            requestAnimationFrame(() =>
              this.subscribers.forEach((a) => a({ id: n, dismiss: !0 }))
            ))
          : this.toasts.forEach((a) => {
              this.subscribers.forEach((i) => i({ id: a.id, dismiss: !0 }));
            }),
        n
      )),
      (this.message = (n, a) => this.create({ ...a, message: n })),
      (this.error = (n, a) => this.create({ ...a, message: n, type: "error" })),
      (this.success = (n, a) =>
        this.create({ ...a, type: "success", message: n })),
      (this.info = (n, a) => this.create({ ...a, type: "info", message: n })),
      (this.warning = (n, a) =>
        this.create({ ...a, type: "warning", message: n })),
      (this.loading = (n, a) =>
        this.create({ ...a, type: "loading", message: n })),
      (this.promise = (n, a) => {
        if (!a) return;
        let i;
        a.loading !== void 0 &&
          (i = this.create({
            ...a,
            promise: n,
            type: "loading",
            message: a.loading,
            description:
              typeof a.description != "function" ? a.description : void 0,
          }));
        const o = Promise.resolve(n instanceof Function ? n() : n);
        let u = i !== void 0,
          c;
        const d = o
            .then(async (m) => {
              if (((c = ["resolve", m]), ne.isValidElement(m)))
                (u = !1), this.create({ id: i, type: "default", message: m });
              else if (lN(m) && !m.ok) {
                u = !1;
                const y =
                    typeof a.error == "function"
                      ? await a.error(`HTTP error! status: ${m.status}`)
                      : a.error,
                  x =
                    typeof a.description == "function"
                      ? await a.description(`HTTP error! status: ${m.status}`)
                      : a.description,
                  E =
                    typeof y == "object" && !ne.isValidElement(y)
                      ? y
                      : { message: y };
                this.create({ id: i, type: "error", description: x, ...E });
              } else if (m instanceof Error) {
                u = !1;
                const y =
                    typeof a.error == "function" ? await a.error(m) : a.error,
                  x =
                    typeof a.description == "function"
                      ? await a.description(m)
                      : a.description,
                  E =
                    typeof y == "object" && !ne.isValidElement(y)
                      ? y
                      : { message: y };
                this.create({ id: i, type: "error", description: x, ...E });
              } else if (a.success !== void 0) {
                u = !1;
                const y =
                    typeof a.success == "function"
                      ? await a.success(m)
                      : a.success,
                  x =
                    typeof a.description == "function"
                      ? await a.description(m)
                      : a.description,
                  E =
                    typeof y == "object" && !ne.isValidElement(y)
                      ? y
                      : { message: y };
                this.create({ id: i, type: "success", description: x, ...E });
              }
            })
            .catch(async (m) => {
              if (((c = ["reject", m]), a.error !== void 0)) {
                u = !1;
                const g =
                    typeof a.error == "function" ? await a.error(m) : a.error,
                  y =
                    typeof a.description == "function"
                      ? await a.description(m)
                      : a.description,
                  R =
                    typeof g == "object" && !ne.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: i, type: "error", description: y, ...R });
              }
            })
            .finally(() => {
              u && (this.dismiss(i), (i = void 0)),
                a.finally == null || a.finally.call(a);
            }),
          p = () =>
            new Promise((m, g) =>
              d.then(() => (c[0] === "reject" ? g(c[1]) : m(c[1]))).catch(g)
            );
        return typeof i != "string" && typeof i != "number"
          ? { unwrap: p }
          : Object.assign(i, { unwrap: p });
      }),
      (this.custom = (n, a) => {
        const i = (a == null ? void 0 : a.id) || op++;
        return this.create({ jsx: n(i), id: i, ...a }), i;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const gn = new sN(),
  oN = (e, n) => {
    const a = (n == null ? void 0 : n.id) || op++;
    return gn.addToast({ title: e, ...n, id: a }), a;
  },
  lN = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  uN = oN,
  cN = () => gn.toasts,
  fN = () => gn.getActiveToasts(),
  lp = Object.assign(
    uN,
    {
      success: gn.success,
      info: gn.info,
      warning: gn.warning,
      error: gn.error,
      custom: gn.custom,
      message: gn.message,
      promise: gn.promise,
      dismiss: gn.dismiss,
      loading: gn.loading,
    },
    { getHistory: cN, getToasts: fN }
  );
XM(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function Cc(e) {
  return e.label !== void 0;
}
const dN = 3,
  hN = "24px",
  mN = "16px",
  cx = 4e3,
  pN = 356,
  gN = 14,
  yN = 45,
  vN = 200;
function Er(...e) {
  return e.filter(Boolean).join(" ");
}
function bN(e) {
  const [n, a] = e.split("-"),
    i = [];
  return n && i.push(n), a && i.push(a), i;
}
const xN = (e) => {
  var n, a, i, o, u, c, d, p, m;
  const {
      invert: g,
      toast: y,
      unstyled: x,
      interacting: R,
      setHeights: E,
      visibleToasts: _,
      heights: w,
      index: A,
      toasts: C,
      expanded: N,
      removeToast: k,
      defaultRichColors: D,
      closeButton: I,
      style: Y,
      cancelButtonStyle: G,
      actionButtonStyle: J,
      className: ye = "",
      descriptionClassName: be = "",
      duration: oe,
      position: ge,
      gap: se,
      expandByDefault: fe,
      classNames: j,
      icons: Q,
      closeButtonAriaLabel: V = "Close toast",
    } = e,
    [re, O] = ne.useState(null),
    [H, ie] = ne.useState(null),
    [W, le] = ne.useState(!1),
    [Ce, de] = ne.useState(!1),
    [Oe, ze] = ne.useState(!1),
    [Xe, mt] = ne.useState(!1),
    [an, Gt] = ne.useState(!1),
    [bn, xn] = ne.useState(0),
    [pa, ga] = ne.useState(0),
    Ot = ne.useRef(y.duration || oe || cx),
    oi = ne.useRef(null),
    Mt = ne.useRef(null),
    L = A === 0,
    F = A + 1 <= _,
    X = y.type,
    me = y.dismissible !== !1,
    he = y.className || "",
    ce = y.descriptionClassName || "",
    xe = ne.useMemo(
      () => w.findIndex((Ue) => Ue.toastId === y.id) || 0,
      [w, y.id]
    ),
    je = ne.useMemo(() => {
      var Ue;
      return (Ue = y.closeButton) != null ? Ue : I;
    }, [y.closeButton, I]),
    Ie = ne.useMemo(() => y.duration || oe || cx, [y.duration, oe]),
    nt = ne.useRef(0),
    wn = ne.useRef(0),
    Sn = ne.useRef(0),
    pr = ne.useRef(null),
    [gr, yr] = ge.split("-"),
    Un = ne.useMemo(
      () => w.reduce((Ue, bt, Nt) => (Nt >= xe ? Ue : Ue + bt.height), 0),
      [w, xe]
    ),
    vr = iN(),
    zr = y.invert || g,
    ya = X === "loading";
  (wn.current = ne.useMemo(() => xe * se + Un, [xe, Un])),
    ne.useEffect(() => {
      Ot.current = Ie;
    }, [Ie]),
    ne.useEffect(() => {
      le(!0);
    }, []),
    ne.useEffect(() => {
      const Ue = Mt.current;
      if (Ue) {
        const bt = Ue.getBoundingClientRect().height;
        return (
          ga(bt),
          E((Nt) => [
            { toastId: y.id, height: bt, position: y.position },
            ...Nt,
          ]),
          () => E((Nt) => Nt.filter((Yt) => Yt.toastId !== y.id))
        );
      }
    }, [E, y.id]),
    ne.useLayoutEffect(() => {
      if (!W) return;
      const Ue = Mt.current,
        bt = Ue.style.height;
      Ue.style.height = "auto";
      const Nt = Ue.getBoundingClientRect().height;
      (Ue.style.height = bt),
        ga(Nt),
        E((Yt) =>
          Yt.find((zt) => zt.toastId === y.id)
            ? Yt.map((zt) => (zt.toastId === y.id ? { ...zt, height: Nt } : zt))
            : [{ toastId: y.id, height: Nt, position: y.position }, ...Yt]
        );
    }, [W, y.title, y.description, E, y.id]);
  const Wn = ne.useCallback(() => {
    de(!0),
      xn(wn.current),
      E((Ue) => Ue.filter((bt) => bt.toastId !== y.id)),
      setTimeout(() => {
        k(y);
      }, vN);
  }, [y, k, E, wn]);
  ne.useEffect(() => {
    if (
      (y.promise && X === "loading") ||
      y.duration === 1 / 0 ||
      y.type === "loading"
    )
      return;
    let Ue;
    return (
      N || R || vr
        ? (() => {
            if (Sn.current < nt.current) {
              const Yt = new Date().getTime() - nt.current;
              Ot.current = Ot.current - Yt;
            }
            Sn.current = new Date().getTime();
          })()
        : (() => {
            Ot.current !== 1 / 0 &&
              ((nt.current = new Date().getTime()),
              (Ue = setTimeout(() => {
                y.onAutoClose == null || y.onAutoClose.call(y, y), Wn();
              }, Ot.current)));
          })(),
      () => clearTimeout(Ue)
    );
  }, [N, R, y, X, vr, Wn]),
    ne.useEffect(() => {
      y.delete && Wn();
    }, [Wn, y.delete]);
  function fu() {
    var Ue;
    if (Q != null && Q.loading) {
      var bt;
      return ne.createElement(
        "div",
        {
          className: Er(
            j == null ? void 0 : j.loader,
            y == null || (bt = y.classNames) == null ? void 0 : bt.loader,
            "sonner-loader"
          ),
          "data-visible": X === "loading",
        },
        Q.loading
      );
    }
    return ne.createElement(JM, {
      className: Er(
        j == null ? void 0 : j.loader,
        y == null || (Ue = y.classNames) == null ? void 0 : Ue.loader
      ),
      visible: X === "loading",
    });
  }
  const yo = y.icon || (Q == null ? void 0 : Q[X]) || QM(X);
  var va, du;
  return ne.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Mt,
      className: Er(
        ye,
        he,
        j == null ? void 0 : j.toast,
        y == null || (n = y.classNames) == null ? void 0 : n.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[X],
        y == null || (a = y.classNames) == null ? void 0 : a[X]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (va = y.richColors) != null ? va : D,
      "data-styled": !(y.jsx || y.unstyled || x),
      "data-mounted": W,
      "data-promise": !!y.promise,
      "data-swiped": an,
      "data-removed": Ce,
      "data-visible": F,
      "data-y-position": gr,
      "data-x-position": yr,
      "data-index": A,
      "data-front": L,
      "data-swiping": Oe,
      "data-dismissible": me,
      "data-type": X,
      "data-invert": zr,
      "data-swipe-out": Xe,
      "data-swipe-direction": H,
      "data-expanded": !!(N || (fe && W)),
      style: {
        "--index": A,
        "--toasts-before": A,
        "--z-index": C.length - A,
        "--offset": `${Ce ? bn : wn.current}px`,
        "--initial-height": fe ? "auto" : `${pa}px`,
        ...Y,
        ...y.style,
      },
      onDragEnd: () => {
        ze(!1), O(null), (pr.current = null);
      },
      onPointerDown: (Ue) => {
        ya ||
          !me ||
          ((oi.current = new Date()),
          xn(wn.current),
          Ue.target.setPointerCapture(Ue.pointerId),
          Ue.target.tagName !== "BUTTON" &&
            (ze(!0), (pr.current = { x: Ue.clientX, y: Ue.clientY })));
      },
      onPointerUp: () => {
        var Ue, bt, Nt;
        if (Xe || !me) return;
        pr.current = null;
        const Yt = Number(
            ((Ue = Mt.current) == null
              ? void 0
              : Ue.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          li = Number(
            ((bt = Mt.current) == null
              ? void 0
              : bt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          zt =
            new Date().getTime() -
            ((Nt = oi.current) == null ? void 0 : Nt.getTime()),
          xt = re === "x" ? Yt : li,
          wt = Math.abs(xt) / zt;
        if (Math.abs(xt) >= yN || wt > 0.11) {
          xn(wn.current),
            y.onDismiss == null || y.onDismiss.call(y, y),
            ie(
              re === "x" ? (Yt > 0 ? "right" : "left") : li > 0 ? "down" : "up"
            ),
            Wn(),
            mt(!0);
          return;
        } else {
          var ft, Ht;
          (ft = Mt.current) == null ||
            ft.style.setProperty("--swipe-amount-x", "0px"),
            (Ht = Mt.current) == null ||
              Ht.style.setProperty("--swipe-amount-y", "0px");
        }
        Gt(!1), ze(!1), O(null);
      },
      onPointerMove: (Ue) => {
        var bt, Nt, Yt;
        if (
          !pr.current ||
          !me ||
          ((bt = window.getSelection()) == null
            ? void 0
            : bt.toString().length) > 0
        )
          return;
        const zt = Ue.clientY - pr.current.y,
          xt = Ue.clientX - pr.current.x;
        var wt;
        const ft = (wt = e.swipeDirections) != null ? wt : bN(ge);
        !re &&
          (Math.abs(xt) > 1 || Math.abs(zt) > 1) &&
          O(Math.abs(xt) > Math.abs(zt) ? "x" : "y");
        let Ht = { x: 0, y: 0 };
        const Zi = (Ur) => 1 / (1.5 + Math.abs(Ur) / 20);
        if (re === "y") {
          if (ft.includes("top") || ft.includes("bottom"))
            if (
              (ft.includes("top") && zt < 0) ||
              (ft.includes("bottom") && zt > 0)
            )
              Ht.y = zt;
            else {
              const Ur = zt * Zi(zt);
              Ht.y = Math.abs(Ur) < Math.abs(zt) ? Ur : zt;
            }
        } else if (re === "x" && (ft.includes("left") || ft.includes("right")))
          if (
            (ft.includes("left") && xt < 0) ||
            (ft.includes("right") && xt > 0)
          )
            Ht.x = xt;
          else {
            const Ur = xt * Zi(xt);
            Ht.x = Math.abs(Ur) < Math.abs(xt) ? Ur : xt;
          }
        (Math.abs(Ht.x) > 0 || Math.abs(Ht.y) > 0) && Gt(!0),
          (Nt = Mt.current) == null ||
            Nt.style.setProperty("--swipe-amount-x", `${Ht.x}px`),
          (Yt = Mt.current) == null ||
            Yt.style.setProperty("--swipe-amount-y", `${Ht.y}px`);
      },
    },
    je && !y.jsx && X !== "loading"
      ? ne.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": ya,
            "data-close-button": !0,
            onClick:
              ya || !me
                ? () => {}
                : () => {
                    Wn(), y.onDismiss == null || y.onDismiss.call(y, y);
                  },
            className: Er(
              j == null ? void 0 : j.closeButton,
              y == null || (i = y.classNames) == null ? void 0 : i.closeButton
            ),
          },
          (du = Q == null ? void 0 : Q.close) != null ? du : aN
        )
      : null,
    (X || y.icon || y.promise) &&
      y.icon !== null &&
      ((Q == null ? void 0 : Q[X]) !== null || y.icon)
      ? ne.createElement(
          "div",
          {
            "data-icon": "",
            className: Er(
              j == null ? void 0 : j.icon,
              y == null || (o = y.classNames) == null ? void 0 : o.icon
            ),
          },
          y.promise || (y.type === "loading" && !y.icon)
            ? y.icon || fu()
            : null,
          y.type !== "loading" ? yo : null
        )
      : null,
    ne.createElement(
      "div",
      {
        "data-content": "",
        className: Er(
          j == null ? void 0 : j.content,
          y == null || (u = y.classNames) == null ? void 0 : u.content
        ),
      },
      ne.createElement(
        "div",
        {
          "data-title": "",
          className: Er(
            j == null ? void 0 : j.title,
            y == null || (c = y.classNames) == null ? void 0 : c.title
          ),
        },
        y.jsx ? y.jsx : typeof y.title == "function" ? y.title() : y.title
      ),
      y.description
        ? ne.createElement(
            "div",
            {
              "data-description": "",
              className: Er(
                be,
                ce,
                j == null ? void 0 : j.description,
                y == null || (d = y.classNames) == null ? void 0 : d.description
              ),
            },
            typeof y.description == "function" ? y.description() : y.description
          )
        : null
    ),
    ne.isValidElement(y.cancel)
      ? y.cancel
      : y.cancel && Cc(y.cancel)
      ? ne.createElement(
          "button",
          {
            "data-button": !0,
            "data-cancel": !0,
            style: y.cancelButtonStyle || G,
            onClick: (Ue) => {
              Cc(y.cancel) &&
                me &&
                (y.cancel.onClick == null ||
                  y.cancel.onClick.call(y.cancel, Ue),
                Wn());
            },
            className: Er(
              j == null ? void 0 : j.cancelButton,
              y == null || (p = y.classNames) == null ? void 0 : p.cancelButton
            ),
          },
          y.cancel.label
        )
      : null,
    ne.isValidElement(y.action)
      ? y.action
      : y.action && Cc(y.action)
      ? ne.createElement(
          "button",
          {
            "data-button": !0,
            "data-action": !0,
            style: y.actionButtonStyle || J,
            onClick: (Ue) => {
              Cc(y.action) &&
                (y.action.onClick == null ||
                  y.action.onClick.call(y.action, Ue),
                !Ue.defaultPrevented && Wn());
            },
            className: Er(
              j == null ? void 0 : j.actionButton,
              y == null || (m = y.classNames) == null ? void 0 : m.actionButton
            ),
          },
          y.action.label
        )
      : null
  );
};
function fx() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function wN(e, n) {
  const a = {};
  return (
    [e, n].forEach((i, o) => {
      const u = o === 1,
        c = u ? "--mobile-offset" : "--offset",
        d = u ? mN : hN;
      function p(m) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          a[`${c}-${g}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof i == "number" || typeof i == "string"
        ? p(i)
        : typeof i == "object"
        ? ["top", "right", "bottom", "left"].forEach((m) => {
            i[m] === void 0
              ? (a[`${c}-${m}`] = d)
              : (a[`${c}-${m}`] = typeof i[m] == "number" ? `${i[m]}px` : i[m]);
          })
        : p(d);
    }),
    a
  );
}
const SN = ne.forwardRef(function (n, a) {
    const {
        invert: i,
        position: o = "bottom-right",
        hotkey: u = ["altKey", "KeyT"],
        expand: c,
        closeButton: d,
        className: p,
        offset: m,
        mobileOffset: g,
        theme: y = "light",
        richColors: x,
        duration: R,
        style: E,
        visibleToasts: _ = dN,
        toastOptions: w,
        dir: A = fx(),
        gap: C = gN,
        icons: N,
        containerAriaLabel: k = "Notifications",
      } = n,
      [D, I] = ne.useState([]),
      Y = ne.useMemo(
        () =>
          Array.from(
            new Set(
              [o].concat(D.filter((H) => H.position).map((H) => H.position))
            )
          ),
        [D, o]
      ),
      [G, J] = ne.useState([]),
      [ye, be] = ne.useState(!1),
      [oe, ge] = ne.useState(!1),
      [se, fe] = ne.useState(
        y !== "system"
          ? y
          : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      ),
      j = ne.useRef(null),
      Q = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      V = ne.useRef(null),
      re = ne.useRef(!1),
      O = ne.useCallback((H) => {
        I((ie) => {
          var W;
          return (
            ((W = ie.find((le) => le.id === H.id)) != null && W.delete) ||
              gn.dismiss(H.id),
            ie.filter(({ id: le }) => le !== H.id)
          );
        });
      }, []);
    return (
      ne.useEffect(
        () =>
          gn.subscribe((H) => {
            if (H.dismiss) {
              requestAnimationFrame(() => {
                I((ie) =>
                  ie.map((W) => (W.id === H.id ? { ...W, delete: !0 } : W))
                );
              });
              return;
            }
            setTimeout(() => {
              dS.flushSync(() => {
                I((ie) => {
                  const W = ie.findIndex((le) => le.id === H.id);
                  return W !== -1
                    ? [
                        ...ie.slice(0, W),
                        { ...ie[W], ...H },
                        ...ie.slice(W + 1),
                      ]
                    : [H, ...ie];
                });
              });
            });
          }),
        [D]
      ),
      ne.useEffect(() => {
        if (y !== "system") {
          fe(y);
          return;
        }
        if (
          (y === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? fe("dark")
              : fe("light")),
          typeof window > "u")
        )
          return;
        const H = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          H.addEventListener("change", ({ matches: ie }) => {
            fe(ie ? "dark" : "light");
          });
        } catch {
          H.addListener(({ matches: W }) => {
            try {
              fe(W ? "dark" : "light");
            } catch (le) {
              console.error(le);
            }
          });
        }
      }, [y]),
      ne.useEffect(() => {
        D.length <= 1 && be(!1);
      }, [D]),
      ne.useEffect(() => {
        const H = (ie) => {
          var W;
          if (u.every((de) => ie[de] || ie.code === de)) {
            var Ce;
            be(!0), (Ce = j.current) == null || Ce.focus();
          }
          ie.code === "Escape" &&
            (document.activeElement === j.current ||
              ((W = j.current) != null &&
                W.contains(document.activeElement))) &&
            be(!1);
        };
        return (
          document.addEventListener("keydown", H),
          () => document.removeEventListener("keydown", H)
        );
      }, [u]),
      ne.useEffect(() => {
        if (j.current)
          return () => {
            V.current &&
              (V.current.focus({ preventScroll: !0 }),
              (V.current = null),
              (re.current = !1));
          };
      }, [j.current]),
      ne.createElement(
        "section",
        {
          ref: a,
          "aria-label": `${k} ${Q}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        Y.map((H, ie) => {
          var W;
          const [le, Ce] = H.split("-");
          return D.length
            ? ne.createElement(
                "ol",
                {
                  key: H,
                  dir: A === "auto" ? fx() : A,
                  tabIndex: -1,
                  ref: j,
                  className: p,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": se,
                  "data-y-position": le,
                  "data-lifted": ye && D.length > 1 && !c,
                  "data-x-position": Ce,
                  style: {
                    "--front-toast-height": `${
                      ((W = G[0]) == null ? void 0 : W.height) || 0
                    }px`,
                    "--width": `${pN}px`,
                    "--gap": `${C}px`,
                    ...E,
                    ...wN(m, g),
                  },
                  onBlur: (de) => {
                    re.current &&
                      !de.currentTarget.contains(de.relatedTarget) &&
                      ((re.current = !1),
                      V.current &&
                        (V.current.focus({ preventScroll: !0 }),
                        (V.current = null)));
                  },
                  onFocus: (de) => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      re.current ||
                      ((re.current = !0), (V.current = de.relatedTarget));
                  },
                  onMouseEnter: () => be(!0),
                  onMouseMove: () => be(!0),
                  onMouseLeave: () => {
                    oe || be(!1);
                  },
                  onDragEnd: () => be(!1),
                  onPointerDown: (de) => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      ge(!0);
                  },
                  onPointerUp: () => ge(!1),
                },
                D.filter(
                  (de) => (!de.position && ie === 0) || de.position === H
                ).map((de, Oe) => {
                  var ze, Xe;
                  return ne.createElement(xN, {
                    key: de.id,
                    icons: N,
                    index: Oe,
                    toast: de,
                    defaultRichColors: x,
                    duration:
                      (ze = w == null ? void 0 : w.duration) != null ? ze : R,
                    className: w == null ? void 0 : w.className,
                    descriptionClassName:
                      w == null ? void 0 : w.descriptionClassName,
                    invert: i,
                    visibleToasts: _,
                    closeButton:
                      (Xe = w == null ? void 0 : w.closeButton) != null
                        ? Xe
                        : d,
                    interacting: oe,
                    position: H,
                    style: w == null ? void 0 : w.style,
                    unstyled: w == null ? void 0 : w.unstyled,
                    classNames: w == null ? void 0 : w.classNames,
                    cancelButtonStyle: w == null ? void 0 : w.cancelButtonStyle,
                    actionButtonStyle: w == null ? void 0 : w.actionButtonStyle,
                    closeButtonAriaLabel:
                      w == null ? void 0 : w.closeButtonAriaLabel,
                    removeToast: O,
                    toasts: D.filter((mt) => mt.position == de.position),
                    heights: G.filter((mt) => mt.position == de.position),
                    setHeights: J,
                    expandByDefault: c,
                    gap: C,
                    expanded: ye,
                    swipeDirections: n.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  _N = ({ ...e }) => {
    const { theme: n = "system" } = mS();
    return S.jsx(SN, {
      theme: n,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...e,
    });
  },
  EN = 1,
  TN = 1e6;
let Om = 0;
function RN() {
  return (Om = (Om + 1) % Number.MAX_SAFE_INTEGER), Om.toString();
}
const Mm = new Map(),
  dx = (e) => {
    if (Mm.has(e)) return;
    const n = setTimeout(() => {
      Mm.delete(e), Ol({ type: "REMOVE_TOAST", toastId: e });
    }, TN);
    Mm.set(e, n);
  },
  AN = (e, n) => {
    switch (n.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [n.toast, ...e.toasts].slice(0, EN) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((a) =>
            a.id === n.toast.id ? { ...a, ...n.toast } : a
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: a } = n;
        return (
          a
            ? dx(a)
            : e.toasts.forEach((i) => {
                dx(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === a || a === void 0 ? { ...i, open: !1 } : i
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return n.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== n.toastId) };
    }
  },
  Hc = [];
let Fc = { toasts: [] };
function Ol(e) {
  (Fc = AN(Fc, e)),
    Hc.forEach((n) => {
      n(Fc);
    });
}
function CN({ ...e }) {
  const n = RN(),
    a = (o) => Ol({ type: "UPDATE_TOAST", toast: { ...o, id: n } }),
    i = () => Ol({ type: "DISMISS_TOAST", toastId: n });
  return (
    Ol({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: n,
        open: !0,
        onOpenChange: (o) => {
          o || i();
        },
      },
    }),
    { id: n, dismiss: i, update: a }
  );
}
function ON() {
  const [e, n] = v.useState(Fc);
  return (
    v.useEffect(
      () => (
        Hc.push(n),
        () => {
          const a = Hc.indexOf(n);
          a > -1 && Hc.splice(a, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: CN,
      dismiss: (a) => Ol({ type: "DISMISS_TOAST", toastId: a }),
    }
  );
}
function Ae(e, n, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), a === !1 || !o.defaultPrevented))
      return n == null ? void 0 : n(o);
  };
}
function hx(e, n) {
  if (typeof e == "function") return e(n);
  e != null && (e.current = n);
}
function Lf(...e) {
  return (n) => {
    let a = !1;
    const i = e.map((o) => {
      const u = hx(o, n);
      return !a && typeof u == "function" && (a = !0), u;
    });
    if (a)
      return () => {
        for (let o = 0; o < i.length; o++) {
          const u = i[o];
          typeof u == "function" ? u() : hx(e[o], null);
        }
      };
  };
}
function At(...e) {
  return v.useCallback(Lf(...e), e);
}
function MN(e, n) {
  const a = v.createContext(n),
    i = (u) => {
      const { children: c, ...d } = u,
        p = v.useMemo(() => d, Object.values(d));
      return S.jsx(a.Provider, { value: p, children: c });
    };
  i.displayName = e + "Provider";
  function o(u) {
    const c = v.useContext(a);
    if (c) return c;
    if (n !== void 0) return n;
    throw new Error(`\`${u}\` must be used within \`${e}\``);
  }
  return [i, o];
}
function si(e, n = []) {
  let a = [];
  function i(u, c) {
    const d = v.createContext(c),
      p = a.length;
    a = [...a, c];
    const m = (y) => {
      var A;
      const { scope: x, children: R, ...E } = y,
        _ = ((A = x == null ? void 0 : x[e]) == null ? void 0 : A[p]) || d,
        w = v.useMemo(() => E, Object.values(E));
      return S.jsx(_.Provider, { value: w, children: R });
    };
    m.displayName = u + "Provider";
    function g(y, x) {
      var _;
      const R = ((_ = x == null ? void 0 : x[e]) == null ? void 0 : _[p]) || d,
        E = v.useContext(R);
      if (E) return E;
      if (c !== void 0) return c;
      throw new Error(`\`${y}\` must be used within \`${u}\``);
    }
    return [m, g];
  }
  const o = () => {
    const u = a.map((c) => v.createContext(c));
    return function (d) {
      const p = (d == null ? void 0 : d[e]) || u;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...d, [e]: p } }), [d, p]);
    };
  };
  return (o.scopeName = e), [i, NN(o, ...n)];
}
function NN(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const a = () => {
    const i = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (u) {
      const c = i.reduce((d, { useScope: p, scopeName: m }) => {
        const y = p(u)[`__scope${m}`];
        return { ...d, ...y };
      }, {});
      return v.useMemo(() => ({ [`__scope${n.scopeName}`]: c }), [c]);
    };
  };
  return (a.scopeName = n.scopeName), a;
}
function eo(e) {
  const n = DN(e),
    a = v.forwardRef((i, o) => {
      const { children: u, ...c } = i,
        d = v.Children.toArray(u),
        p = d.find(jN);
      if (p) {
        const m = p.props.children,
          g = d.map((y) =>
            y === p
              ? v.Children.count(m) > 1
                ? v.Children.only(null)
                : v.isValidElement(m)
                ? m.props.children
                : null
              : y
          );
        return S.jsx(n, {
          ...c,
          ref: o,
          children: v.isValidElement(m) ? v.cloneElement(m, void 0, g) : null,
        });
      }
      return S.jsx(n, { ...c, ref: o, children: u });
    });
  return (a.displayName = `${e}.Slot`), a;
}
var zf = eo("Slot");
function DN(e) {
  const n = v.forwardRef((a, i) => {
    const { children: o, ...u } = a;
    if (v.isValidElement(o)) {
      const c = zN(o),
        d = LN(u, o.props);
      return (
        o.type !== v.Fragment && (d.ref = i ? Lf(i, c) : c),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return (n.displayName = `${e}.SlotClone`), n;
}
var PS = Symbol("radix.slottable");
function kN(e) {
  const n = ({ children: a }) => S.jsx(S.Fragment, { children: a });
  return (n.displayName = `${e}.Slottable`), (n.__radixId = PS), n;
}
function jN(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === PS
  );
}
function LN(e, n) {
  const a = { ...n };
  for (const i in n) {
    const o = e[i],
      u = n[i];
    /^on[A-Z]/.test(i)
      ? o && u
        ? (a[i] = (...d) => {
            const p = u(...d);
            return o(...d), p;
          })
        : o && (a[i] = o)
      : i === "style"
      ? (a[i] = { ...o, ...u })
      : i === "className" && (a[i] = [o, u].filter(Boolean).join(" "));
  }
  return { ...e, ...a };
}
function zN(e) {
  var i, o;
  let n =
      (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : i.get,
    a = n && "isReactWarning" in n && n.isReactWarning;
  return a
    ? e.ref
    : ((n =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (a = n && "isReactWarning" in n && n.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
function Jp(e) {
  const n = e + "CollectionProvider",
    [a, i] = si(n),
    [o, u] = a(n, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (_) => {
      const { scope: w, children: A } = _,
        C = ne.useRef(null),
        N = ne.useRef(new Map()).current;
      return S.jsx(o, { scope: w, itemMap: N, collectionRef: C, children: A });
    };
  c.displayName = n;
  const d = e + "CollectionSlot",
    p = eo(d),
    m = ne.forwardRef((_, w) => {
      const { scope: A, children: C } = _,
        N = u(d, A),
        k = At(w, N.collectionRef);
      return S.jsx(p, { ref: k, children: C });
    });
  m.displayName = d;
  const g = e + "CollectionItemSlot",
    y = "data-radix-collection-item",
    x = eo(g),
    R = ne.forwardRef((_, w) => {
      const { scope: A, children: C, ...N } = _,
        k = ne.useRef(null),
        D = At(w, k),
        I = u(g, A);
      return (
        ne.useEffect(
          () => (
            I.itemMap.set(k, { ref: k, ...N }), () => void I.itemMap.delete(k)
          )
        ),
        S.jsx(x, { [y]: "", ref: D, children: C })
      );
    });
  R.displayName = g;
  function E(_) {
    const w = u(e + "CollectionConsumer", _);
    return ne.useCallback(() => {
      const C = w.collectionRef.current;
      if (!C) return [];
      const N = Array.from(C.querySelectorAll(`[${y}]`));
      return Array.from(w.itemMap.values()).sort(
        (I, Y) => N.indexOf(I.ref.current) - N.indexOf(Y.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: c, Slot: m, ItemSlot: R }, E, i];
}
var UN = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  st = UN.reduce((e, n) => {
    const a = eo(`Primitive.${n}`),
      i = v.forwardRef((o, u) => {
        const { asChild: c, ...d } = o,
          p = c ? a : n;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          S.jsx(p, { ...d, ref: u })
        );
      });
    return (i.displayName = `Primitive.${n}`), { ...e, [n]: i };
  }, {});
function eg(e, n) {
  e && Of.flushSync(() => e.dispatchEvent(n));
}
function Ln(e) {
  const n = v.useRef(e);
  return (
    v.useEffect(() => {
      n.current = e;
    }),
    v.useMemo(
      () =>
        (...a) => {
          var i;
          return (i = n.current) == null ? void 0 : i.call(n, ...a);
        },
      []
    )
  );
}
function PN(e, n = globalThis == null ? void 0 : globalThis.document) {
  const a = Ln(e);
  v.useEffect(() => {
    const i = (o) => {
      o.key === "Escape" && a(o);
    };
    return (
      n.addEventListener("keydown", i, { capture: !0 }),
      () => n.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [a, n]);
}
var BN = "DismissableLayer",
  up = "dismissableLayer.update",
  VN = "dismissableLayer.pointerDownOutside",
  HN = "dismissableLayer.focusOutside",
  mx,
  BS = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ql = v.forwardRef((e, n) => {
    const {
        disableOutsidePointerEvents: a = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: d,
        ...p
      } = e,
      m = v.useContext(BS),
      [g, y] = v.useState(null),
      x =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, R] = v.useState({}),
      E = At(n, (Y) => y(Y)),
      _ = Array.from(m.layers),
      [w] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = _.indexOf(w),
      C = g ? _.indexOf(g) : -1,
      N = m.layersWithOutsidePointerEventsDisabled.size > 0,
      k = C >= A,
      D = qN((Y) => {
        const G = Y.target,
          J = [...m.branches].some((ye) => ye.contains(G));
        !k ||
          J ||
          (o == null || o(Y),
          c == null || c(Y),
          Y.defaultPrevented || d == null || d());
      }, x),
      I = IN((Y) => {
        const G = Y.target;
        [...m.branches].some((ye) => ye.contains(G)) ||
          (u == null || u(Y),
          c == null || c(Y),
          Y.defaultPrevented || d == null || d());
      }, x);
    return (
      PN((Y) => {
        C === m.layers.size - 1 &&
          (i == null || i(Y),
          !Y.defaultPrevented && d && (Y.preventDefault(), d()));
      }, x),
      v.useEffect(() => {
        if (g)
          return (
            a &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((mx = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            px(),
            () => {
              a &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = mx);
            }
          );
      }, [g, x, a, m]),
      v.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            px());
        },
        [g, m]
      ),
      v.useEffect(() => {
        const Y = () => R({});
        return (
          document.addEventListener(up, Y),
          () => document.removeEventListener(up, Y)
        );
      }, []),
      S.jsx(st.div, {
        ...p,
        ref: E,
        style: {
          pointerEvents: N ? (k ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ae(e.onFocusCapture, I.onFocusCapture),
        onBlurCapture: Ae(e.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: Ae(
          e.onPointerDownCapture,
          D.onPointerDownCapture
        ),
      })
    );
  });
Ql.displayName = BN;
var FN = "DismissableLayerBranch",
  VS = v.forwardRef((e, n) => {
    const a = v.useContext(BS),
      i = v.useRef(null),
      o = At(n, i);
    return (
      v.useEffect(() => {
        const u = i.current;
        if (u)
          return (
            a.branches.add(u),
            () => {
              a.branches.delete(u);
            }
          );
      }, [a.branches]),
      S.jsx(st.div, { ...e, ref: o })
    );
  });
VS.displayName = FN;
function qN(e, n = globalThis == null ? void 0 : globalThis.document) {
  const a = Ln(e),
    i = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const u = (d) => {
          if (d.target && !i.current) {
            let p = function () {
              HS(VN, a, m, { discrete: !0 });
            };
            const m = { originalEvent: d };
            d.pointerType === "touch"
              ? (n.removeEventListener("click", o.current),
                (o.current = p),
                n.addEventListener("click", o.current, { once: !0 }))
              : p();
          } else n.removeEventListener("click", o.current);
          i.current = !1;
        },
        c = window.setTimeout(() => {
          n.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        window.clearTimeout(c),
          n.removeEventListener("pointerdown", u),
          n.removeEventListener("click", o.current);
      };
    }, [n, a]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function IN(e, n = globalThis == null ? void 0 : globalThis.document) {
  const a = Ln(e),
    i = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (u) => {
        u.target &&
          !i.current &&
          HS(HN, a, { originalEvent: u }, { discrete: !1 });
      };
      return (
        n.addEventListener("focusin", o),
        () => n.removeEventListener("focusin", o)
      );
    }, [n, a]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function px() {
  const e = new CustomEvent(up);
  document.dispatchEvent(e);
}
function HS(e, n, a, { discrete: i }) {
  const o = a.originalEvent.target,
    u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: a });
  n && o.addEventListener(e, n, { once: !0 }),
    i ? eg(o, u) : o.dispatchEvent(u);
}
var $N = Ql,
  GN = VS,
  fa = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  YN = "Portal",
  Wl = v.forwardRef((e, n) => {
    var d;
    const { container: a, ...i } = e,
      [o, u] = v.useState(!1);
    fa(() => u(!0), []);
    const c =
      a ||
      (o &&
        ((d = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : d.body));
    return c ? dS.createPortal(S.jsx(st.div, { ...i, ref: n }), c) : null;
  });
Wl.displayName = YN;
function ZN(e, n) {
  return v.useReducer((a, i) => n[a][i] ?? a, e);
}
var fr = (e) => {
  const { present: n, children: a } = e,
    i = KN(n),
    o =
      typeof a == "function" ? a({ present: i.isPresent }) : v.Children.only(a),
    u = At(i.ref, XN(o));
  return typeof a == "function" || i.isPresent
    ? v.cloneElement(o, { ref: u })
    : null;
};
fr.displayName = "Presence";
function KN(e) {
  const [n, a] = v.useState(),
    i = v.useRef(null),
    o = v.useRef(e),
    u = v.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [d, p] = ZN(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const m = Oc(i.current);
      u.current = d === "mounted" ? m : "none";
    }, [d]),
    fa(() => {
      const m = i.current,
        g = o.current;
      if (g !== e) {
        const x = u.current,
          R = Oc(m);
        e
          ? p("MOUNT")
          : R === "none" || (m == null ? void 0 : m.display) === "none"
          ? p("UNMOUNT")
          : p(g && x !== R ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, p]),
    fa(() => {
      if (n) {
        let m;
        const g = n.ownerDocument.defaultView ?? window,
          y = (R) => {
            const _ = Oc(i.current).includes(R.animationName);
            if (R.target === n && _ && (p("ANIMATION_END"), !o.current)) {
              const w = n.style.animationFillMode;
              (n.style.animationFillMode = "forwards"),
                (m = g.setTimeout(() => {
                  n.style.animationFillMode === "forwards" &&
                    (n.style.animationFillMode = w);
                }));
            }
          },
          x = (R) => {
            R.target === n && (u.current = Oc(i.current));
          };
        return (
          n.addEventListener("animationstart", x),
          n.addEventListener("animationcancel", y),
          n.addEventListener("animationend", y),
          () => {
            g.clearTimeout(m),
              n.removeEventListener("animationstart", x),
              n.removeEventListener("animationcancel", y),
              n.removeEventListener("animationend", y);
          }
        );
      } else p("ANIMATION_END");
    }, [n, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(d),
      ref: v.useCallback((m) => {
        (i.current = m ? getComputedStyle(m) : null), a(m);
      }, []),
    }
  );
}
function Oc(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function XN(e) {
  var i, o;
  let n =
      (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : i.get,
    a = n && "isReactWarning" in n && n.isReactWarning;
  return a
    ? e.ref
    : ((n =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (a = n && "isReactWarning" in n && n.isReactWarning),
      a ? e.props.ref : e.props.ref || e.ref);
}
var QN = Xw[" useInsertionEffect ".trim().toString()] || fa;
function Jl({ prop: e, defaultProp: n, onChange: a = () => {}, caller: i }) {
  const [o, u, c] = WN({ defaultProp: n, onChange: a }),
    d = e !== void 0,
    p = d ? e : o;
  {
    const g = v.useRef(e !== void 0);
    v.useEffect(() => {
      const y = g.current;
      y !== d &&
        console.warn(
          `${i} is changing from ${y ? "controlled" : "uncontrolled"} to ${
            d ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (g.current = d);
    }, [d, i]);
  }
  const m = v.useCallback(
    (g) => {
      var y;
      if (d) {
        const x = JN(g) ? g(e) : g;
        x !== e && ((y = c.current) == null || y.call(c, x));
      } else u(g);
    },
    [d, e, u, c]
  );
  return [p, m];
}
function WN({ defaultProp: e, onChange: n }) {
  const [a, i] = v.useState(e),
    o = v.useRef(a),
    u = v.useRef(n);
  return (
    QN(() => {
      u.current = n;
    }, [n]),
    v.useEffect(() => {
      var c;
      o.current !== a &&
        ((c = u.current) == null || c.call(u, a), (o.current = a));
    }, [a, o]),
    [a, i, u]
  );
}
function JN(e) {
  return typeof e == "function";
}
var eD = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  tD = "VisuallyHidden",
  Uf = v.forwardRef((e, n) =>
    S.jsx(st.span, { ...e, ref: n, style: { ...eD, ...e.style } })
  );
Uf.displayName = tD;
var nD = Uf,
  tg = "ToastProvider",
  [ng, rD, aD] = Jp("Toast"),
  [FS, UP] = si("Toast", [aD]),
  [iD, Pf] = FS(tg),
  qS = (e) => {
    const {
        __scopeToast: n,
        label: a = "Notification",
        duration: i = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: u = 50,
        children: c,
      } = e,
      [d, p] = v.useState(null),
      [m, g] = v.useState(0),
      y = v.useRef(!1),
      x = v.useRef(!1);
    return (
      a.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${tg}\`. Expected non-empty \`string\`.`
        ),
      S.jsx(ng.Provider, {
        scope: n,
        children: S.jsx(iD, {
          scope: n,
          label: a,
          duration: i,
          swipeDirection: o,
          swipeThreshold: u,
          toastCount: m,
          viewport: d,
          onViewportChange: p,
          onToastAdd: v.useCallback(() => g((R) => R + 1), []),
          onToastRemove: v.useCallback(() => g((R) => R - 1), []),
          isFocusedToastEscapeKeyDownRef: y,
          isClosePausedRef: x,
          children: c,
        }),
      })
    );
  };
qS.displayName = tg;
var IS = "ToastViewport",
  sD = ["F8"],
  cp = "toast.viewportPause",
  fp = "toast.viewportResume",
  $S = v.forwardRef((e, n) => {
    const {
        __scopeToast: a,
        hotkey: i = sD,
        label: o = "Notifications ({hotkey})",
        ...u
      } = e,
      c = Pf(IS, a),
      d = rD(a),
      p = v.useRef(null),
      m = v.useRef(null),
      g = v.useRef(null),
      y = v.useRef(null),
      x = At(n, y, c.onViewportChange),
      R = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = c.toastCount > 0;
    v.useEffect(() => {
      const w = (A) => {
        var N;
        i.length !== 0 &&
          i.every((k) => A[k] || A.code === k) &&
          ((N = y.current) == null || N.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [i]),
      v.useEffect(() => {
        const w = p.current,
          A = y.current;
        if (E && w && A) {
          const C = () => {
              if (!c.isClosePausedRef.current) {
                const I = new CustomEvent(cp);
                A.dispatchEvent(I), (c.isClosePausedRef.current = !0);
              }
            },
            N = () => {
              if (c.isClosePausedRef.current) {
                const I = new CustomEvent(fp);
                A.dispatchEvent(I), (c.isClosePausedRef.current = !1);
              }
            },
            k = (I) => {
              !w.contains(I.relatedTarget) && N();
            },
            D = () => {
              w.contains(document.activeElement) || N();
            };
          return (
            w.addEventListener("focusin", C),
            w.addEventListener("focusout", k),
            w.addEventListener("pointermove", C),
            w.addEventListener("pointerleave", D),
            window.addEventListener("blur", C),
            window.addEventListener("focus", N),
            () => {
              w.removeEventListener("focusin", C),
                w.removeEventListener("focusout", k),
                w.removeEventListener("pointermove", C),
                w.removeEventListener("pointerleave", D),
                window.removeEventListener("blur", C),
                window.removeEventListener("focus", N);
            }
          );
        }
      }, [E, c.isClosePausedRef]);
    const _ = v.useCallback(
      ({ tabbingDirection: w }) => {
        const C = d().map((N) => {
          const k = N.ref.current,
            D = [k, ...bD(k)];
          return w === "forwards" ? D : D.reverse();
        });
        return (w === "forwards" ? C.reverse() : C).flat();
      },
      [d]
    );
    return (
      v.useEffect(() => {
        const w = y.current;
        if (w) {
          const A = (C) => {
            var D, I, Y;
            const N = C.altKey || C.ctrlKey || C.metaKey;
            if (C.key === "Tab" && !N) {
              const G = document.activeElement,
                J = C.shiftKey;
              if (C.target === w && J) {
                (D = m.current) == null || D.focus();
                return;
              }
              const oe = _({ tabbingDirection: J ? "backwards" : "forwards" }),
                ge = oe.findIndex((se) => se === G);
              Nm(oe.slice(ge + 1))
                ? C.preventDefault()
                : J
                ? (I = m.current) == null || I.focus()
                : (Y = g.current) == null || Y.focus();
            }
          };
          return (
            w.addEventListener("keydown", A),
            () => w.removeEventListener("keydown", A)
          );
        }
      }, [d, _]),
      S.jsxs(GN, {
        ref: p,
        role: "region",
        "aria-label": o.replace("{hotkey}", R),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            S.jsx(dp, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const w = _({ tabbingDirection: "forwards" });
                Nm(w);
              },
            }),
          S.jsx(ng.Slot, {
            scope: a,
            children: S.jsx(st.ol, { tabIndex: -1, ...u, ref: x }),
          }),
          E &&
            S.jsx(dp, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const w = _({ tabbingDirection: "backwards" });
                Nm(w);
              },
            }),
        ],
      })
    );
  });
$S.displayName = IS;
var GS = "ToastFocusProxy",
  dp = v.forwardRef((e, n) => {
    const { __scopeToast: a, onFocusFromOutsideViewport: i, ...o } = e,
      u = Pf(GS, a);
    return S.jsx(Uf, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: n,
      style: { position: "fixed" },
      onFocus: (c) => {
        var m;
        const d = c.relatedTarget;
        !((m = u.viewport) != null && m.contains(d)) && i();
      },
    });
  });
dp.displayName = GS;
var eu = "Toast",
  oD = "toast.swipeStart",
  lD = "toast.swipeMove",
  uD = "toast.swipeCancel",
  cD = "toast.swipeEnd",
  YS = v.forwardRef((e, n) => {
    const { forceMount: a, open: i, defaultOpen: o, onOpenChange: u, ...c } = e,
      [d, p] = Jl({ prop: i, defaultProp: o ?? !0, onChange: u, caller: eu });
    return S.jsx(fr, {
      present: a || d,
      children: S.jsx(hD, {
        open: d,
        ...c,
        ref: n,
        onClose: () => p(!1),
        onPause: Ln(e.onPause),
        onResume: Ln(e.onResume),
        onSwipeStart: Ae(e.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ae(e.onSwipeMove, (m) => {
          const { x: g, y } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${y}px`
            );
        }),
        onSwipeCancel: Ae(e.onSwipeCancel, (m) => {
          m.currentTarget.setAttribute("data-swipe", "cancel"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Ae(e.onSwipeEnd, (m) => {
          const { x: g, y } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${y}px`
            ),
            p(!1);
        }),
      }),
    });
  });
YS.displayName = eu;
var [fD, dD] = FS(eu, { onClose() {} }),
  hD = v.forwardRef((e, n) => {
    const {
        __scopeToast: a,
        type: i = "foreground",
        duration: o,
        open: u,
        onClose: c,
        onEscapeKeyDown: d,
        onPause: p,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: y,
        onSwipeCancel: x,
        onSwipeEnd: R,
        ...E
      } = e,
      _ = Pf(eu, a),
      [w, A] = v.useState(null),
      C = At(n, (se) => A(se)),
      N = v.useRef(null),
      k = v.useRef(null),
      D = o || _.duration,
      I = v.useRef(0),
      Y = v.useRef(D),
      G = v.useRef(0),
      { onToastAdd: J, onToastRemove: ye } = _,
      be = Ln(() => {
        var fe;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((fe = _.viewport) == null || fe.focus()),
          c();
      }),
      oe = v.useCallback(
        (se) => {
          !se ||
            se === 1 / 0 ||
            (window.clearTimeout(G.current),
            (I.current = new Date().getTime()),
            (G.current = window.setTimeout(be, se)));
        },
        [be]
      );
    v.useEffect(() => {
      const se = _.viewport;
      if (se) {
        const fe = () => {
            oe(Y.current), m == null || m();
          },
          j = () => {
            const Q = new Date().getTime() - I.current;
            (Y.current = Y.current - Q),
              window.clearTimeout(G.current),
              p == null || p();
          };
        return (
          se.addEventListener(cp, j),
          se.addEventListener(fp, fe),
          () => {
            se.removeEventListener(cp, j), se.removeEventListener(fp, fe);
          }
        );
      }
    }, [_.viewport, D, p, m, oe]),
      v.useEffect(() => {
        u && !_.isClosePausedRef.current && oe(D);
      }, [u, D, _.isClosePausedRef, oe]),
      v.useEffect(() => (J(), () => ye()), [J, ye]);
    const ge = v.useMemo(() => (w ? e_(w) : null), [w]);
    return _.viewport
      ? S.jsxs(S.Fragment, {
          children: [
            ge &&
              S.jsx(mD, {
                __scopeToast: a,
                role: "status",
                "aria-live": i === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: ge,
              }),
            S.jsx(fD, {
              scope: a,
              onClose: be,
              children: Of.createPortal(
                S.jsx(ng.ItemSlot, {
                  scope: a,
                  children: S.jsx($N, {
                    asChild: !0,
                    onEscapeKeyDown: Ae(d, () => {
                      _.isFocusedToastEscapeKeyDownRef.current || be(),
                        (_.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: S.jsx(st.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": u ? "open" : "closed",
                      "data-swipe-direction": _.swipeDirection,
                      ...E,
                      ref: C,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ae(e.onKeyDown, (se) => {
                        se.key === "Escape" &&
                          (d == null || d(se.nativeEvent),
                          se.nativeEvent.defaultPrevented ||
                            ((_.isFocusedToastEscapeKeyDownRef.current = !0),
                            be()));
                      }),
                      onPointerDown: Ae(e.onPointerDown, (se) => {
                        se.button === 0 &&
                          (N.current = { x: se.clientX, y: se.clientY });
                      }),
                      onPointerMove: Ae(e.onPointerMove, (se) => {
                        if (!N.current) return;
                        const fe = se.clientX - N.current.x,
                          j = se.clientY - N.current.y,
                          Q = !!k.current,
                          V = ["left", "right"].includes(_.swipeDirection),
                          re = ["left", "up"].includes(_.swipeDirection)
                            ? Math.min
                            : Math.max,
                          O = V ? re(0, fe) : 0,
                          H = V ? 0 : re(0, j),
                          ie = se.pointerType === "touch" ? 10 : 2,
                          W = { x: O, y: H },
                          le = { originalEvent: se, delta: W };
                        Q
                          ? ((k.current = W), Mc(lD, y, le, { discrete: !1 }))
                          : gx(W, _.swipeDirection, ie)
                          ? ((k.current = W),
                            Mc(oD, g, le, { discrete: !1 }),
                            se.target.setPointerCapture(se.pointerId))
                          : (Math.abs(fe) > ie || Math.abs(j) > ie) &&
                            (N.current = null);
                      }),
                      onPointerUp: Ae(e.onPointerUp, (se) => {
                        const fe = k.current,
                          j = se.target;
                        if (
                          (j.hasPointerCapture(se.pointerId) &&
                            j.releasePointerCapture(se.pointerId),
                          (k.current = null),
                          (N.current = null),
                          fe)
                        ) {
                          const Q = se.currentTarget,
                            V = { originalEvent: se, delta: fe };
                          gx(fe, _.swipeDirection, _.swipeThreshold)
                            ? Mc(cD, R, V, { discrete: !0 })
                            : Mc(uD, x, V, { discrete: !0 }),
                            Q.addEventListener(
                              "click",
                              (re) => re.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                _.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  mD = (e) => {
    const { __scopeToast: n, children: a, ...i } = e,
      o = Pf(eu, n),
      [u, c] = v.useState(!1),
      [d, p] = v.useState(!1);
    return (
      yD(() => c(!0)),
      v.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m);
      }, []),
      d
        ? null
        : S.jsx(Wl, {
            asChild: !0,
            children: S.jsx(Uf, {
              ...i,
              children:
                u && S.jsxs(S.Fragment, { children: [o.label, " ", a] }),
            }),
          })
    );
  },
  pD = "ToastTitle",
  ZS = v.forwardRef((e, n) => {
    const { __scopeToast: a, ...i } = e;
    return S.jsx(st.div, { ...i, ref: n });
  });
ZS.displayName = pD;
var gD = "ToastDescription",
  KS = v.forwardRef((e, n) => {
    const { __scopeToast: a, ...i } = e;
    return S.jsx(st.div, { ...i, ref: n });
  });
KS.displayName = gD;
var XS = "ToastAction",
  QS = v.forwardRef((e, n) => {
    const { altText: a, ...i } = e;
    return a.trim()
      ? S.jsx(JS, {
          altText: a,
          asChild: !0,
          children: S.jsx(rg, { ...i, ref: n }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${XS}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
QS.displayName = XS;
var WS = "ToastClose",
  rg = v.forwardRef((e, n) => {
    const { __scopeToast: a, ...i } = e,
      o = dD(WS, a);
    return S.jsx(JS, {
      asChild: !0,
      children: S.jsx(st.button, {
        type: "button",
        ...i,
        ref: n,
        onClick: Ae(e.onClick, o.onClose),
      }),
    });
  });
rg.displayName = WS;
var JS = v.forwardRef((e, n) => {
  const { __scopeToast: a, altText: i, ...o } = e;
  return S.jsx(st.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": i || void 0,
    ...o,
    ref: n,
  });
});
function e_(e) {
  const n = [];
  return (
    Array.from(e.childNodes).forEach((i) => {
      if (
        (i.nodeType === i.TEXT_NODE && i.textContent && n.push(i.textContent),
        vD(i))
      ) {
        const o = i.ariaHidden || i.hidden || i.style.display === "none",
          u = i.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (u) {
            const c = i.dataset.radixToastAnnounceAlt;
            c && n.push(c);
          } else n.push(...e_(i));
      }
    }),
    n
  );
}
function Mc(e, n, a, { discrete: i }) {
  const o = a.originalEvent.currentTarget,
    u = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: a });
  n && o.addEventListener(e, n, { once: !0 }),
    i ? eg(o, u) : o.dispatchEvent(u);
}
var gx = (e, n, a = 0) => {
  const i = Math.abs(e.x),
    o = Math.abs(e.y),
    u = i > o;
  return n === "left" || n === "right" ? u && i > a : !u && o > a;
};
function yD(e = () => {}) {
  const n = Ln(e);
  fa(() => {
    let a = 0,
      i = 0;
    return (
      (a = window.requestAnimationFrame(
        () => (i = window.requestAnimationFrame(n))
      )),
      () => {
        window.cancelAnimationFrame(a), window.cancelAnimationFrame(i);
      }
    );
  }, [n]);
}
function vD(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function bD(e) {
  const n = [],
    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const o = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || o
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) n.push(a.currentNode);
  return n;
}
function Nm(e) {
  const n = document.activeElement;
  return e.some((a) =>
    a === n ? !0 : (a.focus(), document.activeElement !== n)
  );
}
var xD = qS,
  t_ = $S,
  n_ = YS,
  r_ = ZS,
  a_ = KS,
  i_ = QS,
  s_ = rg;
function o_(e) {
  var n,
    a,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (n = 0; n < o; n++)
        e[n] && (a = o_(e[n])) && (i && (i += " "), (i += a));
    } else for (a in e) e[a] && (i && (i += " "), (i += a));
  return i;
}
function l_() {
  for (var e, n, a = 0, i = "", o = arguments.length; a < o; a++)
    (e = arguments[a]) && (n = o_(e)) && (i && (i += " "), (i += n));
  return i;
}
const yx = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  vx = l_,
  ag = (e, n) => (a) => {
    var i;
    if ((n == null ? void 0 : n.variants) == null)
      return vx(
        e,
        a == null ? void 0 : a.class,
        a == null ? void 0 : a.className
      );
    const { variants: o, defaultVariants: u } = n,
      c = Object.keys(o).map((m) => {
        const g = a == null ? void 0 : a[m],
          y = u == null ? void 0 : u[m];
        if (g === null) return null;
        const x = yx(g) || yx(y);
        return o[m][x];
      }),
      d =
        a &&
        Object.entries(a).reduce((m, g) => {
          let [y, x] = g;
          return x === void 0 || (m[y] = x), m;
        }, {}),
      p =
        n == null || (i = n.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((m, g) => {
              let { class: y, className: x, ...R } = g;
              return Object.entries(R).every((E) => {
                let [_, w] = E;
                return Array.isArray(w)
                  ? w.includes({ ...u, ...d }[_])
                  : { ...u, ...d }[_] === w;
              })
                ? [...m, y, x]
                : m;
            }, []);
    return vx(
      e,
      c,
      p,
      a == null ? void 0 : a.class,
      a == null ? void 0 : a.className
    );
  };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wD = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  SD = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, a, i) =>
      i ? i.toUpperCase() : a.toLowerCase()
    ),
  bx = (e) => {
    const n = SD(e);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  u_ = (...e) =>
    e
      .filter((n, a, i) => !!n && n.trim() !== "" && i.indexOf(n) === a)
      .join(" ")
      .trim(),
  _D = (e) => {
    for (const n in e)
      if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
  };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ED = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const TD = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: n = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: u,
      iconNode: c,
      ...d
    },
    p
  ) =>
    v.createElement(
      "svg",
      {
        ref: p,
        ...ED,
        width: n,
        height: n,
        stroke: e,
        strokeWidth: i ? (Number(a) * 24) / Number(n) : a,
        className: u_("lucide", o),
        ...(!u && !_D(d) && { "aria-hidden": "true" }),
        ...d,
      },
      [
        ...c.map(([m, g]) => v.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dr = (e, n) => {
  const a = v.forwardRef(({ className: i, ...o }, u) =>
    v.createElement(TD, {
      ref: u,
      iconNode: n,
      className: u_(`lucide-${wD(bx(e))}`, `lucide-${e}`, i),
      ...o,
    })
  );
  return (a.displayName = bx(e)), a;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RD = [
    [
      "path",
      {
        d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
        key: "57tc96",
      },
    ],
  ],
  AD = dr("audio-waveform", RD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CD = [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    [
      "rect",
      { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
    ],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ],
  gl = dr("bot", CD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OD = [
    ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
    ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
  ],
  MD = dr("chevrons-up-down", OD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ND = [
    [
      "path",
      {
        d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
        key: "11bfej",
      },
    ],
  ],
  DD = dr("command", ND);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kD = [
    ["path", { d: "M7 2h10", key: "nczekb" }],
    ["path", { d: "M5 6h14", key: "u2x4p" }],
    [
      "rect",
      { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" },
    ],
  ],
  jD = dr("gallery-vertical-end", kD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LD = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  zD = dr("log-out", LD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UD = [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ],
  PD = dr("moon", UD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BD = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ],
  VD = dr("panel-left", BD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HD = [
    ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
    ["path", { d: "M11 13h4", key: "1p7l4v" }],
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
  ],
  Ri = dr("square-terminal", HD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FD = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  qD = dr("sun", FD);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ID = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  c_ = dr("x", ID),
  ig = "-",
  $D = (e) => {
    const n = YD(e),
      { conflictingClassGroups: a, conflictingClassGroupModifiers: i } = e;
    return {
      getClassGroupId: (c) => {
        const d = c.split(ig);
        return d[0] === "" && d.length !== 1 && d.shift(), f_(d, n) || GD(c);
      },
      getConflictingClassGroupIds: (c, d) => {
        const p = a[c] || [];
        return d && i[c] ? [...p, ...i[c]] : p;
      },
    };
  },
  f_ = (e, n) => {
    var c;
    if (e.length === 0) return n.classGroupId;
    const a = e[0],
      i = n.nextPart.get(a),
      o = i ? f_(e.slice(1), i) : void 0;
    if (o) return o;
    if (n.validators.length === 0) return;
    const u = e.join(ig);
    return (c = n.validators.find(({ validator: d }) => d(u))) == null
      ? void 0
      : c.classGroupId;
  },
  xx = /^\[(.+)\]$/,
  GD = (e) => {
    if (xx.test(e)) {
      const n = xx.exec(e)[1],
        a = n == null ? void 0 : n.substring(0, n.indexOf(":"));
      if (a) return "arbitrary.." + a;
    }
  },
  YD = (e) => {
    const { theme: n, classGroups: a } = e,
      i = { nextPart: new Map(), validators: [] };
    for (const o in a) hp(a[o], i, o, n);
    return i;
  },
  hp = (e, n, a, i) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const u = o === "" ? n : wx(n, o);
        u.classGroupId = a;
        return;
      }
      if (typeof o == "function") {
        if (ZD(o)) {
          hp(o(i), n, a, i);
          return;
        }
        n.validators.push({ validator: o, classGroupId: a });
        return;
      }
      Object.entries(o).forEach(([u, c]) => {
        hp(c, wx(n, u), a, i);
      });
    });
  },
  wx = (e, n) => {
    let a = e;
    return (
      n.split(ig).forEach((i) => {
        a.nextPart.has(i) ||
          a.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (a = a.nextPart.get(i));
      }),
      a
    );
  },
  ZD = (e) => e.isThemeGetter,
  KD = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      a = new Map(),
      i = new Map();
    const o = (u, c) => {
      a.set(u, c), n++, n > e && ((n = 0), (i = a), (a = new Map()));
    };
    return {
      get(u) {
        let c = a.get(u);
        if (c !== void 0) return c;
        if ((c = i.get(u)) !== void 0) return o(u, c), c;
      },
      set(u, c) {
        a.has(u) ? a.set(u, c) : o(u, c);
      },
    };
  },
  mp = "!",
  pp = ":",
  XD = pp.length,
  QD = (e) => {
    const { prefix: n, experimentalParseClassName: a } = e;
    let i = (o) => {
      const u = [];
      let c = 0,
        d = 0,
        p = 0,
        m;
      for (let E = 0; E < o.length; E++) {
        let _ = o[E];
        if (c === 0 && d === 0) {
          if (_ === pp) {
            u.push(o.slice(p, E)), (p = E + XD);
            continue;
          }
          if (_ === "/") {
            m = E;
            continue;
          }
        }
        _ === "[" ? c++ : _ === "]" ? c-- : _ === "(" ? d++ : _ === ")" && d--;
      }
      const g = u.length === 0 ? o : o.substring(p),
        y = WD(g),
        x = y !== g,
        R = m && m > p ? m - p : void 0;
      return {
        modifiers: u,
        hasImportantModifier: x,
        baseClassName: y,
        maybePostfixModifierPosition: R,
      };
    };
    if (n) {
      const o = n + pp,
        u = i;
      i = (c) =>
        c.startsWith(o)
          ? u(c.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: c,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (a) {
      const o = i;
      i = (u) => a({ className: u, parseClassName: o });
    }
    return i;
  },
  WD = (e) =>
    e.endsWith(mp)
      ? e.substring(0, e.length - 1)
      : e.startsWith(mp)
      ? e.substring(1)
      : e,
  JD = (e) => {
    const n = Object.fromEntries(e.orderSensitiveModifiers.map((i) => [i, !0]));
    return (i) => {
      if (i.length <= 1) return i;
      const o = [];
      let u = [];
      return (
        i.forEach((c) => {
          c[0] === "[" || n[c] ? (o.push(...u.sort(), c), (u = [])) : u.push(c);
        }),
        o.push(...u.sort()),
        o
      );
    };
  },
  e2 = (e) => ({
    cache: KD(e.cacheSize),
    parseClassName: QD(e),
    sortModifiers: JD(e),
    ...$D(e),
  }),
  t2 = /\s+/,
  n2 = (e, n) => {
    const {
        parseClassName: a,
        getClassGroupId: i,
        getConflictingClassGroupIds: o,
        sortModifiers: u,
      } = n,
      c = [],
      d = e.trim().split(t2);
    let p = "";
    for (let m = d.length - 1; m >= 0; m -= 1) {
      const g = d[m],
        {
          isExternal: y,
          modifiers: x,
          hasImportantModifier: R,
          baseClassName: E,
          maybePostfixModifierPosition: _,
        } = a(g);
      if (y) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let w = !!_,
        A = i(w ? E.substring(0, _) : E);
      if (!A) {
        if (!w) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((A = i(E)), !A)) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        w = !1;
      }
      const C = u(x).join(":"),
        N = R ? C + mp : C,
        k = N + A;
      if (c.includes(k)) continue;
      c.push(k);
      const D = o(A, w);
      for (let I = 0; I < D.length; ++I) {
        const Y = D[I];
        c.push(N + Y);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function r2() {
  let e = 0,
    n,
    a,
    i = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (a = d_(n)) && (i && (i += " "), (i += a));
  return i;
}
const d_ = (e) => {
  if (typeof e == "string") return e;
  let n,
    a = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (n = d_(e[i])) && (a && (a += " "), (a += n));
  return a;
};
function a2(e, ...n) {
  let a,
    i,
    o,
    u = c;
  function c(p) {
    const m = n.reduce((g, y) => y(g), e());
    return (a = e2(m)), (i = a.cache.get), (o = a.cache.set), (u = d), d(p);
  }
  function d(p) {
    const m = i(p);
    if (m) return m;
    const g = n2(p, a);
    return o(p, g), g;
  }
  return function () {
    return u(r2.apply(null, arguments));
  };
}
const Bt = (e) => {
    const n = (a) => a[e] || [];
    return (n.isThemeGetter = !0), n;
  },
  h_ = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  m_ = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  i2 = /^\d+\/\d+$/,
  s2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  o2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  l2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  u2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  c2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ks = (e) => i2.test(e),
  qe = (e) => !!e && !Number.isNaN(Number(e)),
  Ha = (e) => !!e && Number.isInteger(Number(e)),
  Dm = (e) => e.endsWith("%") && qe(e.slice(0, -1)),
  Jr = (e) => s2.test(e),
  f2 = () => !0,
  d2 = (e) => o2.test(e) && !l2.test(e),
  p_ = () => !1,
  h2 = (e) => u2.test(e),
  m2 = (e) => c2.test(e),
  p2 = (e) => !Se(e) && !_e(e),
  g2 = (e) => uo(e, v_, p_),
  Se = (e) => h_.test(e),
  Ai = (e) => uo(e, b_, d2),
  km = (e) => uo(e, w2, qe),
  Sx = (e) => uo(e, g_, p_),
  y2 = (e) => uo(e, y_, m2),
  Nc = (e) => uo(e, x_, h2),
  _e = (e) => m_.test(e),
  yl = (e) => co(e, b_),
  v2 = (e) => co(e, S2),
  _x = (e) => co(e, g_),
  b2 = (e) => co(e, v_),
  x2 = (e) => co(e, y_),
  Dc = (e) => co(e, x_, !0),
  uo = (e, n, a) => {
    const i = h_.exec(e);
    return i ? (i[1] ? n(i[1]) : a(i[2])) : !1;
  },
  co = (e, n, a = !1) => {
    const i = m_.exec(e);
    return i ? (i[1] ? n(i[1]) : a) : !1;
  },
  g_ = (e) => e === "position" || e === "percentage",
  y_ = (e) => e === "image" || e === "url",
  v_ = (e) => e === "length" || e === "size" || e === "bg-size",
  b_ = (e) => e === "length",
  w2 = (e) => e === "number",
  S2 = (e) => e === "family-name",
  x_ = (e) => e === "shadow",
  _2 = () => {
    const e = Bt("color"),
      n = Bt("font"),
      a = Bt("text"),
      i = Bt("font-weight"),
      o = Bt("tracking"),
      u = Bt("leading"),
      c = Bt("breakpoint"),
      d = Bt("container"),
      p = Bt("spacing"),
      m = Bt("radius"),
      g = Bt("shadow"),
      y = Bt("inset-shadow"),
      x = Bt("text-shadow"),
      R = Bt("drop-shadow"),
      E = Bt("blur"),
      _ = Bt("perspective"),
      w = Bt("aspect"),
      A = Bt("ease"),
      C = Bt("animate"),
      N = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      k = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      D = () => [...k(), _e, Se],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Y = () => ["auto", "contain", "none"],
      G = () => [_e, Se, p],
      J = () => [ks, "full", "auto", ...G()],
      ye = () => [Ha, "none", "subgrid", _e, Se],
      be = () => ["auto", { span: ["full", Ha, _e, Se] }, Ha, _e, Se],
      oe = () => [Ha, "auto", _e, Se],
      ge = () => ["auto", "min", "max", "fr", _e, Se],
      se = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      j = () => ["auto", ...G()],
      Q = () => [
        ks,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...G(),
      ],
      V = () => [e, _e, Se],
      re = () => [...k(), _x, Sx, { position: [_e, Se] }],
      O = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      H = () => ["auto", "cover", "contain", b2, g2, { size: [_e, Se] }],
      ie = () => [Dm, yl, Ai],
      W = () => ["", "none", "full", m, _e, Se],
      le = () => ["", qe, yl, Ai],
      Ce = () => ["solid", "dashed", "dotted", "double"],
      de = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Oe = () => [qe, Dm, _x, Sx],
      ze = () => ["", "none", E, _e, Se],
      Xe = () => ["none", qe, _e, Se],
      mt = () => ["none", qe, _e, Se],
      an = () => [qe, _e, Se],
      Gt = () => [ks, "full", ...G()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Jr],
        breakpoint: [Jr],
        color: [f2],
        container: [Jr],
        "drop-shadow": [Jr],
        ease: ["in", "out", "in-out"],
        font: [p2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Jr],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Jr],
        shadow: [Jr],
        spacing: ["px", qe],
        text: [Jr],
        "text-shadow": [Jr],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ks, Se, _e, w] }],
        container: ["container"],
        columns: [{ columns: [qe, Se, _e, d] }],
        "break-after": [{ "break-after": N() }],
        "break-before": [{ "break-before": N() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: D() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: Y() }],
        "overscroll-x": [{ "overscroll-x": Y() }],
        "overscroll-y": [{ "overscroll-y": Y() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: J() }],
        "inset-x": [{ "inset-x": J() }],
        "inset-y": [{ "inset-y": J() }],
        start: [{ start: J() }],
        end: [{ end: J() }],
        top: [{ top: J() }],
        right: [{ right: J() }],
        bottom: [{ bottom: J() }],
        left: [{ left: J() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Ha, "auto", _e, Se] }],
        basis: [{ basis: [ks, "full", "auto", d, ...G()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [qe, ks, "auto", "initial", "none", Se] }],
        grow: [{ grow: ["", qe, _e, Se] }],
        shrink: [{ shrink: ["", qe, _e, Se] }],
        order: [{ order: [Ha, "first", "last", "none", _e, Se] }],
        "grid-cols": [{ "grid-cols": ye() }],
        "col-start-end": [{ col: be() }],
        "col-start": [{ "col-start": oe() }],
        "col-end": [{ "col-end": oe() }],
        "grid-rows": [{ "grid-rows": ye() }],
        "row-start-end": [{ row: be() }],
        "row-start": [{ "row-start": oe() }],
        "row-end": [{ "row-end": oe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ge() }],
        "auto-rows": [{ "auto-rows": ge() }],
        gap: [{ gap: G() }],
        "gap-x": [{ "gap-x": G() }],
        "gap-y": [{ "gap-y": G() }],
        "justify-content": [{ justify: [...se(), "normal"] }],
        "justify-items": [{ "justify-items": [...fe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...fe()] }],
        "align-content": [{ content: ["normal", ...se()] }],
        "align-items": [{ items: [...fe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...fe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": se() }],
        "place-items": [{ "place-items": [...fe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...fe()] }],
        p: [{ p: G() }],
        px: [{ px: G() }],
        py: [{ py: G() }],
        ps: [{ ps: G() }],
        pe: [{ pe: G() }],
        pt: [{ pt: G() }],
        pr: [{ pr: G() }],
        pb: [{ pb: G() }],
        pl: [{ pl: G() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        "space-x": [{ "space-x": G() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": G() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Q() }],
        w: [{ w: [d, "screen", ...Q()] }],
        "min-w": [{ "min-w": [d, "screen", "none", ...Q()] }],
        "max-w": [
          { "max-w": [d, "screen", "none", "prose", { screen: [c] }, ...Q()] },
        ],
        h: [{ h: ["screen", "lh", ...Q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Q()] }],
        "font-size": [{ text: ["base", a, yl, Ai] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, _e, km] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Dm,
              Se,
            ],
          },
        ],
        "font-family": [{ font: [v2, Se, n] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, _e, Se] }],
        "line-clamp": [{ "line-clamp": [qe, "none", _e, km] }],
        leading: [{ leading: [u, ...G()] }],
        "list-image": [{ "list-image": ["none", _e, Se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", _e, Se] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: V() }],
        "text-color": [{ text: V() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Ce(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [qe, "from-font", "auto", _e, Ai] },
        ],
        "text-decoration-color": [{ decoration: V() }],
        "underline-offset": [{ "underline-offset": [qe, "auto", _e, Se] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: G() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              _e,
              Se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", _e, Se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: re() }],
        "bg-repeat": [{ bg: O() }],
        "bg-size": [{ bg: H() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Ha,
                  _e,
                  Se,
                ],
                radial: ["", _e, Se],
                conic: [Ha, _e, Se],
              },
              x2,
              y2,
            ],
          },
        ],
        "bg-color": [{ bg: V() }],
        "gradient-from-pos": [{ from: ie() }],
        "gradient-via-pos": [{ via: ie() }],
        "gradient-to-pos": [{ to: ie() }],
        "gradient-from": [{ from: V() }],
        "gradient-via": [{ via: V() }],
        "gradient-to": [{ to: V() }],
        rounded: [{ rounded: W() }],
        "rounded-s": [{ "rounded-s": W() }],
        "rounded-e": [{ "rounded-e": W() }],
        "rounded-t": [{ "rounded-t": W() }],
        "rounded-r": [{ "rounded-r": W() }],
        "rounded-b": [{ "rounded-b": W() }],
        "rounded-l": [{ "rounded-l": W() }],
        "rounded-ss": [{ "rounded-ss": W() }],
        "rounded-se": [{ "rounded-se": W() }],
        "rounded-ee": [{ "rounded-ee": W() }],
        "rounded-es": [{ "rounded-es": W() }],
        "rounded-tl": [{ "rounded-tl": W() }],
        "rounded-tr": [{ "rounded-tr": W() }],
        "rounded-br": [{ "rounded-br": W() }],
        "rounded-bl": [{ "rounded-bl": W() }],
        "border-w": [{ border: le() }],
        "border-w-x": [{ "border-x": le() }],
        "border-w-y": [{ "border-y": le() }],
        "border-w-s": [{ "border-s": le() }],
        "border-w-e": [{ "border-e": le() }],
        "border-w-t": [{ "border-t": le() }],
        "border-w-r": [{ "border-r": le() }],
        "border-w-b": [{ "border-b": le() }],
        "border-w-l": [{ "border-l": le() }],
        "divide-x": [{ "divide-x": le() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": le() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ce(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ce(), "hidden", "none"] }],
        "border-color": [{ border: V() }],
        "border-color-x": [{ "border-x": V() }],
        "border-color-y": [{ "border-y": V() }],
        "border-color-s": [{ "border-s": V() }],
        "border-color-e": [{ "border-e": V() }],
        "border-color-t": [{ "border-t": V() }],
        "border-color-r": [{ "border-r": V() }],
        "border-color-b": [{ "border-b": V() }],
        "border-color-l": [{ "border-l": V() }],
        "divide-color": [{ divide: V() }],
        "outline-style": [{ outline: [...Ce(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [qe, _e, Se] }],
        "outline-w": [{ outline: ["", qe, yl, Ai] }],
        "outline-color": [{ outline: V() }],
        shadow: [{ shadow: ["", "none", g, Dc, Nc] }],
        "shadow-color": [{ shadow: V() }],
        "inset-shadow": [{ "inset-shadow": ["none", y, Dc, Nc] }],
        "inset-shadow-color": [{ "inset-shadow": V() }],
        "ring-w": [{ ring: le() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: V() }],
        "ring-offset-w": [{ "ring-offset": [qe, Ai] }],
        "ring-offset-color": [{ "ring-offset": V() }],
        "inset-ring-w": [{ "inset-ring": le() }],
        "inset-ring-color": [{ "inset-ring": V() }],
        "text-shadow": [{ "text-shadow": ["none", x, Dc, Nc] }],
        "text-shadow-color": [{ "text-shadow": V() }],
        opacity: [{ opacity: [qe, _e, Se] }],
        "mix-blend": [
          { "mix-blend": [...de(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [qe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Oe() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Oe() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": V() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": V() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Oe() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Oe() }],
        "mask-image-t-from-color": [{ "mask-t-from": V() }],
        "mask-image-t-to-color": [{ "mask-t-to": V() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Oe() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Oe() }],
        "mask-image-r-from-color": [{ "mask-r-from": V() }],
        "mask-image-r-to-color": [{ "mask-r-to": V() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Oe() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Oe() }],
        "mask-image-b-from-color": [{ "mask-b-from": V() }],
        "mask-image-b-to-color": [{ "mask-b-to": V() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Oe() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Oe() }],
        "mask-image-l-from-color": [{ "mask-l-from": V() }],
        "mask-image-l-to-color": [{ "mask-l-to": V() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Oe() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Oe() }],
        "mask-image-x-from-color": [{ "mask-x-from": V() }],
        "mask-image-x-to-color": [{ "mask-x-to": V() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Oe() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Oe() }],
        "mask-image-y-from-color": [{ "mask-y-from": V() }],
        "mask-image-y-to-color": [{ "mask-y-to": V() }],
        "mask-image-radial": [{ "mask-radial": [_e, Se] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Oe() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Oe() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": V() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": V() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": k() }],
        "mask-image-conic-pos": [{ "mask-conic": [qe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Oe() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Oe() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": V() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": V() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: re() }],
        "mask-repeat": [{ mask: O() }],
        "mask-size": [{ mask: H() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", _e, Se] }],
        filter: [{ filter: ["", "none", _e, Se] }],
        blur: [{ blur: ze() }],
        brightness: [{ brightness: [qe, _e, Se] }],
        contrast: [{ contrast: [qe, _e, Se] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", R, Dc, Nc] }],
        "drop-shadow-color": [{ "drop-shadow": V() }],
        grayscale: [{ grayscale: ["", qe, _e, Se] }],
        "hue-rotate": [{ "hue-rotate": [qe, _e, Se] }],
        invert: [{ invert: ["", qe, _e, Se] }],
        saturate: [{ saturate: [qe, _e, Se] }],
        sepia: [{ sepia: ["", qe, _e, Se] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", _e, Se] }],
        "backdrop-blur": [{ "backdrop-blur": ze() }],
        "backdrop-brightness": [{ "backdrop-brightness": [qe, _e, Se] }],
        "backdrop-contrast": [{ "backdrop-contrast": [qe, _e, Se] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", qe, _e, Se] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [qe, _e, Se] }],
        "backdrop-invert": [{ "backdrop-invert": ["", qe, _e, Se] }],
        "backdrop-opacity": [{ "backdrop-opacity": [qe, _e, Se] }],
        "backdrop-saturate": [{ "backdrop-saturate": [qe, _e, Se] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", qe, _e, Se] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": G() }],
        "border-spacing-x": [{ "border-spacing-x": G() }],
        "border-spacing-y": [{ "border-spacing-y": G() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              _e,
              Se,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [qe, "initial", _e, Se] }],
        ease: [{ ease: ["linear", "initial", A, _e, Se] }],
        delay: [{ delay: [qe, _e, Se] }],
        animate: [{ animate: ["none", C, _e, Se] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [_, _e, Se] }],
        "perspective-origin": [{ "perspective-origin": D() }],
        rotate: [{ rotate: Xe() }],
        "rotate-x": [{ "rotate-x": Xe() }],
        "rotate-y": [{ "rotate-y": Xe() }],
        "rotate-z": [{ "rotate-z": Xe() }],
        scale: [{ scale: mt() }],
        "scale-x": [{ "scale-x": mt() }],
        "scale-y": [{ "scale-y": mt() }],
        "scale-z": [{ "scale-z": mt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: an() }],
        "skew-x": [{ "skew-x": an() }],
        "skew-y": [{ "skew-y": an() }],
        transform: [{ transform: [_e, Se, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: D() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Gt() }],
        "translate-x": [{ "translate-x": Gt() }],
        "translate-y": [{ "translate-y": Gt() }],
        "translate-z": [{ "translate-z": Gt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: V() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: V() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              _e,
              Se,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": G() }],
        "scroll-mx": [{ "scroll-mx": G() }],
        "scroll-my": [{ "scroll-my": G() }],
        "scroll-ms": [{ "scroll-ms": G() }],
        "scroll-me": [{ "scroll-me": G() }],
        "scroll-mt": [{ "scroll-mt": G() }],
        "scroll-mr": [{ "scroll-mr": G() }],
        "scroll-mb": [{ "scroll-mb": G() }],
        "scroll-ml": [{ "scroll-ml": G() }],
        "scroll-p": [{ "scroll-p": G() }],
        "scroll-px": [{ "scroll-px": G() }],
        "scroll-py": [{ "scroll-py": G() }],
        "scroll-ps": [{ "scroll-ps": G() }],
        "scroll-pe": [{ "scroll-pe": G() }],
        "scroll-pt": [{ "scroll-pt": G() }],
        "scroll-pr": [{ "scroll-pr": G() }],
        "scroll-pb": [{ "scroll-pb": G() }],
        "scroll-pl": [{ "scroll-pl": G() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", _e, Se],
          },
        ],
        fill: [{ fill: ["none", ...V()] }],
        "stroke-w": [{ stroke: [qe, yl, Ai, km] }],
        stroke: [{ stroke: ["none", ...V()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  E2 = a2(_2);
function Ve(...e) {
  return E2(l_(e));
}
const PP = (e) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(e),
  BP = async (e, n) => {
    try {
      await navigator.clipboard.writeText(e),
        lp(
          S.jsx("div", {
            className: "flex flex-col",
            children: S.jsxs("span", {
              className: "font-medium text-green-600",
              children: [n, " đã được sao chép."],
            }),
          })
        );
    } catch {
      lp(
        S.jsx("div", {
          className: "flex flex-col",
          children: S.jsxs("span", {
            className: "font-medium text-red-600",
            children: ["Không thể sao chép ", n, "."],
          }),
        })
      );
    }
  },
  T2 = xD,
  w_ = v.forwardRef(({ className: e, ...n }, a) =>
    S.jsx(t_, {
      ref: a,
      className: Ve(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...n,
    })
  );
w_.displayName = t_.displayName;
const R2 = ag(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  S_ = v.forwardRef(({ className: e, variant: n, ...a }, i) =>
    S.jsx(n_, { ref: i, className: Ve(R2({ variant: n }), e), ...a })
  );
S_.displayName = n_.displayName;
const A2 = v.forwardRef(({ className: e, ...n }, a) =>
  S.jsx(i_, {
    ref: a,
    className: Ve(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...n,
  })
);
A2.displayName = i_.displayName;
const __ = v.forwardRef(({ className: e, ...n }, a) =>
  S.jsx(s_, {
    ref: a,
    className: Ve(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...n,
    children: S.jsx(c_, { className: "h-4 w-4" }),
  })
);
__.displayName = s_.displayName;
const E_ = v.forwardRef(({ className: e, ...n }, a) =>
  S.jsx(r_, {
    ref: a,
    className: Ve("text-sm font-semibold [&+div]:text-xs", e),
    ...n,
  })
);
E_.displayName = r_.displayName;
const T_ = v.forwardRef(({ className: e, ...n }, a) =>
  S.jsx(a_, { ref: a, className: Ve("text-sm opacity-90", e), ...n })
);
T_.displayName = a_.displayName;
function C2() {
  const { toasts: e } = ON();
  return S.jsxs(T2, {
    children: [
      e.map(function ({ id: n, title: a, description: i, action: o, ...u }) {
        return S.jsxs(
          S_,
          {
            ...u,
            children: [
              S.jsxs("div", {
                className: "grid gap-1",
                children: [
                  a && S.jsx(E_, { children: a }),
                  i && S.jsx(T_, { children: i }),
                ],
              }),
              o,
              S.jsx(__, {}),
            ],
          },
          n
        );
      }),
      S.jsx(w_, {}),
    ],
  });
}
const O2 = ({ children: e }) => {
    const n = Zp();
    return (
      v.useEffect(() => {
        n($M());
      }, []),
      e
    );
  },
  M2 = new zO(),
  N2 = ({ children: e }) =>
    S.jsx(dO, {
      defaultTheme: "light",
      storageKey: "vite-ui-theme",
      children: S.jsx(BO, {
        client: M2,
        children: S.jsxs(KM, {
          children: [
            S.jsx(O2, { children: e }),
            S.jsx(_N, {
              position: "top-right",
              toastOptions: {
                classNames: {
                  toast:
                    "bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-700 shadow-lg rounded-lg p-4",
                  title: "text-red-600 font-semibold text-base",
                  description: "text-sm text-muted-foreground",
                },
              },
            }),
            S.jsx(C2, {}),
          ],
        }),
      }),
    }),
  D2 = "modulepreload",
  k2 = function (e) {
    return "/" + e;
  },
  Ex = {},
  tu = function (n, a, i) {
    let o = Promise.resolve();
    if (a && a.length > 0) {
      let c = function (m) {
        return Promise.all(
          m.map((g) =>
            Promise.resolve(g).then(
              (y) => ({ status: "fulfilled", value: y }),
              (y) => ({ status: "rejected", reason: y })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"),
        p =
          (d == null ? void 0 : d.nonce) ||
          (d == null ? void 0 : d.getAttribute("nonce"));
      o = c(
        a.map((m) => {
          if (((m = k2(m)), m in Ex)) return;
          Ex[m] = !0;
          const g = m.endsWith(".css"),
            y = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${y}`)) return;
          const x = document.createElement("link");
          if (
            ((x.rel = g ? "stylesheet" : D2),
            g || (x.as = "script"),
            (x.crossOrigin = ""),
            (x.href = m),
            p && x.setAttribute("nonce", p),
            document.head.appendChild(x),
            g)
          )
            return new Promise((R, E) => {
              x.addEventListener("load", R),
                x.addEventListener("error", () =>
                  E(new Error(`Unable to preload CSS for ${m}`))
                );
            });
        })
      );
    }
    function u(c) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented))
        throw c;
    }
    return o.then((c) => {
      for (const d of c || []) d.status === "rejected" && u(d.reason);
      return n().catch(u);
    });
  },
  j2 = () =>
    S.jsxs("div", {
      className: "relative w-full min-h-[200px]",
      children: [
        S.jsx("div", {
          className:
            "fixed top-0 left-0 z-50 h-1 w-full overflow-hidden bg-muted",
          children: S.jsx("div", {
            className: "h-full bg-primary animate-progress-bar",
          }),
        }),
        S.jsx("div", {
          className:
            "flex items-center justify-center min-h-[calc(100vh-10rem)] animate-pulse",
          children: S.jsx("img", {
            src: "/loading.svg",
            alt: "Loading animation",
            className: "w-30 h-30",
          }),
        }),
      ],
    }),
  jm = 768;
function L2() {
  const [e, n] = v.useState(void 0);
  return (
    v.useEffect(() => {
      const a = window.matchMedia(`(max-width: ${jm - 1}px)`),
        i = () => {
          n(window.innerWidth < jm);
        };
      return (
        a.addEventListener("change", i),
        n(window.innerWidth < jm),
        () => a.removeEventListener("change", i)
      );
    }, []),
    !!e
  );
}
const z2 = ag(
  "hover:cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function sg({ className: e, variant: n, size: a, asChild: i = !1, ...o }) {
  const u = i ? zf : "button";
  return S.jsx(u, {
    "data-slot": "button",
    className: Ve(z2({ variant: n, size: a, className: e })),
    ...o,
  });
}
function Tx({ className: e, type: n, ...a }) {
  return S.jsx("input", {
    type: n,
    "data-slot": "input",
    className: Ve(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      e
    ),
    ...a,
  });
}
var U2 = Xw[" useId ".trim().toString()] || (() => {}),
  P2 = 0;
function Ui(e) {
  const [n, a] = v.useState(U2());
  return (
    fa(() => {
      a((i) => i ?? String(P2++));
    }, [e]),
    e || (n ? `radix-${n}` : "")
  );
}
var Lm = "focusScope.autoFocusOnMount",
  zm = "focusScope.autoFocusOnUnmount",
  Rx = { bubbles: !1, cancelable: !0 },
  B2 = "FocusScope",
  og = v.forwardRef((e, n) => {
    const {
        loop: a = !1,
        trapped: i = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: u,
        ...c
      } = e,
      [d, p] = v.useState(null),
      m = Ln(o),
      g = Ln(u),
      y = v.useRef(null),
      x = At(n, (_) => p(_)),
      R = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (i) {
        let _ = function (N) {
            if (R.paused || !d) return;
            const k = N.target;
            d.contains(k) ? (y.current = k) : qa(y.current, { select: !0 });
          },
          w = function (N) {
            if (R.paused || !d) return;
            const k = N.relatedTarget;
            k !== null && (d.contains(k) || qa(y.current, { select: !0 }));
          },
          A = function (N) {
            if (document.activeElement === document.body)
              for (const D of N) D.removedNodes.length > 0 && qa(d);
          };
        document.addEventListener("focusin", _),
          document.addEventListener("focusout", w);
        const C = new MutationObserver(A);
        return (
          d && C.observe(d, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", _),
              document.removeEventListener("focusout", w),
              C.disconnect();
          }
        );
      }
    }, [i, d, R.paused]),
      v.useEffect(() => {
        if (d) {
          Cx.add(R);
          const _ = document.activeElement;
          if (!d.contains(_)) {
            const A = new CustomEvent(Lm, Rx);
            d.addEventListener(Lm, m),
              d.dispatchEvent(A),
              A.defaultPrevented ||
                (V2($2(R_(d)), { select: !0 }),
                document.activeElement === _ && qa(d));
          }
          return () => {
            d.removeEventListener(Lm, m),
              setTimeout(() => {
                const A = new CustomEvent(zm, Rx);
                d.addEventListener(zm, g),
                  d.dispatchEvent(A),
                  A.defaultPrevented || qa(_ ?? document.body, { select: !0 }),
                  d.removeEventListener(zm, g),
                  Cx.remove(R);
              }, 0);
          };
        }
      }, [d, m, g, R]);
    const E = v.useCallback(
      (_) => {
        if ((!a && !i) || R.paused) return;
        const w = _.key === "Tab" && !_.altKey && !_.ctrlKey && !_.metaKey,
          A = document.activeElement;
        if (w && A) {
          const C = _.currentTarget,
            [N, k] = H2(C);
          N && k
            ? !_.shiftKey && A === k
              ? (_.preventDefault(), a && qa(N, { select: !0 }))
              : _.shiftKey &&
                A === N &&
                (_.preventDefault(), a && qa(k, { select: !0 }))
            : A === C && _.preventDefault();
        }
      },
      [a, i, R.paused]
    );
    return S.jsx(st.div, { tabIndex: -1, ...c, ref: x, onKeyDown: E });
  });
og.displayName = B2;
function V2(e, { select: n = !1 } = {}) {
  const a = document.activeElement;
  for (const i of e)
    if ((qa(i, { select: n }), document.activeElement !== a)) return;
}
function H2(e) {
  const n = R_(e),
    a = Ax(n, e),
    i = Ax(n.reverse(), e);
  return [a, i];
}
function R_(e) {
  const n = [],
    a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const o = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || o
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; a.nextNode(); ) n.push(a.currentNode);
  return n;
}
function Ax(e, n) {
  for (const a of e) if (!F2(a, { upTo: n })) return a;
}
function F2(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function q2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qa(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const a = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== a && q2(e) && n && e.select();
  }
}
var Cx = I2();
function I2() {
  let e = [];
  return {
    add(n) {
      const a = e[0];
      n !== a && (a == null || a.pause()), (e = Ox(e, n)), e.unshift(n);
    },
    remove(n) {
      var a;
      (e = Ox(e, n)), (a = e[0]) == null || a.resume();
    },
  };
}
function Ox(e, n) {
  const a = [...e],
    i = a.indexOf(n);
  return i !== -1 && a.splice(i, 1), a;
}
function $2(e) {
  return e.filter((n) => n.tagName !== "A");
}
var Um = 0;
function A_() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Mx()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Mx()),
      Um++,
      () => {
        Um === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((n) => n.remove()),
          Um--;
      }
    );
  }, []);
}
function Mx() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Or = function () {
  return (
    (Or =
      Object.assign ||
      function (n) {
        for (var a, i = 1, o = arguments.length; i < o; i++) {
          a = arguments[i];
          for (var u in a)
            Object.prototype.hasOwnProperty.call(a, u) && (n[u] = a[u]);
        }
        return n;
      }),
    Or.apply(this, arguments)
  );
};
function C_(e, n) {
  var a = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      n.indexOf(i) < 0 &&
      (a[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      n.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (a[i[o]] = e[i[o]]);
  return a;
}
function G2(e, n, a) {
  if (a || arguments.length === 2)
    for (var i = 0, o = n.length, u; i < o; i++)
      (u || !(i in n)) &&
        (u || (u = Array.prototype.slice.call(n, 0, i)), (u[i] = n[i]));
  return e.concat(u || Array.prototype.slice.call(n));
}
var qc = "right-scroll-bar-position",
  Ic = "width-before-scroll-bar",
  Y2 = "with-scroll-bars-hidden",
  Z2 = "--removed-body-scroll-bar-size";
function Pm(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function K2(e, n) {
  var a = v.useState(function () {
    return {
      value: e,
      callback: n,
      facade: {
        get current() {
          return a.value;
        },
        set current(i) {
          var o = a.value;
          o !== i && ((a.value = i), a.callback(i, o));
        },
      },
    };
  })[0];
  return (a.callback = n), a.facade;
}
var X2 = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Nx = new WeakMap();
function Q2(e, n) {
  var a = K2(null, function (i) {
    return e.forEach(function (o) {
      return Pm(o, i);
    });
  });
  return (
    X2(
      function () {
        var i = Nx.get(a);
        if (i) {
          var o = new Set(i),
            u = new Set(e),
            c = a.current;
          o.forEach(function (d) {
            u.has(d) || Pm(d, null);
          }),
            u.forEach(function (d) {
              o.has(d) || Pm(d, c);
            });
        }
        Nx.set(a, e);
      },
      [e]
    ),
    a
  );
}
function W2(e) {
  return e;
}
function J2(e, n) {
  n === void 0 && (n = W2);
  var a = [],
    i = !1,
    o = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return a.length ? a[a.length - 1] : e;
      },
      useMedium: function (u) {
        var c = n(u, i);
        return (
          a.push(c),
          function () {
            a = a.filter(function (d) {
              return d !== c;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (i = !0; a.length; ) {
          var c = a;
          (a = []), c.forEach(u);
        }
        a = {
          push: function (d) {
            return u(d);
          },
          filter: function () {
            return a;
          },
        };
      },
      assignMedium: function (u) {
        i = !0;
        var c = [];
        if (a.length) {
          var d = a;
          (a = []), d.forEach(u), (c = a);
        }
        var p = function () {
            var g = c;
            (c = []), g.forEach(u);
          },
          m = function () {
            return Promise.resolve().then(p);
          };
        m(),
          (a = {
            push: function (g) {
              c.push(g), m();
            },
            filter: function (g) {
              return (c = c.filter(g)), a;
            },
          });
      },
    };
  return o;
}
function ek(e) {
  e === void 0 && (e = {});
  var n = J2(null);
  return (n.options = Or({ async: !0, ssr: !1 }, e)), n;
}
var O_ = function (e) {
  var n = e.sideCar,
    a = C_(e, ["sideCar"]);
  if (!n)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var i = n.read();
  if (!i) throw new Error("Sidecar medium not found");
  return v.createElement(i, Or({}, a));
};
O_.isSideCarExport = !0;
function tk(e, n) {
  return e.useMedium(n), O_;
}
var M_ = ek(),
  Bm = function () {},
  Bf = v.forwardRef(function (e, n) {
    var a = v.useRef(null),
      i = v.useState({
        onScrollCapture: Bm,
        onWheelCapture: Bm,
        onTouchMoveCapture: Bm,
      }),
      o = i[0],
      u = i[1],
      c = e.forwardProps,
      d = e.children,
      p = e.className,
      m = e.removeScrollBar,
      g = e.enabled,
      y = e.shards,
      x = e.sideCar,
      R = e.noRelative,
      E = e.noIsolation,
      _ = e.inert,
      w = e.allowPinchZoom,
      A = e.as,
      C = A === void 0 ? "div" : A,
      N = e.gapMode,
      k = C_(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      D = x,
      I = Q2([a, n]),
      Y = Or(Or({}, k), o);
    return v.createElement(
      v.Fragment,
      null,
      g &&
        v.createElement(D, {
          sideCar: M_,
          removeScrollBar: m,
          shards: y,
          noRelative: R,
          noIsolation: E,
          inert: _,
          setCallbacks: u,
          allowPinchZoom: !!w,
          lockRef: a,
          gapMode: N,
        }),
      c
        ? v.cloneElement(v.Children.only(d), Or(Or({}, Y), { ref: I }))
        : v.createElement(C, Or({}, Y, { className: p, ref: I }), d)
    );
  });
Bf.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Bf.classNames = { fullWidth: Ic, zeroRight: qc };
var nk = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function rk() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = nk();
  return n && e.setAttribute("nonce", n), e;
}
function ak(e, n) {
  e.styleSheet
    ? (e.styleSheet.cssText = n)
    : e.appendChild(document.createTextNode(n));
}
function ik(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var sk = function () {
    var e = 0,
      n = null;
    return {
      add: function (a) {
        e == 0 && (n = rk()) && (ak(n, a), ik(n)), e++;
      },
      remove: function () {
        e--,
          !e && n && (n.parentNode && n.parentNode.removeChild(n), (n = null));
      },
    };
  },
  ok = function () {
    var e = sk();
    return function (n, a) {
      v.useEffect(
        function () {
          return (
            e.add(n),
            function () {
              e.remove();
            }
          );
        },
        [n && a]
      );
    };
  },
  N_ = function () {
    var e = ok(),
      n = function (a) {
        var i = a.styles,
          o = a.dynamic;
        return e(i, o), null;
      };
    return n;
  },
  lk = { left: 0, top: 0, right: 0, gap: 0 },
  Vm = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  uk = function (e) {
    var n = window.getComputedStyle(document.body),
      a = n[e === "padding" ? "paddingLeft" : "marginLeft"],
      i = n[e === "padding" ? "paddingTop" : "marginTop"],
      o = n[e === "padding" ? "paddingRight" : "marginRight"];
    return [Vm(a), Vm(i), Vm(o)];
  },
  ck = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return lk;
    var n = uk(e),
      a = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: n[0],
      top: n[1],
      right: n[2],
      gap: Math.max(0, i - a + n[2] - n[0]),
    };
  },
  fk = N_(),
  Fs = "data-scroll-locked",
  dk = function (e, n, a, i) {
    var o = e.left,
      u = e.top,
      c = e.right,
      d = e.gap;
    return (
      a === void 0 && (a = "margin"),
      `
  .`
        .concat(
          Y2,
          ` {
   overflow: hidden `
        )
        .concat(
          i,
          `;
   padding-right: `
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  body[`
        )
        .concat(
          Fs,
          `] {
    overflow: hidden `
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            n && "position: relative ".concat(i, ";"),
            a === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  u,
                  `px;
    padding-right: `
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(d, "px ")
                .concat(
                  i,
                  `;
    `
                ),
            a === "padding" &&
              "padding-right: ".concat(d, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          qc,
          ` {
    right: `
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(
          Ic,
          ` {
    margin-right: `
        )
        .concat(d, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(qc, " .")
        .concat(
          qc,
          ` {
    right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(Ic, " .")
        .concat(
          Ic,
          ` {
    margin-right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  body[`
        )
        .concat(
          Fs,
          `] {
    `
        )
        .concat(Z2, ": ")
        .concat(
          d,
          `px;
  }
`
        )
    );
  },
  Dx = function () {
    var e = parseInt(document.body.getAttribute(Fs) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  hk = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Fs, (Dx() + 1).toString()),
        function () {
          var e = Dx() - 1;
          e <= 0
            ? document.body.removeAttribute(Fs)
            : document.body.setAttribute(Fs, e.toString());
        }
      );
    }, []);
  },
  mk = function (e) {
    var n = e.noRelative,
      a = e.noImportant,
      i = e.gapMode,
      o = i === void 0 ? "margin" : i;
    hk();
    var u = v.useMemo(
      function () {
        return ck(o);
      },
      [o]
    );
    return v.createElement(fk, { styles: dk(u, !n, o, a ? "" : "!important") });
  },
  gp = !1;
if (typeof window < "u")
  try {
    var kc = Object.defineProperty({}, "passive", {
      get: function () {
        return (gp = !0), !0;
      },
    });
    window.addEventListener("test", kc, kc),
      window.removeEventListener("test", kc, kc);
  } catch {
    gp = !1;
  }
var js = gp ? { passive: !1 } : !1,
  pk = function (e) {
    return e.tagName === "TEXTAREA";
  },
  D_ = function (e, n) {
    if (!(e instanceof Element)) return !1;
    var a = window.getComputedStyle(e);
    return (
      a[n] !== "hidden" &&
      !(a.overflowY === a.overflowX && !pk(e) && a[n] === "visible")
    );
  },
  gk = function (e) {
    return D_(e, "overflowY");
  },
  yk = function (e) {
    return D_(e, "overflowX");
  },
  kx = function (e, n) {
    var a = n.ownerDocument,
      i = n;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var o = k_(e, i);
      if (o) {
        var u = j_(e, i),
          c = u[1],
          d = u[2];
        if (c > d) return !0;
      }
      i = i.parentNode;
    } while (i && i !== a.body);
    return !1;
  },
  vk = function (e) {
    var n = e.scrollTop,
      a = e.scrollHeight,
      i = e.clientHeight;
    return [n, a, i];
  },
  bk = function (e) {
    var n = e.scrollLeft,
      a = e.scrollWidth,
      i = e.clientWidth;
    return [n, a, i];
  },
  k_ = function (e, n) {
    return e === "v" ? gk(n) : yk(n);
  },
  j_ = function (e, n) {
    return e === "v" ? vk(n) : bk(n);
  },
  xk = function (e, n) {
    return e === "h" && n === "rtl" ? -1 : 1;
  },
  wk = function (e, n, a, i, o) {
    var u = xk(e, window.getComputedStyle(n).direction),
      c = u * i,
      d = a.target,
      p = n.contains(d),
      m = !1,
      g = c > 0,
      y = 0,
      x = 0;
    do {
      var R = j_(e, d),
        E = R[0],
        _ = R[1],
        w = R[2],
        A = _ - w - u * E;
      (E || A) && k_(e, d) && ((y += A), (x += E)),
        (d = d.parentNode.host || d.parentNode);
    } while ((!p && d !== document.body) || (p && (n.contains(d) || n === d)));
    return ((g && Math.abs(y) < 1) || (!g && Math.abs(x) < 1)) && (m = !0), m;
  },
  jc = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  jx = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Lx = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Sk = function (e, n) {
    return e[0] === n[0] && e[1] === n[1];
  },
  _k = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Ek = 0,
  Ls = [];
function Tk(e) {
  var n = v.useRef([]),
    a = v.useRef([0, 0]),
    i = v.useRef(),
    o = v.useState(Ek++)[0],
    u = v.useState(N_)[0],
    c = v.useRef(e);
  v.useEffect(
    function () {
      c.current = e;
    },
    [e]
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var _ = G2([e.lockRef.current], (e.shards || []).map(Lx), !0).filter(
            Boolean
          );
          return (
            _.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                _.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var d = v.useCallback(function (_, w) {
      if (
        ("touches" in _ && _.touches.length === 2) ||
        (_.type === "wheel" && _.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var A = jc(_),
        C = a.current,
        N = "deltaX" in _ ? _.deltaX : C[0] - A[0],
        k = "deltaY" in _ ? _.deltaY : C[1] - A[1],
        D,
        I = _.target,
        Y = Math.abs(N) > Math.abs(k) ? "h" : "v";
      if ("touches" in _ && Y === "h" && I.type === "range") return !1;
      var G = kx(Y, I);
      if (!G) return !0;
      if ((G ? (D = Y) : ((D = Y === "v" ? "h" : "v"), (G = kx(Y, I))), !G))
        return !1;
      if (
        (!i.current && "changedTouches" in _ && (N || k) && (i.current = D), !D)
      )
        return !0;
      var J = i.current || D;
      return wk(J, w, _, J === "h" ? N : k);
    }, []),
    p = v.useCallback(function (_) {
      var w = _;
      if (!(!Ls.length || Ls[Ls.length - 1] !== u)) {
        var A = "deltaY" in w ? jx(w) : jc(w),
          C = n.current.filter(function (D) {
            return (
              D.name === w.type &&
              (D.target === w.target || w.target === D.shadowParent) &&
              Sk(D.delta, A)
            );
          })[0];
        if (C && C.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!C) {
          var N = (c.current.shards || [])
              .map(Lx)
              .filter(Boolean)
              .filter(function (D) {
                return D.contains(w.target);
              }),
            k = N.length > 0 ? d(w, N[0]) : !c.current.noIsolation;
          k && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    m = v.useCallback(function (_, w, A, C) {
      var N = { name: _, delta: w, target: A, should: C, shadowParent: Rk(A) };
      n.current.push(N),
        setTimeout(function () {
          n.current = n.current.filter(function (k) {
            return k !== N;
          });
        }, 1);
    }, []),
    g = v.useCallback(function (_) {
      (a.current = jc(_)), (i.current = void 0);
    }, []),
    y = v.useCallback(function (_) {
      m(_.type, jx(_), _.target, d(_, e.lockRef.current));
    }, []),
    x = v.useCallback(function (_) {
      m(_.type, jc(_), _.target, d(_, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Ls.push(u),
      e.setCallbacks({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: x,
      }),
      document.addEventListener("wheel", p, js),
      document.addEventListener("touchmove", p, js),
      document.addEventListener("touchstart", g, js),
      function () {
        (Ls = Ls.filter(function (_) {
          return _ !== u;
        })),
          document.removeEventListener("wheel", p, js),
          document.removeEventListener("touchmove", p, js),
          document.removeEventListener("touchstart", g, js);
      }
    );
  }, []);
  var R = e.removeScrollBar,
    E = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    E ? v.createElement(u, { styles: _k(o) }) : null,
    R
      ? v.createElement(mk, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function Rk(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && ((n = e.host), (e = e.host)), (e = e.parentNode);
  return n;
}
const Ak = tk(M_, Tk);
var lg = v.forwardRef(function (e, n) {
  return v.createElement(Bf, Or({}, e, { ref: n, sideCar: Ak }));
});
lg.classNames = Bf.classNames;
var Ck = function (e) {
    if (typeof document > "u") return null;
    var n = Array.isArray(e) ? e[0] : e;
    return n.ownerDocument.body;
  },
  zs = new WeakMap(),
  Lc = new WeakMap(),
  zc = {},
  Hm = 0,
  L_ = function (e) {
    return e && (e.host || L_(e.parentNode));
  },
  Ok = function (e, n) {
    return n
      .map(function (a) {
        if (e.contains(a)) return a;
        var i = L_(a);
        return i && e.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              a,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (a) {
        return !!a;
      });
  },
  Mk = function (e, n, a, i) {
    var o = Ok(n, Array.isArray(e) ? e : [e]);
    zc[a] || (zc[a] = new WeakMap());
    var u = zc[a],
      c = [],
      d = new Set(),
      p = new Set(o),
      m = function (y) {
        !y || d.has(y) || (d.add(y), m(y.parentNode));
      };
    o.forEach(m);
    var g = function (y) {
      !y ||
        p.has(y) ||
        Array.prototype.forEach.call(y.children, function (x) {
          if (d.has(x)) g(x);
          else
            try {
              var R = x.getAttribute(i),
                E = R !== null && R !== "false",
                _ = (zs.get(x) || 0) + 1,
                w = (u.get(x) || 0) + 1;
              zs.set(x, _),
                u.set(x, w),
                c.push(x),
                _ === 1 && E && Lc.set(x, !0),
                w === 1 && x.setAttribute(a, "true"),
                E || x.setAttribute(i, "true");
            } catch (A) {
              console.error("aria-hidden: cannot operate on ", x, A);
            }
        });
    };
    return (
      g(n),
      d.clear(),
      Hm++,
      function () {
        c.forEach(function (y) {
          var x = zs.get(y) - 1,
            R = u.get(y) - 1;
          zs.set(y, x),
            u.set(y, R),
            x || (Lc.has(y) || y.removeAttribute(i), Lc.delete(y)),
            R || y.removeAttribute(a);
        }),
          Hm--,
          Hm ||
            ((zs = new WeakMap()),
            (zs = new WeakMap()),
            (Lc = new WeakMap()),
            (zc = {}));
      }
    );
  },
  z_ = function (e, n, a) {
    a === void 0 && (a = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e]),
      o = Ck(e);
    return o
      ? (i.push.apply(i, Array.from(o.querySelectorAll("[aria-live], script"))),
        Mk(i, o, a, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Vf = "Dialog",
  [U_, VP] = si(Vf),
  [Nk, hr] = U_(Vf),
  P_ = (e) => {
    const {
        __scopeDialog: n,
        children: a,
        open: i,
        defaultOpen: o,
        onOpenChange: u,
        modal: c = !0,
      } = e,
      d = v.useRef(null),
      p = v.useRef(null),
      [m, g] = Jl({ prop: i, defaultProp: o ?? !1, onChange: u, caller: Vf });
    return S.jsx(Nk, {
      scope: n,
      triggerRef: d,
      contentRef: p,
      contentId: Ui(),
      titleId: Ui(),
      descriptionId: Ui(),
      open: m,
      onOpenChange: g,
      onOpenToggle: v.useCallback(() => g((y) => !y), [g]),
      modal: c,
      children: a,
    });
  };
P_.displayName = Vf;
var B_ = "DialogTrigger",
  Dk = v.forwardRef((e, n) => {
    const { __scopeDialog: a, ...i } = e,
      o = hr(B_, a),
      u = At(n, o.triggerRef);
    return S.jsx(st.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": fg(o.open),
      ...i,
      ref: u,
      onClick: Ae(e.onClick, o.onOpenToggle),
    });
  });
Dk.displayName = B_;
var ug = "DialogPortal",
  [kk, V_] = U_(ug, { forceMount: void 0 }),
  H_ = (e) => {
    const { __scopeDialog: n, forceMount: a, children: i, container: o } = e,
      u = hr(ug, n);
    return S.jsx(kk, {
      scope: n,
      forceMount: a,
      children: v.Children.map(i, (c) =>
        S.jsx(fr, {
          present: a || u.open,
          children: S.jsx(Wl, { asChild: !0, container: o, children: c }),
        })
      ),
    });
  };
H_.displayName = ug;
var rf = "DialogOverlay",
  F_ = v.forwardRef((e, n) => {
    const a = V_(rf, e.__scopeDialog),
      { forceMount: i = a.forceMount, ...o } = e,
      u = hr(rf, e.__scopeDialog);
    return u.modal
      ? S.jsx(fr, {
          present: i || u.open,
          children: S.jsx(Lk, { ...o, ref: n }),
        })
      : null;
  });
F_.displayName = rf;
var jk = eo("DialogOverlay.RemoveScroll"),
  Lk = v.forwardRef((e, n) => {
    const { __scopeDialog: a, ...i } = e,
      o = hr(rf, a);
    return S.jsx(lg, {
      as: jk,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: S.jsx(st.div, {
        "data-state": fg(o.open),
        ...i,
        ref: n,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  Fi = "DialogContent",
  q_ = v.forwardRef((e, n) => {
    const a = V_(Fi, e.__scopeDialog),
      { forceMount: i = a.forceMount, ...o } = e,
      u = hr(Fi, e.__scopeDialog);
    return S.jsx(fr, {
      present: i || u.open,
      children: u.modal
        ? S.jsx(zk, { ...o, ref: n })
        : S.jsx(Uk, { ...o, ref: n }),
    });
  });
q_.displayName = Fi;
var zk = v.forwardRef((e, n) => {
    const a = hr(Fi, e.__scopeDialog),
      i = v.useRef(null),
      o = At(n, a.contentRef, i);
    return (
      v.useEffect(() => {
        const u = i.current;
        if (u) return z_(u);
      }, []),
      S.jsx(I_, {
        ...e,
        ref: o,
        trapFocus: a.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ae(e.onCloseAutoFocus, (u) => {
          var c;
          u.preventDefault(), (c = a.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: Ae(e.onPointerDownOutside, (u) => {
          const c = u.detail.originalEvent,
            d = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || d) && u.preventDefault();
        }),
        onFocusOutside: Ae(e.onFocusOutside, (u) => u.preventDefault()),
      })
    );
  }),
  Uk = v.forwardRef((e, n) => {
    const a = hr(Fi, e.__scopeDialog),
      i = v.useRef(!1),
      o = v.useRef(!1);
    return S.jsx(I_, {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (u) => {
        var c, d;
        (c = e.onCloseAutoFocus) == null || c.call(e, u),
          u.defaultPrevented ||
            (i.current || (d = a.triggerRef.current) == null || d.focus(),
            u.preventDefault()),
          (i.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (u) => {
        var p, m;
        (p = e.onInteractOutside) == null || p.call(e, u),
          u.defaultPrevented ||
            ((i.current = !0),
            u.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const c = u.target;
        ((m = a.triggerRef.current) == null ? void 0 : m.contains(c)) &&
          u.preventDefault(),
          u.detail.originalEvent.type === "focusin" &&
            o.current &&
            u.preventDefault();
      },
    });
  }),
  I_ = v.forwardRef((e, n) => {
    const {
        __scopeDialog: a,
        trapFocus: i,
        onOpenAutoFocus: o,
        onCloseAutoFocus: u,
        ...c
      } = e,
      d = hr(Fi, a),
      p = v.useRef(null),
      m = At(n, p);
    return (
      A_(),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx(og, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: o,
            onUnmountAutoFocus: u,
            children: S.jsx(Ql, {
              role: "dialog",
              id: d.contentId,
              "aria-describedby": d.descriptionId,
              "aria-labelledby": d.titleId,
              "data-state": fg(d.open),
              ...c,
              ref: m,
              onDismiss: () => d.onOpenChange(!1),
            }),
          }),
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(Pk, { titleId: d.titleId }),
              S.jsx(Vk, { contentRef: p, descriptionId: d.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  cg = "DialogTitle",
  $_ = v.forwardRef((e, n) => {
    const { __scopeDialog: a, ...i } = e,
      o = hr(cg, a);
    return S.jsx(st.h2, { id: o.titleId, ...i, ref: n });
  });
$_.displayName = cg;
var G_ = "DialogDescription",
  Y_ = v.forwardRef((e, n) => {
    const { __scopeDialog: a, ...i } = e,
      o = hr(G_, a);
    return S.jsx(st.p, { id: o.descriptionId, ...i, ref: n });
  });
Y_.displayName = G_;
var Z_ = "DialogClose",
  K_ = v.forwardRef((e, n) => {
    const { __scopeDialog: a, ...i } = e,
      o = hr(Z_, a);
    return S.jsx(st.button, {
      type: "button",
      ...i,
      ref: n,
      onClick: Ae(e.onClick, () => o.onOpenChange(!1)),
    });
  });
K_.displayName = Z_;
function fg(e) {
  return e ? "open" : "closed";
}
var X_ = "DialogTitleWarning",
  [HP, Q_] = MN(X_, { contentName: Fi, titleName: cg, docsSlug: "dialog" }),
  Pk = ({ titleId: e }) => {
    const n = Q_(X_),
      a = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(a));
      }, [a, e]),
      null
    );
  },
  Bk = "DialogDescriptionWarning",
  Vk = ({ contentRef: e, descriptionId: n }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Q_(Bk).contentName
    }}.`;
    return (
      v.useEffect(() => {
        var u;
        const o =
          (u = e.current) == null ? void 0 : u.getAttribute("aria-describedby");
        n && o && (document.getElementById(n) || console.warn(i));
      }, [i, e, n]),
      null
    );
  },
  Hk = P_,
  Fk = H_,
  qk = F_,
  Ik = q_,
  $k = $_,
  Gk = Y_,
  Yk = K_;
function Zk({ ...e }) {
  return S.jsx(Hk, { "data-slot": "sheet", ...e });
}
function Kk({ ...e }) {
  return S.jsx(Fk, { "data-slot": "sheet-portal", ...e });
}
function Xk({ className: e, ...n }) {
  return S.jsx(qk, {
    "data-slot": "sheet-overlay",
    className: Ve(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      e
    ),
    ...n,
  });
}
function Qk({ className: e, children: n, side: a = "right", ...i }) {
  return S.jsxs(Kk, {
    children: [
      S.jsx(Xk, {}),
      S.jsxs(Ik, {
        "data-slot": "sheet-content",
        className: Ve(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          a === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          a === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          a === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          a === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...i,
        children: [
          n,
          S.jsxs(Yk, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
            children: [
              S.jsx(c_, { className: "size-4" }),
              S.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Wk({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "sheet-header",
    className: Ve("flex flex-col gap-1.5 p-4", e),
    ...n,
  });
}
function Jk({ className: e, ...n }) {
  return S.jsx($k, {
    "data-slot": "sheet-title",
    className: Ve("text-foreground font-semibold", e),
    ...n,
  });
}
function ej({ className: e, ...n }) {
  return S.jsx(Gk, {
    "data-slot": "sheet-description",
    className: Ve("text-muted-foreground text-sm", e),
    ...n,
  });
}
const tj = ["top", "right", "bottom", "left"],
  ni = Math.min,
  Nn = Math.max,
  af = Math.round,
  Uc = Math.floor,
  Nr = (e) => ({ x: e, y: e }),
  nj = { left: "right", right: "left", bottom: "top", top: "bottom" },
  rj = { start: "end", end: "start" };
function yp(e, n, a) {
  return Nn(e, ni(n, a));
}
function da(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function ha(e) {
  return e.split("-")[0];
}
function fo(e) {
  return e.split("-")[1];
}
function dg(e) {
  return e === "x" ? "y" : "x";
}
function hg(e) {
  return e === "y" ? "height" : "width";
}
function oa(e) {
  return ["top", "bottom"].includes(ha(e)) ? "y" : "x";
}
function mg(e) {
  return dg(oa(e));
}
function aj(e, n, a) {
  a === void 0 && (a = !1);
  const i = fo(e),
    o = mg(e),
    u = hg(o);
  let c =
    o === "x"
      ? i === (a ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return n.reference[u] > n.floating[u] && (c = sf(c)), [c, sf(c)];
}
function ij(e) {
  const n = sf(e);
  return [vp(e), n, vp(n)];
}
function vp(e) {
  return e.replace(/start|end/g, (n) => rj[n]);
}
function sj(e, n, a) {
  const i = ["left", "right"],
    o = ["right", "left"],
    u = ["top", "bottom"],
    c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return a ? (n ? o : i) : n ? i : o;
    case "left":
    case "right":
      return n ? u : c;
    default:
      return [];
  }
}
function oj(e, n, a, i) {
  const o = fo(e);
  let u = sj(ha(e), a === "start", i);
  return (
    o && ((u = u.map((c) => c + "-" + o)), n && (u = u.concat(u.map(vp)))), u
  );
}
function sf(e) {
  return e.replace(/left|right|bottom|top/g, (n) => nj[n]);
}
function lj(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function W_(e) {
  return typeof e != "number"
    ? lj(e)
    : { top: e, right: e, bottom: e, left: e };
}
function of(e) {
  const { x: n, y: a, width: i, height: o } = e;
  return {
    width: i,
    height: o,
    top: a,
    left: n,
    right: n + i,
    bottom: a + o,
    x: n,
    y: a,
  };
}
function zx(e, n, a) {
  let { reference: i, floating: o } = e;
  const u = oa(n),
    c = mg(n),
    d = hg(c),
    p = ha(n),
    m = u === "y",
    g = i.x + i.width / 2 - o.width / 2,
    y = i.y + i.height / 2 - o.height / 2,
    x = i[d] / 2 - o[d] / 2;
  let R;
  switch (p) {
    case "top":
      R = { x: g, y: i.y - o.height };
      break;
    case "bottom":
      R = { x: g, y: i.y + i.height };
      break;
    case "right":
      R = { x: i.x + i.width, y };
      break;
    case "left":
      R = { x: i.x - o.width, y };
      break;
    default:
      R = { x: i.x, y: i.y };
  }
  switch (fo(n)) {
    case "start":
      R[c] -= x * (a && m ? -1 : 1);
      break;
    case "end":
      R[c] += x * (a && m ? -1 : 1);
      break;
  }
  return R;
}
const uj = async (e, n, a) => {
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: u = [],
      platform: c,
    } = a,
    d = u.filter(Boolean),
    p = await (c.isRTL == null ? void 0 : c.isRTL(n));
  let m = await c.getElementRects({ reference: e, floating: n, strategy: o }),
    { x: g, y } = zx(m, i, p),
    x = i,
    R = {},
    E = 0;
  for (let _ = 0; _ < d.length; _++) {
    const { name: w, fn: A } = d[_],
      {
        x: C,
        y: N,
        data: k,
        reset: D,
      } = await A({
        x: g,
        y,
        initialPlacement: i,
        placement: x,
        strategy: o,
        middlewareData: R,
        rects: m,
        platform: c,
        elements: { reference: e, floating: n },
      });
    (g = C ?? g),
      (y = N ?? y),
      (R = { ...R, [w]: { ...R[w], ...k } }),
      D &&
        E <= 50 &&
        (E++,
        typeof D == "object" &&
          (D.placement && (x = D.placement),
          D.rects &&
            (m =
              D.rects === !0
                ? await c.getElementRects({
                    reference: e,
                    floating: n,
                    strategy: o,
                  })
                : D.rects),
          ({ x: g, y } = zx(m, x, p))),
        (_ = -1));
  }
  return { x: g, y, placement: x, strategy: o, middlewareData: R };
};
async function Ul(e, n) {
  var a;
  n === void 0 && (n = {});
  const { x: i, y: o, platform: u, rects: c, elements: d, strategy: p } = e,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: y = "floating",
      altBoundary: x = !1,
      padding: R = 0,
    } = da(n, e),
    E = W_(R),
    w = d[x ? (y === "floating" ? "reference" : "floating") : y],
    A = of(
      await u.getClippingRect({
        element:
          (a = await (u.isElement == null ? void 0 : u.isElement(w))) == null ||
          a
            ? w
            : w.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(d.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: p,
      })
    ),
    C =
      y === "floating"
        ? { x: i, y: o, width: c.floating.width, height: c.floating.height }
        : c.reference,
    N = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(d.floating)),
    k = (await (u.isElement == null ? void 0 : u.isElement(N)))
      ? (await (u.getScale == null ? void 0 : u.getScale(N))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    D = of(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: d,
            rect: C,
            offsetParent: N,
            strategy: p,
          })
        : C
    );
  return {
    top: (A.top - D.top + E.top) / k.y,
    bottom: (D.bottom - A.bottom + E.bottom) / k.y,
    left: (A.left - D.left + E.left) / k.x,
    right: (D.right - A.right + E.right) / k.x,
  };
}
const cj = (e) => ({
    name: "arrow",
    options: e,
    async fn(n) {
      const {
          x: a,
          y: i,
          placement: o,
          rects: u,
          platform: c,
          elements: d,
          middlewareData: p,
        } = n,
        { element: m, padding: g = 0 } = da(e, n) || {};
      if (m == null) return {};
      const y = W_(g),
        x = { x: a, y: i },
        R = mg(o),
        E = hg(R),
        _ = await c.getDimensions(m),
        w = R === "y",
        A = w ? "top" : "left",
        C = w ? "bottom" : "right",
        N = w ? "clientHeight" : "clientWidth",
        k = u.reference[E] + u.reference[R] - x[R] - u.floating[E],
        D = x[R] - u.reference[R],
        I = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
      let Y = I ? I[N] : 0;
      (!Y || !(await (c.isElement == null ? void 0 : c.isElement(I)))) &&
        (Y = d.floating[N] || u.floating[E]);
      const G = k / 2 - D / 2,
        J = Y / 2 - _[E] / 2 - 1,
        ye = ni(y[A], J),
        be = ni(y[C], J),
        oe = ye,
        ge = Y - _[E] - be,
        se = Y / 2 - _[E] / 2 + G,
        fe = yp(oe, se, ge),
        j =
          !p.arrow &&
          fo(o) != null &&
          se !== fe &&
          u.reference[E] / 2 - (se < oe ? ye : be) - _[E] / 2 < 0,
        Q = j ? (se < oe ? se - oe : se - ge) : 0;
      return {
        [R]: x[R] + Q,
        data: {
          [R]: fe,
          centerOffset: se - fe - Q,
          ...(j && { alignmentOffset: Q }),
        },
        reset: j,
      };
    },
  }),
  fj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(n) {
          var a, i;
          const {
              placement: o,
              middlewareData: u,
              rects: c,
              initialPlacement: d,
              platform: p,
              elements: m,
            } = n,
            {
              mainAxis: g = !0,
              crossAxis: y = !0,
              fallbackPlacements: x,
              fallbackStrategy: R = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: _ = !0,
              ...w
            } = da(e, n);
          if ((a = u.arrow) != null && a.alignmentOffset) return {};
          const A = ha(o),
            C = oa(d),
            N = ha(d) === d,
            k = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            D = x || (N || !_ ? [sf(d)] : ij(d)),
            I = E !== "none";
          !x && I && D.push(...oj(d, _, E, k));
          const Y = [d, ...D],
            G = await Ul(n, w),
            J = [];
          let ye = ((i = u.flip) == null ? void 0 : i.overflows) || [];
          if ((g && J.push(G[A]), y)) {
            const fe = aj(o, c, k);
            J.push(G[fe[0]], G[fe[1]]);
          }
          if (
            ((ye = [...ye, { placement: o, overflows: J }]),
            !J.every((fe) => fe <= 0))
          ) {
            var be, oe;
            const fe = (((be = u.flip) == null ? void 0 : be.index) || 0) + 1,
              j = Y[fe];
            if (j) {
              var ge;
              const V = y === "alignment" ? C !== oa(j) : !1,
                re = ((ge = ye[0]) == null ? void 0 : ge.overflows[0]) > 0;
              if (!V || re)
                return {
                  data: { index: fe, overflows: ye },
                  reset: { placement: j },
                };
            }
            let Q =
              (oe = ye
                .filter((V) => V.overflows[0] <= 0)
                .sort((V, re) => V.overflows[1] - re.overflows[1])[0]) == null
                ? void 0
                : oe.placement;
            if (!Q)
              switch (R) {
                case "bestFit": {
                  var se;
                  const V =
                    (se = ye
                      .filter((re) => {
                        if (I) {
                          const O = oa(re.placement);
                          return O === C || O === "y";
                        }
                        return !0;
                      })
                      .map((re) => [
                        re.placement,
                        re.overflows
                          .filter((O) => O > 0)
                          .reduce((O, H) => O + H, 0),
                      ])
                      .sort((re, O) => re[1] - O[1])[0]) == null
                      ? void 0
                      : se[0];
                  V && (Q = V);
                  break;
                }
                case "initialPlacement":
                  Q = d;
                  break;
              }
            if (o !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function Ux(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width,
  };
}
function Px(e) {
  return tj.some((n) => e[n] >= 0);
}
const dj = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(n) {
        const { rects: a } = n,
          { strategy: i = "referenceHidden", ...o } = da(e, n);
        switch (i) {
          case "referenceHidden": {
            const u = await Ul(n, { ...o, elementContext: "reference" }),
              c = Ux(u, a.reference);
            return {
              data: { referenceHiddenOffsets: c, referenceHidden: Px(c) },
            };
          }
          case "escaped": {
            const u = await Ul(n, { ...o, altBoundary: !0 }),
              c = Ux(u, a.floating);
            return { data: { escapedOffsets: c, escaped: Px(c) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function hj(e, n) {
  const { placement: a, platform: i, elements: o } = e,
    u = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)),
    c = ha(a),
    d = fo(a),
    p = oa(a) === "y",
    m = ["left", "top"].includes(c) ? -1 : 1,
    g = u && p ? -1 : 1,
    y = da(n, e);
  let {
    mainAxis: x,
    crossAxis: R,
    alignmentAxis: E,
  } = typeof y == "number"
    ? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis,
      };
  return (
    d && typeof E == "number" && (R = d === "end" ? E * -1 : E),
    p ? { x: R * g, y: x * m } : { x: x * m, y: R * g }
  );
}
const mj = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(n) {
          var a, i;
          const { x: o, y: u, placement: c, middlewareData: d } = n,
            p = await hj(n, e);
          return c === ((a = d.offset) == null ? void 0 : a.placement) &&
            (i = d.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: o + p.x, y: u + p.y, data: { ...p, placement: c } };
        },
      }
    );
  },
  pj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(n) {
          const { x: a, y: i, placement: o } = n,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: d = {
                fn: (w) => {
                  let { x: A, y: C } = w;
                  return { x: A, y: C };
                },
              },
              ...p
            } = da(e, n),
            m = { x: a, y: i },
            g = await Ul(n, p),
            y = oa(ha(o)),
            x = dg(y);
          let R = m[x],
            E = m[y];
          if (u) {
            const w = x === "y" ? "top" : "left",
              A = x === "y" ? "bottom" : "right",
              C = R + g[w],
              N = R - g[A];
            R = yp(C, R, N);
          }
          if (c) {
            const w = y === "y" ? "top" : "left",
              A = y === "y" ? "bottom" : "right",
              C = E + g[w],
              N = E - g[A];
            E = yp(C, E, N);
          }
          const _ = d.fn({ ...n, [x]: R, [y]: E });
          return {
            ..._,
            data: { x: _.x - a, y: _.y - i, enabled: { [x]: u, [y]: c } },
          };
        },
      }
    );
  },
  gj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(n) {
          const { x: a, y: i, placement: o, rects: u, middlewareData: c } = n,
            { offset: d = 0, mainAxis: p = !0, crossAxis: m = !0 } = da(e, n),
            g = { x: a, y: i },
            y = oa(o),
            x = dg(y);
          let R = g[x],
            E = g[y];
          const _ = da(d, n),
            w =
              typeof _ == "number"
                ? { mainAxis: _, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ..._ };
          if (p) {
            const N = x === "y" ? "height" : "width",
              k = u.reference[x] - u.floating[N] + w.mainAxis,
              D = u.reference[x] + u.reference[N] - w.mainAxis;
            R < k ? (R = k) : R > D && (R = D);
          }
          if (m) {
            var A, C;
            const N = x === "y" ? "width" : "height",
              k = ["top", "left"].includes(ha(o)),
              D =
                u.reference[y] -
                u.floating[N] +
                ((k && ((A = c.offset) == null ? void 0 : A[y])) || 0) +
                (k ? 0 : w.crossAxis),
              I =
                u.reference[y] +
                u.reference[N] +
                (k ? 0 : ((C = c.offset) == null ? void 0 : C[y]) || 0) -
                (k ? w.crossAxis : 0);
            E < D ? (E = D) : E > I && (E = I);
          }
          return { [x]: R, [y]: E };
        },
      }
    );
  },
  yj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(n) {
          var a, i;
          const { placement: o, rects: u, platform: c, elements: d } = n,
            { apply: p = () => {}, ...m } = da(e, n),
            g = await Ul(n, m),
            y = ha(o),
            x = fo(o),
            R = oa(o) === "y",
            { width: E, height: _ } = u.floating;
          let w, A;
          y === "top" || y === "bottom"
            ? ((w = y),
              (A =
                x ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((A = y), (w = x === "end" ? "top" : "bottom"));
          const C = _ - g.top - g.bottom,
            N = E - g.left - g.right,
            k = ni(_ - g[w], C),
            D = ni(E - g[A], N),
            I = !n.middlewareData.shift;
          let Y = k,
            G = D;
          if (
            ((a = n.middlewareData.shift) != null && a.enabled.x && (G = N),
            (i = n.middlewareData.shift) != null && i.enabled.y && (Y = C),
            I && !x)
          ) {
            const ye = Nn(g.left, 0),
              be = Nn(g.right, 0),
              oe = Nn(g.top, 0),
              ge = Nn(g.bottom, 0);
            R
              ? (G =
                  E -
                  2 * (ye !== 0 || be !== 0 ? ye + be : Nn(g.left, g.right)))
              : (Y =
                  _ -
                  2 * (oe !== 0 || ge !== 0 ? oe + ge : Nn(g.top, g.bottom)));
          }
          await p({ ...n, availableWidth: G, availableHeight: Y });
          const J = await c.getDimensions(d.floating);
          return E !== J.width || _ !== J.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Hf() {
  return typeof window < "u";
}
function ho(e) {
  return J_(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Dn(e) {
  var n;
  return (
    (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) ||
    window
  );
}
function Lr(e) {
  var n;
  return (n = (J_(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : n.documentElement;
}
function J_(e) {
  return Hf() ? e instanceof Node || e instanceof Dn(e).Node : !1;
}
function or(e) {
  return Hf() ? e instanceof Element || e instanceof Dn(e).Element : !1;
}
function kr(e) {
  return Hf() ? e instanceof HTMLElement || e instanceof Dn(e).HTMLElement : !1;
}
function Bx(e) {
  return !Hf() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Dn(e).ShadowRoot;
}
function nu(e) {
  const { overflow: n, overflowX: a, overflowY: i, display: o } = lr(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(n + i + a) &&
    !["inline", "contents"].includes(o)
  );
}
function vj(e) {
  return ["table", "td", "th"].includes(ho(e));
}
function Ff(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function pg(e) {
  const n = gg(),
    a = or(e) ? lr(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((i) =>
      a[i] ? a[i] !== "none" : !1
    ) ||
    (a.containerType ? a.containerType !== "normal" : !1) ||
    (!n && (a.backdropFilter ? a.backdropFilter !== "none" : !1)) ||
    (!n && (a.filter ? a.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (i) => (a.willChange || "").includes(i)
    ) ||
    ["paint", "layout", "strict", "content"].some((i) =>
      (a.contain || "").includes(i)
    )
  );
}
function bj(e) {
  let n = ri(e);
  for (; kr(n) && !to(n); ) {
    if (pg(n)) return n;
    if (Ff(n)) return null;
    n = ri(n);
  }
  return null;
}
function gg() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function to(e) {
  return ["html", "body", "#document"].includes(ho(e));
}
function lr(e) {
  return Dn(e).getComputedStyle(e);
}
function qf(e) {
  return or(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ri(e) {
  if (ho(e) === "html") return e;
  const n = e.assignedSlot || e.parentNode || (Bx(e) && e.host) || Lr(e);
  return Bx(n) ? n.host : n;
}
function eE(e) {
  const n = ri(e);
  return to(n)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : kr(n) && nu(n)
    ? n
    : eE(n);
}
function Pl(e, n, a) {
  var i;
  n === void 0 && (n = []), a === void 0 && (a = !0);
  const o = eE(e),
    u = o === ((i = e.ownerDocument) == null ? void 0 : i.body),
    c = Dn(o);
  if (u) {
    const d = bp(c);
    return n.concat(
      c,
      c.visualViewport || [],
      nu(o) ? o : [],
      d && a ? Pl(d) : []
    );
  }
  return n.concat(o, Pl(o, [], a));
}
function bp(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tE(e) {
  const n = lr(e);
  let a = parseFloat(n.width) || 0,
    i = parseFloat(n.height) || 0;
  const o = kr(e),
    u = o ? e.offsetWidth : a,
    c = o ? e.offsetHeight : i,
    d = af(a) !== u || af(i) !== c;
  return d && ((a = u), (i = c)), { width: a, height: i, $: d };
}
function yg(e) {
  return or(e) ? e : e.contextElement;
}
function qs(e) {
  const n = yg(e);
  if (!kr(n)) return Nr(1);
  const a = n.getBoundingClientRect(),
    { width: i, height: o, $: u } = tE(n);
  let c = (u ? af(a.width) : a.width) / i,
    d = (u ? af(a.height) : a.height) / o;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    { x: c, y: d }
  );
}
const xj = Nr(0);
function nE(e) {
  const n = Dn(e);
  return !gg() || !n.visualViewport
    ? xj
    : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function wj(e, n, a) {
  return n === void 0 && (n = !1), !a || (n && a !== Dn(e)) ? !1 : n;
}
function qi(e, n, a, i) {
  n === void 0 && (n = !1), a === void 0 && (a = !1);
  const o = e.getBoundingClientRect(),
    u = yg(e);
  let c = Nr(1);
  n && (i ? or(i) && (c = qs(i)) : (c = qs(e)));
  const d = wj(u, a, i) ? nE(u) : Nr(0);
  let p = (o.left + d.x) / c.x,
    m = (o.top + d.y) / c.y,
    g = o.width / c.x,
    y = o.height / c.y;
  if (u) {
    const x = Dn(u),
      R = i && or(i) ? Dn(i) : i;
    let E = x,
      _ = bp(E);
    for (; _ && i && R !== E; ) {
      const w = qs(_),
        A = _.getBoundingClientRect(),
        C = lr(_),
        N = A.left + (_.clientLeft + parseFloat(C.paddingLeft)) * w.x,
        k = A.top + (_.clientTop + parseFloat(C.paddingTop)) * w.y;
      (p *= w.x),
        (m *= w.y),
        (g *= w.x),
        (y *= w.y),
        (p += N),
        (m += k),
        (E = Dn(_)),
        (_ = bp(E));
    }
  }
  return of({ width: g, height: y, x: p, y: m });
}
function vg(e, n) {
  const a = qf(e).scrollLeft;
  return n ? n.left + a : qi(Lr(e)).left + a;
}
function rE(e, n, a) {
  a === void 0 && (a = !1);
  const i = e.getBoundingClientRect(),
    o = i.left + n.scrollLeft - (a ? 0 : vg(e, i)),
    u = i.top + n.scrollTop;
  return { x: o, y: u };
}
function Sj(e) {
  let { elements: n, rect: a, offsetParent: i, strategy: o } = e;
  const u = o === "fixed",
    c = Lr(i),
    d = n ? Ff(n.floating) : !1;
  if (i === c || (d && u)) return a;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = Nr(1);
  const g = Nr(0),
    y = kr(i);
  if (
    (y || (!y && !u)) &&
    ((ho(i) !== "body" || nu(c)) && (p = qf(i)), kr(i))
  ) {
    const R = qi(i);
    (m = qs(i)), (g.x = R.x + i.clientLeft), (g.y = R.y + i.clientTop);
  }
  const x = c && !y && !u ? rE(c, p, !0) : Nr(0);
  return {
    width: a.width * m.x,
    height: a.height * m.y,
    x: a.x * m.x - p.scrollLeft * m.x + g.x + x.x,
    y: a.y * m.y - p.scrollTop * m.y + g.y + x.y,
  };
}
function _j(e) {
  return Array.from(e.getClientRects());
}
function Ej(e) {
  const n = Lr(e),
    a = qf(e),
    i = e.ownerDocument.body,
    o = Nn(n.scrollWidth, n.clientWidth, i.scrollWidth, i.clientWidth),
    u = Nn(n.scrollHeight, n.clientHeight, i.scrollHeight, i.clientHeight);
  let c = -a.scrollLeft + vg(e);
  const d = -a.scrollTop;
  return (
    lr(i).direction === "rtl" && (c += Nn(n.clientWidth, i.clientWidth) - o),
    { width: o, height: u, x: c, y: d }
  );
}
function Tj(e, n) {
  const a = Dn(e),
    i = Lr(e),
    o = a.visualViewport;
  let u = i.clientWidth,
    c = i.clientHeight,
    d = 0,
    p = 0;
  if (o) {
    (u = o.width), (c = o.height);
    const m = gg();
    (!m || (m && n === "fixed")) && ((d = o.offsetLeft), (p = o.offsetTop));
  }
  return { width: u, height: c, x: d, y: p };
}
function Rj(e, n) {
  const a = qi(e, !0, n === "fixed"),
    i = a.top + e.clientTop,
    o = a.left + e.clientLeft,
    u = kr(e) ? qs(e) : Nr(1),
    c = e.clientWidth * u.x,
    d = e.clientHeight * u.y,
    p = o * u.x,
    m = i * u.y;
  return { width: c, height: d, x: p, y: m };
}
function Vx(e, n, a) {
  let i;
  if (n === "viewport") i = Tj(e, a);
  else if (n === "document") i = Ej(Lr(e));
  else if (or(n)) i = Rj(n, a);
  else {
    const o = nE(e);
    i = { x: n.x - o.x, y: n.y - o.y, width: n.width, height: n.height };
  }
  return of(i);
}
function aE(e, n) {
  const a = ri(e);
  return a === n || !or(a) || to(a)
    ? !1
    : lr(a).position === "fixed" || aE(a, n);
}
function Aj(e, n) {
  const a = n.get(e);
  if (a) return a;
  let i = Pl(e, [], !1).filter((d) => or(d) && ho(d) !== "body"),
    o = null;
  const u = lr(e).position === "fixed";
  let c = u ? ri(e) : e;
  for (; or(c) && !to(c); ) {
    const d = lr(c),
      p = pg(c);
    !p && d.position === "fixed" && (o = null),
      (
        u
          ? !p && !o
          : (!p &&
              d.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (nu(c) && !p && aE(e, c))
      )
        ? (i = i.filter((g) => g !== c))
        : (o = d),
      (c = ri(c));
  }
  return n.set(e, i), i;
}
function Cj(e) {
  let { element: n, boundary: a, rootBoundary: i, strategy: o } = e;
  const c = [
      ...(a === "clippingAncestors"
        ? Ff(n)
          ? []
          : Aj(n, this._c)
        : [].concat(a)),
      i,
    ],
    d = c[0],
    p = c.reduce((m, g) => {
      const y = Vx(n, g, o);
      return (
        (m.top = Nn(y.top, m.top)),
        (m.right = ni(y.right, m.right)),
        (m.bottom = ni(y.bottom, m.bottom)),
        (m.left = Nn(y.left, m.left)),
        m
      );
    }, Vx(n, d, o));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function Oj(e) {
  const { width: n, height: a } = tE(e);
  return { width: n, height: a };
}
function Mj(e, n, a) {
  const i = kr(n),
    o = Lr(n),
    u = a === "fixed",
    c = qi(e, !0, u, n);
  let d = { scrollLeft: 0, scrollTop: 0 };
  const p = Nr(0);
  function m() {
    p.x = vg(o);
  }
  if (i || (!i && !u))
    if (((ho(n) !== "body" || nu(o)) && (d = qf(n)), i)) {
      const R = qi(n, !0, u, n);
      (p.x = R.x + n.clientLeft), (p.y = R.y + n.clientTop);
    } else o && m();
  u && !i && o && m();
  const g = o && !i && !u ? rE(o, d) : Nr(0),
    y = c.left + d.scrollLeft - p.x - g.x,
    x = c.top + d.scrollTop - p.y - g.y;
  return { x: y, y: x, width: c.width, height: c.height };
}
function Fm(e) {
  return lr(e).position === "static";
}
function Hx(e, n) {
  if (!kr(e) || lr(e).position === "fixed") return null;
  if (n) return n(e);
  let a = e.offsetParent;
  return Lr(e) === a && (a = a.ownerDocument.body), a;
}
function iE(e, n) {
  const a = Dn(e);
  if (Ff(e)) return a;
  if (!kr(e)) {
    let o = ri(e);
    for (; o && !to(o); ) {
      if (or(o) && !Fm(o)) return o;
      o = ri(o);
    }
    return a;
  }
  let i = Hx(e, n);
  for (; i && vj(i) && Fm(i); ) i = Hx(i, n);
  return i && to(i) && Fm(i) && !pg(i) ? a : i || bj(e) || a;
}
const Nj = async function (e) {
  const n = this.getOffsetParent || iE,
    a = this.getDimensions,
    i = await a(e.floating);
  return {
    reference: Mj(e.reference, await n(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function Dj(e) {
  return lr(e).direction === "rtl";
}
const kj = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sj,
  getDocumentElement: Lr,
  getClippingRect: Cj,
  getOffsetParent: iE,
  getElementRects: Nj,
  getClientRects: _j,
  getDimensions: Oj,
  getScale: qs,
  isElement: or,
  isRTL: Dj,
};
function sE(e, n) {
  return (
    e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height
  );
}
function jj(e, n) {
  let a = null,
    i;
  const o = Lr(e);
  function u() {
    var d;
    clearTimeout(i), (d = a) == null || d.disconnect(), (a = null);
  }
  function c(d, p) {
    d === void 0 && (d = !1), p === void 0 && (p = 1), u();
    const m = e.getBoundingClientRect(),
      { left: g, top: y, width: x, height: R } = m;
    if ((d || n(), !x || !R)) return;
    const E = Uc(y),
      _ = Uc(o.clientWidth - (g + x)),
      w = Uc(o.clientHeight - (y + R)),
      A = Uc(g),
      N = {
        rootMargin: -E + "px " + -_ + "px " + -w + "px " + -A + "px",
        threshold: Nn(0, ni(1, p)) || 1,
      };
    let k = !0;
    function D(I) {
      const Y = I[0].intersectionRatio;
      if (Y !== p) {
        if (!k) return c();
        Y
          ? c(!1, Y)
          : (i = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      Y === 1 && !sE(m, e.getBoundingClientRect()) && c(), (k = !1);
    }
    try {
      a = new IntersectionObserver(D, { ...N, root: o.ownerDocument });
    } catch {
      a = new IntersectionObserver(D, N);
    }
    a.observe(e);
  }
  return c(!0), u;
}
function Lj(e, n, a, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: d = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = i,
    m = yg(e),
    g = o || u ? [...(m ? Pl(m) : []), ...Pl(n)] : [];
  g.forEach((A) => {
    o && A.addEventListener("scroll", a, { passive: !0 }),
      u && A.addEventListener("resize", a);
  });
  const y = m && d ? jj(m, a) : null;
  let x = -1,
    R = null;
  c &&
    ((R = new ResizeObserver((A) => {
      let [C] = A;
      C &&
        C.target === m &&
        R &&
        (R.unobserve(n),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var N;
          (N = R) == null || N.observe(n);
        }))),
        a();
    })),
    m && !p && R.observe(m),
    R.observe(n));
  let E,
    _ = p ? qi(e) : null;
  p && w();
  function w() {
    const A = qi(e);
    _ && !sE(_, A) && a(), (_ = A), (E = requestAnimationFrame(w));
  }
  return (
    a(),
    () => {
      var A;
      g.forEach((C) => {
        o && C.removeEventListener("scroll", a),
          u && C.removeEventListener("resize", a);
      }),
        y == null || y(),
        (A = R) == null || A.disconnect(),
        (R = null),
        p && cancelAnimationFrame(E);
    }
  );
}
const zj = mj,
  Uj = pj,
  Pj = fj,
  Bj = yj,
  Vj = dj,
  Fx = cj,
  Hj = gj,
  Fj = (e, n, a) => {
    const i = new Map(),
      o = { platform: kj, ...a },
      u = { ...o.platform, _c: i };
    return uj(e, n, { ...o, platform: u });
  };
var $c = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function lf(e, n) {
  if (e === n) return !0;
  if (typeof e != typeof n) return !1;
  if (typeof e == "function" && e.toString() === n.toString()) return !0;
  let a, i, o;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((a = e.length), a !== n.length)) return !1;
      for (i = a; i-- !== 0; ) if (!lf(e[i], n[i])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (a = o.length), a !== Object.keys(n).length))
      return !1;
    for (i = a; i-- !== 0; ) if (!{}.hasOwnProperty.call(n, o[i])) return !1;
    for (i = a; i-- !== 0; ) {
      const u = o[i];
      if (!(u === "_owner" && e.$$typeof) && !lf(e[u], n[u])) return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function oE(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qx(e, n) {
  const a = oE(e);
  return Math.round(n * a) / a;
}
function qm(e) {
  const n = v.useRef(e);
  return (
    $c(() => {
      n.current = e;
    }),
    n
  );
}
function qj(e) {
  e === void 0 && (e = {});
  const {
      placement: n = "bottom",
      strategy: a = "absolute",
      middleware: i = [],
      platform: o,
      elements: { reference: u, floating: c } = {},
      transform: d = !0,
      whileElementsMounted: p,
      open: m,
    } = e,
    [g, y] = v.useState({
      x: 0,
      y: 0,
      strategy: a,
      placement: n,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, R] = v.useState(i);
  lf(x, i) || R(i);
  const [E, _] = v.useState(null),
    [w, A] = v.useState(null),
    C = v.useCallback((V) => {
      V !== I.current && ((I.current = V), _(V));
    }, []),
    N = v.useCallback((V) => {
      V !== Y.current && ((Y.current = V), A(V));
    }, []),
    k = u || E,
    D = c || w,
    I = v.useRef(null),
    Y = v.useRef(null),
    G = v.useRef(g),
    J = p != null,
    ye = qm(p),
    be = qm(o),
    oe = qm(m),
    ge = v.useCallback(() => {
      if (!I.current || !Y.current) return;
      const V = { placement: n, strategy: a, middleware: x };
      be.current && (V.platform = be.current),
        Fj(I.current, Y.current, V).then((re) => {
          const O = { ...re, isPositioned: oe.current !== !1 };
          se.current &&
            !lf(G.current, O) &&
            ((G.current = O),
            Of.flushSync(() => {
              y(O);
            }));
        });
    }, [x, n, a, be, oe]);
  $c(() => {
    m === !1 &&
      G.current.isPositioned &&
      ((G.current.isPositioned = !1), y((V) => ({ ...V, isPositioned: !1 })));
  }, [m]);
  const se = v.useRef(!1);
  $c(
    () => (
      (se.current = !0),
      () => {
        se.current = !1;
      }
    ),
    []
  ),
    $c(() => {
      if ((k && (I.current = k), D && (Y.current = D), k && D)) {
        if (ye.current) return ye.current(k, D, ge);
        ge();
      }
    }, [k, D, ge, ye, J]);
  const fe = v.useMemo(
      () => ({ reference: I, floating: Y, setReference: C, setFloating: N }),
      [C, N]
    ),
    j = v.useMemo(() => ({ reference: k, floating: D }), [k, D]),
    Q = v.useMemo(() => {
      const V = { position: a, left: 0, top: 0 };
      if (!j.floating) return V;
      const re = qx(j.floating, g.x),
        O = qx(j.floating, g.y);
      return d
        ? {
            ...V,
            transform: "translate(" + re + "px, " + O + "px)",
            ...(oE(j.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: a, left: re, top: O };
    }, [a, d, j.floating, g.x, g.y]);
  return v.useMemo(
    () => ({ ...g, update: ge, refs: fe, elements: j, floatingStyles: Q }),
    [g, ge, fe, j, Q]
  );
}
const Ij = (e) => {
    function n(a) {
      return {}.hasOwnProperty.call(a, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(a) {
        const { element: i, padding: o } = typeof e == "function" ? e(a) : e;
        return i && n(i)
          ? i.current != null
            ? Fx({ element: i.current, padding: o }).fn(a)
            : {}
          : i
          ? Fx({ element: i, padding: o }).fn(a)
          : {};
      },
    };
  },
  $j = (e, n) => ({ ...zj(e), options: [e, n] }),
  Gj = (e, n) => ({ ...Uj(e), options: [e, n] }),
  Yj = (e, n) => ({ ...Hj(e), options: [e, n] }),
  Zj = (e, n) => ({ ...Pj(e), options: [e, n] }),
  Kj = (e, n) => ({ ...Bj(e), options: [e, n] }),
  Xj = (e, n) => ({ ...Vj(e), options: [e, n] }),
  Qj = (e, n) => ({ ...Ij(e), options: [e, n] });
var Wj = "Arrow",
  lE = v.forwardRef((e, n) => {
    const { children: a, width: i = 10, height: o = 5, ...u } = e;
    return S.jsx(st.svg, {
      ...u,
      ref: n,
      width: i,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? a : S.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
lE.displayName = Wj;
var Jj = lE;
function e4(e) {
  const [n, a] = v.useState(void 0);
  return (
    fa(() => {
      if (e) {
        a({ width: e.offsetWidth, height: e.offsetHeight });
        const i = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const u = o[0];
          let c, d;
          if ("borderBoxSize" in u) {
            const p = u.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            (c = m.inlineSize), (d = m.blockSize);
          } else (c = e.offsetWidth), (d = e.offsetHeight);
          a({ width: c, height: d });
        });
        return i.observe(e, { box: "border-box" }), () => i.unobserve(e);
      } else a(void 0);
    }, [e]),
    n
  );
}
var bg = "Popper",
  [uE, If] = si(bg),
  [t4, cE] = uE(bg),
  fE = (e) => {
    const { __scopePopper: n, children: a } = e,
      [i, o] = v.useState(null);
    return S.jsx(t4, { scope: n, anchor: i, onAnchorChange: o, children: a });
  };
fE.displayName = bg;
var dE = "PopperAnchor",
  hE = v.forwardRef((e, n) => {
    const { __scopePopper: a, virtualRef: i, ...o } = e,
      u = cE(dE, a),
      c = v.useRef(null),
      d = At(n, c);
    return (
      v.useEffect(() => {
        u.onAnchorChange((i == null ? void 0 : i.current) || c.current);
      }),
      i ? null : S.jsx(st.div, { ...o, ref: d })
    );
  });
hE.displayName = dE;
var xg = "PopperContent",
  [n4, r4] = uE(xg),
  mE = v.forwardRef((e, n) => {
    var Oe, ze, Xe, mt, an, Gt;
    const {
        __scopePopper: a,
        side: i = "bottom",
        sideOffset: o = 0,
        align: u = "center",
        alignOffset: c = 0,
        arrowPadding: d = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: y = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: R = "optimized",
        onPlaced: E,
        ..._
      } = e,
      w = cE(xg, a),
      [A, C] = v.useState(null),
      N = At(n, (bn) => C(bn)),
      [k, D] = v.useState(null),
      I = e4(k),
      Y = (I == null ? void 0 : I.width) ?? 0,
      G = (I == null ? void 0 : I.height) ?? 0,
      J = i + (u !== "center" ? "-" + u : ""),
      ye =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      be = Array.isArray(m) ? m : [m],
      oe = be.length > 0,
      ge = { padding: ye, boundary: be.filter(i4), altBoundary: oe },
      {
        refs: se,
        floatingStyles: fe,
        placement: j,
        isPositioned: Q,
        middlewareData: V,
      } = qj({
        strategy: "fixed",
        placement: J,
        whileElementsMounted: (...bn) =>
          Lj(...bn, { animationFrame: R === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          $j({ mainAxis: o + G, alignmentAxis: c }),
          p &&
            Gj({
              mainAxis: !0,
              crossAxis: !1,
              limiter: y === "partial" ? Yj() : void 0,
              ...ge,
            }),
          p && Zj({ ...ge }),
          Kj({
            ...ge,
            apply: ({
              elements: bn,
              rects: xn,
              availableWidth: pa,
              availableHeight: ga,
            }) => {
              const { width: Ot, height: oi } = xn.reference,
                Mt = bn.floating.style;
              Mt.setProperty("--radix-popper-available-width", `${pa}px`),
                Mt.setProperty("--radix-popper-available-height", `${ga}px`),
                Mt.setProperty("--radix-popper-anchor-width", `${Ot}px`),
                Mt.setProperty("--radix-popper-anchor-height", `${oi}px`);
            },
          }),
          k && Qj({ element: k, padding: d }),
          s4({ arrowWidth: Y, arrowHeight: G }),
          x && Xj({ strategy: "referenceHidden", ...ge }),
        ],
      }),
      [re, O] = yE(j),
      H = Ln(E);
    fa(() => {
      Q && (H == null || H());
    }, [Q, H]);
    const ie = (Oe = V.arrow) == null ? void 0 : Oe.x,
      W = (ze = V.arrow) == null ? void 0 : ze.y,
      le = ((Xe = V.arrow) == null ? void 0 : Xe.centerOffset) !== 0,
      [Ce, de] = v.useState();
    return (
      fa(() => {
        A && de(window.getComputedStyle(A).zIndex);
      }, [A]),
      S.jsx("div", {
        ref: se.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: Q ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ce,
          "--radix-popper-transform-origin": [
            (mt = V.transformOrigin) == null ? void 0 : mt.x,
            (an = V.transformOrigin) == null ? void 0 : an.y,
          ].join(" "),
          ...(((Gt = V.hide) == null ? void 0 : Gt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: S.jsx(n4, {
          scope: a,
          placedSide: re,
          onArrowChange: D,
          arrowX: ie,
          arrowY: W,
          shouldHideArrow: le,
          children: S.jsx(st.div, {
            "data-side": re,
            "data-align": O,
            ..._,
            ref: N,
            style: { ..._.style, animation: Q ? void 0 : "none" },
          }),
        }),
      })
    );
  });
mE.displayName = xg;
var pE = "PopperArrow",
  a4 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  gE = v.forwardRef(function (n, a) {
    const { __scopePopper: i, ...o } = n,
      u = r4(pE, i),
      c = a4[u.placedSide];
    return S.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: S.jsx(Jj, {
        ...o,
        ref: a,
        style: { ...o.style, display: "block" },
      }),
    });
  });
gE.displayName = pE;
function i4(e) {
  return e !== null;
}
var s4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var w, A, C;
    const { placement: a, rects: i, middlewareData: o } = n,
      c = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      d = c ? 0 : e.arrowWidth,
      p = c ? 0 : e.arrowHeight,
      [m, g] = yE(a),
      y = { start: "0%", center: "50%", end: "100%" }[g],
      x = (((A = o.arrow) == null ? void 0 : A.x) ?? 0) + d / 2,
      R = (((C = o.arrow) == null ? void 0 : C.y) ?? 0) + p / 2;
    let E = "",
      _ = "";
    return (
      m === "bottom"
        ? ((E = c ? y : `${x}px`), (_ = `${-p}px`))
        : m === "top"
        ? ((E = c ? y : `${x}px`), (_ = `${i.floating.height + p}px`))
        : m === "right"
        ? ((E = `${-p}px`), (_ = c ? y : `${R}px`))
        : m === "left" &&
          ((E = `${i.floating.width + p}px`), (_ = c ? y : `${R}px`)),
      { data: { x: E, y: _ } }
    );
  },
});
function yE(e) {
  const [n, a = "center"] = e.split("-");
  return [n, a];
}
var vE = fE,
  bE = hE,
  xE = mE,
  wE = gE,
  [$f, FP] = si("Tooltip", [If]),
  Gf = If(),
  SE = "TooltipProvider",
  o4 = 700,
  xp = "tooltip.open",
  [l4, wg] = $f(SE),
  _E = (e) => {
    const {
        __scopeTooltip: n,
        delayDuration: a = o4,
        skipDelayDuration: i = 300,
        disableHoverableContent: o = !1,
        children: u,
      } = e,
      c = v.useRef(!0),
      d = v.useRef(!1),
      p = v.useRef(0);
    return (
      v.useEffect(() => {
        const m = p.current;
        return () => window.clearTimeout(m);
      }, []),
      S.jsx(l4, {
        scope: n,
        isOpenDelayedRef: c,
        delayDuration: a,
        onOpen: v.useCallback(() => {
          window.clearTimeout(p.current), (c.current = !1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(p.current),
            (p.current = window.setTimeout(() => (c.current = !0), i));
        }, [i]),
        isPointerInTransitRef: d,
        onPointerInTransitChange: v.useCallback((m) => {
          d.current = m;
        }, []),
        disableHoverableContent: o,
        children: u,
      })
    );
  };
_E.displayName = SE;
var Bl = "Tooltip",
  [u4, ru] = $f(Bl),
  EE = (e) => {
    const {
        __scopeTooltip: n,
        children: a,
        open: i,
        defaultOpen: o,
        onOpenChange: u,
        disableHoverableContent: c,
        delayDuration: d,
      } = e,
      p = wg(Bl, e.__scopeTooltip),
      m = Gf(n),
      [g, y] = v.useState(null),
      x = Ui(),
      R = v.useRef(0),
      E = c ?? p.disableHoverableContent,
      _ = d ?? p.delayDuration,
      w = v.useRef(!1),
      [A, C] = Jl({
        prop: i,
        defaultProp: o ?? !1,
        onChange: (Y) => {
          Y
            ? (p.onOpen(), document.dispatchEvent(new CustomEvent(xp)))
            : p.onClose(),
            u == null || u(Y);
        },
        caller: Bl,
      }),
      N = v.useMemo(
        () => (A ? (w.current ? "delayed-open" : "instant-open") : "closed"),
        [A]
      ),
      k = v.useCallback(() => {
        window.clearTimeout(R.current),
          (R.current = 0),
          (w.current = !1),
          C(!0);
      }, [C]),
      D = v.useCallback(() => {
        window.clearTimeout(R.current), (R.current = 0), C(!1);
      }, [C]),
      I = v.useCallback(() => {
        window.clearTimeout(R.current),
          (R.current = window.setTimeout(() => {
            (w.current = !0), C(!0), (R.current = 0);
          }, _));
      }, [_, C]);
    return (
      v.useEffect(
        () => () => {
          R.current && (window.clearTimeout(R.current), (R.current = 0));
        },
        []
      ),
      S.jsx(vE, {
        ...m,
        children: S.jsx(u4, {
          scope: n,
          contentId: x,
          open: A,
          stateAttribute: N,
          trigger: g,
          onTriggerChange: y,
          onTriggerEnter: v.useCallback(() => {
            p.isOpenDelayedRef.current ? I() : k();
          }, [p.isOpenDelayedRef, I, k]),
          onTriggerLeave: v.useCallback(() => {
            E ? D() : (window.clearTimeout(R.current), (R.current = 0));
          }, [D, E]),
          onOpen: k,
          onClose: D,
          disableHoverableContent: E,
          children: a,
        }),
      })
    );
  };
EE.displayName = Bl;
var wp = "TooltipTrigger",
  TE = v.forwardRef((e, n) => {
    const { __scopeTooltip: a, ...i } = e,
      o = ru(wp, a),
      u = wg(wp, a),
      c = Gf(a),
      d = v.useRef(null),
      p = At(n, d, o.onTriggerChange),
      m = v.useRef(!1),
      g = v.useRef(!1),
      y = v.useCallback(() => (m.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", y),
        [y]
      ),
      S.jsx(bE, {
        asChild: !0,
        ...c,
        children: S.jsx(st.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...i,
          ref: p,
          onPointerMove: Ae(e.onPointerMove, (x) => {
            x.pointerType !== "touch" &&
              !g.current &&
              !u.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: Ae(e.onPointerLeave, () => {
            o.onTriggerLeave(), (g.current = !1);
          }),
          onPointerDown: Ae(e.onPointerDown, () => {
            o.open && o.onClose(),
              (m.current = !0),
              document.addEventListener("pointerup", y, { once: !0 });
          }),
          onFocus: Ae(e.onFocus, () => {
            m.current || o.onOpen();
          }),
          onBlur: Ae(e.onBlur, o.onClose),
          onClick: Ae(e.onClick, o.onClose),
        }),
      })
    );
  });
TE.displayName = wp;
var Sg = "TooltipPortal",
  [c4, f4] = $f(Sg, { forceMount: void 0 }),
  RE = (e) => {
    const { __scopeTooltip: n, forceMount: a, children: i, container: o } = e,
      u = ru(Sg, n);
    return S.jsx(c4, {
      scope: n,
      forceMount: a,
      children: S.jsx(fr, {
        present: a || u.open,
        children: S.jsx(Wl, { asChild: !0, container: o, children: i }),
      }),
    });
  };
RE.displayName = Sg;
var no = "TooltipContent",
  AE = v.forwardRef((e, n) => {
    const a = f4(no, e.__scopeTooltip),
      { forceMount: i = a.forceMount, side: o = "top", ...u } = e,
      c = ru(no, e.__scopeTooltip);
    return S.jsx(fr, {
      present: i || c.open,
      children: c.disableHoverableContent
        ? S.jsx(CE, { side: o, ...u, ref: n })
        : S.jsx(d4, { side: o, ...u, ref: n }),
    });
  }),
  d4 = v.forwardRef((e, n) => {
    const a = ru(no, e.__scopeTooltip),
      i = wg(no, e.__scopeTooltip),
      o = v.useRef(null),
      u = At(n, o),
      [c, d] = v.useState(null),
      { trigger: p, onClose: m } = a,
      g = o.current,
      { onPointerInTransitChange: y } = i,
      x = v.useCallback(() => {
        d(null), y(!1);
      }, [y]),
      R = v.useCallback(
        (E, _) => {
          const w = E.currentTarget,
            A = { x: E.clientX, y: E.clientY },
            C = g4(A, w.getBoundingClientRect()),
            N = y4(A, C),
            k = v4(_.getBoundingClientRect()),
            D = x4([...N, ...k]);
          d(D), y(!0);
        },
        [y]
      );
    return (
      v.useEffect(() => () => x(), [x]),
      v.useEffect(() => {
        if (p && g) {
          const E = (w) => R(w, g),
            _ = (w) => R(w, p);
          return (
            p.addEventListener("pointerleave", E),
            g.addEventListener("pointerleave", _),
            () => {
              p.removeEventListener("pointerleave", E),
                g.removeEventListener("pointerleave", _);
            }
          );
        }
      }, [p, g, R, x]),
      v.useEffect(() => {
        if (c) {
          const E = (_) => {
            const w = _.target,
              A = { x: _.clientX, y: _.clientY },
              C =
                (p == null ? void 0 : p.contains(w)) ||
                (g == null ? void 0 : g.contains(w)),
              N = !b4(A, c);
            C ? x() : N && (x(), m());
          };
          return (
            document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
          );
        }
      }, [p, g, c, m, x]),
      S.jsx(CE, { ...e, ref: u })
    );
  }),
  [h4, m4] = $f(Bl, { isInside: !1 }),
  p4 = kN("TooltipContent"),
  CE = v.forwardRef((e, n) => {
    const {
        __scopeTooltip: a,
        children: i,
        "aria-label": o,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        ...d
      } = e,
      p = ru(no, a),
      m = Gf(a),
      { onClose: g } = p;
    return (
      v.useEffect(
        () => (
          document.addEventListener(xp, g),
          () => document.removeEventListener(xp, g)
        ),
        [g]
      ),
      v.useEffect(() => {
        if (p.trigger) {
          const y = (x) => {
            const R = x.target;
            R != null && R.contains(p.trigger) && g();
          };
          return (
            window.addEventListener("scroll", y, { capture: !0 }),
            () => window.removeEventListener("scroll", y, { capture: !0 })
          );
        }
      }, [p.trigger, g]),
      S.jsx(Ql, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: (y) => y.preventDefault(),
        onDismiss: g,
        children: S.jsxs(xE, {
          "data-state": p.stateAttribute,
          ...m,
          ...d,
          ref: n,
          style: {
            ...d.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            S.jsx(p4, { children: i }),
            S.jsx(h4, {
              scope: a,
              isInside: !0,
              children: S.jsx(nD, {
                id: p.contentId,
                role: "tooltip",
                children: o || i,
              }),
            }),
          ],
        }),
      })
    );
  });
AE.displayName = no;
var OE = "TooltipArrow",
  ME = v.forwardRef((e, n) => {
    const { __scopeTooltip: a, ...i } = e,
      o = Gf(a);
    return m4(OE, a).isInside ? null : S.jsx(wE, { ...o, ...i, ref: n });
  });
ME.displayName = OE;
function g4(e, n) {
  const a = Math.abs(n.top - e.y),
    i = Math.abs(n.bottom - e.y),
    o = Math.abs(n.right - e.x),
    u = Math.abs(n.left - e.x);
  switch (Math.min(a, i, o, u)) {
    case u:
      return "left";
    case o:
      return "right";
    case a:
      return "top";
    case i:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function y4(e, n, a = 5) {
  const i = [];
  switch (n) {
    case "top":
      i.push({ x: e.x - a, y: e.y + a }, { x: e.x + a, y: e.y + a });
      break;
    case "bottom":
      i.push({ x: e.x - a, y: e.y - a }, { x: e.x + a, y: e.y - a });
      break;
    case "left":
      i.push({ x: e.x + a, y: e.y - a }, { x: e.x + a, y: e.y + a });
      break;
    case "right":
      i.push({ x: e.x - a, y: e.y - a }, { x: e.x - a, y: e.y + a });
      break;
  }
  return i;
}
function v4(e) {
  const { top: n, right: a, bottom: i, left: o } = e;
  return [
    { x: o, y: n },
    { x: a, y: n },
    { x: a, y: i },
    { x: o, y: i },
  ];
}
function b4(e, n) {
  const { x: a, y: i } = e;
  let o = !1;
  for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
    const d = n[u],
      p = n[c],
      m = d.x,
      g = d.y,
      y = p.x,
      x = p.y;
    g > i != x > i && a < ((y - m) * (i - g)) / (x - g) + m && (o = !o);
  }
  return o;
}
function x4(e) {
  const n = e.slice();
  return (
    n.sort((a, i) =>
      a.x < i.x ? -1 : a.x > i.x ? 1 : a.y < i.y ? -1 : a.y > i.y ? 1 : 0
    ),
    w4(n)
  );
}
function w4(e) {
  if (e.length <= 1) return e.slice();
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (; n.length >= 2; ) {
      const u = n[n.length - 1],
        c = n[n.length - 2];
      if ((u.x - c.x) * (o.y - c.y) >= (u.y - c.y) * (o.x - c.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  n.pop();
  const a = [];
  for (let i = e.length - 1; i >= 0; i--) {
    const o = e[i];
    for (; a.length >= 2; ) {
      const u = a[a.length - 1],
        c = a[a.length - 2];
      if ((u.x - c.x) * (o.y - c.y) >= (u.y - c.y) * (o.x - c.x)) a.pop();
      else break;
    }
    a.push(o);
  }
  return (
    a.pop(),
    n.length === 1 && a.length === 1 && n[0].x === a[0].x && n[0].y === a[0].y
      ? n
      : n.concat(a)
  );
}
var S4 = _E,
  _4 = EE,
  E4 = TE,
  T4 = RE,
  R4 = AE,
  A4 = ME;
function NE({ delayDuration: e = 0, ...n }) {
  return S.jsx(S4, { "data-slot": "tooltip-provider", delayDuration: e, ...n });
}
function C4({ ...e }) {
  return S.jsx(NE, { children: S.jsx(_4, { "data-slot": "tooltip", ...e }) });
}
function O4({ ...e }) {
  return S.jsx(E4, { "data-slot": "tooltip-trigger", ...e });
}
function M4({ className: e, sideOffset: n = 0, children: a, ...i }) {
  return S.jsx(T4, {
    children: S.jsxs(R4, {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: Ve(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...i,
      children: [
        a,
        S.jsx(A4, {
          className:
            "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
        }),
      ],
    }),
  });
}
const N4 = "sidebar_state",
  D4 = 60 * 60 * 24 * 7,
  k4 = "16rem",
  j4 = "18rem",
  L4 = "3rem",
  z4 = "b",
  DE = v.createContext(null);
function mo() {
  const e = v.useContext(DE);
  if (!e) throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function U4({
  defaultOpen: e = !0,
  open: n,
  onOpenChange: a,
  className: i,
  style: o,
  children: u,
  ...c
}) {
  const d = L2(),
    [p, m] = v.useState(!1),
    [g, y] = v.useState(e),
    x = n ?? g,
    R = v.useCallback(
      (A) => {
        const C = typeof A == "function" ? A(x) : A;
        a ? a(C) : y(C),
          (document.cookie = `${N4}=${C}; path=/; max-age=${D4}`);
      },
      [a, x]
    ),
    E = v.useCallback(() => (d ? m((A) => !A) : R((A) => !A)), [d, R, m]);
  v.useEffect(() => {
    const A = (C) => {
      C.key === z4 && (C.metaKey || C.ctrlKey) && (C.preventDefault(), E());
    };
    return (
      window.addEventListener("keydown", A),
      () => window.removeEventListener("keydown", A)
    );
  }, [E]);
  const _ = x ? "expanded" : "collapsed",
    w = v.useMemo(
      () => ({
        state: _,
        open: x,
        setOpen: R,
        isMobile: d,
        openMobile: p,
        setOpenMobile: m,
        toggleSidebar: E,
      }),
      [_, x, R, d, p, m, E]
    );
  return S.jsx(DE.Provider, {
    value: w,
    children: S.jsx(NE, {
      delayDuration: 0,
      children: S.jsx("div", {
        "data-slot": "sidebar-wrapper",
        style: { "--sidebar-width": k4, "--sidebar-width-icon": L4, ...o },
        className: Ve(
          "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
          i
        ),
        ...c,
        children: u,
      }),
    }),
  });
}
function P4({
  side: e = "left",
  variant: n = "sidebar",
  collapsible: a = "offcanvas",
  className: i,
  children: o,
  ...u
}) {
  const { isMobile: c, state: d, openMobile: p, setOpenMobile: m } = mo();
  return a === "none"
    ? S.jsx("div", {
        "data-slot": "sidebar",
        className: Ve(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          i
        ),
        ...u,
        children: o,
      })
    : c
    ? S.jsx(Zk, {
        open: p,
        onOpenChange: m,
        ...u,
        children: S.jsxs(Qk, {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          className:
            "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: { "--sidebar-width": j4 },
          side: e,
          children: [
            S.jsxs(Wk, {
              className: "sr-only",
              children: [
                S.jsx(Jk, { children: "Sidebar" }),
                S.jsx(ej, { children: "Displays the mobile sidebar." }),
              ],
            }),
            S.jsx("div", {
              className: "flex h-full w-full flex-col",
              children: o,
            }),
          ],
        }),
      })
    : S.jsxs("div", {
        className: "group peer text-sidebar-foreground hidden md:block",
        "data-state": d,
        "data-collapsible": d === "collapsed" ? a : "",
        "data-variant": n,
        "data-side": e,
        "data-slot": "sidebar",
        children: [
          S.jsx("div", {
            "data-slot": "sidebar-gap",
            className: Ve(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              n === "floating" || n === "inset"
                ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            ),
          }),
          S.jsx("div", {
            "data-slot": "sidebar-container",
            className: Ve(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left"
                ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              n === "floating" || n === "inset"
                ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              i
            ),
            ...u,
            children: S.jsx("div", {
              "data-sidebar": "sidebar",
              "data-slot": "sidebar-inner",
              className:
                "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
              children: o,
            }),
          }),
        ],
      });
}
function B4({ className: e, onClick: n, ...a }) {
  const { toggleSidebar: i } = mo();
  return S.jsxs(sg, {
    "data-sidebar": "trigger",
    "data-slot": "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: Ve("size-7", e),
    onClick: (o) => {
      n == null || n(o), i();
    },
    ...a,
    children: [
      S.jsx(VD, {}),
      S.jsx("span", { className: "sr-only", children: "Toggle Sidebar" }),
    ],
  });
}
function V4({ className: e, ...n }) {
  const { toggleSidebar: a } = mo();
  return S.jsx("button", {
    "data-sidebar": "rail",
    "data-slot": "sidebar-rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: a,
    title: "Toggle Sidebar",
    className: Ve(
      "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
      "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
      "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
      e
    ),
    ...n,
  });
}
function H4({ className: e, ...n }) {
  return S.jsx("main", {
    "data-slot": "sidebar-inset",
    className: Ve(
      "bg-background relative flex w-full flex-1 flex-col",
      "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
      e
    ),
    ...n,
  });
}
function F4({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "sidebar-header",
    "data-sidebar": "header",
    className: Ve("flex flex-col gap-2 p-2", e),
    ...n,
  });
}
function q4({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "sidebar-content",
    "data-sidebar": "content",
    className: Ve(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...n,
  });
}
function I4({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "sidebar-group",
    "data-sidebar": "group",
    className: Ve("relative flex w-full min-w-0 flex-col p-2", e),
    ...n,
  });
}
function $4({ className: e, asChild: n = !1, ...a }) {
  const i = n ? zf : "div";
  return S.jsx(i, {
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
    className: Ve(
      "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      e
    ),
    ...a,
  });
}
function kE({ className: e, ...n }) {
  return S.jsx("ul", {
    "data-slot": "sidebar-menu",
    "data-sidebar": "menu",
    className: Ve("flex w-full min-w-0 flex-col gap-1", e),
    ...n,
  });
}
function jE({ className: e, ...n }) {
  return S.jsx("li", {
    "data-slot": "sidebar-menu-item",
    "data-sidebar": "menu-item",
    className: Ve("group/menu-item relative", e),
    ...n,
  });
}
const G4 = ag(
  "hover:cursor-pointer peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-10! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-6 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-12 text-sm ",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
function LE({
  asChild: e = !1,
  isActive: n = !1,
  variant: a = "default",
  size: i = "default",
  tooltip: o,
  className: u,
  ...c
}) {
  const d = e ? zf : "button",
    { isMobile: p, state: m } = mo(),
    g = S.jsx(d, {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": i,
      "data-active": n,
      className: Ve(G4({ variant: a, size: i }), u),
      ...c,
    });
  return o
    ? (typeof o == "string" && (o = { children: o }),
      S.jsxs(C4, {
        children: [
          S.jsx(O4, { asChild: !0, children: g }),
          S.jsx(M4, {
            side: "right",
            align: "center",
            hidden: m !== "collapsed" || p,
            ...o,
          }),
        ],
      }))
    : g;
}
function vl({ content: e }) {
  const { open: n, toggleSidebar: a } = mo();
  return S.jsxs(I4, {
    children: [
      S.jsx($4, { className: "text-sm mb-1", children: e.mainTitle }),
      S.jsx(kE, {
        children: e.items.map((i) =>
          S.jsx(
            Cf,
            {
              to: i.url,
              children: S.jsx(jE, {
                onClick: n ? void 0 : a,
                children: S.jsxs(LE, {
                  tooltip: i.title,
                  children: [
                    i.icon && S.jsx(i.icon, {}),
                    S.jsx("span", { children: i.title }),
                  ],
                }),
              }),
            },
            i.title
          )
        ),
      }),
    ],
  });
}
var Y4 = v.createContext(void 0);
function zE(e) {
  const n = v.useContext(Y4);
  return e || n || "ltr";
}
var Im = "rovingFocusGroup.onEntryFocus",
  Z4 = { bubbles: !1, cancelable: !0 },
  au = "RovingFocusGroup",
  [Sp, UE, K4] = Jp(au),
  [X4, PE] = si(au, [K4]),
  [Q4, W4] = X4(au),
  BE = v.forwardRef((e, n) =>
    S.jsx(Sp.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: S.jsx(Sp.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: S.jsx(J4, { ...e, ref: n }),
      }),
    })
  );
BE.displayName = au;
var J4 = v.forwardRef((e, n) => {
    const {
        __scopeRovingFocusGroup: a,
        orientation: i,
        loop: o = !1,
        dir: u,
        currentTabStopId: c,
        defaultCurrentTabStopId: d,
        onCurrentTabStopIdChange: p,
        onEntryFocus: m,
        preventScrollOnEntryFocus: g = !1,
        ...y
      } = e,
      x = v.useRef(null),
      R = At(n, x),
      E = zE(u),
      [_, w] = Jl({ prop: c, defaultProp: d ?? null, onChange: p, caller: au }),
      [A, C] = v.useState(!1),
      N = Ln(m),
      k = UE(a),
      D = v.useRef(!1),
      [I, Y] = v.useState(0);
    return (
      v.useEffect(() => {
        const G = x.current;
        if (G)
          return G.addEventListener(Im, N), () => G.removeEventListener(Im, N);
      }, [N]),
      S.jsx(Q4, {
        scope: a,
        orientation: i,
        dir: E,
        loop: o,
        currentTabStopId: _,
        onItemFocus: v.useCallback((G) => w(G), [w]),
        onItemShiftTab: v.useCallback(() => C(!0), []),
        onFocusableItemAdd: v.useCallback(() => Y((G) => G + 1), []),
        onFocusableItemRemove: v.useCallback(() => Y((G) => G - 1), []),
        children: S.jsx(st.div, {
          tabIndex: A || I === 0 ? -1 : 0,
          "data-orientation": i,
          ...y,
          ref: R,
          style: { outline: "none", ...e.style },
          onMouseDown: Ae(e.onMouseDown, () => {
            D.current = !0;
          }),
          onFocus: Ae(e.onFocus, (G) => {
            const J = !D.current;
            if (G.target === G.currentTarget && J && !A) {
              const ye = new CustomEvent(Im, Z4);
              if ((G.currentTarget.dispatchEvent(ye), !ye.defaultPrevented)) {
                const be = k().filter((j) => j.focusable),
                  oe = be.find((j) => j.active),
                  ge = be.find((j) => j.id === _),
                  fe = [oe, ge, ...be]
                    .filter(Boolean)
                    .map((j) => j.ref.current);
                FE(fe, g);
              }
            }
            D.current = !1;
          }),
          onBlur: Ae(e.onBlur, () => C(!1)),
        }),
      })
    );
  }),
  VE = "RovingFocusGroupItem",
  HE = v.forwardRef((e, n) => {
    const {
        __scopeRovingFocusGroup: a,
        focusable: i = !0,
        active: o = !1,
        tabStopId: u,
        children: c,
        ...d
      } = e,
      p = Ui(),
      m = u || p,
      g = W4(VE, a),
      y = g.currentTabStopId === m,
      x = UE(a),
      {
        onFocusableItemAdd: R,
        onFocusableItemRemove: E,
        currentTabStopId: _,
      } = g;
    return (
      v.useEffect(() => {
        if (i) return R(), () => E();
      }, [i, R, E]),
      S.jsx(Sp.ItemSlot, {
        scope: a,
        id: m,
        focusable: i,
        active: o,
        children: S.jsx(st.span, {
          tabIndex: y ? 0 : -1,
          "data-orientation": g.orientation,
          ...d,
          ref: n,
          onMouseDown: Ae(e.onMouseDown, (w) => {
            i ? g.onItemFocus(m) : w.preventDefault();
          }),
          onFocus: Ae(e.onFocus, () => g.onItemFocus(m)),
          onKeyDown: Ae(e.onKeyDown, (w) => {
            if (w.key === "Tab" && w.shiftKey) {
              g.onItemShiftTab();
              return;
            }
            if (w.target !== w.currentTarget) return;
            const A = n3(w, g.orientation, g.dir);
            if (A !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
              w.preventDefault();
              let N = x()
                .filter((k) => k.focusable)
                .map((k) => k.ref.current);
              if (A === "last") N.reverse();
              else if (A === "prev" || A === "next") {
                A === "prev" && N.reverse();
                const k = N.indexOf(w.currentTarget);
                N = g.loop ? r3(N, k + 1) : N.slice(k + 1);
              }
              setTimeout(() => FE(N));
            }
          }),
          children:
            typeof c == "function"
              ? c({ isCurrentTabStop: y, hasTabStop: _ != null })
              : c,
        }),
      })
    );
  });
HE.displayName = VE;
var e3 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function t3(e, n) {
  return n !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function n3(e, n, a) {
  const i = t3(e.key, a);
  if (
    !(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) &&
    !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i))
  )
    return e3[i];
}
function FE(e, n = !1) {
  const a = document.activeElement;
  for (const i of e)
    if (
      i === a ||
      (i.focus({ preventScroll: n }), document.activeElement !== a)
    )
      return;
}
function r3(e, n) {
  return e.map((a, i) => e[(n + i) % e.length]);
}
var a3 = BE,
  i3 = HE,
  _p = ["Enter", " "],
  s3 = ["ArrowDown", "PageUp", "Home"],
  qE = ["ArrowUp", "PageDown", "End"],
  o3 = [...s3, ...qE],
  l3 = { ltr: [..._p, "ArrowRight"], rtl: [..._p, "ArrowLeft"] },
  u3 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  iu = "Menu",
  [Vl, c3, f3] = Jp(iu),
  [Gi, IE] = si(iu, [f3, If, PE]),
  Yf = If(),
  $E = PE(),
  [d3, Yi] = Gi(iu),
  [h3, su] = Gi(iu),
  GE = (e) => {
    const {
        __scopeMenu: n,
        open: a = !1,
        children: i,
        dir: o,
        onOpenChange: u,
        modal: c = !0,
      } = e,
      d = Yf(n),
      [p, m] = v.useState(null),
      g = v.useRef(!1),
      y = Ln(u),
      x = zE(o);
    return (
      v.useEffect(() => {
        const R = () => {
            (g.current = !0),
              document.addEventListener("pointerdown", E, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", E, {
                capture: !0,
                once: !0,
              });
          },
          E = () => (g.current = !1);
        return (
          document.addEventListener("keydown", R, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", R, { capture: !0 }),
              document.removeEventListener("pointerdown", E, { capture: !0 }),
              document.removeEventListener("pointermove", E, { capture: !0 });
          }
        );
      }, []),
      S.jsx(vE, {
        ...d,
        children: S.jsx(d3, {
          scope: n,
          open: a,
          onOpenChange: y,
          content: p,
          onContentChange: m,
          children: S.jsx(h3, {
            scope: n,
            onClose: v.useCallback(() => y(!1), [y]),
            isUsingKeyboardRef: g,
            dir: x,
            modal: c,
            children: i,
          }),
        }),
      })
    );
  };
GE.displayName = iu;
var m3 = "MenuAnchor",
  _g = v.forwardRef((e, n) => {
    const { __scopeMenu: a, ...i } = e,
      o = Yf(a);
    return S.jsx(bE, { ...o, ...i, ref: n });
  });
_g.displayName = m3;
var Eg = "MenuPortal",
  [p3, YE] = Gi(Eg, { forceMount: void 0 }),
  ZE = (e) => {
    const { __scopeMenu: n, forceMount: a, children: i, container: o } = e,
      u = Yi(Eg, n);
    return S.jsx(p3, {
      scope: n,
      forceMount: a,
      children: S.jsx(fr, {
        present: a || u.open,
        children: S.jsx(Wl, { asChild: !0, container: o, children: i }),
      }),
    });
  };
ZE.displayName = Eg;
var Kn = "MenuContent",
  [g3, Tg] = Gi(Kn),
  KE = v.forwardRef((e, n) => {
    const a = YE(Kn, e.__scopeMenu),
      { forceMount: i = a.forceMount, ...o } = e,
      u = Yi(Kn, e.__scopeMenu),
      c = su(Kn, e.__scopeMenu);
    return S.jsx(Vl.Provider, {
      scope: e.__scopeMenu,
      children: S.jsx(fr, {
        present: i || u.open,
        children: S.jsx(Vl.Slot, {
          scope: e.__scopeMenu,
          children: c.modal
            ? S.jsx(y3, { ...o, ref: n })
            : S.jsx(v3, { ...o, ref: n }),
        }),
      }),
    });
  }),
  y3 = v.forwardRef((e, n) => {
    const a = Yi(Kn, e.__scopeMenu),
      i = v.useRef(null),
      o = At(n, i);
    return (
      v.useEffect(() => {
        const u = i.current;
        if (u) return z_(u);
      }, []),
      S.jsx(Rg, {
        ...e,
        ref: o,
        trapFocus: a.open,
        disableOutsidePointerEvents: a.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ae(e.onFocusOutside, (u) => u.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => a.onOpenChange(!1),
      })
    );
  }),
  v3 = v.forwardRef((e, n) => {
    const a = Yi(Kn, e.__scopeMenu);
    return S.jsx(Rg, {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => a.onOpenChange(!1),
    });
  }),
  b3 = eo("MenuContent.ScrollLock"),
  Rg = v.forwardRef((e, n) => {
    const {
        __scopeMenu: a,
        loop: i = !1,
        trapFocus: o,
        onOpenAutoFocus: u,
        onCloseAutoFocus: c,
        disableOutsidePointerEvents: d,
        onEntryFocus: p,
        onEscapeKeyDown: m,
        onPointerDownOutside: g,
        onFocusOutside: y,
        onInteractOutside: x,
        onDismiss: R,
        disableOutsideScroll: E,
        ..._
      } = e,
      w = Yi(Kn, a),
      A = su(Kn, a),
      C = Yf(a),
      N = $E(a),
      k = c3(a),
      [D, I] = v.useState(null),
      Y = v.useRef(null),
      G = At(n, Y, w.onContentChange),
      J = v.useRef(0),
      ye = v.useRef(""),
      be = v.useRef(0),
      oe = v.useRef(null),
      ge = v.useRef("right"),
      se = v.useRef(0),
      fe = E ? lg : v.Fragment,
      j = E ? { as: b3, allowPinchZoom: !0 } : void 0,
      Q = (re) => {
        var Oe, ze;
        const O = ye.current + re,
          H = k().filter((Xe) => !Xe.disabled),
          ie = document.activeElement,
          W =
            (Oe = H.find((Xe) => Xe.ref.current === ie)) == null
              ? void 0
              : Oe.textValue,
          le = H.map((Xe) => Xe.textValue),
          Ce = N3(le, O, W),
          de =
            (ze = H.find((Xe) => Xe.textValue === Ce)) == null
              ? void 0
              : ze.ref.current;
        (function Xe(mt) {
          (ye.current = mt),
            window.clearTimeout(J.current),
            mt !== "" && (J.current = window.setTimeout(() => Xe(""), 1e3));
        })(O),
          de && setTimeout(() => de.focus());
      };
    v.useEffect(() => () => window.clearTimeout(J.current), []), A_();
    const V = v.useCallback((re) => {
      var H, ie;
      return (
        ge.current === ((H = oe.current) == null ? void 0 : H.side) &&
        k3(re, (ie = oe.current) == null ? void 0 : ie.area)
      );
    }, []);
    return S.jsx(g3, {
      scope: a,
      searchRef: ye,
      onItemEnter: v.useCallback(
        (re) => {
          V(re) && re.preventDefault();
        },
        [V]
      ),
      onItemLeave: v.useCallback(
        (re) => {
          var O;
          V(re) || ((O = Y.current) == null || O.focus(), I(null));
        },
        [V]
      ),
      onTriggerLeave: v.useCallback(
        (re) => {
          V(re) && re.preventDefault();
        },
        [V]
      ),
      pointerGraceTimerRef: be,
      onPointerGraceIntentChange: v.useCallback((re) => {
        oe.current = re;
      }, []),
      children: S.jsx(fe, {
        ...j,
        children: S.jsx(og, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: Ae(u, (re) => {
            var O;
            re.preventDefault(),
              (O = Y.current) == null || O.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: c,
          children: S.jsx(Ql, {
            asChild: !0,
            disableOutsidePointerEvents: d,
            onEscapeKeyDown: m,
            onPointerDownOutside: g,
            onFocusOutside: y,
            onInteractOutside: x,
            onDismiss: R,
            children: S.jsx(a3, {
              asChild: !0,
              ...N,
              dir: A.dir,
              orientation: "vertical",
              loop: i,
              currentTabStopId: D,
              onCurrentTabStopIdChange: I,
              onEntryFocus: Ae(p, (re) => {
                A.isUsingKeyboardRef.current || re.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: S.jsx(xE, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": f1(w.open),
                "data-radix-menu-content": "",
                dir: A.dir,
                ...C,
                ..._,
                ref: G,
                style: { outline: "none", ..._.style },
                onKeyDown: Ae(_.onKeyDown, (re) => {
                  const H =
                      re.target.closest("[data-radix-menu-content]") ===
                      re.currentTarget,
                    ie = re.ctrlKey || re.altKey || re.metaKey,
                    W = re.key.length === 1;
                  H &&
                    (re.key === "Tab" && re.preventDefault(),
                    !ie && W && Q(re.key));
                  const le = Y.current;
                  if (re.target !== le || !o3.includes(re.key)) return;
                  re.preventDefault();
                  const de = k()
                    .filter((Oe) => !Oe.disabled)
                    .map((Oe) => Oe.ref.current);
                  qE.includes(re.key) && de.reverse(), O3(de);
                }),
                onBlur: Ae(e.onBlur, (re) => {
                  re.currentTarget.contains(re.target) ||
                    (window.clearTimeout(J.current), (ye.current = ""));
                }),
                onPointerMove: Ae(
                  e.onPointerMove,
                  Hl((re) => {
                    const O = re.target,
                      H = se.current !== re.clientX;
                    if (re.currentTarget.contains(O) && H) {
                      const ie = re.clientX > se.current ? "right" : "left";
                      (ge.current = ie), (se.current = re.clientX);
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
KE.displayName = Kn;
var x3 = "MenuGroup",
  Ag = v.forwardRef((e, n) => {
    const { __scopeMenu: a, ...i } = e;
    return S.jsx(st.div, { role: "group", ...i, ref: n });
  });
Ag.displayName = x3;
var w3 = "MenuLabel",
  XE = v.forwardRef((e, n) => {
    const { __scopeMenu: a, ...i } = e;
    return S.jsx(st.div, { ...i, ref: n });
  });
XE.displayName = w3;
var uf = "MenuItem",
  Ix = "menu.itemSelect",
  Zf = v.forwardRef((e, n) => {
    const { disabled: a = !1, onSelect: i, ...o } = e,
      u = v.useRef(null),
      c = su(uf, e.__scopeMenu),
      d = Tg(uf, e.__scopeMenu),
      p = At(n, u),
      m = v.useRef(!1),
      g = () => {
        const y = u.current;
        if (!a && y) {
          const x = new CustomEvent(Ix, { bubbles: !0, cancelable: !0 });
          y.addEventListener(Ix, (R) => (i == null ? void 0 : i(R)), {
            once: !0,
          }),
            eg(y, x),
            x.defaultPrevented ? (m.current = !1) : c.onClose();
        }
      };
    return S.jsx(QE, {
      ...o,
      ref: p,
      disabled: a,
      onClick: Ae(e.onClick, g),
      onPointerDown: (y) => {
        var x;
        (x = e.onPointerDown) == null || x.call(e, y), (m.current = !0);
      },
      onPointerUp: Ae(e.onPointerUp, (y) => {
        var x;
        m.current || (x = y.currentTarget) == null || x.click();
      }),
      onKeyDown: Ae(e.onKeyDown, (y) => {
        const x = d.searchRef.current !== "";
        a ||
          (x && y.key === " ") ||
          (_p.includes(y.key) && (y.currentTarget.click(), y.preventDefault()));
      }),
    });
  });
Zf.displayName = uf;
var QE = v.forwardRef((e, n) => {
    const { __scopeMenu: a, disabled: i = !1, textValue: o, ...u } = e,
      c = Tg(uf, a),
      d = $E(a),
      p = v.useRef(null),
      m = At(n, p),
      [g, y] = v.useState(!1),
      [x, R] = v.useState("");
    return (
      v.useEffect(() => {
        const E = p.current;
        E && R((E.textContent ?? "").trim());
      }, [u.children]),
      S.jsx(Vl.ItemSlot, {
        scope: a,
        disabled: i,
        textValue: o ?? x,
        children: S.jsx(i3, {
          asChild: !0,
          ...d,
          focusable: !i,
          children: S.jsx(st.div, {
            role: "menuitem",
            "data-highlighted": g ? "" : void 0,
            "aria-disabled": i || void 0,
            "data-disabled": i ? "" : void 0,
            ...u,
            ref: m,
            onPointerMove: Ae(
              e.onPointerMove,
              Hl((E) => {
                i
                  ? c.onItemLeave(E)
                  : (c.onItemEnter(E),
                    E.defaultPrevented ||
                      E.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Ae(
              e.onPointerLeave,
              Hl((E) => c.onItemLeave(E))
            ),
            onFocus: Ae(e.onFocus, () => y(!0)),
            onBlur: Ae(e.onBlur, () => y(!1)),
          }),
        }),
      })
    );
  }),
  S3 = "MenuCheckboxItem",
  WE = v.forwardRef((e, n) => {
    const { checked: a = !1, onCheckedChange: i, ...o } = e;
    return S.jsx(r1, {
      scope: e.__scopeMenu,
      checked: a,
      children: S.jsx(Zf, {
        role: "menuitemcheckbox",
        "aria-checked": cf(a) ? "mixed" : a,
        ...o,
        ref: n,
        "data-state": Og(a),
        onSelect: Ae(
          o.onSelect,
          () => (i == null ? void 0 : i(cf(a) ? !0 : !a)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
WE.displayName = S3;
var JE = "MenuRadioGroup",
  [_3, E3] = Gi(JE, { value: void 0, onValueChange: () => {} }),
  e1 = v.forwardRef((e, n) => {
    const { value: a, onValueChange: i, ...o } = e,
      u = Ln(i);
    return S.jsx(_3, {
      scope: e.__scopeMenu,
      value: a,
      onValueChange: u,
      children: S.jsx(Ag, { ...o, ref: n }),
    });
  });
e1.displayName = JE;
var t1 = "MenuRadioItem",
  n1 = v.forwardRef((e, n) => {
    const { value: a, ...i } = e,
      o = E3(t1, e.__scopeMenu),
      u = a === o.value;
    return S.jsx(r1, {
      scope: e.__scopeMenu,
      checked: u,
      children: S.jsx(Zf, {
        role: "menuitemradio",
        "aria-checked": u,
        ...i,
        ref: n,
        "data-state": Og(u),
        onSelect: Ae(
          i.onSelect,
          () => {
            var c;
            return (c = o.onValueChange) == null ? void 0 : c.call(o, a);
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
n1.displayName = t1;
var Cg = "MenuItemIndicator",
  [r1, T3] = Gi(Cg, { checked: !1 }),
  a1 = v.forwardRef((e, n) => {
    const { __scopeMenu: a, forceMount: i, ...o } = e,
      u = T3(Cg, a);
    return S.jsx(fr, {
      present: i || cf(u.checked) || u.checked === !0,
      children: S.jsx(st.span, { ...o, ref: n, "data-state": Og(u.checked) }),
    });
  });
a1.displayName = Cg;
var R3 = "MenuSeparator",
  i1 = v.forwardRef((e, n) => {
    const { __scopeMenu: a, ...i } = e;
    return S.jsx(st.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...i,
      ref: n,
    });
  });
i1.displayName = R3;
var A3 = "MenuArrow",
  s1 = v.forwardRef((e, n) => {
    const { __scopeMenu: a, ...i } = e,
      o = Yf(a);
    return S.jsx(wE, { ...o, ...i, ref: n });
  });
s1.displayName = A3;
var C3 = "MenuSub",
  [qP, o1] = Gi(C3),
  El = "MenuSubTrigger",
  l1 = v.forwardRef((e, n) => {
    const a = Yi(El, e.__scopeMenu),
      i = su(El, e.__scopeMenu),
      o = o1(El, e.__scopeMenu),
      u = Tg(El, e.__scopeMenu),
      c = v.useRef(null),
      { pointerGraceTimerRef: d, onPointerGraceIntentChange: p } = u,
      m = { __scopeMenu: e.__scopeMenu },
      g = v.useCallback(() => {
        c.current && window.clearTimeout(c.current), (c.current = null);
      }, []);
    return (
      v.useEffect(() => g, [g]),
      v.useEffect(() => {
        const y = d.current;
        return () => {
          window.clearTimeout(y), p(null);
        };
      }, [d, p]),
      S.jsx(_g, {
        asChild: !0,
        ...m,
        children: S.jsx(QE, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": a.open,
          "aria-controls": o.contentId,
          "data-state": f1(a.open),
          ...e,
          ref: Lf(n, o.onTriggerChange),
          onClick: (y) => {
            var x;
            (x = e.onClick) == null || x.call(e, y),
              !(e.disabled || y.defaultPrevented) &&
                (y.currentTarget.focus(), a.open || a.onOpenChange(!0));
          },
          onPointerMove: Ae(
            e.onPointerMove,
            Hl((y) => {
              u.onItemEnter(y),
                !y.defaultPrevented &&
                  !e.disabled &&
                  !a.open &&
                  !c.current &&
                  (u.onPointerGraceIntentChange(null),
                  (c.current = window.setTimeout(() => {
                    a.onOpenChange(!0), g();
                  }, 100)));
            })
          ),
          onPointerLeave: Ae(
            e.onPointerLeave,
            Hl((y) => {
              var R, E;
              g();
              const x =
                (R = a.content) == null ? void 0 : R.getBoundingClientRect();
              if (x) {
                const _ = (E = a.content) == null ? void 0 : E.dataset.side,
                  w = _ === "right",
                  A = w ? -5 : 5,
                  C = x[w ? "left" : "right"],
                  N = x[w ? "right" : "left"];
                u.onPointerGraceIntentChange({
                  area: [
                    { x: y.clientX + A, y: y.clientY },
                    { x: C, y: x.top },
                    { x: N, y: x.top },
                    { x: N, y: x.bottom },
                    { x: C, y: x.bottom },
                  ],
                  side: _,
                }),
                  window.clearTimeout(d.current),
                  (d.current = window.setTimeout(
                    () => u.onPointerGraceIntentChange(null),
                    300
                  ));
              } else {
                if ((u.onTriggerLeave(y), y.defaultPrevented)) return;
                u.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: Ae(e.onKeyDown, (y) => {
            var R;
            const x = u.searchRef.current !== "";
            e.disabled ||
              (x && y.key === " ") ||
              (l3[i.dir].includes(y.key) &&
                (a.onOpenChange(!0),
                (R = a.content) == null || R.focus(),
                y.preventDefault()));
          }),
        }),
      })
    );
  });
l1.displayName = El;
var u1 = "MenuSubContent",
  c1 = v.forwardRef((e, n) => {
    const a = YE(Kn, e.__scopeMenu),
      { forceMount: i = a.forceMount, ...o } = e,
      u = Yi(Kn, e.__scopeMenu),
      c = su(Kn, e.__scopeMenu),
      d = o1(u1, e.__scopeMenu),
      p = v.useRef(null),
      m = At(n, p);
    return S.jsx(Vl.Provider, {
      scope: e.__scopeMenu,
      children: S.jsx(fr, {
        present: i || u.open,
        children: S.jsx(Vl.Slot, {
          scope: e.__scopeMenu,
          children: S.jsx(Rg, {
            id: d.contentId,
            "aria-labelledby": d.triggerId,
            ...o,
            ref: m,
            align: "start",
            side: c.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (g) => {
              var y;
              c.isUsingKeyboardRef.current &&
                ((y = p.current) == null || y.focus()),
                g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: Ae(e.onFocusOutside, (g) => {
              g.target !== d.trigger && u.onOpenChange(!1);
            }),
            onEscapeKeyDown: Ae(e.onEscapeKeyDown, (g) => {
              c.onClose(), g.preventDefault();
            }),
            onKeyDown: Ae(e.onKeyDown, (g) => {
              var R;
              const y = g.currentTarget.contains(g.target),
                x = u3[c.dir].includes(g.key);
              y &&
                x &&
                (u.onOpenChange(!1),
                (R = d.trigger) == null || R.focus(),
                g.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
c1.displayName = u1;
function f1(e) {
  return e ? "open" : "closed";
}
function cf(e) {
  return e === "indeterminate";
}
function Og(e) {
  return cf(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function O3(e) {
  const n = document.activeElement;
  for (const a of e)
    if (a === n || (a.focus(), document.activeElement !== n)) return;
}
function M3(e, n) {
  return e.map((a, i) => e[(n + i) % e.length]);
}
function N3(e, n, a) {
  const o = n.length > 1 && Array.from(n).every((m) => m === n[0]) ? n[0] : n,
    u = a ? e.indexOf(a) : -1;
  let c = M3(e, Math.max(u, 0));
  o.length === 1 && (c = c.filter((m) => m !== a));
  const p = c.find((m) => m.toLowerCase().startsWith(o.toLowerCase()));
  return p !== a ? p : void 0;
}
function D3(e, n) {
  const { x: a, y: i } = e;
  let o = !1;
  for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
    const d = n[u],
      p = n[c],
      m = d.x,
      g = d.y,
      y = p.x,
      x = p.y;
    g > i != x > i && a < ((y - m) * (i - g)) / (x - g) + m && (o = !o);
  }
  return o;
}
function k3(e, n) {
  if (!n) return !1;
  const a = { x: e.clientX, y: e.clientY };
  return D3(a, n);
}
function Hl(e) {
  return (n) => (n.pointerType === "mouse" ? e(n) : void 0);
}
var j3 = GE,
  L3 = _g,
  z3 = ZE,
  U3 = KE,
  P3 = Ag,
  B3 = XE,
  V3 = Zf,
  H3 = WE,
  F3 = e1,
  q3 = n1,
  I3 = a1,
  $3 = i1,
  G3 = s1,
  Y3 = l1,
  Z3 = c1,
  Kf = "DropdownMenu",
  [K3, IP] = si(Kf, [IE]),
  cn = IE(),
  [X3, d1] = K3(Kf),
  h1 = (e) => {
    const {
        __scopeDropdownMenu: n,
        children: a,
        dir: i,
        open: o,
        defaultOpen: u,
        onOpenChange: c,
        modal: d = !0,
      } = e,
      p = cn(n),
      m = v.useRef(null),
      [g, y] = Jl({ prop: o, defaultProp: u ?? !1, onChange: c, caller: Kf });
    return S.jsx(X3, {
      scope: n,
      triggerId: Ui(),
      triggerRef: m,
      contentId: Ui(),
      open: g,
      onOpenChange: y,
      onOpenToggle: v.useCallback(() => y((x) => !x), [y]),
      modal: d,
      children: S.jsx(j3, {
        ...p,
        open: g,
        onOpenChange: y,
        dir: i,
        modal: d,
        children: a,
      }),
    });
  };
h1.displayName = Kf;
var m1 = "DropdownMenuTrigger",
  p1 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, disabled: i = !1, ...o } = e,
      u = d1(m1, a),
      c = cn(a);
    return S.jsx(L3, {
      asChild: !0,
      ...c,
      children: S.jsx(st.button, {
        type: "button",
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": u.open,
        "aria-controls": u.open ? u.contentId : void 0,
        "data-state": u.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        disabled: i,
        ...o,
        ref: Lf(n, u.triggerRef),
        onPointerDown: Ae(e.onPointerDown, (d) => {
          !i &&
            d.button === 0 &&
            d.ctrlKey === !1 &&
            (u.onOpenToggle(), u.open || d.preventDefault());
        }),
        onKeyDown: Ae(e.onKeyDown, (d) => {
          i ||
            (["Enter", " "].includes(d.key) && u.onOpenToggle(),
            d.key === "ArrowDown" && u.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(d.key) && d.preventDefault());
        }),
      }),
    });
  });
p1.displayName = m1;
var Q3 = "DropdownMenuPortal",
  g1 = (e) => {
    const { __scopeDropdownMenu: n, ...a } = e,
      i = cn(n);
    return S.jsx(z3, { ...i, ...a });
  };
g1.displayName = Q3;
var y1 = "DropdownMenuContent",
  v1 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = d1(y1, a),
      u = cn(a),
      c = v.useRef(!1);
    return S.jsx(U3, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...u,
      ...i,
      ref: n,
      onCloseAutoFocus: Ae(e.onCloseAutoFocus, (d) => {
        var p;
        c.current || (p = o.triggerRef.current) == null || p.focus(),
          (c.current = !1),
          d.preventDefault();
      }),
      onInteractOutside: Ae(e.onInteractOutside, (d) => {
        const p = d.detail.originalEvent,
          m = p.button === 0 && p.ctrlKey === !0,
          g = p.button === 2 || m;
        (!o.modal || g) && (c.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
v1.displayName = y1;
var W3 = "DropdownMenuGroup",
  J3 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(P3, { ...o, ...i, ref: n });
  });
J3.displayName = W3;
var eL = "DropdownMenuLabel",
  b1 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(B3, { ...o, ...i, ref: n });
  });
b1.displayName = eL;
var tL = "DropdownMenuItem",
  x1 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(V3, { ...o, ...i, ref: n });
  });
x1.displayName = tL;
var nL = "DropdownMenuCheckboxItem",
  rL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(H3, { ...o, ...i, ref: n });
  });
rL.displayName = nL;
var aL = "DropdownMenuRadioGroup",
  iL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(F3, { ...o, ...i, ref: n });
  });
iL.displayName = aL;
var sL = "DropdownMenuRadioItem",
  oL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(q3, { ...o, ...i, ref: n });
  });
oL.displayName = sL;
var lL = "DropdownMenuItemIndicator",
  uL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(I3, { ...o, ...i, ref: n });
  });
uL.displayName = lL;
var cL = "DropdownMenuSeparator",
  w1 = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx($3, { ...o, ...i, ref: n });
  });
w1.displayName = cL;
var fL = "DropdownMenuArrow",
  dL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(G3, { ...o, ...i, ref: n });
  });
dL.displayName = fL;
var hL = "DropdownMenuSubTrigger",
  mL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(Y3, { ...o, ...i, ref: n });
  });
mL.displayName = hL;
var pL = "DropdownMenuSubContent",
  gL = v.forwardRef((e, n) => {
    const { __scopeDropdownMenu: a, ...i } = e,
      o = cn(a);
    return S.jsx(Z3, {
      ...o,
      ...i,
      ref: n,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
gL.displayName = pL;
var yL = h1,
  vL = p1,
  bL = g1,
  xL = v1,
  wL = b1,
  SL = x1,
  _L = w1;
function S1({ ...e }) {
  return S.jsx(yL, { "data-slot": "dropdown-menu", ...e });
}
function _1({ ...e }) {
  return S.jsx(vL, { "data-slot": "dropdown-menu-trigger", ...e });
}
function E1({ className: e, sideOffset: n = 4, ...a }) {
  return S.jsx(bL, {
    children: S.jsx(xL, {
      "data-slot": "dropdown-menu-content",
      sideOffset: n,
      className: Ve(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...a,
    }),
  });
}
function Ml({ className: e, inset: n, variant: a = "default", ...i }) {
  return S.jsx(SL, {
    "data-slot": "dropdown-menu-item",
    "data-inset": n,
    "data-variant": a,
    className: Ve(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e
    ),
    ...i,
  });
}
function EL({ className: e, inset: n, ...a }) {
  return S.jsx(wL, {
    "data-slot": "dropdown-menu-label",
    "data-inset": n,
    className: Ve("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
    ...a,
  });
}
function TL({ className: e, ...n }) {
  return S.jsx(_L, {
    "data-slot": "dropdown-menu-separator",
    className: Ve("bg-border -mx-1 my-1 h-px", e),
    ...n,
  });
}
function RL({ className: e, ...n }) {
  return S.jsx("span", {
    "data-slot": "dropdown-menu-shortcut",
    className: Ve("text-muted-foreground ml-auto text-xs tracking-widest", e),
    ...n,
  });
}
const Vs = (e, n) => `${e}${n}`,
  $m = "/auth",
  bl = "/dashboard",
  ff = { root: $m, login: Vs($m, "/login"), logout: Vs($m, "/logout") },
  Oi = {
    root: bl,
    general: { app: Vs(bl, "/app"), ecommerce: Vs(bl, "/ecommerce") },
    category: { root: Vs(bl, "/category") },
    product: { root: Vs(bl, "/product") },
  };
function AL({ teams: e }) {
  const { isMobile: n } = mo(),
    [a, i] = v.useState(e[0]);
  return a
    ? S.jsx(kE, {
        children: S.jsx(jE, {
          children: S.jsxs(S1, {
            children: [
              S.jsx(_1, {
                asChild: !0,
                children: S.jsxs(LE, {
                  size: "lg",
                  className:
                    "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                  children: [
                    S.jsx("div", {
                      className:
                        "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg",
                      children: S.jsx(a.logo, { className: "size-4" }),
                    }),
                    S.jsxs("div", {
                      className: "grid flex-1 text-left text-sm leading-tight",
                      children: [
                        S.jsx("span", {
                          className: "truncate font-medium",
                          children: a.name,
                        }),
                        S.jsx("span", {
                          className: "truncate text-xs",
                          children: a.plan,
                        }),
                      ],
                    }),
                    S.jsx(MD, { className: "ml-auto" }),
                  ],
                }),
              }),
              S.jsxs(E1, {
                className:
                  "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                align: "start",
                side: n ? "bottom" : "right",
                sideOffset: 4,
                children: [
                  S.jsx(EL, {
                    className: "text-muted-foreground text-xs",
                    children: "Teams",
                  }),
                  e.map((o, u) =>
                    S.jsxs(
                      Ml,
                      {
                        onClick: () => i(o),
                        className: "gap-2 p-2",
                        children: [
                          S.jsx("div", {
                            className:
                              "flex size-6 items-center justify-center rounded-md border",
                            children: S.jsx(o.logo, {
                              className: "size-3.5 shrink-0",
                            }),
                          }),
                          o.name,
                          S.jsxs(RL, { children: ["⌘", u + 1] }),
                        ],
                      },
                      o.name
                    )
                  ),
                  S.jsx(TL, {}),
                  S.jsx(Cf, {
                    to: ff.logout,
                    children: S.jsxs(Ml, {
                      className: "gap-2 p-2 hover:cursor-pointer",
                      children: [
                        S.jsx("div", {
                          className:
                            "flex size-6 items-center justify-center rounded-md border bg-transparent",
                          children: S.jsx(zD, { className: "size-4" }),
                        }),
                        S.jsx("div", {
                          className: "text-muted-foreground font-medium",
                          children: "Đăng Xuất",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : null;
}
const Us = {
  teams: [
    { name: "Acme Inc", logo: jD, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AD, plan: "Startup" },
    { name: "Evil Corp.", logo: DD, plan: "Free" },
  ],
  dashboard: {
    mainTitle: "Dashboard",
    items: [
      {
        title: "Báo Cáo Tổng Quan",
        url: Oi.general.app,
        icon: Ri,
        isActive: !0,
      },
      { title: "Báo Cáo Sản Phẩm", url: Oi.general.ecommerce, icon: gl },
    ],
  },
  brandManagement: {
    mainTitle: "Quản lý thương hiệu",
    items: [
      { title: "Chi Tiết Thương Hiệu", url: "/", icon: Ri },
      { title: "Danh Sách Thương Hiệu", url: "/", icon: gl },
      { title: "Danh Sách Tài Khoản", url: "/", icon: gl },
      { title: "Danh Sách Đơn Hàng", url: "/", icon: gl },
      { title: "Danh Sách Giao Dịch", url: "/", icon: gl },
    ],
  },
  menuManagement: {
    mainTitle: "Quản lý thực đơn",
    items: [{ title: "Thực Đơn", url: "/", icon: Ri }],
  },
  productManagement: {
    mainTitle: "Quản lý sản phẩm",
    items: [
      { title: "Sản Phẩm", url: Oi.product.root, icon: Ri },
      { title: "Biến Thể Sản Phẩm", url: "/", icon: Ri },
    ],
  },
  productCategory: {
    mainTitle: "Danh mục sản phẩm",
    items: [
      { title: "Danh Mục Sản Phẩm", url: Oi.category.root, icon: Ri },
      { title: "Bộ Sưu Tập Sản Phẩm", url: "/", icon: Ri },
    ],
  },
};
function CL({ ...e }) {
  return S.jsxs(P4, {
    variant: "inset",
    collapsible: "icon",
    ...e,
    children: [
      S.jsx(F4, { children: S.jsx(AL, { teams: Us.teams }) }),
      S.jsxs(q4, {
        children: [
          S.jsx(vl, { content: Us.dashboard }),
          S.jsx(vl, { content: Us.brandManagement }),
          S.jsx(vl, { content: Us.menuManagement }),
          S.jsx(vl, { content: Us.productManagement }),
          S.jsx(vl, { content: Us.productCategory }),
        ],
      }),
      S.jsx(V4, {}),
    ],
  });
}
const $x = () => {
  const { setTheme: e } = mS();
  return S.jsxs(U4, {
    children: [
      S.jsx(CL, {}),
      S.jsxs(H4, {
        children: [
          S.jsx("nav", {
            className:
              "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-background/98 z-10",
            children: S.jsxs("div", {
              className: "flex items-center gap-2 px-4 justify-between w-full",
              children: [
                S.jsx(B4, { className: "-ml-1" }),
                S.jsxs(S1, {
                  children: [
                    S.jsx(_1, {
                      asChild: !0,
                      children: S.jsxs(sg, {
                        variant: "outline",
                        size: "icon",
                        children: [
                          S.jsx(qD, {
                            className:
                              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                          }),
                          S.jsx(PD, {
                            className:
                              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                          }),
                          S.jsx("span", {
                            className: "sr-only",
                            children: "Toggle theme",
                          }),
                        ],
                      }),
                    }),
                    S.jsxs(E1, {
                      align: "end",
                      children: [
                        S.jsx(Ml, {
                          onClick: () => e("light"),
                          children: "Light",
                        }),
                        S.jsx(Ml, {
                          onClick: () => e("dark"),
                          children: "Dark",
                        }),
                        S.jsx(Ml, {
                          onClick: () => e("system"),
                          children: "System",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          S.jsx("div", { className: "px-4", children: S.jsx(OC, {}) }),
        ],
      }),
    ],
  });
};
function OL({ children: e }) {
  const { isAuthenticated: n } = Kp((a) => a.user);
  return n
    ? S.jsx(Hs, { to: "/dashboard" })
    : S.jsx(S.Fragment, { children: e });
}
function ML({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "card",
    className: Ve(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      e
    ),
    ...n,
  });
}
function $P({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "card-title",
    className: Ve("leading-none font-semibold", e),
    ...n,
  });
}
function NL({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "card-content",
    className: Ve("px-6", e),
    ...n,
  });
}
function GP({ className: e, ...n }) {
  return S.jsx("div", {
    "data-slot": "card-footer",
    className: Ve("flex items-center px-6 [.border-t]:pt-6", e),
    ...n,
  });
}
var DL = "Label",
  T1 = v.forwardRef((e, n) =>
    S.jsx(st.label, {
      ...e,
      ref: n,
      onMouseDown: (a) => {
        var o;
        a.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, a),
          !a.defaultPrevented && a.detail > 1 && a.preventDefault());
      },
    })
  );
T1.displayName = DL;
var kL = T1,
  ou = (e) => e.type === "checkbox",
  Mi = (e) => e instanceof Date,
  un = (e) => e == null;
const R1 = (e) => typeof e == "object";
var Rt = (e) => !un(e) && !Array.isArray(e) && R1(e) && !Mi(e),
  A1 = (e) =>
    Rt(e) && e.target ? (ou(e.target) ? e.target.checked : e.target.value) : e,
  jL = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  C1 = (e, n) => e.has(jL(n)),
  LL = (e) => {
    const n = e.constructor && e.constructor.prototype;
    return Rt(n) && n.hasOwnProperty("isPrototypeOf");
  },
  Mg =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Qt(e) {
  let n;
  const a = Array.isArray(e),
    i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) n = new Date(e);
  else if (e instanceof Set) n = new Set(e);
  else if (!(Mg && (e instanceof Blob || i)) && (a || Rt(e)))
    if (((n = a ? [] : {}), !a && !LL(e))) n = e;
    else for (const o in e) e.hasOwnProperty(o) && (n[o] = Qt(e[o]));
  else return e;
  return n;
}
var Xf = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Tt = (e) => e === void 0,
  pe = (e, n, a) => {
    if (!n || !Rt(e)) return a;
    const i = Xf(n.split(/[,[\].]+?/)).reduce((o, u) => (un(o) ? o : o[u]), e);
    return Tt(i) || i === e ? (Tt(e[n]) ? a : e[n]) : i;
  },
  Mn = (e) => typeof e == "boolean",
  Ng = (e) => /^\w*$/.test(e),
  O1 = (e) => Xf(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  rt = (e, n, a) => {
    let i = -1;
    const o = Ng(n) ? [n] : O1(n),
      u = o.length,
      c = u - 1;
    for (; ++i < u; ) {
      const d = o[i];
      let p = a;
      if (i !== c) {
        const m = e[d];
        p = Rt(m) || Array.isArray(m) ? m : isNaN(+o[i + 1]) ? {} : [];
      }
      if (d === "__proto__" || d === "constructor" || d === "prototype") return;
      (e[d] = p), (e = e[d]);
    }
  };
const df = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ir = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  ea = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  M1 = ne.createContext(null),
  Qf = () => ne.useContext(M1),
  zL = (e) => {
    const { children: n, ...a } = e;
    return ne.createElement(M1.Provider, { value: a }, n);
  };
var N1 = (e, n, a, i = !0) => {
  const o = { defaultValues: n._defaultValues };
  for (const u in e)
    Object.defineProperty(o, u, {
      get: () => {
        const c = u;
        return (
          n._proxyFormState[c] !== ir.all &&
            (n._proxyFormState[c] = !i || ir.all),
          a && (a[c] = !0),
          e[c]
        );
      },
    });
  return o;
};
const Dg = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function D1(e) {
  const n = Qf(),
    { control: a = n.control, disabled: i, name: o, exact: u } = e || {},
    [c, d] = ne.useState(a._formState),
    p = ne.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Dg(
      () =>
        a._subscribe({
          name: o,
          formState: p.current,
          exact: u,
          callback: (m) => {
            !i && d({ ...a._formState, ...m });
          },
        }),
      [o, i, u]
    ),
    ne.useEffect(() => {
      p.current.isValid && a._setValid(!0);
    }, [a]),
    ne.useMemo(() => N1(c, a, p.current, !1), [c, a])
  );
}
var Mr = (e) => typeof e == "string",
  k1 = (e, n, a, i, o) =>
    Mr(e)
      ? (i && n.watch.add(e), pe(a, e, o))
      : Array.isArray(e)
      ? e.map((u) => (i && n.watch.add(u), pe(a, u)))
      : (i && (n.watchAll = !0), a);
function UL(e) {
  const n = Qf(),
    {
      control: a = n.control,
      name: i,
      defaultValue: o,
      disabled: u,
      exact: c,
    } = e || {},
    d = ne.useRef(o),
    [p, m] = ne.useState(a._getWatch(i, d.current));
  return (
    Dg(
      () =>
        a._subscribe({
          name: i,
          formState: { values: !0 },
          exact: c,
          callback: (g) =>
            !u && m(k1(i, a._names, g.values || a._formValues, !1, d.current)),
        }),
      [i, a, u, c]
    ),
    ne.useEffect(() => a._removeUnmounted()),
    p
  );
}
function PL(e) {
  const n = Qf(),
    { name: a, disabled: i, control: o = n.control, shouldUnregister: u } = e,
    c = C1(o._names.array, a),
    d = UL({
      control: o,
      name: a,
      defaultValue: pe(
        o._formValues,
        a,
        pe(o._defaultValues, a, e.defaultValue)
      ),
      exact: !0,
    }),
    p = D1({ control: o, name: a, exact: !0 }),
    m = ne.useRef(e),
    g = ne.useRef(
      o.register(a, {
        ...e.rules,
        value: d,
        ...(Mn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    y = ne.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!pe(p.errors, a) },
            isDirty: { enumerable: !0, get: () => !!pe(p.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!pe(p.touchedFields, a) },
            isValidating: {
              enumerable: !0,
              get: () => !!pe(p.validatingFields, a),
            },
            error: { enumerable: !0, get: () => pe(p.errors, a) },
          }
        ),
      [p, a]
    ),
    x = ne.useCallback(
      (w) =>
        g.current.onChange({
          target: { value: A1(w), name: a },
          type: df.CHANGE,
        }),
      [a]
    ),
    R = ne.useCallback(
      () =>
        g.current.onBlur({
          target: { value: pe(o._formValues, a), name: a },
          type: df.BLUR,
        }),
      [a, o._formValues]
    ),
    E = ne.useCallback(
      (w) => {
        const A = pe(o._fields, a);
        A &&
          w &&
          (A._f.ref = {
            focus: () => w.focus(),
            select: () => w.select(),
            setCustomValidity: (C) => w.setCustomValidity(C),
            reportValidity: () => w.reportValidity(),
          });
      },
      [o._fields, a]
    ),
    _ = ne.useMemo(
      () => ({
        name: a,
        value: d,
        ...(Mn(i) || p.disabled ? { disabled: p.disabled || i } : {}),
        onChange: x,
        onBlur: R,
        ref: E,
      }),
      [a, i, p.disabled, x, R, E, d]
    );
  return (
    ne.useEffect(() => {
      const w = o._options.shouldUnregister || u;
      o.register(a, {
        ...m.current.rules,
        ...(Mn(m.current.disabled) ? { disabled: m.current.disabled } : {}),
      });
      const A = (C, N) => {
        const k = pe(o._fields, C);
        k && k._f && (k._f.mount = N);
      };
      if ((A(a, !0), w)) {
        const C = Qt(pe(o._options.defaultValues, a));
        rt(o._defaultValues, a, C),
          Tt(pe(o._formValues, a)) && rt(o._formValues, a, C);
      }
      return (
        !c && o.register(a),
        () => {
          (c ? w && !o._state.action : w) ? o.unregister(a) : A(a, !1);
        }
      );
    }, [a, o, c, u]),
    ne.useEffect(() => {
      o._setDisabledField({ disabled: i, name: a });
    }, [i, a, o]),
    ne.useMemo(() => ({ field: _, formState: p, fieldState: y }), [_, p, y])
  );
}
const BL = (e) => e.render(PL(e));
var j1 = (e, n, a, i, o) =>
    n
      ? {
          ...a[e],
          types: { ...(a[e] && a[e].types ? a[e].types : {}), [i]: o || !0 },
        }
      : {},
  Nl = (e) => (Array.isArray(e) ? e : [e]),
  Gx = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const u of e) u.next && u.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((u) => u !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ep = (e) => un(e) || !R1(e);
function $a(e, n) {
  if (Ep(e) || Ep(n)) return e === n;
  if (Mi(e) && Mi(n)) return e.getTime() === n.getTime();
  const a = Object.keys(e),
    i = Object.keys(n);
  if (a.length !== i.length) return !1;
  for (const o of a) {
    const u = e[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const c = n[o];
      if (
        (Mi(u) && Mi(c)) ||
        (Rt(u) && Rt(c)) ||
        (Array.isArray(u) && Array.isArray(c))
          ? !$a(u, c)
          : u !== c
      )
        return !1;
    }
  }
  return !0;
}
var ln = (e) => Rt(e) && !Object.keys(e).length,
  kg = (e) => e.type === "file",
  sr = (e) => typeof e == "function",
  hf = (e) => {
    if (!Mg) return !1;
    const n = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement)
    );
  },
  L1 = (e) => e.type === "select-multiple",
  jg = (e) => e.type === "radio",
  VL = (e) => jg(e) || ou(e),
  Gm = (e) => hf(e) && e.isConnected;
function HL(e, n) {
  const a = n.slice(0, -1).length;
  let i = 0;
  for (; i < a; ) e = Tt(e) ? i++ : e[n[i++]];
  return e;
}
function FL(e) {
  for (const n in e) if (e.hasOwnProperty(n) && !Tt(e[n])) return !1;
  return !0;
}
function Vt(e, n) {
  const a = Array.isArray(n) ? n : Ng(n) ? [n] : O1(n),
    i = a.length === 1 ? e : HL(e, a),
    o = a.length - 1,
    u = a[o];
  return (
    i && delete i[u],
    o !== 0 &&
      ((Rt(i) && ln(i)) || (Array.isArray(i) && FL(i))) &&
      Vt(e, a.slice(0, -1)),
    e
  );
}
var z1 = (e) => {
  for (const n in e) if (sr(e[n])) return !0;
  return !1;
};
function mf(e, n = {}) {
  const a = Array.isArray(e);
  if (Rt(e) || a)
    for (const i in e)
      Array.isArray(e[i]) || (Rt(e[i]) && !z1(e[i]))
        ? ((n[i] = Array.isArray(e[i]) ? [] : {}), mf(e[i], n[i]))
        : un(e[i]) || (n[i] = !0);
  return n;
}
function U1(e, n, a) {
  const i = Array.isArray(e);
  if (Rt(e) || i)
    for (const o in e)
      Array.isArray(e[o]) || (Rt(e[o]) && !z1(e[o]))
        ? Tt(n) || Ep(a[o])
          ? (a[o] = Array.isArray(e[o]) ? mf(e[o], []) : { ...mf(e[o]) })
          : U1(e[o], un(n) ? {} : n[o], a[o])
        : (a[o] = !$a(e[o], n[o]));
  return a;
}
var xl = (e, n) => U1(e, n, mf(n));
const Yx = { value: !1, isValid: !1 },
  Zx = { value: !0, isValid: !0 };
var P1 = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const n = e
          .filter((a) => a && a.checked && !a.disabled)
          .map((a) => a.value);
        return { value: n, isValid: !!n.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !Tt(e[0].attributes.value)
          ? Tt(e[0].value) || e[0].value === ""
            ? Zx
            : { value: e[0].value, isValid: !0 }
          : Zx
        : Yx;
    }
    return Yx;
  },
  B1 = (e, { valueAsNumber: n, valueAsDate: a, setValueAs: i }) =>
    Tt(e)
      ? e
      : n
      ? e === ""
        ? NaN
        : e && +e
      : a && Mr(e)
      ? new Date(e)
      : i
      ? i(e)
      : e;
const Kx = { isValid: !1, value: null };
var V1 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (n, a) =>
          a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : n,
        Kx
      )
    : Kx;
function Xx(e) {
  const n = e.ref;
  return kg(n)
    ? n.files
    : jg(n)
    ? V1(e.refs).value
    : L1(n)
    ? [...n.selectedOptions].map(({ value: a }) => a)
    : ou(n)
    ? P1(e.refs).value
    : B1(Tt(n.value) ? e.ref.value : n.value, e);
}
var qL = (e, n, a, i) => {
    const o = {};
    for (const u of e) {
      const c = pe(n, u);
      c && rt(o, u, c._f);
    }
    return {
      criteriaMode: a,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  pf = (e) => e instanceof RegExp,
  wl = (e) =>
    Tt(e)
      ? e
      : pf(e)
      ? e.source
      : Rt(e)
      ? pf(e.value)
        ? e.value.source
        : e.value
      : e,
  Qx = (e) => ({
    isOnSubmit: !e || e === ir.onSubmit,
    isOnBlur: e === ir.onBlur,
    isOnChange: e === ir.onChange,
    isOnAll: e === ir.all,
    isOnTouch: e === ir.onTouched,
  });
const Wx = "AsyncFunction";
var IL = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (sr(e.validate) && e.validate.constructor.name === Wx) ||
      (Rt(e.validate) &&
        Object.values(e.validate).find((n) => n.constructor.name === Wx))
    ),
  $L = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate),
  Jx = (e, n, a) =>
    !a &&
    (n.watchAll ||
      n.watch.has(e) ||
      [...n.watch].some(
        (i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))
      ));
const Dl = (e, n, a, i) => {
  for (const o of a || Object.keys(e)) {
    const u = pe(e, o);
    if (u) {
      const { _f: c, ...d } = u;
      if (c) {
        if (c.refs && c.refs[0] && n(c.refs[0], o) && !i) return !0;
        if (c.ref && n(c.ref, c.name) && !i) return !0;
        if (Dl(d, n)) break;
      } else if (Rt(d) && Dl(d, n)) break;
    }
  }
};
function ew(e, n, a) {
  const i = pe(e, a);
  if (i || Ng(a)) return { error: i, name: a };
  const o = a.split(".");
  for (; o.length; ) {
    const u = o.join("."),
      c = pe(n, u),
      d = pe(e, u);
    if (c && !Array.isArray(c) && a !== u) return { name: a };
    if (d && d.type) return { name: u, error: d };
    o.pop();
  }
  return { name: a };
}
var GL = (e, n, a, i) => {
    a(e);
    const { name: o, ...u } = e;
    return (
      ln(u) ||
      Object.keys(u).length >= Object.keys(n).length ||
      Object.keys(u).find((c) => n[c] === (!i || ir.all))
    );
  },
  YL = (e, n, a) =>
    !e ||
    !n ||
    e === n ||
    Nl(e).some((i) => i && (a ? i === n : i.startsWith(n) || n.startsWith(i))),
  ZL = (e, n, a, i, o) =>
    o.isOnAll
      ? !1
      : !a && o.isOnTouch
      ? !(n || e)
      : (a ? i.isOnBlur : o.isOnBlur)
      ? !e
      : (a ? i.isOnChange : o.isOnChange)
      ? e
      : !0,
  KL = (e, n) => !Xf(pe(e, n)).length && Vt(e, n),
  XL = (e, n, a) => {
    const i = Nl(pe(e, a));
    return rt(i, "root", n[a]), rt(e, a, i), e;
  },
  Gc = (e) => Mr(e);
function tw(e, n, a = "validate") {
  if (Gc(e) || (Array.isArray(e) && e.every(Gc)) || (Mn(e) && !e))
    return { type: a, message: Gc(e) ? e : "", ref: n };
}
var Ps = (e) => (Rt(e) && !pf(e) ? e : { value: e, message: "" }),
  nw = async (e, n, a, i, o, u) => {
    const {
        ref: c,
        refs: d,
        required: p,
        maxLength: m,
        minLength: g,
        min: y,
        max: x,
        pattern: R,
        validate: E,
        name: _,
        valueAsNumber: w,
        mount: A,
      } = e._f,
      C = pe(a, _);
    if (!A || n.has(_)) return {};
    const N = d ? d[0] : c,
      k = (oe) => {
        o &&
          N.reportValidity &&
          (N.setCustomValidity(Mn(oe) ? "" : oe || ""), N.reportValidity());
      },
      D = {},
      I = jg(c),
      Y = ou(c),
      G = I || Y,
      J =
        ((w || kg(c)) && Tt(c.value) && Tt(C)) ||
        (hf(c) && c.value === "") ||
        C === "" ||
        (Array.isArray(C) && !C.length),
      ye = j1.bind(null, _, i, D),
      be = (oe, ge, se, fe = ea.maxLength, j = ea.minLength) => {
        const Q = oe ? ge : se;
        D[_] = { type: oe ? fe : j, message: Q, ref: c, ...ye(oe ? fe : j, Q) };
      };
    if (
      u
        ? !Array.isArray(C) || !C.length
        : p &&
          ((!G && (J || un(C))) ||
            (Mn(C) && !C) ||
            (Y && !P1(d).isValid) ||
            (I && !V1(d).isValid))
    ) {
      const { value: oe, message: ge } = Gc(p)
        ? { value: !!p, message: p }
        : Ps(p);
      if (
        oe &&
        ((D[_] = {
          type: ea.required,
          message: ge,
          ref: N,
          ...ye(ea.required, ge),
        }),
        !i)
      )
        return k(ge), D;
    }
    if (!J && (!un(y) || !un(x))) {
      let oe, ge;
      const se = Ps(x),
        fe = Ps(y);
      if (!un(C) && !isNaN(C)) {
        const j = c.valueAsNumber || (C && +C);
        un(se.value) || (oe = j > se.value),
          un(fe.value) || (ge = j < fe.value);
      } else {
        const j = c.valueAsDate || new Date(C),
          Q = (O) => new Date(new Date().toDateString() + " " + O),
          V = c.type == "time",
          re = c.type == "week";
        Mr(se.value) &&
          C &&
          (oe = V
            ? Q(C) > Q(se.value)
            : re
            ? C > se.value
            : j > new Date(se.value)),
          Mr(fe.value) &&
            C &&
            (ge = V
              ? Q(C) < Q(fe.value)
              : re
              ? C < fe.value
              : j < new Date(fe.value));
      }
      if ((oe || ge) && (be(!!oe, se.message, fe.message, ea.max, ea.min), !i))
        return k(D[_].message), D;
    }
    if ((m || g) && !J && (Mr(C) || (u && Array.isArray(C)))) {
      const oe = Ps(m),
        ge = Ps(g),
        se = !un(oe.value) && C.length > +oe.value,
        fe = !un(ge.value) && C.length < +ge.value;
      if ((se || fe) && (be(se, oe.message, ge.message), !i))
        return k(D[_].message), D;
    }
    if (R && !J && Mr(C)) {
      const { value: oe, message: ge } = Ps(R);
      if (
        pf(oe) &&
        !C.match(oe) &&
        ((D[_] = {
          type: ea.pattern,
          message: ge,
          ref: c,
          ...ye(ea.pattern, ge),
        }),
        !i)
      )
        return k(ge), D;
    }
    if (E) {
      if (sr(E)) {
        const oe = await E(C, a),
          ge = tw(oe, N);
        if (ge && ((D[_] = { ...ge, ...ye(ea.validate, ge.message) }), !i))
          return k(ge.message), D;
      } else if (Rt(E)) {
        let oe = {};
        for (const ge in E) {
          if (!ln(oe) && !i) break;
          const se = tw(await E[ge](C, a), N, ge);
          se &&
            ((oe = { ...se, ...ye(ge, se.message) }),
            k(se.message),
            i && (D[_] = oe));
        }
        if (!ln(oe) && ((D[_] = { ref: N, ...oe }), !i)) return D;
      }
    }
    return k(!0), D;
  };
const QL = {
  mode: ir.onSubmit,
  reValidateMode: ir.onChange,
  shouldFocusError: !0,
};
function WL(e = {}) {
  let n = { ...QL, ...e },
    a = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: sr(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: n.errors || {},
      disabled: n.disabled || !1,
    };
  const i = {};
  let o =
      Rt(n.defaultValues) || Rt(n.values)
        ? Qt(n.defaultValues || n.values) || {}
        : {},
    u = n.shouldUnregister ? {} : Qt(o),
    c = { action: !1, mount: !1, watch: !1 },
    d = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    m = 0;
  const g = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let y = { ...g };
  const x = { array: Gx(), state: Gx() },
    R = n.criteriaMode === ir.all,
    E = (L) => (F) => {
      clearTimeout(m), (m = setTimeout(L, F));
    },
    _ = async (L) => {
      if (!n.disabled && (g.isValid || y.isValid || L)) {
        const F = n.resolver ? ln((await Y()).errors) : await J(i, !0);
        F !== a.isValid && x.state.next({ isValid: F });
      }
    },
    w = (L, F) => {
      !n.disabled &&
        (g.isValidating ||
          g.validatingFields ||
          y.isValidating ||
          y.validatingFields) &&
        ((L || Array.from(d.mount)).forEach((X) => {
          X && (F ? rt(a.validatingFields, X, F) : Vt(a.validatingFields, X));
        }),
        x.state.next({
          validatingFields: a.validatingFields,
          isValidating: !ln(a.validatingFields),
        }));
    },
    A = (L, F = [], X, me, he = !0, ce = !0) => {
      if (me && X && !n.disabled) {
        if (((c.action = !0), ce && Array.isArray(pe(i, L)))) {
          const xe = X(pe(i, L), me.argA, me.argB);
          he && rt(i, L, xe);
        }
        if (ce && Array.isArray(pe(a.errors, L))) {
          const xe = X(pe(a.errors, L), me.argA, me.argB);
          he && rt(a.errors, L, xe), KL(a.errors, L);
        }
        if (
          (g.touchedFields || y.touchedFields) &&
          ce &&
          Array.isArray(pe(a.touchedFields, L))
        ) {
          const xe = X(pe(a.touchedFields, L), me.argA, me.argB);
          he && rt(a.touchedFields, L, xe);
        }
        (g.dirtyFields || y.dirtyFields) && (a.dirtyFields = xl(o, u)),
          x.state.next({
            name: L,
            isDirty: be(L, F),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          });
      } else rt(u, L, F);
    },
    C = (L, F) => {
      rt(a.errors, L, F), x.state.next({ errors: a.errors });
    },
    N = (L) => {
      (a.errors = L), x.state.next({ errors: a.errors, isValid: !1 });
    },
    k = (L, F, X, me) => {
      const he = pe(i, L);
      if (he) {
        const ce = pe(u, L, Tt(X) ? pe(o, L) : X);
        Tt(ce) || (me && me.defaultChecked) || F
          ? rt(u, L, F ? ce : Xx(he._f))
          : se(L, ce),
          c.mount && _();
      }
    },
    D = (L, F, X, me, he) => {
      let ce = !1,
        xe = !1;
      const je = { name: L };
      if (!n.disabled) {
        if (!X || me) {
          (g.isDirty || y.isDirty) &&
            ((xe = a.isDirty),
            (a.isDirty = je.isDirty = be()),
            (ce = xe !== je.isDirty));
          const Ie = $a(pe(o, L), F);
          (xe = !!pe(a.dirtyFields, L)),
            Ie ? Vt(a.dirtyFields, L) : rt(a.dirtyFields, L, !0),
            (je.dirtyFields = a.dirtyFields),
            (ce = ce || ((g.dirtyFields || y.dirtyFields) && xe !== !Ie));
        }
        if (X) {
          const Ie = pe(a.touchedFields, L);
          Ie ||
            (rt(a.touchedFields, L, X),
            (je.touchedFields = a.touchedFields),
            (ce = ce || ((g.touchedFields || y.touchedFields) && Ie !== X)));
        }
        ce && he && x.state.next(je);
      }
      return ce ? je : {};
    },
    I = (L, F, X, me) => {
      const he = pe(a.errors, L),
        ce = (g.isValid || y.isValid) && Mn(F) && a.isValid !== F;
      if (
        (n.delayError && X
          ? ((p = E(() => C(L, X))), p(n.delayError))
          : (clearTimeout(m),
            (p = null),
            X ? rt(a.errors, L, X) : Vt(a.errors, L)),
        (X ? !$a(he, X) : he) || !ln(me) || ce)
      ) {
        const xe = {
          ...me,
          ...(ce && Mn(F) ? { isValid: F } : {}),
          errors: a.errors,
          name: L,
        };
        (a = { ...a, ...xe }), x.state.next(xe);
      }
    },
    Y = async (L) => {
      w(L, !0);
      const F = await n.resolver(
        u,
        n.context,
        qL(L || d.mount, i, n.criteriaMode, n.shouldUseNativeValidation)
      );
      return w(L), F;
    },
    G = async (L) => {
      const { errors: F } = await Y(L);
      if (L)
        for (const X of L) {
          const me = pe(F, X);
          me ? rt(a.errors, X, me) : Vt(a.errors, X);
        }
      else a.errors = F;
      return F;
    },
    J = async (L, F, X = { valid: !0 }) => {
      for (const me in L) {
        const he = L[me];
        if (he) {
          const { _f: ce, ...xe } = he;
          if (ce) {
            const je = d.array.has(ce.name),
              Ie = he._f && IL(he._f);
            Ie && g.validatingFields && w([me], !0);
            const nt = await nw(
              he,
              d.disabled,
              u,
              R,
              n.shouldUseNativeValidation && !F,
              je
            );
            if (
              (Ie && g.validatingFields && w([me]),
              nt[ce.name] && ((X.valid = !1), F))
            )
              break;
            !F &&
              (pe(nt, ce.name)
                ? je
                  ? XL(a.errors, nt, ce.name)
                  : rt(a.errors, ce.name, nt[ce.name])
                : Vt(a.errors, ce.name));
          }
          !ln(xe) && (await J(xe, F, X));
        }
      }
      return X.valid;
    },
    ye = () => {
      for (const L of d.unMount) {
        const F = pe(i, L);
        F &&
          (F._f.refs ? F._f.refs.every((X) => !Gm(X)) : !Gm(F._f.ref)) &&
          Oe(L);
      }
      d.unMount = new Set();
    },
    be = (L, F) => !n.disabled && (L && F && rt(u, L, F), !$a(O(), o)),
    oe = (L, F, X) =>
      k1(L, d, { ...(c.mount ? u : Tt(F) ? o : Mr(L) ? { [L]: F } : F) }, X, F),
    ge = (L) =>
      Xf(pe(c.mount ? u : o, L, n.shouldUnregister ? pe(o, L, []) : [])),
    se = (L, F, X = {}) => {
      const me = pe(i, L);
      let he = F;
      if (me) {
        const ce = me._f;
        ce &&
          (!ce.disabled && rt(u, L, B1(F, ce)),
          (he = hf(ce.ref) && un(F) ? "" : F),
          L1(ce.ref)
            ? [...ce.ref.options].forEach(
                (xe) => (xe.selected = he.includes(xe.value))
              )
            : ce.refs
            ? ou(ce.ref)
              ? ce.refs.forEach((xe) => {
                  (!xe.defaultChecked || !xe.disabled) &&
                    (Array.isArray(he)
                      ? (xe.checked = !!he.find((je) => je === xe.value))
                      : (xe.checked = he === xe.value || !!he));
                })
              : ce.refs.forEach((xe) => (xe.checked = xe.value === he))
            : kg(ce.ref)
            ? (ce.ref.value = "")
            : ((ce.ref.value = he),
              ce.ref.type || x.state.next({ name: L, values: Qt(u) })));
      }
      (X.shouldDirty || X.shouldTouch) &&
        D(L, he, X.shouldTouch, X.shouldDirty, !0),
        X.shouldValidate && re(L);
    },
    fe = (L, F, X) => {
      for (const me in F) {
        if (!F.hasOwnProperty(me)) return;
        const he = F[me],
          ce = `${L}.${me}`,
          xe = pe(i, ce);
        (d.array.has(L) || Rt(he) || (xe && !xe._f)) && !Mi(he)
          ? fe(ce, he, X)
          : se(ce, he, X);
      }
    },
    j = (L, F, X = {}) => {
      const me = pe(i, L),
        he = d.array.has(L),
        ce = Qt(F);
      rt(u, L, ce),
        he
          ? (x.array.next({ name: L, values: Qt(u) }),
            (g.isDirty || g.dirtyFields || y.isDirty || y.dirtyFields) &&
              X.shouldDirty &&
              x.state.next({
                name: L,
                dirtyFields: xl(o, u),
                isDirty: be(L, ce),
              }))
          : me && !me._f && !un(ce)
          ? fe(L, ce, X)
          : se(L, ce, X),
        Jx(L, d) && x.state.next({ ...a }),
        x.state.next({ name: c.mount ? L : void 0, values: Qt(u) });
    },
    Q = async (L) => {
      c.mount = !0;
      const F = L.target;
      let X = F.name,
        me = !0;
      const he = pe(i, X),
        ce = (Ie) => {
          me =
            Number.isNaN(Ie) ||
            (Mi(Ie) && isNaN(Ie.getTime())) ||
            $a(Ie, pe(u, X, Ie));
        },
        xe = Qx(n.mode),
        je = Qx(n.reValidateMode);
      if (he) {
        let Ie, nt;
        const wn = F.type ? Xx(he._f) : A1(L),
          Sn = L.type === df.BLUR || L.type === df.FOCUS_OUT,
          pr =
            (!$L(he._f) && !n.resolver && !pe(a.errors, X) && !he._f.deps) ||
            ZL(Sn, pe(a.touchedFields, X), a.isSubmitted, je, xe),
          gr = Jx(X, d, Sn);
        rt(u, X, wn),
          Sn
            ? (he._f.onBlur && he._f.onBlur(L), p && p(0))
            : he._f.onChange && he._f.onChange(L);
        const yr = D(X, wn, Sn),
          Un = !ln(yr) || gr;
        if ((!Sn && x.state.next({ name: X, type: L.type, values: Qt(u) }), pr))
          return (
            (g.isValid || y.isValid) &&
              (n.mode === "onBlur" ? Sn && _() : Sn || _()),
            Un && x.state.next({ name: X, ...(gr ? {} : yr) })
          );
        if ((!Sn && gr && x.state.next({ ...a }), n.resolver)) {
          const { errors: vr } = await Y([X]);
          if ((ce(wn), me)) {
            const zr = ew(a.errors, i, X),
              ya = ew(vr, i, zr.name || X);
            (Ie = ya.error), (X = ya.name), (nt = ln(vr));
          }
        } else
          w([X], !0),
            (Ie = (await nw(he, d.disabled, u, R, n.shouldUseNativeValidation))[
              X
            ]),
            w([X]),
            ce(wn),
            me &&
              (Ie
                ? (nt = !1)
                : (g.isValid || y.isValid) && (nt = await J(i, !0)));
        me && (he._f.deps && re(he._f.deps), I(X, nt, Ie, yr));
      }
    },
    V = (L, F) => {
      if (pe(a.errors, F) && L.focus) return L.focus(), 1;
    },
    re = async (L, F = {}) => {
      let X, me;
      const he = Nl(L);
      if (n.resolver) {
        const ce = await G(Tt(L) ? L : he);
        (X = ln(ce)), (me = L ? !he.some((xe) => pe(ce, xe)) : X);
      } else
        L
          ? ((me = (
              await Promise.all(
                he.map(async (ce) => {
                  const xe = pe(i, ce);
                  return await J(xe && xe._f ? { [ce]: xe } : xe);
                })
              )
            ).every(Boolean)),
            !(!me && !a.isValid) && _())
          : (me = X = await J(i));
      return (
        x.state.next({
          ...(!Mr(L) || ((g.isValid || y.isValid) && X !== a.isValid)
            ? {}
            : { name: L }),
          ...(n.resolver || !L ? { isValid: X } : {}),
          errors: a.errors,
        }),
        F.shouldFocus && !me && Dl(i, V, L ? he : d.mount),
        me
      );
    },
    O = (L) => {
      const F = { ...(c.mount ? u : o) };
      return Tt(L) ? F : Mr(L) ? pe(F, L) : L.map((X) => pe(F, X));
    },
    H = (L, F) => ({
      invalid: !!pe((F || a).errors, L),
      isDirty: !!pe((F || a).dirtyFields, L),
      error: pe((F || a).errors, L),
      isValidating: !!pe(a.validatingFields, L),
      isTouched: !!pe((F || a).touchedFields, L),
    }),
    ie = (L) => {
      L && Nl(L).forEach((F) => Vt(a.errors, F)),
        x.state.next({ errors: L ? a.errors : {} });
    },
    W = (L, F, X) => {
      const me = (pe(i, L, { _f: {} })._f || {}).ref,
        he = pe(a.errors, L) || {},
        { ref: ce, message: xe, type: je, ...Ie } = he;
      rt(a.errors, L, { ...Ie, ...F, ref: me }),
        x.state.next({ name: L, errors: a.errors, isValid: !1 }),
        X && X.shouldFocus && me && me.focus && me.focus();
    },
    le = (L, F) =>
      sr(L)
        ? x.state.subscribe({ next: (X) => L(oe(void 0, F), X) })
        : oe(L, F, !0),
    Ce = (L) =>
      x.state.subscribe({
        next: (F) => {
          YL(L.name, F.name, L.exact) &&
            GL(F, L.formState || g, Ot, L.reRenderRoot) &&
            L.callback({ values: { ...u }, ...a, ...F });
        },
      }).unsubscribe,
    de = (L) => (
      (c.mount = !0), (y = { ...y, ...L.formState }), Ce({ ...L, formState: y })
    ),
    Oe = (L, F = {}) => {
      for (const X of L ? Nl(L) : d.mount)
        d.mount.delete(X),
          d.array.delete(X),
          F.keepValue || (Vt(i, X), Vt(u, X)),
          !F.keepError && Vt(a.errors, X),
          !F.keepDirty && Vt(a.dirtyFields, X),
          !F.keepTouched && Vt(a.touchedFields, X),
          !F.keepIsValidating && Vt(a.validatingFields, X),
          !n.shouldUnregister && !F.keepDefaultValue && Vt(o, X);
      x.state.next({ values: Qt(u) }),
        x.state.next({ ...a, ...(F.keepDirty ? { isDirty: be() } : {}) }),
        !F.keepIsValid && _();
    },
    ze = ({ disabled: L, name: F }) => {
      ((Mn(L) && c.mount) || L || d.disabled.has(F)) &&
        (L ? d.disabled.add(F) : d.disabled.delete(F));
    },
    Xe = (L, F = {}) => {
      let X = pe(i, L);
      const me = Mn(F.disabled) || Mn(n.disabled);
      return (
        rt(i, L, {
          ...(X || {}),
          _f: {
            ...(X && X._f ? X._f : { ref: { name: L } }),
            name: L,
            mount: !0,
            ...F,
          },
        }),
        d.mount.add(L),
        X
          ? ze({ disabled: Mn(F.disabled) ? F.disabled : n.disabled, name: L })
          : k(L, !0, F.value),
        {
          ...(me ? { disabled: F.disabled || n.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!F.required,
                min: wl(F.min),
                max: wl(F.max),
                minLength: wl(F.minLength),
                maxLength: wl(F.maxLength),
                pattern: wl(F.pattern),
              }
            : {}),
          name: L,
          onChange: Q,
          onBlur: Q,
          ref: (he) => {
            if (he) {
              Xe(L, F), (X = pe(i, L));
              const ce =
                  (Tt(he.value) &&
                    he.querySelectorAll &&
                    he.querySelectorAll("input,select,textarea")[0]) ||
                  he,
                xe = VL(ce),
                je = X._f.refs || [];
              if (xe ? je.find((Ie) => Ie === ce) : ce === X._f.ref) return;
              rt(i, L, {
                _f: {
                  ...X._f,
                  ...(xe
                    ? {
                        refs: [
                          ...je.filter(Gm),
                          ce,
                          ...(Array.isArray(pe(o, L)) ? [{}] : []),
                        ],
                        ref: { type: ce.type, name: L },
                      }
                    : { ref: ce }),
                },
              }),
                k(L, !1, void 0, ce);
            } else
              (X = pe(i, L, {})),
                X._f && (X._f.mount = !1),
                (n.shouldUnregister || F.shouldUnregister) &&
                  !(C1(d.array, L) && c.action) &&
                  d.unMount.add(L);
          },
        }
      );
    },
    mt = () => n.shouldFocusError && Dl(i, V, d.mount),
    an = (L) => {
      Mn(L) &&
        (x.state.next({ disabled: L }),
        Dl(
          i,
          (F, X) => {
            const me = pe(i, X);
            me &&
              ((F.disabled = me._f.disabled || L),
              Array.isArray(me._f.refs) &&
                me._f.refs.forEach((he) => {
                  he.disabled = me._f.disabled || L;
                }));
          },
          0,
          !1
        ));
    },
    Gt = (L, F) => async (X) => {
      let me;
      X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
      let he = Qt(u);
      if ((x.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: ce, values: xe } = await Y();
        (a.errors = ce), (he = xe);
      } else await J(i);
      if (d.disabled.size) for (const ce of d.disabled) rt(he, ce, void 0);
      if ((Vt(a.errors, "root"), ln(a.errors))) {
        x.state.next({ errors: {} });
        try {
          await L(he, X);
        } catch (ce) {
          me = ce;
        }
      } else F && (await F({ ...a.errors }, X)), mt(), setTimeout(mt);
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: ln(a.errors) && !me,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        me)
      )
        throw me;
    },
    bn = (L, F = {}) => {
      pe(i, L) &&
        (Tt(F.defaultValue)
          ? j(L, Qt(pe(o, L)))
          : (j(L, F.defaultValue), rt(o, L, Qt(F.defaultValue))),
        F.keepTouched || Vt(a.touchedFields, L),
        F.keepDirty ||
          (Vt(a.dirtyFields, L),
          (a.isDirty = F.defaultValue ? be(L, Qt(pe(o, L))) : be())),
        F.keepError || (Vt(a.errors, L), g.isValid && _()),
        x.state.next({ ...a }));
    },
    xn = (L, F = {}) => {
      const X = L ? Qt(L) : o,
        me = Qt(X),
        he = ln(L),
        ce = he ? o : me;
      if ((F.keepDefaultValues || (o = X), !F.keepValues)) {
        if (F.keepDirtyValues) {
          const xe = new Set([...d.mount, ...Object.keys(xl(o, u))]);
          for (const je of Array.from(xe))
            pe(a.dirtyFields, je) ? rt(ce, je, pe(u, je)) : j(je, pe(ce, je));
        } else {
          if (Mg && Tt(L))
            for (const xe of d.mount) {
              const je = pe(i, xe);
              if (je && je._f) {
                const Ie = Array.isArray(je._f.refs)
                  ? je._f.refs[0]
                  : je._f.ref;
                if (hf(Ie)) {
                  const nt = Ie.closest("form");
                  if (nt) {
                    nt.reset();
                    break;
                  }
                }
              }
            }
          for (const xe of d.mount) j(xe, pe(ce, xe));
        }
        (u = Qt(ce)),
          x.array.next({ values: { ...ce } }),
          x.state.next({ values: { ...ce } });
      }
      (d = {
        mount: F.keepDirtyValues ? d.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (c.mount = !g.isValid || !!F.keepIsValid || !!F.keepDirtyValues),
        (c.watch = !!n.shouldUnregister),
        x.state.next({
          submitCount: F.keepSubmitCount ? a.submitCount : 0,
          isDirty: he
            ? !1
            : F.keepDirty
            ? a.isDirty
            : !!(F.keepDefaultValues && !$a(L, o)),
          isSubmitted: F.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: he
            ? {}
            : F.keepDirtyValues
            ? F.keepDefaultValues && u
              ? xl(o, u)
              : a.dirtyFields
            : F.keepDefaultValues && L
            ? xl(o, L)
            : F.keepDirty
            ? a.dirtyFields
            : {},
          touchedFields: F.keepTouched ? a.touchedFields : {},
          errors: F.keepErrors ? a.errors : {},
          isSubmitSuccessful: F.keepIsSubmitSuccessful
            ? a.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    pa = (L, F) => xn(sr(L) ? L(u) : L, F),
    ga = (L, F = {}) => {
      const X = pe(i, L),
        me = X && X._f;
      if (me) {
        const he = me.refs ? me.refs[0] : me.ref;
        he.focus &&
          (he.focus(), F.shouldSelect && sr(he.select) && he.select());
      }
    },
    Ot = (L) => {
      a = { ...a, ...L };
    },
    Mt = {
      control: {
        register: Xe,
        unregister: Oe,
        getFieldState: H,
        handleSubmit: Gt,
        setError: W,
        _subscribe: Ce,
        _runSchema: Y,
        _getWatch: oe,
        _getDirty: be,
        _setValid: _,
        _setFieldArray: A,
        _setDisabledField: ze,
        _setErrors: N,
        _getFieldArray: ge,
        _reset: xn,
        _resetDefaultValues: () =>
          sr(n.defaultValues) &&
          n.defaultValues().then((L) => {
            pa(L, n.resetOptions), x.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: ye,
        _disableForm: an,
        _subjects: x,
        _proxyFormState: g,
        get _fields() {
          return i;
        },
        get _formValues() {
          return u;
        },
        get _state() {
          return c;
        },
        set _state(L) {
          c = L;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return d;
        },
        set _names(L) {
          d = L;
        },
        get _formState() {
          return a;
        },
        get _options() {
          return n;
        },
        set _options(L) {
          n = { ...n, ...L };
        },
      },
      subscribe: de,
      trigger: re,
      register: Xe,
      handleSubmit: Gt,
      watch: le,
      setValue: j,
      getValues: O,
      reset: pa,
      resetField: bn,
      clearErrors: ie,
      unregister: Oe,
      setError: W,
      setFocus: ga,
      getFieldState: H,
    };
  return { ...Mt, formControl: Mt };
}
function JL(e = {}) {
  const n = ne.useRef(void 0),
    a = ne.useRef(void 0),
    [i, o] = ne.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: sr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      isReady: !1,
      defaultValues: sr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  n.current ||
    ((n.current = { ...(e.formControl ? e.formControl : WL(e)), formState: i }),
    e.formControl &&
      e.defaultValues &&
      !sr(e.defaultValues) &&
      e.formControl.reset(e.defaultValues, e.resetOptions));
  const u = n.current.control;
  return (
    (u._options = e),
    Dg(() => {
      const c = u._subscribe({
        formState: u._proxyFormState,
        callback: () => o({ ...u._formState }),
        reRenderRoot: !0,
      });
      return o((d) => ({ ...d, isReady: !0 })), (u._formState.isReady = !0), c;
    }, [u]),
    ne.useEffect(() => u._disableForm(e.disabled), [u, e.disabled]),
    ne.useEffect(() => {
      e.mode && (u._options.mode = e.mode),
        e.reValidateMode && (u._options.reValidateMode = e.reValidateMode),
        e.errors && !ln(e.errors) && u._setErrors(e.errors);
    }, [u, e.errors, e.mode, e.reValidateMode]),
    ne.useEffect(() => {
      e.shouldUnregister && u._subjects.state.next({ values: u._getWatch() });
    }, [u, e.shouldUnregister]),
    ne.useEffect(() => {
      if (u._proxyFormState.isDirty) {
        const c = u._getDirty();
        c !== i.isDirty && u._subjects.state.next({ isDirty: c });
      }
    }, [u, i.isDirty]),
    ne.useEffect(() => {
      e.values && !$a(e.values, a.current)
        ? (u._reset(e.values, u._options.resetOptions),
          (a.current = e.values),
          o((c) => ({ ...c })))
        : u._resetDefaultValues();
    }, [u, e.values]),
    ne.useEffect(() => {
      u._state.mount || (u._setValid(), (u._state.mount = !0)),
        u._state.watch &&
          ((u._state.watch = !1), u._subjects.state.next({ ...u._formState })),
        u._removeUnmounted();
    }),
    (n.current.formState = N1(i, u)),
    n.current
  );
}
function ez({ className: e, ...n }) {
  return S.jsx(kL, {
    "data-slot": "label",
    className: Ve(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      e
    ),
    ...n,
  });
}
const tz = zL,
  H1 = v.createContext({}),
  rw = ({ ...e }) =>
    S.jsx(H1.Provider, {
      value: { name: e.name },
      children: S.jsx(BL, { ...e }),
    }),
  Lg = () => {
    const e = v.useContext(H1),
      n = v.useContext(F1),
      { getFieldState: a } = Qf(),
      i = D1({ name: e.name }),
      o = a(e.name, i);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: u } = n;
    return {
      id: u,
      name: e.name,
      formItemId: `${u}-form-item`,
      formDescriptionId: `${u}-form-item-description`,
      formMessageId: `${u}-form-item-message`,
      ...o,
    };
  },
  F1 = v.createContext({});
function aw({ className: e, ...n }) {
  const a = v.useId();
  return S.jsx(F1.Provider, {
    value: { id: a },
    children: S.jsx("div", {
      "data-slot": "form-item",
      className: Ve("grid gap-2", e),
      ...n,
    }),
  });
}
function iw({ className: e, ...n }) {
  const { error: a, formItemId: i } = Lg();
  return S.jsx(ez, {
    "data-slot": "form-label",
    "data-error": !!a,
    className: Ve("data-[error=true]:text-destructive", e),
    htmlFor: i,
    ...n,
  });
}
function sw({ ...e }) {
  const {
    error: n,
    formItemId: a,
    formDescriptionId: i,
    formMessageId: o,
  } = Lg();
  return S.jsx(zf, {
    "data-slot": "form-control",
    id: a,
    "aria-describedby": n ? `${i} ${o}` : `${i}`,
    "aria-invalid": !!n,
    ...e,
  });
}
function ow({ className: e, ...n }) {
  const { error: a, formMessageId: i } = Lg(),
    o = a ? String((a == null ? void 0 : a.message) ?? "") : n.children;
  return o
    ? S.jsx("p", {
        "data-slot": "form-message",
        id: i,
        className: Ve("text-destructive text-sm", e),
        ...n,
        children: o,
      })
    : null;
}
var et;
(function (e) {
  e.assertEqual = (o) => {};
  function n(o) {}
  e.assertIs = n;
  function a(o) {
    throw new Error();
  }
  (e.assertNever = a),
    (e.arrayToEnum = (o) => {
      const u = {};
      for (const c of o) u[c] = c;
      return u;
    }),
    (e.getValidEnumValues = (o) => {
      const u = e.objectKeys(o).filter((d) => typeof o[o[d]] != "number"),
        c = {};
      for (const d of u) c[d] = o[d];
      return e.objectValues(c);
    }),
    (e.objectValues = (o) =>
      e.objectKeys(o).map(function (u) {
        return o[u];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            const u = [];
            for (const c in o)
              Object.prototype.hasOwnProperty.call(o, c) && u.push(c);
            return u;
          }),
    (e.find = (o, u) => {
      for (const c of o) if (u(c)) return c;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) =>
            typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o);
  function i(o, u = " | ") {
    return o.map((c) => (typeof c == "string" ? `'${c}'` : c)).join(u);
  }
  (e.joinValues = i),
    (e.jsonStringifyReplacer = (o, u) =>
      typeof u == "bigint" ? u.toString() : u);
})(et || (et = {}));
var lw;
(function (e) {
  e.mergeShapes = (n, a) => ({ ...n, ...a });
})(lw || (lw = {}));
const Ee = et.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Ia = (e) => {
    switch (typeof e) {
      case "undefined":
        return Ee.undefined;
      case "string":
        return Ee.string;
      case "number":
        return Number.isNaN(e) ? Ee.nan : Ee.number;
      case "boolean":
        return Ee.boolean;
      case "function":
        return Ee.function;
      case "bigint":
        return Ee.bigint;
      case "symbol":
        return Ee.symbol;
      case "object":
        return Array.isArray(e)
          ? Ee.array
          : e === null
          ? Ee.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? Ee.promise
          : typeof Map < "u" && e instanceof Map
          ? Ee.map
          : typeof Set < "u" && e instanceof Set
          ? Ee.set
          : typeof Date < "u" && e instanceof Date
          ? Ee.date
          : Ee.object;
      default:
        return Ee.unknown;
    }
  },
  ue = et.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class ma extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const a = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, a)
      : (this.__proto__ = a),
      (this.name = "ZodError"),
      (this.issues = n);
  }
  format(n) {
    const a =
        n ||
        function (u) {
          return u.message;
        },
      i = { _errors: [] },
      o = (u) => {
        for (const c of u.issues)
          if (c.code === "invalid_union") c.unionErrors.map(o);
          else if (c.code === "invalid_return_type") o(c.returnTypeError);
          else if (c.code === "invalid_arguments") o(c.argumentsError);
          else if (c.path.length === 0) i._errors.push(a(c));
          else {
            let d = i,
              p = 0;
            for (; p < c.path.length; ) {
              const m = c.path[p];
              p === c.path.length - 1
                ? ((d[m] = d[m] || { _errors: [] }), d[m]._errors.push(a(c)))
                : (d[m] = d[m] || { _errors: [] }),
                (d = d[m]),
                p++;
            }
          }
      };
    return o(this), i;
  }
  static assert(n) {
    if (!(n instanceof ma)) throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, et.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (a) => a.message) {
    const a = {},
      i = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((a[o.path[0]] = a[o.path[0]] || []), a[o.path[0]].push(n(o)))
        : i.push(n(o));
    return { formErrors: i, fieldErrors: a };
  }
  get formErrors() {
    return this.flatten();
  }
}
ma.create = (e) => new ma(e);
const Tp = (e, n) => {
  let a;
  switch (e.code) {
    case ue.invalid_type:
      e.received === Ee.undefined
        ? (a = "Required")
        : (a = `Expected ${e.expected}, received ${e.received}`);
      break;
    case ue.invalid_literal:
      a = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        et.jsonStringifyReplacer
      )}`;
      break;
    case ue.unrecognized_keys:
      a = `Unrecognized key(s) in object: ${et.joinValues(e.keys, ", ")}`;
      break;
    case ue.invalid_union:
      a = "Invalid input";
      break;
    case ue.invalid_union_discriminator:
      a = `Invalid discriminator value. Expected ${et.joinValues(e.options)}`;
      break;
    case ue.invalid_enum_value:
      a = `Invalid enum value. Expected ${et.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case ue.invalid_arguments:
      a = "Invalid function arguments";
      break;
    case ue.invalid_return_type:
      a = "Invalid function return type";
      break;
    case ue.invalid_date:
      a = "Invalid date";
      break;
    case ue.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((a = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (a = `${a} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
          : et.assertNever(e.validation)
        : e.validation !== "regex"
        ? (a = `Invalid ${e.validation}`)
        : (a = "Invalid");
      break;
    case ue.too_small:
      e.type === "array"
        ? (a = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (a = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (a = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (a = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (a = "Invalid input");
      break;
    case ue.too_big:
      e.type === "array"
        ? (a = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (a = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (a = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (a = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (a = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (a = "Invalid input");
      break;
    case ue.custom:
      a = "Invalid input";
      break;
    case ue.invalid_intersection_types:
      a = "Intersection results could not be merged";
      break;
    case ue.not_multiple_of:
      a = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ue.not_finite:
      a = "Number must be finite";
      break;
    default:
      (a = n.defaultError), et.assertNever(e);
  }
  return { message: a };
};
let nz = Tp;
function rz() {
  return nz;
}
const az = (e) => {
  const { data: n, path: a, errorMaps: i, issueData: o } = e,
    u = [...a, ...(o.path || [])],
    c = { ...o, path: u };
  if (o.message !== void 0) return { ...o, path: u, message: o.message };
  let d = "";
  const p = i
    .filter((m) => !!m)
    .slice()
    .reverse();
  for (const m of p) d = m(c, { data: n, defaultError: d }).message;
  return { ...o, path: u, message: d };
};
function ve(e, n) {
  const a = rz(),
    i = az({
      issueData: n,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        a,
        a === Tp ? void 0 : Tp,
      ].filter((o) => !!o),
    });
  e.common.issues.push(i);
}
class zn {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(n, a) {
    const i = [];
    for (const o of a) {
      if (o.status === "aborted") return Be;
      o.status === "dirty" && n.dirty(), i.push(o.value);
    }
    return { status: n.value, value: i };
  }
  static async mergeObjectAsync(n, a) {
    const i = [];
    for (const o of a) {
      const u = await o.key,
        c = await o.value;
      i.push({ key: u, value: c });
    }
    return zn.mergeObjectSync(n, i);
  }
  static mergeObjectSync(n, a) {
    const i = {};
    for (const o of a) {
      const { key: u, value: c } = o;
      if (u.status === "aborted" || c.status === "aborted") return Be;
      u.status === "dirty" && n.dirty(),
        c.status === "dirty" && n.dirty(),
        u.value !== "__proto__" &&
          (typeof c.value < "u" || o.alwaysSet) &&
          (i[u.value] = c.value);
    }
    return { status: n.value, value: i };
  }
}
const Be = Object.freeze({ status: "aborted" }),
  Tl = (e) => ({ status: "dirty", value: e }),
  Qn = (e) => ({ status: "valid", value: e }),
  uw = (e) => e.status === "aborted",
  cw = (e) => e.status === "dirty",
  ro = (e) => e.status === "valid",
  gf = (e) => typeof Promise < "u" && e instanceof Promise;
var Te;
(function (e) {
  (e.errToObj = (n) => (typeof n == "string" ? { message: n } : n || {})),
    (e.toString = (n) =>
      typeof n == "string" ? n : n == null ? void 0 : n.message);
})(Te || (Te = {}));
var yf = function (e, n, a, i) {
    if (a === "a" && !i)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof n == "function" ? e !== n || !i : !n.has(e))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return a === "m" ? i : a === "a" ? i.call(e) : i ? i.value : n.get(e);
  },
  q1 = function (e, n, a, i, o) {
    if (i === "m") throw new TypeError("Private method is not writable");
    if (i === "a" && !o)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof n == "function" ? e !== n || !o : !n.has(e))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return i === "a" ? o.call(e, a) : o ? (o.value = a) : n.set(e, a), a;
  },
  Rl,
  Al;
class ai {
  constructor(n, a, i, o) {
    (this._cachedPath = []),
      (this.parent = n),
      (this.data = a),
      (this._path = i),
      (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const fw = (e, n) => {
  if (ro(n)) return { success: !0, data: n.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const a = new ma(e.common.issues);
      return (this._error = a), this._error;
    },
  };
};
function Ge(e) {
  if (!e) return {};
  const {
    errorMap: n,
    invalid_type_error: a,
    required_error: i,
    description: o,
  } = e;
  if (n && (a || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return n
    ? { errorMap: n, description: o }
    : {
        errorMap: (c, d) => {
          const { message: p } = e;
          return c.code === "invalid_enum_value"
            ? { message: p ?? d.defaultError }
            : typeof d.data > "u"
            ? { message: p ?? i ?? d.defaultError }
            : c.code !== "invalid_type"
            ? { message: d.defaultError }
            : { message: p ?? a ?? d.defaultError };
        },
        description: o,
      };
}
class We {
  get description() {
    return this._def.description;
  }
  _getType(n) {
    return Ia(n.data);
  }
  _getOrReturnCtx(n, a) {
    return (
      a || {
        common: n.parent.common,
        data: n.data,
        parsedType: Ia(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      }
    );
  }
  _processInputParams(n) {
    return {
      status: new zn(),
      ctx: {
        common: n.parent.common,
        data: n.data,
        parsedType: Ia(n.data),
        schemaErrorMap: this._def.errorMap,
        path: n.path,
        parent: n.parent,
      },
    };
  }
  _parseSync(n) {
    const a = this._parse(n);
    if (gf(a)) throw new Error("Synchronous parse encountered promise.");
    return a;
  }
  _parseAsync(n) {
    const a = this._parse(n);
    return Promise.resolve(a);
  }
  parse(n, a) {
    const i = this.safeParse(n, a);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(n, a) {
    const i = {
        common: {
          issues: [],
          async: (a == null ? void 0 : a.async) ?? !1,
          contextualErrorMap: a == null ? void 0 : a.errorMap,
        },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ia(n),
      },
      o = this._parseSync({ data: n, path: i.path, parent: i });
    return fw(i, o);
  }
  "~validate"(n) {
    var i, o;
    const a = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: n,
      parsedType: Ia(n),
    };
    if (!this["~standard"].async)
      try {
        const u = this._parseSync({ data: n, path: [], parent: a });
        return ro(u) ? { value: u.value } : { issues: a.common.issues };
      } catch (u) {
        (o =
          (i = u == null ? void 0 : u.message) == null
            ? void 0
            : i.toLowerCase()) != null &&
          o.includes("encountered") &&
          (this["~standard"].async = !0),
          (a.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: n, path: [], parent: a }).then((u) =>
      ro(u) ? { value: u.value } : { issues: a.common.issues }
    );
  }
  async parseAsync(n, a) {
    const i = await this.safeParseAsync(n, a);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(n, a) {
    const i = {
        common: {
          issues: [],
          contextualErrorMap: a == null ? void 0 : a.errorMap,
          async: !0,
        },
        path: (a == null ? void 0 : a.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: n,
        parsedType: Ia(n),
      },
      o = this._parse({ data: n, path: i.path, parent: i }),
      u = await (gf(o) ? o : Promise.resolve(o));
    return fw(i, u);
  }
  refine(n, a) {
    const i = (o) =>
      typeof a == "string" || typeof a > "u"
        ? { message: a }
        : typeof a == "function"
        ? a(o)
        : a;
    return this._refinement((o, u) => {
      const c = n(o),
        d = () => u.addIssue({ code: ue.custom, ...i(o) });
      return typeof Promise < "u" && c instanceof Promise
        ? c.then((p) => (p ? !0 : (d(), !1)))
        : c
        ? !0
        : (d(), !1);
    });
  }
  refinement(n, a) {
    return this._refinement((i, o) =>
      n(i) ? !0 : (o.addIssue(typeof a == "function" ? a(i, o) : a), !1)
    );
  }
  _refinement(n) {
    return new io({
      schema: this,
      typeName: Le.ZodEffects,
      effect: { type: "refinement", refinement: n },
    });
  }
  superRefine(n) {
    return this._refinement(n);
  }
  constructor(n) {
    (this.spa = this.safeParseAsync),
      (this._def = n),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (a) => this["~validate"](a),
      });
  }
  optional() {
    return ei.create(this, this._def);
  }
  nullable() {
    return so.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Dr.create(this);
  }
  promise() {
    return wf.create(this, this._def);
  }
  or(n) {
    return bf.create([this, n], this._def);
  }
  and(n) {
    return xf.create(this, n, this._def);
  }
  transform(n) {
    return new io({
      ...Ge(this._def),
      schema: this,
      typeName: Le.ZodEffects,
      effect: { type: "transform", transform: n },
    });
  }
  default(n) {
    const a = typeof n == "function" ? n : () => n;
    return new Ap({
      ...Ge(this._def),
      innerType: this,
      defaultValue: a,
      typeName: Le.ZodDefault,
    });
  }
  brand() {
    return new Az({ typeName: Le.ZodBranded, type: this, ...Ge(this._def) });
  }
  catch(n) {
    const a = typeof n == "function" ? n : () => n;
    return new Cp({
      ...Ge(this._def),
      innerType: this,
      catchValue: a,
      typeName: Le.ZodCatch,
    });
  }
  describe(n) {
    const a = this.constructor;
    return new a({ ...this._def, description: n });
  }
  pipe(n) {
    return zg.create(this, n);
  }
  readonly() {
    return Op.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const iz = /^c[^\s-]{8,}$/i,
  sz = /^[0-9a-z]+$/,
  oz = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  lz =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  uz = /^[a-z0-9_-]{21}$/i,
  cz = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  fz =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  dz =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  hz = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ym;
const mz =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  pz =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  gz =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  yz =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  vz = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  bz = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  I1 =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  xz = new RegExp(`^${I1}$`);
function $1(e) {
  let n = "[0-5]\\d";
  e.precision
    ? (n = `${n}\\.\\d{${e.precision}}`)
    : e.precision == null && (n = `${n}(\\.\\d+)?`);
  const a = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${n})${a}`;
}
function wz(e) {
  return new RegExp(`^${$1(e)}$`);
}
function Sz(e) {
  let n = `${I1}T${$1(e)}`;
  const a = [];
  return (
    a.push(e.local ? "Z?" : "Z"),
    e.offset && a.push("([+-]\\d{2}:?\\d{2})"),
    (n = `${n}(${a.join("|")})`),
    new RegExp(`^${n}$`)
  );
}
function _z(e, n) {
  return !!(
    ((n === "v4" || !n) && mz.test(e)) ||
    ((n === "v6" || !n) && gz.test(e))
  );
}
function Ez(e, n) {
  if (!cz.test(e)) return !1;
  try {
    const [a] = e.split("."),
      i = a
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(a.length + ((4 - (a.length % 4)) % 4), "="),
      o = JSON.parse(atob(i));
    return !(
      typeof o != "object" ||
      o === null ||
      ("typ" in o && (o == null ? void 0 : o.typ) !== "JWT") ||
      !o.alg ||
      (n && o.alg !== n)
    );
  } catch {
    return !1;
  }
}
function Tz(e, n) {
  return !!(
    ((n === "v4" || !n) && pz.test(e)) ||
    ((n === "v6" || !n) && yz.test(e))
  );
}
class Ja extends We {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = String(n.data)),
      this._getType(n) !== Ee.string)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ve(u, {
          code: ue.invalid_type,
          expected: Ee.string,
          received: u.parsedType,
        }),
        Be
      );
    }
    const i = new zn();
    let o;
    for (const u of this._def.checks)
      if (u.kind === "min")
        n.data.length < u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            code: ue.too_small,
            minimum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "max")
        n.data.length > u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            code: ue.too_big,
            maximum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "length") {
        const c = n.data.length > u.value,
          d = n.data.length < u.value;
        (c || d) &&
          ((o = this._getOrReturnCtx(n, o)),
          c
            ? ve(o, {
                code: ue.too_big,
                maximum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              })
            : d &&
              ve(o, {
                code: ue.too_small,
                minimum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              }),
          i.dirty());
      } else if (u.kind === "email")
        dz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "email",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "emoji")
        Ym || (Ym = new RegExp(hz, "u")),
          Ym.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "emoji",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty());
      else if (u.kind === "uuid")
        lz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "uuid",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "nanoid")
        uz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "nanoid",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid")
        iz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "cuid",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid2")
        sz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "cuid2",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "ulid")
        oz.test(n.data) ||
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            validation: "ulid",
            code: ue.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "url")
        try {
          new URL(n.data);
        } catch {
          (o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "url",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty();
        }
      else
        u.kind === "regex"
          ? ((u.regex.lastIndex = 0),
            u.regex.test(n.data) ||
              ((o = this._getOrReturnCtx(n, o)),
              ve(o, {
                validation: "regex",
                code: ue.invalid_string,
                message: u.message,
              }),
              i.dirty()))
          : u.kind === "trim"
          ? (n.data = n.data.trim())
          : u.kind === "includes"
          ? n.data.includes(u.value, u.position) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: { includes: u.value, position: u.position },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "toLowerCase"
          ? (n.data = n.data.toLowerCase())
          : u.kind === "toUpperCase"
          ? (n.data = n.data.toUpperCase())
          : u.kind === "startsWith"
          ? n.data.startsWith(u.value) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: { startsWith: u.value },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "endsWith"
          ? n.data.endsWith(u.value) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: { endsWith: u.value },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "datetime"
          ? Sz(u).test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: "datetime",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "date"
          ? xz.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: "date",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "time"
          ? wz(u).test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              code: ue.invalid_string,
              validation: "time",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "duration"
          ? fz.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "duration",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "ip"
          ? _z(n.data, u.version) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "ip",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "jwt"
          ? Ez(n.data, u.alg) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "jwt",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "cidr"
          ? Tz(n.data, u.version) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "cidr",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "base64"
          ? vz.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "base64",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "base64url"
          ? bz.test(n.data) ||
            ((o = this._getOrReturnCtx(n, o)),
            ve(o, {
              validation: "base64url",
              code: ue.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : et.assertNever(u);
    return { status: i.value, value: n.data };
  }
  _regex(n, a, i) {
    return this.refinement((o) => n.test(o), {
      validation: a,
      code: ue.invalid_string,
      ...Te.errToObj(i),
    });
  }
  _addCheck(n) {
    return new Ja({ ...this._def, checks: [...this._def.checks, n] });
  }
  email(n) {
    return this._addCheck({ kind: "email", ...Te.errToObj(n) });
  }
  url(n) {
    return this._addCheck({ kind: "url", ...Te.errToObj(n) });
  }
  emoji(n) {
    return this._addCheck({ kind: "emoji", ...Te.errToObj(n) });
  }
  uuid(n) {
    return this._addCheck({ kind: "uuid", ...Te.errToObj(n) });
  }
  nanoid(n) {
    return this._addCheck({ kind: "nanoid", ...Te.errToObj(n) });
  }
  cuid(n) {
    return this._addCheck({ kind: "cuid", ...Te.errToObj(n) });
  }
  cuid2(n) {
    return this._addCheck({ kind: "cuid2", ...Te.errToObj(n) });
  }
  ulid(n) {
    return this._addCheck({ kind: "ulid", ...Te.errToObj(n) });
  }
  base64(n) {
    return this._addCheck({ kind: "base64", ...Te.errToObj(n) });
  }
  base64url(n) {
    return this._addCheck({ kind: "base64url", ...Te.errToObj(n) });
  }
  jwt(n) {
    return this._addCheck({ kind: "jwt", ...Te.errToObj(n) });
  }
  ip(n) {
    return this._addCheck({ kind: "ip", ...Te.errToObj(n) });
  }
  cidr(n) {
    return this._addCheck({ kind: "cidr", ...Te.errToObj(n) });
  }
  datetime(n) {
    return typeof n == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: n,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
              ? void 0
              : n.precision,
          offset: (n == null ? void 0 : n.offset) ?? !1,
          local: (n == null ? void 0 : n.local) ?? !1,
          ...Te.errToObj(n == null ? void 0 : n.message),
        });
  }
  date(n) {
    return this._addCheck({ kind: "date", message: n });
  }
  time(n) {
    return typeof n == "string"
      ? this._addCheck({ kind: "time", precision: null, message: n })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (n == null ? void 0 : n.precision) > "u"
              ? null
              : n == null
              ? void 0
              : n.precision,
          ...Te.errToObj(n == null ? void 0 : n.message),
        });
  }
  duration(n) {
    return this._addCheck({ kind: "duration", ...Te.errToObj(n) });
  }
  regex(n, a) {
    return this._addCheck({ kind: "regex", regex: n, ...Te.errToObj(a) });
  }
  includes(n, a) {
    return this._addCheck({
      kind: "includes",
      value: n,
      position: a == null ? void 0 : a.position,
      ...Te.errToObj(a == null ? void 0 : a.message),
    });
  }
  startsWith(n, a) {
    return this._addCheck({ kind: "startsWith", value: n, ...Te.errToObj(a) });
  }
  endsWith(n, a) {
    return this._addCheck({ kind: "endsWith", value: n, ...Te.errToObj(a) });
  }
  min(n, a) {
    return this._addCheck({ kind: "min", value: n, ...Te.errToObj(a) });
  }
  max(n, a) {
    return this._addCheck({ kind: "max", value: n, ...Te.errToObj(a) });
  }
  length(n, a) {
    return this._addCheck({ kind: "length", value: n, ...Te.errToObj(a) });
  }
  nonempty(n) {
    return this.min(1, Te.errToObj(n));
  }
  trim() {
    return new Ja({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Ja({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Ja({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((n) => n.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((n) => n.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((n) => n.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((n) => n.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((n) => n.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((n) => n.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((n) => n.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((n) => n.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((n) => n.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((n) => n.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((n) => n.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((n) => n.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((n) => n.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((n) => n.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((n) => n.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((n) => n.kind === "base64url");
  }
  get minLength() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "min" && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxLength() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "max" && (n === null || a.value < n) && (n = a.value);
    return n;
  }
}
Ja.create = (e) =>
  new Ja({
    checks: [],
    typeName: Le.ZodString,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...Ge(e),
  });
function Rz(e, n) {
  const a = (e.toString().split(".")[1] || "").length,
    i = (n.toString().split(".")[1] || "").length,
    o = a > i ? a : i,
    u = Number.parseInt(e.toFixed(o).replace(".", "")),
    c = Number.parseInt(n.toFixed(o).replace(".", ""));
  return (u % c) / 10 ** o;
}
class Fl extends We {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(n) {
    if (
      (this._def.coerce && (n.data = Number(n.data)),
      this._getType(n) !== Ee.number)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ve(u, {
          code: ue.invalid_type,
          expected: Ee.number,
          received: u.parsedType,
        }),
        Be
      );
    }
    let i;
    const o = new zn();
    for (const u of this._def.checks)
      u.kind === "int"
        ? et.isInteger(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.invalid_type,
            expected: "integer",
            received: "float",
            message: u.message,
          }),
          o.dirty())
        : u.kind === "min"
        ? (u.inclusive ? n.data < u.value : n.data <= u.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.too_small,
            minimum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "max"
        ? (u.inclusive ? n.data > u.value : n.data >= u.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.too_big,
            maximum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "multipleOf"
        ? Rz(n.data, u.value) !== 0 &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.not_multiple_of,
            multipleOf: u.value,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "finite"
        ? Number.isFinite(n.data) ||
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, { code: ue.not_finite, message: u.message }),
          o.dirty())
        : et.assertNever(u);
    return { status: o.value, value: n.data };
  }
  gte(n, a) {
    return this.setLimit("min", n, !0, Te.toString(a));
  }
  gt(n, a) {
    return this.setLimit("min", n, !1, Te.toString(a));
  }
  lte(n, a) {
    return this.setLimit("max", n, !0, Te.toString(a));
  }
  lt(n, a) {
    return this.setLimit("max", n, !1, Te.toString(a));
  }
  setLimit(n, a, i, o) {
    return new Fl({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: a, inclusive: i, message: Te.toString(o) },
      ],
    });
  }
  _addCheck(n) {
    return new Fl({ ...this._def, checks: [...this._def.checks, n] });
  }
  int(n) {
    return this._addCheck({ kind: "int", message: Te.toString(n) });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Te.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Te.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Te.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Te.toString(n),
    });
  }
  multipleOf(n, a) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: Te.toString(a),
    });
  }
  finite(n) {
    return this._addCheck({ kind: "finite", message: Te.toString(n) });
  }
  safe(n) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Te.toString(n),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Te.toString(n),
    });
  }
  get minValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "min" && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "max" && (n === null || a.value < n) && (n = a.value);
    return n;
  }
  get isInt() {
    return !!this._def.checks.find(
      (n) =>
        n.kind === "int" || (n.kind === "multipleOf" && et.isInteger(n.value))
    );
  }
  get isFinite() {
    let n = null,
      a = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (a === null || i.value > a) && (a = i.value)
        : i.kind === "max" && (n === null || i.value < n) && (n = i.value);
    }
    return Number.isFinite(a) && Number.isFinite(n);
  }
}
Fl.create = (e) =>
  new Fl({
    checks: [],
    typeName: Le.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...Ge(e),
  });
class ql extends We {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(n) {
    if (this._def.coerce)
      try {
        n.data = BigInt(n.data);
      } catch {
        return this._getInvalidInput(n);
      }
    if (this._getType(n) !== Ee.bigint) return this._getInvalidInput(n);
    let i;
    const o = new zn();
    for (const u of this._def.checks)
      u.kind === "min"
        ? (u.inclusive ? n.data < u.value : n.data <= u.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.too_small,
            type: "bigint",
            minimum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "max"
        ? (u.inclusive ? n.data > u.value : n.data >= u.value) &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.too_big,
            type: "bigint",
            maximum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          o.dirty())
        : u.kind === "multipleOf"
        ? n.data % u.value !== BigInt(0) &&
          ((i = this._getOrReturnCtx(n, i)),
          ve(i, {
            code: ue.not_multiple_of,
            multipleOf: u.value,
            message: u.message,
          }),
          o.dirty())
        : et.assertNever(u);
    return { status: o.value, value: n.data };
  }
  _getInvalidInput(n) {
    const a = this._getOrReturnCtx(n);
    return (
      ve(a, {
        code: ue.invalid_type,
        expected: Ee.bigint,
        received: a.parsedType,
      }),
      Be
    );
  }
  gte(n, a) {
    return this.setLimit("min", n, !0, Te.toString(a));
  }
  gt(n, a) {
    return this.setLimit("min", n, !1, Te.toString(a));
  }
  lte(n, a) {
    return this.setLimit("max", n, !0, Te.toString(a));
  }
  lt(n, a) {
    return this.setLimit("max", n, !1, Te.toString(a));
  }
  setLimit(n, a, i, o) {
    return new ql({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: n, value: a, inclusive: i, message: Te.toString(o) },
      ],
    });
  }
  _addCheck(n) {
    return new ql({ ...this._def, checks: [...this._def.checks, n] });
  }
  positive(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Te.toString(n),
    });
  }
  negative(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Te.toString(n),
    });
  }
  nonpositive(n) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Te.toString(n),
    });
  }
  nonnegative(n) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Te.toString(n),
    });
  }
  multipleOf(n, a) {
    return this._addCheck({
      kind: "multipleOf",
      value: n,
      message: Te.toString(a),
    });
  }
  get minValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "min" && (n === null || a.value > n) && (n = a.value);
    return n;
  }
  get maxValue() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "max" && (n === null || a.value < n) && (n = a.value);
    return n;
  }
}
ql.create = (e) =>
  new ql({
    checks: [],
    typeName: Le.ZodBigInt,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...Ge(e),
  });
class dw extends We {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = !!n.data), this._getType(n) !== Ee.boolean)
    ) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.boolean,
          received: i.parsedType,
        }),
        Be
      );
    }
    return Qn(n.data);
  }
}
dw.create = (e) =>
  new dw({
    typeName: Le.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...Ge(e),
  });
class vf extends We {
  _parse(n) {
    if (
      (this._def.coerce && (n.data = new Date(n.data)),
      this._getType(n) !== Ee.date)
    ) {
      const u = this._getOrReturnCtx(n);
      return (
        ve(u, {
          code: ue.invalid_type,
          expected: Ee.date,
          received: u.parsedType,
        }),
        Be
      );
    }
    if (Number.isNaN(n.data.getTime())) {
      const u = this._getOrReturnCtx(n);
      return ve(u, { code: ue.invalid_date }), Be;
    }
    const i = new zn();
    let o;
    for (const u of this._def.checks)
      u.kind === "min"
        ? n.data.getTime() < u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            code: ue.too_small,
            message: u.message,
            inclusive: !0,
            exact: !1,
            minimum: u.value,
            type: "date",
          }),
          i.dirty())
        : u.kind === "max"
        ? n.data.getTime() > u.value &&
          ((o = this._getOrReturnCtx(n, o)),
          ve(o, {
            code: ue.too_big,
            message: u.message,
            inclusive: !0,
            exact: !1,
            maximum: u.value,
            type: "date",
          }),
          i.dirty())
        : et.assertNever(u);
    return { status: i.value, value: new Date(n.data.getTime()) };
  }
  _addCheck(n) {
    return new vf({ ...this._def, checks: [...this._def.checks, n] });
  }
  min(n, a) {
    return this._addCheck({
      kind: "min",
      value: n.getTime(),
      message: Te.toString(a),
    });
  }
  max(n, a) {
    return this._addCheck({
      kind: "max",
      value: n.getTime(),
      message: Te.toString(a),
    });
  }
  get minDate() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "min" && (n === null || a.value > n) && (n = a.value);
    return n != null ? new Date(n) : null;
  }
  get maxDate() {
    let n = null;
    for (const a of this._def.checks)
      a.kind === "max" && (n === null || a.value < n) && (n = a.value);
    return n != null ? new Date(n) : null;
  }
}
vf.create = (e) =>
  new vf({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: Le.ZodDate,
    ...Ge(e),
  });
class hw extends We {
  _parse(n) {
    if (this._getType(n) !== Ee.symbol) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.symbol,
          received: i.parsedType,
        }),
        Be
      );
    }
    return Qn(n.data);
  }
}
hw.create = (e) => new hw({ typeName: Le.ZodSymbol, ...Ge(e) });
class mw extends We {
  _parse(n) {
    if (this._getType(n) !== Ee.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.undefined,
          received: i.parsedType,
        }),
        Be
      );
    }
    return Qn(n.data);
  }
}
mw.create = (e) => new mw({ typeName: Le.ZodUndefined, ...Ge(e) });
class pw extends We {
  _parse(n) {
    if (this._getType(n) !== Ee.null) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.null,
          received: i.parsedType,
        }),
        Be
      );
    }
    return Qn(n.data);
  }
}
pw.create = (e) => new pw({ typeName: Le.ZodNull, ...Ge(e) });
class gw extends We {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(n) {
    return Qn(n.data);
  }
}
gw.create = (e) => new gw({ typeName: Le.ZodAny, ...Ge(e) });
class yw extends We {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(n) {
    return Qn(n.data);
  }
}
yw.create = (e) => new yw({ typeName: Le.ZodUnknown, ...Ge(e) });
class ii extends We {
  _parse(n) {
    const a = this._getOrReturnCtx(n);
    return (
      ve(a, {
        code: ue.invalid_type,
        expected: Ee.never,
        received: a.parsedType,
      }),
      Be
    );
  }
}
ii.create = (e) => new ii({ typeName: Le.ZodNever, ...Ge(e) });
class vw extends We {
  _parse(n) {
    if (this._getType(n) !== Ee.undefined) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.void,
          received: i.parsedType,
        }),
        Be
      );
    }
    return Qn(n.data);
  }
}
vw.create = (e) => new vw({ typeName: Le.ZodVoid, ...Ge(e) });
class Dr extends We {
  _parse(n) {
    const { ctx: a, status: i } = this._processInputParams(n),
      o = this._def;
    if (a.parsedType !== Ee.array)
      return (
        ve(a, {
          code: ue.invalid_type,
          expected: Ee.array,
          received: a.parsedType,
        }),
        Be
      );
    if (o.exactLength !== null) {
      const c = a.data.length > o.exactLength.value,
        d = a.data.length < o.exactLength.value;
      (c || d) &&
        (ve(a, {
          code: c ? ue.too_big : ue.too_small,
          minimum: d ? o.exactLength.value : void 0,
          maximum: c ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (o.minLength !== null &&
        a.data.length < o.minLength.value &&
        (ve(a, {
          code: ue.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        i.dirty()),
      o.maxLength !== null &&
        a.data.length > o.maxLength.value &&
        (ve(a, {
          code: ue.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        i.dirty()),
      a.common.async)
    )
      return Promise.all(
        [...a.data].map((c, d) => o.type._parseAsync(new ai(a, c, a.path, d)))
      ).then((c) => zn.mergeArray(i, c));
    const u = [...a.data].map((c, d) =>
      o.type._parseSync(new ai(a, c, a.path, d))
    );
    return zn.mergeArray(i, u);
  }
  get element() {
    return this._def.type;
  }
  min(n, a) {
    return new Dr({
      ...this._def,
      minLength: { value: n, message: Te.toString(a) },
    });
  }
  max(n, a) {
    return new Dr({
      ...this._def,
      maxLength: { value: n, message: Te.toString(a) },
    });
  }
  length(n, a) {
    return new Dr({
      ...this._def,
      exactLength: { value: n, message: Te.toString(a) },
    });
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Dr.create = (e, n) =>
  new Dr({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Le.ZodArray,
    ...Ge(n),
  });
function Bs(e) {
  if (e instanceof jt) {
    const n = {};
    for (const a in e.shape) {
      const i = e.shape[a];
      n[a] = ei.create(Bs(i));
    }
    return new jt({ ...e._def, shape: () => n });
  } else
    return e instanceof Dr
      ? new Dr({ ...e._def, type: Bs(e.element) })
      : e instanceof ei
      ? ei.create(Bs(e.unwrap()))
      : e instanceof so
      ? so.create(Bs(e.unwrap()))
      : e instanceof Ii
      ? Ii.create(e.items.map((n) => Bs(n)))
      : e;
}
class jt extends We {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const n = this._def.shape(),
      a = et.objectKeys(n);
    return (this._cached = { shape: n, keys: a }), this._cached;
  }
  _parse(n) {
    if (this._getType(n) !== Ee.object) {
      const m = this._getOrReturnCtx(n);
      return (
        ve(m, {
          code: ue.invalid_type,
          expected: Ee.object,
          received: m.parsedType,
        }),
        Be
      );
    }
    const { status: i, ctx: o } = this._processInputParams(n),
      { shape: u, keys: c } = this._getCached(),
      d = [];
    if (
      !(this._def.catchall instanceof ii && this._def.unknownKeys === "strip")
    )
      for (const m in o.data) c.includes(m) || d.push(m);
    const p = [];
    for (const m of c) {
      const g = u[m],
        y = o.data[m];
      p.push({
        key: { status: "valid", value: m },
        value: g._parse(new ai(o, y, o.path, m)),
        alwaysSet: m in o.data,
      });
    }
    if (this._def.catchall instanceof ii) {
      const m = this._def.unknownKeys;
      if (m === "passthrough")
        for (const g of d)
          p.push({
            key: { status: "valid", value: g },
            value: { status: "valid", value: o.data[g] },
          });
      else if (m === "strict")
        d.length > 0 &&
          (ve(o, { code: ue.unrecognized_keys, keys: d }), i.dirty());
      else if (m !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const m = this._def.catchall;
      for (const g of d) {
        const y = o.data[g];
        p.push({
          key: { status: "valid", value: g },
          value: m._parse(new ai(o, y, o.path, g)),
          alwaysSet: g in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const m = [];
            for (const g of p) {
              const y = await g.key,
                x = await g.value;
              m.push({ key: y, value: x, alwaysSet: g.alwaysSet });
            }
            return m;
          })
          .then((m) => zn.mergeObjectSync(i, m))
      : zn.mergeObjectSync(i, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(n) {
    return (
      Te.errToObj,
      new jt({
        ...this._def,
        unknownKeys: "strict",
        ...(n !== void 0
          ? {
              errorMap: (a, i) => {
                var u, c;
                const o =
                  ((c = (u = this._def).errorMap) == null
                    ? void 0
                    : c.call(u, a, i).message) ?? i.defaultError;
                return a.code === "unrecognized_keys"
                  ? { message: Te.errToObj(n).message ?? o }
                  : { message: o };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new jt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new jt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(n) {
    return new jt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...n }),
    });
  }
  merge(n) {
    return new jt({
      unknownKeys: n._def.unknownKeys,
      catchall: n._def.catchall,
      shape: () => ({ ...this._def.shape(), ...n._def.shape() }),
      typeName: Le.ZodObject,
    });
  }
  setKey(n, a) {
    return this.augment({ [n]: a });
  }
  catchall(n) {
    return new jt({ ...this._def, catchall: n });
  }
  pick(n) {
    const a = {};
    for (const i of et.objectKeys(n))
      n[i] && this.shape[i] && (a[i] = this.shape[i]);
    return new jt({ ...this._def, shape: () => a });
  }
  omit(n) {
    const a = {};
    for (const i of et.objectKeys(this.shape)) n[i] || (a[i] = this.shape[i]);
    return new jt({ ...this._def, shape: () => a });
  }
  deepPartial() {
    return Bs(this);
  }
  partial(n) {
    const a = {};
    for (const i of et.objectKeys(this.shape)) {
      const o = this.shape[i];
      n && !n[i] ? (a[i] = o) : (a[i] = o.optional());
    }
    return new jt({ ...this._def, shape: () => a });
  }
  required(n) {
    const a = {};
    for (const i of et.objectKeys(this.shape))
      if (n && !n[i]) a[i] = this.shape[i];
      else {
        let u = this.shape[i];
        for (; u instanceof ei; ) u = u._def.innerType;
        a[i] = u;
      }
    return new jt({ ...this._def, shape: () => a });
  }
  keyof() {
    return G1(et.objectKeys(this.shape));
  }
}
jt.create = (e, n) =>
  new jt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: ii.create(),
    typeName: Le.ZodObject,
    ...Ge(n),
  });
jt.strictCreate = (e, n) =>
  new jt({
    shape: () => e,
    unknownKeys: "strict",
    catchall: ii.create(),
    typeName: Le.ZodObject,
    ...Ge(n),
  });
jt.lazycreate = (e, n) =>
  new jt({
    shape: e,
    unknownKeys: "strip",
    catchall: ii.create(),
    typeName: Le.ZodObject,
    ...Ge(n),
  });
class bf extends We {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = this._def.options;
    function o(u) {
      for (const d of u) if (d.result.status === "valid") return d.result;
      for (const d of u)
        if (d.result.status === "dirty")
          return a.common.issues.push(...d.ctx.common.issues), d.result;
      const c = u.map((d) => new ma(d.ctx.common.issues));
      return ve(a, { code: ue.invalid_union, unionErrors: c }), Be;
    }
    if (a.common.async)
      return Promise.all(
        i.map(async (u) => {
          const c = { ...a, common: { ...a.common, issues: [] }, parent: null };
          return {
            result: await u._parseAsync({
              data: a.data,
              path: a.path,
              parent: c,
            }),
            ctx: c,
          };
        })
      ).then(o);
    {
      let u;
      const c = [];
      for (const p of i) {
        const m = { ...a, common: { ...a.common, issues: [] }, parent: null },
          g = p._parseSync({ data: a.data, path: a.path, parent: m });
        if (g.status === "valid") return g;
        g.status === "dirty" && !u && (u = { result: g, ctx: m }),
          m.common.issues.length && c.push(m.common.issues);
      }
      if (u) return a.common.issues.push(...u.ctx.common.issues), u.result;
      const d = c.map((p) => new ma(p));
      return ve(a, { code: ue.invalid_union, unionErrors: d }), Be;
    }
  }
  get options() {
    return this._def.options;
  }
}
bf.create = (e, n) => new bf({ options: e, typeName: Le.ZodUnion, ...Ge(n) });
function Rp(e, n) {
  const a = Ia(e),
    i = Ia(n);
  if (e === n) return { valid: !0, data: e };
  if (a === Ee.object && i === Ee.object) {
    const o = et.objectKeys(n),
      u = et.objectKeys(e).filter((d) => o.indexOf(d) !== -1),
      c = { ...e, ...n };
    for (const d of u) {
      const p = Rp(e[d], n[d]);
      if (!p.valid) return { valid: !1 };
      c[d] = p.data;
    }
    return { valid: !0, data: c };
  } else if (a === Ee.array && i === Ee.array) {
    if (e.length !== n.length) return { valid: !1 };
    const o = [];
    for (let u = 0; u < e.length; u++) {
      const c = e[u],
        d = n[u],
        p = Rp(c, d);
      if (!p.valid) return { valid: !1 };
      o.push(p.data);
    }
    return { valid: !0, data: o };
  } else
    return a === Ee.date && i === Ee.date && +e == +n
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class xf extends We {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n),
      o = (u, c) => {
        if (uw(u) || uw(c)) return Be;
        const d = Rp(u.value, c.value);
        return d.valid
          ? ((cw(u) || cw(c)) && a.dirty(), { status: a.value, value: d.data })
          : (ve(i, { code: ue.invalid_intersection_types }), Be);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([u, c]) => o(u, c))
      : o(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
xf.create = (e, n, a) =>
  new xf({ left: e, right: n, typeName: Le.ZodIntersection, ...Ge(a) });
class Ii extends We {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== Ee.array)
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.array,
          received: i.parsedType,
        }),
        Be
      );
    if (i.data.length < this._def.items.length)
      return (
        ve(i, {
          code: ue.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Be
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ve(i, {
        code: ue.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      a.dirty());
    const u = [...i.data]
      .map((c, d) => {
        const p = this._def.items[d] || this._def.rest;
        return p ? p._parse(new ai(i, c, i.path, d)) : null;
      })
      .filter((c) => !!c);
    return i.common.async
      ? Promise.all(u).then((c) => zn.mergeArray(a, c))
      : zn.mergeArray(a, u);
  }
  get items() {
    return this._def.items;
  }
  rest(n) {
    return new Ii({ ...this._def, rest: n });
  }
}
Ii.create = (e, n) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ii({ items: e, typeName: Le.ZodTuple, rest: null, ...Ge(n) });
};
class bw extends We {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== Ee.map)
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.map,
          received: i.parsedType,
        }),
        Be
      );
    const o = this._def.keyType,
      u = this._def.valueType,
      c = [...i.data.entries()].map(([d, p], m) => ({
        key: o._parse(new ai(i, d, i.path, [m, "key"])),
        value: u._parse(new ai(i, p, i.path, [m, "value"])),
      }));
    if (i.common.async) {
      const d = new Map();
      return Promise.resolve().then(async () => {
        for (const p of c) {
          const m = await p.key,
            g = await p.value;
          if (m.status === "aborted" || g.status === "aborted") return Be;
          (m.status === "dirty" || g.status === "dirty") && a.dirty(),
            d.set(m.value, g.value);
        }
        return { status: a.value, value: d };
      });
    } else {
      const d = new Map();
      for (const p of c) {
        const m = p.key,
          g = p.value;
        if (m.status === "aborted" || g.status === "aborted") return Be;
        (m.status === "dirty" || g.status === "dirty") && a.dirty(),
          d.set(m.value, g.value);
      }
      return { status: a.value, value: d };
    }
  }
}
bw.create = (e, n, a) =>
  new bw({ valueType: n, keyType: e, typeName: Le.ZodMap, ...Ge(a) });
class Il extends We {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.parsedType !== Ee.set)
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.set,
          received: i.parsedType,
        }),
        Be
      );
    const o = this._def;
    o.minSize !== null &&
      i.data.size < o.minSize.value &&
      (ve(i, {
        code: ue.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      a.dirty()),
      o.maxSize !== null &&
        i.data.size > o.maxSize.value &&
        (ve(i, {
          code: ue.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        a.dirty());
    const u = this._def.valueType;
    function c(p) {
      const m = new Set();
      for (const g of p) {
        if (g.status === "aborted") return Be;
        g.status === "dirty" && a.dirty(), m.add(g.value);
      }
      return { status: a.value, value: m };
    }
    const d = [...i.data.values()].map((p, m) =>
      u._parse(new ai(i, p, i.path, m))
    );
    return i.common.async ? Promise.all(d).then((p) => c(p)) : c(d);
  }
  min(n, a) {
    return new Il({
      ...this._def,
      minSize: { value: n, message: Te.toString(a) },
    });
  }
  max(n, a) {
    return new Il({
      ...this._def,
      maxSize: { value: n, message: Te.toString(a) },
    });
  }
  size(n, a) {
    return this.min(n, a).max(n, a);
  }
  nonempty(n) {
    return this.min(1, n);
  }
}
Il.create = (e, n) =>
  new Il({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Le.ZodSet,
    ...Ge(n),
  });
class xw extends We {
  get schema() {
    return this._def.getter();
  }
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    return this._def.getter()._parse({ data: a.data, path: a.path, parent: a });
  }
}
xw.create = (e, n) => new xw({ getter: e, typeName: Le.ZodLazy, ...Ge(n) });
class ww extends We {
  _parse(n) {
    if (n.data !== this._def.value) {
      const a = this._getOrReturnCtx(n);
      return (
        ve(a, {
          received: a.data,
          code: ue.invalid_literal,
          expected: this._def.value,
        }),
        Be
      );
    }
    return { status: "valid", value: n.data };
  }
  get value() {
    return this._def.value;
  }
}
ww.create = (e, n) => new ww({ value: e, typeName: Le.ZodLiteral, ...Ge(n) });
function G1(e, n) {
  return new ao({ values: e, typeName: Le.ZodEnum, ...Ge(n) });
}
class ao extends We {
  constructor() {
    super(...arguments), Rl.set(this, void 0);
  }
  _parse(n) {
    if (typeof n.data != "string") {
      const a = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        ve(a, {
          expected: et.joinValues(i),
          received: a.parsedType,
          code: ue.invalid_type,
        }),
        Be
      );
    }
    if (
      (yf(this, Rl, "f") || q1(this, Rl, new Set(this._def.values), "f"),
      !yf(this, Rl, "f").has(n.data))
    ) {
      const a = this._getOrReturnCtx(n),
        i = this._def.values;
      return (
        ve(a, { received: a.data, code: ue.invalid_enum_value, options: i }), Be
      );
    }
    return Qn(n.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  get Values() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  get Enum() {
    const n = {};
    for (const a of this._def.values) n[a] = a;
    return n;
  }
  extract(n, a = this._def) {
    return ao.create(n, { ...this._def, ...a });
  }
  exclude(n, a = this._def) {
    return ao.create(
      this.options.filter((i) => !n.includes(i)),
      { ...this._def, ...a }
    );
  }
}
Rl = new WeakMap();
ao.create = G1;
class Sw extends We {
  constructor() {
    super(...arguments), Al.set(this, void 0);
  }
  _parse(n) {
    const a = et.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(n);
    if (i.parsedType !== Ee.string && i.parsedType !== Ee.number) {
      const o = et.objectValues(a);
      return (
        ve(i, {
          expected: et.joinValues(o),
          received: i.parsedType,
          code: ue.invalid_type,
        }),
        Be
      );
    }
    if (
      (yf(this, Al, "f") ||
        q1(this, Al, new Set(et.getValidEnumValues(this._def.values)), "f"),
      !yf(this, Al, "f").has(n.data))
    ) {
      const o = et.objectValues(a);
      return (
        ve(i, { received: i.data, code: ue.invalid_enum_value, options: o }), Be
      );
    }
    return Qn(n.data);
  }
  get enum() {
    return this._def.values;
  }
}
Al = new WeakMap();
Sw.create = (e, n) =>
  new Sw({ values: e, typeName: Le.ZodNativeEnum, ...Ge(n) });
class wf extends We {
  unwrap() {
    return this._def.type;
  }
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    if (a.parsedType !== Ee.promise && a.common.async === !1)
      return (
        ve(a, {
          code: ue.invalid_type,
          expected: Ee.promise,
          received: a.parsedType,
        }),
        Be
      );
    const i = a.parsedType === Ee.promise ? a.data : Promise.resolve(a.data);
    return Qn(
      i.then((o) =>
        this._def.type.parseAsync(o, {
          path: a.path,
          errorMap: a.common.contextualErrorMap,
        })
      )
    );
  }
}
wf.create = (e, n) => new wf({ type: e, typeName: Le.ZodPromise, ...Ge(n) });
class io extends We {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Le.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n),
      o = this._def.effect || null,
      u = {
        addIssue: (c) => {
          ve(i, c), c.fatal ? a.abort() : a.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((u.addIssue = u.addIssue.bind(u)), o.type === "preprocess")) {
      const c = o.transform(i.data, u);
      if (i.common.async)
        return Promise.resolve(c).then(async (d) => {
          if (a.value === "aborted") return Be;
          const p = await this._def.schema._parseAsync({
            data: d,
            path: i.path,
            parent: i,
          });
          return p.status === "aborted"
            ? Be
            : p.status === "dirty" || a.value === "dirty"
            ? Tl(p.value)
            : p;
        });
      {
        if (a.value === "aborted") return Be;
        const d = this._def.schema._parseSync({
          data: c,
          path: i.path,
          parent: i,
        });
        return d.status === "aborted"
          ? Be
          : d.status === "dirty" || a.value === "dirty"
          ? Tl(d.value)
          : d;
      }
    }
    if (o.type === "refinement") {
      const c = (d) => {
        const p = o.refinement(d, u);
        if (i.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return d;
      };
      if (i.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return d.status === "aborted"
          ? Be
          : (d.status === "dirty" && a.dirty(),
            c(d.value),
            { status: a.value, value: d.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((d) =>
            d.status === "aborted"
              ? Be
              : (d.status === "dirty" && a.dirty(),
                c(d.value).then(() => ({ status: a.value, value: d.value })))
          );
    }
    if (o.type === "transform")
      if (i.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!ro(c)) return c;
        const d = o.transform(c.value, u);
        if (d instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: a.value, value: d };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((c) =>
            ro(c)
              ? Promise.resolve(o.transform(c.value, u)).then((d) => ({
                  status: a.value,
                  value: d,
                }))
              : c
          );
    et.assertNever(o);
  }
}
io.create = (e, n, a) =>
  new io({ schema: e, typeName: Le.ZodEffects, effect: n, ...Ge(a) });
io.createWithPreprocess = (e, n, a) =>
  new io({
    schema: n,
    effect: { type: "preprocess", transform: e },
    typeName: Le.ZodEffects,
    ...Ge(a),
  });
class ei extends We {
  _parse(n) {
    return this._getType(n) === Ee.undefined
      ? Qn(void 0)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ei.create = (e, n) =>
  new ei({ innerType: e, typeName: Le.ZodOptional, ...Ge(n) });
class so extends We {
  _parse(n) {
    return this._getType(n) === Ee.null
      ? Qn(null)
      : this._def.innerType._parse(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
so.create = (e, n) =>
  new so({ innerType: e, typeName: Le.ZodNullable, ...Ge(n) });
class Ap extends We {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n);
    let i = a.data;
    return (
      a.parsedType === Ee.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: a.path, parent: a })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ap.create = (e, n) =>
  new Ap({
    innerType: e,
    typeName: Le.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Ge(n),
  });
class Cp extends We {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = { ...a, common: { ...a.common, issues: [] } },
      o = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return gf(o)
      ? o.then((u) => ({
          status: "valid",
          value:
            u.status === "valid"
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new ma(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new ma(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Cp.create = (e, n) =>
  new Cp({
    innerType: e,
    typeName: Le.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Ge(n),
  });
class _w extends We {
  _parse(n) {
    if (this._getType(n) !== Ee.nan) {
      const i = this._getOrReturnCtx(n);
      return (
        ve(i, {
          code: ue.invalid_type,
          expected: Ee.nan,
          received: i.parsedType,
        }),
        Be
      );
    }
    return { status: "valid", value: n.data };
  }
}
_w.create = (e) => new _w({ typeName: Le.ZodNaN, ...Ge(e) });
class Az extends We {
  _parse(n) {
    const { ctx: a } = this._processInputParams(n),
      i = a.data;
    return this._def.type._parse({ data: i, path: a.path, parent: a });
  }
  unwrap() {
    return this._def.type;
  }
}
class zg extends We {
  _parse(n) {
    const { status: a, ctx: i } = this._processInputParams(n);
    if (i.common.async)
      return (async () => {
        const u = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return u.status === "aborted"
          ? Be
          : u.status === "dirty"
          ? (a.dirty(), Tl(u.value))
          : this._def.out._parseAsync({
              data: u.value,
              path: i.path,
              parent: i,
            });
      })();
    {
      const o = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return o.status === "aborted"
        ? Be
        : o.status === "dirty"
        ? (a.dirty(), { status: "dirty", value: o.value })
        : this._def.out._parseSync({ data: o.value, path: i.path, parent: i });
    }
  }
  static create(n, a) {
    return new zg({ in: n, out: a, typeName: Le.ZodPipeline });
  }
}
class Op extends We {
  _parse(n) {
    const a = this._def.innerType._parse(n),
      i = (o) => (ro(o) && (o.value = Object.freeze(o.value)), o);
    return gf(a) ? a.then((o) => i(o)) : i(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Op.create = (e, n) =>
  new Op({ innerType: e, typeName: Le.ZodReadonly, ...Ge(n) });
var Le;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(Le || (Le = {}));
const aa = Ja.create;
ii.create;
Dr.create;
const Ug = jt.create;
bf.create;
xf.create;
Ii.create;
const Cz = ao.create;
wf.create;
ei.create;
so.create;
const Oz = Ug({
    VITE_API_CATALOG_URL: aa(),
    VITE_API_IDENTITY_URL: aa(),
    VITE_API_MENU_URL: aa(),
  }),
  Mp = Oz.safeParse({
    VITE_API_CATALOG_URL: "https://catalog-dimpos.orbitmap.xyz/api/v1",
    VITE_API_IDENTITY_URL: "https://identity-dimpos.orbitmap.xyz/api/v1",
    VITE_API_MENU_URL: "https://identity-dimpos.orbitmap.xyz/api/v1",
  });
if (!Mp.success)
  throw (
    (console.error(Mp.error.issues),
    new Error("Các giá trị khai báo trong file .env không hợp lệ"))
  );
const Pg = Mp.data;
function Y1(e, n) {
  return function () {
    return e.apply(n, arguments);
  };
}
const { toString: Mz } = Object.prototype,
  { getPrototypeOf: Bg } = Object,
  { iterator: Wf, toStringTag: Z1 } = Symbol,
  Jf = ((e) => (n) => {
    const a = Mz.call(n);
    return e[a] || (e[a] = a.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  mr = (e) => ((e = e.toLowerCase()), (n) => Jf(n) === e),
  ed = (e) => (n) => typeof n === e,
  { isArray: po } = Array,
  $l = ed("undefined");
function Nz(e) {
  return (
    e !== null &&
    !$l(e) &&
    e.constructor !== null &&
    !$l(e.constructor) &&
    yn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const K1 = mr("ArrayBuffer");
function Dz(e) {
  let n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(e))
      : (n = e && e.buffer && K1(e.buffer)),
    n
  );
}
const kz = ed("string"),
  yn = ed("function"),
  X1 = ed("number"),
  td = (e) => e !== null && typeof e == "object",
  jz = (e) => e === !0 || e === !1,
  Yc = (e) => {
    if (Jf(e) !== "object") return !1;
    const n = Bg(e);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(Z1 in e) &&
      !(Wf in e)
    );
  },
  Lz = mr("Date"),
  zz = mr("File"),
  Uz = mr("Blob"),
  Pz = mr("FileList"),
  Bz = (e) => td(e) && yn(e.pipe),
  Vz = (e) => {
    let n;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (yn(e.append) &&
          ((n = Jf(e)) === "formdata" ||
            (n === "object" &&
              yn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Hz = mr("URLSearchParams"),
  [Fz, qz, Iz, $z] = ["ReadableStream", "Request", "Response", "Headers"].map(
    mr
  ),
  Gz = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lu(e, n, { allOwnKeys: a = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, o;
  if ((typeof e != "object" && (e = [e]), po(e)))
    for (i = 0, o = e.length; i < o; i++) n.call(null, e[i], i, e);
  else {
    const u = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
      c = u.length;
    let d;
    for (i = 0; i < c; i++) (d = u[i]), n.call(null, e[d], d, e);
  }
}
function Q1(e, n) {
  n = n.toLowerCase();
  const a = Object.keys(e);
  let i = a.length,
    o;
  for (; i-- > 0; ) if (((o = a[i]), n === o.toLowerCase())) return o;
  return null;
}
const Ni =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  W1 = (e) => !$l(e) && e !== Ni;
function Np() {
  const { caseless: e } = (W1(this) && this) || {},
    n = {},
    a = (i, o) => {
      const u = (e && Q1(n, o)) || o;
      Yc(n[u]) && Yc(i)
        ? (n[u] = Np(n[u], i))
        : Yc(i)
        ? (n[u] = Np({}, i))
        : po(i)
        ? (n[u] = i.slice())
        : (n[u] = i);
    };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && lu(arguments[i], a);
  return n;
}
const Yz = (e, n, a, { allOwnKeys: i } = {}) => (
    lu(
      n,
      (o, u) => {
        a && yn(o) ? (e[u] = Y1(o, a)) : (e[u] = o);
      },
      { allOwnKeys: i }
    ),
    e
  ),
  Zz = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Kz = (e, n, a, i) => {
    (e.prototype = Object.create(n.prototype, i)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: n.prototype }),
      a && Object.assign(e.prototype, a);
  },
  Xz = (e, n, a, i) => {
    let o, u, c;
    const d = {};
    if (((n = n || {}), e == null)) return n;
    do {
      for (o = Object.getOwnPropertyNames(e), u = o.length; u-- > 0; )
        (c = o[u]), (!i || i(c, e, n)) && !d[c] && ((n[c] = e[c]), (d[c] = !0));
      e = a !== !1 && Bg(e);
    } while (e && (!a || a(e, n)) && e !== Object.prototype);
    return n;
  },
  Qz = (e, n, a) => {
    (e = String(e)),
      (a === void 0 || a > e.length) && (a = e.length),
      (a -= n.length);
    const i = e.indexOf(n, a);
    return i !== -1 && i === a;
  },
  Wz = (e) => {
    if (!e) return null;
    if (po(e)) return e;
    let n = e.length;
    if (!X1(n)) return null;
    const a = new Array(n);
    for (; n-- > 0; ) a[n] = e[n];
    return a;
  },
  Jz = (
    (e) => (n) =>
      e && n instanceof e
  )(typeof Uint8Array < "u" && Bg(Uint8Array)),
  eU = (e, n) => {
    const i = (e && e[Wf]).call(e);
    let o;
    for (; (o = i.next()) && !o.done; ) {
      const u = o.value;
      n.call(e, u[0], u[1]);
    }
  },
  tU = (e, n) => {
    let a;
    const i = [];
    for (; (a = e.exec(n)) !== null; ) i.push(a);
    return i;
  },
  nU = mr("HTMLFormElement"),
  rU = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (a, i, o) {
      return i.toUpperCase() + o;
    }),
  Ew = (
    ({ hasOwnProperty: e }) =>
    (n, a) =>
      e.call(n, a)
  )(Object.prototype),
  aU = mr("RegExp"),
  J1 = (e, n) => {
    const a = Object.getOwnPropertyDescriptors(e),
      i = {};
    lu(a, (o, u) => {
      let c;
      (c = n(o, u, e)) !== !1 && (i[u] = c || o);
    }),
      Object.defineProperties(e, i);
  },
  iU = (e) => {
    J1(e, (n, a) => {
      if (yn(e) && ["arguments", "caller", "callee"].indexOf(a) !== -1)
        return !1;
      const i = e[a];
      if (yn(i)) {
        if (((n.enumerable = !1), "writable" in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + a + "'");
          });
      }
    });
  },
  sU = (e, n) => {
    const a = {},
      i = (o) => {
        o.forEach((u) => {
          a[u] = !0;
        });
      };
    return po(e) ? i(e) : i(String(e).split(n)), a;
  },
  oU = () => {},
  lU = (e, n) => (e != null && Number.isFinite((e = +e)) ? e : n);
function uU(e) {
  return !!(e && yn(e.append) && e[Z1] === "FormData" && e[Wf]);
}
const cU = (e) => {
    const n = new Array(10),
      a = (i, o) => {
        if (td(i)) {
          if (n.indexOf(i) >= 0) return;
          if (!("toJSON" in i)) {
            n[o] = i;
            const u = po(i) ? [] : {};
            return (
              lu(i, (c, d) => {
                const p = a(c, o + 1);
                !$l(p) && (u[d] = p);
              }),
              (n[o] = void 0),
              u
            );
          }
        }
        return i;
      };
    return a(e, 0);
  },
  fU = mr("AsyncFunction"),
  dU = (e) => e && (td(e) || yn(e)) && yn(e.then) && yn(e.catch),
  eT = ((e, n) =>
    e
      ? setImmediate
      : n
      ? ((a, i) => (
          Ni.addEventListener(
            "message",
            ({ source: o, data: u }) => {
              o === Ni && u === a && i.length && i.shift()();
            },
            !1
          ),
          (o) => {
            i.push(o), Ni.postMessage(a, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (a) => setTimeout(a))(
    typeof setImmediate == "function",
    yn(Ni.postMessage)
  ),
  hU =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Ni)
      : (typeof process < "u" && process.nextTick) || eT,
  mU = (e) => e != null && yn(e[Wf]),
  K = {
    isArray: po,
    isArrayBuffer: K1,
    isBuffer: Nz,
    isFormData: Vz,
    isArrayBufferView: Dz,
    isString: kz,
    isNumber: X1,
    isBoolean: jz,
    isObject: td,
    isPlainObject: Yc,
    isReadableStream: Fz,
    isRequest: qz,
    isResponse: Iz,
    isHeaders: $z,
    isUndefined: $l,
    isDate: Lz,
    isFile: zz,
    isBlob: Uz,
    isRegExp: aU,
    isFunction: yn,
    isStream: Bz,
    isURLSearchParams: Hz,
    isTypedArray: Jz,
    isFileList: Pz,
    forEach: lu,
    merge: Np,
    extend: Yz,
    trim: Gz,
    stripBOM: Zz,
    inherits: Kz,
    toFlatObject: Xz,
    kindOf: Jf,
    kindOfTest: mr,
    endsWith: Qz,
    toArray: Wz,
    forEachEntry: eU,
    matchAll: tU,
    isHTMLForm: nU,
    hasOwnProperty: Ew,
    hasOwnProp: Ew,
    reduceDescriptors: J1,
    freezeMethods: iU,
    toObjectSet: sU,
    toCamelCase: rU,
    noop: oU,
    toFiniteNumber: lU,
    findKey: Q1,
    global: Ni,
    isContextDefined: W1,
    isSpecCompliantForm: uU,
    toJSONObject: cU,
    isAsyncFn: fU,
    isThenable: dU,
    setImmediate: eT,
    asap: hU,
    isIterable: mU,
  };
function Pe(e, n, a, i, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    n && (this.code = n),
    a && (this.config = a),
    i && (this.request = i),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
K.inherits(Pe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: K.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const tT = Pe.prototype,
  nT = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  nT[e] = { value: e };
});
Object.defineProperties(Pe, nT);
Object.defineProperty(tT, "isAxiosError", { value: !0 });
Pe.from = (e, n, a, i, o, u) => {
  const c = Object.create(tT);
  return (
    K.toFlatObject(
      e,
      c,
      function (p) {
        return p !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    Pe.call(c, e.message, n, a, i, o),
    (c.cause = e),
    (c.name = e.name),
    u && Object.assign(c, u),
    c
  );
};
const pU = null;
function Dp(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function rT(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tw(e, n, a) {
  return e
    ? e
        .concat(n)
        .map(function (o, u) {
          return (o = rT(o)), !a && u ? "[" + o + "]" : o;
        })
        .join(a ? "." : "")
    : n;
}
function gU(e) {
  return K.isArray(e) && !e.some(Dp);
}
const yU = K.toFlatObject(K, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function nd(e, n, a) {
  if (!K.isObject(e)) throw new TypeError("target must be an object");
  (n = n || new FormData()),
    (a = K.toFlatObject(
      a,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, w) {
        return !K.isUndefined(w[_]);
      }
    ));
  const i = a.metaTokens,
    o = a.visitor || g,
    u = a.dots,
    c = a.indexes,
    p = (a.Blob || (typeof Blob < "u" && Blob)) && K.isSpecCompliantForm(n);
  if (!K.isFunction(o)) throw new TypeError("visitor must be a function");
  function m(E) {
    if (E === null) return "";
    if (K.isDate(E)) return E.toISOString();
    if (!p && K.isBlob(E))
      throw new Pe("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(E) || K.isTypedArray(E)
      ? p && typeof Blob == "function"
        ? new Blob([E])
        : Buffer.from(E)
      : E;
  }
  function g(E, _, w) {
    let A = E;
    if (E && !w && typeof E == "object") {
      if (K.endsWith(_, "{}"))
        (_ = i ? _ : _.slice(0, -2)), (E = JSON.stringify(E));
      else if (
        (K.isArray(E) && gU(E)) ||
        ((K.isFileList(E) || K.endsWith(_, "[]")) && (A = K.toArray(E)))
      )
        return (
          (_ = rT(_)),
          A.forEach(function (N, k) {
            !(K.isUndefined(N) || N === null) &&
              n.append(
                c === !0 ? Tw([_], k, u) : c === null ? _ : _ + "[]",
                m(N)
              );
          }),
          !1
        );
    }
    return Dp(E) ? !0 : (n.append(Tw(w, _, u), m(E)), !1);
  }
  const y = [],
    x = Object.assign(yU, {
      defaultVisitor: g,
      convertValue: m,
      isVisitable: Dp,
    });
  function R(E, _) {
    if (!K.isUndefined(E)) {
      if (y.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      y.push(E),
        K.forEach(E, function (A, C) {
          (!(K.isUndefined(A) || A === null) &&
            o.call(n, A, K.isString(C) ? C.trim() : C, _, x)) === !0 &&
            R(A, _ ? _.concat(C) : [C]);
        }),
        y.pop();
    }
  }
  if (!K.isObject(e)) throw new TypeError("data must be an object");
  return R(e), n;
}
function Rw(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (i) {
    return n[i];
  });
}
function Vg(e, n) {
  (this._pairs = []), e && nd(e, this, n);
}
const aT = Vg.prototype;
aT.append = function (n, a) {
  this._pairs.push([n, a]);
};
aT.toString = function (n) {
  const a = n
    ? function (i) {
        return n.call(this, i, Rw);
      }
    : Rw;
  return this._pairs
    .map(function (o) {
      return a(o[0]) + "=" + a(o[1]);
    }, "")
    .join("&");
};
function vU(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function iT(e, n, a) {
  if (!n) return e;
  const i = (a && a.encode) || vU;
  K.isFunction(a) && (a = { serialize: a });
  const o = a && a.serialize;
  let u;
  if (
    (o
      ? (u = o(n, a))
      : (u = K.isURLSearchParams(n) ? n.toString() : new Vg(n, a).toString(i)),
    u)
  ) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class Aw {
  constructor() {
    this.handlers = [];
  }
  use(n, a, i) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: a,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    K.forEach(this.handlers, function (i) {
      i !== null && n(i);
    });
  }
}
const sT = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  bU = typeof URLSearchParams < "u" ? URLSearchParams : Vg,
  xU = typeof FormData < "u" ? FormData : null,
  wU = typeof Blob < "u" ? Blob : null,
  SU = {
    isBrowser: !0,
    classes: { URLSearchParams: bU, FormData: xU, Blob: wU },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Hg = typeof window < "u" && typeof document < "u",
  kp = (typeof navigator == "object" && navigator) || void 0,
  _U =
    Hg &&
    (!kp || ["ReactNative", "NativeScript", "NS"].indexOf(kp.product) < 0),
  EU =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  TU = (Hg && window.location.href) || "http://localhost",
  RU = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Hg,
        hasStandardBrowserEnv: _U,
        hasStandardBrowserWebWorkerEnv: EU,
        navigator: kp,
        origin: TU,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rn = { ...RU, ...SU };
function AU(e, n) {
  return nd(
    e,
    new rn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (a, i, o, u) {
          return rn.isNode && K.isBuffer(a)
            ? (this.append(i, a.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      n
    )
  );
}
function CU(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((n) =>
    n[0] === "[]" ? "" : n[1] || n[0]
  );
}
function OU(e) {
  const n = {},
    a = Object.keys(e);
  let i;
  const o = a.length;
  let u;
  for (i = 0; i < o; i++) (u = a[i]), (n[u] = e[u]);
  return n;
}
function oT(e) {
  function n(a, i, o, u) {
    let c = a[u++];
    if (c === "__proto__") return !0;
    const d = Number.isFinite(+c),
      p = u >= a.length;
    return (
      (c = !c && K.isArray(o) ? o.length : c),
      p
        ? (K.hasOwnProp(o, c) ? (o[c] = [o[c], i]) : (o[c] = i), !d)
        : ((!o[c] || !K.isObject(o[c])) && (o[c] = []),
          n(a, i, o[c], u) && K.isArray(o[c]) && (o[c] = OU(o[c])),
          !d)
    );
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const a = {};
    return (
      K.forEachEntry(e, (i, o) => {
        n(CU(i), o, a, 0);
      }),
      a
    );
  }
  return null;
}
function MU(e, n, a) {
  if (K.isString(e))
    try {
      return (n || JSON.parse)(e), K.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError") throw i;
    }
  return (a || JSON.stringify)(e);
}
const uu = {
  transitional: sT,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (n, a) {
      const i = a.getContentType() || "",
        o = i.indexOf("application/json") > -1,
        u = K.isObject(n);
      if ((u && K.isHTMLForm(n) && (n = new FormData(n)), K.isFormData(n)))
        return o ? JSON.stringify(oT(n)) : n;
      if (
        K.isArrayBuffer(n) ||
        K.isBuffer(n) ||
        K.isStream(n) ||
        K.isFile(n) ||
        K.isBlob(n) ||
        K.isReadableStream(n)
      )
        return n;
      if (K.isArrayBufferView(n)) return n.buffer;
      if (K.isURLSearchParams(n))
        return (
          a.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          n.toString()
        );
      let d;
      if (u) {
        if (i.indexOf("application/x-www-form-urlencoded") > -1)
          return AU(n, this.formSerializer).toString();
        if ((d = K.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return nd(
            d ? { "files[]": n } : n,
            p && new p(),
            this.formSerializer
          );
        }
      }
      return u || o ? (a.setContentType("application/json", !1), MU(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const a = this.transitional || uu.transitional,
        i = a && a.forcedJSONParsing,
        o = this.responseType === "json";
      if (K.isResponse(n) || K.isReadableStream(n)) return n;
      if (n && K.isString(n) && ((i && !this.responseType) || o)) {
        const c = !(a && a.silentJSONParsing) && o;
        try {
          return JSON.parse(n);
        } catch (d) {
          if (c)
            throw d.name === "SyntaxError"
              ? Pe.from(d, Pe.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rn.classes.FormData, Blob: rn.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  uu.headers[e] = {};
});
const NU = K.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  DU = (e) => {
    const n = {};
    let a, i, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (c) {
            (o = c.indexOf(":")),
              (a = c.substring(0, o).trim().toLowerCase()),
              (i = c.substring(o + 1).trim()),
              !(!a || (n[a] && NU[a])) &&
                (a === "set-cookie"
                  ? n[a]
                    ? n[a].push(i)
                    : (n[a] = [i])
                  : (n[a] = n[a] ? n[a] + ", " + i : i));
          }),
      n
    );
  },
  Cw = Symbol("internals");
function Sl(e) {
  return e && String(e).trim().toLowerCase();
}
function Zc(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(Zc) : String(e);
}
function kU(e) {
  const n = Object.create(null),
    a = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; (i = a.exec(e)); ) n[i[1]] = i[2];
  return n;
}
const jU = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zm(e, n, a, i, o) {
  if (K.isFunction(i)) return i.call(this, n, a);
  if ((o && (n = a), !!K.isString(n))) {
    if (K.isString(i)) return n.indexOf(i) !== -1;
    if (K.isRegExp(i)) return i.test(n);
  }
}
function LU(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, a, i) => a.toUpperCase() + i);
}
function zU(e, n) {
  const a = K.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + a, {
      value: function (o, u, c) {
        return this[i].call(this, n, o, u, c);
      },
      configurable: !0,
    });
  });
}
let vn = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, a, i) {
    const o = this;
    function u(d, p, m) {
      const g = Sl(p);
      if (!g) throw new Error("header name must be a non-empty string");
      const y = K.findKey(o, g);
      (!y || o[y] === void 0 || m === !0 || (m === void 0 && o[y] !== !1)) &&
        (o[y || p] = Zc(d));
    }
    const c = (d, p) => K.forEach(d, (m, g) => u(m, g, p));
    if (K.isPlainObject(n) || n instanceof this.constructor) c(n, a);
    else if (K.isString(n) && (n = n.trim()) && !jU(n)) c(DU(n), a);
    else if (K.isObject(n) && K.isIterable(n)) {
      let d = {},
        p,
        m;
      for (const g of n) {
        if (!K.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        d[(m = g[0])] = (p = d[m])
          ? K.isArray(p)
            ? [...p, g[1]]
            : [p, g[1]]
          : g[1];
      }
      c(d, a);
    } else n != null && u(a, n, i);
    return this;
  }
  get(n, a) {
    if (((n = Sl(n)), n)) {
      const i = K.findKey(this, n);
      if (i) {
        const o = this[i];
        if (!a) return o;
        if (a === !0) return kU(o);
        if (K.isFunction(a)) return a.call(this, o, i);
        if (K.isRegExp(a)) return a.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, a) {
    if (((n = Sl(n)), n)) {
      const i = K.findKey(this, n);
      return !!(i && this[i] !== void 0 && (!a || Zm(this, this[i], i, a)));
    }
    return !1;
  }
  delete(n, a) {
    const i = this;
    let o = !1;
    function u(c) {
      if (((c = Sl(c)), c)) {
        const d = K.findKey(i, c);
        d && (!a || Zm(i, i[d], d, a)) && (delete i[d], (o = !0));
      }
    }
    return K.isArray(n) ? n.forEach(u) : u(n), o;
  }
  clear(n) {
    const a = Object.keys(this);
    let i = a.length,
      o = !1;
    for (; i--; ) {
      const u = a[i];
      (!n || Zm(this, this[u], u, n, !0)) && (delete this[u], (o = !0));
    }
    return o;
  }
  normalize(n) {
    const a = this,
      i = {};
    return (
      K.forEach(this, (o, u) => {
        const c = K.findKey(i, u);
        if (c) {
          (a[c] = Zc(o)), delete a[u];
          return;
        }
        const d = n ? LU(u) : String(u).trim();
        d !== u && delete a[u], (a[d] = Zc(o)), (i[d] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const a = Object.create(null);
    return (
      K.forEach(this, (i, o) => {
        i != null && i !== !1 && (a[o] = n && K.isArray(i) ? i.join(", ") : i);
      }),
      a
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, a]) => n + ": " + a).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...a) {
    const i = new this(n);
    return a.forEach((o) => i.set(o)), i;
  }
  static accessor(n) {
    const i = (this[Cw] = this[Cw] = { accessors: {} }).accessors,
      o = this.prototype;
    function u(c) {
      const d = Sl(c);
      i[d] || (zU(o, c), (i[d] = !0));
    }
    return K.isArray(n) ? n.forEach(u) : u(n), this;
  }
};
vn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
K.reduceDescriptors(vn.prototype, ({ value: e }, n) => {
  let a = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(i) {
      this[a] = i;
    },
  };
});
K.freezeMethods(vn);
function Km(e, n) {
  const a = this || uu,
    i = n || a,
    o = vn.from(i.headers);
  let u = i.data;
  return (
    K.forEach(e, function (d) {
      u = d.call(a, u, o.normalize(), n ? n.status : void 0);
    }),
    o.normalize(),
    u
  );
}
function lT(e) {
  return !!(e && e.__CANCEL__);
}
function go(e, n, a) {
  Pe.call(this, e ?? "canceled", Pe.ERR_CANCELED, n, a),
    (this.name = "CanceledError");
}
K.inherits(go, Pe, { __CANCEL__: !0 });
function uT(e, n, a) {
  const i = a.config.validateStatus;
  !a.status || !i || i(a.status)
    ? e(a)
    : n(
        new Pe(
          "Request failed with status code " + a.status,
          [Pe.ERR_BAD_REQUEST, Pe.ERR_BAD_RESPONSE][
            Math.floor(a.status / 100) - 4
          ],
          a.config,
          a.request,
          a
        )
      );
}
function UU(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (n && n[1]) || "";
}
function PU(e, n) {
  e = e || 10;
  const a = new Array(e),
    i = new Array(e);
  let o = 0,
    u = 0,
    c;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (p) {
      const m = Date.now(),
        g = i[u];
      c || (c = m), (a[o] = p), (i[o] = m);
      let y = u,
        x = 0;
      for (; y !== o; ) (x += a[y++]), (y = y % e);
      if (((o = (o + 1) % e), o === u && (u = (u + 1) % e), m - c < n)) return;
      const R = g && m - g;
      return R ? Math.round((x * 1e3) / R) : void 0;
    }
  );
}
function BU(e, n) {
  let a = 0,
    i = 1e3 / n,
    o,
    u;
  const c = (m, g = Date.now()) => {
    (a = g), (o = null), u && (clearTimeout(u), (u = null)), e.apply(null, m);
  };
  return [
    (...m) => {
      const g = Date.now(),
        y = g - a;
      y >= i
        ? c(m, g)
        : ((o = m),
          u ||
            (u = setTimeout(() => {
              (u = null), c(o);
            }, i - y)));
    },
    () => o && c(o),
  ];
}
const Sf = (e, n, a = 3) => {
    let i = 0;
    const o = PU(50, 250);
    return BU((u) => {
      const c = u.loaded,
        d = u.lengthComputable ? u.total : void 0,
        p = c - i,
        m = o(p),
        g = c <= d;
      i = c;
      const y = {
        loaded: c,
        total: d,
        progress: d ? c / d : void 0,
        bytes: p,
        rate: m || void 0,
        estimated: m && d && g ? (d - c) / m : void 0,
        event: u,
        lengthComputable: d != null,
        [n ? "download" : "upload"]: !0,
      };
      e(y);
    }, a);
  },
  Ow = (e, n) => {
    const a = e != null;
    return [(i) => n[0]({ lengthComputable: a, total: e, loaded: i }), n[1]];
  },
  Mw =
    (e) =>
    (...n) =>
      K.asap(() => e(...n)),
  VU = rn.hasStandardBrowserEnv
    ? ((e, n) => (a) => (
        (a = new URL(a, rn.origin)),
        e.protocol === a.protocol &&
          e.host === a.host &&
          (n || e.port === a.port)
      ))(
        new URL(rn.origin),
        rn.navigator && /(msie|trident)/i.test(rn.navigator.userAgent)
      )
    : () => !0,
  HU = rn.hasStandardBrowserEnv
    ? {
        write(e, n, a, i, o, u) {
          const c = [e + "=" + encodeURIComponent(n)];
          K.isNumber(a) && c.push("expires=" + new Date(a).toGMTString()),
            K.isString(i) && c.push("path=" + i),
            K.isString(o) && c.push("domain=" + o),
            u === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read(e) {
          const n = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function FU(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qU(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function cT(e, n, a) {
  let i = !FU(n);
  return e && (i || a == !1) ? qU(e, n) : n;
}
const Nw = (e) => (e instanceof vn ? { ...e } : e);
function $i(e, n) {
  n = n || {};
  const a = {};
  function i(m, g, y, x) {
    return K.isPlainObject(m) && K.isPlainObject(g)
      ? K.merge.call({ caseless: x }, m, g)
      : K.isPlainObject(g)
      ? K.merge({}, g)
      : K.isArray(g)
      ? g.slice()
      : g;
  }
  function o(m, g, y, x) {
    if (K.isUndefined(g)) {
      if (!K.isUndefined(m)) return i(void 0, m, y, x);
    } else return i(m, g, y, x);
  }
  function u(m, g) {
    if (!K.isUndefined(g)) return i(void 0, g);
  }
  function c(m, g) {
    if (K.isUndefined(g)) {
      if (!K.isUndefined(m)) return i(void 0, m);
    } else return i(void 0, g);
  }
  function d(m, g, y) {
    if (y in n) return i(m, g);
    if (y in e) return i(void 0, m);
  }
  const p = {
    url: u,
    method: u,
    data: u,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: d,
    headers: (m, g, y) => o(Nw(m), Nw(g), y, !0),
  };
  return (
    K.forEach(Object.keys(Object.assign({}, e, n)), function (g) {
      const y = p[g] || o,
        x = y(e[g], n[g], g);
      (K.isUndefined(x) && y !== d) || (a[g] = x);
    }),
    a
  );
}
const fT = (e) => {
    const n = $i({}, e);
    let {
      data: a,
      withXSRFToken: i,
      xsrfHeaderName: o,
      xsrfCookieName: u,
      headers: c,
      auth: d,
    } = n;
    (n.headers = c = vn.from(c)),
      (n.url = iT(
        cT(n.baseURL, n.url, n.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      )),
      d &&
        c.set(
          "Authorization",
          "Basic " +
            btoa(
              (d.username || "") +
                ":" +
                (d.password ? unescape(encodeURIComponent(d.password)) : "")
            )
        );
    let p;
    if (K.isFormData(a)) {
      if (rn.hasStandardBrowserEnv || rn.hasStandardBrowserWebWorkerEnv)
        c.setContentType(void 0);
      else if ((p = c.getContentType()) !== !1) {
        const [m, ...g] = p
          ? p
              .split(";")
              .map((y) => y.trim())
              .filter(Boolean)
          : [];
        c.setContentType([m || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      rn.hasStandardBrowserEnv &&
      (i && K.isFunction(i) && (i = i(n)), i || (i !== !1 && VU(n.url)))
    ) {
      const m = o && u && HU.read(u);
      m && c.set(o, m);
    }
    return n;
  },
  IU = typeof XMLHttpRequest < "u",
  $U =
    IU &&
    function (e) {
      return new Promise(function (a, i) {
        const o = fT(e);
        let u = o.data;
        const c = vn.from(o.headers).normalize();
        let { responseType: d, onUploadProgress: p, onDownloadProgress: m } = o,
          g,
          y,
          x,
          R,
          E;
        function _() {
          R && R(),
            E && E(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g);
        }
        let w = new XMLHttpRequest();
        w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout);
        function A() {
          if (!w) return;
          const N = vn.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            D = {
              data:
                !d || d === "text" || d === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: N,
              config: e,
              request: w,
            };
          uT(
            function (Y) {
              a(Y), _();
            },
            function (Y) {
              i(Y), _();
            },
            D
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = A)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(A);
            }),
          (w.onabort = function () {
            w &&
              (i(new Pe("Request aborted", Pe.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            i(new Pe("Network Error", Pe.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let k = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const D = o.transitional || sT;
            o.timeoutErrorMessage && (k = o.timeoutErrorMessage),
              i(
                new Pe(
                  k,
                  D.clarifyTimeoutError ? Pe.ETIMEDOUT : Pe.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          u === void 0 && c.setContentType(null),
          "setRequestHeader" in w &&
            K.forEach(c.toJSON(), function (k, D) {
              w.setRequestHeader(D, k);
            }),
          K.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          d && d !== "json" && (w.responseType = o.responseType),
          m && (([x, E] = Sf(m, !0)), w.addEventListener("progress", x)),
          p &&
            w.upload &&
            (([y, R] = Sf(p)),
            w.upload.addEventListener("progress", y),
            w.upload.addEventListener("loadend", R)),
          (o.cancelToken || o.signal) &&
            ((g = (N) => {
              w &&
                (i(!N || N.type ? new go(null, e, w) : N),
                w.abort(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const C = UU(o.url);
        if (C && rn.protocols.indexOf(C) === -1) {
          i(new Pe("Unsupported protocol " + C + ":", Pe.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(u || null);
      });
    },
  GU = (e, n) => {
    const { length: a } = (e = e ? e.filter(Boolean) : []);
    if (n || a) {
      let i = new AbortController(),
        o;
      const u = function (m) {
        if (!o) {
          (o = !0), d();
          const g = m instanceof Error ? m : this.reason;
          i.abort(
            g instanceof Pe ? g : new go(g instanceof Error ? g.message : g)
          );
        }
      };
      let c =
        n &&
        setTimeout(() => {
          (c = null), u(new Pe(`timeout ${n} of ms exceeded`, Pe.ETIMEDOUT));
        }, n);
      const d = () => {
        e &&
          (c && clearTimeout(c),
          (c = null),
          e.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(u)
              : m.removeEventListener("abort", u);
          }),
          (e = null));
      };
      e.forEach((m) => m.addEventListener("abort", u));
      const { signal: p } = i;
      return (p.unsubscribe = () => K.asap(d)), p;
    }
  },
  YU = function* (e, n) {
    let a = e.byteLength;
    if (a < n) {
      yield e;
      return;
    }
    let i = 0,
      o;
    for (; i < a; ) (o = i + n), yield e.slice(i, o), (i = o);
  },
  ZU = async function* (e, n) {
    for await (const a of KU(e)) yield* YU(a, n);
  },
  KU = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const n = e.getReader();
    try {
      for (;;) {
        const { done: a, value: i } = await n.read();
        if (a) break;
        yield i;
      }
    } finally {
      await n.cancel();
    }
  },
  Dw = (e, n, a, i) => {
    const o = ZU(e, n);
    let u = 0,
      c,
      d = (p) => {
        c || ((c = !0), i && i(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: m, value: g } = await o.next();
            if (m) {
              d(), p.close();
              return;
            }
            let y = g.byteLength;
            if (a) {
              let x = (u += y);
              a(x);
            }
            p.enqueue(new Uint8Array(g));
          } catch (m) {
            throw (d(m), m);
          }
        },
        cancel(p) {
          return d(p), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  rd =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  dT = rd && typeof ReadableStream == "function",
  XU =
    rd &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (n) =>
            e.encode(n)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  hT = (e, ...n) => {
    try {
      return !!e(...n);
    } catch {
      return !1;
    }
  },
  QU =
    dT &&
    hT(() => {
      let e = !1;
      const n = new Request(rn.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !n;
    }),
  kw = 64 * 1024,
  jp = dT && hT(() => K.isReadableStream(new Response("").body)),
  _f = { stream: jp && ((e) => e.body) };
rd &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !_f[n] &&
        (_f[n] = K.isFunction(e[n])
          ? (a) => a[n]()
          : (a, i) => {
              throw new Pe(
                `Response type '${n}' is not supported`,
                Pe.ERR_NOT_SUPPORT,
                i
              );
            });
    });
  })(new Response());
const WU = async (e) => {
    if (e == null) return 0;
    if (K.isBlob(e)) return e.size;
    if (K.isSpecCompliantForm(e))
      return (
        await new Request(rn.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (K.isArrayBufferView(e) || K.isArrayBuffer(e)) return e.byteLength;
    if ((K.isURLSearchParams(e) && (e = e + ""), K.isString(e)))
      return (await XU(e)).byteLength;
  },
  JU = async (e, n) => {
    const a = K.toFiniteNumber(e.getContentLength());
    return a ?? WU(n);
  },
  eP =
    rd &&
    (async (e) => {
      let {
        url: n,
        method: a,
        data: i,
        signal: o,
        cancelToken: u,
        timeout: c,
        onDownloadProgress: d,
        onUploadProgress: p,
        responseType: m,
        headers: g,
        withCredentials: y = "same-origin",
        fetchOptions: x,
      } = fT(e);
      m = m ? (m + "").toLowerCase() : "text";
      let R = GU([o, u && u.toAbortSignal()], c),
        E;
      const _ =
        R &&
        R.unsubscribe &&
        (() => {
          R.unsubscribe();
        });
      let w;
      try {
        if (
          p &&
          QU &&
          a !== "get" &&
          a !== "head" &&
          (w = await JU(g, i)) !== 0
        ) {
          let D = new Request(n, { method: "POST", body: i, duplex: "half" }),
            I;
          if (
            (K.isFormData(i) &&
              (I = D.headers.get("content-type")) &&
              g.setContentType(I),
            D.body)
          ) {
            const [Y, G] = Ow(w, Sf(Mw(p)));
            i = Dw(D.body, kw, Y, G);
          }
        }
        K.isString(y) || (y = y ? "include" : "omit");
        const A = "credentials" in Request.prototype;
        E = new Request(n, {
          ...x,
          signal: R,
          method: a.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: i,
          duplex: "half",
          credentials: A ? y : void 0,
        });
        let C = await fetch(E);
        const N = jp && (m === "stream" || m === "response");
        if (jp && (d || (N && _))) {
          const D = {};
          ["status", "statusText", "headers"].forEach((J) => {
            D[J] = C[J];
          });
          const I = K.toFiniteNumber(C.headers.get("content-length")),
            [Y, G] = (d && Ow(I, Sf(Mw(d), !0))) || [];
          C = new Response(
            Dw(C.body, kw, Y, () => {
              G && G(), _ && _();
            }),
            D
          );
        }
        m = m || "text";
        let k = await _f[K.findKey(_f, m) || "text"](C, e);
        return (
          !N && _ && _(),
          await new Promise((D, I) => {
            uT(D, I, {
              data: k,
              headers: vn.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: e,
              request: E,
            });
          })
        );
      } catch (A) {
        throw (
          (_ && _(),
          A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message)
            ? Object.assign(new Pe("Network Error", Pe.ERR_NETWORK, e, E), {
                cause: A.cause || A,
              })
            : Pe.from(A, A && A.code, e, E))
        );
      }
    }),
  Lp = { http: pU, xhr: $U, fetch: eP };
K.forEach(Lp, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const jw = (e) => `- ${e}`,
  tP = (e) => K.isFunction(e) || e === null || e === !1,
  mT = {
    getAdapter: (e) => {
      e = K.isArray(e) ? e : [e];
      const { length: n } = e;
      let a, i;
      const o = {};
      for (let u = 0; u < n; u++) {
        a = e[u];
        let c;
        if (
          ((i = a),
          !tP(a) && ((i = Lp[(c = String(a)).toLowerCase()]), i === void 0))
        )
          throw new Pe(`Unknown adapter '${c}'`);
        if (i) break;
        o[c || "#" + u] = i;
      }
      if (!i) {
        const u = Object.entries(o).map(
          ([d, p]) =>
            `adapter ${d} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let c = n
          ? u.length > 1
            ? `since :
` +
              u.map(jw).join(`
`)
            : " " + jw(u[0])
          : "as no adapter specified";
        throw new Pe(
          "There is no suitable adapter to dispatch the request " + c,
          "ERR_NOT_SUPPORT"
        );
      }
      return i;
    },
    adapters: Lp,
  };
function Xm(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new go(null, e);
}
function Lw(e) {
  return (
    Xm(e),
    (e.headers = vn.from(e.headers)),
    (e.data = Km.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    mT
      .getAdapter(e.adapter || uu.adapter)(e)
      .then(
        function (i) {
          return (
            Xm(e),
            (i.data = Km.call(e, e.transformResponse, i)),
            (i.headers = vn.from(i.headers)),
            i
          );
        },
        function (i) {
          return (
            lT(i) ||
              (Xm(e),
              i &&
                i.response &&
                ((i.response.data = Km.call(
                  e,
                  e.transformResponse,
                  i.response
                )),
                (i.response.headers = vn.from(i.response.headers)))),
            Promise.reject(i)
          );
        }
      )
  );
}
const pT = "1.9.0",
  ad = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, n) => {
    ad[e] = function (i) {
      return typeof i === e || "a" + (n < 1 ? "n " : " ") + e;
    };
  }
);
const zw = {};
ad.transitional = function (n, a, i) {
  function o(u, c) {
    return (
      "[Axios v" +
      pT +
      "] Transitional option '" +
      u +
      "'" +
      c +
      (i ? ". " + i : "")
    );
  }
  return (u, c, d) => {
    if (n === !1)
      throw new Pe(
        o(c, " has been removed" + (a ? " in " + a : "")),
        Pe.ERR_DEPRECATED
      );
    return (
      a &&
        !zw[c] &&
        ((zw[c] = !0),
        console.warn(
          o(
            c,
            " has been deprecated since v" +
              a +
              " and will be removed in the near future"
          )
        )),
      n ? n(u, c, d) : !0
    );
  };
};
ad.spelling = function (n) {
  return (a, i) => (console.warn(`${i} is likely a misspelling of ${n}`), !0);
};
function nP(e, n, a) {
  if (typeof e != "object")
    throw new Pe("options must be an object", Pe.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const u = i[o],
      c = n[u];
    if (c) {
      const d = e[u],
        p = d === void 0 || c(d, u, e);
      if (p !== !0)
        throw new Pe("option " + u + " must be " + p, Pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0) throw new Pe("Unknown option " + u, Pe.ERR_BAD_OPTION);
  }
}
const Kc = { assertOptions: nP, validators: ad },
  Tr = Kc.validators;
let Pi = class {
  constructor(n) {
    (this.defaults = n || {}),
      (this.interceptors = { request: new Aw(), response: new Aw() });
  }
  async request(n, a) {
    try {
      return await this._request(n, a);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack
            ? u &&
              !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
              (i.stack +=
                `
` + u)
            : (i.stack = u);
        } catch {}
      }
      throw i;
    }
  }
  _request(n, a) {
    typeof n == "string" ? ((a = a || {}), (a.url = n)) : (a = n || {}),
      (a = $i(this.defaults, a));
    const { transitional: i, paramsSerializer: o, headers: u } = a;
    i !== void 0 &&
      Kc.assertOptions(
        i,
        {
          silentJSONParsing: Tr.transitional(Tr.boolean),
          forcedJSONParsing: Tr.transitional(Tr.boolean),
          clarifyTimeoutError: Tr.transitional(Tr.boolean),
        },
        !1
      ),
      o != null &&
        (K.isFunction(o)
          ? (a.paramsSerializer = { serialize: o })
          : Kc.assertOptions(
              o,
              { encode: Tr.function, serialize: Tr.function },
              !0
            )),
      a.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (a.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (a.allowAbsoluteUrls = !0)),
      Kc.assertOptions(
        a,
        {
          baseUrl: Tr.spelling("baseURL"),
          withXsrfToken: Tr.spelling("withXSRFToken"),
        },
        !0
      ),
      (a.method = (a.method || this.defaults.method || "get").toLowerCase());
    let c = u && K.merge(u.common, u[a.method]);
    u &&
      K.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (E) => {
          delete u[E];
        }
      ),
      (a.headers = vn.concat(c, u));
    const d = [];
    let p = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(a) === !1) ||
        ((p = p && _.synchronous), d.unshift(_.fulfilled, _.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (_) {
      m.push(_.fulfilled, _.rejected);
    });
    let g,
      y = 0,
      x;
    if (!p) {
      const E = [Lw.bind(this), void 0];
      for (
        E.unshift.apply(E, d),
          E.push.apply(E, m),
          x = E.length,
          g = Promise.resolve(a);
        y < x;

      )
        g = g.then(E[y++], E[y++]);
      return g;
    }
    x = d.length;
    let R = a;
    for (y = 0; y < x; ) {
      const E = d[y++],
        _ = d[y++];
      try {
        R = E(R);
      } catch (w) {
        _.call(this, w);
        break;
      }
    }
    try {
      g = Lw.call(this, R);
    } catch (E) {
      return Promise.reject(E);
    }
    for (y = 0, x = m.length; y < x; ) g = g.then(m[y++], m[y++]);
    return g;
  }
  getUri(n) {
    n = $i(this.defaults, n);
    const a = cT(n.baseURL, n.url, n.allowAbsoluteUrls);
    return iT(a, n.params, n.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function (n) {
  Pi.prototype[n] = function (a, i) {
    return this.request(
      $i(i || {}, { method: n, url: a, data: (i || {}).data })
    );
  };
});
K.forEach(["post", "put", "patch"], function (n) {
  function a(i) {
    return function (u, c, d) {
      return this.request(
        $i(d || {}, {
          method: n,
          headers: i ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: c,
        })
      );
    };
  }
  (Pi.prototype[n] = a()), (Pi.prototype[n + "Form"] = a(!0));
});
let rP = class gT {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let a;
    this.promise = new Promise(function (u) {
      a = u;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let u = i._listeners.length;
      for (; u-- > 0; ) i._listeners[u](o);
      i._listeners = null;
    }),
      (this.promise.then = (o) => {
        let u;
        const c = new Promise((d) => {
          i.subscribe(d), (u = d);
        }).then(o);
        return (
          (c.cancel = function () {
            i.unsubscribe(u);
          }),
          c
        );
      }),
      n(function (u, c, d) {
        i.reason || ((i.reason = new go(u, c, d)), a(i.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const a = this._listeners.indexOf(n);
    a !== -1 && this._listeners.splice(a, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      a = (i) => {
        n.abort(i);
      };
    return (
      this.subscribe(a),
      (n.signal.unsubscribe = () => this.unsubscribe(a)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new gT(function (o) {
        n = o;
      }),
      cancel: n,
    };
  }
};
function aP(e) {
  return function (a) {
    return e.apply(null, a);
  };
}
function iP(e) {
  return K.isObject(e) && e.isAxiosError === !0;
}
const zp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(zp).forEach(([e, n]) => {
  zp[n] = e;
});
function yT(e) {
  const n = new Pi(e),
    a = Y1(Pi.prototype.request, n);
  return (
    K.extend(a, Pi.prototype, n, { allOwnKeys: !0 }),
    K.extend(a, n, null, { allOwnKeys: !0 }),
    (a.create = function (o) {
      return yT($i(e, o));
    }),
    a
  );
}
const Ct = yT(uu);
Ct.Axios = Pi;
Ct.CanceledError = go;
Ct.CancelToken = rP;
Ct.isCancel = lT;
Ct.VERSION = pT;
Ct.toFormData = nd;
Ct.AxiosError = Pe;
Ct.Cancel = Ct.CanceledError;
Ct.all = function (n) {
  return Promise.all(n);
};
Ct.spread = aP;
Ct.isAxiosError = iP;
Ct.mergeConfig = $i;
Ct.AxiosHeaders = vn;
Ct.formToJSON = (e) => oT(K.isHTMLForm(e) ? new FormData(e) : e);
Ct.getAdapter = mT.getAdapter;
Ct.HttpStatusCode = zp;
Ct.default = Ct;
const {
    Axios: KP,
    AxiosError: XP,
    CanceledError: QP,
    isCancel: WP,
    CancelToken: JP,
    VERSION: e5,
    all: t5,
    Cancel: n5,
    isAxiosError: r5,
    spread: a5,
    toFormData: i5,
    AxiosHeaders: s5,
    HttpStatusCode: o5,
    formToJSON: l5,
    getAdapter: u5,
    mergeConfig: c5,
  } = Ct,
  sP = (e) => {
    const n = Object.keys(e);
    let a = "";
    return (
      n.forEach((i) => {
        const o = typeof e[i] == "object",
          u = o && Array.isArray(e[i]) && e[i].length >= 0;
        o || (a += `${i}=${e[i]}&`),
          o &&
            u &&
            e[i].forEach((c) => {
              a += `${i}=${c}&`;
            });
      }),
      a && a.slice(0, -1)
    );
  },
  Fg = (e) => {
    const n = Ct.create({
      baseURL: e,
      paramsSerializer: sP,
      withCredentials: !1,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    return (
      n.interceptors.request.use((a) => {
        const { method: i, data: o } = a;
        return (
          (i === "put" || i === "post" || i === "patch") &&
            (o instanceof FormData
              ? Object.assign(a.headers, {
                  "Content-Type": "multipart/form-data",
                })
              : Object.assign(a.headers, {
                  "Content-Type": "application/json;charset=UTF-8",
                })),
          a
        );
      }),
      n.interceptors.response.use(
        (a) => a,
        (a) => Promise.reject(a)
      ),
      n
    );
  },
  oP = Fg(Pg.VITE_API_CATALOG_URL),
  lP = Fg(Pg.VITE_API_IDENTITY_URL);
Fg(Pg.VITE_API_MENU_URL);
const uP = { catalog: oP, identity: lP },
  cP = {
    AUTH_API: "/authentication/login",
    CATEGORY_API: "/categories",
    PRODUCT_VARIANT_API: "/product-variants",
  },
  fP = { login: async (e) => uP.identity.post(cP.AUTH_API, e) },
  dP = () => ({ loginMutation: VO({ mutationFn: fP.login }) }),
  hP = (e) => {
    let n = null;
    if (e.response) {
      const { status: a, data: i } = e.response;
      a === 401 &&
        (n = {
          status: a,
          message: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
          data: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
        }),
        a === 403 &&
          (n = {
            status: a,
            message: "Bạn không có quyền truy cập vào tài nguyên này.",
            data: "Bạn không có quyền truy cập vào tài nguyên này.",
          }),
        i && i.status && i.message && i.data
          ? (n = { status: i.status, message: i.message, data: i.data })
          : (n = {
              status: a,
              message:
                (i == null ? void 0 : i.message) ||
                "Một lỗi không xác định đã xảy ra.",
              data:
                (i == null ? void 0 : i.message) ||
                "Một lỗi không xác định đã xảy ra.",
            });
    } else
      e.request
        ? (n = {
            status: 0,
            message: "Không nhận được phản hồi từ máy chủ.",
            data: "Không nhận được phản hồi từ máy chủ.",
          })
        : (n = {
            status: 0,
            message: "Lỗi không xác định: " + e.message,
            data: "Lỗi không xác định: " + e.message,
          });
    return (
      lp(
        S.jsxs("div", {
          className: "flex flex-col",
          children: [
            S.jsx("span", {
              className: "font-medium text-red-600",
              children: n.message,
            }),
            S.jsx("span", {
              className: "text-sm text-muted-foreground",
              children: n.data,
            }),
          ],
        })
      ),
      n
    );
  },
  mP = Ug({
    username: aa()
      .min(1, { message: "Tên đăng nhập không được bỏ trống" })
      .max(50, { message: "Tên đăng nhập không được quá 50 ký tự" }),
    password: aa()
      .min(1, { message: "Mật khẩu không được bỏ trống" })
      .max(50, { message: "Mật khẩu không được quá 50 ký tự" }),
  }).strict();
Ug({ accountId: aa(), username: aa(), accessToken: aa(), refreshToken: aa() });
const pP = Cz(["SystemAdmin", "BrandAdmin", "StoreAdmin"]),
  Uw = (e, n, a) => {
    if (e && "reportValidity" in e) {
      const i = pe(a, n);
      e.setCustomValidity((i && i.message) || ""), e.reportValidity();
    }
  },
  vT = (e, n) => {
    for (const a in n.fields) {
      const i = n.fields[a];
      i && i.ref && "reportValidity" in i.ref
        ? Uw(i.ref, a, e)
        : i && i.refs && i.refs.forEach((o) => Uw(o, a, e));
    }
  },
  gP = (e, n) => {
    n.shouldUseNativeValidation && vT(e, n);
    const a = {};
    for (const i in e) {
      const o = pe(n.fields, i),
        u = Object.assign(e[i] || {}, { ref: o && o.ref });
      if (yP(n.names || Object.keys(e), i)) {
        const c = Object.assign({}, pe(a, i));
        rt(c, "root", u), rt(a, i, c);
      } else rt(a, i, u);
    }
    return a;
  },
  yP = (e, n) => {
    const a = Pw(n);
    return e.some((i) => Pw(i).match(`^${a}\\.\\d+`));
  };
function Pw(e) {
  return e.replace(/\]|\[/g, "");
}
function vP(e, n) {
  for (var a = {}; e.length; ) {
    var i = e[0],
      o = i.code,
      u = i.message,
      c = i.path.join(".");
    if (!a[c])
      if ("unionErrors" in i) {
        var d = i.unionErrors[0].errors[0];
        a[c] = { message: d.message, type: d.code };
      } else a[c] = { message: u, type: o };
    if (
      ("unionErrors" in i &&
        i.unionErrors.forEach(function (g) {
          return g.errors.forEach(function (y) {
            return e.push(y);
          });
        }),
      n)
    ) {
      var p = a[c].types,
        m = p && p[i.code];
      a[c] = j1(c, n, a, o, m ? [].concat(m, i.message) : i.message);
    }
    e.shift();
  }
  return a;
}
function bP(e, n, a) {
  return (
    a === void 0 && (a = {}),
    function (i, o, u) {
      try {
        return Promise.resolve(
          (function (c, d) {
            try {
              var p = Promise.resolve(
                e[a.mode === "sync" ? "parse" : "parseAsync"](i, n)
              ).then(function (m) {
                return (
                  u.shouldUseNativeValidation && vT({}, u),
                  { errors: {}, values: a.raw ? Object.assign({}, i) : m }
                );
              });
            } catch (m) {
              return d(m);
            }
            return p && p.then ? p.then(void 0, d) : p;
          })(0, function (c) {
            if (
              (function (d) {
                return Array.isArray(d == null ? void 0 : d.errors);
              })(c)
            )
              return {
                values: {},
                errors: gP(
                  vP(
                    c.errors,
                    !u.shouldUseNativeValidation && u.criteriaMode === "all"
                  ),
                  u
                ),
              };
            throw c;
          })
        );
      } catch (c) {
        return Promise.reject(c);
      }
    }
  );
}
class Cl extends Error {}
Cl.prototype.name = "InvalidTokenError";
function xP(e) {
  return decodeURIComponent(
    atob(e).replace(/(.)/g, (n, a) => {
      let i = a.charCodeAt(0).toString(16).toUpperCase();
      return i.length < 2 && (i = "0" + i), "%" + i;
    })
  );
}
function wP(e) {
  let n = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (n.length % 4) {
    case 0:
      break;
    case 2:
      n += "==";
      break;
    case 3:
      n += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return xP(n);
  } catch {
    return atob(n);
  }
}
function SP(e, n) {
  if (typeof e != "string")
    throw new Cl("Invalid token specified: must be a string");
  n || (n = {});
  const a = n.header === !0 ? 0 : 1,
    i = e.split(".")[a];
  if (typeof i != "string")
    throw new Cl(`Invalid token specified: missing part #${a + 1}`);
  let o;
  try {
    o = wP(i);
  } catch (u) {
    throw new Cl(
      `Invalid token specified: invalid base64 for part #${a + 1} (${
        u.message
      })`
    );
  }
  try {
    return JSON.parse(o);
  } catch (u) {
    throw new Cl(
      `Invalid token specified: invalid json for part #${a + 1} (${u.message})`
    );
  }
}
function _P({ className: e, ...n }) {
  const { loginMutation: a } = dP(),
    i = Zp(),
    o = JL({ resolver: bP(mP), defaultValues: { username: "", password: "" } }),
    u = async (c) => {
      if (!a.isPending)
        try {
          const d = await a.mutateAsync(c),
            p = d.data.data.accessToken,
            m = SP(p).role;
          if ((console.log("Decoded role:", m), pP.safeParse(m).error))
            throw {
              response: {
                status: 403,
                data: {
                  status: 403,
                  message: "Tài khoản không có quyền truy cập.",
                  data: "Bạn không có quyền truy cập vào tài nguyên này.",
                },
              },
            };
          i(IM(d.data.data));
        } catch (d) {
          hP(d);
        }
    };
  return S.jsx("div", {
    className: Ve("flex flex-col gap-6", e),
    ...n,
    children: S.jsx(ML, {
      className: "overflow-hidden p-0",
      children: S.jsxs(NL, {
        className: "grid p-0 md:grid-cols-2",
        children: [
          S.jsx(tz, {
            ...o,
            children: S.jsx("form", {
              className: "p-6 md:p-8",
              onSubmit: o.handleSubmit(u),
              noValidate: !0,
              children: S.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [
                  S.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                      S.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: "Chào mừng bạn quay lại DimPos",
                      }),
                      S.jsx("p", {
                        className: "text-muted-foreground text-balance",
                        children: "Đăng nhập để tiếp tục sử dụng",
                      }),
                    ],
                  }),
                  S.jsx(rw, {
                    control: o.control,
                    name: "username",
                    render: ({ field: c }) =>
                      S.jsxs(aw, {
                        children: [
                          S.jsx(iw, { children: "Tên đăng nhập" }),
                          S.jsx(sw, {
                            children: S.jsx(Tx, {
                              type: "email",
                              placeholder: "Nhập tên đăng nhập",
                              disabled: a.isPending,
                              ...c,
                            }),
                          }),
                          S.jsx(ow, {}),
                        ],
                      }),
                  }),
                  S.jsx(rw, {
                    control: o.control,
                    name: "password",
                    render: ({ field: c }) =>
                      S.jsxs(aw, {
                        children: [
                          S.jsx(iw, { children: "Mật khẩu" }),
                          S.jsx(sw, {
                            children: S.jsx(Tx, {
                              type: "password",
                              placeholder: "Nhập mật khẩu",
                              disabled: a.isPending,
                              ...c,
                            }),
                          }),
                          S.jsx(ow, {}),
                        ],
                      }),
                  }),
                  S.jsx(sg, {
                    type: "submit",
                    className: "w-full",
                    disabled: a.isPending,
                    children: a.isPending ? "Đang đăng nhập..." : "Đăng nhập",
                  }),
                ],
              }),
            }),
          }),
          S.jsx("div", {
            className: "bg-muted relative hidden md:block",
            children: S.jsx("img", {
              src: "/logo.png",
              alt: "Image",
              className: "absolute inset-0 h-full w-full object-cover",
            }),
          }),
        ],
      }),
    }),
  });
}
const bT = () =>
    S.jsx("div", {
      className:
        "flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10",
      children: S.jsx("div", {
        className: "w-full max-w-sm md:max-w-3xl",
        children: S.jsx(_P, {}),
      }),
    }),
  EP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bT },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Bw({ children: e }) {
  const { isAuthenticated: n } = Kp((u) => u.user),
    { pathname: a } = jr(),
    [i, o] = v.useState(null);
  return n
    ? i && a !== i
      ? (o(null), S.jsx(Hs, { to: i }))
      : S.jsx(S.Fragment, { children: e })
    : (a !== i && o(a),
      a === "/" ? S.jsx(Hs, { to: "/auth/login" }) : S.jsx(bT, {}));
}
const TP = () => {
    const e = Zp(),
      { isAuthenticated: n } = Kp((a) => a.user);
    return (
      v.useEffect(() => {
        n && (e(GM()), (window.location.href = ff.root));
      }, [e]),
      null
    );
  },
  cu = (e) => (n) =>
    S.jsx(v.Suspense, {
      fallback: S.jsx(j2, {}),
      children: S.jsx(e, { ...n }),
    }),
  RP = cu(v.lazy(() => tu(() => Promise.resolve().then(() => EP), []))),
  AP = cu(
    v.lazy(() =>
      tu(() => import("./index-D-J_v-mI.js"), __vite__mapDeps([0, 1]))
    )
  ),
  CP = cu(v.lazy(() => tu(() => import("./index-CWpwtVLW.js"), []))),
  OP = cu(
    v.lazy(() =>
      tu(
        () => import("./category-page-B8mJRd7K.js"),
        __vite__mapDeps([2, 3, 1])
      )
    )
  ),
  MP = cu(
    v.lazy(() =>
      tu(() => import("./product-page-BGwW_FhG.js"), __vite__mapDeps([4, 3, 1]))
    )
  ),
  NP = () =>
    gC([
      {
        path: ff.root,
        children: [
          { element: S.jsx(Hs, { to: ff.login, replace: !0 }), index: !0 },
          { path: "login", element: S.jsx(OL, { children: S.jsx(RP, {}) }) },
          { path: "logout", element: S.jsx(TP, {}) },
        ],
      },
      {
        path: Oi.root,
        element: S.jsx(Bw, { children: S.jsx($x, {}) }),
        children: [
          {
            element: S.jsx(Hs, { to: Oi.general.app, replace: !0 }),
            index: !0,
          },
          { path: "app", element: S.jsx(AP, {}) },
          { path: "ecommerce", element: S.jsx(CP, {}) },
          { path: "category", element: S.jsx(OP, {}) },
          { path: "product", element: S.jsx(MP, {}) },
        ],
      },
      {
        path: "/",
        element: S.jsx(Bw, { children: S.jsx($x, {}) }),
        children: [
          { element: S.jsx(Hs, { to: Oi.root, replace: !0 }), index: !0 },
        ],
      },
    ]);
function DP() {
  return S.jsx(N2, { children: S.jsx(tO, { children: S.jsx(NP, {}) }) });
}
UA.createRoot(document.getElementById("root")).render(
  S.jsx(v.StrictMode, { children: S.jsx(DP, {}) })
);
export {
  yO as $,
  bE as A,
  z2 as B,
  ML as C,
  Ql as D,
  sg as E,
  og as F,
  BP as G,
  S1 as H,
  _1 as I,
  E1 as J,
  EL as K,
  TL as L,
  Ml as M,
  uP as N,
  cP as O,
  fr as P,
  VO as Q,
  ne as R,
  hP as S,
  PP as T,
  NE as U,
  C4 as V,
  O4 as W,
  M4 as X,
  Xl as Y,
  TO as Z,
  gO as _,
  jP as a,
  $0 as a0,
  Zn as a1,
  Mf as a2,
  mO as a3,
  pO as a4,
  yS as a5,
  MO as a6,
  bO as a7,
  Jt as a8,
  SO as a9,
  PO as aa,
  zE as ab,
  Jp as ac,
  fa as ad,
  Of as ae,
  eD as af,
  Ln as ag,
  Tx as ah,
  LP as ai,
  zf as aj,
  ag as ak,
  l_ as b,
  dr as c,
  Ve as d,
  NL as e,
  $P as f,
  Kw as g,
  GP as h,
  si as i,
  S as j,
  st as k,
  At as l,
  Ae as m,
  e4 as n,
  If as o,
  vE as p,
  Ui as q,
  v as r,
  Wl as s,
  z_ as t,
  Jl as u,
  lg as v,
  eo as w,
  A_ as x,
  xE as y,
  wE as z,
};
