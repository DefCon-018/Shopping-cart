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
   handleIncreaseQuantity = (product) => {
    //    console.log("Product", product);
       const {products} = this.state;
       let index = products.indexOf(product);
       products[index].qty = products[index].qty + 1;
       this.setState({
           products: products
       })
   }
   handleDecreaseQuantity = (product) => {
       const {products} = this.state;
       let index = products.indexOf(product);
       if(products[index].qty > 0){
           products[index].qty -= 1;
       }
       this.setState({
           products
       })
   }
   handleDeleteProduct = (id)=>{
       const {products} = this.state;
       const items = products.filter((item)=> item.id !== id);
       this.setState({
           products : items
       })
   }
    render(){
        const {products} = this.state;
        return(
            <div>
                {products.map((product) => {
                    return <CartItem product = {product} 
                                     key= {product.id} 
                                     func = {function f(){return "hello"}}
                                     onIncreaseQty = {this.handleIncreaseQuantity}
                                     onDecreaseQty = {this.handleDecreaseQuantity}
                                     onDeleteProduct = {this.handleDeleteProduct}          
                           />
                })}
            </div>
        )
    }
}

export default Cart;