function countLetters(myString) {
    var myObject = { };



    for (var i = 0; i < myString.length; i++) {
        var key = myString[i];

        if (key === ' ') continue; // if the key is space ignore the block
        if (myObject[key] === undefined){
            myObject[key] = [i];
        }
        else {
            myObject[key].push(i);
        }

    }
    return myObject;

}

var theCall = countLetters("lighthouse is in the house");
console.log(theCall);