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
      get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=3XQ72XFIB9VXVQMF');
      (companyData) =>
        companyData.Symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };
}