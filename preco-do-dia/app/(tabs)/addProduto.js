import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ScrollView, Image } from "react-native"
import axios from "axios";
import * as ImagePicker from 'expo-image-picker'
import {Picker} from "@react-native-picker/picker";


export default function Tab() {

const api = axios.create({
      baseURL:'https://api-produtos-9jmi.onrender.com',
      headers: {'Content-Type':'application/json'}
    });


    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [preco, setPreco] = useState(0);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [local, setLocal] = useState('');
    const [descricao, setDescricao] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      async function loadCategories(){
        const response = await api.get('/categories');
        setCategories(response.data);
      }

      async function loadLocations(){
        const response = await api.get('/locations');
        setLocations(response.data);
      }

      loadCategories();
      loadLocations();

    }
      , []);

    const pickImage = async () => {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if(permissionResult.granted === false){
        alert("Permissão para acessar a galeria é necessária!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if(!result.canceled){
        setSelectedImage(result.assets[0].uri);
      }
    };

    const removeImage = () => {
      setSelectedImage(null);
    }
    
    const cadastrar = async () => {

      if(!nome || !preco || !categoria || !local || !selectedImage){
        alert("Erro ao cadastrar produto, preencha todos os campos obrigatórios");
        return;
      }

      const data = new FormData();
      data.append('nome', nome);
      data.append('preco', preco);
      data.append('descricao', descricao);
      data.append('usuario', 'Osvaldo');
      data.append('categoriaId', categoria);
      data.append('localId', local);
      data.append('image', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'image.jpg',
      })

      const url = "https://api-produtos-9jmi.onrender.com/products";

      const response = await fetch(url,{
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if(response.status === 201){
        alert('Produto cadastrado com sucesso!');
        setNome("");
        setPreco("");
        setDescricao("");
        setCategoria("");
        setLocal("");
        setSelectedImage(null);
      }else{
        alert('Erro ao cadastrar o produto!');
      }
    }
 return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.labelTxt}>Local *</Text>
          <View style = {styles.pickerContainer}>
            <Picker
              selectedValue={local}
              onValueChange={(itemValue, itemIndex) => setLocal(itemValue)}
            >
              <Picker.Item label="Selecione um local..." value="" />
              {locations.map(location => (
                <Picker.Item key={location.id} label={location.nome} value={location.id} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity>
            <Text style={styles.suggestLink}>Sugerir Local</Text>
          </TouchableOpacity>
          <Text style={styles.labelTxt}>Nome *</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.input}
            value = {nome}
            onChangeText = {setNome}  
          />
          <Text style={styles.labelTxt}>Preço *</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.input}
            value = {preco}
            onChangeText = {setPreco}
            keyboardType = "numeric"  
          />
          <Text style={styles.labelTxt}>Categoria *</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={categoria}
                onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
              >
                <Picker.Item label="Selecione uma categoria..." value="" />
                {categories.map(category => (
                  <Picker.Item key={category.id} label={category.nome} value={category.id} />
                ))}
              </Picker>
            </View>
          <Text style={styles.labelTxt}>Observação</Text>
          <TextInput 
            placeholder = "Value" 
            style = {styles.inputObs} 
            value = {descricao}
            onChangeText = {setDescricao}
            multiline
          />

          <Text style={styles.labelTxt}>Fotos *</Text>
          <View style={styles.containerFoto}>
            <TouchableOpacity style={styles.btnFoto} onPress = {pickImage}>
              <Text style={styles.btnTxt}>Adicionar foto</Text>
            </TouchableOpacity>
            <View>
              {
                selectedImage && (
                  <Image source={{uri: selectedImage}} style={{width: 100, height: 100, marginHorizontal: 6 }} />
                )
              }
            </View>
          </View>

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrar}
        >
          <Text style={styles.btnTxt}>Salvar</Text>
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
      height: 150,
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