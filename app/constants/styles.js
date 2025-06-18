import { StyleSheet } from "react-native";

const colors  = {
    indigo: "#4B0082",
    gold: "#FFD700",
    teal: "#008080",
    lightGray: "F5F5F5",
    textDark: "#333333",
    textLight: "#FFFFFF",
};

const globalStyles = StyleSheet.create({

    button: {
        backgroundColor: colors.indigo,
        padding: 15,
        borderRadius: 5,    
        alignItems: "center",
        marginTop: 20,
    },
    
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },

    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "90%",
        maxWidth: 400,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3, // Android compatibility
    }, 

    container: {
        flex: 1,
        backgroundColor: "F5F5F5",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        width: "100%",
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "white",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 3 },
    },
    
});

export default globalStyles;