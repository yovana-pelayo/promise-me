/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
  console.log('1. Before async fetch');
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  console.log('2. Async fetch complete');
  const result = await resp.json();
  console.log('3. AFter async fetch');
  return { quote: result[0], totalResults: result.length };
}
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenTryGetQuotes() {
  console.log('1. Before .then fetch');

  const results = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'))
    .catch((error) => console.error('error has occurred!!'));

  console.log('3. After .then fetch');
  return results;
}
/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
  try {
    console.log('1. Before async fetch');
    const res = await fetch('https://futuramaapssi.herokuapp.com/api/quotes/1');
    console.log('2. Async fetch complete');
    const result = await res.json();

    console.log('3. After async fetch');

    return { quote: result[0], totalResults: result.length };
  } catch (error) {
    console.error('error has occurred!!');
  }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
 export function thenGetQuotes() {
  console.log('1. After .then fetch');

  const results = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2. .then fetch complete'));
  console.log('3. After .then fetch');
  return results;
/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function asyncFinallyGetQuotes() {
  try {
    console.log('1. before async fetch');
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    console.log('2. async fetch');
    const results = await resp.json();
    console.log('3. after async fetch');

    return { quote: results[0], totalResults: results.length };
  } catch (error) {
    console.error('Error has occurred!!');
  } finally {
    console.log('All done!');
  }
}
/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
