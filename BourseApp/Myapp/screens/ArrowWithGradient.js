import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArrowWithGradient = ({ value }) => {
  const isPositive = parseFloat(value) >= 0;

  return (
    <View style={[styles.container, isPositive ? styles.up : styles.down]}>
      <Text style={styles.arrow}>{isPositive ? '▲' : '▼'}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  up: {
    backgroundColor: '#00FF00',
  },
  down: {
    backgroundColor: '#FF0000',
  },
  arrow: {
    fontSize: 18,
    marginRight: 5,
    color: '#fff',
  },
  value: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ArrowWithGradient;
