import { useEffect, useState } from "react";

import ProductsListItem from "./products-list-item";

export default ({response}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(response.value) setProducts(value => value.concat(response.value.products));
    }, [response.value]);

    return <ul className="p-4">
        {
            products.map((product) => {
                return <ProductsListItem key={product.id} product={product} />
            })
        }
    </ul>
}