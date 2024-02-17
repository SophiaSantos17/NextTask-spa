import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userLogged } from '../../services/user';
import { useAuth } from '../../context/AuthContext';
import {format, parseISO} from "date-fns";


// componentes criados
import Navbar from '../../components/navbar';
import CardRecent from '../../components/cardRecents';
import CardList from '../../components/cardList';


function getDate(){
  const currentDate = new Date();
  const formatDate = format(currentDate, 'dd/MM/yyyy');
  return formatDate;
}

export default function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigation();
  const {token} = useAuth();
  const date = getDate();


  async function validateToken() {
    if (!token) await navigate.navigate("Signin");
  }
  

  async function getUserLogged() {
    try {
        const userResponse = await userLogged(token);
        setUser(userResponse.data);
    } catch (error) {
        console.log("Erro ao obter usuário logado:", error);
        throw error; // Lança o erro novamente para tratamento na camada superior
    }
  }

  

  useEffect(() => {
    validateToken();
    getUserLogged();
  }, []);

  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.welcome}>Bem vindo, {user.name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.title}>Recentes</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.boxRecents}>
          <CardRecent priority="Baixa"/>
          <CardRecent priority="Alta"/>
          <CardRecent priority="Media"/>
          <CardRecent priority="Alta"/>
          <CardRecent priority="Media"/>
          <CardRecent priority="Alta"/>
          <CardRecent priority="Baixa"/>
        </View>
      </ScrollView>


      <Text style={styles.title}>To Do</Text>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.boxTasks}>
          <CardList priority="Baixa" />
          <CardList priority="Alta" />
          <CardList priority="Baixa" />
          <CardList priority="Media" />
          <CardList priority="Alta" />
          <CardList priority="Media" />
          <CardList priority="Alta" />
          <CardList priority="Baixa" />
          <CardList priority="Alta" />
          <CardList priority="Media" />
          <CardList priority="Baixa" />
          <CardList priority="Media" />
        </View>
      </ScrollView>


      <View style={styles.boxNavbar}>
        <Navbar/>
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
    height: "100%",
  },
  header:{
    height: "15%",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 50,
    borderBottomColor: "#53D4FF",
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  welcome:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  date: {
    fontSize: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  boxRecents: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 180,
    width: "90%",
  },
  boxTasks: {
    height: "auto",
    width: "100%",
    alignItems: 'center',
  },
  boxNavbar: {
    paddingVertical: 20,
    height: "12%",
  },
  title:{
    width: "100%",
    paddingLeft: 20,
    fontSize: 30,
    color:"#000",
    fontWeight: 'bold',
    marginVertical: 20,

  },
});
