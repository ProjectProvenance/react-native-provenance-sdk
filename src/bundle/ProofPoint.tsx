import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ProofPoint() {
  const [showWebview, setShowWebview] = React.useState(false);
  const onPress = () => setShowWebview(true);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.proofPoint}>
          <View style={styles.tick} />
          <Text style={styles.proofPointText}>NATRUE Natural</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showWebview}
        transparent={true}
        onRequestClose={() => setShowWebview(!showWebview)}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.modalContainer}>
            <View style={styles.webViewContainer}>
              {showWebview && (
                <WebView
                  source={{
                    uri: 'https://staging.provenance.org/en/claims/cla_nE0eJdgb/modal?resource_id=5161',
                  }}
                  style={{ flex: 1 }}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  proofPoint: {
    width: 161,
    height: 22,
    borderRadius: 11,
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#1F1E1E',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  proofPointText: {
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 15,
    textAlign: 'left',
    gap: 5,
    marginLeft: 5,
  },
  tick: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: '#08856C',
  },
  modalContainer: {
    margin: 10,
    height: 548,
    backgroundColor: 'gray',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 4,
  },
  webViewContainer: {
    flex: 1,
  },
});
