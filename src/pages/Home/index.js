import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userLogged } from '../../services/user';
import { useAuth } from '../../context/AuthContext';
import { format } from 'date-fns';
import { getAllTarefas, getRecentesTarefas } from '../../services/tarefas';

// Componentes criados
import Navbar from '../../components/navbar';
import CardRecent from '../../components/cardRecents';
import CardList from '../../components/cardList';

// Função para obter a data formatada
function getDate() {
  const currentDate = new Date();
  const formatDate = format(currentDate, 'dd/MM/yyyy');
  return formatDate;
}

export default function Home() {
  // Estado para armazenar os dados do usuário
  const [user, setUser] = useState([]);
  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);
  // Estado para controlar o carregamento dos dados
  const [isLoading, setIsLoading] = useState(true);
  // Objeto de navegação
  const navigate = useNavigation();
  // Dados formatados da data
  const date = getDate();
  // Função de autenticação
  const { token, logout } = useAuth();
  // função para atulaizar com as tarefas mais recentes
  const [tarefaRecente, setTarefaRecente] = useState([]);


  // Verifica se o token está presente, se não, redireciona para a tela de login
  function validateToken() {
    if (!token) navigate.navigate('Signin');
  }

  // Obtém os dados do usuário logado
  async function getUserLogged() {
    try {
      const userResponse = await userLogged(token);
      setUser(userResponse.data);
    } catch (error) {
      console.log('Erro ao obter usuário logado:', error);
      throw error;
    }
  }

  // Obtém todas as tarefas do usuário
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

  async function getRecentes(){
    try{
      const recentesResponse = await getRecentesTarefas(token);
      setTarefaRecente(recentesResponse.data);
    }catch(error){
      console.log(error);
    }
  }

  // Função para realizar o logout
  function handleLogout() {
    logout();
    navigate.navigate('Signin');
  }


  // Efeito que é executado ao montar o componente
  useEffect(() => {
    const pollingInterval = setInterval(() => {
      getAllTasks();
      getRecentes();
    }, 5000);

    validateToken();
    getUserLogged();
    

    return () => clearInterval(pollingInterval);
  }, []);

  // Se os dados estiverem sendo carregados, exibe um indicador de atividade
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0CB7F2" />
      </View>
    );
  }


  // Renderiza a tela principal
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Bem vindo, {user.name}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.boxButtonLogout}>
          <TouchableOpacity title="Logout" onPress={handleLogout} style={styles.buttonLogout}>
            <Text style={{color: "#fff", fontSize: 20}}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Seção de tarefas recentes */}
      <Text style={styles.title}>Recentes</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
       
        {tarefaRecente.length ? (
          <View style={styles.boxRecents}>
            {tarefaRecente.map((tarefa, index) => (
              <CardRecent
                key={index} 
                priority={tarefa.prioridade}
                date={format(new Date(tarefa.data), 'dd/MM/yyyy')}
                text={tarefa.titulo}
                onPress={() => navigate.navigate("InfoTarefa", { tarefaId: tarefa._id })}
              />
            ))}
          </View>
        ) : (
          <View style={styles.boxRecents}>
            <Text style={styles.info}>Sem tarefa recente</Text>
          </View>
        )}  
        
      </ScrollView>

      {/* Seção de tarefas To Do */}
      <Text style={styles.title}>To Do</Text>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        {tarefas.length ? (
          <View style={styles.boxTasks}>
            {tarefas.map((tarefa, index) => (
              tarefa.status === 0 ? (
                <CardList
                  key={index}
                  priority={tarefa.prioridade}
                  date={format(new Date(tarefa.data), 'dd/MM/yyyy')}
                  text={tarefa.titulo}
                  onPress={() => navigate.navigate("InfoTarefa", { tarefaId: tarefa._id })}
                />
              ) :  null
            ))}
          </View>
        ) : (
          <Text style={styles.info}>Sem tarefas</Text>
        )}
      </ScrollView>

      {/* Navbar */}
      <View style={styles.boxNavbar}>
        <Navbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  header: {
    height: '15%',
    width: '100%',
    backgroundColor: "pink",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 50,
    borderBottomColor: '#53D4FF',
    borderBottomWidth: 2,
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  date: {
    fontSize: 20,
  },
  boxButtonLogout:{
    alignItems: "flex-end",
    position: 'relative',
    width: "100%",
    bottom: 25,
  },
  buttonLogout:{
    width: 100,
    height: 30,
    backgroundColor: "#0CB7F2",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',

  },
  boxRecents: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 180,
    width: '90%',
    // backgroundColor: "blue"
  },
  boxTasks: {
    height: 'auto',
    width: '100%',
    alignItems: 'center',
  },
  boxNavbar: {
    paddingVertical: 20,
    height: '12%',
  },
  title: {
    width: '100%',
    paddingLeft: 20,
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  info:{
    fontSize: 20,
  },
});
