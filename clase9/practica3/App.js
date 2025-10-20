import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/screens/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Probando FlatLists</Text>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
