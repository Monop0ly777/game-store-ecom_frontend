import React from 'react';
import './cart-items.css'
import {ImCross} from "react-icons/im";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/reducer";

const CartItems = (game) => {
    const dispatch = useDispatch()
    return (
        <div className='cart-items'>
            <div className="cart-item">
                <div>{game.title}</div>
                <div>{game.price}грн</div>
                <ImCross size={12} className='cart-items__icon'
                onClick={()=> dispatch(deleteItemFromCart(game.id))}
                />
            </div>
            <hr className='divider'/>
        </div>
    );
};

export default CartItems;
