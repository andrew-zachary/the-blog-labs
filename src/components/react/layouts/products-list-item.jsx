export default ({product}) => {
    return <li className="font-ssp mt-12">
        <h1 className="text-6xl font-bold font-mont mt-4">{product.title}</h1>
        <h2 className="text-4xl mt-4">{product.description}</h2>
        <ul className="product-details text-4xl font-bold mt-4">
            <li>$ {product.price}</li>
            <li>{product.stock}</li>
        </ul>
    </li>
}