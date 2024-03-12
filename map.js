const arr = [1,2,3,4,5];
console.log(arr);
function transform(i) {
return i*2;
}
const ans = arr.map(transform);
console.log(ans);