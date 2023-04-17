// 비동기 함수 예시
function add(a,b, callback) {
  setTimeout(()=>{
    callback(a+b);
  }, 1000)  
}
// 수정 ( 순서대로 출력하고 싶다면 ? )
console.log('[begin] - add(1,2)')  // 실행 1
add(1,2, (s)=>{
  console.log(s)
  console.log('[end] - add(1,2)') // 실행 2
    add(3,4, (s)=>{
      console.log('[begin] - add(3,4)')  // 실행 1
      console.log(s)
      console.log('[end] - add(3,4)') // 실행 2
        add(5,6, (s)=>{
          console.log('[begin] - add(5,6)')  // 실행 1
          console.log(s)
          console.log('[end] - add(5,6)') // 실행 2
        });  // 실행 3
    });  // 실행 3
});  // 실행 3



// console.log('[begin] - add(3,4)')  // 실행 1
// add(3,4, console.log);  // 실행 3
// console.log('[end] - add(3,4)') // 실행 2

// console.log('[begin] - add(5,6)')  // 실행 1
// add(5,6, console.log);  // 실행 3
// console.log('[end] - add(5,6)') // 실행 2

// let total = 0;
// for(let i = 0; i < 1000000000; i++) {
//   total += i;
// }
// console.log(total) // 비동기처리보다 먼저 처리 됨

// JS가 단일 스레드라서 무한루프에 빠지는 경우, 수행하는 프로그램이 완료되야 event loop가 동작함을 알 수 있다.
// Callback을 이용한 비동기 프로그래밍에서는 Callback이 완료됐을 때 수행이 됩니다.


