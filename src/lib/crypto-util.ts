// Part of https://github.com/chris-rock/node-crypto-examples
//https://lollyrock.com/posts/nodejs-encryption/
//https://www.w3schools.com/nodejs/ref_crypto.asp
// Nodejs encryption with CTR
var crypto = require('crypto');



export function encrypt(text: string) {
    var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'utf8', 'hex')
    mystr += mykey.final('hex');
    return mystr;
}

export function decrypt(text: string) {
    var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
    var mystr = mykey.update(text, 'hex', 'utf8')
    mystr += mykey.final('utf8');

    return mystr;
}

var hw = encrypt("hello world")
// outputs hello world
console.log(hw);
console.log(decrypt(hw));