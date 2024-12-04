import React, {useState, useEffect} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView} from "react-native"
import RNPickerSelect from 'react-native-picker-select'

const addLocal = () => {

    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [logadouro, setLogadouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState([])
    const [ciadade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    
    const [loading, setLoading] = useState(false);

    const [selectedBairro, setSelectedBairro] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://api-produtos-6p7n.onrender.com/locations');
                const data = await response.json();
                const formattedData = data.map((item) => ({
                    label: item.bairro,
                    value: item.bairro
                }));
                setBairro(formattedData);
            } catch(error){
                console.log('Erro ao buscar dados: ', error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async () => {
        if(!nome){
            Alert.alert('Erro','Por favor, preencha todos os campos obrigatórios');
            return;
        }
        
        setLoading(true);

        const formData = new FormData();
        formData.append('nome',nome);
        formData.append('cep', cep);
        formData.append('logadouro', logadouro);
        formData.append('numero', numero);
        formData.append('bairro', bairro);
        formData.append('cidade', ciadade);
        formData.append('estado', estado);

        try {
            const response = await fetch('https://api-produtos-6p7n.onrender.com/locations',{
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

            console.log(response)

            if(response.ok){
                Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
                setNome('');
                setCep('');
                setLogadouro('');
                setNumero('');
                setSelectedBairro('');
                setCidade('');
            }else{
                Alert.alert('Erro','Ocorreu um problema ao cadastrar o produto.');
            }
        } catch(error){
            console.error('Erro', 'Não foi possível salvar o produto');
        }finally{
            setLoading(false);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}> 
            <Text style = {styles.txt}>Nome *</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {nome}
                onChangeText = {setNome}
            ></TextInput>
            <Text style = {styles.txt}>CEP</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {cep}
                onChangeText = {setCep}
            >
            </TextInput>
            <Text style = {styles.txt}>Logadouro</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {logadouro}
                onChangeText = {setLogadouro}
            >
            </TextInput>
            <Text style = {styles.txt}>Nº</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {numero}
                onChangeText = {setNumero}
            >
            </TextInput>
            <Text style = {styles.txt}>Bairro</Text>
            <View style = {styles.pickerContainer}>
                <RNPickerSelect 
                    onValueChange={(value) => setSelectedBairro(value)}
                    items={bairro}
                    placeholder={{ label: 'Value', value: null }}
                    value={selectedBairro}
                />
            </View>
            <Text style = {styles.txt}>Cidade</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {ciadade}
                onChangeText = {setCidade}
            >
            </TextInput>
            <Text style = {styles.txt}>Estado</Text>
            <TextInput
                placeholder = "Value"
                style = {styles.inputs}
                value = {estado}
                onChangeText = {setEstado}
            >
            </TextInput>
            <TouchableOpacity style = {styles.button} onPress={handleSubmit} disable={loading}>
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