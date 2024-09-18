import Link from 'next/link'
export default function Page(){

  return(
    <main className = "m-4">
    <header><h1>CPRG 306: Web Development 2 - Assignments</h1></header>
    <nav>
      <ul>
        <li><Link href="/week-2">Assignment 2</Link></li>
        <li><Link href="/week-3">Assignment 3</Link></li>
        <li><Link href="/week-4">Assignment 4</Link></li>
        <li><Link href="/week-5">Assignment 5</Link></li>
        <li><Link href="/week-6">Assignment 6</Link></li>
        <li><Link href="/week-7">Assignment 7</Link></li>
        <li><Link href="/week-8">Assignment 8</Link></li>
        <li><Link href="/week-9">Assignment 9</Link></li>
        <li><Link href="/week-10">Assignment 10</Link></li>
      </ul>
    </nav>
    </main>
  )
}