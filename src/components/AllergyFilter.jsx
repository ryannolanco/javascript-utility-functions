import React from 'react';
import ingredients from '../db/data.jsx';
import dishes from '../db/dishes.jsx';

const AllergyFilter = () => {
	return (
		<div>
			{' '}
			<div>
				<ul>
					{ingredients.map((ingredient) => (
						<li>{ingredient}</li>
					))}
				</ul>
				<ul>
					{dishes.map((dish) => (
						<li>{dish}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AllergyFilter;
