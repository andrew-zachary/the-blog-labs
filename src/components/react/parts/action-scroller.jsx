import { useEffect } from "react";
import { useScroll, useThrottleFn } from "react-use";

export default ({target, action}) => {
    const {y} = useScroll(target);

    const throttledBottomScroll = useThrottleFn((currentY) => {
        return Math.ceil(currentY + target.current.clientHeight) >= (target.current.scrollHeight - 150)?true:false;
    }, 400, [y]);

    useEffect(() => {
        if(throttledBottomScroll) action();
    }, [throttledBottomScroll]);

    return <></>;
}