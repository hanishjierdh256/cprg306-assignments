import Link from 'next/link'
export default function Page(){

  return(
    <>
    <header><h1>CPRG 306: Web Development 2 - Assignments</h1></header>
    <main>
      <ul>
        <li><Link href="/week-2">Assignment 2</Link></li>
      </ul>
    </main>
    </>
  )
}