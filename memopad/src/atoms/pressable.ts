import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React from "react";
import {
    Pressable as NativePressable,
    PressableProps as NativePressableProps
} from 'react-native'


const Pressable = createBox<Theme, NativePressableProps>(NativePressable)
export type PressableProps = React.ComponentProps<typeof Pressable>

export default Pressable