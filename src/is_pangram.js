const isPangram = function(text) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alpha.length ; i++){
        if(text.toLowerCase().indexOf(alpha[i]) < 0) return false;
    }
    return true;
};

module.exports = isPangram;