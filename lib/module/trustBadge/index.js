import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function TrustBadge() {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.trustBadge
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.tick
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.contentText
  }, "Sustainability Claims"), /*#__PURE__*/React.createElement(Text, {
    style: styles.contentProvenanceLogo
  }, "Provenance\xAE")));
}

// Neutral default
const styles = StyleSheet.create({
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