import React from "react";
import { Container, Text } from '@/atoms'
import { StyleSheet } from 'react-native';

export default function MainScreen() {
    return (
        <Container >
          <Text>
            LUZ AL INSTANTE
          </Text>
      </Container>
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
  