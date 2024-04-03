//?1. mehsullarin ucuzdan bahaya siralanmasi
// let products = [
//   {
//     id: 1,
//     name: "Iphone 14 Pro",
//     price: 900,
//   },
//   {
//     id: 2,
//     name: "BMW",
//     price: 20000,
//   },
//   {
//     id: 3,
//     name: "Samsung A70",
//     price: 600,
//   },
//   {
//     id: 4,
//     name: "Iphone 15 Pro Max", // iphone 15 pro max
//     price: 1500,
//   },
// ];
// let printProduct = [];
// products.sort((a, b) => a.price - b.price); //  (-) olarsa a b den öne keçər
// console.log("Ucuzdan bahaliya:");
// products.forEach((product) => {
//   console.log(`${product.name}: ${product.price}`);
// });

//?2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin
// let numbers=[]
// let sum=0
// for (let i=1; i<=5; i++){
// const randnum=Math.floor(Math.random()*100)
// numbers.push(randnum)
// }
// console.log(numbers);
// numbers.forEach(function(num) {
//     sum += num;
// });
// console.log(sum);



//?3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin
//Foreach ve map arreyler ucun istifade olunur.
//foreach arrey icindekileri elementleri tek tek cagirir.
//Map, arrey icindeki her bir element uzerinde eyni emeliyyati aparir.
//for daha genisdir ve kapsam alani coxdur her yerde istifade ede bilerik amma daha asagi seviyyeli bir dongu olaraq qebul edilir

//?4. Json, fetch, api bunlar nedir nece isleyir
//API web tarayıcıları ve sunucu tarafı ortamlarında kullanılır.
//developerlerin app yaratmaq ucun istifade etdikleri emrler, protokollar ve obyektler toplusudu. api ile umumi emeliyyatlar yerine
//yetirmek ucun standart emrleri yeniden yazmaqdan qurtarir

//Json objeler kimidir ancaq key ler hemise dirnaqda verilmelidir
// let "products" = `[
//       {
//         "id": 1,
//         "name": "Iphone 14 Pro",
//         "price": 900,
//       },
// ]`
//backend projelerine ve dosyalara istek gonderir onu istifade ede bilmek ucun
//dosya uzantisi json dur
//json string deyeri olaraq qebul olunur api den melumat cekilende
//parse ile json-i js obyektine cevirmek olur
//stringify ise js obyektini jsona cevirir

//fetch api url lerini promise formatda bize qaytarir?
