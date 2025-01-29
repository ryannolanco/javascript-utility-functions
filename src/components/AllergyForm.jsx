import React, { useState } from 'react';
import ingredients from '../db/data';

const AllergyForm = () => {
	const [employeeInformation, setEmployeeInformation] = useState({
		name: '',
		allergies: [],
	});

	const { name, allergies } = employeeInformation; // Destructure for cleaner JSX

	const handleChange = (event) => {
		const { name, value } = event.target;
		setEmployeeInformation((prev) => ({ ...prev, [name]: value }));
	};

	const handleAllergyChange = (event) => {
		const { value, checked } = event.target;

		setEmployeeInformation((prev) => ({
			...prev,
			allergies: checked
				? [...(prev.allergies || []), value] // Ensure it's always an array and add new allergy
				: prev.allergies.filter((item) => item !== value), // Remove if unchecked
		}));
	};

	return (
		<form className="employee-form">
			<label>
				Name:
				<input type="text" name="name" value={name} onChange={handleChange} />
			</label>

			<div>
				<label>Allergies:</label>
				{ingredients.map((ingredient, index) => (
					<div key={index}>
						<input
							type="checkbox"
							checked={allergies.includes(ingredient)}
							id={`allergy-${index}`}
							name="allergies"
							value={ingredient}
							onChange={handleAllergyChange}
						/>
						<label htmlFor={`allergy-${index}`}>{ingredient}</label>
					</div>
				))}
			</div>
		</form>
	);
};

export default AllergyForm;
