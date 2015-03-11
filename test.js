const assert = require('assert')
const crypto = require('./')

async () => {
  const hash = await crypto.hash('md5')('hello')
  assert.equal(hash.toString('hex'), '5d41402abc4b2a76b9719d911017c592')

  const hmac = await crypto.hmac('sha1', 'secret')('hello')
  assert.equal(hmac.toString('hex'), '5112055c05f944f85755efc5cd8970e194e9f45b')

  const cipher = await crypto.cipher('aes256', 'secret')('hello')
  assert.equal(cipher.toString('hex'), 'f824105d6cadf7776b130cd80fdfeabf')

  const decipher = await crypto.decipher('aes256', 'secret')('f824105d6cadf7776b130cd80fdfeabf', 'hex')
  assert.equal(decipher.toString(), 'hello')

  const rand = await crypto.randomBytes(16)
  assert.equal(rand.length, 16)
}()
  .then(null, err => setTimeout(() => { throw err }))