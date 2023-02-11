import { useRef, useState, useEffect } from "react";
import { useScroll, useAsyncFn, useThrottleFn } from "react-use";

import ProductsList from './layouts/products-list';

export default ({url}) => {
    const scrollRef = useRef(null);
    const [skip, setSkip] = useState(0);
    const {y} = useScroll(scrollRef);

    const [response, doFetch] = useAsyncFn(async () => {
        const result = await (await fetch(`${url}/?limit=5&skip=${skip}`)).json();
        setSkip(value => value += 5);
        return result;
    }, [skip]);

    const tryFetching = () => {
        if(response.loading) return;
        doFetch();
    };

    const throttledBottomScroll = useThrottleFn((currentY) => {
        return Math.ceil(currentY + scrollRef.current.clientHeight) >= (scrollRef.current.scrollHeight - 150)?true:false;
    }, 1000, [y]);

    useEffect(() => {
        if(throttledBottomScroll) tryFetching();
    }, [throttledBottomScroll])

    return <div ref={scrollRef} id="infinite-scroll-page" className="h-full overflow-y-auto">
        <ProductsList response={response.value} />
    </div>
};