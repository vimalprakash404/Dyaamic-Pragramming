function countConstruct(target, wordBank ){
 if ( target === "") return 1 ;
let totalCount = 0;

 for (let word of wordBank ){
    if (target.indexOf(word)=== 0){
      const suffix = target.slice(word.length);
      const resultCount= countConstruct(suffix, wordBank);
      totalCount += resultCount ;

    }
 }
 return  totalCount ; 
}
console.log(countConstruct("purple",["purp","p","ur","le","purpl"]))