'use client'
import {useState} from 'react'
import '../components-style/Cart.css'

function Cart({cart, updateCart}) {
	
		const [isOpen, setIsOpen] = useState(false)
		var total = cart.reduce(
			(acc, plantType) => acc + plantType.amount * plantType.price,
			0
		)

function deleteInCart(amount, index, name, price) 
{
	const deletedPlant = [...cart]
		if (amount > 1) 
		{
			if (cart.length == 1) {
				updateCart([
					{ name, price, amount: amount - 1 }
				])
			}
			if (cart.length > 1) {
				const cartFilteredCurrentPlant = cart.filter(
					(plant) => plant.name !== name
				)
				updateCart([...cartFilteredCurrentPlant,
					{ name, price, amount: amount - 1 }
				])
			}
		}
		if (amount == 1) 
		{
			//console.log(cart.length)
			if (cart.length > 1) 
			{
				deletedPlant.splice(index, 1)
				updateCart(deletedPlant, total -= price)
			}
			else if (cart.length == 1)
				{
					//console.log(cart.length)
					updateCart([], total -= price)
				}
		}
}
	
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
								<button className='lmj-delete-button' width={16} height={16} onClick={() => deleteInCart(amount, index, name, price)}>
								<img src="assets/remove.png" alt='supprimer' width={16} height={16}/>
								</button>
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
