import React from "react";
import { Image } from "react-native";
import { YStack, Label, Input, Form, Button, styled, Card } from "tamagui";
import { Link } from "expo-router";
import { redA } from "@tamagui/themes";
import { Airplay } from "@tamagui/lucide-icons";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { ChangeEvent, InputHTMLAttributes, Ref, forwardRef } from "react";

function Header() {
  // Import result is the URL of your image
  return (
    <YStack
      flex={1}
      minWidth={390}
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
          source={require("../assets/login.png")}
          alt="Logo"
          style={{ width: 500, height: 900 }}
        />
      </Card.Background>
      <Form class="form1" paddingTop="$15">
        <Label htmlFor="student-email" color="white" paddingTop="$2">
          Student Email
        </Label>
        <Input id="student-email" defaultValue="" backgroundColor={"none"} />
        <Label htmlFor="Pass" color="white" paddingTop="$2">
          Password
        </Label>
        <Input id="Passwordinput" defaultValue="" backgroundColor={"none"} />
        <Form.Trigger asChild>
          <Card.Footer paddingTop="$10">
            <Button circular alignSelf="center" justifyContent="center">
              <Link href="/onboarding">Login</Link>
            </Button>
          </Card.Footer>
        </Form.Trigger>
      </Form>
    </YStack>
  );
}

export default Header;
console.log(Header);
