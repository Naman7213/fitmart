import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <NotVerifyScreen />
    </NativeBaseProvider>
  );
}
