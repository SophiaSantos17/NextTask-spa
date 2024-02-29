import axios from "axios";

const BASE_URL = "http://192.168.10.187:5000";

const BASE_URL = "https://nice-teal-giraffe-toga.cyclic.app";

export async function signup(data) {
    const response = await axios.post(`${BASE_URL}/signup`, data);
    return response;
   
}

// SIGNIN: FAZER LOGIN
export async function signin(data){
    const response = await axios.post(`${BASE_URL}/signin`, data);
    const token = response.data;
    return token;

}

// USERLOGGED: CHAMAR O USUÁRIO LOGADO PELO TOKEN
export async function userLogged(token) {
    const response = await axios.get(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response;
    
}