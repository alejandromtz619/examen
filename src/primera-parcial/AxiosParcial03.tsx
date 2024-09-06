import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

// Define la estructura del objeto User
interface User {
  id: number;
  username: string;
}

// Cambia el tipo del estado para que sea un array de User
const AxiosParcial03 = () => {
  const [users, setUsers] = useState<User[]>([]);  // Define que el estado será un array de 'User'

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}  // Asegura que 'id' sea reconocido correctamente
        renderItem={({ item }) => <Text style={styles.text}>{item.username}</Text>}  // 'username' es válido
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
  text: {
    fontSize: 18,
    padding: 10,
  },
});

export default AxiosParcial03;
