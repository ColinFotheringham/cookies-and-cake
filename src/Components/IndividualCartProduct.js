import React from 'react'
import {auth,fs} from './db/DBConfig'

export const IndividualCartProduct = ({cartProduct,cartProductIncrease,cartProductDecrease}) => {

    const handleCartProductIncrease=()=>{
        cartProductIncrease(cartProduct);
    }

    const handleCartProductDecrease=()=>{
        cartProductDecrease(cartProduct);
    }

    const handleCartProductDelete=()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).delete().then(()=>{
                    console.log('successfully deleted');
                })
            }
        })
    }
    
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={cartProduct['Image-Dest']} alt="product-img"/>
            </div>
            <div className='product-text title'>{cartProduct['Item-Name']}</div>
            <div className='product-text description'>{cartProduct['Item-Description']}</div>
            {/* <div className='product-text price'>$ {cartProduct.price}</div> */}
            <span>Quantity</span>
            <div className='product-text quantity-box'>
                <div className='action-btns minus' onClick={handleCartProductDecrease} >
                <img src="Menu-Pictures/minus.png"/>
                </div>                
                <div>{cartProduct.qty}</div>               
                <div className='action-btns plus' onClick={handleCartProductIncrease}>
                <img src="Menu-Pictures/plus.png"/>
                </div>
            </div>
            <div className='product-text cart-price'>$ {cartProduct.TotalProductPrice}</div>
            <div className='btn btn-danger btn-md cart-btn' onClick={handleCartProductDelete} >DELETE</div>            
        </div>
    )
}