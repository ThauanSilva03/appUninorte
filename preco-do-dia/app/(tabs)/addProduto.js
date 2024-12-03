import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, PermissionsAndroid } from "react-native"
import axios from "axios";
import * as ImagePicker from 'react-native-image-picker';
import RNPickerSelect from 'react-native-picker-select'
import { router } from "expo-router";

export default function Tab() {

    const [local, setLocal] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [observation, setObservation] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [loading, setLoading] = useState(false);
    
    const openCamera = () => {
      router.navigate("camera");
    }

    const handelAddFoto = () => {
      ImagePicker.launchCamera(
        {
          includeBase64: false,
          mediaType: 'photo',
          quality: 0.8,
        },
        async (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            
          }
        },
      );

      console.log("Camera")
    };


    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission given");
          handelAddFoto();
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const handleDeleteFoto = () => {
      setImageUri('');
    }

    const handleSubmit = async () => {
      if(!local || !name || !price || !category || !imageUri){
        Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      setLoading(true);
      console.log("Ta criando as coisa");
      const formData = new FormData();
      formData.append('local', local);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('observation', observation);
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'produto.jpg',
      });

      try{
        const response = await axios.post('https://api-produtos-6p7n.onrender.com/products',formData,
          {
           headers: {
            'Content-Type': 'multipart/form-data',
           },
          }
        );

        if(response.status === 201){
          Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
          setLocal('');
          setName('');
          setPrice('');
          setCategory('');
          setObservation('');
          setImageUri('');
        }else{
          Alert.alert('Erro', 'Ocorreu um problema ao cadastrar o produto.');
        }

      } catch(error){
        console.error('Erro ao salvar o produto', error);
        Alert.alert('Erro', 'Não foi possível salvar o produto.');
      } finally{
        setLoading(false);
      }
    };

    
    return (
      <View style={styles.container}>
        <Text style={styles.labelTxt}>Local *</Text>
        <View style = {styles.pickerContainer}>
          <RNPickerSelect 
            onValueChange={(value) => setLocal(value)}
            items={[
              { label: 'Loja A', value: 'Loja A' },
              { label: 'Loja B', value: 'Loja B' },
              { label: 'Loja C', value: 'Loja C' },
            ]}
            placeholder={{ label: 'Value', value: null }}
            value={local}
          />
        </View>
        <TouchableOpacity>
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
            onValueChange={(value) => setCategory(value)}
            items={[
              { label: 'Category A', value: 'Category A' },
              { label: 'Category B', value: 'Category B' },
              { label: 'Category C', value: 'Category C' },
            ]}
            placeholder={{ label: 'Value', value: null }}
            value={category}
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
          {imageUri ? (
            <View>
              <Image source={{ uri: imageUri }}/>
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
      fontSize:16,
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
      fontSize: 15,
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
      fontSize: 15,
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
    }
});