function capFirst(str){
    str = str.toLowerCase();
    let a = str.split(''),
    s = '';
    a[0] = a[0].toUpperCase();
    for(let i = 0; i < a.length; i++){
        s = s + a[i];
    }
    return s;
}
console.log(capFirst('jaVaScRipt'));