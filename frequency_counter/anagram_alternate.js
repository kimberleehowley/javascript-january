function validAnagram(str1, str2) {
    
    // Compare lengths; immediately exit if lengths differ
    if (str1.length !== str2.length) {
        return false; 
    }

    // Create empty object
    const lookup = {}; 

    // Loop over the first string 
    for (let i = 0; i < str1.length; i++) {
        // Store the letter in the loop that we're looping over
        let letter = str1[i]
        // Is the letter in the dictionary? If yes, increment count value; otherwise, set to 1
        lookup[letter]? lookup[letter] += 1 : lookup[letter] = 1; 
    }

    // Loop over second string
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        // If the letter does not exist, return false, not an anagram 
        if (!lookup[letter]) {
            return false; 
        // Else, decrement the value in the object if it is in str2
        } else {
            lookup[letter] -= 1; 
        }
    }
    // Otherwise, return true, we have an anagram!
    return true; 

}