import React from "react";
import { Image } from "react-native";
import { YStack, ScrollView } from "tamagui";
import { Link } from "expo-router";
import { whiteA } from "@tamagui/themes";

function resource() {
    return (
        <ScrollView>
            <YStack
                alignItems="center"
                backgroundColor="#ffffff">
                <Image margin={20}
                    source={require("../assets/resourcetitle.png")}
                    alt="Logo"
                    style={{
                        width: 309.5,
                        height: 55,
                    }}
                />

                <Link href="/page">
                    <Image
                        source={require("../assets/resourceimage1.png")}
                        alt="Logo"
                        style={{
                            width: 340,
                            height: 340,
                        }}
                    />
                </Link>

                <Image margin={20}
                    source={require("../assets/resourceimage2.png")}
                    alt="Logo"
                    style={{
                        width: 340,
                        height: 340,
                    }}
                />
                <Image margin={10}
                    source={require("../assets/resourceimage3.png")}
                    alt="Logo"
                    style={{
                        width: 340,
                        height: 340,
                    }}
                />
                <Image margin={10}
                    source={require("../assets/resourceimage4.png")}
                    alt="Logo"
                    style={{
                        width: 340,
                        height: 340,
                    }}
                />
                <Image margin={10}
                    source={require("../assets/resourceimage5.png")}
                    alt="Logo"
                    style={{
                        width: 340,
                        height: 340,
                    }}
                />
            </YStack>
        </ScrollView>
    );
}

export default resource;

