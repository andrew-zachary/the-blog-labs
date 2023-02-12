import { useRef, useState } from "react";
import { useAsyncFn } from "react-use";

import ProductsList from './layouts/products-list';
import ActionScroller from "./parts/action-scroller";

export default ({url, target, toLimit, toSkip}) => {
    const scrollRef = useRef(null);

    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(0);

    const [response, doFetch] = useAsyncFn(async () => {
        const result = await (await fetch(`${url}/?limit=${toLimit}&skip=${skip}`)).json();
        setSkip(value => value += parseInt(toSkip));

        if(result[target].length < toLimit) setHasMore(false);

        return result;
    }, [skip]);

    const tryFetching = (loading, currentHasMore) => {
        if(loading || !currentHasMore) return;
        doFetch();
    };

    return <div ref={scrollRef} id="infinite-scroll-page" className="h-full overflow-y-auto">
        <ActionScroller target={scrollRef} action={() => tryFetching(response.loading, hasMore)} />
        <ProductsList response={response.value} />
        { hasMore && <div className="p-4 text-center">
            <span className="loader"></span>
        </div> }
    </div>
};