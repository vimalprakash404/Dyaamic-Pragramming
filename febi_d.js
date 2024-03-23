function feb(n , memo  = {}){
    if (n in memo) return memo[n];

    if (n<= 2) return  1 ;
    memo[n] = feb(n-1, memo) + feb(n-2 , memo)
    return memo[n];
}


console.log(feb(3));
console.log(feb(4));
console.log(feb(5));
console.log(feb(400));