// const check='{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{{'
// function handleCheck(check){
//     let open=0
//     let close=0
//     for(let i of check){
//         if(i === '{'){
//             open++
//         }else if(i === '}') {
//             close++
//         }
//     }
//     if (open === close){
//         return'{}'
//     }else if (open > close){
//         return '{'
//     }else{
//         return '}'
//     }
// }
//
// console.log(handleCheck(check))


const train="...........A......................B..........."

 function handleCheck(train){
  const ind=train.indexOf('A')
  const ind2=train.indexOf('B')
  const i2=Math.floor((ind + ind2)/2 )
  let result=train.split('')
  result[i2] = 'C'
  return result.join('')

 }

console.log(handleCheck(train))