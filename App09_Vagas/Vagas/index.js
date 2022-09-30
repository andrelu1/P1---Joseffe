import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles'
 
class Vaga extends Component{
    render(){
      return(
        <View>
          <Text style={styles.nVaga}>{this.props.data.vaga}</Text>
          <Text style={styles.sVaga}>Salario: {this.props.data.salario} </Text>
          <Text style={styles.dVaga}>Descricao: {this.props.data.descricao} </Text>
          <Text style={styles.cVaga}>Contato: {this.props.data.contato} </Text>
          
          <Button 
                  title="Candidatar"
                  onPress={() => Alert.alert('Se Candidatou')}/>
        </View>
      );
    }
  }
 
export default Vaga;