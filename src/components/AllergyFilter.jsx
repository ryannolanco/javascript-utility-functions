import React from 'react';
import ingredients from '../db/data.jsx';
import recipes from '../db/dishes.jsx';

const allergies = ['corn', 'basil', 'honey', 'lettuce', 'milk '];

function filterRecipes(allergies, recipes) {
	const normalizedAllergies = allergies.map((allergy) => allergy.toLowerCase());

	return recipes.filter((recipe) => {
		const normalizedIngredients = recipe.ingredients.map((ingredient) =>
			ingredient.toLowerCase()
		);

		return !normalizedAllergies.some((allergy) =>
			normalizedIngredients.includes(allergy)
		);
	});
}

const safeDishes = filterRecipes(allergies, recipes);

const AllergyFilter = () => {
	return (
		<div>
			{' '}
			<div>
				<p>{`All recipes amount ${recipes.length}`}</p>
				<p>{`Filtered recipes amount ${safeDishes.length}`}</p>
				<ul>
					{safeDishes.map((dish) => (
						<li>{dish.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AllergyFilter;
