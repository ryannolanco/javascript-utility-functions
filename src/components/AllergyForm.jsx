import React from 'react';

const AllergyForm = ({ employeeInformation, setEmployeeInformation }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		setEmployeeInformation((prev) => ({ ...prev, [name]: value }));
	};

	const handleAllergyChange = (event) => {
		const allergy = event.target.value;
		const isChecked = event.target.checked;

		setEmployeeInformation((prev) => ({
			...prev,
			allergies: isChecked
				? [...prev.allergies, allergy] // Add allergy if checked
				: prev.allergies.filter((item) => item !== allergy), // Remove allergy if unchecked
		}));
	};

	return (
		<form className="employee-form">
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={employeeInformation.name}
					onChange={handleChange}
				/>
			</label>
			<div>
				<label>Allergies:</label>
				{ingredients.map((ingredient, index) => (
					<div key={index}>
						<input
							type="checkbox"
							checked={employeeInformation.allergies.includes(ingredient)}
							id={index}
							name="allergies"
							value={ingredient}
							onChange={handleAllergyChange}
						/>
						<label htmlFor={index}>{ingredient}</label>
					</div>
				))}
			</div>
		</form>
	);
};

export default AllergyForm;
