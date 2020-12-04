const isPalindrome = function (text) {
    let lhs = 0 
    let rhs = text.length - 1
    const letters = "abcdefghijklmnopqrstuvwxyz";

    while(lhs < rhs){
        if(letters.indexOf(text[lhs].toLowerCase()) < 0){
            lhs++;
        } else if (letters.indexOf(text[rhs].toLowerCase()) < 0){
            rhs--;
        } else {
            if(text[lhs].toLowerCase() != text[rhs].toLowerCase()) {
                return false;
            } 
            lhs ++ ;
            rhs --;
        }

    }
    return true;
};

module.exports = isPalindrome;

