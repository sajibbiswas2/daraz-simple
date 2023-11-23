
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handeladdtocart = (product) => {
        const newcart = [...cart, product]
        setCart(newcart)
        console.log(product)
    }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handeladdtocart={handeladdtocart}


                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;