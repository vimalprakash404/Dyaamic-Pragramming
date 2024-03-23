function howSum(targetSum , numbers){
    if (targetSum === 0) return [];
    if (targetSum < 0 ) return null;
    for (let num of numbers ){
        const reminder =  targetSum - num ;
        const reminderResult =  howSum(reminder , numbers);
        if(reminderResult !== null ) return [...reminderResult , num];
    }
    return null ;
}


console.log(howSum(7,[2,3]))
console.log(howSum(7,[5,3,4,7]))
console.log(howSum(7,[2,4]))
console.log(howSum(8,[2,3,15]))
console.log(howSum(300,[7,14]))