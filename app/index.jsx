import { View, SafeAreaView, ScrollView } from "react-native";
import { Carulsel } from "../components/Carusel";
import { Played } from "../components/Played";
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <Carulsel />
        <Played />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
