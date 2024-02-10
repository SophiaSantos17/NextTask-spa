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

// Configuração e gestão da navegação entre telas
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    // Agrupar as rotas
    <NavigationContainer>
        {/* Criar uma pilha de páginas */}
        <Stack.Navigator initialRouteName="SplashScreen">
            {/* Carregar a Splash Sreen */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>

            {/* Carregar a tela Tela Inicial */}
            <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />

            {/* Carregar a tela Home */}
            <Stack.Screen name="Home" component={Home} options={{headerTitle: "Home"}}/>

            {/* Carregar a tela Signin */}
            <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>

            {/* Carregar a tela Signup */}
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>


        </Stack.Navigator>
    </NavigationContainer>
  );
}