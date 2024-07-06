const { validatePhone, formatPhone } = require('./utils/validateInput');

function hidePhone(phone) {
  if (!validatePhone(phone)) {
    throw new Error('Invalid phone number');
  }

  const hiddenPhone = phone.substring(0, 2) + '***' + phone.substring(phone.length - 2);
  return formatPhone(hiddenPhone);
}

module.exports = hidePhone;
