import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <h2>Help Desk</h2>
        <ul>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/tickets">Tickets</Link></li>
        </ul>
    </nav>
  )
}
