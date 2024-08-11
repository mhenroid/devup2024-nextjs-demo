import Link from "next/link";
export default async function Home() {
  return (
    <>
      <h1>Sandbox</h1>
      <ul>
        <li>
          <Link href="/nosuchpage">404 Test</Link>
        </li>
        <li>
          <Link href="/redirect">Redirect using middleware</Link>
        </li>
        <li>
          <Link href="/gettimeserver">Get Time (Server Component)</Link>
        </li>
        <li>
          <Link href="/gettimeclient">Get Time (Client Component)</Link>
        </li>
        <li>
          <Link href="/gettimeclienterror">
            Get Time (Client Component) - with hydration error
          </Link>
        </li>
      </ul>

      <h1>To Do App</h1>
      <ul>
        <li>
          <Link href="/todoclient">To Do Client App</Link>
        </li>
        <li>
          <Link href="/todocomposite">To Do Composite App</Link>
        </li>
      </ul>
    </>
  );
}
