import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Box, TouchableOpacity, Text } from '@/atoms'
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';

export default function MainScreen() {
    return (
        <Container justifyContent="center" alignItems="center">
            <NoteList />
            <HeaderBar>
                <TouchableOpacity m={'xs'} p={'xs'} rippleBorderless>
                    <FeatherIcon name='menu' size={22}/>
                </TouchableOpacity>
                <Box flex={1} alignItems={'center'}>
                    <Text fontWeight={'bold'}>Notas</Text>
                </Box>
                <TouchableOpacity m={'xs'} p={'xs'} rippleBorderless>
                    <FeatherIcon name='list' size={22}/>
                </TouchableOpacity>
            </HeaderBar> 
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