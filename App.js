import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterPageSecond from "./pages/Register/RegisterPageSecond";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import FloatingNav from "./components/Presets/FloatingNav/FloatingNav";
import { useAppStore } from "./stores/AppStore";
import UserPage from "./pages/User/UserPage";
import PostPage from "./pages/PostPage";
import DocsPage from "./pages/DocsPage";
import QrCodePage from "./pages/User/QrCodePage";
import FriendsPage from "./pages/User/FriendsPage";
import ScanQrPage from "./pages/User/ScanQrPage";
import { useUserInfo } from "./hooks/useUserInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const { page, setPage } = useAppStore((state) => state);

  const { token } = useUserInfo();

  return (
    <SafeAreaView behavior="padding" className="flex-1">
      <NavigationContainer
        ref={navigationRef}
        onStateChange={async () => {
          setPage(navigationRef.getCurrentRoute().name);
        }}
        
      >
        <Stack.Navigator
        screenOptions={{animation: "none"}}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{
              title: "Добро пожаловать",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{
              title: "Главная",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Post"
            component={PostPage}
            options={{
              title: "Пост",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={UserPage}
            options={{
              title: "Профиль",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsPage}
            options={{
              title: "Список друзей",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="QRCode"
            component={QrCodePage}
            options={{
              title: "QR Код для добавления в друзья",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="ScanQR"
            component={ScanQrPage}
            options={{
              title: "QR Код для добавления в друзья",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
              header: () => <View></View>,
            }}
          />
          <Stack.Screen
            name="Docs"
            component={DocsPage}
            options={{
              title: "Документы",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: "Войти",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Register1"
            component={RegisterPage}
            options={{
              title: "Регистрация",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
          <Stack.Screen
            name="Register2"
            component={RegisterPageSecond}
            options={{
              title: "Регистрация",
              contentStyle: { shadowOpacity: 0,shadowOffset:0, opacity: 1 },
            }}
          />
        </Stack.Navigator>
        {token && <FloatingNav />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
