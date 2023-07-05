// Using the *deprecated* createDecipher function
import { createCipher, createDecipher } from 'crypto'

const key = Buffer.from('Random', 'utf8')
const decipher = createDecipher('aes-128-ecb', key).setAutoPadding(false)

const data = Buffer.from('randomstringrandomstring', 'utf-8')

const decrypted = decipher.update(data).toString('hex')

console.log(decrypted)
