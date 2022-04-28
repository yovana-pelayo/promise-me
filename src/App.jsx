import {
  asyncGetQuotes,
  asyncTryGetQuotes,
  thenGetQuotes,
  thenTryGetQuotes,
} from './services/promise-me';
export default function App() {
  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        Async Get Quotes
      </button>
      <button onClick={async () => console.log(await thenTryGetQuotes())}>
        Then Get Quotes
      </button>
      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        Async Try Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        Then Get Quotes
      </button>
      <button onClick={async () => console.log(await ())}>
        Async Get Quotes
      </button>
    </>
  );
}
