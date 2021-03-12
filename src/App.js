import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [  
      {
            title: 'Mobile phone',
            price: 10000,
            qty: 1,
            img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
            id: 1
        },
        {
            title: 'Watch',
            price: 100,
            qty: 1,
            img: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1248&q=80',
            id: 2
        },
        {
            title: 'Laptop',
            price: 99999,
            qty: 1,
            img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
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

  getProductCount(){
    const {products} = this.state;
    let cnt = 0;
    products.forEach((product) =>{
      cnt += product.qty;
    })
    return cnt;
  }

  getTotalPrice(){
    const {products} = this.state;
    let total = 0;
    products.forEach((product) =>{
      total += product.qty * product.price
    })
    return total;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App" style= {styles.container}>
        <Navbar count= {this.getProductCount()}/>
        <Cart products= {products}
              onIncreaseQty = {this.handleIncreaseQuantity}
              onDecreaseQty = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}          
        />
        <div style= {{margin: '10px'}}>
          <span style= {{fontWeight: 700, fontSize: '1.3rem'}}>TOTAL</span> : <span style= {{fontWeight: 500, fontSize: '1.3rem'}}>{this.getTotalPrice()}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 0,
    padding: 0
  }
}

export default App;
