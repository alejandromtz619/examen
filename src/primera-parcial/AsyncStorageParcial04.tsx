import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const storedItems = await AsyncStorage.getItem('items');
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    };
    loadData();
  }, []);

  const saveItem = async () => {
    const newItem = { codigo, carrera, materia };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const updateItem = async (index: number) => {
    const updatedItems = [...items];
    updatedItems[index] = { codigo, carrera, materia };
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const deleteItem = async (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
      />
      <Button title="Guardar" onPress={saveItem} />

      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text>{item.codigo} - {item.carrera} - {item.materia}</Text>
            <Button title="Actualizar" onPress={() => updateItem(index)} />
            <Button title="Eliminar" onPress={() => deleteItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default AsyncStorageParcial04;
