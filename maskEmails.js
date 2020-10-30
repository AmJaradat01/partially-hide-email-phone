const extractEmails = require('./lib/regExp/emails')
const mask = require('./lib/mask/index')

module.exports = function hideEmail(email) {
    return email.replace(/(..)(.{1,2})(?=.*@)/g,(_, a, b) => a + '*'.repeat(b.length));
}
