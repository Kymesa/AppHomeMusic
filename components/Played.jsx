import { Text, TouchableOpacity, View } from "react-native";

const Played = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        // padding: 10,
        marginHorizontal: 10,
        marginTop: 0,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Recently Played</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 17, color: "gray" }}>All</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Played };
