import { useState, useRef } from 'react';
import { Provider } from 'react-redux';

import store from '../../js/react/stores/ecommerce';
import { useGetProductsQuery } from '../../js/react/stores/ecommerce/api/index';

import ProductsList from './layouts/products-list';
import ActionScroller from './parts/action-scroller';
import Loader from './parts/loader';

const StoreComponent = () => {
    const appContainer = useRef(null);
    const [skip, setSkip] = useState(95);
    const { data, isLoading, isFetching } = useGetProductsQuery(skip);

    const tryFetch = (skip, isFetching, dataLength) => {
        if(isFetching || dataLength === 0) return;
        setSkip(skip + 5);
    }

    return <div ref={appContainer} id="app-container" className="h-full overflow-y-auto">
        <ActionScroller target={appContainer} action={() => tryFetch(skip, isFetching, data.products.length)} />
        {
            !isLoading && <>
                <ProductsList items={data.products} />
                <div className="p-4 overflow-hidden text-center">
                    <Loader width="45" height="45" hiddeWhenZero={data.products.length} />
                </div>
            </>
        }
    </div>
}

export default () => {
    return <div id="app" className='h-full'>
        <Provider store={store}>
            <StoreComponent />
        </Provider>
    </div>
}