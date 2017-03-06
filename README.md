# crypto-promise [![npm version](http://img.shields.io/npm/v/crypto-promise.svg?style=flat-square)](https://www.npmjs.org/package/crypto-promise)

> Promise version of Node.js crypto module.

Example
-------

```js
const crypto = require('crypto-promise')

const test = async () => {
  const hash = await crypto.hash('md5')('hello')
  hash.toString('hex') // 5d41402abc4b2a76b9719d911017c592

  const hmac = await crypto.hmac('sha1', 'secret')('hello')
  hmac.toString('hex') // 5112055c05f944f85755efc5cd8970e194e9f45b

  const cipher = await crypto.cipher('aes256', 'secret')('hello')
  cipher.toString('hex') // f824105d6cadf7776b130cd80fdfeabf

  const decipher = await crypto.decipher('aes256', 'secret')('f824105d6cadf7776b130cd80fdfeabf', 'hex')
  decipher.toString() // hello

  const rand = await crypto.randomBytes(16)
  rand.length // 16
}

test()
```
