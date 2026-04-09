import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import Koishtekara from './Koishtekara';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1976d2" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Кой ще кара?</Text>
        <Text style={styles.headerSubtitle}>
          Не можете да решите кой да кара?
        </Text>
      </View>

      <View style={styles.mainContent}>
        <Koishtekara />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976d2',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginTop: 4,
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  footer: {
    backgroundColor: '#212121',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
