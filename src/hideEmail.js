const { formatEmail } = require('./utils/formatOutput');
const { validateEmail } = require('./utils/validateInput');

function hideEmail(email) {
  if (!validateEmail(email)) {
    throw new Error('Invalid email address');
  }

  const [localPart, domainPart] = email.split('@');
  const hiddenLocalPart = localPart.substring(0, 2) + '***' + localPart.substring(localPart.length - 1);
  return formatEmail(hiddenLocalPart, domainPart);
}

module.exports = hideEmail;