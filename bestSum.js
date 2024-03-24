function bestSum(targetSum , numbers , memo = {}){
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [] 
    if (targetSum <0 ) return null ;
    let shortestCombination = null ;
    for (let num of numbers ){
        const reminder = targetSum - num ;
        const reminderResult = bestSum(reminder , numbers , memo );
        if (reminderResult !== null){
            const resultCombination =  [...reminderResult , num];
            if (shortestCombination === null ||resultCombination.length < shortestCombination.length){
                shortestCombination = resultCombination ; 
            }
        }
        
    }
    memo[targetSum]= shortestCombination ;
    return shortestCombination ;
}

console.log(bestSum(7,[5,3,4,7]))
console.log(bestSum(8,[2,3,5]))
