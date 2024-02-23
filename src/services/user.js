import axios from "axios";


const BASE_URL = "https://skirt-dugong.cyclic.app";

export async function signup(data) {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, data);
        return response;
    } catch (error) {
        // Trate o erro aqui, por exemplo, lançando novamente para que seja tratado em outro lugar ou registrando no console.
        console.error("Erro na solicitação de inscrição:", error);
        throw error;
    }
}

export async function signin(data){
    try {
        const response = await axios.post(`${BASE_URL}/signin`, data);
        const token = response.data;
        return token;

    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error; // Rejeitar a promessa para que o erro seja capturado no bloco catch onde a função foi chamada
    }
}

export async function userLogged(token) {
    try {
        const response = await axios.get(`${BASE_URL}/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}