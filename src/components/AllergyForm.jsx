import React from 'react';

const ingredients = [
	'Vanilla',
	'Bread',
	'Zucchini',
	'Parsley',
	'Pork',
	'Basil',
	'Corn',
	'Chicken',
	'Onions',
	'Cucumber',
	'Tuna',
	'Mushrooms',
	'Salt',
	'Olive Oil',
	'Sugar',
	'Chili',
	'Pepper',
	'Spinach',
	'Flour',
	'Honey',
	'Cream',
	'Potatoes',
	'Garlic',
	'Paprika',
	'Lettuce',
	'Oregano',
	'Curry Powder',
	'Bacon',
	'Cheese',
	'Avocado',
	'Butter',
	'Rice',
	'Salmon',
	'Milk',
	'Shrimp',
	'Lamb',
	'Lime',
	'Beef',
	'Carrots',
	'Tomatoes',
	'Yogurt',
	'Eggs',
	'Beans',
	'Peas',
	'Chocolate',
	'Bell Peppers',
	'Pasta',
];

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
