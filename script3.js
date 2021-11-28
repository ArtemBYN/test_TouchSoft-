function filterStrings(arr, n){
    let newArr = arr.filter(word => word.length <= n);
    console.log(newArr);
}
filterStrings(['I love JS', 'some very long string', 'hell'], 9);
filterStrings(['a', 'ab', 'abc'], 2);