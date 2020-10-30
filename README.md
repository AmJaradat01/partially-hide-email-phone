# Welcome to partially-masked-email-and-phone 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/AmJaradat01/Partially-mask-email-phone#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/AmJaradat01/Partially-mask-email-phone/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/AmJaradat01/partially-masked-email-and-phone)](https://github.com/AmJaradat01/Partially-mask-email-phone/blob/master/LICENSE)

> Module hides emails and phones partially from an input message

### 🏠 [Homepage](https://github.com/AmJaradat01/Partially-mask-email-phone#readme)

## Install

```sh
npm install partially-masked-email-and-phone
```

## Usage

```sh
const maskEmailsPhones = require('partially-masked-email-and-phone')
```
Example:

```javascript

var email = 'exampleemail@domail.com';

console.log(maskEmailsPhones(email))

var phoneNumber = '62811203898';

console.log(maskEmailsPhones(phoneNumber))

```

The `output` variable will be equal to: 

```javascript

`ex**pl**ma**@domail.com

6281****898
`

```

## Run tests

```sh
mocha tests/*.test.js
```

## Author

👤 **Ali Jaradat (AmJaradat01@gmail.com)**

* Github: [@AmJaradat01](https://github.com/AmJaradat01)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [Ali Jaradat (AmJaradat01@gmail.com)](https://github.com/AmJaradat01).

This project is [MIT](https://github.com/AmJaradat01/Partially-mask-email-phone/blob/master/LICENSE) licensed.