// Promise객체를 이용한 비동기 프로그래밍
// then, catch, finally 함수로 콜백으로 비동기 프로그래밍을 할 수 있습니다.

function add(a,b) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      // if( Math.random() < 0.5) {
      //   reject(new Error('calc Error'))
      // } 
      // else 
        resolve(a+b);
      
    },1000)
  })
}

const p = add(1,2);
console.log(p)  // Promise { <pending> }

// const t =  p.then((s) => console.log(s))
//             .catch((e) => console.error(e))
//             .finally(() => console.log('end'))
// console.log(t)

p.then((s) => console.log(s))
p.then((s) => console.log(s + 1))
p.then((s) => console.log(s + 2))


// add(1,2).then((s)=> {
//   console.log(s);
//     add(3,4).then((s) => {
//       console.log(s);
//         add(5,6).then((s) => {
//           console.log(s);
//         })
//     })
// })

add(1,2).then((s)=>{
  console.log(s);
  return add(3,4);
}).then((s)=>{
  console.log(s);
  return add(5,6);
}).then((s)=>{
  console.log(s);
})
