import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
   constructor(){
       super();
       this.state = {
          products: [  
          {
                title: 'Mobile phone',
                price: 10000,
                qty: 1,
                img: '',
                id: 1
            },
            {
                title: 'Watch',
                price: 100,
                qty: 1,
                img: '',
                id: 2
            },
            {
                title: 'Laptop',
                price: 99999,
                qty: 1,
                img: '',
                id: 3
            },
         ]
       }
   }
    render(){
        const {products} = this.state;
        return(
            <div>
                {products.map((product) => {
                    return <CartItem product = {product} key= {product.id} />
                })}
            </div>
        )
    }
}

export default Cart;