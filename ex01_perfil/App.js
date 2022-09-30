import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Ⲥⲁꞅⲟ𝓵ⲓⲛⲉ

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={{color: '#651fff', fontSize: 25, margin: 15}}>
          <b>Caroline Andrade B. dos Santos</b>
        </Text>
 
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/carolineanbs/POO-FATEC/main/JavaSessionTarefa/web/image/download20210203094230.png'}}
          style={{ width: 200, height: 200}}
        />
        <Text style={{color: '#651fff', fontSize: 20, margin: 10}}>
        <b>RA</b>: 1290482022029         <Text style={{color: '#651fff', fontSize: 20, margin: 10}}>
        <b>Ciclo:</b> 5° 
        </Text>
        </Text>
        <Text style={{color: '#651fff', fontSize: 20, margin: 10}}>
        <b>Formação:</b> Análise e Desenvolvimento de Sistemas
        </Text>

        <Text style={{color: '#651fff', fontSize: 20, margin: 10}}>
        <b>Disciplina</b>: Programacao para Dispositivos Moveis
        </Text>

        <Text style={{color: '#651fff', fontSize: 20, margin: 10}}>
        <b>Experiência:</b>: front-end, documentação, hardware
        </Text>
        <Text style={{color: '#651fff', fontSize: 20, margin: 10  }}>
        <b>Hobbys:</b> livros, bicicleta, filmes e história
        </Text>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
});