# Welcome to partially-hide-email-phone 👋
![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/AmJaradat01/partially-hide-email-phone#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/AmJaradat01/partially-hide-email-phone/graphs/commit-activity)

### 🏠 [Homepage](https://github.com/AmJaradat01/partially-hide-email-phone#readme)

> A simple utility to partially hide email addresses or phone numbers.

## Features

- Partially hides email addresses (e.g., `exampleemail@domain.com` -> `ex**pl**ma**@domain.com`)
- Partially hides phone numbers (e.g., `62811203898` -> `6281****898`)
- Validates input for proper email and phone number formats
- Lightweight and easy to use

## Install

Install the package using npm:

```sh
npm install partially-hide-email-phone
```

## Usage

Import the module and use the functions to partially hide email addresses and phone numbers:

```js
const hideEmailPhone = require('partially-hide-email-phone');

const email = 'exampleemail@domain.com';
const phoneNumber = '62811203898';

console.log(hideEmailPhone.hideEmail(email)); // Output: ex**pl**ma**@domain.com
console.log(hideEmailPhone.hidePhone(phoneNumber)); // Output: 6281****898
```

## API

### hideEmail(email)

- email (string): The email address to be partially hidden.
- Returns the partially hidden email address.

### hidePhone(phone)

- phone (string): The phone number to be partially hidden.
- Returns the partially hidden phone number.

## Run tests

Run the test suite to ensure everything is working correctly:

```sh
npm run test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## Author

👤 **Ali Jaradat (AmJaradat01@gmail.com)**

* Github: [@AmJaradat01](https://github.com/AmJaradat01)

This project is licensed under the MIT License - see the LICENSE file for details.

```

This implementation should help you enhance the functionality and maintainability of your "partially-hide-email-phone" repository. Let me know if you need further assistance!
```