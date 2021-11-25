let str = 'jaVaScRipt';

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





// let str = "каждый охотник желает знать";  

// function capitalize(str) {

//  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})

// }

// console.log(capitalize(str));