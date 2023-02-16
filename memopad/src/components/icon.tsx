import { Theme } from '@/themes';
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle';
import * as React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import Feather from 'react-native-vector-icons/Feather.js';


export type IconProps = React.ComponentProps<typeof Entypo>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
    const theme = useTheme<Theme>()
    const colorProp = useResponsiveProp(color)
    const vColor = theme.colors[colorProp || '$foreground']
    return <Entypo {...rest} color={vColor}/>
}

export default FeatherIcon