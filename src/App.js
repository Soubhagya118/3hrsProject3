import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import {ProductContextProvider} from './Componets/Store/ProductContext';


function App() {

  return (<>
  <ProductContextProvider>
  <section>
  <Header/>
    <Outlet/>
  </section>
  <div>
    
  </div>
  </ProductContextProvider>
  
 
  </>
  );
}

export default App;
