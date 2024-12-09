/** @param {string} str */
export const count_vocals = (str) => {
	let map = new Map();
	str.split("").forEach(letter => {
		letter = letter.toLowerCase()
		if("aeiou".includes(letter))
			map.set(letter, (map.get(letter) ?? 0)+1);
	})
	return map;
};
