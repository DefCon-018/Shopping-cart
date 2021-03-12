import React from 'react';
import CartItem from './CartItem'

const Cart = props =>{
    const {products, onDecreaseQty, onIncreaseQty, onDeleteProduct} = props;
    return(
        <div>
            {products.map((product) => {
                return <CartItem product = {product} 
                                    key= {product.id} 
                                    func = {function f(){return "hello"}}
                                    onIncreaseQty = {onIncreaseQty}
                                    onDecreaseQty = {onDecreaseQty}
                                    onDeleteProduct = {onDeleteProduct}          
                        />
            })}
        </div>
    )
}

export default Cart;