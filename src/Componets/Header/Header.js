import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{width:'100%',backgroundColor:'black',color:'white'}}>
    <ul style={{listStyle:'none',display:'flex',margin:'auto',height:'30px',padding:'20px',gap:'20%'}}>
    <Link to='/' style={{textDecoration:'none',color:'white'}}><li>Home</li></Link>
    <Link to='/cart' style={{textDecoration:'none',color:'white'}}><li>Cart</li></Link>
    <Link to='/products' style={{textDecoration:'none',color:'white'}}><li>Products</li></Link>


    </ul>
    </div>
  )
}

export default Header
