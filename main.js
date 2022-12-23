"use strict";
exports.__esModule = true;
var AccountRegex_1 = require("./AccountRegex");
var accountRegex = new AccountRegex_1.AccountRegex();
var validAcount = ['123456', 'abcxyz', '______', '_123abc', 'abc123_'];
var invalidAcount = ['12345', 'abcxy', '.@', '1234_', 'abcd_'];
for (var _i = 0, validAcount_1 = validAcount; _i < validAcount_1.length; _i++) {
    var account = validAcount_1[_i];
    var isvalid = accountRegex.validate(account);
    console.log('Account is ' + account + ' is valid ' + isvalid);
}
for (var _a = 0, invalidAcount_1 = invalidAcount; _a < invalidAcount_1.length; _a++) {
    var account = invalidAcount_1[_a];
    var isvalid = accountRegex.validate(account);
    console.log('Account is ' + account + ' is valid ' + isvalid);
}
