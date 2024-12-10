//Credit Card Mask
// return masked string
function maskify(cc) {
return cc.slice(0 -4).replace(/./g '#') + cc.slice(-4)
}

//Is this a triangle?
function isTriangle(a,b,c)
{
  if ((a + b)> c && (a + c)> b && (b + a)> c && (b + c)> a && (c + b)> c && (c + a)> b) {
    return true;
  }else{
    return false;
  }
}
//megjegyzes: tudom, hogy biztos meg lehettett volna rövidebben csinálni de a feladatleírásnak eleget tettem.

//Easy Time Convert
function timeConvert(num) { 
if (num <= 0) {
    return "00:00";
}
const ora = Math.floor(num / 60);
const ebbolperc = num % 60;
if (ora> 9) {
    const hours = "0"+ora;
}else{
    const hours = ora;
}
if (ebbolperc> 9) {
    const min = "0"+ebbolperc;
}else{
    const min = ebbolperc;
}

return hours + ":" + min;

 
}

//Number to digit tiers

function createArrayOfTiers(num) {
    
    let array= [];
    for(let i = 0; i < num.lenght; i++){
      array.push(i);
      array.push(",")
    }
    
    return num;
  
}
//console.log(createArrayOfTiers("420"));