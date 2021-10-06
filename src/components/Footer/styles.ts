import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 30,        
        backgroundColor: theme.colors.heading,
    },
    title: {
        color: theme.colors.fix,
        margin: 20,
    },

});