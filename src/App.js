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

  getProductCount(){
    const {products} = this.state;
    let cnt = 0;
    products.forEach((product) =>{
      cnt += product.qty;
    })
    return cnt;
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
