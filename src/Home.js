import React from 'react'
import {Link} from 'react-router-dom'

function Home (){
	return (
		<div className='home-page'>
			<h3>Welcome to the number fact Generator!</h3>
			<div><Link to="/play"><i>Click here to explore</i></Link></div>
		</div>
	)
}

export default Home;