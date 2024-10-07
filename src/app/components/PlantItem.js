'use client'

import CareScale from "./CareScale";
import '../components-style/PlantItem.css'

function PlantItem({id, cover, name, water, light}) 
{
    return (
            <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			    {name}
                <div onClick = { () => clickOnWaterCare(water)}>
                    <CareScale careType='water' scaleValue={water} />
                </div>
                <div onClick = { () => clickOnLightCare(light)}>
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        )
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function clickOnWaterCare(water) {
    switch(water) {
        case 1:
            return alert(`Cette plante nécessite peu d'arrosage`)
        case 2:
            return alert(`Cette plante nécessite un arrosage modéré`)
        case 3:
            return alert(`Cette plante nécessite beaucoup d'arrosage`)
    }
}

function clickOnLightCare(light) {
    switch(light) {
        case 1:
            return alert(`Cette plante nécessite peu de lumière`)
        case 2:
            return alert(`Cette plante nécessite modérement de la lumière`)
        case 3:
            return alert(`Cette plante nécessite beaucoup de lumière`)
    }
}

export default PlantItem