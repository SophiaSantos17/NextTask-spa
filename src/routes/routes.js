// Gerenciar a navegação, auta com o conteiner na pilha de telas
import { NavigationContainer } from "@react-navigation/native";

// Gerenciar a navegação entre as telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar as telas
import Signin from "../pages/SigninPage";
import Signup from "../pages/SignupPage";
import Start from "../pages/StartPage";
import Home from "../pages/Home";
import SplashScreen from "../pages/SplashScreen";
import NovaTarefa from "../pages/NovaTarefa";
import Listas from "../pages/Lists";
import InfoTarefa from "../pages/InfoTarefa";
import EditarTarefa from "../pages/EditarTarefa";

// Configuração e gestão da navegação entre telas
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    // Agrupar as rotas
    <NavigationContainer>
        {/* Criar uma pilha de páginas */}
        <Stack.Navigator initialRouteName="Start">
            {/* Carregar a Splash Sreen */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>

            {/* Carregar a tela Tela Inicial */}
            <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />

            {/* Carregar a tela Home */}
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

            {/* Carregar a tela Signin */}
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>

            {/* Carregar a tela Signup */}
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
            
            {/* Carregar a tela de Adicionar Nova Tareda */}
            <Stack.Screen name="NovaTarefa" component={NovaTarefa} options={{headerShown: false}}/>

            {/* Carregar a tela de Listas */}
            <Stack.Screen name="Listas" component={Listas} options={{headerShown: false}}/>

            {/* Carregar a tela de Informação da Tarefa */}
            <Stack.Screen name="InfoTarefa" component={InfoTarefa} options={{headerShown: false}}/>

            {/* Carregar a tela de Editar Tarefa */}
            <Stack.Screen name="EditarTarefa" component={EditarTarefa} options={{headerShown: false}}/>


        </Stack.Navigator>
    </NavigationContainer>
  );
}