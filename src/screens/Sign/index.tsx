import React from "react";
import { View, Text, Image, TextInput, StatusBar } from "react-native";

import Icon from '../../../assets/icon.png';
import { ButtonIcon } from "../../components/ButtonIcon";
import { Footer } from "../../components/Footer";

import { styles } from './styles';

export function Login(){
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image source={Icon} style={styles.image} />

           <View style={styles.login}>
                <Text style={styles.title}>Faça seu Login</Text>
           </View>
           <View style={styles.logar}>
               <TextInput
                    style={styles.input}
                    placeholder="E-mail"
               /> 
               <TextInput
                    style={styles.senha}
                    placeholder="Senha"
               />              
           </View>
           <ButtonIcon 
                title="Entrar"
                activeOpacity={0.7}
            />
           <Text style={styles.subTitle}>
               Esqueci minha senha
           </Text>
           <View style={styles.footer}>
                <Footer title="Criar uma conta"/>
           </View>
        </View>
    )
}