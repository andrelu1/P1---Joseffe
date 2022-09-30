import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native';

//Ⲥⲁꞅⲟ𝓵ⲓⲛⲉ

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular(){
      let n1 = this.state.input1;
      let n2 = this.state.input2;
      this.setState({resultado: 'Resultado: ' + (n1 * n2)});

  }

  render(){

    return(

      <View style={styles.background}>

      <Text style={styles.titulo}> MULTIPLICADOR DE NÚMEROS </Text>
      <TextInput
      style={styles.input}

      placeholder="Digite o primeiro nº"

      onChangeText={ (n1) => this.setState({input1: n1})}
      />
      <TextInput
      style={styles.input}
      placeholder="Digite o segundo nº"
      onChangeText={ (n2) => this.setState({input2: n2})}
      />
      <Pressable style={styles.botao}
      onPress={() => this.calcular()}>
        <Text style={styles.textoBotao}> CALCULAR </Text>
      </Pressable>
      <Text style={styles.texto}>{this.state.resultado} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create
({  
    background: {
    backgroundColor: 'black',
    flex: 1
  },

  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 80,
    color: '#651fff',
    fontFamily: 'Tahoma',
  },

  input: {
    fontSize: 15,
    margin: 10,
    borderRadius: '10%',
    alignSelf: 'center',
    color: '#651fff',
    borderWidth: 1,
    padding: 10
  },
  textoBotao: {
    paddingTop: 1,
    fontSize: 20,
    color: '#651fff',
    alignSelf: 'center'
  },
    texto: {
    fontSize: 20,
    textAlign: 'center', 
    marginTop: 80,
    color: '#651fff',
    fontFamily: 'Tahoma'
  }
})


export default App;