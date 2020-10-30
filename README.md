# Welcome to hide-email-phone-partially 👋
![Version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/AmJaradat01/hide-email-phone-partially#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/AmJaradat01/hide-email-phone-partially/graphs/commit-activity)

### 🏠 [Homepage](https://github.com/AmJaradat01/hide-email-phone-partially#readme)

> Module to hide emails and phone numbers partially

## Install

```sh
npm install hide-email-phone-partially
```
## Usage

```sh
const hideEmailPhone = require('hide-email-phone-partially')
```

Example:

 ```sh
var email = 'exampleemail@domail.com';
  
var phoneNumber = '62811203898';

console.log(hideEmailPhone(email));

console.log(hideEmailPhone(phoneNumber));
 ```

The output variable will be equal to:

```sh
`ex**pl**ma**@domail.com
 
6281****898`

```

## Run tests

```sh
npm run test
```

## Author

👤 **Ali Jaradat (AmJaradat01@gmail.com)**

* Github: [@AmJaradat01](https://github.com/AmJaradat01)

## Show your support

Give a ⭐️ if this project helped you!


***