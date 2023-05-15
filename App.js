import { NativeBaseProvider } from "native-base";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import OrderItem from "./src/Components/OrderItem";
import LoginScreen from "./src/Screens/LoginScreen"


export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen/>
    </NativeBaseProvider>
  );
}
