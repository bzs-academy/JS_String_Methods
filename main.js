/*   
STRING METHODS
-------------------

.length

.indexof()    
.search()

slice(start, end)
substring(start, end)
substr(start, length)

replace()

toUpperCase()
toLowerCase()

concat()

trim()

charAt(position)
charCodeAt(position)

split()

NUMBER METHODS
---------------
toString() 

toFixed()

toPrecision()

valueOf() 

Number()
parseInt() 
parseFloat()

*/
// bir string'in uzunlugunu verir.
// var name = "Ali'nin arabasi";
// var nameUzunluk = name.length;
// console.log(nameUzunluk);

//---------------------------------------
// .indexof("text", baslangic noktasi verilebilir)    ----> -1   veya index numarasi
// .search("text"), ikinci baslangic noktasi parametresi ALMAZ.

// var sehirBul = "istanbul Türkiye'de bir sehir olup Türkiye'de metropol olarak anilir."
// console.log(sehirBul.indexOf('sehir'));
// console.log(sehirBul.indexOf('ankara'));
// console.log(sehirBul.indexOf('Türkiye'));
// console.log(sehirBul.indexOf('Türkiye', 15)); // 15. index numarasindan sonrakini bul
// console.log(sehirBul.indexOf('Türkiye', 45));  // 45. index numarasindan sonrakini bul
// console.log(sehirBul.search('Türkiye'));

//------------------------------------------
// slice(start, end)   --> start dahil, end haric
// substring(start, end)  --> start dahil, end haric
// substr(start, length)  --> start dahil, uzunluk olarak belirtilir.

// var meyveler = "muz kivi kiraz elma";
// var x = meyveler.slice(4,8);
// var y = meyveler.substring(4,14);
// var t = meyveler.substr(9,5);

// var z = meyveler.slice(-4);
// var u = meyveler.slice(-10,-5);
// var p = meyveler.slice(-10);

// console.log(x);
// console.log(y);
// console.log(t);
// console.log(meyveler);
// console.log(z);
// console.log(u);
// console.log(p);


// --------------------------

// replace() ---> bir string ifadeyi baska bir string ifade ile degistiriyor.

// var meyveler = "muz kivi kiraz kivi elma";

// var meyveler = "muz Kivi kiraz kivi elma";

// var newMeyveler = meyveler.replace('muz', 'armut');
// console.log(meyveler.replace('kivi', 'portakal'));

// console.log(newMeyveler);
// console.log(meyveler);

//-------------------------------

// toUpperCase()
// toLowerCase()

// var text = "hello world";
// var textBuyuk = "HELLO WORLD";
// var text1 = text.toUpperCase();
// console.log(text.toUpperCase());
// console.log(text1);
// console.log(textBuyuk.toLowerCase());

//--------------------------------------

// concat()

// var text1 = "hello";
// var text2 = "world";

// var text3 = text1.concat(" ", text2);
// console.log(text3);
// console.log(text1 + ' ' + text2);

//--------------------------------------

// trim()

// var text = "    hello     world     ";
// console.log(text.trim());

//--------------------------------------

// split()

// var text = " hello world";       bastaki boslugu da dikkate aldi ve array'in                                        ilk elemani yapti

// var text = "   hello   world   ";

// var text2 = text.trim().toUpperCase().split(" ");
// var text3 = text.trim().split(" ")[0].toUpperCase();
// console.log(text2);
// console.log(text3);

//--------------------------------------

// charAt(position)  --> bir string ifade icerisindeki index numarali karakteri verir.
// charCodeAt(position)  --> istenen index numarasindaki karakterin ascii kodunu verir.


// var text = "Istanbul";
// console.log(text.charAt(3));

// console.log(text.charCodeAt(5));


// UYGULAMALAR 
// ------------

// 1. verilen string ifadeyi array'e atayacak fonksiyonu yazmak.

// function strToArr () {
//     var text = "hamburg köln frankfurt berlin";

//     text.trim().split(' ');
// }
// console.log(strToArr());
// return olmadan hic birsey SUNMAZ.

// parametresiz fonksiyon
// function strToArr () {
//     var text = "hamburg köln frankfurt berlin";
//     var textSonuc = text.trim().split(' ');
//     return textSonuc;
// }
// console.log(strToArr());

// function strToArr (str, degisken) {
    
//     var textSonuc = str.trim().split(degisken);
//     return textSonuc;
// }

// // var text = "hamburg köln frankfurt berlin";
// // console.log(strToArr(text));

// var text = "hamburg;köln;frankfurt;berlin";
// // console.log(strToArr(text, ';'));
// console.log(strToArr(text, 'a'))



// 2. verilen 3 kelimeden olusan string ifade de ilk kelimenin ilk harfi büyük olacak , diger harfler kucuk olarak muhafaza edilecek.

// var ankara = function (str) {
//     // return str.charAt(0).toUpperCase() + str.slice(1);
//     return (str.charAt(0).toUpperCase()).concat(str.slice(1));
// }

// console.log(ankara("javascript string dersi"));


// var javaDersiNotu  ----> camelCase



// 3.  text = 'javascript string dersi'  ---> javascriptStringDersi ; uc kelimeden olusan string ifadeyi tek kelime olarak camelCase'e cevirme.

function strToCamel (str, degisken) {
    var Arr = str.split(degisken);
    var newArray = [];

    for (var i = 0 ; i < Arr.length ; i++) {
        if ( i === 0 ) {
            newArray.push(Arr[i].toLowerCase());
        } else {
            var newText = '';
            newText = Arr[i].charAt(0).toUpperCase().concat(Arr[i].slice(1));
            newArray.push(newText); 
        }
    }

    return newArray.join('');

}

var text = 'Javascript string dersi';
console.log(strToCamel(text, ' '));
