import {AccountRegex} from "./AccountRegex";

let accountRegex=new AccountRegex();
let validAcount:string[]=['123456','abcxyz','______','_123abc','abc123_'];
let invalidAcount:string[]=['12345','abcxy','.@','1234_','abcd_'];

for(let account of validAcount){
    let isvalid:boolean=accountRegex.validate(account);
    console.log('Account is '+account+' is valid '+isvalid);
}
for(let account of invalidAcount){
    let isvalid:boolean=accountRegex.validate(account);
    console.log('Account is '+account+' is valid '+isvalid);
}