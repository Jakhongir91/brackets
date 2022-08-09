module.exports = function check(str, bracketsConfig) {
	let hasSubstring = function () {
		for (const brackets of bracketsConfig) {
			if (str.includes(brackets.join(''))) {
				return true;
			}
		}

		return false;
	};

	// 1. каждый подмассив из конфига переводить в строку
	// 2. перебирая конфиг, удалять из данной последовательности строку
	// 3. если в конце перебора остается пустая строка, то последовательность верная

	while (hasSubstring()) {
		bracketsConfig.forEach(brackets => {
			let openCloseBrackets = brackets.join('');

			while (str.includes(openCloseBrackets)) {
				let startIndex = str.indexOf(openCloseBrackets);
				let endIndex = startIndex + openCloseBrackets.length - 1;
				let newString = '';

				for (let i = 0; i < str.length; i++) {
					if (i < startIndex || i > endIndex) {
						newString += str.charAt(i);
					}
				}

				str = newString;
			}
		});
	}

	return str.length === 0;
}
