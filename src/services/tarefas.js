import axios from "axios";


const BASE_URL = "https://nice-teal-giraffe-toga.cyclic.app";

// CREATE: Criar uma nova tarefa
export async function createTarefa(data, token){
    try{
        const response = await axios.post(`${BASE_URL}/tarefas`, data, {
            headers: {Authorization: `Bearer ${token}`}
        });
        return response;

    }catch(error){
        console.log("Erro na criação da tarefa: ", error.message);
    }
}

// READ: Trazer todas as tarefas pelo usuario(token)
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

// READ: Trazer uma tarefa pelo id
export async function getbyIdTarefas(token, id){
    const response = await axios.get(`${BASE_URL}/tarefas/${id}`, {
        headers:{Authorization:`Bearer ${token}`}
    });
    return response;
   
}

// READ: Trazer as tarefas recentes
export async function getRecentesTarefas(token){
    const response = await axios.get(`${BASE_URL}/recentes`, {
        headers:{Authorization:`Bearer ${token}`}
    });
    return response;
   
}

// EDIT: Editar uma tareda
export async function editTask(id, data, token) {
    const response = await axios.put(`${BASE_URL}/tarefas/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
    });
    return response;
}

// EDIT: editar o status de uma tarefa
export async function editTaskStatus(id, token) {
    const response = await axios.put(`${BASE_URL}/tarefas/${id}`,
        { status: 1 }, 
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return response;
    
  }

// DELETE: Deletar uma tarefa
export async function deleteTask(id, token) {
    const response = await axios.delete(`${BASE_URL}/tarefas/${id}`, {
        headers:{Authorization:`Bearer ${token}`}
    });
    return response;
    
}