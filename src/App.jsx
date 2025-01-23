import { useState } from 'react';
import {
	addAllergiesOnly,
	readLocalStorage,
	deleteAllergy,
} from './functions/storeInLocalStorage';

const key = 'allergies';

let testData1 = ['tacos', 'eggs', 'sauce'];
let testData2 = ['tacos', 'eggs', 'mac and cheese'];

addAllergiesOnly(key, testData1);
addAllergiesOnly(key, testData2);

let testInfo1 = readLocalStorage(key).sort();

deleteAllergy(key, 'tacos');
let testInfo2 = readLocalStorage(key).sort();

function App() {
	return (
		<>
			<ul>
				{testInfo1.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
			<ul>
				{testInfo2.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default App;
