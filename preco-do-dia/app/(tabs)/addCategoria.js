import React, {useEffect, useState}  from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import axios from "axios";

const addCategoria = () => {

    const [nome, setNome] = useState('');


    const cadastrar = async () => {
        const data = { nome }

        console.log(data);

        const url = "https://api-produtos-6p7n.onrender.com/categories/add"

        const response = await axios.post(url, data);

        console.log(data, ' >>> ', response, ' >>> ', response.status, ' >>> ', response.data);

        if(response.status == 201){
            alert("Categoria cadastrado com sucesso!");
        }else{
            alert("Erro ao cadastrar a categoria!");
        }
    };
    
    return (
        <View>
            <Text style = {styles.txt}>Nome *</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {nome}
                onChangeText = {setNome}
            />
            <TouchableOpacity style = {styles.button} onPress={cadastrar}>
                <Text style={ styles.txtButton }>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 5,
        fontSize:16,
        color: '#1E1E1E'
    },
    txtButton: {
        color: '#F5F5F5',
        fontSize: 15
    },
    inputs: {
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        marginLeft: 15,
        borderRadius: 10,
        fontSize: 15,
        paddingLeft: 15
    },
    button: {
        width: 350,
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 15,
        color: '#F5F5F5',
        backgroundColor: '#14AE5C',
        alignItems: 'center',
        justifyContent: 'center'
    }
        
})

export default addCategoria;