# Welcome to partially-hide-email-phone 👋
![Version](https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/AmJaradat01/partially-hide-email-phone#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/AmJaradat01/partially-hide-email-phone/graphs/commit-activity)

### 🏠 [Homepage](https://github.com/AmJaradat01/partially-hide-email-phone#readme)

> Module to hide emails and phone numbers partially

## Install

```sh
npm install partially-hide-email-phone
```
## Usage

```sh
const hideEmailPhone = require('partially-hide-email-phone')
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