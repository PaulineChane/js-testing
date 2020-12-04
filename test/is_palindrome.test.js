const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
    test('isPalindrome() is defined', () => {
        expect(isPalindrome).toBeDefined();
    });

    test('returns true for empty string', () => {
        let isPal = isPalindrome("");
        expect(isPal).toEqual(true);
    });

    test('returns true for one letter string', () => {
        let isPal = isPalindrome("a");
        expect(isPal).toEqual(true);
    }); 
    test('returns true for palindrome w even # characters', () => {
        let isPal = isPalindrome("abba");
        expect(isPal).toEqual(true);
    });

    test('returns true for palindrome w odd # characters', () => {
        let isPal = isPalindrome("aba");
        expect(isPal).toEqual(true);
    });

    test('ignores non-alpha characters', () => {
        let isPal = isPalindrome("a 283928b    93812938*&*a");
        expect(isPal).toEqual(true);
    });

    test('ignores case', () => {
        let isPal = isPalindrome("AbBa");
        expect(isPal).toEqual(true);
    });

    test('returns false for invalid palindrome, even # char', () => {
        let isPal = isPalindrome("AbaB");
        expect(isPal).toEqual(false);
    });

    test('returns false for invalid palindrome, odd # char', () => {
        let isPal = isPalindrome("AbB");
        expect(isPal).toEqual(false);
    });
});
