const bcrypt = require('bcrypt');

async function hash(password) {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

async function main() {
    const password = 'aaa123'
    const _hash = await hash(password)
    console.log(_hash)
    const isMatch = await bcrypt.compare(password, _hash);
    console.log(isMatch)
}
main()
