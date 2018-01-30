/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(numbers){
    var count = "";
    for (var i = 1; i<=numbers; i++){
        count += "ha";
    }
    return count+"!";
}

console.log(laugh(10));
