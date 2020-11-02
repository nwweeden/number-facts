import React, {useState} from 'react'

function GameForm({addNumberFunFact}){

	const initialData = {number: 'random', category: 'trivia'}
	
	const [formData, setFormData] = useState(initialData)

	function handleChange(evt){
		const {name, value} = evt.target;
		setFormData(data => ({
			...data, [name]: value
		}))
	}

	function handleSubmit(evt){
		evt.preventDefault();
		addNumberFunFact(formData)
		setFormData(initialData);
	}
	
	return(
		<form>
			<div className='row'>
				<div className='form-group'>
					<label htmlFor='number'><b>Input a Number:</b></label>
					<input
							onChange={handleChange}
							className='form-control'
							value={formData.number}
							name='number'
							id='numberFacts-number'
							placeholder='random'
					/>
				</div>
			</div>

			<div className='row'>
				<div className='form-group'>
				<label htmlFor='category'><b>Pick a Category:</b></label>
				<select
						onChange={handleChange}
						value={formData.category}
						name='category' id='numberFacts-category'
						className='form-control'
						>
							
							<option value={'trivia'}>Trivia</option>
							<option value={'year'}>Year</option>
							<option value={'date'}>Date</option>
							<option value={'math'}>Math</option>
					</select>
				</div>
			</div>

			<button onClick={handleSubmit} className='btn btn-primary'>Find a fun Fact!</button>

		</form>
	)
}

export default GameForm