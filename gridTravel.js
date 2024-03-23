function gridTravel(r , c) {
    if (r===0 || c===0 ) return  0 ;
    if (r === 1 && c===1) return 1 ;
    return gridTravel(r -1 , c) + gridTravel(r , c-1);
}

console.log(gridTravel(1,1))
console.log(gridTravel(2,2))
console.log(gridTravel(3,3))
console.log(gridTravel(18,18))