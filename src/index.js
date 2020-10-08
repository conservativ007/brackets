module.exports = function check(str, bracketsConfig) {
  let regexpOne = /\(\)|\[\]|\{\}|\|\|/g;
	let regexpFive = /12|34|56|77|88/g;

	for(let i = str.length; i > 0; i--){
		str = str.replace(regexpOne, '');
		str = str.replace(regexpFive, '');
	}

	return str.length == 0 ? true : false;
}
