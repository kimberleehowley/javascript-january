// Checks to see if two input strings are anagrams.

function validAnagram(str1, str2) {
    
    // Compare lengths; immediately return false if lengths different
    if (str1.length !== str2.length) {
        return false; 
    }

    // Create our empty counter objects
    let str1_counter = {}; 
    let str2_counter = {}; 
    
    // Populate: loop through corresponding string; add count to corresponding object
    for (let char of str1) {
        str1_counter[char] = (str1_counter[char] || 0) + 1;
    }

    for (let char of str2) {
        str2_counter[char] = (str2_counter[char] || 0) + 1; 
    }

    // Compare the objects you've created, using keys
    for (let key in str1_counter) {
        // If the key in the first is not in the second, return false
        if(!(key in str2_counter)) {
            return false; 
        }
        // If the value of the key (number of times letter occurs), is different, return false)
        if((str1_counter[key] !== str2_counter[key])){
            return false; 
        }
    }
    // Otherwise, we have an anagram, and should return true!
    return true; 
}