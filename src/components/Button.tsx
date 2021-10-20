import React from "react";
import {
    TouchableOpacity,
    TouchableHighlightProps,
    Text,
    StyleSheet
 } from 'react-native';

 interface ButtonProps extends TouchableHighlightProps {
   title: string
 }

export function Button({ title, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            {...rest}
        >
            <Text
                style={styles.buttonText}>
                  { title }
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold',
    }
  });