import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    increaseQuantity(){
        console.log(this.state);
        // this.state.qty += 1;
        
        // Method 1
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // Method 2
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        })
    }
    decreaseQuantity(){
        this.setState((prevState)=>{
           if(prevState.qty > 0){
                return {
                    qty: prevState.qty - 1
                }
           }
        })
    }
    render(){
        const {title, price, qty} = this.state;
        return(
            <div className= "cart-item">
                <div className= "left-block">
                    <img style={styles.image}/>
                </div>
                <div className= "right-block">
                    <div className= "details">
                        <div>{this.state.title}</div>
                        <div style= {{color: '#777' }}>Rs: {price}</div>
                        <div style= {{color: '#777'}}>Qty: {qty}</div>
                    </div>
                    <div className= "cart-item-action">
                        <img className="action-icons" 
                             src= "https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1615435384~hmac=6dcb8db865768cab5785929207db546f"
                             onClick= {this.increaseQuantity} >
                        </img>
                        <img className= "action-icons" 
                            src= "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615435219~hmac=353a916b541a15a8b43a52ca0cc2e100"
                            onClick= {this.decreaseQuantity} >
                        </img>
                        <img className= "action-icons" src= "https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1615435441~hmac=36322956844b8ddf85f18d043e6047ef"></img>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        width: 110,
        height: 110,
        padding: 20
    }
}

export default CartItem;