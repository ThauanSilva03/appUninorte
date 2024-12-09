import React, {useState, useEffect} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView} from "react-native"
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const addLocal = () => {


    const api = axios.create({
        baseURL: "https://api-produtos-9jmi.onrender.com",
        headers: {'Content-Type':'application/json'}
    });

    const [ loc, setLoc] = useState({
        nome: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    

    const handleInputNome = (text) => {
        setLoc({...loc, nome: text})
    }
    
    const handleInputCEP = (text) => {
        setLoc({...loc, cep:text})
    }

    const handleInputLog = (text) => {
        setLoc({...loc, logradouro:text})
    }

    const handleInputNum = (text) => {
        setLoc({...loc, numero:text})
    }

    const handleInputBairro = (text) => {
        setLoc({...loc, bairro:text})
    }

    const handleInputCidade = (text) => {
        setLoc({...loc, cidade:text})
    }

    const handleInputEstado = (text) => {
        setLoc({...loc, estado:text})
    }

    useEffect(() =>{
        async function loadLocations(){
            const response = await api.get('/locations');
            setLocations(response.data);
        }

        loadLocations();
    }, [])


    const cadastrar = async (loc) => {
        try {
            const url = 'https://api-produtos-9jmi.onrender.com/locations';
    
            const response = await fetch(url, {
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json', 
                },
                credentials: 'include', 
                body: JSON.stringify(loc), 
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Location added:', data);
                alert("Local cadastrado com sucesso!");
                setLoc({
                    nome: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                });
            } else {
                alert("Erro ao cadastrar local!");
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    function addLocal() {
        cadastrar(loc);
    }

    return (
        <ScrollView>
            <View style={styles.container}> 
            <Text style = {styles.txt}>Nome *</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputNome}
                inputMode="text"
            ></TextInput>
            <Text style = {styles.txt}>CEP</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputCEP}
                inputMode="text"
            >
            </TextInput>
            <Text style = {styles.txt}>Logadouro</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputLog}
                inputMode="text"
            >
            </TextInput>
            <Text style = {styles.txt}>Nº</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputNum}
                inputMode="text"
            >
            </TextInput>
            <Text style = {styles.txt}>Bairro</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputBairro}
                inputMode="text"
            />
            <Text style = {styles.txt}>Cidade</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputCidade}
                inputMode="text"
            >
            </TextInput>
            <Text style = {styles.txt}>Estado</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                onChangeText = {handleInputEstado}
                inputMode="text"
            >
            </TextInput>
            <TouchableOpacity style = {styles.button} onPress={addLocal}>
                <Text style={ styles.txtButton }>Salvar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
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
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: 350,
        marginLeft: 15
    },
        
})
export default addLocal;