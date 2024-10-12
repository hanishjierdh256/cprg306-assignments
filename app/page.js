import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white">
      <h1 className="text-4xl font-bold mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul className="space-y-4 text-lg">
          <li>
            <Link
              href="/week-2"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 2
            </Link>
          </li>
          <li>
            <Link
              href="/week-3"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 3
            </Link>
          </li>
          <li>
            <Link
              href="/week-4"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 4
            </Link>
          </li>
          <li>
            <Link
              href="/week-5"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 5
            </Link>
          </li>
          <li>
            <Link
              href="/week-6"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 6
            </Link>
          </li>
          <li>
            <Link
              href="/week-7"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 7
            </Link>
          </li>
          <li>
            <Link
              href="/week-8"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 8
            </Link>
          </li>
          <li>
            <Link
              href="/week-9"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 9
            </Link>
          </li>
          <li>
            <Link
              href="/week-10"
              className="hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              Assignment 10
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
