import { useEffect, useState } from "react";

export default ({response}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(response) setProducts(items => items.concat(response.products));
    }, [response]);

    return <ul>
        {
            products.map((product) => {
                return <li key={product.id}>{product.title}</li>
            })
        }
    </ul>
}