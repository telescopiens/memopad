import React from "react";
import { Box, Text } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaView } from "react-native";

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
    return (
        <Box flex={1} bg="$sidebarBackground">
            <SafeAreaView>
                <Text variant="sidebar" m='lg'>
                    primero
                </Text>
            </SafeAreaView>
        </Box>
    )
}
export default Sidebar;
