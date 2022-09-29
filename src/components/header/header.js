import React, {useState} from 'react';
import './header.css'
import {BiCartAlt, BiUserCircle} from "react-icons/bi";
import Dropdown from "../dropdown/dropdown";
import Cart from "../cart/cart";
import {useSelector} from "react-redux";

const Header = (props) => {
    const [openProfile, setOpenProfile] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

    return (
        <div className='header'>
            <h2>Game Store</h2>
            <div className="cart-block">
                <p>{totalPrice ? (<p>{totalPrice} грн</p>): ''}</p>
                <BiCartAlt size={30} className='cart-block__icon'
                           onClick={() => setOpenCart(!openCart, setOpenProfile(false))}/>
                <BiUserCircle size={30} className='cart-block__icon'
                              onClick={() => setOpenProfile(!openProfile, setOpenCart(false))}/>
                {openProfile ? (
                    <Dropdown/>

                ) : (
                    ''
                )}
                {
                    openCart ? (
                        <Cart/>
                    ) : (
                        ''
                    )
                }
            </div>
        </div>
    );
}

export default Header;