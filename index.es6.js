const concat = require('concat-stream-promise')
const crypto = require('crypto')
const denodeify = require('es6-denodeify')(Promise)

const cryptoStream = create => (...args) =>
  (data, encoding) => {
    const stream = create(...args)
    stream.end(data, encoding)
    return stream.pipe(concat())
  }

export const hash = cryptoStream(crypto.createHash)
export const hmac = cryptoStream(crypto.createHmac)
export const cipher = cryptoStream(crypto.createCipher)
export const decipher = cryptoStream(crypto.createDecipher)
export const randomBytes = denodeify(crypto.randomBytes)
