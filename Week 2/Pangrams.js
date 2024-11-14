function pangrams(s) {
    s = s.toLowerCase();
    
    // Set to track unique letters found imp line
    let letters = new Set();
    
    let regexp = /[a-z]/;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (regexp.test(char)) {
            letters.add(char);
        }
        if (letters.size === 26) {
            return "pangram";
        }
    }
    
    return "not pangram";
}