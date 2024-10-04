import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
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
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList