import React,{createContext, useState} from "react";

const ProductContext = createContext({
    products:[],
    
    addProducts:()=>{},
    removeProducts:()=>{}
});

export const ProductContextProvider =({children})=>{
   const loactProduct=JSON.parse(localStorage.getItem('products'));
    const [productList,addProductList]= useState((loactProduct?loactProduct:[]));

    const addProductsHandler =(data)=>{
        addProductList([...productList,data]);
        localStorage.setItem('products',[...addProductList,data])
    }
    const removeProductsHandler =(id)=>{

    }

    const ProductCtx ={
        products:productList,
    
        addProducts:()=>{},
        removeProducts:()=>{}
    }

    return (
        <ProductContext.Provider value={ProductCtx}>{children}</ProductContext.Provider>

    )
};

export default ProductContext;

