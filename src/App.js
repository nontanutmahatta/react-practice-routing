import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={ProductList} />
          
                    
        </Routes>
      </div>
    </Router>
  );
}


export default App;