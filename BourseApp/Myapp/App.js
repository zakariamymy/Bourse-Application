import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Searchbar } from 'react-native-paper'; 
import StockSection from './components/StockSection';
import CompanyDetails from './screens/CompanyDetails';
import companiesData from './companies'; 



const Stack = createStackNavigator();

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(Object.values(companiesData));

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = Object.values(companiesData).filter(
      (companyData) =>
        companyData.Symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {({ navigation }) => (
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.infoContainer}>
                <Text style={styles.logoText}>Application for Stock Exchange</Text>
                <Text style={styles.descriptionText}>
                  Welcome to our Stock Exchange Tracking Application! This app provides real-time data
                  and information about various stocks from different companies worldwide. Stay updated
                  with the latest stock prices, earnings per share (EPS), and price-to-earnings ratio
                  (P/E Ratio) for major companies like Apple, Amazon, Tesla, and many more.
                </Text>

                {/* Searchbar */}
                <Searchbar
                  placeholder="Search by symbol..."
                  onChangeText={handleSearch}
                  value={searchQuery}
                  style={styles.searchBar}
                  iconColor="#000" 
                />

                {filteredCompanies.map((companyData) => (
                  <StockSection
                    key={companyData.Symbol}
                    navigation={navigation}
                    symbol={companyData.Symbol}
                    EPS={companyData.EPS}
                    PERatio={companyData.PERatio}
                    companyData={companyData}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </Stack.Screen>
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} options={{ title: 'Company Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  infoContainer: {
    backgroundColor: '#0000ff',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  searchBar: {
    marginVertical: 10,
    marginTop:30,
    marginBottom:20, 
    width: '93%',
    borderRadius: 20,
    elevation: 4, 
    backgroundColor: '#fff', 
  },
});

export default App;
