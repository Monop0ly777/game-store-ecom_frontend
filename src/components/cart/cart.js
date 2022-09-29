import React from 'react';
import './cart.css'
import {useSelector} from "react-redux";
import CartItems from "./cart-items";

const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)
    return (
        <div className='cart-menu'>
            <div className="cart-menu__games-list">
                {
                    items.map(game => (
                        <CartItems {...game}/>

                    ))
                }
            </div>
                {items.length === 0 ? <p style={{marginLeft: '90px', marginTop:'-10px', fontSize:'20px'}}>Корзина пустая(</p>:
                    (
                        <div className='cart-menu__price'>
                            <p>{totalPrice} грн</p>
                            <button>Оформить заказ</button>
                        </div>
                    )
                }
            </div>
    );
};

export default Cart;
