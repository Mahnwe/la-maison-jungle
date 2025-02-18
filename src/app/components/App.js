'use client'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import React, {useState, useEffect} from 'react'
import '../components-style/App.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<link rel="icon" href="assets/leaf-logo.png" type="image/x-icon"></link>
			<Banner />
			<div className='lmj-layout-inner'>
			<Cart cart={cart} updateCart={updateCart} />
			<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />

		</div>
	)
}

export default App
