import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterPageSecond from "./pages/Register/RegisterPageSecond";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={({ navigation }) => (
            <View className="flex-1 items-center justify-center bg-white">
              <Text>Open up App.js to start working on your app!</Text>
              <StatusBar style="auto" />
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate("Register1")}
              />
            </View>
          )}
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
