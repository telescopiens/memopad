import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Text } from '@/atoms'
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';

export default function MainScreen() {
    return (
        <Container justifyContent="center" alignItems="center">
            <NoteList />
            <HeaderBar />
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