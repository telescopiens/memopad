import React, { useCallback } from 'react'
import { Note } from "@/models";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import { FlatList, FlatListProps } from "react-native";
import DATA from '@/fixtures/notes'
import NoteListItem from './note-list-item';

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props {}

const NoteList: React.FC<Props> = () => {
    const renderItem = useCallback(({item}) =>{
        return <NoteListItem { ...item } />
    }, [])

    return (
        <StyledFlatList
            contentInsetAdjustmentBehavior="automatic"
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width={'100%'} />
    )
}

export default NoteList