import React from "react";
import { Image } from "react-native";
import { YStack, Label, Input, Form, Button, styled } from "tamagui";
import { Link } from "expo-router";

// Tell webpack this JS file uses this image

//console.log(home); // /logo.84287d09.png

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
      backgroundColor={}
    >
      <Form class="form1">
        <Label htmlFor="student-email">Student Email</Label>
        <Input id="student-email" defaultValue="user@cornell.edu" />
        <Label htmlFor="Password">Password</Label>
        <Input id="Password" defaultValue="********" />
        <Form.Trigger asChild>
          <Button>
            <Link href="/onboarding">Login</Link>
          </Button>
        </Form.Trigger>
      </Form>
      <Image
        source={require("../assets/login.png")}
        alt="Logo"
        style={{ width: 390, height: 844 }}
      />
    </YStack>
  );
}

export default Header;
console.log(Header);
