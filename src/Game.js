import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GameForm from './GameForm'
import FactCard from './FactCard'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const BASE_URL = 'http://numbersapi.com/'

function Game () {

	const [numberFacts, setNumberFacts] = useState([])

	async function addNumberFunFact({number, category}){
		const newFact = await getFact(number, category);
		setNumberFacts(nFacts => ([
			...nFacts, {fact: newFact.data, number: number, id: uuidv4()}
		]))
	}

	function removeNumberFact(id){
		setNumberFacts(facts => facts.filter(fact => fact.id !== id))
	}

	async function getFact(number, category){
		const fact = await axios({url: `${BASE_URL}${number}/${category}`})
		return fact;
	}

	const displayNumberFacts = numberFacts.map(nFact => {
		return <FactCard
							number={nFact.number}
							fact={nFact.fact}
							id={nFact.id}
							key={nFact.id} 
							removeNumberFact={removeNumberFact}/>
	})
	
	return (
		<div>
			<h3>Fill out the form to find facts</h3>
			<p><Link to='/'><i>Return to the welcome page</i></Link></p>
			<GameForm addNumberFunFact={addNumberFunFact}/>
			<div className ='card-container'>
				{displayNumberFacts}
			</div>
		</div>
	)
}

export default Game