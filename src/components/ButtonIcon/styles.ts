import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 56,
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        alignItems: 'center',        
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 12,
        textAlign: 'center',
        margin:20,
        fontFamily: theme.fonts.title500
    }
});