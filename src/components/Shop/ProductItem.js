import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice/cartSlice';





const ProductItem = (props) => {
  const dispatch = useDispatch();

  const {  title, price, description, id } = props;

  const addToCartHandler = (props) =>{
    // const item = { id:props.id, title:props.title, price:props.price, desc:props.description };


    dispatch(cartActions.addToCart({
      id , title , price,
    }));
    }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
