/**
 * An example for a possible future api
 * @minimo_io
 */

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = (event) => {
	// console.log(event.cookies.get('bztc'));

	// Simple Param Auth (not recommended, can be logged or indexed)
	// const key = event.url.searchParams.get('key');
	// if (key !== 'givemethedata') {
	// 	error(401, 'Incorrect key');
	// }

	// Bearer Token Auth (recommended)
	// const bearerToken = event.request.headers.get('Authorization');
	// if (!bearerToken) throw error(401, 'No Bearer Token Provided');
	// const key = bearerToken.split(' ')[1]; // Removes the 'Bearer' Prefix
	// if (!key) throw error(401, 'Incorrect Key');

	// Ideally do the authorization checks in hooks
	// https://sveltekit.io/blog/sveltekit-api

	const companyDetails = {
		name: 'Brainwaves Newsletter',
		employees: [
			{ name: 'John Doe', salary: 45000 },
			{ name: 'Jane Larkin', salary: 42000 },
			{ name: 'Jim Salmon', salary: 38000 }
		],
		customers: [
			{ name: 'Bills Toys Inc', income: 30000 },
			{ name: 'Silly Co', income: 25000 },
			{ name: 'Rox R Us', income: 20000 }
		]
	};

	return json(companyDetails);
};

// Would be called like this:
// -------------------------
// async function getCompanyDetails() {
// 	const response = await fetch('/company-details', {
// 		method: 'GET',
// 		headers: {
// 			'content-type': 'application/json'
// 		}
// 	});

// 	const companyDetails = await response.json(); // Do something with companyDetails...
// }

// For a POSTs / CRUD request
// --------------------------
// import { json } from '@sveltejs/kit';
// import { addCustomerToDb } from '$lib/db.ts';

// export async function POST(event) {
// 	const { name, income } = await event.request.json();
// 	const addedCustomer = await addCustomerToDb(name, income);

// 	return json(addedCustomer);
// }

// Which would be called like this:
// --------------------------------
// async function addCustomer() {
// 	const response = await fetch('/add-customer', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			name: 'Mike McKay',
// 			income: '200000'
// 		}),
// 		headers: {
// 			'content-type': 'application/json'
// 		}
// 	});

// 	const addedCustomer = await response.json(); // Notify of the successful addition...
// }
