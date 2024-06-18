"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TrustBadge;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function TrustBadge() {
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.trustBadge
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.tick
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: styles.contentText
  }, "Sustainability Claims"), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: styles.contentProvenanceLogo
  }, "Provenance\xAE")));
}

// Neutral default
const styles = _reactNative.StyleSheet.create({
  trustBadge: {
    width: 179,
    height: 32,
    borderRadius: 18,
    paddingHorizontal: 4,
    paddingVertical: 0,
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    marginLeft: 4,
    marginVertical: 1.5,
    height: 27,
    width: 123
  },
  contentText: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    textAlign: 'left',
    color: '#0A3942'
  },
  contentProvenanceLogo: {
    textTransform: 'uppercase',
    fontSize: 8,
    color: '#686868',
    letterSpacing: 3
  },
  tick: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#08856C'
  }
});
//# sourceMappingURL=index.js.map