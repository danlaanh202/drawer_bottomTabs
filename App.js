import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6f",
          // drawerActiveTintColor: "#3c0a6b",
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerStyle: {
          //   backgroundColor: "#ccc",
          // },
        }}
        initialRouteName="Welcome"
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={22} />
            ),
            // drawerIcon: ({ color }) => (
            //   <Ionicons name="home" color={color} size={22} />
            // ),
            // drawerLabel: "Welcome Screen",
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={22} />
            ),
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="person" color={color} size={size} />
            // ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
