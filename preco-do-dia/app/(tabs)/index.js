import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
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
        <Text style={styles.title}>Nome: {item.nome}</Text>
        <Text style={styles.text}>Preço: R$ {item.preco}</Text>
        <Text style={styles.text}>Descrição: {item.descricao || "N/A"}</Text>
        <Text style={styles.text}>Usuário: {item.usuario}</Text>
        <Text style={styles.text}>Categoria: {item.Category?.nome}</Text>
        <Text style={styles.text}>Local: {item.Location?.nome}</Text>
        <Text style={styles.text}>Criado em: {new Date(item.createdAt).toLocaleDateString()}</Text>
        <Text style={styles.text}>Atualizado em: {new Date(item.updatedAt).toLocaleDateString()}</Text>
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
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
});
