import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {

    renderAdicionarContato() {
        if(!this.props.cadastro_resultado_inclusao)
        {
            return(
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <TextInput placeholder='E-mail' 
                               style={{ fontSize: 20, height: 45 }} 
                               onChange={() => false} 
                               value={this.props.adiciona_contato_email} 
                               onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}>
                    </TextInput>
                </View>
        
                <View style={{ flex: 1}}>
                    <Button title="Adicionar" 
                            color="#115E54" 
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email) }>     
                    </Button>
                    <Text style={{ color: '#FF0000', fontSize: 20 }}>
                        {this.props.cadastro_resultado_txt_erro}
                    </Text>
                </View>
            </View>
            )
        }else{
            return(
                <View>
                    <Text style={{ fontSize: 20}}>Cadastro realizado com sucesso!</Text>
                </View>
            )

        }
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                {this.renderAdicionarContato()}
            </View>
        )
    }

};

const mapStateToprops = state =>(
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToprops, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);

