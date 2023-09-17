import { Tabs } from "expo-router/tabs";
import { Text, View } from "react-native";
import { Icon } from "react-native-magnus";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: true,
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen name="index" />
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
