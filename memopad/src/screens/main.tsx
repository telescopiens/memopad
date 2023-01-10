import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Text } from '@/atoms'

export default function MainScreen() {
    return (
        <Container justifyContent="center" alignItems="center">
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