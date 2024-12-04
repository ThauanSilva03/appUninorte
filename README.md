# Preço do Dia

O aplicativo **Preço do Dia** foi desenvolvido como método de avaliação para concluir a matéria de desenvolvimento de aplicativos na faculdade de **Análise e Desenvolvimento de Sistemas** da **UNINORTE**.

O objetivo principal do projeto é criar um aplicativo onde os usuários possam inserir produtos, associá-los a locais e categorias, e enviá-los para uma API para armazenamento. Além disso, o aplicativo possui uma tela de login com autenticação, utilizando a API: `https://dummyjson.com/auth/login`.

---

## Tecnologias Utilizadas

- **React Native**: Framework principal para desenvolvimento do aplicativo.
- **Expo Go**: Ambiente de desenvolvimento para rodar e testar o aplicativo.

---

## APIs Utilizadas

O aplicativo consome as seguintes APIs:

- **Lista de Produtos**:  
  `https://api-produtos-6p7n.onrender.com/products`  
  Endpoint responsável por listar os produtos cadastrados.

- **Locais**:  
  `https://api-produtos-6p7n.onrender.com/locations`  
  Endpoint responsável por gerenciar os locais dos produtos.

- **Categorias**:  
  `https://api-produtos-6p7n.onrender.com/categories`  
  Endpoint responsável por gerenciar as categorias dos produtos.

- **Autenticação**:  
  `https://dummyjson.com/auth/login`  
  Endpoint para realizar autenticação de usuários.

---

## Funcionalidades do Aplicativo

1. **Tela de Login**:  
   Realiza autenticação do usuário utilizando a API de login.
   
2. **Cadastro de Produtos**:  
   Permite adicionar produtos com os seguintes campos:  
   - Nome
   - Preço
   - Local
   - Categoria
   - Observações
   - Foto do produto (via câmera do dispositivo)

3. **Listagem de Produtos**:  
   Exibe os produtos cadastrados na API.

4. **Dropdowns Personalizados**:  
   Utiliza menus para selecionar locais e categorias.

---

## Requisitos de Instalação

### **Dependências Necessárias**

- **`react-native`**: Base para o desenvolvimento de aplicativos.  
- **`expo`**: Ferramenta para desenvolvimento e execução do projeto.  
- **`expo-router`**: Gerenciamento de navegação no aplicativo.  
- **`react-native-picker-select`**: Dropdowns personalizados para seleção de dados.  
- **`expo-camera`**: Gerenciamento de permissões e uso da câmera no dispositivo.  
- **`@expo/vector-icons` (Ionicons)**: Ícones personalizados utilizados na interface do aplicativo.
## Requisitos para instalação

1. Node.js (versão 16 ou superior).
2. Gerenciador de pacotes **npm** ou **yarn**.
3. **Expo Go** instalado no celular:
   - [Baixar Expo Go para Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

### **Como Instalar**

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados. Caso contrário, instale-os:  
   **Node.js:** [Baixar e Instalar](https://nodejs.org/)  
   **Expo CLI:**  
   ```bash
   npm install -g expo-cli
   ```

2. Após clonar o repositório, instale as dependências utilizando o comando:  
   ```bash
   npm install
   ```

3. Caso precise instalar pacotes específicos mencionados acima, execute os comandos abaixo:  
   ```bash
   npm install react-native-picker-select expo-camera expo-router @expo/vector-icons
   ```

4. Inicie o servidor Expo para executar o aplicativo:  
   ```bash
   npx expo start -c
   ```

5. Abra o aplicativo **Expo Go** no celular e escaneie o QR Code gerado no terminal ou na interface do Expo.

---
