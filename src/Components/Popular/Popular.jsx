
import React from "react";
import './Popular.css'
import data_product from '../Assests/data'
import Item from "../Item/Item";
import all_product from "../Assests/all_product";
export default function Popular(){
    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map ((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} 
                    image={item.image} 
                    new_price={item.new_price ? <span style={{fontWeight:700}}>{item.new_price}</span>:null}
                    old_price={item.old_price ? <span style={{textDecoration: 'line-through'}}>{item.old_price}</span> : null} 
                    // old_price={ style={{...textDecoration:-'line-through'}}item.old_price} 
                    />
                })}
            </div>
        </div>
    );
}