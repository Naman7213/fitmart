import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import HomeScreen from "./src/Screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
