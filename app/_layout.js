import { Tabs } from "expo-router/tabs";
import { Icon } from "react-native-magnus";
import { BtnHeaderScreen } from "../components/BtnHeaderScreen";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "Home",
          headerLeft: () => <BtnHeaderScreen name="cog" />,
          headerRight: () => <BtnHeaderScreen name="search" />,
          tabBarLabel: "Home",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: () => (
            <Icon
              name="home"
              fontFamily="Entypo"
              fontSize={32}
              color="pink600"
              h={40}
              w={40}
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Trends"
        options={{
          tabBarIcon: () => (
            <Icon
              name="local-fire-department"
              fontFamily="MaterialIcons"
              fontSize={32}
              color="black"
              h={40}
              w={40}
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyMusic"
        options={{
          tabBarIcon: () => (
            <Icon
              name="music"
              fontFamily="FontAwesome"
              fontSize={32}
              color="black"
              h={40}
              w={40}
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Menu"
        options={{
          tabBarIcon: () => (
            <Icon
              name="menu"
              fontFamily="MaterialIcons"
              fontSize={32}
              color="black"
              h={40}
              w={40}
              rounded="md"
            />
          ),
        }}
      />
    </Tabs>
  );
}
