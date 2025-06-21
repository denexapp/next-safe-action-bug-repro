import { regularAction } from "./regular-action";
import { wrappedAction } from "./wrapped-action";

export default function Home() {
  return (
    <>
      <form action={regularAction}>
        <button type="submit">Regular Action</button>
      </form>
      <form action={wrappedAction}>
        <button type="submit">Wrapped Action</button>
      </form>
    </>
  );
}
