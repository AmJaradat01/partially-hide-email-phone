# ⚠️ DEPRECATED

This package has been **deprecated** and replaced by [**DataVeil**](https://github.com/AmJaradat01/dataveil).

## Migration

```bash
npm uninstall partially-hide-email-phone
npm install dataveil
```

## New Features in DataVeil

- 🔒 Enhanced security with input validation
- 📱 Format preservation for phone numbers
- 🌳 Nested JSON masking with dot notation
- 🛡️ Protection against injection attacks
- 🚀 Zero dependencies
- 📦 Full TypeScript support

## Quick Migration Example

**Old:**
```javascript
const { hideEmail } = require('partially-hide-email-phone');
hideEmail('user@example.com');
```

**New:**
```javascript
const { DataVeil } = require('dataveil');
DataVeil.maskEmail('user@example.com');
```

See the [DataVeil documentation](https://github.com/AmJaradat01/dataveil#readme) for the complete API reference.
