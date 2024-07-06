function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^\+?[0-9]{10,}$/;
    return phoneRegex.test(phone);
  }
  
  module.exports = {
    validateEmail,
    validatePhone,
  };
  