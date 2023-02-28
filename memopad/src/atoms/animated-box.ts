import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import * as React from 'react';
import { ViewProps } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated';

const AnimatedBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View)
export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>
export default AnimatedBox