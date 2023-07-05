// Using the *deprecated* createDecipher function
import { createDecipher } from 'crypto'

const K = Buffer.from('Random', 'utf8')
const decipher = createDecipher('aes-128-ecb', K).setAutoPadding(false)

const data = Buffer.from('randomstringrandomstring', 'utf-8')

const decrypted = decipher.update(data).toString('hex')

console.log(decrypted)
