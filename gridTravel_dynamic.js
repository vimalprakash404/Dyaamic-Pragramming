function gridTravel(r , c ,memo={}) {
    const key =  r+","+c;
    if (r===0 || c===0 ) return  0 ;
    if (r === 1 && c===1) return 1 ;
    if (key in memo) return memo[key];
    memo[key]= gridTravel(r -1 , c,memo) + gridTravel(r , c-1,memo);
    return memo[key];
}

console.log(gridTravel(1,1))
console.log(gridTravel(2,2))
console.log(gridTravel(3,3))
console.log(gridTravel(18,18))