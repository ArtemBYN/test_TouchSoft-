function capitalize(str) {
    str = str.toLowerCase();
    let a = str.split('');
    a[0] = a[0].toUpperCase();
    let i = 0;
    let s = '';
    while (i < a.length) {
        s = s + a[i];
        i++;
    };
    return s;
}
console.log(capitalize('jaVaScRipt'));

