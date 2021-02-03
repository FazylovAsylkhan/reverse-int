module.exports = function reverse(n) {
    let result;

    if (n < 0) {
        result = +String(n * -1).split('').reverse().join('');
    } else {
        result = +String(n).split('').reverse().join('');
    }
    
    return result;
}

