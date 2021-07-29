const franc = require('franc')
const langs = require('langs')
const input = process.argv[2];
const color = require('colors')
const langCode = franc(input)
if(langCode ==='und'){
    console.log('sorry'.rainbow)
} else {
    const languge = langs.where("3", langCode)
    console.log(languge.name)
}