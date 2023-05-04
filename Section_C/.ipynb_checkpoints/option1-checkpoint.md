#### Worst-case Space Complexity Analysis

The `sayNumber` function uses a constant amount of space for its `words`, `tens`, and `suffixes` arrays, which are of length 20,10, and 5. The function also initializes an empty `chunks` array, which may also grow up to the length of the largest number  that can be passed into the function, which is = 15 digits. Therefore, we can say that `chunks` array can contain at most 5 elements, as each element corresponds to a 3digit chunk of the input number.

For each chunk, the function initializes an empty `chunkArr`, which may grow up to legnth 4, as it can contain a 'Hundred' string, a tens place strinng, an ones place string and suffix string. therefore the `chunkArr` can contain at most 4 elements for each of the 5 chunks, that amounts to a total of 20 elements.

The `wordsArr` array is used to hold the string representations of each chunk, and it can grow up to the length of the `chunks` which is 5. Each element in `wordsArr` is a concatenation of strings from ` chunkArr`, so the space used by `wordsArr` depends on the size of largest `chunkArr` referring from line 17. The worst-case space complexity occurs when the largest `chunkArr` contains all four elements, so the total space used by `wordsArr` is at most 20*5=100 elements

In conclusion, the space complexity of the `sayNumber` function is O(1) (constant), as the maximum amount of space used by the function is fixed and independent of the size of the input number