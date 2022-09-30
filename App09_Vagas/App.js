import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import Trabaio from './Vagas'
import {styles} from './Vagas/styles';
 
class App extends Component{
 
 //a̸̦͑͝n̵̐͋̕d̸̓͛̓r̵͒̈́̚é̵͋̽̿
 
constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, vaga: 'Tempo', salario: 'R$1900', descricao: 'O Tempo perguntou ao tempo quanto tempo o tempo tem, o Tempo respondeu ao tempo que o tempo tem tanto tempo quanto tempo, tempo tem.', contato: '13-98353243'},
        {id: 2, vaga: '`Pescador`', salario: 'R$1.000', descricao: 'Pesca em alto mar pra Botique do Peixe', contato: '13-4994933'},
        {id: 3, vaga: 'Astronauta', salario: '$35.000', descricao: 'Ficar 6 meses na estação espacial', contato: 'contact@nasa.gov'},
        {id: 4, vaga: 'Otorrinolaringologista', salario: '$10.000', descricao: 'Não confunda ornitorrinco com otorrinolaringologista, ornitorrinco com ornitologista, ornitologista com otorrinolaringologista, porque ornitorrinco, é ornitorrinco, ornitologista, é ornitologista, e otorrinolaringologista é otorrinolaringologista.', contato: 'barry@ornitorrinco.com.au'},
        {id: 5, vaga: 'Desmafagafizador', salario: '3 Cebolas', descricao: '"Num ninho de mafagafos, seis mafagafinhos há; quem os desmafagafizar, bom desmafagafizador será", "Em cima daquele morro há um ninho de mafagafos com sete mafagafinhos dentro, quem desmagafinhar os sete mafagafinhos, um bom desmagafinhador será."', contato: 'Olhe para o céu'},
        {id: 6, vaga: 'Uga', salario: 'Vc que me paga', descricao: 'Há quatro quadros três e três quadros quatro. Sendo que quatro destes quadros são quadrados, um dos quadros quatro e três dos quadros três. Os três quadros que não são quadrados, são dois dos quadros quatro e um dos quadros três.', contato: 'Olhe para o lado'},
         {id: 7, vaga: 'Vaga Fantasma', salario: 'Cade o dinheiro que estava aqui?', descricao: 'Assustar residencias', contato: 'gasparzinho@boo'},
      ],
    }
  }
 
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.vaga}>Vagas Disponiveis</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Trabaio data={item}/>}
        />
      </View>
    )
  }
}
 
export default App;