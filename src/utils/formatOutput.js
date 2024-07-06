function formatEmail(localPart, domainPart) {
    return `${localPart}@${domainPart}`;
  }
  
  function formatPhone(phone) {
    return phone.replace(/(\d{2})(\d+)(\d{2})/, '$1***$3');
  }
  
  module.exports = {
    formatEmail,
    formatPhone,
  };
  