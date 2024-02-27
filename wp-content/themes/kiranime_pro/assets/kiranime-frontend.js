var _a, _b, _c, _d, _e;
import { c as apiFetch, b as setSuccess, s as setError, _ as __, S as randomAnime, d as setAlert$1, r as ref, o as openBlock, f as createElementBlock, h as createBaseVNode, t as toDisplayString, m as withDirectives, q as vModelText, u as unref, k as createCommentVNode, D as inject, l as reactive, i as sprintf, T as shallowRef, U as watchPostEffect, w as watch, F as Fragment, M as createTextVNode, G as normalizeClass, j as renderList, L as createBlock, E as onMounted, x as createVNode, V as isRef, n as normalizeStyle, y as withModifiers, W as h, X as onUpdated, Y as provide, Z as nextTick$1, $ as onBeforeUnmount, a0 as onBeforeUpdate, O as computed, a1 as withCtx, a2 as createStaticVNode, N as _export_sfc, P as pushScopeId, Q as popScopeId, R as createApp } from "./helper.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var devtoolsDetector = { exports: {} };
(function(module, exports) {
  !function(t, n) {
    module.exports = n();
  }("undefined" != typeof self ? self : commonjsGlobal, function() {
    return function(t) {
      var n = {};
      function e(r) {
        if (n[r])
          return n[r].exports;
        var i = n[r] = { i: r, l: false, exports: {} };
        return t[r].call(i.exports, i, i.exports, e), i.l = true, i.exports;
      }
      return e.m = t, e.c = n, e.d = function(t2, n2, r) {
        e.o(t2, n2) || Object.defineProperty(t2, n2, { configurable: false, enumerable: true, get: r });
      }, e.n = function(t2) {
        var n2 = t2 && t2.__esModule ? function() {
          return t2.default;
        } : function() {
          return t2;
        };
        return e.d(n2, "a", n2), n2;
      }, e.o = function(t2, n2) {
        return Object.prototype.hasOwnProperty.call(t2, n2);
      }, e.p = "", e(e.s = 3);
    }([function(t, n, e) {
      e.d(n, "j", function() {
        return s;
      }), e.d(n, "e", function() {
        return l;
      }), e.d(n, "f", function() {
        return d;
      }), e.d(n, "d", function() {
        return h2;
      }), e.d(n, "i", function() {
        return p;
      }), e.d(n, "g", function() {
        return v;
      }), e.d(n, "c", function() {
        return b;
      }), e.d(n, "h", function() {
        return y;
      }), n.a = function() {
        for (var t2, n2 = [], e2 = 0; e2 < arguments.length; e2++)
          n2[e2] = arguments[e2];
        if (null === f || void 0 === f ? void 0 : f.document)
          return (t2 = f.document).createElement.apply(t2, n2);
        return {};
      }, e.d(n, "b", function() {
        return w;
      });
      var r, i, o, u, c, a = e(1), f = Object(a.a)(), s = (null === (r = null === f || void 0 === f ? void 0 : f.navigator) || void 0 === r ? void 0 : r.userAgent) || "unknown", l = "InstallTrigger" in ((null === f || void 0 === f ? void 0 : f.window) || {}) || /firefox/i.test(s), d = /trident/i.test(s) || /msie/i.test(s), h2 = /edge/i.test(s), p = /webkit/i.test(s) && !h2, v = /IqiyiApp/.test(s), b = void 0 !== (null === (i = null === f || void 0 === f ? void 0 : f.window) || void 0 === i ? void 0 : i.chrome) || /chrome/i.test(s) || /CriOS/i.test(s), y = "[object SafariRemoteNotification]" === ((null === (u = null === (o = null === f || void 0 === f ? void 0 : f.window) || void 0 === o ? void 0 : o.safari) || void 0 === u ? void 0 : u.pushNotification) || false).toString() || /safari/i.test(s) && !b;
      var w = "function" == typeof (null === (c = f.document) || void 0 === c ? void 0 : c.createElement);
    }, function(t, n, e) {
      (function(t2) {
        n.c = function() {
          return "undefined" != typeof performance ? performance.now() : Date.now();
        }, n.b = function(t3) {
          void 0 === t3 && (t3 = {});
          for (var n2 = t3.includes, e2 = void 0 === n2 ? [] : n2, r2 = t3.excludes, i2 = void 0 === r2 ? [] : r2, o = false, u = false, c = 0, a = e2; c < a.length; c++) {
            var f = a[c];
            if (true === f) {
              o = true;
              break;
            }
          }
          for (var s = 0, l = i2; s < l.length; s++) {
            var f = l[s];
            if (true === f) {
              u = true;
              break;
            }
          }
          return o && !u;
        }, n.d = function(t3, n2, e2) {
          var o = i.a[t3];
          if (void 0 === o)
            return false;
          return Object(r.compare)(o, n2, e2);
        }, n.a = function() {
          if ("undefined" != typeof self)
            return self;
          if ("undefined" != typeof window)
            return window;
          if (void 0 !== t2)
            return t2;
          return this;
        };
        var r = e(8), i = (e.n(r), e(4));
      }).call(n, e(7));
    }, function(t, n, e) {
      e.d(n, "b", function() {
        return o;
      }), e.d(n, "c", function() {
        return u;
      }), e.d(n, "a", function() {
        return c;
      });
      var r = e(0);
      function i(t2) {
        if (console) {
          if (!r.f && !r.d)
            return console[t2];
          if ("log" === t2 || "clear" === t2)
            return function() {
              for (var n2 = [], e2 = 0; e2 < arguments.length; e2++)
                n2[e2] = arguments[e2];
              console[t2].apply(console, n2);
            };
        }
        return function() {
          for (var t3 = [], n2 = 0; n2 < arguments.length; n2++)
            t3[n2] = arguments[n2];
        };
      }
      var o = i("log"), u = i("table"), c = i("clear");
    }, function(t, n, e) {
      Object.defineProperty(n, "__esModule", { value: true }), n.addListener = function(t2) {
        s.addListener(t2);
      }, n.removeListener = function(t2) {
        s.removeListener(t2);
      }, n.isLaunch = function() {
        return s.isLaunch();
      }, n.launch = function() {
        s.launch();
      }, n.stop = function() {
        s.stop();
      }, n.setDetectDelay = function(t2) {
        s.setDetectDelay(t2);
      };
      var r = e(6), i = e(9);
      e.d(n, "DevtoolsDetector", function() {
        return r.a;
      }), e.d(n, "checkers", function() {
        return i;
      });
      var o = e(1);
      e.d(n, "match", function() {
        return o.b;
      }), e.d(n, "specificVersionMatch", function() {
        return o.d;
      });
      var u = e(0);
      e.d(n, "userAgent", function() {
        return u.j;
      }), e.d(n, "isFirefox", function() {
        return u.e;
      }), e.d(n, "isIE", function() {
        return u.f;
      }), e.d(n, "isEdge", function() {
        return u.d;
      }), e.d(n, "isWebkit", function() {
        return u.i;
      }), e.d(n, "isIqiyiApp", function() {
        return u.g;
      }), e.d(n, "isChrome", function() {
        return u.c;
      }), e.d(n, "isSafari", function() {
        return u.h;
      }), e.d(n, "createElement", function() {
        return u.a;
      }), e.d(n, "inBrowser", function() {
        return u.b;
      });
      var c = e(2);
      e.d(n, "log", function() {
        return c.b;
      }), e.d(n, "table", function() {
        return c.c;
      }), e.d(n, "clear", function() {
        return c.a;
      });
      var a = e(4);
      e.d(n, "versionMap", function() {
        return a.a;
      });
      var f = e(5);
      e.d(n, "isMac", function() {
        return f.d;
      }), e.d(n, "isIpad", function() {
        return f.b;
      }), e.d(n, "isIphone", function() {
        return f.c;
      }), e.d(n, "isAndroid", function() {
        return f.a;
      }), e.d(n, "isWindows", function() {
        return f.e;
      });
      var s = new r.a({ checkers: [i.erudaChecker, i.elementIdChecker, i.regToStringChecker, i.functionToStringChecker, i.depRegToStringChecker, i.dateToStringChecker, i.performanceChecker, i.debuggerChecker] });
      n.default = s;
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return r;
      });
      for (var r = {}, i = 0, o = (e(0).j || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; i < o.length; i++) {
        var u = o[i].split("/"), c = u[0], a = u[1];
        r[c] = a;
      }
    }, function(t, n, e) {
      e.d(n, "d", function() {
        return i;
      }), e.d(n, "b", function() {
        return o;
      }), e.d(n, "c", function() {
        return u;
      }), e.d(n, "a", function() {
        return c;
      }), e.d(n, "e", function() {
        return a;
      });
      var r = e(0), i = /macintosh/i.test(r.j), o = /ipad/i.test(r.j) || i && navigator.maxTouchPoints > 1, u = /iphone/i.test(r.j), c = /android/i.test(r.j), a = /windows/i.test(r.j);
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return u;
      });
      var r = e(0), i = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c(t3) {
            try {
              a(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c);
          }
          a((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, o = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c(o3) {
          return function(c2) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c2]);
          };
        }
      }, u = function() {
        function t2(t3) {
          var n2 = t3.checkers;
          this._listeners = [], this._isOpen = false, this._detectLoopStopped = true, this._detectLoopDelay = 500, this._checkers = n2.slice();
        }
        return t2.prototype.launch = function() {
          r.b && (this._detectLoopDelay <= 0 && this.setDetectDelay(500), this._detectLoopStopped && (this._detectLoopStopped = false, this._detectLoop()));
        }, t2.prototype.stop = function() {
          this._detectLoopStopped || (this._detectLoopStopped = true, clearTimeout(this._timer));
        }, t2.prototype.isLaunch = function() {
          return !this._detectLoopStopped;
        }, t2.prototype.setDetectDelay = function(t3) {
          this._detectLoopDelay = t3;
        }, t2.prototype.addListener = function(t3) {
          this._listeners.push(t3);
        }, t2.prototype.removeListener = function(t3) {
          this._listeners = this._listeners.filter(function(n2) {
            return n2 !== t3;
          });
        }, t2.prototype._broadcast = function(t3) {
          for (var n2 = 0, e2 = this._listeners; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            try {
              r2(t3.isOpen, t3);
            } catch (t4) {
            }
          }
        }, t2.prototype._detectLoop = function() {
          return i(this, void 0, void 0, function() {
            var t3, n2, e2, r2, i2, u2 = this;
            return o(this, function(o2) {
              switch (o2.label) {
                case 0:
                  t3 = false, n2 = "", e2 = 0, r2 = this._checkers, o2.label = 1;
                case 1:
                  return e2 < r2.length ? [4, (i2 = r2[e2]).isEnable()] : [3, 6];
                case 2:
                  return o2.sent() ? (n2 = i2.name, [4, i2.isOpen()]) : [3, 4];
                case 3:
                  t3 = o2.sent(), o2.label = 4;
                case 4:
                  if (t3)
                    return [3, 6];
                  o2.label = 5;
                case 5:
                  return e2++, [3, 1];
                case 6:
                  return t3 != this._isOpen && (this._isOpen = t3, this._broadcast({ isOpen: t3, checkerName: n2 })), this._detectLoopDelay > 0 && !this._detectLoopStopped ? this._timer = setTimeout(function() {
                    return u2._detectLoop();
                  }, this._detectLoopDelay) : this.stop(), [2];
              }
            });
          });
        }, t2;
      }();
    }, function(t, n) {
      var e;
      e = function() {
        return this;
      }();
      try {
        e = e || Function("return this")() || (0, eval)("this");
      } catch (t2) {
        "object" == typeof window && (e = window);
      }
      t.exports = e;
    }, function(t, n, e) {
      var r, i, o;
      !function(e2, u) {
        i = [], void 0 === (o = "function" == typeof (r = u) ? r.apply(n, i) : r) || (t.exports = o);
      }(0, function() {
        var t2 = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
        function n2(t3) {
          var n3 = t3.replace(/^v/, "").replace(/\+.*$/, ""), e3 = function(t4, n4) {
            return -1 === t4.indexOf(n4) ? t4.length : t4.indexOf(n4);
          }(n3, "-"), r3 = n3.substring(0, e3).split(".");
          return r3.push(n3.substring(e3 + 1)), r3;
        }
        function e2(t3) {
          return isNaN(Number(t3)) ? t3 : Number(t3);
        }
        function r2(n3) {
          if ("string" != typeof n3)
            throw new TypeError("Invalid argument expected string");
          if (!t2.test(n3))
            throw new Error("Invalid argument not valid semver ('" + n3 + "' received)");
        }
        function i2(t3, i3) {
          [t3, i3].forEach(r2);
          for (var o3 = n2(t3), u2 = n2(i3), c = 0; c < Math.max(o3.length - 1, u2.length - 1); c++) {
            var a = parseInt(o3[c] || 0, 10), f = parseInt(u2[c] || 0, 10);
            if (a > f)
              return 1;
            if (f > a)
              return -1;
          }
          var s = o3[o3.length - 1], l = u2[u2.length - 1];
          if (s && l) {
            var d = s.split(".").map(e2), h2 = l.split(".").map(e2);
            for (c = 0; c < Math.max(d.length, h2.length); c++) {
              if (void 0 === d[c] || "string" == typeof h2[c] && "number" == typeof d[c])
                return -1;
              if (void 0 === h2[c] || "string" == typeof d[c] && "number" == typeof h2[c])
                return 1;
              if (d[c] > h2[c])
                return 1;
              if (h2[c] > d[c])
                return -1;
            }
          } else if (s || l)
            return s ? -1 : 1;
          return 0;
        }
        var o2 = [">", ">=", "=", "<", "<="], u = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1] };
        return i2.validate = function(n3) {
          return "string" == typeof n3 && t2.test(n3);
        }, i2.compare = function(t3, n3, e3) {
          !function(t4) {
            if ("string" != typeof t4)
              throw new TypeError("Invalid operator type, expected string but got " + typeof t4);
            if (-1 === o2.indexOf(t4))
              throw new TypeError("Invalid operator, expected one of " + o2.join("|"));
          }(e3);
          var r3 = i2(t3, n3);
          return u[e3].indexOf(r3) > -1;
        }, i2;
      });
    }, function(t, n, e) {
      Object.defineProperty(n, "__esModule", { value: true });
      var r = e(10);
      e.d(n, "depRegToStringChecker", function() {
        return r.a;
      });
      var i = e(11);
      e.d(n, "elementIdChecker", function() {
        return i.a;
      });
      var o = e(12);
      e.d(n, "functionToStringChecker", function() {
        return o.a;
      });
      var u = e(13);
      e.d(n, "regToStringChecker", function() {
        return u.a;
      });
      var c = e(14);
      e.d(n, "debuggerChecker", function() {
        return c.a;
      });
      var a = e(15);
      e.d(n, "dateToStringChecker", function() {
        return a.a;
      });
      var f = e(16);
      e.d(n, "performanceChecker", function() {
        return f.a;
      });
      var s = e(17);
      e.d(n, "erudaChecker", function() {
        return s.a;
      });
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return s;
      });
      var r = e(0), i = e(2), o = e(1), u = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, c = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      }, a = / /, f = false;
      a.toString = function() {
        return f = true, s.name;
      };
      var s = { name: "dep-reg-to-string", isOpen: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return f = false, Object(i.c)({ dep: a }), Object(i.a)(), [2, f];
          });
        });
      }, isEnable: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return [2, Object(o.b)({ includes: [true], excludes: [r.e, r.f] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return s;
      });
      var r = e(0), i = e(2), o = e(1), u = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, c = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      }, a = Object(r.a)("div"), f = false;
      Object.defineProperty(a, "id", { get: function() {
        return f = true, s.name;
      }, configurable: true });
      var s = { name: "element-id", isOpen: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return f = false, Object(i.b)(a), Object(i.a)(), [2, f];
          });
        });
      }, isEnable: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return [2, Object(o.b)({ includes: [true], excludes: [r.f, r.d, r.e] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return l;
      });
      var r = e(0), i = e(2), o = e(5), u = e(1), c = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, a = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      };
      function f() {
      }
      var s = 0;
      f.toString = function() {
        return s++, "";
      };
      var l = { name: "function-to-string", isOpen: function() {
        return c(this, void 0, void 0, function() {
          return a(this, function(t2) {
            return s = 0, Object(i.b)(f), Object(i.a)(), [2, 2 === s];
          });
        });
      }, isEnable: function() {
        return c(this, void 0, void 0, function() {
          return a(this, function(t2) {
            return [2, Object(u.b)({ includes: [true], excludes: [r.g, r.e, (o.b || o.c) && r.c] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return s;
      });
      var r = e(2), i = e(0), o = e(1), u = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, c = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      }, a = / /, f = false;
      a.toString = function() {
        return f = true, s.name;
      };
      var s = { name: "reg-to-string", isOpen: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return f = false, Object(r.b)(a), Object(r.a)(), [2, f];
          });
        });
      }, isEnable: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return [2, Object(o.b)({ includes: [true], excludes: [i.i] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return u;
      });
      var r = e(1), i = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c(t3) {
            try {
              a(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c);
          }
          a((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, o = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c(o3) {
          return function(c2) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c2]);
          };
        }
      }, u = { name: "debugger-checker", isOpen: function() {
        return i(this, void 0, void 0, function() {
          var t2;
          return o(this, function(n2) {
            return t2 = Object(r.c)(), function() {
            }.constructor("debugger")(), [2, Object(r.c)() - t2 > 100];
          });
        });
      }, isEnable: function() {
        return i(this, void 0, void 0, function() {
          return o(this, function(t2) {
            return [2, true];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return l;
      });
      var r = e(0), i = e(2), o = e(1), u = e(3), c = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, a = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      }, f = /* @__PURE__ */ new Date(), s = 0;
      f.toString = function() {
        return s++, "";
      };
      var l = { name: "date-to-string", isOpen: function() {
        return c(this, void 0, void 0, function() {
          return a(this, function(t2) {
            return s = 0, Object(i.b)(f), Object(i.a)(), [2, 2 === s];
          });
        });
      }, isEnable: function() {
        return c(this, void 0, void 0, function() {
          return a(this, function(t2) {
            return [2, Object(o.b)({ includes: [r.c], excludes: [(u.isIpad || u.isIphone) && r.c] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return s;
      });
      var r = e(0), i = e(2), o = e(1), u = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u2(t3) {
            try {
              a2(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c2(t3) {
            try {
              a2(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a2(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u2, c2);
          }
          a2((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, c = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u2 = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c2(o3) {
          return function(c3) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u2; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u2.label++, { value: o4[1], done: false };
                    case 5:
                      u2.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u2.ops.pop(), u2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u2.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u2 = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u2.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u2.label < i2[1]) {
                        u2.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u2.label < i2[2]) {
                        u2.label = i2[2], u2.ops.push(o4);
                        break;
                      }
                      i2[2] && u2.ops.pop(), u2.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u2);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c3]);
          };
        }
      }, a = null, f = 0, s = { name: "performance", isOpen: function() {
        return u(this, void 0, void 0, function() {
          var t2, n2;
          return c(this, function(e2) {
            return null === a && (a = function() {
              for (var t3 = function() {
                for (var t4 = {}, n4 = 0; n4 < 500; n4++)
                  t4["".concat(n4)] = "".concat(n4);
                return t4;
              }(), n3 = [], e3 = 0; e3 < 50; e3++)
                n3.push(t3);
              return n3;
            }()), t2 = function() {
              var t3 = Object(o.c)();
              return Object(i.c)(a), Object(o.c)() - t3;
            }(), n2 = function() {
              var t3 = Object(o.c)();
              return Object(i.b)(a), Object(o.c)() - t3;
            }(), f = Math.max(f, n2), Object(i.a)(), 0 === t2 ? [2, false] : 0 === f ? [2, false] : [2, t2 > 10 * f];
          });
        });
      }, isEnable: function() {
        return u(this, void 0, void 0, function() {
          return c(this, function(t2) {
            return [2, Object(o.b)({ includes: [r.c], excludes: [] })];
          });
        });
      } };
    }, function(t, n, e) {
      e.d(n, "a", function() {
        return o;
      });
      var r = this && this.__awaiter || function(t2, n2, e2, r2) {
        return new (e2 || (e2 = Promise))(function(i2, o2) {
          function u(t3) {
            try {
              a(r2.next(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function c(t3) {
            try {
              a(r2.throw(t3));
            } catch (t4) {
              o2(t4);
            }
          }
          function a(t3) {
            t3.done ? i2(t3.value) : function(t4) {
              return t4 instanceof e2 ? t4 : new e2(function(n3) {
                n3(t4);
              });
            }(t3.value).then(u, c);
          }
          a((r2 = r2.apply(t2, n2 || [])).next());
        });
      }, i = this && this.__generator || function(t2, n2) {
        var e2, r2, i2, o2, u = { label: 0, sent: function() {
          if (1 & i2[0])
            throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function c(o3) {
          return function(c2) {
            return function(o4) {
              if (e2)
                throw new TypeError("Generator is already executing.");
              for (; u; )
                try {
                  if (e2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                    return i2;
                  switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                    case 0:
                    case 1:
                      i2 = o4;
                      break;
                    case 4:
                      return u.label++, { value: o4[1], done: false };
                    case 5:
                      u.label++, r2 = o4[1], o4 = [0];
                      continue;
                    case 7:
                      o4 = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!(i2 = (i2 = u.trys).length > 0 && i2[i2.length - 1]) && (6 === o4[0] || 2 === o4[0])) {
                        u = 0;
                        continue;
                      }
                      if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                        u.label = o4[1];
                        break;
                      }
                      if (6 === o4[0] && u.label < i2[1]) {
                        u.label = i2[1], i2 = o4;
                        break;
                      }
                      if (i2 && u.label < i2[2]) {
                        u.label = i2[2], u.ops.push(o4);
                        break;
                      }
                      i2[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  o4 = n2.call(t2, u);
                } catch (t3) {
                  o4 = [6, t3], r2 = 0;
                } finally {
                  e2 = i2 = 0;
                }
              if (5 & o4[0])
                throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, c2]);
          };
        }
      }, o = { name: "eruda", isOpen: function() {
        var t2;
        return r(this, void 0, void 0, function() {
          return i(this, function(n2) {
            return "undefined" != typeof eruda ? [2, true === (null === (t2 = null === eruda || void 0 === eruda ? void 0 : eruda._devTools) || void 0 === t2 ? void 0 : t2._isShow)] : [2, false];
          });
        });
      }, isEnable: function() {
        return r(this, void 0, void 0, function() {
          return i(this, function(t2) {
            return [2, true];
          });
        });
      } };
    }]);
  });
})(devtoolsDetector);
let addToWatchListButton = document.querySelectorAll(
  "[data-add-to-watch-list]"
), clickedOnWatchList = [];
document.addEventListener("DOMNodeInserted", () => {
  addToWatchListButton = document.querySelectorAll("[data-add-to-watch-list]");
  attachWL();
});
const attachWL = () => {
  if (addToWatchListButton) {
    addToWatchListButton.forEach((wb) => {
      wb.removeEventListener("click", sentWL);
      wb.addEventListener("click", sentWL);
    });
  }
};
const sentWL = async (w) => {
  try {
    if (!isloggedIn) {
      document.querySelector("[data-login-toggle]").click();
      return;
    }
    const type = w.target.getAttribute("data-watch-list-key");
    const id = w.target.getAttribute("data-watch-list-id");
    const response = await apiFetch({
      path: "watchlist",
      data: {
        user_id: current_user_id,
        type,
        anime_id: id
      },
      method: type === "remove" ? "DELETE" : "POST"
    });
    if (response) {
      setSuccess(response == null ? void 0 : response.message);
      clickedOnWatchList.push({ id, type });
      return;
    }
    setError(response == null ? void 0 : response.message, "error");
    return;
  } catch (error) {
    setError(__("Something went wrong."));
  }
};
const shiftAway = "";
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow$1(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  var OwnElement = getWindow$1(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow$1(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow$1(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement$1(placement) {
  return placement.split("-")[0];
}
var max$b = Math.max;
var min$7 = Math.min;
var round$5 = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round$5(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round$5(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement$1(element) ? getWindow$1(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$2(element) {
  return getWindow$1(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow$1(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max$b(min2, min$7(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$5(x * dpr) / dpr || 0,
    y: round$5(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow$1(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow$1(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow$1(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow$1(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow$1(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max$b(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max$b(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$2(body || html).direction === "rtl") {
    x += max$b(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow$1(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max$b(rect.top, accRect.top);
    accRect.right = min$7(rect.right, accRect.right);
    accRect.bottom = min$7(rect.bottom, accRect.bottom);
    accRect.left = max$b(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement$1(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement$1(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement$1(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min$7(min2, tetherMin) : min2, offset2, tether ? max$b(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow$1(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round$5(rect.width) / element.offsetWidth || 1;
  var scaleY = round$5(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result2 = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result2.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result2;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce$1(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect3 = _ref.effect;
        if (typeof effect3 === "function") {
          var cleanupFn = effect3({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now2 = performance.now();
  if (now2 - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now2;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate2() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren$1(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren$1(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument2().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument2() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren$1(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument2().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove2() {
    didTouchMove = true;
  }
  function onTouchStart2() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument2();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart2, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove2, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument2();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart2, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove2, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren$1(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    getDocument2().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
Object.assign({}, applyStyles$1, {
  effect: function effect2(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
const saveTemporary = (key, value, group) => {
  if (typeof window["datasaver"] === "undefined") {
    window["datasaver"] = {
      [group]: { [key]: value }
    };
  }
  if (typeof window["datasaver"][group] === "undefined") {
    datasaver[group] = { [key]: value };
  }
  window["datasaver"][group][key] = value;
};
const getTemporary = (key, group) => {
  if (typeof window["datasaver"] === "undefined" || typeof window["datasaver"][group] === "undefined") {
    return null;
  }
  return window["datasaver"][group][key];
};
if (typeof window["tooltip_holder"] === "undefined") {
  window["toolbar_holder"] = {};
}
const parseHTML = (html) => {
  if (typeof html !== "string")
    return html;
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.firstElementChild;
};
const addToListTooltip = (id) => {
  const div2 = document.createElement("div");
  div2.classList.add("watchlist-tooltip");
  div2.dataset.tippySubContentFor = id;
  for (const type of watchlist_types) {
    const d = document.createElement("div");
    d.classList.add("watchlist-tooltip-type");
    d.dataset.addToWatchList = "";
    d.dataset.watchListKey = type.key;
    d.dataset.watchListId = id;
    d.textContent = type.name;
    if (type.key === "remove") {
      d.classList.add("remove");
    }
    div2.appendChild(d);
  }
  return div2;
};
let listingFetching = false, fetching = [];
const listingTooltip = () => tippy(
  [
    ...document.querySelectorAll("[data-tippy-trigger]"),
    ...document.querySelectorAll("[data-tippy-featured-id]")
  ],
  {
    content: (ref2) => {
      const d = document.createElement("div");
      d.textContent = `Loading...`;
      d.style.padding = "1rem";
      return d;
    },
    interactive: true,
    placement: "auto-start",
    animation: "scale",
    theme: "transparent",
    zIndex: 40,
    appendTo: document.body,
    allowHTML: true,
    onCreate(instance) {
      instance._isi = null;
      instance._error = null;
    },
    onShow(instance) {
      var _a2, _b2;
      const id = ((_a2 = instance.reference.dataset) == null ? void 0 : _a2.tippyContentTo) || ((_b2 = instance.reference.dataset) == null ? void 0 : _b2.tippyFeaturedId);
      if (listingFetching && fetching.includes(id) || !id) {
        return;
      }
      listingFetching = true;
      fetching.push(id);
      const cached = getTemporary(id, "tooltip");
      if (cached) {
        const el = parseHTML(cached);
        showSubTrigger(el);
        instance.setContent(el);
        listingFetching = false;
        fetching = fetching.filter((e) => e !== id);
      } else {
        apiFetch({
          path: "anime/tooltip/" + id
        }).then((res) => {
          const el = parseHTML(res.data);
          showSubTrigger(el);
          instance._isi = el;
          instance.setContent(el);
          saveTemporary(id, res.data, "tooltip");
        }).catch((er) => {
          instance._error = er;
          const d = document.createElement("div");
          d.textContent = `Request failed. ${er.message}`;
          d.style.background = "#414248";
          d.style.padding = "1rem";
          instance.setContent(d);
        }).finally(() => {
          listingFetching = false;
          fetching = fetching.filter((e) => e !== id);
        });
      }
    },
    trigger: "mouseenter"
  }
);
function showSubTrigger(el) {
  tippy(el.querySelector("[data-tippy-sub-trigger]"), {
    content: (ref2) => {
      const id = ref2.dataset["tippySubTrigger"];
      return addToListTooltip(id);
    },
    interactive: true,
    animation: "scale",
    placement: "auto",
    appendTo: "parent",
    trigger: "click",
    arrow: true
  });
}
tippy(document.querySelectorAll("[data-anime-tippy-add-list]"), {
  content: (ref2) => {
    const id = ref2.dataset.animeTippyAddList;
    const content = addToListTooltip(id);
    return content;
  },
  interactive: true,
  animation: "scale",
  arrow: false,
  placement: "bottom",
  trigger: "click"
});
tippy(document.querySelectorAll("[data-popular-add-to-list]"), {
  content: (ref2) => {
    const id = ref2.dataset.popularAddToList;
    const content = addToListTooltip(id);
    return content;
  },
  interactive: true,
  animation: "scale",
  placement: "auto-start",
  trigger: "click",
  arrow: false
});
const landingMenu = document.querySelector("[data-tippy-landing-menu-trigger]");
if (landingMenu) {
  tippy(landingMenu, {
    content: (ref2) => {
      return document.querySelector(`[data-tippy-landing-menu]`);
    },
    interactive: true,
    animation: "scale",
    arrow: false,
    placement: "bottom",
    trigger: "click"
  });
}
const allTippies = [listingTooltip()];
let waiting = null;
window.addEventListener("resize", (e) => {
  clearTimeout(waiting);
  waiting = setTimeout(() => {
    if (window.innerWidth < 768) {
      allTippies.forEach((tippy2) => {
        tippy2.forEach((t) => t.disable());
      });
    } else {
      allTippies.forEach((tippy2) => {
        tippy2.forEach((e2) => e2.enable());
      });
    }
  }, 150);
});
if (document.querySelector("[data-user-menu-dropdown]")) {
  tippy(document.querySelector("[data-user-menu-dropdown]"), {
    appendTo: document.body,
    trigger: "click",
    placement: "bottom",
    content: (t) => {
      return document.querySelector("[data-user-menu-content]");
    },
    onMount: () => {
      const logoutTrigger = document.querySelector("[data-logout-trigger]");
      if (logoutTrigger) {
        logoutTrigger.addEventListener("click", async (e) => {
          try {
            const req = await apiFetch({
              path: "auth/logout",
              method: "POST"
            });
            location.reload();
          } catch (error) {
            location.reload();
          }
        });
      }
    },
    arrow: false,
    animation: "shift-away",
    interactive: true
  });
}
const notifEl = document.querySelector("[data-dropdown-notification-trigger]");
if (notifEl) {
  tippy(notifEl, {
    appendTo: document.body,
    trigger: "click",
    placement: "bottom",
    content: (t) => {
      return document.querySelector("[data-dropdown-notification-content]");
    },
    arrow: false,
    animation: "shift-away",
    interactive: true
  });
}
function isObject$2(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$2(target = {}, src = {}) {
  Object.keys(src).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) {
      extend$2(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend$2(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend$2(win, ssrWindow);
  return win;
}
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach((key) => {
    try {
      object[key] = null;
    } catch (e) {
    }
    try {
      delete object[key];
    } catch (e) {
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle$1(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = "x") {
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle$1(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m41;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[12]);
    else
      curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix)
      curTransform = transformMatrix.m42;
    else if (matrix.length === 16)
      curTransform = parseFloat(matrix[13]);
    else
      curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject$1(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1(...args) {
  const to = Object(args[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend$1(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */ new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function elementChildren(element, selector = "") {
  return [...element.children].filter((el) => el.matches(selector));
}
function createElement(tag, classes2 = []) {
  const el = document.createElement(tag);
  el.classList.add(...Array.isArray(classes2) ? classes2 : [classes2]);
  return el;
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector))
        prevEls.push(prev);
    } else
      prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector))
        nextEls.push(next);
    } else
      nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1)
        i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector))
        parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}
let support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad)
      ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
let browser;
function calcBrowser() {
  const window2 = getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize({
  swiper,
  on,
  emit
}) {
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    observer = new ResizeObserver((entries) => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el)
            return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized)
      return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window2 = getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc((mutations) => {
      if (swiper.__preventObserver__)
        return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer)
      return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.el);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.el, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach((observer) => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
const eventsEmitter = {
  on(events2, handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (typeof handler !== "function")
      return self2;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach((event) => {
      if (!self2.eventsListeners[event])
        self2.eventsListeners[event] = [];
      self2.eventsListeners[event][method](handler);
    });
    return self2;
  },
  once(events2, handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (typeof handler !== "function")
      return self2;
    function onceHandler(...args) {
      self2.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self2, args);
    }
    onceHandler.__emitterProxy = handler;
    return self2.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (typeof handler !== "function")
      return self2;
    const method = priority ? "unshift" : "push";
    if (self2.eventsAnyListeners.indexOf(handler) < 0) {
      self2.eventsAnyListeners[method](handler);
    }
    return self2;
  },
  offAny(handler) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (!self2.eventsAnyListeners)
      return self2;
    const index = self2.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self2.eventsAnyListeners.splice(index, 1);
    }
    return self2;
  },
  off(events2, handler) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (!self2.eventsListeners)
      return self2;
    events2.split(" ").forEach((event) => {
      if (typeof handler === "undefined") {
        self2.eventsListeners[event] = [];
      } else if (self2.eventsListeners[event]) {
        self2.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self2.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self2;
  },
  emit(...args) {
    const self2 = this;
    if (!self2.eventsListeners || self2.destroyed)
      return self2;
    if (!self2.eventsListeners)
      return self2;
    let events2;
    let data;
    let context;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self2;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self2;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach((event) => {
      if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
        self2.eventsAnyListeners.forEach((eventHandler) => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self2.eventsListeners && self2.eventsListeners[event]) {
        self2.eventsListeners[event].forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self2;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width))
    width = 0;
  if (Number.isNaN(height))
    height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach((slideEl) => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i])
      slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none")
      continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths)
        slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0)
        slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3)
        slidePosition = 0;
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths)
        slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
        snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths)
        slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0)
    snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop)
        return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach((slideEl) => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map((snap) => {
      if (snap < 0)
        return -offsetBefore;
      if (snap > maxSnap)
        return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow)
      swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded)
        swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = (index) => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach((slide2) => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual)
          break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0)
    swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
function updateSlidesProgress(translate2 = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0)
    return;
  if (typeof slides[0].swiperSlideOffset === "undefined")
    swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl)
    offsetCenter = translate2;
  slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded)
      progress = 0;
    if (isEndRounded)
      progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1)
      progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
    swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = (selector) => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach((slideEl) => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0)
        slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length)
        slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (lazyEl)
      lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index])
    return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl)
    imageEl.removeAttribute("loading");
};
const preload = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params)
    return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0)
    return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex !== activeIndex && realIndex > slideIndexLastInView)
        unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(slideIndexLastInView - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && i > slideIndexLastInView)
        unlazy(swiper, i);
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined")
      activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = (aIndex) => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (previousRealIndex !== realIndex) {
    swiper.emit("realIndexChange");
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide2 = e.closest(`.${params.slideClass}, swiper-slide`);
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
const update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl)
    currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2)
    newTranslate = minTranslate2;
  else if (translateBounds && translate2 < maxTranslate2)
    newTranslate = maxTranslate2;
  else
    newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
const translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex)
      dir = "next";
    else if (activeIndex < previousIndex)
      dir = "prev";
    else
      dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode)
    return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode)
    return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
const transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0)
    slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length)
    snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate2 < swiper.translate && translate2 < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex)
    direction = "next";
  else if (slideIndex < activeIndex)
    direction = "prev";
  else
    direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed)
          return;
        if (e.target !== this)
          return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled)
    return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding)
      return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0)
      return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0)
      prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating)
      return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
const slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix({
  slideRealIndex,
  slideTo: slideTo2 = true,
  direction,
  setTranslate: setTranslate2,
  activeSlideIndex,
  byController,
  byMousewheel
} = {}) {
  const swiper = this;
  if (!swiper.params.loop)
    return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach((index) => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach((index) => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
          }
        }
      } else {
        if (setTranslate2) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      slideTo: false,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach((c) => {
        if (!c.destroyed && c.params.loop)
          c.loopFix(loopParams);
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix(loopParams);
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
    return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach((slideEl) => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach((slideEl) => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach((slideEl) => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
const loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
    return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
const grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow())
      return null;
    if (el.assignedSlot)
      el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!swiper.wrapperEl.contains(targetEl))
      return;
  }
  if ("which" in e && e.which === 3)
    return;
  if ("button" in e && e.button > 0)
    return;
  if (data.isTouched && data.isMoved)
    return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler))
      return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0)
    data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0)
    data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1)
    return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
    return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  if (!data.isMoved) {
    if (isLoop) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode)
    return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex((cachedEv) => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (["pointercancel", "pointerout", "pointerleave"].includes(event.type)) {
    const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled)
    return;
  if (!params.simulateTouch && event.pointerType === "mouse")
    return;
  let e = event;
  if (e.originalEvent)
    e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed)
      swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio)
        swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
      else
        swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0)
    return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled)
    return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks)
      e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled)
    return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0)
    swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
let dummyEventAttached = false;
function dummyEventListener() {
}
const events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
const events$1 = {
  attachEvents,
  detachEvents
};
const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
    return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint)
    return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach((prop) => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend$1(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate(realIndex);
    swiper.updateSlides();
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base = "window", containerEl) {
  if (!breakpoints2 || base === "container" && !containerEl)
    return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map((point) => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
const breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach((item) => {
    if (typeof item === "object") {
      Object.keys(item).forEach((classNames) => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
const classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
const checkOverflow$1 = {
  checkOverflow
};
const defaults$2 = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend$1(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName])
      params[moduleParamName] = {
        enabled: false
      };
    extend$1(allModulesParams, obj);
  };
}
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
let Swiper$1 = class Swiper {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params)
      params = {};
    params = extend$1({}, params);
    if (el && !params.el)
      params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach((containerEl) => {
        const newParams = extend$1({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach((mod) => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend$1({}, defaults$2, allModulesParams);
    swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend$1({}, swiper.params);
    swiper.passedParams = extend$1({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach((eventName) => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled)
      return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled)
      return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min2 = swiper.minTranslate();
    const max2 = swiper.maxTranslate();
    const current = (max2 - min2) * progress + min2;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const cls = swiper.el.className.split(" ").filter((className) => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed)
      return "";
    return slideEl.className.split(" ").filter((className) => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el)
      return;
    const updates = [];
    swiper.slides.forEach((slideEl) => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view = "current", exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize)
            breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed)
      return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate2();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        const slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach((slideEl) => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate)
      swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
      return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted)
      return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.shadowEl) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement ? el : wrapperEl,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized)
      return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false)
      return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", (e) => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute("style");
      wrapperEl.removeAttribute("style");
      if (slides && slides.length) {
        slides.forEach((slideEl) => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend$1(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults$2;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__)
      Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach((m) => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
};
Object.keys(prototypes).forEach((prototypeGroup) => {
  Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
    Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper$1.use([Resize, Observer]);
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = (el) => {
    if (!Array.isArray(el))
      el = [el].filter((e) => !!e);
    return el;
  };
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.shadowRoot.querySelector(el);
      if (res)
        return res;
    }
    if (el) {
      if (typeof el === "string")
        res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res)
      return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON")
          subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update2() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update2();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update: update2,
    init,
    destroy
  });
}
function classesToSelector(classes2 = "") {
  return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = (el) => {
    if (!Array.isArray(el))
      el = [el].filter((e) => !!e);
    return el;
  };
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl)
      return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index)
        return;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        swiper.loopFix({
          direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update2() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0)
          emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0)
          emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render2() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        subEl.innerHTML = paginationHTML || "";
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el)
      return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.shadowRoot.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0)
      return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.filter((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el)
            return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1)
      el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(params.clickableClass);
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets)
      swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el)
      return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render2();
      update2();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update2();
    }
  });
  on("snapIndexChange", () => {
    update2();
  });
  on("snapGridLengthChange", () => {
    render2();
    update2();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update2();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    let {
      el
    } = swiper.pagination;
    if (!Array.isArray(el))
      el = [el].filter((element) => !!element);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render2();
    update2();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render: render2,
    update: update2,
    init,
    destroy
  });
}
function Autoplay({
  swiper,
  extendParams,
  on,
  emit,
  params
}) {
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl)
      return;
    if (e.target !== swiper.wrapperEl)
      return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl)
      return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed)
        return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start2 = () => {
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
      return;
    if (autoplayTimeLeft < 0)
      autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
      return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByInteraction = true;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse")
      return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter);
    swiper.el.removeEventListener("pointerleave", onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      start2();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
      return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode)
      resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start: start2,
    stop,
    pause,
    resume
  });
}
Swiper$1.use([Navigation, Pagination, Autoplay]);
if (document.querySelector(".swiper-episodes")) {
  new Swiper$1(document.querySelector(".swiper-episodes"), {
    spaceBetween: 20,
    speed: 500,
    initialSlide: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 8,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 3
      },
      1980: {
        slidesPerView: 6,
        slidesPerGroup: 4
      }
    },
    loop: false,
    module: [Navigation]
  });
}
if (document.querySelector(".swiper-season")) {
  new Swiper$1(".swiper-season", {
    spaceBetween: 16,
    speed: 500,
    initialSlide: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 4,
        slidesPerGroup: 1
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 8,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      1440: {
        slidesPerView: 6,
        slidesPerGroup: 3
      },
      1600: {
        slidesPerView: 8,
        slidesPerGroup: 4
      }
    }
  });
}
Swiper$1.use([Navigation, Pagination, Autoplay]);
new Swiper$1(".swiper-spotlight", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".nav-next",
    prevEl: ".nav-prev"
  },
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1e3,
  autoplay: {
    delay: 4e3,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  breakpoints: {
    360: {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    },
    998: {
      pagination: false
    }
  }
});
new Swiper$1(".swiper-trending", {
  spaceBetween: 0,
  speed: 500,
  initialSlide: 0,
  breakpoints: {
    360: {
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    },
    768: {
      slidesPerView: 4,
      pagination: false
    },
    1120: {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: false
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: false
    }
  },
  loop: false,
  navigation: {
    nextEl: ".trending-nav-next",
    prevEl: ".trending-nav-prev"
  }
});
const startSlider = () => {
  var _a2;
  (_a2 = document.querySelectorAll(".swiper-sections")) == null ? void 0 : _a2.forEach((el) => {
    const currentEl = el.dataset.currentSlider;
    const currentType = el.dataset.episodeSlider;
    const navEl = [...document.querySelectorAll(`.navigate-${currentEl} div`)];
    const episode = currentType && currentType == "1";
    let options = {
      spaceBetween: 16,
      speed: 500,
      initialSlide: 0,
      slidesPerGroup: 1,
      breakpoints: {
        360: {
          slidesPerView: 2,
          spaceBetween: 8
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: episode ? 4 : 4
        },
        1440: {
          slidesPerView: episode ? 5 : 5
        },
        1700: {
          slidesPerView: episode ? 7 : 6
        }
      },
      loop: false
    };
    if (navEl[0] && navEl[1]) {
      options = {
        ...options,
        navigation: {
          prevEl: navEl[0],
          nextEl: navEl[1]
        },
        module: [Navigation]
      };
    }
    new Swiper$1(el, options);
    setTimeout(() => {
      const br = document.querySelectorAll("[data-current-slider]");
      br.forEach((sld) => {
        const items = document.querySelectorAll(".swiper-slide .kira-anime");
        items.forEach((el2) => {
          const w = el2.clientWidth;
          el2.style = `padding-block-end: ${w * 0.38 + w}px`;
        });
      });
    }, 100);
  });
};
startSlider();
(_a = document.querySelector("#random-anime")) == null ? void 0 : _a.addEventListener("click", (e) => {
  randomAnime();
});
document.addEventListener("scroll", function(e) {
  var _a2, _b2, _c2, _d2;
  const y = window.scrollY;
  if (y > 75) {
    (_a2 = document.querySelector("#header-data")) == null ? void 0 : _a2.classList.remove("bg-opacity-0");
    (_b2 = document.querySelector("#header-data")) == null ? void 0 : _b2.classList.add("bg-opacity-95");
  } else {
    (_c2 = document.querySelector("#header-data")) == null ? void 0 : _c2.classList.add("bg-opacity-0");
    (_d2 = document.querySelector("#header-data")) == null ? void 0 : _d2.classList.remove("bg-opacity-95");
  }
});
const menutrigger = document.querySelector("[data-sidebar-trigger]");
const menuData = document.querySelector("[data-sidebar]");
const overlaySidebar = document.querySelector("[data-sidebar-overlay]");
if (menutrigger) {
  menutrigger.addEventListener("click", (e) => {
    menuData.classList.toggle("-translate-x-full");
    overlaySidebar.classList.toggle("hidden");
    document.querySelector("[data-sidebar-closer]").addEventListener("click", () => {
      overlaySidebar.classList.remove("block");
      overlaySidebar.classList.add("hidden");
      menuData.classList.add("-translate-x-full");
    });
  });
  overlaySidebar.addEventListener("click", (e) => {
    overlaySidebar.classList.remove("block");
    overlaySidebar.classList.add("hidden");
    menuData.classList.add("-translate-x-full");
  });
}
const dataLoginToggle = document.querySelector("[data-login-toggle]");
const lg = document.querySelector("#login-form");
if (dataLoginToggle) {
  dataLoginToggle.addEventListener("click", (e) => {
    e.preventDefault();
    lg.classList.remove("hidden");
    lg.classList.add("flex");
  });
  document.querySelector("[data-login-overlay]").addEventListener("click", (e) => {
    lg.classList.add("hidden");
    lg.classList.remove("flex");
  });
}
const morebtn = document.querySelector("[data-more-less]");
if (morebtn) {
  morebtn.addEventListener("click", (e) => {
    const isMore = morebtn.dataset.ismore === "true";
    if (isMore) {
      document.querySelector("[data-synopsis]").classList.remove("line-clamp-3");
      morebtn.innerHTML = __("Show less");
      morebtn.dataset.ismore = "false";
    } else {
      document.querySelector("[data-synopsis]").classList.add("line-clamp-3");
      morebtn.innerHTML = __("Show more");
      morebtn.dataset.ismore = "true";
    }
  });
}
const watchListTabs = document.querySelectorAll("[data-watchlist-type]");
if (watchListTabs) {
  watchListTabs.forEach((e) => {
    e.addEventListener("click", (c) => {
      const ctype = c.target.getAttribute("data-watchlist-type");
      watchListTabs.forEach((wl) => {
        if (wl.dataset.watchlistType !== ctype) {
          wl.classList.remove("active");
        } else {
          wl.classList.add("active");
        }
      });
      animewatchlistparam = ctype;
    });
  });
}
let loginButton = document.querySelector("[data-login-button]");
let registerButton = document.querySelector("[data-register-button]");
let recoveryButton = document.querySelector("[data-recovery-button]");
const saveNewButton = document.querySelector("[data-reset-button]");
let toLogin = document.querySelector(
  '[data-kiranime-modal="data-login-template"]'
);
const kiranimeModals = document.querySelectorAll("[data-kiranime-modal]");
kiranimeModals.forEach((el) => {
  el.addEventListener("click", (e) => {
    kiranimeModals.forEach(
      (e2) => document.querySelector(`[${e2.dataset.kiranimeModal}]`).classList.add("hidden")
    );
    document.querySelector(`[${e.target.dataset.kiranimeModal}]`).classList.remove("hidden");
  });
});
if (loginButton) {
  loginButton.addEventListener("click", async (lg2) => {
    var _a2, _b2, _c2, _d2, _e2;
    lg2.preventDefault();
    loginButton.innerHTML = `<span class="animate-pulse">${__(
      "Loading..."
    )}</span>`;
    try {
      if (use_captcha) {
        const token = (_a2 = document.querySelector(
          '[data-login-template] [name="g-recaptcha-response"]'
        )) == null ? void 0 : _a2.value;
        if (!token) {
          throw new Error(__("Please check the captcha box.", "kiranime"));
        }
        const valid = await apiFetch({
          path: "recaptcha",
          method: "POST",
          data: {
            session: token
          }
        });
        if (!valid || !valid.status) {
          throw new Error(valid.message);
        }
      }
      const username = (_b2 = document.querySelector("[name='username']")) == null ? void 0 : _b2.value;
      const password = (_c2 = document.querySelector("[name='password']")) == null ? void 0 : _c2.value;
      const nonce = (_d2 = document.querySelector('[name="login_nonce"]')) == null ? void 0 : _d2.value;
      const rememberMe = (_e2 = document.querySelector(
        '[name="remember_me"]'
      )) == null ? void 0 : _e2.checked;
      const res = await apiFetch({
        path: "auth/login",
        data: { username, password, nonce, rememberMe },
        method: "POST"
      });
      setAlert$1(res.message, "success");
      setTimeout(() => {
        location.reload();
      }, 500);
    } catch (error) {
      setAlert$1(error.message, "error");
    } finally {
      loginButton.innerHTML = __("Log Me In");
    }
  });
}
if (registerButton) {
  registerButton.addEventListener("click", async (e) => {
    var _a2, _b2, _c2, _d2, _e2, _f;
    e.preventDefault();
    registerButton.setAttribute("disabled", "true");
    registerButton.innerHTML = `<span class="animate-pulse">${__(
      "Loading.."
    )}</span>`;
    try {
      if (use_captcha) {
        const token = (_a2 = document.querySelector(
          '[data-register-template] [name="g-recaptcha-response"]'
        )) == null ? void 0 : _a2.value;
        if (!token) {
          throw new Error(__("Please check the captcha box.", "kiranime"));
        }
        const valid = await apiFetch({
          path: "recaptcha",
          method: "POST",
          data: {
            session: token
          }
        });
        if (!valid || !valid.status) {
          throw new Error(valid.message);
        }
      }
      const username = (_b2 = document.querySelector(
        "[name='register_username']"
      )) == null ? void 0 : _b2.value;
      const password = (_c2 = document.querySelector(
        "[name='register_password']"
      )) == null ? void 0 : _c2.value;
      const confirm = (_d2 = document.querySelector(
        "[name='register_confirm_password']"
      )) == null ? void 0 : _d2.value;
      const nonce = (_e2 = document.querySelector("[name='register_nonce']")) == null ? void 0 : _e2.value;
      const email = (_f = document.querySelector("[name='register_email']")) == null ? void 0 : _f.value;
      if (password !== confirm) {
        document.querySelector("[data-register-error-info]").innerHTML = __(
          "Password not the same!",
          "kiranime"
        );
      }
      const regdata = await apiFetch({
        path: "auth/register",
        data: {
          username,
          password,
          email,
          nonce
        },
        method: "POST"
      });
      if (!(regdata == null ? void 0 : regdata.success)) {
        throw new Error(
          regdata.message || __("Something went wrong.", "kiranime")
        );
      }
      setSuccess(__("Register successful!", "kiranime"));
      setSuccess(__("Trying to Login..!", "kiranime"));
      const reqLogin = await apiFetch({
        path: "auth/login",
        data: {
          password,
          username,
          nonce: document.querySelector("[name='login_nonce']").value
        },
        method: "POST"
      });
      if (!reqLogin) {
        toLogin.click();
        return;
      }
      registerButton.innerHTML = `<span class="text-xs">${reqLogin.message}</span>`;
      setTimeout(() => {
        setSuccess(__("Reloading..", "kiranime"));
        location.reload();
      }, 500);
      return;
    } catch (error) {
      setError(error.message);
    } finally {
      registerButton.removeAttribute("disabled");
      registerButton.innerHTML = __("Register");
    }
  });
}
if (recoveryButton) {
  recoveryButton.addEventListener("click", async (e) => {
    var _a2;
    e.preventDefault();
    const getcode = document.querySelector("[data-recovery-button]");
    const getCodeInput = document.querySelector('input[name="userlogin"]');
    const verifyInput = document.querySelectorAll(
      "[data-input-recovery-verification]"
    );
    const setloading = () => {
      getcode.setAttribute("disabled", "true");
      getcode.innerHTML = `<span class="animate-pulse">${__(
        "Loading.."
      )}</span>`;
    };
    const endloading = () => {
      getcode.removeAttribute("disabled");
      getcode.innerHTML = __("Get Verification Code");
    };
    try {
      setloading();
      if (use_captcha) {
        const token = (_a2 = document.querySelector(
          '[data-recovery-template] [name="g-recaptcha-response"]'
        )) == null ? void 0 : _a2.value;
        if (!token) {
          throw new Error(__("Please check the captcha box.", "kiranime"));
        }
        const valid = await apiFetch({
          path: "recaptcha",
          method: "POST",
          data: {
            session: token
          }
        });
        if (!valid || !valid.status) {
          throw new Error(valid.message);
        }
      }
      const userlogin = getCodeInput == null ? void 0 : getCodeInput.value;
      const req = await apiFetch({
        path: "auth/recovery",
        data: {
          userlogin
        },
        method: "POST"
      });
      if (!req.status) {
        throw new Error(req.message);
      }
      setAlert$1(req.message, "success");
      getcode.classList.add("hidden");
      getCodeInput.classList.add("hidden");
      verifyInput.forEach((e2) => e2.classList.remove("hidden"));
      saveNewButton.classList.remove("hidden");
      if (use_captcha && grecaptcha) {
        grecaptcha.reset(2);
      }
    } catch (error) {
      setAlert$1(error.message, "error");
    } finally {
      endloading();
    }
  });
}
if (saveNewButton) {
  saveNewButton.addEventListener("click", async (e) => {
    var _a2;
    e.preventDefault();
    try {
      saveNewButton.setAttribute("disabled", "true");
      saveNewButton.innerHTML = `<span class="animate-pulse">${__(
        "Loading..",
        "kiranime"
      )}</span>`;
      if (use_captcha) {
        const token = (_a2 = document.querySelector(
          '[data-recovery-template] [name="g-recaptcha-response"]'
        )) == null ? void 0 : _a2.value;
        if (!token) {
          throw new Error(__("Please check the captcha box.", "kiranime"));
        }
        const valid = await apiFetch({
          path: "recaptcha",
          method: "POST",
          data: {
            session: token
          }
        });
        if (!valid || !valid.status) {
          throw new Error(valid.message);
        }
      }
      const data = {
        verification_token: document.querySelector(
          'input[name="verification_code"]'
        ).value,
        new_password: document.querySelector(
          'input[name="new_password_recovery"]'
        ).value,
        repeat_password: document.querySelector(
          'input[name="repeat_password_recovery"]'
        ).value,
        userlogin: document.querySelector('input[name="userlogin"]').value
      };
      if (!data.new_password || !data.repeat_password || data.new_password !== data.repeat_password) {
        throw new Error(__("Password not the same!", "kiranime"));
      }
      const req = await apiFetch({
        path: "auth/reset",
        data,
        method: "POST"
      });
      if (!req.status) {
        throw new Error(req.message);
      }
      setAlert$1(req.message, "success");
      document.querySelector('[data-kiranime-modal="data-login-template"]').click();
    } catch (error) {
      setAlert$1(error.message, "error");
    } finally {
      saveNewButton.removeAttribute("disabled");
      saveNewButton.innerHTML = __("Save");
    }
  });
}
const searchInput = document.querySelector("[data-search-ajax-input]");
const result = document.querySelector("[data-search-ajax-result]");
const resultArea = document.querySelector("[data-search-result-area]");
const viewAll = document.querySelector("[data-search-view-all]");
const searchMobileInput = document.querySelector("[data-mobile-search-input]");
const resultMobile = document.querySelector("[data-mobile-search-result]");
const resultAreaMobile = document.querySelector(
  "[data-mobile-search-result-area]"
);
document.querySelector("[data-mobile-search-view-all]");
const mobileTrigger = document.querySelector("[data-mobile-search-trigger]");
const mobileFields = document.querySelector("[data-mobile-search-status]");
let searchTM, advancedSearchPage;
const searchRequest = async (query, resultEl, resultAreaEl) => {
  try {
    if (!query) {
      resultEl.classList.add("hidden");
    }
    if (!advancedSearchPage) {
      advancedSearchPage = viewAll.getAttribute("href");
    }
    viewAll.setAttribute("href", `${advancedSearchPage}?s_keyword=${query}`);
    const res = await apiFetch({
      path: `anime/search?query=${query}`
    });
    const html = res.result;
    resultAreaEl.innerHTML = html;
    resultEl.classList.remove("hidden");
  } catch (error) {
    console.log(error);
    setError(__("Something went wrong."));
  }
};
if (searchInput || searchMobileInput) {
  mobileTrigger == null ? void 0 : mobileTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    const val = mobileFields.dataset.mobileSearchStatus;
    if (val === "0") {
      mobileFields.classList.remove(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none"
      );
      mobileFields.classList.add("translate-y-0");
      mobileFields.dataset.mobileSearchStatus = "1";
    } else {
      mobileFields.classList.remove("translate-y-0");
      mobileFields.classList.add(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none"
      );
      mobileFields.dataset.mobileSearchStatus = "0";
    }
  });
  searchMobileInput == null ? void 0 : searchMobileInput.addEventListener("keyup", (e) => {
    clearTimeout(searchTM);
    searchTM = setTimeout(
      async () => searchRequest(e.target.value, resultMobile, resultAreaMobile),
      500
    );
  });
  searchInput == null ? void 0 : searchInput.addEventListener("keyup", (e) => {
    clearTimeout(searchTM);
    searchTM = setTimeout(
      async () => searchRequest(e.target.value, result, resultArea),
      500
    );
  });
  document.addEventListener("click", (e) => {
    if (!result.contains(e.target) || !resultMobile.contains(e.target)) {
      result.classList.add("hidden");
      resultMobile.classList.add("hidden");
    }
    if (!mobileFields.contains(e.target) && !e.target.closest("[data-mobile-search-trigger]")) {
      mobileFields.classList.add(
        "-translate-y-full",
        "opacity-0",
        "pointer-events-none"
      );
      mobileFields.dataset.mobileSearchStatus = "0";
    }
  });
}
const genreInput = document.querySelector("[data-genre-input]");
if (genreInput) {
  let genres = [];
  genres = genreInput.value ? genreInput.value.split(",") : [];
  const dataGenres = document.querySelectorAll("[data-genre-slug]");
  dataGenres.forEach((g) => {
    g.addEventListener("click", (e) => {
      const slug = e.target.getAttribute("data-genre-slug");
      const gi = genres.findIndex((gen) => gen === slug);
      if (gi !== -1) {
        e.target.classList.remove("ring-accent", "text-accent");
        e.target.classList.add("ring-gray-500");
        genres == null ? void 0 : genres.splice(gi, 1);
        genreInput.value = genres.join(",");
      } else {
        e.target.classList.remove("ring-gray-500");
        e.target.classList.add("ring-accent", "text-accent");
        genres == null ? void 0 : genres.push(slug);
        genreInput.value = genres.join(",");
      }
    });
  });
}
const changePassFields = document.querySelector(
  "[data-change-password-fields]"
);
const changePassTrigger = document.querySelector("[data-show-change-password]");
if (changePassTrigger) {
  changePassTrigger.addEventListener("click", (e) => {
    changePassFields.classList.toggle("hidden");
  });
}
const showAllButton = document.querySelector("[data-show-all-button]");
const closeCharButton = document.querySelector("[data-hide-all-button]");
if (showAllButton) {
  const parent = document.querySelector("[data-characters]");
  showAllButton.addEventListener("click", (e) => {
    parent.classList.add("active");
    showAllButton.classList.remove("flex");
    showAllButton.classList.add("hidden");
    closeCharButton.classList.add("flex");
    closeCharButton.classList.remove("hidden");
  });
  closeCharButton.addEventListener("click", (e) => {
    parent.classList.remove("active");
    showAllButton.classList.add("flex");
    showAllButton.classList.remove("hidden");
    closeCharButton.classList.remove("flex");
    closeCharButton.classList.add("hidden");
  });
}
(_b = document.querySelector("[data-comment-login-button]")) == null ? void 0 : _b.addEventListener("click", () => {
  document.querySelector("[data-login-toggle]").click();
});
(_c = document.querySelectorAll("[data-alphabet-link]")) == null ? void 0 : _c.forEach((e) => {
  e.addEventListener("click", (f) => {
    const target = f.target.dataset.alphabetLink;
    location.href = target;
  });
});
Swiper$1.use([Navigation, Pagination, Autoplay]);
(_d = document.querySelectorAll(".swiper-sections")) == null ? void 0 : _d.forEach((el) => {
  const currentEl = el.dataset.currentSlider;
  const navEl = [...document.querySelectorAll(`.navigate-${currentEl} div`)];
  const isLoop = el.dataset.isLoop && el.dataset.isLoop === "1";
  const episode = el.dataset.isEpisode && el.dataset.isEpisode === "1";
  let options = {
    spaceBetween: 20,
    speed: 500,
    initialSlide: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    slidesPerGroup: 1,
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 4
      },
      1024: {
        slidesPerView: episode ? 4 : 5
      },
      1440: {
        slidesPerView: episode ? 5 : 6
      },
      1980: {
        slidesPerView: episode ? 7 : 8
      }
    },
    loop: isLoop
  };
  if (navEl[0] && navEl[1]) {
    options = {
      ...options,
      navigation: {
        prevEl: navEl[0],
        nextEl: navEl[1]
      },
      module: [Navigation, Pagination]
    };
  }
  new Swiper$1(el, options);
});
const _hoisted_1$c = { class: "fixed inset-0 w-screen h-screen flex items-center justify-center text-white z-999 before:bg-primary before:absolute before:z-20 before:inset-0 before:bg-opacity-25 before:w-full before:h-full" };
const _hoisted_2$c = { class: "block relative p-6 max-w-md bg-primary rounded-lg border border-secondary shadow-md z-30" };
const _hoisted_3$c = { class: "mb-2 text-sm font-semibold tracking-tight dark:text-white" };
const _hoisted_4$b = {
  key: 0,
  class: "text-xs text-error block p-2 font-semibold"
};
const _hoisted_5$b = { class: "flex justify-end items-center gap-5 py-2" };
const _sfc_main$c = {
  __name: "cards",
  props: ["title", "episode", "api"],
  emits: ["closeReport"],
  setup(__props, { emit }) {
    const props = __props;
    const value = ref("");
    const isEmpty = ref(false);
    const reportTheProblem = async () => {
      var _a2, _b2;
      if (!value.value) {
        isEmpty.value = true;
        setTimeout(() => {
          isEmpty.value = false;
        }, 5e3);
        return;
      }
      const response = await props.api({
        path: "episode/report",
        data: {
          data: {
            title: (_b2 = (_a2 = props.episode) == null ? void 0 : _a2.post) == null ? void 0 : _b2.post_title,
            id: props.episode.id,
            value: value.value,
            guid: props.episode.post.guid
          }
        },
        method: "POST"
      });
      if (!response) {
        setError(__("Something went wrong."));
        return;
      }
      setSuccess(__("Report submitted."));
      emit("closeReport");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$c, [
          createBaseVNode("h5", _hoisted_3$c, toDisplayString(__props.title), 1),
          withDirectives(createBaseVNode("textarea", {
            id: "report-value",
            rows: "4",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            class: "px-2 w-full text-sm text-white bg-secondary border-0 focus:ring-0",
            required: "true"
          }, null, 512), [
            [vModelText, value.value]
          ]),
          isEmpty.value ? (openBlock(), createElementBlock("span", _hoisted_4$b, toDisplayString(unref(__)("Please fill out the form.", "kiranime")), 1)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$b, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => emit("closeReport")),
              class: "inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-error-1 rounded-lg focus:ring-2 focus:ring-error hover:bg-error-2"
            }, toDisplayString(unref(__)("Cancel", "kiranime")), 1),
            createBaseVNode("button", {
              onClick: reportTheProblem,
              class: "inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-accent-3 rounded-lg focus:ring-2 focus:ring-accent hover:bg-accent-4"
            }, toDisplayString(unref(__)("Submit", "kiranime")), 1)
          ])
        ])
      ]);
    };
  }
};
const Player_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$b = ["innerHTML"];
const _hoisted_2$b = {
  key: 1,
  class: "aspect-w-16 aspect-h-9"
};
const _hoisted_3$b = ["src", "title"];
const _hoisted_4$a = {
  key: 1,
  class: "aspect-w-16 aspect-h-9 flex items-center justify-center img-obj-contain"
};
const _hoisted_5$a = ["src"];
const _hoisted_6$9 = {
  class: "relative h-12 w-full flex items-center justify-between",
  style: { "background": "#08090b" }
};
const _hoisted_7$a = { class: "flex items-center min-w-max gap-1 mx-2 lg:w-4/12" };
const _hoisted_8$9 = {
  key: 0,
  class: "material-icons-round text-2xl"
};
const _hoisted_9$9 = {
  key: 1,
  class: "material-icons-round text-2xl"
};
const _hoisted_10$8 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-lg" }, " report_problem ", -1);
const _hoisted_11$7 = { class: "flex items-center gap-2 min-w-max px-5" };
const _hoisted_12$7 = ["title", "href"];
const _hoisted_13$7 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl" }, " fast_rewind ", -1);
const _hoisted_14$7 = [
  _hoisted_13$7
];
const _hoisted_15$7 = ["title", "href"];
const _hoisted_16$5 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl" }, " fast_forward ", -1);
const _hoisted_17$5 = [
  _hoisted_16$5
];
const _hoisted_18$5 = ["data-add-to-list-player"];
const _hoisted_19$4 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl text-white text-opacity-75 hover:text-opacity-100" }, " playlist_add_circle ", -1);
const _hoisted_20$4 = [
  _hoisted_19$4
];
const _hoisted_21$4 = { class: "w-full bg-darker" };
const _hoisted_22$3 = { class: "w-full lg:flex items-center p-4" };
const _hoisted_23$3 = { class: "block" };
const _hoisted_24$3 = {
  key: 0,
  class: "font-semibold py-2 lg:py-0 text-accent-2 lg:text-text-color block"
};
const _hoisted_25$3 = {
  key: 1,
  class: "font-semibold py-2 lg:py-0 text-accent-2 lg:text-text-color block"
};
const _hoisted_26$3 = { class: "block" };
const _hoisted_27$3 = { class: "flex items-center flex-wrap gap-4 px-5 h-1/2 rounded-t shadow py-2.5 bg-primary border-b border-dashed border-secondary" };
const _hoisted_28$3 = { class: "font-semibold w-fit flex gap-1 items-center py-1" };
const _hoisted_29$3 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-lg" }, " closed_caption ", -1);
const _hoisted_30$3 = ["onClick"];
const _hoisted_31$3 = { class: "flex items-center flex-wrap gap-4 px-5 rounded-b h-1/2 shadow py-2.5 bg-primary border-t border-dashed border-secondary" };
const _hoisted_32$3 = { class: "font-semibold w-fit flex gap-1 py-1 items-center" };
const _hoisted_33$3 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-lg" }, " mic ", -1);
const _hoisted_34$3 = ["onClick"];
const _hoisted_35$3 = {
  key: 0,
  class: "p-4 w-full"
};
const _hoisted_36$3 = { class: "text-xs lg:text-sm px-4 py-3 leading-6 relative bg-accent-3 rounded shadow-sm" };
const _hoisted_37$3 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, "×", -1);
const _hoisted_38$1 = [
  _hoisted_37$3
];
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "text-base mr-1" }, "🚀", -1);
const _hoisted_40 = { id: "schedule-date" };
const _sfc_main$b = {
  __name: "Player",
  props: ["configs", "noplayer", "type"],
  setup(__props) {
    const props = __props;
    const loading = ref(true);
    const Api = inject("Api");
    const expanded = ref(false);
    const currentPlayer = ref(null);
    const translation = reactive({
      report: __("Report Problem"),
      previous: __("Previous episode"),
      next: __("Next episode"),
      add_wl: __("Add to watchlist"),
      watching: __("You're watching"),
      episode: (c) => sprintf(__("Episode %d"), c),
      not_working: __(
        "If current player not working, select other server."
      ),
      sub: __("SUB"),
      dub: __("DUB"),
      estimate: __("Estimated the next episode will come at"),
      explain: __(
        "Please explain the problem you found on this episode."
      )
    });
    const watchlist_btn = shallowRef([]);
    const procPlayers = ref([]);
    const nextepisode = ref("");
    const openReport = ref(false);
    const episodeData = ref({
      next: "",
      prev: ""
    });
    const listdata = ref([
      {
        key: "plan_to_watch",
        name: "Plan to Watch"
      },
      {
        key: "watching",
        name: "Watching"
      },
      {
        key: "on_hold",
        name: "On-Hold"
      },
      {
        key: "completed",
        name: "Completed"
      },
      {
        key: "dropped",
        name: "Dropped"
      },
      {
        key: "remove",
        name: "Remove"
      }
    ]);
    const init = watchPostEffect((ocl) => {
      processPlayer();
      ocl(() => loading.value = false);
    });
    const processPlayer = () => {
      var _a2, _b2, _c2, _d2, _e2;
      if (watchlist_types) {
        listdata.value = typeof watchlist_types === "string" ? JSON.parse(watchlist_types) : watchlist_types;
      }
      if ((_a2 = props.configs.anime.episodes) == null ? void 0 : _a2.length) {
        const eps = (_b2 = props.configs.anime.episodes) == null ? void 0 : _b2.reverse();
        const fe = eps == null ? void 0 : eps.findIndex(
          (e) => e.meta.number == props.configs.current_episode
        );
        episodeData.value = {
          next: (_c2 = eps[fe + 1]) == null ? void 0 : _c2.url,
          prev: (_d2 = eps[fe - 1]) == null ? void 0 : _d2.url
        };
      }
      if (props.configs.anime.scheduled) {
        const r = new Date(props.configs.anime.scheduled.data.post_date);
        nextepisode.value = r.toLocaleDateString() + " " + r.toLocaleTimeString();
      }
      if (((_e2 = props.configs.episode.players) == null ? void 0 : _e2.length) > 0) {
        procPlayers.value = props.configs.episode.players.map((e) => {
          return {
            ...e,
            provider: e.provider ? e.provider : e.host
          };
        });
        currentPlayer.value = procPlayers.value[0];
      }
      init();
    };
    const expand = () => {
      expanded.value = !expanded.value;
      document.querySelector("[data-anime-info]").classList.toggle("hidden", expanded.value);
      document.querySelector("[data-episode-player-container]").classList.toggle("xl:w-3/4", !expanded.value);
    };
    const selectIndex = (index) => {
      currentPlayer.value = procPlayers.value[index];
    };
    watch(watchlist_btn, (e) => {
      if (e) {
        tippy(e, {
          content: (ref2) => {
            const id = ref2.dataset.addToListPlayer;
            const content = addToListTooltip(id);
            return content;
          },
          interactive: true,
          animation: "scale",
          placement: "auto-start",
          trigger: "click",
          arrow: true
        });
      }
    });
    return (_ctx, _cache) => {
      var _a2, _b2;
      return !loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        currentPlayer.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          currentPlayer.value.url.match(/<|>/gi) ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: currentPlayer.value.url,
            class: "aspect-w-16 aspect-h-9 flex items-center justify-center"
          }, null, 8, _hoisted_1$b)) : (openBlock(), createElementBlock("div", _hoisted_2$b, [
            createBaseVNode("iframe", {
              src: currentPlayer.value.url,
              title: __props.configs.episode.post.post_title,
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: ""
            }, null, 8, _hoisted_3$b)
          ]))
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_4$a, [
          createBaseVNode("img", {
            src: __props.configs.noplayer
          }, null, 8, _hoisted_5$a)
        ])),
        createBaseVNode("div", _hoisted_6$9, [
          createBaseVNode("div", _hoisted_7$a, [
            createBaseVNode("span", {
              onClick: expand,
              class: "w-fit px-2 text-xs font-medium py-1 flex items-center cursor-pointer"
            }, [
              !expanded.value ? (openBlock(), createElementBlock("span", _hoisted_8$9, " fullscreen ")) : (openBlock(), createElementBlock("span", _hoisted_9$9, " fullscreen_exit "))
            ]),
            createBaseVNode("span", {
              onClick: _cache[0] || (_cache[0] = ($event) => openReport.value = !openReport.value),
              class: "w-fit hover:bg-secondary hover:rounded-md px-2 text-[11px] gap-1 font-medium py-1 flex items-center cursor-pointer"
            }, [
              _hoisted_10$8,
              createTextVNode(" " + toDisplayString(translation["report"]), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11$7, [
            !__props.type || __props.type === "series" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("a", {
                title: translation["previous"],
                class: normalizeClass(["w-full px-2 text-xs font-medium py-1 cursor-pointer flex items-center", episodeData.value.prev ? "" : "opacity-50"]),
                href: episodeData.value.prev
              }, _hoisted_14$7, 10, _hoisted_12$7),
              createBaseVNode("a", {
                title: translation["next"],
                class: normalizeClass(["w-full px-2 text-xs font-medium py-1 cursor-pointer flex items-center", episodeData.value.next ? "" : "opacity-50"]),
                href: episodeData.value.next
              }, _hoisted_17$5, 10, _hoisted_15$7)
            ], 64)) : createCommentVNode("", true),
            createBaseVNode("span", {
              ref_key: "watchlist_btn",
              ref: watchlist_btn,
              "data-add-to-list-player": props.configs.anime.anime_id,
              class: "w-full px-2 text-xs font-medium py-1 cursor-pointer flex items-center"
            }, _hoisted_20$4, 8, _hoisted_18$5)
          ])
        ]),
        createBaseVNode("div", _hoisted_21$4, [
          createBaseVNode("div", _hoisted_22$3, [
            createBaseVNode("div", {
              class: normalizeClass([[expanded.value ? "lg:w-1/5" : "lg:w-1/3 xl:w-1/4"], "w-full lg:bg-accent-3 p-2 text-xs flex-grow-0 text-center rounded shadow mb-2 lg:mb-0 space-y-2 lg:mr-5"])
            }, [
              createBaseVNode("span", _hoisted_23$3, toDisplayString(translation.watching), 1),
              !__props.type || __props.type === "series" ? (openBlock(), createElementBlock("span", _hoisted_24$3, toDisplayString(translation.episode((_b2 = (_a2 = props.configs.episode) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.number)), 1)) : (openBlock(), createElementBlock("span", _hoisted_25$3, toDisplayString(props.configs.anime.post.post_title), 1)),
              createBaseVNode("span", _hoisted_26$3, toDisplayString(translation.not_working), 1)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([[expanded.value ? "lg:w-4/5" : "lg:w-2/3 xl:w-3/4"], "w-full lg:w-2/3 flex-auto font-montserrat rounded shadow h-fit text-xs"])
            }, [
              createBaseVNode("div", _hoisted_27$3, [
                createBaseVNode("span", _hoisted_28$3, [
                  _hoisted_29$3,
                  createTextVNode(" " + toDisplayString(translation.sub) + ": ", 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(procPlayers.value, (provider, pindex) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: provider.provider
                  }, [
                    provider.type.toLowerCase() === "sub" && provider.url ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      onClick: ($event) => selectIndex(pindex),
                      class: normalizeClass([
                        "px-2 py-1 w-fit cursor-pointer rounded-sm",
                        currentPlayer.value.provider === provider.provider && currentPlayer.value.type === provider.type ? "bg-accent-3 shadow-md drop-shadow" : "bg-secondary"
                      ])
                    }, toDisplayString(provider.provider), 11, _hoisted_30$3)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_31$3, [
                createBaseVNode("span", _hoisted_32$3, [
                  _hoisted_33$3,
                  createTextVNode(" " + toDisplayString(translation.dub) + ":", 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(procPlayers.value, (provider, pindex) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: provider.provider
                  }, [
                    provider.type.toLowerCase() === "dub" && provider.url ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      onClick: ($event) => selectIndex(pindex),
                      class: normalizeClass([
                        "px-2 py-1 w-fit cursor-pointer rounded-sm",
                        currentPlayer.value.provider === provider.provider && currentPlayer.value.type === provider.type ? "bg-accent-3  shadow-md drop-shadow" : "bg-secondary"
                      ])
                    }, toDisplayString(provider.provider), 11, _hoisted_34$3)) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])
            ], 2)
          ]),
          nextepisode.value ? (openBlock(), createElementBlock("div", _hoisted_35$3, [
            createBaseVNode("div", _hoisted_36$3, [
              createBaseVNode("button", {
                type: "button",
                class: "close border-none outline-none opacity-50 text-3xl absolute right-3 top-1 lg:top-1/2 lg:transform lg:translate-x-1/2",
                onClick: _cache[1] || (_cache[1] = ($event) => nextepisode.value = "")
              }, _hoisted_38$1),
              _hoisted_39,
              createTextVNode(" " + toDisplayString(translation.estimate) + " ", 1),
              createBaseVNode("span", _hoisted_40, toDisplayString(nextepisode.value), 1)
            ])
          ])) : createCommentVNode("", true)
        ]),
        openReport.value ? (openBlock(), createBlock(_sfc_main$c, {
          key: 2,
          title: translation.explain,
          episode: __props.configs.episode,
          api: unref(Api),
          onCloseReport: _cache[2] || (_cache[2] = ($event) => openReport.value = !openReport.value)
        }, null, 8, ["title", "episode", "api"])) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true);
    };
  }
};
const Episode_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$a = {
  key: 0,
  class: "xl:flex items-start xl:px-4"
};
const _hoisted_2$a = { class: "w-full h-full p-0 bg-gray-900" };
const _hoisted_3$a = {
  key: 0,
  class: "bg-primary lg:absolute inset-y-0 left-10 xl:left-0 lg:max-w-xs w-full h-full overflow-hidden lg:min-h-300"
};
const _hoisted_4$9 = { class: "h-12 bg-overlay bg-opacity-5 lg:bg-darker lg:bg-opacity-100 w-full text-sm font-semibold flex items-center justify-between px-2 lg:px-4 relative z-20" };
const _hoisted_5$9 = { class: "w-7/12 relative" };
const _hoisted_6$8 = ["placeholder"];
const _hoisted_7$9 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-3 h-3 absolute top-2 left-2"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
  })
], -1);
const _hoisted_8$8 = {
  "data-episode-list-container": "",
  class: "eplist-container overflow-y-scroll scroll-bar-custom"
};
const _hoisted_9$8 = { class: "lg:min-h-screen pb-16" };
const _hoisted_10$7 = ["data-episode-list-index", "href", "title"];
const _hoisted_11$6 = { class: "flex items-center gap-4 flex-grow" };
const _hoisted_12$6 = { class: "w-[30px] flex-shrink-0 text-xs font-medium" };
const _hoisted_13$6 = { class: "flex-grow line-clamp-1 text-xs font-medium" };
const _hoisted_14$6 = {
  "data-anime-info": "",
  class: "w-full transition-all duration-200 ease-in-out flex flex-col lg:flex-row xl:flex-col justify-between lg:px-10 px-5 py-10 xl:w-1/4 xl:p-0 xl:pl-5"
};
const _hoisted_15$6 = { class: "flex xl:w-full xl:flex-col order-2 lg:order-1 lg:gap-5 gap-2 lg:w-9/12 w-full py-5 lg:py-0 lg:flex-shrink-0" };
const _hoisted_16$4 = ["src", "alt"];
const _hoisted_17$4 = { class: "text-xs font-medium pr-5 xl:px-0" };
const _hoisted_18$4 = ["href"];
const _hoisted_19$3 = { class: "font-semibold text-base xl:text-xl leading-relaxed line-clamp-2" };
const _hoisted_20$3 = { class: "flex items-center gap-2 my-1 text-xs" };
const _hoisted_21$3 = { class: "space-x-1 text-xs" };
const _hoisted_22$2 = {
  key: 0,
  class: "p-1 bg-white rounded text-black font-medium"
};
const _hoisted_23$2 = { class: "p-1 uppercase rounded border border-white font-medium" };
const _hoisted_24$2 = {
  key: 2,
  class: "p-1 rounded border border-white font-medium"
};
const _hoisted_25$2 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "w-1 h-1 bg-gray-500 rounded-full" })
], -1);
const _hoisted_26$2 = ["href"];
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "w-1 h-1 bg-gray-500 rounded-full" })
], -1);
const _hoisted_28$2 = { class: "lg:line-clamp-6 overflow-y-scroll h-20 lg:h-auto inline-block" };
const _hoisted_29$2 = { class: "w-full xl:mt-5 lg:w-3/12 xl:w-full flex-shrink-0 bg-primary bg-opacity-40 rounded p-4 flex flex-col justify-evenly max-h-max order-1 lg:order-2 pb-0" };
const _hoisted_30$2 = { class: "flex items-center justify-between gap-2" };
const _hoisted_31$2 = { class: "text-sm flex items-center gap-2" };
const _hoisted_32$2 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl text-yellow-300" }, " star_rate ", -1);
const _hoisted_33$2 = { class: "text-sm font-semibold" };
const _hoisted_34$2 = { class: "block w-full text-center text-sm font-semibold leading-loose my-2" };
const _hoisted_35$2 = { class: "flex items-center" };
const _hoisted_36$2 = ["onClick"];
const _hoisted_37$2 = ["innerHTML"];
const _sfc_main$a = {
  __name: "Episode",
  setup(__props) {
    let loading = ref(true);
    let configs = ref(inject("config"));
    const Api = inject("Api");
    let adata = ref(null);
    let edata = ref(null);
    let currentId = ref(null);
    let searchEpisode = ref("");
    let voteData = ref(null);
    const postEffect = watchPostEffect((ocl) => {
      initEpisode();
      ocl(() => {
        loading.value = false;
      });
    });
    const translation = reactive({
      vote_now: __("Vote Now!"),
      vote_count: (c) => sprintf(__("( %d Voted)"), c),
      rate_this: __("Rate this anime!"),
      episode_number: __("Episode number"),
      episode_list: __("Episode Lists")
    });
    const initEpisode = () => {
      adata.value = configs.value.anime;
      voteData.value = configs.value.anime.vote;
      edata.value = configs.value.episode;
      currentId.value = configs.value.episode.id;
      postEffect();
    };
    const getTaxUrl = (tax) => {
      return `${location.origin}/${tax == null ? void 0 : tax.taxonomy}/${tax == null ? void 0 : tax.slug}`;
    };
    function scrollParentToChild(parent, child) {
      if (!parent || !child)
        return;
      var parentRect = parent.getBoundingClientRect();
      var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
      };
      var childRect = child.getBoundingClientRect();
      var isViewable = childRect.top >= parentRect.top && childRect.bottom <= parentRect.top + parentViewableArea.height;
      if (!isViewable) {
        parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
      }
    }
    const setHistory = () => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j;
      const local = localStorage.getItem(`_cwl_current`);
      const cwl = local ? JSON.parse(local) : [];
      if (!cwl) {
        localStorage.setItem(
          "_cwl_current",
          JSON.stringify([
            {
              anime: {
                title: adata.value.post.post_title,
                id: adata.value.anime_id,
                attribute: (_a2 = adata.value.taxonomies) == null ? void 0 : _a2.anime_attribute[0],
                url: adata.value.url,
                featured: (_b2 = adata.value.images) == null ? void 0 : _b2.featured
              },
              last: {
                url: location.href,
                num: configs.value.current_episode,
                dur: ((_c2 = edata.value.meta) == null ? void 0 : _c2.duration) || ((_d2 = adata.value.meta) == null ? void 0 : _d2.duration),
                img: edata.value.image
              },
              id: adata.value.anime_id
            }
          ])
        );
        return;
      }
      const filtered = cwl.findIndex((e) => {
        return e.id === adata.value.anime_id;
      });
      if (filtered === -1) {
        cwl.push({
          anime: {
            title: adata.value.post.post_title,
            id: adata.value.anime_id,
            attribute: (_e2 = adata.value.taxonomies) == null ? void 0 : _e2.anime_attribute[0],
            url: adata.value.url,
            featured: adata.value.image
          },
          last: {
            url: location.href,
            num: configs.value.current_episode,
            dur: ((_f = edata.value.meta) == null ? void 0 : _f.duration) || ((_g = adata.value.meta) == null ? void 0 : _g.duration),
            img: edata.value.image
          },
          id: adata.value.anime_id
        });
        localStorage.setItem("_cwl_current", JSON.stringify(cwl));
        return;
      }
      cwl[filtered] = {
        anime: {
          title: adata.value.post.post_title,
          id: adata.value.anime_id,
          attribute: (_h = adata.value.taxonomies) == null ? void 0 : _h.anime_attribute[0],
          url: adata.value.url,
          featured: adata.value.image
        },
        last: {
          url: location.href,
          num: configs.value.current_episode,
          dur: ((_i = edata.value.meta) == null ? void 0 : _i.duration) || ((_j = adata.value.meta) == null ? void 0 : _j.duration),
          img: edata.value.image
        },
        id: adata.value.anime_id
      };
      localStorage.setItem("_cwl_current", JSON.stringify(cwl));
      return;
    };
    let searchTimeout;
    const getSearchEpisode = (epnum) => {
      if (epnum) {
        if (searchTimeout) {
          clearTimeout(searchTimeout);
        }
        searchTimeout = setTimeout(() => {
          var _a2;
          const el = document.querySelectorAll(
            `[data-episode-list-index="${epnum}"]`
          );
          (_a2 = document.querySelector(".animate-episode")) == null ? void 0 : _a2.classList.remove("animate-episode");
          if (!el) {
            return;
          }
          el.forEach((list) => {
            list.classList.add("animate-episode");
          });
          el.forEach(
            (e) => document.querySelectorAll("[data-episode-list-container]").forEach((ell) => {
              scrollParentToChild(ell, e);
            })
          );
        }, 500);
      }
    };
    onMounted(() => {
      var _a2, _b2, _c2;
      setHistory();
      (_a2 = document.querySelector("#spinner-before-load")) == null ? void 0 : _a2.classList.add("hidden");
      const lists = document.querySelectorAll("[data-episode-list-index]");
      if (configs.value.current_episode && ((_b2 = lists[lists.length - 1]) == null ? void 0 : _b2.dataset.episodeListIndex)) {
        (_c2 = lists[lists.length - 1]) == null ? void 0 : _c2.dataset.episodeListIndex;
        setTimeout(() => {
          document.querySelectorAll(
            `[data-episode-list-index="${configs.value.current_episode}"]`
          ).forEach(
            (e) => document.querySelectorAll("[data-episode-list-container]").forEach((ell) => {
              scrollParentToChild(ell, e);
            })
          );
        }, 1e3);
      }
    });
    const setVote = async (val) => {
      var _a2;
      try {
        if (!isloggedIn) {
          document.querySelector("[data-login-toggle]").click();
          return;
        }
        const res = await Api({
          method: "post",
          path: "anime/vote",
          data: { anime_id: adata.value.anime_id, value: val }
        });
        voteData.value = res.vote;
        setSuccess(__("Vote success! :D", "kiranime"));
      } catch (error) {
        setError(((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || __("Something went wrong."));
      }
    };
    return (_ctx, _cache) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
      return !unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", {
          "data-episode-player-container": "",
          class: normalizeClass([{
            " lg:pl-90 xl:pl-80 lg:px-10": !((_a2 = unref(edata).taxonomies) == null ? void 0 : _a2.episode_type) || ((_c2 = (_b2 = unref(edata).taxonomies) == null ? void 0 : _b2.episode_type[0]) == null ? void 0 : _c2.slug) !== "movie"
          }, "w-full xl:w-3/4 xl:pr-0 relative lg:min-h-500 transition-all duration-200 ease-in-out"])
        }, [
          createBaseVNode("div", _hoisted_2$a, [
            createVNode(_sfc_main$b, {
              configs: unref(configs),
              type: unref(edata).taxonomies.episode_type && unref(edata).taxonomies.episode_type[0] ? (_d2 = unref(edata).taxonomies.episode_type[0]) == null ? void 0 : _d2.slug : "series"
            }, null, 8, ["configs", "type"])
          ]),
          !((_e2 = unref(edata).taxonomies) == null ? void 0 : _e2.episode_type) || ((_g = (_f = unref(edata).taxonomies) == null ? void 0 : _f.episode_type[0]) == null ? void 0 : _g.slug) !== "movie" ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
            createBaseVNode("div", _hoisted_4$9, [
              createBaseVNode("span", null, toDisplayString(translation["episode_list"]), 1),
              createBaseVNode("div", _hoisted_5$9, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchEpisode) ? searchEpisode.value = $event : searchEpisode = $event),
                  type: "text",
                  name: "episode_number",
                  class: "bg-opacity-10 w-full pl-7 bg-primary px-2 py-2 h-full text-xs rounded focus:outline-none outline-none border-none ring-1 ring-gray-600 ring-opacity-70 font-medium text-accent",
                  placeholder: translation.episode_number,
                  onKeyup: _cache[1] || (_cache[1] = ($event) => getSearchEpisode(unref(searchEpisode)))
                }, null, 40, _hoisted_6$8), [
                  [vModelText, unref(searchEpisode)]
                ]),
                _hoisted_7$9
              ])
            ]),
            createBaseVNode("div", _hoisted_8$8, [
              createBaseVNode("div", _hoisted_9$8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(adata).episodes, (edt) => {
                  var _a3, _b3, _c3, _d3, _e3;
                  return openBlock(), createElementBlock("a", {
                    "data-episode-list-index": edt.meta.number,
                    class: normalizeClass(["relative py-2 lg:py-3 px-4 before:absolute before:inset-y-0 before:left-0 before:bg-accent-3 before:h-full bg-white text-xs font-normal lg:font-medium gap-5 flex items-center justify-between", [
                      unref(currentId) === edt.id ? "before:w-2px odd:bg-opacity-20 even:bg-opacity-20" : "odd:bg-opacity-10 even:bg-opacity-0"
                    ]]),
                    href: edt.url,
                    title: ((_a3 = edt.meta) == null ? void 0 : _a3.title) || ((_b3 = unref(adata).post) == null ? void 0 : _b3.post_title)
                  }, [
                    createBaseVNode("div", _hoisted_11$6, [
                      createBaseVNode("span", _hoisted_12$6, toDisplayString((_c3 = edt.meta) == null ? void 0 : _c3.number), 1),
                      createBaseVNode("span", _hoisted_13$6, toDisplayString(((_d3 = edt.meta) == null ? void 0 : _d3.title) || ((_e3 = unref(adata).post) == null ? void 0 : _e3.post_title)), 1)
                    ]),
                    createBaseVNode("span", {
                      class: normalizeClass(["material-icons-round text-2xl w-6", {
                        "text-accent-2 opacity-100": unref(currentId) === edt.id,
                        "opacity-0": unref(currentId) !== edt.id
                      }])
                    }, " play_arrow ", 2)
                  ], 10, _hoisted_10$7);
                }), 256))
              ])
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", _hoisted_14$6, [
          createBaseVNode("div", _hoisted_15$6, [
            createBaseVNode("img", {
              src: unref(adata).image,
              alt: (_h = unref(adata).post) == null ? void 0 : _h.post_title,
              class: "w-auto xl:w-1/2 h-44 xl:h-auto xl:mx-auto"
            }, null, 8, _hoisted_16$4),
            createBaseVNode("div", _hoisted_17$4, [
              createBaseVNode("a", {
                class: "my-1",
                href: unref(adata).url
              }, [
                createBaseVNode("h3", _hoisted_19$3, toDisplayString((_i = unref(adata).post) == null ? void 0 : _i.post_title), 1)
              ], 8, _hoisted_18$4),
              createBaseVNode("ul", _hoisted_20$3, [
                ((_j = unref(adata).meta) == null ? void 0 : _j.rate) && ((_k = unref(adata).taxonomies) == null ? void 0 : _k.anime_attribute) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("li", _hoisted_21$3, [
                    ((_l = unref(adata).meta) == null ? void 0 : _l.rate) ? (openBlock(), createElementBlock("span", _hoisted_22$2, toDisplayString((_m = unref(adata).meta) == null ? void 0 : _m.rate), 1)) : createCommentVNode("", true),
                    ((_n = unref(adata).taxonomies) == null ? void 0 : _n.anime_attribute) ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList((_o = unref(adata).taxonomies) == null ? void 0 : _o.anime_attribute, (attr) => {
                      return openBlock(), createElementBlock("span", _hoisted_23$2, toDisplayString(attr.name), 1);
                    }), 256)) : (openBlock(), createElementBlock("span", _hoisted_24$2, "TV"))
                  ]),
                  _hoisted_25$2
                ], 64)) : createCommentVNode("", true),
                ((_p = unref(adata).taxonomies) == null ? void 0 : _p.type) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      class: "uppercase",
                      href: getTaxUrl((_q = unref(adata).taxonomies) == null ? void 0 : _q.type[0])
                    }, toDisplayString((_s = (_r = unref(adata).taxonomies) == null ? void 0 : _r.type[0]) == null ? void 0 : _s.name), 9, _hoisted_26$2)
                  ]),
                  _hoisted_27$2
                ], 64)) : createCommentVNode("", true),
                createBaseVNode("li", null, [
                  createBaseVNode("span", null, toDisplayString(((_t = unref(adata).meta) == null ? void 0 : _t.duration) || ((_u = unref(edata).meta) == null ? void 0 : _u.duration) || "24m"), 1)
                ])
              ]),
              createBaseVNode("span", _hoisted_28$2, toDisplayString((_v = unref(adata).post) == null ? void 0 : _v.post_content), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_29$2, [
            createBaseVNode("div", _hoisted_30$2, [
              createBaseVNode("div", _hoisted_31$2, [
                _hoisted_32$2,
                createBaseVNode("span", null, toDisplayString((_w = unref(voteData)) == null ? void 0 : _w.vote_score), 1),
                createBaseVNode("span", null, toDisplayString(translation.vote_count(unref(voteData).voted)), 1)
              ]),
              createBaseVNode("span", _hoisted_33$2, toDisplayString(translation["vote_now"]), 1)
            ]),
            createBaseVNode("span", _hoisted_34$2, toDisplayString(translation["rate_this"]), 1),
            createBaseVNode("div", _hoisted_35$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(unref(voteData).html), (iconNum) => {
                var _a3, _b3;
                return openBlock(), createElementBlock("span", {
                  onClick: ($event) => setVote(parseInt(iconNum)),
                  class: normalizeClass({
                    "p-2 w-1/5 hover:bg-white hover:bg-opacity-10 cursor-pointer flex items-center justify-center": !unref(voteData).status,
                    "p-2 w-1/5 bg-white bg-opacity-20 cursor-pointer flex items-center justify-center": unref(voteData).status && ((_a3 = unref(voteData).vote_data) == null ? void 0 : _a3.value) === parseInt(iconNum),
                    "p-2 w-1/5 hover:bg-white hover:bg-opacity-10 opacity-30 cursor-pointer flex items-center justify-center": unref(voteData).status && ((_b3 = unref(voteData).vote_data) == null ? void 0 : _b3.value) !== parseInt(iconNum)
                  })
                }, [
                  createBaseVNode("span", {
                    innerHTML: unref(voteData).html[iconNum]
                  }, null, 8, _hoisted_37$2)
                ], 10, _hoisted_36$2);
              }), 256))
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$9 = { class: "relative transform lg:-translate-y-[7vmin] lg:mt-17 w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 p-4 rounded-lg shadow-lg z-[53] bg-primary" };
const _hoisted_2$9 = { class: "absolute top-0 left-0 w-full h-fit bg-accent-3" };
const _hoisted_3$9 = { class: "text-lg py-2 block w-full text-center" };
const _hoisted_4$8 = { class: "flex gap-2 lg:gap-5 w-full mb-5" };
const _hoisted_5$8 = { class: "w-4/5 flex flex-col justify-between md:py-1 self-start" };
const _hoisted_6$7 = { class: "text-sm lg:text-base line-clamp-2 mb-3" };
const _hoisted_7$8 = { class: "flex items-center gap-5 text-sm" };
const _hoisted_8$7 = ["onClick"];
const _hoisted_9$7 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-3 h-3 md:w-4 md:h-4"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
  })
], -1);
const _hoisted_10$6 = ["onClick"];
const _hoisted_11$5 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "w-3 h-3 md:w-4 md:h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1);
const _hoisted_12$5 = {
  key: 0,
  class: "w-full text-center text-sm"
};
const _hoisted_13$5 = { class: "text-base" };
const _hoisted_14$5 = { key: 1 };
const _hoisted_15$5 = { class: "text-base" };
const _sfc_main$9 = {
  __name: "history",
  setup(__props) {
    const active = ref(false);
    const storageActive = ref(true);
    const watched = ref([]);
    const translation = reactive({
      watch_history: __("Watch History"),
      episode: __("Episode"),
      continue: __("Continue"),
      delete: __("Delete"),
      no_history: __("Ouch, No anime in your history!"),
      start_watch: __(
        "Start watching some anime, and your history will be saved!"
      ),
      browser_support: __(
        "Ouch, Your browser doesn't support this feature!"
      ),
      switch_browser: __(
        "Switch to other browser to use history feature!"
      )
    });
    const getStorage = () => {
      if (typeof localStorage === "undefined") {
        storageActive.value = false;
        return;
      }
      const local = localStorage.getItem(`_cwl_current`);
      const cwl = local ? JSON.parse(local) : [];
      watched.value = cwl;
    };
    getStorage();
    const setStorage = (data) => {
      if (!data || !Array.isArray(data))
        return;
      if (!localStorage)
        return;
      localStorage.setItem("_cwl_current", JSON.stringify(data));
      getStorage();
    };
    const visit = (url) => {
      location.href = url;
    };
    const deleteStorage = (id) => {
      if (!id)
        return;
      const filters = watched.value.filter((e) => {
        return e.id !== id;
      });
      setStorage(filters);
    };
    onMounted(() => {
      var _a2;
      (_a2 = document.querySelector("#history-active")) == null ? void 0 : _a2.addEventListener("click", () => {
        active.value = !active.value;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([active.value ? "opacity-100" : "hidden opacity-0", "fixed inset-0 flex items-center justify-center z-[51] transition-all duration-200 ease-in-out"])
      }, [
        createBaseVNode("div", {
          class: "absolute bg-black bg-opacity-75 z-[52] inset-0 w-full h-full",
          onClick: _cache[0] || (_cache[0] = ($event) => active.value = false)
        }),
        createBaseVNode("div", _hoisted_1$9, [
          createBaseVNode("div", _hoisted_2$9, [
            createBaseVNode("h3", _hoisted_3$9, toDisplayString(translation.watch_history), 1)
          ]),
          createBaseVNode("div", {
            class: normalizeClass([
              watched.value.length >= 3 ? "max-h-96 overflow-y-scroll overflow-x-hidden" : "",
              "py-4 mt-11 h-full"
            ])
          }, [
            watched.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(watched.value, (c) => {
              return openBlock(), createElementBlock("div", _hoisted_4$8, [
                createBaseVNode("div", {
                  class: "w-1/5 h-20 shrink-0 rounded-md shadow-md relative overflow-hidden bg-center bg-no-repeat bg-cover",
                  style: normalizeStyle(`background-image:url('${c.last.img || c.anime.featured}')`)
                }, null, 4),
                createBaseVNode("div", _hoisted_5$8, [
                  createBaseVNode("h4", _hoisted_6$7, toDisplayString(c.anime.title + " " + translation["episode"] + " " + c.last.num), 1),
                  createBaseVNode("div", _hoisted_7$8, [
                    createBaseVNode("div", {
                      onClick: ($event) => visit(c.last.url),
                      class: "flex items-center gap-2 bg-accent-3 hover:bg-accent-4 cursor-pointer transition-colors duration-200 ease-in-out rounded-md hover:shadow-md hover:drop-shadow-lg px-2 md:px-4 py-1.5 text-xs"
                    }, [
                      createBaseVNode("span", null, toDisplayString(translation["continue"]), 1),
                      _hoisted_9$7
                    ], 8, _hoisted_8$7),
                    createBaseVNode("div", {
                      onClick: ($event) => deleteStorage(c.id),
                      class: "flex items-center gap-2 bg-error-1 hover:bg-error-2 cursor-pointer transition-colors duration-200 ease-in-out rounded-md hover:shadow-md hover:drop-shadow-lg px-2 md:px-4 py-1.5 text-xs"
                    }, [
                      createBaseVNode("span", null, toDisplayString(translation["delete"]), 1),
                      _hoisted_11$5
                    ], 8, _hoisted_10$6)
                  ])
                ])
              ]);
            }), 256)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              storageActive.value ? (openBlock(), createElementBlock("div", _hoisted_12$5, [
                createBaseVNode("h5", _hoisted_13$5, toDisplayString(translation.no_history), 1),
                createBaseVNode("span", null, toDisplayString(translation.start_watch), 1)
              ])) : (openBlock(), createElementBlock("div", _hoisted_14$5, [
                createBaseVNode("h5", _hoisted_15$5, toDisplayString(translation.browser_support), 1),
                createBaseVNode("span", null, toDisplayString(translation.switch_browser), 1)
              ]))
            ], 64))
          ], 2)
        ])
      ], 2);
    };
  }
};
const _hoisted_1$8 = { class: "w-full h-full rounded shadow bg-overlay flex gap-2" };
const _hoisted_2$8 = { class: "w-8/12 p-4" };
const _hoisted_3$8 = { class: "space-y-5" };
const _hoisted_4$7 = { class: "" };
const _hoisted_5$7 = {
  for: "username",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_6$6 = { class: "" };
const _hoisted_7$7 = {
  for: "email",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_8$6 = { class: "" };
const _hoisted_9$6 = {
  for: "joined",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "w-3 h-3"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
  })
], -1);
const _hoisted_11$4 = { class: "" };
const _hoisted_12$4 = {
  for: "current_password",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_13$4 = { class: "" };
const _hoisted_14$4 = {
  for: "new_password",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_15$4 = ["placeholder"];
const _hoisted_16$3 = { class: "" };
const _hoisted_17$3 = {
  for: "confirm_new_password",
  class: "text-sm font-medium block mb-2 uppercase"
};
const _hoisted_18$3 = ["placeholder"];
const _hoisted_19$2 = ["onClick"];
const _hoisted_20$2 = { class: "w-4/12 h-full min-h-full bg-gradient-to-b from-secondary p-4" };
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  class: "text-gray-900 w-4 h-4"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
  })
], -1);
const _hoisted_22$1 = [
  _hoisted_21$2
];
const _hoisted_23$1 = {
  key: 0,
  class: "fixed w-screen h-screen flex items-center justify-center inset-0 z-[999999]"
};
const _hoisted_24$1 = { class: "w-full h-fit p-8 max-h-screen max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl xxl:max-w-2xl bg-primary min-w-fit rounded z-[9999999]" };
const _hoisted_25$1 = { class: "flex items-center justify-center" };
const _hoisted_26$1 = ["onClick"];
const _hoisted_27$1 = {
  key: 0,
  class: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-wrap max-w-xs md:max-w-md lg:max-w-lg h-60 overflow-y-auto overflow-x-hidden py-4"
};
const _hoisted_28$1 = ["onClick"];
const _hoisted_29$1 = ["src"];
const _hoisted_30$1 = {
  key: 1,
  class: "flex justify-center items-center w-full h-60 mt-4"
};
const _hoisted_31$1 = {
  key: 0,
  for: "dropzone-file",
  class: "flex flex-col justify-center items-center w-full h-60 rounded-lg border-2 border-dashed cursor-pointer hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
};
const _hoisted_32$1 = { class: "flex flex-col justify-center items-center pt-5 pb-6" };
const _hoisted_33$1 = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  class: "mb-3 w-10 h-10 text-gray-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  })
], -1);
const _hoisted_34$1 = { class: "mb-2 text-sm text-gray-400" };
const _hoisted_35$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-xs text-gray-400" }, "PNG, JPEG, JPG", -1);
const _hoisted_36$1 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center flex-col"
};
const _hoisted_37$1 = ["src"];
const _hoisted_38 = {
  key: 0,
  class: "text-sm font-medium animate-pulse"
};
const _sfc_main$8 = {
  __name: "profile",
  setup(__props) {
    const userdata = reactive({
      current: "",
      newpassword: "",
      confirm: ""
    });
    const Api = inject("Api");
    const data = ref(inject("config"));
    const selectedAvatar = ref(null);
    const uploading = ref(false);
    const showChangeAvatar = ref(false);
    const showPassField = ref(false);
    const loading = ref(true);
    const customAvatar = ref(null);
    const tab = ref("chibi");
    const init = watchPostEffect((ocl) => {
      processprofile();
      ocl(() => loading.value = false);
    });
    const translation = reactive({
      username: __("Username"),
      email: __("Email"),
      joined: __("Joined"),
      change_pass: __("Change Password"),
      current_password: __("Current Password"),
      new_password: __("New Password"),
      confirm_password: __("Confirm new password"),
      save: __("Save"),
      upload: __("Click to upload or drag and drop"),
      uploading: __("Uploading.."),
      remove: __("Remove")
    });
    const avatars = [
      {
        name: __("Chibi"),
        slug: "chibi"
      },
      {
        name: __("One Piece"),
        slug: "onepiece"
      },
      {
        name: __("Dragon Ball"),
        slug: "dragonball"
      },
      {
        name: __("Custom"),
        slug: "custom"
      }
    ];
    watch(customAvatar, (e) => {
      selectedAvatar.value = URL.createObjectURL(customAvatar.value);
      upload();
    });
    const processprofile = () => {
      init();
    };
    const changeAvatar = async (avt) => {
      const response = await Api({
        path: "profile",
        data: {
          avatar: avt,
          user_id: current_user_id
        },
        method: "PUT"
      });
      if (!response) {
        const e = __("Something went wrong.");
        setError(e);
        return;
      }
      const s = __("Avatar has been changed.");
      setSuccess(s);
      data.value.avatar = avt;
      showChangeAvatar.value = false;
    };
    const upload = async () => {
      uploading.value = true;
      const form = new FormData();
      form.append("file", customAvatar.value);
      form.append("user_id", current_user_id);
      const response = await Api({
        path: "profile",
        body: form,
        method: "POST"
      });
      if (!response) {
        setError(__("Something went wrong."));
        return;
      }
      setSuccess(response.message);
      data.value.avatar = response.url;
      uploading.value = false;
      showChangeAvatar.value = false;
    };
    const saveUpdate = async () => {
      let change_pass = 0;
      if (showPassField.value) {
        if (userdata.newpassword !== userdata.confirm) {
          setError(__("Password not the same!"));
          return;
        }
        change_pass = 1;
      }
      const update2 = {
        current_password: userdata.current,
        email: data.value.email,
        password: userdata.newpassword,
        confirm: userdata.confirm,
        username: data.value.username,
        u_nonce: data.value.user_nonce,
        change_pass
      };
      const response = await Api({
        path: "profile_update",
        data: update2,
        method: "POST"
      });
      if (!response)
        setError(__("Something went wrong."));
      else {
        if (response.status) {
          setSuccess(response.message);
        } else {
          setError(response.message);
        }
      }
      return;
    };
    return (_ctx, _cache) => {
      return !loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", _hoisted_1$8, [
          createBaseVNode("div", _hoisted_2$8, [
            createBaseVNode("form", _hoisted_3$8, [
              createBaseVNode("div", _hoisted_4$7, [
                createBaseVNode("label", _hoisted_5$7, toDisplayString(translation.username), 1),
                withDirectives(createBaseVNode("input", {
                  type: "text",
                  id: "username",
                  class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.value.username = $event)
                }, null, 512), [
                  [vModelText, data.value.username]
                ])
              ]),
              createBaseVNode("div", _hoisted_6$6, [
                createBaseVNode("label", _hoisted_7$7, toDisplayString(translation.email), 1),
                withDirectives(createBaseVNode("input", {
                  type: "email",
                  id: "email",
                  class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => data.value.email = $event)
                }, null, 512), [
                  [vModelText, data.value.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_8$6, [
                createBaseVNode("label", _hoisted_9$6, toDisplayString(translation.joined), 1),
                withDirectives(createBaseVNode("input", {
                  type: "joined",
                  id: "joined",
                  disabled: "",
                  class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => data.value.joined = $event)
                }, null, 512), [
                  [vModelText, data.value.joined]
                ])
              ]),
              createBaseVNode("span", {
                onClick: _cache[3] || (_cache[3] = ($event) => showPassField.value = !showPassField.value),
                class: "cursor-pointer opacity-50 text-xs my-5 flex items-center gap-2"
              }, [
                _hoisted_10$5,
                createTextVNode(" " + toDisplayString(translation.change_pass), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["w-full space-y-2 transition-all duration-200", {
                  hidden: !showPassField.value,
                  block: showPassField.value
                }])
              }, [
                createBaseVNode("div", _hoisted_11$4, [
                  createBaseVNode("label", _hoisted_12$4, toDisplayString(translation.current_password), 1),
                  withDirectives(createBaseVNode("input", {
                    type: "password",
                    id: "current_password",
                    class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => userdata.current = $event)
                  }, null, 512), [
                    [vModelText, userdata.current]
                  ])
                ]),
                createBaseVNode("div", _hoisted_13$4, [
                  createBaseVNode("label", _hoisted_14$4, toDisplayString(translation.new_password), 1),
                  withDirectives(createBaseVNode("input", {
                    type: "password",
                    id: "new_password",
                    class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => userdata.newpassword = $event),
                    placeholder: translation.new_password
                  }, null, 8, _hoisted_15$4), [
                    [vModelText, userdata.newpassword]
                  ])
                ]),
                createBaseVNode("div", _hoisted_16$3, [
                  createBaseVNode("label", _hoisted_17$3, toDisplayString(translation.confirm_password), 1),
                  withDirectives(createBaseVNode("input", {
                    "data-change-password": "confirm",
                    type: "password",
                    name: "confirm_new_password",
                    id: "confirm_new_password",
                    class: "px-4 py-2 bg-overlay bg-opacity-5 text-sm rounded outline-none border-none ring-1 focus:ring block focus:ring-accent-3 w-full",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => userdata.confirm = $event),
                    placeholder: translation.confirm_password
                  }, null, 8, _hoisted_18$3), [
                    [vModelText, userdata.confirm]
                  ])
                ])
              ], 2),
              createBaseVNode("button", {
                onClick: withModifiers(saveUpdate, ["prevent"]),
                class: "bg-accent px-4 py-2 w-full rounded-md text-white"
              }, toDisplayString(translation.save), 9, _hoisted_19$2)
            ])
          ]),
          createBaseVNode("div", _hoisted_20$2, [
            createBaseVNode("div", {
              "data-avatar-holder": "",
              style: normalizeStyle(`background-image: url('${data.value.avatar}')`),
              class: "w-24 h-24 rounded-full mx-auto relative bg-no-repeat bg-cover bg-center"
            }, [
              createBaseVNode("div", {
                onClick: _cache[7] || (_cache[7] = ($event) => showChangeAvatar.value = !showChangeAvatar.value),
                class: "absolute right-0 bottom-0 rounded-full w-7 h-7 flex items-center justify-center bg-white cursor-pointer"
              }, _hoisted_22$1)
            ], 4)
          ])
        ]),
        showChangeAvatar.value ? (openBlock(), createElementBlock("div", _hoisted_23$1, [
          createBaseVNode("div", {
            onClick: _cache[8] || (_cache[8] = ($event) => showChangeAvatar.value = false),
            class: "before:backdrop-blur-md before:w-full before:h-full before:absolute before:inset-0 z-[9999990]"
          }),
          createBaseVNode("div", _hoisted_24$1, [
            createBaseVNode("div", _hoisted_25$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(avatars, (avatar) => {
                return createBaseVNode("span", {
                  class: normalizeClass(["block min-w-fit cursor-pointer px-5 py-3 text-sm font-medium first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md", [avatar.slug === tab.value ? "bg-secondary" : "bg-overlay"]]),
                  onClick: ($event) => tab.value = avatar.slug
                }, toDisplayString(avatar.name), 11, _hoisted_26$1);
              }), 64))
            ]),
            tab.value !== "custom" ? (openBlock(), createElementBlock("div", _hoisted_27$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.avatars[tab.value], (avt) => {
                return openBlock(), createElementBlock("div", {
                  onClick: ($event) => changeAvatar(avt),
                  class: "w-20 h-20 rounded-full relative overflow-hidden col-span-1 cursor-pointer"
                }, [
                  createBaseVNode("img", {
                    src: avt,
                    class: "absolute w-full h-full object-cover"
                  }, null, 8, _hoisted_29$1)
                ], 8, _hoisted_28$1);
              }), 256))
            ])) : (openBlock(), createElementBlock("div", _hoisted_30$1, [
              !selectedAvatar.value ? (openBlock(), createElementBlock("label", _hoisted_31$1, [
                createBaseVNode("div", _hoisted_32$1, [
                  _hoisted_33$1,
                  createBaseVNode("p", _hoisted_34$1, toDisplayString(translation.upload), 1),
                  _hoisted_35$1
                ]),
                createBaseVNode("input", {
                  onChange: _cache[9] || (_cache[9] = ($event) => customAvatar.value = $event.target.files[0]),
                  id: "dropzone-file",
                  type: "file",
                  accept: "image/jpg, image/jpeg, image/png",
                  class: "hidden"
                }, null, 32)
              ])) : (openBlock(), createElementBlock("div", _hoisted_36$1, [
                createBaseVNode("img", {
                  src: selectedAvatar.value,
                  class: "w-full h-full max-w-[15rem] max-h-40 object-cover"
                }, null, 8, _hoisted_37$1),
                uploading.value ? (openBlock(), createElementBlock("div", _hoisted_38, toDisplayString(translation.uploading), 1)) : createCommentVNode("", true),
                !uploading.value ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "px-5 py-2 bg-accent-2 rounded my-4 cursor-pointer",
                  onClick: _cache[10] || (_cache[10] = ($event) => selectedAvatar.value = null)
                }, toDisplayString(translation.remove), 1)) : createCommentVNode("", true)
              ]))
            ]))
          ])
        ])) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true);
    };
  }
};
var sugarCore = { exports: {} };
(function(module) {
  (function() {
    var Sugar2;
    var SUGAR_GLOBAL = "Sugar";
    var NATIVE_NAMES = "Object Number String Array Date RegExp Function";
    var STATIC = 1;
    var INSTANCE = 2;
    var PROPERTY_DESCRIPTOR_SUPPORT = !!(Object.defineProperty && Object.defineProperties);
    var globalContext = getGlobal();
    var allowObjectPrototype = false;
    var namespacesByName = {};
    var namespacesByClassString = {};
    var defineProperty2 = PROPERTY_DESCRIPTOR_SUPPORT ? Object.defineProperty : definePropertyShim;
    var DefaultChainable = getNewChainableClass("Chainable");
    function getGlobal() {
      return testGlobal(typeof commonjsGlobal !== "undefined" && commonjsGlobal) || testGlobal(typeof window !== "undefined" && window);
    }
    function testGlobal(obj) {
      return obj && obj.Object === Object ? obj : null;
    }
    function setupGlobal() {
      Sugar2 = globalContext[SUGAR_GLOBAL];
      if (Sugar2) {
        return;
      }
      Sugar2 = function(arg) {
        forEachProperty2(Sugar2, function(sugarNamespace, name) {
          if (hasOwn2(namespacesByName, name)) {
            sugarNamespace.extend(arg);
          }
        });
        return Sugar2;
      };
      if (module.exports) {
        module.exports = Sugar2;
      } else {
        try {
          globalContext[SUGAR_GLOBAL] = Sugar2;
        } catch (e) {
        }
      }
      forEachProperty2(NATIVE_NAMES.split(" "), function(name) {
        createNamespace(name);
      });
      setGlobalProperties();
    }
    function createNamespace(name) {
      var isObject2 = name === "Object";
      var sugarNamespace = getNewChainableClass(name);
      var extend2 = function(opts) {
        var nativeClass = globalContext[name], nativeProto = nativeClass.prototype;
        var staticMethods = {}, instanceMethods = {}, methodsByName;
        function objectRestricted(name2, target) {
          return isObject2 && target === nativeProto && (!allowObjectPrototype || name2 === "get" || name2 === "set");
        }
        function arrayOptionExists(field, val) {
          var arr = opts[field];
          if (arr) {
            for (var i = 0, el; el = arr[i]; i++) {
              if (el === val) {
                return true;
              }
            }
          }
          return false;
        }
        function arrayOptionExcludes(field, val) {
          return opts[field] && !arrayOptionExists(field, val);
        }
        function disallowedByFlags(methodName, target, flags) {
          if (!target[methodName] || !flags) {
            return false;
          }
          for (var i = 0; i < flags.length; i++) {
            if (opts[flags[i]] === false) {
              return true;
            }
          }
        }
        function namespaceIsExcepted() {
          return arrayOptionExists("except", nativeClass) || arrayOptionExcludes("namespaces", nativeClass);
        }
        function methodIsExcepted(methodName) {
          return arrayOptionExists("except", methodName);
        }
        function canExtend(methodName, method, target) {
          return !objectRestricted(methodName, target) && !disallowedByFlags(methodName, target, method.flags) && !methodIsExcepted(methodName);
        }
        opts = opts || {};
        methodsByName = opts.methods;
        if (namespaceIsExcepted()) {
          return;
        } else if (isObject2 && typeof opts.objectPrototype === "boolean") {
          allowObjectPrototype = opts.objectPrototype;
        }
        forEachProperty2(methodsByName || sugarNamespace, function(method, methodName) {
          if (methodsByName) {
            methodName = method;
            method = sugarNamespace[methodName];
          }
          if (hasOwn2(method, "instance") && canExtend(methodName, method, nativeProto)) {
            instanceMethods[methodName] = method.instance;
          }
          if (hasOwn2(method, "static") && canExtend(methodName, method, nativeClass)) {
            staticMethods[methodName] = method;
          }
        });
        extendNative(nativeClass, staticMethods);
        extendNative(nativeProto, instanceMethods);
        if (!methodsByName) {
          setProperty2(sugarNamespace, "active", true);
        }
        return sugarNamespace;
      };
      function defineWithOptionCollect(methodName, instance, args) {
        setProperty2(sugarNamespace, methodName, function(arg1, arg2, arg3) {
          var opts = collectDefineOptions(arg1, arg2, arg3);
          defineMethods(sugarNamespace, opts.methods, instance, args, opts.last);
          return sugarNamespace;
        });
      }
      defineWithOptionCollect("defineStatic", STATIC);
      defineWithOptionCollect("defineInstance", INSTANCE);
      defineWithOptionCollect("defineInstanceAndStatic", INSTANCE | STATIC);
      defineWithOptionCollect("defineStaticWithArguments", STATIC, true);
      defineWithOptionCollect("defineInstanceWithArguments", INSTANCE, true);
      setProperty2(sugarNamespace, "defineStaticPolyfill", function(arg1, arg2, arg3) {
        var opts = collectDefineOptions(arg1, arg2, arg3);
        extendNative(globalContext[name], opts.methods, true, opts.last);
        return sugarNamespace;
      });
      setProperty2(sugarNamespace, "defineInstancePolyfill", function(arg1, arg2, arg3) {
        var opts = collectDefineOptions(arg1, arg2, arg3);
        extendNative(globalContext[name].prototype, opts.methods, true, opts.last);
        forEachProperty2(opts.methods, function(fn2, methodName) {
          defineChainableMethod(sugarNamespace, methodName, fn2);
        });
        return sugarNamespace;
      });
      setProperty2(sugarNamespace, "alias", function(name2, source) {
        var method = typeof source === "string" ? sugarNamespace[source] : source;
        setMethod(sugarNamespace, name2, method);
        return sugarNamespace;
      });
      setProperty2(sugarNamespace, "extend", extend2);
      namespacesByName[name] = sugarNamespace;
      namespacesByClassString["[object " + name + "]"] = sugarNamespace;
      mapNativeToChainable(name);
      mapObjectChainablesToNamespace(sugarNamespace);
      return Sugar2[name] = sugarNamespace;
    }
    function setGlobalProperties() {
      setProperty2(Sugar2, "VERSION", "2.0.6");
      setProperty2(Sugar2, "extend", Sugar2);
      setProperty2(Sugar2, "toString", toString);
      setProperty2(Sugar2, "createNamespace", createNamespace);
      setProperty2(Sugar2, "util", {
        "hasOwn": hasOwn2,
        "getOwn": getOwn2,
        "setProperty": setProperty2,
        "classToString": classToString2,
        "defineProperty": defineProperty2,
        "forEachProperty": forEachProperty2,
        "mapNativeToChainable": mapNativeToChainable
      });
    }
    function toString() {
      return SUGAR_GLOBAL;
    }
    function defineMethods(sugarNamespace, methods, type, args, flags) {
      forEachProperty2(methods, function(method, methodName) {
        var instanceMethod, staticMethod = method;
        if (args) {
          staticMethod = wrapMethodWithArguments(method);
        }
        if (flags) {
          staticMethod.flags = flags;
        }
        if (type & INSTANCE && !method.instance) {
          instanceMethod = wrapInstanceMethod(method, args);
          setProperty2(staticMethod, "instance", instanceMethod);
        }
        if (type & STATIC) {
          setProperty2(staticMethod, "static", true);
        }
        setMethod(sugarNamespace, methodName, staticMethod);
        if (sugarNamespace.active) {
          sugarNamespace.extend(methodName);
        }
      });
    }
    function collectDefineOptions(arg1, arg2, arg3) {
      var methods, last;
      if (typeof arg1 === "string") {
        methods = {};
        methods[arg1] = arg2;
        last = arg3;
      } else {
        methods = arg1;
        last = arg2;
      }
      return {
        last,
        methods
      };
    }
    function wrapInstanceMethod(fn2, args) {
      return args ? wrapMethodWithArguments(fn2, true) : wrapInstanceMethodFixed(fn2);
    }
    function wrapMethodWithArguments(fn2, instance) {
      var startCollect = fn2.length - 1 - (instance ? 1 : 0);
      return function() {
        var args = [], collectedArgs = [], len;
        if (instance) {
          args.push(this);
        }
        len = Math.max(arguments.length, startCollect);
        for (var i = 0; i < len; i++) {
          if (i < startCollect) {
            args.push(arguments[i]);
          } else {
            collectedArgs.push(arguments[i]);
          }
        }
        args.push(collectedArgs);
        return fn2.apply(this, args);
      };
    }
    function wrapInstanceMethodFixed(fn2) {
      switch (fn2.length) {
        case 0:
        case 1:
          return function() {
            return fn2(this);
          };
        case 2:
          return function(a) {
            return fn2(this, a);
          };
        case 3:
          return function(a, b) {
            return fn2(this, a, b);
          };
        case 4:
          return function(a, b, c) {
            return fn2(this, a, b, c);
          };
        case 5:
          return function(a, b, c, d) {
            return fn2(this, a, b, c, d);
          };
      }
    }
    function extendNative(target, source, polyfill, override) {
      forEachProperty2(source, function(method, name) {
        if (polyfill && !override && target[name]) {
          return;
        }
        setProperty2(target, name, method);
      });
    }
    function setMethod(sugarNamespace, methodName, method) {
      sugarNamespace[methodName] = method;
      if (method.instance) {
        defineChainableMethod(sugarNamespace, methodName, method.instance);
      }
    }
    function getNewChainableClass(name) {
      var fn2 = function SugarChainable(obj, arg) {
        if (!(this instanceof fn2)) {
          return new fn2(obj, arg);
        }
        if (this.constructor !== fn2) {
          obj = this.constructor.apply(obj, arguments);
        }
        this.raw = obj;
      };
      setProperty2(fn2, "toString", function() {
        return SUGAR_GLOBAL + name;
      });
      setProperty2(fn2.prototype, "valueOf", function() {
        return this.raw;
      });
      return fn2;
    }
    function defineChainableMethod(sugarNamespace, methodName, fn2) {
      var wrapped = wrapWithChainableResult(fn2), existing, collision, dcp;
      dcp = DefaultChainable.prototype;
      existing = dcp[methodName];
      collision = existing && existing !== Object.prototype[methodName];
      if (!existing || !existing.disambiguate) {
        dcp[methodName] = collision ? disambiguateMethod(methodName) : wrapped;
      }
      sugarNamespace.prototype[methodName] = wrapped;
      if (sugarNamespace === Sugar2.Object) {
        mapObjectChainableToAllNamespaces(methodName, wrapped);
      }
    }
    function mapObjectChainablesToNamespace(sugarNamespace) {
      forEachProperty2(Sugar2.Object && Sugar2.Object.prototype, function(val, methodName) {
        if (typeof val === "function") {
          setObjectChainableOnNamespace(sugarNamespace, methodName, val);
        }
      });
    }
    function mapObjectChainableToAllNamespaces(methodName, fn2) {
      forEachProperty2(namespacesByName, function(sugarNamespace) {
        setObjectChainableOnNamespace(sugarNamespace, methodName, fn2);
      });
    }
    function setObjectChainableOnNamespace(sugarNamespace, methodName, fn2) {
      var proto = sugarNamespace.prototype;
      if (!hasOwn2(proto, methodName)) {
        proto[methodName] = fn2;
      }
    }
    function wrapWithChainableResult(fn2) {
      return function() {
        return new DefaultChainable(fn2.apply(this.raw, arguments));
      };
    }
    function disambiguateMethod(methodName) {
      var fn2 = function() {
        var raw = this.raw, sugarNamespace;
        if (raw != null) {
          sugarNamespace = namespacesByClassString[classToString2(raw)];
        }
        if (!sugarNamespace) {
          sugarNamespace = Sugar2.Object;
        }
        return new sugarNamespace(raw)[methodName].apply(this, arguments);
      };
      fn2.disambiguate = true;
      return fn2;
    }
    function mapNativeToChainable(name, methodNames) {
      var sugarNamespace = namespacesByName[name], nativeProto = globalContext[name].prototype;
      if (!methodNames && ownPropertyNames) {
        methodNames = ownPropertyNames(nativeProto);
      }
      forEachProperty2(methodNames, function(methodName) {
        if (nativeMethodProhibited(methodName)) {
          return;
        }
        try {
          var fn2 = nativeProto[methodName];
          if (typeof fn2 !== "function") {
            return;
          }
        } catch (e) {
          return;
        }
        defineChainableMethod(sugarNamespace, methodName, fn2);
      });
    }
    function nativeMethodProhibited(methodName) {
      return methodName === "constructor" || methodName === "valueOf" || methodName === "__proto__";
    }
    var ownPropertyNames = Object.getOwnPropertyNames, internalToString2 = Object.prototype.toString, internalHasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachProperty2 = function(obj, fn2) {
      for (var key in obj) {
        if (!hasOwn2(obj, key))
          continue;
        if (fn2.call(obj, obj[key], key, obj) === false)
          break;
      }
    };
    function definePropertyShim(obj, prop, descriptor) {
      obj[prop] = descriptor.value;
    }
    function setProperty2(target, name, value, enumerable) {
      defineProperty2(target, name, {
        value,
        enumerable: !!enumerable,
        configurable: true,
        writable: true
      });
    }
    function classToString2(obj) {
      return internalToString2.call(obj);
    }
    function hasOwn2(obj, prop) {
      return !!obj && internalHasOwnProperty.call(obj, prop);
    }
    function getOwn2(obj, prop) {
      if (hasOwn2(obj, prop)) {
        return obj[prop];
      }
    }
    setupGlobal();
    var NATIVE_TYPES2 = "Boolean Number String Date RegExp Function Array Error Set Map";
    var NO_KEYS_IN_STRING_OBJECTS2 = !("0" in Object("a"));
    var TRIM_CHARS2 = "	\n\v\f\r   ᠎             \u2028\u2029　\uFEFF";
    var HALF_WIDTH_ZERO2 = 48, FULL_WIDTH_ZERO2 = 65296, HALF_WIDTH_PERIOD2 = ".", FULL_WIDTH_PERIOD2 = "．", HALF_WIDTH_COMMA2 = ",";
    var sugarObject2 = Sugar2.Object, sugarArray2 = Sugar2.Array, sugarDate2 = Sugar2.Date, sugarString = Sugar2.String;
    Sugar2.Number;
    var sugarFunction = Sugar2.Function;
    Sugar2.RegExp;
    var isString2, isFunction2, isArray2;
    function buildClassChecks2() {
      function addCoreTypes() {
        var names = spaceSplit2(NATIVE_TYPES2);
        buildPrimitiveClassCheck(names[0]);
        buildPrimitiveClassCheck(names[1]);
        isString2 = buildPrimitiveClassCheck(names[2]);
        buildClassCheck(names[3]);
        buildClassCheck(names[4]);
        isFunction2 = buildClassCheck(names[5]);
        isArray2 = Array.isArray || buildClassCheck(names[6]);
        buildClassCheck(names[7]);
        buildClassCheck(names[8], typeof Set !== "undefined" && Set);
        buildClassCheck(names[9], typeof Map !== "undefined" && Map);
        addKnownType(names[0]);
        addKnownType(names[1]);
        addKnownType(names[2]);
        addKnownType(names[3]);
        addKnownType(names[4]);
        addKnownType(names[6]);
      }
      function addArrayTypes() {
        var types = "Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64";
        forEach2(spaceSplit2(types), function(str) {
        });
      }
      function addKnownType(className) {
      }
      function buildClassCheck(className, globalObject) {
        if (globalObject && isClass2(new globalObject(), "Object")) {
          return getConstructorClassCheck(globalObject);
        } else {
          return getToStringClassCheck(className);
        }
      }
      function getConstructorClassCheck(obj) {
        var ctorStr = String(obj);
        return function(obj2) {
          return String(obj2.constructor) === ctorStr;
        };
      }
      function getToStringClassCheck(className) {
        return function(obj, str) {
          return isClass2(obj, className, str);
        };
      }
      function buildPrimitiveClassCheck(className) {
        var type = className.toLowerCase();
        return function(obj) {
          var t = typeof obj;
          return t === type || t === "object" && isClass2(obj, className);
        };
      }
      addCoreTypes();
      addArrayTypes();
    }
    function isClass2(obj, className, str) {
      if (!str) {
        str = classToString2(obj);
      }
      return str === "[object " + className + "]";
    }
    function wrapNamespace2(method) {
      return function(sugarNamespace, arg1, arg2) {
        sugarNamespace[method](arg1, arg2);
      };
    }
    var defineStaticPolyfill = wrapNamespace2("defineStaticPolyfill"), defineInstancePolyfill = wrapNamespace2("defineInstancePolyfill");
    function assertCallable2(obj) {
      if (!isFunction2(obj)) {
        throw new TypeError("Function is not callable");
      }
    }
    function isDefined2(o) {
      return o !== void 0;
    }
    function isPrimitive2(obj, type) {
      type = type || typeof obj;
      return obj == null || type === "string" || type === "number" || type === "boolean";
    }
    function coercePrimitiveToObject2(obj) {
      if (isPrimitive2(obj)) {
        obj = Object(obj);
      }
      if (NO_KEYS_IN_STRING_OBJECTS2 && isString2(obj)) {
        forceStringCoercion2(obj);
      }
      return obj;
    }
    function forceStringCoercion2(obj) {
      var i = 0, chr3;
      while (chr3 = obj.charAt(i)) {
        obj[i++] = chr3;
      }
    }
    function isArrayIndex2(n) {
      return n >>> 0 == n && n != 4294967295;
    }
    function iterateOverSparseArray2(arr, fn2, fromIndex, loop2) {
      var indexes = getSparseArrayIndexes2(arr, fromIndex, loop2), index;
      for (var i = 0, len = indexes.length; i < len; i++) {
        index = indexes[i];
        fn2.call(arr, arr[index], index, arr);
      }
      return arr;
    }
    function getSparseArrayIndexes2(arr, fromIndex, loop2, fromRight) {
      var indexes = [], i;
      for (i in arr) {
        if (isArrayIndex2(i) && (loop2 || (fromRight ? i <= fromIndex : i >= fromIndex))) {
          indexes.push(+i);
        }
      }
      indexes.sort(function(a, b) {
        var aLoop = a > fromIndex;
        var bLoop = b > fromIndex;
        if (aLoop !== bLoop) {
          return aLoop ? -1 : 1;
        }
        return a - b;
      });
      return indexes;
    }
    function spaceSplit2(str) {
      return str.split(" ");
    }
    function forEach2(arr, fn2) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (!(i in arr)) {
          return iterateOverSparseArray2(arr, fn2, i);
        }
        fn2(arr[i], i);
      }
    }
    var trunc2 = Math.trunc || function(n) {
      if (n === 0 || !isFinite(n))
        return n;
      return n < 0 ? ceil2(n) : floor2(n);
    };
    function padNumber2(num, place, sign, base, replacement) {
      var str = abs2(num).toString(base || 10);
      str = repeatString2(replacement || "0", place - str.replace(/\.\d+/, "").length) + str;
      if (sign || num < 0) {
        str = (num < 0 ? "-" : "+") + str;
      }
      return str;
    }
    var fullWidthNumberMap2;
    function buildFullWidthNumber2() {
      var fwp = FULL_WIDTH_PERIOD2, hwp = HALF_WIDTH_PERIOD2, hwc = HALF_WIDTH_COMMA2;
      fullWidthNumberMap2 = {};
      for (var i = 0, digit; i <= 9; i++) {
        digit = chr2(i + FULL_WIDTH_ZERO2);
        fullWidthNumberMap2[digit] = chr2(i + HALF_WIDTH_ZERO2);
      }
      fullWidthNumberMap2[hwc] = "";
      fullWidthNumberMap2[fwp] = hwp;
      fullWidthNumberMap2[hwp] = hwp;
    }
    var abs2 = Math.abs, ceil2 = Math.ceil, floor2 = Math.floor;
    var chr2 = String.fromCharCode;
    function repeatString2(str, num) {
      var result2 = "";
      str = str.toString();
      while (num > 0) {
        if (num & 1) {
          result2 += str;
        }
        if (num >>= 1) {
          str += str;
        }
      }
      return result2;
    }
    buildClassChecks2();
    buildFullWidthNumber2();
    var DONT_ENUM_PROPS = [
      "valueOf",
      "toString",
      "constructor",
      "isPrototypeOf",
      "hasOwnProperty",
      "toLocaleString",
      "propertyIsEnumerable"
    ];
    function buildDontEnumFix() {
      if (!{ toString: 1 }.propertyIsEnumerable("toString")) {
        var forEachEnumerableProperty = forEachProperty2;
        forEachProperty2 = function(obj, fn2) {
          forEachEnumerableProperty(obj, fn2);
          for (var i = 0, key; key = DONT_ENUM_PROPS[i]; i++) {
            if (hasOwn2(obj, key)) {
              if (fn2.call(obj, obj[key], key, obj) === false)
                break;
            }
          }
        };
      }
    }
    function buildChainableNativeMethodsFix() {
      if (!Object.getOwnPropertyNames) {
        defineNativeMethodsOnChainable();
      }
    }
    function defineNativeMethodsOnChainable() {
      var nativeTokens = {
        "Function": "apply,call",
        "RegExp": "compile,exec,test",
        "Number": "toExponential,toFixed,toLocaleString,toPrecision",
        "Object": "hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString",
        "Array": "concat,join,pop,push,reverse,shift,slice,sort,splice,toLocaleString,unshift",
        "Date": "getTime,getTimezoneOffset,setTime,toDateString,toGMTString,toLocaleDateString,toLocaleString,toLocaleTimeString,toTimeString,toUTCString",
        "String": "anchor,big,blink,bold,charAt,charCodeAt,concat,fixed,fontcolor,fontsize,indexOf,italics,lastIndexOf,link,localeCompare,match,replace,search,slice,small,split,strike,sub,substr,substring,sup,toLocaleLowerCase,toLocaleUpperCase,toLowerCase,toUpperCase"
      };
      var dateTokens = "FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds".split(",");
      function addDateTokens(prefix, arr) {
        for (var i = 0; i < dateTokens.length; i++) {
          arr.push(prefix + dateTokens[i]);
        }
      }
      forEachProperty2(nativeTokens, function(str, name) {
        var tokens = str.split(",");
        if (name === "Date") {
          addDateTokens("get", tokens);
          addDateTokens("set", tokens);
          addDateTokens("getUTC", tokens);
          addDateTokens("setUTC", tokens);
        }
        tokens.push("toString");
        mapNativeToChainable(name, tokens);
      });
    }
    buildDontEnumFix();
    buildChainableNativeMethodsFix();
    function assertNonNull(obj) {
      if (obj == null) {
        throw new TypeError("Object required");
      }
    }
    defineStaticPolyfill(sugarObject2, {
      "keys": function(obj) {
        var keys = [];
        assertNonNull(obj);
        forEachProperty2(coercePrimitiveToObject2(obj), function(val, key) {
          keys.push(key);
        });
        return keys;
      }
    });
    function arrayIndexOf(arr, search, fromIndex, fromRight) {
      var length = arr.length, defaultFromIndex, index, increment;
      increment = fromRight ? -1 : 1;
      defaultFromIndex = fromRight ? length - 1 : 0;
      fromIndex = trunc2(fromIndex);
      if (!fromIndex && fromIndex !== 0) {
        fromIndex = defaultFromIndex;
      }
      if (fromIndex < 0) {
        fromIndex = length + fromIndex;
      }
      if (!fromRight && fromIndex < 0 || fromRight && fromIndex >= length) {
        fromIndex = defaultFromIndex;
      }
      index = fromIndex;
      while (fromRight && index >= 0 || !fromRight && index < length) {
        if (!(index in arr)) {
          return sparseIndexOf(arr, search, fromIndex, fromRight);
        }
        if (isArrayIndex2(index) && arr[index] === search) {
          return index;
        }
        index += increment;
      }
      return -1;
    }
    function sparseIndexOf(arr, search, fromIndex, fromRight) {
      var indexes = getSparseArrayIndexes2(arr, fromIndex, false, fromRight), index;
      indexes.sort(function(a, b) {
        return fromRight ? b - a : a - b;
      });
      while ((index = indexes.shift()) !== void 0) {
        if (arr[index] === search) {
          return +index;
        }
      }
      return -1;
    }
    function arrayReduce(arr, fn2, initialValue, fromRight) {
      var length = arr.length, count = 0, defined = isDefined2(initialValue), result2, index;
      assertCallable2(fn2);
      if (length == 0 && !defined) {
        throw new TypeError("Reduce called on empty array with no initial value");
      } else if (defined) {
        result2 = initialValue;
      } else {
        result2 = arr[fromRight ? length - 1 : count];
        count++;
      }
      while (count < length) {
        index = fromRight ? length - count - 1 : count;
        if (index in arr) {
          result2 = fn2(result2, arr[index], index, arr);
        }
        count++;
      }
      return result2;
    }
    defineStaticPolyfill(sugarArray2, {
      /***
       *
       * @method isArray(obj)
       * @returns Boolean
       * @polyfill ES5
       * @static
       * @short Returns true if `obj` is an Array.
       *
       * @example
       *
       *   Array.isArray(3)        -> false
       *   Array.isArray(true)     -> false
       *   Array.isArray('wasabi') -> false
       *   Array.isArray([1,2,3])  -> true
       *
       ***/
      "isArray": function(obj) {
        return isArray2(obj);
      }
    });
    defineInstancePolyfill(sugarArray2, {
      "every": function(fn2) {
        var context = arguments[1];
        var length = this.length, index = 0;
        assertCallable2(fn2);
        while (index < length) {
          if (index in this && !fn2.call(context, this[index], index, this)) {
            return false;
          }
          index++;
        }
        return true;
      },
      "some": function(fn2) {
        var context = arguments[1];
        var length = this.length, index = 0;
        assertCallable2(fn2);
        while (index < length) {
          if (index in this && fn2.call(context, this[index], index, this)) {
            return true;
          }
          index++;
        }
        return false;
      },
      "map": function(fn2) {
        var context = arguments[1];
        var length = this.length, index = 0, result2 = new Array(length);
        assertCallable2(fn2);
        while (index < length) {
          if (index in this) {
            result2[index] = fn2.call(context, this[index], index, this);
          }
          index++;
        }
        return result2;
      },
      "filter": function(fn2) {
        var context = arguments[1];
        var length = this.length, index = 0, result2 = [];
        assertCallable2(fn2);
        while (index < length) {
          if (index in this && fn2.call(context, this[index], index, this)) {
            result2.push(this[index]);
          }
          index++;
        }
        return result2;
      },
      /***
       * @method indexOf(search, [fromIndex] = 0)
       * @returns Number
       * @polyfill ES5
       * @short Searches the array and returns the first index where `search` occurs,
       *        or `-1` if the element is not found.
       * @extra [fromIndex] is the index from which to begin the search. This
       *        method performs a simple strict equality comparison on `search`.
       *        Sugar does not enhance this method to support `enhanced matching`.
       *        For such functionality, use the `findIndex` method instead.
       *
       * @example
       *
       *   [1,2,3].indexOf(3) -> 1
       *   [1,2,3].indexOf(7) -> -1
       *
       ***/
      "indexOf": function(search) {
        var fromIndex = arguments[1];
        if (isString2(this))
          return this.indexOf(search, fromIndex);
        return arrayIndexOf(this, search, fromIndex);
      },
      /***
       * @method lastIndexOf(search, [fromIndex] = array.length - 1)
       * @returns Number
       * @polyfill ES5
       * @short Searches the array from the end and returns the first index where
       *        `search` occurs, or `-1` if the element is not found.
       * @extra [fromIndex] is the index from which to begin the search. This method
       *        performs a simple strict equality comparison on `search`.
       *        Sugar does not enhance this method to support `enhanced matching`.
       *
       * @example
       *
       *   [1,2,1].lastIndexOf(1) -> 2
       *   [1,2,1].lastIndexOf(7) -> -1
       *
       ***/
      "lastIndexOf": function(search) {
        var fromIndex = arguments[1];
        if (isString2(this))
          return this.lastIndexOf(search, fromIndex);
        return arrayIndexOf(this, search, fromIndex, true);
      },
      /***
       * @method forEach([eachFn], [context])
       * @polyfill ES5
       * @short Iterates over the array, calling [eachFn] on each loop.
       * @extra [context] becomes the `this` object.
       *
       * @callback eachFn
       *
       *   el   The element of the current iteration.
       *   i    The index of the current iteration.
       *   arr  A reference to the array.
       *
       * @example
       *
       *   ['a','b','c'].forEach(function(a) {
       *     // Called 3 times: 'a','b','c'
       *   });
       *
       ***/
      "forEach": function(eachFn) {
        var context = arguments[1];
        var length = this.length, index = 0;
        assertCallable2(eachFn);
        while (index < length) {
          if (index in this) {
            eachFn.call(context, this[index], index, this);
          }
          index++;
        }
      },
      /***
       * @method reduce(reduceFn, [init])
       * @returns Mixed
       * @polyfill ES5
       * @short Reduces the array to a single result.
       * @extra This operation is sometimes called "accumulation", as it takes the
       *        result of the last iteration of `reduceFn` and passes it as the first
       *        argument to the next iteration, "accumulating" that value as it goes.
       *        The return value of this method will be the return value of the final
       *        iteration of `reduceFn`. If [init] is passed, it will be the initial
       *        "accumulator" (the first argument). If [init] is not passed, then it
       *        will take the first element in the array, and `reduceFn` will not be
       *        called for that element.
       *
       * @callback reduceFn
       *
       *   acc  The "accumulator". Either [init], the result of the last iteration
       *        of `reduceFn`, or the first element of the array.
       *   el   The current element for this iteration.
       *   idx  The current index for this iteration.
       *   arr  A reference to the array.
       *
       * @example
       *
       *   [1,2,3].reduce(function(a, b) {
       *     return a - b; // 1 - 2 - 3
       *   });
       *
       *   [1,2,3].reduce(function(a, b) {
       *     return a - b; // 100 - 1 - 2 - 3
       *   }, 100);
       *
       ***/
      "reduce": function(reduceFn) {
        var context = arguments[1];
        return arrayReduce(this, reduceFn, context);
      },
      /***
       * @method reduceRight([reduceFn], [init])
       * @returns Mixed
       * @polyfill ES5
       * @short Similar to `Array#reduce`, but operates on the elements in reverse.
       *
       * @callback reduceFn
       *
       *   acc  The "accumulator", either [init], the result of the last iteration
       *        of `reduceFn`, or the last element of the array.
       *   el   The current element for this iteration.
       *   idx  The current index for this iteration.
       *   arr  A reference to the array.
       *
       * @example
       *
       *   [1,2,3].reduceRight(function(a, b) {
       *     return a - b; // 3 - 2 - 1
       *   });
       *
       *   [1,2,3].reduceRight(function(a, b) {
       *     return a - b; // 100 - 3 - 2 - 1
       *   }, 100);
       *
       *
       ***/
      "reduceRight": function(reduceFn) {
        var context = arguments[1];
        return arrayReduce(this, reduceFn, context, true);
      }
    });
    var TRIM_REG = RegExp("^[" + TRIM_CHARS2 + "]+|[" + TRIM_CHARS2 + "]+$", "g");
    defineInstancePolyfill(sugarString, {
      /***
       * @method trim()
       * @returns String
       * @polyfill ES5
       * @short Removes leading and trailing whitespace from the string.
       * @extra Whitespace is defined as line breaks, tabs, and any character in the
       *        "Space, Separator" Unicode category, conforming to the the ES5 spec.
       *
       * @example
       *
       *   '   wasabi   '.trim()      -> 'wasabi'
       *   '   wasabi   '.trimLeft()  -> 'wasabi   '
       *   '   wasabi   '.trimRight() -> '   wasabi'
       *
       ***/
      "trim": function() {
        return this.toString().replace(TRIM_REG, "");
      }
    });
    defineInstancePolyfill(sugarFunction, {
      /***
      * @method bind(context, [arg1], ...)
      * @returns Function
      * @polyfill ES5
      * @short Binds `context` as the `this` object for the function when it is
      *        called. Also allows currying an unlimited number of parameters.
      * @extra "currying" means setting parameters ([arg1], [arg2], etc.) ahead of
      *        time so that they are passed when the function is called later. If
      *        you pass additional parameters when the function is actually called,
      *        they will be added to the end of the curried parameters.
      *
      * @example
      *
      *   logThis.bind('woof')()   -> logs 'woof' as its this object
      *   addArgs.bind(1, 2, 3)()  -> returns 5 with 1 as the this object
      *   addArgs.bind(1)(2, 3, 4) -> returns 9
      *
      ***/
      "bind": function(context) {
        var boundArgs = [];
        for (var $i = 1, $len = arguments.length; $i < $len; $i++)
          boundArgs.push(arguments[$i]);
        var fn2 = this, bound;
        assertCallable2(this);
        bound = function() {
          var args = [];
          for (var $i2 = 0, $len2 = arguments.length; $i2 < $len2; $i2++)
            args.push(arguments[$i2]);
          return fn2.apply(fn2.prototype && this instanceof fn2 ? this : context, boundArgs.concat(args));
        };
        bound.prototype = this.prototype;
        return bound;
      }
    });
    defineStaticPolyfill(sugarDate2, {
      /***
      * @method now()
      * @returns String
      * @polyfill ES5
      * @static
      * @short Returns the current time as a Unix timestamp.
      * @extra The number of milliseconds since January 1st, 1970 00:00:00 (UTC).
      *
      * @example
      *
      *   Date.now() -> ex. 1311938296231
      *
      ***/
      "now": function() {
        return (/* @__PURE__ */ new Date()).getTime();
      }
    });
    function hasISOSupport() {
      var d = new Date(Date.UTC(2e3, 0));
      return !!d.toISOString && d.toISOString() === "2000-01-01T00:00:00.000Z";
    }
    defineInstancePolyfill(sugarDate2, {
      /***
      * @method toISOString()
      * @returns String
      * @polyfill ES5
      * @short Formats the string to ISO8601 format.
      * @extra This will always format as UTC time.
      *
      * @example
      *
      *   Date.create().toISOString() -> ex. 2011-07-05 12:24:55.528Z
      *
      ***/
      "toISOString": function() {
        return padNumber2(this.getUTCFullYear(), 4) + "-" + padNumber2(this.getUTCMonth() + 1, 2) + "-" + padNumber2(this.getUTCDate(), 2) + "T" + padNumber2(this.getUTCHours(), 2) + ":" + padNumber2(this.getUTCMinutes(), 2) + ":" + padNumber2(this.getUTCSeconds(), 2) + "." + padNumber2(this.getUTCMilliseconds(), 3) + "Z";
      },
      /***
      * @method toJSON([key])
      * @returns String
      * @polyfill ES5
      * @short Returns a JSON representation of the date.
      * @extra This is effectively an alias for `toISOString`. Will always return
      *        the date in UTC time. [key] is ignored.
      *
      * @example
      *
      *   Date.create().toJSON() -> ex. 2011-07-05 12:24:55.528Z
      *
      ***/
      "toJSON": function(key) {
        return this.toISOString(key);
      }
    }, !hasISOSupport());
  }).call(commonjsGlobal);
})(sugarCore);
var sugarCoreExports = sugarCore.exports;
function isArrayIndex$2(n) {
  return n >>> 0 == n && n != 4294967295;
}
var isArrayIndex_1 = isArrayIndex$2;
var isArrayIndex$1 = isArrayIndex_1;
function getSparseArrayIndexes$1(arr, fromIndex, loop2, fromRight) {
  var indexes = [], i;
  for (i in arr) {
    if (isArrayIndex$1(i) && (loop2 || (fromRight ? i <= fromIndex : i >= fromIndex))) {
      indexes.push(+i);
    }
  }
  indexes.sort(function(a, b) {
    var aLoop = a > fromIndex;
    var bLoop = b > fromIndex;
    if (aLoop !== bLoop) {
      return aLoop ? -1 : 1;
    }
    return a - b;
  });
  return indexes;
}
var getSparseArrayIndexes_1 = getSparseArrayIndexes$1;
var getSparseArrayIndexes = getSparseArrayIndexes_1;
function iterateOverSparseArray$1(arr, fn2, fromIndex, loop2) {
  var indexes = getSparseArrayIndexes(arr, fromIndex, loop2), index;
  for (var i = 0, len = indexes.length; i < len; i++) {
    index = indexes[i];
    fn2.call(arr, arr[index], index, arr);
  }
  return arr;
}
var iterateOverSparseArray_1 = iterateOverSparseArray$1;
var iterateOverSparseArray = iterateOverSparseArray_1;
function forEach$j(arr, fn2) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!(i in arr)) {
      return iterateOverSparseArray(arr, fn2, i);
    }
    fn2(arr[i], i);
  }
}
var forEach_1 = forEach$j;
var NATIVE_TYPES$2 = "Boolean Number String Date RegExp Function Array Error Set Map";
var Sugar$6b = sugarCoreExports;
var coreUtilityAliases$M = {
  hasOwn: Sugar$6b.util.hasOwn,
  getOwn: Sugar$6b.util.getOwn,
  setProperty: Sugar$6b.util.setProperty,
  classToString: Sugar$6b.util.classToString,
  defineProperty: Sugar$6b.util.defineProperty,
  forEachProperty: Sugar$6b.util.forEachProperty,
  mapNativeToChainable: Sugar$6b.util.mapNativeToChainable
};
var coreUtilityAliases$L = coreUtilityAliases$M;
var classToString$5 = coreUtilityAliases$L.classToString;
function isClass$2(obj, className, str) {
  if (!str) {
    str = classToString$5(obj);
  }
  return str === "[object " + className + "]";
}
var isClass_1 = isClass$2;
function spaceSplit$6(str) {
  return str.split(" ");
}
var spaceSplit_1 = spaceSplit$6;
function isObjectType$e(obj, type) {
  return !!obj && (type || typeof obj) === "object";
}
var isObjectType_1 = isObjectType$e;
var coreUtilityAliases$K = coreUtilityAliases$M;
var hasOwn$c = coreUtilityAliases$K.hasOwn;
function hasOwnEnumeratedProperties$1(obj) {
  var objectProto = Object.prototype;
  for (var key in obj) {
    var val = obj[key];
    if (!hasOwn$c(obj, key) && val !== objectProto[key]) {
      return false;
    }
  }
  return true;
}
var hasOwnEnumeratedProperties_1 = hasOwnEnumeratedProperties$1;
var coreUtilityAliases$J = coreUtilityAliases$M;
var hasOwn$b = coreUtilityAliases$J.hasOwn;
function hasValidPlainObjectPrototype$1(obj) {
  var hasToString = "toString" in obj;
  var hasConstructor = "constructor" in obj;
  return !hasConstructor && !hasToString || hasConstructor && !hasOwn$b(obj, "constructor") && hasOwn$b(obj.constructor.prototype, "isPrototypeOf");
}
var hasValidPlainObjectPrototype_1 = hasValidPlainObjectPrototype$1;
var isClass$1 = isClass_1, isObjectType$d = isObjectType_1, hasOwnEnumeratedProperties = hasOwnEnumeratedProperties_1, hasValidPlainObjectPrototype = hasValidPlainObjectPrototype_1;
function isPlainObject$4(obj, className) {
  return isObjectType$d(obj) && isClass$1(obj, "Object", className) && hasValidPlainObjectPrototype(obj) && hasOwnEnumeratedProperties(obj);
}
var isPlainObject_1 = isPlainObject$4;
var NATIVE_TYPES$1 = NATIVE_TYPES$2, forEach$i = forEach_1, isClass = isClass_1, spaceSplit$5 = spaceSplit_1, isPlainObject$3 = isPlainObject_1;
var isSerializable$2, isBoolean$5, isNumber$d, isString$k, isDate$a, isRegExp$7, isFunction$d, isArray$f, isSet$2, isMap$2, isError$2;
function buildClassChecks() {
  var knownTypes = {};
  function addCoreTypes() {
    var names = spaceSplit$5(NATIVE_TYPES$1);
    isBoolean$5 = buildPrimitiveClassCheck(names[0]);
    isNumber$d = buildPrimitiveClassCheck(names[1]);
    isString$k = buildPrimitiveClassCheck(names[2]);
    isDate$a = buildClassCheck(names[3]);
    isRegExp$7 = buildClassCheck(names[4]);
    isFunction$d = buildClassCheck(names[5]);
    isArray$f = Array.isArray || buildClassCheck(names[6]);
    isError$2 = buildClassCheck(names[7]);
    isSet$2 = buildClassCheck(names[8], typeof Set !== "undefined" && Set);
    isMap$2 = buildClassCheck(names[9], typeof Map !== "undefined" && Map);
    addKnownType("Arguments");
    addKnownType(names[0]);
    addKnownType(names[1]);
    addKnownType(names[2]);
    addKnownType(names[3]);
    addKnownType(names[4]);
    addKnownType(names[6]);
  }
  function addArrayTypes() {
    var types = "Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64";
    forEach$i(spaceSplit$5(types), function(str) {
      addKnownType(str + "Array");
    });
  }
  function addKnownType(className) {
    var str = "[object " + className + "]";
    knownTypes[str] = true;
  }
  function isKnownType(className) {
    return knownTypes[className];
  }
  function buildClassCheck(className, globalObject) {
    if (globalObject && isClass(new globalObject(), "Object")) {
      return getConstructorClassCheck(globalObject);
    } else {
      return getToStringClassCheck(className);
    }
  }
  function getConstructorClassCheck(obj) {
    var ctorStr = String(obj);
    return function(obj2) {
      return String(obj2.constructor) === ctorStr;
    };
  }
  function getToStringClassCheck(className) {
    return function(obj, str) {
      return isClass(obj, className, str);
    };
  }
  function buildPrimitiveClassCheck(className) {
    var type = className.toLowerCase();
    return function(obj) {
      var t = typeof obj;
      return t === type || t === "object" && isClass(obj, className);
    };
  }
  addCoreTypes();
  addArrayTypes();
  isSerializable$2 = function(obj, className) {
    return isKnownType(className) || isPlainObject$3(obj, className);
  };
}
buildClassChecks();
var classChecks$Z = {
  isSerializable: isSerializable$2,
  isBoolean: isBoolean$5,
  isNumber: isNumber$d,
  isString: isString$k,
  isDate: isDate$a,
  isRegExp: isRegExp$7,
  isFunction: isFunction$d,
  isArray: isArray$f,
  isSet: isSet$2,
  isMap: isMap$2,
  isError: isError$2
};
function getNormalizedIndex$2(index, length, loop2) {
  if (index && loop2) {
    index = index % length;
  }
  if (index < 0)
    index = length + index;
  return index;
}
var getNormalizedIndex_1 = getNormalizedIndex$2;
var getNormalizedIndex$1 = getNormalizedIndex_1;
function entryAtIndex$1(obj, index, length, loop2, isString2) {
  index = getNormalizedIndex$1(index, length, loop2);
  return isString2 ? obj.charAt(index) : obj[index];
}
var entryAtIndex_1 = entryAtIndex$1;
var forEach$h = forEach_1, classChecks$Y = classChecks$Z, entryAtIndex = entryAtIndex_1;
var isArray$e = classChecks$Y.isArray;
function getEntriesForIndexes$2(obj, find, loop2, isString2) {
  var result2, length = obj.length;
  if (!isArray$e(find)) {
    return entryAtIndex(obj, find, length, loop2, isString2);
  }
  result2 = new Array(find.length);
  forEach$h(find, function(index, i) {
    result2[i] = entryAtIndex(obj, index, length, loop2, isString2);
  });
  return result2;
}
var getEntriesForIndexes_1 = getEntriesForIndexes$2;
var Sugar$6a = sugarCoreExports, getEntriesForIndexes$1 = getEntriesForIndexes_1;
Sugar$6a.String.defineInstance({
  "at": function(str, index, loop2) {
    return getEntriesForIndexes$1(str, index, loop2, true);
  }
});
Sugar$6a.String.at;
var CAMELIZE_REG$1 = /(^|_)([^_]+)/g;
var Inflections$4 = {};
var Inflections$3 = Inflections$4;
function getAcronym$2(str) {
  return Inflections$3.acronyms && Inflections$3.acronyms.find(str);
}
var getAcronym_1 = getAcronym$2;
var Inflections$2 = Inflections$4;
function stringUnderscore$4(str) {
  var areg = Inflections$2.acronyms && Inflections$2.acronyms.reg;
  if (areg) {
    str = str.replace(areg, function(acronym, index) {
      return (index > 0 ? "_" : "") + acronym.toLowerCase();
    });
  }
  return str.replace(/[-\s]+/g, "_").replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase();
}
var stringUnderscore_1 = stringUnderscore$4;
var CAPITALIZE_REG$1 = /[^\u0000-\u0040\u005B-\u0060\u007B-\u007F]+('s)?/g;
function simpleCapitalize$4(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var simpleCapitalize_1 = simpleCapitalize$4;
var CAPITALIZE_REG = CAPITALIZE_REG$1, simpleCapitalize$3 = simpleCapitalize_1;
function stringCapitalize$3(str, downcase, all) {
  if (downcase) {
    str = str.toLowerCase();
  }
  return all ? str.replace(CAPITALIZE_REG, simpleCapitalize$3) : simpleCapitalize$3(str);
}
var stringCapitalize_1 = stringCapitalize$3;
var CAMELIZE_REG = CAMELIZE_REG$1, getAcronym$1 = getAcronym_1, stringUnderscore$3 = stringUnderscore_1, stringCapitalize$2 = stringCapitalize_1;
function stringCamelize$1(str, upper) {
  str = stringUnderscore$3(str);
  return str.replace(CAMELIZE_REG, function(match, pre, word, index) {
    var cap = upper !== false || index > 0, acronym;
    acronym = getAcronym$1(word);
    if (acronym && cap) {
      return acronym;
    }
    return cap ? stringCapitalize$2(word, true) : word;
  });
}
var stringCamelize_1 = stringCamelize$1;
var Sugar$69 = sugarCoreExports, stringCamelize = stringCamelize_1;
Sugar$69.String.defineInstance({
  "camelize": function(str, upper) {
    return stringCamelize(str, upper);
  }
});
Sugar$69.String.camelize;
var Sugar$68 = sugarCoreExports, stringCapitalize$1 = stringCapitalize_1;
Sugar$68.String.defineInstance({
  "capitalize": function(str, lower, all) {
    return stringCapitalize$1(str, lower, all);
  }
});
Sugar$68.String.capitalize;
function isDefined$j(o) {
  return o !== void 0;
}
var isDefined_1 = isDefined$j;
var classChecks$X = classChecks$Z;
var isString$j = classChecks$X.isString;
function escapeRegExp$6(str) {
  if (!isString$j(str))
    str = String(str);
  return str.replace(/([\\/'*+?|()[\]{}.^$-])/g, "\\$1");
}
var escapeRegExp_1 = escapeRegExp$6;
function getRegExpFlags$6(reg, add) {
  var flags = "";
  add = add || "";
  function checkFlag(prop, flag) {
    if (prop || add.indexOf(flag) > -1) {
      flags += flag;
    }
  }
  checkFlag(reg.global, "g");
  checkFlag(reg.ignoreCase, "i");
  checkFlag(reg.multiline, "m");
  checkFlag(reg.sticky, "y");
  return flags;
}
var getRegExpFlags_1 = getRegExpFlags$6;
function runGlobalMatch$1(str, reg) {
  var result2 = [], match, lastLastIndex;
  while ((match = reg.exec(str)) != null) {
    if (reg.lastIndex === lastLastIndex) {
      reg.lastIndex += 1;
    } else {
      result2.push(match[0]);
    }
    lastLastIndex = reg.lastIndex;
  }
  return result2;
}
var runGlobalMatch_1 = runGlobalMatch$1;
var isDefined$i = isDefined_1, classChecks$W = classChecks$Z, escapeRegExp$5 = escapeRegExp_1, getRegExpFlags$5 = getRegExpFlags_1, runGlobalMatch = runGlobalMatch_1;
var isString$i = classChecks$W.isString, isRegExp$6 = classChecks$W.isRegExp, isFunction$c = classChecks$W.isFunction;
function stringEach$5(str, search, fn2) {
  var chunks, chunk, reg, result2 = [];
  if (isFunction$c(search)) {
    fn2 = search;
    reg = /[\s\S]/g;
  } else if (!search) {
    reg = /[\s\S]/g;
  } else if (isString$i(search)) {
    reg = RegExp(escapeRegExp$5(search), "gi");
  } else if (isRegExp$6(search)) {
    reg = RegExp(search.source, getRegExpFlags$5(search, "g"));
  }
  chunks = runGlobalMatch(str, reg);
  if (chunks) {
    for (var i = 0, len = chunks.length, r; i < len; i++) {
      chunk = chunks[i];
      result2[i] = chunk;
      if (fn2) {
        r = fn2.call(str, chunk, i, chunks);
        if (r === false) {
          break;
        } else if (isDefined$i(r)) {
          result2[i] = r;
        }
      }
    }
  }
  return result2;
}
var stringEach_1 = stringEach$5;
var Sugar$67 = sugarCoreExports, stringEach$4 = stringEach_1;
Sugar$67.String.defineInstance({
  "chars": function(str, search, eachCharFn) {
    return stringEach$4(str, search, eachCharFn);
  }
});
Sugar$67.String.chars;
function stringCodes$2(str, fn2) {
  var codes = new Array(str.length), i, len;
  for (i = 0, len = str.length; i < len; i++) {
    var code = str.charCodeAt(i);
    codes[i] = code;
    if (fn2) {
      fn2.call(str, code, i, str);
    }
  }
  return codes;
}
var stringCodes_1 = stringCodes$2;
var Sugar$66 = sugarCoreExports, stringCodes$1 = stringCodes_1;
Sugar$66.String.defineInstance({
  "codes": function(str, eachCodeFn) {
    return stringCodes$1(str, eachCodeFn);
  }
});
Sugar$66.String.codes;
function trim$6(str) {
  return str.trim();
}
var trim_1 = trim$6;
var Sugar$65 = sugarCoreExports, trim$5 = trim_1;
Sugar$65.String.defineInstance({
  "compact": function(str) {
    return trim$5(str).replace(/([\r\n\s　])+/g, function(match, whitespace) {
      return whitespace === "　" ? whitespace : " ";
    });
  }
});
Sugar$65.String.compact;
var Sugar$64 = sugarCoreExports, stringUnderscore$2 = stringUnderscore_1;
Sugar$64.String.defineInstance({
  "dasherize": function(str) {
    return stringUnderscore$2(str).replace(/_/g, "-");
  }
});
Sugar$64.String.dasherize;
var chr$6 = String.fromCharCode;
var chr$5 = chr$6;
var encodeBase64$1, decodeBase64$1;
function buildBase64() {
  var encodeAscii, decodeAscii;
  function catchEncodingError(fn2) {
    return function(str) {
      try {
        return fn2(str);
      } catch (e) {
        return "";
      }
    };
  }
  if (typeof Buffer !== "undefined") {
    encodeBase64$1 = function(str) {
      return Buffer.from(str).toString("base64");
    };
    decodeBase64$1 = function(str) {
      return Buffer.from(str, "base64").toString("utf8");
    };
    return;
  }
  if (typeof btoa !== "undefined") {
    encodeAscii = catchEncodingError(btoa);
    decodeAscii = catchEncodingError(atob);
  } else {
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var base64reg = /[^A-Za-z0-9\+\/\=]/g;
    encodeAscii = function(str) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      do {
        chr1 = str.charCodeAt(i++);
        chr2 = str.charCodeAt(i++);
        chr3 = str.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output += key.charAt(enc1);
        output += key.charAt(enc2);
        output += key.charAt(enc3);
        output += key.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
      } while (i < str.length);
      return output;
    };
    decodeAscii = function(input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      if (input.match(base64reg)) {
        return "";
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        enc1 = key.indexOf(input.charAt(i++));
        enc2 = key.indexOf(input.charAt(i++));
        enc3 = key.indexOf(input.charAt(i++));
        enc4 = key.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + chr$5(chr1);
        if (enc3 != 64) {
          output = output + chr$5(chr2);
        }
        if (enc4 != 64) {
          output = output + chr$5(chr3);
        }
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
      } while (i < input.length);
      return output;
    };
  }
  encodeBase64$1 = function(str) {
    return encodeAscii(unescape(encodeURIComponent(str)));
  };
  decodeBase64$1 = function(str) {
    return decodeURIComponent(escape(decodeAscii(str)));
  };
}
buildBase64();
var base64$2 = {
  encodeBase64: encodeBase64$1,
  decodeBase64: decodeBase64$1
};
var Sugar$63 = sugarCoreExports, base64$1 = base64$2;
var decodeBase64 = base64$1.decodeBase64;
Sugar$63.String.defineInstance({
  "decodeBase64": function(str) {
    return decodeBase64(str);
  }
});
Sugar$63.String.decodeBase64;
var Sugar$62 = sugarCoreExports, base64 = base64$2;
var encodeBase64 = base64.encodeBase64;
Sugar$62.String.defineInstance({
  "encodeBase64": function(str) {
    return encodeBase64(str);
  }
});
Sugar$62.String.encodeBase64;
var HTML_ESCAPE_REG$1 = /[&<>]/g;
var HTMLFromEntityMap$2 = {
  "lt": "<",
  "gt": ">",
  "amp": "&",
  "nbsp": " ",
  "quot": '"',
  "apos": "'"
};
var HTMLFromEntityMap_1 = HTMLFromEntityMap$2;
var HTMLFromEntityMap$1 = HTMLFromEntityMap_1, coreUtilityAliases$I = coreUtilityAliases$M;
var forEachProperty$n = coreUtilityAliases$I.forEachProperty;
var HTMLToEntityMap$1;
function buildEntities() {
  HTMLToEntityMap$1 = {};
  forEachProperty$n(HTMLFromEntityMap$1, function(val, key) {
    HTMLToEntityMap$1[val] = "&" + key + ";";
  });
}
buildEntities();
var HTMLToEntityMap_1 = HTMLToEntityMap$1;
var Sugar$61 = sugarCoreExports, HTML_ESCAPE_REG = HTML_ESCAPE_REG$1, HTMLToEntityMap = HTMLToEntityMap_1, coreUtilityAliases$H = coreUtilityAliases$M;
var getOwn$c = coreUtilityAliases$H.getOwn;
Sugar$61.String.defineInstance({
  "escapeHTML": function(str) {
    return str.replace(HTML_ESCAPE_REG, function(chr2) {
      return getOwn$c(HTMLToEntityMap, chr2);
    });
  }
});
Sugar$61.String.escapeHTML;
var Sugar$60 = sugarCoreExports;
Sugar$60.String.defineInstance({
  "escapeURL": function(str, param) {
    return param ? encodeURIComponent(str) : encodeURI(str);
  }
});
Sugar$60.String.escapeURL;
function isUndefined$l(o) {
  return o === void 0;
}
var isUndefined_1 = isUndefined$l;
var Sugar$5$ = sugarCoreExports, isUndefined$k = isUndefined_1;
Sugar$5$.String.defineInstance({
  "first": function(str, num) {
    if (isUndefined$k(num))
      num = 1;
    return str.substr(0, num);
  }
});
Sugar$5$.String.first;
var Sugar$5_ = sugarCoreExports, stringEach$3 = stringEach_1;
Sugar$5_.String.defineInstance({
  "forEach": function(str, search, eachFn) {
    return stringEach$3(str, search, eachFn);
  }
});
Sugar$5_.String.forEach;
var PROPERTY_RANGE_REG$1 = /^(.*?)\[([-\d]*)\.\.([-\d]*)\](.*)$/;
var CommonChars$8 = {
  HALF_WIDTH_ZERO: 48,
  FULL_WIDTH_ZERO: 65296,
  HALF_WIDTH_PERIOD: ".",
  FULL_WIDTH_PERIOD: "．",
  HALF_WIDTH_COMMA: ",",
  OPEN_BRACE: "{",
  CLOSE_BRACE: "}"
};
function map$7(arr, fn2) {
  var result2 = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i in arr) {
      result2.push(fn2(arr[i], i));
    }
  }
  return result2;
}
var map_1 = map$7;
var CommonChars$7 = CommonChars$8;
var HALF_WIDTH_PERIOD$4 = CommonChars$7.HALF_WIDTH_PERIOD;
function periodSplit$3(str) {
  return str.split(HALF_WIDTH_PERIOD$4);
}
var periodSplit_1 = periodSplit$3;
var classChecks$V = classChecks$Z;
var isArray$d = classChecks$V.isArray;
function assertArray$1(obj) {
  if (!isArray$d(obj)) {
    throw new TypeError("Array required");
  }
}
var assertArray_1 = assertArray$1;
function isPrimitive$7(obj, type) {
  type = type || typeof obj;
  return obj == null || type === "string" || type === "number" || type === "boolean";
}
var isPrimitive_1 = isPrimitive$7;
var isPrimitive$6 = isPrimitive_1;
function assertWritable$1(obj) {
  if (isPrimitive$6(obj)) {
    throw new TypeError("Property cannot be written");
  }
}
var assertWritable_1 = assertWritable$1;
var PROPERTY_RANGE_REG = PROPERTY_RANGE_REG$1, CommonChars$6 = CommonChars$8, map$6 = map_1, isDefined$h = isDefined_1, classChecks$U = classChecks$Z, periodSplit$2 = periodSplit_1, assertArray = assertArray_1, isObjectType$c = isObjectType_1, assertWritable = assertWritable_1, coreUtilityAliases$G = coreUtilityAliases$M;
var isString$h = classChecks$U.isString, hasOwn$a = coreUtilityAliases$G.hasOwn, HALF_WIDTH_PERIOD$3 = CommonChars$6.HALF_WIDTH_PERIOD;
function handleDeepProperty$3(obj, key, any, has, fill, fillLast, val) {
  var ns, bs, ps, cbi, set, isLast, isPush, isIndex, nextIsIndex, exists;
  ns = obj;
  if (key == null)
    return;
  if (isObjectType$c(key)) {
    bs = [key];
  } else {
    key = String(key);
    if (key.indexOf("..") !== -1) {
      return handleArrayIndexRange(obj, key, any, val);
    }
    bs = key.split("[");
  }
  set = isDefined$h(val);
  for (var i = 0, blen = bs.length; i < blen; i++) {
    ps = bs[i];
    if (isString$h(ps)) {
      ps = periodSplit$2(ps);
    }
    for (var j = 0, plen = ps.length; j < plen; j++) {
      key = ps[j];
      isLast = i === blen - 1 && j === plen - 1;
      cbi = key.indexOf("]");
      isIndex = cbi !== -1;
      isPush = set && cbi === 0;
      nextIsIndex = blen > 1 && j === plen - 1;
      if (isPush) {
        key = ns.length;
      } else if (isIndex) {
        key = key.slice(0, -1);
      }
      if (isIndex && key < 0) {
        key = +key + ns.length;
      }
      if (i || key || blen === 1) {
        exists = any ? key in Object(ns) : hasOwn$a(ns, key);
        if (fill && (!isLast || fillLast) && !exists) {
          ns = ns[key] = nextIsIndex || fillLast && isLast ? [] : {};
          continue;
        }
        if (has) {
          if (isLast || !exists) {
            return exists;
          }
        } else if (set && isLast) {
          assertWritable(ns);
          ns[key] = val;
        }
        ns = exists ? ns[key] : void 0;
      }
    }
  }
  return ns;
}
function handleArrayIndexRange(obj, key, any, val) {
  var match, start2, end2, leading, trailing, arr, set;
  match = key.match(PROPERTY_RANGE_REG);
  if (!match) {
    return;
  }
  set = isDefined$h(val);
  leading = match[1];
  if (leading) {
    arr = handleDeepProperty$3(obj, leading, any, false, set ? true : false, true);
  } else {
    arr = obj;
  }
  assertArray(arr);
  trailing = match[4];
  start2 = match[2] ? +match[2] : 0;
  end2 = match[3] ? +match[3] : arr.length;
  end2 = end2 === -1 ? arr.length : end2 + 1;
  if (set) {
    for (var i = start2; i < end2; i++) {
      handleDeepProperty$3(arr, i + trailing, any, false, true, false, val);
    }
  } else {
    arr = arr.slice(start2, end2);
    if (trailing) {
      if (trailing.charAt(0) === HALF_WIDTH_PERIOD$3) {
        trailing = trailing.slice(1);
      }
      return map$6(arr, function(el) {
        return handleDeepProperty$3(el, trailing);
      });
    }
  }
  return arr;
}
var handleDeepProperty_1 = handleDeepProperty$3;
var handleDeepProperty$2 = handleDeepProperty_1;
function deepGetProperty$4(obj, key, any) {
  return handleDeepProperty$2(obj, key, any, false);
}
var deepGetProperty_1 = deepGetProperty$4;
var STRING_FORMAT_REG$1 = /([{}])\1|{([^}]*)}|(%)%|(%(\w*))/g;
var INTERNAL_MEMOIZE_LIMIT$1 = 1e3;
var INTERNAL_MEMOIZE_LIMIT = INTERNAL_MEMOIZE_LIMIT$1, coreUtilityAliases$F = coreUtilityAliases$M;
var hasOwn$9 = coreUtilityAliases$F.hasOwn;
function memoizeFunction$1(fn2) {
  var memo = {}, counter = 0;
  return function(key) {
    if (hasOwn$9(memo, key)) {
      return memo[key];
    }
    if (counter === INTERNAL_MEMOIZE_LIMIT) {
      memo = {};
      counter = 0;
    }
    counter++;
    return memo[key] = fn2(key);
  };
}
var memoizeFunction_1 = memoizeFunction$1;
var STRING_FORMAT_REG = STRING_FORMAT_REG$1, CommonChars$5 = CommonChars$8, memoizeFunction = memoizeFunction_1;
var OPEN_BRACE = CommonChars$5.OPEN_BRACE, CLOSE_BRACE = CommonChars$5.CLOSE_BRACE;
function createFormatMatcher$2(bracketMatcher, percentMatcher, precheck) {
  var reg = STRING_FORMAT_REG;
  var compileMemoized = memoizeFunction(compile);
  function getToken(format, match) {
    var get, token, literal, fn2;
    var bKey = match[2];
    var pLit = match[3];
    var pKey = match[5];
    if (match[4] && percentMatcher) {
      token = pKey;
      get = percentMatcher;
    } else if (bKey) {
      token = bKey;
      get = bracketMatcher;
    } else if (pLit && percentMatcher) {
      literal = pLit;
    } else {
      literal = match[1] || match[0];
    }
    if (get) {
      assertPassesPrecheck(precheck, bKey, pKey);
      fn2 = function(obj, opt) {
        return get(obj, token, opt);
      };
    }
    format.push(fn2 || getLiteral(literal));
  }
  function getSubstring(format, str, start2, end2) {
    if (end2 > start2) {
      var sub = str.slice(start2, end2);
      assertNoUnmatched(sub, OPEN_BRACE);
      assertNoUnmatched(sub, CLOSE_BRACE);
      format.push(function() {
        return sub;
      });
    }
  }
  function getLiteral(str) {
    return function() {
      return str;
    };
  }
  function assertPassesPrecheck(precheck2, bt, pt) {
    if (precheck2 && !precheck2(bt, pt)) {
      throw new TypeError("Invalid token " + (bt || pt) + " in format string");
    }
  }
  function assertNoUnmatched(str, chr2) {
    if (str.indexOf(chr2) !== -1) {
      throw new TypeError("Unmatched " + chr2 + " in format string");
    }
  }
  function compile(str) {
    var format = [], lastIndex = 0, match;
    reg.lastIndex = 0;
    while (match = reg.exec(str)) {
      getSubstring(format, str, lastIndex, match.index);
      getToken(format, match);
      lastIndex = reg.lastIndex;
    }
    getSubstring(format, str, lastIndex, str.length);
    return format;
  }
  return function(str, obj, opt) {
    var format = compileMemoized(str), result2 = "";
    for (var i = 0; i < format.length; i++) {
      result2 += format[i](obj, opt);
    }
    return result2;
  };
}
var createFormatMatcher_1 = createFormatMatcher$2;
var deepGetProperty$3 = deepGetProperty_1, createFormatMatcher$1 = createFormatMatcher_1;
var stringFormatMatcher$1 = createFormatMatcher$1(deepGetProperty$3);
var Sugar$5Z = sugarCoreExports, isObjectType$b = isObjectType_1, stringFormatMatcher = stringFormatMatcher$1;
Sugar$5Z.String.defineInstanceWithArguments({
  "format": function(str, args) {
    var arg1 = args[0] && args[0].valueOf();
    if (args.length === 1 && isObjectType$b(arg1)) {
      args = arg1;
    }
    return stringFormatMatcher(str, args);
  }
});
Sugar$5Z.String.format;
var classChecks$T = classChecks$Z;
var isString$g = classChecks$T.isString;
function numberOrIndex$2(str, n, from) {
  if (isString$g(n)) {
    n = str.indexOf(n);
    if (n === -1) {
      n = from ? str.length : 0;
    }
  }
  return n;
}
var numberOrIndex_1 = numberOrIndex$2;
var Sugar$5Y = sugarCoreExports, numberOrIndex$1 = numberOrIndex_1;
Sugar$5Y.String.defineInstance({
  "from": function(str, from) {
    return str.slice(numberOrIndex$1(str, from, true));
  }
});
Sugar$5Y.String.from;
var ENHANCEMENTS_FLAG$7 = "enhance";
var STRING_ENHANCEMENTS_FLAG$1 = "enhanceString";
function fixArgumentLength$9(fn2) {
  var staticFn = function(a) {
    var args = arguments;
    return fn2(a, args[1], args[2], args.length - 1);
  };
  staticFn.instance = function(b) {
    var args = arguments;
    return fn2(this, b, args[1], args.length);
  };
  return staticFn;
}
var fixArgumentLength_1 = fixArgumentLength$9;
var nativeIncludes$1 = String.prototype.includes;
var classChecks$S = classChecks$Z, nativeIncludes = nativeIncludes$1;
var isRegExp$5 = classChecks$S.isRegExp;
function callIncludesWithRegexSupport$1(str, search, position) {
  if (!isRegExp$5(search)) {
    return nativeIncludes.call(str, search, position);
  }
  if (position) {
    str = str.slice(position);
  }
  return search.test(str);
}
var callIncludesWithRegexSupport_1 = callIncludesWithRegexSupport$1;
var Sugar$5X = sugarCoreExports, ENHANCEMENTS_FLAG$6 = ENHANCEMENTS_FLAG$7, STRING_ENHANCEMENTS_FLAG = STRING_ENHANCEMENTS_FLAG$1, fixArgumentLength$8 = fixArgumentLength_1, callIncludesWithRegexSupport = callIncludesWithRegexSupport_1;
Sugar$5X.String.defineInstance({
  "includes": fixArgumentLength$8(callIncludesWithRegexSupport)
}, [ENHANCEMENTS_FLAG$6, STRING_ENHANCEMENTS_FLAG]);
Sugar$5X.String.includes;
var Sugar$5W = sugarCoreExports, isUndefined$j = isUndefined_1;
Sugar$5W.String.defineInstance({
  "insert": function(str, substr, index) {
    index = isUndefined$j(index) ? str.length : index;
    return str.slice(0, index) + substr + str.slice(index);
  }
});
Sugar$5W.String.insert;
var Sugar$5V = sugarCoreExports, trim$4 = trim_1;
Sugar$5V.String.defineInstance({
  "isBlank": function(str) {
    return trim$4(str).length === 0;
  }
});
Sugar$5V.String.isBlank;
var Sugar$5U = sugarCoreExports;
Sugar$5U.String.defineInstance({
  "isEmpty": function(str) {
    return str.length === 0;
  }
});
Sugar$5U.String.isEmpty;
var Sugar$5T = sugarCoreExports, isUndefined$i = isUndefined_1;
Sugar$5T.String.defineInstance({
  "last": function(str, num) {
    if (isUndefined$i(num))
      num = 1;
    var start2 = str.length - num < 0 ? 0 : str.length - num;
    return str.substr(start2);
  }
});
Sugar$5T.String.last;
var Sugar$5S = sugarCoreExports, trim$3 = trim_1, stringEach$2 = stringEach_1;
Sugar$5S.String.defineInstance({
  "lines": function(str, eachLineFn) {
    return stringEach$2(trim$3(str), /^.*$/gm, eachLineFn);
  }
});
Sugar$5S.String.lines;
function repeatString$3(str, num) {
  var result2 = "";
  str = str.toString();
  while (num > 0) {
    if (num & 1) {
      result2 += str;
    }
    if (num >>= 1) {
      str += str;
    }
  }
  return result2;
}
var repeatString_1 = repeatString$3;
var isDefined$g = isDefined_1, repeatString$2 = repeatString_1;
function padString$3(num, padding) {
  return repeatString$2(isDefined$g(padding) ? padding : " ", num);
}
var padString_1 = padString$3;
var mathAliases$z = {
  abs: Math.abs,
  pow: Math.pow,
  min: Math.min,
  max: Math.max,
  ceil: Math.ceil,
  floor: Math.floor,
  round: Math.round
};
var mathAliases$y = mathAliases$z;
var ceil$8 = mathAliases$y.ceil, floor$5 = mathAliases$y.floor;
var trunc$c = Math.trunc || function(n) {
  if (n === 0 || !isFinite(n))
    return n;
  return n < 0 ? ceil$8(n) : floor$5(n);
};
var trunc_1 = trunc$c;
var trunc$b = trunc_1, classChecks$R = classChecks$Z;
var isNumber$c = classChecks$R.isNumber;
function coercePositiveInteger$6(n) {
  n = +n || 0;
  if (n < 0 || !isNumber$c(n) || !isFinite(n)) {
    throw new RangeError("Invalid number");
  }
  return trunc$b(n);
}
var coercePositiveInteger_1 = coercePositiveInteger$6;
var Sugar$5R = sugarCoreExports, padString$2 = padString_1, mathAliases$x = mathAliases$z, coercePositiveInteger$5 = coercePositiveInteger_1;
var max$a = mathAliases$x.max, ceil$7 = mathAliases$x.ceil, floor$4 = mathAliases$x.floor;
Sugar$5R.String.defineInstance({
  "pad": function(str, num, padding) {
    var half, front, back;
    num = coercePositiveInteger$5(num);
    half = max$a(0, num - str.length) / 2;
    front = floor$4(half);
    back = ceil$7(half);
    return padString$2(front, padding) + str + padString$2(back, padding);
  }
});
Sugar$5R.String.pad;
var Sugar$5Q = sugarCoreExports, padString$1 = padString_1, mathAliases$w = mathAliases$z, coercePositiveInteger$4 = coercePositiveInteger_1;
var max$9 = mathAliases$w.max;
Sugar$5Q.String.defineInstance({
  "padLeft": function(str, num, padding) {
    num = coercePositiveInteger$4(num);
    return padString$1(max$9(0, num - str.length), padding) + str;
  }
});
Sugar$5Q.String.padLeft;
var Sugar$5P = sugarCoreExports, padString = padString_1, mathAliases$v = mathAliases$z, coercePositiveInteger$3 = coercePositiveInteger_1;
var max$8 = mathAliases$v.max;
Sugar$5P.String.defineInstance({
  "padRight": function(str, num, padding) {
    num = coercePositiveInteger$3(num);
    return str + padString(max$8(0, num - str.length), padding);
  }
});
Sugar$5P.String.padRight;
var escapeRegExp$4 = escapeRegExp_1;
function stringParameterize$1(str, separator) {
  if (separator === void 0)
    separator = "-";
  str = str.replace(/[^a-z0-9\-_]+/gi, separator);
  if (separator) {
    var reg = RegExp("^{s}+|{s}+$|({s}){s}+".split("{s}").join(escapeRegExp$4(separator)), "g");
    str = str.replace(reg, "$1");
  }
  return encodeURI(str.toLowerCase());
}
var stringParameterize_1 = stringParameterize$1;
var Sugar$5O = sugarCoreExports, stringParameterize = stringParameterize_1;
Sugar$5O.String.defineInstance({
  "parameterize": function(str, separator) {
    return stringParameterize(str, separator);
  }
});
Sugar$5O.String.parameterize;
var Sugar$5N = sugarCoreExports;
Sugar$5N.String.defineInstance({
  "remove": function(str, f) {
    return str.replace(f, "");
  }
});
Sugar$5N.String.remove;
var classChecks$Q = classChecks$Z, escapeRegExp$3 = escapeRegExp_1, getRegExpFlags$4 = getRegExpFlags_1;
var isString$f = classChecks$Q.isString;
function stringReplaceAll$2(str, f, replace) {
  var i = 0, tokens;
  if (isString$f(f)) {
    f = RegExp(escapeRegExp$3(f), "g");
  } else if (f && !f.global) {
    f = RegExp(f.source, getRegExpFlags$4(f, "g"));
  }
  if (!replace) {
    replace = "";
  } else {
    tokens = replace;
    replace = function() {
      var t = tokens[i++];
      return t != null ? t : "";
    };
  }
  return str.replace(f, replace);
}
var stringReplaceAll_1 = stringReplaceAll$2;
var Sugar$5M = sugarCoreExports, stringReplaceAll$1 = stringReplaceAll_1;
Sugar$5M.String.defineInstance({
  "removeAll": function(str, f) {
    return stringReplaceAll$1(str, f);
  }
});
Sugar$5M.String.removeAll;
var HTML_VOID_ELEMENTS$1 = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var HTML_VOID_ELEMENTS_1 = HTML_VOID_ELEMENTS$1;
function indexOf$3(arr, el) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (i in arr && arr[i] === el)
      return i;
  }
  return -1;
}
var indexOf_1 = indexOf$3;
var HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS_1, indexOf$2 = indexOf_1;
function tagIsVoid$1(tag) {
  return indexOf$2(HTML_VOID_ELEMENTS, tag.toLowerCase()) !== -1;
}
var tagIsVoid_1 = tagIsVoid$1;
var tagIsVoid = tagIsVoid_1, classChecks$P = classChecks$Z;
var isString$e = classChecks$P.isString;
function runTagReplacements$1(str, reg, strip, replacement, fullString) {
  var match;
  var result2 = "";
  var currentIndex = 0;
  var openTagName;
  var openTagAttributes;
  var openTagCount = 0;
  function processTag(index, tagName2, attributes2, tagLength2, isVoid2) {
    var content = str.slice(currentIndex, index), s = "", r = "";
    if (isString$e(replacement)) {
      r = replacement;
    } else if (replacement) {
      r = replacement.call(fullString, tagName2, content, attributes2, fullString) || "";
    }
    if (strip) {
      s = r;
    } else {
      content = r;
    }
    if (content) {
      content = runTagReplacements$1(content, reg, strip, replacement, fullString);
    }
    result2 += s + content + (isVoid2 ? "" : s);
    currentIndex = index + (tagLength2 || 0);
  }
  fullString = fullString || str;
  reg = RegExp(reg.source, "gi");
  while (match = reg.exec(str)) {
    var tagName = match[2];
    var attributes = (match[3] || "").slice(1);
    var isClosingTag = !!match[1];
    var isSelfClosing = !!match[4];
    var tagLength = match[0].length;
    var isVoid = tagIsVoid(tagName);
    var isOpeningTag = !isClosingTag && !isSelfClosing && !isVoid;
    var isSameAsCurrent = tagName === openTagName;
    if (!openTagName) {
      result2 += str.slice(currentIndex, match.index);
      currentIndex = match.index;
    }
    if (isOpeningTag) {
      if (!openTagName) {
        openTagName = tagName;
        openTagAttributes = attributes;
        openTagCount++;
        currentIndex += tagLength;
      } else if (isSameAsCurrent) {
        openTagCount++;
      }
    } else if (isClosingTag && isSameAsCurrent) {
      openTagCount--;
      if (openTagCount === 0) {
        processTag(match.index, openTagName, openTagAttributes, tagLength, isVoid);
        openTagName = null;
        openTagAttributes = null;
      }
    } else if (!openTagName) {
      processTag(match.index, tagName, attributes, tagLength, isVoid);
    }
  }
  if (openTagName) {
    processTag(str.length, openTagName, openTagAttributes);
  }
  result2 += str.slice(currentIndex);
  return result2;
}
var runTagReplacements_1 = runTagReplacements$1;
var map$5 = map_1, classChecks$O = classChecks$Z, escapeRegExp$2 = escapeRegExp_1, runTagReplacements = runTagReplacements_1;
var isString$d = classChecks$O.isString;
function replaceTags$2(str, find, replacement, strip) {
  var tags = isString$d(find) ? [find] : find, reg, src;
  tags = map$5(tags || [], function(t) {
    return escapeRegExp$2(t);
  }).join("|");
  src = tags.replace("all", "") || "[^\\s>]+";
  src = "<(\\/)?(" + src + ")(\\s+[^<>]*?)?\\s*(\\/)?>";
  reg = RegExp(src, "gi");
  return runTagReplacements(str.toString(), reg, strip, replacement);
}
var replaceTags_1 = replaceTags$2;
var Sugar$5L = sugarCoreExports, replaceTags$1 = replaceTags_1;
Sugar$5L.String.defineInstance({
  "removeTags": function(str, tag, replace) {
    return replaceTags$1(str, tag, replace, false);
  }
});
Sugar$5L.String.removeTags;
var Sugar$5K = sugarCoreExports, stringReplaceAll = stringReplaceAll_1;
Sugar$5K.String.defineInstanceWithArguments({
  "replaceAll": function(str, f, args) {
    return stringReplaceAll(str, f, args);
  }
});
Sugar$5K.String.replaceAll;
function reverseString$2(str) {
  return str.split("").reverse().join("");
}
var reverseString_1 = reverseString$2;
var Sugar$5J = sugarCoreExports, reverseString$1 = reverseString_1;
Sugar$5J.String.defineInstance({
  "reverse": function(str) {
    return reverseString$1(str);
  }
});
Sugar$5J.String.reverse;
var Sugar$5I = sugarCoreExports, chr$4 = chr$6, stringCodes = stringCodes_1;
Sugar$5I.String.defineInstance({
  "shift": function(str, n) {
    var result2 = "";
    n = n || 0;
    stringCodes(str, function(c) {
      result2 += chr$4(c + n);
    });
    return result2;
  }
});
Sugar$5I.String.shift;
var stringUnderscore$1 = stringUnderscore_1;
function stringSpacify$2(str) {
  return stringUnderscore$1(str).replace(/_/g, " ");
}
var stringSpacify_1 = stringSpacify$2;
var Sugar$5H = sugarCoreExports, stringSpacify$1 = stringSpacify_1;
Sugar$5H.String.defineInstance({
  "spacify": function(str) {
    return stringSpacify$1(str);
  }
});
Sugar$5H.String.spacify;
var Sugar$5G = sugarCoreExports, replaceTags = replaceTags_1;
Sugar$5G.String.defineInstance({
  "stripTags": function(str, tag, replace) {
    return replaceTags(str, tag, replace, true);
  }
});
Sugar$5G.String.stripTags;
var DOWNCASED_WORDS$1 = [
  "and",
  "or",
  "nor",
  "a",
  "an",
  "the",
  "so",
  "but",
  "to",
  "of",
  "at",
  "by",
  "from",
  "into",
  "on",
  "onto",
  "off",
  "out",
  "in",
  "over",
  "with",
  "for"
];
var DOWNCASED_WORDS_1 = DOWNCASED_WORDS$1;
var trim$2 = trim_1, stringEach$1 = stringEach_1;
function eachWord$1(str, fn2) {
  return stringEach$1(trim$2(str), /\S+/g, fn2);
}
var eachWord_1 = eachWord$1;
var Inflections$1 = Inflections$4;
function getHumanWord$1(str) {
  return Inflections$1.human && Inflections$1.human.find(str);
}
var getHumanWord_1 = getHumanWord$1;
var Inflections = Inflections$4;
function runHumanRules$1(str) {
  return Inflections.human && Inflections.human.runRules(str) || str;
}
var runHumanRules_1 = runHumanRules$1;
var DOWNCASED_WORDS = DOWNCASED_WORDS_1, indexOf$1 = indexOf_1, eachWord = eachWord_1, getAcronym = getAcronym_1, getHumanWord = getHumanWord_1, runHumanRules = runHumanRules_1, stringSpacify = stringSpacify_1, stringCapitalize = stringCapitalize_1;
function stringTitleize$1(str) {
  var fullStopPunctuation = /[.:;!]$/, lastHadPunctuation;
  str = runHumanRules(str);
  str = stringSpacify(str);
  return eachWord(str, function(word, index, words) {
    word = getHumanWord(word) || word;
    word = getAcronym(word) || word;
    var hasPunctuation, isFirstOrLast;
    var first = index == 0, last = index == words.length - 1;
    hasPunctuation = fullStopPunctuation.test(word);
    isFirstOrLast = first || last || hasPunctuation || lastHadPunctuation;
    lastHadPunctuation = hasPunctuation;
    if (isFirstOrLast || indexOf$1(DOWNCASED_WORDS, word) === -1) {
      return stringCapitalize(word, false, true);
    } else {
      return word;
    }
  }).join(" ");
}
var stringTitleize_1 = stringTitleize$1;
var Sugar$5F = sugarCoreExports, stringTitleize = stringTitleize_1;
Sugar$5F.String.defineInstance({
  "titleize": function(str) {
    return stringTitleize(str);
  }
});
Sugar$5F.String.titleize;
var Sugar$5E = sugarCoreExports, isUndefined$h = isUndefined_1, numberOrIndex = numberOrIndex_1;
Sugar$5E.String.defineInstance({
  "to": function(str, to) {
    if (isUndefined$h(to))
      to = str.length;
    return str.slice(0, numberOrIndex(str, to));
  }
});
Sugar$5E.String.to;
function allCharsReg$2(src) {
  return RegExp("[" + src + "]", "g");
}
var allCharsReg_1 = allCharsReg$2;
var CommonChars$4 = CommonChars$8, chr$3 = chr$6, allCharsReg$1 = allCharsReg_1;
var HALF_WIDTH_ZERO$1 = CommonChars$4.HALF_WIDTH_ZERO, FULL_WIDTH_ZERO$1 = CommonChars$4.FULL_WIDTH_ZERO, HALF_WIDTH_PERIOD$2 = CommonChars$4.HALF_WIDTH_PERIOD, FULL_WIDTH_PERIOD = CommonChars$4.FULL_WIDTH_PERIOD, HALF_WIDTH_COMMA$2 = CommonChars$4.HALF_WIDTH_COMMA;
var fullWidthNumberReg$1, fullWidthNumberMap$2, fullWidthNumbers$1;
function buildFullWidthNumber() {
  var fwp = FULL_WIDTH_PERIOD, hwp = HALF_WIDTH_PERIOD$2, hwc = HALF_WIDTH_COMMA$2, fwn = "";
  fullWidthNumberMap$2 = {};
  for (var i = 0, digit; i <= 9; i++) {
    digit = chr$3(i + FULL_WIDTH_ZERO$1);
    fwn += digit;
    fullWidthNumberMap$2[digit] = chr$3(i + HALF_WIDTH_ZERO$1);
  }
  fullWidthNumberMap$2[hwc] = "";
  fullWidthNumberMap$2[fwp] = hwp;
  fullWidthNumberMap$2[hwp] = hwp;
  fullWidthNumberReg$1 = allCharsReg$1(fwn + fwp + hwc + hwp);
  fullWidthNumbers$1 = fwn;
}
buildFullWidthNumber();
var fullwidthNumberHelpers$2 = {
  fullWidthNumberReg: fullWidthNumberReg$1,
  fullWidthNumberMap: fullWidthNumberMap$2,
  fullWidthNumbers: fullWidthNumbers$1
};
var CommonChars$3 = CommonChars$8, coreUtilityAliases$E = coreUtilityAliases$M, fullwidthNumberHelpers$1 = fullwidthNumberHelpers$2;
var fullWidthNumberReg = fullwidthNumberHelpers$1.fullWidthNumberReg, fullWidthNumberMap$1 = fullwidthNumberHelpers$1.fullWidthNumberMap, getOwn$b = coreUtilityAliases$E.getOwn, HALF_WIDTH_PERIOD$1 = CommonChars$3.HALF_WIDTH_PERIOD;
function stringToNumber$2(str, base) {
  var sanitized, isDecimal;
  sanitized = str.replace(fullWidthNumberReg, function(chr2) {
    var replacement = getOwn$b(fullWidthNumberMap$1, chr2);
    if (replacement === HALF_WIDTH_PERIOD$1) {
      isDecimal = true;
    }
    return replacement;
  });
  return isDecimal ? parseFloat(sanitized) : parseInt(sanitized, base || 10);
}
var stringToNumber_1 = stringToNumber$2;
var Sugar$5D = sugarCoreExports, stringToNumber$1 = stringToNumber_1;
Sugar$5D.String.defineInstance({
  "toNumber": function(str, base) {
    return stringToNumber$1(str, base);
  }
});
Sugar$5D.String.toNumber;
var TRIM_CHARS$3 = "	\n\v\f\r   ᠎             \u2028\u2029　\uFEFF";
var TRIM_CHARS$2 = TRIM_CHARS$3;
var LEFT_TRIM_REG$1 = RegExp("^[" + TRIM_CHARS$2 + "]+");
var Sugar$5C = sugarCoreExports, LEFT_TRIM_REG = LEFT_TRIM_REG$1;
Sugar$5C.String.defineInstance({
  "trimLeft": function(str) {
    return str.replace(LEFT_TRIM_REG, "");
  }
});
Sugar$5C.String.trimLeft;
var TRIM_CHARS$1 = TRIM_CHARS$3;
var RIGHT_TRIM_REG$1 = RegExp("[" + TRIM_CHARS$1 + "]+$");
var Sugar$5B = sugarCoreExports, RIGHT_TRIM_REG = RIGHT_TRIM_REG$1;
Sugar$5B.String.defineInstance({
  "trimRight": function(str) {
    return str.replace(RIGHT_TRIM_REG, "");
  }
});
Sugar$5B.String.trimRight;
var TRIM_CHARS = TRIM_CHARS$3;
var TRUNC_REG$1 = RegExp("(?=[" + TRIM_CHARS + "])");
function filter$3(arr, fn2) {
  var result2 = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    var el = arr[i];
    if (i in arr && fn2(el, i)) {
      result2.push(el);
    }
  }
  return result2;
}
var filter_1 = filter$3;
var TRUNC_REG = TRUNC_REG$1, filter$2 = filter_1, reverseString = reverseString_1;
function truncateOnWord$1(str, limit, fromLeft) {
  if (fromLeft) {
    return reverseString(truncateOnWord$1(reverseString(str), limit));
  }
  var words = str.split(TRUNC_REG);
  var count = 0;
  return filter$2(words, function(word) {
    count += word.length;
    return count <= limit;
  }).join("");
}
var truncateOnWord_1 = truncateOnWord$1;
var isUndefined$g = isUndefined_1, mathAliases$u = mathAliases$z, truncateOnWord = truncateOnWord_1;
var ceil$6 = mathAliases$u.ceil, floor$3 = mathAliases$u.floor;
function truncateString$2(str, length, from, ellipsis, split) {
  var str1, str2, len1, len2;
  if (str.length <= length) {
    return str.toString();
  }
  ellipsis = isUndefined$g(ellipsis) ? "..." : ellipsis;
  switch (from) {
    case "left":
      str2 = split ? truncateOnWord(str, length, true) : str.slice(str.length - length);
      return ellipsis + str2;
    case "middle":
      len1 = ceil$6(length / 2);
      len2 = floor$3(length / 2);
      str1 = split ? truncateOnWord(str, len1) : str.slice(0, len1);
      str2 = split ? truncateOnWord(str, len2, true) : str.slice(str.length - len2);
      return str1 + ellipsis + str2;
    default:
      str1 = split ? truncateOnWord(str, length) : str.slice(0, length);
      return str1 + ellipsis;
  }
}
var truncateString_1 = truncateString$2;
var Sugar$5A = sugarCoreExports, truncateString$1 = truncateString_1;
Sugar$5A.String.defineInstance({
  "truncate": function(str, length, from, ellipsis) {
    return truncateString$1(str, length, from, ellipsis);
  }
});
Sugar$5A.String.truncate;
var Sugar$5z = sugarCoreExports, truncateString = truncateString_1;
Sugar$5z.String.defineInstance({
  "truncateOnWord": function(str, length, from, ellipsis) {
    return truncateString(str, length, from, ellipsis, true);
  }
});
Sugar$5z.String.truncateOnWord;
var Sugar$5y = sugarCoreExports, stringUnderscore = stringUnderscore_1;
Sugar$5y.String.defineInstance({
  "underscore": function(str) {
    return stringUnderscore(str);
  }
});
Sugar$5y.String.underscore;
var HTML_ENTITY_REG$1 = /&#?(x)?([\w\d]{0,5});/gi;
var HTML_ENTITY_REG = HTML_ENTITY_REG$1, HTMLFromEntityMap = HTMLFromEntityMap_1, chr$2 = chr$6;
function unescapeHTML$1(str) {
  return str.replace(HTML_ENTITY_REG, function(full, hex, code) {
    var special = HTMLFromEntityMap[code];
    return special || chr$2(hex ? parseInt(code, 16) : +code);
  });
}
var unescapeHTML_1 = unescapeHTML$1;
var Sugar$5x = sugarCoreExports, unescapeHTML = unescapeHTML_1;
Sugar$5x.String.defineInstance({
  "unescapeHTML": function(str) {
    return unescapeHTML(str);
  }
});
Sugar$5x.String.unescapeHTML;
var Sugar$5w = sugarCoreExports;
Sugar$5w.String.defineInstance({
  "unescapeURL": function(str, param) {
    return param ? decodeURI(str) : decodeURIComponent(str);
  }
});
Sugar$5w.String.unescapeURL;
var Sugar$5v = sugarCoreExports, trim$1 = trim_1, stringEach = stringEach_1;
Sugar$5v.String.defineInstance({
  "words": function(str, eachWordFn) {
    return stringEach(trim$1(str), /\S+/g, eachWordFn);
  }
});
Sugar$5v.String.words;
var Sugar$5u = sugarCoreExports, trunc$a = trunc_1, mathAliases$t = mathAliases$z, isUndefined$f = isUndefined_1;
var min$6 = mathAliases$t.min, max$7 = mathAliases$t.max;
Sugar$5u.Number.defineStatic({
  "random": function(n1, n2) {
    var minNum, maxNum;
    if (arguments.length == 1)
      n2 = n1, n1 = 0;
    minNum = min$6(n1 || 0, isUndefined$f(n2) ? 1 : n2);
    maxNum = max$7(n1 || 0, isUndefined$f(n2) ? 1 : n2) + 1;
    return trunc$a(Math.random() * (maxNum - minNum) + minNum);
  }
});
Sugar$5u.Number.random;
var AbbreviationUnits$3 = {
  BASIC_UNITS: "|kmbt",
  MEMORY_UNITS: "|KMGTPE",
  MEMORY_BINARY_UNITS: "|,Ki,Mi,Gi,Ti,Pi,Ei",
  METRIC_UNITS_SHORT: "nμm|k",
  METRIC_UNITS_FULL: "yzafpnμm|KMGTPEZY"
};
var CommonChars$2 = CommonChars$8;
var HALF_WIDTH_COMMA$1 = CommonChars$2.HALF_WIDTH_COMMA;
function commaSplit$2(str) {
  return str.split(HALF_WIDTH_COMMA$1);
}
var commaSplit_1 = commaSplit$2;
var mathAliases$s = mathAliases$z;
var abs$9 = mathAliases$s.abs, pow$2 = mathAliases$s.pow, round$4 = mathAliases$s.round;
function withPrecision$5(val, precision, fn2) {
  var multiplier = pow$2(10, abs$9(precision || 0));
  fn2 = fn2 || round$4;
  if (precision < 0)
    multiplier = 1 / multiplier;
  return fn2(val * multiplier) / multiplier;
}
var withPrecision_1 = withPrecision$5;
var CommonChars$1 = CommonChars$8;
var HALF_WIDTH_PERIOD = CommonChars$1.HALF_WIDTH_PERIOD, HALF_WIDTH_COMMA = CommonChars$1.HALF_WIDTH_COMMA;
var NUMBER_OPTIONS$1 = {
  "decimal": HALF_WIDTH_PERIOD,
  "thousands": HALF_WIDTH_COMMA
};
var NUMBER_OPTIONS_1 = NUMBER_OPTIONS$1;
var Sugar$5t = sugarCoreExports;
var namespaceAliases$e = {
  sugarObject: Sugar$5t.Object,
  sugarArray: Sugar$5t.Array,
  sugarDate: Sugar$5t.Date,
  sugarString: Sugar$5t.String,
  sugarNumber: Sugar$5t.Number,
  sugarFunction: Sugar$5t.Function,
  sugarRegExp: Sugar$5t.RegExp
};
var coreUtilityAliases$D = coreUtilityAliases$M;
var forEachProperty$m = coreUtilityAliases$D.forEachProperty;
function simpleMerge$4(target, source) {
  forEachProperty$m(source, function(val, key) {
    target[key] = val;
  });
  return target;
}
var simpleMerge_1 = simpleMerge$4;
var simpleMerge$3 = simpleMerge_1;
function simpleClone$4(obj) {
  return simpleMerge$3({}, obj);
}
var simpleClone_1 = simpleClone$4;
var coreUtilityAliases$C = coreUtilityAliases$M;
var setProperty$1 = coreUtilityAliases$C.setProperty;
function defineAccessor$1(namespace, name, fn2) {
  setProperty$1(namespace, name, fn2);
}
var defineAccessor_1 = defineAccessor$1;
var simpleClone$3 = simpleClone_1, defineAccessor = defineAccessor_1, coreUtilityAliases$B = coreUtilityAliases$M;
var forEachProperty$l = coreUtilityAliases$B.forEachProperty;
function defineOptionsAccessor$3(namespace, defaults2) {
  var obj = simpleClone$3(defaults2);
  function getOption(name) {
    return obj[name];
  }
  function setOption(arg1, arg2) {
    var options;
    if (arguments.length === 1) {
      options = arg1;
    } else {
      options = {};
      options[arg1] = arg2;
    }
    forEachProperty$l(options, function(val, name) {
      if (val === null) {
        val = defaults2[name];
      }
      obj[name] = val;
    });
  }
  defineAccessor(namespace, "getOption", getOption);
  defineAccessor(namespace, "setOption", setOption);
  return getOption;
}
var defineOptionsAccessor_1 = defineOptionsAccessor$3;
var NUMBER_OPTIONS = NUMBER_OPTIONS_1, namespaceAliases$d = namespaceAliases$e, defineOptionsAccessor$2 = defineOptionsAccessor_1;
var sugarNumber$2 = namespaceAliases$d.sugarNumber;
var _numberOptions$1 = defineOptionsAccessor$2(sugarNumber$2, NUMBER_OPTIONS);
var classChecks$N = classChecks$Z, mathAliases$r = mathAliases$z, periodSplit$1 = periodSplit_1, repeatString$1 = repeatString_1, withPrecision$4 = withPrecision_1, _numberOptions = _numberOptions$1;
var isNumber$b = classChecks$N.isNumber, max$6 = mathAliases$r.max;
function numberFormat$2(num, place) {
  var result2 = "", thousands, decimal, fraction, integer, split, str;
  decimal = _numberOptions("decimal");
  thousands = _numberOptions("thousands");
  if (isNumber$b(place)) {
    str = withPrecision$4(num, place || 0).toFixed(max$6(place, 0));
  } else {
    str = num.toString();
  }
  str = str.replace(/^-/, "");
  split = periodSplit$1(str);
  integer = split[0];
  fraction = split[1];
  if (/e/.test(str)) {
    result2 = str;
  } else {
    for (var i = integer.length; i > 0; i -= 3) {
      if (i < integer.length) {
        result2 = thousands + result2;
      }
      result2 = integer.slice(max$6(0, i - 3), i) + result2;
    }
  }
  if (fraction) {
    result2 += decimal + repeatString$1("0", (place || 0) - fraction.length) + fraction;
  }
  return (num < 0 ? "-" : "") + result2;
}
var numberFormat_1 = numberFormat$2;
var commaSplit$1 = commaSplit_1, mathAliases$q = mathAliases$z, numberFormat$1 = numberFormat_1, withPrecision$3 = withPrecision_1;
var abs$8 = mathAliases$q.abs, pow$1 = mathAliases$q.pow, min$5 = mathAliases$q.min, max$5 = mathAliases$q.max, floor$2 = mathAliases$q.floor;
function abbreviateNumber$3(num, precision, ustr, bytes) {
  var fixed = num.toFixed(20), decimalPlace = fixed.search(/\./), numeralPlace = fixed.search(/[1-9]/), significant = decimalPlace - numeralPlace, units, unit, mid, i, divisor;
  if (significant > 0) {
    significant -= 1;
  }
  units = commaSplit$1(ustr);
  if (units.length === 1) {
    units = ustr.split("");
  }
  mid = units.indexOf("|");
  if (mid === -1) {
    mid = units[0] === "_" ? 0 : units.length;
  }
  i = max$5(min$5(floor$2(significant / 3), units.length - mid - 1), -mid);
  unit = units[i + mid];
  while (unit === "_") {
    i += i < 0 ? -1 : 1;
    unit = units[i + mid];
  }
  if (unit === "|") {
    unit = "";
  }
  if (significant < -9) {
    precision = abs$8(significant) - 9;
  }
  divisor = bytes ? pow$1(2, 10 * i) : pow$1(10, i * 3);
  return numberFormat$1(withPrecision$3(num / divisor, precision || 0)) + unit;
}
var abbreviateNumber_1 = abbreviateNumber$3;
var Sugar$5s = sugarCoreExports, AbbreviationUnits$2 = AbbreviationUnits$3, abbreviateNumber$2 = abbreviateNumber_1;
var BASIC_UNITS = AbbreviationUnits$2.BASIC_UNITS;
Sugar$5s.Number.defineInstance({
  "abbr": function(n, precision) {
    return abbreviateNumber$2(n, precision, BASIC_UNITS);
  }
});
Sugar$5s.Number.abbr;
function wrapNamespace$1(method) {
  return function(sugarNamespace, arg1, arg2) {
    sugarNamespace[method](arg1, arg2);
  };
}
var wrapNamespace_1 = wrapNamespace$1;
var wrapNamespace = wrapNamespace_1;
var methodDefineAliases$3 = {
  alias: wrapNamespace("alias"),
  defineStatic: wrapNamespace("defineStatic"),
  defineInstance: wrapNamespace("defineInstance"),
  defineStaticPolyfill: wrapNamespace("defineStaticPolyfill"),
  defineInstancePolyfill: wrapNamespace("defineInstancePolyfill"),
  defineInstanceAndStatic: wrapNamespace("defineInstanceAndStatic"),
  defineInstanceWithArguments: wrapNamespace("defineInstanceWithArguments")
};
var forEach$g = forEach_1, spaceSplit$4 = spaceSplit_1, classChecks$M = classChecks$Z;
var isString$c = classChecks$M.isString;
function collectSimilarMethods$2(set, fn2) {
  var methods = {};
  if (isString$c(set)) {
    set = spaceSplit$4(set);
  }
  forEach$g(set, function(el, i) {
    fn2(methods, el, i);
  });
  return methods;
}
var collectSimilarMethods_1 = collectSimilarMethods$2;
var methodDefineAliases$2 = methodDefineAliases$3, collectSimilarMethods$1 = collectSimilarMethods_1;
var defineInstance = methodDefineAliases$2.defineInstance;
function defineInstanceSimilar$5(sugarNamespace, set, fn2, flags) {
  defineInstance(sugarNamespace, collectSimilarMethods$1(set, fn2), flags);
}
var defineInstanceSimilar_1 = defineInstanceSimilar$5;
var namespaceAliases$c = namespaceAliases$e, defineInstanceSimilar$4 = defineInstanceSimilar_1;
var sugarNumber$1 = namespaceAliases$c.sugarNumber;
function buildMathAliases$1() {
  defineInstanceSimilar$4(sugarNumber$1, "abs pow sin asin cos acos tan atan exp pow sqrt", function(methods, name) {
    methods[name] = function(n, arg) {
      return Math[name](n.valueOf(), arg);
    };
  });
}
var buildMathAliases_1 = buildMathAliases$1;
var buildMathAliases = buildMathAliases_1;
buildMathAliases();
var Sugar$5r = sugarCoreExports;
Sugar$5r.Number.abs;
var Sugar$5q = sugarCoreExports;
Sugar$5q.Number.acos;
var Sugar$5p = sugarCoreExports;
Sugar$5p.Number.asin;
var Sugar$5o = sugarCoreExports;
Sugar$5o.Number.atan;
var Sugar$5n = sugarCoreExports, AbbreviationUnits$1 = AbbreviationUnits$3, abbreviateNumber$1 = abbreviateNumber_1;
var MEMORY_UNITS = AbbreviationUnits$1.MEMORY_UNITS, MEMORY_BINARY_UNITS = AbbreviationUnits$1.MEMORY_BINARY_UNITS;
Sugar$5n.Number.defineInstance({
  "bytes": function(n, precision, binary, units) {
    if (units === "binary" || !units && binary) {
      units = MEMORY_BINARY_UNITS;
    } else if (units === "si" || !units) {
      units = MEMORY_UNITS;
    }
    return abbreviateNumber$1(n, precision, units, binary) + "B";
  }
});
Sugar$5n.Number.bytes;
var withPrecision$2 = withPrecision_1;
function createRoundingFunction$3(fn2) {
  return function(n, precision) {
    return precision ? withPrecision$2(n, precision, fn2) : fn2(n);
  };
}
var createRoundingFunction_1 = createRoundingFunction$3;
var Sugar$5m = sugarCoreExports, mathAliases$p = mathAliases$z, createRoundingFunction$2 = createRoundingFunction_1;
var ceil$5 = mathAliases$p.ceil;
Sugar$5m.Number.defineInstance({
  "ceil": createRoundingFunction$2(ceil$5)
});
Sugar$5m.Number.ceil;
var Sugar$5l = sugarCoreExports, chr$1 = chr$6;
Sugar$5l.Number.defineInstance({
  "chr": function(n) {
    return chr$1(n);
  }
});
Sugar$5l.Number.chr;
var Sugar$5k = sugarCoreExports;
Sugar$5k.Number.cos;
var Sugar$5j = sugarCoreExports;
Sugar$5j.Number.exp;
var Sugar$5i = sugarCoreExports, mathAliases$o = mathAliases$z, createRoundingFunction$1 = createRoundingFunction_1;
var floor$1 = mathAliases$o.floor;
Sugar$5i.Number.defineInstance({
  "floor": createRoundingFunction$1(floor$1)
});
Sugar$5i.Number.floor;
var Sugar$5h = sugarCoreExports, numberFormat = numberFormat_1;
Sugar$5h.Number.defineInstance({
  "format": function(n, place) {
    return numberFormat(n, place);
  }
});
Sugar$5h.Number.format;
var mathAliases$n = mathAliases$z, repeatString = repeatString_1;
var abs$7 = mathAliases$n.abs;
function padNumber$5(num, place, sign, base, replacement) {
  var str = abs$7(num).toString(base || 10);
  str = repeatString(replacement || "0", place - str.replace(/\.\d+/, "").length) + str;
  if (sign || num < 0) {
    str = (num < 0 ? "-" : "+") + str;
  }
  return str;
}
var padNumber_1 = padNumber$5;
var Sugar$5g = sugarCoreExports, padNumber$4 = padNumber_1;
Sugar$5g.Number.defineInstance({
  "hex": function(n, pad) {
    return padNumber$4(n, pad || 1, false, 16);
  }
});
Sugar$5g.Number.hex;
function isMultipleOf$3(n1, n2) {
  return n1 % n2 === 0;
}
var isMultipleOf_1 = isMultipleOf$3;
var Sugar$5f = sugarCoreExports, isMultipleOf$2 = isMultipleOf_1;
Sugar$5f.Number.defineInstance({
  "isEven": function(n) {
    return isMultipleOf$2(n, 2);
  }
});
Sugar$5f.Number.isEven;
function isInteger$2(n) {
  return n % 1 === 0;
}
var isInteger_1 = isInteger$2;
var Sugar$5e = sugarCoreExports, isInteger$1 = isInteger_1;
Sugar$5e.Number.defineInstance({
  "isInteger": function(n) {
    return isInteger$1(n);
  }
});
Sugar$5e.Number.isInteger;
var Sugar$5d = sugarCoreExports, isMultipleOf$1 = isMultipleOf_1;
Sugar$5d.Number.defineInstance({
  "isMultipleOf": function(n, num) {
    return isMultipleOf$1(n, num);
  }
});
Sugar$5d.Number.isMultipleOf;
var Sugar$5c = sugarCoreExports, isInteger = isInteger_1, isMultipleOf = isMultipleOf_1;
Sugar$5c.Number.defineInstance({
  "isOdd": function(n) {
    return isInteger(n) && !isMultipleOf(n, 2);
  }
});
Sugar$5c.Number.isOdd;
var Sugar$5b = sugarCoreExports;
Sugar$5b.Number.defineInstance({
  "log": function(n, base) {
    return Math.log(n) / (base ? Math.log(base) : 1);
  }
});
Sugar$5b.Number.log;
var Sugar$5a = sugarCoreExports, AbbreviationUnits = AbbreviationUnits$3, abbreviateNumber = abbreviateNumber_1;
var METRIC_UNITS_SHORT = AbbreviationUnits.METRIC_UNITS_SHORT, METRIC_UNITS_FULL = AbbreviationUnits.METRIC_UNITS_FULL;
Sugar$5a.Number.defineInstance({
  "metric": function(n, precision, units) {
    if (units === "all") {
      units = METRIC_UNITS_FULL;
    } else if (!units) {
      units = METRIC_UNITS_SHORT;
    }
    return abbreviateNumber(n, precision, units);
  }
});
Sugar$5a.Number.metric;
function getOrdinalSuffix$2(num) {
  if (num >= 11 && num <= 13) {
    return "th";
  } else {
    switch (num % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}
var getOrdinalSuffix_1 = getOrdinalSuffix$2;
var Sugar$59 = sugarCoreExports, mathAliases$m = mathAliases$z, getOrdinalSuffix$1 = getOrdinalSuffix_1;
var abs$6 = mathAliases$m.abs;
Sugar$59.Number.defineInstance({
  "ordinalize": function(n) {
    var num = abs$6(n), last = +num.toString().slice(-2);
    return n + getOrdinalSuffix$1(last);
  }
});
Sugar$59.Number.ordinalize;
var Sugar$58 = sugarCoreExports, padNumber$3 = padNumber_1;
Sugar$58.Number.defineInstance({
  "pad": function(n, place, sign, base) {
    return padNumber$3(n, place, sign, base);
  }
});
Sugar$58.Number.pad;
var Sugar$57 = sugarCoreExports;
Sugar$57.Number.pow;
var Sugar$56 = sugarCoreExports, mathAliases$l = mathAliases$z, createRoundingFunction = createRoundingFunction_1;
var round$3 = mathAliases$l.round;
Sugar$56.Number.defineInstance({
  "round": createRoundingFunction(round$3)
});
Sugar$56.Number.round;
var Sugar$55 = sugarCoreExports;
Sugar$55.Number.sin;
var Sugar$54 = sugarCoreExports;
Sugar$54.Number.sqrt;
var Sugar$53 = sugarCoreExports;
Sugar$53.Number.tan;
var Sugar$52 = sugarCoreExports, isDefined$f = isDefined_1;
Sugar$52.Number.defineInstance({
  "times": function(n, indexMapFn) {
    var arr, result2;
    for (var i = 0; i < n; i++) {
      result2 = indexMapFn.call(n, i);
      if (isDefined$f(result2)) {
        if (!arr) {
          arr = [];
        }
        arr.push(result2);
      }
    }
    return arr;
  }
});
Sugar$52.Number.times;
var Sugar$51 = sugarCoreExports;
Sugar$51.Number.defineInstance({
  "toNumber": function(n) {
    return n.valueOf();
  }
});
Sugar$51.Number.toNumber;
var Sugar$50 = sugarCoreExports;
Sugar$50.Number.getOption;
var Sugar$4$ = sugarCoreExports;
Sugar$4$.Number.setOption;
var Sugar$4_ = sugarCoreExports, coercePositiveInteger$2 = coercePositiveInteger_1;
Sugar$4_.Array.defineStatic({
  "construct": function(n, indexMapFn) {
    n = coercePositiveInteger$2(n);
    return Array.from(new Array(n), function(el, i) {
      return indexMapFn && indexMapFn(i);
    });
  }
});
Sugar$4_.Array.construct;
var forEach$f = forEach_1;
function arrayClone$6(arr) {
  var clone2 = new Array(arr.length);
  forEach$f(arr, function(el, i) {
    clone2[i] = el;
  });
  return clone2;
}
var arrayClone_1 = arrayClone$6;
var classChecks$L = classChecks$Z;
var isArray$c = classChecks$L.isArray;
function isArrayOrInherited$1(obj) {
  return obj && obj.constructor && isArray$c(obj.constructor.prototype);
}
var isArrayOrInherited_1 = isArrayOrInherited$1;
var isDefined$e = isDefined_1, arrayClone$5 = arrayClone_1, classChecks$K = classChecks$Z, isObjectType$a = isObjectType_1, isArrayOrInherited = isArrayOrInherited_1;
var isString$b = classChecks$K.isString;
function arrayCreate$2(obj, clone2) {
  var arr;
  if (isArrayOrInherited(obj)) {
    arr = clone2 ? arrayClone$5(obj) : obj;
  } else if (isObjectType$a(obj) || isString$b(obj)) {
    arr = Array.from(obj);
  } else if (isDefined$e(obj)) {
    arr = [obj];
  }
  return arr || [];
}
var arrayCreate_1 = arrayCreate$2;
function setChainableConstructor$2(sugarNamespace, createFn) {
  sugarNamespace.prototype.constructor = function() {
    return createFn.apply(this, arguments);
  };
}
var setChainableConstructor_1 = setChainableConstructor$2;
var arrayCreate$1 = arrayCreate_1, namespaceAliases$b = namespaceAliases$e, setChainableConstructor$1 = setChainableConstructor_1;
var sugarArray$2 = namespaceAliases$b.sugarArray;
function setArrayChainableConstructor$1() {
  setChainableConstructor$1(sugarArray$2, arrayCreate$1);
}
var setArrayChainableConstructor_1 = setArrayChainableConstructor$1;
var setArrayChainableConstructor = setArrayChainableConstructor_1;
setArrayChainableConstructor();
var Sugar$4Z = sugarCoreExports, arrayCreate = arrayCreate_1;
Sugar$4Z.Array.defineStatic({
  "create": function(obj, clone2) {
    return arrayCreate(obj, clone2);
  }
});
Sugar$4Z.Array.create;
var isDefined$d = isDefined_1;
function arrayAppend$2(arr, el, index) {
  var spliceArgs;
  index = +index;
  if (isNaN(index)) {
    index = arr.length;
  }
  spliceArgs = [index, 0];
  if (isDefined$d(el)) {
    spliceArgs = spliceArgs.concat(el);
  }
  arr.splice.apply(arr, spliceArgs);
  return arr;
}
var arrayAppend_1 = arrayAppend$2;
var Sugar$4Y = sugarCoreExports, arrayClone$4 = arrayClone_1, arrayAppend$1 = arrayAppend_1;
Sugar$4Y.Array.defineInstance({
  "add": function(arr, item, index) {
    return arrayAppend$1(arrayClone$4(arr), item, index);
  }
});
Sugar$4Y.Array.add;
var Sugar$4X = sugarCoreExports, arrayAppend = arrayAppend_1;
Sugar$4X.Array.defineInstance({
  "append": function(arr, item, index) {
    return arrayAppend(arr, item, index);
  }
});
Sugar$4X.Array.append;
var Sugar$4W = sugarCoreExports, getEntriesForIndexes = getEntriesForIndexes_1;
Sugar$4W.Array.defineInstance({
  "at": function(arr, index, loop2) {
    return getEntriesForIndexes(arr, index, loop2);
  }
});
Sugar$4W.Array.at;
var Sugar$4V = sugarCoreExports, arrayClone$3 = arrayClone_1;
Sugar$4V.Array.defineInstance({
  "clone": function(arr) {
    return arrayClone$3(arr);
  }
});
Sugar$4V.Array.clone;
var filter$1 = filter_1;
function arrayCompact$1(arr, all) {
  return filter$1(arr, function(el) {
    return el || !all && el != null && el.valueOf() === el.valueOf();
  });
}
var arrayCompact_1 = arrayCompact$1;
var Sugar$4U = sugarCoreExports, arrayCompact = arrayCompact_1;
Sugar$4U.Array.defineInstance({
  "compact": function(arr, all) {
    return arrayCompact(arr, all);
  }
});
Sugar$4U.Array.compact;
function dateMatcher$1(d) {
  var ms = d.getTime();
  return function(el) {
    return !!(el && el.getTime) && el.getTime() === ms;
  };
}
var dateMatcher_1 = dateMatcher$1;
function regexMatcher$1(reg) {
  reg = RegExp(reg);
  return function(el) {
    return reg.test(el);
  };
}
var regexMatcher_1 = regexMatcher$1;
function getKeys$6(obj) {
  return Object.keys(obj);
}
var getKeys_1 = getKeys$6;
function setToArray$1(set) {
  var arr = new Array(set.size), i = 0;
  set.forEach(function(val) {
    arr[i++] = val;
  });
  return arr;
}
var setToArray_1 = setToArray$1;
function mapToArray$1(map2) {
  var arr = new Array(map2.size), i = 0;
  map2.forEach(function(val, key) {
    arr[i++] = [key, val];
  });
  return arr;
}
var mapToArray_1 = mapToArray$1;
var getKeys$5 = getKeys_1, coreUtilityAliases$A = coreUtilityAliases$M;
var forEachProperty$k = coreUtilityAliases$A.forEachProperty;
function iterateWithCyclicCheck$2(obj, sortedKeys, stack, fn2) {
  function next(val, key) {
    var cyc = false;
    if (stack.length > 1) {
      var i = stack.length;
      while (i--) {
        if (stack[i] === val) {
          cyc = true;
        }
      }
    }
    stack.push(val);
    fn2(key, val, cyc, stack);
    stack.pop();
  }
  function iterateWithSortedKeys() {
    var arr = getKeys$5(obj).sort(), key;
    for (var i = 0; i < arr.length; i++) {
      key = arr[i];
      next(obj[key], arr[i]);
    }
  }
  if (!stack) {
    stack = [];
  }
  if (sortedKeys) {
    iterateWithSortedKeys();
  } else {
    forEachProperty$k(obj, next);
  }
}
var iterateWithCyclicCheck_1 = iterateWithCyclicCheck$2;
var getKeys$4 = getKeys_1, setToArray = setToArray_1, mapToArray = mapToArray_1, classChecks$J = classChecks$Z, isObjectType$9 = isObjectType_1, coreUtilityAliases$z = coreUtilityAliases$M, iterateWithCyclicCheck$1 = iterateWithCyclicCheck_1;
var classToString$4 = coreUtilityAliases$z.classToString, isSerializable$1 = classChecks$J.isSerializable, isSet$1 = classChecks$J.isSet, isMap$1 = classChecks$J.isMap, isError$1 = classChecks$J.isError;
function isEqual$4(a, b, stack) {
  var aClass, bClass;
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  aClass = classToString$4(a);
  bClass = classToString$4(b);
  if (aClass !== bClass) {
    return false;
  }
  if (isSerializable$1(a, aClass) && isSerializable$1(b, bClass)) {
    return objectIsEqual(a, b, aClass, stack);
  } else if (isSet$1(a, aClass) && isSet$1(b, bClass)) {
    return a.size === b.size && isEqual$4(setToArray(a), setToArray(b), stack);
  } else if (isMap$1(a, aClass) && isMap$1(b, bClass)) {
    return a.size === b.size && isEqual$4(mapToArray(a), mapToArray(b), stack);
  } else if (isError$1(a, aClass) && isError$1(b, bClass)) {
    return a.toString() === b.toString();
  }
  return false;
}
function objectIsEqual(a, b, aClass, stack) {
  var aType = typeof a, bType = typeof b, propsEqual, count;
  if (aType !== bType) {
    return false;
  }
  if (isObjectType$9(a.valueOf())) {
    if (a.length !== b.length) {
      return false;
    }
    count = 0;
    propsEqual = true;
    iterateWithCyclicCheck$1(a, false, stack, function(key, val, cyc, stack2) {
      if (!cyc && (!(key in b) || !isEqual$4(val, b[key], stack2))) {
        propsEqual = false;
      }
      count++;
      return propsEqual;
    });
    if (!propsEqual || count !== getKeys$4(b).length) {
      return false;
    }
  }
  return a.valueOf().toString() === b.valueOf().toString();
}
var isEqual_1 = isEqual$4;
var isEqual$3 = isEqual_1;
function defaultMatcher$1(f) {
  return function(el) {
    return isEqual$3(el, f);
  };
}
var defaultMatcher_1 = defaultMatcher$1;
function functionMatcher$1(fn2) {
  return function(el, i, arr) {
    return el === fn2 || fn2.call(arr, el, i, arr);
  };
}
var functionMatcher_1 = functionMatcher$1;
var isPrimitive$5 = isPrimitive_1, classChecks$I = classChecks$Z, dateMatcher = dateMatcher_1, regexMatcher = regexMatcher_1, isObjectType$8 = isObjectType_1, isPlainObject$2 = isPlainObject_1, defaultMatcher = defaultMatcher_1, functionMatcher = functionMatcher_1, coreUtilityAliases$y = coreUtilityAliases$M;
var getOwn$a = coreUtilityAliases$y.getOwn, classToString$3 = coreUtilityAliases$y.classToString, forEachProperty$j = coreUtilityAliases$y.forEachProperty, isDate$9 = classChecks$I.isDate, isRegExp$4 = classChecks$I.isRegExp, isFunction$b = classChecks$I.isFunction;
function getMatcher$8(f) {
  if (!isPrimitive$5(f)) {
    var className = classToString$3(f);
    if (isRegExp$4(f, className)) {
      return regexMatcher(f);
    } else if (isDate$9(f, className)) {
      return dateMatcher(f);
    } else if (isFunction$b(f, className)) {
      return functionMatcher(f);
    } else if (isPlainObject$2(f, className)) {
      return fuzzyMatcher(f);
    }
  }
  return defaultMatcher(f);
}
function fuzzyMatcher(obj) {
  var matchers = {};
  return function(el, i, arr) {
    var matched = true;
    if (!isObjectType$8(el)) {
      return false;
    }
    forEachProperty$j(obj, function(val, key) {
      matchers[key] = getOwn$a(matchers, key) || getMatcher$8(val);
      if (matchers[key].call(arr, el[key], i, arr) === false) {
        matched = false;
      }
      return matched;
    });
    return matched;
  };
}
var getMatcher_1 = getMatcher$8;
var getMatcher$7 = getMatcher_1;
function arrayExclude$1(arr, f) {
  var result2 = [], matcher = getMatcher$7(f);
  for (var i = 0; i < arr.length; i++) {
    if (!matcher(arr[i], i, arr)) {
      result2.push(arr[i]);
    }
  }
  return result2;
}
var arrayExclude_1 = arrayExclude$1;
var Sugar$4T = sugarCoreExports, arrayExclude = arrayExclude_1;
Sugar$4T.Array.defineInstance({
  "exclude": function(arr, f) {
    return arrayExclude(arr, f);
  }
});
Sugar$4T.Array.exclude;
var Sugar$4S = sugarCoreExports, isUndefined$e = isUndefined_1;
Sugar$4S.Array.defineInstance({
  "first": function(arr, num) {
    if (isUndefined$e(num))
      return arr[0];
    if (num < 0)
      num = 0;
    return arr.slice(0, num);
  }
});
Sugar$4S.Array.first;
var forEach$e = forEach_1, classChecks$H = classChecks$Z;
var isArray$b = classChecks$H.isArray;
function arrayFlatten$1(arr, level, current) {
  var result2 = [];
  level = level || Infinity;
  current = current || 0;
  forEach$e(arr, function(el) {
    if (isArray$b(el) && current < level) {
      result2 = result2.concat(arrayFlatten$1(el, level, current + 1));
    } else {
      result2.push(el);
    }
  });
  return result2;
}
var arrayFlatten_1 = arrayFlatten$1;
var Sugar$4R = sugarCoreExports, arrayFlatten = arrayFlatten_1;
Sugar$4R.Array.defineInstance({
  "flatten": function(arr, limit) {
    return arrayFlatten(arr, limit);
  }
});
Sugar$4R.Array.flatten;
var Sugar$4Q = sugarCoreExports;
Sugar$4Q.Array.defineInstance({
  "from": function(arr, num) {
    return arr.slice(num);
  }
});
Sugar$4Q.Array.from;
var map$4 = map_1, classChecks$G = classChecks$Z, deepGetProperty$2 = deepGetProperty_1;
var isFunction$a = classChecks$G.isFunction, isArray$a = classChecks$G.isArray;
function mapWithShortcuts$6(el, f, context, mapArgs) {
  if (!f) {
    return el;
  } else if (f.apply) {
    return f.apply(context, mapArgs);
  } else if (isArray$a(f)) {
    return map$4(f, function(m) {
      return mapWithShortcuts$6(el, m, context, mapArgs);
    });
  } else if (isFunction$a(el[f])) {
    return el[f].call(el);
  } else {
    return deepGetProperty$2(el, f, true);
  }
}
var mapWithShortcuts_1 = mapWithShortcuts$6;
var forEach$d = forEach_1, mapWithShortcuts$5 = mapWithShortcuts_1, coreUtilityAliases$x = coreUtilityAliases$M;
var hasOwn$8 = coreUtilityAliases$x.hasOwn, forEachProperty$i = coreUtilityAliases$x.forEachProperty;
function arrayGroupBy$1(arr, map2, fn2) {
  var result2 = {}, key;
  forEach$d(arr, function(el, i) {
    key = mapWithShortcuts$5(el, map2, arr, [el, i, arr]);
    if (!hasOwn$8(result2, key)) {
      result2[key] = [];
    }
    result2[key].push(el);
  });
  if (fn2) {
    forEachProperty$i(result2, fn2);
  }
  return result2;
}
var arrayGroupBy_1 = arrayGroupBy$1;
var Sugar$4P = sugarCoreExports, arrayGroupBy = arrayGroupBy_1;
Sugar$4P.Array.defineInstance({
  "groupBy": function(arr, map2, groupFn) {
    return arrayGroupBy(arr, map2, groupFn);
  }
});
Sugar$4P.Array.groupBy;
function simpleRepeat$2(n, fn2) {
  for (var i = 0; i < n; i++) {
    fn2(i);
  }
}
var simpleRepeat_1 = simpleRepeat$2;
var Sugar$4O = sugarCoreExports, isDefined$c = isDefined_1, mathAliases$k = mathAliases$z, simpleRepeat$1 = simpleRepeat_1;
var ceil$4 = mathAliases$k.ceil;
Sugar$4O.Array.defineInstance({
  "inGroups": function(arr, num, padding) {
    var pad = isDefined$c(padding);
    var result2 = new Array(num);
    var divisor = ceil$4(arr.length / num);
    simpleRepeat$1(num, function(i) {
      var index = i * divisor;
      var group = arr.slice(index, index + divisor);
      if (pad && group.length < divisor) {
        simpleRepeat$1(divisor - group.length, function() {
          group.push(padding);
        });
      }
      result2[i] = group;
    });
    return result2;
  }
});
Sugar$4O.Array.inGroups;
var Sugar$4N = sugarCoreExports, isUndefined$d = isUndefined_1, mathAliases$j = mathAliases$z, simpleRepeat = simpleRepeat_1;
var ceil$3 = mathAliases$j.ceil;
Sugar$4N.Array.defineInstance({
  "inGroupsOf": function(arr, num, padding) {
    var result2 = [], len = arr.length, group;
    if (len === 0 || num === 0)
      return arr;
    if (isUndefined$d(num))
      num = 1;
    if (isUndefined$d(padding))
      padding = null;
    simpleRepeat(ceil$3(len / num), function(i) {
      group = arr.slice(num * i, num * i + num);
      while (group.length < num) {
        group.push(padding);
      }
      result2.push(group);
    });
    return result2;
  }
});
Sugar$4N.Array.inGroupsOf;
function arrayWrap$1(obj) {
  var arr = [];
  arr.push(obj);
  return arr;
}
var arrayWrap_1 = arrayWrap$1;
function isRealNaN$1(obj) {
  return obj != null && obj !== obj;
}
var isRealNaN_1 = isRealNaN$1;
var indexOf = indexOf_1, isRealNaN = isRealNaN_1, isPrimitive$4 = isPrimitive_1, classChecks$F = classChecks$Z, isObjectType$7 = isObjectType_1, coreUtilityAliases$w = coreUtilityAliases$M, iterateWithCyclicCheck = iterateWithCyclicCheck_1;
var classToString$2 = coreUtilityAliases$w.classToString, isSerializable = classChecks$F.isSerializable;
function serializeInternal$4(obj, refs, stack) {
  var type = typeof obj, sign = "", className, value, ref2;
  if (1 / obj === -Infinity) {
    sign = "-";
  }
  if (isPrimitive$4(obj, type) && !isRealNaN(obj)) {
    return type + sign + obj;
  }
  className = classToString$2(obj);
  if (!isSerializable(obj, className)) {
    ref2 = indexOf(refs, obj);
    if (ref2 === -1) {
      ref2 = refs.length;
      refs.push(obj);
    }
    return ref2;
  } else if (isObjectType$7(obj)) {
    value = serializeDeep(obj, refs, stack) + obj.toString();
  } else if (obj.valueOf) {
    value = obj.valueOf();
  }
  return type + className + sign + value;
}
function serializeDeep(obj, refs, stack) {
  var result2 = "";
  iterateWithCyclicCheck(obj, true, stack, function(key, val, cyc, stack2) {
    result2 += cyc ? "CYC" : key + serializeInternal$4(val, refs, stack2);
  });
  return result2;
}
var serializeInternal_1 = serializeInternal$4;
var forEach$c = forEach_1, arrayWrap = arrayWrap_1, classChecks$E = classChecks$Z, serializeInternal$3 = serializeInternal_1, coreUtilityAliases$v = coreUtilityAliases$M;
var isArray$9 = classChecks$E.isArray, hasOwn$7 = coreUtilityAliases$v.hasOwn;
function arrayIntersectOrSubtract$2(arr1, arr2, subtract) {
  var result2 = [], obj = {}, refs = [];
  if (!isArray$9(arr2)) {
    arr2 = arrayWrap(arr2);
  }
  forEach$c(arr2, function(el) {
    obj[serializeInternal$3(el, refs)] = true;
  });
  forEach$c(arr1, function(el) {
    var key = serializeInternal$3(el, refs);
    if (hasOwn$7(obj, key) !== subtract) {
      delete obj[key];
      result2.push(el);
    }
  });
  return result2;
}
var arrayIntersectOrSubtract_1 = arrayIntersectOrSubtract$2;
var Sugar$4M = sugarCoreExports, arrayIntersectOrSubtract$1 = arrayIntersectOrSubtract_1;
Sugar$4M.Array.defineInstance({
  "intersect": function(arr1, arr2) {
    return arrayIntersectOrSubtract$1(arr1, arr2, false);
  }
});
Sugar$4M.Array.intersect;
var Sugar$4L = sugarCoreExports;
Sugar$4L.Array.defineInstance({
  "isEmpty": function(arr) {
    return arr.length === 0;
  }
});
Sugar$4L.Array.isEmpty;
var Sugar$4K = sugarCoreExports, isEqual$2 = isEqual_1;
Sugar$4K.Array.defineInstance({
  "isEqual": function(a, b) {
    return isEqual$2(a, b);
  }
});
Sugar$4K.Array.isEqual;
var Sugar$4J = sugarCoreExports, isUndefined$c = isUndefined_1;
Sugar$4J.Array.defineInstance({
  "last": function(arr, num) {
    if (isUndefined$c(num))
      return arr[arr.length - 1];
    var start2 = arr.length - num < 0 ? 0 : arr.length - num;
    return arr.slice(start2);
  }
});
Sugar$4J.Array.last;
var getMatcher$6 = getMatcher_1;
function arrayRemove$1(arr, f) {
  var matcher = getMatcher$6(f), i = 0;
  while (i < arr.length) {
    if (matcher(arr[i], i, arr)) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  return arr;
}
var arrayRemove_1 = arrayRemove$1;
var Sugar$4I = sugarCoreExports, arrayRemove = arrayRemove_1;
Sugar$4I.Array.defineInstance({
  "remove": function(arr, f) {
    return arrayRemove(arr, f);
  }
});
Sugar$4I.Array.remove;
var Sugar$4H = sugarCoreExports, isUndefined$b = isUndefined_1;
Sugar$4H.Array.defineInstance({
  "removeAt": function(arr, start2, end2) {
    if (isUndefined$b(start2))
      return arr;
    if (isUndefined$b(end2))
      end2 = start2;
    arr.splice(start2, end2 - start2 + 1);
    return arr;
  }
});
Sugar$4H.Array.removeAt;
var Sugar$4G = sugarCoreExports, trunc$9 = trunc_1, arrayClone$2 = arrayClone_1, classChecks$D = classChecks$Z, isUndefined$a = isUndefined_1, mathAliases$i = mathAliases$z;
var isBoolean$4 = classChecks$D.isBoolean, min$4 = mathAliases$i.min;
Sugar$4G.Array.defineInstance({
  "sample": function(arr, arg1, arg2) {
    var result2 = [], num, remove, single;
    if (isBoolean$4(arg1)) {
      remove = arg1;
    } else {
      num = arg1;
      remove = arg2;
    }
    if (isUndefined$a(num)) {
      num = 1;
      single = true;
    }
    if (!remove) {
      arr = arrayClone$2(arr);
    }
    num = min$4(num, arr.length);
    for (var i = 0, index; i < num; i++) {
      index = trunc$9(Math.random() * arr.length);
      result2.push(arr[index]);
      arr.splice(index, 1);
    }
    return single ? result2[0] : result2;
  }
});
Sugar$4G.Array.sample;
var arrayClone$1 = arrayClone_1;
function arrayShuffle$1(arr) {
  arr = arrayClone$1(arr);
  var i = arr.length, j, x;
  while (i) {
    j = Math.random() * i | 0;
    x = arr[--i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}
var arrayShuffle_1 = arrayShuffle$1;
var Sugar$4F = sugarCoreExports, arrayShuffle = arrayShuffle_1;
Sugar$4F.Array.defineInstance({
  "shuffle": function(arr) {
    return arrayShuffle(arr);
  }
});
Sugar$4F.Array.shuffle;
var map$3 = map_1;
function getSortOrder$1() {
  var order2 = "AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ";
  return map$3(order2.split(""), function(str) {
    return str + str.toLowerCase();
  }).join("");
}
var getSortOrder_1 = getSortOrder$1;
var HALF_WIDTH_NINE$1 = 57;
var FULL_WIDTH_NINE$1 = 65305;
var HALF_WIDTH_NINE = HALF_WIDTH_NINE$1, FULL_WIDTH_NINE = FULL_WIDTH_NINE$1, CommonChars = CommonChars$8;
var HALF_WIDTH_ZERO = CommonChars.HALF_WIDTH_ZERO, FULL_WIDTH_ZERO = CommonChars.FULL_WIDTH_ZERO;
function codeIsNumeral$1(code) {
  return code >= HALF_WIDTH_ZERO && code <= HALF_WIDTH_NINE || code >= FULL_WIDTH_ZERO && code <= FULL_WIDTH_NINE;
}
var codeIsNumeral_1 = codeIsNumeral$1;
function getSortOrderIndex$1(chr2, sortOrder) {
  if (!chr2) {
    return null;
  } else {
    return sortOrder.indexOf(chr2);
  }
}
var getSortOrderIndex_1 = getSortOrderIndex$1;
var forEach$b = forEach_1, spaceSplit$3 = spaceSplit_1;
function getSortEquivalents$1() {
  var equivalents = {};
  forEach$b(spaceSplit$3("AÁÀÂÃÄ CÇ EÉÈÊË IÍÌİÎÏ OÓÒÔÕÖ Sß UÚÙÛÜ"), function(set) {
    var first = set.charAt(0);
    forEach$b(set.slice(1).split(""), function(chr2) {
      equivalents[chr2] = first;
      equivalents[chr2.toLowerCase()] = first.toLowerCase();
    });
  });
  return equivalents;
}
var getSortEquivalents_1 = getSortEquivalents$1;
var coreUtilityAliases$u = coreUtilityAliases$M;
var getOwn$9 = coreUtilityAliases$u.getOwn;
function getCollationCharacter$1(str, index, sortEquivalents) {
  var chr2 = str.charAt(index);
  return getOwn$9(sortEquivalents, chr2) || chr2;
}
var getCollationCharacter_1 = getCollationCharacter$1;
function getCollationReadyString$1(str, sortIgnore, sortIgnoreCase) {
  if (sortIgnoreCase) {
    str = str.toLowerCase();
  }
  if (sortIgnore) {
    str = str.replace(sortIgnore, "");
  }
  return str;
}
var getCollationReadyString_1 = getCollationReadyString$1;
var getSortOrder = getSortOrder_1, codeIsNumeral = codeIsNumeral_1, stringToNumber = stringToNumber_1, namespaceAliases$a = namespaceAliases$e, getSortOrderIndex = getSortOrderIndex_1, getSortEquivalents = getSortEquivalents_1, defineOptionsAccessor$1 = defineOptionsAccessor_1, getCollationCharacter = getCollationCharacter_1, getCollationReadyString = getCollationReadyString_1;
var sugarArray$1 = namespaceAliases$a.sugarArray;
var ARRAY_OPTIONS$3 = {
  "sortIgnore": null,
  "sortNatural": true,
  "sortIgnoreCase": true,
  "sortOrder": getSortOrder(),
  "sortCollate": collateStrings,
  "sortEquivalents": getSortEquivalents()
};
var _arrayOptions$1 = defineOptionsAccessor$1(sugarArray$1, ARRAY_OPTIONS$3);
function collateStrings(a, b) {
  var aValue, bValue, aChar, bChar, aEquiv, bEquiv, index = 0, tiebreaker = 0;
  var sortOrder = _arrayOptions$1("sortOrder");
  var sortIgnore = _arrayOptions$1("sortIgnore");
  var sortNatural = _arrayOptions$1("sortNatural");
  var sortIgnoreCase = _arrayOptions$1("sortIgnoreCase");
  var sortEquivalents = _arrayOptions$1("sortEquivalents");
  a = getCollationReadyString(a, sortIgnore, sortIgnoreCase);
  b = getCollationReadyString(b, sortIgnore, sortIgnoreCase);
  do {
    aChar = getCollationCharacter(a, index, sortEquivalents);
    bChar = getCollationCharacter(b, index, sortEquivalents);
    aValue = getSortOrderIndex(aChar, sortOrder);
    bValue = getSortOrderIndex(bChar, sortOrder);
    if (aValue === -1 || bValue === -1) {
      aValue = a.charCodeAt(index) || null;
      bValue = b.charCodeAt(index) || null;
      if (sortNatural && codeIsNumeral(aValue) && codeIsNumeral(bValue)) {
        aValue = stringToNumber(a.slice(index));
        bValue = stringToNumber(b.slice(index));
      }
    } else {
      aEquiv = aChar !== a.charAt(index);
      bEquiv = bChar !== b.charAt(index);
      if (aEquiv !== bEquiv && tiebreaker === 0) {
        tiebreaker = aEquiv - bEquiv;
      }
    }
    index += 1;
  } while (aValue != null && bValue != null && aValue === bValue);
  if (aValue === bValue)
    return tiebreaker;
  return aValue - bValue;
}
var ARRAY_OPTIONS_1 = {
  ARRAY_OPTIONS: ARRAY_OPTIONS$3,
  _arrayOptions: _arrayOptions$1
};
var ARRAY_OPTIONS$2 = ARRAY_OPTIONS_1, classChecks$C = classChecks$Z;
var isString$a = classChecks$C.isString, isArray$8 = classChecks$C.isArray, _arrayOptions = ARRAY_OPTIONS$2._arrayOptions;
function compareValue$1(aVal, bVal) {
  var cmp, i, collate;
  if (isString$a(aVal) && isString$a(bVal)) {
    collate = _arrayOptions("sortCollate");
    return collate(aVal, bVal);
  } else if (isArray$8(aVal) && isArray$8(bVal)) {
    if (aVal.length < bVal.length) {
      return -1;
    } else if (aVal.length > bVal.length) {
      return 1;
    } else {
      for (i = 0; i < aVal.length; i++) {
        cmp = compareValue$1(aVal[i], bVal[i]);
        if (cmp !== 0) {
          return cmp;
        }
      }
      return 0;
    }
  }
  return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
}
var compareValue_1 = compareValue$1;
var Sugar$4E = sugarCoreExports, compareValue = compareValue_1, mapWithShortcuts$4 = mapWithShortcuts_1;
Sugar$4E.Array.defineInstance({
  "sortBy": function(arr, map2, desc) {
    arr.sort(function(a, b) {
      var aProperty = mapWithShortcuts$4(a, map2, arr, [a]);
      var bProperty = mapWithShortcuts$4(b, map2, arr, [b]);
      return compareValue(aProperty, bProperty) * (desc ? -1 : 1);
    });
    return arr;
  }
});
Sugar$4E.Array.sortBy;
var Sugar$4D = sugarCoreExports, arrayIntersectOrSubtract = arrayIntersectOrSubtract_1;
Sugar$4D.Array.defineInstance({
  "subtract": function(arr, item) {
    return arrayIntersectOrSubtract(arr, item, true);
  }
});
Sugar$4D.Array.subtract;
var Sugar$4C = sugarCoreExports, isUndefined$9 = isUndefined_1;
Sugar$4C.Array.defineInstance({
  "to": function(arr, num) {
    if (isUndefined$9(num))
      num = arr.length;
    return arr.slice(0, num);
  }
});
Sugar$4C.Array.to;
var forEach$a = forEach_1, mapWithShortcuts$3 = mapWithShortcuts_1, serializeInternal$2 = serializeInternal_1, coreUtilityAliases$t = coreUtilityAliases$M;
var hasOwn$6 = coreUtilityAliases$t.hasOwn;
function arrayUnique$2(arr, map2) {
  var result2 = [], obj = {}, refs = [];
  forEach$a(arr, function(el, i) {
    var transformed = map2 ? mapWithShortcuts$3(el, map2, arr, [el, i, arr]) : el;
    var key = serializeInternal$2(transformed, refs);
    if (!hasOwn$6(obj, key)) {
      result2.push(el);
      obj[key] = true;
    }
  });
  return result2;
}
var arrayUnique_1 = arrayUnique$2;
var HAS_CONCAT_BUG$1 = !("0" in [].concat(void 0).concat());
var forEach$9 = forEach_1, arrayClone = arrayClone_1, classChecks$B = classChecks$Z;
var isArray$7 = classChecks$B.isArray;
function arraySafeConcat$1(arr, arg) {
  var result2 = arrayClone(arr), len = result2.length, arr2;
  arr2 = isArray$7(arg) ? arg : [arg];
  result2.length += arr2.length;
  forEach$9(arr2, function(el, i) {
    result2[len + i] = el;
  });
  return result2;
}
var arraySafeConcat_1 = arraySafeConcat$1;
var HAS_CONCAT_BUG = HAS_CONCAT_BUG$1, arraySafeConcat = arraySafeConcat_1;
function arrayConcat$1(arr1, arr2) {
  if (HAS_CONCAT_BUG) {
    return arraySafeConcat(arr1, arr2);
  }
  return arr1.concat(arr2);
}
var arrayConcat_1 = arrayConcat$1;
var Sugar$4B = sugarCoreExports, arrayUnique$1 = arrayUnique_1, arrayConcat = arrayConcat_1;
Sugar$4B.Array.defineInstance({
  "union": function(arr1, arr2) {
    return arrayUnique$1(arrayConcat(arr1, arr2));
  }
});
Sugar$4B.Array.union;
var Sugar$4A = sugarCoreExports, arrayUnique = arrayUnique_1;
Sugar$4A.Array.defineInstance({
  "unique": function(arr, map2) {
    return arrayUnique(arr, map2);
  }
});
Sugar$4A.Array.unique;
var Sugar$4z = sugarCoreExports, map$2 = map_1;
Sugar$4z.Array.defineInstanceWithArguments({
  "zip": function(arr, args) {
    return map$2(arr, function(el, i) {
      return [el].concat(map$2(args, function(k) {
        return i in k ? k[i] : null;
      }));
    });
  }
});
Sugar$4z.Array.zip;
var Sugar$4y = sugarCoreExports;
Sugar$4y.Array.alias("insert", "append");
Sugar$4y.Array.insert;
var Sugar$4x = sugarCoreExports, ARRAY_OPTIONS$1 = ARRAY_OPTIONS_1;
ARRAY_OPTIONS$1._arrayOptions;
Sugar$4x.Array.getOption;
var Sugar$4w = sugarCoreExports, ARRAY_OPTIONS = ARRAY_OPTIONS_1;
ARRAY_OPTIONS._arrayOptions;
Sugar$4w.Array.setOption;
var classChecks$A = classChecks$Z, isArrayIndex = isArrayIndex_1, mapWithShortcuts$2 = mapWithShortcuts_1, coreUtilityAliases$s = coreUtilityAliases$M;
var isArray$6 = classChecks$A.isArray, forEachProperty$h = coreUtilityAliases$s.forEachProperty;
function enumerateWithMapping$5(obj, map2, fn2) {
  var arrayIndexes = isArray$6(obj);
  forEachProperty$h(obj, function(val, key) {
    if (arrayIndexes) {
      if (!isArrayIndex(key)) {
        return;
      }
      key = +key;
    }
    var mapped = mapWithShortcuts$2(val, map2, obj, [val, key, obj]);
    fn2(mapped, key);
  });
}
var enumerateWithMapping_1 = enumerateWithMapping$5;
var enumerateWithMapping$4 = enumerateWithMapping_1;
function average$2(obj, map2) {
  var sum2 = 0, count = 0;
  enumerateWithMapping$4(obj, map2, function(val) {
    sum2 += val;
    count++;
  });
  return sum2 / (count || 1);
}
var average_1 = average$2;
var Sugar$4v = sugarCoreExports, average$1 = average_1;
Sugar$4v.Object.defineInstanceAndStatic({
  "average": function(obj, map2) {
    return average$1(obj, map2);
  }
});
Sugar$4v.Object.average;
var getMatcher$5 = getMatcher_1, coreUtilityAliases$r = coreUtilityAliases$M;
var forEachProperty$g = coreUtilityAliases$r.forEachProperty;
function objectCount$1(obj, f) {
  var matcher = getMatcher$5(f), count = 0;
  forEachProperty$g(obj, function(val, key) {
    if (matcher(val, key, obj)) {
      count++;
    }
  });
  return count;
}
var objectCount_1 = objectCount$1;
var Sugar$4u = sugarCoreExports, objectCount = objectCount_1;
Sugar$4u.Object.defineInstanceAndStatic({
  "count": function(obj, f) {
    return objectCount(obj, f);
  }
});
Sugar$4u.Object.count;
var getKeys$3 = getKeys_1, getMatcher$4 = getMatcher_1;
function wrapObjectMatcher$1(name) {
  var nativeFn = Array.prototype[name];
  return function(obj, f) {
    var matcher = getMatcher$4(f);
    return nativeFn.call(getKeys$3(obj), function(key) {
      return matcher(obj[key], key, obj);
    });
  };
}
var wrapObjectMatcher_1 = wrapObjectMatcher$1;
var wrapObjectMatcher = wrapObjectMatcher_1;
var objectMatchers$4 = {
  objectSome: wrapObjectMatcher("some"),
  objectFind: wrapObjectMatcher("find"),
  objectEvery: wrapObjectMatcher("every")
};
var Sugar$4t = sugarCoreExports, objectMatchers$3 = objectMatchers$4;
var objectEvery = objectMatchers$3.objectEvery;
Sugar$4t.Object.defineInstanceAndStatic({
  "every": objectEvery
});
Sugar$4t.Object.every;
var getMatcher$3 = getMatcher_1, coreUtilityAliases$q = coreUtilityAliases$M;
var forEachProperty$f = coreUtilityAliases$q.forEachProperty;
function objectFilter$1(obj, f) {
  var matcher = getMatcher$3(f), result2 = {};
  forEachProperty$f(obj, function(val, key) {
    if (matcher(val, key, obj)) {
      result2[key] = val;
    }
  });
  return result2;
}
var objectFilter_1 = objectFilter$1;
var Sugar$4s = sugarCoreExports, objectFilter = objectFilter_1;
Sugar$4s.Object.defineInstanceAndStatic({
  "filter": function(obj, f) {
    return objectFilter(obj, f);
  }
});
Sugar$4s.Object.filter;
var Sugar$4r = sugarCoreExports, objectMatchers$2 = objectMatchers$4;
var objectFind = objectMatchers$2.objectFind;
Sugar$4r.Object.defineInstanceAndStatic({
  "find": objectFind
});
Sugar$4r.Object.find;
var classChecks$z = classChecks$Z;
var isFunction$9 = classChecks$z.isFunction;
function assertCallable$1(obj) {
  if (!isFunction$9(obj)) {
    throw new TypeError("Function is not callable");
  }
}
var assertCallable_1 = assertCallable$1;
var assertCallable = assertCallable_1, coreUtilityAliases$p = coreUtilityAliases$M;
var forEachProperty$e = coreUtilityAliases$p.forEachProperty;
function objectForEach$1(obj, fn2) {
  assertCallable(fn2);
  forEachProperty$e(obj, function(val, key) {
    fn2(val, key, obj);
  });
  return obj;
}
var objectForEach_1 = objectForEach$1;
var Sugar$4q = sugarCoreExports, objectForEach = objectForEach_1;
Sugar$4q.Object.defineInstanceAndStatic({
  "forEach": function(obj, eachFn) {
    return objectForEach(obj, eachFn);
  }
});
Sugar$4q.Object.forEach;
function getReducedMinMaxResult$2(result2, obj, all, asObject) {
  if (asObject && all) {
    return result2.reduce(function(o, key) {
      o[key] = obj[key];
      return o;
    }, {});
  } else if (result2 && !all) {
    result2 = result2[0];
  }
  return result2;
}
var getReducedMinMaxResult_1 = getReducedMinMaxResult$2;
var classChecks$y = classChecks$Z, isUndefined$8 = isUndefined_1, enumerateWithMapping$3 = enumerateWithMapping_1, getReducedMinMaxResult$1 = getReducedMinMaxResult_1;
var isBoolean$3 = classChecks$y.isBoolean;
function getMinOrMax$5(obj, arg1, arg2, max2, asObject) {
  var result2 = [], pushVal, edge, all, map2;
  if (isBoolean$3(arg1)) {
    all = arg1;
    map2 = arg2;
  } else {
    map2 = arg1;
  }
  enumerateWithMapping$3(obj, map2, function(val, key) {
    if (isUndefined$8(val)) {
      throw new TypeError("Cannot compare with undefined");
    }
    pushVal = asObject ? key : obj[key];
    if (val === edge) {
      result2.push(pushVal);
    } else if (isUndefined$8(edge) || max2 && val > edge || !max2 && val < edge) {
      result2 = [pushVal];
      edge = val;
    }
  });
  return getReducedMinMaxResult$1(result2, obj, all, asObject);
}
var getMinOrMax_1 = getMinOrMax$5;
var classChecks$x = classChecks$Z, getMinOrMax$4 = getMinOrMax_1, serializeInternal$1 = serializeInternal_1, coreUtilityAliases$o = coreUtilityAliases$M, enumerateWithMapping$2 = enumerateWithMapping_1, getReducedMinMaxResult = getReducedMinMaxResult_1;
var isBoolean$2 = classChecks$x.isBoolean, getOwn$8 = coreUtilityAliases$o.getOwn, forEachProperty$d = coreUtilityAliases$o.forEachProperty;
function getLeastOrMost$4(obj, arg1, arg2, most, asObject) {
  var group = {}, refs = [], minMaxResult, result2, all, map2;
  if (isBoolean$2(arg1)) {
    all = arg1;
    map2 = arg2;
  } else {
    map2 = arg1;
  }
  enumerateWithMapping$2(obj, map2, function(val, key) {
    var groupKey = serializeInternal$1(val, refs);
    var arr = getOwn$8(group, groupKey) || [];
    arr.push(asObject ? key : obj[key]);
    group[groupKey] = arr;
  });
  minMaxResult = getMinOrMax$4(group, !!all, "length", most, true);
  if (all) {
    result2 = [];
    forEachProperty$d(minMaxResult, function(val) {
      result2 = result2.concat(val);
    });
  } else {
    result2 = getOwn$8(group, minMaxResult);
  }
  return getReducedMinMaxResult(result2, obj, all, asObject);
}
var getLeastOrMost_1 = getLeastOrMost$4;
var Sugar$4p = sugarCoreExports, getLeastOrMost$3 = getLeastOrMost_1;
Sugar$4p.Object.defineInstanceAndStatic({
  "least": function(obj, all, map2) {
    return getLeastOrMost$3(obj, all, map2, false, true);
  }
});
Sugar$4p.Object.least;
var mapWithShortcuts$1 = mapWithShortcuts_1, coreUtilityAliases$n = coreUtilityAliases$M;
var forEachProperty$c = coreUtilityAliases$n.forEachProperty;
function objectMap$1(obj, map2) {
  var result2 = {};
  forEachProperty$c(obj, function(val, key) {
    result2[key] = mapWithShortcuts$1(val, map2, obj, [val, key, obj]);
  });
  return result2;
}
var objectMap_1 = objectMap$1;
var Sugar$4o = sugarCoreExports, objectMap = objectMap_1;
Sugar$4o.Object.defineInstanceAndStatic({
  "map": function(obj, map2) {
    return objectMap(obj, map2);
  }
});
Sugar$4o.Object.map;
var Sugar$4n = sugarCoreExports, getMinOrMax$3 = getMinOrMax_1;
Sugar$4n.Object.defineInstanceAndStatic({
  "max": function(obj, all, map2) {
    return getMinOrMax$3(obj, all, map2, true, true);
  }
});
Sugar$4n.Object.max;
var trunc$8 = trunc_1, enumerateWithMapping$1 = enumerateWithMapping_1;
function median$2(obj, map2) {
  var result2 = [], middle, len;
  enumerateWithMapping$1(obj, map2, function(val) {
    result2.push(val);
  });
  len = result2.length;
  if (!len)
    return 0;
  result2.sort(function(a, b) {
    return (a || 0) - (b || 0);
  });
  middle = trunc$8(len / 2);
  return len % 2 ? result2[middle] : (result2[middle - 1] + result2[middle]) / 2;
}
var median_1 = median$2;
var Sugar$4m = sugarCoreExports, median$1 = median_1;
Sugar$4m.Object.defineInstanceAndStatic({
  "median": function(obj, map2) {
    return median$1(obj, map2);
  }
});
Sugar$4m.Object.median;
var Sugar$4l = sugarCoreExports, getMinOrMax$2 = getMinOrMax_1;
Sugar$4l.Object.defineInstanceAndStatic({
  "min": function(obj, all, map2) {
    return getMinOrMax$2(obj, all, map2, false, true);
  }
});
Sugar$4l.Object.min;
var Sugar$4k = sugarCoreExports, getLeastOrMost$2 = getLeastOrMost_1;
Sugar$4k.Object.defineInstanceAndStatic({
  "most": function(obj, all, map2) {
    return getLeastOrMost$2(obj, all, map2, true, true);
  }
});
Sugar$4k.Object.most;
var objectMatchers$1 = objectMatchers$4;
var objectSome$1 = objectMatchers$1.objectSome;
function objectNone$1(obj, f) {
  return !objectSome$1(obj, f);
}
var objectNone_1 = objectNone$1;
var Sugar$4j = sugarCoreExports, objectNone = objectNone_1;
Sugar$4j.Object.defineInstanceAndStatic({
  "none": function(obj, f) {
    return objectNone(obj, f);
  }
});
Sugar$4j.Object.none;
var isDefined$b = isDefined_1, coreUtilityAliases$m = coreUtilityAliases$M;
var forEachProperty$b = coreUtilityAliases$m.forEachProperty;
function objectReduce$1(obj, fn2, acc) {
  var init = isDefined$b(acc);
  forEachProperty$b(obj, function(val, key) {
    if (!init) {
      acc = val;
      init = true;
      return;
    }
    acc = fn2(acc, val, key, obj);
  });
  return acc;
}
var objectReduce_1 = objectReduce$1;
var Sugar$4i = sugarCoreExports, objectReduce = objectReduce_1;
Sugar$4i.Object.defineInstanceAndStatic({
  "reduce": function(obj, fn2, init) {
    return objectReduce(obj, fn2, init);
  }
});
Sugar$4i.Object.reduce;
var Sugar$4h = sugarCoreExports, objectMatchers = objectMatchers$4;
var objectSome = objectMatchers.objectSome;
Sugar$4h.Object.defineInstanceAndStatic({
  "some": objectSome
});
Sugar$4h.Object.some;
var enumerateWithMapping = enumerateWithMapping_1;
function sum$2(obj, map2) {
  var sum2 = 0;
  enumerateWithMapping(obj, map2, function(val) {
    sum2 += val;
  });
  return sum2;
}
var sum_1 = sum$2;
var Sugar$4g = sugarCoreExports, sum$1 = sum_1;
Sugar$4g.Object.defineInstanceAndStatic({
  "sum": function(obj, map2) {
    return sum$1(obj, map2);
  }
});
Sugar$4g.Object.sum;
var Sugar$4f = sugarCoreExports, average = average_1;
Sugar$4f.Array.defineInstance({
  "average": function(arr, map2) {
    return average(arr, map2);
  }
});
Sugar$4f.Array.average;
var getMatcher$2 = getMatcher_1, classChecks$w = classChecks$Z;
var isFunction$8 = classChecks$w.isFunction;
function enhancedMatching$2(f) {
  var matcher;
  if (isFunction$8(f)) {
    return f;
  }
  matcher = getMatcher$2(f);
  return function(el, i, arr) {
    return matcher(el, i, arr);
  };
}
var enhancedMatching_1 = enhancedMatching$2;
function assertArgument$2(exists) {
  if (!exists) {
    throw new TypeError("Argument required");
  }
}
var assertArgument_1 = assertArgument$2;
var assertArgument$1 = assertArgument_1;
function wrapNativeArrayMethod$2(methodName, wrapper) {
  var nativeFn = Array.prototype[methodName];
  return function(arr, f, context, argsLen) {
    var args = new Array(2);
    assertArgument$1(argsLen > 0);
    args[0] = wrapper(f, context);
    args[1] = context;
    return nativeFn.apply(arr, args);
  };
}
var wrapNativeArrayMethod_1 = wrapNativeArrayMethod$2;
var enhancedMatching$1 = enhancedMatching_1, wrapNativeArrayMethod$1 = wrapNativeArrayMethod_1;
function buildEnhancedMatching$1(name) {
  return wrapNativeArrayMethod$1(name, enhancedMatching$1);
}
var buildEnhancedMatching_1 = buildEnhancedMatching$1;
var buildEnhancedMatching = buildEnhancedMatching_1;
var enhancedMatcherMethods$7 = {
  enhancedFind: buildEnhancedMatching("find"),
  enhancedSome: buildEnhancedMatching("some"),
  enhancedEvery: buildEnhancedMatching("every"),
  enhancedFilter: buildEnhancedMatching("filter"),
  enhancedFindIndex: buildEnhancedMatching("findIndex")
};
var isUndefined$7 = isUndefined_1, enhancedMatcherMethods$6 = enhancedMatcherMethods$7;
var enhancedFilter$1 = enhancedMatcherMethods$6.enhancedFilter;
function arrayCount$1(arr, f) {
  if (isUndefined$7(f)) {
    return arr.length;
  }
  return enhancedFilter$1.apply(this, arguments).length;
}
var arrayCount_1 = arrayCount$1;
var Sugar$4e = sugarCoreExports, arrayCount = arrayCount_1, fixArgumentLength$7 = fixArgumentLength_1;
Sugar$4e.Array.defineInstance({
  "count": fixArgumentLength$7(arrayCount)
});
Sugar$4e.Array.count;
var ARRAY_ENHANCEMENTS_FLAG$6 = "enhanceArray";
var Sugar$4d = sugarCoreExports, ENHANCEMENTS_FLAG$5 = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG$5 = ARRAY_ENHANCEMENTS_FLAG$6, fixArgumentLength$6 = fixArgumentLength_1, enhancedMatcherMethods$5 = enhancedMatcherMethods$7;
var enhancedEvery = enhancedMatcherMethods$5.enhancedEvery;
Sugar$4d.Array.defineInstance({
  "every": fixArgumentLength$6(enhancedEvery)
}, [ENHANCEMENTS_FLAG$5, ARRAY_ENHANCEMENTS_FLAG$5]);
Sugar$4d.Array.every;
var classChecks$v = classChecks$Z, mapWithShortcuts = mapWithShortcuts_1;
var isFunction$7 = classChecks$v.isFunction;
function enhancedMapping$2(map2, context) {
  if (isFunction$7(map2)) {
    return map2;
  } else if (map2) {
    return function(el, i, arr) {
      return mapWithShortcuts(el, map2, context, [el, i, arr]);
    };
  }
}
var enhancedMapping_1 = enhancedMapping$2;
var forEach$8 = forEach_1, spaceSplit$2 = spaceSplit_1, classChecks$u = classChecks$Z, mathAliases$h = mathAliases$z, assertArgument = assertArgument_1, enhancedMapping$1 = enhancedMapping_1, namespaceAliases$9 = namespaceAliases$e, enhancedMatching = enhancedMatching_1, getNormalizedIndex = getNormalizedIndex_1, coreUtilityAliases$l = coreUtilityAliases$M, methodDefineAliases$1 = methodDefineAliases$3;
var forEachProperty$a = coreUtilityAliases$l.forEachProperty, defineInstanceWithArguments = methodDefineAliases$1.defineInstanceWithArguments, sugarArray = namespaceAliases$9.sugarArray, min$3 = mathAliases$h.min, max$4 = mathAliases$h.max, isBoolean$1 = classChecks$u.isBoolean;
function buildFromIndexMethods$1() {
  var methods = {
    "forEach": {
      base: forEachAsNative
    },
    "map": {
      wrapper: enhancedMapping$1
    },
    "some every": {
      wrapper: enhancedMatching
    },
    "findIndex": {
      wrapper: enhancedMatching,
      result: indexResult
    },
    "reduce": {
      apply: applyReduce
    },
    "filter find": {
      wrapper: enhancedMatching
    },
    "reduceRight": {
      apply: applyReduce,
      slice: sliceArrayFromRight,
      clamp: clampStartIndexFromRight
    }
  };
  forEachProperty$a(methods, function(opts, key) {
    forEach$8(spaceSplit$2(key), function(baseName) {
      var methodName = baseName + "FromIndex";
      var fn2 = createFromIndexWithOptions(baseName, opts);
      defineInstanceWithArguments(sugarArray, methodName, fn2);
    });
  });
  function forEachAsNative(fn2) {
    forEach$8(this, fn2);
  }
  function sliceArrayFromLeft(arr, startIndex, loop2) {
    var result2 = arr;
    if (startIndex) {
      result2 = arr.slice(startIndex);
      if (loop2) {
        result2 = result2.concat(arr.slice(0, startIndex));
      }
    }
    return result2;
  }
  function sliceArrayFromRight(arr, startIndex, loop2) {
    if (!loop2) {
      startIndex += 1;
      arr = arr.slice(0, max$4(0, startIndex));
    }
    return arr;
  }
  function clampStartIndex(startIndex, len) {
    return min$3(len, max$4(0, startIndex));
  }
  function clampStartIndexFromRight(startIndex, len) {
    return min$3(len, max$4(-1, startIndex));
  }
  function applyReduce(arr, startIndex, fn2, context, len, loop2) {
    return function(acc, val, i) {
      i = getNormalizedIndex(i + startIndex, len, loop2);
      return fn2.call(arr, acc, val, i, arr);
    };
  }
  function applyEach(arr, startIndex, fn2, context, len, loop2) {
    return function(el, i) {
      i = getNormalizedIndex(i + startIndex, len, loop2);
      return fn2.call(context, arr[i], i, arr);
    };
  }
  function indexResult(result2, startIndex, len) {
    if (result2 !== -1) {
      result2 = (result2 + startIndex) % len;
    }
    return result2;
  }
  function createFromIndexWithOptions(methodName, opts) {
    var baseFn = opts.base || Array.prototype[methodName], applyCallback = opts.apply || applyEach, sliceArray = opts.slice || sliceArrayFromLeft, clampIndex = opts.clamp || clampStartIndex, getResult = opts.result, wrapper = opts.wrapper;
    return function(arr, startIndex, args) {
      var callArgs = [], argIndex = 0, lastArg, result2, len, loop2, fn2;
      len = arr.length;
      if (isBoolean$1(args[0])) {
        loop2 = args[argIndex++];
      }
      fn2 = args[argIndex++];
      lastArg = args[argIndex];
      if (startIndex < 0) {
        startIndex += len;
      }
      startIndex = clampIndex(startIndex, len);
      assertArgument(args.length);
      fn2 = wrapper ? wrapper(fn2, lastArg) : fn2;
      callArgs.push(applyCallback(arr, startIndex, fn2, lastArg, len, loop2));
      if (lastArg) {
        callArgs.push(lastArg);
      }
      result2 = baseFn.apply(sliceArray(arr, startIndex, loop2), callArgs);
      if (getResult) {
        result2 = getResult(result2, startIndex, len);
      }
      return result2;
    };
  }
}
var buildFromIndexMethods_1 = buildFromIndexMethods$1;
var buildFromIndexMethods = buildFromIndexMethods_1;
buildFromIndexMethods();
var Sugar$4c = sugarCoreExports;
Sugar$4c.Array.everyFromIndex;
var Sugar$4b = sugarCoreExports, ENHANCEMENTS_FLAG$4 = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG$4 = ARRAY_ENHANCEMENTS_FLAG$6, fixArgumentLength$5 = fixArgumentLength_1, enhancedMatcherMethods$4 = enhancedMatcherMethods$7;
var enhancedFilter = enhancedMatcherMethods$4.enhancedFilter;
Sugar$4b.Array.defineInstance({
  "filter": fixArgumentLength$5(enhancedFilter)
}, [ENHANCEMENTS_FLAG$4, ARRAY_ENHANCEMENTS_FLAG$4]);
Sugar$4b.Array.filter;
var Sugar$4a = sugarCoreExports;
Sugar$4a.Array.filterFromIndex;
var Sugar$49 = sugarCoreExports, ENHANCEMENTS_FLAG$3 = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG$3 = ARRAY_ENHANCEMENTS_FLAG$6, fixArgumentLength$4 = fixArgumentLength_1, enhancedMatcherMethods$3 = enhancedMatcherMethods$7;
var enhancedFind = enhancedMatcherMethods$3.enhancedFind;
Sugar$49.Array.defineInstance({
  "find": fixArgumentLength$4(enhancedFind)
}, [ENHANCEMENTS_FLAG$3, ARRAY_ENHANCEMENTS_FLAG$3]);
Sugar$49.Array.find;
var Sugar$48 = sugarCoreExports;
Sugar$48.Array.findFromIndex;
var Sugar$47 = sugarCoreExports, ENHANCEMENTS_FLAG$2 = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG$2 = ARRAY_ENHANCEMENTS_FLAG$6, fixArgumentLength$3 = fixArgumentLength_1, enhancedMatcherMethods$2 = enhancedMatcherMethods$7;
var enhancedFindIndex = enhancedMatcherMethods$2.enhancedFindIndex;
Sugar$47.Array.defineInstance({
  "findIndex": fixArgumentLength$3(enhancedFindIndex)
}, [ENHANCEMENTS_FLAG$2, ARRAY_ENHANCEMENTS_FLAG$2]);
Sugar$47.Array.findIndex;
var Sugar$46 = sugarCoreExports;
Sugar$46.Array.findIndexFromIndex;
var Sugar$45 = sugarCoreExports;
Sugar$45.Array.forEachFromIndex;
var Sugar$44 = sugarCoreExports, getLeastOrMost$1 = getLeastOrMost_1;
Sugar$44.Array.defineInstance({
  "least": function(arr, all, map2) {
    return getLeastOrMost$1(arr, all, map2);
  }
});
Sugar$44.Array.least;
var enhancedMapping = enhancedMapping_1, wrapNativeArrayMethod = wrapNativeArrayMethod_1;
function buildEnhancedMapping$1(name) {
  return wrapNativeArrayMethod(name, enhancedMapping);
}
var buildEnhancedMapping_1 = buildEnhancedMapping$1;
var buildEnhancedMapping = buildEnhancedMapping_1;
var enhancedMap$1 = buildEnhancedMapping("map");
var Sugar$43 = sugarCoreExports, ENHANCEMENTS_FLAG$1 = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG$1 = ARRAY_ENHANCEMENTS_FLAG$6, enhancedMap = enhancedMap$1, fixArgumentLength$2 = fixArgumentLength_1;
Sugar$43.Array.defineInstance({
  "map": fixArgumentLength$2(enhancedMap)
}, [ENHANCEMENTS_FLAG$1, ARRAY_ENHANCEMENTS_FLAG$1]);
Sugar$43.Array.map;
var Sugar$42 = sugarCoreExports;
Sugar$42.Array.mapFromIndex;
var Sugar$41 = sugarCoreExports, getMinOrMax$1 = getMinOrMax_1;
Sugar$41.Array.defineInstance({
  "max": function(arr, all, map2) {
    return getMinOrMax$1(arr, all, map2, true);
  }
});
Sugar$41.Array.max;
var Sugar$40 = sugarCoreExports, median = median_1;
Sugar$40.Array.defineInstance({
  "median": function(arr, map2) {
    return median(arr, map2);
  }
});
Sugar$40.Array.median;
var Sugar$3$ = sugarCoreExports, getMinOrMax = getMinOrMax_1;
Sugar$3$.Array.defineInstance({
  "min": function(arr, all, map2) {
    return getMinOrMax(arr, all, map2);
  }
});
Sugar$3$.Array.min;
var Sugar$3_ = sugarCoreExports, getLeastOrMost = getLeastOrMost_1;
Sugar$3_.Array.defineInstance({
  "most": function(arr, all, map2) {
    return getLeastOrMost(arr, all, map2, true);
  }
});
Sugar$3_.Array.most;
var enhancedMatcherMethods$1 = enhancedMatcherMethods$7;
var enhancedSome$1 = enhancedMatcherMethods$1.enhancedSome;
function arrayNone$1() {
  return !enhancedSome$1.apply(this, arguments);
}
var arrayNone_1 = arrayNone$1;
var Sugar$3Z = sugarCoreExports, arrayNone = arrayNone_1, fixArgumentLength$1 = fixArgumentLength_1;
Sugar$3Z.Array.defineInstance({
  "none": fixArgumentLength$1(arrayNone)
});
Sugar$3Z.Array.none;
var Sugar$3Y = sugarCoreExports;
Sugar$3Y.Array.reduceFromIndex;
var Sugar$3X = sugarCoreExports;
Sugar$3X.Array.reduceRightFromIndex;
var Sugar$3W = sugarCoreExports, ENHANCEMENTS_FLAG = ENHANCEMENTS_FLAG$7, ARRAY_ENHANCEMENTS_FLAG = ARRAY_ENHANCEMENTS_FLAG$6, fixArgumentLength = fixArgumentLength_1, enhancedMatcherMethods = enhancedMatcherMethods$7;
var enhancedSome = enhancedMatcherMethods.enhancedSome;
Sugar$3W.Array.defineInstance({
  "some": fixArgumentLength(enhancedSome)
}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);
Sugar$3W.Array.some;
var Sugar$3V = sugarCoreExports;
Sugar$3V.Array.someFromIndex;
var Sugar$3U = sugarCoreExports, sum = sum_1;
Sugar$3U.Array.defineInstance({
  "sum": function(arr, map2) {
    return sum(arr, map2);
  }
});
Sugar$3U.Array.sum;
var getOwnPropertyNames$2 = Object.getOwnPropertyNames;
var classChecks$t = classChecks$Z, isPrimitive$3 = isPrimitive_1, isPlainObject$1 = isPlainObject_1, getRegExpFlags$3 = getRegExpFlags_1, coreUtilityAliases$k = coreUtilityAliases$M;
var classToString$1 = coreUtilityAliases$k.classToString, isDate$8 = classChecks$t.isDate, isRegExp$3 = classChecks$t.isRegExp, isArray$5 = classChecks$t.isArray;
function getNewObjectForMerge$2(source) {
  var klass = classToString$1(source);
  if (isArray$5(source, klass)) {
    return [];
  } else if (isPlainObject$1(source, klass)) {
    return {};
  } else if (isDate$8(source, klass)) {
    return new Date(source.getTime());
  } else if (isRegExp$3(source, klass)) {
    return RegExp(source.source, getRegExpFlags$3(source));
  } else if (isPrimitive$3(source && source.valueOf())) {
    return source;
  }
  throw new TypeError("Must be a basic data type");
}
var getNewObjectForMerge_1 = getNewObjectForMerge$2;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;
function iterateOverKeys$1(getFn, obj, fn2, hidden) {
  var keys = getFn(obj), desc;
  for (var i = 0, key; key = keys[i]; i++) {
    desc = getOwnPropertyDescriptor$1(obj, key);
    if (desc.enumerable || hidden) {
      fn2(obj[key], key);
    }
  }
}
var iterateOverKeys_1 = iterateOverKeys$1;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var iterateOverKeys = iterateOverKeys_1, coreUtilityAliases$j = coreUtilityAliases$M, getOwnPropertyNames$1 = getOwnPropertyNames$2, getOwnPropertySymbols = getOwnPropertySymbols$1;
var forEachProperty$9 = coreUtilityAliases$j.forEachProperty;
function iterateOverProperties$1(hidden, obj, fn2) {
  if (getOwnPropertyNames$1 && hidden) {
    iterateOverKeys(getOwnPropertyNames$1, obj, fn2, hidden);
  } else {
    forEachProperty$9(obj, fn2);
  }
  if (getOwnPropertySymbols) {
    iterateOverKeys(getOwnPropertySymbols, obj, fn2, hidden);
  }
}
var iterateOverProperties_1 = iterateOverProperties$1;
var NO_KEYS_IN_STRING_OBJECTS$1 = !("0" in Object("a"));
function forceStringCoercion$1(obj) {
  var i = 0, chr2;
  while (chr2 = obj.charAt(i)) {
    obj[i++] = chr2;
  }
}
var forceStringCoercion_1 = forceStringCoercion$1;
var NO_KEYS_IN_STRING_OBJECTS = NO_KEYS_IN_STRING_OBJECTS$1, isPrimitive$2 = isPrimitive_1, classChecks$s = classChecks$Z, forceStringCoercion = forceStringCoercion_1;
var isString$9 = classChecks$s.isString;
function coercePrimitiveToObject$3(obj) {
  if (isPrimitive$2(obj)) {
    obj = Object(obj);
  }
  if (NO_KEYS_IN_STRING_OBJECTS && isString$9(obj)) {
    forceStringCoercion(obj);
  }
  return obj;
}
var coercePrimitiveToObject_1 = coercePrimitiveToObject$3;
var isDefined$a = isDefined_1, coreUtilityAliases$i = coreUtilityAliases$M, getOwnPropertyDescriptor = getOwnPropertyDescriptor$2;
var defineProperty = coreUtilityAliases$i.defineProperty;
function mergeByPropertyDescriptor$1(target, source, prop, sourceVal) {
  var descriptor = getOwnPropertyDescriptor(source, prop);
  if (isDefined$a(descriptor.value)) {
    descriptor.value = sourceVal;
  }
  defineProperty(target, prop, descriptor);
}
var mergeByPropertyDescriptor_1 = mergeByPropertyDescriptor$1;
var Sugar$3T = sugarCoreExports, isDefined$9 = isDefined_1, classChecks$r = classChecks$Z, isPrimitive$1 = isPrimitive_1, isUndefined$6 = isUndefined_1, isObjectType$6 = isObjectType_1, coreUtilityAliases$h = coreUtilityAliases$M, getOwnPropertyNames = getOwnPropertyNames$2, getNewObjectForMerge$1 = getNewObjectForMerge_1, iterateOverProperties = iterateOverProperties_1, coercePrimitiveToObject$2 = coercePrimitiveToObject_1, mergeByPropertyDescriptor = mergeByPropertyDescriptor_1;
var isDate$7 = classChecks$r.isDate, isRegExp$2 = classChecks$r.isRegExp, isFunction$6 = classChecks$r.isFunction, getOwn$7 = coreUtilityAliases$h.getOwn;
function objectMerge$3(target, source, deep, resolve, hidden, descriptor) {
  var resolveByFunction = isFunction$6(resolve), resolveConflicts = resolve !== false;
  if (isUndefined$6(target)) {
    target = getNewObjectForMerge$1(source);
  } else if (resolveConflicts && isDate$7(target) && isDate$7(source)) {
    target.setTime(source.getTime());
  }
  if (isPrimitive$1(target)) {
    return source;
  }
  if (isPrimitive$1(source)) {
    source = coercePrimitiveToObject$2(source);
  }
  iterateOverProperties(hidden, source, function(val, key) {
    var sourceVal, targetVal, resolved, goDeep, result2;
    sourceVal = source[key];
    targetVal = getOwn$7(target, key);
    if (resolveByFunction) {
      result2 = resolve(key, targetVal, sourceVal, target, source);
      if (isUndefined$6(result2)) {
        return;
      } else if (isDefined$9(result2) && result2 !== Sugar$3T) {
        sourceVal = result2;
        resolved = true;
      }
    } else if (isUndefined$6(sourceVal)) {
      return;
    }
    goDeep = !resolved && deep && isObjectType$6(sourceVal) && !isRegExp$2(sourceVal);
    if (!goDeep && !resolveConflicts && isDefined$9(targetVal)) {
      return;
    }
    if (goDeep) {
      sourceVal = objectMerge$3(targetVal, sourceVal, deep, resolve, hidden, descriptor);
    }
    if (getOwnPropertyNames && descriptor) {
      mergeByPropertyDescriptor(target, source, key, sourceVal);
    } else {
      target[key] = sourceVal;
    }
  });
  return target;
}
var objectMerge_1 = objectMerge$3;
var objectMerge$2 = objectMerge_1, getNewObjectForMerge = getNewObjectForMerge_1;
function clone$3(source, deep) {
  var target = getNewObjectForMerge(source);
  return objectMerge$2(target, source, deep, true, true, true);
}
var clone_1 = clone$3;
var objectMerge$1 = objectMerge_1;
function mergeWithOptions$3(target, source, opts) {
  opts = opts || {};
  return objectMerge$1(target, source, opts.deep, opts.resolve, opts.hidden, opts.descriptor);
}
var mergeWithOptions_1 = mergeWithOptions$3;
var Sugar$3S = sugarCoreExports, clone$2 = clone_1, mergeWithOptions$2 = mergeWithOptions_1;
Sugar$3S.Object.defineInstanceAndStatic({
  "add": function(obj1, obj2, opts) {
    return mergeWithOptions$2(clone$2(obj1), obj2, opts);
  }
});
Sugar$3S.Object.add;
var forEach$7 = forEach_1, classChecks$q = classChecks$Z, mergeWithOptions$1 = mergeWithOptions_1;
var isArray$4 = classChecks$q.isArray;
function mergeAll$3(target, sources, opts) {
  if (!isArray$4(sources)) {
    sources = [sources];
  }
  forEach$7(sources, function(source) {
    return mergeWithOptions$1(target, source, opts);
  });
  return target;
}
var mergeAll_1 = mergeAll$3;
var Sugar$3R = sugarCoreExports, clone$1 = clone_1, mergeAll$2 = mergeAll_1;
Sugar$3R.Object.defineInstanceAndStatic({
  "addAll": function(obj, sources, opts) {
    return mergeAll$2(clone$1(obj), sources, opts);
  }
});
Sugar$3R.Object.addAll;
var Sugar$3Q = sugarCoreExports, clone = clone_1;
Sugar$3Q.Object.defineInstanceAndStatic({
  "clone": function(obj, deep) {
    return clone(obj, deep);
  }
});
Sugar$3Q.Object.clone;
var mergeAll$1 = mergeAll_1;
function defaults$1(target, sources, opts) {
  opts = opts || {};
  opts.resolve = opts.resolve || false;
  return mergeAll$1(target, sources, opts);
}
var defaults_1 = defaults$1;
var Sugar$3P = sugarCoreExports, defaults = defaults_1;
Sugar$3P.Object.defineInstanceAndStatic({
  "defaults": function(target, sources, opts) {
    return defaults(target, sources, opts);
  }
});
Sugar$3P.Object.defaults;
var getMatcher$1 = getMatcher_1, coreUtilityAliases$g = coreUtilityAliases$M;
var forEachProperty$8 = coreUtilityAliases$g.forEachProperty;
function objectExclude$1(obj, f) {
  var result2 = {};
  var matcher = getMatcher$1(f);
  forEachProperty$8(obj, function(val, key) {
    if (!matcher(val, key, obj)) {
      result2[key] = val;
    }
  });
  return result2;
}
var objectExclude_1 = objectExclude$1;
var Sugar$3O = sugarCoreExports, objectExclude = objectExclude_1;
Sugar$3O.Object.defineInstanceAndStatic({
  "exclude": function(obj, f) {
    return objectExclude(obj, f);
  }
});
Sugar$3O.Object.exclude;
var DEEP_QUERY_STRING_REG$1 = /^(.+?)(\[.*\])$/;
var NON_DECIMAL_REG$1 = /[^\d.-]/;
var NON_DECIMAL_REG = NON_DECIMAL_REG$1;
function stringIsDecimal$1(str) {
  return str !== "" && !NON_DECIMAL_REG.test(str);
}
var stringIsDecimal_1 = stringIsDecimal$1;
var classChecks$p = classChecks$Z, stringIsDecimal = stringIsDecimal_1, coreUtilityAliases$f = coreUtilityAliases$M;
var getOwn$6 = coreUtilityAliases$f.getOwn, isArray$3 = classChecks$p.isArray;
function getQueryValueAuto$1(obj, key, val) {
  if (!val) {
    return null;
  } else if (val === "true") {
    return true;
  } else if (val === "false") {
    return false;
  }
  var num = +val;
  if (!isNaN(num) && stringIsDecimal(val)) {
    return num;
  }
  var existing = getOwn$6(obj, key);
  if (val && existing) {
    return isArray$3(existing) ? existing.concat(val) : [existing, val];
  }
  return val;
}
var getQueryValueAuto_1 = getQueryValueAuto$1;
var isDefined$8 = isDefined_1, getQueryValueAuto = getQueryValueAuto_1;
function setQueryProperty$2(obj, key, val, auto2, transform) {
  var fnValue;
  if (transform) {
    fnValue = transform(val, key, obj);
  }
  if (isDefined$8(fnValue)) {
    val = fnValue;
  } else if (auto2) {
    val = getQueryValueAuto(obj, key, val);
  }
  obj[key] = val;
}
var setQueryProperty_1 = setQueryProperty$2;
function mapQuerySeparatorToKeys$1(key, separator) {
  var split = key.split(separator), result2 = split[0];
  for (var i = 1, len = split.length; i < len; i++) {
    result2 += "[" + split[i] + "]";
  }
  return result2;
}
var mapQuerySeparatorToKeys_1 = mapQuerySeparatorToKeys$1;
var forEach$6 = forEach_1, setQueryProperty$1 = setQueryProperty_1, coreUtilityAliases$e = coreUtilityAliases$M;
var hasOwn$5 = coreUtilityAliases$e.hasOwn, getOwn$5 = coreUtilityAliases$e.getOwn;
function parseDeepQueryComponent$1(obj, match, val, deep, auto2, separator, transform) {
  var key = match[1];
  var inner = match[2].slice(1, -1).split("][");
  forEach$6(inner, function(k) {
    if (!hasOwn$5(obj, key)) {
      obj[key] = k ? {} : [];
    }
    obj = getOwn$5(obj, key);
    key = k ? k : obj.length.toString();
  });
  setQueryProperty$1(obj, key, val, auto2, transform);
}
var parseDeepQueryComponent_1 = parseDeepQueryComponent$1;
var DEEP_QUERY_STRING_REG = DEEP_QUERY_STRING_REG$1, setQueryProperty = setQueryProperty_1, mapQuerySeparatorToKeys = mapQuerySeparatorToKeys_1, parseDeepQueryComponent = parseDeepQueryComponent_1;
function parseQueryComponent$1(obj, key, val, deep, auto2, separator, transform) {
  var match;
  if (separator) {
    key = mapQuerySeparatorToKeys(key, separator);
    deep = true;
  }
  if (deep === true && (match = key.match(DEEP_QUERY_STRING_REG))) {
    parseDeepQueryComponent(obj, match, val, deep, auto2, separator, transform);
  } else {
    setQueryProperty(obj, key, val, auto2, transform);
  }
}
var parseQueryComponent_1 = parseQueryComponent$1;
var forEach$5 = forEach_1, parseQueryComponent = parseQueryComponent_1;
function fromQueryStringWithOptions$1(obj, opts) {
  var str = String(obj || "").replace(/^.*?\?/, ""), result2 = {}, auto2;
  opts = opts || {};
  if (str) {
    forEach$5(str.split("&"), function(p) {
      var split = p.split("=");
      var key = decodeURIComponent(split[0]);
      var val = split.length === 2 ? decodeURIComponent(split[1]) : "";
      auto2 = opts.auto !== false;
      parseQueryComponent(result2, key, val, opts.deep, auto2, opts.separator, opts.transform);
    });
  }
  return result2;
}
var fromQueryStringWithOptions_1 = fromQueryStringWithOptions$1;
var Sugar$3N = sugarCoreExports, fromQueryStringWithOptions = fromQueryStringWithOptions_1;
Sugar$3N.Object.defineStatic({
  "fromQueryString": function(obj, options) {
    return fromQueryStringWithOptions(obj, options);
  }
});
Sugar$3N.Object.fromQueryString;
var Sugar$3M = sugarCoreExports, deepGetProperty$1 = deepGetProperty_1;
Sugar$3M.Object.defineInstanceAndStatic({
  "get": function(obj, key, any) {
    return deepGetProperty$1(obj, key, any);
  }
});
Sugar$3M.Object.get;
var handleDeepProperty$1 = handleDeepProperty_1;
function deepHasProperty$1(obj, key, any) {
  return handleDeepProperty$1(obj, key, any, true);
}
var deepHasProperty_1 = deepHasProperty$1;
var Sugar$3L = sugarCoreExports, deepHasProperty = deepHasProperty_1;
Sugar$3L.Object.defineInstanceAndStatic({
  "has": function(obj, key, any) {
    return deepHasProperty(obj, key, any);
  }
});
Sugar$3L.Object.has;
var isEqual$1 = isEqual_1, objectMerge = objectMerge_1, isObjectType$5 = isObjectType_1, coercePrimitiveToObject$1 = coercePrimitiveToObject_1;
function objectIntersectOrSubtract$2(obj1, obj2, subtract) {
  if (!isObjectType$5(obj1)) {
    return subtract ? obj1 : {};
  }
  obj2 = coercePrimitiveToObject$1(obj2);
  function resolve(key, val, val1) {
    var exists = key in obj2 && isEqual$1(val1, obj2[key]);
    if (exists !== subtract) {
      return val1;
    }
  }
  return objectMerge({}, obj1, false, resolve);
}
var objectIntersectOrSubtract_1 = objectIntersectOrSubtract$2;
var Sugar$3K = sugarCoreExports, objectIntersectOrSubtract$1 = objectIntersectOrSubtract_1;
Sugar$3K.Object.defineInstanceAndStatic({
  "intersect": function(obj1, obj2) {
    return objectIntersectOrSubtract$1(obj1, obj2, false);
  }
});
Sugar$3K.Object.intersect;
var Sugar$3J = sugarCoreExports, coreUtilityAliases$d = coreUtilityAliases$M;
var hasOwn$4 = coreUtilityAliases$d.hasOwn, forEachProperty$7 = coreUtilityAliases$d.forEachProperty;
Sugar$3J.Object.defineInstanceAndStatic({
  "invert": function(obj, multi) {
    var result2 = {};
    multi = multi === true;
    forEachProperty$7(obj, function(val, key) {
      if (hasOwn$4(result2, val) && multi) {
        result2[val].push(key);
      } else if (multi) {
        result2[val] = [key];
      } else {
        result2[val] = key;
      }
    });
    return result2;
  }
});
Sugar$3J.Object.invert;
var isPrimitive = isPrimitive_1;
function hasProperty$1(obj, prop) {
  return !isPrimitive(obj) && prop in obj;
}
var hasProperty_1 = hasProperty$1;
var hasProperty = hasProperty_1, coreUtilityAliases$c = coreUtilityAliases$M;
var classToString = coreUtilityAliases$c.classToString;
function isArguments$1(obj, className) {
  className = className || classToString(obj);
  return hasProperty(obj, "length") && (className === "[object Arguments]" || !!obj.callee);
}
var isArguments_1 = isArguments$1;
var Sugar$3I = sugarCoreExports, isArguments = isArguments_1;
Sugar$3I.Object.defineInstanceAndStatic({
  "isArguments": function(obj) {
    return isArguments(obj);
  }
});
Sugar$3I.Object.isArguments;
var methodDefineAliases = methodDefineAliases$3, collectSimilarMethods = collectSimilarMethods_1;
var defineInstanceAndStatic = methodDefineAliases.defineInstanceAndStatic;
function defineInstanceAndStaticSimilar$1(sugarNamespace, set, fn2, flags) {
  defineInstanceAndStatic(sugarNamespace, collectSimilarMethods(set, fn2), flags);
}
var defineInstanceAndStaticSimilar_1 = defineInstanceAndStaticSimilar$1;
var NATIVE_TYPES = NATIVE_TYPES$2, classChecks$o = classChecks$Z, namespaceAliases$8 = namespaceAliases$e, defineInstanceAndStaticSimilar = defineInstanceAndStaticSimilar_1;
var isBoolean = classChecks$o.isBoolean, isNumber$a = classChecks$o.isNumber, isString$8 = classChecks$o.isString, isDate$6 = classChecks$o.isDate, isRegExp$1 = classChecks$o.isRegExp, isFunction$5 = classChecks$o.isFunction, isArray$2 = classChecks$o.isArray, isSet = classChecks$o.isSet, isMap = classChecks$o.isMap, isError = classChecks$o.isError, sugarObject = namespaceAliases$8.sugarObject;
function buildClassCheckMethods$1() {
  var checks = [isBoolean, isNumber$a, isString$8, isDate$6, isRegExp$1, isFunction$5, isArray$2, isError, isSet, isMap];
  defineInstanceAndStaticSimilar(sugarObject, NATIVE_TYPES, function(methods, name, i) {
    methods["is" + name] = checks[i];
  });
}
var buildClassCheckMethods_1 = buildClassCheckMethods$1;
var buildClassCheckMethods = buildClassCheckMethods_1;
buildClassCheckMethods();
var Sugar$3H = sugarCoreExports;
Sugar$3H.Object.isArray;
var Sugar$3G = sugarCoreExports;
Sugar$3G.Object.isBoolean;
var Sugar$3F = sugarCoreExports;
Sugar$3F.Object.isDate;
var getKeys$2 = getKeys_1, coercePrimitiveToObject = coercePrimitiveToObject_1;
function getKeysWithObjectCoercion$1(obj) {
  return getKeys$2(coercePrimitiveToObject(obj));
}
var getKeysWithObjectCoercion_1 = getKeysWithObjectCoercion$1;
var getKeysWithObjectCoercion = getKeysWithObjectCoercion_1;
function objectSize$2(obj) {
  return getKeysWithObjectCoercion(obj).length;
}
var objectSize_1 = objectSize$2;
var Sugar$3E = sugarCoreExports, objectSize$1 = objectSize_1;
Sugar$3E.Object.defineInstanceAndStatic({
  "isEmpty": function(obj) {
    return objectSize$1(obj) === 0;
  }
});
Sugar$3E.Object.isEmpty;
var Sugar$3D = sugarCoreExports, isEqual = isEqual_1;
Sugar$3D.Object.defineInstanceAndStatic({
  "isEqual": function(obj1, obj2) {
    return isEqual(obj1, obj2);
  }
});
Sugar$3D.Object.isEqual;
var Sugar$3C = sugarCoreExports;
Sugar$3C.Object.isError;
var Sugar$3B = sugarCoreExports;
Sugar$3B.Object.isFunction;
var Sugar$3A = sugarCoreExports;
Sugar$3A.Object.isMap;
var Sugar$3z = sugarCoreExports;
Sugar$3z.Object.isNumber;
var Sugar$3y = sugarCoreExports, isPlainObject = isPlainObject_1;
Sugar$3y.Object.defineInstanceAndStatic({
  "isObject": function(obj) {
    return isPlainObject(obj);
  }
});
Sugar$3y.Object.isObject;
var Sugar$3x = sugarCoreExports;
Sugar$3x.Object.isRegExp;
var Sugar$3w = sugarCoreExports;
Sugar$3w.Object.isSet;
var Sugar$3v = sugarCoreExports;
Sugar$3v.Object.isString;
var Sugar$3u = sugarCoreExports, mergeWithOptions = mergeWithOptions_1;
Sugar$3u.Object.defineInstanceAndStatic({
  "merge": function(target, source, opts) {
    return mergeWithOptions(target, source, opts);
  }
});
Sugar$3u.Object.merge;
var Sugar$3t = sugarCoreExports, mergeAll = mergeAll_1;
Sugar$3t.Object.defineInstanceAndStatic({
  "mergeAll": function(target, sources, opts) {
    return mergeAll(target, sources, opts);
  }
});
Sugar$3t.Object.mergeAll;
var classChecks$n = classChecks$Z, isObjectType$4 = isObjectType_1;
var isRegExp = classChecks$n.isRegExp;
function matchInObject$1(match, key) {
  if (isRegExp(match)) {
    return match.test(key);
  } else if (isObjectType$4(match)) {
    return key in match;
  } else {
    return key === String(match);
  }
}
var matchInObject_1 = matchInObject$1;
var matchInObject = matchInObject_1, coreUtilityAliases$b = coreUtilityAliases$M;
var forEachProperty$6 = coreUtilityAliases$b.forEachProperty;
function selectFromObject$2(obj, f, select) {
  var match, result2 = {};
  f = [].concat(f);
  forEachProperty$6(obj, function(val, key) {
    match = false;
    for (var i = 0; i < f.length; i++) {
      if (matchInObject(f[i], key)) {
        match = true;
      }
    }
    if (match === select) {
      result2[key] = val;
    }
  });
  return result2;
}
var selectFromObject_1 = selectFromObject$2;
var selectFromObject$1 = selectFromObject_1;
function objectReject$1(obj, f) {
  return selectFromObject$1(obj, f, false);
}
var objectReject_1 = objectReject$1;
var Sugar$3s = sugarCoreExports, objectReject = objectReject_1;
Sugar$3s.Object.defineInstanceAndStatic({
  "reject": function(obj, f) {
    return objectReject(obj, f);
  }
});
Sugar$3s.Object.reject;
var getMatcher = getMatcher_1, coreUtilityAliases$a = coreUtilityAliases$M;
var forEachProperty$5 = coreUtilityAliases$a.forEachProperty;
function objectRemove$1(obj, f) {
  var matcher = getMatcher(f);
  forEachProperty$5(obj, function(val, key) {
    if (matcher(val, key, obj)) {
      delete obj[key];
    }
  });
  return obj;
}
var objectRemove_1 = objectRemove$1;
var Sugar$3r = sugarCoreExports, objectRemove = objectRemove_1;
Sugar$3r.Object.defineInstanceAndStatic({
  "remove": function(obj, f) {
    return objectRemove(obj, f);
  }
});
Sugar$3r.Object.remove;
var selectFromObject = selectFromObject_1;
function objectSelect$1(obj, f) {
  return selectFromObject(obj, f, true);
}
var objectSelect_1 = objectSelect$1;
var Sugar$3q = sugarCoreExports, objectSelect = objectSelect_1;
Sugar$3q.Object.defineInstanceAndStatic({
  "select": function(obj, f) {
    return objectSelect(obj, f);
  }
});
Sugar$3q.Object.select;
var handleDeepProperty = handleDeepProperty_1;
function deepSetProperty$1(obj, key, val) {
  handleDeepProperty(obj, key, false, false, true, false, val);
  return obj;
}
var deepSetProperty_1 = deepSetProperty$1;
var Sugar$3p = sugarCoreExports, deepSetProperty = deepSetProperty_1;
Sugar$3p.Object.defineInstanceAndStatic({
  "set": function(obj, key, val) {
    return deepSetProperty(obj, key, val);
  }
});
Sugar$3p.Object.set;
var Sugar$3o = sugarCoreExports, objectSize = objectSize_1;
Sugar$3o.Object.defineInstanceAndStatic({
  "size": function(obj) {
    return objectSize(obj);
  }
});
Sugar$3o.Object.size;
var Sugar$3n = sugarCoreExports, objectIntersectOrSubtract = objectIntersectOrSubtract_1;
Sugar$3n.Object.defineInstanceAndStatic({
  "subtract": function(obj1, obj2) {
    return objectIntersectOrSubtract(obj1, obj2, true);
  }
});
Sugar$3n.Object.subtract;
var classChecks$m = classChecks$Z;
var isFunction$4 = classChecks$m.isFunction;
function tap$1(obj, arg) {
  var fn2 = arg;
  if (!isFunction$4(arg)) {
    fn2 = function() {
      if (arg)
        obj[arg]();
    };
  }
  fn2.call(obj, obj);
  return obj;
}
var tap_1 = tap$1;
var Sugar$3m = sugarCoreExports, tap = tap_1;
Sugar$3m.Object.defineInstanceAndStatic({
  "tap": function(obj, arg) {
    return tap(obj, arg);
  }
});
Sugar$3m.Object.tap;
var internalToString$1 = Object.prototype.toString;
function sanitizeURIComponent$2(obj) {
  return !obj && obj !== false && obj !== 0 ? "" : encodeURIComponent(obj);
}
var sanitizeURIComponent_1 = sanitizeURIComponent$2;
var classChecks$l = classChecks$Z, sanitizeURIComponent$1 = sanitizeURIComponent_1;
var isDate$5 = classChecks$l.isDate;
function getURIComponentValue$1(obj, prefix, transform) {
  var value;
  if (transform) {
    value = transform(obj, prefix);
  } else if (isDate$5(obj)) {
    value = obj.getTime();
  } else {
    value = obj;
  }
  return sanitizeURIComponent$1(prefix) + "=" + sanitizeURIComponent$1(value);
}
var getURIComponentValue_1 = getURIComponentValue$1;
var classChecks$k = classChecks$Z, isObjectType$3 = isObjectType_1, internalToString = internalToString$1, coreUtilityAliases$9 = coreUtilityAliases$M, getURIComponentValue = getURIComponentValue_1, sanitizeURIComponent = sanitizeURIComponent_1;
var isArray$1 = classChecks$k.isArray, forEachProperty$4 = coreUtilityAliases$9.forEachProperty;
function toQueryString$1(obj, deep, transform, prefix, separator) {
  if (isArray$1(obj)) {
    return collectArrayAsQueryString(obj, deep, transform, prefix, separator);
  } else if (isObjectType$3(obj) && obj.toString === internalToString) {
    return collectObjectAsQueryString(obj, deep, transform, prefix, separator);
  } else if (prefix) {
    return getURIComponentValue(obj, prefix, transform);
  }
  return "";
}
function collectArrayAsQueryString(arr, deep, transform, prefix, separator) {
  var el, qc, key, result2 = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    el = arr[i];
    key = prefix + (prefix && deep ? "[]" : "");
    if (!key && !isObjectType$3(el)) {
      qc = sanitizeURIComponent(el);
    } else {
      qc = toQueryString$1(el, deep, transform, key, separator);
    }
    result2.push(qc);
  }
  return result2.join("&");
}
function collectObjectAsQueryString(obj, deep, transform, prefix, separator) {
  var result2 = [];
  forEachProperty$4(obj, function(val, key) {
    var fullKey;
    if (prefix && deep) {
      fullKey = prefix + "[" + key + "]";
    } else if (prefix) {
      fullKey = prefix + separator + key;
    } else {
      fullKey = key;
    }
    result2.push(toQueryString$1(val, deep, transform, fullKey, separator));
  });
  return result2.join("&");
}
var toQueryString_1 = toQueryString$1;
var isUndefined$5 = isUndefined_1, toQueryString = toQueryString_1;
function toQueryStringWithOptions$1(obj, opts) {
  opts = opts || {};
  if (isUndefined$5(opts.separator)) {
    opts.separator = "_";
  }
  return toQueryString(obj, opts.deep, opts.transform, opts.prefix || "", opts.separator);
}
var toQueryStringWithOptions_1 = toQueryStringWithOptions$1;
var Sugar$3l = sugarCoreExports, toQueryStringWithOptions = toQueryStringWithOptions_1;
Sugar$3l.Object.defineInstanceAndStatic({
  "toQueryString": function(obj, options) {
    return toQueryStringWithOptions(obj, options);
  }
});
Sugar$3l.Object.toQueryString;
var coreUtilityAliases$8 = coreUtilityAliases$M;
var forEachProperty$3 = coreUtilityAliases$8.forEachProperty;
function getValues$1(obj) {
  var values = [];
  forEachProperty$3(obj, function(val) {
    values.push(val);
  });
  return values;
}
var getValues_1 = getValues$1;
var Sugar$3k = sugarCoreExports, getValues = getValues_1;
Sugar$3k.Object.defineInstanceAndStatic({
  "values": function(obj) {
    return getValues(obj);
  }
});
Sugar$3k.Object.values;
var Sugar$3j = sugarCoreExports, getKeys$1 = getKeys_1;
Sugar$3j.Object.defineInstance({
  "keys": function(obj) {
    return getKeys$1(obj);
  }
});
Sugar$3j.Object.keys;
var EnglishLocaleBaseDefinition$1 = {
  "code": "en",
  "plural": true,
  "timeMarkers": "at",
  "ampm": "AM|A.M.|a,PM|P.M.|p",
  "units": "millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",
  "months": "Jan:uary|,Feb:ruary|,Mar:ch|,Apr:il|,May,Jun:e|,Jul:y|,Aug:ust|,Sep:tember|t|,Oct:ober|,Nov:ember|,Dec:ember|",
  "weekdays": "Sun:day|,Mon:day|,Tue:sday|,Wed:nesday|,Thu:rsday|,Fri:day|,Sat:urday|+weekend",
  "numerals": "zero,one|first,two|second,three|third,four:|th,five|fifth,six:|th,seven:|th,eight:|h,nin:e|th,ten:|th",
  "articles": "a,an,the",
  "tokens": "the,st|nd|rd|th,of|in,a|an,on",
  "time": "{H}:{mm}",
  "past": "{num} {unit} {sign}",
  "future": "{num} {unit} {sign}",
  "duration": "{num} {unit}",
  "modifiers": [
    { "name": "half", "src": "half", "value": 0.5 },
    { "name": "midday", "src": "noon", "value": 12 },
    { "name": "midday", "src": "midnight", "value": 24 },
    { "name": "day", "src": "yesterday", "value": -1 },
    { "name": "day", "src": "today|tonight", "value": 0 },
    { "name": "day", "src": "tomorrow", "value": 1 },
    { "name": "sign", "src": "ago|before", "value": -1 },
    { "name": "sign", "src": "from now|after|from|in|later", "value": 1 },
    { "name": "edge", "src": "first day|first|beginning", "value": -2 },
    { "name": "edge", "src": "last day", "value": 1 },
    { "name": "edge", "src": "end|last", "value": 2 },
    { "name": "shift", "src": "last", "value": -1 },
    { "name": "shift", "src": "the|this", "value": 0 },
    { "name": "shift", "src": "next", "value": 1 }
  ],
  "parse": [
    "(?:just)? now",
    "{shift} {unit:5-7}",
    "{months?} {year}",
    "{midday} {4?} {day|weekday}",
    "{months},?[-.\\/\\s]?{year?}",
    "{edge} of (?:day)? {day|weekday}",
    "{0} {num}{1?} {weekday} {2} {months},? {year?}",
    "{shift?} {day?} {weekday?} (?:at)? {midday}",
    "{sign?} {3?} {half} {3?} {unit:3-4|unit:7} {sign?}",
    "{0?} {edge} {weekday?} {2} {shift?} {unit:4-7?} {months?},? {year?}"
  ],
  "timeParse": [
    "{day|weekday}",
    "{shift} {unit:5?} {weekday}",
    "{0?} {date}{1?} {2?} {months?}",
    "{weekday} {2?} {shift} {unit:5}",
    "{0?} {num} {2?} {months}\\.?,? {year?}",
    "{num?} {unit:4-5} {sign} {day|weekday}",
    "{0|months} {date?}{1?} of {shift} {unit:6-7}",
    "{0?} {num}{1?} {weekday} of {shift} {unit:6}",
    "{year?}[-.\\/\\s]?{months}[-.\\/\\s]{date}",
    "{date}[-.\\/\\s]{months}(?:[-.\\/\\s]{year|yy})?",
    "{weekday?}\\.?,? {months}\\.?,? {date}{1?},? {year?}",
    "{weekday?}\\.?,? {date} {months} {year}"
  ],
  "timeFrontParse": [
    "{sign} {num} {unit}",
    "{num} {unit} {sign}",
    "{4?} {day|weekday}"
  ]
};
var EnglishLocaleBaseDefinition_1 = EnglishLocaleBaseDefinition$1;
var EnglishLocaleBaseDefinition = EnglishLocaleBaseDefinition_1, simpleMerge$2 = simpleMerge_1, simpleClone$2 = simpleClone_1;
function getEnglishVariant$3(v) {
  return simpleMerge$2(simpleClone$2(EnglishLocaleBaseDefinition), v);
}
var getEnglishVariant_1 = getEnglishVariant$3;
var getEnglishVariant$2 = getEnglishVariant_1;
var BritishEnglishDefinition$1 = getEnglishVariant$2({
  "short": "{dd}/{MM}/{yyyy}",
  "medium": "{d} {Month} {yyyy}",
  "long": "{d} {Month} {yyyy} {H}:{mm}",
  "full": "{Weekday}, {d} {Month}, {yyyy} {time}",
  "stamp": "{Dow} {d} {Mon} {yyyy} {time}"
});
var BritishEnglishDefinition_1 = BritishEnglishDefinition$1;
var getEnglishVariant$1 = getEnglishVariant_1;
var AmericanEnglishDefinition$2 = getEnglishVariant$1({
  "mdy": true,
  "firstDayOfWeek": 0,
  "firstDayOfWeekYear": 1,
  "short": "{MM}/{dd}/{yyyy}",
  "medium": "{Month} {d}, {yyyy}",
  "long": "{Month} {d}, {yyyy} {time}",
  "full": "{Weekday}, {Month} {d}, {yyyy} {time}",
  "stamp": "{Dow} {Mon} {d} {yyyy} {time}",
  "time": "{h}:{mm} {TT}"
});
var AmericanEnglishDefinition_1 = AmericanEnglishDefinition$2;
var getEnglishVariant = getEnglishVariant_1;
var CanadianEnglishDefinition$1 = getEnglishVariant({
  "short": "{yyyy}-{MM}-{dd}",
  "medium": "{d} {Month}, {yyyy}",
  "long": "{d} {Month}, {yyyy} {H}:{mm}",
  "full": "{Weekday}, {d} {Month}, {yyyy} {time}",
  "stamp": "{Dow} {d} {Mon} {yyyy} {time}"
});
var CanadianEnglishDefinition_1 = CanadianEnglishDefinition$1;
var BritishEnglishDefinition = BritishEnglishDefinition_1, AmericanEnglishDefinition$1 = AmericanEnglishDefinition_1, CanadianEnglishDefinition = CanadianEnglishDefinition_1;
var LazyLoadedLocales$1 = {
  "en-US": AmericanEnglishDefinition$1,
  "en-GB": BritishEnglishDefinition,
  "en-AU": BritishEnglishDefinition,
  "en-CA": CanadianEnglishDefinition
};
var LazyLoadedLocales_1 = LazyLoadedLocales$1;
var LOCALE_ARRAY_FIELDS$1 = [
  "months",
  "weekdays",
  "units",
  "numerals",
  "placeholders",
  "articles",
  "tokens",
  "timeMarkers",
  "ampm",
  "timeSuffixes",
  "parse",
  "timeParse",
  "timeFrontParse",
  "modifiers"
];
var LOCALE_ARRAY_FIELDS_1 = LOCALE_ARRAY_FIELDS$1;
var ISODefaults$3 = {
  ISO_FIRST_DAY_OF_WEEK: 1,
  ISO_FIRST_DAY_OF_WEEK_YEAR: 4
};
var CoreParsingTokens$1 = {
  "yyyy": {
    param: "year",
    src: "[-−+]?\\d{4,6}"
  },
  "yy": {
    param: "year",
    src: "\\d{2}"
  },
  "y": {
    param: "year",
    src: "\\d"
  },
  "ayy": {
    param: "year",
    src: "'\\d{2}"
  },
  "MM": {
    param: "month",
    src: "(?:1[012]|0?[1-9])"
  },
  "dd": {
    param: "date",
    src: "(?:3[01]|[12][0-9]|0?[1-9])"
  },
  "hh": {
    param: "hour",
    src: "(?:2[0-4]|[01]?[0-9])"
  },
  "mm": {
    param: "minute",
    src: "[0-5]\\d"
  },
  "ss": {
    param: "second",
    src: "[0-5]\\d(?:[,.]\\d+)?"
  },
  "tzHour": {
    src: "[-−+](?:2[0-4]|[01]?[0-9])"
  },
  "tzMinute": {
    src: "[0-5]\\d"
  },
  "iyyyy": {
    param: "year",
    src: "(?:[-−+]?\\d{4}|[-−+]\\d{5,6})"
  },
  "ihh": {
    param: "hour",
    src: "(?:2[0-4]|[01][0-9])(?:[,.]\\d+)?"
  },
  "imm": {
    param: "minute",
    src: "[0-5]\\d(?:[,.]\\d+)?"
  },
  "GMT": {
    param: "utc",
    src: "GMT"
  },
  "Z": {
    param: "utc",
    src: "Z"
  },
  "timestamp": {
    src: "\\d+"
  }
};
var CoreParsingTokens_1 = CoreParsingTokens$1;
var CoreParsingFormats$1 = [
  {
    // 12-1978
    // 08-1978 (MDY)
    src: "{MM}[-.\\/]{yyyy}"
  },
  {
    // 12/08/1978
    // 08/12/1978 (MDY)
    time: true,
    src: "{dd}[-\\/]{MM}(?:[-\\/]{yyyy|yy|y})?",
    mdy: "{MM}[-\\/]{dd}(?:[-\\/]{yyyy|yy|y})?"
  },
  {
    // 12.08.1978
    // 08.12.1978 (MDY)
    time: true,
    src: "{dd}\\.{MM}(?:\\.{yyyy|yy|y})?",
    mdy: "{MM}\\.{dd}(?:\\.{yyyy|yy|y})?",
    localeCheck: function(loc) {
      return loc.timeSeparator !== ".";
    }
  },
  {
    // 1975-08-25
    time: true,
    src: "{yyyy}[-.\\/]{MM}(?:[-.\\/]{dd})?"
  },
  {
    // .NET JSON
    src: "\\\\/Date\\({timestamp}(?:[-+]\\d{4,4})?\\)\\\\/"
  },
  {
    // ISO-8601
    src: "{iyyyy}(?:-?{MM}(?:-?{dd}(?:T{ihh}(?::?{imm}(?::?{ss})?)?)?)?)?{tzOffset?}"
  }
];
var CoreParsingFormats_1 = CoreParsingFormats$1;
var LocalizedParsingTokens$2 = {
  "year": {
    base: "yyyy|ayy",
    requiresSuffix: true
  },
  "month": {
    base: "MM",
    requiresSuffix: true
  },
  "date": {
    base: "dd",
    requiresSuffix: true
  },
  "hour": {
    base: "hh",
    requiresSuffixOr: ":"
  },
  "minute": {
    base: "mm"
  },
  "second": {
    base: "ss"
  },
  "num": {
    src: "\\d+",
    requiresNumerals: true
  }
};
var LocalizedParsingTokens_1 = LocalizedParsingTokens$2;
function getArrayWithOffset$1(arr, n, alternate, offset2) {
  var val;
  if (alternate > 1) {
    val = arr[n + (alternate - 1) * offset2];
  }
  return val || arr[n];
}
var getArrayWithOffset_1 = getArrayWithOffset$1;
function getRegNonCapturing$2(src, opt) {
  if (src.length > 1) {
    src = "(?:" + src + ")";
  }
  if (opt) {
    src += "?";
  }
  return src;
}
var getRegNonCapturing_1 = getRegNonCapturing$2;
var PRIVATE_PROP_PREFIX$1 = "_sugar_";
var PRIVATE_PROP_PREFIX = PRIVATE_PROP_PREFIX$1, coreUtilityAliases$7 = coreUtilityAliases$M;
var setProperty = coreUtilityAliases$7.setProperty;
function privatePropertyAccessor$5(key) {
  var privateKey = PRIVATE_PROP_PREFIX + key;
  return function(obj, val) {
    if (arguments.length > 1) {
      setProperty(obj, privateKey, val);
      return obj;
    }
    return obj[privateKey];
  };
}
var privatePropertyAccessor_1 = privatePropertyAccessor$5;
var privatePropertyAccessor$4 = privatePropertyAccessor_1;
var _utc$8 = privatePropertyAccessor$4("utc");
var _utc$7 = _utc$8;
function callDateGet$a(d, method) {
  return d["get" + (_utc$7(d) ? "UTC" : "") + method]();
}
var callDateGet_1 = callDateGet$a;
var callDateGet$9 = callDateGet_1;
function getYear$7(d) {
  return callDateGet$9(d, "FullYear");
}
var getYear_1 = getYear$7;
var callDateGet$8 = callDateGet_1;
function getMonth$7(d) {
  return callDateGet$8(d, "Month");
}
var getMonth_1 = getMonth$7;
var getYear$6 = getYear_1, getMonth$6 = getMonth_1, callDateGet$7 = callDateGet_1;
function getDaysInMonth$2(d) {
  return 32 - callDateGet$7(new Date(getYear$6(d), getMonth$6(d), 32), "Date");
}
var getDaysInMonth_1 = getDaysInMonth$2;
var getDaysInMonth$1 = getDaysInMonth_1;
var DateUnits$7 = [
  {
    name: "millisecond",
    method: "Milliseconds",
    multiplier: 1,
    start: 0,
    end: 999
  },
  {
    name: "second",
    method: "Seconds",
    multiplier: 1e3,
    start: 0,
    end: 59
  },
  {
    name: "minute",
    method: "Minutes",
    multiplier: 60 * 1e3,
    start: 0,
    end: 59
  },
  {
    name: "hour",
    method: "Hours",
    multiplier: 60 * 60 * 1e3,
    start: 0,
    end: 23
  },
  {
    name: "day",
    alias: "date",
    method: "Date",
    ambiguous: true,
    multiplier: 24 * 60 * 60 * 1e3,
    start: 1,
    end: function(d) {
      return getDaysInMonth$1(d);
    }
  },
  {
    name: "week",
    method: "ISOWeek",
    ambiguous: true,
    multiplier: 7 * 24 * 60 * 60 * 1e3
  },
  {
    name: "month",
    method: "Month",
    ambiguous: true,
    multiplier: 30.4375 * 24 * 60 * 60 * 1e3,
    start: 0,
    end: 11
  },
  {
    name: "year",
    method: "FullYear",
    ambiguous: true,
    multiplier: 365.25 * 24 * 60 * 60 * 1e3,
    start: 0
  }
];
var DateUnits_1 = DateUnits$7;
var DateUnitIndexes$i = {
  HOURS_INDEX: 3,
  DAY_INDEX: 4,
  WEEK_INDEX: 5,
  MONTH_INDEX: 6,
  YEAR_INDEX: 7
};
var DateUnits$6 = DateUnits_1, DateUnitIndexes$h = DateUnitIndexes$i, isUndefined$4 = isUndefined_1;
var YEAR_INDEX$4 = DateUnitIndexes$h.YEAR_INDEX;
function iterateOverDateUnits$3(fn2, startIndex, endIndex) {
  endIndex = endIndex || 0;
  if (isUndefined$4(startIndex)) {
    startIndex = YEAR_INDEX$4;
  }
  for (var index = startIndex; index >= endIndex; index--) {
    if (fn2(DateUnits$6[index], index) === false) {
      break;
    }
  }
}
var iterateOverDateUnits_1 = iterateOverDateUnits$3;
var map$1 = map_1, escapeRegExp$1 = escapeRegExp_1;
function arrayToRegAlternates$1(arr) {
  var joined = arr.join("");
  if (!arr || !arr.length) {
    return "";
  }
  if (joined.length === arr.length) {
    return "[" + joined + "]";
  }
  return map$1(arr, escapeRegExp$1).join("|");
}
var arrayToRegAlternates_1 = arrayToRegAlternates$1;
var mathAliases$g = mathAliases$z, iterateOverDateUnits$2 = iterateOverDateUnits_1;
var abs$5 = mathAliases$g.abs;
function getAdjustedUnit$2(ms, fn2) {
  var unitIndex = 0, value = 0;
  iterateOverDateUnits$2(function(unit, i) {
    value = abs$5(fn2(unit));
    if (value >= 1) {
      unitIndex = i;
      return false;
    }
  });
  return [value, unitIndex, ms];
}
var getAdjustedUnit_1 = getAdjustedUnit$2;
var trunc$7 = trunc_1, withPrecision$1 = withPrecision_1, getAdjustedUnit$1 = getAdjustedUnit_1;
function getAdjustedUnitForNumber$1(ms) {
  return getAdjustedUnit$1(ms, function(unit) {
    return trunc$7(withPrecision$1(ms / unit.multiplier, 1));
  });
}
var getAdjustedUnitForNumber_1 = getAdjustedUnitForNumber$1;
var LocalizedParsingTokens$1 = LocalizedParsingTokens_1, getRegNonCapturing$1 = getRegNonCapturing_1;
function getParsingTokenWithSuffix$1(field, src, suffix) {
  var token = LocalizedParsingTokens$1[field];
  if (token.requiresSuffix) {
    src = getRegNonCapturing$1(src + getRegNonCapturing$1(suffix));
  } else if (token.requiresSuffixOr) {
    src += getRegNonCapturing$1(token.requiresSuffixOr + "|" + suffix);
  } else {
    src += getRegNonCapturing$1(suffix, true);
  }
  return src;
}
var getParsingTokenWithSuffix_1 = getParsingTokenWithSuffix$1;
var LOCALE_ARRAY_FIELDS = LOCALE_ARRAY_FIELDS_1, ISODefaults$2 = ISODefaults$3, CoreParsingTokens = CoreParsingTokens_1, CoreParsingFormats = CoreParsingFormats_1, LocalizedParsingTokens = LocalizedParsingTokens_1, map = map_1, filter = filter_1, forEach$4 = forEach_1, isDefined$7 = isDefined_1, commaSplit = commaSplit_1, classChecks$j = classChecks$Z, mathAliases$f = mathAliases$z, isUndefined$3 = isUndefined_1, simpleMerge$1 = simpleMerge_1, getOrdinalSuffix = getOrdinalSuffix_1, getArrayWithOffset = getArrayWithOffset_1, getRegNonCapturing = getRegNonCapturing_1, coreUtilityAliases$6 = coreUtilityAliases$M, iterateOverDateUnits$1 = iterateOverDateUnits_1, arrayToRegAlternates = arrayToRegAlternates_1, fullwidthNumberHelpers = fullwidthNumberHelpers$2, getAdjustedUnitForNumber = getAdjustedUnitForNumber_1, getParsingTokenWithSuffix = getParsingTokenWithSuffix_1;
var hasOwn$3 = coreUtilityAliases$6.hasOwn, getOwn$4 = coreUtilityAliases$6.getOwn, forEachProperty$2 = coreUtilityAliases$6.forEachProperty, fullWidthNumberMap = fullwidthNumberHelpers.fullWidthNumberMap, fullWidthNumbers = fullwidthNumberHelpers.fullWidthNumbers, pow = mathAliases$f.pow, max$3 = mathAliases$f.max, ISO_FIRST_DAY_OF_WEEK$2 = ISODefaults$2.ISO_FIRST_DAY_OF_WEEK, ISO_FIRST_DAY_OF_WEEK_YEAR$2 = ISODefaults$2.ISO_FIRST_DAY_OF_WEEK_YEAR, isString$7 = classChecks$j.isString, isFunction$3 = classChecks$j.isFunction;
function getNewLocale$1(def) {
  function Locale(def2) {
    this.init(def2);
  }
  Locale.prototype = {
    getMonthName: function(n, alternate) {
      if (this.monthSuffix) {
        return n + 1 + this.monthSuffix;
      }
      return getArrayWithOffset(this.months, n, alternate, 12);
    },
    getWeekdayName: function(n, alternate) {
      return getArrayWithOffset(this.weekdays, n, alternate, 7);
    },
    // TODO: rename to parse in next major version
    parseValue: function(str, param) {
      var map2 = this[param + "Map"];
      if (hasOwn$3(map2, str)) {
        return map2[str];
      }
      return this.parseNumber(str, param);
    },
    // TODO: analyze performance of parsing first vs checking
    // numeralMap first.
    parseNumber: function(str, param) {
      var val;
      if (hasOwn$3(this.numeralMap, str)) {
        val = this.numeralMap[str];
      }
      if (isNaN(val)) {
        val = this.parseRegularNumerals(str);
      }
      if (isNaN(val)) {
        val = this.parseIrregularNumerals(str);
      }
      if (param === "month") {
        val -= 1;
      }
      return val;
    },
    // TODO: perf test returning up front if no regular decimals exist
    parseRegularNumerals: function(str) {
      str = str.replace(/^−/, "-").replace(/,/, ".");
      return +str;
    },
    parseIrregularNumerals: function(str) {
      var place = 1, num = 0, lastWasPlace, isPlace, numeral, digit, arr;
      arr = str.split("");
      for (var i = arr.length - 1; numeral = arr[i]; i--) {
        digit = getOwn$4(this.numeralMap, numeral);
        if (isUndefined$3(digit)) {
          digit = getOwn$4(fullWidthNumberMap, numeral) || 0;
        }
        isPlace = digit > 0 && digit % 10 === 0;
        if (isPlace) {
          if (lastWasPlace) {
            num += place;
          }
          if (i) {
            place = digit;
          } else {
            num += digit;
          }
        } else {
          num += digit * place;
          place *= 10;
        }
        lastWasPlace = isPlace;
      }
      return num;
    },
    getOrdinal: function(n) {
      var suffix = this.ordinalSuffix;
      return suffix || getOrdinalSuffix(n);
    },
    getRelativeFormat: function(adu, type) {
      return this.convertAdjustedToFormat(adu, type);
    },
    getDuration: function(ms) {
      return this.convertAdjustedToFormat(getAdjustedUnitForNumber(max$3(0, ms)), "duration");
    },
    getFirstDayOfWeek: function() {
      var val = this.firstDayOfWeek;
      return isDefined$7(val) ? val : ISO_FIRST_DAY_OF_WEEK$2;
    },
    getFirstDayOfWeekYear: function() {
      return this.firstDayOfWeekYear || ISO_FIRST_DAY_OF_WEEK_YEAR$2;
    },
    convertAdjustedToFormat: function(adu, type) {
      var sign, unit, mult, num = adu[0], u = adu[1], ms = adu[2], format = this[type] || this.relative;
      if (isFunction$3(format)) {
        return format.call(this, num, u, ms, type);
      }
      mult = !this.plural || num === 1 ? 0 : 1;
      unit = this.units[mult * 8 + u] || this.units[u];
      sign = this[ms > 0 ? "fromNow" : "ago"];
      return format.replace(/\{(.*?)\}/g, function(full, match) {
        switch (match) {
          case "num":
            return num;
          case "unit":
            return unit;
          case "sign":
            return sign;
        }
      });
    },
    cacheFormat: function(dif, i) {
      this.compiledFormats.splice(i, 1);
      this.compiledFormats.unshift(dif);
    },
    addFormat: function(format) {
      var loc = this, src, to;
      function getTokenSrc(token) {
        var suffix, src2, tmp, opt = token.match(/\?$/), nc = token.match(/^(\d+)\??$/), slice = token.match(/(\d)(?:-(\d))?/), param = token.replace(/[^a-z]+$/i, "");
        if (tmp = getOwn$4(loc.parsingAliases, param)) {
          src2 = formatToSrc(tmp);
          if (opt) {
            src2 = getRegNonCapturing(src2, true);
          }
          return src2;
        }
        if (nc) {
          src2 = loc.tokens[nc[1]];
        } else if (tmp = getOwn$4(CoreParsingTokens, param)) {
          src2 = tmp.src;
          param = tmp.param || param;
        } else {
          tmp = getOwn$4(loc.parsingTokens, param) || getOwn$4(loc, param);
          param = param.replace(/s$/, "");
          if (!tmp) {
            tmp = getOwn$4(loc.parsingTokens, param) || getOwn$4(loc, param + "s");
          }
          if (isString$7(tmp)) {
            src2 = tmp;
            suffix = loc[param + "Suffix"];
          } else {
            if (param === "weekday" && loc.code === "ko") {
              tmp = filter(tmp, function(str) {
                return str.length > 1;
              });
            }
            if (slice) {
              tmp = filter(tmp, function(m, i) {
                var mod = i % (loc.units ? 8 : tmp.length);
                return mod >= slice[1] && mod <= (slice[2] || slice[1]);
              });
            }
            src2 = arrayToRegAlternates(tmp);
          }
        }
        if (!src2) {
          return "";
        }
        if (nc) {
          src2 = getRegNonCapturing(src2);
        } else {
          to.push(param);
          src2 = "(" + src2 + ")";
        }
        if (suffix) {
          src2 = getParsingTokenWithSuffix(param, src2, suffix);
        }
        if (opt) {
          src2 += "?";
        }
        return src2;
      }
      function formatToSrc(str) {
        str = str.replace(/ /g, " ?");
        str = str.replace(/\{([^,]+?)\}/g, function(match, token) {
          var tokens = token.split("|");
          if (tokens.length > 1) {
            return getRegNonCapturing(map(tokens, getTokenSrc).join("|"));
          } else {
            return getTokenSrc(token);
          }
        });
        return str;
      }
      function parseInputFormat() {
        to = [];
        src = formatToSrc(format);
      }
      parseInputFormat();
      loc.addRawFormat(src, to);
    },
    addRawFormat: function(format, to) {
      this.compiledFormats.unshift({
        reg: RegExp("^ *" + format + " *$", "i"),
        to
      });
    },
    init: function(def2) {
      var loc = this;
      function initFormats() {
        loc.compiledFormats = [];
        loc.parsingAliases = {};
        loc.parsingTokens = {};
      }
      function initDefinition() {
        simpleMerge$1(loc, def2);
      }
      function initArrayFields() {
        forEach$4(LOCALE_ARRAY_FIELDS, function(name) {
          var val = loc[name];
          if (isString$7(val)) {
            loc[name] = commaSplit(val);
          } else if (!val) {
            loc[name] = [];
          }
        });
      }
      function buildValueArray(name, mod, map2, fn2) {
        var field = name, all = [], setMap;
        if (!loc[field]) {
          field += "s";
        }
        if (!map2) {
          map2 = {};
          setMap = true;
        }
        forAllAlternates(field, function(alt, j, i) {
          var idx = j * mod + i, val;
          val = fn2 ? fn2(i) : i;
          map2[alt] = val;
          map2[alt.toLowerCase()] = val;
          all[idx] = alt;
        });
        loc[field] = all;
        if (setMap) {
          loc[name + "Map"] = map2;
        }
      }
      function forAllAlternates(field, fn2) {
        forEach$4(loc[field], function(str, i) {
          forEachAlternate(str, function(alt, j) {
            fn2(alt, j, i);
          });
        });
      }
      function forEachAlternate(str, fn2) {
        var arr = map(str.split("+"), function(split) {
          return split.replace(/(.+):(.+)$/, function(full, base, suffixes) {
            return map(suffixes.split("|"), function(suffix) {
              return base + suffix;
            }).join("|");
          });
        }).join("|");
        forEach$4(arr.split("|"), fn2);
      }
      function buildNumerals() {
        var map2 = {};
        buildValueArray("numeral", 10, map2);
        buildValueArray("article", 1, map2, function() {
          return 1;
        });
        buildValueArray("placeholder", 4, map2, function(n) {
          return pow(10, n + 1);
        });
        loc.numeralMap = map2;
      }
      function buildTimeFormats() {
        loc.parsingAliases["time"] = getTimeFormat();
        loc.parsingAliases["tzOffset"] = getTZOffsetFormat();
      }
      function getTimeFormat(standalone) {
        var src, sep;
        sep = getTimeSeparatorSrc();
        if (loc.ampmFront) {
          src = "{ampm?} {hour} (?:{minute} (?::?{second})?)?";
        } else if (loc.ampm.length) {
          src = "{hour}(?:" + sep + "{minute?}(?:" + sep + "{second?})? {ampm?}| {ampm})";
        } else {
          src = "{hour}(?:" + sep + "{minute?}(?:" + sep + "{second?})?)";
        }
        return src;
      }
      function getTimeSeparatorSrc() {
        if (loc.timeSeparator) {
          return "[:" + loc.timeSeparator + "]";
        } else {
          return ":";
        }
      }
      function getTZOffsetFormat() {
        return "(?:{Z}|{GMT?}(?:{tzHour}(?::?{tzMinute}(?: \\([\\w\\s]+\\))?)?)?)?";
      }
      function buildParsingTokens() {
        forEachProperty$2(LocalizedParsingTokens, function(token, name) {
          var src = token.base ? getCoreTokensForBase(token.base) : token.src, arr;
          if (token.requiresNumerals || loc.numeralUnits) {
            src += getNumeralSrc();
          }
          arr = loc[name + "s"];
          if (arr && arr.length) {
            src += "|" + arrayToRegAlternates(arr);
          }
          loc.parsingTokens[name] = src;
        });
      }
      function getCoreTokensForBase(base) {
        return map(base.split("|"), function(key) {
          return CoreParsingTokens[key].src;
        }).join("|");
      }
      function getNumeralSrc() {
        var all, src = "";
        all = loc.numerals.concat(loc.placeholders).concat(loc.articles);
        if (loc.allowsFullWidth) {
          all = all.concat(fullWidthNumbers.split(""));
        }
        if (all.length) {
          src = "|(?:" + arrayToRegAlternates(all) + ")+";
        }
        return src;
      }
      function buildTimeSuffixes() {
        iterateOverDateUnits$1(function(unit, i) {
          var token = loc.timeSuffixes[i];
          if (token) {
            loc[(unit.alias || unit.name) + "Suffix"] = token;
          }
        });
      }
      function buildModifiers() {
        forEach$4(loc.modifiers, function(modifier) {
          var name = modifier.name, mapKey = name + "Map", map2;
          map2 = loc[mapKey] || {};
          forEachAlternate(modifier.src, function(alt, j) {
            var token = getOwn$4(loc.parsingTokens, name), val = modifier.value;
            map2[alt] = val;
            loc.parsingTokens[name] = token ? token + "|" + alt : alt;
            if (modifier.name === "sign" && j === 0) {
              loc[val === 1 ? "fromNow" : "ago"] = alt;
            }
          });
          loc[mapKey] = map2;
        });
      }
      function addCoreFormats() {
        forEach$4(CoreParsingFormats, function(df) {
          var src = df.src;
          if (df.localeCheck && !df.localeCheck(loc)) {
            return;
          }
          if (df.mdy && loc.mdy) {
            src = df.mdy;
          }
          if (df.time) {
            loc.addFormat(getFormatWithTime(src, true));
            loc.addFormat(getFormatWithTime(src));
          } else {
            loc.addFormat(src);
          }
        });
        loc.addFormat("{time}");
      }
      function addLocaleFormats() {
        addFormatSet("parse");
        addFormatSet("timeParse", true);
        addFormatSet("timeFrontParse", true, true);
      }
      function addFormatSet(field, allowTime, timeFront) {
        forEach$4(loc[field], function(format) {
          if (allowTime) {
            format = getFormatWithTime(format, timeFront);
          }
          loc.addFormat(format);
        });
      }
      function getFormatWithTime(baseFormat, timeBefore) {
        if (timeBefore) {
          return getTimeBefore() + baseFormat;
        }
        return baseFormat + getTimeAfter();
      }
      function getTimeBefore() {
        return getRegNonCapturing("{time}[,\\s\\u3000]", true);
      }
      function getTimeAfter() {
        var markers = ",?[\\s\\u3000]", localized;
        localized = arrayToRegAlternates(loc.timeMarkers);
        if (localized) {
          markers += "| (?:" + localized + ") ";
        }
        markers = getRegNonCapturing(markers, loc.timeMarkerOptional);
        return getRegNonCapturing(markers + "{time}{tzOffset}", true);
      }
      initFormats();
      initDefinition();
      initArrayFields();
      buildValueArray("month", 12);
      buildValueArray("weekday", 7);
      buildValueArray("unit", 8);
      buildValueArray("ampm", 2);
      buildNumerals();
      buildTimeFormats();
      buildParsingTokens();
      buildTimeSuffixes();
      buildModifiers();
      addCoreFormats();
      addLocaleFormats();
    }
  };
  return new Locale(def);
}
var getNewLocale_1 = getNewLocale$1;
var LazyLoadedLocales = LazyLoadedLocales_1, AmericanEnglishDefinition = AmericanEnglishDefinition_1, getNewLocale = getNewLocale_1;
var English$3, localeManager$f;
function buildLocales() {
  function LocaleManager(loc) {
    this.locales = {};
    this.add(loc);
  }
  LocaleManager.prototype = {
    get: function(code, fallback) {
      var loc = this.locales[code];
      if (!loc && LazyLoadedLocales[code]) {
        loc = this.add(code, LazyLoadedLocales[code]);
      } else if (!loc && code) {
        loc = this.locales[code.slice(0, 2)];
      }
      return loc || fallback === false ? loc : this.current;
    },
    getAll: function() {
      return this.locales;
    },
    set: function(code) {
      var loc = this.get(code, false);
      if (!loc) {
        throw new TypeError("Invalid Locale: " + code);
      }
      return this.current = loc;
    },
    add: function(code, def) {
      if (!def) {
        def = code;
        code = def.code;
      } else {
        def.code = code;
      }
      var loc = def.compiledFormats ? def : getNewLocale(def);
      this.locales[code] = loc;
      if (!this.current) {
        this.current = loc;
      }
      return loc;
    },
    remove: function(code) {
      if (this.current.code === code) {
        this.current = this.get("en");
      }
      return delete this.locales[code];
    }
  };
  English$3 = getNewLocale(AmericanEnglishDefinition);
  localeManager$f = new LocaleManager(English$3);
}
buildLocales();
var LocaleHelpers$h = {
  English: English$3,
  localeManager: localeManager$f
};
var Sugar$3i = sugarCoreExports, LocaleHelpers$g = LocaleHelpers$h;
var localeManager$e = LocaleHelpers$g.localeManager;
Sugar$3i.Date.defineStatic({
  "addLocale": function(code, set) {
    return localeManager$e.add(code, set);
  }
});
Sugar$3i.Date.addLocale;
var MINUTES$2 = 60 * 1e3;
var ABBREVIATED_YEAR_REG$1 = /^'?(\d{1,2})$/;
function tzOffset$4(d) {
  return d.getTimezoneOffset();
}
var tzOffset_1 = tzOffset$4;
var _utc$6 = _utc$8, callDateGet$6 = callDateGet_1;
function callDateSet$6(d, method, value, safe) {
  if (safe && value === callDateGet$6(d, method)) {
    return;
  }
  d["set" + (_utc$6(d) ? "UTC" : "") + method](value);
}
var callDateSet_1 = callDateSet$6;
var DateUnitIndexes$g = DateUnitIndexes$i;
var HOURS_INDEX$2 = DateUnitIndexes$g.HOURS_INDEX, DAY_INDEX$9 = DateUnitIndexes$g.DAY_INDEX, WEEK_INDEX$4 = DateUnitIndexes$g.WEEK_INDEX, MONTH_INDEX$6 = DateUnitIndexes$g.MONTH_INDEX;
function getLowerUnitIndex$5(index) {
  if (index === MONTH_INDEX$6) {
    return DAY_INDEX$9;
  } else if (index === WEEK_INDEX$4) {
    return HOURS_INDEX$2;
  }
  return index - 1;
}
var getLowerUnitIndex_1 = getLowerUnitIndex$5;
var DateUnits$5 = DateUnits_1, getLowerUnitIndex$4 = getLowerUnitIndex_1;
function walkUnitDown$2(unitIndex, fn2) {
  while (unitIndex >= 0) {
    if (fn2(DateUnits$5[unitIndex], unitIndex) === false) {
      break;
    }
    unitIndex = getLowerUnitIndex$4(unitIndex);
  }
}
var walkUnitDown_1 = walkUnitDown$2;
var isDefined$6 = isDefined_1, classChecks$i = classChecks$Z, callDateSet$5 = callDateSet_1, walkUnitDown$1 = walkUnitDown_1;
var isFunction$2 = classChecks$i.isFunction;
function setUnitAndLowerToEdge$6(d, startIndex, stopIndex, end2) {
  walkUnitDown$1(startIndex, function(unit, i) {
    var val = end2 ? unit.end : unit.start;
    if (isFunction$2(val)) {
      val = val(d);
    }
    callDateSet$5(d, unit.method, val);
    return !isDefined$6(stopIndex) || i > stopIndex;
  });
  return d;
}
var setUnitAndLowerToEdge_1 = setUnitAndLowerToEdge$6;
var DateUnitIndexes$f = DateUnitIndexes$i, setUnitAndLowerToEdge$5 = setUnitAndLowerToEdge_1;
var HOURS_INDEX$1 = DateUnitIndexes$f.HOURS_INDEX;
function resetTime$2(d) {
  return setUnitAndLowerToEdge$5(d, HOURS_INDEX$1);
}
var resetTime_1 = resetTime$2;
function defaultNewDate$1() {
  return /* @__PURE__ */ new Date();
}
var defaultNewDate_1 = defaultNewDate$1;
var defaultNewDate = defaultNewDate_1;
var DATE_OPTIONS$1 = {
  "newDateInternal": defaultNewDate
};
var DATE_OPTIONS_1 = DATE_OPTIONS$1;
var DATE_OPTIONS = DATE_OPTIONS_1, namespaceAliases$7 = namespaceAliases$e, defineOptionsAccessor = defineOptionsAccessor_1;
var sugarDate$6 = namespaceAliases$7.sugarDate;
var _dateOptions$1 = defineOptionsAccessor(sugarDate$6, DATE_OPTIONS);
var _dateOptions = _dateOptions$1;
function getNewDate$5() {
  return _dateOptions("newDateInternal")();
}
var getNewDate_1 = getNewDate$5;
var callDateSet$4 = callDateSet_1;
function setDate$6(d, val) {
  callDateSet$4(d, "Date", val);
}
var setDate_1 = setDate$6;
var callDateGet$5 = callDateGet_1;
function getDate$6(d) {
  return callDateGet$5(d, "Date");
}
var getDate_1 = getDate$6;
var callDateGet$4 = callDateGet_1;
function getWeekday$9(d) {
  return callDateGet$4(d, "Day");
}
var getWeekday_1 = getWeekday$9;
var setDate$5 = setDate_1, getDate$5 = getDate_1, getWeekday$8 = getWeekday_1, classChecks$h = classChecks$Z, mathAliases$e = mathAliases$z;
var isNumber$9 = classChecks$h.isNumber, abs$4 = mathAliases$e.abs;
function setWeekday$8(d, dow, dir) {
  if (!isNumber$9(dow))
    return;
  var currentWeekday = getWeekday$8(d);
  if (dir) {
    var ndir = dir > 0 ? 1 : -1;
    var offset2 = dow % 7 - currentWeekday;
    if (offset2 && offset2 / abs$4(offset2) !== ndir) {
      dow += 7 * ndir;
    }
  }
  setDate$5(d, getDate$5(d) + dow - currentWeekday);
  return d.getTime();
}
var setWeekday_1 = setWeekday$8;
var getLowerUnitIndex$3 = getLowerUnitIndex_1, setUnitAndLowerToEdge$4 = setUnitAndLowerToEdge_1;
function resetLowerUnits$1(d, unitIndex) {
  return setUnitAndLowerToEdge$4(d, getLowerUnitIndex$3(unitIndex));
}
var resetLowerUnits_1 = resetLowerUnits$1;
var DateUnitIndexes$e = DateUnitIndexes$i;
var DAY_INDEX$8 = DateUnitIndexes$e.DAY_INDEX, MONTH_INDEX$5 = DateUnitIndexes$e.MONTH_INDEX;
function getHigherUnitIndex$1(index) {
  return index === DAY_INDEX$8 ? MONTH_INDEX$5 : index + 1;
}
var getHigherUnitIndex_1 = getHigherUnitIndex$1;
var callDateSet$3 = callDateSet_1;
function setYear$1(d, val) {
  callDateSet$3(d, "FullYear", val);
}
var setYear_1 = setYear$1;
var callDateSet$2 = callDateSet_1;
function setMonth$1(d, val) {
  callDateSet$2(d, "Month", val);
}
var setMonth_1 = setMonth$1;
var _utc$5 = _utc$8;
function cloneDate$6(d) {
  var clone2 = new Date(d.getTime());
  _utc$5(clone2, !!_utc$5(d));
  return clone2;
}
var cloneDate_1 = cloneDate$6;
var setWeekday$7 = setWeekday_1, getWeekday$7 = getWeekday_1, mathAliases$d = mathAliases$z;
var floor = mathAliases$d.floor;
function moveToBeginningOfWeek$3(d, firstDayOfWeek) {
  setWeekday$7(d, floor((getWeekday$7(d) - firstDayOfWeek) / 7) * 7 + firstDayOfWeek);
  return d;
}
var moveToBeginningOfWeek_1 = moveToBeginningOfWeek$3;
var DateUnitIndexes$d = DateUnitIndexes$i, setDate$4 = setDate_1, setUnitAndLowerToEdge$3 = setUnitAndLowerToEdge_1, moveToBeginningOfWeek$2 = moveToBeginningOfWeek_1;
var MONTH_INDEX$4 = DateUnitIndexes$d.MONTH_INDEX;
function moveToFirstDayOfWeekYear$2(d, firstDayOfWeek, firstDayOfWeekYear) {
  setUnitAndLowerToEdge$3(d, MONTH_INDEX$4);
  setDate$4(d, firstDayOfWeekYear);
  moveToBeginningOfWeek$2(d, firstDayOfWeek);
}
var moveToFirstDayOfWeekYear_1 = moveToFirstDayOfWeekYear$2;
var ISODefaults$1 = ISODefaults$3, getDate$4 = getDate_1, setDate$3 = setDate_1, setYear = setYear_1, getYear$5 = getYear_1, getMonth$5 = getMonth_1, setMonth = setMonth_1, cloneDate$5 = cloneDate_1, getWeekday$6 = getWeekday_1, setWeekday$6 = setWeekday_1, classChecks$g = classChecks$Z, moveToFirstDayOfWeekYear$1 = moveToFirstDayOfWeekYear_1;
var isNumber$8 = classChecks$g.isNumber, ISO_FIRST_DAY_OF_WEEK$1 = ISODefaults$1.ISO_FIRST_DAY_OF_WEEK, ISO_FIRST_DAY_OF_WEEK_YEAR$1 = ISODefaults$1.ISO_FIRST_DAY_OF_WEEK_YEAR;
function setISOWeekNumber$2(d, num) {
  if (isNumber$8(num)) {
    var isoWeek = cloneDate$5(d), dow = getWeekday$6(d);
    moveToFirstDayOfWeekYear$1(isoWeek, ISO_FIRST_DAY_OF_WEEK$1, ISO_FIRST_DAY_OF_WEEK_YEAR$1);
    setDate$3(isoWeek, getDate$4(isoWeek) + 7 * (num - 1));
    setYear(d, getYear$5(isoWeek));
    setMonth(d, getMonth$5(isoWeek));
    setDate$3(d, getDate$4(isoWeek));
    setWeekday$6(d, dow || 7);
  }
  return d.getTime();
}
var setISOWeekNumber_1 = setISOWeekNumber$2;
var callDateSet$1 = callDateSet_1, setISOWeekNumber$1 = setISOWeekNumber_1;
function callDateSetWithWeek$1(d, method, value, safe) {
  if (method === "ISOWeek") {
    setISOWeekNumber$1(d, value);
  } else {
    callDateSet$1(d, method, value, safe);
  }
}
var callDateSetWithWeek_1 = callDateSetWithWeek$1;
var coreUtilityAliases$5 = coreUtilityAliases$M;
var hasOwn$2 = coreUtilityAliases$5.hasOwn;
function getOwnKey$1(obj, key) {
  if (hasOwn$2(obj, key)) {
    return key;
  }
}
var getOwnKey_1 = getOwnKey$1;
var getOwnKey = getOwnKey_1;
function getDateParamKey$2(params, key) {
  return getOwnKey(params, key) || getOwnKey(params, key + "s") || key === "day" && getOwnKey(params, "date");
}
var getDateParamKey_1 = getDateParamKey$2;
var getDateParamKey$1 = getDateParamKey_1, coreUtilityAliases$4 = coreUtilityAliases$M;
var getOwn$3 = coreUtilityAliases$4.getOwn;
function getDateParam$1(params, key) {
  return getOwn$3(params, getDateParamKey$1(params, key));
}
var getDateParam_1 = getDateParam$1;
var DateUnitIndexes$c = DateUnitIndexes$i, isDefined$5 = isDefined_1, getDateParam = getDateParam_1, iterateOverDateUnits = iterateOverDateUnits_1;
var DAY_INDEX$7 = DateUnitIndexes$c.DAY_INDEX;
function iterateOverDateParams$4(params, fn2, startIndex, endIndex) {
  function run(name, unit, i) {
    var val = getDateParam(params, name);
    if (isDefined$5(val)) {
      fn2(name, val, unit, i);
    }
  }
  iterateOverDateUnits(function(unit, i) {
    var result2 = run(unit.name, unit, i);
    if (result2 !== false && i === DAY_INDEX$7) {
      result2 = run("weekday", unit, i);
    }
    return result2;
  }, startIndex, endIndex);
}
var iterateOverDateParams_1 = iterateOverDateParams$4;
var DateUnits$4 = DateUnits_1, DateUnitIndexes$b = DateUnitIndexes$i, trunc$6 = trunc_1, setDate$2 = setDate_1, getDate$3 = getDate_1, getMonth$4 = getMonth_1, getNewDate$4 = getNewDate_1, setWeekday$5 = setWeekday_1, mathAliases$c = mathAliases$z, callDateGet$3 = callDateGet_1, classChecks$f = classChecks$Z, resetLowerUnits = resetLowerUnits_1, getLowerUnitIndex$2 = getLowerUnitIndex_1, getHigherUnitIndex = getHigherUnitIndex_1, callDateSetWithWeek = callDateSetWithWeek_1, iterateOverDateParams$3 = iterateOverDateParams_1;
var DAY_INDEX$6 = DateUnitIndexes$b.DAY_INDEX, WEEK_INDEX$3 = DateUnitIndexes$b.WEEK_INDEX, MONTH_INDEX$3 = DateUnitIndexes$b.MONTH_INDEX, YEAR_INDEX$3 = DateUnitIndexes$b.YEAR_INDEX, round$2 = mathAliases$c.round, isNumber$7 = classChecks$f.isNumber;
function updateDate$4(d, params, reset, advance, prefer, weekdayDir, contextDate) {
  var upperUnitIndex;
  function setUpperUnit(unitName, unitIndex) {
    if (prefer && !upperUnitIndex) {
      if (unitName === "weekday") {
        upperUnitIndex = WEEK_INDEX$3;
      } else {
        upperUnitIndex = getHigherUnitIndex(unitIndex);
      }
    }
  }
  function setSpecificity(unitIndex) {
    if (unitIndex > params.specificity) {
      return;
    }
    params.specificity = unitIndex;
  }
  function canDisambiguate() {
    if (!upperUnitIndex || upperUnitIndex > YEAR_INDEX$3) {
      return;
    }
    switch (prefer) {
      case -1:
        return d >= (contextDate || getNewDate$4());
      case 1:
        return d <= (contextDate || getNewDate$4());
    }
  }
  function disambiguateHigherUnit() {
    var unit = DateUnits$4[upperUnitIndex];
    advance = prefer;
    setUnit(unit.name, 1, unit, upperUnitIndex);
  }
  function handleFraction(unit, unitIndex, fraction) {
    if (unitIndex) {
      var lowerUnit = DateUnits$4[getLowerUnitIndex$2(unitIndex)];
      var val = round$2(unit.multiplier / lowerUnit.multiplier * fraction);
      params[lowerUnit.name] = val;
    }
  }
  function monthHasShifted(d2, targetMonth) {
    if (targetMonth < 0) {
      targetMonth = targetMonth % 12 + 12;
    }
    return targetMonth % 12 !== getMonth$4(d2);
  }
  function setUnit(unitName, value, unit, unitIndex) {
    var method = unit.method, checkMonth, fraction;
    setUpperUnit(unitName, unitIndex);
    setSpecificity(unitIndex);
    fraction = value % 1;
    if (fraction) {
      handleFraction(unit, unitIndex, fraction);
      value = trunc$6(value);
    }
    if (unitName === "weekday") {
      if (!advance) {
        setWeekday$5(d, value, weekdayDir);
      }
      return;
    }
    checkMonth = unitIndex === MONTH_INDEX$3 && getDate$3(d) > 28;
    if (advance && !unit.ambiguous) {
      d.setTime(d.getTime() + value * advance * unit.multiplier);
      return;
    } else if (advance) {
      if (unitIndex === WEEK_INDEX$3) {
        value *= 7;
        method = DateUnits$4[DAY_INDEX$6].method;
      }
      value = value * advance + callDateGet$3(d, method);
    }
    callDateSetWithWeek(d, method, value, advance);
    if (checkMonth && monthHasShifted(d, value)) {
      setDate$2(d, 0);
    }
  }
  if (isNumber$7(params) && advance) {
    params = { millisecond: params };
  } else if (isNumber$7(params)) {
    d.setTime(params);
    return d;
  }
  iterateOverDateParams$3(params, setUnit);
  if (reset && params.specificity) {
    resetLowerUnits(d, params.specificity);
  }
  if (canDisambiguate()) {
    disambiguateHigherUnit();
  }
  return d;
}
var updateDate_1 = updateDate$4;
var updateDate$3 = updateDate_1;
function advanceDate$5(d, unit, num, reset) {
  var set = {};
  set[unit] = num;
  return updateDate$3(d, set, reset, 1);
}
var advanceDate_1 = advanceDate$5;
function dateIsValid$5(d) {
  return !isNaN(d.getTime());
}
var dateIsValid_1 = dateIsValid$5;
var setWeekday$4 = setWeekday_1, getWeekday$5 = getWeekday_1, mathAliases$b = mathAliases$z;
var ceil$2 = mathAliases$b.ceil;
function moveToEndOfWeek$2(d, firstDayOfWeek) {
  var target = firstDayOfWeek - 1;
  setWeekday$4(d, ceil$2((getWeekday$5(d) - target) / 7) * 7 + target);
  return d;
}
var moveToEndOfWeek_1 = moveToEndOfWeek$2;
var LocaleHelpers$f = LocaleHelpers$h, DateUnitIndexes$a = DateUnitIndexes$i, moveToEndOfWeek$1 = moveToEndOfWeek_1, getLowerUnitIndex$1 = getLowerUnitIndex_1, setUnitAndLowerToEdge$2 = setUnitAndLowerToEdge_1;
var WEEK_INDEX$2 = DateUnitIndexes$a.WEEK_INDEX, localeManager$d = LocaleHelpers$f.localeManager;
function moveToEndOfUnit$4(d, unitIndex, localeCode, stopIndex) {
  if (unitIndex === WEEK_INDEX$2) {
    moveToEndOfWeek$1(d, localeManager$d.get(localeCode).getFirstDayOfWeek());
  }
  return setUnitAndLowerToEdge$2(d, getLowerUnitIndex$1(unitIndex), stopIndex, true);
}
var moveToEndOfUnit_1 = moveToEndOfUnit$4;
var getDateParamKey = getDateParamKey_1;
function deleteDateParam$1(params, key) {
  delete params[getDateParamKey(params, key)];
}
var deleteDateParam_1 = deleteDateParam$1;
var LocaleHelpers$e = LocaleHelpers$h, DateUnitIndexes$9 = DateUnitIndexes$i, getLowerUnitIndex = getLowerUnitIndex_1, moveToBeginningOfWeek$1 = moveToBeginningOfWeek_1, setUnitAndLowerToEdge$1 = setUnitAndLowerToEdge_1;
var WEEK_INDEX$1 = DateUnitIndexes$9.WEEK_INDEX, localeManager$c = LocaleHelpers$e.localeManager;
function moveToBeginningOfUnit$4(d, unitIndex, localeCode) {
  if (unitIndex === WEEK_INDEX$1) {
    moveToBeginningOfWeek$1(d, localeManager$c.get(localeCode).getFirstDayOfWeek());
  }
  return setUnitAndLowerToEdge$1(d, getLowerUnitIndex(unitIndex));
}
var moveToBeginningOfUnit_1 = moveToBeginningOfUnit$4;
var getYear$4 = getYear_1, mathAliases$a = mathAliases$z;
var abs$3 = mathAliases$a.abs;
function getYearFromAbbreviation$1(str, d, prefer) {
  var val = +str, delta;
  val += val < 50 ? 2e3 : 1900;
  if (prefer) {
    delta = val - getYear$4(d);
    if (delta / abs$3(delta) !== prefer) {
      val += prefer * 100;
    }
  }
  return val;
}
var getYearFromAbbreviation_1 = getYearFromAbbreviation$1;
var DateUnitIndexes$8 = DateUnitIndexes$i, iterateOverDateParams$2 = iterateOverDateParams_1;
var DAY_INDEX$5 = DateUnitIndexes$8.DAY_INDEX, YEAR_INDEX$2 = DateUnitIndexes$8.YEAR_INDEX;
function iterateOverHigherDateParams$1(params, fn2) {
  iterateOverDateParams$2(params, fn2, YEAR_INDEX$2, DAY_INDEX$5);
}
var iterateOverHigherDateParams_1 = iterateOverHigherDateParams$1;
var MINUTES$1 = MINUTES$2, ABBREVIATED_YEAR_REG = ABBREVIATED_YEAR_REG$1, LocaleHelpers$d = LocaleHelpers$h, DateUnitIndexes$7 = DateUnitIndexes$i, _utc$4 = _utc$8, trunc$5 = trunc_1, forEach$3 = forEach_1, tzOffset$3 = tzOffset_1, isDefined$4 = isDefined_1, resetTime$1 = resetTime_1, getNewDate$3 = getNewDate_1, updateDate$2 = updateDate_1, setWeekday$3 = setWeekday_1, simpleMerge = simpleMerge_1, advanceDate$4 = advanceDate_1, isUndefined$2 = isUndefined_1, classChecks$e = classChecks$Z, dateIsValid$4 = dateIsValid_1, simpleClone$1 = simpleClone_1, isObjectType$2 = isObjectType_1, moveToEndOfUnit$3 = moveToEndOfUnit_1, deleteDateParam = deleteDateParam_1, coreUtilityAliases$3 = coreUtilityAliases$M, moveToBeginningOfUnit$3 = moveToBeginningOfUnit_1, iterateOverDateParams$1 = iterateOverDateParams_1, getYearFromAbbreviation = getYearFromAbbreviation_1, iterateOverHigherDateParams = iterateOverHigherDateParams_1;
var isNumber$6 = classChecks$e.isNumber, isString$6 = classChecks$e.isString, isDate$4 = classChecks$e.isDate, getOwn$2 = coreUtilityAliases$3.getOwn, English$2 = LocaleHelpers$d.English, localeManager$b = LocaleHelpers$d.localeManager, DAY_INDEX$4 = DateUnitIndexes$7.DAY_INDEX, WEEK_INDEX = DateUnitIndexes$7.WEEK_INDEX, MONTH_INDEX$2 = DateUnitIndexes$7.MONTH_INDEX, YEAR_INDEX$1 = DateUnitIndexes$7.YEAR_INDEX;
function getExtendedDate$3(contextDate, d, opt, forceClone) {
  var date, set, loc, afterCallbacks, relative, weekdayDir;
  var optPrefer, optLocale, optFromUTC, optSetUTC, optParams, optClone;
  afterCallbacks = [];
  setupOptions(opt);
  function setupOptions(opt2) {
    opt2 = isString$6(opt2) ? { locale: opt2 } : opt2 || {};
    optPrefer = +!!getOwn$2(opt2, "future") - +!!getOwn$2(opt2, "past");
    optLocale = getOwn$2(opt2, "locale");
    optFromUTC = getOwn$2(opt2, "fromUTC");
    optSetUTC = getOwn$2(opt2, "setUTC");
    optParams = getOwn$2(opt2, "params");
    optClone = getOwn$2(opt2, "clone");
  }
  function parseFormatValues(match, dif) {
    var set2 = optParams || {};
    forEach$3(dif.to, function(param, i) {
      var str = match[i + 1], val;
      if (!str)
        return;
      val = parseIrregular(str, param);
      if (isUndefined$2(val)) {
        val = loc.parseValue(str, param);
      }
      set2[param] = val;
    });
    return set2;
  }
  function parseIrregular(str, param) {
    if (param === "utc") {
      return 1;
    } else if (param === "year") {
      var match = str.match(ABBREVIATED_YEAR_REG);
      if (match) {
        return getYearFromAbbreviation(match[1], date, optPrefer);
      }
    }
  }
  function cloneDateByFlag(d2, clone2) {
    if (_utc$4(d2) && !isDefined$4(optFromUTC)) {
      optFromUTC = true;
    }
    if (_utc$4(d2) && !isDefined$4(optSetUTC)) {
      optSetUTC = true;
    }
    if (clone2) {
      d2 = new Date(d2.getTime());
    }
    return d2;
  }
  function afterDateSet(fn2) {
    afterCallbacks.push(fn2);
  }
  function fireCallbacks() {
    forEach$3(afterCallbacks, function(fn2) {
      fn2.call();
    });
  }
  function parseStringDate(str) {
    str = str.toLowerCase();
    loc = localeManager$b.get(optLocale);
    for (var i = 0, dif, match; dif = loc.compiledFormats[i]; i++) {
      match = str.match(dif.reg);
      if (match) {
        loc.cacheFormat(dif, i);
        set = parseFormatValues(match, dif);
        if (isDefined$4(set.timestamp)) {
          date.setTime(set.timestamp);
          break;
        }
        if (isDefined$4(set.ampm)) {
          handleAmpm(set.ampm);
        }
        if (set.utc || isDefined$4(set.tzHour)) {
          handleTimezoneOffset(set.tzHour, set.tzMinute);
        }
        if (isDefined$4(set.shift) && isUndefined$2(set.unit)) {
          handleUnitlessShift();
        }
        if (isDefined$4(set.num) && isUndefined$2(set.unit)) {
          handleUnitlessNum(set.num);
        }
        if (set.midday) {
          handleMidday(set.midday);
        }
        if (isDefined$4(set.day)) {
          handleRelativeDay(set.day);
        }
        if (isDefined$4(set.unit)) {
          handleRelativeUnit(set.unit);
        }
        if (set.edge) {
          handleEdge(set.edge, set);
        }
        break;
      }
    }
    if (!set) {
      date = new Date(str);
      if (optFromUTC && dateIsValid$4(date)) {
        date.setTime(date.getTime() + tzOffset$3(date) * MINUTES$1);
      }
    } else if (relative) {
      updateDate$2(date, set, false, 1);
    } else {
      updateDate$2(date, set, true, 0, optPrefer, weekdayDir, contextDate);
    }
    fireCallbacks();
    return date;
  }
  function handleAmpm(ampm) {
    if (ampm === 1 && set.hour < 12) {
      set.hour += 12;
    } else if (ampm === 0 && set.hour === 12) {
      set.hour = 0;
    }
  }
  function handleTimezoneOffset(tzHour, tzMinute) {
    _utc$4(date, true);
    if (tzHour < 0) {
      tzMinute *= -1;
    }
    var offset2 = tzHour * 60 + (tzMinute || 0);
    if (offset2) {
      set.minute = (set.minute || 0) - offset2;
    }
  }
  function handleUnitlessShift() {
    if (isDefined$4(set.month)) {
      set.unit = YEAR_INDEX$1;
    } else if (isDefined$4(set.weekday)) {
      set.unit = WEEK_INDEX;
    }
  }
  function handleUnitlessNum(num) {
    if (isDefined$4(set.weekday)) {
      setOrdinalWeekday(num);
    } else if (isDefined$4(set.month)) {
      set.date = set.num;
    }
  }
  function handleMidday(hour) {
    set.hour = hour % 24;
    if (hour > 23) {
      afterDateSet(function() {
        advanceDate$4(date, "date", trunc$5(hour / 24));
      });
    }
  }
  function handleRelativeDay() {
    resetTime$1(date);
    if (isUndefined$2(set.unit)) {
      set.unit = DAY_INDEX$4;
      set.num = set.day;
      delete set.day;
    }
  }
  function handleRelativeUnit(unitIndex) {
    var num;
    if (isDefined$4(set.num)) {
      num = set.num;
    } else if (isDefined$4(set.edge) && isUndefined$2(set.shift)) {
      num = 0;
    } else {
      num = 1;
    }
    if (isDefined$4(set.weekday)) {
      if (unitIndex === MONTH_INDEX$2) {
        setOrdinalWeekday(num);
        num = 1;
      } else {
        updateDate$2(date, { weekday: set.weekday }, true);
        delete set.weekday;
      }
    }
    if (set.half) {
      num *= set.half;
    }
    if (isDefined$4(set.shift)) {
      num *= set.shift;
    } else if (set.sign) {
      num *= set.sign;
    }
    if (isDefined$4(set.day)) {
      num += set.day;
      delete set.day;
    }
    separateAbsoluteUnits(unitIndex);
    set[English$2.units[unitIndex]] = num;
    relative = true;
  }
  function handleEdge(edge, params) {
    var edgeIndex = params.unit, weekdayOfMonth;
    if (!edgeIndex) {
      iterateOverHigherDateParams(params, function(unitName, val, unit, i) {
        if (unitName === "weekday" && isDefined$4(params.month)) {
          return;
        }
        edgeIndex = i;
      });
    }
    if (edgeIndex === MONTH_INDEX$2 && isDefined$4(params.weekday)) {
      weekdayOfMonth = params.weekday;
      delete params.weekday;
    }
    afterDateSet(function() {
      var stopIndex;
      if (edge < 0) {
        moveToBeginningOfUnit$3(date, edgeIndex, optLocale);
      } else if (edge > 0) {
        if (edge === 1) {
          stopIndex = DAY_INDEX$4;
          moveToBeginningOfUnit$3(date, DAY_INDEX$4);
        }
        moveToEndOfUnit$3(date, edgeIndex, optLocale, stopIndex);
      }
      if (isDefined$4(weekdayOfMonth)) {
        setWeekday$3(date, weekdayOfMonth, -edge);
        resetTime$1(date);
      }
    });
    if (edgeIndex === MONTH_INDEX$2) {
      params.specificity = DAY_INDEX$4;
    } else {
      params.specificity = edgeIndex - 1;
    }
  }
  function setOrdinalWeekday(num) {
    set.weekday = 7 * (num - 1) + set.weekday;
    set.date = 1;
    weekdayDir = 1;
  }
  function separateAbsoluteUnits(unitIndex) {
    var params;
    iterateOverDateParams$1(set, function(name, val, unit, i) {
      if (i >= unitIndex) {
        date.setTime(NaN);
        return false;
      } else if (i < unitIndex) {
        params = params || {};
        params[name] = val;
        deleteDateParam(set, name);
      }
    });
    if (params) {
      afterDateSet(function() {
        updateDate$2(date, params, true, 0, false, weekdayDir);
        if (optParams) {
          simpleMerge(optParams, params);
        }
      });
      if (set.edge) {
        handleEdge(set.edge, params);
        delete set.edge;
      }
    }
  }
  if (contextDate && d) {
    date = cloneDateByFlag(contextDate, true);
  } else {
    date = getNewDate$3();
  }
  _utc$4(date, optFromUTC);
  if (isString$6(d)) {
    date = parseStringDate(d);
  } else if (isDate$4(d)) {
    date = cloneDateByFlag(d, optClone || forceClone);
  } else if (isObjectType$2(d)) {
    set = simpleClone$1(d);
    updateDate$2(date, set, true);
  } else if (isNumber$6(d) || d === null) {
    date.setTime(d);
  }
  _utc$4(date, !!optSetUTC);
  return {
    set,
    date
  };
}
var getExtendedDate_1 = getExtendedDate$3;
var getExtendedDate$2 = getExtendedDate_1;
function createDate$8(d, options, forceClone) {
  return getExtendedDate$2(null, d, options, forceClone).date;
}
var createDate_1 = createDate$8;
var createDate$7 = createDate_1, namespaceAliases$6 = namespaceAliases$e, setChainableConstructor = setChainableConstructor_1;
var sugarDate$5 = namespaceAliases$6.sugarDate;
function setDateChainableConstructor$1() {
  setChainableConstructor(sugarDate$5, createDate$7);
}
var setDateChainableConstructor_1 = setDateChainableConstructor$1;
var setDateChainableConstructor = setDateChainableConstructor_1;
setDateChainableConstructor();
var Sugar$3h = sugarCoreExports, createDate$6 = createDate_1;
Sugar$3h.Date.defineStatic({
  "create": function(d, options) {
    return createDate$6(d, options);
  }
});
Sugar$3h.Date.create;
var Sugar$3g = sugarCoreExports, LocaleHelpers$c = LocaleHelpers$h, getKeys = getKeys_1;
var localeManager$a = LocaleHelpers$c.localeManager;
Sugar$3g.Date.defineStatic({
  "getAllLocaleCodes": function() {
    return getKeys(localeManager$a.getAll());
  }
});
Sugar$3g.Date.getAllLocaleCodes;
var Sugar$3f = sugarCoreExports, LocaleHelpers$b = LocaleHelpers$h;
var localeManager$9 = LocaleHelpers$b.localeManager;
Sugar$3f.Date.defineStatic({
  "getAllLocales": function() {
    return localeManager$9.getAll();
  }
});
Sugar$3f.Date.getAllLocales;
var Sugar$3e = sugarCoreExports, LocaleHelpers$a = LocaleHelpers$h;
var localeManager$8 = LocaleHelpers$a.localeManager;
Sugar$3e.Date.defineStatic({
  "getLocale": function(code) {
    return localeManager$8.get(code, !code);
  }
});
Sugar$3e.Date.getLocale;
var Sugar$3d = sugarCoreExports, LocaleHelpers$9 = LocaleHelpers$h;
var localeManager$7 = LocaleHelpers$9.localeManager;
Sugar$3d.Date.defineStatic({
  "removeLocale": function(code) {
    return localeManager$7.remove(code);
  }
});
Sugar$3d.Date.removeLocale;
var Sugar$3c = sugarCoreExports, LocaleHelpers$8 = LocaleHelpers$h;
var localeManager$6 = LocaleHelpers$8.localeManager;
Sugar$3c.Date.defineStatic({
  "setLocale": function(code) {
    return localeManager$6.set(code);
  }
});
Sugar$3c.Date.setLocale;
var DateUnits$3 = DateUnits_1, createDate$5 = createDate_1, mathAliases$9 = mathAliases$z, advanceDate$3 = advanceDate_1, namespaceAliases$5 = namespaceAliases$e, defineInstanceSimilar$3 = defineInstanceSimilar_1;
var sugarNumber = namespaceAliases$5.sugarNumber, round$1 = mathAliases$9.round;
function buildNumberUnitMethods$1() {
  defineInstanceSimilar$3(sugarNumber, DateUnits$3, function(methods, unit) {
    var name = unit.name, base, after, before;
    base = function(n) {
      return round$1(n * unit.multiplier);
    };
    after = function(n, d, options) {
      return advanceDate$3(createDate$5(d, options, true), name, n);
    };
    before = function(n, d, options) {
      return advanceDate$3(createDate$5(d, options, true), name, -n);
    };
    methods[name] = base;
    methods[name + "s"] = base;
    methods[name + "Before"] = before;
    methods[name + "sBefore"] = before;
    methods[name + "Ago"] = before;
    methods[name + "sAgo"] = before;
    methods[name + "After"] = after;
    methods[name + "sAfter"] = after;
    methods[name + "FromNow"] = after;
    methods[name + "sFromNow"] = after;
  });
}
var buildNumberUnitMethods_1 = buildNumberUnitMethods$1;
var buildNumberUnitMethods = buildNumberUnitMethods_1;
buildNumberUnitMethods();
var Sugar$3b = sugarCoreExports;
Sugar$3b.Number.day;
var Sugar$3a = sugarCoreExports;
Sugar$3a.Number.dayAfter;
var Sugar$39 = sugarCoreExports;
Sugar$39.Number.dayAgo;
var Sugar$38 = sugarCoreExports;
Sugar$38.Number.dayBefore;
var Sugar$37 = sugarCoreExports;
Sugar$37.Number.dayFromNow;
var Sugar$36 = sugarCoreExports;
Sugar$36.Number.days;
var Sugar$35 = sugarCoreExports;
Sugar$35.Number.daysAfter;
var Sugar$34 = sugarCoreExports;
Sugar$34.Number.daysAgo;
var Sugar$33 = sugarCoreExports;
Sugar$33.Number.daysBefore;
var Sugar$32 = sugarCoreExports;
Sugar$32.Number.daysFromNow;
var Sugar$31 = sugarCoreExports, LocaleHelpers$7 = LocaleHelpers$h;
var localeManager$5 = LocaleHelpers$7.localeManager;
Sugar$31.Number.defineInstance({
  "duration": function(n, localeCode) {
    return localeManager$5.get(localeCode).getDuration(n);
  }
});
Sugar$31.Number.duration;
var Sugar$30 = sugarCoreExports;
Sugar$30.Number.hour;
var Sugar$2$ = sugarCoreExports;
Sugar$2$.Number.hourAfter;
var Sugar$2_ = sugarCoreExports;
Sugar$2_.Number.hourAgo;
var Sugar$2Z = sugarCoreExports;
Sugar$2Z.Number.hourBefore;
var Sugar$2Y = sugarCoreExports;
Sugar$2Y.Number.hourFromNow;
var Sugar$2X = sugarCoreExports;
Sugar$2X.Number.hours;
var Sugar$2W = sugarCoreExports;
Sugar$2W.Number.hoursAfter;
var Sugar$2V = sugarCoreExports;
Sugar$2V.Number.hoursAgo;
var Sugar$2U = sugarCoreExports;
Sugar$2U.Number.hoursBefore;
var Sugar$2T = sugarCoreExports;
Sugar$2T.Number.hoursFromNow;
var Sugar$2S = sugarCoreExports;
Sugar$2S.Number.millisecond;
var Sugar$2R = sugarCoreExports;
Sugar$2R.Number.millisecondAfter;
var Sugar$2Q = sugarCoreExports;
Sugar$2Q.Number.millisecondAgo;
var Sugar$2P = sugarCoreExports;
Sugar$2P.Number.millisecondBefore;
var Sugar$2O = sugarCoreExports;
Sugar$2O.Number.millisecondFromNow;
var Sugar$2N = sugarCoreExports;
Sugar$2N.Number.milliseconds;
var Sugar$2M = sugarCoreExports;
Sugar$2M.Number.millisecondsAfter;
var Sugar$2L = sugarCoreExports;
Sugar$2L.Number.millisecondsAgo;
var Sugar$2K = sugarCoreExports;
Sugar$2K.Number.millisecondsBefore;
var Sugar$2J = sugarCoreExports;
Sugar$2J.Number.millisecondsFromNow;
var Sugar$2I = sugarCoreExports;
Sugar$2I.Number.minute;
var Sugar$2H = sugarCoreExports;
Sugar$2H.Number.minuteAfter;
var Sugar$2G = sugarCoreExports;
Sugar$2G.Number.minuteAgo;
var Sugar$2F = sugarCoreExports;
Sugar$2F.Number.minuteBefore;
var Sugar$2E = sugarCoreExports;
Sugar$2E.Number.minuteFromNow;
var Sugar$2D = sugarCoreExports;
Sugar$2D.Number.minutes;
var Sugar$2C = sugarCoreExports;
Sugar$2C.Number.minutesAfter;
var Sugar$2B = sugarCoreExports;
Sugar$2B.Number.minutesAgo;
var Sugar$2A = sugarCoreExports;
Sugar$2A.Number.minutesBefore;
var Sugar$2z = sugarCoreExports;
Sugar$2z.Number.minutesFromNow;
var Sugar$2y = sugarCoreExports;
Sugar$2y.Number.month;
var Sugar$2x = sugarCoreExports;
Sugar$2x.Number.monthAfter;
var Sugar$2w = sugarCoreExports;
Sugar$2w.Number.monthAgo;
var Sugar$2v = sugarCoreExports;
Sugar$2v.Number.monthBefore;
var Sugar$2u = sugarCoreExports;
Sugar$2u.Number.monthFromNow;
var Sugar$2t = sugarCoreExports;
Sugar$2t.Number.months;
var Sugar$2s = sugarCoreExports;
Sugar$2s.Number.monthsAfter;
var Sugar$2r = sugarCoreExports;
Sugar$2r.Number.monthsAgo;
var Sugar$2q = sugarCoreExports;
Sugar$2q.Number.monthsBefore;
var Sugar$2p = sugarCoreExports;
Sugar$2p.Number.monthsFromNow;
var Sugar$2o = sugarCoreExports;
Sugar$2o.Number.second;
var Sugar$2n = sugarCoreExports;
Sugar$2n.Number.secondAfter;
var Sugar$2m = sugarCoreExports;
Sugar$2m.Number.secondAgo;
var Sugar$2l = sugarCoreExports;
Sugar$2l.Number.secondBefore;
var Sugar$2k = sugarCoreExports;
Sugar$2k.Number.secondFromNow;
var Sugar$2j = sugarCoreExports;
Sugar$2j.Number.seconds;
var Sugar$2i = sugarCoreExports;
Sugar$2i.Number.secondsAfter;
var Sugar$2h = sugarCoreExports;
Sugar$2h.Number.secondsAgo;
var Sugar$2g = sugarCoreExports;
Sugar$2g.Number.secondsBefore;
var Sugar$2f = sugarCoreExports;
Sugar$2f.Number.secondsFromNow;
var Sugar$2e = sugarCoreExports;
Sugar$2e.Number.week;
var Sugar$2d = sugarCoreExports;
Sugar$2d.Number.weekAfter;
var Sugar$2c = sugarCoreExports;
Sugar$2c.Number.weekAgo;
var Sugar$2b = sugarCoreExports;
Sugar$2b.Number.weekBefore;
var Sugar$2a = sugarCoreExports;
Sugar$2a.Number.weekFromNow;
var Sugar$29 = sugarCoreExports;
Sugar$29.Number.weeks;
var Sugar$28 = sugarCoreExports;
Sugar$28.Number.weeksAfter;
var Sugar$27 = sugarCoreExports;
Sugar$27.Number.weeksAgo;
var Sugar$26 = sugarCoreExports;
Sugar$26.Number.weeksBefore;
var Sugar$25 = sugarCoreExports;
Sugar$25.Number.weeksFromNow;
var Sugar$24 = sugarCoreExports;
Sugar$24.Number.year;
var Sugar$23 = sugarCoreExports;
Sugar$23.Number.yearAfter;
var Sugar$22 = sugarCoreExports;
Sugar$22.Number.yearAgo;
var Sugar$21 = sugarCoreExports;
Sugar$21.Number.yearBefore;
var Sugar$20 = sugarCoreExports;
Sugar$20.Number.yearFromNow;
var Sugar$1$ = sugarCoreExports;
Sugar$1$.Number.years;
var Sugar$1_ = sugarCoreExports;
Sugar$1_.Number.yearsAfter;
var Sugar$1Z = sugarCoreExports;
Sugar$1Z.Number.yearsAgo;
var Sugar$1Y = sugarCoreExports;
Sugar$1Y.Number.yearsBefore;
var Sugar$1X = sugarCoreExports;
Sugar$1X.Number.yearsFromNow;
var MINUTES = MINUTES$2, DateUnits$2 = DateUnits_1, DateUnitIndexes$6 = DateUnitIndexes$i, _utc$3 = _utc$8, tzOffset$2 = tzOffset_1, cloneDate$4 = cloneDate_1, isDefined$3 = isDefined_1, advanceDate$2 = advanceDate_1, dateIsValid$3 = dateIsValid_1, moveToEndOfUnit$2 = moveToEndOfUnit_1, getExtendedDate$1 = getExtendedDate_1, moveToBeginningOfUnit$2 = moveToBeginningOfUnit_1;
var MONTH_INDEX$1 = DateUnitIndexes$6.MONTH_INDEX;
function compareDate$2(date, d, margin, localeCode, options) {
  var loMargin = 0, hiMargin = 0, timezoneShift, compareEdges, override, min2, max2, p, t;
  function getTimezoneShift() {
    if (p.set && p.set.specificity) {
      return 0;
    }
    return (tzOffset$2(p.date) - tzOffset$2(date)) * MINUTES;
  }
  function addSpecificUnit() {
    var unit = DateUnits$2[p.set.specificity];
    return advanceDate$2(cloneDate$4(p.date), unit.name, 1).getTime() - 1;
  }
  if (_utc$3(date)) {
    options = options || {};
    options.fromUTC = true;
    options.setUTC = true;
  }
  p = getExtendedDate$1(null, d, options, true);
  if (margin > 0) {
    loMargin = hiMargin = margin;
    override = true;
  }
  if (!dateIsValid$3(p.date))
    return false;
  if (p.set && p.set.specificity) {
    if (isDefined$3(p.set.edge) || isDefined$3(p.set.shift)) {
      compareEdges = true;
      moveToBeginningOfUnit$2(p.date, p.set.specificity, localeCode);
    }
    if (compareEdges || p.set.specificity === MONTH_INDEX$1) {
      max2 = moveToEndOfUnit$2(cloneDate$4(p.date), p.set.specificity, localeCode).getTime();
    } else {
      max2 = addSpecificUnit();
    }
    if (!override && isDefined$3(p.set.sign) && p.set.specificity) {
      loMargin = 50;
      hiMargin = -50;
    }
  }
  t = date.getTime();
  min2 = p.date.getTime();
  max2 = max2 || min2;
  timezoneShift = getTimezoneShift();
  if (timezoneShift) {
    min2 -= timezoneShift;
    max2 -= timezoneShift;
  }
  return t >= min2 - loMargin && t <= max2 + hiMargin;
}
var compareDate_1 = compareDate$2;
var trunc$4 = trunc_1, cloneDate$3 = cloneDate_1, advanceDate$1 = advanceDate_1;
function getTimeDistanceForUnit$3(d1, d2, unit) {
  var fwd = d2 > d1, num, tmp;
  if (!fwd) {
    tmp = d2;
    d2 = d1;
    d1 = tmp;
  }
  num = d2 - d1;
  if (unit.multiplier > 1) {
    num = trunc$4(num / unit.multiplier);
  }
  if (unit.ambiguous) {
    d1 = cloneDate$3(d1);
    if (num) {
      num -= 1;
      advanceDate$1(d1, unit.name, num);
    }
    while (d1 < d2) {
      advanceDate$1(d1, unit.name, 1);
      if (d1 > d2) {
        break;
      }
      num += 1;
    }
  }
  return fwd ? -num : num;
}
var getTimeDistanceForUnit_1 = getTimeDistanceForUnit$3;
var DateUnits$1 = DateUnits_1, DateUnitIndexes$5 = DateUnitIndexes$i, forEach$2 = forEach_1, createDate$4 = createDate_1, compareDate$1 = compareDate_1, advanceDate = advanceDate_1, moveToEndOfUnit$1 = moveToEndOfUnit_1, namespaceAliases$4 = namespaceAliases$e, simpleCapitalize$2 = simpleCapitalize_1, moveToBeginningOfUnit$1 = moveToBeginningOfUnit_1, defineInstanceSimilar$2 = defineInstanceSimilar_1, getTimeDistanceForUnit$2 = getTimeDistanceForUnit_1;
var sugarDate$4 = namespaceAliases$4.sugarDate, HOURS_INDEX = DateUnitIndexes$5.HOURS_INDEX, DAY_INDEX$3 = DateUnitIndexes$5.DAY_INDEX;
function buildDateUnitMethods$1() {
  defineInstanceSimilar$2(sugarDate$4, DateUnits$1, function(methods, unit, index) {
    var name = unit.name, caps = simpleCapitalize$2(name);
    if (index > DAY_INDEX$3) {
      forEach$2(["Last", "This", "Next"], function(shift) {
        methods["is" + shift + caps] = function(d, localeCode) {
          return compareDate$1(d, shift + " " + name, 0, localeCode, { locale: "en" });
        };
      });
    }
    if (index > HOURS_INDEX) {
      methods["beginningOf" + caps] = function(d, localeCode) {
        return moveToBeginningOfUnit$1(d, index, localeCode);
      };
      methods["endOf" + caps] = function(d, localeCode) {
        return moveToEndOfUnit$1(d, index, localeCode);
      };
    }
    methods["add" + caps + "s"] = function(d, num, reset) {
      return advanceDate(d, name, num, reset);
    };
    var since = function(date, d, options) {
      return getTimeDistanceForUnit$2(date, createDate$4(d, options, true), unit);
    };
    var until = function(date, d, options) {
      return getTimeDistanceForUnit$2(createDate$4(d, options, true), date, unit);
    };
    methods[name + "sAgo"] = methods[name + "sUntil"] = until;
    methods[name + "sSince"] = methods[name + "sFromNow"] = since;
  });
}
var buildDateUnitMethods_1 = buildDateUnitMethods$1;
var buildDateUnitMethods = buildDateUnitMethods_1;
buildDateUnitMethods();
var Sugar$1W = sugarCoreExports;
Sugar$1W.Date.addDays;
var Sugar$1V = sugarCoreExports;
Sugar$1V.Date.addHours;
var Sugar$1U = sugarCoreExports;
Sugar$1U.Date.addMilliseconds;
var Sugar$1T = sugarCoreExports;
Sugar$1T.Date.addMinutes;
var Sugar$1S = sugarCoreExports;
Sugar$1S.Date.addMonths;
var Sugar$1R = sugarCoreExports;
Sugar$1R.Date.addSeconds;
var Sugar$1Q = sugarCoreExports;
Sugar$1Q.Date.addWeeks;
var Sugar$1P = sugarCoreExports;
Sugar$1P.Date.addYears;
var isUndefined$1 = isUndefined_1;
function getDateParamsFromString$1(str) {
  var match, num, params = {};
  match = str.match(/^(-?\d*[\d.]\d*)?\s?(\w+?)s?$/i);
  if (match) {
    if (isUndefined$1(num)) {
      num = match[1] ? +match[1] : 1;
    }
    params[match[2].toLowerCase()] = num;
  }
  return params;
}
var getDateParamsFromString_1 = getDateParamsFromString$1;
var DateUnitIndexes$4 = DateUnitIndexes$i, isDefined$2 = isDefined_1, walkUnitDown = walkUnitDown_1;
var YEAR_INDEX = DateUnitIndexes$4.YEAR_INDEX;
function collectDateParamsFromArguments$1(args) {
  var params = {}, index = 0;
  walkUnitDown(YEAR_INDEX, function(unit) {
    var arg = args[index++];
    if (isDefined$2(arg)) {
      params[unit.name] = arg;
    }
  });
  return params;
}
var collectDateParamsFromArguments_1 = collectDateParamsFromArguments$1;
var classChecks$d = classChecks$Z, simpleClone = simpleClone_1, isObjectType$1 = isObjectType_1, getDateParamsFromString = getDateParamsFromString_1, collectDateParamsFromArguments = collectDateParamsFromArguments_1;
var isNumber$5 = classChecks$d.isNumber, isString$5 = classChecks$d.isString;
function collectUpdateDateArguments$2(args, allowDuration) {
  var arg1 = args[0], arg2 = args[1], params, reset;
  if (allowDuration && isString$5(arg1)) {
    params = getDateParamsFromString(arg1);
    reset = arg2;
  } else if (isNumber$5(arg1) && isNumber$5(arg2)) {
    params = collectDateParamsFromArguments(args);
  } else {
    params = isObjectType$1(arg1) ? simpleClone(arg1) : arg1;
    reset = arg2;
  }
  return [params, reset];
}
var collectUpdateDateArguments_1 = collectUpdateDateArguments$2;
var updateDate$1 = updateDate_1, collectUpdateDateArguments$1 = collectUpdateDateArguments_1;
function advanceDateWithArgs$2(d, args, dir) {
  args = collectUpdateDateArguments$1(args, true);
  return updateDate$1(d, args[0], args[1], dir);
}
var advanceDateWithArgs_1 = advanceDateWithArgs$2;
var Sugar$1O = sugarCoreExports, advanceDateWithArgs$1 = advanceDateWithArgs_1;
Sugar$1O.Date.defineInstanceWithArguments({
  "advance": function(d, args) {
    return advanceDateWithArgs$1(d, args, 1);
  }
});
Sugar$1O.Date.advance;
var Sugar$1N = sugarCoreExports;
Sugar$1N.Date.beginningOfDay;
var Sugar$1M = sugarCoreExports, resetTime = resetTime_1, getWeekday$4 = getWeekday_1, setWeekday$2 = setWeekday_1;
Sugar$1M.Date.defineInstance({
  "beginningOfISOWeek": function(date) {
    var day = getWeekday$4(date);
    if (day === 0) {
      day = -6;
    } else if (day !== 1) {
      day = 1;
    }
    setWeekday$2(date, day);
    return resetTime(date);
  }
});
Sugar$1M.Date.beginningOfISOWeek;
var Sugar$1L = sugarCoreExports;
Sugar$1L.Date.beginningOfMonth;
var Sugar$1K = sugarCoreExports;
Sugar$1K.Date.beginningOfWeek;
var Sugar$1J = sugarCoreExports;
Sugar$1J.Date.beginningOfYear;
var Sugar$1I = sugarCoreExports, cloneDate$2 = cloneDate_1;
Sugar$1I.Date.defineInstance({
  "clone": function(date) {
    return cloneDate$2(date);
  }
});
Sugar$1I.Date.clone;
var Sugar$1H = sugarCoreExports;
Sugar$1H.Date.daysAgo;
var Sugar$1G = sugarCoreExports;
Sugar$1G.Date.daysFromNow;
var Sugar$1F = sugarCoreExports, getDaysInMonth = getDaysInMonth_1;
Sugar$1F.Date.defineInstance({
  "daysInMonth": function(date) {
    return getDaysInMonth(date);
  }
});
Sugar$1F.Date.daysInMonth;
var Sugar$1E = sugarCoreExports;
Sugar$1E.Date.daysSince;
var Sugar$1D = sugarCoreExports;
Sugar$1D.Date.daysUntil;
var Sugar$1C = sugarCoreExports;
Sugar$1C.Date.endOfDay;
var Sugar$1B = sugarCoreExports, DateUnitIndexes$3 = DateUnitIndexes$i, getWeekday$3 = getWeekday_1, setWeekday$1 = setWeekday_1, moveToEndOfUnit = moveToEndOfUnit_1;
var DAY_INDEX$2 = DateUnitIndexes$3.DAY_INDEX;
Sugar$1B.Date.defineInstance({
  "endOfISOWeek": function(date) {
    if (getWeekday$3(date) !== 0) {
      setWeekday$1(date, 7);
    }
    return moveToEndOfUnit(date, DAY_INDEX$2);
  }
});
Sugar$1B.Date.endOfISOWeek;
var Sugar$1A = sugarCoreExports;
Sugar$1A.Date.endOfMonth;
var Sugar$1z = sugarCoreExports;
Sugar$1z.Date.endOfWeek;
var Sugar$1y = sugarCoreExports;
Sugar$1y.Date.endOfYear;
var CoreOutputFormats$2 = {
  "ISO8601": "{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{SSS}{Z}",
  "RFC1123": "{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {ZZ}",
  "RFC1036": "{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {ZZ}"
};
var CoreOutputFormats_1 = CoreOutputFormats$2;
var TIMEZONE_ABBREVIATION_REG$1 = /\(([-+]\d{2,4}|\w{3,5})\)$/;
var callDateGet$2 = callDateGet_1;
function getHours$2(d) {
  return callDateGet$2(d, "Hours");
}
var getHours_1 = getHours$2;
var ISODefaults = ISODefaults$3, setDate$1 = setDate_1, getDate$2 = getDate_1, cloneDate$1 = cloneDate_1, isUndefined = isUndefined_1, moveToEndOfWeek = moveToEndOfWeek_1, moveToBeginningOfWeek = moveToBeginningOfWeek_1, moveToFirstDayOfWeekYear = moveToFirstDayOfWeekYear_1;
var ISO_FIRST_DAY_OF_WEEK = ISODefaults.ISO_FIRST_DAY_OF_WEEK, ISO_FIRST_DAY_OF_WEEK_YEAR = ISODefaults.ISO_FIRST_DAY_OF_WEEK_YEAR;
function getWeekNumber$3(d, allowPrevious, firstDayOfWeek, firstDayOfWeekYear) {
  var isoWeek, n = 0;
  if (isUndefined(firstDayOfWeek)) {
    firstDayOfWeek = ISO_FIRST_DAY_OF_WEEK;
  }
  if (isUndefined(firstDayOfWeekYear)) {
    firstDayOfWeekYear = ISO_FIRST_DAY_OF_WEEK_YEAR;
  }
  isoWeek = moveToEndOfWeek(cloneDate$1(d), firstDayOfWeek);
  moveToFirstDayOfWeekYear(isoWeek, firstDayOfWeek, firstDayOfWeekYear);
  if (allowPrevious && d < isoWeek) {
    isoWeek = moveToBeginningOfWeek(cloneDate$1(d), firstDayOfWeek);
    moveToFirstDayOfWeekYear(isoWeek, firstDayOfWeek, firstDayOfWeekYear);
  }
  while (isoWeek <= d) {
    setDate$1(isoWeek, getDate$2(isoWeek) + 7);
    n++;
  }
  return n;
}
var getWeekNumber_1 = getWeekNumber$3;
var LocaleHelpers$6 = LocaleHelpers$h, getYear$3 = getYear_1, getMonth$3 = getMonth_1, getWeekNumber$2 = getWeekNumber_1;
var localeManager$4 = LocaleHelpers$6.localeManager;
function getWeekYear$1(d, localeCode, iso) {
  var year, month, firstDayOfWeek, firstDayOfWeekYear, week, loc;
  year = getYear$3(d);
  month = getMonth$3(d);
  if (month === 0 || month === 11) {
    if (!iso) {
      loc = localeManager$4.get(localeCode);
      firstDayOfWeek = loc.getFirstDayOfWeek(localeCode);
      firstDayOfWeekYear = loc.getFirstDayOfWeekYear(localeCode);
    }
    week = getWeekNumber$2(d, false, firstDayOfWeek, firstDayOfWeekYear);
    if (month === 0 && week === 0) {
      year -= 1;
    } else if (month === 11 && week === 1) {
      year += 1;
    }
  }
  return year;
}
var getWeekYear_1 = getWeekYear$1;
var _utc$2 = _utc$8, trunc$3 = trunc_1, tzOffset$1 = tzOffset_1, padNumber$2 = padNumber_1, mathAliases$8 = mathAliases$z;
var abs$2 = mathAliases$8.abs;
function getUTCOffset$2(d, iso) {
  var offset2 = _utc$2(d) ? 0 : tzOffset$1(d), hours, mins, colon;
  colon = iso === true ? ":" : "";
  if (!offset2 && iso)
    return "Z";
  hours = padNumber$2(trunc$3(-offset2 / 60), 2, true);
  mins = padNumber$2(abs$2(offset2 % 60), 2);
  return hours + colon + mins;
}
var getUTCOffset_1 = getUTCOffset$2;
var DateUnits = DateUnits_1, DateUnitIndexes$2 = DateUnitIndexes$i, getTimeDistanceForUnit$1 = getTimeDistanceForUnit_1;
var DAY_INDEX$1 = DateUnitIndexes$2.DAY_INDEX;
function getDaysSince$1(d1, d2) {
  return getTimeDistanceForUnit$1(d1, d2, DateUnits[DAY_INDEX$1]);
}
var getDaysSince_1 = getDaysSince$1;
var LocaleHelpers$5 = LocaleHelpers$h, trunc$2 = trunc_1, getHours$1 = getHours_1;
var localeManager$3 = LocaleHelpers$5.localeManager;
function getMeridiemToken$1(d, localeCode) {
  var hours = getHours$1(d);
  return localeManager$3.get(localeCode).ampm[trunc$2(hours / 12)] || "";
}
var getMeridiemToken_1 = getMeridiemToken$1;
var TIMEZONE_ABBREVIATION_REG = TIMEZONE_ABBREVIATION_REG$1, LocaleHelpers$4 = LocaleHelpers$h, DateUnitIndexes$1 = DateUnitIndexes$i, trunc$1 = trunc_1, getDate$1 = getDate_1, getYear$2 = getYear_1, getHours = getHours_1, getMonth$2 = getMonth_1, cloneDate = cloneDate_1, padNumber$1 = padNumber_1, getWeekday$2 = getWeekday_1, callDateGet$1 = callDateGet_1, mathAliases$7 = mathAliases$z, getWeekYear = getWeekYear_1, getUTCOffset$1 = getUTCOffset_1, getDaysSince = getDaysSince_1, getWeekNumber$1 = getWeekNumber_1, getMeridiemToken = getMeridiemToken_1, setUnitAndLowerToEdge = setUnitAndLowerToEdge_1;
var localeManager$2 = LocaleHelpers$4.localeManager, MONTH_INDEX = DateUnitIndexes$1.MONTH_INDEX, ceil$1 = mathAliases$7.ceil;
var FormatTokensBase$1 = [
  {
    ldml: "Dow",
    strf: "a",
    lowerToken: "dow",
    get: function(d, localeCode) {
      return localeManager$2.get(localeCode).getWeekdayName(getWeekday$2(d), 2);
    }
  },
  {
    ldml: "Weekday",
    strf: "A",
    lowerToken: "weekday",
    allowAlternates: true,
    get: function(d, localeCode, alternate) {
      return localeManager$2.get(localeCode).getWeekdayName(getWeekday$2(d), alternate);
    }
  },
  {
    ldml: "Mon",
    strf: "b h",
    lowerToken: "mon",
    get: function(d, localeCode) {
      return localeManager$2.get(localeCode).getMonthName(getMonth$2(d), 2);
    }
  },
  {
    ldml: "Month",
    strf: "B",
    lowerToken: "month",
    allowAlternates: true,
    get: function(d, localeCode, alternate) {
      return localeManager$2.get(localeCode).getMonthName(getMonth$2(d), alternate);
    }
  },
  {
    strf: "C",
    get: function(d) {
      return getYear$2(d).toString().slice(0, 2);
    }
  },
  {
    ldml: "d date day",
    strf: "d",
    strfPadding: 2,
    ldmlPaddedToken: "dd",
    ordinalToken: "do",
    get: function(d) {
      return getDate$1(d);
    }
  },
  {
    strf: "e",
    get: function(d) {
      return padNumber$1(getDate$1(d), 2, false, 10, " ");
    }
  },
  {
    ldml: "H 24hr",
    strf: "H",
    strfPadding: 2,
    ldmlPaddedToken: "HH",
    get: function(d) {
      return getHours(d);
    }
  },
  {
    ldml: "h hours 12hr",
    strf: "I",
    strfPadding: 2,
    ldmlPaddedToken: "hh",
    get: function(d) {
      return getHours(d) % 12 || 12;
    }
  },
  {
    ldml: "D",
    strf: "j",
    strfPadding: 3,
    ldmlPaddedToken: "DDD",
    get: function(d) {
      var s = setUnitAndLowerToEdge(cloneDate(d), MONTH_INDEX);
      return getDaysSince(d, s) + 1;
    }
  },
  {
    ldml: "M",
    strf: "m",
    strfPadding: 2,
    ordinalToken: "Mo",
    ldmlPaddedToken: "MM",
    get: function(d) {
      return getMonth$2(d) + 1;
    }
  },
  {
    ldml: "m minutes",
    strf: "M",
    strfPadding: 2,
    ldmlPaddedToken: "mm",
    get: function(d) {
      return callDateGet$1(d, "Minutes");
    }
  },
  {
    ldml: "Q",
    get: function(d) {
      return ceil$1((getMonth$2(d) + 1) / 3);
    }
  },
  {
    ldml: "TT",
    strf: "p",
    get: function(d, localeCode) {
      return getMeridiemToken(d, localeCode);
    }
  },
  {
    ldml: "tt",
    strf: "P",
    get: function(d, localeCode) {
      return getMeridiemToken(d, localeCode).toLowerCase();
    }
  },
  {
    ldml: "T",
    lowerToken: "t",
    get: function(d, localeCode) {
      return getMeridiemToken(d, localeCode).charAt(0);
    }
  },
  {
    ldml: "s seconds",
    strf: "S",
    strfPadding: 2,
    ldmlPaddedToken: "ss",
    get: function(d) {
      return callDateGet$1(d, "Seconds");
    }
  },
  {
    ldml: "S ms",
    strfPadding: 3,
    ldmlPaddedToken: "SSS",
    get: function(d) {
      return callDateGet$1(d, "Milliseconds");
    }
  },
  {
    ldml: "e",
    strf: "u",
    ordinalToken: "eo",
    get: function(d) {
      return getWeekday$2(d) || 7;
    }
  },
  {
    strf: "U",
    strfPadding: 2,
    get: function(d) {
      return getWeekNumber$1(d, false, 0);
    }
  },
  {
    ldml: "W",
    strf: "V",
    strfPadding: 2,
    ordinalToken: "Wo",
    ldmlPaddedToken: "WW",
    get: function(d) {
      return getWeekNumber$1(d, true);
    }
  },
  {
    strf: "w",
    get: function(d) {
      return getWeekday$2(d);
    }
  },
  {
    ldml: "w",
    ordinalToken: "wo",
    ldmlPaddedToken: "ww",
    get: function(d, localeCode) {
      var loc = localeManager$2.get(localeCode), dow = loc.getFirstDayOfWeek(localeCode), doy = loc.getFirstDayOfWeekYear(localeCode);
      return getWeekNumber$1(d, true, dow, doy);
    }
  },
  {
    strf: "W",
    strfPadding: 2,
    get: function(d) {
      return getWeekNumber$1(d, false);
    }
  },
  {
    ldmlPaddedToken: "gggg",
    ldmlTwoDigitToken: "gg",
    get: function(d, localeCode) {
      return getWeekYear(d, localeCode);
    }
  },
  {
    strf: "G",
    strfPadding: 4,
    strfTwoDigitToken: "g",
    ldmlPaddedToken: "GGGG",
    ldmlTwoDigitToken: "GG",
    get: function(d, localeCode) {
      return getWeekYear(d, localeCode, true);
    }
  },
  {
    ldml: "year",
    ldmlPaddedToken: "yyyy",
    ldmlTwoDigitToken: "yy",
    strf: "Y",
    strfPadding: 4,
    strfTwoDigitToken: "y",
    get: function(d) {
      return getYear$2(d);
    }
  },
  {
    ldml: "ZZ",
    strf: "z",
    get: function(d) {
      return getUTCOffset$1(d);
    }
  },
  {
    ldml: "X",
    get: function(d) {
      return trunc$1(d.getTime() / 1e3);
    }
  },
  {
    ldml: "x",
    get: function(d) {
      return d.getTime();
    }
  },
  {
    ldml: "Z",
    get: function(d) {
      return getUTCOffset$1(d, true);
    }
  },
  {
    ldml: "z",
    strf: "Z",
    get: function(d) {
      var match = d.toString().match(TIMEZONE_ABBREVIATION_REG);
      return match ? match[1] : "";
    }
  },
  {
    strf: "D",
    alias: "%m/%d/%y"
  },
  {
    strf: "F",
    alias: "%Y-%m-%d"
  },
  {
    strf: "r",
    alias: "%I:%M:%S %p"
  },
  {
    strf: "R",
    alias: "%H:%M"
  },
  {
    strf: "T",
    alias: "%H:%M:%S"
  },
  {
    strf: "x",
    alias: "{short}"
  },
  {
    strf: "X",
    alias: "{time}"
  },
  {
    strf: "c",
    alias: "{stamp}"
  }
];
var FormatTokensBase_1 = FormatTokensBase$1;
var LocaleHelpers$3 = LocaleHelpers$h, FormatTokensBase = FormatTokensBase_1, CoreOutputFormats$1 = CoreOutputFormats_1, forEach$1 = forEach_1, padNumber = padNumber_1, spaceSplit$1 = spaceSplit_1, namespaceAliases$3 = namespaceAliases$e, coreUtilityAliases$2 = coreUtilityAliases$M, createFormatMatcher = createFormatMatcher_1, defineInstanceSimilar$1 = defineInstanceSimilar_1;
var localeManager$1 = LocaleHelpers$3.localeManager, hasOwn$1 = coreUtilityAliases$2.hasOwn, getOwn$1 = coreUtilityAliases$2.getOwn, forEachProperty$1 = coreUtilityAliases$2.forEachProperty, sugarDate$3 = namespaceAliases$3.sugarDate;
var ldmlTokens, strfTokens;
function buildDateFormatTokens() {
  function addFormats(target, tokens, fn2) {
    if (tokens) {
      forEach$1(spaceSplit$1(tokens), function(token) {
        target[token] = fn2;
      });
    }
  }
  function buildLowercase(get) {
    return function(d, localeCode) {
      return get(d, localeCode).toLowerCase();
    };
  }
  function buildOrdinal(get) {
    return function(d, localeCode) {
      var n = get(d, localeCode);
      return n + localeManager$1.get(localeCode).getOrdinal(n);
    };
  }
  function buildPadded(get, padding) {
    return function(d, localeCode) {
      return padNumber(get(d, localeCode), padding);
    };
  }
  function buildTwoDigits(get) {
    return function(d, localeCode) {
      return get(d, localeCode) % 100;
    };
  }
  function buildAlias(alias) {
    return function(d, localeCode) {
      return dateFormatMatcher$1(alias, d, localeCode);
    };
  }
  function buildAlternates(f) {
    for (var n = 1; n <= 5; n++) {
      buildAlternate(f, n);
    }
  }
  function buildAlternate(f, n) {
    var alternate = function(d, localeCode) {
      return f.get(d, localeCode, n);
    };
    addFormats(ldmlTokens, f.ldml + n, alternate);
    if (f.lowerToken) {
      ldmlTokens[f.lowerToken + n] = buildLowercase(alternate);
    }
  }
  function getIdentityFormat(name) {
    return function(d, localeCode) {
      var loc = localeManager$1.get(localeCode);
      return dateFormatMatcher$1(loc[name], d, localeCode);
    };
  }
  ldmlTokens = {};
  strfTokens = {};
  forEach$1(FormatTokensBase, function(f) {
    var get = f.get, getPadded;
    if (f.lowerToken) {
      ldmlTokens[f.lowerToken] = buildLowercase(get);
    }
    if (f.ordinalToken) {
      ldmlTokens[f.ordinalToken] = buildOrdinal(get);
    }
    if (f.ldmlPaddedToken) {
      ldmlTokens[f.ldmlPaddedToken] = buildPadded(get, f.ldmlPaddedToken.length);
    }
    if (f.ldmlTwoDigitToken) {
      ldmlTokens[f.ldmlTwoDigitToken] = buildPadded(buildTwoDigits(get), 2);
    }
    if (f.strfTwoDigitToken) {
      strfTokens[f.strfTwoDigitToken] = buildPadded(buildTwoDigits(get), 2);
    }
    if (f.strfPadding) {
      getPadded = buildPadded(get, f.strfPadding);
    }
    if (f.alias) {
      get = buildAlias(f.alias);
    }
    if (f.allowAlternates) {
      buildAlternates(f);
    }
    addFormats(ldmlTokens, f.ldml, get);
    addFormats(strfTokens, f.strf, getPadded || get);
  });
  forEachProperty$1(CoreOutputFormats$1, function(src, name) {
    addFormats(ldmlTokens, name, buildAlias(src));
  });
  defineInstanceSimilar$1(sugarDate$3, "short medium long full", function(methods, name) {
    var fn2 = getIdentityFormat(name);
    addFormats(ldmlTokens, name, fn2);
    methods[name] = fn2;
  });
  addFormats(ldmlTokens, "time", getIdentityFormat("time"));
  addFormats(ldmlTokens, "stamp", getIdentityFormat("stamp"));
}
var dateFormatMatcher$1;
function buildDateFormatMatcher() {
  function getLdml(d, token, localeCode) {
    return getOwn$1(ldmlTokens, token)(d, localeCode);
  }
  function getStrf(d, token, localeCode) {
    return getOwn$1(strfTokens, token)(d, localeCode);
  }
  function checkDateToken(ldml, strf) {
    return hasOwn$1(ldmlTokens, ldml) || hasOwn$1(strfTokens, strf);
  }
  dateFormatMatcher$1 = createFormatMatcher(getLdml, getStrf, checkDateToken);
}
buildDateFormatTokens();
buildDateFormatMatcher();
var formattingTokens$1 = {
  ldmlTokens,
  strfTokens,
  dateFormatMatcher: dateFormatMatcher$1
};
var dateIsValid$2 = dateIsValid_1;
function assertDateIsValid$2(d) {
  if (!dateIsValid$2(d)) {
    throw new TypeError("Date is not valid");
  }
}
var assertDateIsValid_1 = assertDateIsValid$2;
var CoreOutputFormats = CoreOutputFormats_1, formattingTokens = formattingTokens$1, assertDateIsValid$1 = assertDateIsValid_1;
var dateFormatMatcher = formattingTokens.dateFormatMatcher;
function dateFormat$2(d, format, localeCode) {
  assertDateIsValid$1(d);
  format = CoreOutputFormats[format] || format || "{long}";
  return dateFormatMatcher(format, d, localeCode);
}
var dateFormat_1 = dateFormat$2;
var Sugar$1x = sugarCoreExports, dateFormat$1 = dateFormat_1;
Sugar$1x.Date.defineInstance({
  "format": function(date, f, localeCode) {
    return dateFormat$1(date, f, localeCode);
  }
});
Sugar$1x.Date.format;
var getExtendedDate = getExtendedDate_1;
function createDateWithContext$1(contextDate, d, options, forceClone) {
  return getExtendedDate(contextDate, d, options, forceClone).date;
}
var createDateWithContext_1 = createDateWithContext$1;
var Sugar$1w = sugarCoreExports, createDateWithContext = createDateWithContext_1;
Sugar$1w.Date.defineInstance({
  "get": function(date, d, options) {
    return createDateWithContext(date, d, options);
  }
});
Sugar$1w.Date.get;
var Sugar$1v = sugarCoreExports, getWeekNumber = getWeekNumber_1;
Sugar$1v.Date.defineInstance({
  "getISOWeek": function(date) {
    return getWeekNumber(date, true);
  }
});
Sugar$1v.Date.getISOWeek;
var Sugar$1u = sugarCoreExports, getUTCOffset = getUTCOffset_1;
Sugar$1u.Date.defineInstance({
  "getUTCOffset": function(date, iso) {
    return getUTCOffset(date, iso);
  }
});
Sugar$1u.Date.getUTCOffset;
var Sugar$1t = sugarCoreExports;
Sugar$1t.Date.defineInstance({
  "getUTCWeekday": function(date) {
    return date.getUTCDay();
  }
});
Sugar$1t.Date.getUTCWeekday;
var Sugar$1s = sugarCoreExports, getWeekday$1 = getWeekday_1;
Sugar$1s.Date.defineInstance({
  "getWeekday": function(date) {
    return getWeekday$1(date);
  }
});
Sugar$1s.Date.getWeekday;
var Sugar$1r = sugarCoreExports;
Sugar$1r.Date.hoursAgo;
var Sugar$1q = sugarCoreExports;
Sugar$1q.Date.hoursFromNow;
var Sugar$1p = sugarCoreExports;
Sugar$1p.Date.hoursSince;
var Sugar$1o = sugarCoreExports;
Sugar$1o.Date.hoursUntil;
var setDate = setDate_1, getDate = getDate_1, getYear$1 = getYear_1, getMonth$1 = getMonth_1, getNewDate$2 = getNewDate_1;
function compareDay$1(d, shift) {
  var comp = getNewDate$2();
  if (shift) {
    setDate(comp, getDate(comp) + shift);
  }
  return getYear$1(d) === getYear$1(comp) && getMonth$1(d) === getMonth$1(comp) && getDate(d) === getDate(comp);
}
var compareDay_1 = compareDay$1;
var LocaleHelpers$2 = LocaleHelpers$h, trim = trim_1, getMonth = getMonth_1, isDefined$1 = isDefined_1, getNewDate$1 = getNewDate_1, compareDay = compareDay_1, getWeekday = getWeekday_1, dateIsValid$1 = dateIsValid_1, classChecks$c = classChecks$Z, compareDate = compareDate_1;
var isString$4 = classChecks$c.isString, English$1 = LocaleHelpers$2.English;
function fullCompareDate$2(date, d, margin) {
  var tmp;
  if (!dateIsValid$1(date))
    return;
  if (isString$4(d)) {
    d = trim(d).toLowerCase();
    switch (true) {
      case d === "future":
        return date.getTime() > getNewDate$1().getTime();
      case d === "past":
        return date.getTime() < getNewDate$1().getTime();
      case d === "today":
        return compareDay(date);
      case d === "tomorrow":
        return compareDay(date, 1);
      case d === "yesterday":
        return compareDay(date, -1);
      case d === "weekday":
        return getWeekday(date) > 0 && getWeekday(date) < 6;
      case d === "weekend":
        return getWeekday(date) === 0 || getWeekday(date) === 6;
      case isDefined$1(tmp = English$1.weekdayMap[d]):
        return getWeekday(date) === tmp;
      case isDefined$1(tmp = English$1.monthMap[d]):
        return getMonth(date) === tmp;
    }
  }
  return compareDate(date, d, margin);
}
var fullCompareDate_1 = fullCompareDate$2;
var Sugar$1n = sugarCoreExports, fullCompareDate$1 = fullCompareDate_1;
Sugar$1n.Date.defineInstance({
  "is": function(date, d, margin) {
    return fullCompareDate$1(date, d, margin);
  }
});
Sugar$1n.Date.is;
var Sugar$1m = sugarCoreExports, createDate$3 = createDate_1;
Sugar$1m.Date.defineInstance({
  "isAfter": function(date, d, margin) {
    return date.getTime() > createDate$3(d).getTime() - (margin || 0);
  }
});
Sugar$1m.Date.isAfter;
var Sugar$1l = sugarCoreExports, createDate$2 = createDate_1;
Sugar$1l.Date.defineInstance({
  "isBefore": function(date, d, margin) {
    return date.getTime() < createDate$2(d).getTime() + (margin || 0);
  }
});
Sugar$1l.Date.isBefore;
var Sugar$1k = sugarCoreExports, createDate$1 = createDate_1, mathAliases$6 = mathAliases$z;
var min$2 = mathAliases$6.min, max$2 = mathAliases$6.max;
Sugar$1k.Date.defineInstance({
  "isBetween": function(date, d1, d2, margin) {
    var t = date.getTime();
    var t1 = createDate$1(d1).getTime();
    var t2 = createDate$1(d2).getTime();
    var lo = min$2(t1, t2);
    var hi = max$2(t1, t2);
    margin = margin || 0;
    return lo - margin <= t && hi + margin >= t;
  }
});
Sugar$1k.Date.isBetween;
var LocaleHelpers$1 = LocaleHelpers$h, spaceSplit = spaceSplit_1, fullCompareDate = fullCompareDate_1, namespaceAliases$2 = namespaceAliases$e, defineInstanceSimilar = defineInstanceSimilar_1;
var English = LocaleHelpers$1.English, sugarDate$2 = namespaceAliases$2.sugarDate;
function buildRelativeAliases$1() {
  var special = spaceSplit("Today Yesterday Tomorrow Weekday Weekend Future Past");
  var weekdays = English.weekdays.slice(0, 7);
  var months = English.months.slice(0, 12);
  var together = special.concat(weekdays).concat(months);
  defineInstanceSimilar(sugarDate$2, together, function(methods, name) {
    methods["is" + name] = function(d) {
      return fullCompareDate(d, name);
    };
  });
}
var buildRelativeAliases_1 = buildRelativeAliases$1;
var buildRelativeAliases = buildRelativeAliases_1;
buildRelativeAliases();
var Sugar$1j = sugarCoreExports;
Sugar$1j.Date.isFriday;
var Sugar$1i = sugarCoreExports;
Sugar$1i.Date.isFuture;
var Sugar$1h = sugarCoreExports;
Sugar$1h.Date.isLastMonth;
var Sugar$1g = sugarCoreExports;
Sugar$1g.Date.isLastWeek;
var Sugar$1f = sugarCoreExports;
Sugar$1f.Date.isLastYear;
var Sugar$1e = sugarCoreExports, getYear = getYear_1;
Sugar$1e.Date.defineInstance({
  "isLeapYear": function(date) {
    var year = getYear(date);
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
});
Sugar$1e.Date.isLeapYear;
var Sugar$1d = sugarCoreExports;
Sugar$1d.Date.isMonday;
var Sugar$1c = sugarCoreExports;
Sugar$1c.Date.isNextMonth;
var Sugar$1b = sugarCoreExports;
Sugar$1b.Date.isNextWeek;
var Sugar$1a = sugarCoreExports;
Sugar$1a.Date.isNextYear;
var Sugar$19 = sugarCoreExports;
Sugar$19.Date.isPast;
var Sugar$18 = sugarCoreExports;
Sugar$18.Date.isSaturday;
var Sugar$17 = sugarCoreExports;
Sugar$17.Date.isSunday;
var Sugar$16 = sugarCoreExports;
Sugar$16.Date.isThisMonth;
var Sugar$15 = sugarCoreExports;
Sugar$15.Date.isThisWeek;
var Sugar$14 = sugarCoreExports;
Sugar$14.Date.isThisYear;
var Sugar$13 = sugarCoreExports;
Sugar$13.Date.isThursday;
var Sugar$12 = sugarCoreExports;
Sugar$12.Date.isToday;
var Sugar$11 = sugarCoreExports;
Sugar$11.Date.isTomorrow;
var Sugar$10 = sugarCoreExports;
Sugar$10.Date.isTuesday;
var _utc$1 = _utc$8, tzOffset = tzOffset_1;
function isUTC$1(d) {
  return !!_utc$1(d) || tzOffset(d) === 0;
}
var isUTC_1 = isUTC$1;
var Sugar$$ = sugarCoreExports, isUTC = isUTC_1;
Sugar$$.Date.defineInstance({
  "isUTC": function(date) {
    return isUTC(date);
  }
});
Sugar$$.Date.isUTC;
var Sugar$_ = sugarCoreExports, dateIsValid = dateIsValid_1;
Sugar$_.Date.defineInstance({
  "isValid": function(date) {
    return dateIsValid(date);
  }
});
Sugar$_.Date.isValid;
var Sugar$Z = sugarCoreExports;
Sugar$Z.Date.isWednesday;
var Sugar$Y = sugarCoreExports;
Sugar$Y.Date.isWeekday;
var Sugar$X = sugarCoreExports;
Sugar$X.Date.isWeekend;
var Sugar$W = sugarCoreExports;
Sugar$W.Date.isYesterday;
var Sugar$V = sugarCoreExports;
Sugar$V.Date.defineInstance({
  "iso": function(date) {
    return date.toISOString();
  }
});
Sugar$V.Date.iso;
var Sugar$U = sugarCoreExports;
Sugar$U.Date.millisecondsAgo;
var Sugar$T = sugarCoreExports;
Sugar$T.Date.millisecondsFromNow;
var Sugar$S = sugarCoreExports;
Sugar$S.Date.millisecondsSince;
var Sugar$R = sugarCoreExports;
Sugar$R.Date.millisecondsUntil;
var Sugar$Q = sugarCoreExports;
Sugar$Q.Date.minutesAgo;
var Sugar$P = sugarCoreExports;
Sugar$P.Date.minutesFromNow;
var Sugar$O = sugarCoreExports;
Sugar$O.Date.minutesSince;
var Sugar$N = sugarCoreExports;
Sugar$N.Date.minutesUntil;
var Sugar$M = sugarCoreExports;
Sugar$M.Date.monthsAgo;
var Sugar$L = sugarCoreExports;
Sugar$L.Date.monthsFromNow;
var Sugar$K = sugarCoreExports;
Sugar$K.Date.monthsSince;
var Sugar$J = sugarCoreExports;
Sugar$J.Date.monthsUntil;
var getNewDate = getNewDate_1, mathAliases$5 = mathAliases$z, getAdjustedUnit = getAdjustedUnit_1, getTimeDistanceForUnit = getTimeDistanceForUnit_1;
var abs$1 = mathAliases$5.abs;
function getAdjustedUnitForDate$1(d, dRelative) {
  var ms;
  if (!dRelative) {
    dRelative = getNewDate();
    if (d > dRelative) {
      dRelative = new Date(dRelative.getTime() - 10);
    }
  }
  ms = d - dRelative;
  return getAdjustedUnit(ms, function(u) {
    return abs$1(getTimeDistanceForUnit(d, dRelative, u));
  });
}
var getAdjustedUnitForDate_1 = getAdjustedUnitForDate$1;
var LocaleHelpers = LocaleHelpers$h, dateFormat = dateFormat_1, classChecks$b = classChecks$Z, assertDateIsValid = assertDateIsValid_1, getAdjustedUnitForDate = getAdjustedUnitForDate_1;
var isFunction$1 = classChecks$b.isFunction, localeManager = LocaleHelpers.localeManager;
function dateRelative$2(d, dRelative, arg1, arg2) {
  var adu, format, type, localeCode, fn2;
  assertDateIsValid(d);
  if (isFunction$1(arg1)) {
    fn2 = arg1;
  } else {
    localeCode = arg1;
    fn2 = arg2;
  }
  adu = getAdjustedUnitForDate(d, dRelative);
  if (fn2) {
    format = fn2.apply(d, adu.concat(localeManager.get(localeCode)));
    if (format) {
      return dateFormat(d, format, localeCode);
    }
  }
  if (adu[1] === 0) {
    adu[1] = 1;
    adu[0] = 1;
  }
  if (dRelative) {
    type = "duration";
  } else if (adu[2] > 0) {
    type = "future";
  } else {
    type = "past";
  }
  return localeManager.get(localeCode).getRelativeFormat(adu, type);
}
var dateRelative_1 = dateRelative$2;
var Sugar$I = sugarCoreExports, dateRelative$1 = dateRelative_1;
Sugar$I.Date.defineInstance({
  "relative": function(date, localeCode, relativeFn) {
    return dateRelative$1(date, null, localeCode, relativeFn);
  }
});
Sugar$I.Date.relative;
var Sugar$H = sugarCoreExports, createDate = createDate_1, dateRelative = dateRelative_1;
Sugar$H.Date.defineInstance({
  "relativeTo": function(date, d, localeCode) {
    return dateRelative(date, createDate(d), localeCode);
  }
});
Sugar$H.Date.relativeTo;
var iterateOverDateParams = iterateOverDateParams_1;
function getUnitIndexForParamName$1(name) {
  var params = {}, unitIndex;
  params[name] = 1;
  iterateOverDateParams(params, function(name2, val, unit, i) {
    unitIndex = i;
    return false;
  });
  return unitIndex;
}
var getUnitIndexForParamName_1 = getUnitIndexForParamName$1;
var Sugar$G = sugarCoreExports, DateUnitIndexes = DateUnitIndexes$i, moveToBeginningOfUnit = moveToBeginningOfUnit_1, getUnitIndexForParamName = getUnitIndexForParamName_1;
var DAY_INDEX = DateUnitIndexes.DAY_INDEX;
Sugar$G.Date.defineInstance({
  "reset": function(date, unit, localeCode) {
    var unitIndex = unit ? getUnitIndexForParamName(unit) : DAY_INDEX;
    moveToBeginningOfUnit(date, unitIndex, localeCode);
    return date;
  }
});
Sugar$G.Date.reset;
var Sugar$F = sugarCoreExports, advanceDateWithArgs = advanceDateWithArgs_1;
Sugar$F.Date.defineInstanceWithArguments({
  "rewind": function(d, args) {
    return advanceDateWithArgs(d, args, -1);
  }
});
Sugar$F.Date.rewind;
var Sugar$E = sugarCoreExports;
Sugar$E.Date.secondsAgo;
var Sugar$D = sugarCoreExports;
Sugar$D.Date.secondsFromNow;
var Sugar$C = sugarCoreExports;
Sugar$C.Date.secondsSince;
var Sugar$B = sugarCoreExports;
Sugar$B.Date.secondsUntil;
var Sugar$A = sugarCoreExports, updateDate = updateDate_1, collectUpdateDateArguments = collectUpdateDateArguments_1;
Sugar$A.Date.defineInstanceWithArguments({
  "set": function(d, args) {
    args = collectUpdateDateArguments(args);
    return updateDate(d, args[0], args[1]);
  }
});
Sugar$A.Date.set;
var Sugar$z = sugarCoreExports, setISOWeekNumber = setISOWeekNumber_1;
Sugar$z.Date.defineInstance({
  "setISOWeek": function(date, num) {
    return setISOWeekNumber(date, num);
  }
});
Sugar$z.Date.setISOWeek;
var Sugar$y = sugarCoreExports, _utc = _utc$8;
Sugar$y.Date.defineInstance({
  "setUTC": function(date, on) {
    return _utc(date, on);
  }
});
Sugar$y.Date.setUTC;
var Sugar$x = sugarCoreExports, setWeekday = setWeekday_1;
Sugar$x.Date.defineInstance({
  "setWeekday": function(date, dow) {
    return setWeekday(date, dow);
  }
});
Sugar$x.Date.setWeekday;
var Sugar$w = sugarCoreExports;
Sugar$w.Date.weeksAgo;
var Sugar$v = sugarCoreExports;
Sugar$v.Date.weeksFromNow;
var Sugar$u = sugarCoreExports;
Sugar$u.Date.weeksSince;
var Sugar$t = sugarCoreExports;
Sugar$t.Date.weeksUntil;
var Sugar$s = sugarCoreExports;
Sugar$s.Date.yearsAgo;
var Sugar$r = sugarCoreExports;
Sugar$r.Date.yearsFromNow;
var Sugar$q = sugarCoreExports;
Sugar$q.Date.yearsSince;
var Sugar$p = sugarCoreExports;
Sugar$p.Date.yearsUntil;
var Sugar$o = sugarCoreExports;
Sugar$o.Date.getOption;
var Sugar$n = sugarCoreExports;
Sugar$n.Date.setOption;
var classChecks$a = classChecks$Z;
var isDate$3 = classChecks$a.isDate;
function getRangeMemberPrimitiveValue$2(m) {
  if (m == null)
    return m;
  return isDate$3(m) ? m.getTime() : m.valueOf();
}
var getRangeMemberPrimitiveValue_1 = getRangeMemberPrimitiveValue$2;
var classChecks$9 = classChecks$Z, getRangeMemberPrimitiveValue$1 = getRangeMemberPrimitiveValue_1;
var isDate$2 = classChecks$9.isDate;
function cloneRangeMember$2(m) {
  if (isDate$2(m)) {
    return new Date(m.getTime());
  } else {
    return getRangeMemberPrimitiveValue$1(m);
  }
}
var cloneRangeMember_1 = cloneRangeMember$2;
var cloneRangeMember$1 = cloneRangeMember_1;
function Range$h(start2, end2) {
  this.start = cloneRangeMember$1(start2);
  this.end = cloneRangeMember$1(end2);
}
var Range_1 = Range$h;
var classChecks$8 = classChecks$Z, namespaceAliases$1 = namespaceAliases$e;
var isDate$1 = classChecks$8.isDate, sugarDate$1 = namespaceAliases$1.sugarDate;
function getDateForRange$2(d) {
  if (isDate$1(d)) {
    return d;
  } else if (d == null) {
    return /* @__PURE__ */ new Date();
  } else if (sugarDate$1.create) {
    return sugarDate$1.create(d);
  }
  return new Date(d);
}
var getDateForRange_1 = getDateForRange$2;
var DURATION_UNITS$3 = "year|month|week|day|hour|minute|second|millisecond";
var DURATION_UNITS$2 = DURATION_UNITS$3;
var FULL_CAPTURED_DURATION$1 = "((?:\\d+)?\\s*(?:" + DURATION_UNITS$2 + "))s?";
var FULL_CAPTURED_DURATION = FULL_CAPTURED_DURATION$1;
var DurationTextFormats$1 = {
  RANGE_REG_FROM_TO: /(?:from)?\s*(.+)\s+(?:to|until)\s+(.+)$/i,
  RANGE_REG_REAR_DURATION: RegExp("(.+)\\s*for\\s*" + FULL_CAPTURED_DURATION, "i"),
  RANGE_REG_FRONT_DURATION: RegExp("(?:for)?\\s*" + FULL_CAPTURED_DURATION + "\\s*(?:starting)?\\s(?:at\\s)?(.+)", "i")
};
var MULTIPLIERS$2 = {
  "Hours": 60 * 60 * 1e3,
  "Minutes": 60 * 1e3,
  "Seconds": 1e3,
  "Milliseconds": 1
};
var MULTIPLIERS_1 = MULTIPLIERS$2;
var MULTIPLIERS$1 = MULTIPLIERS_1, callDateSet = callDateSet_1, callDateGet = callDateGet_1;
function incrementDate$2(src, amount, unit) {
  var mult = MULTIPLIERS$1[unit], d;
  if (mult) {
    d = new Date(src.getTime() + amount * mult);
  } else {
    d = new Date(src);
    callDateSet(d, unit, callDateGet(src, unit) + amount);
  }
  return d;
}
var incrementDate_1 = incrementDate$2;
var DURATION_UNITS$1 = DURATION_UNITS$3;
var DURATION_REG$1 = RegExp("(\\d+)?\\s*(" + DURATION_UNITS$1 + ")s?", "i");
var DURATION_REG = DURATION_REG$1, classChecks$7 = classChecks$Z, simpleCapitalize$1 = simpleCapitalize_1;
var isNumber$4 = classChecks$7.isNumber;
function getDateIncrementObject$2(amt) {
  var match, val, unit;
  if (isNumber$4(amt)) {
    return [amt, "Milliseconds"];
  }
  match = amt.match(DURATION_REG);
  val = +match[1] || 1;
  unit = simpleCapitalize$1(match[2].toLowerCase());
  if (unit.match(/hour|minute|second/i)) {
    unit += "s";
  } else if (unit === "Year") {
    unit = "FullYear";
  } else if (unit === "Week") {
    unit = "Date";
    val *= 7;
  } else if (unit === "Day") {
    unit = "Date";
  }
  return [val, unit];
}
var getDateIncrementObject_1 = getDateIncrementObject$2;
var Range$g = Range_1, DurationTextFormats = DurationTextFormats$1, incrementDate$1 = incrementDate_1, getDateForRange$1 = getDateForRange_1, namespaceAliases = namespaceAliases$e, getDateIncrementObject$1 = getDateIncrementObject_1;
var sugarDate = namespaceAliases.sugarDate, RANGE_REG_FROM_TO = DurationTextFormats.RANGE_REG_FROM_TO, RANGE_REG_REAR_DURATION = DurationTextFormats.RANGE_REG_REAR_DURATION, RANGE_REG_FRONT_DURATION = DurationTextFormats.RANGE_REG_FRONT_DURATION;
function createDateRangeFromString$1(str) {
  var match, datetime, duration, dio, start2, end2;
  if (sugarDate.get && (match = str.match(RANGE_REG_FROM_TO))) {
    start2 = getDateForRange$1(match[1].replace("from", "at"));
    end2 = sugarDate.get(start2, match[2]);
    return new Range$g(start2, end2);
  }
  if (match = str.match(RANGE_REG_FRONT_DURATION)) {
    duration = match[1];
    datetime = match[2];
  }
  if (match = str.match(RANGE_REG_REAR_DURATION)) {
    datetime = match[1];
    duration = match[2];
  }
  if (datetime && duration) {
    start2 = getDateForRange$1(datetime);
    dio = getDateIncrementObject$1(duration);
    end2 = incrementDate$1(start2, dio[0], dio[1]);
  } else {
    start2 = str;
  }
  return new Range$g(getDateForRange$1(start2), getDateForRange$1(end2));
}
var createDateRangeFromString_1 = createDateRangeFromString$1;
var Range$f = Range_1, classChecks$6 = classChecks$Z, getDateForRange = getDateForRange_1, createDateRangeFromString = createDateRangeFromString_1;
var isString$3 = classChecks$6.isString;
var DateRangeConstructor$1 = function(start2, end2) {
  if (arguments.length === 1 && isString$3(start2)) {
    return createDateRangeFromString(start2);
  }
  return new Range$f(getDateForRange(start2), getDateForRange(end2));
};
var DateRangeConstructor_1 = DateRangeConstructor$1;
var Sugar$m = sugarCoreExports, DateRangeConstructor = DateRangeConstructor_1;
Sugar$m.Date.defineStatic({
  "range": DateRangeConstructor
});
Sugar$m.Date.range;
var Range$e = Range_1;
var PrimitiveRangeConstructor$2 = function(start2, end2) {
  return new Range$e(start2, end2);
};
var PrimitiveRangeConstructor_1 = PrimitiveRangeConstructor$2;
var Sugar$l = sugarCoreExports, PrimitiveRangeConstructor$1 = PrimitiveRangeConstructor_1;
Sugar$l.Number.defineStatic({
  "range": PrimitiveRangeConstructor$1
});
Sugar$l.Number.range;
var Sugar$k = sugarCoreExports, PrimitiveRangeConstructor = PrimitiveRangeConstructor_1;
Sugar$k.String.defineStatic({
  "range": PrimitiveRangeConstructor
});
Sugar$k.String.range;
var cloneRangeMember = cloneRangeMember_1;
function rangeClamp$3(range, obj) {
  var clamped, start2 = range.start, end2 = range.end, min2 = end2 < start2 ? end2 : start2, max2 = start2 > end2 ? start2 : end2;
  if (obj < min2) {
    clamped = min2;
  } else if (obj > max2) {
    clamped = max2;
  } else {
    clamped = obj;
  }
  return cloneRangeMember(clamped);
}
var rangeClamp_1 = rangeClamp$3;
var Sugar$j = sugarCoreExports, Range$d = Range_1, rangeClamp$2 = rangeClamp_1;
Sugar$j.Number.defineInstance({
  "cap": function(n, max2) {
    return rangeClamp$2(new Range$d(void 0, max2), n);
  }
});
Sugar$j.Number.cap;
var Sugar$i = sugarCoreExports, Range$c = Range_1, rangeClamp$1 = rangeClamp_1;
Sugar$i.Number.defineInstance({
  "clamp": function(n, start2, end2) {
    return rangeClamp$1(new Range$c(start2, end2), n);
  }
});
Sugar$i.Number.clamp;
function valueIsNotInfinite$1(m) {
  return m !== -Infinity && m !== Infinity;
}
var valueIsNotInfinite_1 = valueIsNotInfinite$1;
var valueIsNotInfinite = valueIsNotInfinite_1, getRangeMemberPrimitiveValue = getRangeMemberPrimitiveValue_1;
function isValidRangeMember$1(m) {
  var val = getRangeMemberPrimitiveValue(m);
  return (!!val || val === 0) && valueIsNotInfinite(m);
}
var isValidRangeMember_1 = isValidRangeMember$1;
var isValidRangeMember = isValidRangeMember_1;
function rangeIsValid$4(range) {
  return isValidRangeMember(range.start) && isValidRangeMember(range.end) && typeof range.start === typeof range.end;
}
var rangeIsValid_1 = rangeIsValid$4;
var withPrecision = withPrecision_1;
function incrementNumber$1(current, amount, precision) {
  return withPrecision(current + amount, precision);
}
var incrementNumber_1 = incrementNumber$1;
var chr = chr$6;
function incrementString$1(current, amount) {
  return chr(current.charCodeAt(0) + amount);
}
var incrementString_1 = incrementString$1;
var periodSplit = periodSplit_1;
function getPrecision$1(n) {
  var split = periodSplit(n.toString());
  return split[1] ? split[1].length : 0;
}
var getPrecision_1 = getPrecision$1;
var mathAliases$4 = mathAliases$z, getPrecision = getPrecision_1;
var max$1 = mathAliases$4.max;
function getGreaterPrecision$1(n1, n2) {
  return max$1(getPrecision(n1), getPrecision(n2));
}
var getGreaterPrecision_1 = getGreaterPrecision$1;
var classChecks$5 = classChecks$Z, rangeIsValid$3 = rangeIsValid_1, incrementDate = incrementDate_1, incrementNumber = incrementNumber_1, incrementString = incrementString_1, getGreaterPrecision = getGreaterPrecision_1, getDateIncrementObject = getDateIncrementObject_1;
var isNumber$3 = classChecks$5.isNumber, isString$2 = classChecks$5.isString, isDate = classChecks$5.isDate, isFunction = classChecks$5.isFunction;
function rangeEvery$4(range, step, countOnly, fn2) {
  var increment, precision, dio, unit, start2 = range.start, end2 = range.end, inverse = end2 < start2, current = start2, index = 0, result2 = [];
  if (!rangeIsValid$3(range)) {
    return countOnly ? NaN : [];
  }
  if (isFunction(step)) {
    fn2 = step;
    step = null;
  }
  step = step || 1;
  if (isNumber$3(start2)) {
    precision = getGreaterPrecision(start2, step);
    increment = function() {
      return incrementNumber(current, step, precision);
    };
  } else if (isString$2(start2)) {
    increment = function() {
      return incrementString(current, step);
    };
  } else if (isDate(start2)) {
    dio = getDateIncrementObject(step);
    step = dio[0];
    unit = dio[1];
    increment = function() {
      return incrementDate(current, step, unit);
    };
  }
  if (inverse && step > 0) {
    step *= -1;
  }
  while (inverse ? current >= end2 : current <= end2) {
    if (!countOnly) {
      result2.push(current);
    }
    if (fn2) {
      fn2(current, index, range);
    }
    current = increment();
    index++;
  }
  return countOnly ? index - 1 : result2;
}
var rangeEvery_1 = rangeEvery$4;
var Sugar$h = sugarCoreExports, Range$b = Range_1, rangeEvery$3 = rangeEvery_1;
Sugar$h.Number.defineInstance({
  "upto": function(n, num, step, everyFn) {
    return rangeEvery$3(new Range$b(n, num), step, false, everyFn);
  }
});
Sugar$h.Number.upto;
var coreUtilityAliases$1 = coreUtilityAliases$M;
var forEachProperty = coreUtilityAliases$1.forEachProperty;
function defineOnPrototype$b(ctor, methods) {
  var proto = ctor.prototype;
  forEachProperty(methods, function(val, key) {
    proto[key] = val;
  });
}
var defineOnPrototype_1 = defineOnPrototype$b;
var Range$a = Range_1, rangeClamp = rangeClamp_1, defineOnPrototype$a = defineOnPrototype_1;
defineOnPrototype$a(Range$a, {
  "clamp": function(el) {
    return rangeClamp(this, el);
  }
});
var Range$9 = Range_1, defineOnPrototype$9 = defineOnPrototype_1;
defineOnPrototype$9(Range$9, {
  "clone": function() {
    return new Range$9(this.start, this.end);
  }
});
var Range$8 = Range_1, defineOnPrototype$8 = defineOnPrototype_1;
defineOnPrototype$8(Range$8, {
  "contains": function(el) {
    if (el == null)
      return false;
    if (el.start && el.end) {
      return el.start >= this.start && el.start <= this.end && el.end >= this.start && el.end <= this.end;
    } else {
      return el >= this.start && el <= this.end;
    }
  }
});
var MULTIPLIERS = MULTIPLIERS_1, DURATION_UNITS = DURATION_UNITS$3, Range$7 = Range_1, trunc = trunc_1, forEach = forEach_1, rangeEvery$2 = rangeEvery_1, simpleCapitalize = simpleCapitalize_1, defineOnPrototype$7 = defineOnPrototype_1;
function buildDateRangeUnits$1() {
  var methods = {};
  forEach(DURATION_UNITS.split("|"), function(unit, i) {
    var name = unit + "s", mult, fn2;
    if (i < 4) {
      fn2 = function() {
        return rangeEvery$2(this, unit, true);
      };
    } else {
      mult = MULTIPLIERS[simpleCapitalize(name)];
      fn2 = function() {
        return trunc((this.end - this.start) / mult);
      };
    }
    methods[name] = fn2;
  });
  defineOnPrototype$7(Range$7, methods);
}
var buildDateRangeUnits_1 = buildDateRangeUnits$1;
var buildDateRangeUnits = buildDateRangeUnits_1;
buildDateRangeUnits();
var Range$6 = Range_1, rangeEvery$1 = rangeEvery_1, defineOnPrototype$6 = defineOnPrototype_1;
defineOnPrototype$6(Range$6, {
  "every": function(amount, everyFn) {
    return rangeEvery$1(this, amount, false, everyFn);
  }
});
var Range$5 = Range_1, defineOnPrototype$5 = defineOnPrototype_1;
defineOnPrototype$5(Range$5, {
  "intersect": function(range) {
    if (range.start > this.end || range.end < this.start) {
      return new Range$5(NaN, NaN);
    }
    return new Range$5(
      this.start > range.start ? this.start : range.start,
      this.end < range.end ? this.end : range.end
    );
  }
});
var Range$4 = Range_1, rangeIsValid$2 = rangeIsValid_1, defineOnPrototype$4 = defineOnPrototype_1;
defineOnPrototype$4(Range$4, {
  "isValid": function() {
    return rangeIsValid$2(this);
  }
});
var classChecks$4 = classChecks$Z;
var isString$1 = classChecks$4.isString;
function getRangeMemberNumericValue$1(m) {
  return isString$1(m) ? m.charCodeAt(0) : m;
}
var getRangeMemberNumericValue_1 = getRangeMemberNumericValue$1;
var Range$3 = Range_1, mathAliases$3 = mathAliases$z, rangeIsValid$1 = rangeIsValid_1, defineOnPrototype$3 = defineOnPrototype_1, getRangeMemberNumericValue = getRangeMemberNumericValue_1;
var abs = mathAliases$3.abs;
defineOnPrototype$3(Range$3, {
  "span": function() {
    var n = getRangeMemberNumericValue(this.end) - getRangeMemberNumericValue(this.start);
    return rangeIsValid$1(this) ? abs(n) + 1 : NaN;
  }
});
var Range$2 = Range_1, rangeEvery = rangeEvery_1, defineOnPrototype$2 = defineOnPrototype_1;
defineOnPrototype$2(Range$2, {
  "toArray": function() {
    return rangeEvery(this);
  }
});
var Range$1 = Range_1, rangeIsValid = rangeIsValid_1, defineOnPrototype$1 = defineOnPrototype_1;
defineOnPrototype$1(Range$1, {
  "toString": function() {
    return rangeIsValid(this) ? this.start + ".." + this.end : "Invalid Range";
  }
});
var Range = Range_1, defineOnPrototype = defineOnPrototype_1;
defineOnPrototype(Range, {
  "union": function(range) {
    return new Range(
      this.start < range.start ? this.start : range.start,
      this.end > range.end ? this.end : range.end
    );
  }
});
var Sugar$g = sugarCoreExports;
Sugar$g.Number.alias("downto", "upto");
Sugar$g.Number.downto;
var Sugar$f = sugarCoreExports, coercePositiveInteger$1 = coercePositiveInteger_1;
Sugar$f.Function.defineInstance({
  "after": function(fn2, num) {
    var count = 0, collectedArgs = [];
    num = coercePositiveInteger$1(num);
    return function() {
      var args = [];
      for (var $i = 0, $len = arguments.length; $i < $len; $i++)
        args.push(arguments[$i]);
      collectedArgs.push(args);
      count++;
      if (count >= num) {
        return fn2.call(this, collectedArgs);
      }
    };
  }
});
Sugar$f.Function.after;
var privatePropertyAccessor$3 = privatePropertyAccessor_1;
var _timers$2 = privatePropertyAccessor$3("timers");
var privatePropertyAccessor$2 = privatePropertyAccessor_1;
var _canceled$2 = privatePropertyAccessor$2("canceled");
var _timers$1 = _timers$2, _canceled$1 = _canceled$2, classChecks$3 = classChecks$Z;
var isArray = classChecks$3.isArray;
function cancelFunction$2(fn2) {
  var timers = _timers$1(fn2), timer;
  if (isArray(timers)) {
    while (timer = timers.shift()) {
      clearTimeout(timer);
    }
  }
  _canceled$1(fn2, true);
  return fn2;
}
var cancelFunction_1 = cancelFunction$2;
var Sugar$e = sugarCoreExports, cancelFunction$1 = cancelFunction_1;
Sugar$e.Function.defineInstance({
  "cancel": function(fn2) {
    return cancelFunction$1(fn2);
  }
});
Sugar$e.Function.cancel;
var _timers = _timers$2, _canceled = _canceled$2, coercePositiveInteger = coercePositiveInteger_1;
function setDelay$4(fn2, ms, after, scope, args) {
  ms = coercePositiveInteger(ms || 0);
  if (!_timers(fn2)) {
    _timers(fn2, []);
  }
  _canceled(fn2, false);
  _timers(fn2).push(setTimeout(function() {
    if (!_canceled(fn2)) {
      after.apply(scope, args || []);
    }
  }, ms));
}
var setDelay_1 = setDelay$4;
var Sugar$d = sugarCoreExports, setDelay$3 = setDelay_1, cancelFunction = cancelFunction_1;
Sugar$d.Function.defineInstance({
  "debounce": function(fn2, ms) {
    function debounced() {
      var args = [];
      for (var $i = 0, $len = arguments.length; $i < $len; $i++)
        args.push(arguments[$i]);
      cancelFunction(debounced);
      setDelay$3(debounced, ms, fn2, this, args);
    }
    return debounced;
  }
});
Sugar$d.Function.debounce;
var Sugar$c = sugarCoreExports, setDelay$2 = setDelay_1;
Sugar$c.Function.defineInstanceWithArguments({
  "delay": function(fn2, ms, args) {
    setDelay$2(fn2, ms, fn2, fn2, args);
    return fn2;
  }
});
Sugar$c.Function.delay;
var Sugar$b = sugarCoreExports, setDelay$1 = setDelay_1;
Sugar$b.Function.defineInstanceWithArguments({
  "every": function(fn2, ms, args) {
    function execute() {
      setDelay$1(fn2, ms, execute);
      fn2.apply(fn2, args);
    }
    setDelay$1(fn2, ms, execute);
    return fn2;
  }
});
Sugar$b.Function.every;
var setDelay = setDelay_1, mathAliases$2 = mathAliases$z;
var max = mathAliases$2.max, ceil = mathAliases$2.ceil, round = mathAliases$2.round;
function createLazyFunction$2(fn2, ms, immediate, limit) {
  var queue = [], locked = false, execute, rounded, perExecution, result2;
  ms = ms || 1;
  limit = limit || Infinity;
  rounded = ceil(ms);
  perExecution = round(rounded / ms) || 1;
  execute = function() {
    var queueLength = queue.length, maxPerRound;
    if (queueLength == 0)
      return;
    maxPerRound = max(queueLength - perExecution, 0);
    while (queueLength > maxPerRound) {
      result2 = Function.prototype.apply.apply(fn2, queue.shift());
      queueLength--;
    }
    setDelay(lazy, rounded, function() {
      locked = false;
      execute();
    });
  };
  function lazy() {
    if (queue.length < limit - (locked && immediate ? 1 : 0)) {
      var args = [];
      for (var $i = 0, $len = arguments.length; $i < $len; $i++)
        args.push(arguments[$i]);
      queue.push([this, args]);
    }
    if (!locked) {
      locked = true;
      if (immediate) {
        execute();
      } else {
        setDelay(lazy, rounded, execute);
      }
    }
    return result2;
  }
  return lazy;
}
var createLazyFunction_1 = createLazyFunction$2;
var Sugar$a = sugarCoreExports, createLazyFunction$1 = createLazyFunction_1;
Sugar$a.Function.defineInstance({
  "lazy": function(fn2, ms, immediate, limit) {
    return createLazyFunction$1(fn2, ms, immediate, limit);
  }
});
Sugar$a.Function.lazy;
var privatePropertyAccessor$1 = privatePropertyAccessor_1;
var _lock$2 = privatePropertyAccessor$1("lock");
var privatePropertyAccessor = privatePropertyAccessor_1;
var _partial$2 = privatePropertyAccessor("partial");
var Sugar$9 = sugarCoreExports, _lock$1 = _lock$2, _partial$1 = _partial$2, classChecks$2 = classChecks$Z, mathAliases$1 = mathAliases$z;
var isNumber$2 = classChecks$2.isNumber, min$1 = mathAliases$1.min;
Sugar$9.Function.defineInstance({
  "lock": function(fn2, n) {
    var lockedFn;
    if (_partial$1(fn2)) {
      _lock$1(fn2, isNumber$2(n) ? n : null);
      return fn2;
    }
    lockedFn = function() {
      arguments.length = min$1(_lock$1(lockedFn), arguments.length);
      return fn2.apply(this, arguments);
    };
    _lock$1(lockedFn, isNumber$2(n) ? n : fn2.length);
    return lockedFn;
  }
});
Sugar$9.Function.lock;
function collectArguments$1() {
  var args = arguments, i = args.length, arr = new Array(i);
  while (i--) {
    arr[i] = args[i];
  }
  return arr;
}
var collectArguments_1 = collectArguments$1;
var serializeInternal = serializeInternal_1, coreUtilityAliases = coreUtilityAliases$M;
var hasOwn = coreUtilityAliases.hasOwn, getOwn = coreUtilityAliases.getOwn;
function createHashedMemoizeFunction$1(fn2, hashFn, limit) {
  var map2 = {}, refs = [], counter = 0;
  return function() {
    var hashObj = hashFn.apply(this, arguments);
    var key = serializeInternal(hashObj, refs);
    if (hasOwn(map2, key)) {
      return getOwn(map2, key);
    }
    if (counter === limit) {
      map2 = {};
      refs = [];
      counter = 0;
    }
    counter++;
    return map2[key] = fn2.apply(this, arguments);
  };
}
var createHashedMemoizeFunction_1 = createHashedMemoizeFunction$1;
var Sugar$8 = sugarCoreExports, classChecks$1 = classChecks$Z, deepGetProperty = deepGetProperty_1, collectArguments = collectArguments_1, createHashedMemoizeFunction = createHashedMemoizeFunction_1;
var isNumber$1 = classChecks$1.isNumber, isString = classChecks$1.isString;
Sugar$8.Function.defineInstance({
  "memoize": function(fn2, arg1, arg2) {
    var hashFn, limit, prop;
    if (isNumber$1(arg1)) {
      limit = arg1;
    } else {
      hashFn = arg1;
      limit = arg2;
    }
    if (isString(hashFn)) {
      prop = hashFn;
      hashFn = function(obj) {
        return deepGetProperty(obj, prop);
      };
    } else if (!hashFn) {
      hashFn = collectArguments;
    }
    return createHashedMemoizeFunction(fn2, hashFn, limit);
  }
});
Sugar$8.Function.memoize;
var Sugar$7 = sugarCoreExports;
Sugar$7.Function.defineInstance({
  "once": function(fn2) {
    var called = false, val;
    return function() {
      if (called) {
        return val;
      }
      called = true;
      return val = fn2.apply(this, arguments);
    };
  }
});
Sugar$7.Function.once;
var createInstanceFromPrototype$1 = Object.create || function(prototype) {
  var ctor = function() {
  };
  ctor.prototype = prototype;
  return new ctor();
};
var createInstanceFromPrototype_1 = createInstanceFromPrototype$1;
var Sugar$6 = sugarCoreExports, _lock = _lock$2, _partial = _partial$2, isDefined = isDefined_1, classChecks = classChecks$Z, mathAliases = mathAliases$z, isObjectType = isObjectType_1, createInstanceFromPrototype = createInstanceFromPrototype_1;
var isNumber = classChecks.isNumber, min = mathAliases.min;
Sugar$6.Function.defineInstanceWithArguments({
  "partial": function(fn2, curriedArgs) {
    var curriedLen = curriedArgs.length;
    var partialFn = function() {
      var argIndex = 0, applyArgs = [], self2 = this, lock = _lock(partialFn), result2, i;
      for (i = 0; i < curriedLen; i++) {
        var arg = curriedArgs[i];
        if (isDefined(arg)) {
          applyArgs[i] = arg;
        } else {
          applyArgs[i] = arguments[argIndex++];
        }
      }
      for (i = argIndex; i < arguments.length; i++) {
        applyArgs.push(arguments[i]);
      }
      if (lock === null) {
        lock = curriedLen;
      }
      if (isNumber(lock)) {
        applyArgs.length = min(applyArgs.length, lock);
      }
      if (self2 instanceof partialFn) {
        self2 = createInstanceFromPrototype(fn2.prototype);
        result2 = fn2.apply(self2, applyArgs);
        return isObjectType(result2) ? result2 : self2;
      }
      return fn2.apply(self2, applyArgs);
    };
    _partial(partialFn, true);
    return partialFn;
  }
});
Sugar$6.Function.partial;
var Sugar$5 = sugarCoreExports, createLazyFunction = createLazyFunction_1;
Sugar$5.Function.defineInstance({
  "throttle": function(fn2, ms) {
    return createLazyFunction(fn2, ms, true, 1);
  }
});
Sugar$5.Function.throttle;
var Sugar$4 = sugarCoreExports, escapeRegExp = escapeRegExp_1;
Sugar$4.RegExp.defineStatic({
  "escape": function(str) {
    return escapeRegExp(str);
  }
});
Sugar$4.RegExp.escape;
var Sugar$3 = sugarCoreExports, getRegExpFlags$2 = getRegExpFlags_1;
Sugar$3.RegExp.defineInstance({
  "addFlags": function(r, flags) {
    return RegExp(r.source, getRegExpFlags$2(r, flags));
  }
});
Sugar$3.RegExp.addFlags;
var Sugar$2 = sugarCoreExports, getRegExpFlags$1 = getRegExpFlags_1;
Sugar$2.RegExp.defineInstance({
  "getFlags": function(r) {
    return getRegExpFlags$1(r);
  }
});
Sugar$2.RegExp.getFlags;
var Sugar$1 = sugarCoreExports, allCharsReg = allCharsReg_1, getRegExpFlags = getRegExpFlags_1;
Sugar$1.RegExp.defineInstance({
  "removeFlags": function(r, flags) {
    var reg = allCharsReg(flags);
    return RegExp(r.source, getRegExpFlags(r).replace(reg, ""));
  }
});
Sugar$1.RegExp.removeFlags;
var Sugar = sugarCoreExports;
Sugar.RegExp.defineInstance({
  "setFlags": function(r, flags) {
    return RegExp(r.source, flags);
  }
});
Sugar.RegExp.setFlags;
var sugar = sugarCoreExports;
const sugar$1 = /* @__PURE__ */ getDefaultExportFromCjs(sugar);
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes2 = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique2 = [];
  classes2.forEach((c) => {
    if (unique2.indexOf(c) < 0)
      unique2.push(c);
  });
  return unique2.join(" ");
}
function wrapperClass(className = "") {
  if (!className)
    return "swiper-wrapper";
  if (!className.includes("swiper-wrapper"))
    return `swiper-wrapper ${className}`;
  return className;
}
const paramsList = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function getParams(obj = {}, splitEvents = true) {
  const params = {
    on: {}
  };
  const events2 = {};
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach((key) => {
    if (typeof obj[key] === "undefined")
      return;
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      if (splitEvents) {
        events2[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events: events2
  };
}
function mountSwiper({
  el,
  nextEl,
  prevEl,
  paginationEl,
  scrollbarEl,
  swiper
}, swiperParams) {
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams)
    return keys;
  const addKey = (key) => {
    if (keys.indexOf(key) < 0)
      keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join("") !== childrenKeys.join(""))
      addKey("children");
    if (oldChildren.length !== children.length)
      addKey("children");
  }
  const watchParams = paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, ""));
  watchParams.forEach((key) => {
    if (key in swiperParams && key in oldParams) {
      if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach((newKey) => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach((oldKey) => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey])
              addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}
function getChildren(originalSlots, slidesRef, oldSlidesRef) {
  if (originalSlots === void 0) {
    originalSlots = {};
  }
  const slides = [];
  const slots = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  const getSlidesFromElements = (els, slotName) => {
    if (!Array.isArray(els)) {
      return;
    }
    els.forEach((vnode) => {
      const isFragment = typeof vnode.type === "symbol";
      if (slotName === "default")
        slotName = "container-end";
      if (isFragment && vnode.children) {
        getSlidesFromElements(vnode.children, slotName);
      } else if (vnode.type && (vnode.type.name === "SwiperSlide" || vnode.type.name === "AsyncComponentWrapper")) {
        slides.push(vnode);
      } else if (slots[slotName]) {
        slots[slotName].push(vnode);
      }
    });
  };
  Object.keys(originalSlots).forEach((slotName) => {
    if (typeof originalSlots[slotName] !== "function")
      return;
    const els = originalSlots[slotName]();
    getSlidesFromElements(els, slotName);
  });
  oldSlidesRef.value = slidesRef.value;
  slidesRef.value = slides;
  return {
    slides,
    slots
  };
}
function updateSwiper({
  swiper,
  slides,
  passedParams,
  changedParams,
  nextEl,
  prevEl,
  scrollbarEl,
  paginationEl
}) {
  const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }
  if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = (mod) => {
    if (!swiper[mod])
      return;
    swiper[mod].destroy();
    if (mod === "navigation") {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = void 0;
      currentParams[mod].nextEl = void 0;
      swiper[mod].prevEl = void 0;
      swiper[mod].nextEl = void 0;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = void 0;
      swiper[mod].el = void 0;
    }
  };
  if (changedParams.includes("loop") && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach((key) => {
    if (isObject(currentParams[key]) && isObject(passedParams[key])) {
      extend(currentParams[key], passedParams[key]);
      if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes("children") && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized)
      thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
      paginationEl = document.createElement("div");
      paginationEl.classList.add("swiper-pagination");
      swiper.el.shadowEl.appendChild(paginationEl);
    }
    if (paginationEl)
      currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
      scrollbarEl = document.createElement("div");
      scrollbarEl.classList.add("swiper-scrollbar");
      swiper.el.shadowEl.appendChild(scrollbarEl);
    }
    if (scrollbarEl)
      currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === "string") {
        nextEl = document.createElement("div");
        nextEl.classList.add("swiper-button-next");
        swiper.el.shadowEl.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === "string") {
        prevEl = document.createElement("div");
        prevEl.classList.add("swiper-button-prev");
        swiper.el.shadowEl.appendChild(prevEl);
      }
    }
    if (nextEl)
      currentParams.navigation.nextEl = nextEl;
    if (prevEl)
      currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes("allowSlideNext")) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes("allowSlidePrev")) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes("direction")) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}
function renderVirtual(swiperRef, slides, virtualData) {
  if (!virtualData)
    return null;
  const getSlideIndex = (index) => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      slideIndex = slideIndex - slides.length;
    }
    return slideIndex;
  };
  const style = swiperRef.value.isHorizontal() ? {
    [swiperRef.value.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  const {
    from,
    to
  } = virtualData;
  const loopFrom = swiperRef.value.params.loop ? -slides.length : 0;
  const loopTo = swiperRef.value.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to) {
      slidesToRender.push(slides[getSlideIndex(i)]);
    }
  }
  return slidesToRender.map((slide2) => {
    if (!slide2.props)
      slide2.props = {};
    if (!slide2.props.style)
      slide2.props.style = {};
    slide2.props.swiperRef = swiperRef;
    slide2.props.style = style;
    return h(slide2.type, {
      ...slide2.props
    }, slide2.children);
  });
}
const updateOnVirtualData = (swiper) => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled)
    return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};
const Swiper2 = {
  name: "Swiper",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    wrapperTag: {
      type: String,
      default: "div"
    },
    modules: {
      type: Array,
      default: void 0
    },
    init: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    oneWayMovement: {
      type: Boolean,
      default: void 0
    },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: {
      type: Number,
      default: void 0
    },
    speed: {
      type: Number,
      default: void 0
    },
    cssMode: {
      type: Boolean,
      default: void 0
    },
    updateOnWindowResize: {
      type: Boolean,
      default: void 0
    },
    resizeObserver: {
      type: Boolean,
      default: void 0
    },
    nested: {
      type: Boolean,
      default: void 0
    },
    focusableElements: {
      type: String,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    height: {
      type: Number,
      default: void 0
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: void 0
    },
    userAgent: {
      type: String,
      default: void 0
    },
    url: {
      type: String,
      default: void 0
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: {
      type: Number,
      default: void 0
    },
    autoHeight: {
      type: Boolean,
      default: void 0
    },
    setWrapperSize: {
      type: Boolean,
      default: void 0
    },
    virtualTranslate: {
      type: Boolean,
      default: void 0
    },
    effect: {
      type: String,
      default: void 0
    },
    breakpoints: {
      type: Object,
      default: void 0
    },
    spaceBetween: {
      type: [Number, String],
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: {
      type: Number,
      default: void 0
    },
    slidesPerGroup: {
      type: Number,
      default: void 0
    },
    slidesPerGroupSkip: {
      type: Number,
      default: void 0
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: void 0
    },
    centeredSlides: {
      type: Boolean,
      default: void 0
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: void 0
    },
    slidesOffsetBefore: {
      type: Number,
      default: void 0
    },
    slidesOffsetAfter: {
      type: Number,
      default: void 0
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: void 0
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: void 0
    },
    watchOverflow: {
      type: Boolean,
      default: void 0
    },
    roundLengths: {
      type: Boolean,
      default: void 0
    },
    touchRatio: {
      type: Number,
      default: void 0
    },
    touchAngle: {
      type: Number,
      default: void 0
    },
    simulateTouch: {
      type: Boolean,
      default: void 0
    },
    shortSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipesRatio: {
      type: Number,
      default: void 0
    },
    longSwipesMs: {
      type: Number,
      default: void 0
    },
    followFinger: {
      type: Boolean,
      default: void 0
    },
    allowTouchMove: {
      type: Boolean,
      default: void 0
    },
    threshold: {
      type: Number,
      default: void 0
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: void 0
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: void 0
    },
    uniqueNavElements: {
      type: Boolean,
      default: void 0
    },
    resistance: {
      type: Boolean,
      default: void 0
    },
    resistanceRatio: {
      type: Number,
      default: void 0
    },
    watchSlidesProgress: {
      type: Boolean,
      default: void 0
    },
    grabCursor: {
      type: Boolean,
      default: void 0
    },
    preventClicks: {
      type: Boolean,
      default: void 0
    },
    preventClicksPropagation: {
      type: Boolean,
      default: void 0
    },
    slideToClickedSlide: {
      type: Boolean,
      default: void 0
    },
    loop: {
      type: Boolean,
      default: void 0
    },
    loopedSlides: {
      type: Number,
      default: void 0
    },
    loopPreventsSliding: {
      type: Boolean,
      default: void 0
    },
    rewind: {
      type: Boolean,
      default: void 0
    },
    allowSlidePrev: {
      type: Boolean,
      default: void 0
    },
    allowSlideNext: {
      type: Boolean,
      default: void 0
    },
    swipeHandler: {
      type: Boolean,
      default: void 0
    },
    noSwiping: {
      type: Boolean,
      default: void 0
    },
    noSwipingClass: {
      type: String,
      default: void 0
    },
    noSwipingSelector: {
      type: String,
      default: void 0
    },
    passiveListeners: {
      type: Boolean,
      default: void 0
    },
    containerModifierClass: {
      type: String,
      default: void 0
    },
    slideClass: {
      type: String,
      default: void 0
    },
    slideActiveClass: {
      type: String,
      default: void 0
    },
    slideVisibleClass: {
      type: String,
      default: void 0
    },
    slideNextClass: {
      type: String,
      default: void 0
    },
    slidePrevClass: {
      type: String,
      default: void 0
    },
    wrapperClass: {
      type: String,
      default: void 0
    },
    lazyPreloaderClass: {
      type: String,
      default: void 0
    },
    lazyPreloadPrevNext: {
      type: Number,
      default: void 0
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: void 0
    },
    observer: {
      type: Boolean,
      default: void 0
    },
    observeParents: {
      type: Boolean,
      default: void 0
    },
    observeSlideChildren: {
      type: Boolean,
      default: void 0
    },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: {
      type: Object,
      default: void 0
    },
    fadeEffect: {
      type: Object,
      default: void 0
    },
    flipEffect: {
      type: Object,
      default: void 0
    },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: {
      type: Object,
      default: void 0
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: {
      type: Object,
      default: void 0
    },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: {
      type: [Object],
      default: void 0
    },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
  setup(props, _ref) {
    let {
      slots: originalSlots,
      emit
    } = _ref;
    const {
      tag: Tag,
      wrapperTag: WrapperTag
    } = props;
    const containerClasses = ref("swiper");
    const virtualData = ref(null);
    const breakpointChanged = ref(false);
    const initializedRef = ref(false);
    const swiperElRef = ref(null);
    const swiperRef = ref(null);
    const oldPassedParamsRef = ref(null);
    const slidesRef = {
      value: []
    };
    const oldSlidesRef = {
      value: []
    };
    const nextElRef = ref(null);
    const prevElRef = ref(null);
    const paginationElRef = ref(null);
    const scrollbarElRef = ref(null);
    const {
      params: swiperParams,
      passedParams
    } = getParams(props, false);
    getChildren(originalSlots, slidesRef, oldSlidesRef);
    oldPassedParamsRef.value = passedParams;
    oldSlidesRef.value = slidesRef.value;
    const onBeforeBreakpoint = () => {
      getChildren(originalSlots, slidesRef, oldSlidesRef);
      breakpointChanged.value = true;
    };
    swiperParams.onAny = function(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      emit(event, ...args);
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(swiper, classes2) {
        containerClasses.value = classes2;
      }
    });
    const passParams = {
      ...swiperParams
    };
    delete passParams.wrapperClass;
    swiperRef.value = new Swiper$1(passParams);
    if (swiperRef.value.virtual && swiperRef.value.params.virtual.enabled) {
      swiperRef.value.virtual.slides = slidesRef.value;
      const extendWith = {
        cache: false,
        slides: slidesRef.value,
        renderExternal: (data) => {
          virtualData.value = data;
        },
        renderExternalUpdate: false
      };
      extend(swiperRef.value.params.virtual, extendWith);
      extend(swiperRef.value.originalParams.virtual, extendWith);
    }
    onUpdated(() => {
      if (!initializedRef.value && swiperRef.value) {
        swiperRef.value.emitSlidesClasses();
        initializedRef.value = true;
      }
      const {
        passedParams: newPassedParams
      } = getParams(props, false);
      const changedParams = getChangedParams(newPassedParams, oldPassedParamsRef.value, slidesRef.value, oldSlidesRef.value, (c) => c.props && c.props.key);
      oldPassedParamsRef.value = newPassedParams;
      if ((changedParams.length || breakpointChanged.value) && swiperRef.value && !swiperRef.value.destroyed) {
        updateSwiper({
          swiper: swiperRef.value,
          slides: slidesRef.value,
          passedParams: newPassedParams,
          changedParams,
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
          scrollbarEl: scrollbarElRef.value,
          paginationEl: paginationElRef.value
        });
      }
      breakpointChanged.value = false;
    });
    provide("swiper", swiperRef);
    watch(virtualData, () => {
      nextTick$1(() => {
        updateOnVirtualData(swiperRef.value);
      });
    });
    onMounted(() => {
      if (!swiperElRef.value)
        return;
      mountSwiper({
        el: swiperElRef.value,
        nextEl: nextElRef.value,
        prevEl: prevElRef.value,
        paginationEl: paginationElRef.value,
        scrollbarEl: scrollbarElRef.value,
        swiper: swiperRef.value
      }, swiperParams);
      emit("swiper", swiperRef.value);
    });
    onBeforeUnmount(() => {
      if (swiperRef.value && !swiperRef.value.destroyed) {
        swiperRef.value.destroy(true, false);
      }
    });
    function renderSlides(slides) {
      if (swiperParams.virtual) {
        return renderVirtual(swiperRef, slides, virtualData.value);
      }
      slides.forEach((slide2, index) => {
        if (!slide2.props)
          slide2.props = {};
        slide2.props.swiperRef = swiperRef;
        slide2.props.swiperSlideIndex = index;
      });
      return slides;
    }
    return () => {
      const {
        slides,
        slots
      } = getChildren(originalSlots, slidesRef, oldSlidesRef);
      return h(Tag, {
        ref: swiperElRef,
        class: uniqueClasses(containerClasses.value)
      }, [slots["container-start"], h(WrapperTag, {
        class: wrapperClass(swiperParams.wrapperClass)
      }, [slots["wrapper-start"], renderSlides(slides), slots["wrapper-end"]]), needsNavigation(props) && [h("div", {
        ref: prevElRef,
        class: "swiper-button-prev"
      }), h("div", {
        ref: nextElRef,
        class: "swiper-button-next"
      })], needsScrollbar(props) && h("div", {
        ref: scrollbarElRef,
        class: "swiper-scrollbar"
      }), needsPagination(props) && h("div", {
        ref: paginationElRef,
        class: "swiper-pagination"
      }), slots["container-end"]]);
    };
  }
};
const SwiperSlide = {
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: {
      type: Object,
      required: false
    },
    swiperSlideIndex: {
      type: Number,
      default: void 0,
      required: false
    },
    zoom: {
      type: Boolean,
      default: void 0,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false,
      required: false
    },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let eventAttached = false;
    const {
      swiperRef
    } = props;
    const slideElRef = ref(null);
    const slideClasses = ref("swiper-slide");
    const lazyLoaded = ref(false);
    function updateClasses(swiper, el, classNames) {
      if (el === slideElRef.value) {
        slideClasses.value = classNames;
      }
    }
    onMounted(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onBeforeUpdate(() => {
      if (eventAttached || !swiperRef || !swiperRef.value)
        return;
      swiperRef.value.on("_slideClass", updateClasses);
      eventAttached = true;
    });
    onUpdated(() => {
      if (!slideElRef.value || !swiperRef || !swiperRef.value)
        return;
      if (typeof props.swiperSlideIndex !== "undefined") {
        slideElRef.value.swiperSlideIndex = props.swiperSlideIndex;
      }
      if (swiperRef.value.destroyed) {
        if (slideClasses.value !== "swiper-slide") {
          slideClasses.value = "swiper-slide";
        }
      }
    });
    onBeforeUnmount(() => {
      if (!swiperRef || !swiperRef.value)
        return;
      swiperRef.value.off("_slideClass", updateClasses);
    });
    const slideData = computed(() => ({
      isActive: slideClasses.value.indexOf("swiper-slide-active") >= 0,
      isVisible: slideClasses.value.indexOf("swiper-slide-visible") >= 0,
      isPrev: slideClasses.value.indexOf("swiper-slide-prev") >= 0,
      isNext: slideClasses.value.indexOf("swiper-slide-next") >= 0
    }));
    provide("swiperSlide", slideData);
    const onLoad2 = () => {
      lazyLoaded.value = true;
    };
    return () => {
      return h(props.tag, {
        class: uniqueClasses(`${slideClasses.value}`),
        ref: slideElRef,
        "data-swiper-slide-index": typeof props.virtualIndex === "undefined" && swiperRef && swiperRef.value && swiperRef.value.params.loop ? props.swiperSlideIndex : props.virtualIndex,
        onLoadCapture: onLoad2
      }, props.zoom ? h("div", {
        class: "swiper-zoom-container",
        "data-swiper-zoom": typeof props.zoom === "number" ? props.zoom : void 0
      }, [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader"
      })]) : [slots.default && slots.default(slideData.value), props.lazy && !lazyLoaded.value && h("div", {
        class: "swiper-lazy-preloader"
      })]);
    };
  }
};
const _hoisted_1$7 = { class: "p-5 relative" };
const _hoisted_2$7 = ["data-slide-date", "data-date-full"];
const _hoisted_3$7 = { class: "block text-sm font-medium text-center" };
const _hoisted_4$6 = { class: "block text-xs font-light text-center" };
const _hoisted_5$6 = /* @__PURE__ */ createStaticVNode('<span class="cursor-pointer prev-schedule bg-white bg-opacity-80 absolute left-1 top-1/2 transform -translate-y-1/2 rounded-full z-39"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="w-8 h-8 text-black"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></span><span class="cursor-pointer next-schedule bg-white bg-opacity-80 absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full z-39"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="w-8 h-8 text-black"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span>', 2);
const _hoisted_7$6 = { class: "w-full" };
const _hoisted_8$5 = ["href"];
const _hoisted_9$5 = { class: "flex items-center group-hover:text-accent" };
const _hoisted_10$4 = { class: "min-w-fit" };
const _hoisted_11$3 = { class: "pl-5 pr-5 md:pr-32 relative" };
const _hoisted_12$3 = { class: "text-sm font-medium leading-6 line-clamp-2" };
const _hoisted_13$3 = { class: "min-w-max flex items-center bg-accent-2 group-hover:bg-accent-4 rounded px-2 group-hover:shadow py-1" };
const _hoisted_14$3 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512",
  class: "w-3 h-3"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
  })
], -1);
const _hoisted_15$3 = { class: "w-max text-xs font-medium px-2 py-1" };
const _sfc_main$7 = {
  __name: "ScheduledAnime",
  setup(__props) {
    Swiper$1.use(Navigation);
    const Api = inject("Api");
    const translation = reactive({
      episode: __("Episode")
    });
    const dataDate = ref([]);
    const animeScheduled = ref([]);
    const currentDay = sugar$1.Date.format(/* @__PURE__ */ new Date(), "%d");
    const start2 = sugar$1.Date.beginningOfMonth(/* @__PURE__ */ new Date());
    const end2 = currentDay < 25 ? sugar$1.Date.endOfMonth(/* @__PURE__ */ new Date()) : sugar$1.Date.endOfMonth(
      new Date(sugar$1.Date.advance(/* @__PURE__ */ new Date(), { months: 1 }))
    );
    const selectedDate = ref((/* @__PURE__ */ new Date()).toISOString());
    const userLocale = {
      code: __("en"),
      units: __(
        "millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s"
      ),
      months: __(
        "Jan:uary|,Feb:ruary|,Mar:ch|,Apr:il|,May,Jun:e|,Jul:y|,Aug:ust|,Sep:tember|t|,Oct:ober|,Nov:ember|,Dec:ember|"
      ),
      weekdays: __(
        "Sun:day|,Mon:day|,Tue:sday|,Wed:nesday|,Thu:rsday|,Fri:day|,Sat:urday|+weekend"
      )
    };
    sugar$1.Date.addLocale(userLocale);
    sugar$1.Date.setLocale(userLocale.code);
    const getDateArray = () => {
      let arr = [], date = new Date(start2), datend = new Date(end2);
      while (date <= datend) {
        const d = new Date(date);
        arr.push({
          day: sugar$1.Date.format(d, "%d"),
          name: sugar$1.Date.format(d, "%a"),
          month: sugar$1.Date.format(d, "%h"),
          full: d.toISOString()
        });
        date.setDate(date.getDate() + 1);
      }
      dataDate.value = arr;
    };
    const calculateDate = (date) => {
      const r = new Date(date);
      const ar = r.toLocaleTimeString().split(":").map((e) => {
        const splitted = e.split(" ");
        const single = e.length === 1 ? "0" + e : e;
        return splitted.length > 1 ? splitted[1] : single;
      });
      return `${ar[0]}:${ar[1]} ${ar[2]}`;
    };
    const swipeTo = (swiper) => {
      swiper.slideTo(currentDay - 1);
      const el = document.querySelector(`[data-slide-date="${currentDay - 1}"]`);
      el == null ? void 0 : el.classList.remove("bg-accent-3", "bg-opacity-10");
      el == null ? void 0 : el.classList.add("bg-accent-2", "bg-opacity-100");
    };
    const changeSwipe = (el) => {
      document.querySelectorAll("[data-slide-date]").forEach((e2) => {
        e2.classList.remove("bg-accent-2", "bg-opacity-100");
        e2.classList.add("bg-accent-3", "bg-opacity-10");
      });
      const e = el.target.closest("[data-slide-date]");
      selectedDate.value = e.getAttribute("data-date-full");
    };
    const getScheduledData = async (date) => {
      const d = new Date(date);
      const req = await Api({
        path: `episode/scheduled?day=${d.getDate()}&month=${d.getMonth() + 1}&year=${d.getFullYear()}`
      });
      if (!req) {
        animeScheduled.value = [];
        return;
      }
      animeScheduled.value = req;
      return;
    };
    watch(selectedDate, async (e) => {
      await getScheduledData(e);
    });
    getDateArray();
    getScheduledData(selectedDate.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$7, [
          createVNode(unref(Swiper2), {
            breakpoints: {
              "360": {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20
              },
              "640": {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 20
              },
              "1024": {
                slidesPerView: 7,
                slidesPerGroup: 1,
                spaceBetween: 20
              }
            },
            navigation: {
              nextEl: ".next-schedule",
              prevEl: ".prev-schedule"
            },
            onSwiper: swipeTo,
            "slide-to-clicked-slide": true,
            "space-between": 20
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dataDate), (date, idx) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: date.name + date.month,
                  onClick: changeSwipe,
                  class: "bg-overlay"
                }, {
                  default: withCtx(() => [
                    date ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      "data-slide-date": idx,
                      "data-date-full": date.full,
                      class: normalizeClass([
                        unref(selectedDate) === date.full ? "bg-accent-2 bg-opacity-100" : "bg-accent-3 bg-opacity-10",
                        "text-sm text-text-accent font-medium p-2 rounded shadow-sm cursor-pointer"
                      ])
                    }, [
                      createBaseVNode("span", _hoisted_3$7, toDisplayString(date.name), 1),
                      createBaseVNode("span", _hoisted_4$6, toDisplayString(date.month) + " " + toDisplayString(date.day), 1)
                    ], 10, _hoisted_2$7)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["navigation"]),
          _hoisted_5$6
        ]),
        createBaseVNode("div", _hoisted_7$6, [
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(animeScheduled), (episode) => {
              return openBlock(), createElementBlock("li", {
                key: episode.meta.number,
                class: "even:bg-overlay odd:bg-secondary bg-opacity-50"
              }, [
                createBaseVNode("a", {
                  href: `/anime/${episode.meta.parent_slug}`,
                  class: "p-3 flex items-center justify-between group"
                }, [
                  createBaseVNode("div", _hoisted_9$5, [
                    createBaseVNode("span", _hoisted_10$4, toDisplayString(calculateDate(episode.post.post_date)), 1),
                    createBaseVNode("span", _hoisted_11$3, [
                      createBaseVNode("h3", _hoisted_12$3, toDisplayString(episode.meta.parent_name), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_13$3, [
                    _hoisted_14$3,
                    createBaseVNode("span", _hoisted_15$3, toDisplayString(unref(translation).episode) + " " + toDisplayString(episode.meta.number), 1)
                  ])
                ], 8, _hoisted_8$5)
              ]);
            }), 128))
          ])
        ])
      ], 64);
    };
  }
};
const _hoisted_1$6 = ["data-kira-dropdown"];
const _hoisted_2$6 = ["data-kira-dropdown"];
const _hoisted_3$6 = {
  class: "text-sm overflow-auto",
  style: { "height": "15rem" }
};
const _hoisted_4$5 = { class: "flex items-center gap-2 flex-nowrap text-start cursor-pointer hover:bg-accent-4 px-2.5" };
const _hoisted_5$5 = ["id", "value", "onChange", "checked"];
const _hoisted_6$5 = ["for"];
const _hoisted_7$5 = { class: "material-icons-round text-lg w-max h-max absolute left-2 top-1/2 transform -translate-y-1/2" };
const _hoisted_8$4 = { class: "block w-full h-full ps-8 py-2 text-[13px] font-montserrat text-start" };
const _hoisted_9$4 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "ml-2 w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2",
  "aria-hidden": "true",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 9l-7 7-7-7"
  })
], -1);
const _sfc_main$6 = {
  __name: "dropdownCheckbox",
  props: {
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "multiple"
    },
    datafor: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default: []
    },
    singleSelected: {
      type: Object,
      default: {}
    },
    icon: {
      type: String,
      default: ""
    },
    btnClass: {
      type: String,
      default: ""
    },
    term: {
      type: String,
      default: ""
    }
  },
  emits: ["updateSelected"],
  setup(__props, { emit }) {
    const props = __props;
    const openedSelect = ref(false);
    const isSelected = (d) => {
      var _a2;
      if (props.type === "multiple") {
        const f = ((_a2 = props.selected) == null ? void 0 : _a2.map((e) => e.name)) || [];
        return f.includes(d.name);
      } else {
        const f = props.singleSelected;
        return (f == null ? void 0 : f.id) === d.id;
      }
    };
    const changeselect = (f) => {
      if (props.type === "multiple") {
        emit("updateSelected", f, props.datafor, props.type);
      } else {
        if (f.id === props.singleSelected.id) {
          emit("updateSelected", null, props.term, props.type);
        } else {
          emit("updateSelected", f, props.term, props.type);
        }
      }
    };
    onMounted(() => {
      addEventListener("click", (e) => {
        if (!e.target.closest(`[data-kira-dropdown="${props.datafor}"]`)) {
          openedSelect.value = false;
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "rounded border border-accent-2 bg-[#2d2e32] text-white relative w-[11.5rem]",
        "data-kira-dropdown": __props.datafor
      }, [
        createBaseVNode("div", {
          class: "absolute inset-x-0 top-full z-[100] -m-px rounded shadow-sm bg-[#2d2e32] text-white mt-1 pb-2.5",
          style: normalizeStyle(`display: ${openedSelect.value ? "block" : "none"};`),
          "data-kira-dropdown": __props.datafor
        }, [
          createBaseVNode("div", _hoisted_3$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (sel) => {
              return openBlock(), createElementBlock("div", _hoisted_4$5, [
                createBaseVNode("input", {
                  type: "checkbox",
                  id: `checkbox-item-${sel.id}-${__props.title}`,
                  value: sel.id,
                  onChange: ($event) => changeselect(sel),
                  checked: isSelected(sel)
                }, null, 40, _hoisted_5$5),
                createBaseVNode("label", {
                  for: `checkbox-item-${sel.id}-${__props.title}`,
                  class: "py-1.5 w-full text-xs font-medium font-montserrat cursor-pointer"
                }, toDisplayString(sel.name), 9, _hoisted_6$5)
              ]);
            }), 256))
          ])
        ], 12, _hoisted_2$6),
        createBaseVNode("div", {
          onClick: _cache[0] || (_cache[0] = ($event) => openedSelect.value = !openedSelect.value),
          class: "flex items-stretch justify-between flex-nowrap cursor-pointer"
        }, [
          createBaseVNode("span", _hoisted_7$5, toDisplayString(__props.icon), 1),
          createBaseVNode("span", _hoisted_8$4, toDisplayString(__props.title), 1),
          _hoisted_9$4
        ])
      ], 8, _hoisted_1$6);
    };
  }
};
const _hoisted_1$5 = { class: "w-full bg-gradient-to-t from-primary to-transparent rounded shadow shadow-primary" };
const _hoisted_2$5 = { class: "block relative w-full group kira-anime overflow-hidden" };
const _hoisted_3$5 = {
  key: 0,
  style: { "background-color": "var(--completed-status)" },
  class: "status_show"
};
const _hoisted_4$4 = ["src", "alt"];
const _hoisted_5$4 = { class: "flex items-center justify-between px-2 pb-2 absolute bottom-0 inset-x-0" };
const _hoisted_6$4 = {
  key: 0,
  class: "min-w-max"
};
const _hoisted_7$4 = { class: "text-text-accent block bg-accent-2/80 h-[25px] rounded-md text-[11px] p-1 mr-px font-medium" };
const _hoisted_8$3 = {
  key: 1,
  class: "text-[11px] px-2 py-1 rounded-md font-medium h-[25px] text-text-accent bg-accent-3 ml-auto"
};
const _hoisted_9$3 = ["data-tippy-content-to", "href"];
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-4xl" }, " play_arrow ", -1);
const _hoisted_11$2 = [
  _hoisted_10$3
];
const _hoisted_12$2 = {
  key: 1,
  class: "bg-orange-600 text-text-color text-sm font-medium px-2 py-1 rounded-md absolute top-2 right-2"
};
const _hoisted_13$2 = {
  style: { "min-height": "4.906rem" },
  class: "flex h-auto md:h-24 lg:h-24 flex-col justify-between p-2 bg-overlay relative"
};
const _hoisted_14$2 = ["href"];
const _hoisted_15$2 = { class: "text-xs text-text-color w-full line-clamp-1 py-1 sm:py-0 absolute bottom-0 text-opacity-75" };
const _hoisted_16$2 = { class: "inline-block md:my-3 uppercase" };
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("span", { class: "inline-block bg-gray-600 w-1 h-1 mx-2" }, null, -1);
const _hoisted_18$2 = { class: "inline-block md:my-3" };
const _sfc_main$5 = {
  __name: "useGrid",
  props: {
    anime: {
      type: Object,
      default: {}
    },
    usestatus: {
      type: Boolean,
      default: true
    },
    status: {
      type: Object,
      default: {}
    },
    watchlist: {
      type: Array,
      default: []
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "tv"
    },
    isWatchlist: {
      type: Boolean,
      default: false
    }
  },
  emits: ["watchlist-deleted"],
  setup(__props, { emit }) {
    const listattr = (attr) => {
      const a = attr == null ? void 0 : attr.map((e) => e.name);
      return a.join("/");
    };
    return (_ctx, _cache) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          __props.usestatus && ((_a2 = __props.status) == null ? void 0 : _a2.slug) === "completed" ? (openBlock(), createElementBlock("div", _hoisted_3$5, toDisplayString((_b2 = __props.status) == null ? void 0 : _b2.name), 1)) : createCommentVNode("", true),
          createBaseVNode("img", {
            src: __props.anime.image,
            loading: "lazy",
            alt: __props.anime.post.post_title,
            class: "absolute inset-0 object-cover w-full h-full rounded shadow"
          }, null, 8, _hoisted_4$4),
          createBaseVNode("span", {
            class: "absolute inset-0 top-1/4",
            style: normalizeStyle(`background: linear-gradient(
						0deg,
						rgba(var(--overlay-color), 1) 0,
						rgba(42, 44, 49, 0) 76%
					);`)
          }, null, 4),
          createBaseVNode("div", _hoisted_5$4, [
            ((_d2 = (_c2 = __props.anime.taxonomies) == null ? void 0 : _c2.anime_attribute) == null ? void 0 : _d2.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
              createBaseVNode("span", _hoisted_7$4, toDisplayString(listattr((_e2 = __props.anime.taxonomies) == null ? void 0 : _e2.anime_attribute)), 1)
            ])) : createCommentVNode("", true),
            __props.type.match(/series|tv|ova|ona/gi) && __props.anime.episodes ? (openBlock(), createElementBlock("span", _hoisted_8$3, " E" + toDisplayString(((_g = (_f = __props.anime.episodes) == null ? void 0 : _f.meta) == null ? void 0 : _g.number) ? __props.anime.episodes.meta.number : "?"), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("a", {
            "data-tippy-trigger": "",
            "data-tippy-content-to": __props.anime.anime_id,
            href: __props.anime.url,
            class: "group-hover:bg-opacity-75 bg-overlay hidden group-hover:flex items-center justify-center absolute inset-0"
          }, _hoisted_11$2, 8, _hoisted_9$3),
          __props.anime.meta.rate && __props.anime.meta.rate.match(/18/g) ? (openBlock(), createElementBlock("span", _hoisted_12$2, " 18+ ")) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_13$2, [
          createBaseVNode("a", {
            href: __props.anime.url,
            class: "text-sm line-clamp-2 font-medium leading-snug lg:leading-normal"
          }, toDisplayString(__props.anime.post.post_title), 9, _hoisted_14$2),
          createBaseVNode("div", _hoisted_15$2, [
            createBaseVNode("span", _hoisted_16$2, toDisplayString(__props.anime.taxonomies.type && __props.anime.taxonomies.type[0] ? __props.anime.taxonomies.type[0].name : "TV"), 1),
            _hoisted_17$2,
            createBaseVNode("span", _hoisted_18$2, toDisplayString(__props.anime.meta.duration ? __props.anime.meta.duration : "24M"), 1)
          ])
        ])
      ]);
    };
  }
};
const isMobile = () => matchMedia("(max-width: 1023.99px)").matches;
let rtm = null;
const reorganizeGrid = () => {
  const gridLists = [
    ...document.querySelectorAll(".kira-grid-listing"),
    ...document.querySelectorAll(".grid-anime-auto"),
    ...document.querySelectorAll(".kira-grid")
  ];
  for (const grid of gridLists) {
    const elWidth = parseFloat(getComputedStyle(grid).width.replace("px", ""));
    const p = isMobile() ? Math.ceil(elWidth / 208) : Math.floor(elWidth / 208);
    const g = Math.round(p);
    grid.style.gridTemplateColumns = `repeat(${g}, 1fr)`;
    grid.querySelectorAll(".kira-anime").forEach((el, index) => {
      const w = el.clientWidth;
      el.style = `padding-block-end: ${w * 0.38 + w}px`;
    });
  }
};
setTimeout(() => {
  reorganizeGrid();
}, 250);
window.addEventListener("resize", () => {
  clearTimeout(rtm);
  setTimeout(() => {
    reorganizeGrid();
  }, 200);
});
const _hoisted_1$4 = { class: "mt-10 p-4 w-full text-center bg-transparent rounded-lg" };
const _hoisted_2$4 = { class: "flex" };
const _hoisted_3$4 = { class: "relative w-full" };
const _hoisted_4$3 = ["placeholder"];
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("svg", {
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  })
], -1);
const _hoisted_6$3 = { class: "sr-only" };
const _hoisted_7$3 = { class: "grid grid-cols-2 md:flex items-center md:flex-wrap md:justify-center gap-2 mt-5" };
const _hoisted_8$2 = {
  key: 0,
  class: "w-full h-full py-5 px-2"
};
const _hoisted_9$2 = { class: "flex items-center justify-between flex-wrap lg:flex-nowrap" };
const _hoisted_10$2 = { class: "text-sm lg:text-lg py-2 text-accent-2 font-semibold" };
const _hoisted_11$1 = { class: "text-xs text-accent-2 font-medium" };
const _hoisted_12$1 = {
  key: 0,
  class: "kira-grid"
};
const _hoisted_13$1 = {
  key: 1,
  class: "flex items-center justify-center my-5 py-5"
};
const _hoisted_14$1 = {
  key: 2,
  class: "flex items-center justify-center gap-5 my-5"
};
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-xl" }, " arrow_back ", -1);
const _hoisted_16$1 = { key: 0 };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-xl" }, " arrow_forward ", -1);
const _hoisted_18$1 = {
  key: 1,
  class: "w-full min-h-fit py-10 flex items-center justify-center"
};
const _hoisted_19$1 = { role: "status" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "inline mr-2 w-8 h-8 text-gray-400 animate-spin fill-accent-2",
  viewBox: "0 0 100 101",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })
], -1);
const _hoisted_21$1 = { class: "sr-only" };
const _sfc_main$4 = {
  __name: "advancedSearch",
  setup(__props) {
    const configs = ref(inject("config"));
    const Api = inject("Api");
    const otherFilters = ref({});
    const selected = reactive({
      Status: null,
      Orderby: null,
      Order: null,
      Producer: null,
      Genre: null,
      Studio: null
    });
    const paged = ref(null);
    const searchQuery = ref(null);
    const searchResults = ref([]);
    const totalresults = ref(0);
    const translation = reactive({
      loading: __("Loading"),
      next_page: __("Next page"),
      no_anime: __("No Anime found"),
      previous: __("Previous page"),
      selected: (s) => sprintf(__("Selected %d"), s),
      search_anime: __("Search anime..."),
      page_results: (p, t) => sprintf(__("Page %1$d ~ %2$d Results"), p, t)
    });
    const searchTitle = ref("");
    const icons = ref({
      Year: "date_range",
      Status: "view_timeline",
      Order: "reorder",
      Genre: "category",
      Studio: "business",
      Producer: "category",
      Type: "grid_view",
      Season: "workspaces",
      Orderby: "sort_by_alpha"
    });
    const pages = ref(1);
    const loading = ref(true);
    watch(
      loading,
      () => setTimeout(() => {
        reorganizeGrid();
      }, 200)
    );
    const init = watchPostEffect((ocl) => {
      processSearchInit();
      ocl(() => loading.value = false);
    });
    const years = () => {
      const max2 = (/* @__PURE__ */ new Date()).getFullYear() + 1;
      const min2 = 1990;
      for (let i = max2; i >= min2; i--) {
        otherFilters.value["Year"] = [
          ...otherFilters.value["Year"] || [],
          { name: i.toString(), slug: i.toString(), id: i }
        ];
      }
    };
    const fillOtherFilter = async () => {
      otherFilters.value["Order"] = [
        {
          name: __("Ascending"),
          slug: "asc",
          id: 1
        },
        {
          name: __("Descending"),
          slug: "desc",
          id: 2
        }
      ];
      otherFilters.value["Orderby"] = [
        {
          name: __("Popular"),
          slug: "popular",
          id: 1
        },
        {
          name: __("Favorite"),
          slug: "favorite",
          id: 2
        },
        {
          name: __("Title"),
          slug: "title",
          id: 3
        },
        {
          name: __("Published"),
          slug: "date",
          id: 4
        },
        {
          name: __("Updated"),
          slug: "updated",
          id: 5
        }
      ];
      return true;
    };
    const processTerm = (term = []) => {
      if (!term)
        return term;
      return term.map((e) => ({ name: __(e.name), id: e.term_id }));
    };
    const addFilter = (filter2, name, type) => {
      var _a2;
      if (type === "multiple") {
        const n = ((_a2 = selected[name]) == null ? void 0 : _a2.filter((e) => e.id === filter2.id)) || [];
        if (!n || n.length === 0) {
          selected[name] = [...selected[name] || [], filter2];
        } else {
          selected[name] = selected[name].filter((e) => e.id !== filter2.id);
        }
      } else {
        if (filter2) {
          selected[name] = filter2;
        } else {
          delete selected[name];
        }
      }
    };
    apiFetch.use(apiFetch.createNonceMiddleware(user_action));
    const searchAnime = async (q, changePage = false) => {
      var _a2;
      let response;
      try {
        loading.value = true;
        const query = {
          keyword: q,
          query: q,
          single: {
            paged: changePage ? paged.value : 1
          },
          tax: []
        };
        const orderby = {
          updated: {
            orderby: "meta_value_num",
            meta_key: "kiranime_anime_updated"
          },
          favorite: {
            orderby: "meta_value_num",
            meta_key: "bookmark_count"
          },
          popular: {
            orderby: "meta_value_num",
            meta_key: "total_kiranime_views"
          },
          date: {
            orderby: "date"
          },
          title: {
            orderby: "title"
          }
        };
        for (const qu of Object.keys(selected)) {
          const lqu = qu.toLocaleLowerCase();
          if (lqu === "orderby") {
            query.single = { ...query.single, ...orderby[selected[qu].slug] };
          } else if (Array.isArray(selected[qu]) && ((_a2 = selected[qu]) == null ? void 0 : _a2.length) > 0) {
            query.tax.push(
              selected[qu].reduce((p, n) => {
                return {
                  taxonomy: lqu,
                  terms: p["terms"] ? [...p["terms"], n.id] : [n.id]
                };
              }, {})
            );
          } else {
            query.single[lqu] = selected[qu].slug;
          }
        }
        response = await Api({
          path: `anime/advancedsearch`,
          data: query,
          method: "post"
        });
        totalresults.value = (response == null ? void 0 : response.total) || 0;
        searchResults.value = (response == null ? void 0 : response.data) || [];
        if (totalresults.value === 0 && paged.value > 1) {
          return resetPage(1);
        }
        if ((response == null ? void 0 : response.pages) === 1) {
          paged.value = 1;
        }
        setTimeout(() => {
          listingTooltip();
        }, 500);
        changeUrl((response == null ? void 0 : response.pages) || 0, changePage);
      } catch (error) {
        setError(__("Something went wrong."));
      }
    };
    const changeUrl = (maxpage, changePage) => {
      searchTitle.value = sprintf(
        __("Result for %s"),
        searchQuery.value || __("All Anime")
      );
      let url = `${location.origin}${location.pathname}?asp=${changePage ? paged.value : 1}${searchQuery.value ? `&s_keyword=${searchQuery.value}` : ""}${selected["Orderby"] ? `&orderby=${selected["Orderby"].slug}` : ""}`;
      if (selected.Status) {
        url += getMultiQuery(selected.Status, "status");
      }
      if (selected.Genre) {
        url += getMultiQuery(selected.Genre, "genre");
      }
      if (selected.Producer) {
        url += getMultiQuery(selected.Producer, "producer");
      }
      url += selected["Order"] ? `&order=${selected["Order"].slug}` : "";
      pages.value = maxpage;
      window.history.pushState(null, null, url);
      loading.value = false;
    };
    const getMultiQuery = (query, name) => {
      return query && Array.isArray(query) ? `${query.map((e) => `&${name}[]=${e.name.toLocaleLowerCase()}`).join("")}` : "";
    };
    const resetPage = (val) => {
      paged.value = 1;
      searchAnime(searchQuery.value, false);
    };
    const getPage = (val) => {
      if (val)
        paged.value++;
      else
        paged.value--;
      searchAnime(searchQuery.value, true);
    };
    const processSearchInit = async () => {
      var _a2, _b2, _c2;
      await fillOtherFilter();
      years();
      for (const e of Object.keys(configs.value.terms)) {
        configs.value.terms[e] = processTerm(configs.value.terms[e]);
      }
      paged.value = configs.value.page || 1;
      searchQuery.value = configs.value.keyword || "";
      otherFilters.value["Season"] = (_a2 = configs.value.season) == null ? void 0 : _a2.map((e) => ({
        ...e,
        name: __(e.name)
      }));
      selected.Status = configs.value.status;
      console.log("status", configs.value.status);
      if (configs.value.genre) {
        selected.Genre = configs.value.genre;
        console.log("genre", selected);
      }
      if (configs.value.producer) {
        selected.Producer = configs.value.producer;
        console.log("producer", selected);
      }
      if (configs.value.studio) {
        selected.Studio = configs.value.studio;
      }
      selected.Orderby = ((_b2 = otherFilters.value["Orderby"].filter((e) => e.slug === configs.value.orderby)) == null ? void 0 : _b2.shift()) || otherFilters.value["Orderby"][0];
      selected.Order = ((_c2 = otherFilters.value["Order"].filter((e) => e.slug === configs.value.order)) == null ? void 0 : _c2.shift()) || otherFilters.value["Order"][1];
      await searchAnime(searchQuery.value);
      init();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("form", null, [
            createBaseVNode("div", _hoisted_2$4, [
              createBaseVNode("div", _hoisted_3$4, [
                withDirectives(createBaseVNode("input", {
                  type: "search",
                  id: "search-dropdown",
                  class: "block p-2.5 w-full z-20 text-sm bg-primary rounded-lg border border-gray-700 focus:ring-accent-2 focus:border-accent-3",
                  placeholder: translation.search_anime,
                  required: "false",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event)
                }, null, 8, _hoisted_4$3), [
                  [vModelText, searchQuery.value]
                ]),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = withModifiers(($event) => searchAnime(searchQuery.value), ["prevent"])),
                  type: "submit",
                  class: "absolute top-0 right-0 p-2.5 text-sm font-medium bg-accent-3 rounded-r-lg border border-accent-3 hover:bg-accent-4 focus:ring-2 flex items-center justify-center w-24 focus:outline-none focus:ring-accent-2"
                }, [
                  _hoisted_5$3,
                  createBaseVNode("span", _hoisted_6$3, toDisplayString(unref(__)("Search", "kiranime")), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_7$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(configs.value.terms), (term) => {
                var _a2, _b2;
                return openBlock(), createElementBlock(Fragment, { key: term }, [
                  ((_a2 = configs.value.terms[term]) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 0,
                    data: configs.value.terms[term],
                    selected: selected[term],
                    icon: icons.value[term],
                    onUpdateSelected: addFilter,
                    term,
                    "btn-class": "max-w-[50%] md:max-w-full",
                    title: ((_b2 = selected[term]) == null ? void 0 : _b2.length) > 0 ? translation.selected(selected[term].length) : unref(__)(term, "kiranime"),
                    datafor: term
                  }, null, 8, ["data", "selected", "icon", "term", "title", "datafor"])) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(otherFilters.value), (term) => {
                var _a2;
                return openBlock(), createElementBlock(Fragment, { key: term }, [
                  ((_a2 = otherFilters.value[term]) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 0,
                    data: otherFilters.value[term],
                    "single-selected": selected[term],
                    onUpdateSelected: addFilter,
                    term,
                    "btn-class": "max-w-[50%] md:max-w-full",
                    icon: icons.value[term],
                    title: selected[term] ? unref(__)(selected[term].name.toLowerCase(), "kiranime") : unref(__)(term.toLowerCase(), "kiranime"),
                    datafor: term,
                    type: "single"
                  }, null, 8, ["data", "single-selected", "term", "icon", "title", "datafor"])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])
          ])
        ]),
        !loading.value ? (openBlock(), createElementBlock("section", _hoisted_8$2, [
          createBaseVNode("div", _hoisted_9$2, [
            createBaseVNode("h3", _hoisted_10$2, toDisplayString(searchTitle.value), 1),
            createBaseVNode("span", _hoisted_11$1, toDisplayString(translation.page_results(paged.value, totalresults.value)), 1)
          ]),
          searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (anime2) => {
              var _a2, _b2, _c2;
              return openBlock(), createBlock(_sfc_main$5, {
                anime: anime2,
                status: (_a2 = anime2.taxonomies) == null ? void 0 : _a2.status[0],
                "use-tooltip": configs.value.data.useTooltip,
                usestatus: configs.value.data.usestatus === "1",
                watchlist: configs.value.data.watchlist,
                type: (_c2 = (_b2 = anime2.taxonomies) == null ? void 0 : _b2.type[0]) == null ? void 0 : _c2.slug
              }, null, 8, ["anime", "status", "use-tooltip", "usestatus", "watchlist", "type"]);
            }), 256))
          ])) : (openBlock(), createElementBlock("div", _hoisted_13$1, toDisplayString(translation.no_anime), 1)),
          pages.value > 1 ? (openBlock(), createElementBlock("ul", _hoisted_14$1, [
            createBaseVNode("li", null, [
              paged.value > 1 ? (openBlock(), createElementBlock("span", {
                key: 0,
                "aria-current": "page",
                onClick: _cache[2] || (_cache[2] = ($event) => getPage(false)),
                class: "flex items-center justify-around min-w-max px-3 py-2 bg-secondary/70 hover:bg-accent-2 hover:ring-1 ring-accent text-[13px] font-semibold gap-2 ring-0 rounded hover:shadow-md hover:drop-shadow-md cursor-pointer"
              }, [
                _hoisted_15$1,
                createTextVNode(" " + toDisplayString(translation.previous), 1)
              ])) : createCommentVNode("", true)
            ]),
            paged.value < pages.value ? (openBlock(), createElementBlock("li", _hoisted_16$1, [
              createBaseVNode("span", {
                "aria-current": "page",
                onClick: _cache[3] || (_cache[3] = ($event) => getPage(true)),
                class: "flex items-center justify-around min-w-max px-3 py-2 bg-secondary/70 hover:bg-accent-2 hover:ring-1 ring-accent text-[13px] font-semibold gap-2 ring-0 rounded hover:shadow-md hover:drop-shadow-md cursor-pointer"
              }, [
                createTextVNode(toDisplayString(translation.next_page) + " ", 1),
                _hoisted_17$1
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("div", _hoisted_18$1, [
          createBaseVNode("div", _hoisted_19$1, [
            _hoisted_20$1,
            createBaseVNode("span", _hoisted_21$1, toDisplayString(translation.loading) + "...", 1)
          ])
        ]))
      ], 64);
    };
  }
};
const episodeListAnime_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = ["href"];
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$3 = { class: "w-full h-full flex flex-col justify-end absolute" };
const _hoisted_4$2 = { class: "w-full font-normal text-base text-text-color px-2 py-1 bg-primary bg-opacity-75" };
const _hoisted_5$2 = { class: "w-full block pt-1 line-clamp-1 text-xs font-semibold" };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("div", { class: "hidden absolute inset-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-20" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl" }, " play_circle_filled ")
], -1);
const _hoisted_7$2 = { class: "absolute shadow-md drop-shadow-md w-max h-max px-4 py-1.5 bg-accent-3 text-text-color text-xs font-medium rounded-br-full" };
const _sfc_main$3 = {
  __name: "episodeListAnime",
  setup(__props) {
    Swiper$1.use(Navigation);
    const elist = ref([]);
    const adata = ref({});
    const translation = reactive({
      episode: __("Episode")
    });
    if (typeof episodes !== "undefined" && Array.isArray(episodes)) {
      elist.value = episodes;
    }
    if (typeof anime !== "undefined") {
      adata.value = anime;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Swiper2), {
        breakpoints: {
          "360": {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          "768": {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          "1024": {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20
          },
          "1920": {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: ".navigate-episode-list-next",
          prevEl: ".navigate-episode-list-prev"
        },
        "slide-to-clicked-slide": true,
        "space-between": 20
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(elist.value, (episode, idx) => {
            return openBlock(), createBlock(unref(SwiperSlide), {
              key: `episode-${idx}`
            }, {
              default: withCtx(() => [
                createBaseVNode("a", {
                  href: episode.url,
                  class: "w-full flex flex-row justify-end rounded-md shadow-md ring-primary bg-cover bg-no-repeat bg-center relative aspect-w-16 aspect-h-9 group overflow-hidden"
                }, [
                  createBaseVNode("div", {
                    class: "thumbnail_url_episode_list",
                    innerHTML: episode.thumbnail_url
                  }, null, 8, _hoisted_2$3),
                  createBaseVNode("div", _hoisted_3$3, [
                    createBaseVNode("div", _hoisted_4$2, [
                      createBaseVNode("span", _hoisted_5$2, toDisplayString(episode.meta.title || `${translation.episode} ${episode.meta.number || "?"}`), 1)
                    ])
                  ]),
                  _hoisted_6$2,
                  createBaseVNode("span", _hoisted_7$2, toDisplayString(`${translation.episode} ${episode.meta.number || "?"}`), 1)
                ], 8, _hoisted_1$3)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["navigation"]);
    };
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "page-numbers"
};
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$2 = ["onClick"];
const _sfc_main$2 = {
  __name: "pagination",
  props: {
    max_page: {
      type: Number,
      default: 1
    },
    current: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.max_page > 1 ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.max_page, (page) => {
          return openBlock(), createElementBlock("li", {
            key: page + "-wcl"
          }, [
            page === __props.current ? (openBlock(), createElementBlock("span", {
              key: 0,
              onClick: ($event) => _ctx.$emit("change:page", page),
              "aria-current": "page",
              class: normalizeClass(["page-numbers cursor-pointer", __props.current === page ? "current" : ""])
            }, toDisplayString(page), 11, _hoisted_2$2)) : (openBlock(), createElementBlock("a", {
              key: 1,
              onClick: ($event) => _ctx.$emit("change:page", page),
              "aria-current": "page",
              class: normalizeClass(["page-numbers cursor-pointer", __props.current === page ? "current" : ""])
            }, toDisplayString(page), 11, _hoisted_3$2))
          ]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
};
const Watchlist_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "flex items-center justify-between" };
const _hoisted_2$1 = { class: "flex items-center flex-wrap px-5 lg:px-0 gap-1 lg:gap-4" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { class: "block relative w-full group kira-anime overflow-hidden" };
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = { class: "flex items-center justify-between px-2 pb-2 absolute bottom-0 inset-x-0" };
const _hoisted_7$1 = {
  key: 0,
  class: "min-w-max"
};
const _hoisted_8$1 = { class: "text-text-accent block bg-accent-2/80 h-[25px] rounded-md text-[11px] p-1 mr-px font-medium" };
const _hoisted_9$1 = {
  key: 1,
  class: "text-[11px] px-2 py-1 rounded-md font-medium h-[25px] text-text-accent bg-accent-3"
};
const _hoisted_10$1 = ["href"];
const _hoisted_11 = ["data-tippy-content-to"];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", {
  class: "material-icons-round text-3xl",
  style: { "transform": "translate(5px, -5px)" }
}, " playlist_add_check_circle ", -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = {
  key: 0,
  class: "bg-orange-600 text-text-color text-sm font-medium px-2 py-1 rounded-md absolute top-2 right-2"
};
const _hoisted_15 = {
  style: { "min-height": "4.906rem" },
  class: "flex h-auto md:h-24 lg:h-24 flex-col justify-between p-2 bg-overlay"
};
const _hoisted_16 = ["href"];
const _hoisted_17 = { class: "text-xs text-text-color w-full line-clamp-1 py-1 sm:py-0 md:my-auto text-opacity-75" };
const _hoisted_18 = { class: "inline-block md:my-3 uppercase" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "inline-block bg-gray-600 w-1 h-1 mx-2" }, null, -1);
const _hoisted_20 = { class: "inline-block md:my-3" };
const _hoisted_21 = {
  key: 1,
  class: "col-span-full flex items-center justify-center py-4"
};
const _hoisted_22 = { class: "text-base font-medium" };
const _hoisted_23 = {
  key: 1,
  class: "lds-spinner"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_36 = [
  _hoisted_24,
  _hoisted_25,
  _hoisted_26,
  _hoisted_27,
  _hoisted_28,
  _hoisted_29,
  _hoisted_30,
  _hoisted_31,
  _hoisted_32,
  _hoisted_33,
  _hoisted_34,
  _hoisted_35
];
const _hoisted_37 = {
  key: 0,
  class: "w-full"
};
const _sfc_main$1 = {
  __name: "Watchlist",
  setup(__props) {
    const Api = inject("Api");
    const loading = ref(true);
    const animes = ref([]);
    const param = ref("");
    const selectedTab = ref("all");
    const per_page = ref(20);
    const page = ref(1);
    const translation = reactive({
      all: __("All"),
      no_anime: __("No anime found.")
    });
    const editGrid = ref([]);
    const gridwrapper = ref(null);
    const max_page = ref(1);
    const wlists = ref([
      {
        key: "plan_to_watch",
        name: "Plan to Watch"
      },
      {
        key: "watching",
        name: "Watching"
      },
      {
        key: "on_hold",
        name: "On-Hold"
      },
      {
        key: "completed",
        name: "Completed"
      },
      {
        key: "dropped",
        name: "Dropped"
      },
      {
        key: "remove",
        name: "Remove"
      }
    ]);
    watch(loading, (e) => {
      if (e) {
        gridwrapper.value.style.display = "flex";
      }
      setTimeout(() => {
        if (!e) {
          setKiraStyle();
        }
      }, 150);
    });
    if (watchlist_types !== "undefined") {
      wlists.value = typeof watchlist_types === "string" ? JSON.parse(watchlist_types) : watchlist_types;
    }
    param.value = animewatchlistparam || "all";
    const createWL = (id) => {
      const div2 = document.createElement("div");
      div2.classList.add("watchlist-tooltip");
      div2.dataset.tippySubContentFor = id;
      for (const type of watchlist_types) {
        const d = document.createElement("div");
        d.classList.add("wl-list-type");
        d.dataset.watchListKey = type.key;
        d.dataset.watchListId = id;
        d.textContent = type.name;
        d.onclick = function(ev) {
          return sentWL2(ev);
        };
        if (type.key === "remove") {
          d.classList.add("remove");
        }
        div2.appendChild(d);
      }
      return div2;
    };
    const setKiraStyle = () => {
      const elWidth = parseFloat(
        getComputedStyle(gridwrapper.value).width.replace("px", "")
      );
      const p = matchMedia("(max-width: 1023.99px)").matches ? Math.ceil(elWidth / 196) : Math.floor(elWidth / 196);
      const g = Math.round(p);
      gridwrapper.value.style.gridTemplateColumns = `repeat(${g}, 1fr)`;
      gridwrapper.value.style.display = "grid";
      gridwrapper.value.style.gap = "0.75rem";
      gridwrapper.value.querySelectorAll(".kira-anime").forEach((e) => {
        const w = e.clientWidth;
        e.style = `padding-block-end: ${w * 0.33 + w}px`;
      });
      tippy(gridwrapper.value.querySelectorAll("[data-tippy-trigger]"), {
        content: (ref2) => {
          const id = ref2.dataset["tippyContentTo"];
          return createWL(id);
        },
        interactive: true,
        animation: "scale",
        placement: "auto",
        appendTo: document.body,
        trigger: "click",
        arrow: true
      });
    };
    const getter = async (type) => {
      try {
        const res = await Api({
          path: `watchlist?type=${type || param.value}&per_page=${per_page.value}&page=${page.value}`
        });
        animes.value = res.animes;
        max_page.value = res.pages;
        loading.value = false;
      } catch (error) {
        setError(__("Something went wrong."));
      }
    };
    const changeTab = (tab) => {
      loading.value = true;
      selectedTab.value = tab;
      page.value = 1;
      getter(tab);
    };
    const changePage = (e) => {
      page.value = e;
      getter(selectedTab.value);
    };
    const removeFromDisplay = (id, key) => {
      animes.value = selectedTab.value === "all" && key !== "remove" ? animes.value : animes.value.filter((f) => f.anime_id !== id);
    };
    const sentWL2 = async (w) => {
      try {
        if (!isloggedIn) {
          document.querySelector("[data-login-toggle]").click();
          return;
        }
        const type = w.target.getAttribute("data-watch-list-key");
        const id = w.target.getAttribute("data-watch-list-id");
        const response = await Api({
          path: "watchlist",
          data: {
            user_id: current_user_id,
            type,
            anime_id: id
          },
          method: type === "remove" ? "DELETE" : "POST"
        });
        if (response) {
          setSuccess(response.message);
          removeFromDisplay(parseInt(id), type);
          return;
        }
        setError(response == null ? void 0 : response.message, "error");
        return;
      } catch (error) {
        setError(__("Something went wrong."));
      }
    };
    getter();
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = ($event) => changeTab("all")),
              class: normalizeClass(["watchlist", selectedTab.value === "all" ? "active" : ""])
            }, toDisplayString(translation.all), 3),
            (openBlock(true), createElementBlock(Fragment, null, renderList(wlists.value, (list) => {
              return openBlock(), createElementBlock(Fragment, null, [
                list.key !== "remove" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => changeTab(list.key),
                  class: normalizeClass(["watchlist", selectedTab.value === list.key ? "active" : ""])
                }, toDisplayString(list.name), 11, _hoisted_3$1)) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ])
        ]),
        createBaseVNode("div", {
          ref_key: "gridwrapper",
          ref: gridwrapper,
          class: normalizeClass(["w-full h-auto my-5", {
            "flex items-center justify-center min-h-300": loading.value || !animes.value
          }])
        }, [
          !loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            ((_a2 = animes.value) == null ? void 0 : _a2.length) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(animes.value, (anime2) => {
              var _a3, _b2, _c2, _d2, _e2, _f, _g, _h;
              return openBlock(), createElementBlock("div", {
                ref_for: true,
                ref_key: "editGrid",
                ref: editGrid,
                class: "w-full bg-gradient-to-t from-primary to-transparent rounded shadow shadow-primary",
                style: { "isolation": "isolate" }
              }, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("div", {
                    class: "absolute inset-0 z-1 watchlist-image-loaded",
                    innerHTML: anime2.image
                  }, null, 8, _hoisted_5$1),
                  createBaseVNode("span", {
                    class: "absolute inset-0 top-1/4",
                    style: normalizeStyle(`background: linear-gradient(
						0deg,
						rgba(var(--overlay-color), 1) 0,
						rgba(42, 44, 49, 0) 76%
					);`)
                  }, null, 4),
                  createBaseVNode("div", _hoisted_6$1, [
                    ((_b2 = (_a3 = anime2.taxonomies) == null ? void 0 : _a3.anime_attribute) == null ? void 0 : _b2.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                      createBaseVNode("span", _hoisted_8$1, toDisplayString((_d2 = (_c2 = anime2.taxonomies) == null ? void 0 : _c2.anime_attribute) == null ? void 0 : _d2.map((e) => e.name).join("/")), 1)
                    ])) : createCommentVNode("", true),
                    ((_f = (_e2 = anime2.taxonomies) == null ? void 0 : _e2.type[0]) == null ? void 0 : _f.slug.match(
                      /series|tv|ova|ona/gi
                    )) && ((_g = anime2.episodes) == null ? void 0 : _g.length) ? (openBlock(), createElementBlock("span", _hoisted_9$1, " E" + toDisplayString(anime2.episodes ? (_h = anime2.episodes.meta) == null ? void 0 : _h.number : "?"), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("a", {
                    href: anime2.url,
                    class: "absolute inset-0 group-hover:bg-white/50 transition-all duration-200 ease"
                  }, null, 8, _hoisted_10$1),
                  createBaseVNode("div", {
                    "data-tippy-trigger": "",
                    "data-tippy-content-to": anime2.anime_id,
                    class: "absolute text-accent-2 right-0 flex items-center justify-center bg-white/70 rounded-bl-full w-[3rem] h-[3rem] transition-all cursor-pointer duration-200 ease-in-out z-3 opacity-100 lg:opacity-0 group-hover:opacity-100"
                  }, _hoisted_13, 8, _hoisted_11),
                  anime2.meta.rate && anime2.meta.rate.match(/18/g) ? (openBlock(), createElementBlock("span", _hoisted_14, " 18+ ")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("a", {
                    href: anime2.url,
                    class: "text-sm line-clamp-2 font-medium leading-snug lg:leading-normal"
                  }, toDisplayString(anime2.post.post_title), 9, _hoisted_16),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("span", _hoisted_18, toDisplayString(anime2.taxonomies.type && anime2.taxonomies.type[0] ? anime2.taxonomies.type[0].name : "TV"), 1),
                    _hoisted_19,
                    createBaseVNode("span", _hoisted_20, toDisplayString(anime2.meta.duration ? anime2.meta.duration : "24M"), 1)
                  ])
                ])
              ], 512);
            }), 256)) : (openBlock(), createElementBlock("div", _hoisted_21, [
              createBaseVNode("span", _hoisted_22, toDisplayString(translation.no_anime), 1)
            ]))
          ], 64)) : (openBlock(), createElementBlock("div", _hoisted_23, _hoisted_36))
        ], 2),
        !loading.value && max_page.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_37, [
          createVNode(_sfc_main$2, {
            max_page: max_page.value,
            current: page.value,
            "onChange:page": _cache[1] || (_cache[1] = ($event) => changePage($event))
          }, null, 8, ["max_page", "current"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const Watched_vue_vue_type_style_index_0_scoped_138e5a8e_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-138e5a8e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "w-full grid gap-2 grid-episode-auto-watched px-2" };
const _hoisted_2 = { class: "w-full h-full relative group" };
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "w-full p-1 absolute z-[1] top-[75%] inset-x-0 bg-primary/75" };
const _hoisted_5 = { class: "text-xs font-medium line-clamp-1 py-0.5" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "hidden absolute inset-0 w-full h-full group-hover:flex items-center justify-center bg-primary bg-opacity-20 z-10" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl" }, " play_circle_filled ")
], -1));
const _hoisted_7 = { class: "absolute shadow-md drop-shadow-md w-max h-max px-4 py-1.5 bg-accent-3 text-text-color text-xs font-medium rounded-br-full" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "material-icons-round text-2xl" }, " cancel ", -1));
const _hoisted_10 = [
  _hoisted_9
];
const _sfc_main = {
  __name: "Watched",
  setup(__props) {
    const animes = ref([]);
    let checkLocal = localStorage.getItem("_cwl_current");
    checkLocal = checkLocal ? JSON.parse(checkLocal) : [];
    animes.value = checkLocal;
    const translation = reactive({
      episode: __("Episode")
    });
    const deleteWatched = (id) => {
      const current = animes.value;
      const newcurrent = current.filter((e) => e.id !== id);
      animes.value = newcurrent;
      localStorage.setItem("_cwl_current", JSON.stringify(newcurrent));
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(animes), (history) => {
          return openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("a", {
              href: history.last.url,
              class: "w-full flex flex-row justify-end rounded-md shadow-md ring-primary bg-cover bg-no-repeat bg-center relative aspect-w-16 aspect-h-9 group overflow-hidden",
              style: normalizeStyle(`background-image: url('${history.last.img}')`)
            }, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("span", _hoisted_5, toDisplayString(history.anime.title), 1)
              ]),
              _hoisted_6,
              createBaseVNode("span", _hoisted_7, toDisplayString(`${translation.episode} ${history.last.num || "?"}`), 1)
            ], 12, _hoisted_3),
            createBaseVNode("span", {
              onClick: ($event) => deleteWatched(history.id),
              class: "absolute z-20 cursor-pointer w-max h-max left-[85%] top-[1%] hidden group-hover:block hover:text-error"
            }, _hoisted_10, 8, _hoisted_8)
          ]);
        }), 256))
      ]);
    };
  }
};
const Watched = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-138e5a8e"]]);
if ("IntersectionObserver" in window) {
  let observer = new IntersectionObserver(
    async (entries, observer2) => {
      for (const entry of entries) {
        if (!entry.isIntersecting)
          continue;
        const el = entry.target;
        if (!el)
          continue;
        const config = JSON.parse(atob(el.dataset.lazyLoadComponentsId));
        const name = el.dataset.componentName;
        try {
          let path = "widget?name=" + name;
          const block = await apiFetch({
            path,
            method: "POST",
            data: config
          });
          if (!block.status) {
            setAlert(2, "Something went wrong.");
          }
          if (el && el.outerHTML) {
            el.outerHTML = block.result;
          }
          setTimeout(() => {
            if (name === "listing") {
              if (config.display === "grid") {
                reorganizeGrid();
              } else {
                startSlider();
              }
              listingTooltip();
            }
          }, 200);
          observer2.unobserve(el);
        } catch (error) {
          console.log(error);
        }
      }
    },
    {
      threshold: [0.5]
    }
  );
  (_e = document.querySelectorAll("[data-lazy-load-components-id]")) == null ? void 0 : _e.forEach((e) => observer.observe(e));
} else {
  (async () => {
    for (const entry of [
      ...document.querySelectorAll("[data-lazy-load-components-id]")
    ]) {
      const el = entry;
      const config = JSON.parse(atob(el.dataset.lazyLoadComponentsId));
      const name = el.dataset.componentName;
      try {
        let path = "widget?name=" + name;
        const block = await apiFetch({
          path,
          method: "POST",
          data: config
        });
        if (!block.status) {
          setAlert(2, "Something went wrong.");
        }
        if (el && el.outerHTML) {
          el.outerHTML = block.result;
        }
        setTimeout(() => {
          if (name === "listing") {
            if (config.display === "grid") {
              reorganizeGrid();
            } else {
              startSlider();
            }
            listingTooltip();
          }
        }, 200);
      } catch (error) {
        console.log(error);
      }
    }
  })();
}
const swiper_min = "";
const navigation_min = "";
const vueConfigs = [
  {
    name: "#episode-head-data",
    conf: "configs",
    el: _sfc_main$a,
    type: "base"
  },
  {
    name: "#episode-list-data",
    conf: null,
    el: _sfc_main$3
  },
  {
    name: "#history-area",
    conf: null,
    el: _sfc_main$9
  },
  {
    name: "#scheduled-anime",
    conf: null,
    el: _sfc_main$7
  },
  {
    name: "#profile-page",
    conf: "pu_dId",
    el: _sfc_main$8,
    type: "base"
  },
  {
    name: "#advanced-search",
    conf: "krSconf",
    el: _sfc_main$4,
    type: "base"
  },
  {
    name: "#continue-watching",
    conf: null,
    el: Watched
  },
  {
    name: "#watchlist-content",
    conf: null,
    el: _sfc_main$1
  }
];
for (const app of vueConfigs) {
  try {
    if (document.querySelector(app.name)) {
      const element = createApp(app.el);
      if (app.conf) {
        const conf = typeof app.type !== "undefined" && app.type === "base" ? JSON.parse(atob(window[app.conf])) : window[app.conf];
        element.provide("config", conf);
      }
      element.provide("Api", apiFetch).mount(app.name);
    }
  } catch (error) {
    console.log(error);
    setError(__("Something went wrong."));
  }
}
const sendView = async () => {
  try {
    await apiFetch({
      path: "anime/view?id=" + current_post_data_id,
      method: "POST"
    });
  } catch (error) {
    console.log("Failed to add views");
  }
};
if (typeof current_post_data_id !== "undefined" && current_post_data_id !== 0) {
  sendView();
}
