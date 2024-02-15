import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// componentes criados
import Navbar from '../../components/navbar';
import CardRecent from '../../components/cardRecents';
import CardList from '../../components/cardList';

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.welcome}>Bem vindo, Fulano</Text>
        <Text style={styles.date}>22/01/23</Text>
      </View>

      <Text style={styles.title}>Recentes</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.boxRecents}>
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
          <CardRecent />
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
