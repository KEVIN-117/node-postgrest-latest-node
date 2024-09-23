/*! For license information please see main.41409763.js.LICENSE.txt */
;(() => {
  'use strict'
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853)
        function o(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n])
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          )
        }
        var l = new Set(),
          i = {}
        function s(e, t) {
          u(e, t), u(e + 'Capture', t)
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e])
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {}
        function m(e, t, n, r, a, o, l) {
          ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l)
        }
        var g = {}
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1)
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0]
            g[t] = new m(t, 1, !1, e[1], null, !1, !1)
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1)
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1)
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1)
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1)
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
          })
        var v = /[\-:]([a-z])/g
        function b(e) {
          return e[1].toUpperCase()
        }
        function y(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null
          ;(null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      )
                    default:
                      return !1
                  }
                })(e, t, n, r)
              )
                return !0
              if (r) return !1
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t
                  case 4:
                    return !1 === t
                  case 5:
                    return isNaN(t)
                  case 6:
                    return isNaN(t) || 1 > t
                }
              return !1
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  )
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ''
                          : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(v, b)
            g[t] = new m(t, 1, !1, e, null, !1, !1)
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(v, b)
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(v, b)
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            )
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
          })
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          S = Symbol.for('react.fragment'),
          C = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          N = Symbol.for('react.provider'),
          _ = Symbol.for('react.context'),
          j = Symbol.for('react.forward_ref'),
          P = Symbol.for('react.suspense'),
          z = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          T = Symbol.for('react.lazy')
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
        var R = Symbol.for('react.offscreen')
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker')
        var M = Symbol.iterator
        function D(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (M && e[M]) || e['@@iterator'])
              ? e
              : null
        }
        var O,
          I = Object.assign
        function F(e) {
          if (void 0 === O)
            try {
              throw Error()
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/)
              O = (t && t[1]) || ''
            }
          return '\n' + O + e
        }
        var A = !1
        function U(e, t) {
          if (!e || A) return ''
          A = !0
          var n = Error.prepareStackTrace
          Error.prepareStackTrace = void 0
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, [])
                } catch (u) {
                  var r = u
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (u) {
                  r = u
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (u) {
                r = u
              }
              e()
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var a = u.stack.split('\n'),
                  o = r.stack.split('\n'),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = '\n' + a[l].replace(' at new ', ' at ')
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        )
                      }
                    } while (1 <= l && 0 <= i)
                  break
                }
            }
          } finally {
            ;(A = !1), (Error.prepareStackTrace = n)
          }
          return (e = e ? e.displayName || e.name : '') ? F(e) : ''
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return F(e.type)
            case 16:
              return F('Lazy')
            case 13:
              return F('Suspense')
            case 19:
              return F('SuspenseList')
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1))
            case 11:
              return (e = U(e.type.render, !1))
            case 1:
              return (e = U(e.type, !0))
            default:
              return ''
          }
        }
        function V(e) {
          if (null == e) return null
          if ('function' === typeof e) return e.displayName || e.name || null
          if ('string' === typeof e) return e
          switch (e) {
            case S:
              return 'Fragment'
            case k:
              return 'Portal'
            case E:
              return 'Profiler'
            case C:
              return 'StrictMode'
            case P:
              return 'Suspense'
            case z:
              return 'SuspenseList'
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || 'Context') + '.Consumer'
              case N:
                return (e._context.displayName || 'Context') + '.Provider'
              case j:
                var t = e.render
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                )
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || 'Memo'
              case T:
                ;(t = e._payload), (e = e._init)
                try {
                  return V(e(t))
                } catch (n) {}
            }
          return null
        }
        function H(e) {
          var t = e.type
          switch (e.tag) {
            case 24:
              return 'Cache'
            case 9:
              return (t.displayName || 'Context') + '.Consumer'
            case 10:
              return (t._context.displayName || 'Context') + '.Provider'
            case 18:
              return 'DehydratedFragment'
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              )
            case 7:
              return 'Fragment'
            case 5:
              return t
            case 4:
              return 'Portal'
            case 3:
              return 'Root'
            case 6:
              return 'Text'
            case 16:
              return V(t)
            case 8:
              return t === C ? 'StrictMode' : 'Mode'
            case 22:
              return 'Offscreen'
            case 12:
              return 'Profiler'
            case 21:
              return 'Scope'
            case 13:
              return 'Suspense'
            case 19:
              return 'SuspenseList'
            case 25:
              return 'TracingMarker'
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null
              if ('string' === typeof t) return t
          }
          return null
        }
        function $(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e
            default:
              return ''
          }
        }
        function W(e) {
          var t = e.type
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          )
        }
        function Z(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t]
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  o = n.set
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this)
                    },
                    set: function (e) {
                      ;(r = '' + e), o.call(this, e)
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r
                    },
                    setValue: function (e) {
                      r = '' + e
                    },
                    stopTracking: function () {
                      ;(e._valueTracker = null), delete e[t]
                    },
                  }
                )
              }
            })(e))
        }
        function Q(e) {
          if (!e) return !1
          var t = e._valueTracker
          if (!t) return !0
          var n = t.getValue(),
            r = ''
          return (
            e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          )
        }
        function G(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }
        function q(e, t) {
          var n = t.checked
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          })
        }
        function K(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked
          ;(n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            })
        }
        function Y(e, t) {
          null != (t = t.checked) && y(e, 'checked', t, !1)
        }
        function X(e, t) {
          Y(e, t)
          var n = $(t.value),
            r = t.type
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n)
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value')
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked)
        }
        function J(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return
            ;(t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t)
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n)
        }
        function ee(e, t, n) {
          ;('number' === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
        }
        var te = Array.isArray
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {}
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0)
          } else {
            for (n = '' + $(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                )
              null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91))
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          })
        }
        function ae(e, t) {
          var n = t.value
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92))
              if (te(n)) {
                if (1 < n.length) throw Error(o(93))
                n = n[0]
              }
              t = n
            }
            null == t && (t = ''), (n = t)
          }
          e._wrapperState = { initialValue: $(n) }
        }
        function oe(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue)
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r)
        }
        function le(e) {
          var t = e.textContent
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t)
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg'
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML'
            default:
              return 'http://www.w3.org/1999/xhtml'
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : e
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild)
                for (; t.firstChild; ) e.appendChild(t.firstChild)
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t)
                  })
                }
              : ce)
        function fe(e, t) {
          if (t) {
            var n = e.firstChild
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O']
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
                'number' !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ('' + t).trim()
              : t + 'px'
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r)
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a)
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e])
          })
        })
        var ve = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        )
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e))
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60))
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61))
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(o(62))
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1
            default:
              return !0
          }
        }
        var we = null
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          )
        }
        var ke = null,
          Se = null,
          Ce = null
        function Ee(e) {
          if ((e = ya(e))) {
            if ('function' !== typeof ke) throw Error(o(280))
            var t = e.stateNode
            t && ((t = xa(t)), ke(e.stateNode, e.type, t))
          }
        }
        function Ne(e) {
          Se ? (Ce ? Ce.push(e) : (Ce = [e])) : (Se = e)
        }
        function _e() {
          if (Se) {
            var e = Se,
              t = Ce
            if (((Ce = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e])
          }
        }
        function je(e, t) {
          return e(t)
        }
        function Pe() {}
        var ze = !1
        function Le(e, t, n) {
          if (ze) return e(t, n)
          ze = !0
          try {
            return je(e, t, n)
          } finally {
            ;(ze = !1), (null !== Se || null !== Ce) && (Pe(), _e())
          }
        }
        function Te(e, t) {
          var n = e.stateNode
          if (null === n) return null
          var r = xa(n)
          if (null === r) return null
          n = r[t]
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ;(r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r)
              break e
            default:
              e = !1
          }
          if (e) return null
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n))
          return n
        }
        var Re = !1
        if (c)
          try {
            var Me = {}
            Object.defineProperty(Me, 'passive', {
              get: function () {
                Re = !0
              },
            }),
              window.addEventListener('test', Me, Me),
              window.removeEventListener('test', Me, Me)
          } catch (ce) {
            Re = !1
          }
        function De(e, t, n, r, a, o, l, i, s) {
          var u = Array.prototype.slice.call(arguments, 3)
          try {
            t.apply(n, u)
          } catch (c) {
            this.onError(c)
          }
        }
        var Oe = !1,
          Ie = null,
          Fe = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              ;(Oe = !0), (Ie = e)
            },
          }
        function Be(e, t, n, r, a, o, l, i, s) {
          ;(Oe = !1), (Ie = null), De.apply(Ue, arguments)
        }
        function Ve(e) {
          var t = e,
            n = e
          if (e.alternate) for (; t.return; ) t = t.return
          else {
            e = t
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return)
            } while (e)
          }
          return 3 === t.tag ? n : null
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated
          }
          return null
        }
        function $e(e) {
          if (Ve(e) !== e) throw Error(o(188))
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate
              if (!t) {
                if (null === (t = Ve(e))) throw Error(o(188))
                return t !== e ? null : e
              }
              for (var n = e, r = t; ; ) {
                var a = n.return
                if (null === a) break
                var l = a.alternate
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r
                    continue
                  }
                  break
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return $e(a), e
                    if (l === r) return $e(a), t
                    l = l.sibling
                  }
                  throw Error(o(188))
                }
                if (n.return !== r.return) (n = a), (r = l)
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      ;(i = !0), (n = a), (r = l)
                      break
                    }
                    if (s === r) {
                      ;(i = !0), (r = a), (n = l)
                      break
                    }
                    s = s.sibling
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        ;(i = !0), (n = l), (r = a)
                        break
                      }
                      if (s === r) {
                        ;(i = !0), (r = l), (n = a)
                        break
                      }
                      s = s.sibling
                    }
                    if (!i) throw Error(o(189))
                  }
                }
                if (n.alternate !== r) throw Error(o(190))
              }
              if (3 !== n.tag) throw Error(o(188))
              return n.stateNode.current === n ? e : t
            })(e))
            ? Ze(e)
            : null
        }
        function Ze(e) {
          if (5 === e.tag || 6 === e.tag) return e
          for (e = e.child; null !== e; ) {
            var t = Ze(e)
            if (null !== t) return t
            e = e.sibling
          }
          return null
        }
        var Qe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0
              },
          it = Math.log,
          st = Math.LN2
        var ut = 64,
          ct = 4194304
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1
            case 2:
              return 2
            case 4:
              return 4
            case 8:
              return 8
            case 16:
              return 16
            case 32:
              return 32
            case 64:
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
              return 4194240 & e
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e
            case 134217728:
              return 134217728
            case 268435456:
              return 268435456
            case 536870912:
              return 536870912
            case 1073741824:
              return 1073741824
            default:
              return e
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes
          if (0 === n) return 0
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n
          if (0 !== l) {
            var i = l & ~a
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o))
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o))
          if (0 === r) return 0
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a)
          return r
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3
            default:
              return -1
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0
        }
        function mt() {
          var e = ut
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e)
          return t
        }
        function vt(e, t, n) {
          ;(e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n)
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t)
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r
            ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
          }
        }
        var yt = 0
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1
        }
        var xt,
          kt,
          St,
          Ct,
          Et,
          Nt = !1,
          _t = [],
          jt = null,
          Pt = null,
          zt = null,
          Lt = new Map(),
          Tt = new Map(),
          Rt = [],
          Mt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            )
        function Dt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              jt = null
              break
            case 'dragenter':
            case 'dragleave':
              Pt = null
              break
            case 'mouseover':
            case 'mouseout':
              zt = null
              break
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId)
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
              Tt.delete(t.pointerId)
          }
        }
        function Ot(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e)
        }
        function It(e) {
          var t = ba(e.target)
          if (null !== t) {
            var n = Ve(t)
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n)
                    })
                  )
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (null !== n)
              return null !== (t = ya(n)) && kt(t), (e.blockedOn = n), !1
            var r = new (n = e.nativeEvent).constructor(n.type, n)
            ;(we = r), n.target.dispatchEvent(r), (we = null), t.shift()
          }
          return !0
        }
        function At(e, t, n) {
          Ft(e) && n.delete(t)
        }
        function Ut() {
          ;(Nt = !1),
            null !== jt && Ft(jt) && (jt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== zt && Ft(zt) && (zt = null),
            Lt.forEach(At),
            Tt.forEach(At)
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)))
        }
        function Vt(e) {
          function t(t) {
            return Bt(t, e)
          }
          if (0 < _t.length) {
            Bt(_t[0], e)
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n]
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (
            null !== jt && Bt(jt, e),
              null !== Pt && Bt(Pt, e),
              null !== zt && Bt(zt, e),
              Lt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null)
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            It(n), null === n.blockedOn && Rt.shift()
        }
        var Ht = w.ReactCurrentBatchConfig,
          $t = !0
        function Wt(e, t, n, r) {
          var a = yt,
            o = Ht.transition
          Ht.transition = null
          try {
            ;(yt = 1), Qt(e, t, n, r)
          } finally {
            ;(yt = a), (Ht.transition = o)
          }
        }
        function Zt(e, t, n, r) {
          var a = yt,
            o = Ht.transition
          Ht.transition = null
          try {
            ;(yt = 4), Qt(e, t, n, r)
          } finally {
            ;(yt = a), (Ht.transition = o)
          }
        }
        function Qt(e, t, n, r) {
          if ($t) {
            var a = qt(e, t, n, r)
            if (null === a) $r(e, t, r, Gt, n), Dt(e, r)
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (jt = Ot(jt, e, t, n, r, a)), !0
                  case 'dragenter':
                    return (Pt = Ot(Pt, e, t, n, r, a)), !0
                  case 'mouseover':
                    return (zt = Ot(zt, e, t, n, r, a)), !0
                  case 'pointerover':
                    var o = a.pointerId
                    return Lt.set(o, Ot(Lt.get(o) || null, e, t, n, r, a)), !0
                  case 'gotpointercapture':
                    return (
                      (o = a.pointerId),
                      Tt.set(o, Ot(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    )
                }
                return !1
              })(a, e, t, n, r)
            )
              r.stopPropagation()
            else if ((Dt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ya(a)
                if (
                  (null !== o && xt(o),
                  null === (o = qt(e, t, n, r)) && $r(e, t, r, Gt, n),
                  o === a)
                )
                  break
                a = o
              }
              null !== a && r.stopPropagation()
            } else $r(e, t, r, null, n)
          }
        }
        var Gt = null
        function qt(e, t, n, r) {
          if (((Gt = null), null !== (e = ba((e = xe(r))))))
            if (null === (t = Ve(e))) e = null
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e
              e = null
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null
              e = null
            } else t !== e && (e = null)
          return (Gt = e), null
        }
        function Kt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4
            case 'message':
              switch (Xe()) {
                case Je:
                  return 1
                case et:
                  return 4
                case tt:
                case nt:
                  return 16
                case rt:
                  return 536870912
                default:
                  return 16
              }
            default:
              return 16
          }
        }
        var Yt = null,
          Xt = null,
          Jt = null
        function en() {
          if (Jt) return Jt
          var e,
            t,
            n = Xt,
            r = n.length,
            a = 'value' in Yt ? Yt.value : Yt.textContent,
            o = a.length
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0))
        }
        function tn(e) {
          var t = e.keyCode
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          )
        }
        function nn() {
          return !0
        }
        function rn() {
          return !1
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]))
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            )
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0
                var e = this.nativeEvent
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn))
              },
              stopPropagation: function () {
                var e = this.nativeEvent
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn))
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          )
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = I({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = I({}, dn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on)
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln
            },
          }),
          hn = an(pn),
          mn = an(I({}, pn, { dataTransfer: 0 })),
          gn = an(I({}, dn, { relatedTarget: 0 })),
          vn = an(
            I({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          bn = I({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData
            },
          }),
          yn = an(bn),
          wn = an(I({}, un, { data: 0 })),
          xn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          kn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Sn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          }
        function Cn(e) {
          var t = this.nativeEvent
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e]
        }
        function En() {
          return Cn
        }
        var Nn = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key
                if ('Unidentified' !== t) return t
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? kn[e.keyCode] || 'Unidentified'
                  : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? e.keyCode
                  : 0
            },
          }),
          _n = an(Nn),
          jn = an(
            I({}, pn, {
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
          ),
          Pn = an(
            I({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          zn = an(
            I({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Ln = I({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Ln),
          Rn = [9, 13, 27, 32],
          Mn = c && 'CompositionEvent' in window,
          Dn = null
        c && 'documentMode' in document && (Dn = document.documentMode)
        var On = c && 'TextEvent' in window && !Dn,
          In = c && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
          Fn = String.fromCharCode(32),
          An = !1
        function Un(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Rn.indexOf(t.keyCode)
            case 'keydown':
              return 229 !== t.keyCode
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0
            default:
              return !1
          }
        }
        function Bn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null
        }
        var Vn = !1
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
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
        }
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return 'input' === t ? !!Hn[e.type] : 'textarea' === t
        }
        function Wn(e, t, n, r) {
          Ne(r),
            0 < (t = Zr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }))
        }
        var Zn = null,
          Qn = null
        function Gn(e) {
          Fr(e, 0)
        }
        function qn(e) {
          if (Q(wa(e))) return e
        }
        function Kn(e, t) {
          if ('change' === e) return t
        }
        var Yn = !1
        if (c) {
          var Xn
          if (c) {
            var Jn = 'oninput' in document
            if (!Jn) {
              var er = document.createElement('div')
              er.setAttribute('oninput', 'return;'),
                (Jn = 'function' === typeof er.oninput)
            }
            Xn = Jn
          } else Xn = !1
          Yn = Xn && (!document.documentMode || 9 < document.documentMode)
        }
        function tr() {
          Zn && (Zn.detachEvent('onpropertychange', nr), (Qn = Zn = null))
        }
        function nr(e) {
          if ('value' === e.propertyName && qn(Qn)) {
            var t = []
            Wn(t, Qn, e, xe(e)), Le(Gn, t)
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (Zn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr()
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return qn(Qn)
        }
        function or(e, t) {
          if ('click' === e) return qn(t)
        }
        function lr(e, t) {
          if ('input' === e || 'change' === e) return qn(t)
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              }
        function sr(e, t) {
          if (ir(e, t)) return !0
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1
          var n = Object.keys(e),
            r = Object.keys(t)
          if (n.length !== r.length) return !1
          for (r = 0; r < n.length; r++) {
            var a = n[r]
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1
          }
          return !0
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild
          return e
        }
        function cr(e, t) {
          var n,
            r = ur(e)
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
              e = n
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = ur(r)
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          )
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break
            t = G((e = t.contentWindow).document)
          }
          return t
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          )
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length))
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection()
                var a = n.textContent.length,
                  o = Math.min(r.start, a)
                ;(r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o))
                var l = cr(n, r)
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)))
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          br = null,
          yr = !1
        function wr(e, t, n) {
          var r =
            n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
          yr ||
            null == gr ||
            gr !== G(r) ||
            ('selectionStart' in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = Zr(vr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))))
        }
        function xr(e, t) {
          var n = {}
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          )
        }
        var kr = {
            animationend: xr('Animation', 'AnimationEnd'),
            animationiteration: xr('Animation', 'AnimationIteration'),
            animationstart: xr('Animation', 'AnimationStart'),
            transitionend: xr('Transition', 'TransitionEnd'),
          },
          Sr = {},
          Cr = {}
        function Er(e) {
          if (Sr[e]) return Sr[e]
          if (!kr[e]) return e
          var t,
            n = kr[e]
          for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t])
          return e
        }
        c &&
          ((Cr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          'TransitionEvent' in window || delete kr.transitionend.transition)
        var Nr = Er('animationend'),
          _r = Er('animationiteration'),
          jr = Er('animationstart'),
          Pr = Er('transitionend'),
          zr = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            )
        function Tr(e, t) {
          zr.set(e, t), s(t, [e])
        }
        for (var Rr = 0; Rr < Lr.length; Rr++) {
          var Mr = Lr[Rr]
          Tr(Mr.toLowerCase(), 'on' + (Mr[0].toUpperCase() + Mr.slice(1)))
        }
        Tr(Nr, 'onAnimationEnd'),
          Tr(_r, 'onAnimationIteration'),
          Tr(jr, 'onAnimationStart'),
          Tr('dblclick', 'onDoubleClick'),
          Tr('focusin', 'onFocus'),
          Tr('focusout', 'onBlur'),
          Tr(Pr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          )
        var Dr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Or = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Dr),
          )
        function Ir(e, t, n) {
          var r = e.type || 'unknown-event'
          ;(e.currentTarget = n),
            (function (e, t, n, r, a, l, i, s, u) {
              if ((Be.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(o(198))
                var c = Ie
                ;(Oe = !1), (Ie = null), Fe || ((Fe = !0), (Ae = c))
              }
            })(r, t, void 0, e),
            (e.currentTarget = null)
        }
        function Fr(e, t) {
          t = 0 !== (4 & t)
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event
            r = r.listeners
            e: {
              var o = void 0
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    u = i.currentTarget
                  if (((i = i.listener), s !== o && a.isPropagationStopped()))
                    break e
                  Ir(a, i, u), (o = s)
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e
                  Ir(a, i, u), (o = s)
                }
            }
          }
          if (Fe) throw ((e = Ae), (Fe = !1), (Ae = null), e)
        }
        function Ar(e, t) {
          var n = t[ma]
          void 0 === n && (n = t[ma] = new Set())
          var r = e + '__bubble'
          n.has(r) || (Hr(t, e, 2, !1), n.add(r))
        }
        function Ur(e, t, n) {
          var r = 0
          t && (r |= 4), Hr(n, e, r, t)
        }
        var Br = '_reactListening' + Math.random().toString(36).slice(2)
        function Vr(e) {
          if (!e[Br]) {
            ;(e[Br] = !0),
              l.forEach(function (t) {
                'selectionchange' !== t &&
                  (Or.has(t) || Ur(t, !1, e), Ur(t, !0, e))
              })
            var t = 9 === e.nodeType ? e : e.ownerDocument
            null === t || t[Br] || ((t[Br] = !0), Ur('selectionchange', !1, t))
          }
        }
        function Hr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Wt
              break
            case 4:
              a = Zt
              break
            default:
              a = Qt
          }
          ;(n = a.bind(null, t, n, e)),
            (a = void 0),
            !Re ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1)
        }
        function $r(e, t, n, r, a) {
          var o = r
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return
              var l = r.tag
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return
                    l = l.return
                  }
                for (; null !== i; ) {
                  if (null === (l = ba(i))) return
                  if (5 === (s = l.tag) || 6 === s) {
                    r = o = l
                    continue e
                  }
                  i = i.parentNode
                }
              }
              r = r.return
            }
          Le(function () {
            var r = o,
              a = xe(n),
              l = []
            e: {
              var i = zr.get(e)
              if (void 0 !== i) {
                var s = cn,
                  u = e
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e
                  case 'keydown':
                  case 'keyup':
                    s = _n
                    break
                  case 'focusin':
                    ;(u = 'focus'), (s = gn)
                    break
                  case 'focusout':
                    ;(u = 'blur'), (s = gn)
                    break
                  case 'beforeblur':
                  case 'afterblur':
                    s = gn
                    break
                  case 'click':
                    if (2 === n.button) break e
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn
                    break
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn
                    break
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Pn
                    break
                  case Nr:
                  case _r:
                  case jr:
                    s = vn
                    break
                  case Pr:
                    s = zn
                    break
                  case 'scroll':
                    s = fn
                    break
                  case 'wheel':
                    s = Tn
                    break
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = yn
                    break
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = jn
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== i ? i + 'Capture' : null) : i
                c = []
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Te(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break
                  h = h.return
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, a)),
                  l.push({ event: i, listeners: c }))
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ba(u) && !u[ha])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ba(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = jn),
                    (m = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (h = 'pointer')),
                  (d = null == s ? i : wa(s)),
                  (p = null == u ? i : wa(u)),
                  ((i = new c(m, h + 'leave', s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ba(a) === r &&
                    (((c = new c(f, h + 'enter', u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++
                    for (p = 0, m = f; m; m = Qr(m)) p++
                    for (; 0 < h - p; ) (c = Qr(c)), h--
                    for (; 0 < p - h; ) (f = Qr(f)), p--
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e
                      ;(c = Qr(c)), (f = Qr(f))
                    }
                    c = null
                  }
                else c = null
                null !== s && Gr(l, i, s, c, !1),
                  null !== u && null !== d && Gr(l, d, u, c, !0)
              }
              if (
                'select' ===
                  (s =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === i.type)
              )
                var g = Kn
              else if ($n(i))
                if (Yn) g = lr
                else {
                  g = ar
                  var v = rr
                }
              else
                (s = i.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (g = or)
              switch (
                (g && (g = g(e, r))
                  ? Wn(l, g, n, a)
                  : (v && v(e, i, r),
                    'focusout' === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case 'focusin':
                  ;($n(v) || 'true' === v.contentEditable) &&
                    ((gr = v), (vr = r), (br = null))
                  break
                case 'focusout':
                  br = vr = gr = null
                  break
                case 'mousedown':
                  yr = !0
                  break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ;(yr = !1), wr(l, n, a)
                  break
                case 'selectionchange':
                  if (mr) break
                case 'keydown':
                case 'keyup':
                  wr(l, n, a)
              }
              var b
              if (Mn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var y = 'onCompositionStart'
                      break e
                    case 'compositionend':
                      y = 'onCompositionEnd'
                      break e
                    case 'compositionupdate':
                      y = 'onCompositionUpdate'
                      break e
                  }
                  y = void 0
                }
              else
                Vn
                  ? Un(e, n) && (y = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (y = 'onCompositionStart')
              y &&
                (In &&
                  'ko' !== n.locale &&
                  (Vn || 'onCompositionStart' !== y
                    ? 'onCompositionEnd' === y && Vn && (b = en())
                    : ((Xt = 'value' in (Yt = a) ? Yt.value : Yt.textContent),
                      (Vn = !0))),
                0 < (v = Zr(r, y)).length &&
                  ((y = new wn(y, e, null, n, a)),
                  l.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = Bn(n)) && (y.data = b))),
                (b = On
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Bn(t)
                        case 'keypress':
                          return 32 !== t.which ? null : ((An = !0), Fn)
                        case 'textInput':
                          return (e = t.data) === Fn && An ? null : e
                        default:
                          return null
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return 'compositionend' === e || (!Mn && Un(e, t))
                          ? ((e = en()), (Jt = Xt = Yt = null), (Vn = !1), e)
                          : null
                      switch (e) {
                        case 'paste':
                        default:
                          return null
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char
                            if (t.which) return String.fromCharCode(t.which)
                          }
                          return null
                        case 'compositionend':
                          return In && 'ko' !== t.locale ? null : t.data
                      }
                    })(e, n)) &&
                  0 < (r = Zr(r, 'onBeforeInput')).length &&
                  ((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = b))
            }
            Fr(l, t)
          })
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n }
        }
        function Zr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return)
          }
          return r
        }
        function Qr(e) {
          if (null === e) return null
          do {
            e = e.return
          } while (e && 5 !== e.tag)
          return e || null
        }
        function Gr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode
            if (null !== s && s === r) break
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = Te(n, o)) && l.unshift(Wr(n, s, i))
                : a || (null != (s = Te(n, o)) && l.push(Wr(n, s, i)))),
              (n = n.return)
          }
          0 !== l.length && e.push({ event: t, listeners: l })
        }
        var qr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g
        function Yr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(qr, '\n')
            .replace(Kr, '')
        }
        function Xr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(o(425))
        }
        function Jr() {}
        var ea = null,
          ta = null
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          )
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          oa = 'function' === typeof Promise ? Promise : void 0,
          la =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(ia)
                  }
                : ra
        function ia(e) {
          setTimeout(function () {
            throw e
          })
        }
        function sa(e, t) {
          var n = t,
            r = 0
          do {
            var a = n.nextSibling
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t)
                r--
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
            n = a
          } while (n)
          Vt(t)
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType
            if (1 === t || 3 === t) break
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
              if ('/$' === t) return null
            }
          }
          return e
        }
        function ca(e) {
          e = e.previousSibling
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e
                t--
              } else '/$' === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          ga = '__reactListeners$' + da,
          va = '__reactHandles$' + da
        function ba(e) {
          var t = e[fa]
          if (t) return t
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n
                  e = ca(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }
        function ya(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode
          throw Error(o(33))
        }
        function xa(e) {
          return e[pa] || null
        }
        var ka = [],
          Sa = -1
        function Ca(e) {
          return { current: e }
        }
        function Ea(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--)
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t)
        }
        var _a = {},
          ja = Ca(_a),
          Pa = Ca(!1),
          za = _a
        function La(e, t) {
          var n = e.type.contextTypes
          if (!n) return _a
          var r = e.stateNode
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext
          var a,
            o = {}
          for (a in n) o[a] = t[a]
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          )
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }
        function Ra() {
          Ea(Pa), Ea(ja)
        }
        function Ma(e, t, n) {
          if (ja.current !== _a) throw Error(o(168))
          Na(ja, t), Na(Pa, n)
        }
        function Da(e, t, n) {
          var r = e.stateNode
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || 'Unknown', a))
          return I({}, n, r)
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (za = ja.current),
            Na(ja, e),
            Na(Pa, Pa.current),
            !0
          )
        }
        function Ia(e, t, n) {
          var r = e.stateNode
          if (!r) throw Error(o(169))
          n
            ? ((e = Da(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Pa),
              Ea(ja),
              Na(ja, e))
            : Ea(Pa),
            Na(Pa, n)
        }
        var Fa = null,
          Aa = !1,
          Ua = !1
        function Ba(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e)
        }
        function Va() {
          if (!Ua && null !== Fa) {
            Ua = !0
            var e = 0,
              t = yt
            try {
              var n = Fa
              for (yt = 1; e < n.length; e++) {
                var r = n[e]
                do {
                  r = r(!0)
                } while (null !== r)
              }
              ;(Fa = null), (Aa = !1)
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Je, Va), a)
            } finally {
              ;(yt = t), (Ua = !1)
            }
          }
          return null
        }
        var Ha = [],
          $a = 0,
          Wa = null,
          Za = 0,
          Qa = [],
          Ga = 0,
          qa = null,
          Ka = 1,
          Ya = ''
        function Xa(e, t) {
          ;(Ha[$a++] = Za), (Ha[$a++] = Wa), (Wa = e), (Za = t)
        }
        function Ja(e, t, n) {
          ;(Qa[Ga++] = Ka), (Qa[Ga++] = Ya), (Qa[Ga++] = qa), (qa = e)
          var r = Ka
          e = Ya
          var a = 32 - lt(r) - 1
          ;(r &= ~(1 << a)), (n += 1)
          var o = 32 - lt(t) + a
          if (30 < o) {
            var l = a - (a % 5)
            ;(o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ka = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ya = o + e)
          } else (Ka = (1 << o) | (n << a) | r), (Ya = e)
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Ja(e, 1, 0))
        }
        function to(e) {
          for (; e === Wa; )
            (Wa = Ha[--$a]), (Ha[$a] = null), (Za = Ha[--$a]), (Ha[$a] = null)
          for (; e === qa; )
            (qa = Qa[--Ga]),
              (Qa[Ga] = null),
              (Ya = Qa[--Ga]),
              (Qa[Ga] = null),
              (Ka = Qa[--Ga]),
              (Qa[Ga] = null)
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null
        function lo(e, t) {
          var n = Lu(5, null, null, 0)
          ;(n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n)
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              )
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              )
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Ka, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              )
            default:
              return !1
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }
        function uo(e) {
          if (ao) {
            var t = ro
            if (t) {
              var n = t
              if (!io(e, t)) {
                if (so(e)) throw Error(o(418))
                t = ua(n.nextSibling)
                var r = no
                t && io(e, t)
                  ? lo(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e))
              }
            } else {
              if (so(e)) throw Error(o(418))
              ;(e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e)
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return
          no = e
        }
        function fo(e) {
          if (e !== no) return !1
          if (!ao) return co(e), (ao = !0), !1
          var t
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)))
            for (; t; ) lo(e, t), (t = ua(t.nextSibling))
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317))
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data
                  if ('/$' === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling)
                      break e
                    }
                    t--
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
                }
                e = e.nextSibling
              }
              ro = null
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null
          return !0
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling)
        }
        function ho() {
          ;(ro = no = null), (ao = !1)
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e)
        }
        var go = w.ReactCurrentBatchConfig
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309))
                var r = n.stateNode
              }
              if (!r) throw Error(o(147, e))
              var a = r,
                l = '' + e
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs
                    null === e ? delete t[l] : (t[l] = e)
                  }),
                  (t._stringRef = l),
                  t)
            }
            if ('string' !== typeof e) throw Error(o(284))
            if (!n._owner) throw Error(o(290, e))
          }
          return e
        }
        function bo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          )
        }
        function yo(e) {
          return (0, e._init)(e._payload)
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
            }
          }
          function n(n, r) {
            if (!e) return null
            for (; null !== r; ) t(n, r), (r = r.sibling)
            return null
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling)
            return e
          }
          function a(e, t) {
            return ((e = Ru(e, t)).index = 0), (e.sibling = null), e
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            )
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function u(e, t, n, r) {
            var o = n.type
            return o === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ('object' === typeof o &&
                      null !== o &&
                      o.$$typeof === T &&
                      yo(o) === t.type))
                ? (((r = a(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
                : (((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r)
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t)
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Iu('' + t, e.mode, n)).return = e), t
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  )
                case k:
                  return ((t = Fu(t, e.mode, n)).return = e), t
                case T:
                  return f(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || D(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t
              bo(e, t)
            }
            return null
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : s(e, t, '' + n, r)
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null
                case k:
                  return n.key === a ? c(e, t, n, r) : null
                case T:
                  return p(e, t, (a = n._init)(n._payload), r)
              }
              if (te(n) || D(n)) return null !== a ? null : d(e, t, n, r, null)
              bo(e, n)
            }
            return null
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, a)
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  )
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  )
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a)
              }
              if (te(r) || D(r)) return d(t, (e = e.get(n) || null), r, a, null)
              bo(t, r)
            }
            return null
          }
          function m(a, o, i, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling)
              var v = p(a, d, i[m], s)
              if (null === v) {
                null === d && (d = g)
                break
              }
              e && d && null === v.alternate && t(a, d),
                (o = l(v, o, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g)
            }
            if (m === i.length) return n(a, d), ao && Xa(a, m), u
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((o = l(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d))
              return ao && Xa(a, m), u
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = h(d, a, m, i[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (o = l(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g))
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e)
                }),
              ao && Xa(a, m),
              u
            )
          }
          function g(a, i, s, u) {
            var c = D(s)
            if ('function' !== typeof c) throw Error(o(150))
            if (null == (s = c.call(s))) throw Error(o(151))
            for (
              var d = (c = null), m = i, g = (i = 0), v = null, b = s.next();
              null !== m && !b.done;
              g++, b = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling)
              var y = p(a, m, b.value, u)
              if (null === y) {
                null === m && (m = v)
                break
              }
              e && m && null === y.alternate && t(a, m),
                (i = l(y, i, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (m = v)
            }
            if (b.done) return n(a, m), ao && Xa(a, g), c
            if (null === m) {
              for (; !b.done; g++, b = s.next())
                null !== (b = f(a, b.value, u)) &&
                  ((i = l(b, i, g)),
                  null === d ? (c = b) : (d.sibling = b),
                  (d = b))
              return ao && Xa(a, g), c
            }
            for (m = r(a, m); !b.done; g++, b = s.next())
              null !== (b = h(m, a, g, b.value, u)) &&
                (e &&
                  null !== b.alternate &&
                  m.delete(null === b.key ? g : b.key),
                (i = l(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b))
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e)
                }),
              ao && Xa(a, g),
              c
            )
          }
          return function e(r, o, l, s) {
            if (
              ('object' === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              'object' === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case x:
                  e: {
                    for (var u = l.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o)
                            break e
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === T &&
                            yo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = vo(r, c, l)),
                            (o.return = r),
                            (r = o)
                          break e
                        }
                        n(r, c)
                        break
                      }
                      t(r, c), (c = c.sibling)
                    }
                    l.type === S
                      ? (((o = Du(l.props.children, r.mode, s, l.key)).return =
                          r),
                        (r = o))
                      : (((s = Mu(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          s,
                        )).ref = vo(r, o, l)),
                        (s.return = r),
                        (r = s))
                  }
                  return i(r)
                case k:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o)
                          break e
                        }
                        n(r, o)
                        break
                      }
                      t(r, o), (o = o.sibling)
                    }
                    ;((o = Fu(l, r.mode, s)).return = r), (r = o)
                  }
                  return i(r)
                case T:
                  return e(r, o, (c = l._init)(l._payload), s)
              }
              if (te(l)) return m(r, o, l, s)
              if (D(l)) return g(r, o, l, s)
              bo(r, l)
            }
            return ('string' === typeof l && '' !== l) || 'number' === typeof l
              ? ((l = '' + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Iu(l, r.mode, s)).return = r), (r = o)),
                i(r))
              : n(r, o)
          }
        }
        var xo = wo(!0),
          ko = wo(!1),
          So = Ca(null),
          Co = null,
          Eo = null,
          No = null
        function _o() {
          No = Eo = Co = null
        }
        function jo(e) {
          var t = So.current
          Ea(So), (e._currentValue = t)
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break
            e = e.return
          }
        }
        function zo(e, t) {
          ;(Co = e),
            (No = Eo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (yi = !0), (e.firstContext = null))
        }
        function Lo(e) {
          var t = e._currentValue
          if (No !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Eo)
            ) {
              if (null === Co) throw Error(o(308))
              ;(Eo = e), (Co.dependencies = { lanes: 0, firstContext: e })
            } else Eo = Eo.next = e
          return t
        }
        var To = null
        function Ro(e) {
          null === To ? (To = [e]) : To.push(e)
        }
        function Mo(e, t, n, r) {
          var a = t.interleaved
          return (
            null === a
              ? ((n.next = n), Ro(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Do(e, r)
          )
        }
        function Do(e, t) {
          e.lanes |= t
          var n = e.alternate
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return)
          return 3 === n.tag ? n.stateNode : null
        }
        var Oo = !1
        function Io(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          }
        }
        function Fo(e, t) {
          ;(e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              })
        }
        function Ao(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }
        }
        function Uo(e, t, n) {
          var r = e.updateQueue
          if (null === r) return null
          if (((r = r.shared), 0 !== (2 & js))) {
            var a = r.pending
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Do(e, n)
            )
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ro(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Do(e, n)
          )
        }
        function Bo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n)
          }
        }
        function Vo(e, t) {
          var n = e.updateQueue,
            r = e.alternate
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next)
              } while (null !== n)
              null === o ? (a = o = t) : (o = o.next = t)
            } else a = o = t
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            )
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t)
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue
          Oo = !1
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending
          if (null !== i) {
            a.shared.pending = null
            var s = i,
              u = s.next
            ;(s.next = null), null === l ? (o = u) : (l.next = u), (l = s)
            var c = e.alternate
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s))
          }
          if (null !== o) {
            var d = a.baseState
            for (l = 0, c = u = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    })
                e: {
                  var h = e,
                    m = i
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f)
                        break e
                      }
                      d = h
                      break e
                    case 3:
                      h.flags = (-65537 & h.flags) | 128
                    case 0:
                      if (
                        null ===
                          (f =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e
                      d = I({}, d, f)
                      break e
                    case 2:
                      Oo = !0
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i))
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f)
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break
                ;(i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null)
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t
              do {
                ;(l |= a.lane), (a = a.next)
              } while (a !== t)
            } else null === o && (a.shared.lanes = 0)
            ;(Os |= l), (e.lanes = l), (e.memoizedState = d)
          }
        }
        function $o(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(o(191, a))
                a.call(r)
              }
            }
        }
        var Wo = {},
          Zo = Ca(Wo),
          Qo = Ca(Wo),
          Go = Ca(Wo)
        function qo(e) {
          if (e === Wo) throw Error(o(174))
          return e
        }
        function Ko(e, t) {
          switch ((Na(Go, t), Na(Qo, e), Na(Zo, Wo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '')
              break
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              )
          }
          Ea(Zo), Na(Zo, t)
        }
        function Yo() {
          Ea(Zo), Ea(Qo), Ea(Go)
        }
        function Xo(e) {
          qo(Go.current)
          var t = qo(Zo.current),
            n = se(t, e.type)
          t !== n && (Na(Qo, e), Na(Zo, n))
        }
        function Jo(e) {
          Qo.current === e && (Ea(Zo), Ea(Qo))
        }
        var el = Ca(0)
        function tl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null
              t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
          }
          return null
        }
        var nl = []
        function rl() {
          for (var e = 0; e < nl.length; e++)
            nl[e]._workInProgressVersionPrimary = null
          nl.length = 0
        }
        var al = w.ReactCurrentDispatcher,
          ol = w.ReactCurrentBatchConfig,
          ll = 0,
          il = null,
          sl = null,
          ul = null,
          cl = !1,
          dl = !1,
          fl = 0,
          pl = 0
        function hl() {
          throw Error(o(321))
        }
        function ml(e, t) {
          if (null === t) return !1
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1
          return !0
        }
        function gl(e, t, n, r, a, l) {
          if (
            ((ll = l),
            (il = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (al.current = null === e || null === e.memoizedState ? Jl : ei),
            (e = n(r, a)),
            dl)
          ) {
            l = 0
            do {
              if (((dl = !1), (fl = 0), 25 <= l)) throw Error(o(301))
              ;(l += 1),
                (ul = sl = null),
                (t.updateQueue = null),
                (al.current = ti),
                (e = n(r, a))
            } while (dl)
          }
          if (
            ((al.current = Xl),
            (t = null !== sl && null !== sl.next),
            (ll = 0),
            (ul = sl = il = null),
            (cl = !1),
            t)
          )
            throw Error(o(300))
          return e
        }
        function vl() {
          var e = 0 !== fl
          return (fl = 0), e
        }
        function bl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          }
          return (
            null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e), ul
          )
        }
        function yl() {
          if (null === sl) {
            var e = il.alternate
            e = null !== e ? e.memoizedState : null
          } else e = sl.next
          var t = null === ul ? il.memoizedState : ul.next
          if (null !== t) (ul = t), (sl = e)
          else {
            if (null === e) throw Error(o(310))
            ;(e = {
              memoizedState: (sl = e).memoizedState,
              baseState: sl.baseState,
              baseQueue: sl.baseQueue,
              queue: sl.queue,
              next: null,
            }),
              null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e)
          }
          return ul
        }
        function wl(e, t) {
          return 'function' === typeof t ? t(e) : t
        }
        function xl(e) {
          var t = yl(),
            n = t.queue
          if (null === n) throw Error(o(311))
          n.lastRenderedReducer = e
          var r = sl,
            a = r.baseQueue,
            l = n.pending
          if (null !== l) {
            if (null !== a) {
              var i = a.next
              ;(a.next = l.next), (l.next = i)
            }
            ;(r.baseQueue = a = l), (n.pending = null)
          }
          if (null !== a) {
            ;(l = a.next), (r = r.baseState)
            var s = (i = null),
              u = null,
              c = l
            do {
              var d = c.lane
              if ((ll & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action))
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f),
                  (il.lanes |= d),
                  (Os |= d)
              }
              c = c.next
            } while (null !== c && c !== l)
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (yi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r)
          }
          if (null !== (e = n.interleaved)) {
            a = e
            do {
              ;(l = a.lane), (il.lanes |= l), (Os |= l), (a = a.next)
            } while (a !== e)
          } else null === a && (n.lanes = 0)
          return [t.memoizedState, n.dispatch]
        }
        function kl(e) {
          var t = yl(),
            n = t.queue
          if (null === n) throw Error(o(311))
          n.lastRenderedReducer = e
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState
          if (null !== a) {
            n.pending = null
            var i = (a = a.next)
            do {
              ;(l = e(l, i.action)), (i = i.next)
            } while (i !== a)
            ir(l, t.memoizedState) || (yi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l)
          }
          return [l, r]
        }
        function Sl() {}
        function Cl(e, t) {
          var n = il,
            r = yl(),
            a = t(),
            l = !ir(r.memoizedState, a)
          if (
            (l && ((r.memoizedState = a), (yi = !0)),
            (r = r.queue),
            Ol(_l.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== ul && 1 & ul.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ll(9, Nl.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(o(349))
            0 !== (30 & ll) || El(n, t, a)
          }
          return a
        }
        function El(e, t, n) {
          ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e)
        }
        function Nl(e, t, n, r) {
          ;(t.value = n), (t.getSnapshot = r), jl(t) && Pl(e)
        }
        function _l(e, t, n) {
          return n(function () {
            jl(t) && Pl(e)
          })
        }
        function jl(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !ir(e, n)
          } catch (r) {
            return !0
          }
        }
        function Pl(e) {
          var t = Do(e, 1)
          null !== t && nu(t, e, 1, -1)
        }
        function zl(e) {
          var t = bl()
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Gl.bind(null, il, e)),
            [t.memoizedState, e]
          )
        }
        function Ll(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          )
        }
        function Tl() {
          return yl().memoizedState
        }
        function Rl(e, t, n, r) {
          var a = bl()
          ;(il.flags |= e),
            (a.memoizedState = Ll(1 | t, n, void 0, void 0 === r ? null : r))
        }
        function Ml(e, t, n, r) {
          var a = yl()
          r = void 0 === r ? null : r
          var o = void 0
          if (null !== sl) {
            var l = sl.memoizedState
            if (((o = l.destroy), null !== r && ml(r, l.deps)))
              return void (a.memoizedState = Ll(t, n, o, r))
          }
          ;(il.flags |= e), (a.memoizedState = Ll(1 | t, n, o, r))
        }
        function Dl(e, t) {
          return Rl(8390656, 8, e, t)
        }
        function Ol(e, t) {
          return Ml(2048, 8, e, t)
        }
        function Il(e, t) {
          return Ml(4, 2, e, t)
        }
        function Fl(e, t) {
          return Ml(4, 4, e, t)
        }
        function Al(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null)
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null
                })
              : void 0
        }
        function Ul(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ml(4, 4, Al.bind(null, t, e), n)
          )
        }
        function Bl() {}
        function Vl(e, t) {
          var n = yl()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e)
        }
        function Hl(e, t) {
          var n = yl()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e)
        }
        function $l(e, t, n) {
          return 0 === (21 & ll)
            ? (e.baseState && ((e.baseState = !1), (yi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (il.lanes |= n), (Os |= n), (e.baseState = !0)),
              t)
        }
        function Wl(e, t) {
          var n = yt
          ;(yt = 0 !== n && 4 > n ? n : 4), e(!0)
          var r = ol.transition
          ol.transition = {}
          try {
            e(!1), t()
          } finally {
            ;(yt = n), (ol.transition = r)
          }
        }
        function Zl() {
          return yl().memoizedState
        }
        function Ql(e, t, n) {
          var r = tu(e)
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ql(e))
          )
            Kl(t, n)
          else if (null !== (n = Mo(e, t, n, r))) {
            nu(n, e, r, eu()), Yl(n, t, r)
          }
        }
        function Gl(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }
          if (ql(e)) Kl(t, a)
          else {
            var o = e.alternate
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n)
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var s = t.interleaved
                  return (
                    null === s
                      ? ((a.next = a), Ro(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  )
                }
              } catch (u) {}
            null !== (n = Mo(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Yl(n, t, r))
          }
        }
        function ql(e) {
          var t = e.alternate
          return e === il || (null !== t && t === il)
        }
        function Kl(e, t) {
          dl = cl = !0
          var n = e.pending
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t)
        }
        function Yl(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n)
          }
        }
        var Xl = {
            readContext: Lo,
            useCallback: hl,
            useContext: hl,
            useEffect: hl,
            useImperativeHandle: hl,
            useInsertionEffect: hl,
            useLayoutEffect: hl,
            useMemo: hl,
            useReducer: hl,
            useRef: hl,
            useState: hl,
            useDebugValue: hl,
            useDeferredValue: hl,
            useTransition: hl,
            useMutableSource: hl,
            useSyncExternalStore: hl,
            useId: hl,
            unstable_isNewReconciler: !1,
          },
          Jl = {
            readContext: Lo,
            useCallback: function (e, t) {
              return (bl().memoizedState = [e, void 0 === t ? null : t]), e
            },
            useContext: Lo,
            useEffect: Dl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Rl(4194308, 4, Al.bind(null, t, e), n)
              )
            },
            useLayoutEffect: function (e, t) {
              return Rl(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Rl(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = bl()
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              )
            },
            useReducer: function (e, t, n) {
              var r = bl()
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ql.bind(null, il, e)),
                [r.memoizedState, e]
              )
            },
            useRef: function (e) {
              return (e = { current: e }), (bl().memoizedState = e)
            },
            useState: zl,
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              return (bl().memoizedState = e)
            },
            useTransition: function () {
              var e = zl(!1),
                t = e[0]
              return (e = Wl.bind(null, e[1])), (bl().memoizedState = e), [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = il,
                a = bl()
              if (ao) {
                if (void 0 === n) throw Error(o(407))
                n = n()
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349))
                0 !== (30 & ll) || El(r, t, n)
              }
              a.memoizedState = n
              var l = { value: n, getSnapshot: t }
              return (
                (a.queue = l),
                Dl(_l.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ll(9, Nl.bind(null, r, l, n, t), void 0, null),
                n
              )
            },
            useId: function () {
              var e = bl(),
                t = Ps.identifierPrefix
              if (ao) {
                var n = Ya
                ;(t =
                  ':' +
                  t +
                  'R' +
                  (n = (Ka & ~(1 << (32 - lt(Ka) - 1))).toString(32) + n)),
                  0 < (n = fl++) && (t += 'H' + n.toString(32)),
                  (t += ':')
              } else t = ':' + t + 'r' + (n = pl++).toString(32) + ':'
              return (e.memoizedState = t)
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Lo,
            useCallback: Vl,
            useContext: Lo,
            useEffect: Ol,
            useImperativeHandle: Ul,
            useInsertionEffect: Il,
            useLayoutEffect: Fl,
            useMemo: Hl,
            useReducer: xl,
            useRef: Tl,
            useState: function () {
              return xl(wl)
            },
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              return $l(yl(), sl.memoizedState, e)
            },
            useTransition: function () {
              return [xl(wl)[0], yl().memoizedState]
            },
            useMutableSource: Sl,
            useSyncExternalStore: Cl,
            useId: Zl,
            unstable_isNewReconciler: !1,
          },
          ti = {
            readContext: Lo,
            useCallback: Vl,
            useContext: Lo,
            useEffect: Ol,
            useImperativeHandle: Ul,
            useInsertionEffect: Il,
            useLayoutEffect: Fl,
            useMemo: Hl,
            useReducer: kl,
            useRef: Tl,
            useState: function () {
              return kl(wl)
            },
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              var t = yl()
              return null === sl
                ? (t.memoizedState = e)
                : $l(t, sl.memoizedState, e)
            },
            useTransition: function () {
              return [kl(wl)[0], yl().memoizedState]
            },
            useMutableSource: Sl,
            useSyncExternalStore: Cl,
            useId: Zl,
            unstable_isNewReconciler: !1,
          }
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n])
            return t
          }
          return t
        }
        function ri(e, t, n, r) {
          ;(n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals
            var r = eu(),
              a = tu(e),
              o = Ao(r, a)
            ;(o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nu(t, e, a, r), Bo(t, e, a))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals
            var r = eu(),
              a = tu(e),
              o = Ao(r, a)
            ;(o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nu(t, e, a, r), Bo(t, e, a))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var n = eu(),
              r = tu(e),
              a = Ao(n, r)
            ;(a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Uo(e, a, r)) && (nu(t, e, r, n), Bo(t, e, r))
          },
        }
        function oi(e, t, n, r, a, o, l) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o)
        }
        function li(e, t, n) {
          var r = !1,
            a = _a,
            o = t.contextType
          return (
            'object' === typeof o && null !== o
              ? (o = Lo(o))
              : ((a = Ta(t) ? za : ja.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : _a)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          )
        }
        function ii(e, t, n, r) {
          ;(e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null)
        }
        function si(e, t, n, r) {
          var a = e.stateNode
          ;(a.props = n), (a.state = e.memoizedState), (a.refs = {}), Io(e)
          var o = t.contextType
          'object' === typeof o && null !== o
            ? (a.context = Lo(o))
            : ((o = Ta(t) ? za : ja.current), (a.context = La(e, o))),
            (a.state = e.memoizedState),
            'function' === typeof (o = t.getDerivedStateFromProps) &&
              (ri(e, t, o, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308)
        }
        function ui(e, t) {
          try {
            var n = '',
              r = t
            do {
              ;(n += B(r)), (r = r.return)
            } while (r)
            var a = n
          } catch (o) {
            a = '\nError generating stack: ' + o.message + '\n' + o.stack
          }
          return { value: e, source: t, stack: a, digest: null }
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          }
        }
        function di(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout(function () {
              throw n
            })
          }
        }
        var fi = 'function' === typeof WeakMap ? WeakMap : Map
        function pi(e, t, n) {
          ;((n = Ao(-1, n)).tag = 3), (n.payload = { element: null })
          var r = t.value
          return (
            (n.callback = function () {
              $s || (($s = !0), (Ws = r)), di(0, t)
            }),
            n
          )
        }
        function hi(e, t, n) {
          ;(n = Ao(-1, n)).tag = 3
          var r = e.type.getDerivedStateFromError
          if ('function' === typeof r) {
            var a = t.value
            ;(n.payload = function () {
              return r(a)
            }),
              (n.callback = function () {
                di(0, t)
              })
          }
          var o = e.stateNode
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  'function' !== typeof r &&
                    (null === Zs ? (Zs = new Set([this])) : Zs.add(this))
                var e = t.stack
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                })
              }),
            n
          )
        }
        function mi(e, t, n) {
          var r = e.pingCache
          if (null === r) {
            r = e.pingCache = new fi()
            var a = new Set()
            r.set(t, a)
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a))
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e))
        }
        function gi(e) {
          do {
            var t
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e
            e = e.return
          } while (null !== e)
          return null
        }
        function vi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ao(-1, 1)).tag = 2), Uo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e)
        }
        var bi = w.ReactCurrentOwner,
          yi = !1
        function wi(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : xo(t, e.child, n, r)
        }
        function xi(e, t, n, r, a) {
          n = n.render
          var o = t.ref
          return (
            zo(t, a),
            (r = gl(e, t, n, r, o, a)),
            (n = vl()),
            null === e || yi
              ? (ao && n && eo(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          )
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var o = n.type
            return 'function' !== typeof o ||
              Tu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Mu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Si(e, t, o, r, a))
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps
            if (
              (n = null !== (n = n.compare) ? n : sr)(l, r) &&
              e.ref === t.ref
            )
              return $i(e, t, a)
          }
          return (
            (t.flags |= 1),
            ((e = Ru(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          )
        }
        function Si(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps
            if (sr(o, r) && e.ref === t.ref) {
              if (((yi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $i(e, t, a)
              0 !== (131072 & e.flags) && (yi = !0)
            }
          }
          return Ni(e, t, n, r, a)
        }
        function Ci(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Rs, Ts),
                (Ts |= n)
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Rs, Ts),
                  (Ts |= e),
                  null
                )
              ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Rs, Ts),
                (Ts |= r)
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Rs, Ts),
              (Ts |= r)
          return wi(e, t, a, n), t.child
        }
        function Ei(e, t) {
          var n = t.ref
          ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152))
        }
        function Ni(e, t, n, r, a) {
          var o = Ta(n) ? za : ja.current
          return (
            (o = La(t, o)),
            zo(t, a),
            (n = gl(e, t, n, r, o, a)),
            (r = vl()),
            null === e || yi
              ? (ao && r && eo(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          )
        }
        function _i(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0
            Oa(t)
          } else o = !1
          if ((zo(t, a), null === t.stateNode))
            Hi(e, t), li(t, n, r), si(t, n, r, a), (r = !0)
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps
            l.props = i
            var s = l.context,
              u = n.contextType
            'object' === typeof u && null !== u
              ? (u = Lo(u))
              : (u = La(t, (u = Ta(n) ? za : ja.current)))
            var c = n.getDerivedStateFromProps,
              d =
                'function' === typeof c ||
                'function' === typeof l.getSnapshotBeforeUpdate
            d ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== r || s !== u) && ii(t, l, r, u)),
              (Oo = !1)
            var f = t.memoizedState
            ;(l.state = f),
              Ho(t, r, l, a),
              (s = t.memoizedState),
              i !== r || f !== s || Pa.current || Oo
                ? ('function' === typeof c &&
                    (ri(t, n, c, r), (s = t.memoizedState)),
                  (i = Oo || oi(t, n, i, r, f, s, u))
                    ? (d ||
                        ('function' !== typeof l.UNSAFE_componentWillMount &&
                          'function' !== typeof l.componentWillMount) ||
                        ('function' === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        'function' === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      'function' === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = i))
                : ('function' === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1))
          } else {
            ;(l = t.stateNode),
              Fo(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : ni(t.type, i)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Lo(s))
                : (s = La(t, (s = Ta(n) ? za : ja.current)))
            var p = n.getDerivedStateFromProps
            ;(c =
              'function' === typeof p ||
              'function' === typeof l.getSnapshotBeforeUpdate) ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && ii(t, l, r, s)),
              (Oo = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ho(t, r, l, a)
            var h = t.memoizedState
            i !== d || f !== h || Pa.current || Oo
              ? ('function' === typeof p &&
                  (ri(t, n, p, r), (h = t.memoizedState)),
                (u = Oo || oi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof l.UNSAFE_componentWillUpdate &&
                        'function' !== typeof l.componentWillUpdate) ||
                      ('function' === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, s),
                      'function' === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = s),
                (r = u))
              : ('function' !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1))
          }
          return ji(e, t, n, r, o, a)
        }
        function ji(e, t, n, r, a, o) {
          Ei(e, t)
          var l = 0 !== (128 & t.flags)
          if (!r && !l) return a && Ia(t, n, !1), $i(e, t, o)
          ;(r = t.stateNode), (bi.current = t)
          var i =
            l && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render()
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, i, o)))
              : wi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          )
        }
        function Pi(e) {
          var t = e.stateNode
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            Ko(e, t.containerInfo)
        }
        function zi(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), wi(e, t, n, r), t.child
        }
        var Li,
          Ti,
          Ri,
          Mi,
          Di = { dehydrated: null, treeContext: null, retryLane: 0 }
        function Oi(e) {
          return { baseLanes: e, cachePool: null, transitions: null }
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            l = el.current,
            i = !1,
            s = 0 !== (128 & t.flags)
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Na(el, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Ou(s, a, 0, null)),
                      (e = Du(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Oi(n)),
                      (t.memoizedState = Di),
                      e)
                    : Fi(t, s))
            )
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = ci(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((l = r.fallback),
                      (a = t.mode),
                      (r = Ou(
                        { mode: 'visible', children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((l = Du(l, a, i, null)).flags |= 2),
                      (r.return = t),
                      (l.return = t),
                      (r.sibling = l),
                      (t.child = r),
                      0 !== (1 & t.mode) && xo(t, e.child, null, i),
                      (t.child.memoizedState = Oi(i)),
                      (t.memoizedState = Di),
                      l)
              if (0 === (1 & t.mode)) return Ai(e, t, i, null)
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst
                return (
                  (r = s), Ai(e, t, i, (r = ci((l = Error(o(419))), r, void 0)))
                )
              }
              if (((s = 0 !== (i & e.childLanes)), yi || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
                    case 4:
                      a = 2
                      break
                    case 16:
                      a = 8
                      break
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32
                      break
                    case 536870912:
                      a = 268435456
                      break
                    default:
                      a = 0
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Do(e, a), nu(r, e, a, -1))
                }
                return mu(), Ai(e, t, i, (r = ci(Error(o(421)))))
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _u.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ga++] = Ka),
                    (Qa[Ga++] = Ya),
                    (Qa[Ga++] = qa),
                    (Ka = e.id),
                    (Ya = e.overflow),
                    (qa = t)),
                  (t = Fi(t, r.children)),
                  (t.flags |= 4096),
                  t)
            })(e, t, s, a, r, l, n)
          if (i) {
            ;(i = a.fallback), (s = t.mode), (r = (l = e.child).sibling)
            var u = { mode: 'hidden', children: a.children }
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ru(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Ru(r, i))
                : ((i = Du(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Oi(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Di),
              a
            )
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ru(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          )
        }
        function Fi(e, t) {
          return (
            ((t = Ou(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          )
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && mo(r),
            xo(t, e.child, null, n),
            ((e = Fi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          )
        }
        function Ui(e, t, n) {
          e.lanes |= t
          var r = e.alternate
          null !== r && (r.lanes |= t), Po(e.return, t, n)
        }
        function Bi(e, t, n, r, a) {
          var o = e.memoizedState
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a))
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = el.current))))
            (r = (1 & r) | 2), (t.flags |= 128)
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t)
                else if (19 === e.tag) Ui(e, n, t)
                else if (null !== e.child) {
                  ;(e.child.return = e), (e = e.child)
                  continue
                }
                if (e === t) break e
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e
                  e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
              }
            r &= 1
          }
          if ((Na(el, r), 0 === (1 & t.mode))) t.memoizedState = null
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === tl(e) && (a = n),
                    (n = n.sibling)
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, o)
                break
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === tl(e)) {
                    t.child = a
                    break
                  }
                  ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
                }
                Bi(t, !0, n, null, o)
                break
              case 'together':
                Bi(t, !1, null, null, void 0)
                break
              default:
                t.memoizedState = null
            }
          return t.child
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
        }
        function $i(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Os |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null
          if (null !== e && t.child !== e.child) throw Error(o(153))
          if (null !== t.child) {
            for (
              n = Ru((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ru(e, e.pendingProps)).return = t)
            n.sibling = null
          }
          return t.child
        }
        function Wi(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling)
                null === n ? (e.tail = null) : (n.sibling = null)
                break
              case 'collapsed':
                n = e.tail
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling)
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null)
            }
        }
        function Zi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling)
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling)
          return (e.subtreeFlags |= r), (e.childLanes = n), t
        }
        function Qi(e, t, n) {
          var r = t.pendingProps
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Zi(t), null
            case 1:
            case 17:
              return Ta(t.type) && Ra(), Zi(t), null
            case 3:
              return (
                (r = t.stateNode),
                Yo(),
                Ea(Pa),
                Ea(ja),
                rl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                Ti(e, t),
                Zi(t),
                null
              )
            case 5:
              Jo(t)
              var a = qo(Go.current)
              if (((n = t.type), null !== e && null != t.stateNode))
                Ri(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166))
                  return Zi(t), null
                }
                if (((e = qo(Zo.current)), fo(t))) {
                  ;(r = t.stateNode), (n = t.type)
                  var l = t.memoizedProps
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Ar('cancel', r), Ar('close', r)
                      break
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ar('load', r)
                      break
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Dr.length; a++) Ar(Dr[a], r)
                      break
                    case 'source':
                      Ar('error', r)
                      break
                    case 'img':
                    case 'image':
                    case 'link':
                      Ar('error', r), Ar('load', r)
                      break
                    case 'details':
                      Ar('toggle', r)
                      break
                    case 'input':
                      K(r, l), Ar('invalid', r)
                      break
                    case 'select':
                      ;(r._wrapperState = { wasMultiple: !!l.multiple }),
                        Ar('invalid', r)
                      break
                    case 'textarea':
                      ae(r, l), Ar('invalid', r)
                  }
                  for (var s in (be(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s]
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ['children', '' + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          'onScroll' === s &&
                          Ar('scroll', r)
                    }
                  switch (n) {
                    case 'input':
                      Z(r), J(r, l, !0)
                      break
                    case 'textarea':
                      Z(r), le(r)
                      break
                    case 'select':
                    case 'option':
                      break
                    default:
                      'function' === typeof l.onClick && (r.onclick = Jr)
                  }
                  ;(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4)
                } else {
                  ;(s = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            'select' === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Li(e, t, !1, !1),
                    (t.stateNode = e)
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case 'dialog':
                        Ar('cancel', e), Ar('close', e), (a = r)
                        break
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ar('load', e), (a = r)
                        break
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Dr.length; a++) Ar(Dr[a], e)
                        a = r
                        break
                      case 'source':
                        Ar('error', e), (a = r)
                        break
                      case 'img':
                      case 'image':
                      case 'link':
                        Ar('error', e), Ar('load', e), (a = r)
                        break
                      case 'details':
                        Ar('toggle', e), (a = r)
                        break
                      case 'input':
                        K(e, r), (a = q(e, r)), Ar('invalid', e)
                        break
                      case 'option':
                      default:
                        a = r
                        break
                      case 'select':
                        ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Ar('invalid', e)
                        break
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Ar('invalid', e)
                    }
                    for (l in (be(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l]
                        'style' === l
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === l
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : 'children' === l
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && fe(e, c)
                                : 'number' === typeof c && fe(e, '' + c)
                              : 'suppressContentEditableWarning' !== l &&
                                'suppressHydrationWarning' !== l &&
                                'autoFocus' !== l &&
                                (i.hasOwnProperty(l)
                                  ? null != c &&
                                    'onScroll' === l &&
                                    Ar('scroll', e)
                                  : null != c && y(e, l, c, s))
                      }
                    switch (n) {
                      case 'input':
                        Z(e), J(e, r, !1)
                        break
                      case 'textarea':
                        Z(e), le(e)
                        break
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + $(r.value))
                        break
                      case 'select':
                        ;(e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0)
                        break
                      default:
                        'function' === typeof a.onClick && (e.onclick = Jr)
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus
                        break e
                      case 'img':
                        r = !0
                        break e
                      default:
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              }
              return Zi(t), null
            case 6:
              if (e && null != t.stateNode) Mi(e, t, e.memoizedProps, r)
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(o(166))
                if (((n = qo(Go.current)), qo(Zo.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                        break
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                    }
                  l && (t.flags |= 4)
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r)
              }
              return Zi(t), null
            case 13:
              if (
                (Ea(el),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (l = !1)
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318))
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317))
                    l[fa] = t
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4)
                  Zi(t), (l = !1)
                } else null !== oo && (lu(oo), (oo = null)), (l = !0)
                if (!l) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & el.current)
                        ? 0 === Ms && (Ms = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Zi(t),
                  null)
            case 4:
              return (
                Yo(),
                Ti(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Zi(t),
                null
              )
            case 10:
              return jo(t.type._context), Zi(t), null
            case 19:
              if ((Ea(el), null === (l = t.memoizedState))) return Zi(t), null
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) Wi(l, !1)
                else {
                  if (0 !== Ms || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = tl(e))) {
                        for (
                          t.flags |= 128,
                            Wi(l, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling)
                        return Na(el, (1 & el.current) | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== l.tail &&
                    Ye() > Vs &&
                    ((t.flags |= 128), (r = !0), Wi(l, !1), (t.lanes = 4194304))
                }
              else {
                if (!r)
                  if (null !== (e = tl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(l, !0),
                      null === l.tail &&
                        'hidden' === l.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Zi(t), null
                  } else
                    2 * Ye() - l.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wi(l, !1),
                      (t.lanes = 4194304))
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s),
                    (l.last = s))
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = el.current),
                  Na(el, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Zi(t), null)
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ts) &&
                    (Zi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Zi(t),
                null
              )
            case 24:
            case 25:
              return null
          }
          throw Error(o(156, t.tag))
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && Ra(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 3:
              return (
                Yo(),
                Ea(Pa),
                Ea(ja),
                rl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 5:
              return Jo(t), null
            case 13:
              if (
                (Ea(el),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340))
                ho()
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            case 19:
              return Ea(el), null
            case 4:
              return Yo(), null
            case 10:
              return jo(t.type._context), null
            case 22:
            case 23:
              return du(), null
            default:
              return null
          }
        }
        ;(Li = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
            else if (4 !== n.tag && null !== n.child) {
              ;(n.child.return = n), (n = n.child)
              continue
            }
            if (n === t) break
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return
              n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
          }
        }),
          (Ti = function () {}),
          (Ri = function (e, t, n, r) {
            var a = e.memoizedProps
            if (a !== r) {
              ;(e = t.stateNode), qo(Zo.current)
              var o,
                l = null
              switch (n) {
                case 'input':
                  ;(a = q(e, a)), (r = q(e, r)), (l = [])
                  break
                case 'select':
                  ;(a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (l = [])
                  break
                case 'textarea':
                  ;(a = re(e, a)), (r = re(e, r)), (l = [])
                  break
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr)
              }
              for (c in (be(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var s = a[c]
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null))
              for (c in r) {
                var u = r[c]
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''))
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]))
                    } else n || (l || (l = []), l.push(c, n)), (n = u)
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : 'children' === c
                        ? ('string' !== typeof u && 'number' !== typeof u) ||
                          (l = l || []).push(c, '' + u)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (i.hasOwnProperty(c)
                            ? (null != u && 'onScroll' === c && Ar('scroll', e),
                              l || s === u || (l = []))
                            : (l = l || []).push(c, u))
              }
              n && (l = l || []).push('style', n)
              var c = l
              ;(t.updateQueue = c) && (t.flags |= 4)
            }
          }),
          (Mi = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
          })
        var qi = !1,
          Ki = !1,
          Yi = 'function' === typeof WeakSet ? WeakSet : Set,
          Xi = null
        function Ji(e, t) {
          var n = e.ref
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null)
              } catch (r) {
                Cu(e, t, r)
              }
            else n.current = null
        }
        function es(e, t, n) {
          try {
            n()
          } catch (r) {
            Cu(e, t, r)
          }
        }
        var ts = !1
        function ns(e, t, n) {
          var r = t.updateQueue
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next)
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy
                ;(a.destroy = void 0), void 0 !== o && es(t, n, o)
              }
              a = a.next
            } while (a !== r)
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next)
            do {
              if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }
        function as(e) {
          var t = e.ref
          if (null !== t) {
            var n = e.stateNode
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e)
          }
        }
        function os(e) {
          var t = e.alternate
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null
              e = e.return
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e
              if (null === e.child || 4 === e.tag) continue e
              ;(e.child.return = e), (e = e.child)
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }
        function ss(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr))
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling)
        }
        function us(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling)
        }
        var cs = null,
          ds = !1
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling)
        }
        function ps(e, t, n) {
          if (ot && 'function' === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n)
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ki || Ji(n, t)
            case 6:
              var r = cs,
                a = ds
              ;(cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode))
              break
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(cs, n.stateNode))
              break
            case 4:
              ;(r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a)
              break
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ki &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next
                do {
                  var o = a,
                    l = o.destroy
                  ;(o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, l),
                    (a = a.next)
                } while (a !== r)
              }
              fs(e, t, n)
              break
            case 1:
              if (
                !Ki &&
                (Ji(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ;(r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount()
                } catch (i) {
                  Cu(n, t, i)
                }
              fs(e, t, n)
              break
            case 21:
              fs(e, t, n)
              break
            case 22:
              1 & n.mode
                ? ((Ki = (r = Ki) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Ki = r))
                : fs(e, t, n)
              break
            default:
              fs(e, t, n)
          }
        }
        function hs(e) {
          var t = e.updateQueue
          if (null !== t) {
            e.updateQueue = null
            var n = e.stateNode
            null === n && (n = e.stateNode = new Yi()),
              t.forEach(function (t) {
                var r = ju.bind(null, e, t)
                n.has(t) || (n.add(t), t.then(r, r))
              })
          }
        }
        function ms(e, t) {
          var n = t.deletions
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r]
              try {
                var l = e,
                  i = t,
                  s = i
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      ;(cs = s.stateNode), (ds = !1)
                      break e
                    case 3:
                    case 4:
                      ;(cs = s.stateNode.containerInfo), (ds = !0)
                      break e
                  }
                  s = s.return
                }
                if (null === cs) throw Error(o(160))
                ps(l, i, a), (cs = null), (ds = !1)
                var u = a.alternate
                null !== u && (u.return = null), (a.return = null)
              } catch (c) {
                Cu(a, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling)
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e)
                } catch (g) {
                  Cu(e, e.return, g)
                }
                try {
                  ns(5, e, e.return)
                } catch (g) {
                  Cu(e, e.return, g)
                }
              }
              break
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Ji(n, n.return)
              break
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Ji(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode
                try {
                  fe(a, '')
                } catch (g) {
                  Cu(e, e.return, g)
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s &&
                      'radio' === l.type &&
                      null != l.name &&
                      Y(a, l),
                      ye(s, i)
                    var c = ye(s, l)
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1]
                      'style' === d
                        ? ge(a, f)
                        : 'dangerouslySetInnerHTML' === d
                          ? de(a, f)
                          : 'children' === d
                            ? fe(a, f)
                            : y(a, d, f, c)
                    }
                    switch (s) {
                      case 'input':
                        X(a, l)
                        break
                      case 'textarea':
                        oe(a, l)
                        break
                      case 'select':
                        var p = a._wrapperState.wasMultiple
                        a._wrapperState.wasMultiple = !!l.multiple
                        var h = l.value
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : '', !1))
                    }
                    a[pa] = l
                  } catch (g) {
                    Cu(e, e.return, g)
                  }
              }
              break
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162))
                ;(a = e.stateNode), (l = e.memoizedProps)
                try {
                  a.nodeValue = l
                } catch (g) {
                  Cu(e, e.return, g)
                }
              }
              break
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo)
                } catch (g) {
                  Cu(e, e.return, g)
                }
              break
            case 4:
            default:
              ms(t, e), vs(e)
              break
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Ye())),
                4 & r && hs(e)
              break
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ki = (c = Ki) || d), ms(t, e), (Ki = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xi = e, d = e.child; null !== d; ) {
                    for (f = Xi = d; null !== Xi; ) {
                      switch (((h = (p = Xi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return)
                          break
                        case 1:
                          Ji(p, p.return)
                          var m = p.stateNode
                          if ('function' === typeof m.componentWillUnmount) {
                            ;(r = p), (n = p.return)
                            try {
                              ;(t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount()
                            } catch (g) {
                              Cu(r, n, g)
                            }
                          }
                          break
                        case 5:
                          Ji(p, p.return)
                          break
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f)
                            continue
                          }
                      }
                      null !== h ? ((h.return = p), (Xi = h)) : xs(f)
                    }
                    d = d.sibling
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f
                      try {
                        ;(a = f.stateNode),
                          c
                            ? 'function' === typeof (l = a.style).setProperty
                              ? l.setProperty('display', 'none', 'important')
                              : (l.display = 'none')
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', i)))
                      } catch (g) {
                        Cu(e, e.return, g)
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps
                      } catch (g) {
                        Cu(e, e.return, g)
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    ;(f.child.return = f), (f = f.child)
                    continue
                  }
                  if (f === e) break e
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e
                    d === f && (d = null), (f = f.return)
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling)
                }
              }
              break
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e)
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n
                    break e
                  }
                  n = n.return
                }
                throw Error(o(160))
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)), us(e, is(e), a)
                  break
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo
                  ss(e, is(e), l)
                  break
                default:
                  throw Error(o(161))
              }
            } catch (i) {
              Cu(e, e.return, i)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }
        function bs(e, t, n) {
          ;(Xi = e), ys(e, t, n)
        }
        function ys(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xi; ) {
            var a = Xi,
              o = a.child
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || qi
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Ki
                i = qi
                var u = Ki
                if (((qi = l), (Ki = s) && !u))
                  for (Xi = a; null !== Xi; )
                    (s = (l = Xi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ks(a)
                        : null !== s
                          ? ((s.return = l), (Xi = s))
                          : ks(a)
                for (; null !== o; ) (Xi = o), ys(o, t, n), (o = o.sibling)
                ;(Xi = a), (qi = i), (Ki = u)
              }
              ws(e)
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Xi = o))
                : ws(e)
          }
        }
        function ws(e) {
          for (; null !== Xi; ) {
            var t = Xi
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ki || rs(5, t)
                      break
                    case 1:
                      var r = t.stateNode
                      if (4 & t.flags && !Ki)
                        if (null === n) r.componentDidMount()
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps)
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          )
                        }
                      var l = t.updateQueue
                      null !== l && $o(t, l, r)
                      break
                    case 3:
                      var i = t.updateQueue
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode
                          }
                        $o(t, i, n)
                      }
                      break
                    case 5:
                      var s = t.stateNode
                      if (null === n && 4 & t.flags) {
                        n = s
                        var u = t.memoizedProps
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus()
                            break
                          case 'img':
                            u.src && (n.src = u.src)
                        }
                      }
                      break
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate
                        if (null !== c) {
                          var d = c.memoizedState
                          if (null !== d) {
                            var f = d.dehydrated
                            null !== f && Vt(f)
                          }
                        }
                      }
                      break
                    default:
                      throw Error(o(163))
                  }
                Ki || (512 & t.flags && as(t))
              } catch (p) {
                Cu(t, t.return, p)
              }
            }
            if (t === e) {
              Xi = null
              break
            }
            if (null !== (n = t.sibling)) {
              ;(n.return = t.return), (Xi = n)
              break
            }
            Xi = t.return
          }
        }
        function xs(e) {
          for (; null !== Xi; ) {
            var t = Xi
            if (t === e) {
              Xi = null
              break
            }
            var n = t.sibling
            if (null !== n) {
              ;(n.return = t.return), (Xi = n)
              break
            }
            Xi = t.return
          }
        }
        function ks(e) {
          for (; null !== Xi; ) {
            var t = Xi
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return
                  try {
                    rs(4, t)
                  } catch (s) {
                    Cu(t, n, s)
                  }
                  break
                case 1:
                  var r = t.stateNode
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return
                    try {
                      r.componentDidMount()
                    } catch (s) {
                      Cu(t, a, s)
                    }
                  }
                  var o = t.return
                  try {
                    as(t)
                  } catch (s) {
                    Cu(t, o, s)
                  }
                  break
                case 5:
                  var l = t.return
                  try {
                    as(t)
                  } catch (s) {
                    Cu(t, l, s)
                  }
              }
            } catch (s) {
              Cu(t, t.return, s)
            }
            if (t === e) {
              Xi = null
              break
            }
            var i = t.sibling
            if (null !== i) {
              ;(i.return = t.return), (Xi = i)
              break
            }
            Xi = t.return
          }
        }
        var Ss,
          Cs = Math.ceil,
          Es = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          _s = w.ReactCurrentBatchConfig,
          js = 0,
          Ps = null,
          zs = null,
          Ls = 0,
          Ts = 0,
          Rs = Ca(0),
          Ms = 0,
          Ds = null,
          Os = 0,
          Is = 0,
          Fs = 0,
          As = null,
          Us = null,
          Bs = 0,
          Vs = 1 / 0,
          Hs = null,
          $s = !1,
          Ws = null,
          Zs = null,
          Qs = !1,
          Gs = null,
          qs = 0,
          Ks = 0,
          Ys = null,
          Xs = -1,
          Js = 0
        function eu() {
          return 0 !== (6 & js) ? Ye() : -1 !== Xs ? Xs : (Xs = Ye())
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & js) && 0 !== Ls
              ? Ls & -Ls
              : null !== go.transition
                ? (0 === Js && (Js = mt()), Js)
                : 0 !== (e = yt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Kt(e.type))
        }
        function nu(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Ys = null), Error(o(185)))
          vt(e, n, r),
            (0 !== (2 & js) && e === Ps) ||
              (e === Ps && (0 === (2 & js) && (Is |= n), 4 === Ms && iu(e, Ls)),
              ru(e, r),
              1 === n &&
                0 === js &&
                0 === (1 & t.mode) &&
                ((Vs = Ye() + 500), Aa && Va()))
        }
        function ru(e, t) {
          var n = e.callbackNode
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l]
              ;-1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i)
            }
          })(e, t)
          var r = ft(e, e === Ps ? Ls : 0)
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    ;(Aa = !0), Ba(e)
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                la(function () {
                  0 === (6 & js) && Va()
                }),
                (n = null)
            else {
              switch (wt(r)) {
                case 1:
                  n = Je
                  break
                case 4:
                  n = et
                  break
                case 16:
                default:
                  n = tt
                  break
                case 536870912:
                  n = rt
              }
              n = Pu(n, au.bind(null, e))
            }
            ;(e.callbackPriority = t), (e.callbackNode = n)
          }
        }
        function au(e, t) {
          if (((Xs = -1), (Js = 0), 0 !== (6 & js))) throw Error(o(327))
          var n = e.callbackNode
          if (ku() && e.callbackNode !== n) return null
          var r = ft(e, e === Ps ? Ls : 0)
          if (0 === r) return null
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r)
          else {
            t = r
            var a = js
            js |= 2
            var l = hu()
            for (
              (Ps === e && Ls === t) ||
              ((Hs = null), (Vs = Ye() + 500), fu(e, t));
              ;

            )
              try {
                bu()
                break
              } catch (s) {
                pu(e, s)
              }
            _o(),
              (Es.current = l),
              (js = a),
              null !== zs ? (t = 0) : ((Ps = null), (Ls = 0), (t = Ms))
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Ds), fu(e, 0), iu(e, r), ru(e, Ye()), n)
            if (6 === t) iu(e, r)
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot
                            a = a.value
                            try {
                              if (!ir(o(), a)) return !1
                            } catch (i) {
                              return !1
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n)
                      else {
                        if (t === e) break
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0
                          t = t.return
                        }
                        ;(t.sibling.return = t.return), (t = t.sibling)
                      }
                    }
                    return !0
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = ou(e, l))),
                  1 === t))
              )
                throw ((n = Ds), fu(e, 0), iu(e, r), ru(e, Ye()), n)
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345))
                case 2:
                case 5:
                  xu(e, Us, Hs)
                  break
                case 3:
                  if (
                    (iu(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Ye()))
                  ) {
                    if (0 !== ft(e, 0)) break
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a)
                      break
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, Us, Hs), t)
                    break
                  }
                  xu(e, Us, Hs)
                  break
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r)
                    ;(l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l)
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Cs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, Us, Hs), r)
                    break
                  }
                  xu(e, Us, Hs)
                  break
                default:
                  throw Error(o(329))
              }
            }
          }
          return ru(e, Ye()), e.callbackNode === n ? au.bind(null, e) : null
        }
        function ou(e, t) {
          var n = As
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Us), (Us = n), null !== t && lu(t)),
            e
          )
        }
        function lu(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e)
        }
        function iu(e, t) {
          for (
            t &= ~Fs,
              t &= ~Is,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n
            ;(e[n] = -1), (t &= ~r)
          }
        }
        function su(e) {
          if (0 !== (6 & js)) throw Error(o(327))
          ku()
          var t = ft(e, 0)
          if (0 === (1 & t)) return ru(e, Ye()), null
          var n = gu(e, t)
          if (0 !== e.tag && 2 === n) {
            var r = ht(e)
            0 !== r && ((t = r), (n = ou(e, r)))
          }
          if (1 === n) throw ((n = Ds), fu(e, 0), iu(e, t), ru(e, Ye()), n)
          if (6 === n) throw Error(o(345))
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Us, Hs),
            ru(e, Ye()),
            null
          )
        }
        function uu(e, t) {
          var n = js
          js |= 1
          try {
            return e(t)
          } finally {
            0 === (js = n) && ((Vs = Ye() + 500), Aa && Va())
          }
        }
        function cu(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & js) && ku()
          var t = js
          js |= 1
          var n = _s.transition,
            r = yt
          try {
            if (((_s.transition = null), (yt = 1), e)) return e()
          } finally {
            ;(yt = r), (_s.transition = n), 0 === (6 & (js = t)) && Va()
          }
        }
        function du() {
          ;(Ts = Rs.current), Ea(Rs)
        }
        function fu(e, t) {
          ;(e.finishedWork = null), (e.finishedLanes = 0)
          var n = e.timeoutHandle
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zs))
            for (n = zs.return; null !== n; ) {
              var r = n
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ra()
                  break
                case 3:
                  Yo(), Ea(Pa), Ea(ja), rl()
                  break
                case 5:
                  Jo(r)
                  break
                case 4:
                  Yo()
                  break
                case 13:
                case 19:
                  Ea(el)
                  break
                case 10:
                  jo(r.type._context)
                  break
                case 22:
                case 23:
                  du()
              }
              n = n.return
            }
          if (
            ((Ps = e),
            (zs = e = Ru(e.current, null)),
            (Ls = Ts = t),
            (Ms = 0),
            (Ds = null),
            (Fs = Is = Os = 0),
            (Us = As = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null
                var a = r.next,
                  o = n.pending
                if (null !== o) {
                  var l = o.next
                  ;(o.next = a), (r.next = l)
                }
                n.pending = r
              }
            To = null
          }
          return e
        }
        function pu(e, t) {
          for (;;) {
            var n = zs
            try {
              if ((_o(), (al.current = Xl), cl)) {
                for (var r = il.memoizedState; null !== r; ) {
                  var a = r.queue
                  null !== a && (a.pending = null), (r = r.next)
                }
                cl = !1
              }
              if (
                ((ll = 0),
                (ul = sl = il = null),
                (dl = !1),
                (fl = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                ;(Ms = 1), (Ds = t), (zs = null)
                break
              }
              e: {
                var l = e,
                  i = n.return,
                  s = n,
                  u = t
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null))
                  }
                  var h = gi(i)
                  if (null !== h) {
                    ;(h.flags &= -257),
                      vi(h, i, s, 0, t),
                      1 & h.mode && mi(l, c, t),
                      (u = c)
                    var m = (t = h).updateQueue
                    if (null === m) {
                      var g = new Set()
                      g.add(u), (t.updateQueue = g)
                    } else m.add(u)
                    break e
                  }
                  if (0 === (1 & t)) {
                    mi(l, c, t), mu()
                    break e
                  }
                  u = Error(o(426))
                } else if (ao && 1 & s.mode) {
                  var v = gi(i)
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vi(v, i, s, 0, t),
                      mo(ui(u, s))
                    break e
                  }
                }
                ;(l = u = ui(u, s)),
                  4 !== Ms && (Ms = 2),
                  null === As ? (As = [l]) : As.push(l),
                  (l = i)
                do {
                  switch (l.tag) {
                    case 3:
                      ;(l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Vo(l, pi(0, u, t))
                      break e
                    case 1:
                      s = u
                      var b = l.type,
                        y = l.stateNode
                      if (
                        0 === (128 & l.flags) &&
                        ('function' === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            'function' === typeof y.componentDidCatch &&
                            (null === Zs || !Zs.has(y))))
                      ) {
                        ;(l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Vo(l, hi(l, s, t))
                        break e
                      }
                  }
                  l = l.return
                } while (null !== l)
              }
              wu(n)
            } catch (w) {
              ;(t = w), zs === n && null !== n && (zs = n = n.return)
              continue
            }
            break
          }
        }
        function hu() {
          var e = Es.current
          return (Es.current = Xl), null === e ? Xl : e
        }
        function mu() {
          ;(0 !== Ms && 3 !== Ms && 2 !== Ms) || (Ms = 4),
            null === Ps ||
              (0 === (268435455 & Os) && 0 === (268435455 & Is)) ||
              iu(Ps, Ls)
        }
        function gu(e, t) {
          var n = js
          js |= 2
          var r = hu()
          for ((Ps === e && Ls === t) || ((Hs = null), fu(e, t)); ; )
            try {
              vu()
              break
            } catch (a) {
              pu(e, a)
            }
          if ((_o(), (js = n), (Es.current = r), null !== zs))
            throw Error(o(261))
          return (Ps = null), (Ls = 0), Ms
        }
        function vu() {
          for (; null !== zs; ) yu(zs)
        }
        function bu() {
          for (; null !== zs && !qe(); ) yu(zs)
        }
        function yu(e) {
          var t = Ss(e.alternate, e, Ts)
          ;(e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (zs = t),
            (Ns.current = null)
        }
        function wu(e) {
          var t = e
          do {
            var n = t.alternate
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qi(n, t, Ts))) return void (zs = n)
            } else {
              if (null !== (n = Gi(n, t)))
                return (n.flags &= 32767), void (zs = n)
              if (null === e) return (Ms = 6), void (zs = null)
              ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            }
            if (null !== (t = t.sibling)) return void (zs = t)
            zs = t = e
          } while (null !== t)
          0 === Ms && (Ms = 5)
        }
        function xu(e, t, n) {
          var r = yt,
            a = _s.transition
          try {
            ;(_s.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  ku()
                } while (null !== Gs)
                if (0 !== (6 & js)) throw Error(o(327))
                n = e.finishedWork
                var a = e.finishedLanes
                if (null === n) return null
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177))
                ;(e.callbackNode = null), (e.callbackPriority = 0)
                var l = n.lanes | n.childLanes
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t
                    ;(e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements)
                    var r = e.eventTimes
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a
                      ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o)
                    }
                  })(e, l),
                  e === Ps && ((zs = Ps = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Pu(tt, function () {
                      return ku(), null
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  ;(l = _s.transition), (_s.transition = null)
                  var i = yt
                  yt = 1
                  var s = js
                  ;(js |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          }
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection()
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode
                              var a = r.anchorOffset,
                                l = r.focusNode
                              r = r.focusOffset
                              try {
                                n.nodeType, l.nodeType
                              } catch (x) {
                                n = null
                                break e
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h)
                                for (;;) {
                                  if (f === e) break t
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === l && ++d === r && (u = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break
                                  p = (f = p).parentNode
                                }
                                f = h
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u }
                            } else n = null
                          }
                        n = n || { start: 0, end: 0 }
                      } else n = null
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Xi = t;
                        null !== Xi;

                      )
                        if (
                          ((e = (t = Xi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xi = e)
                        else
                          for (; null !== Xi; ) {
                            t = Xi
                            try {
                              var m = t.alternate
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ni(t.type, g),
                                          v,
                                        )
                                      b.__reactInternalSnapshotBeforeUpdate = y
                                    }
                                    break
                                  case 3:
                                    var w = t.stateNode.containerInfo
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement)
                                    break
                                  default:
                                    throw Error(o(163))
                                }
                            } catch (x) {
                              Cu(t, t.return, x)
                            }
                            if (null !== (e = t.sibling)) {
                              ;(e.return = t.return), (Xi = e)
                              break
                            }
                            Xi = t.return
                          }
                      ;(m = ts), (ts = !1)
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Ke(),
                    (js = s),
                    (yt = i),
                    (_s.transition = l)
                } else e.current = n
                if (
                  (Qs && ((Qs = !1), (Gs = e), (qs = a)),
                  (l = e.pendingLanes),
                  0 === l && (Zs = null),
                  (function (e) {
                    if (ot && 'function' === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        )
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest })
                if ($s) throw (($s = !1), (e = Ws), (Ws = null), e)
                0 !== (1 & qs) && 0 !== e.tag && ku(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Ys
                      ? Ks++
                      : ((Ks = 0), (Ys = e))
                    : (Ks = 0),
                  Va()
              })(e, t, n, r)
          } finally {
            ;(_s.transition = a), (yt = r)
          }
          return null
        }
        function ku() {
          if (null !== Gs) {
            var e = wt(qs),
              t = _s.transition,
              n = yt
            try {
              if (((_s.transition = null), (yt = 16 > e ? 16 : e), null === Gs))
                var r = !1
              else {
                if (((e = Gs), (Gs = null), (qs = 0), 0 !== (6 & js)))
                  throw Error(o(331))
                var a = js
                for (js |= 4, Xi = e.current; null !== Xi; ) {
                  var l = Xi,
                    i = l.child
                  if (0 !== (16 & Xi.flags)) {
                    var s = l.deletions
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u]
                        for (Xi = c; null !== Xi; ) {
                          var d = Xi
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l)
                          }
                          var f = d.child
                          if (null !== f) (f.return = d), (Xi = f)
                          else
                            for (; null !== Xi; ) {
                              var p = (d = Xi).sibling,
                                h = d.return
                              if ((os(d), d === c)) {
                                Xi = null
                                break
                              }
                              if (null !== p) {
                                ;(p.return = h), (Xi = p)
                                break
                              }
                              Xi = h
                            }
                        }
                      }
                      var m = l.alternate
                      if (null !== m) {
                        var g = m.child
                        if (null !== g) {
                          m.child = null
                          do {
                            var v = g.sibling
                            ;(g.sibling = null), (g = v)
                          } while (null !== g)
                        }
                      }
                      Xi = l
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Xi = i)
                  else
                    e: for (; null !== Xi; ) {
                      if (0 !== (2048 & (l = Xi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return)
                        }
                      var b = l.sibling
                      if (null !== b) {
                        ;(b.return = l.return), (Xi = b)
                        break e
                      }
                      Xi = l.return
                    }
                }
                var y = e.current
                for (Xi = y; null !== Xi; ) {
                  var w = (i = Xi).child
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Xi = w)
                  else
                    e: for (i = y; null !== Xi; ) {
                      if (0 !== (2048 & (s = Xi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s)
                          }
                        } catch (k) {
                          Cu(s, s.return, k)
                        }
                      if (s === i) {
                        Xi = null
                        break e
                      }
                      var x = s.sibling
                      if (null !== x) {
                        ;(x.return = s.return), (Xi = x)
                        break e
                      }
                      Xi = s.return
                    }
                }
                if (
                  ((js = a),
                  Va(),
                  ot && 'function' === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e)
                  } catch (k) {}
                r = !0
              }
              return r
            } finally {
              ;(yt = n), (_s.transition = t)
            }
          }
          return !1
        }
        function Su(e, t, n) {
          ;(e = Uo(e, (t = pi(0, (t = ui(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t))
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Su(e, e, n)
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n)
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Zs || !Zs.has(r)))
                ) {
                  ;(t = Uo(t, (e = hi(t, (e = ui(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e))
                  break
                }
              }
              t = t.return
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Ls & n) === n &&
              (4 === Ms ||
              (3 === Ms && (130023424 & Ls) === Ls && 500 > Ye() - Bs)
                ? fu(e, 0)
                : (Fs |= n)),
            ru(e, t)
        }
        function Nu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)))
          var n = eu()
          null !== (e = Do(e, t)) && (vt(e, t, n), ru(e, n))
        }
        function _u(e) {
          var t = e.memoizedState,
            n = 0
          null !== t && (n = t.retryLane), Nu(e, n)
        }
        function ju(e, t) {
          var n = 0
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState
              null !== a && (n = a.retryLane)
              break
            case 19:
              r = e.stateNode
              break
            default:
              throw Error(o(314))
          }
          null !== r && r.delete(t), Nu(e, n)
        }
        function Pu(e, t) {
          return Qe(e, t)
        }
        function zu(e, t, n, r) {
          ;(this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
        }
        function Lu(e, t, n, r) {
          return new zu(e, t, n, r)
        }
        function Tu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function Ru(e, t) {
          var n = e.alternate
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          )
        }
        function Mu(e, t, n, r, a, l) {
          var i = 2
          if (((r = e), 'function' === typeof e)) Tu(e) && (i = 1)
          else if ('string' === typeof e) i = 5
          else
            e: switch (e) {
              case S:
                return Du(n.children, a, l, t)
              case C:
                ;(i = 8), (a |= 8)
                break
              case E:
                return (
                  ((e = Lu(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                )
              case P:
                return ((e = Lu(13, n, t, a)).elementType = P), (e.lanes = l), e
              case z:
                return ((e = Lu(19, n, t, a)).elementType = z), (e.lanes = l), e
              case R:
                return Ou(n, a, l, t)
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      i = 10
                      break e
                    case _:
                      i = 9
                      break e
                    case j:
                      i = 11
                      break e
                    case L:
                      i = 14
                      break e
                    case T:
                      ;(i = 16), (r = null)
                      break e
                  }
                throw Error(o(130, null == e ? e : typeof e, ''))
            }
          return (
            ((t = Lu(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          )
        }
        function Du(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e
        }
        function Ou(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          )
        }
        function Iu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e
        }
        function Fu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          )
        }
        function Au(e, t, n, r, a) {
          ;(this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null)
        }
        function Uu(e, t, n, r, a, o, l, i, s) {
          return (
            (e = new Au(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Lu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Io(o),
            e
          )
        }
        function Bu(e) {
          if (!e) return _a
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170))
            var t = e
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context
                  break e
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext
                    break e
                  }
              }
              t = t.return
            } while (null !== t)
            throw Error(o(171))
          }
          if (1 === e.tag) {
            var n = e.type
            if (Ta(n)) return Da(e, n, t)
          }
          return t
        }
        function Vu(e, t, n, r, a, o, l, i, s) {
          return (
            ((e = Uu(n, r, !0, e, 0, o, 0, i, s)).context = Bu(null)),
            (n = e.current),
            ((o = Ao((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Uo(n, o, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          )
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            l = tu(a)
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ao(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Uo(a, t, l)) && (nu(e, a, l, o), Bo(e, a, l)),
            l
          )
        }
        function $u(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }
        function Zu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t)
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) yi = !0
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (yi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), ho()
                        break
                      case 5:
                        Xo(t)
                        break
                      case 1:
                        Ta(t.type) && Oa(t)
                        break
                      case 4:
                        Ko(t, t.stateNode.containerInfo)
                        break
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value
                        Na(So, r._currentValue), (r._currentValue = a)
                        break
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(el, 1 & el.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ii(e, t, n)
                              : (Na(el, 1 & el.current),
                                null !== (e = $i(e, t, n)) ? e.sibling : null)
                        Na(el, 1 & el.current)
                        break
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, t, n)
                          t.flags |= 128
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(el, el.current),
                          r)
                        )
                          break
                        return null
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ci(e, t, n)
                    }
                    return $i(e, t, n)
                  })(e, t, n)
                )
              yi = 0 !== (131072 & e.flags)
            }
          else (yi = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Za, t.index)
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type
              Hi(e, t), (e = t.pendingProps)
              var a = La(t, ja.current)
              zo(t, n), (a = gl(null, t, r, e, a, n))
              var l = vl()
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((l = !0), Oa(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Io(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    si(t, r, e, n),
                    (t = ji(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              )
            case 16:
              r = t.elementType
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Tu(e) ? 1 : 0
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11
                        if (e === L) return 14
                      }
                      return 2
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ni(null, t, r, e, n)
                    break e
                  case 1:
                    t = _i(null, t, r, e, n)
                    break e
                  case 11:
                    t = xi(null, t, r, e, n)
                    break e
                  case 14:
                    t = ki(null, t, r, ni(r.type, e), n)
                    break e
                }
                throw Error(o(306, r, ''))
              }
              return t
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              )
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _i(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              )
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(o(387))
                ;(r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Fo(e, t),
                  Ho(t, r, null, n)
                var i = t.memoizedState
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = zi(e, t, r, n, (a = ui(Error(o(423)), t)))
                    break e
                  }
                  if (r !== a) {
                    t = zi(e, t, r, n, (a = ui(Error(o(424)), t)))
                    break e
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                } else {
                  if ((ho(), r === a)) {
                    t = $i(e, t, n)
                    break e
                  }
                  wi(e, t, r, n)
                }
                t = t.child
              }
              return t
            case 5:
              return (
                Xo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                Ei(e, t),
                wi(e, t, i, n),
                t.child
              )
            case 6:
              return null === e && uo(t), null
            case 13:
              return Ii(e, t, n)
            case 4:
              return (
                Ko(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : wi(e, t, r, n),
                t.child
              )
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xi(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              )
            case 7:
              return wi(e, t, t.pendingProps, n), t.child
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Na(So, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Pa.current) {
                      t = $i(e, t, n)
                      break e
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies
                      if (null !== s) {
                        i = l.child
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              ;(u = Ao(-1, n & -n)).tag = 2
                              var c = l.updateQueue
                              if (null !== c) {
                                var d = (c = c.shared).pending
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u)
                              }
                            }
                            ;(l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Po(l.return, n, t),
                              (s.lanes |= n)
                            break
                          }
                          u = u.next
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341))
                        ;(i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          Po(i, n, t),
                          (i = l.sibling)
                      } else i = l.child
                      if (null !== i) i.return = l
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null
                            break
                          }
                          if (null !== (l = i.sibling)) {
                            ;(l.return = i.return), (i = l)
                            break
                          }
                          i = i.return
                        }
                      l = i
                    }
                wi(e, t, a.children, n), (t = t.child)
              }
              return t
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                zo(t, n),
                (r = r((a = Lo(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              )
            case 14:
              return (
                (a = ni((r = t.type), t.pendingProps)),
                ki(e, t, r, (a = ni(r.type, a)), n)
              )
            case 15:
              return Si(e, t, t.type, t.pendingProps, n)
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Oa(t)) : (e = !1),
                zo(t, n),
                li(t, r, a),
                si(t, r, a, n),
                ji(null, t, r, !0, e, n)
              )
            case 19:
              return Vi(e, t, n)
            case 22:
              return Ci(e, t, n)
          }
          throw Error(o(156, t.tag))
        }
        var Qu =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e)
              }
        function Gu(e) {
          this._internalRoot = e
        }
        function qu(e) {
          this._internalRoot = e
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          )
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          )
        }
        function Xu() {}
        function Ju(e, t, n, r, a) {
          var o = n._reactRootContainer
          if (o) {
            var l = o
            if ('function' === typeof a) {
              var i = a
              a = function () {
                var e = $u(l)
                i.call(e)
              }
            }
            Hu(t, l, e, a)
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var o = r
                  r = function () {
                    var e = $u(l)
                    o.call(e)
                  }
                }
                var l = Vu(t, r, e, 0, null, !1, 0, '', Xu)
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                )
              }
              for (; (a = e.lastChild); ) e.removeChild(a)
              if ('function' === typeof r) {
                var i = r
                r = function () {
                  var e = $u(s)
                  i.call(e)
                }
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, '', Xu)
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r)
                }),
                s
              )
            })(n, t, e, a, r)
          return $u(l)
        }
        ;(qu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot
            if (null === t) throw Error(o(409))
            Hu(e, t, null, null)
          }),
          (qu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot
              if (null !== e) {
                this._internalRoot = null
                var t = e.containerInfo
                cu(function () {
                  Hu(null, e, null, null)
                }),
                  (t[ha] = null)
              }
            }),
          (qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct()
              e = { blockedOn: null, target: e, priority: t }
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && It(e)
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes)
                  0 !== n &&
                    (bt(t, 1 | n),
                    ru(t, Ye()),
                    0 === (6 & js) && ((Vs = Ye() + 500), Va()))
                }
                break
              case 13:
                cu(function () {
                  var t = Do(e, 1)
                  if (null !== t) {
                    var n = eu()
                    nu(t, e, 1, n)
                  }
                }),
                  Zu(e, 1)
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Do(e, 134217728)
              if (null !== t) nu(t, e, 134217728, eu())
              Zu(e, 134217728)
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Do(e, t)
              if (null !== n) nu(n, e, t, eu())
              Zu(e, t)
            }
          }),
          (Ct = function () {
            return yt
          }),
          (Et = function (e, t) {
            var n = yt
            try {
              return (yt = e), t()
            } finally {
              yt = n
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((X(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                      var a = xa(r)
                      if (!a) throw Error(o(90))
                      Q(r), X(r, a)
                    }
                  }
                }
                break
              case 'textarea':
                oe(e, n)
                break
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
          }),
          (je = uu),
          (Pe = cu)
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ya, wa, xa, Ne, _e, uu],
          },
          tc = {
            findFiberByHostInstance: ba,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
          }
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              ;(at = rc.inject(nc)), (ot = rc)
            } catch (ce) {}
        }
        ;(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            if (!Ku(t)) throw Error(o(200))
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null
              return {
                $$typeof: k,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              }
            })(e, t, null, n)
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(o(299))
            var n = !1,
              r = '',
              a = Qu
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            )
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null
            if (1 === e.nodeType) return e
            var t = e._reactInternals
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188))
              throw ((e = Object.keys(e).join(',')), Error(o(268, e)))
            }
            return (e = null === (e = We(t)) ? null : e.stateNode)
          }),
          (t.flushSync = function (e) {
            return cu(e)
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yu(t)) throw Error(o(200))
            return Ju(null, e, t, !0, n)
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(o(405))
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = '',
              i = Qu
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a)
            return new qu(t)
          }),
          (t.render = function (e, t, n) {
            if (!Yu(t)) throw Error(o(200))
            return Ju(null, e, t, !1, n)
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yu(e)) throw Error(o(40))
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Ju(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[ha] = null)
                })
              }),
              !0)
            )
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yu(n)) throw Error(o(200))
            if (null == e || void 0 === e._reactInternals) throw Error(o(38))
            return Ju(e, t, n, !1, r)
          }),
          (t.version = '18.3.1-next-f1338f8080-20240426')
      },
      391: (e, t, n) => {
        var r = n(950)
        ;(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot)
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
          (e.exports = n(730))
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 }
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r])
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r])
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: i.current,
          }
        }
        ;(t.Fragment = o), (t.jsx = u), (t.jsxs = u)
      },
      202: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator
        var h = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {}
        function v(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h)
        }
        function b() {}
        function y(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h)
        }
        ;(v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              )
            this.updater.enqueueSetState(this, e, t, 'setState')
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
          }),
          (b.prototype = v.prototype)
        var w = (y.prototype = new b())
        ;(w.constructor = y), m(w, v.prototype), (w.isPureReactComponent = !0)
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 }
        function E(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = '' + t.key),
            t))
              k.call(t, a) && !C.hasOwnProperty(a) && (o[a] = t[a])
          var s = arguments.length - 2
          if (1 === s) o.children = r
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2]
            o.children = u
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a])
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          }
        }
        function N(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n
        }
        var _ = /\/+/g
        function j(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' }
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })('' + e.key)
            : t.toString(36)
        }
        function P(e, t, a, o, l) {
          var i = typeof e
          ;('undefined' !== i && 'boolean' !== i) || (e = null)
          var s = !1
          if (null === e) s = !0
          else
            switch (i) {
              case 'string':
              case 'number':
                s = !0
                break
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = '' === o ? '.' + j(s, 0) : o),
              x(l)
                ? ((a = ''),
                  null != e && (a = e.replace(_, '$&/') + '/'),
                  P(l, t, a, '', function (e) {
                    return e
                  }))
                : null != l &&
                  (N(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      }
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ''
                          : ('' + l.key).replace(_, '$&/') + '/') +
                        e,
                    )),
                  t.push(l)),
              1
            )
          if (((s = 0), (o = '' === o ? '.' : o + ':'), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + j((i = e[u]), u)
              s += P(i, t, a, c, l)
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                  ? e
                  : null
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += P((i = i.value), t, a, (c = o + j(i, u++)), l)
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            )
          return s
        }
        function z(e, t, n) {
          if (null == e) return e
          var r = [],
            a = 0
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, a++)
            }),
            r
          )
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t))
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var T = { current: null },
          R = { transition: null },
          M = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: S,
          }
        function D() {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }
        ;(t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments)
              },
              n,
            )
          },
          count: function (e) {
            var t = 0
            return (
              z(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.',
              )
            return e
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              )
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps
              for (u in t)
                k.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
            }
            var u = arguments.length - 2
            if (1 === u) a.children = r
            else if (1 < u) {
              s = Array(u)
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2]
              a.children = s
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            }
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e }
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = R.transition
            R.transition = {}
            try {
              e()
            } finally {
              R.transition = t
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return T.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e)
          }),
          (t.useState = function (e) {
            return T.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return T.current.useTransition()
          }),
          (t.version = '18.3.1')
      },
      43: (e, t, n) => {
        e.exports = n(202)
      },
      579: (e, t, n) => {
        e.exports = n(153)
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length
          e.push(t)
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r]
            if (!(0 < o(a, t))) break e
            ;(e[r] = t), (e[n] = a), (n = r)
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0]
        }
        function a(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u]
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i))
              else {
                if (!(u < a && 0 > o(c, n))) break e
                ;(e[r] = c), (e[u] = n), (r = u)
              }
            }
          }
          return t
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var l = performance
          t.unstable_now = function () {
            return l.now()
          }
        } else {
          var i = Date,
            s = i.now()
          t.unstable_now = function () {
            return i.now() - s
          }
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          b = 'function' === typeof clearTimeout ? clearTimeout : null,
          y = 'undefined' !== typeof setImmediate ? setImmediate : null
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c)
            else {
              if (!(t.startTime <= e)) break
              a(c), (t.sortIndex = t.expirationTime), n(u, t)
            }
            t = r(c)
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), R(k)
            else {
              var t = r(c)
              null !== t && M(x, t.startTime - e)
            }
        }
        function k(e, n) {
          ;(m = !1), g && ((g = !1), b(N), (N = -1)), (h = !0)
          var o = p
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var l = f.callback
              if ('function' === typeof l) {
                ;(f.callback = null), (p = f.priorityLevel)
                var i = l(f.expirationTime <= n)
                ;(n = t.unstable_now()),
                  'function' === typeof i
                    ? (f.callback = i)
                    : f === r(u) && a(u),
                  w(n)
              } else a(u)
              f = r(u)
            }
            if (null !== f) var s = !0
            else {
              var d = r(c)
              null !== d && M(x, d.startTime - n), (s = !1)
            }
            return s
          } finally {
            ;(f = null), (p = o), (h = !1)
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var S,
          C = !1,
          E = null,
          N = -1,
          _ = 5,
          j = -1
        function P() {
          return !(t.unstable_now() - j < _)
        }
        function z() {
          if (null !== E) {
            var e = t.unstable_now()
            j = e
            var n = !0
            try {
              n = E(!0, e)
            } finally {
              n ? S() : ((C = !1), (E = null))
            }
          } else C = !1
        }
        if ('function' === typeof y)
          S = function () {
            y(z)
          }
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            T = L.port2
          ;(L.port1.onmessage = z),
            (S = function () {
              T.postMessage(null)
            })
        } else
          S = function () {
            v(z, 0)
          }
        function R(e) {
          ;(E = e), C || ((C = !0), S())
        }
        function M(e, n) {
          N = v(function () {
            e(t.unstable_now())
          }, n)
        }
        ;(t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), R(k))
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u)
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = p
            }
            var n = p
            p = t
            try {
              return e()
            } finally {
              p = n
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = p
            p = e
            try {
              return t()
            } finally {
              p = n
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now()
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1
                break
              case 2:
                i = 250
                break
              case 5:
                i = 1073741823
                break
              case 4:
                i = 1e4
                break
              default:
                i = 5e3
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(N), (N = -1)) : (g = !0), M(x, o - l)))
                : ((e.sortIndex = i), n(u, e), m || h || ((m = !0), R(k))),
              e
            )
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p
            return function () {
              var n = p
              p = t
              try {
                return e.apply(this, arguments)
              } finally {
                p = n
              }
            }
          })
      },
      853: (e, t, n) => {
        e.exports = n(234)
      },
    },
    t = {}
  function n(r) {
    var a = t[r]
    if (void 0 !== a) return a.exports
    var o = (t[r] = { exports: {} })
    return e[r](o, o.exports, n), o.exports
  }
  ;(n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r
          if (16 & a && 'function' === typeof r.then) return r
        }
        var o = Object.create(null)
        n.r(o)
        var l = {}
        e = e || [null, t({}), t([]), t(t)]
        for (
          var i = 2 & a && r;
          'object' == typeof i && !~e.indexOf(i);
          i = t(i)
        )
          Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]))
        return (l.default = () => r), n.d(o, l), o
      }
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.406fa622.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'static:'
      n.l = (r, a, o, l) => {
        if (e[r]) e[r].push(a)
        else {
          var i, s
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName('script'), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c]
              if (
                d.getAttribute('src') == r ||
                d.getAttribute('data-webpack') == t + o
              ) {
                i = d
                break
              }
            }
          i ||
            ((s = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            n.nc && i.setAttribute('nonce', n.nc),
            i.setAttribute('data-webpack', t + o),
            (i.src = r)),
            (e[r] = [a])
          var f = (t, n) => {
              ;(i.onerror = i.onload = null), clearTimeout(p)
              var a = e[r]
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n)
            },
            p = setTimeout(
              f.bind(null, void 0, { type: 'timeout', target: i }),
              12e4,
            )
          ;(i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            s && document.head.appendChild(i)
        }
      }
    })(),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.p = '/'),
    (() => {
      var e = { 792: 0 }
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0
        if (0 !== a)
          if (a) r.push(a[2])
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]))
            r.push((a[2] = o))
            var l = n.p + n.u(t),
              i = new Error()
            n.l(
              l,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    l = r && r.target && r.target.src
                  ;(i.message =
                    'Loading chunk ' + t + ' failed.\n(' + o + ': ' + l + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = l),
                    a[1](i)
                }
              },
              'chunk-' + t,
              t,
            )
          }
      }
      var t = (t, r) => {
          var a,
            o,
            l = r[0],
            i = r[1],
            s = r[2],
            u = 0
          if (l.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a])
            if (s) s(n)
          }
          for (t && t(r); u < l.length; u++)
            (o = l[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0)
        },
        r = (self.webpackChunkstatic = self.webpackChunkstatic || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })(),
    (() => {
      var e,
        t = n(43),
        r = n.t(t, 2),
        a = n(391),
        o = n(950),
        l = n.t(o, 2)
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          i.apply(this, arguments)
        )
      }
      !(function (e) {
        ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
      })(e || (e = {}))
      const s = 'popstate'
      function u(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e)
          throw new Error(t)
      }
      function c(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t)
          try {
            throw new Error(t)
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t }
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          i(
            {
              pathname: 'string' === typeof e ? e : e.pathname,
              search: '',
              hash: '',
            },
            'string' === typeof t ? h(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        )
      }
      function p(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        )
      }
      function h(e) {
        let t = {}
        if (e) {
          let n = e.indexOf('#')
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
          let r = e.indexOf('?')
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e)
        }
        return t
      }
      function m(t, n, r, a) {
        void 0 === a && (a = {})
        let { window: o = document.defaultView, v5Compat: l = !1 } = a,
          c = o.history,
          h = e.Pop,
          m = null,
          g = v()
        function v() {
          return (c.state || { idx: null }).idx
        }
        function b() {
          h = e.Pop
          let t = v(),
            n = null == t ? null : t - g
          ;(g = t), m && m({ action: h, location: w.location, delta: n })
        }
        function y(e) {
          let t =
              'null' !== o.location.origin
                ? o.location.origin
                : o.location.href,
            n = 'string' === typeof e ? e : p(e)
          return (
            (n = n.replace(/ $/, '%20')),
            u(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                n,
            ),
            new URL(n, t)
          )
        }
        null == g && ((g = 0), c.replaceState(i({}, c.state, { idx: g }), ''))
        let w = {
          get action() {
            return h
          },
          get location() {
            return t(o, c)
          },
          listen(e) {
            if (m) throw new Error('A history only accepts one active listener')
            return (
              o.addEventListener(s, b),
              (m = e),
              () => {
                o.removeEventListener(s, b), (m = null)
              }
            )
          },
          createHref: (e) => n(o, e),
          createURL: y,
          encodeLocation(e) {
            let t = y(e)
            return { pathname: t.pathname, search: t.search, hash: t.hash }
          },
          push: function (t, n) {
            h = e.Push
            let a = f(w.location, t, n)
            r && r(a, t), (g = v() + 1)
            let i = d(a, g),
              s = w.createHref(a)
            try {
              c.pushState(i, '', s)
            } catch (u) {
              if (u instanceof DOMException && 'DataCloneError' === u.name)
                throw u
              o.location.assign(s)
            }
            l && m && m({ action: h, location: w.location, delta: 1 })
          },
          replace: function (t, n) {
            h = e.Replace
            let a = f(w.location, t, n)
            r && r(a, t), (g = v())
            let o = d(a, g),
              i = w.createHref(a)
            c.replaceState(o, '', i),
              l && m && m({ action: h, location: w.location, delta: 0 })
          },
          go: (e) => c.go(e),
        }
        return w
      }
      var g
      !(function (e) {
        ;(e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error')
      })(g || (g = {}))
      const v = new Set([
        'lazy',
        'caseSensitive',
        'path',
        'id',
        'index',
        'children',
      ])
      function b(e, t, n, r) {
        return (
          void 0 === n && (n = []),
          void 0 === r && (r = {}),
          e.map((e, a) => {
            let o = [...n, a],
              l = 'string' === typeof e.id ? e.id : o.join('-')
            if (
              (u(
                !0 !== e.index || !e.children,
                'Cannot specify children on an index route',
              ),
              u(
                !r[l],
                'Found a route id collision on id "' +
                  l +
                  '".  Route id\'s must be globally unique within Data Router usages',
              ),
              (function (e) {
                return !0 === e.index
              })(e))
            ) {
              let n = i({}, e, t(e), { id: l })
              return (r[l] = n), n
            }
            {
              let n = i({}, e, t(e), { id: l, children: void 0 })
              return (
                (r[l] = n),
                e.children && (n.children = b(e.children, t, o, r)),
                n
              )
            }
          })
        )
      }
      function y(e, t, n) {
        void 0 === n && (n = '/')
        let r = R(('string' === typeof t ? h(t) : t).pathname || '/', n)
        if (null == r) return null
        let a = w(e)
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n])
                  return n ? e[e.length - 1] - t[t.length - 1] : 0
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          )
        })(a)
        let o = null
        for (let l = 0; null == o && l < a.length; ++l) {
          let e = T(r)
          o = z(a[l], e)
        }
        return o
      }
      function w(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = '')
        let a = (e, a, o) => {
          let l = {
            relativePath: void 0 === o ? e.path || '' : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          }
          l.relativePath.startsWith('/') &&
            (u(
              l.relativePath.startsWith(r),
              'Absolute route path "' +
                l.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (l.relativePath = l.relativePath.slice(r.length)))
          let i = F([r, l.relativePath]),
            s = n.concat(l)
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".',
            ),
            w(e.children, t, s, i)),
            (null != e.path || e.index) &&
              t.push({ path: i, score: P(i, e.index), routesMeta: s })
        }
        return (
          e.forEach((e, t) => {
            var n
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of x(e.path)) a(e, t, r)
            else a(e, t)
          }),
          t
        )
      }
      function x(e) {
        let t = e.split('/')
        if (0 === t.length) return []
        let [n, ...r] = t,
          a = n.endsWith('?'),
          o = n.replace(/\?$/, '')
        if (0 === r.length) return a ? [o, ''] : [o]
        let l = x(r.join('/')),
          i = []
        return (
          i.push(...l.map((e) => ('' === e ? o : [o, e].join('/')))),
          a && i.push(...l),
          i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        )
      }
      const k = /^:[\w-]+$/,
        S = 3,
        C = 2,
        E = 1,
        N = 10,
        _ = -2,
        j = (e) => '*' === e
      function P(e, t) {
        let n = e.split('/'),
          r = n.length
        return (
          n.some(j) && (r += _),
          t && (r += C),
          n
            .filter((e) => !j(e))
            .reduce((e, t) => e + (k.test(t) ? S : '' === t ? E : N), r)
        )
      }
      function z(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = '/',
          o = []
        for (let l = 0; l < n.length; ++l) {
          let e = n[l],
            i = l === n.length - 1,
            s = '/' === a ? t : t.slice(a.length) || '/',
            u = L(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: i },
              s,
            )
          if (!u) return null
          Object.assign(r, u.params)
          let c = e.route
          o.push({
            params: r,
            pathname: F([a, u.pathname]),
            pathnameBase: A(F([a, u.pathnameBase])),
            route: c,
          }),
            '/' !== u.pathnameBase && (a = F([a, u.pathnameBase]))
        }
        return o
      }
      function L(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 })
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1)
            void 0 === n && (n = !0)
            c(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            )
            let r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    ),
                  )
            e.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
                ? (a += '\\/*$')
                : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))')
            let o = new RegExp(a, t ? void 0 : 'i')
            return [o, r]
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n)
        if (!a) return null
        let o = a[0],
          l = o.replace(/(.)\/+$/, '$1'),
          i = a.slice(1)
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t
            if ('*' === r) {
              let e = i[n] || ''
              l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, '$1')
            }
            const s = i[n]
            return (e[r] = a && !s ? void 0 : (s || '').replace(/%2F/g, '/')), e
          }, {}),
          pathname: o,
          pathnameBase: l,
          pattern: e,
        }
      }
      function T(e) {
        try {
          return e
            .split('/')
            .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
            .join('/')
        } catch (t) {
          return (
            c(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          )
        }
      }
      function R(e, t) {
        if ('/' === t) return e
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n)
        return r && '/' !== r ? null : e.slice(n) || '/'
      }
      function M(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        )
      }
      function D(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        )
      }
      function O(e, t) {
        let n = D(e)
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase)
      }
      function I(e, t, n, r) {
        let a
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = h(e))
            : ((a = i({}, e)),
              u(
                !a.pathname || !a.pathname.includes('?'),
                M('?', 'pathname', 'search', a),
              ),
              u(
                !a.pathname || !a.pathname.includes('#'),
                M('#', 'pathname', 'hash', a),
              ),
              u(
                !a.search || !a.search.includes('#'),
                M('#', 'search', 'hash', a),
              ))
        let o,
          l = '' === e || '' === a.pathname,
          s = l ? '/' : a.pathname
        if (null == s) o = n
        else {
          let e = t.length - 1
          if (!r && s.startsWith('..')) {
            let t = s.split('/')
            for (; '..' === t[0]; ) t.shift(), (e -= 1)
            a.pathname = t.join('/')
          }
          o = e >= 0 ? t[e] : '/'
        }
        let c = (function (e, t) {
            void 0 === t && (t = '/')
            let {
                pathname: n,
                search: r = '',
                hash: a = '',
              } = 'string' === typeof e ? h(e) : e,
              o = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/')
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e
                            ? n.length > 1 && n.pop()
                            : '.' !== e && n.push(e)
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      )
                    })(n, t)
                : t
            return { pathname: o, search: U(r), hash: B(a) }
          })(a, o),
          d = s && '/' !== s && s.endsWith('/'),
          f = (l || '.' === s) && n.endsWith('/')
        return c.pathname.endsWith('/') || (!d && !f) || (c.pathname += '/'), c
      }
      const F = (e) => e.join('/').replace(/\/\/+/g, '/'),
        A = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        U = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        B = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '')
      Error
      class V {
        constructor(e, t, n, r) {
          void 0 === r && (r = !1),
            (this.status = e),
            (this.statusText = t || ''),
            (this.internal = r),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n)
        }
      }
      function H(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        )
      }
      const $ = ['post', 'put', 'patch', 'delete'],
        W = new Set($),
        Z = ['get', ...$],
        Q = new Set(Z),
        G = new Set([301, 302, 303, 307, 308]),
        q = new Set([307, 308]),
        K = {
          state: 'idle',
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        Y = {
          state: 'idle',
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        X = {
          state: 'unblocked',
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        J = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ee = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
        te = 'remix-router-transitions'
      function ne(t) {
        const n = t.window
            ? t.window
            : 'undefined' !== typeof window
              ? window
              : void 0,
          r =
            'undefined' !== typeof n &&
            'undefined' !== typeof n.document &&
            'undefined' !== typeof n.document.createElement,
          a = !r
        let o
        if (
          (u(
            t.routes.length > 0,
            'You must provide a non-empty routes array to createRouter',
          ),
          t.mapRouteProperties)
        )
          o = t.mapRouteProperties
        else if (t.detectErrorBoundary) {
          let e = t.detectErrorBoundary
          o = (t) => ({ hasErrorBoundary: e(t) })
        } else o = ee
        let l,
          s,
          d = {},
          p = b(t.routes, o, void 0, d),
          h = t.basename || '/',
          m = t.unstable_dataStrategy || ce,
          v = i(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              unstable_skipActionErrorRevalidation: !1,
            },
            t.future,
          ),
          w = null,
          x = new Set(),
          k = null,
          S = null,
          C = null,
          E = null != t.hydrationData,
          N = y(p, t.history.location, h),
          _ = null
        if (null == N) {
          let e = Ce(404, { pathname: t.history.location.pathname }),
            { matches: n, route: r } = Se(p)
          ;(N = n), (_ = { [r.id]: e })
        }
        let j,
          P = N.some((e) => e.route.lazy),
          z = N.some((e) => e.route.loader)
        if (P) s = !1
        else if (z)
          if (v.v7_partialHydration) {
            let e = t.hydrationData ? t.hydrationData.loaderData : null,
              n = t.hydrationData ? t.hydrationData.errors : null,
              r = (t) =>
                !t.route.loader ||
                (('function' !== typeof t.route.loader ||
                  !0 !== t.route.loader.hydrate) &&
                  ((e && void 0 !== e[t.route.id]) ||
                    (n && void 0 !== n[t.route.id])))
            if (n) {
              let e = N.findIndex((e) => void 0 !== n[e.route.id])
              s = N.slice(0, e + 1).every(r)
            } else s = N.every(r)
          } else s = null != t.hydrationData
        else s = !0
        let L,
          T = {
            historyAction: t.history.action,
            location: t.history.location,
            matches: N,
            initialized: s,
            navigation: K,
            restoreScrollPosition: null == t.hydrationData && null,
            preventScrollReset: !1,
            revalidation: 'idle',
            loaderData: (t.hydrationData && t.hydrationData.loaderData) || {},
            actionData: (t.hydrationData && t.hydrationData.actionData) || null,
            errors: (t.hydrationData && t.hydrationData.errors) || _,
            fetchers: new Map(),
            blockers: new Map(),
          },
          M = e.Pop,
          D = !1,
          O = !1,
          I = new Map(),
          F = null,
          A = !1,
          U = !1,
          B = [],
          V = [],
          H = new Map(),
          $ = 0,
          W = -1,
          Z = new Map(),
          Q = new Set(),
          G = new Map(),
          ne = new Map(),
          oe = new Set(),
          ie = new Map(),
          se = new Map(),
          ue = !1
        function ge(e, t) {
          void 0 === t && (t = {}), (T = i({}, T, e))
          let n = [],
            r = []
          v.v7_fetcherPersist &&
            T.fetchers.forEach((e, t) => {
              'idle' === e.state && (oe.has(t) ? r.push(t) : n.push(t))
            }),
            [...x].forEach((e) =>
              e(T, {
                deletedFetchers: r,
                unstable_viewTransitionOpts: t.viewTransitionOpts,
                unstable_flushSync: !0 === t.flushSync,
              }),
            ),
            v.v7_fetcherPersist &&
              (n.forEach((e) => T.fetchers.delete(e)), r.forEach((e) => We(e)))
        }
        function ve(n, r, a) {
          var o, s
          let u,
            { flushSync: c } = void 0 === a ? {} : a,
            d =
              null != T.actionData &&
              null != T.navigation.formMethod &&
              Re(T.navigation.formMethod) &&
              'loading' === T.navigation.state &&
              !0 !== (null == (o = n.state) ? void 0 : o._isRedirect)
          u = r.actionData
            ? Object.keys(r.actionData).length > 0
              ? r.actionData
              : null
            : d
              ? T.actionData
              : null
          let f = r.loaderData
              ? we(T.loaderData, r.loaderData, r.matches || [], r.errors)
              : T.loaderData,
            h = T.blockers
          h.size > 0 && ((h = new Map(h)), h.forEach((e, t) => h.set(t, X)))
          let m,
            g =
              !0 === D ||
              (null != T.navigation.formMethod &&
                Re(T.navigation.formMethod) &&
                !0 !== (null == (s = n.state) ? void 0 : s._isRedirect))
          if (
            (l && ((p = l), (l = void 0)),
            A ||
              M === e.Pop ||
              (M === e.Push
                ? t.history.push(n, n.state)
                : M === e.Replace && t.history.replace(n, n.state)),
            M === e.Pop)
          ) {
            let e = I.get(T.location.pathname)
            e && e.has(n.pathname)
              ? (m = { currentLocation: T.location, nextLocation: n })
              : I.has(n.pathname) &&
                (m = { currentLocation: n, nextLocation: T.location })
          } else if (O) {
            let e = I.get(T.location.pathname)
            e
              ? e.add(n.pathname)
              : ((e = new Set([n.pathname])), I.set(T.location.pathname, e)),
              (m = { currentLocation: T.location, nextLocation: n })
          }
          ge(
            i({}, r, {
              actionData: u,
              loaderData: f,
              historyAction: M,
              location: n,
              initialized: !0,
              navigation: K,
              revalidation: 'idle',
              restoreScrollPosition: tt(n, r.matches || T.matches),
              preventScrollReset: g,
              blockers: h,
            }),
            { viewTransitionOpts: m, flushSync: !0 === c },
          ),
            (M = e.Pop),
            (D = !1),
            (O = !1),
            (A = !1),
            (U = !1),
            (B = []),
            (V = [])
        }
        async function be(n, r, a) {
          L && L.abort(),
            (L = null),
            (M = n),
            (A = !0 === (a && a.startUninterruptedRevalidation)),
            (function (e, t) {
              if (k && C) {
                let n = et(e, t)
                k[n] = C()
              }
            })(T.location, T.matches),
            (D = !0 === (a && a.preventScrollReset)),
            (O = !0 === (a && a.enableViewTransition))
          let o = l || p,
            s = a && a.overrideNavigation,
            u = y(o, r, h),
            c = !0 === (a && a.flushSync)
          if (!u) {
            let e = Ce(404, { pathname: r.pathname }),
              { matches: t, route: n } = Se(o)
            return (
              Je(),
              void ve(
                r,
                { matches: t, loaderData: {}, errors: { [n.id]: e } },
                { flushSync: c },
              )
            )
          }
          if (
            T.initialized &&
            !U &&
            (function (e, t) {
              if (e.pathname !== t.pathname || e.search !== t.search) return !1
              if ('' === e.hash) return '' !== t.hash
              if (e.hash === t.hash) return !0
              if ('' !== t.hash) return !0
              return !1
            })(T.location, r) &&
            !(a && a.submission && Re(a.submission.formMethod))
          )
            return void ve(r, { matches: u }, { flushSync: c })
          L = new AbortController()
          let d,
            f = me(t.history, r, L.signal, a && a.submission)
          if (a && a.pendingError)
            d = [ke(u).route.id, { type: g.error, error: a.pendingError }]
          else if (a && a.submission && Re(a.submission.formMethod)) {
            let n = await (async function (t, n, r, a, o) {
              void 0 === o && (o = {})
              Oe()
              let l,
                i = (function (e, t) {
                  let n = {
                    state: 'submitting',
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  }
                  return n
                })(n, r)
              ge({ navigation: i }, { flushSync: !0 === o.flushSync })
              let s = Ie(a, n)
              if (s.route.action || s.route.lazy) {
                if (
                  ((l = (await Le('action', t, [s], a))[0]), t.signal.aborted)
                )
                  return { shortCircuited: !0 }
              } else
                l = {
                  type: g.error,
                  error: Ce(405, {
                    method: t.method,
                    pathname: n.pathname,
                    routeId: s.route.id,
                  }),
                }
              if (ze(l)) {
                let e
                if (o && null != o.replace) e = o.replace
                else {
                  e =
                    he(
                      l.response.headers.get('Location'),
                      new URL(t.url),
                      h,
                    ) ===
                    T.location.pathname + T.location.search
                }
                return (
                  await Ne(t, l, { submission: r, replace: e }),
                  { shortCircuited: !0 }
                )
              }
              if (je(l)) throw Ce(400, { type: 'defer-action' })
              if (Pe(l)) {
                let t = ke(a, s.route.id)
                return (
                  !0 !== (o && o.replace) && (M = e.Push),
                  { pendingActionResult: [t.route.id, l] }
                )
              }
              return { pendingActionResult: [s.route.id, l] }
            })(f, r, a.submission, u, { replace: a.replace, flushSync: c })
            if (n.shortCircuited) return
            ;(d = n.pendingActionResult),
              (s = Ae(r, a.submission)),
              (c = !1),
              (f = me(t.history, f.url, f.signal))
          }
          let {
            shortCircuited: m,
            loaderData: b,
            errors: w,
          } = await (async function (e, n, r, a, o, s, u, c, d, f) {
            let m = a || Ae(n, o),
              g = o || s || Fe(m),
              b = l || p,
              [y, w] = le(
                t.history,
                T,
                r,
                g,
                n,
                v.v7_partialHydration && !0 === c,
                v.unstable_skipActionErrorRevalidation,
                U,
                B,
                V,
                oe,
                G,
                Q,
                b,
                h,
                f,
              )
            if (
              (Je(
                (e) =>
                  !(r && r.some((t) => t.route.id === e)) ||
                  (y && y.some((t) => t.route.id === e)),
              ),
              (W = ++$),
              0 === y.length && 0 === w.length)
            ) {
              let e = Ge()
              return (
                ve(
                  n,
                  i(
                    {
                      matches: r,
                      loaderData: {},
                      errors: f && Pe(f[1]) ? { [f[0]]: f[1].error } : null,
                    },
                    xe(f),
                    e ? { fetchers: new Map(T.fetchers) } : {},
                  ),
                  { flushSync: d },
                ),
                { shortCircuited: !0 }
              )
            }
            if (!A && (!v.v7_partialHydration || !c)) {
              let e
              w.forEach((e) => {
                let t = T.fetchers.get(e.key),
                  n = Ue(void 0, t ? t.data : void 0)
                T.fetchers.set(e.key, n)
              }),
                f && !Pe(f[1])
                  ? (e = { [f[0]]: f[1].data })
                  : T.actionData &&
                    (e =
                      0 === Object.keys(T.actionData).length
                        ? null
                        : T.actionData),
                ge(
                  i(
                    { navigation: m },
                    void 0 !== e ? { actionData: e } : {},
                    w.length > 0 ? { fetchers: new Map(T.fetchers) } : {},
                  ),
                  { flushSync: d },
                )
            }
            w.forEach((e) => {
              H.has(e.key) && Ze(e.key),
                e.controller && H.set(e.key, e.controller)
            })
            let x = () => w.forEach((e) => Ze(e.key))
            L && L.signal.addEventListener('abort', x)
            let { loaderResults: k, fetcherResults: S } = await Te(
              T.matches,
              r,
              y,
              w,
              e,
            )
            if (e.signal.aborted) return { shortCircuited: !0 }
            L && L.signal.removeEventListener('abort', x)
            w.forEach((e) => H.delete(e.key))
            let C = Ee([...k, ...S])
            if (C) {
              if (C.idx >= y.length) {
                let e = w[C.idx - y.length].key
                Q.add(e)
              }
              return (
                await Ne(e, C.result, { replace: u }), { shortCircuited: !0 }
              )
            }
            let { loaderData: E, errors: N } = ye(T, r, y, k, f, w, S, ie)
            ie.forEach((e, t) => {
              e.subscribe((n) => {
                ;(n || e.done) && ie.delete(t)
              })
            }),
              v.v7_partialHydration &&
                c &&
                T.errors &&
                Object.entries(T.errors)
                  .filter((e) => {
                    let [t] = e
                    return !y.some((e) => e.route.id === t)
                  })
                  .forEach((e) => {
                    let [t, n] = e
                    N = Object.assign(N || {}, { [t]: n })
                  })
            let _ = Ge(),
              j = qe(W),
              P = _ || j || w.length > 0
            return i(
              { loaderData: E, errors: N },
              P ? { fetchers: new Map(T.fetchers) } : {},
            )
          })(
            f,
            r,
            u,
            s,
            a && a.submission,
            a && a.fetcherSubmission,
            a && a.replace,
            a && !0 === a.initialHydration,
            c,
            d,
          )
          m ||
            ((L = null),
            ve(r, i({ matches: u }, xe(d), { loaderData: b, errors: w })))
        }
        async function Ne(a, o, l) {
          let {
            submission: s,
            fetcherSubmission: c,
            replace: d,
          } = void 0 === l ? {} : l
          o.response.headers.has('X-Remix-Revalidate') && (U = !0)
          let p = o.response.headers.get('Location')
          u(p, 'Expected a Location header on the redirect Response'),
            (p = he(p, new URL(a.url), h))
          let m = f(T.location, p, { _isRedirect: !0 })
          if (r) {
            let e = !1
            if (o.response.headers.has('X-Remix-Reload-Document')) e = !0
            else if (J.test(p)) {
              const r = t.history.createURL(p)
              e = r.origin !== n.location.origin || null == R(r.pathname, h)
            }
            if (e)
              return void (d ? n.location.replace(p) : n.location.assign(p))
          }
          L = null
          let g = !0 === d ? e.Replace : e.Push,
            { formMethod: v, formAction: b, formEncType: y } = T.navigation
          !s && !c && v && b && y && (s = Fe(T.navigation))
          let w = s || c
          if (q.has(o.response.status) && w && Re(w.formMethod))
            await be(g, m, {
              submission: i({}, w, { formAction: p }),
              preventScrollReset: D,
            })
          else {
            let e = Ae(m, s)
            await be(g, m, {
              overrideNavigation: e,
              fetcherSubmission: c,
              preventScrollReset: D,
            })
          }
        }
        async function Le(e, t, n, r) {
          try {
            let a = await de(m, e, t, n, r, d, o)
            return await Promise.all(
              a.map((e, a) => {
                if (_e(e)) {
                  let o = e.result
                  return {
                    type: g.redirect,
                    response: pe(
                      o,
                      t,
                      n[a].route.id,
                      r,
                      h,
                      v.v7_relativeSplatPath,
                    ),
                  }
                }
                return fe(e)
              }),
            )
          } catch (a) {
            return n.map(() => ({ type: g.error, error: a }))
          }
        }
        async function Te(e, n, r, a, o) {
          let [l, ...i] = await Promise.all([
            r.length ? Le('loader', o, r, n) : [],
            ...a.map((e) => {
              if (e.matches && e.match && e.controller) {
                return Le(
                  'loader',
                  me(t.history, e.path, e.controller.signal),
                  [e.match],
                  e.matches,
                ).then((e) => e[0])
              }
              return Promise.resolve({
                type: g.error,
                error: Ce(404, { pathname: e.path }),
              })
            }),
          ])
          return (
            await Promise.all([
              Me(
                e,
                r,
                l,
                l.map(() => o.signal),
                !1,
                T.loaderData,
              ),
              Me(
                e,
                a.map((e) => e.match),
                i,
                a.map((e) => (e.controller ? e.controller.signal : null)),
                !0,
              ),
            ]),
            { loaderResults: l, fetcherResults: i }
          )
        }
        function Oe() {
          ;(U = !0),
            B.push(...Je()),
            G.forEach((e, t) => {
              H.has(t) && (V.push(t), Ze(t))
            })
        }
        function Ve(e, t, n) {
          void 0 === n && (n = {}),
            T.fetchers.set(e, t),
            ge(
              { fetchers: new Map(T.fetchers) },
              { flushSync: !0 === (n && n.flushSync) },
            )
        }
        function He(e, t, n, r) {
          void 0 === r && (r = {})
          let a = ke(T.matches, t)
          We(e),
            ge(
              { errors: { [a.route.id]: n }, fetchers: new Map(T.fetchers) },
              { flushSync: !0 === (r && r.flushSync) },
            )
        }
        function $e(e) {
          return (
            v.v7_fetcherPersist &&
              (ne.set(e, (ne.get(e) || 0) + 1), oe.has(e) && oe.delete(e)),
            T.fetchers.get(e) || Y
          )
        }
        function We(e) {
          let t = T.fetchers.get(e)
          !H.has(e) || (t && 'loading' === t.state && Z.has(e)) || Ze(e),
            G.delete(e),
            Z.delete(e),
            Q.delete(e),
            oe.delete(e),
            T.fetchers.delete(e)
        }
        function Ze(e) {
          let t = H.get(e)
          u(t, 'Expected fetch controller: ' + e), t.abort(), H.delete(e)
        }
        function Qe(e) {
          for (let t of e) {
            let e = Be($e(t).data)
            T.fetchers.set(t, e)
          }
        }
        function Ge() {
          let e = [],
            t = !1
          for (let n of Q) {
            let r = T.fetchers.get(n)
            u(r, 'Expected fetcher: ' + n),
              'loading' === r.state && (Q.delete(n), e.push(n), (t = !0))
          }
          return Qe(e), t
        }
        function qe(e) {
          let t = []
          for (let [n, r] of Z)
            if (r < e) {
              let e = T.fetchers.get(n)
              u(e, 'Expected fetcher: ' + n),
                'loading' === e.state && (Ze(n), Z.delete(n), t.push(n))
            }
          return Qe(t), t.length > 0
        }
        function Ke(e) {
          T.blockers.delete(e), se.delete(e)
        }
        function Ye(e, t) {
          let n = T.blockers.get(e) || X
          u(
            ('unblocked' === n.state && 'blocked' === t.state) ||
              ('blocked' === n.state && 'blocked' === t.state) ||
              ('blocked' === n.state && 'proceeding' === t.state) ||
              ('blocked' === n.state && 'unblocked' === t.state) ||
              ('proceeding' === n.state && 'unblocked' === t.state),
            'Invalid blocker state transition: ' + n.state + ' -> ' + t.state,
          )
          let r = new Map(T.blockers)
          r.set(e, t), ge({ blockers: r })
        }
        function Xe(e) {
          let { currentLocation: t, nextLocation: n, historyAction: r } = e
          if (0 === se.size) return
          se.size > 1 && c(!1, 'A router only supports one blocker at a time')
          let a = Array.from(se.entries()),
            [o, l] = a[a.length - 1],
            i = T.blockers.get(o)
          return i && 'proceeding' === i.state
            ? void 0
            : l({ currentLocation: t, nextLocation: n, historyAction: r })
              ? o
              : void 0
        }
        function Je(e) {
          let t = []
          return (
            ie.forEach((n, r) => {
              ;(e && !e(r)) || (n.cancel(), t.push(r), ie.delete(r))
            }),
            t
          )
        }
        function et(e, t) {
          if (S) {
            let n = S(
              e,
              t.map((e) =>
                (function (e, t) {
                  let { route: n, pathname: r, params: a } = e
                  return {
                    id: n.id,
                    pathname: r,
                    params: a,
                    data: t[n.id],
                    handle: n.handle,
                  }
                })(e, T.loaderData),
              ),
            )
            return n || e.key
          }
          return e.key
        }
        function tt(e, t) {
          if (k) {
            let n = et(e, t),
              r = k[n]
            if ('number' === typeof r) return r
          }
          return null
        }
        return (
          (j = {
            get basename() {
              return h
            },
            get future() {
              return v
            },
            get state() {
              return T
            },
            get routes() {
              return p
            },
            get window() {
              return n
            },
            initialize: function () {
              if (
                ((w = t.history.listen((e) => {
                  let { action: n, location: r, delta: a } = e
                  if (ue) return void (ue = !1)
                  c(
                    0 === se.size || null != a,
                    'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
                  )
                  let o = Xe({
                    currentLocation: T.location,
                    nextLocation: r,
                    historyAction: n,
                  })
                  return o && null != a
                    ? ((ue = !0),
                      t.history.go(-1 * a),
                      void Ye(o, {
                        state: 'blocked',
                        location: r,
                        proceed() {
                          Ye(o, {
                            state: 'proceeding',
                            proceed: void 0,
                            reset: void 0,
                            location: r,
                          }),
                            t.history.go(a)
                        },
                        reset() {
                          let e = new Map(T.blockers)
                          e.set(o, X), ge({ blockers: e })
                        },
                      }))
                    : be(n, r)
                })),
                r)
              ) {
                !(function (e, t) {
                  try {
                    let n = e.sessionStorage.getItem(te)
                    if (n) {
                      let e = JSON.parse(n)
                      for (let [n, r] of Object.entries(e || {}))
                        r && Array.isArray(r) && t.set(n, new Set(r || []))
                    }
                  } catch (n) {}
                })(n, I)
                let e = () =>
                  (function (e, t) {
                    if (t.size > 0) {
                      let r = {}
                      for (let [e, n] of t) r[e] = [...n]
                      try {
                        e.sessionStorage.setItem(te, JSON.stringify(r))
                      } catch (n) {
                        c(
                          !1,
                          'Failed to save applied view transitions in sessionStorage (' +
                            n +
                            ').',
                        )
                      }
                    }
                  })(n, I)
                n.addEventListener('pagehide', e),
                  (F = () => n.removeEventListener('pagehide', e))
              }
              return (
                T.initialized ||
                  be(e.Pop, T.location, { initialHydration: !0 }),
                j
              )
            },
            subscribe: function (e) {
              return x.add(e), () => x.delete(e)
            },
            enableScrollRestoration: function (e, t, n) {
              if (
                ((k = e), (C = t), (S = n || null), !E && T.navigation === K)
              ) {
                E = !0
                let e = tt(T.location, T.matches)
                null != e && ge({ restoreScrollPosition: e })
              }
              return () => {
                ;(k = null), (C = null), (S = null)
              }
            },
            navigate: async function n(r, a) {
              if ('number' === typeof r) return void t.history.go(r)
              let o = re(
                  T.location,
                  T.matches,
                  h,
                  v.v7_prependBasename,
                  r,
                  v.v7_relativeSplatPath,
                  null == a ? void 0 : a.fromRouteId,
                  null == a ? void 0 : a.relative,
                ),
                {
                  path: l,
                  submission: s,
                  error: u,
                } = ae(v.v7_normalizeFormMethod, !1, o, a),
                c = T.location,
                d = f(T.location, l, a && a.state)
              d = i({}, d, t.history.encodeLocation(d))
              let p = a && null != a.replace ? a.replace : void 0,
                m = e.Push
              !0 === p
                ? (m = e.Replace)
                : !1 === p ||
                  (null != s &&
                    Re(s.formMethod) &&
                    s.formAction === T.location.pathname + T.location.search &&
                    (m = e.Replace))
              let g =
                  a && 'preventScrollReset' in a
                    ? !0 === a.preventScrollReset
                    : void 0,
                b = !0 === (a && a.unstable_flushSync),
                y = Xe({
                  currentLocation: c,
                  nextLocation: d,
                  historyAction: m,
                })
              if (!y)
                return await be(m, d, {
                  submission: s,
                  pendingError: u,
                  preventScrollReset: g,
                  replace: a && a.replace,
                  enableViewTransition: a && a.unstable_viewTransition,
                  flushSync: b,
                })
              Ye(y, {
                state: 'blocked',
                location: d,
                proceed() {
                  Ye(y, {
                    state: 'proceeding',
                    proceed: void 0,
                    reset: void 0,
                    location: d,
                  }),
                    n(r, a)
                },
                reset() {
                  let e = new Map(T.blockers)
                  e.set(y, X), ge({ blockers: e })
                },
              })
            },
            fetch: function (e, n, r, o) {
              if (a)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                )
              H.has(e) && Ze(e)
              let i = !0 === (o && o.unstable_flushSync),
                s = l || p,
                c = re(
                  T.location,
                  T.matches,
                  h,
                  v.v7_prependBasename,
                  r,
                  v.v7_relativeSplatPath,
                  n,
                  null == o ? void 0 : o.relative,
                ),
                d = y(s, c, h)
              if (!d)
                return void He(e, n, Ce(404, { pathname: c }), { flushSync: i })
              let {
                path: f,
                submission: m,
                error: g,
              } = ae(v.v7_normalizeFormMethod, !0, c, o)
              if (g) return void He(e, n, g, { flushSync: i })
              let b = Ie(d, f)
              ;(D = !0 === (o && o.preventScrollReset)),
                m && Re(m.formMethod)
                  ? (async function (e, n, r, a, o, i, s) {
                      if (
                        (Oe(), G.delete(e), !a.route.action && !a.route.lazy)
                      ) {
                        let t = Ce(405, {
                          method: s.formMethod,
                          pathname: r,
                          routeId: n,
                        })
                        return void He(e, n, t, { flushSync: i })
                      }
                      let c = T.fetchers.get(e)
                      Ve(
                        e,
                        (function (e, t) {
                          let n = {
                            state: 'submitting',
                            formMethod: e.formMethod,
                            formAction: e.formAction,
                            formEncType: e.formEncType,
                            formData: e.formData,
                            json: e.json,
                            text: e.text,
                            data: t ? t.data : void 0,
                          }
                          return n
                        })(s, c),
                        { flushSync: i },
                      )
                      let d = new AbortController(),
                        f = me(t.history, r, d.signal, s)
                      H.set(e, d)
                      let m = $,
                        g = await Le('action', f, [a], o),
                        b = g[0]
                      if (f.signal.aborted)
                        return void (H.get(e) === d && H.delete(e))
                      if (v.v7_fetcherPersist && oe.has(e)) {
                        if (ze(b) || Pe(b)) return void Ve(e, Be(void 0))
                      } else {
                        if (ze(b))
                          return (
                            H.delete(e),
                            W > m
                              ? void Ve(e, Be(void 0))
                              : (Q.add(e),
                                Ve(e, Ue(s)),
                                Ne(f, b, { fetcherSubmission: s }))
                          )
                        if (Pe(b)) return void He(e, n, b.error)
                      }
                      if (je(b)) throw Ce(400, { type: 'defer-action' })
                      let w = T.navigation.location || T.location,
                        x = me(t.history, w, d.signal),
                        k = l || p,
                        S =
                          'idle' !== T.navigation.state
                            ? y(k, T.navigation.location, h)
                            : T.matches
                      u(S, "Didn't find any matches after fetcher action")
                      let C = ++$
                      Z.set(e, C)
                      let E = Ue(s, b.data)
                      T.fetchers.set(e, E)
                      let [N, _] = le(
                        t.history,
                        T,
                        S,
                        s,
                        w,
                        !1,
                        v.unstable_skipActionErrorRevalidation,
                        U,
                        B,
                        V,
                        oe,
                        G,
                        Q,
                        k,
                        h,
                        [a.route.id, b],
                      )
                      _.filter((t) => t.key !== e).forEach((e) => {
                        let t = e.key,
                          n = T.fetchers.get(t),
                          r = Ue(void 0, n ? n.data : void 0)
                        T.fetchers.set(t, r),
                          H.has(t) && Ze(t),
                          e.controller && H.set(t, e.controller)
                      }),
                        ge({ fetchers: new Map(T.fetchers) })
                      let j = () => _.forEach((e) => Ze(e.key))
                      d.signal.addEventListener('abort', j)
                      let { loaderResults: P, fetcherResults: z } = await Te(
                        T.matches,
                        S,
                        N,
                        _,
                        x,
                      )
                      if (d.signal.aborted) return
                      d.signal.removeEventListener('abort', j),
                        Z.delete(e),
                        H.delete(e),
                        _.forEach((e) => H.delete(e.key))
                      let R = Ee([...P, ...z])
                      if (R) {
                        if (R.idx >= N.length) {
                          let e = _[R.idx - N.length].key
                          Q.add(e)
                        }
                        return Ne(x, R.result)
                      }
                      let { loaderData: D, errors: O } = ye(
                        T,
                        T.matches,
                        N,
                        P,
                        void 0,
                        _,
                        z,
                        ie,
                      )
                      if (T.fetchers.has(e)) {
                        let t = Be(b.data)
                        T.fetchers.set(e, t)
                      }
                      qe(C),
                        'loading' === T.navigation.state && C > W
                          ? (u(M, 'Expected pending action'),
                            L && L.abort(),
                            ve(T.navigation.location, {
                              matches: S,
                              loaderData: D,
                              errors: O,
                              fetchers: new Map(T.fetchers),
                            }))
                          : (ge({
                              errors: O,
                              loaderData: we(T.loaderData, D, S, O),
                              fetchers: new Map(T.fetchers),
                            }),
                            (U = !1))
                    })(e, n, f, b, d, i, m)
                  : (G.set(e, { routeId: n, path: f }),
                    (async function (e, n, r, a, o, l, i) {
                      let s = T.fetchers.get(e)
                      Ve(e, Ue(i, s ? s.data : void 0), { flushSync: l })
                      let c = new AbortController(),
                        d = me(t.history, r, c.signal)
                      H.set(e, c)
                      let f = $,
                        p = await Le('loader', d, [a], o),
                        h = p[0]
                      je(h) && (h = (await De(h, d.signal, !0)) || h)
                      H.get(e) === c && H.delete(e)
                      if (d.signal.aborted) return
                      if (oe.has(e)) return void Ve(e, Be(void 0))
                      if (ze(h))
                        return W > f
                          ? void Ve(e, Be(void 0))
                          : (Q.add(e), void (await Ne(d, h)))
                      if (Pe(h)) return void He(e, n, h.error)
                      u(!je(h), 'Unhandled fetcher deferred data'),
                        Ve(e, Be(h.data))
                    })(e, n, f, b, d, i, m))
            },
            revalidate: function () {
              Oe(),
                ge({ revalidation: 'loading' }),
                'submitting' !== T.navigation.state &&
                  ('idle' !== T.navigation.state
                    ? be(M || T.historyAction, T.navigation.location, {
                        overrideNavigation: T.navigation,
                      })
                    : be(T.historyAction, T.location, {
                        startUninterruptedRevalidation: !0,
                      }))
            },
            createHref: (e) => t.history.createHref(e),
            encodeLocation: (e) => t.history.encodeLocation(e),
            getFetcher: $e,
            deleteFetcher: function (e) {
              if (v.v7_fetcherPersist) {
                let t = (ne.get(e) || 0) - 1
                t <= 0 ? (ne.delete(e), oe.add(e)) : ne.set(e, t)
              } else We(e)
              ge({ fetchers: new Map(T.fetchers) })
            },
            dispose: function () {
              w && w(),
                F && F(),
                x.clear(),
                L && L.abort(),
                T.fetchers.forEach((e, t) => We(t)),
                T.blockers.forEach((e, t) => Ke(t))
            },
            getBlocker: function (e, t) {
              let n = T.blockers.get(e) || X
              return se.get(e) !== t && se.set(e, t), n
            },
            deleteBlocker: Ke,
            _internalFetchControllers: H,
            _internalActiveDeferreds: ie,
            _internalSetRoutes: function (e) {
              ;(d = {}), (l = b(e, o, void 0, d))
            },
          }),
          j
        )
      }
      Symbol('deferred')
      function re(e, t, n, r, a, o, l, i) {
        let s, u
        if (l) {
          s = []
          for (let e of t)
            if ((s.push(e), e.route.id === l)) {
              u = e
              break
            }
        } else (s = t), (u = t[t.length - 1])
        let c = I(
          a || '.',
          O(s, o),
          R(e.pathname, n) || e.pathname,
          'path' === i,
        )
        return (
          null == a && ((c.search = e.search), (c.hash = e.hash)),
          (null != a && '' !== a && '.' !== a) ||
            !u ||
            !u.route.index ||
            Oe(c.search) ||
            (c.search = c.search
              ? c.search.replace(/^\?/, '?index&')
              : '?index'),
          r &&
            '/' !== n &&
            (c.pathname = '/' === c.pathname ? n : F([n, c.pathname])),
          p(c)
        )
      }
      function ae(e, t, n, r) {
        if (
          !r ||
          !(function (e) {
            return (
              null != e &&
              (('formData' in e && null != e.formData) ||
                ('body' in e && void 0 !== e.body))
            )
          })(r)
        )
          return { path: n }
        if (r.formMethod && !Te(r.formMethod))
          return { path: n, error: Ce(405, { method: r.formMethod }) }
        let a,
          o,
          l = () => ({ path: n, error: Ce(400, { type: 'invalid-body' }) }),
          i = r.formMethod || 'get',
          s = e ? i.toUpperCase() : i.toLowerCase(),
          c = Ne(n)
        if (void 0 !== r.body) {
          if ('text/plain' === r.formEncType) {
            if (!Re(s)) return l()
            let e =
              'string' === typeof r.body
                ? r.body
                : r.body instanceof FormData ||
                    r.body instanceof URLSearchParams
                  ? Array.from(r.body.entries()).reduce((e, t) => {
                      let [n, r] = t
                      return '' + e + n + '=' + r + '\n'
                    }, '')
                  : String(r.body)
            return {
              path: n,
              submission: {
                formMethod: s,
                formAction: c,
                formEncType: r.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            }
          }
          if ('application/json' === r.formEncType) {
            if (!Re(s)) return l()
            try {
              let e = 'string' === typeof r.body ? JSON.parse(r.body) : r.body
              return {
                path: n,
                submission: {
                  formMethod: s,
                  formAction: c,
                  formEncType: r.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              }
            } catch (m) {
              return l()
            }
          }
        }
        if (
          (u(
            'function' === typeof FormData,
            'FormData is not available in this environment',
          ),
          r.formData)
        )
          (a = ge(r.formData)), (o = r.formData)
        else if (r.body instanceof FormData) (a = ge(r.body)), (o = r.body)
        else if (r.body instanceof URLSearchParams) (a = r.body), (o = ve(a))
        else if (null == r.body)
          (a = new URLSearchParams()), (o = new FormData())
        else
          try {
            ;(a = new URLSearchParams(r.body)), (o = ve(a))
          } catch (m) {
            return l()
          }
        let d = {
          formMethod: s,
          formAction: c,
          formEncType:
            (r && r.formEncType) || 'application/x-www-form-urlencoded',
          formData: o,
          json: void 0,
          text: void 0,
        }
        if (Re(d.formMethod)) return { path: n, submission: d }
        let f = h(n)
        return (
          t && f.search && Oe(f.search) && a.append('index', ''),
          (f.search = '?' + a),
          { path: p(f), submission: d }
        )
      }
      function oe(e, t) {
        let n = e
        if (t) {
          let r = e.findIndex((e) => e.route.id === t)
          r >= 0 && (n = e.slice(0, r))
        }
        return n
      }
      function le(e, t, n, r, a, o, l, s, u, c, d, f, p, h, m, g) {
        let v = g ? (Pe(g[1]) ? g[1].error : g[1].data) : void 0,
          b = e.createURL(t.location),
          w = e.createURL(a),
          x = g && Pe(g[1]) ? g[0] : void 0,
          k = x ? oe(n, x) : n,
          S = g ? g[1].statusCode : void 0,
          C = l && S && S >= 400,
          E = k.filter((e, n) => {
            let { route: a } = e
            if (a.lazy) return !0
            if (null == a.loader) return !1
            if (o)
              return (
                !('function' === typeof a.loader && !a.loader.hydrate) ||
                (void 0 === t.loaderData[a.id] &&
                  (!t.errors || void 0 === t.errors[a.id]))
              )
            if (
              (function (e, t, n) {
                let r = !t || n.route.id !== t.route.id,
                  a = void 0 === e[n.route.id]
                return r || a
              })(t.loaderData, t.matches[n], e) ||
              u.some((t) => t === e.route.id)
            )
              return !0
            let l = t.matches[n],
              c = e
            return se(
              e,
              i(
                {
                  currentUrl: b,
                  currentParams: l.params,
                  nextUrl: w,
                  nextParams: c.params,
                },
                r,
                {
                  actionResult: v,
                  unstable_actionStatus: S,
                  defaultShouldRevalidate:
                    !C &&
                    (s ||
                      b.pathname + b.search === w.pathname + w.search ||
                      b.search !== w.search ||
                      ie(l, c)),
                },
              ),
            )
          }),
          N = []
        return (
          f.forEach((e, a) => {
            if (o || !n.some((t) => t.route.id === e.routeId) || d.has(a))
              return
            let l = y(h, e.path, m)
            if (!l)
              return void N.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              })
            let u = t.fetchers.get(a),
              f = Ie(l, e.path),
              g = !1
            ;(g =
              !p.has(a) &&
              (!!c.includes(a) ||
                (u && 'idle' !== u.state && void 0 === u.data
                  ? s
                  : se(
                      f,
                      i(
                        {
                          currentUrl: b,
                          currentParams: t.matches[t.matches.length - 1].params,
                          nextUrl: w,
                          nextParams: n[n.length - 1].params,
                        },
                        r,
                        {
                          actionResult: v,
                          unstable_actionStatus: S,
                          defaultShouldRevalidate: !C && s,
                        },
                      ),
                    )))),
              g &&
                N.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: l,
                  match: f,
                  controller: new AbortController(),
                })
          }),
          [E, N]
        )
      }
      function ie(e, t) {
        let n = e.route.path
        return (
          e.pathname !== t.pathname ||
          (null != n && n.endsWith('*') && e.params['*'] !== t.params['*'])
        )
      }
      function se(e, t) {
        if (e.route.shouldRevalidate) {
          let n = e.route.shouldRevalidate(t)
          if ('boolean' === typeof n) return n
        }
        return t.defaultShouldRevalidate
      }
      async function ue(e, t, n) {
        if (!e.lazy) return
        let r = await e.lazy()
        if (!e.lazy) return
        let a = n[e.id]
        u(a, 'No route found in manifest')
        let o = {}
        for (let l in r) {
          let e = void 0 !== a[l] && 'hasErrorBoundary' !== l
          c(
            !e,
            'Route "' +
              a.id +
              '" has a static property "' +
              l +
              '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
              l +
              '" will be ignored.',
          ),
            e || v.has(l) || (o[l] = r[l])
        }
        Object.assign(a, o), Object.assign(a, i({}, t(a), { lazy: void 0 }))
      }
      function ce(e) {
        return Promise.all(e.matches.map((e) => e.resolve()))
      }
      async function de(e, t, n, r, a, o, l, s) {
        let c = r.reduce((e, t) => e.add(t.route.id), new Set()),
          d = new Set(),
          f = await e({
            matches: a.map((e) => {
              let r = c.has(e.route.id)
              return i({}, e, {
                shouldLoad: r,
                resolve: (a) => (
                  d.add(e.route.id),
                  r
                    ? (async function (e, t, n, r, a, o, l) {
                        let i,
                          s,
                          c = (r) => {
                            let a,
                              i = new Promise((e, t) => (a = t))
                            ;(s = () => a()),
                              t.signal.addEventListener('abort', s)
                            let u,
                              c = (a) =>
                                'function' !== typeof r
                                  ? Promise.reject(
                                      new Error(
                                        'You cannot call the handler for a route which defines a boolean "' +
                                          e +
                                          '" [routeId: ' +
                                          n.route.id +
                                          ']',
                                      ),
                                    )
                                  : r(
                                      {
                                        request: t,
                                        params: n.params,
                                        context: l,
                                      },
                                      ...(void 0 !== a ? [a] : []),
                                    )
                            return (
                              (u = o
                                ? o((e) => c(e))
                                : (async () => {
                                    try {
                                      return { type: 'data', result: await c() }
                                    } catch (e) {
                                      return { type: 'error', result: e }
                                    }
                                  })()),
                              Promise.race([u, i])
                            )
                          }
                        try {
                          let o = n.route[e]
                          if (n.route.lazy)
                            if (o) {
                              let e,
                                [t] = await Promise.all([
                                  c(o).catch((t) => {
                                    e = t
                                  }),
                                  ue(n.route, a, r),
                                ])
                              if (void 0 !== e) throw e
                              i = t
                            } else {
                              if (
                                (await ue(n.route, a, r), (o = n.route[e]), !o)
                              ) {
                                if ('action' === e) {
                                  let e = new URL(t.url),
                                    r = e.pathname + e.search
                                  throw Ce(405, {
                                    method: t.method,
                                    pathname: r,
                                    routeId: n.route.id,
                                  })
                                }
                                return { type: g.data, result: void 0 }
                              }
                              i = await c(o)
                            }
                          else {
                            if (!o) {
                              let e = new URL(t.url)
                              throw Ce(404, { pathname: e.pathname + e.search })
                            }
                            i = await c(o)
                          }
                          u(
                            void 0 !== i.result,
                            'You defined ' +
                              ('action' === e ? 'an action' : 'a loader') +
                              ' for route "' +
                              n.route.id +
                              '" but didn\'t return anything from your `' +
                              e +
                              '` function. Please return a value or `null`.',
                          )
                        } catch (d) {
                          return { type: g.error, result: d }
                        } finally {
                          s && t.signal.removeEventListener('abort', s)
                        }
                        return i
                      })(t, n, e, o, l, a, s)
                    : Promise.resolve({ type: g.data, result: void 0 })
                ),
              })
            }),
            request: n,
            params: a[0].params,
            context: s,
          })
        return (
          a.forEach((e) =>
            u(
              d.has(e.route.id),
              '`match.resolve()` was not called for route id "' +
                e.route.id +
                '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
            ),
          ),
          f.filter((e, t) => c.has(a[t].route.id))
        )
      }
      async function fe(e) {
        let { result: t, type: n, status: r } = e
        if (Le(t)) {
          let e
          try {
            let n = t.headers.get('Content-Type')
            e =
              n && /\bapplication\/json\b/.test(n)
                ? null == t.body
                  ? null
                  : await t.json()
                : await t.text()
          } catch (l) {
            return { type: g.error, error: l }
          }
          return n === g.error
            ? {
                type: g.error,
                error: new V(t.status, t.statusText, e),
                statusCode: t.status,
                headers: t.headers,
              }
            : {
                type: g.data,
                data: e,
                statusCode: t.status,
                headers: t.headers,
              }
        }
        return n === g.error
          ? { type: g.error, error: t, statusCode: H(t) ? t.status : r }
          : (function (e) {
                let t = e
                return (
                  t &&
                  'object' === typeof t &&
                  'object' === typeof t.data &&
                  'function' === typeof t.subscribe &&
                  'function' === typeof t.cancel &&
                  'function' === typeof t.resolveData
                )
              })(t)
            ? {
                type: g.deferred,
                deferredData: t,
                statusCode: null == (a = t.init) ? void 0 : a.status,
                headers:
                  (null == (o = t.init) ? void 0 : o.headers) &&
                  new Headers(t.init.headers),
              }
            : { type: g.data, data: t, statusCode: r }
        var a, o
      }
      function pe(e, t, n, r, a, o) {
        let l = e.headers.get('Location')
        if (
          (u(
            l,
            'Redirects returned/thrown from loaders/actions must have a Location header',
          ),
          !J.test(l))
        ) {
          let i = r.slice(0, r.findIndex((e) => e.route.id === n) + 1)
          ;(l = re(new URL(t.url), i, a, !0, l, o)),
            e.headers.set('Location', l)
        }
        return e
      }
      function he(e, t, n) {
        if (J.test(e)) {
          let r = e,
            a = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
            o = null != R(a.pathname, n)
          if (a.origin === t.origin && o) return a.pathname + a.search + a.hash
        }
        return e
      }
      function me(e, t, n, r) {
        let a = e.createURL(Ne(t)).toString(),
          o = { signal: n }
        if (r && Re(r.formMethod)) {
          let { formMethod: e, formEncType: t } = r
          ;(o.method = e.toUpperCase()),
            'application/json' === t
              ? ((o.headers = new Headers({ 'Content-Type': t })),
                (o.body = JSON.stringify(r.json)))
              : 'text/plain' === t
                ? (o.body = r.text)
                : 'application/x-www-form-urlencoded' === t && r.formData
                  ? (o.body = ge(r.formData))
                  : (o.body = r.formData)
        }
        return new Request(a, o)
      }
      function ge(e) {
        let t = new URLSearchParams()
        for (let [n, r] of e.entries())
          t.append(n, 'string' === typeof r ? r : r.name)
        return t
      }
      function ve(e) {
        let t = new FormData()
        for (let [n, r] of e.entries()) t.append(n, r)
        return t
      }
      function be(e, t, n, r, a, o) {
        let l,
          i = {},
          s = null,
          c = !1,
          d = {},
          f = r && Pe(r[1]) ? r[1].error : void 0
        return (
          n.forEach((n, r) => {
            let p = t[r].route.id
            if (
              (u(!ze(n), 'Cannot handle redirect results in processLoaderData'),
              Pe(n))
            ) {
              let t = n.error
              if ((void 0 !== f && ((t = f), (f = void 0)), (s = s || {}), o))
                s[p] = t
              else {
                let n = ke(e, p)
                null == s[n.route.id] && (s[n.route.id] = t)
              }
              ;(i[p] = void 0),
                c || ((c = !0), (l = H(n.error) ? n.error.status : 500)),
                n.headers && (d[p] = n.headers)
            } else
              je(n)
                ? (a.set(p, n.deferredData),
                  (i[p] = n.deferredData.data),
                  null == n.statusCode ||
                    200 === n.statusCode ||
                    c ||
                    (l = n.statusCode),
                  n.headers && (d[p] = n.headers))
                : ((i[p] = n.data),
                  n.statusCode &&
                    200 !== n.statusCode &&
                    !c &&
                    (l = n.statusCode),
                  n.headers && (d[p] = n.headers))
          }),
          void 0 !== f && r && ((s = { [r[0]]: f }), (i[r[0]] = void 0)),
          { loaderData: i, errors: s, statusCode: l || 200, loaderHeaders: d }
        )
      }
      function ye(e, t, n, r, a, o, l, s) {
        let { loaderData: c, errors: d } = be(t, n, r, a, s, !1)
        for (let f = 0; f < o.length; f++) {
          let { key: t, match: n, controller: r } = o[f]
          u(
            void 0 !== l && void 0 !== l[f],
            'Did not find corresponding fetcher result',
          )
          let a = l[f]
          if (!r || !r.signal.aborted)
            if (Pe(a)) {
              let r = ke(e.matches, null == n ? void 0 : n.route.id)
              ;(d && d[r.route.id]) ||
                (d = i({}, d, { [r.route.id]: a.error })),
                e.fetchers.delete(t)
            } else if (ze(a)) u(!1, 'Unhandled fetcher revalidation redirect')
            else if (je(a)) u(!1, 'Unhandled fetcher deferred data')
            else {
              let n = Be(a.data)
              e.fetchers.set(t, n)
            }
        }
        return { loaderData: c, errors: d }
      }
      function we(e, t, n, r) {
        let a = i({}, t)
        for (let o of n) {
          let n = o.route.id
          if (
            (t.hasOwnProperty(n)
              ? void 0 !== t[n] && (a[n] = t[n])
              : void 0 !== e[n] && o.route.loader && (a[n] = e[n]),
            r && r.hasOwnProperty(n))
          )
            break
        }
        return a
      }
      function xe(e) {
        return e
          ? Pe(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {}
      }
      function ke(e, t) {
        let n = t
          ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
          : [...e]
        return n.reverse().find((e) => !0 === e.route.hasErrorBoundary) || e[0]
      }
      function Se(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || '/' === e.path) || {
                id: '__shim-error-route__',
              }
        return {
          matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
          route: t,
        }
      }
      function Ce(e, t) {
        let {
            pathname: n,
            routeId: r,
            method: a,
            type: o,
          } = void 0 === t ? {} : t,
          l = 'Unknown Server Error',
          i = 'Unknown @remix-run/router error'
        return (
          400 === e
            ? ((l = 'Bad Request'),
              a && n && r
                ? (i =
                    'You made a ' +
                    a +
                    ' request to "' +
                    n +
                    '" but did not provide a `loader` for route "' +
                    r +
                    '", so there is no way to handle the request.')
                : 'defer-action' === o
                  ? (i = 'defer() is not supported in actions')
                  : 'invalid-body' === o &&
                    (i = 'Unable to encode submission body'))
            : 403 === e
              ? ((l = 'Forbidden'),
                (i = 'Route "' + r + '" does not match URL "' + n + '"'))
              : 404 === e
                ? ((l = 'Not Found'), (i = 'No route matches URL "' + n + '"'))
                : 405 === e &&
                  ((l = 'Method Not Allowed'),
                  a && n && r
                    ? (i =
                        'You made a ' +
                        a.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but did not provide an `action` for route "' +
                        r +
                        '", so there is no way to handle the request.')
                    : a &&
                      (i = 'Invalid request method "' + a.toUpperCase() + '"')),
          new V(e || 500, l, new Error(i), !0)
        )
      }
      function Ee(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t]
          if (ze(n)) return { result: n, idx: t }
        }
      }
      function Ne(e) {
        return p(i({}, 'string' === typeof e ? h(e) : e, { hash: '' }))
      }
      function _e(e) {
        return Le(e.result) && G.has(e.result.status)
      }
      function je(e) {
        return e.type === g.deferred
      }
      function Pe(e) {
        return e.type === g.error
      }
      function ze(e) {
        return (e && e.type) === g.redirect
      }
      function Le(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'object' === typeof e.headers &&
          'undefined' !== typeof e.body
        )
      }
      function Te(e) {
        return Q.has(e.toLowerCase())
      }
      function Re(e) {
        return W.has(e.toLowerCase())
      }
      async function Me(e, t, n, r, a, o) {
        for (let l = 0; l < n.length; l++) {
          let i = n[l],
            s = t[l]
          if (!s) continue
          let c = e.find((e) => e.route.id === s.route.id),
            d = null != c && !ie(c, s) && void 0 !== (o && o[s.route.id])
          if (je(i) && (a || d)) {
            let e = r[l]
            u(
              e,
              'Expected an AbortSignal for revalidating fetcher deferred result',
            ),
              await De(i, e, a).then((e) => {
                e && (n[l] = e || n[l])
              })
          }
        }
      }
      async function De(e, t, n) {
        if (
          (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (n)
            try {
              return { type: g.data, data: e.deferredData.unwrappedData }
            } catch (r) {
              return { type: g.error, error: r }
            }
          return { type: g.data, data: e.deferredData.data }
        }
      }
      function Oe(e) {
        return new URLSearchParams(e).getAll('index').some((e) => '' === e)
      }
      function Ie(e, t) {
        let n = 'string' === typeof t ? h(t).search : t.search
        if (e[e.length - 1].route.index && Oe(n || '')) return e[e.length - 1]
        let r = D(e)
        return r[r.length - 1]
      }
      function Fe(e) {
        let {
          formMethod: t,
          formAction: n,
          formEncType: r,
          text: a,
          formData: o,
          json: l,
        } = e
        if (t && n && r)
          return null != a
            ? {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a,
              }
            : null != o
              ? {
                  formMethod: t,
                  formAction: n,
                  formEncType: r,
                  formData: o,
                  json: void 0,
                  text: void 0,
                }
              : void 0 !== l
                ? {
                    formMethod: t,
                    formAction: n,
                    formEncType: r,
                    formData: void 0,
                    json: l,
                    text: void 0,
                  }
                : void 0
      }
      function Ae(e, t) {
        if (t) {
          return {
            state: 'loading',
            location: e,
            formMethod: t.formMethod,
            formAction: t.formAction,
            formEncType: t.formEncType,
            formData: t.formData,
            json: t.json,
            text: t.text,
          }
        }
        return {
          state: 'loading',
          location: e,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        }
      }
      function Ue(e, t) {
        if (e) {
          return {
            state: 'loading',
            formMethod: e.formMethod,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formData: e.formData,
            json: e.json,
            text: e.text,
            data: t,
          }
        }
        return {
          state: 'loading',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: t,
        }
      }
      function Be(e) {
        return {
          state: 'idle',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        }
      }
      function Ve() {
        return (
          (Ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Ve.apply(this, arguments)
        )
      }
      const He = t.createContext(null)
      const $e = t.createContext(null)
      const We = t.createContext(null)
      const Ze = t.createContext(null)
      const Qe = t.createContext({ outlet: null, matches: [], isDataRoute: !1 })
      const Ge = t.createContext(null)
      function qe() {
        return null != t.useContext(Ze)
      }
      function Ke() {
        return qe() || u(!1), t.useContext(Ze).location
      }
      function Ye(e) {
        t.useContext(We).static || t.useLayoutEffect(e)
      }
      function Xe() {
        let { isDataRoute: e } = t.useContext(Qe)
        return e
          ? (function () {
              let { router: e } = ut(it.UseNavigateStable),
                n = dt(st.UseNavigateStable),
                r = t.useRef(!1)
              Ye(() => {
                r.current = !0
              })
              let a = t.useCallback(
                function (t, a) {
                  void 0 === a && (a = {}),
                    r.current &&
                      ('number' === typeof t
                        ? e.navigate(t)
                        : e.navigate(t, Ve({ fromRouteId: n }, a)))
                },
                [e, n],
              )
              return a
            })()
          : (function () {
              qe() || u(!1)
              let e = t.useContext(He),
                { basename: n, future: r, navigator: a } = t.useContext(We),
                { matches: o } = t.useContext(Qe),
                { pathname: l } = Ke(),
                i = JSON.stringify(O(o, r.v7_relativeSplatPath)),
                s = t.useRef(!1)
              Ye(() => {
                s.current = !0
              })
              let c = t.useCallback(
                function (t, r) {
                  if ((void 0 === r && (r = {}), !s.current)) return
                  if ('number' === typeof t) return void a.go(t)
                  let o = I(t, JSON.parse(i), l, 'path' === r.relative)
                  null == e &&
                    '/' !== n &&
                    (o.pathname = '/' === o.pathname ? n : F([n, o.pathname])),
                    (r.replace ? a.replace : a.push)(o, r.state, r)
                },
                [n, a, i, l, e],
              )
              return c
            })()
      }
      const Je = t.createContext(null)
      function et(e, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = t.useContext(We),
          { matches: o } = t.useContext(Qe),
          { pathname: l } = Ke(),
          i = JSON.stringify(O(o, a.v7_relativeSplatPath))
        return t.useMemo(
          () => I(e, JSON.parse(i), l, 'path' === r),
          [e, i, l, r],
        )
      }
      function tt(n, r, a, o) {
        qe() || u(!1)
        let { navigator: l } = t.useContext(We),
          { matches: i } = t.useContext(Qe),
          s = i[i.length - 1],
          c = s ? s.params : {},
          d = (s && s.pathname, s ? s.pathnameBase : '/')
        s && s.route
        let f,
          p = Ke()
        if (r) {
          var m
          let e = 'string' === typeof r ? h(r) : r
          '/' === d ||
            (null == (m = e.pathname) ? void 0 : m.startsWith(d)) ||
            u(!1),
            (f = e)
        } else f = p
        let g = f.pathname || '/',
          v = g
        if ('/' !== d) {
          let e = d.replace(/^\//, '').split('/')
          v = '/' + g.replace(/^\//, '').split('/').slice(e.length).join('/')
        }
        let b = y(n, { pathname: v })
        let w = lt(
          b &&
            b.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: F([
                  d,
                  l.encodeLocation
                    ? l.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? d
                    : F([
                        d,
                        l.encodeLocation
                          ? l.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          i,
          a,
          o,
        )
        return r && w
          ? t.createElement(
              Ze.Provider,
              {
                value: {
                  location: Ve(
                    {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                    },
                    f,
                  ),
                  navigationType: e.Pop,
                },
              },
              w,
            )
          : w
      }
      function nt() {
        let e = (function () {
            var e
            let n = t.useContext(Ge),
              r = ct(st.UseRouteError),
              a = dt(st.UseRouteError)
            if (void 0 !== n) return n
            return null == (e = r.errors) ? void 0 : e[a]
          })(),
          n = H(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          o = { padding: '0.5rem', backgroundColor: a }
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('h2', null, 'Unexpected Application Error!'),
          t.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? t.createElement('pre', { style: o }, r) : null,
          null,
        )
      }
      const rt = t.createElement(nt, null)
      class at extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            })
        }
        static getDerivedStateFromError(e) {
          return { error: e }
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              }
        }
        componentDidCatch(e, t) {
          console.error(
            'React Router caught the following error during render',
            e,
            t,
          )
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                Qe.Provider,
                { value: this.props.routeContext },
                t.createElement(Ge.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children
        }
      }
      function ot(e) {
        let { routeContext: n, match: r, children: a } = e,
          o = t.useContext(He)
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(Qe.Provider, { value: n }, a)
        )
      }
      function lt(e, n, r, a) {
        var o
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var l
          if (null == (l = r) || !l.errors) return null
          e = r.matches
        }
        let i = e,
          s = null == (o = r) ? void 0 : o.errors
        if (null != s) {
          let e = i.findIndex(
            (e) =>
              e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]),
          )
          e >= 0 || u(!1), (i = i.slice(0, Math.min(i.length, e + 1)))
        }
        let c = !1,
          d = -1
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < i.length; t++) {
            let e = i[t]
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (d = t),
              e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!n || void 0 === n[e.route.id])
              if (e.route.lazy || a) {
                ;(c = !0), (i = d >= 0 ? i.slice(0, d + 1) : [i[0]])
                break
              }
            }
          }
        return i.reduceRight((e, a, o) => {
          let l,
            u = !1,
            f = null,
            p = null
          var h
          r &&
            ((l = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || rt),
            c &&
              (d < 0 && 0 === o
                ? ((h = 'route-fallback'),
                  !1 || ft[h] || (ft[h] = !0),
                  (u = !0),
                  (p = null))
                : d === o &&
                  ((u = !0), (p = a.route.hydrateFallbackElement || null))))
          let m = n.concat(i.slice(0, o + 1)),
            g = () => {
              let n
              return (
                (n = l
                  ? f
                  : u
                    ? p
                    : a.route.Component
                      ? t.createElement(a.route.Component, null)
                      : a.route.element
                        ? a.route.element
                        : e),
                t.createElement(ot, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              )
            }
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(at, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: l,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g()
        }, null)
      }
      var it = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          )
        })(it || {}),
        st = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          )
        })(st || {})
      function ut(e) {
        let n = t.useContext(He)
        return n || u(!1), n
      }
      function ct(e) {
        let n = t.useContext($e)
        return n || u(!1), n
      }
      function dt(e) {
        let n = (function (e) {
            let n = t.useContext(Qe)
            return n || u(!1), n
          })(),
          r = n.matches[n.matches.length - 1]
        return r.route.id || u(!1), r.route.id
      }
      const ft = {}
      r.startTransition
      function pt(e) {
        return (function (e) {
          let n = t.useContext(Qe).outlet
          return n ? t.createElement(Je.Provider, { value: e }, n) : n
        })(e.context)
      }
      function ht(n) {
        let {
          basename: r = '/',
          children: a = null,
          location: o,
          navigationType: l = e.Pop,
          navigator: i,
          static: s = !1,
          future: c,
        } = n
        qe() && u(!1)
        let d = r.replace(/^\/*/, '/'),
          f = t.useMemo(
            () => ({
              basename: d,
              navigator: i,
              static: s,
              future: Ve({ v7_relativeSplatPath: !1 }, c),
            }),
            [d, c, i, s],
          )
        'string' === typeof o && (o = h(o))
        let {
            pathname: p = '/',
            search: m = '',
            hash: g = '',
            state: v = null,
            key: b = 'default',
          } = o,
          y = t.useMemo(() => {
            let e = R(p, d)
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: m,
                    hash: g,
                    state: v,
                    key: b,
                  },
                  navigationType: l,
                }
          }, [d, p, m, g, v, b, l])
        return null == y
          ? null
          : t.createElement(
              We.Provider,
              { value: f },
              t.createElement(Ze.Provider, { children: a, value: y }),
            )
      }
      new Promise(() => {})
      t.Component
      function mt(e) {
        let n = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        }
        return (
          e.Component &&
            Object.assign(n, {
              element: t.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(n, {
              hydrateFallbackElement: t.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(n, {
              errorElement: t.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          n
        )
      }
      function gt() {
        return (
          (gt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          gt.apply(this, arguments)
        )
      }
      function vt(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = {},
          o = Object.keys(e)
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      new Set([
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ])
      const bt = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
        'unstable_viewTransition',
      ]
      try {
        window.__reactRouterVersion = '6'
      } catch (ua) {}
      function yt() {
        var e
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData
        return t && t.errors && (t = gt({}, t, { errors: wt(t.errors) })), t
      }
      function wt(e) {
        if (!e) return null
        let t = Object.entries(e),
          n = {}
        for (let [r, a] of t)
          if (a && 'RouteErrorResponse' === a.__type)
            n[r] = new V(a.status, a.statusText, a.data, !0 === a.internal)
          else if (a && 'Error' === a.__type) {
            if (a.__subType) {
              let e = window[a.__subType]
              if ('function' === typeof e)
                try {
                  let t = new e(a.message)
                  ;(t.stack = ''), (n[r] = t)
                } catch (ua) {}
            }
            if (null == n[r]) {
              let e = new Error(a.message)
              ;(e.stack = ''), (n[r] = e)
            }
          } else n[r] = a
        return n
      }
      const xt = t.createContext({ isTransitioning: !1 })
      const kt = t.createContext(new Map())
      const St = r.startTransition,
        Ct = l.flushSync
      r.useId
      function Et(e) {
        Ct ? Ct(e) : e()
      }
      class Nt {
        constructor() {
          ;(this.status = 'pending'),
            (this.promise = new Promise((e, t) => {
              ;(this.resolve = (t) => {
                'pending' === this.status && ((this.status = 'resolved'), e(t))
              }),
                (this.reject = (e) => {
                  'pending' === this.status &&
                    ((this.status = 'rejected'), t(e))
                })
            }))
        }
      }
      function _t(e) {
        let { fallbackElement: n, router: r, future: a } = e,
          [o, l] = t.useState(r.state),
          [i, s] = t.useState(),
          [u, c] = t.useState({ isTransitioning: !1 }),
          [d, f] = t.useState(),
          [p, h] = t.useState(),
          [m, g] = t.useState(),
          v = t.useRef(new Map()),
          { v7_startTransition: b } = a || {},
          y = t.useCallback(
            (e) => {
              b
                ? (function (e) {
                    St ? St(e) : e()
                  })(e)
                : e()
            },
            [b],
          ),
          w = t.useCallback(
            (e, t) => {
              let {
                deletedFetchers: n,
                unstable_flushSync: a,
                unstable_viewTransitionOpts: o,
              } = t
              n.forEach((e) => v.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && v.current.set(t, e.data)
                })
              let i =
                null == r.window ||
                null == r.window.document ||
                'function' !== typeof r.window.document.startViewTransition
              if (o && !i) {
                if (a) {
                  Et(() => {
                    p && (d && d.resolve(), p.skipTransition()),
                      c({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: o.currentLocation,
                        nextLocation: o.nextLocation,
                      })
                  })
                  let t = r.window.document.startViewTransition(() => {
                    Et(() => l(e))
                  })
                  return (
                    t.finished.finally(() => {
                      Et(() => {
                        f(void 0),
                          h(void 0),
                          s(void 0),
                          c({ isTransitioning: !1 })
                      })
                    }),
                    void Et(() => h(t))
                  )
                }
                p
                  ? (d && d.resolve(),
                    p.skipTransition(),
                    g({
                      state: e,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }))
                  : (s(e),
                    c({
                      isTransitioning: !0,
                      flushSync: !1,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }))
              } else a ? Et(() => l(e)) : y(() => l(e))
            },
            [r.window, p, d, v, y],
          )
        t.useLayoutEffect(() => r.subscribe(w), [r, w]),
          t.useEffect(() => {
            u.isTransitioning && !u.flushSync && f(new Nt())
          }, [u]),
          t.useEffect(() => {
            if (d && i && r.window) {
              let e = i,
                t = d.promise,
                n = r.window.document.startViewTransition(async () => {
                  y(() => l(e)), await t
                })
              n.finished.finally(() => {
                f(void 0), h(void 0), s(void 0), c({ isTransitioning: !1 })
              }),
                h(n)
            }
          }, [y, i, d, r.window]),
          t.useEffect(() => {
            d && i && o.location.key === i.location.key && d.resolve()
          }, [d, p, o.location, i]),
          t.useEffect(() => {
            !u.isTransitioning &&
              m &&
              (s(m.state),
              c({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: m.currentLocation,
                nextLocation: m.nextLocation,
              }),
              g(void 0))
          }, [u.isTransitioning, m]),
          t.useEffect(() => {}, [])
        let x = t.useMemo(
            () => ({
              createHref: r.createHref,
              encodeLocation: r.encodeLocation,
              go: (e) => r.navigate(e),
              push: (e, t, n) =>
                r.navigate(e, {
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
              replace: (e, t, n) =>
                r.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
            }),
            [r],
          ),
          k = r.basename || '/',
          S = t.useMemo(
            () => ({ router: r, navigator: x, static: !1, basename: k }),
            [r, x, k],
          )
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(
            He.Provider,
            { value: S },
            t.createElement(
              $e.Provider,
              { value: o },
              t.createElement(
                kt.Provider,
                { value: v.current },
                t.createElement(
                  xt.Provider,
                  { value: u },
                  t.createElement(
                    ht,
                    {
                      basename: k,
                      location: o.location,
                      navigationType: o.historyAction,
                      navigator: x,
                      future: {
                        v7_relativeSplatPath: r.future.v7_relativeSplatPath,
                      },
                    },
                    o.initialized || r.future.v7_partialHydration
                      ? t.createElement(jt, {
                          routes: r.routes,
                          future: r.future,
                          state: o,
                        })
                      : n,
                  ),
                ),
              ),
            ),
          ),
          null,
        )
      }
      function jt(e) {
        let { routes: t, future: n, state: r } = e
        return tt(t, void 0, r, n)
      }
      const Pt =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        zt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Lt = t.forwardRef(function (e, n) {
          let r,
            {
              onClick: a,
              relative: o,
              reloadDocument: l,
              replace: i,
              state: s,
              target: c,
              to: d,
              preventScrollReset: f,
              unstable_viewTransition: h,
            } = e,
            m = vt(e, bt),
            { basename: g } = t.useContext(We),
            v = !1
          if ('string' === typeof d && zt.test(d) && ((r = d), Pt))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith('//') ? new URL(e.protocol + d) : new URL(d),
                n = R(t.pathname, g)
              t.origin === e.origin && null != n
                ? (d = n + t.search + t.hash)
                : (v = !0)
            } catch (ua) {}
          let b = (function (e, n) {
              let { relative: r } = void 0 === n ? {} : n
              qe() || u(!1)
              let { basename: a, navigator: o } = t.useContext(We),
                { hash: l, pathname: i, search: s } = et(e, { relative: r }),
                c = i
              return (
                '/' !== a && (c = '/' === i ? a : F([a, i])),
                o.createHref({ pathname: c, search: s, hash: l })
              )
            })(d, { relative: o }),
            y = (function (e, n) {
              let {
                  target: r,
                  replace: a,
                  state: o,
                  preventScrollReset: l,
                  relative: i,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                u = Xe(),
                c = Ke(),
                d = et(e, { relative: i })
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          )
                        })(e)
                      )
                    })(t, r)
                  ) {
                    t.preventDefault()
                    let n = void 0 !== a ? a : p(c) === p(d)
                    u(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: l,
                      relative: i,
                      unstable_viewTransition: s,
                    })
                  }
                },
                [c, u, d, a, o, r, e, l, i, s],
              )
            })(d, {
              replace: i,
              state: s,
              target: c,
              preventScrollReset: f,
              relative: o,
              unstable_viewTransition: h,
            })
          return t.createElement(
            'a',
            gt({}, m, {
              href: r || b,
              onClick:
                v || l
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || y(e)
                    },
              ref: n,
              target: c,
            }),
          )
        })
      var Tt, Rt
      ;(function (e) {
        ;(e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState')
      })(Tt || (Tt = {})),
        (function (e) {
          ;(e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration')
        })(Rt || (Rt = {}))
      var Mt = n(579)
      const Dt = function () {
          return (0, Mt.jsx)(Mt.Fragment, {
            children: (0, Mt.jsxs)('body', {
              className:
                'relative md:flex block gap-2 dark:bg-gray-950 bg-white antialiased',
              children: [
                (0, Mt.jsxs)('aside', {
                  className:
                    'md:sticky top-0 md:h-screen h-auto md:w-[10%] w-full flex flex-col md:border-r rounded-r-xl border-blue-600 md:gap-5 gap-5 px-1',
                  children: [
                    (0, Mt.jsxs)('nav', {
                      className: '',
                      children: [
                        (0, Mt.jsxs)('div', {
                          className:
                            'flex flex-row md:flex-col md:justify-center justify-between items-center border border-blue-600 bg-blue-600/25 rounded-xl',
                          children: [
                            (0, Mt.jsx)('div', {
                              className: 'block p-2',
                              children: (0, Mt.jsxs)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                x: '0px',
                                y: '0px',
                                width: '100',
                                height: '100',
                                viewBox: '0 0 64 64',
                                children: [
                                  (0, Mt.jsxs)('linearGradient', {
                                    id: '7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1',
                                    x1: '32',
                                    x2: '32',
                                    y1: '57.81',
                                    y2: '6.19',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                      (0, Mt.jsx)('stop', {
                                        offset: '0',
                                        stopColor: '#e6abff',
                                      }),
                                      (0, Mt.jsx)('stop', {
                                        offset: '1',
                                        stopColor: '#6dc7ff',
                                      }),
                                    ],
                                  }),
                                  (0, Mt.jsx)('path', {
                                    fill: 'url(#7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1)',
                                    d: 'M29.12,33.97h-2.6c-0.2,0-0.4,0.04-0.58,0.11l0.02-5.32c1.31,4.13,6.05,4.98,10.53,5.42\tc7.02,0.69,7.02,1.62,7.02,2.23c0,0.9,0,2.56-5.73,2.56c-5.3,0-6.27-1.08-6.65-3.32C30.97,34.68,30.11,33.97,29.12,33.97z M32,6.19\tL10,19.01v25.98l7.04,4.1c0.85,0.5,1.62,0.11,1.9-0.06c0.29-0.16,0.96-0.65,0.96-1.64l0.09-27.9c0.01-0.83,0.68-1.5,1.51-1.5l3,0.02\tc0.83,0,1.5,0.67,1.49,1.5l-0.01,4.3C27.17,20.17,31.12,18,36.87,18c7.74,0,11.75,2.88,12.25,8.81c0.04,0.46-0.12,0.93-0.44,1.28\tc-0.33,0.35-0.78,0.54-1.24,0.54h-2.58c-0.95,0-1.8-0.62-2.03-1.54c-0.49-2.01-1.44-3.08-5.97-3.08c-4.76,0-4.76,1.5-4.76,2.13\tc0,0.82,0,1.26,10.79,2.52c4.01,0.47,7.23,3.85,7.11,7.89C49.84,41.85,45.29,45,37.75,45v-0.03c-4.86,0-8.41-1.09-10.56-3.24\tc-0.51-0.51-0.94-1.08-1.27-1.69L25.9,47.4c0,2.12-0.82,4.08-2.27,5.53L32,57.81l22-12.82V19.01L32,6.19z',
                                  }),
                                  (0, Mt.jsxs)('linearGradient', {
                                    id: '7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2',
                                    x1: '32',
                                    x2: '32',
                                    y1: '61.97',
                                    y2: '2.027',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                      (0, Mt.jsx)('stop', {
                                        offset: '0',
                                        stopColor: '#c822ff',
                                      }),
                                      (0, Mt.jsx)('stop', {
                                        offset: '1',
                                        stopColor: '#1a6dff',
                                      }),
                                    ],
                                  }),
                                  (0, Mt.jsx)('path', {
                                    fill: 'url(#7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2)',
                                    d: 'M26.904,36.014c0.072,1.75,0.655,3.184,1.735,4.267c1.754,1.756,4.831,2.646,9.147,2.646\tv0.026c3.813-0.005,10.168-0.885,10.168-6.689c0-3.789-2.003-5.091-9.315-6.062c-6.379-0.844-8.585-1.278-8.585-4.058\tc0-4.178,5.122-4.178,6.804-4.178c4.962,0,7.089,1.187,7.96,4.62h2.219c-0.547-4.521-3.703-6.539-10.168-6.539\tc-5.862,0-9.224,2.267-9.224,6.222c0,3.727,2.283,5.209,9.049,5.877c6.795,0.665,8.867,1.661,8.867,4.264\tc0,4.087-4.16,4.611-7.784,4.611c-6.276,0-8.077-1.752-8.66-5.007H26.904z M58,18.44v27.12c0,1.07-0.57,2.06-1.49,2.6l-23,13.4\tc-0.47,0.27-0.99,0.41-1.51,0.41s-1.04-0.14-1.51-0.41l-10.99-6.4c0.83-0.17,1.64-0.47,2.41-0.91h0.01l9.58,5.58\tc0.31,0.19,0.69,0.19,1,0l23-13.4c0.31-0.18,0.5-0.51,0.5-0.87V18.44c0-0.36-0.19-0.69-0.5-0.87l-23-13.4c-0.31-0.19-0.69-0.19-1,0\tl-23,13.4C8.19,17.75,8,18.08,8,18.44v27.12c0,0.36,0.19,0.69,0.5,0.87l3.682,2.15l3.784,2.203c1.224,0.713,2.699,0.711,3.946-0.005\tc1.242-0.714,1.984-1.982,1.984-3.393L22,19.996l2,0.008l-0.104,27.385c0,2.131-1.117,4.048-2.987,5.123\tc-0.938,0.539-1.962,0.808-2.983,0.808c-1.022,0-2.042-0.27-2.968-0.81l-3.78-2.202L7.49,48.16C6.57,47.62,6,46.63,6,45.56V18.44\tc0-1.07,0.57-2.06,1.49-2.6l23-13.4c0.93-0.55,2.09-0.55,3.02,0l23,13.4C57.43,16.38,58,17.37,58,18.44z',
                                  }),
                                ],
                              }),
                            }),
                            (0, Mt.jsx)('button', {
                              className: 'p-4',
                              children: (0, Mt.jsx)('svg', {
                                className:
                                  'w-6 h-6 text-gray-800 dark:text-white',
                                'aria-hidden': 'true',
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '24',
                                height: '24',
                                fill: 'currentColor',
                                viewBox: '0 0 24 24',
                                children: (0, Mt.jsx)('path', {
                                  fillRule: 'evenodd',
                                  d: 'M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z',
                                  clipRule: 'evenodd',
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, Mt.jsxs)('ul', {
                          className: 'md:block flex justify-center items-start',
                          children: [
                            (0, Mt.jsx)('li', {
                              className:
                                'border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl',
                              children: (0, Mt.jsxs)(Lt, {
                                className:
                                  'flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50',
                                to: '/client',
                                children: [
                                  (0, Mt.jsx)('svg', {
                                    className:
                                      'w-6 h-6 hover:text-slate-50k:text-white',
                                    'aria-hidden': 'true',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '24',
                                    height: '24',
                                    fill: 'currentColor',
                                    viewBox: '0 0 24 24',
                                    children: (0, Mt.jsx)('path', {
                                      fillRule: 'evenodd',
                                      d: 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z',
                                      clipRule: 'evenodd',
                                    }),
                                  }),
                                  (0, Mt.jsx)('span', {
                                    className: 'md:block hidden',
                                    children: 'Client',
                                  }),
                                ],
                              }),
                            }),
                            (0, Mt.jsx)('li', {
                              className:
                                'border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl',
                              children: (0, Mt.jsxs)(Lt, {
                                className:
                                  'flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50',
                                to: '/invoices',
                                children: [
                                  (0, Mt.jsx)('svg', {
                                    className:
                                      'w-6 h-6 hover:text-slate-50k:text-white',
                                    'aria-hidden': 'true',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '24',
                                    height: '24',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    children: (0, Mt.jsx)('path', {
                                      stroke: 'currentColor',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: '2',
                                      d: 'M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
                                    }),
                                  }),
                                  (0, Mt.jsx)('span', {
                                    className: 'md:block hidden',
                                    children: 'Invoices',
                                  }),
                                ],
                              }),
                            }),
                            (0, Mt.jsx)('li', {
                              className:
                                'border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl',
                              children: (0, Mt.jsxs)(Lt, {
                                className:
                                  'flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50',
                                to: '/users',
                                children: [
                                  (0, Mt.jsx)('svg', {
                                    className:
                                      'w-6 h-6 hover:text-slate-50k:text-white',
                                    'aria-hidden': 'true',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '24',
                                    height: '24',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    children: (0, Mt.jsx)('path', {
                                      stroke: 'currentColor',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round',
                                      strokeWidth: '2',
                                      d: 'm8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14',
                                    }),
                                  }),
                                  (0, Mt.jsx)('span', {
                                    className: 'md:block hidden',
                                    children: 'Users',
                                  }),
                                ],
                              }),
                            }),
                            (0, Mt.jsx)('li', {
                              className:
                                'border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl',
                              children: (0, Mt.jsxs)(Lt, {
                                className:
                                  'flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50',
                                to: '/register',
                                children: [
                                  (0, Mt.jsx)('svg', {
                                    className:
                                      'w-6 h-6 hover:text-slate-50 dark:text-white',
                                    'aria-hidden': 'true',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    width: '24',
                                    height: '24',
                                    fill: 'currentColor',
                                    viewBox: '0 0 24 24',
                                    children: (0, Mt.jsx)('path', {
                                      d: 'M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z',
                                    }),
                                  }),
                                  (0, Mt.jsx)('span', {
                                    className: 'md:block hidden',
                                    children: 'Register Invoice',
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Mt.jsxs)(Lt, {
                      className:
                        'mt-auto group border border-red-600 bg-red-600/25 hover:bg-red-600 py-4 px-5 rounded-xl text-red-600 hover:text-slate-50 flex justify-between gap-5 text-center',
                      to: '/',
                      children: [
                        (0, Mt.jsx)('svg', {
                          className:
                            'w-6 h-6 text-red-600 group-hover:text-slate-50',
                          'aria-hidden': 'true',
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '24',
                          height: '24',
                          fill: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, Mt.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z',
                            clipRule: 'evenodd',
                          }),
                        }),
                        'Home',
                      ],
                    }),
                  ],
                }),
                (0, Mt.jsx)('main', {
                  className:
                    'flex-1 block dark:text-slate-50 text-sky-600 p-3 border border-blue-600 rounded-xl',
                  children: (0, Mt.jsx)(pt, {}),
                }),
              ],
            }),
          })
        },
        Ot = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: o,
                  getTTFB: l,
                } = t
                n(e), r(e), a(e), o(e), l(e)
              })
        }
      var It = (e) =>
          'boolean' == typeof e ? ''.concat(e) : 0 === e ? '0' : e,
        Ft = (e) => !e || 'object' != typeof e || 0 === Object.keys(e).length
      function At(e, t) {
        e.forEach(function (e) {
          Array.isArray(e) ? At(e, t) : t.push(e)
        })
      }
      function Ut(e) {
        let t = []
        return At(e, t), t
      }
      var Bt = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          return Ut(t).filter(Boolean)
        },
        Vt = (e, t) => {
          let n = {},
            r = Object.keys(e),
            a = Object.keys(t)
          for (let o of r)
            if (a.includes(o)) {
              let r = e[o],
                a = t[o]
              'object' == typeof r && 'object' == typeof a
                ? (n[o] = Vt(r, a))
                : Array.isArray(r) || Array.isArray(a)
                  ? (n[o] = Bt(a, r))
                  : (n[o] = a + ' ' + r)
            } else n[o] = e[o]
          for (let o of a) r.includes(o) || (n[o] = t[o])
          return n
        },
        Ht = (e) =>
          e && 'string' == typeof e ? e.replace(/\s+/g, ' ').trim() : e
      const $t = '-'
      function Wt(e) {
        const t = (function (e) {
            const { theme: t, prefix: n } = e,
              r = { nextPart: new Map(), validators: [] },
              a = (function (e, t) {
                if (!t) return e
                return e.map((e) => {
                  let [n, r] = e
                  return [
                    n,
                    r.map((e) =>
                      'string' === typeof e
                        ? t + e
                        : 'object' === typeof e
                          ? Object.fromEntries(
                              Object.entries(e).map((e) => {
                                let [n, r] = e
                                return [t + n, r]
                              }),
                            )
                          : e,
                    ),
                  ]
                })
              })(Object.entries(e.classGroups), n)
            return (
              a.forEach((e) => {
                let [n, a] = e
                Gt(a, r, n, t)
              }),
              r
            )
          })(e),
          { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e
        return {
          getClassGroupId: function (e) {
            const n = e.split($t)
            return (
              '' === n[0] && 1 !== n.length && n.shift(),
              Zt(n, t) ||
                (function (e) {
                  if (Qt.test(e)) {
                    const t = Qt.exec(e)[1],
                      n =
                        null === t || void 0 === t
                          ? void 0
                          : t.substring(0, t.indexOf(':'))
                    if (n) return 'arbitrary..' + n
                  }
                })(e)
            )
          },
          getConflictingClassGroupIds: function (e, t) {
            const a = n[e] || []
            return t && r[e] ? [...a, ...r[e]] : a
          },
        }
      }
      function Zt(e, t) {
        var n
        if (0 === e.length) return t.classGroupId
        const r = e[0],
          a = t.nextPart.get(r),
          o = a ? Zt(e.slice(1), a) : void 0
        if (o) return o
        if (0 === t.validators.length) return
        const l = e.join($t)
        return null ===
          (n = t.validators.find((e) => {
            let { validator: t } = e
            return t(l)
          })) || void 0 === n
          ? void 0
          : n.classGroupId
      }
      const Qt = /^\[(.+)\]$/
      function Gt(e, t, n, r) {
        e.forEach((e) => {
          if ('string' !== typeof e) {
            if ('function' === typeof e)
              return e.isThemeGetter
                ? void Gt(e(r), t, n, r)
                : void t.validators.push({ validator: e, classGroupId: n })
            Object.entries(e).forEach((e) => {
              let [a, o] = e
              Gt(o, qt(t, a), n, r)
            })
          } else {
            ;('' === e ? t : qt(t, e)).classGroupId = n
          }
        })
      }
      function qt(e, t) {
        let n = e
        return (
          t.split($t).forEach((e) => {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e))
          }),
          n
        )
      }
      function Kt(e) {
        if (e < 1) return { get: () => {}, set: () => {} }
        let t = 0,
          n = new Map(),
          r = new Map()
        function a(a, o) {
          n.set(a, o), t++, t > e && ((t = 0), (r = n), (n = new Map()))
        }
        return {
          get(e) {
            let t = n.get(e)
            return void 0 !== t
              ? t
              : void 0 !== (t = r.get(e))
                ? (a(e, t), t)
                : void 0
          },
          set(e, t) {
            n.has(e) ? n.set(e, t) : a(e, t)
          },
        }
      }
      const Yt = '!'
      function Xt(e) {
        const t = e.separator,
          n = 1 === t.length,
          r = t[0],
          a = t.length
        return function (e) {
          const o = []
          let l,
            i = 0,
            s = 0
          for (let d = 0; d < e.length; d++) {
            let u = e[d]
            if (0 === i) {
              if (u === r && (n || e.slice(d, d + a) === t)) {
                o.push(e.slice(s, d)), (s = d + a)
                continue
              }
              if ('/' === u) {
                l = d
                continue
              }
            }
            '[' === u ? i++ : ']' === u && i--
          }
          const u = 0 === o.length ? e : e.substring(s),
            c = u.startsWith(Yt)
          return {
            modifiers: o,
            hasImportantModifier: c,
            baseClassName: c ? u.substring(1) : u,
            maybePostfixModifierPosition: l && l > s ? l - s : void 0,
          }
        }
      }
      const Jt = /\s+/
      function en() {
        let e,
          t,
          n = 0,
          r = ''
        for (; n < arguments.length; )
          (e = arguments[n++]) && (t = tn(e)) && (r && (r += ' '), (r += t))
        return r
      }
      function tn(e) {
        if ('string' === typeof e) return e
        let t,
          n = ''
        for (let r = 0; r < e.length; r++)
          e[r] && (t = tn(e[r])) && (n && (n += ' '), (n += t))
        return n
      }
      function nn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        let a,
          o,
          l,
          i = function (t) {
            const r = n.reduce((e, t) => t(e), e())
            return (
              (a = (function (e) {
                return {
                  cache: Kt(e.cacheSize),
                  splitModifiers: Xt(e),
                  ...Wt(e),
                }
              })(r)),
              (o = a.cache.get),
              (l = a.cache.set),
              (i = s),
              s(t)
            )
          }
        function s(e) {
          const t = o(e)
          if (t) return t
          const n = (function (e, t) {
            const {
                splitModifiers: n,
                getClassGroupId: r,
                getConflictingClassGroupIds: a,
              } = t,
              o = new Set()
            return e
              .trim()
              .split(Jt)
              .map((e) => {
                const {
                  modifiers: t,
                  hasImportantModifier: a,
                  baseClassName: o,
                  maybePostfixModifierPosition: l,
                } = n(e)
                let i = r(l ? o.substring(0, l) : o),
                  s = Boolean(l)
                if (!i) {
                  if (!l) return { isTailwindClass: !1, originalClassName: e }
                  if (((i = r(o)), !i))
                    return { isTailwindClass: !1, originalClassName: e }
                  s = !1
                }
                const u = (function (e) {
                  if (e.length <= 1) return e
                  const t = []
                  let n = []
                  return (
                    e.forEach((e) => {
                      '[' === e[0]
                        ? (t.push(...n.sort(), e), (n = []))
                        : n.push(e)
                    }),
                    t.push(...n.sort()),
                    t
                  )
                })(t).join(':')
                return {
                  isTailwindClass: !0,
                  modifierId: a ? u + Yt : u,
                  classGroupId: i,
                  originalClassName: e,
                  hasPostfixModifier: s,
                }
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0
                const {
                    modifierId: t,
                    classGroupId: n,
                    hasPostfixModifier: r,
                  } = e,
                  l = t + n
                return (
                  !o.has(l) &&
                  (o.add(l), a(n, r).forEach((e) => o.add(t + e)), !0)
                )
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(' ')
          })(e, a)
          return l(e, n), n
        }
        return function () {
          return i(en.apply(null, arguments))
        }
      }
      function rn(e) {
        const t = (t) => t[e] || []
        return (t.isThemeGetter = !0), t
      }
      const an = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        on = /^\d+\/\d+$/,
        ln = new Set(['px', 'full', 'screen']),
        sn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        un =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        cn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        dn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        fn =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
      function pn(e) {
        return mn(e) || ln.has(e) || on.test(e)
      }
      function hn(e) {
        return jn(e, 'length', Pn)
      }
      function mn(e) {
        return Boolean(e) && !Number.isNaN(Number(e))
      }
      function gn(e) {
        return jn(e, 'number', mn)
      }
      function vn(e) {
        return Boolean(e) && Number.isInteger(Number(e))
      }
      function bn(e) {
        return e.endsWith('%') && mn(e.slice(0, -1))
      }
      function yn(e) {
        return an.test(e)
      }
      function wn(e) {
        return sn.test(e)
      }
      const xn = new Set(['length', 'size', 'percentage'])
      function kn(e) {
        return jn(e, xn, zn)
      }
      function Sn(e) {
        return jn(e, 'position', zn)
      }
      const Cn = new Set(['image', 'url'])
      function En(e) {
        return jn(e, Cn, Tn)
      }
      function Nn(e) {
        return jn(e, '', Ln)
      }
      function _n() {
        return !0
      }
      function jn(e, t, n) {
        const r = an.exec(e)
        return (
          !!r &&
          (r[1] ? ('string' === typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
        )
      }
      function Pn(e) {
        return un.test(e) && !cn.test(e)
      }
      function zn() {
        return !1
      }
      function Ln(e) {
        return dn.test(e)
      }
      function Tn(e) {
        return fn.test(e)
      }
      Symbol.toStringTag
      function Rn() {
        const e = rn('colors'),
          t = rn('spacing'),
          n = rn('blur'),
          r = rn('brightness'),
          a = rn('borderColor'),
          o = rn('borderRadius'),
          l = rn('borderSpacing'),
          i = rn('borderWidth'),
          s = rn('contrast'),
          u = rn('grayscale'),
          c = rn('hueRotate'),
          d = rn('invert'),
          f = rn('gap'),
          p = rn('gradientColorStops'),
          h = rn('gradientColorStopPositions'),
          m = rn('inset'),
          g = rn('margin'),
          v = rn('opacity'),
          b = rn('padding'),
          y = rn('saturate'),
          w = rn('scale'),
          x = rn('sepia'),
          k = rn('skew'),
          S = rn('space'),
          C = rn('translate'),
          E = () => ['auto', yn, t],
          N = () => [yn, t],
          _ = () => ['', pn, hn],
          j = () => ['auto', mn, yn],
          P = () => ['', '0', yn],
          z = () => [mn, gn],
          L = () => [mn, yn]
        return {
          cacheSize: 500,
          separator: ':',
          theme: {
            colors: [_n],
            spacing: [pn, hn],
            blur: ['none', '', wn, yn],
            brightness: z(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', wn, yn],
            borderSpacing: N(),
            borderWidth: _(),
            contrast: z(),
            grayscale: P(),
            hueRotate: L(),
            invert: P(),
            gap: N(),
            gradientColorStops: [e],
            gradientColorStopPositions: [bn, hn],
            inset: E(),
            margin: E(),
            opacity: z(),
            padding: N(),
            saturate: z(),
            scale: z(),
            sepia: P(),
            skew: L(),
            space: N(),
            translate: N(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', yn] }],
            container: ['container'],
            columns: [{ columns: [wn] }],
            'break-after': [
              {
                'break-after': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-before': [
              {
                'break-before': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
            clear: [
              { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
            ],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [
              {
                object: [
                  'bottom',
                  'center',
                  'left',
                  'left-bottom',
                  'left-top',
                  'right',
                  'right-bottom',
                  'right-top',
                  'top',
                  yn,
                ],
              },
            ],
            overflow: [
              { overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-x': [
              { 'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-y': [
              { 'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            overscroll: [{ overscroll: ['auto', 'contain', 'none'] }],
            'overscroll-x': [{ 'overscroll-x': ['auto', 'contain', 'none'] }],
            'overscroll-y': [{ 'overscroll-y': ['auto', 'contain', 'none'] }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [m] }],
            'inset-x': [{ 'inset-x': [m] }],
            'inset-y': [{ 'inset-y': [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', vn, yn] }],
            basis: [{ basis: E() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', yn] }],
            grow: [{ grow: P() }],
            shrink: [{ shrink: P() }],
            order: [{ order: ['first', 'last', 'none', vn, yn] }],
            'grid-cols': [{ 'grid-cols': [_n] }],
            'col-start-end': [
              { col: ['auto', { span: ['full', vn, yn] }, yn] },
            ],
            'col-start': [{ 'col-start': j() }],
            'col-end': [{ 'col-end': j() }],
            'grid-rows': [{ 'grid-rows': [_n] }],
            'row-start-end': [{ row: ['auto', { span: [vn, yn] }, yn] }],
            'row-start': [{ 'row-start': j() }],
            'row-end': [{ 'row-end': j() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', yn] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', yn] }],
            gap: [{ gap: [f] }],
            'gap-x': [{ 'gap-x': [f] }],
            'gap-y': [{ 'gap-y': [f] }],
            'justify-content': [
              {
                justify: [
                  'normal',
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                  'stretch',
                ],
              },
            ],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [
              {
                content: [
                  'normal',
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                  'stretch',
                  'baseline',
                ],
              },
            ],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [
              {
                'place-content': [
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                  'stretch',
                  'baseline',
                ],
              },
            ],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            'space-x': [{ 'space-x': [S] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [S] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [
              { w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', yn, t] },
            ],
            'min-w': [{ 'min-w': [yn, t, 'min', 'max', 'fit'] }],
            'max-w': [
              {
                'max-w': [
                  yn,
                  t,
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [wn] },
                  wn,
                ],
              },
            ],
            h: [
              { h: [yn, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'min-h': [
              { 'min-h': [yn, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            'max-h': [
              { 'max-h': [yn, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
            ],
            size: [{ size: [yn, t, 'auto', 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', wn, hn] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  gn,
                ],
              },
            ],
            'font-family': [{ font: [_n] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  yn,
                ],
              },
            ],
            'line-clamp': [{ 'line-clamp': ['none', mn, gn] }],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  pn,
                  yn,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', yn] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', yn] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [v] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [
              {
                decoration: [
                  'solid',
                  'dashed',
                  'dotted',
                  'double',
                  'none',
                  'wavy',
                ],
              },
            ],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', pn, hn] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', pn, yn] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
            indent: [{ indent: N() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  yn,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', yn] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [v] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [
              {
                bg: [
                  'bottom',
                  'center',
                  'left',
                  'left-bottom',
                  'left-top',
                  'right',
                  'right-bottom',
                  'right-top',
                  'top',
                  Sn,
                ],
              },
            ],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', kn] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  En,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [h] }],
            'gradient-via-pos': [{ via: [h] }],
            'gradient-to-pos': [{ to: [h] }],
            'gradient-from': [{ from: [p] }],
            'gradient-via': [{ via: [p] }],
            'gradient-to': [{ to: [p] }],
            rounded: [{ rounded: [o] }],
            'rounded-s': [{ 'rounded-s': [o] }],
            'rounded-e': [{ 'rounded-e': [o] }],
            'rounded-t': [{ 'rounded-t': [o] }],
            'rounded-r': [{ 'rounded-r': [o] }],
            'rounded-b': [{ 'rounded-b': [o] }],
            'rounded-l': [{ 'rounded-l': [o] }],
            'rounded-ss': [{ 'rounded-ss': [o] }],
            'rounded-se': [{ 'rounded-se': [o] }],
            'rounded-ee': [{ 'rounded-ee': [o] }],
            'rounded-es': [{ 'rounded-es': [o] }],
            'rounded-tl': [{ 'rounded-tl': [o] }],
            'rounded-tr': [{ 'rounded-tr': [o] }],
            'rounded-br': [{ 'rounded-br': [o] }],
            'rounded-bl': [{ 'rounded-bl': [o] }],
            'border-w': [{ border: [i] }],
            'border-w-x': [{ 'border-x': [i] }],
            'border-w-y': [{ 'border-y': [i] }],
            'border-w-s': [{ 'border-s': [i] }],
            'border-w-e': [{ 'border-e': [i] }],
            'border-w-t': [{ 'border-t': [i] }],
            'border-w-r': [{ 'border-r': [i] }],
            'border-w-b': [{ 'border-b': [i] }],
            'border-w-l': [{ 'border-l': [i] }],
            'border-opacity': [{ 'border-opacity': [v] }],
            'border-style': [
              {
                border: [
                  'solid',
                  'dashed',
                  'dotted',
                  'double',
                  'none',
                  'hidden',
                ],
              },
            ],
            'divide-x': [{ 'divide-x': [i] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [i] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [v] }],
            'divide-style': [
              { divide: ['solid', 'dashed', 'dotted', 'double', 'none'] },
            ],
            'border-color': [{ border: [a] }],
            'border-color-x': [{ 'border-x': [a] }],
            'border-color-y': [{ 'border-y': [a] }],
            'border-color-t': [{ 'border-t': [a] }],
            'border-color-r': [{ 'border-r': [a] }],
            'border-color-b': [{ 'border-b': [a] }],
            'border-color-l': [{ 'border-l': [a] }],
            'divide-color': [{ divide: [a] }],
            'outline-style': [
              { outline: ['', 'solid', 'dashed', 'dotted', 'double', 'none'] },
            ],
            'outline-offset': [{ 'outline-offset': [pn, yn] }],
            'outline-w': [{ outline: [pn, hn] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: _() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [v] }],
            'ring-offset-w': [{ 'ring-offset': [pn, hn] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', wn, Nn] }],
            'shadow-color': [{ shadow: [_n] }],
            opacity: [{ opacity: [v] }],
            'mix-blend': [
              {
                'mix-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                  'plus-lighter',
                  'plus-darker',
                ],
              },
            ],
            'bg-blend': [
              {
                'bg-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                ],
              },
            ],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [s] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', wn, yn] }],
            grayscale: [{ grayscale: [u] }],
            'hue-rotate': [{ 'hue-rotate': [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [x] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [n] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [s] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
            'backdrop-invert': [{ 'backdrop-invert': [d] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [y] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [l] }],
            'border-spacing-x': [{ 'border-spacing-x': [l] }],
            'border-spacing-y': [{ 'border-spacing-y': [l] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  yn,
                ],
              },
            ],
            duration: [{ duration: L() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', yn] }],
            delay: [{ delay: L() }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', yn] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [w] }],
            'scale-x': [{ 'scale-x': [w] }],
            'scale-y': [{ 'scale-y': [w] }],
            rotate: [{ rotate: [vn, yn] }],
            'translate-x': [{ 'translate-x': [C] }],
            'translate-y': [{ 'translate-y': [C] }],
            'skew-x': [{ 'skew-x': [k] }],
            'skew-y': [{ 'skew-y': [k] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  yn,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: [{ appearance: ['none', 'auto'] }],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  yn,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': N() }],
            'scroll-mx': [{ 'scroll-mx': N() }],
            'scroll-my': [{ 'scroll-my': N() }],
            'scroll-ms': [{ 'scroll-ms': N() }],
            'scroll-me': [{ 'scroll-me': N() }],
            'scroll-mt': [{ 'scroll-mt': N() }],
            'scroll-mr': [{ 'scroll-mr': N() }],
            'scroll-mb': [{ 'scroll-mb': N() }],
            'scroll-ml': [{ 'scroll-ml': N() }],
            'scroll-p': [{ 'scroll-p': N() }],
            'scroll-px': [{ 'scroll-px': N() }],
            'scroll-py': [{ 'scroll-py': N() }],
            'scroll-ps': [{ 'scroll-ps': N() }],
            'scroll-pe': [{ 'scroll-pe': N() }],
            'scroll-pt': [{ 'scroll-pt': N() }],
            'scroll-pr': [{ 'scroll-pr': N() }],
            'scroll-pb': [{ 'scroll-pb': N() }],
            'scroll-pl': [{ 'scroll-pl': N() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [{ touch: ['auto', 'none', 'manipulation'] }],
            'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
            'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
            'touch-pz': ['touch-pinch-zoom'],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              {
                'will-change': ['auto', 'scroll', 'contents', 'transform', yn],
              },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [pn, hn, gn] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
            'forced-color-adjust': [
              { 'forced-color-adjust': ['auto', 'none'] },
            ],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            size: ['w', 'h'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            'line-clamp': ['display', 'overflow'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
            touch: ['touch-x', 'touch-y', 'touch-pz'],
            'touch-x': ['touch'],
            'touch-y': ['touch'],
            'touch-pz': ['touch'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        }
      }
      function Mn(e, t, n) {
        void 0 !== n && (e[t] = n)
      }
      function Dn(e, t) {
        if (t) for (const n in t) Mn(e, n, t[n])
      }
      function On(e, t) {
        if (t)
          for (const n in t) {
            const r = t[n]
            void 0 !== r && (e[n] = (e[n] || []).concat(r))
          }
      }
      function In(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r]
        return 'function' === typeof e
          ? nn(Rn, e, ...n)
          : nn(
              () =>
                (function (e, t) {
                  let {
                    cacheSize: n,
                    prefix: r,
                    separator: a,
                    extend: o = {},
                    override: l = {},
                  } = t
                  Mn(e, 'cacheSize', n),
                    Mn(e, 'prefix', r),
                    Mn(e, 'separator', a)
                  for (const i in l) Dn(e[i], l[i])
                  for (const i in o) On(e[i], o[i])
                  return e
                })(Rn(), e),
              ...n,
            )
      }
      const Fn = nn(Rn)
      var An = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        Un = (e) => e || void 0,
        Bn = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          return Un(Ut(t).filter(Boolean).join(' '))
        },
        Vn = null,
        Hn = {},
        $n = !1,
        Wn = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]
          return (e) =>
            e.twMerge
              ? ((!Vn || $n) &&
                  (($n = !1),
                  (Vn = Ft(Hn)
                    ? Fn
                    : In({
                        ...Hn,
                        extend: {
                          theme: Hn.theme,
                          classGroups: Hn.classGroups,
                          conflictingClassGroupModifiers:
                            Hn.conflictingClassGroupModifiers,
                          conflictingClassGroups: Hn.conflictingClassGroups,
                          ...Hn.extend,
                        },
                      }))),
                Un(Vn(Bn(t))))
              : Bn(t)
        },
        Zn = (e, t) => {
          for (let n in t)
            e.hasOwnProperty(n) ? (e[n] = Bn(e[n], t[n])) : (e[n] = t[n])
          return e
        },
        Qn = (e, t) => {
          let {
              extend: n = null,
              slots: r = {},
              variants: a = {},
              compoundVariants: o = [],
              compoundSlots: l = [],
              defaultVariants: i = {},
            } = e,
            s = { ...An, ...t },
            u =
              null != n && n.base
                ? Bn(n.base, null == e ? void 0 : e.base)
                : null == e
                  ? void 0
                  : e.base,
            c =
              null != n && n.variants && !Ft(n.variants)
                ? Vt(a, n.variants)
                : a,
            d =
              null != n && n.defaultVariants && !Ft(n.defaultVariants)
                ? { ...n.defaultVariants, ...i }
                : i
          !Ft(s.twMergeConfig) &&
            !((e, t) => JSON.stringify(e) === JSON.stringify(t))(
              s.twMergeConfig,
              Hn,
            ) &&
            (($n = !0), (Hn = s.twMergeConfig))
          let f = Ft(null == n ? void 0 : n.slots),
            p = Ft(r)
              ? {}
              : {
                  base: Bn(
                    null == e ? void 0 : e.base,
                    f && (null == n ? void 0 : n.base),
                  ),
                  ...r,
                },
            h = f
              ? p
              : Zn(
                  { ...(null == n ? void 0 : n.slots) },
                  Ft(p) ? { base: null == e ? void 0 : e.base } : p,
                ),
            m = Ft(null == n ? void 0 : n.compoundVariants)
              ? o
              : Bt(null == n ? void 0 : n.compoundVariants, o),
            g = (e) => {
              if (Ft(c) && Ft(r) && f)
                return Wn(
                  u,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className,
                )(s)
              if (m && !Array.isArray(m))
                throw new TypeError(
                  'The "compoundVariants" prop must be an array. Received: '.concat(
                    typeof m,
                  ),
                )
              if (l && !Array.isArray(l))
                throw new TypeError(
                  'The "compoundSlots" prop must be an array. Received: '.concat(
                    typeof l,
                  ),
                )
              let t = function (e, t) {
                  let n = arguments.length > 3 ? arguments[3] : void 0,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : []
                  if ('string' == typeof t)
                    r = r.concat(
                      Ht(t)
                        .split(' ')
                        .map((t) => ''.concat(e, ':').concat(t)),
                    )
                  else if (Array.isArray(t))
                    r = r.concat(
                      t.reduce(
                        (t, n) => t.concat(''.concat(e, ':').concat(n)),
                        [],
                      ),
                    )
                  else if ('object' == typeof t && 'string' == typeof n)
                    for (let a in t)
                      if (t.hasOwnProperty(a) && a === n) {
                        let o = t[a]
                        if (o && 'string' == typeof o) {
                          let t = Ht(o)
                          r[n]
                            ? (r[n] = r[n].concat(
                                t
                                  .split(' ')
                                  .map((t) => ''.concat(e, ':').concat(t)),
                              ))
                            : (r[n] = t
                                .split(' ')
                                .map((t) => ''.concat(e, ':').concat(t)))
                        } else
                          Array.isArray(o) &&
                            o.length > 0 &&
                            (r[n] = o.reduce(
                              (t, n) => t.concat(''.concat(e, ':').concat(n)),
                              [],
                            ))
                      }
                  return r
                },
                n = function (n) {
                  let r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null
                  var o
                  let l = (
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : c
                  )[n]
                  if (!l || Ft(l)) return null
                  let i =
                    null != (o = null == a ? void 0 : a[n])
                      ? o
                      : null == e
                        ? void 0
                        : e[n]
                  if (null === i) return null
                  let u = It(i),
                    f =
                      (Array.isArray(s.responsiveVariants) &&
                        s.responsiveVariants.length > 0) ||
                      !0 === s.responsiveVariants,
                    p = null == d ? void 0 : d[n],
                    h = []
                  if ('object' == typeof u && f)
                    for (let [e, c] of Object.entries(u)) {
                      let n = l[c]
                      'initial' !== e
                        ? (Array.isArray(s.responsiveVariants) &&
                            !s.responsiveVariants.includes(e)) ||
                          (h = t(e, n, h, r))
                        : (p = c)
                    }
                  let m =
                    l[
                      (null != u && 'object' != typeof u ? u : It(p)) || 'false'
                    ]
                  return 'object' == typeof h && 'string' == typeof r && h[r]
                    ? Zn(h, m)
                    : h.length > 0
                      ? (h.push(m), h)
                      : m
                },
                a = (e, t) => {
                  if (!c || 'object' != typeof c) return null
                  let r = new Array()
                  for (let a in c) {
                    let o = n(a, c, e, t),
                      l = 'base' === e && 'string' == typeof o ? o : o && o[e]
                    l && (r[r.length] = l)
                  }
                  return r
                },
                o = {}
              for (let r in e) void 0 !== e[r] && (o[r] = e[r])
              let i = (t, n) => {
                  var r
                  let a =
                    'object' == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (r = e[t]) ? void 0 : r.initial }
                      : {}
                  return { ...d, ...o, ...a, ...n }
                },
                p = function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = []
                  for (let { class: r, className: a, ...o } of e) {
                    let e = !0
                    for (let [n, r] of Object.entries(o)) {
                      let a = i(n, t)
                      if (Array.isArray(r)) {
                        if (!r.includes(a[n])) {
                          e = !1
                          break
                        }
                      } else if (a[n] !== r) {
                        e = !1
                        break
                      }
                    }
                    e && (r && n.push(r), a && n.push(a))
                  }
                  return n
                },
                g = (e) => {
                  let t = p(m, e)
                  if (!Array.isArray(t)) return t
                  let n = {}
                  for (let r of t)
                    if (
                      ('string' == typeof r && (n.base = Wn(n.base, r)(s)),
                      'object' == typeof r)
                    )
                      for (let [e, t] of Object.entries(r))
                        n[e] = Wn(n[e], t)(s)
                  return n
                },
                v = (e) => {
                  if (l.length < 1) return null
                  let t = {}
                  for (let {
                    slots: n = [],
                    class: r,
                    className: a,
                    ...o
                  } of l) {
                    if (!Ft(o)) {
                      let t = !0
                      for (let n of Object.keys(o)) {
                        let r = i(n, e)[n]
                        if (
                          void 0 === r ||
                          (Array.isArray(o[n]) ? !o[n].includes(r) : o[n] !== r)
                        ) {
                          t = !1
                          break
                        }
                      }
                      if (!t) continue
                    }
                    for (let e of n) (t[e] = t[e] || []), t[e].push([r, a])
                  }
                  return t
                }
              if (!Ft(r) || !f) {
                let e = {}
                if ('object' == typeof h && !Ft(h))
                  for (let t of Object.keys(h))
                    e[t] = (e) => {
                      var n, r
                      return Wn(
                        h[t],
                        a(t, e),
                        (null != (n = g(e)) ? n : [])[t],
                        (null != (r = v(e)) ? r : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className,
                      )(s)
                    }
                return e
              }
              return Wn(
                u,
                c ? Object.keys(c).map((e) => n(e, c)) : null,
                p(m),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className,
              )(s)
            }
          return (
            (g.variantKeys = (() => {
              if (c && 'object' == typeof c) return Object.keys(c)
            })()),
            (g.extend = n),
            (g.base = u),
            (g.slots = h),
            (g.variants = c),
            (g.defaultVariants = d),
            (g.compoundSlots = l),
            (g.compoundVariants = m),
            g
          )
        }
      function Gn(e) {
        var t,
          n,
          r = ''
        if ('string' == typeof e || 'number' == typeof e) r += e
        else if ('object' == typeof e)
          if (Array.isArray(e)) {
            var a = e.length
            for (t = 0; t < a; t++)
              e[t] && (n = Gn(e[t])) && (r && (r += ' '), (r += n))
          } else for (n in e) e[n] && (r && (r += ' '), (r += n))
        return r
      }
      const qn = function () {
        for (var e, t, n = 0, r = '', a = arguments.length; n < a; n++)
          (e = arguments[n]) && (t = Gn(e)) && (r && (r += ' '), (r += t))
        return r
      }
      var Kn = '-'
      function Yn(e) {
        var t = (function (e) {
            var t = e.theme,
              n = e.prefix,
              r = { nextPart: new Map(), validators: [] },
              a = (function (e, t) {
                if (!t) return e
                return e.map(function (e) {
                  return [
                    e[0],
                    e[1].map(function (e) {
                      return 'string' === typeof e
                        ? t + e
                        : 'object' === typeof e
                          ? Object.fromEntries(
                              Object.entries(e).map(function (e) {
                                var n = e[0],
                                  r = e[1]
                                return [t + n, r]
                              }),
                            )
                          : e
                    }),
                  ]
                })
              })(Object.entries(e.classGroups), n)
            return (
              a.forEach(function (e) {
                var n = e[0]
                er(e[1], r, n, t)
              }),
              r
            )
          })(e),
          n = e.conflictingClassGroups,
          r = e.conflictingClassGroupModifiers,
          a = void 0 === r ? {} : r
        return {
          getClassGroupId: function (e) {
            var n = e.split(Kn)
            return (
              '' === n[0] && 1 !== n.length && n.shift(),
              Xn(n, t) ||
                (function (e) {
                  if (Jn.test(e)) {
                    var t = Jn.exec(e)[1],
                      n =
                        null === t || void 0 === t
                          ? void 0
                          : t.substring(0, t.indexOf(':'))
                    if (n) return 'arbitrary..' + n
                  }
                })(e)
            )
          },
          getConflictingClassGroupIds: function (e, t) {
            var r = n[e] || []
            return t && a[e] ? [].concat(r, a[e]) : r
          },
        }
      }
      function Xn(e, t) {
        var n
        if (0 === e.length) return t.classGroupId
        var r = e[0],
          a = t.nextPart.get(r),
          o = a ? Xn(e.slice(1), a) : void 0
        if (o) return o
        if (0 !== t.validators.length) {
          var l = e.join(Kn)
          return null ===
            (n = t.validators.find(function (e) {
              return (0, e.validator)(l)
            })) || void 0 === n
            ? void 0
            : n.classGroupId
        }
      }
      var Jn = /^\[(.+)\]$/
      function er(e, t, n, r) {
        e.forEach(function (e) {
          if ('string' !== typeof e) {
            if ('function' === typeof e)
              return e.isThemeGetter
                ? void er(e(r), t, n, r)
                : void t.validators.push({ validator: e, classGroupId: n })
            Object.entries(e).forEach(function (e) {
              var a = e[0]
              er(e[1], tr(t, a), n, r)
            })
          } else {
            ;('' === e ? t : tr(t, e)).classGroupId = n
          }
        })
      }
      function tr(e, t) {
        var n = e
        return (
          t.split(Kn).forEach(function (e) {
            n.nextPart.has(e) ||
              n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(e))
          }),
          n
        )
      }
      function nr(e) {
        if (e < 1) return { get: function () {}, set: function () {} }
        var t = 0,
          n = new Map(),
          r = new Map()
        function a(a, o) {
          n.set(a, o), ++t > e && ((t = 0), (r = n), (n = new Map()))
        }
        return {
          get: function (e) {
            var t = n.get(e)
            return void 0 !== t
              ? t
              : void 0 !== (t = r.get(e))
                ? (a(e, t), t)
                : void 0
          },
          set: function (e, t) {
            n.has(e) ? n.set(e, t) : a(e, t)
          },
        }
      }
      var rr = '!'
      function ar(e) {
        var t = e.separator || ':',
          n = 1 === t.length,
          r = t[0],
          a = t.length
        return function (e) {
          for (var o, l = [], i = 0, s = 0, u = 0; u < e.length; u++) {
            var c = e[u]
            if (0 === i) {
              if (c === r && (n || e.slice(u, u + a) === t)) {
                l.push(e.slice(s, u)), (s = u + a)
                continue
              }
              if ('/' === c) {
                o = u
                continue
              }
            }
            '[' === c ? i++ : ']' === c && i--
          }
          var d = 0 === l.length ? e : e.substring(s),
            f = d.startsWith(rr)
          return {
            modifiers: l,
            hasImportantModifier: f,
            baseClassName: f ? d.substring(1) : d,
            maybePostfixModifierPosition: o && o > s ? o - s : void 0,
          }
        }
      }
      var or = /\s+/
      function lr() {
        for (var e, t, n = 0, r = ''; n < arguments.length; )
          (e = arguments[n++]) && (t = ir(e)) && (r && (r += ' '), (r += t))
        return r
      }
      function ir(e) {
        if ('string' === typeof e) return e
        for (var t, n = '', r = 0; r < e.length; r++)
          e[r] && (t = ir(e[r])) && (n && (n += ' '), (n += t))
        return n
      }
      function sr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        var r,
          a,
          o,
          l = function (e) {
            var n = t[0],
              s = t.slice(1).reduce(function (e, t) {
                return t(e)
              }, n())
            return (
              (r = (function (e) {
                return {
                  cache: nr(e.cacheSize),
                  splitModifiers: ar(e),
                  ...Yn(e),
                }
              })(s)),
              (a = r.cache.get),
              (o = r.cache.set),
              (l = i),
              i(e)
            )
          }
        function i(e) {
          var t = a(e)
          if (t) return t
          var n = (function (e, t) {
            var n = t.splitModifiers,
              r = t.getClassGroupId,
              a = t.getConflictingClassGroupIds,
              o = new Set()
            return e
              .trim()
              .split(or)
              .map(function (e) {
                var t = n(e),
                  a = t.modifiers,
                  o = t.hasImportantModifier,
                  l = t.baseClassName,
                  i = t.maybePostfixModifierPosition,
                  s = r(i ? l.substring(0, i) : l),
                  u = Boolean(i)
                if (!s) {
                  if (!i) return { isTailwindClass: !1, originalClassName: e }
                  if (!(s = r(l)))
                    return { isTailwindClass: !1, originalClassName: e }
                  u = !1
                }
                var c = (function (e) {
                  if (e.length <= 1) return e
                  var t = [],
                    n = []
                  return (
                    e.forEach(function (e) {
                      '[' === e[0]
                        ? (t.push.apply(t, n.sort().concat([e])), (n = []))
                        : n.push(e)
                    }),
                    t.push.apply(t, n.sort()),
                    t
                  )
                })(a).join(':')
                return {
                  isTailwindClass: !0,
                  modifierId: o ? c + rr : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: u,
                }
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0
                var t = e.modifierId,
                  n = e.classGroupId,
                  r = e.hasPostfixModifier,
                  l = t + n
                return (
                  !o.has(l) &&
                  (o.add(l),
                  a(n, r).forEach(function (e) {
                    return o.add(t + e)
                  }),
                  !0)
                )
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName
              })
              .join(' ')
          })(e, r)
          return o(e, n), n
        }
        return function () {
          return l(lr.apply(null, arguments))
        }
      }
      function ur(e) {
        var t = function (t) {
          return t[e] || []
        }
        return (t.isThemeGetter = !0), t
      }
      var cr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        dr = /^\d+\/\d+$/,
        fr = new Set(['px', 'full', 'screen']),
        pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        hr =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        mr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
      function gr(e) {
        return kr(e) || fr.has(e) || dr.test(e) || vr(e)
      }
      function vr(e) {
        return Pr(e, 'length', zr)
      }
      function br(e) {
        return Pr(e, 'size', Lr)
      }
      function yr(e) {
        return Pr(e, 'position', Lr)
      }
      function wr(e) {
        return Pr(e, 'url', Tr)
      }
      function xr(e) {
        return Pr(e, 'number', kr)
      }
      function kr(e) {
        return !Number.isNaN(Number(e))
      }
      function Sr(e) {
        return e.endsWith('%') && kr(e.slice(0, -1))
      }
      function Cr(e) {
        return Rr(e) || Pr(e, 'number', Rr)
      }
      function Er(e) {
        return cr.test(e)
      }
      function Nr() {
        return !0
      }
      function _r(e) {
        return pr.test(e)
      }
      function jr(e) {
        return Pr(e, '', Mr)
      }
      function Pr(e, t, n) {
        var r = cr.exec(e)
        return !!r && (r[1] ? r[1] === t : n(r[2]))
      }
      function zr(e) {
        return hr.test(e)
      }
      function Lr() {
        return !1
      }
      function Tr(e) {
        return e.startsWith('url(')
      }
      function Rr(e) {
        return Number.isInteger(Number(e))
      }
      function Mr(e) {
        return mr.test(e)
      }
      function Dr() {
        var e = ur('colors'),
          t = ur('spacing'),
          n = ur('blur'),
          r = ur('brightness'),
          a = ur('borderColor'),
          o = ur('borderRadius'),
          l = ur('borderSpacing'),
          i = ur('borderWidth'),
          s = ur('contrast'),
          u = ur('grayscale'),
          c = ur('hueRotate'),
          d = ur('invert'),
          f = ur('gap'),
          p = ur('gradientColorStops'),
          h = ur('gradientColorStopPositions'),
          m = ur('inset'),
          g = ur('margin'),
          v = ur('opacity'),
          b = ur('padding'),
          y = ur('saturate'),
          w = ur('scale'),
          x = ur('sepia'),
          k = ur('skew'),
          S = ur('space'),
          C = ur('translate'),
          E = function () {
            return ['auto', Er, t]
          },
          N = function () {
            return [Er, t]
          },
          _ = function () {
            return ['', gr]
          },
          j = function () {
            return ['auto', kr, Er]
          },
          P = function () {
            return ['', '0', Er]
          },
          z = function () {
            return [kr, xr]
          },
          L = function () {
            return [kr, Er]
          }
        return {
          cacheSize: 500,
          theme: {
            colors: [Nr],
            spacing: [gr],
            blur: ['none', '', _r, Er],
            brightness: z(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', _r, Er],
            borderSpacing: N(),
            borderWidth: _(),
            contrast: z(),
            grayscale: P(),
            hueRotate: L(),
            invert: P(),
            gap: N(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Sr, vr],
            inset: E(),
            margin: E(),
            opacity: z(),
            padding: N(),
            saturate: z(),
            scale: z(),
            sepia: P(),
            skew: L(),
            space: N(),
            translate: N(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', Er] }],
            container: ['container'],
            columns: [{ columns: [_r] }],
            'break-after': [
              {
                'break-after': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-before': [
              {
                'break-before': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-inside': [
              {
                'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'],
              },
            ],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none'] }],
            clear: [{ clear: ['left', 'right', 'both', 'none'] }],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [
              { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
            ],
            'object-position': [
              {
                object: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [Er],
                ),
              },
            ],
            overflow: [
              { overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-x': [
              { 'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            'overflow-y': [
              { 'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
            ],
            overscroll: [{ overscroll: ['auto', 'contain', 'none'] }],
            'overscroll-x': [{ 'overscroll-x': ['auto', 'contain', 'none'] }],
            'overscroll-y': [{ 'overscroll-y': ['auto', 'contain', 'none'] }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [m] }],
            'inset-x': [{ 'inset-x': [m] }],
            'inset-y': [{ 'inset-y': [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', Cr] }],
            basis: [{ basis: E() }],
            'flex-direction': [
              { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
            ],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', Er] }],
            grow: [{ grow: P() }],
            shrink: [{ shrink: P() }],
            order: [{ order: ['first', 'last', 'none', Cr] }],
            'grid-cols': [{ 'grid-cols': [Nr] }],
            'col-start-end': [{ col: ['auto', { span: ['full', Cr] }, Er] }],
            'col-start': [{ 'col-start': j() }],
            'col-end': [{ 'col-end': j() }],
            'grid-rows': [{ 'grid-rows': [Nr] }],
            'row-start-end': [{ row: ['auto', { span: [Cr] }, Er] }],
            'row-start': [{ 'row-start': j() }],
            'row-end': [{ 'row-end': j() }],
            'grid-flow': [
              {
                'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'],
              },
            ],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', Er] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', Er] }],
            gap: [{ gap: [f] }],
            'gap-x': [{ 'gap-x': [f] }],
            'gap-y': [{ 'gap-y': [f] }],
            'justify-content': [
              {
                justify: ['normal'].concat([
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                  'stretch',
                ]),
              },
            ],
            'justify-items': [
              { 'justify-items': ['start', 'end', 'center', 'stretch'] },
            ],
            'justify-self': [
              { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            'align-content': [
              {
                content: ['normal'].concat(
                  [
                    'start',
                    'end',
                    'center',
                    'between',
                    'around',
                    'evenly',
                    'stretch',
                  ],
                  ['baseline'],
                ),
              },
            ],
            'align-items': [
              { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
            ],
            'align-self': [
              {
                self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'],
              },
            ],
            'place-content': [
              {
                'place-content': [].concat(
                  [
                    'start',
                    'end',
                    'center',
                    'between',
                    'around',
                    'evenly',
                    'stretch',
                  ],
                  ['baseline'],
                ),
              },
            ],
            'place-items': [
              {
                'place-items': [
                  'start',
                  'end',
                  'center',
                  'baseline',
                  'stretch',
                ],
              },
            ],
            'place-self': [
              { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            'space-x': [{ 'space-x': [S] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [S] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [{ w: ['auto', 'min', 'max', 'fit', Er, t] }],
            'min-w': [{ 'min-w': ['min', 'max', 'fit', Er, gr] }],
            'max-w': [
              {
                'max-w': [
                  '0',
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [_r] },
                  _r,
                  Er,
                ],
              },
            ],
            h: [{ h: [Er, t, 'auto', 'min', 'max', 'fit'] }],
            'min-h': [{ 'min-h': ['min', 'max', 'fit', Er, gr] }],
            'max-h': [{ 'max-h': [Er, t, 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', _r, vr] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  xr,
                ],
              },
            ],
            'font-family': [{ font: [Nr] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [
              {
                tracking: [
                  'tighter',
                  'tight',
                  'normal',
                  'wide',
                  'wider',
                  'widest',
                  Er,
                ],
              },
            ],
            'line-clamp': [{ 'line-clamp': ['none', kr, xr] }],
            leading: [
              {
                leading: [
                  'none',
                  'tight',
                  'snug',
                  'normal',
                  'relaxed',
                  'loose',
                  Er,
                  gr,
                ],
              },
            ],
            'list-image': [{ 'list-image': ['none', Er] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', Er] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
            'text-alignment': [
              { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
            ],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [v] }],
            'text-decoration': [
              'underline',
              'overline',
              'line-through',
              'no-underline',
            ],
            'text-decoration-style': [
              {
                decoration: [].concat(
                  ['solid', 'dashed', 'dotted', 'double', 'none'],
                  ['wavy'],
                ),
              },
            ],
            'text-decoration-thickness': [
              { decoration: ['auto', 'from-font', gr] },
            ],
            'underline-offset': [{ 'underline-offset': ['auto', Er, gr] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': [
              'uppercase',
              'lowercase',
              'capitalize',
              'normal-case',
            ],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            indent: [{ indent: N() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  Er,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  'normal',
                  'nowrap',
                  'pre',
                  'pre-line',
                  'pre-wrap',
                  'break-spaces',
                ],
              },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', Er] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [
              { 'bg-clip': ['border', 'padding', 'content', 'text'] },
            ],
            'bg-opacity': [{ 'bg-opacity': [v] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [
              {
                bg: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [yr],
                ),
              },
            ],
            'bg-repeat': [
              {
                bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }],
              },
            ],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', br] }],
            'bg-image': [
              {
                bg: [
                  'none',
                  {
                    'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'],
                  },
                  wr,
                ],
              },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [h] }],
            'gradient-via-pos': [{ via: [h] }],
            'gradient-to-pos': [{ to: [h] }],
            'gradient-from': [{ from: [p] }],
            'gradient-via': [{ via: [p] }],
            'gradient-to': [{ to: [p] }],
            rounded: [{ rounded: [o] }],
            'rounded-s': [{ 'rounded-s': [o] }],
            'rounded-e': [{ 'rounded-e': [o] }],
            'rounded-t': [{ 'rounded-t': [o] }],
            'rounded-r': [{ 'rounded-r': [o] }],
            'rounded-b': [{ 'rounded-b': [o] }],
            'rounded-l': [{ 'rounded-l': [o] }],
            'rounded-ss': [{ 'rounded-ss': [o] }],
            'rounded-se': [{ 'rounded-se': [o] }],
            'rounded-ee': [{ 'rounded-ee': [o] }],
            'rounded-es': [{ 'rounded-es': [o] }],
            'rounded-tl': [{ 'rounded-tl': [o] }],
            'rounded-tr': [{ 'rounded-tr': [o] }],
            'rounded-br': [{ 'rounded-br': [o] }],
            'rounded-bl': [{ 'rounded-bl': [o] }],
            'border-w': [{ border: [i] }],
            'border-w-x': [{ 'border-x': [i] }],
            'border-w-y': [{ 'border-y': [i] }],
            'border-w-s': [{ 'border-s': [i] }],
            'border-w-e': [{ 'border-e': [i] }],
            'border-w-t': [{ 'border-t': [i] }],
            'border-w-r': [{ 'border-r': [i] }],
            'border-w-b': [{ 'border-b': [i] }],
            'border-w-l': [{ 'border-l': [i] }],
            'border-opacity': [{ 'border-opacity': [v] }],
            'border-style': [
              {
                border: [].concat(
                  ['solid', 'dashed', 'dotted', 'double', 'none'],
                  ['hidden'],
                ),
              },
            ],
            'divide-x': [{ 'divide-x': [i] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [i] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [v] }],
            'divide-style': [
              { divide: ['solid', 'dashed', 'dotted', 'double', 'none'] },
            ],
            'border-color': [{ border: [a] }],
            'border-color-x': [{ 'border-x': [a] }],
            'border-color-y': [{ 'border-y': [a] }],
            'border-color-t': [{ 'border-t': [a] }],
            'border-color-r': [{ 'border-r': [a] }],
            'border-color-b': [{ 'border-b': [a] }],
            'border-color-l': [{ 'border-l': [a] }],
            'divide-color': [{ divide: [a] }],
            'outline-style': [
              {
                outline: [''].concat([
                  'solid',
                  'dashed',
                  'dotted',
                  'double',
                  'none',
                ]),
              },
            ],
            'outline-offset': [{ 'outline-offset': [Er, gr] }],
            'outline-w': [{ outline: [gr] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: _() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [v] }],
            'ring-offset-w': [{ 'ring-offset': [gr] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', _r, jr] }],
            'shadow-color': [{ shadow: [Nr] }],
            opacity: [{ opacity: [v] }],
            'mix-blend': [
              {
                'mix-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                  'plus-lighter',
                ],
              },
            ],
            'bg-blend': [
              {
                'bg-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                  'plus-lighter',
                ],
              },
            ],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [s] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', _r, Er] }],
            grayscale: [{ grayscale: [u] }],
            'hue-rotate': [{ 'hue-rotate': [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [x] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [n] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [s] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
            'backdrop-invert': [{ 'backdrop-invert': [d] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [y] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [l] }],
            'border-spacing-x': [{ 'border-spacing-x': [l] }],
            'border-spacing-y': [{ 'border-spacing-y': [l] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              {
                transition: [
                  'none',
                  'all',
                  '',
                  'colors',
                  'opacity',
                  'shadow',
                  'transform',
                  Er,
                ],
              },
            ],
            duration: [{ duration: L() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', Er] }],
            delay: [{ delay: L() }],
            animate: [
              { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', Er] },
            ],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [w] }],
            'scale-x': [{ 'scale-x': [w] }],
            'scale-y': [{ 'scale-y': [w] }],
            rotate: [{ rotate: [Cr, Er] }],
            'translate-x': [{ 'translate-x': [C] }],
            'translate-y': [{ 'translate-y': [C] }],
            'skew-x': [{ 'skew-x': [k] }],
            'skew-y': [{ 'skew-y': [k] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  Er,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: ['appearance-none'],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  Er,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': N() }],
            'scroll-mx': [{ 'scroll-mx': N() }],
            'scroll-my': [{ 'scroll-my': N() }],
            'scroll-ms': [{ 'scroll-ms': N() }],
            'scroll-me': [{ 'scroll-me': N() }],
            'scroll-mt': [{ 'scroll-mt': N() }],
            'scroll-mr': [{ 'scroll-mr': N() }],
            'scroll-mb': [{ 'scroll-mb': N() }],
            'scroll-ml': [{ 'scroll-ml': N() }],
            'scroll-p': [{ 'scroll-p': N() }],
            'scroll-px': [{ 'scroll-px': N() }],
            'scroll-py': [{ 'scroll-py': N() }],
            'scroll-ps': [{ 'scroll-ps': N() }],
            'scroll-pe': [{ 'scroll-pe': N() }],
            'scroll-pt': [{ 'scroll-pt': N() }],
            'scroll-pr': [{ 'scroll-pr': N() }],
            'scroll-pb': [{ 'scroll-pb': N() }],
            'scroll-pl': [{ 'scroll-pl': N() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [
              {
                touch: [
                  'auto',
                  'none',
                  'pinch-zoom',
                  'manipulation',
                  { pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
                ],
              },
            ],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [
              {
                'will-change': ['auto', 'scroll', 'contents', 'transform', Er],
              },
            ],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [gr, xr] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: [
              'inset-x',
              'inset-y',
              'start',
              'end',
              'top',
              'right',
              'bottom',
              'left',
            ],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        }
      }
      var Or = sr(Dr)
      function Ir() {
        return Or(qn(...arguments))
      }
      const Fr = [
          'outline outline-offset-2 outline-0 focus-visible:outline-2',
          'outline-blue-500 dark:outline-blue-500',
        ],
        Ar = Qn({
          base: Ir(
            'inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
          ),
          variants: {
            variant: {
              default: [
                'bg-blue-50 text-blue-900 ring-blue-500/30',
                'dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
              ],
              neutral: [
                'bg-gray-50 text-gray-900 ring-gray-500/30',
                'dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20',
              ],
              success: [
                'bg-emerald-50 text-emerald-900 ring-emerald-600/30',
                'dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20',
              ],
              error: [
                'bg-red-50 text-red-900 ring-red-600/20',
                'dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
              ],
              warning: [
                'bg-yellow-50 text-yellow-900 ring-yellow-600/30',
                'dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20',
              ],
            },
          },
          defaultVariants: { variant: 'default' },
        }),
        Ur = t.forwardRef((e, t) => {
          let { className: n, variant: r, ...a } = e
          return (0, Mt.jsx)('span', {
            ref: t,
            className: Ir(Ar({ variant: r }), n),
            ...a,
          })
        })
      Ur.displayName = 'Badge'
      const Br = t.forwardRef((e, t) => {
        let { className: n, children: r, ...a } = e
        return (0, Mt.jsx)('div', {
          ref: t,
          children: (0, Mt.jsx)('div', {
            className: Ir('w-full overflow-auto whitespace-nowrap', n),
            ...a,
            children: r,
          }),
        })
      })
      Br.displayName = 'TableRoot'
      const Vr = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('table', {
          ref: t,
          className: Ir(
            'w-full caption-bottom border-b',
            'border-gray-200 dark:border-gray-800',
            n,
          ),
          ...r,
        })
      })
      Vr.displayName = 'Table'
      const Hr = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('thead', { ref: t, className: Ir(n), ...r })
      })
      Hr.displayName = 'TableHead'
      const $r = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('th', {
          ref: t,
          className: Ir(
            'border-b px-4 py-3.5 text-left text-sm font-semibold',
            ' text-gray-900 dark:text-gray-50',
            'border-gray-200 dark:border-gray-800',
            n,
          ),
          ...r,
        })
      })
      $r.displayName = 'TableHeaderCell'
      const Wr = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('tbody', {
          ref: t,
          className: Ir('divide-y', 'divide-gray-200 dark:divide-gray-800', n),
          ...r,
        })
      })
      Wr.displayName = 'TableBody'
      const Zr = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('tr', {
          ref: t,
          className: Ir(
            '[&_td:last-child]:pr-4 [&_th:last-child]:pr-4',
            '[&_td:first-child]:pl-4 [&_th:first-child]:pl-4',
            n,
          ),
          ...r,
        })
      })
      Zr.displayName = 'TableRow'
      const Qr = t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('td', {
          ref: t,
          className: Ir('p-4 text-sm', 'text-gray-600 dark:text-gray-400', n),
          ...r,
        })
      })
      Qr.displayName = 'TableCell'
      t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('tfoot', {
          ref: t,
          className: Ir(
            'border-t text-left font-medium',
            ' text-gray-900 dark:text-gray-50',
            'border-gray-200 dark:border-gray-800',
            n,
          ),
          ...r,
        })
      }).displayName = 'TableFoot'
      function Gr(e) {
        const t = new Date(e),
          n = t.getDate(),
          r = t.getMonth() + 1,
          a = t.getFullYear(),
          o = t.getHours(),
          l = t.getMinutes()
        return ''
          .concat(n < 10 ? '0'.concat(n) : n, '/')
          .concat(r < 10 ? '0'.concat(r) : r, '/')
          .concat(a, ' ')
          .concat(o < 10 ? '0'.concat(o) : o, ':')
          .concat(l < 10 ? '0'.concat(l) : l)
      }
      t.forwardRef((e, t) => {
        let { className: n, ...r } = e
        return (0, Mt.jsx)('caption', {
          ref: t,
          className: Ir(
            'mt-3 px-3 text-center text-sm',
            'text-gray-500 dark:text-gray-500',
            n,
          ),
          ...r,
        })
      }).displayName = 'TableCaption'
      const qr = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z',
            }),
          )
        },
        Kr = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z',
            }),
          )
        },
        Yr = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z',
            }),
          )
        },
        Xr = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457ZM14.7577 16.1718L13.2937 14.7078C12.902 14.8952 12.4634 15.0002 12.0003 15.0002C10.3434 15.0002 9.00026 13.657 9.00026 12.0002C9.00026 11.537 9.10522 11.0984 9.29263 10.7067L7.82866 9.24277C7.30514 10.0332 7.00026 10.9811 7.00026 12.0002C7.00026 14.7616 9.23884 17.0002 12.0003 17.0002C13.0193 17.0002 13.9672 16.6953 14.7577 16.1718ZM7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925L16.947 12.7327C16.9821 12.4936 17.0003 12.249 17.0003 12.0002C17.0003 9.23873 14.7617 7.00016 12.0003 7.00016C11.7514 7.00016 11.5068 7.01833 11.2677 7.05343L7.97446 3.76015Z',
            }),
          )
        },
        Jr = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z',
            }),
          )
        },
        ea = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z',
            }),
          )
        },
        ta = (e) => {
          let {
            color: n = 'currentColor',
            size: r = 24,
            className: a,
            ...o
          } = e
          return t.createElement(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              width: r,
              height: r,
              fill: n,
              ...o,
              className: 'remixicon ' + (a || ''),
            },
            t.createElement('path', {
              d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z',
            }),
          )
        },
        na = Qn({
          base: [
            'relative block w-full appearance-none rounded-md border px-2.5 py-1.5 shadow-sm outline-none transition sm:text-sm',
            'border-gray-300 dark:border-gray-800',
            'text-gray-900 dark:text-gray-50',
            'placeholder-gray-400 dark:placeholder-gray-500',
            'bg-white dark:bg-gray-950',
            'disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
            'disabled:dark:border-gray-700 disabled:dark:bg-gray-800 disabled:dark:text-gray-500',
            [
              'file:-my-1.5 file:-ml-2.5 file:h-[36px] file:cursor-pointer file:rounded-l-md file:rounded-r-none file:border-0 file:px-3 file:py-1.5 file:outline-none focus:outline-none disabled:pointer-events-none file:disabled:pointer-events-none',
              'file:border-solid file:border-gray-300 file:bg-gray-50 file:text-gray-500 file:hover:bg-gray-100 file:dark:border-gray-800 file:dark:bg-gray-950 file:hover:dark:bg-gray-900/20 file:disabled:dark:border-gray-700',
              'file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]',
              'file:disabled:bg-gray-100 file:disabled:text-gray-500 file:disabled:dark:bg-gray-800',
            ],
            [
              'focus:ring-2',
              'focus:ring-blue-200 focus:dark:ring-blue-700/30',
              'focus:border-blue-500 focus:dark:border-blue-700',
            ],
            '[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
          ],
          variants: {
            hasError: {
              true: [
                'ring-2',
                'border-red-500 dark:border-red-700',
                'ring-red-200 dark:ring-red-700/30',
              ],
            },
            enableStepper: {
              true: '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            },
          },
        }),
        ra = t.forwardRef((e, n) => {
          let {
            className: r,
            inputClassName: a,
            hasError: o,
            enableStepper: l,
            type: i,
            ...s
          } = e
          const [u, c] = t.useState(i),
            d = 'password' === i,
            f = 'search' === i
          return (0, Mt.jsxs)('div', {
            className: Ir('relative w-full', r),
            children: [
              (0, Mt.jsx)('input', {
                ref: n,
                type: d ? u : i,
                className: Ir(
                  na({ hasError: o, enableStepper: l }),
                  { 'pl-8': f, 'pr-10': d },
                  a,
                ),
                ...s,
              }),
              f &&
                (0, Mt.jsx)('div', {
                  className: Ir(
                    'pointer-events-none absolute bottom-0 left-2 flex h-full items-center justify-center',
                    'text-gray-400 dark:text-gray-600',
                  ),
                  children: (0, Mt.jsx)(ea, {
                    className: 'size-[1.125rem] shrink-0',
                    'aria-hidden': 'true',
                  }),
                }),
              d &&
                (0, Mt.jsx)('div', {
                  className: Ir(
                    'absolute bottom-0 right-0 flex h-full items-center justify-center px-3',
                  ),
                  children: (0, Mt.jsxs)('button', {
                    'aria-label': 'Change password visibility',
                    className: Ir(
                      'h-fit w-fit rounded-sm outline-none transition-all',
                      'text-gray-400  dark:text-gray-600',
                      'hover:text-gray-500 hover:dark:text-gray-500',
                      Fr,
                    ),
                    type: 'button',
                    onClick: () => {
                      c('password' === u ? 'text' : 'password')
                    },
                    children: [
                      (0, Mt.jsx)('span', {
                        className: 'sr-only',
                        children:
                          'password' === u ? 'Show password' : 'Hide password',
                      }),
                      'password' === u
                        ? (0, Mt.jsx)(Yr, {
                            'aria-hidden': 'true',
                            className: 'size-5 shrink-0',
                          })
                        : (0, Mt.jsx)(Xr, {
                            'aria-hidden': 'true',
                            className: 'size-5 shrink-0',
                          }),
                    ],
                  }),
                }),
            ],
          })
        })
      function aa(e) {
        let { data: t } = e
        return (0, Mt.jsxs)(Mt.Fragment, {
          children: [
            (0, Mt.jsxs)('div', {
              className: 'text-center',
              children: [
                (0, Mt.jsx)('h3', {
                  className: 'font-semibold text-gray-900 dark:text-gray-50',
                  children: 'List of clients',
                }),
                (0, Mt.jsx)('p', {
                  className:
                    'mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400',
                  children:
                    'List of clients with their details information and status',
                }),
              ],
            }),
            (0, Mt.jsxs)('div', {
              className: 'md:w-[90%] w-full mx-auto',
              children: [
                (0, Mt.jsxs)('div', {
                  className:
                    'flex justify-between items-center w-full mx-auto gap-5',
                  children: [
                    (0, Mt.jsx)('div', {
                      className: 'flex-1 space-y-2',
                      children: (0, Mt.jsx)(ra, {
                        inputClassName: 'w-full',
                        placeholder: 'Search clients',
                        id: 'search',
                        name: 'search',
                        type: 'search',
                      }),
                    }),
                    (0, Mt.jsx)('button', {
                      className: 'bg-blue-600 text-white px-4 py-2 rounded-md',
                      children: 'Add new client',
                    }),
                  ],
                }),
                (0, Mt.jsx)(Br, {
                  className:
                    'mt-8 w-full mx-auto border-t-2 border-indigo-600 bg-blue-600/10 rounded-xl',
                  children: (0, Mt.jsxs)(Vr, {
                    children: [
                      (0, Mt.jsx)(Hr, {
                        children: (0, Mt.jsxs)(Zr, {
                          className: '',
                          children: [
                            (0, Mt.jsx)($r, { children: 'Name' }),
                            (0, Mt.jsx)($r, { children: 'LastName' }),
                            (0, Mt.jsx)($r, { children: 'Status' }),
                            (0, Mt.jsx)($r, { children: 'City' }),
                            (0, Mt.jsx)($r, { children: 'Phone' }),
                            (0, Mt.jsx)($r, {
                              className: 'text-right',
                              children: 'Address',
                            }),
                            (0, Mt.jsx)($r, {
                              className: 'text-right',
                              children: 'Joined at',
                            }),
                          ],
                        }),
                      }),
                      (0, Mt.jsx)(Wr, {
                        children: t.map((e) =>
                          (0, Mt.jsxs)(
                            Zr,
                            {
                              children: [
                                (0, Mt.jsx)(Qr, {
                                  className: '',
                                  children: e.name,
                                }),
                                (0, Mt.jsx)(Qr, { children: e.lastName }),
                                (0, Mt.jsx)(Qr, {
                                  children: (0, Mt.jsx)(Ur, {
                                    variant:
                                      'inactive' === e.state
                                        ? 'warning'
                                        : 'success',
                                    children: e.state,
                                  }),
                                }),
                                (0, Mt.jsx)(Qr, { children: e.city }),
                                (0, Mt.jsx)(Qr, { children: e.phone }),
                                (0, Mt.jsx)(Qr, {
                                  className: 'text-right',
                                  children: e.address,
                                }),
                                (0, Mt.jsx)(Qr, {
                                  className: 'text-right',
                                  children: Gr(e.createdAt),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function oa() {
        const [e, n] = (0, t.useState)([])
        return (
          (0, t.useEffect)(() => {
            fetch('/api/client')
              .then((e) => e.json())
              .then((e) => {
                n(e)
              })
              .catch((e) => {
                console.error(e),
                  n([
                    {
                      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
                      name: 'Jeremiah Rallinshaw',
                      lastName: 'Rallinshaw',
                      email: 'jrallinshaw0@naver.com',
                      phone: '+57 721 917 2990',
                      address: '187 Morrow Place',
                      city: 'Puerto Colombia',
                      state: 'active',
                      profile: null,
                      createdAt: '2024-05-13T00:07:49.989Z',
                      updatedAt: '2024-05-13T00:07:49.989Z',
                    },
                    {
                      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
                      name: 'Jessica Gildersleaves',
                      lastName: 'Gildersleaves',
                      email: 'jgildersleaves1@uol.com.br',
                      phone: '+7 691 818 0766',
                      address: '205 Reindahl Center',
                      city: 'Bogorodsk',
                      state: 'inactive',
                      profile: null,
                      createdAt: '2024-05-13T00:07:50.042Z',
                      updatedAt: '2024-05-13T00:07:50.042Z',
                    },
                    {
                      id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
                      name: 'Joshua Lambart',
                      lastName: 'Lambart',
                      email: 'jlambart2@google.co.jp',
                      phone: '+82 748 218 5493',
                      address: '16738 Express Circle',
                      city: 'Anseong',
                      state: 'active',
                      profile: null,
                      createdAt: '2024-05-13T00:07:50.096Z',
                      updatedAt: '2024-05-13T00:07:50.096Z',
                    },
                    {
                      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
                      name: 'Darcee Lampart',
                      lastName: 'Lampart',
                      email: 'dlampart3@cbslocal.com',
                      phone: '+351 678 762 2111',
                      address: '9069 Shasta Circle',
                      city: 'Valejas',
                      state: 'inactive',
                      profile: null,
                      createdAt: '2024-05-13T00:07:50.145Z',
                      updatedAt: '2024-05-13T00:07:50.145Z',
                    },
                  ])
              })
          }, []),
          (0, Mt.jsx)('div', { children: (0, Mt.jsx)(aa, { data: e }) })
        )
      }
      function la(e) {
        let { data: t } = e
        return (0, Mt.jsxs)(Mt.Fragment, {
          children: [
            (0, Mt.jsxs)('div', {
              className: 'text-center',
              children: [
                (0, Mt.jsx)('h3', {
                  className: 'font-semibold text-gray-900 dark:text-gray-50',
                  children: 'List of clients',
                }),
                (0, Mt.jsx)('p', {
                  className:
                    'mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400',
                  children:
                    'List of clients with their details information and status',
                }),
              ],
            }),
            (0, Mt.jsxs)('div', {
              className: 'md:w-[90%] w-full mx-auto',
              children: [
                (0, Mt.jsxs)('div', {
                  className:
                    'flex justify-between items-center w-full mx-auto gap-5',
                  children: [
                    (0, Mt.jsx)('div', {
                      className: 'flex-1 space-y-2',
                      children: (0, Mt.jsx)(ra, {
                        inputClassName: 'w-full',
                        placeholder: 'Search invoices',
                        id: 'search',
                        name: 'search',
                        type: 'search',
                      }),
                    }),
                    (0, Mt.jsx)('button', {
                      className: 'bg-blue-600 text-white px-4 py-2 rounded-md',
                      children: 'Add new Invoice',
                    }),
                  ],
                }),
                (0, Mt.jsx)(Br, {
                  className:
                    'mt-8 w-full mx-auto border-t-2 border-indigo-600 bg-blue-600/10 rounded-xl',
                  children: (0, Mt.jsxs)(Vr, {
                    children: [
                      (0, Mt.jsx)(Hr, {
                        children: (0, Mt.jsxs)(Zr, {
                          className: '',
                          children: [
                            (0, Mt.jsx)($r, { children: 'ID' }),
                            (0, Mt.jsx)($r, { children: 'Client' }),
                            (0, Mt.jsx)($r, { children: 'Email' }),
                            (0, Mt.jsx)($r, { children: 'Date' }),
                            (0, Mt.jsx)($r, { children: 'Amount' }),
                            (0, Mt.jsx)($r, {
                              className: 'text-right',
                              children: 'Estate',
                            }),
                            (0, Mt.jsx)($r, {
                              className: 'text-right',
                              children: 'Emmited at',
                            }),
                            (0, Mt.jsx)($r, {
                              className: 'text-center',
                              children: 'Action',
                            }),
                          ],
                        }),
                      }),
                      (0, Mt.jsx)(Wr, {
                        children: t.map((e) => {
                          return (0, Mt.jsxs)(
                            Zr,
                            {
                              children: [
                                (0, Mt.jsx)(Qr, {
                                  className: '',
                                  children: e.id,
                                }),
                                (0, Mt.jsxs)(Qr, {
                                  children: [e.name, ' ', e.last_name],
                                }),
                                (0, Mt.jsx)(Qr, { children: e.email }),
                                (0, Mt.jsx)(Qr, { children: Gr(e.date) }),
                                (0, Mt.jsx)(Qr, {
                                  children:
                                    ((t = e.amount),
                                    new Intl.NumberFormat('en-US', {
                                      style: 'currency',
                                      currency: 'USD',
                                    }).format(t)),
                                }),
                                (0, Mt.jsx)(Qr, {
                                  children: (0, Mt.jsxs)(Ur, {
                                    variant:
                                      'pending' === e.status
                                        ? 'error'
                                        : 'success',
                                    className:
                                      'flex justify-evenly items-center',
                                    children: [
                                      'pending' === e.status &&
                                        (0, Mt.jsx)(ta, {
                                          className: 'size-4 shrink-0',
                                        }),
                                      (0, Mt.jsx)('span', {
                                        children: e.status,
                                      }),
                                      'paid' === e.status &&
                                        (0, Mt.jsx)(qr, {
                                          className: 'size-4 shrink-0',
                                        }),
                                    ],
                                  }),
                                }),
                                (0, Mt.jsx)(Qr, {
                                  className: 'text-center',
                                  children: Gr(e.created_at),
                                }),
                                (0, Mt.jsxs)(Qr, {
                                  className:
                                    'flex justify-center items-center gap-2 ',
                                  children: [
                                    (0, Mt.jsx)('button', {
                                      className:
                                        'rounded border-2 border-yellow-600 text-base dark:bg-yellow-600/10 dark:text-yellow-500 dark:ring-yellow-400/20 p-1',
                                      children: (0, Mt.jsx)(Jr, {
                                        className: 'size-7 shrink-0',
                                      }),
                                    }),
                                    (0, Mt.jsx)('button', {
                                      className:
                                        'rounded border-2 border-red-500 text-base dark:bg-red-500/10 dark:text-red-500 dark:ring-red-500/20 p-1',
                                      children: (0, Mt.jsx)(Kr, {
                                        className: 'size-7 shrink-0',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          )
                          var t
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function ia() {
        const [e, n] = (0, t.useState)([])
        return (
          (0, t.useEffect)(() => {
            fetch('/api/invoices/client')
              .then((e) => e.json())
              .then((e) => n(e))
              .catch((e) => {
                console.log(e),
                  n([
                    {
                      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
                      amount: 15795,
                      date: '2022-12-06T04:00:00.000Z',
                      status: 'pending',
                      client_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
                      created_at: '2024-05-13T00:07:49.989Z',
                      updated_at: '2024-05-13T00:07:49.989Z',
                      name: 'Jeremiah Rallinshaw',
                      last_name: 'Rallinshaw',
                      email: 'jrallinshaw0@naver.com',
                      phone: '+57 721 917 2990',
                      address: '187 Morrow Place',
                      city: 'Puerto Colombia',
                      state: 'active',
                      profile: null,
                    },
                    {
                      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
                      amount: 20348,
                      date: '2022-11-14T04:00:00.000Z',
                      status: 'pending',
                      client_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
                      created_at: '2024-05-13T00:07:50.042Z',
                      updated_at: '2024-05-13T00:07:50.042Z',
                      name: 'Jessica Gildersleaves',
                      last_name: 'Gildersleaves',
                      email: 'jgildersleaves1@uol.com.br',
                      phone: '+7 691 818 0766',
                      address: '205 Reindahl Center',
                      city: 'Bogorodsk',
                      state: 'active',
                      profile: null,
                    },
                    {
                      id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
                      amount: 3040,
                      date: '2022-10-29T04:00:00.000Z',
                      status: 'paid',
                      client_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
                      created_at: '2024-05-13T00:07:50.195Z',
                      updated_at: '2024-05-13T00:07:50.195Z',
                      name: 'Ramonda Cuttin',
                      last_name: 'Cuttin',
                      email: 'rcuttin4@latimes.com',
                      phone: '+86 684 140 8857',
                      address: '34 Mosinee Junction',
                      city: 'Bilian',
                      state: 'active',
                      profile: null,
                    },
                    {
                      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
                      amount: 44800,
                      date: '2023-09-10T04:00:00.000Z',
                      status: 'paid',
                      client_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
                      created_at: '2024-05-13T00:07:50.145Z',
                      updated_at: '2024-05-13T00:07:50.145Z',
                      name: 'Darcee Lampart',
                      last_name: 'Lampart',
                      email: 'dlampart3@cbslocal.com',
                      phone: '+351 678 762 2111',
                      address: '9069 Shasta Circle',
                      city: 'Valejas',
                      state: 'active',
                      profile: null,
                    },
                    {
                      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
                      amount: 34577,
                      date: '2023-08-05T04:00:00.000Z',
                      status: 'pending',
                      client_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
                      created_at: '2024-05-13T00:07:50.245Z',
                      updated_at: '2024-05-13T00:07:50.245Z',
                      name: 'Eldin Shenton',
                      last_name: 'Shenton',
                      email: 'eshenton5@icq.com',
                      phone: '+62 196 609 6662',
                      address: '384 Graceland Crossing',
                      city: 'Labuhanjambu',
                      state: 'active',
                      profile: null,
                    },
                  ])
              })
          }, []),
          (0, Mt.jsx)('div', { children: (0, Mt.jsx)(la, { data: e }) })
        )
      }
      ra.displayName = 'Input'
      const sa = (function (e, t) {
        return ne({
          basename: null == t ? void 0 : t.basename,
          future: gt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history:
            ((n = { window: null == t ? void 0 : t.window }),
            void 0 === n && (n = {}),
            m(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location
                return f(
                  '',
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default',
                )
              },
              function (e, t) {
                return 'string' === typeof t ? t : p(t)
              },
              null,
              n,
            )),
          hydrationData: (null == t ? void 0 : t.hydrationData) || yt(),
          routes: e,
          mapRouteProperties: mt,
          unstable_dataStrategy: null == t ? void 0 : t.unstable_dataStrategy,
          window: null == t ? void 0 : t.window,
        }).initialize()
        var n
      })([
        {
          path: '/',
          element: (0, Mt.jsx)(Dt, {}),
          children: [
            {
              path: '/',
              element: (0, Mt.jsx)('div', { children: 'Home' }),
              index: !0,
            },
            {
              path: '/about',
              element: (0, Mt.jsx)('div', { children: 'About' }),
            },
            { path: '/client', element: (0, Mt.jsx)(oa, {}) },
            { path: '/invoices', element: (0, Mt.jsx)(ia, {}) },
            {
              path: '/users',
              element: (0, Mt.jsx)('div', { children: 'Users' }),
            },
            {
              path: '/register',
              element: (0, Mt.jsx)('div', { children: 'Register' }),
            },
          ],
        },
      ])
      a.createRoot(document.getElementById('root')).render(
        (0, Mt.jsx)(t.StrictMode, {
          children: (0, Mt.jsx)('div', {
            className: 'dark',
            children: (0, Mt.jsx)(_t, { router: sa }),
          }),
        }),
      ),
        Ot()
    })()
})()
//# sourceMappingURL=main.41409763.js.map
