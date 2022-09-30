import * as React from 'react';
import {Component} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

//Ⲥⲁꞅⲟ𝓵ⲓⲛⲉ

  class App extends Component {
  constructor(props)
  {
  super(props);
  this.state = {
  contador: 0

  };
  }

  incrementar () {
    this.setState({
    contador: this.state.contador + 1

    });
  }


  decrementar () {
    if (this.state.contador <= 0){
    this.state.contador = 1
    }

    this.setState({
    contador: this.state.contador - 1

    });
  }

  render() {
  return (

  <View style={styles.background}>
  <Text style={styles.tituloContador}>Contador</Text>
    <Text style={styles.numero}>{this.state.contador}</Text>
        <View style={styles.btn}>

    <Pressable style={styles.botaoincrementar} onPress={() => this.incrementar()}>
            <Text style={styles.botao}>+</Text>
    </Pressable>
    <Pressable style={styles.botaodecrementar} onPress={() => this.decrementar()}>
            <Text style={styles.botao}>-</Text>
    </Pressable>
    </View>
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

  tituloContador: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 80,
    color: '#651fff',
    fontFamily: 'Tahoma',
  },

  numero: {
    fontSize: 65,
    margin: 10,
    borderRadius: '10%',
    alignSelf: 'center',
    color: '#651fff',
    borderWidth: 1,
    padding: 10
  },

  btn: {
    alignSelf: 'center'
  },

  botao: {
    paddingTop: 1,
    fontSize: 27,
    alignSelf: 'center'
  },
  
  botaoincrementar: {
    backgroundColor: 'green',
    marginBottom: 1,
    borderRadius: '10%',
    height: 40,
    margin: 40,
    width: 80  
  },

  botaodecrementar: {
    backgroundColor: 'red',
    marginBottom: 1,
    borderRadius: '10%',
    height: 40,
    margin: 40,
    width: 80 
  } 
})
export default App;
