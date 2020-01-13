import { StyleSheet, PixelRatio } from "react-native";
export const defaultStyleForView = StyleSheet.create({
    viewContainer: {
        height: PixelRatio.getPixelSizeForLayoutSize(300),
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(10),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
        alignItems: "center",
        justifyContent: "center"
    }
});
export const styleButtonWidget = StyleSheet.create({
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        right: 10
    }
});

export const imageStyle = StyleSheet.create({
    profileImage: {
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(100),
        width: PixelRatio.getPixelSizeForLayoutSize(200),
        height: PixelRatio.getPixelSizeForLayoutSize(200)
    }
});

export const touchableStyle = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        padding: 30,
        borderWidth: 0,
        elevation: 20
    },
    button: {
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(100),
        borderWidth: 0.1
    },
    text: {
        color: "white",
        fontFamily: "Roboto"
    }
});
export const textInputStyle = StyleSheet.create({
    textInput: {
        borderStyle: "solid",
        borderColor: "#929191",
        borderWidth: 1,
        padding: 10,
        width: "80%",
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(5)
    }
});

export const textStyle = StyleSheet.create({
    imageText: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(17),
        fontWeight: "bold",
        fontStyle: "italic"
    }
});
