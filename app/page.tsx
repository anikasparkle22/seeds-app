import React from "react";
import { Image } from "react-native";
import { YStack, ScrollView, Label, Input, Form, Button } from "tamagui";
import { Link } from "expo-router";

function Header() {
  // Import result is the URL of your image
  return (
    <ScrollView>
      <YStack flex={1}>
        <Image
          source={require("../assets/coping.png")}
          alt="Logo"
          style={{ width: 390, height: 1987 }}
        />
        <Image
          source={require("../assets/finread.png")}
          alt="Logo"
          style={{
            width: 309.5,
            height: 55,
            alignSelf: "center",
          }}
        />
      </YStack>
    </ScrollView>
  );
}

export default Header;
console.log(Header);
