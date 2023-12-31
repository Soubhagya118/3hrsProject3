import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './Componets/Cart/Cart'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Products from './Componets/Products/Products';

let routers = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/cart',
        element:<Cart/>
      },{
        path:'/products',
        element:<Products/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routers}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
