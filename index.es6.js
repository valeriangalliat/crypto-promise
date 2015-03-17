import concat from 'stream-concat-promise'
import crypto from 'crypto'
import Promise from 'promise'

const cryptoStream = create => (...args) =>
  (data, encoding) => {
    const stream = create(...args)
    stream.end(data, encoding)
    return concat(stream)
  }

export const hash = cryptoStream(crypto.createHash)
export const hmac = cryptoStream(crypto.createHmac)
export const cipher = cryptoStream(crypto.createCipher)
export const decipher = cryptoStream(crypto.createDecipher)
export const randomBytes = Promise.denodeify(crypto.randomBytes)
