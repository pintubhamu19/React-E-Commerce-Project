
import React from "react";
import './RelatedProducts.css'
// import data_product from  '../../data/products';
import data_product from '../Assests/data'
import Item from "../Item/Item";
const RelatedProducts = () => {
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-item">
                {data_product.map((item,i) => {
                    return <Item 
                    key={i}
                    id={item.id} name={item.name} 
                    image={item.image}
                    //  new_price={item.new_price} old_price={item.old_price}
                    new_price={item.new_price ? <span style={{fontWeight:800}}>{item.new_price}</span>:null}
                    old_price={item.old_price ? <span style={{textDecoration: 'line-through' , fontWeight:'50' }}>{item.old_price}</span> : null}
                  
                    />
                })}
            </div>
        </div>
    );
}
export default RelatedProducts;

