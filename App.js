
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Discover from "./screens/discover";
import NewsDetail from "./screens/news-detail";
import TipsPolaMakananSehat from "./screens/tips";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Discover":
              iconName = "compass-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
            case "Tips":
              iconName = "bulb-outline";
              break;
          }
          return <Ionicons name={iconName} size={28} color={focused ? "black" : color} />;
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: { height: 100, borderTopWidth: 0 },
        tabBarLabel: ({ children, color, focused }) => (
          <Text color={focused ? "black" : color} textAlign="center">
            {children}
          </Text>
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Discover" component={Discover} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
      <Tab.Screen name="Tips" component={TipsPolaMakananSehat} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="News Detail" component={NewsDetail} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;