
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}

                        ></Product>)
                }
            </div>
            <div>
                <h2>storeg container</h2>
            </div>
        </div>
    );
};

export default Shop;