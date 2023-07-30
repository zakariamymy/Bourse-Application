// components/StockSection.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StockSection = ({ navigation, symbol, EPS, PERatio, companyData }) => {
  const isPERatioPositive = parseFloat(PERatio) >= 0;
  const arrow = isPERatioPositive ? '▲' : '▼';
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePress = () => {
    navigation.navigate('CompanyDetails', { companyData });
  };

  return (
    <LinearGradient colors={['#E6E6E6', '#000080']} style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.symbol}>{symbol}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>EPS:</Text>
          <Text style={styles.value}>{EPS}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>P/E Ratio:</Text>
          <LinearGradient
            colors={['rgb(255, 46, 144)', 'rgb(61, 35, 185)']}
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.peRatioValue}
          >
            <Text style={[styles.peRatioText, isPERatioPositive ? styles.positive : styles.negative]}>
              {PERatio} {arrow}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  symbol: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  value: {
    fontSize: 18,
    color: '#fff',
  },
  peRatioValue: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 50,
  },
  peRatioText: {
    fontSize: 18,
    color: '#fff',
  },
  positive: {
    color: '#00ff00', 
  },
  negative: {
    color: '#ff0000', 
  },
});

export default StockSection;
