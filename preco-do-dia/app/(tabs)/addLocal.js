import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import RNPickerSelect from 'react-native-picker-select'

const addLocal = () => {

    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [logadouro, setLogadouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState([])
    const [ciadade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    return (
        <View style={styles.container}> 
            <Text style = {styles.txt}>Nome *</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            ></TextInput>
            <Text style = {styles.txt}>CEP</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            >
            </TextInput>
            <Text style = {styles.txt}>Logadouro</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            >
            </TextInput>
            <Text style = {styles.txt}>Nº</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            >
            </TextInput>
            <Text style = {styles.txt}>Bairro</Text>
            <View style = {styles.pickerContainer}>
                <RNPickerSelect 
                    onValueChange={(value) => setLocal(value)}
                    items={[
                    { label: 'Loja A', value: 'Loja A' },
                    { label: 'Loja B', value: 'Loja B' },
                    { label: 'Loja C', value: 'Loja C' },
                    ]}
                    placeholder={{ label: 'Value', value: null }}
                />
            </View>
            <Text style = {styles.txt}>Cidade</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            >
            </TextInput>
            <Text style = {styles.txt}>Estado</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
            >
            </TextInput>
            <TouchableOpacity style = {styles.button}>
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
        marginTop: 15,
        marginLeft: 15,
        color: '#F5F5F5',
        backgroundColor: '#14AE5C',
        alignItems: 'center',
        justifyContent: 'center'
    }
        
})
export default addLocal;