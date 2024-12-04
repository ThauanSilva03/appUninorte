import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TextInput } from "react-native";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Para produtos filtrados
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Estado para a barra de pesquisa

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://api-produtos-6p7n.onrender.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data); // Inicializa produtos filtrados com todos os produtos
    } catch (error) {
      console.error("Erro ao buscar produtos: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearch(text);
    if (text === "") {
      setFilteredProducts(products); // Mostra todos os produtos se a barra de pesquisa estiver vazia
    } else {
      const filtered = products.filter((item) =>
        item.nome.toLowerCase().includes(text.toLowerCase()) // Filtra produtos pelo nome
      );
      setFilteredProducts(filtered);
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
        <View style={{ flexDirection: "row", alignSelf: "flex-end", marginRight: 10 }}>
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
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar produtos..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
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
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
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
    fontSize: 40,
    color: "#28a745",
  },
  textRS: {
    fontSize: 14,
    color: "#28a745",
  },
});
