export default ({product}) => {
    return <li className="font-ssp mt-12">
        <h1 className="text-6xl font-bold font-mont capitalize mt-4">{product.title}</h1>
        <h2 className="text-4xl mt-4">{product.description}</h2>
        <ul className="product-details text-4xl mt-8">
            <li className="p-2">
                <div className="text-white bg-black py-4 px-8 inline-block">
                    <span className="font-bold">price:</span><span> $ {product.price}</span>
                </div>
            </li>
            <li className="p-2">
                <div className="text-white bg-black py-4 px-8 inline-block">
                    <span className="font-bold">instock:</span><span> {product.stock}</span>
                </div>
            </li>
        </ul>
    </li>
}