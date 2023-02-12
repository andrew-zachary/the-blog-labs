import { useRef } from "react";

import ProductsList from './layouts/products-list';
import ActionScroller from "./parts/action-scroller";
import usePaginator from "./hooks/paginator";

export default ({url, target, perPage}) => {
    const scrollRef = useRef(null);
    const [response, doFetch, hasMore] = usePaginator(url, target, perPage);

    const tryFetching = (loading, currentHasMore) => {
        if(loading || !currentHasMore) return;
        doFetch();
    };

    return <div ref={scrollRef} id="infinite-scroll-page" className="h-full overflow-y-auto">
        <ActionScroller target={scrollRef} action={() => tryFetching(response.loading, hasMore)} />
        { response.value && <ProductsList response={response} /> }
        { hasMore && <div className="p-4 text-center">
            <span className="loader"></span>
        </div> }
    </div>
};