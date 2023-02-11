import { useRef, useState } from "react";
import { useScroll, useDebounce, useAsyncFn } from "react-use";

import ProductsList from './layouts/products-list';

export default ({url}) => {
    const [canFetch, setCanFetch] = useState(false);
    const [skip, setSkip] = useState(0);

    const [response, doFetch] = useAsyncFn(async () => {
        setCanFetch(false);
        const result = await (await fetch(`${url}/?limit=5&skip=${skip}`)).json();
        setSkip(value => value += 5);
        return result;
    }, [skip]);

    useDebounce(() => {
        if(canFetch) doFetch();
    }, 2000, [canFetch]);

    return <div>
        <div>
            <button className="text-4xl" onClick={() => setCanFetch(true)}>load</button>
        </div>
        <ProductsList response={response.value} />
    </div>
};