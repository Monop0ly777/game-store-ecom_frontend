import React, {useEffect, useState} from 'react';
import './items-list.css'
import Item from "../item/item";
import GAMES from "../../data";

const ItemsList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get_items/')
            .then(res => res.json())
            .then(res => setItems(res))
    }, [])

    return (
        <div className='items-list'>
            {items.map(data =>(
                <Item key={data.id} {...data}/>
            ))}

        </div>
    );
}

export default ItemsList;