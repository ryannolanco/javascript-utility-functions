import { useState } from 'react';
import { addEmployeeAllergies } from './functions/storeInLocalStorage';
let testData1 = {
	name: 'ryan',
	allergies: ['chicken', 'rice', 'apples'],
};

addEmployeeAllergies(testData1);

let testInfo1 = localStorage.getItem('employeeAllergies');
// localStorage.clear();
// console.log(localStorage);

function App() {
	return <>{<div>{testInfo1}</div>}</>;
}

export default App;
