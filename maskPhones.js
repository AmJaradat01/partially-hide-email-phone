const extractPhones = require('./lib/regExp/phones')
const mask = require('./lib/mask/index')

module.exports = function maskPhones(input) {
	const phones = extractPhones(input)
	const localPartIndex = 3
	const domainIndex = 2

	let output = input

	phones.forEach(phone => {
		const replacement = mask(phone, localPartIndex, domainIndex)
		output = output.split(phone).join(replacement)
	})

	return output
}
