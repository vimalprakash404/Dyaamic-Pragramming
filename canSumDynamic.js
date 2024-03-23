function canSum(targetSum , numbers , memo = {}){
    if (targetSum === 0 ) return true ;
    if (targetSum < 0 ) return  false ;
    if (targetSum in memo ) return memo[targetSum]
    for (let num of numbers ){
        const reminder  = targetSum -  num ;
        if (canSum(reminder,numbers , memo)=== true ){
            
            memo[targetSum] = true ;
            return memo[targetSum]
        }
    }
    memo[targetSum] =  false
    return memo[targetSum]
}


console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,4]))
console.log(canSum(300,[7,14]))