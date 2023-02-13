import { Box, Text } from '@/atoms';
import { Note } from '@/models';
import React from 'react';

export interface ListItemProps extends Note {}

const NoteListItem: React.FC<ListItemProps> = props => {
    return (
        <Box bg="$background">
            <Box bg="$background" px="lg" py="sm">
                <Text ellipsizeMode='tail' numberOfLines={1} fontWeight={'bold'} mb="xs">
                    {props.title}
                </Text>
                <Text ellipsizeMode='tail' numberOfLines={2} fontWeight={'bold'} fontSize={14} opacity={0.7}>
                    {props.body}
                </Text>
            </Box> 
        </Box>
    )
}
 
export default NoteListItem