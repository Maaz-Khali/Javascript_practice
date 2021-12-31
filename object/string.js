let isValidPassword = function(password){
    if(password.length <= 8 && password.includes('password') !==true){
        return true
    }
    else{
        return 'enter again'
    }
}

console.log(isValidPassword('maaz'))
console.log(isValidPassword('maazkhalidkhan'))
console.log(isValidPassword('password'))