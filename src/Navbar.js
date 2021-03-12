import React from 'react';

const Navbar = props=>{
    return (
        <div style= {styles.nav}>
            <div></div>
            <div style= {styles.icons}>
                <img style= {styles.image} src= "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1615524982~hmac=c79130887a4d2aded532852209cf54b6"></img>
                <span style= {styles.span}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 40,
        width: 40,
    },
    nav: {
        margin: 0,
        padding: 0,
        height: 60,
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        padding: 10,
        margin: 12,
        position: 'relative'
    },
    span: {
        padding: '3px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 3,
        right: 2
    }
}
export default Navbar;