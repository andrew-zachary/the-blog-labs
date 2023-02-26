import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import store from '../../js/react/stores/ecommerce';
import { useGetProductsQuery } from '../../js/react/stores/ecommerce/api/index';

import ProductsListItem from './layouts/products-list-item';

const StoreComponent = () => {
    const { data, isLoading } = useGetProductsQuery();

    return <div id="app-container" className="p-4">
        <ul>
            {
                !isLoading && data.products.map((product) => {
                    return <ProductsListItem product={product} />
                })
            }
        </ul>
    </div>
}

export default () => {
    return <div id="app">
        <StrictMode>
            <Provider store={store}>
                <StoreComponent />
            </Provider>
        </StrictMode>
    </div>
}