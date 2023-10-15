import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterPageSecond from "./pages/Register/RegisterPageSecond";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{
            title: "Главная"
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{
            title: "Добро пожаловать"
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: "Войти"
          }}
        />
        <Stack.Screen
          name="Register1"
          component={RegisterPage}
          options={{
            title: "Регистрация"
          }}
        />
        <Stack.Screen
          name="Register2"
          component={RegisterPageSecond}
          options={{
            title: "Регистрация"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
