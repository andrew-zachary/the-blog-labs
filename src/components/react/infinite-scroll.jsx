import { useRef, useState, useEffect } from "react";
import { useScroll, useAsyncFn, useThrottleFn } from "react-use";

import ProductsList from './layouts/products-list';

export default ({url, target, toLimit, toSkip}) => {
    const scrollRef = useRef(null);
    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(0);
    const {y} = useScroll(scrollRef);

    const [response, doFetch] = useAsyncFn(async () => {
        const result = await (await fetch(`${url}/?limit=${toLimit}&skip=${skip}`)).json();
        setSkip(value => value += parseInt(toSkip));

        if(result[target].length < toLimit) setHasMore(false);

        return result;
    }, [skip]);

    const tryFetching = () => {
        if(response.loading || !hasMore) return;
        doFetch();
    };

    const throttledBottomScroll = useThrottleFn((currentY) => {
        return Math.ceil(currentY + scrollRef.current.clientHeight) >= (scrollRef.current.scrollHeight - 150)?true:false;
    }, 400, [y]);

    useEffect(() => {
        if(throttledBottomScroll) tryFetching();
    }, [throttledBottomScroll]);

    return <div ref={scrollRef} id="infinite-scroll-page" className="h-full overflow-y-auto">
        <ProductsList response={response.value} />
        { hasMore && <div className="p-4 text-center">
            <span className="loader"></span>
        </div> }
    </div>
};