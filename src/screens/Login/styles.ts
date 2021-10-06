import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    image: {
        marginTop: 60,
    },
    title: {
        color: theme.colors.heading
    },
    subTitle: {
        color: theme.colors.heading,
        margin: 20
    },
    login: {
       marginTop: 50 
    },
    logar: {
        width: '100%'
    },
    input: {
        paddingLeft: 10,
        height: 50,
        marginTop: 20,
        marginRight: 40,
        marginLeft: 40,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },
    senha: {
        paddingLeft: 10,
        height: 50,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#f0f0f0',
        borderRadius: 5
    },
    footer: {
        flexGrow: 1,
        width: '100%',
        height: 10,
        alignItems: 'center',
        color: theme.colors.heading,
        marginTop: 50,
        backgroundColor: theme.colors.splash
    }
});