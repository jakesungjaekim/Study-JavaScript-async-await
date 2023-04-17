import { setTimeout } from 'timers/promises';

// Async & Await
async function add(a,b) {
  console.log('start')
  const result = await setTimeout(1000, a+b);
  console.log(result)
  console.log('[end]')
  return result;

}

const p = await add(1,2);
console.log(p)

console.log('end')