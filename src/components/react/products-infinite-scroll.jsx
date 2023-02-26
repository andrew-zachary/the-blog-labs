import { useRef } from "react";

import ProductsList from './layouts/products-list';
import ActionScroller from "./parts/action-scroller";
import usePaginator from "../../js/react/hooks/paginator";

export default ({url, target, perPage}) => {
    const scrollRef = useRef(null);
    const [state, doFetch, hasMore] = usePaginator(url, target, perPage);

    const tryFetching = (loading, currentHasMore) => {
        if(loading || !currentHasMore) return;
        doFetch();
    };

    return <div ref={scrollRef} id="infinite-scroll-page" className="h-full overflow-y-auto">
        <ActionScroller target={scrollRef} action={() => tryFetching(state.loading, hasMore)} />
        { state.value && <ProductsList response={state} /> }
        { hasMore && <div className="p-4 text-center">
            <span className="loader"></span>
        </div> }
    </div>
};