//CompaniesDetails
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ArrowWithGradient from './ArrowWithGradient';


const CompanyDetails = ({ route }) => {
  const { companyData } = route.params;
  const getTextColor = (value) => {
    return value >= 0 ? '#00FF00' : '#FF0000'; 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.companyInfo}>
        <View style={[styles.companyNameContainer, { backgroundColor: getTextColor(companyData.PERatio) }]}>
          <Text style={[styles.companyName, { color: '#FFFFFF' }]}>{companyData.Name}</Text>
        </View>

        <Text style={styles.label}>Symbol:</Text>
        <Text style={styles.value}>{companyData.Symbol}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{companyData.Description}</Text>

        <Text style={styles.label}>Country:</Text>
        <Text style={styles.value}>{companyData.Country}</Text>

        <Text style={styles.label}>EPS:</Text>
        <Text style={styles.value}>{companyData.EPS}</Text>

        <Text style={styles.label}>P/E Ratio:</Text>
        <ArrowWithGradient value={companyData.PERatio} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000080',
  },
  companyInfo: {
    backgroundColor: '#0000ff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  companyNameContainer: {
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#fff',
  },
});

export default CompanyDetails;
