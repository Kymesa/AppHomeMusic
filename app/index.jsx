import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Tabs } from "expo-router/tabs";
import { Icon } from "react-native-magnus";
import { BtnHeaderScreen } from "../components/BtnHeaderScreen";
import { Carulsel } from "../components/Carusel";
import { Played } from "../components/Played";
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 100, marginHorizontal: 100 }}>
          <Tabs.Screen
            options={{
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
        </View>

        <Carulsel />
        <Played />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
