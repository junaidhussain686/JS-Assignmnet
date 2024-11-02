var randomValues = 'ABCSWHDAUERM!@#$%^&^%$#32145278175asandjhrwdasuasdmumasas'
var randomPass = ''
for(var i = 0; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * randomValues.length)
    randomPass += randomValues[randomNum]
}
console.log(randomPass)
