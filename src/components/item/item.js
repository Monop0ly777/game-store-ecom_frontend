import React from 'react';
import './item.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";

const Item = (props) => {
    const {image, title, genres, price, id} = props
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === props.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(props.id))
        } else {
            dispatch(setItemInCart(props))
        }
    }
    return (
        <div className="item">
            <div className="item__img" style={{backgroundImage: `url('http://127.0.0.1:8000`+ image}}>
            </div>
            <div className="item__content">
                <h3>{title}</h3>
                <div className="genres">
                    {genres.map(data => (
                        <p>{data}</p>
                    ))}
                </div>
                <div className="price-button">
                    <p>{price} грн</p>
                    {
                        isItemInCart
                            ?
                            (<button onClick={handleClick}>Убрать из корзины</button>)
                            :
                            (<button onClick={handleClick}>В Корзину</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Item;