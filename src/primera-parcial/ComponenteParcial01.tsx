import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define los tipos para las rutas
type RootStackParamList = {
  PropsParcial02: { materia: string; nota: string };
  AxiosParcial03: undefined;
  AsyncStorageParcial04: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'PropsParcial02'>;

const ComponenteParcial01 = () => {
  const navigation = useNavigation<NavigationProp>();

  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre de materia"
        value={materia}
        onChangeText={setMateria}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
      />
      
      <Button
        title="Ir a PropsParcial02"
        onPress={() => navigation.navigate('PropsParcial02', { materia, nota })}  // Correcto paso de parámetros
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default ComponenteParcial01;
