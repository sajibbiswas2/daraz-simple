
import './Product.css'
const Product = (props) => {
    const { name, img, price, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;