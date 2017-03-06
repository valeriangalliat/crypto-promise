const crypto = require('crypto')
const denodeify = require('es6-denodeify')()
const concat = require('stream-concat-promise')

const cryptoStream = create => (...args) =>
  (data, encoding) => {
    const stream = create(...args)
    stream.end(data, encoding)
    return concat(stream)
  }

exports.hash = cryptoStream(crypto.createHash)
exports.hmac = cryptoStream(crypto.createHmac)
exports.cipher = cryptoStream(crypto.createCipher)
exports.decipher = cryptoStream(crypto.createDecipher)
exports.randomBytes = denodeify(crypto.randomBytes)
exports.pbkdf2 = denodeify(crypto.pbkdf2)
