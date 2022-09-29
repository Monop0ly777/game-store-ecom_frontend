import React from 'react';
import './dropdown.css'
import {FiPlusCircle} from "react-icons/fi";
import {MdOutlineBookmarkBorder} from "react-icons/md";
import {BiExit} from "react-icons/bi";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <p>Ваш баланс: 0 грн</p>
            <p><FiPlusCircle size={15} className='dropdown__icon'/> Пополнить баланс</p>
            <p><MdOutlineBookmarkBorder size={15} className='dropdown__icon'/>Мои покупки</p>
            <p><BiExit size={15} className='dropdown__icon'/>Выйти</p>
        </div>
    );
};

export default Dropdown;
