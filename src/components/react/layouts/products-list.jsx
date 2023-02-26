import { useEffect, useState } from "react";

import ProductsListItem from "./products-list-item";

export default ({items}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(items) setProducts(value => value.concat(items));
    }, [items]);

    return <ul className="p-4">
        {
            products.map((product) => {
                return <ProductsListItem key={product.id} product={product} />
            })
        }
    </ul>
}