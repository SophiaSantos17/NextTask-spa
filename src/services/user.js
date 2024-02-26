import axios from "axios";


const BASE_URL = 'http://172.16.1.169:5000';

export async function signup(data) {
    const response = await axios.post(`${BASE_URL}/signup`, data);
    return response;
   
}

export async function signin(data){
    const response = await axios.post(`${BASE_URL}/signin`, data);
    const token = response.data;
    return token;

}

export async function userLogged(token) {
    const response = await axios.get(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response;
    
}