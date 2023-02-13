import { Box, Text } from '@/atoms';
import { Note } from '@/models';
import React from 'react';

export interface ListItemProps extends Note {}

const NoteListItem: React.FC<ListItemProps> = props => {
    return (
        <Box bg="$background">
            <Box bg="$background" px="lg" py="sm">
                <Text>{props.body}</Text>
            </Box> 
        </Box>
    )
}
 
export default NoteListItem