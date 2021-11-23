import React from 'react'

export const IndividualProduct = ({individualProduct, addToCart}) => {
    // console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }   
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct['Image-Dest']} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct['Item-Name']}</div>
            <div className='product-text description'>{individualProduct['Item-Description']}</div>
            <div className='product-text price'>$ {individualProduct['Item-Price']}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleAddToCart}>ADD TO CART</div>
        </div> 
    )
}