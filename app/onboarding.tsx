import React from "react";
import { Image } from "react-native";
import { YStack, Label, Input, Form, Button } from "tamagui";
import { Link } from "expo-router";

function Header() {
  // Import result is the URL of your image
  return (
    <YStack flex={1}>
      <Image
        source={require("../assets/onbd.png")}
        alt="Logo"
        style={{ width: 390, height: 844 }}
      />
    </YStack>
  );
}

export default Header;
console.log(Header);
