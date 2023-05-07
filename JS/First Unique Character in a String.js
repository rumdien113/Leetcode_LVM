var firstUniqChar = function(s) {
	const mp = new Map()
	for (let i = 0; i < s.length; i++)
		mp.set(s[i], (mp.get(s[i]) || 0) + 1)
	for (let i = 0; i < s.length; i++)
		if (mp.get(s[i]) === 1)
			return i
	return -1
};