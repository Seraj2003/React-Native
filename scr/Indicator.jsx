import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Indicator = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate an API call
    setTimeout(() => {
      setLoading(false);
    }, 30000000);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#98b6d5ff" />
      ) : (
        <Text style={styles.text}>Data Loaded ✅</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Indicator;
