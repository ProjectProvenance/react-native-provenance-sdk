import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TrustBadge } from 'react-native-provenance-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Demo. Press Claims and wait for directory to load.</Text>
      <TrustBadge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 30,
  },
});
