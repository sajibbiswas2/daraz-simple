
import './Product.css'
const Product = (props) => {

    const { name, img, price, stock } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-information'>
                <h2 className='product-name'>Name:{name}</h2>
                <p>Price:${price}</p>
                <p>Stock{stock}</p>
            </div>
            <button onClick={() => handeladdtocart(props.product)} className='btn-cart'>Add to Cart</button>
        </div >
    );
};

export default Product;