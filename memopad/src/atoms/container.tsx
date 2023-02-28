import * as React from 'react'
import { Theme } from '@/themes'
import { BoxProps } from '@shopify/restyle'
import Box from './box'

const Container: React.FC<BoxProps<Theme>  & { children: React.ReactNode } > = props => (
    <Box {...props} flex={1} backgroundColor="$background">
        {props.children}
    </Box>
)

export default Container