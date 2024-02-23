import axios from "axios";


const BASE_URL = "https://skirt-dugong.cyclic.app";

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

export async function getbyIdTarefas(token, id){
    try{
        const response = await axios.get(`${BASE_URL}/tarefas/${id}`, {
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }catch(error){
        console.log(error);
    }
}

// EDIT: Editar uma tareda
export async function editTask(id, data, token) {
    try {
        const response = await axios.put(`${BASE_URL}/tarefas/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    }catch (error) {
        console.log(error);
    }
}

// EDIT: editar o status de uma tarefa
export async function editTaskStatus(id, token) {
    try {
      const response = await axios.put(
        `${BASE_URL}/tarefas/${id}`,
        { status: 1 }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error; // Rejeita o erro para que ele possa ser tratado na chamada da função
    }
  }

// DELETE: Deletar uma tarefa
export async function deleteTask(id, token) {
    try{
        const response = await axios.delete(`${BASE_URL}/tarefas/${id}`, {
            headers:{Authorization:`Bearer ${token}`}
        });
        return response;
    }catch(error){
        console.log(error);
    }
}