import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Navbar from "../../components/navbar";
import OptionList from "../../components/cardOptionList";
import {
  getAllTarefas,
  deleteTask,
  editTaskStatus,
  getbyIdTarefas,
} from "../../services/tarefas";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/core";
import { format } from "date-fns";
import CardList from "../../components/cardList";

export default function Listas() {
  // Inicialização de variáveis de estado
  const navigate = useNavigation(); // Hook para obter o objeto de navegação
  const { token } = useAuth(); // Hook para obter o token de autenticação
  const [mostrarExclusao, setMostrarExclusao] = useState(false); // Estado para controlar a exibição do modal de exclusão
  const [tarefas, setTarefas] = useState([]); // Estado para armazenar a lista de tarefas
  const [id, setid] = useState(); // Estado para armazenar o ID da tarefa selecionada
  const [mostrarFeitos, setMostrarFeitos] = useState(false); // Estado para alternar entre a exibição de tarefas feitas e a fazer
  const [mostrarLista, setMostrarLista] = useState(true); // Estado para controlar a exibição da lista de tarefas a fazer
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar se os dados estão sendo carregados
  const [tarefaTitle, setTarefaTitle] = useState("");

  // Função para obter todas as tarefas
  async function getAllTasks() {
    try {
      const tarefaResponse = await getAllTarefas(token);
      setTarefas(tarefaResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Indica que o carregamento dos dados foi concluído
      setIsLoading(false);
    }
  }

  async function getTaskById(taskId) {
    try {
      await getbyIdTarefas(taskId);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para lidar com a exclusão de uma tarefa
  const handleDelete = (taskId, taskTitle) => {
    setMostrarExclusao(true);
    setid(taskId);
    setTarefaTitle(taskTitle);
  };

  // Função para exibir as tarefas concluídas
  const handleFeitos = () => {
    setMostrarFeitos(true);
    setMostrarLista(false);
  };

  // Função para exibir as tarefas a fazer
  const handleLista = () => {
    setMostrarLista(true);
    setMostrarFeitos(false);
  };

  // Função para deletar uma tarefa
  async function deleteTaskById() {
    try {
      await deleteTask(id, token);
      console.log("Tarefa excluída com sucesso!!!");
      // Atualiza a lista de tarefas após a exclusão
      getAllTasks();
      // Fecha o modal de exclusão
      setMostrarExclusao(false);
      
    } catch (error) {
      console.log(error);
    }
  }

  // Função para lidar com a marcação de uma tarefa como concluída
  function handleCheck(taskId) {
    // Lógica para marcar a tarefa como concluída
    editTaskStatus(taskId, token)
      .then(() => {
        console.log("Tarefa marcada como concluída com sucesso!");
        getAllTasks();
      })
      .catch((error) => {
        console.error("Erro ao marcar a tarefa como concluída:", error);
      });
  }

  // Efeito que é executado ao montar o componente
  useEffect(() => {
    getAllTasks();
  }, []);

  const estiloFeitos = mostrarFeitos
    ? { backgroundColor: "#0CB7F2", color: "#fff" }
    : {};
  const estiloLista = mostrarLista
    ? { backgroundColor: "#0CB7F2", color: "#fff" }
    : {};

  return (
    <View style={styles.containerList}>
      <View style={styles.headerList}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.imgLogo}
        />

        <View style={styles.boxNav}>
          <TouchableOpacity
            style={{ ...styles.buttonNav, ...estiloLista }}
            onPress={handleLista}
          >
            <Text style={estiloLista}>To Do</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.buttonNav, ...estiloFeitos }}
            onPress={handleFeitos}
          >
            <Text style={estiloFeitos}>Feitos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Componente de Loading */}
      {isLoading && <ActivityIndicator size="large" color="#0CB7F2" />}

      {/* Lista de Tarefas */}
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.boxListOptions}
      >
        {mostrarLista && (
          <View style={styles.boxRecents}>
            {tarefas.map((tarefa, index) => {
              if (tarefa.status === 0 || tarefa.status === "") {
                return (
                  <OptionList
                    key={tarefa._id}
                    text={tarefa.titulo}
                    date={format(new Date(tarefa.data), "dd/MM/yyyy")}
                    onDelete={() => handleDelete(tarefa._id, tarefa.titulo)}
                    onCheck={() => handleCheck(tarefa._id)}
                    onInfo={() =>
                      navigate.navigate("EditarTarefa", {
                        tarefaId: tarefa._id,
                      })
                    }
                    priority={tarefa.prioridade}
                  />
                );
              }
            })}
          </View>
        )}

        {/* Lista de Tarefas Concluídas */}
        {mostrarFeitos && (
          <View style={styles.boxFeitos}>
            {tarefas.map((tarefa, index) => {
              if (tarefa.status === 1) {
                return (
                  <CardList
                    key={index}
                    priority={tarefa.status}
                    date={format(new Date(tarefa.data), "dd/MM/yyyy")}
                    text={tarefa.titulo}
                  />
                );
              }
            })}
          </View>
        )}
      </ScrollView>

      <View style={styles.boxNavbar}>
        <Navbar />
      </View>

      {/* Modal de Exclusão */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={mostrarExclusao}
        onRequestClose={() => setMostrarExclusao(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.boxExcluir}>
            <Text style={styles.textTitleExcluir}>
              Deseja mesmo excluir a tarefa
            </Text>
            <Text style={styles.nameTarefaExcluir}>{tarefaTitle}</Text>
            <TouchableOpacity
              onPress={deleteTaskById}
              style={styles.btnConfirmarExcluir}
            >
              <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
                Sim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMostrarExclusao(false)}
              style={styles.btnNegarExcluir}
            >
              <Text
                style={{ fontSize: 20, color: "#0CB7F2", fontWeight: "bold" }}
              >
                Não
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerList: {
    alignItems: "center",
    marginBottom: 20,
  },
  boxNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgLogo: {
    width: 200,
    height: 100,
    marginTop: 30,
    alignItems: "center",
  },
  buttonNav: {
    width: "45%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0CB7F2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  boxListOptions: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    display: "flex",
  },
  boxNavbar: {
    paddingVertical: 20,
    height: "12%",
    bottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  boxExcluir: {
    width: 300,
    height: 240,
    backgroundColor: "#0CB7F2",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  textTitleExcluir: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 0,
  },
  nameTarefaExcluir: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#fff",
    marginTop: -3,
    fontWeight: "300",
    textAlign: "center"
  },
  btnConfirmarExcluir: {
    width: 160,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnNegarExcluir: {
    marginTop: 10,
    width: 160,
    height: 40,
    backgroundColor: "white",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
