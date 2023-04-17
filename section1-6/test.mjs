import { setTimeout } from "timers/promises";
// 동시성 프로그래밍

async function add(a,b) { 
  const result = await setTimeout(1000, a+b);
  if(Math.random() < 0.5) throw new Error(a+b);
  return result;
}

const p1 = add(1,2);
const p2 = add(3,4);
const p3 = add(5,6);

try {
  const pa = Promise.allSettled([p1,p2,p3]);
  const values = await pa;
  console.log(values);
}

catch(e) {
  console.error(e)
}
  