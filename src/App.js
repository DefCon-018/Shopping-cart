import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
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
    // console.log(total);
    return total;
  }

  componentDidMount(){
    console.log("Component did mount")
    firebase
    .firestore()
    .collection('Products')
    .onSnapshot((snapshot)=>{
      // console.log(snapshot);
      let products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      console.log(products);
      this.setState({
        products,
        loading: false
      })
    })
  }

  // componentDidUpdate(){
  //   // console.log('Component did update');
  // }

  render(){
    // console.log("Render");
    const {products, loading} = this.state;
    return (
      <div className="App" style= {styles.container}>
        <Navbar count= {this.getProductCount()}/>
        <Cart products= {products}
              onIncreaseQty = {this.handleIncreaseQuantity}
              onDecreaseQty = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}          
        />
        {loading && <h1>Loading Products...</h1>}
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
