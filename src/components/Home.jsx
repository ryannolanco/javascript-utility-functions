import React, { useEffect, useState } from 'react';
import AllergyList from './AllergyList';
import AllergyForm from './AllergyForm';
import { addEmployeeAllergies } from '../functions/storeInLocalStorage';

const Home = () => {
	const key = 'allergies';
	const [employeeInformation, setEmployeeInformation] = useState({});
	const [allergies, setAllergies] = useState([]);

	// useEffect(() => {
	// 	const employeeData = addEmployeeAllergies(key);
	// }, []);

	return (
		<>
			<AllergyForm
				employeeInformation={employeeInformation}
				setEmployeeInformation={setEmployeeInformation}
			/>
			<AllergyList />
		</>
	);
};

export default Home;
