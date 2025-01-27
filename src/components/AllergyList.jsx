import React from 'react';

const AllergyList = () => {
	return (
		<div>
			<ul>
				{ingredients.map((ingredient) => (
					<li>{ingredient}</li>
				))}
			</ul>
		</div>
	);
};

export default AllergyList;
