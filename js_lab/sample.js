function getLongest(los) {
    var longest = los[1];
    for(i=0; i<los.length; i++){
        if(los[i].length > longest.length){
            longest = los[i];
        }
    }
    return longest;
}

names = ['samuel', 'abigiya', 'semere', 'yosef'];

console.log(getLongest(names))