import { Tabs } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { Icon } from "react-native-magnus";

const MyMusic = () => {
  return (
    <SafeAreaView>
      {/* <Tabs.Screen
        options={{
          title: "My Music",
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
      /> */}
    </SafeAreaView>
  );
};

export default MyMusic;
