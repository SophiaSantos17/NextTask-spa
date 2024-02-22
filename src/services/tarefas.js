import axios from "axios";
import { useAuth } from "../context/AuthContext";


const BASE_URL = "https://nice-teal-worm-tutu.cyclic.app";

export async function createTarefa(data, token){
    try{
        const response = await axios.post(`${BASE_URL}/tarefas`, data, {
            headers: {Authorization: `Bearer ${token}`}
        });
        return response;

    }catch(error){
        console.log("Erro na criação da tarefa: ", error);
    }
}

export async function getAllTarefas(token){
    try{
        const response = await axios.get(`${BASE_URL}/tarefas`, {
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }catch(error){
        console.log(error);
    }
}


// DELETE: Deletar uma tarefa
export async function deleteTask(id, token) {
    try{
        const response = await axios.delete(`${BASE_URL}/tarefas${id}`, {
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }catch(error){
        console.log(error);
    }
}