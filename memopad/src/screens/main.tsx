import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function MainScreen() {
    return (
        <View style={styles.container}>
        <Text>
          LUZ AL INSTANTE
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  });
  