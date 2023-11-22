export function bottomToTopTransition({ current, next, layouts }) {
    const translateY = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layouts.screen.height, 0],
    });

    const slideFromTop = { transform: [{ translateY }] };
    const slideToTop = { transform: [{ translateY }] };

    return {
        cardStyle: next
            ? slideFromTop
            : slideToTop,
    };
}

export function rightToLeftTransition({ current, next, layouts }) {
    const translateX = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layouts.screen.width, 0],
    });

    const slideFromRight = { transform: [{ translateX }] };
    const slideToLeft = { transform: [{ translateX }] };

    return {
        cardStyle: next
            ? slideFromRight
            : slideToLeft,
    };
}

