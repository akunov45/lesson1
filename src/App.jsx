import React, {useState} from 'react';
import Header from "./Header.jsx";
import Product from "./pages/product/Product.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
// component 2 vida
// 1 function component
// 2 class component

const App = () => {
  const [state, setState] = useState(10)
  const [text] = useState("Kill Header")

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Header/>} />
            <Route path="product/:id" element={<Product/>} />
          </Routes>
        </BrowserRouter>

      </div>
  );
};

export default App;