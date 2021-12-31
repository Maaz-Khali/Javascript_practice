let MyAcount = {
    name: 'Maaz',
    income: 0,
    expense:0,
   
}
let addIncome = function (account, amount){
    account.income = account.income + amount;
    
}
let addExpense = function(account, amount){
    account.expense = account.expense + amount;
    
}
addIncome(MyAcount, 25);
addExpense(MyAcount, 12);

let findbalance= function(account){
 account.balance= account.income - account.expense;
 return `${account.name} has $${account.balance} balance. $${account.income} income and $${account.expense} expense`
}

console.log(findbalance(MyAcount))


let resetaccount = function(account){
    account.income=0;
    account.expense=0;
    account.balance=0;
    
}
resetaccount(MyAcount)
console.log(findbalance(MyAcount))


