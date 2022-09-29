import React from 'react';
import './home-page.css'
import ItemsList from "../../components/items-list/items-list";

const HomePage = (props) => {
    return (
        <div className="home-page">
            <ItemsList/>
        </div>
    )
};

export default HomePage;