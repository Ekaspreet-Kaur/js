const accountId = 12345
let accountEmail = "ekas@gmail.com"
var accountPassword = "321"
accountCity = "Dehradun"
let accountState;
//accountId = 4567  //not allowed

accountEmail = "ek@ek.com"
accountPassword = "456"
accountCity = "Amritsar"
console.log(accountId);

/*
prefer not to use var because of issue
in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])