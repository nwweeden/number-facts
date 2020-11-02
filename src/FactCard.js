import React from 'react'

function FactCard({number, fact, id, removeNumberFact}){

	function handleClick() {
		removeNumberFact(id)
	}

	return (
		<div className='card'>
			<h2 className='card-title'>{number} fact:</h2>
			<p className='card-text'>{fact}</p>
			<button onClick={handleClick} className='btn btn-danger'>Remove this fact</button>
		</div>
	)
}

export default FactCard