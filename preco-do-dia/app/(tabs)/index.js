import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } 
from "react-native";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api-produtos-6p7n.onrender.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos: ", error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://api-produtos-6p7n.onrender.com/${item.image}` }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.text}>Descrição: {item.descricao || "N/A"}</Text>
        <Text style={styles.text}>Usuário: {item.usuario}</Text>
        <Text style={styles.text}>Categoria: {item.Category?.nome}</Text>
        <Text style={styles.text}>Local: {item.Location?.nome}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10}}>
          <Text style={styles.textRS}>R$</Text>
          <Text style={styles.textPrice}>{item.preco}</Text>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderWidth: 1, // Adicionando borda
    borderColor: "#ddd", // Cor da borda
    borderRadius: 10, // Borda arredondada
    flexDirection: "row", // Imagem à esquerda e informações à direita
    padding: 10, // Padding geral dentro do card
  },
  image: {
    width: 100, // Tamanho da imagem
    height: 100, // Tamanho da imagem
    marginRight: 10, // Espaço entre imagem e texto
    borderRadius: 8, // Bordas arredondadas para a imagem
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1, // Faz as informações ocuparem o restante do espaço
  },
  title: {
    fontSize: 20,
    color: "#333",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
  textPrice: {
    fontSize: 30,
    color: "#28a745", // Cor verde para o preço
  },
  textRS: {
    fontSize: 14,
    color: "#28a745"
  }
});
