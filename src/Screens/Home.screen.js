import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, Dimensions, Modal } from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import { LOGO_BACKGROUND } from "../config/Constants";
import ImageElement from "../Components/ImageElement";

Ionicons.loadFont().then();

export class Home extends Component {
    state = {
        modalVisible: false,
        modalImage: LOGO_BACKGROUND,
        images: [LOGO_BACKGROUND, LOGO_BACKGROUND, LOGO_BACKGROUND, LOGO_BACKGROUND, LOGO_BACKGROUND],
    };

    setModalVisible(visible, imageKey) {
        this.setState({ modelImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

    render() {
        let images = this.state.images.map((val, key) => {
            return (
                <TouchableWithoutFeedback key={key} onPress={() => this.setModalVisible(true, key)}>
                    <View style={styles.imageWrapper}>
                        <ImageElement image={val} />
                    </View>
                </TouchableWithoutFeedback>
            );
        });

        return (
            <SafeAreaView>
                <ScrollView style={{ backgroundColor: "#fff" }}>
                    <View styles={styles.titleContainer}>
                        <View style={{ flex: 1, flexDirection: "row-reverse", marginTop: 15, marginLeft: 20 }}>
                            <Ionicons name="log-out-outline" size={36} style={{ transform: [{ rotateY: "180deg" }] }} />
                        </View>
                        <Text style={styles.title}>Welcome to the toonMe! 👻</Text>
                        <Text style={styles.subTitle}>Image Library 👇🏻</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={styles.imageContainer}>
                            {/* <Modal style={styles.modal} animationType="fade" transparent={true} visible={this.state.modelVisible} onRequestClose={() => {}}>
                                <View style={styles.modal}>
                                    <Text
                                        style={styles.text}
                                        onPress={() => {
                                            this.setModalVisible(false);
                                        }}>
                                        ❌ Close
                                    </Text>
                                    <ImageElement image={this.state.modalImage} />
                                </View>
                            </Modal> */}
                            {images}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    title: {
        marginTop: Dimensions.get("window").height / 15,
        marginLeft: Dimensions.get("window").width / 20,
        fontFamily: "Avenir Next",
        fontSize: 36,
        fontWeight: "bold",
    },
    subTitle: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: "400",
        marginTop: 15,
        flex: 1,
        flexDirection: "row",
        textAlign: "left",
    },
    imageWrapper: {
        alignContent: "center",
        margin: 4,
        padding: 2,
        width: Dimensions.get("window").width / 2 - 9,
        height: Dimensions.get("window").height / 3 - 12,
        // backgroundColor: "#ffe",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 5,
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    text: {
        flex: 1,
        flexDirection: "row",
        textAlign: "right",
        color: "#fff",
    },
});
