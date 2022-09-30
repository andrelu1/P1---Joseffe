import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
export default class MyProject extends Component {
//a̸̦͑͝n̵̐͋̕d̸̓͛̓r̵͒̈́̚é̵͋̽̿

  constructor(){
    super();
    this.state={
      sorteio : 0
    }
  }
 GerarNumero=()=>
{
 let numero = Math.floor(Math.random()  * 10000);
  this.setState({
     sorteio: numero
  })
}
render() {
    return (
      <View style={styles.Container} >
       <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.sorteio}</Text>
       <Button title="Sorteio" onPress={this.GerarNumero} />
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});


