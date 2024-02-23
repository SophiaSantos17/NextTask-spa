import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Header from "../../components/header";
import { useAuth } from "../../context/AuthContext";
import { useRoute } from "@react-navigation/native";
import { getbyIdTarefas } from "../../services/tarefas";
import { format, parseISO } from "date-fns";

export default function InfoTarefa() {
  const route = useRoute();
  const { tarefaId } = route.params || {};
  const { token } = useAuth();
  const [tarefa, setTarefa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataFormatada = tarefa.data ? format(parseISO(tarefa.data), 'dd/MM/yyyy') : '';

  // Função para obter os detalhes da tarefa
  async function getTarefa() {
    try {
      const tarefaResponse = await getbyIdTarefas(token, tarefaId);
      setTarefa(tarefaResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Indica que o carregamento dos dados foi concluído
      setIsLoading(false);
    }
  }

  // Efeito que é executado ao montar o componente
  useEffect(() => {
    getTarefa();
  }, []);

  function getPriorityColor(priority) {
    switch (priority) {
      case "Alta":
        return "#F20C0C"; // vermelho
      case "Media":
        return "#0CB7F2"; // azul principal do aplicativo
      case "Baixa":
        return "#2EC221"; //verde
      default:
        return "#000"; // Cor padrão, se necessário
    }
  }

  return (
    
    <View style={styles.container}>
      <Header text="Informação da Tarefa" />

      <View style={styles.boxTotalInfo}>
        <View
          style={[styles.priority, { backgroundColor: getPriorityColor(tarefa.prioridade) }]}
        ></View>
        <View style={[styles.boxInfoTarefa, { borderColor: getPriorityColor(tarefa.prioridade) }]}>
          <Text style={styles.title}>{tarefa.titulo}</Text>

          <Text style={styles.subtitle}>Descrição:</Text>
          <Text style={styles.text}>{tarefa.descricao}</Text>

          <View style={styles.boxTipos}>
            <View style={styles.boxTT}>
              <Text style={styles.subtitle}>Prioridade</Text>
              <Text style={styles.text}>{tarefa.prioridade}</Text>
            </View>
            <View style={styles.boxTT}>
              <Text style={styles.subtitle}>Tipo</Text>
              <Text style={styles.text}>{tarefa.tipo_tarefa}</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Data</Text>
          <Text style={styles.text}>{dataFormatada}</Text>
        </View>
      </View>

      {isLoading && (
        <ActivityIndicator size="large" color="#0CB7F2" />
      )}

      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxTotalInfo: {
    width: "100%",
    alignItems: "center",
  },
  boxInfoTarefa: {
    width: "90%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 350,
    borderWidth: 2,
    // borderColor: "red", //
    padding: 20,
    margin: 0,
  },
  priority: {
    margin: 0,
    width: "90%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 50,
    // backgroundColor: "red", //
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 12,
  },
  text: {
    fontSize: 17,
    fontWeight: "300",
  },
  boxTipos: {
    flexDirection: "row",
  },
  boxTT: {
    width: "55%",
  },
  image: {
    width: 230,
    height: 90,
    margin: 30,
  },
});
