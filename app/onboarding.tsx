import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { React, useMemo, useState } from "react";
import { Image } from "react-native";
import { LinearGradient } from "tamagui/linear-gradient";
import {
  YStack,
  Label,
  Input,
  Form,
  Button,
  Card,
  Select,
  Adapt,
  SelectProps,
  Sheet,
  XStack,
  getFontSize,
} from "tamagui";
import { Link } from "expo-router";
import { redA } from "@tamagui/themes";
import { Airplay } from "@tamagui/lucide-icons";

function Header(props: SelectProps) {
  const [val, setVal] = useState("apple");
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
        <Label color="white" paddingTop="$2" htmlFor="student-email">
          What school do you currently attend?
        </Label>
        <Input id="school" backgroundColor={"none"} />
        <Label color="white" paddingTop="$2" htmlFor="Password">
          What is your gender?
        </Label>
        <Input id="Gender" backgroundColor={"none"} />
        <Label color="white" paddingTop="$2" htmlFor="student-email">
          What is your primary treatment goal?
        </Label>
        <Select id="food" value={val} onValueChange={setVal} {...props}>
          <Select.Trigger
            backgroundColor={"none"}
            iconAfter={ChevronDown}
            color={"white"}
          >
            <Select.Value placeholder="Something" />
          </Select.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet
              native={!!props.native}
              modal
              dismissOnSnapToBottom
              animationConfig={{
                type: "spring",
                damping: 20,
                mass: 1.2,
                stiffness: 250,
              }}
            >
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </Adapt>

          <Select.Content zIndex={200000}>
            <Select.ScrollUpButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronUp size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={["$background", "$backgroundTransparent"]}
                borderRadius="$4"
              />
            </Select.ScrollUpButton>

            <Select.Viewport
              // to do animations:
              // animation="quick"
              // animateOnly={['transform', 'opacity']}
              // enterStyle={{ o: 0, y: -10 }}
              // exitStyle={{ o: 0, y: 10 }}
              minWidth={200}
            >
              <Select.Group>
                <Select.Label>Select Treatment Goal</Select.Label>
                {/* for longer lists memoizing these is useful */}
                {useMemo(
                  () =>
                    items.map((item, i) => {
                      return (
                        <Select.Item
                          index={i}
                          key={item.name}
                          value={item.name.toLowerCase()}
                        >
                          <Select.ItemText>{item.name}</Select.ItemText>
                          <Select.ItemIndicator marginLeft="auto">
                            <Check size={16} />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    }),
                  [items],
                )}
              </Select.Group>
              {/* Native gets an extra icon */}
              {props.native && (
                <YStack
                  position="absolute"
                  right={0}
                  top={0}
                  bottom={0}
                  alignItems="center"
                  justifyContent="center"
                  width={"$4"}
                  pointerEvents="none"
                >
                  <ChevronDown
                    size={getFontSize((props.size ?? "$true") as any)}
                  />
                </YStack>
              )}
            </Select.Viewport>

            <Select.ScrollDownButton
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              height="$3"
            >
              <YStack zIndex={10}>
                <ChevronDown size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={["$backgroundTransparent", "$background"]}
                borderRadius="$4"
              />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select>
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

const items = [
  { name: "Addiction/Substance Abuse" },
  { name: "Anxiety" },
  { name: "Bipolar Disorder" },
  { name: "Depression" },
  { name: "Dissociative Disorder" },
  { name: "Domestic Violence/Abuse" },
  { name: "Eating Disorder" },
  { name: "Family-related stress" },
  { name: "Gambling disorder" },
  { name: "Medical-related stress" },
  { name: "Neurodevelopmental Disorder (ADHD)" },
  { name: "Nightmares or sleep disorder" },
  { name: "Obsessive Compulsive Disorder" },
  { name: "PTSD" },
  { name: "Panic Disorder" },
  { name: "Paranoia" },
  { name: "Paraphilia" },
  { name: "Personality Disorder" },
  { name: "Schizophrenia" },
  { name: "School-related stress" },
  { name: "Sex Addiction" },
  { name: "Sexual dysfunction" },
  { name: "Social-related stress" },
  { name: "Specific Phobia" },
];

export default Header;
console.log(Header);
