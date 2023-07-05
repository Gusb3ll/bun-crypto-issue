// Using the current createDecipheriv function
import { createDecipheriv } from 'crypto'

const key = Buffer.from('Random', 'utf8')
// Got error when the *iv* value is null
const decipher = createDecipheriv('aes-128-ecb', key, null).setAutoPadding(false)

const data = Buffer.from('randomstringrandomstring', 'utf-8')

const decrypted = decipher.update(data).toString('hex')

console.log(decrypted)
