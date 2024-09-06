import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteParams = {
  materia: string;
  nota: string;
};

const PropsParcial02 = () => {
  const route = useRoute<RouteProp<any, any>>();
  const { materia, nota } = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En la materia: {materia}, recibí la siguiente nota: {nota}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default PropsParcial02;
