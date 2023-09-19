import React, { useRef, useState } from "react";
import { ImageBackground } from "react-native";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  FlatList,
} from "react-native";
import { Icon } from "react-native-magnus";
const Carulsel = () => {
  const images = [
    "https://images.unsplash.com/photo-1693724315464-781ede3a4767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1692789183372-1b4b9f73a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1693835843843-82f691094f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1561505445-3d89277edf4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1688302231150-f1d390ac872f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const witdh = Dimensions.get("window").width;
  // const height = Dimensions.get("window").height;
  const ANCHO_CONTENEDOR = witdh * 0.7;
  const ESPACIO = 10;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingTop: 40,
          paddingHorizontal: 62,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={288}
        data={images}
        keyExtractor={(item) => item}
        // estimatedItemSize={200}
        // scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });

          return (
            <View
              style={{
                width: ANCHO_CONTENEDOR,
                height: "100%",
              }}
            >
              <Animated.View
                style={{
                  paddingVertical: 15,
                  marginHorizontal: ESPACIO + 10,
                  borderRadius: 35,
                  alignItems: "center",
                  paddingHorizontal: 10,
                  transform: [{ translateY: scrollY }],
                }}
              >
                {/* <Image style={styles.posterImage} source={{ uri: item }} /> */}
                <ImageBackground
                  source={{ uri: item }}
                  resizeMode="cover"
                  style={styles.posterImage}
                  imageStyle={{ borderRadius: 24 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      bg="pink600"
                      p={20}
                      rounded="circle"
                      name="play"
                      color="white"
                      fontSize="xl"
                      fontFamily="Ionicons"
                    />
                  </View>
                </ImageBackground>
                <Text style={{ fontWeight: "bold" }}>
                  {index + 1} Violence Of his Rimets
                </Text>
                <Text style={{ color: "gray" }}>Violence 201 - album</Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: "100%",
    height: 280,
    margin: 0,
    marginBottom: 10,
    // borderRadius: 24,
    resizeMode: "cover",
  },
});

export { Carulsel };
