function feb(n){
    if(n<=2 ) return 1 ;
    return feb(n-1) + feb(n-2)
}

console.log(feb(3));
console.log(feb(4));
console.log(feb(5));
console.log(feb(50));