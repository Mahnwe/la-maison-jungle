import React from "react";
import styles from "../components-style/Banner.css";

const title = 'La maison jungle'

function Banner() {

	return ( <div className="lmj-banner">
				{<img src="assets/leaf-logo.png" alt='La maison jungle' className='lmj-logo' />}
				<h1>{title}</h1>
			</div>
	)
}

export default Banner
