import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className= "cart-item">
                <div className= "left-block">
                    <img style={styles.image}/>
                </div>
                <div className= "right-block">
                    <div className= "details">
                        <div>Phone</div>
                        <div>Rs: 9999</div>
                        <div>Qty: 1</div>
                    </div>
                    <div className= "cart-actions">
                        <div className= "actions">

                        </div>
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
        backgroundColor: 'gray'
    }
}

export default CartItem;