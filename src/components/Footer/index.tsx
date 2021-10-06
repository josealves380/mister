import React from "react";

import {
    Text,
    View,
    TouchableOpacity
 } from "react-native";

 import { styles } from "./styles";

 type Props={
     title:string;
 }

 export function Footer({ title } : Props){
     return (
        <TouchableOpacity>
            <View>
                <Text style={styles.title}> { title }</Text>
            </View>
        </TouchableOpacity>
     )
 }
     