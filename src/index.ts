export function convertKorToNum(input: string): number {
	const units: Record<string, number> = {
		십: 10,
		백: 100,
		천: 1000,
		만: 10000,
		억: 100000000,
		조: 1000000000000,
	};
	const numerals: Record<string, number> = {
		영: 0,
		일: 1,
		이: 2,
		삼: 3,
		사: 4,
		오: 5,
		육: 6,
		칠: 7,
		팔: 8,
		구: 9,
	};

	function parseSection(section: string): number {
		let result = 0;
		let currentNumber = 0;
		for (const char of section) {
			if (char in numerals) {
				currentNumber = numerals[char];
			} else if (char in units) {
				if (currentNumber === 0) currentNumber = 1;
				result += currentNumber * units[char];
				currentNumber = 0;
			} else if (!isNaN(parseInt(char))) {
				currentNumber = currentNumber * 10 + parseInt(char);
			}
		}
		return result + currentNumber;
	}

	const majorUnits = ['조', '억', '만'];
	let result = 0;
	let tempSection = '';
	let tempResult = 0;

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (majorUnits.includes(char)) {
			tempResult += parseSection(tempSection);
			if (tempResult === 0) tempResult = 1;
			result += tempResult * units[char];
			tempResult = 0;
			tempSection = '';
		} else if (char === '원' || char === ' ') {
			tempResult += parseSection(tempSection);
			result += tempResult;
			tempSection = '';
		} else {
			tempSection += char;
		}
	}

	if (tempSection) {
		result += parseSection(tempSection);
	}

	return result;
}
