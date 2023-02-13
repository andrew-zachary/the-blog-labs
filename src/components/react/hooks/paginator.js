import { useState } from "react";
import { useAsyncFn } from "react-use";

export default (url, target, perPage) => {
    const [hasMore, setHasMore] = useState(true);
    const [skip, setSkip] = useState(0);

    const [state, doFetch] = useAsyncFn(async () => {
        const result = await (await fetch(`${url}/?limit=${perPage}&skip=${skip}`)).json();
        setSkip(value => value += result[target].length);

        if(result[target].length < parseInt(perPage)) setHasMore(false);

        return result;
    }, [skip]);

    return [state, doFetch, hasMore];
}