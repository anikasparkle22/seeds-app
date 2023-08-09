import React from "react";
import { Image } from "react-native";
import { YStack, Label, Input, Form, Button, Card, Select } from "tamagui";
import { Link } from "expo-router";
import { redA } from "@tamagui/themes";
import { Airplay } from "@tamagui/lucide-icons";

function Header() {
  // Import result is the URL of your image
  return (
    <YStack
      flex={1}
      minWidth={400}
      space="$0"
      borderWidth={1}
      borderRadius="$1"
      padding="$7"
      alignSelf="center"
    >
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={require("../assets/onbd.png")}
          alt="Logo"
          style={{ width: 500, height: 900 }}
        />
      </Card.Background>

      <Form paddingTop="$15">
        <Label
          fontSize="17"
          color="white"
          paddingTop="$2"
          htmlFor="student-email"
        >
          What school do you currently attend?
        </Label>
        <Input id="school" />
        <Label fontSize="17" color="white" paddingTop="$2" htmlFor="Password">
          What is your gender?
        </Label>
        <Input id="Gender" />
        <Label
          fontSize="17"
          color="white"
          paddingTop="$2"
          htmlFor="student-email"
        >
          What are your treatment goals?
        </Label>
        <Input id="Treatment" />

        <Form.Trigger asChild>
          <Card.Footer paddingTop="$10">
            <Button
              circular
              alignSelf="center"
              justifyContent="center"
              theme="blue"
            >
              <Link href="/Resources">Done</Link>
            </Button>
          </Card.Footer>
        </Form.Trigger>
      </Form>
    </YStack>
  );
}

export default Header;
console.log(Header);
