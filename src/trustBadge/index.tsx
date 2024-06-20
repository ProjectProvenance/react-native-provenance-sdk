import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TrustBadge() {
  const [showWebview, setShowWebview] = React.useState(false);
  const onPress = () => setShowWebview(true);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.trustBadge}>
          <View style={styles.tick} />
          <View style={styles.content}>
            <Text style={styles.contentText}>Sustainability Claims</Text>
            <Text style={styles.contentProvenanceLogo}>Provenance®</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showWebview}
        transparent={true}
        onRequestClose={() => setShowWebview(!showWebview)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.webViewContainer}>
            {showWebview && (
              <WebView
                source={{ uri: 'https://staging.provenance.org/brands/medik8' }}
                style={{ flex: 1 }}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
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
    alignItems: 'center',
  },
  content: {
    marginLeft: 4,
    marginVertical: 1.5,
    height: 27,
    width: 123,
  },
  contentText: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    textAlign: 'left',
    color: '#0A3942',
  },
  contentProvenanceLogo: {
    textTransform: 'uppercase',
    fontSize: 8,
    color: '#686868',
    letterSpacing: 3,
  },
  tick: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#08856C',
  },
  modalContainer: {
    flex: 1,
    margin: 10,
    marginTop: 48,
    backgroundColor: 'gray',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 5,
  },
  webViewContainer: {
    flex: 1,
  },
});
