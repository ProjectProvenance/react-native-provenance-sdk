import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TrustBadge, ProofPoint } from 'react-native-provenance-sdk';

import { Image, Pressable, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image
        style={styles.headerImage}
        source={require('../assets/organic-apple.jpg')}
      ></Image>
      <View style={styles.productInfoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Organic apple</Text>
          <Text style={styles.price}>£1.99</Text>
        </View>

        <View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonLabel}>Add to Basket</Text>
          </Pressable>
        </View>

        <TrustBadge />

        <Text>
          Indulge in the pure essence of nature with our premium organic apples.
          Grown in lush, pesticide-free orchards, each apple is handpicked to
          ensure the highest quality and freshness. Bursting with crisp
          sweetness and vibrant flavor, our organic apples are a testament to
          sustainable farming practices that nurture the earth. Perfect for a
          healthy snack or a delightful addition to your favorite recipes, savor
          the taste of purity with every bite. Enjoy the wholesome goodness and
          nutritional benefits of apples just as nature intended.
        </Text>

        <ProofPoint />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
  },
  productInfoContainer: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontStyle: 'italic',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 32,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 0.5,
    paddingBottom: 0.5,
    backgroundColor: 'black',
    marginVertical: 8,
  },
  buttonLabel: {
    color: 'white',
  },
});
