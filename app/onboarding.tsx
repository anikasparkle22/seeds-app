import React from "react";
import { Image } from "react-native";
import { YStack, Label, Input, Form, Button } from "tamagui";
import { Link } from "expo-router";
import { redA } from "@tamagui/themes";

function Header() {
  // Import result is the URL of your image
  return (
    <YStack
      flex={1}
      minWidth={300}
      space="$0"
      borderWidth={1}
      borderRadius="$1"
      padding="$7"
      alignSelf="center"
    >
      <Form>
        <Label htmlFor="student-email">
          What school do you currently attend?
        </Label>
        <Input id="school" />
        <Label htmlFor="Password">What is your gender?</Label>
        <Input id="Password" />
        <Label htmlFor="student-email">
          What would you like your treatment to be focused on?
        </Label>
        <Input id="Password" />
        <Form.Trigger asChild>
          <Button alignSelf="center" theme="blue">
            <Link href="/page">Done</Link>
          </Button>
        </Form.Trigger>
      </Form>

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
