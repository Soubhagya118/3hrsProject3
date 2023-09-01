import React,{useState,useRef, useContext} from 'react';
import ProductContext from '../Store/ProductContext';

const Products = () => {
    const productCtx = useContext(ProductContext);

    const shoeName =useRef();
    const price=useRef();
    const description =useRef();
    const sizeS =useRef();
    const sizeM=useRef();
    const sizeL=useRef();

    const DetailsHandler=()=>{
        const shoeName1=shoeName.current.value;
        const price1 = price.current.value;
        const description1 = description.current.value;
        const sizeS1 =sizeS.current.value;
        const sizeM1 = sizeM.current.value;
        const sizeL1 = sizeL.current.value;

        productCtx.addProducts({name:shoeName1,price:price1,description:description1,L:sizeL,M:sizeM,S:sizeS})

    }
  return (
    <div>
      <section>
        <form onSubmit={DetailsHandler} style={{display:'grid',gridRow:'auto',width:'500px',margin:'auto'}}>
            <label htmlFor='shoeName'>Shoe Name</label>
            <input id='shoeName' type='text' required ref={shoeName} />

            <label htmlFor='description'>Description</label>
            <input id='description' type='text' ref={description} required />

            <label htmlFor='price'>Price</label>
            <input id='price' type='number' ref={price} required/>

           <label htmlFor='s'>S</label>
            <input id='s' ref={sizeS}/>
           <label htmlFor='m'>M</label>
           <input id='m' ref={sizeM} />

           <label htmlFor='l'>L</label>
           <input id='l' ref={sizeL} />

           <button type='button'>Add Product</button>
        </form>
      </section>
    </div>
  )
}

export default Products
