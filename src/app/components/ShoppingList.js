import { plantList } from '../datas/plantList'
import '../components-style/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
                <p>Catégories :</p>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
            <br></br>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {plant.isBestSale && <span>🔥</span>}
                        <br/>
                        {plant.category}
                        {plant.isSpecialOffer && <div className='lmj-sales'>En soldes</div>}
                        </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList