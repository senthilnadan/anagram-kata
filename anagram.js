function anagram(source, target){
    return source.split("").sort().join("") === target.split("").sort().join("") ;
}

module.exports =  anagram; 