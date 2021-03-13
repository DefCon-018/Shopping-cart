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
    this.db = firebase.firestore();
  }
  handleIncreaseQuantity = (product) => {
  //    console.log("Product", product);
      const {products} = this.state;
      let index = products.indexOf(product);
      // products[index].qty = products[index].qty + 1;
      // this.setState({
      //     products: products
      // })
      const docRef = this.db.collection('Products').doc(products[index].id);
      docRef.update({
        qty: products[index].qty + 1
      }).then(()=>{
        console.log('updated successfully');
      }).catch((err)=>{
        console.log("Error", err);
      })
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      let index = products.indexOf(product);
      // if(products[index].qty > 0){
      //     products[index].qty -= 1;
      // }
      // this.setState({
      //     products
      // })
      const docRef = this.db.collection('Products').doc(products[index].id);
      docRef.update({
        qty: products[index].qty - 1
      }).then(()=>{
        console.log("Updated successfully");
      }).catch((err)=>{
        console.log("Error", err);
      })
  }
  handleDeleteProduct = (id)=>{
      const {products} = this.state;
      // const items = products.filter((item)=> item.id !== id);
      // this.setState({
      //     products : items
      // })
      const docRef = this.db.collection('Products').doc(id);
      docRef
        .delete()
        .then(()=>{
          console.log('Deleted successfully');
        })
        .catch((err)=>{
          console.log("Error", err);
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

  addProduct = () =>{
    this.db
     .collection('Products')
     .add({
       img: 'https://tse1.mm.bing.net/th?id=OIP.p8kCCYK_W4RlSu2uoTbXTQHaKJ&pid=Api&P=0&w=300&h=300',
       price: 25000,
       qty: 2,
       title: 'Washing Machine'
     })
     .then((docRef)=>{
       console.log(docRef);
     })
     .catch((err)=>{
       console.log("Error", err);
     })
  }

  componentDidMount(){
    console.log("Component did mount")
    this.db
    .collection('Products')
    .orderBy('price', 'desc')
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
        <button onClick= {this.addProduct}>Add a Product</button>
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
