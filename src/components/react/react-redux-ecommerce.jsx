import { useState, useRef } from 'react';
import { Provider } from 'react-redux';

import store from '../../js/react/stores/ecommerce';
import { useGetProductsQuery } from '../../js/react/stores/ecommerce/api/index';

import ProductsList from './layouts/products-list';
import ActionScroller from './parts/action-scroller';

const StoreComponent = () => {
    const appContainer = useRef(null);
    const [skip, setSkip] = useState(0);
    const { data, isLoading, isFetching } = useGetProductsQuery(skip);

    const tryFetch = (skip, isFetching) => {
        if(isFetching) return;
        setSkip(skip + 5);
    }

    return <div ref={appContainer} id="app-container" className="h-full overflow-y-auto">
        <ActionScroller target={appContainer} action={() => tryFetch(skip, isFetching)} />
        { !isLoading && <ProductsList items={data.products} /> }
    </div>
}

export default () => {
    return <div id="app" className='h-full'>
        <Provider store={store}>
            <StoreComponent />
        </Provider>
    </div>
}