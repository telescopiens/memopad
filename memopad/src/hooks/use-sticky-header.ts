import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ANCHOR_INIT= -9999

export default function useStickyHeader() {
    const safeAreaInsets = useSafeAreaInsets()
    const [headerBarHeight, setHeaderBarHeight] = useState(70)
    const anchorY = useSharedValue(ANCHOR_INIT)
    const translationY = useSharedValue(0)
    const progressY = useSharedValue(0)

    const minY = -headerBarHeight
    const maxY = safeAreaInsets.top

    const handleNoteListLayout = useCallback((event: LayoutChangeEvent) => {
        setHeaderBarHeight(event.nativeEvent.layout.height)
    }, [])

    const handleScroll = useAnimatedScrollHandler({
        onBeginDrag: event => {
            anchorY.value = event.contentOffset.y
        },
        onScroll: event => {
            const offsetY = event.contentOffset.y
            let distY = offsetY - anchorY.value
            if (anchorY.value === ANCHOR_INIT) distY = offsetY

            let value =
                offsetY <= -safeAreaInsets.top
                    ? maxY
                    : Math.max(minY, Math.min(maxY, translationY.value - distY))
                translationY.value = value
                anchorY.value = offsetY
                progressY.value = interpolate(translationY.value, [minY, maxY], [0, 1])
        }
    }, [minY, maxY, headerBarHeight])
    const headerBarStyle = useAnimatedStyle(() =>({
        transform: [
            {
                translateY: translationY.value
            }
        ]
    }))

    return {
        handleNoteListLayout,
        handleScroll,
        headerBarStyle,
        headerBarHeight
    }
}