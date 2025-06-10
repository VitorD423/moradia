import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Guia de Direitos do Cidadão</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Moradia')}
        >
          <Text style={styles.buttonText}>Moradia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Trabalho')}
        >
          <Text style={styles.buttonText}>Trabalho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Educação')}
        >
          <Text style={styles.buttonText}>Educação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Saúde')}
        >
          <Text style={styles.buttonText}>Saúde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Empregão')}
        >
          <Text style={styles.buttonText}>Empregão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
