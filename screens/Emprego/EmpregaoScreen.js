import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/EmpregaoStyles';

const EmpregaoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Empregão</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VagasEstagio')}
      >
        <Text style={styles.buttonText}>Vagas de Estágio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VagasAprendiz')}
      >
        <Text style={styles.buttonText}>Vagas de Jovem Aprendiz</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmpregaoScreen;
