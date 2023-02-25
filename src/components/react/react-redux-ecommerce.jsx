import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import store from '../../js/react-redux-ecommerce-store';
import { increment, decreament } from './slices/counter';

const StoreComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return <div id="app-container" className="overflow-hidden">
        <h1 className="text-center font-ssp font-regular text-8xl">{ count }</h1>
        <div className="flex justify-around">
            <button className="font-ssp font-regular text-8xl" onClick={() => dispatch({type: increment.type})}>increment</button>
            <button className="font-ssp font-regular text-8xl" onClick={() => dispatch({type: decreament.type})}>decrement</button>
        </div>
    </div>
}

export default () => {
    return <div id="app">
        <Provider store={store}>

            <StoreComponent />

        </Provider>
    </div>
}