import { range } from './utils/index.mjs';

const compoundOneYear = (prevAmount, interestRate, rate = 1) => {
	return range(rate).reduce((amount) => {
		return amount + (amount * interestRate) / rate;
	}, prevAmount);
};

const compoundYears = (prevAmount, interestRate, years, rate = 1) => {
	return range(years).reduce((amount) => {
		return compoundOneYear(amount, interestRate, rate);
	}, prevAmount);
};

(() => {
	const f = process.argv[2] || 'simple';
	let response = 'no calculations made';
	switch (f) {
		case 'simple':
			response = compoundYears(
				parseFloat(process.argv[3]) || 100, // starting amount
				parseFloat(process.argv[4]) || 0.05, // interest rate
				parseFloat(process.argv[5]) || 10, // number of years
				parseFloat(process.argv[6]) || 12 // rate of acc
			);
	}
	console.log(
		parseFloat(response) ? parseFloat(response.toFixed(2)) : response
	);
})();
