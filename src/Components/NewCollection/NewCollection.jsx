
import React from "react";
import './NewCollection.css'
import new_collections from "../Assests/new_collections"
import Item from "../Item/Item";

export default function NewCollection(){
    return(
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item , i) => {
                    return <Item key={i}
                    id={item.id} name={item.name} 
                    image={item.image}
                    //  new_price={item.new_price} old_price={item.old_price}
                    new_price={item.new_price ? <span style={{fontWeight:800}}>{item.new_price}</span>:null}
                    // old_price={item.new_price ? <span style={{fontWeight:800}}>{item.new_price}</span>:null}
                    old_price={item.old_price ? <span style={{textDecoration: 'line-through' , fontWeight:'50' }}>{item.old_price}</span> : null} />
                })}
            </div>
        </div>
    );
}


