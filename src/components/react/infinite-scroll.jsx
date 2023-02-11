import { useRef, useState } from "react";
import { useScroll, useDebounce, useAsyncFn } from "react-use";

import ProductsList from './layouts/products-list';

export default ({url}) => {
    const [skip, setSkip] = useState(0);

    const [response, doFetch] = useAsyncFn(async () => {
        const result = await (await fetch(`${url}/?limit=5&skip=${skip}`)).json();
        setSkip(value => value += 5);
        return result;
    }, [skip]);

    return <div>
        <div>
            <button className="text-4xl" onClick={() => doFetch()}>load</button>
        </div>
        <ProductsList response={response.value} />
    </div>
};