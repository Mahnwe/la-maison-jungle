'use client'
import { useState, useEffect } from 'react'
import '../components-style/Cart.css'

function Cart({cart, updateCart}) {
	
		const [isOpen, setIsOpen] = useState(false)
		const total = cart.reduce(
			(acc, plantType) => acc + plantType.amount * plantType.price,
			0
		)
	
		return isOpen ? (
			<div className='lmj-cart'>
				<button className='lmj-cart-toggle-button' onClick= {() => setIsOpen(false)}>Fermer</button>
				{cart.length > 0 ? (
				<div>
					<h2 className='lmj-cart-title'>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3 className='lmj-cart-total'>Total : {total}€</h3>
					<button className='lmj-cart-clear' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div className='lmj-cart-empty'>Votre panier est vide</div>
			)}
			</div>
		) : (
			<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
			</div>
		)
}

export default Cart
