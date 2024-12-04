import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native"
import RNPickerSelect from 'react-native-picker-select'
import { router } from "expo-router";
import Camera from "../camera";

export default function Tab() {

    const {photoUri} = Camera();

    const [local, setLocal] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [observation, setObservation] = useState('');
    const [loading, setLoading] = useState(false);

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCatoria] = useState(null);

    const openCamera = () => {
      router.navigate("camera");
    }

    const handleSubmit = async () => {
      if (!selectedOption || !name || !price || !selectedCategoria) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        return;
      }
    
      console.log("Salvando dados para enviar...");
      setLoading(true);
    
      const formData = new FormData();
      formData.append('local', selectedOption);
      formData.append('nome', name);
      formData.append('preco', price);
      formData.append('categoria', selectedCategoria);
      formData.append('observacao', observation);
      
    
      try {
        const response = await fetch('https://api-produtos-6p7n.onrender.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
    
        console.log(response)

        if (response.ok) {
          Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
          // Limpa os campos
          setLocal('');
          setName('');
          setPrice('');
          setCategory('');
          setObservation('');
          setSelectedOption(null);
          setSelectedCategoria(null);
        } else {
          Alert.alert('Erro', 'Ocorreu um problema ao cadastrar o produto.');
        }
      } catch (error) {
        console.error('Erro ao salvar o produto:', error);
        Alert.alert('Erro', 'Não foi possível salvar o produto.');
      } finally {
        setLoading(false);
      }
    };
    
    
  
    useEffect(() => {
      // Fazendo a requisição
      const fetchData = async () => {
        try {
          const response = await fetch('https://api-produtos-6p7n.onrender.com/locations');
          const data = await response.json();
          const formattedOptions = data.map((item) => ({
            label: item.nome,
            value: item.nome
          }));

          setOptions(formattedOptions);
        } catch (error) {
          console.error('Erro ao buscar dados: ', error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await fetch('https://api-produtos-6p7n.onrender.com/categories');
          const data = await response.json();
          const formattedData = data.map((item) => ({
            label: item.nome,
            value: item.nome
          }));
          setCategorias(formattedData);
        }catch(error){
          console.log('Erro ao buscar dados: ', error)
        }
      };
      fetchData();
    },[]);

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.labelTxt}>Local *</Text>
          <View style = {styles.pickerContainer}>
            <RNPickerSelect 
              onValueChange={(value) => setSelectedOption(value)}
              items={options}
              placeholder={{ label: 'Value', value: null }}
              value={selectedOption}
            />
          </View>
          <TouchableOpacity onPress={console.log({selectedOption})}>
            <Text style={styles.suggestLink}>Sugerir Local</Text>
          </TouchableOpacity>
          <Text style={styles.labelTxt}>Nome *</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.input}
            value = {name}
            onChangeText = {setName}  
          />
          <Text style={styles.labelTxt}>Preço *</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.input}
            value = {price}
            onChangeText = {setPrice}
            keyboardType = "numeric"  
          />
          <Text style={styles.labelTxt}>Categoria *</Text>
          <View style={styles.pickerContainer}>
          <RNPickerSelect 
              onValueChange={(value) => setSelectedCatoria(value)}
              items={categorias}
              placeholder={{ label: 'Value', value: null }}
              value={selectedCategoria}
            />
          </View>
          <Text style={styles.labelTxt}>Observação</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.inputObs} 
            value = {observation}
            onChangeText = {setObservation}
            multiline
          />

          <Text style={styles.labelTxt}>Fotos *</Text>
          <View style={styles.containerFoto}>
            <TouchableOpacity style={styles.btnFoto} onPress = {openCamera}>
              <Text style={styles.btnTxt}>Adicionar foto</Text>
            </TouchableOpacity>
            {photoUri ? (
              <View>
                <Image source = {{uri: photoUri}}/>
                <TouchableOpacity>
                  <Text>Excluir</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text>Nenhuma imagem selecionada</Text>
            )}
          </View>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.btnTxt}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Text>
        </TouchableOpacity>

        </View>
      </ScrollView>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    labelTxt: {
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 5,
      fontSize:12,
      color: '#1E1E1E'
    },
    input: {
      width: 350,
      height: 45,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
      marginLeft: 15,
      borderRadius: 10,
      fontSize: 12,
      paddingLeft: 15
    },
    inputObs: {
      width: 350,
      height: 90,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
      marginLeft: 15,
      borderRadius: 10,
      fontSize: 12,
      paddingLeft: 15,
      textAlignVertical: 'top'
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      width: 350,
      marginLeft: 15
    },
    suggestLink: {
      marginLeft: 20,
      marginTop: 5,
      color: '#007AFF'
    },
    containerFoto: {
      width: 350,
      height: 100,
      marginLeft: 15,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
    },
    btnFoto: {
      width: 150,
      height: 30,
      borderRadius: 10,
      marginTop: 5,
      marginLeft: 100,
      color: '#F5F5F5',
      backgroundColor: "#007AFF",
      alignItems: 'center',
      justifyContent: 'center'
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
    btnTxt: {
      color: '#F5F5F5'
    },
    image: {
      width: 60,
      height: 60,
    }
});