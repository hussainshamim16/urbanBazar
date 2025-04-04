import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/home/home'
import About from '../components/About/About'
import Product from '../components/products/product'
import Header from '../components/header/Header'
import Single from '../components/singlePages/single'
import Checkout from '../components/CheckOUt/Checkout'

const Reader = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Product />} />
                    <Route path="/product/:id" element={<Single />} />
                    <Route path="/checkout/:id" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Reader