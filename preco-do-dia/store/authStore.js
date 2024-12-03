import {create} from 'zustand';

const useAuthStore = create((set) => ({
    usuarioLogado: false,
    usuario: "",
    senha: "", 
    token: "",
    mensagemErro: "",
    img: "",

    login: async (usuario, senha) => {
        try{
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: usuario,//'emilys',
                  password: senha,//'emilyspass',
                  
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
            })
            
            const loginData = await loginResponse.json()

            // if(loginData.message != ''){
            //     console.log('erro', loginData);
            //     set({mensagemErro: `Erro: ${loginData.message}` });
            // }

            if(loginData.accessToken){
                console.log("trocando dados")
                set({
                    usuarioLogado: true,
                    usuario: usuario,
                    senha: senha,
                    token: loginData.accessToken,
                    img: loginData.image
                });
            }

            console.log(loginData);
        }catch(error){

        }
    },

    logout: () => set({
        usuarioLogado: false,
        usuario: "",
        senha: "",
        token: "",
    }),
}))

export default useAuthStore;