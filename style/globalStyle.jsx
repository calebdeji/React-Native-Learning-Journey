import { StyleSheet, PixelRatio, StatusBar, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
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
        borderRadius: 1000,
        width: PixelRatio.getPixelSizeForLayoutSize(200),
        height: PixelRatio.getPixelSizeForLayoutSize(200),
        resizeMode: "cover",
        aspectRatio: 1
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
        fontStyle: "italic",
        textAlign: "center"
    }
});
export const flatListStyle = StyleSheet.create({
    flatListViewStyle: {
        width: "95%",
        alignSelf: "center",
        height: PixelRatio.getPixelSizeForLayoutSize(300),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(10),
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dotted",
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        borderColor: "blue",
        borderWidth: 2,
        backgroundColor: "brown",
        marginBottom: 10
    },
    flatListTextStyle: {
        color: "white",
        fontSize: PixelRatio.getPixelSizeForLayoutSize(14)
    }
});
export const pickerStyle = StyleSheet.create({
    pickerContainer: {
        // borderStyle: "solid",
        // borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        // borderColor: "blue",
        // borderWidth: 10,
        height: PixelRatio.getPixelSizeForLayoutSize(40),
        width: "90%",
        backgroundColor: "white"
    },
    itemStyle: {
        fontStyle: "italic",
        color: "yellow"
    }
});

export const navigationOptionStyle = {
    headerStyle: {
        backgroundColor: "orange",
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(30)
    },
    headerTintColor: "rgb(245, 222, 179)",
    headerTitleStyle: {
        fontWeight: "bold",
        fontStyle: "italic"
    }
};
export const safeViewStyle = StyleSheet.create({
    androidSafeArea: {
        paddingTop:
            Platform.OS && DeviceInfo.hasNotch() === "android"
                ? StatusBar.currentHeight
                : 0,
        backgroundColor: "burlywood"
    }
});
