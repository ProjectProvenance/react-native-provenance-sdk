import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { TrustBadge } from 'react-native-provenance-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <TrustBadge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
