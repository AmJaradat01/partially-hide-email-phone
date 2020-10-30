const assert = require('assert')
const maskEmailsPhones = require('../index')

var email = 'exampleemail@domail.com';

console.log(maskEmailsPhones(email));

it('output string has valid masks', () => {
	assert.equal(output, maskEmailsPhones(email))
})