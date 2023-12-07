// function that takes array, Find the smallest & Largest number in Array & do a sum operation on both.
// return output as sum.

function Sum(arr) {
  let sum = 0;

  if (arr.length===0) return 0;
  let filtered=arr.filter(item=>typeof(item)==="number")
  let min=Math.min(...filtered)
  let max=Math.max(...filtered)
  let maxCount=0
  let minCount=0
  arr.forEach(item=>{
    if(item===min)
    {minCount++}
    if(item===max)
    {maxCount++}
  })

sum=(maxCount*max)+(minCount*min)
if(min === max && arr.length > 1){
    sum = min*minCount;
}
console.log(sum, "<<<< Result")
return sum;
}

 Sum([11, 213, 112, 334, 34, 65, "10045"]);
 Sum([11,11,11,11,11, 23,23,23,23]);
Sum([1,1,1,1,1,1])
Sum([100])
// let answer = Sum(arr);

